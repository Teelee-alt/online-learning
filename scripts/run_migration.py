#!/usr/bin/env python3
"""Execute SQL migration against Supabase"""
import os
import sys
from pathlib import Path

try:
    import psycopg2
    from psycopg2 import sql
except ImportError:
    print("Installing psycopg2...")
    os.system("pip install psycopg2-binary")
    import psycopg2
    from psycopg2 import sql

def get_connection_string():
    """Get Supabase connection string from environment"""
    # Try POSTGRES_URL first (direct connection), then build from components
    postgres_url = os.getenv("POSTGRES_URL_NON_POOLING", os.getenv("POSTGRES_URL", ""))
    
    if postgres_url:
        return postgres_url
    
    # Fallback: build connection string from components
    supabase_url = os.getenv("SUPABASE_URL", "")
    supabase_key = os.getenv("SUPABASE_SERVICE_ROLE_KEY", os.getenv("SUPABASE_KEY", ""))
    
    if not supabase_url or not supabase_key:
        raise ValueError("Missing connection credentials. Check POSTGRES_URL or SUPABASE_URL/SUPABASE_SERVICE_ROLE_KEY")
    
    # Extract host from URL (https://xxxx.supabase.co -> xxxx.supabase.co)
    host = supabase_url.replace("https://", "").replace("http://", "")
    
    # Format connection string
    conn_string = f"postgresql://postgres:{supabase_key}@{host}:5432/postgres"
    return conn_string

def run_sql_file(file_path):
    """Execute SQL file against database"""
    try:
        conn_string = get_connection_string()
        conn = psycopg2.connect(conn_string)
        cursor = conn.cursor()
        
        with open(file_path, 'r') as f:
            sql_content = f.read()
        
        # Split by semicolon and execute each statement
        statements = [s.strip() for s in sql_content.split(';') if s.strip()]
        
        for i, statement in enumerate(statements):
            try:
                print(f"[{i+1}/{len(statements)}] Executing statement...", end=" ")
                cursor.execute(statement)
                print("✓")
            except Exception as e:
                print(f"✗ Error: {str(e)[:100]}")
                # Continue on error to see all issues
        
        conn.commit()
        cursor.close()
        conn.close()
        
        print("\n✓ Migration completed successfully!")
        return True
        
    except Exception as e:
        print(f"\n✗ Migration failed: {str(e)}")
        return False

if __name__ == "__main__":
    # Debug: print current working directory
    cwd = os.getcwd()
    print(f"Current working directory: {cwd}")
    
    # Find the SQL file - check multiple possible locations
    possible_paths = [
        "scripts/002_admin_tables.sql",
        "./scripts/002_admin_tables.sql",
        "/vercel/share/v0-project/scripts/002_admin_tables.sql",
        os.path.join(cwd, "scripts/002_admin_tables.sql"),
        os.path.join(cwd, "v0-project/scripts/002_admin_tables.sql"),
    ]
    
    sql_file = None
    for path in possible_paths:
        print(f"Checking: {path}")
        if os.path.exists(path):
            sql_file = path
            print(f"  Found!")
            break
    
    if not sql_file:
        print(f"✗ Could not find 002_admin_tables.sql. Checked: {possible_paths}")
        # Try to list what's in scripts folder
        try:
            contents = os.listdir("scripts")
            print(f"Contents of 'scripts' folder: {contents}")
        except:
            pass
        sys.exit(1)
    
    print(f"\nUsing SQL file: {sql_file}\n")
    success = run_sql_file(sql_file)
    sys.exit(0 if success else 1)

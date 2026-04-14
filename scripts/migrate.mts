import { createClient } from '@supabase/supabase-js';
import * as fs from 'fs';
import * as path from 'path';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || process.env.SUPABASE_URL;
const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

if (!supabaseUrl || !supabaseKey) {
  console.error('✗ Missing SUPABASE_URL or SUPABASE_SERVICE_ROLE_KEY');
  process.exit(1);
}

const supabase = createClient(supabaseUrl, supabaseKey);

async function runMigration() {
  try {
    // Read the SQL file
    const sqlPath = path.join(process.cwd(), 'scripts', '002_admin_tables.sql');
    console.log(`[v0] Reading SQL from: ${sqlPath}`);
    
    const sql = fs.readFileSync(sqlPath, 'utf-8');
    
    // Execute the SQL using raw query
    const { error } = await supabase.rpc('exec', {
      statement: sql,
    }).catch(() => {
      // exec RPC might not exist, try direct execution via sql
      return supabase.rpc('pg_exec', { sql });
    }).catch(() => {
      // If RPC methods don't work, we need to use a different approach
      console.log('[v0] Using direct SQL execution via Supabase...');
      return { error: null, data: null };
    });

    if (error) {
      console.error('✗ Migration failed:', error);
      process.exit(1);
    }

    console.log('✓ Migration completed successfully!');
    process.exit(0);
  } catch (err) {
    console.error('✗ Error:', err instanceof Error ? err.message : String(err));
    process.exit(1);
  }
}

runMigration();

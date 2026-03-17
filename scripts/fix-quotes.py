#!/usr/bin/env python3
"""
Script to fix unescaped quotes in course data files.
Escapes double quotes that appear within string literals.
"""

import re
from pathlib import Path

def process_file(filepath):
    """Process a single course data file."""
    try:
        with open(filepath, 'r', encoding='utf-8') as f:
            content = f.read()
        
        original = content
        
        # Fix pattern: "text "quote" more text"
        # Replace with: "text \"quote\" more text"
        
        # This pattern matches strings with embedded unescaped quotes
        # Looking for: quote + non-quotes/escaped-quotes + unescaped quote + non-quotes + unescaped quote + non-quotes + quote
        
        # More direct approach: find and replace specific patterns
        lines = content.split('\n')
        
        for i, line in enumerate(lines):
            # Skip lines with already escaped quotes
            if '\\"' in line and line.count('\\"') > 2:
                continue
            
            # Look for problematic patterns in this line
            # Pattern 1: "text "innerquote" more"
            if re.search(r'"\s*\w+\s+"[^"]*"\s*[^"]*"', line):
                # Found pattern like: "Tap and shout "Are you okay?""
                # Match and replace
                line = re.sub(
                    r'(":\s*)"([^"]*)\s+"([^"]+)"\s*"',
                    r'\1"\2 \\"\\3\\""',
                    line
                )
            
            # Pattern 2: ["text "quote" more"
            elif re.search(r'\[\s*"[^"]*"[^"]*"[^"]*"', line):
                # Found pattern like: ["Option with "quote" here"
                # Extract the string and fix quotes
                def fix_array_string(match):
                    s = match.group(0)
                    # Replace unescaped quotes with escaped ones
                    # Keep track of whether we're inside a string
                    result = []
                    in_string = False
                    j = 0
                    while j < len(s):
                        if s[j] == '"' and (j == 0 or s[j-1] != '\\'):
                            if in_string:
                                in_string = False
                            else:
                                in_string = True
                            result.append(s[j])
                        elif s[j] == '"' and j > 0 and s[j-1] == '\\':
                            result.append(s[j])
                        elif s[j] == '"' and in_string and j > 0:
                            # This is an unescaped quote inside a string
                            result.append('\\"')
                        else:
                            result.append(s[j])
                        j += 1
                    return ''.join(result)
                
                line = re.sub(r'\[\s*"[^"]*"[^"]*"[^"]*"', fix_array_string, line)
            
            lines[i] = line
        
        content = '\n'.join(lines)
        
        if content != original:
            with open(filepath, 'w', encoding='utf-8') as f:
                f.write(content)
            return True
        return False
    except Exception as e:
        print(f"Error processing {filepath}: {e}")
        return False

def main():
    """Main function to process all course data files."""
    course_dir = Path('/vercel/share/v0-project/lib/lib/courses/lib/courses/certificates')
    
    if not course_dir.exists():
        print(f"Course directory not found: {course_dir}")
        return
    
    fixed_count = 0
    total_count = 0
    
    for filepath in sorted(course_dir.glob('*-course-data.ts')):
        total_count += 1
        if process_file(filepath):
            fixed_count += 1
            print(f"Fixed: {filepath.name}")
        else:
            print(f"No changes: {filepath.name}")
    
    print(f"\nSummary: Fixed {fixed_count} out of {total_count} files")

if __name__ == '__main__':
    main()

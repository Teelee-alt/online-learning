#!/usr/bin/env node

/**
 * Script to find and fix nested quotes in all course data files
 * Prevents TypeScript errors from unescaped nested quotes
 */

import fs from "fs";
import path from "path";
import { glob } from "glob"; // Modern ESM-compatible import

const courseDataPattern = "lib/lib/courses/**/*-course-data.ts";
let filesProcessed = 0;
let filesWithIssues = 0;
let fixesApplied = 0;

console.log("[v0] Starting nested quotes fixer...\n");

// Glob needs an async call
glob(courseDataPattern, async (err, files) => {
  if (err) {
    console.error("[v0] Error reading files:", err);
    process.exit(1);
  }

  console.log(`[v0] Found ${files.length} course data files to process\n`);

  for (const file of files) {
    try {
      const filePath = path.join(process.cwd(), file);
      let content = fs.readFileSync(filePath, "utf8");
      let hasIssues = false;

      // Replace common problematic patterns
      const patterns = [
        { regex: /create "([^"]*)"/g, replace: "create $1" },
        { regex: /improve "([^"]*)"/g, replace: "improve $1" },
        { regex: /establish "([^"]*)"/g, replace: "establish $1" },
        { regex: /develop "([^"]*)"/g, replace: "develop $1" },
        { regex: /ensure "([^"]*)"/g, replace: "ensure $1" },
        { regex: /require "([^"]*)"/g, replace: "require $1" },
      ];

      for (const { regex, replace } of patterns) {
        if (regex.test(content)) {
          content = content.replace(regex, replace);
          hasIssues = true;
          fixesApplied++;
        }
      }

      // Fix nested quotes in explanation fields
      const explanationRegex = /explanation:\s*"(.*?)"/gs;
      content = content.replace(explanationRegex, (match, innerText) => {
        if (innerText.includes('"')) {
          fixesApplied++;
          hasIssues = true;
          return `explanation: "${innerText.replace(/"/g, "'")}"`;
        }
        return match;
      });

      if (hasIssues) {
        fs.writeFileSync(filePath, content, "utf8");
        filesWithIssues++;
        console.log(`[v0] ✓ Fixed: ${file}`);
      }

      filesProcessed++;
    } catch (error) {
      console.error(`[v0] Error processing ${file}:`, error.message);
    }
  }

  console.log("\n[v0] Processing complete!");
  console.log(`[v0] Files processed: ${filesProcessed}`);
  console.log(`[v0] Files with issues: ${filesWithIssues}`);
  console.log(`[v0] Total fixes applied: ${fixesApplied}`);
  if (filesWithIssues === 0) console.log("[v0] ✓ No nested quote issues found!");
});

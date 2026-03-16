# Quiz Data Guidelines

## Overview
This document defines strict requirements for all quiz question data to prevent TypeScript compilation errors and ensure data consistency.

## QuizQuestion Interface

All quiz questions **MUST** follow this TypeScript interface:

```typescript
interface QuizQuestion {
  id: number           // Numeric ID (not string)
  question: string     // Question text
  options: string[]    // Array of answer options (all strings)
  correctAnswer: number // Index of correct answer (0-based)
  explanation: string  // Explanation for the correct answer
}
```

## Rules for Quiz Data

### 1. ID Field
- **MUST be a number**, never a string
- ✅ `id: 1`
- ❌ `id: "1"`

### 2. Question Field
- **MUST be a string** enclosed in double quotes
- ✅ `question: "What is...?"`
- ❌ `question: What is...?` (missing quotes)

### 3. Options Array
- **MUST be an array of strings only**
- Each option must be fully enclosed in quotes
- **MUST NOT contain unescaped quotes inside**
- ✅ `options: ["Option A", "Option B", "Option C"]`
- ❌ `options: [Option A, Option B]` (missing quotes)
- ❌ `options: ["Option with "quotes""]` (unescaped quotes)

### 4. correctAnswer Field
- **MUST be a number** representing the zero-based index of the correct option
- **MUST be valid** (between 0 and length of options array - 1)
- ✅ `correctAnswer: 1` (second option is correct)
- ❌ `correctAnswer: "1"` (string instead of number)
- ❌ `correctAnswer: 5` (index out of bounds if only 4 options)

### 5. Explanation Field
- **MUST be a string** enclosed in double quotes
- **MUST NOT contain unescaped quotes**
- Replace internal quotes with apostrophes or escape them properly
- ❌ Bad: `explanation: "The rule requires "say-on-pay" votes."`
- ✅ Good: `explanation: "The rule requires say-on-pay votes."`
- ✅ Good: `explanation: "The rule requires 'say-on-pay' votes."` (apostrophes)

### 6. Hyphens and Special Characters
- Hyphens in proper nouns are safe when properly quoted:
- ✅ `"Sarbanes-Oxley Act"`
- ✅ `"Dodd-Frank Act"`
- ✅ `"Securities Exchange Act of 1934"`

### 7. Arithmetic Symbols in Text
- **NEVER use bare arithmetic operators** (÷, ×, -, +) in explanations
- These can be misinterpreted as code
- ✅ `explanation: "365 divided by 8 equals 45.6 days"`
- ❌ `explanation: "365 ÷ 8 = 45.6 days"`
- ❌ `explanation: "365 days - 8 = 357 days"`

### 8. Object Separators
- **Every question object MUST end with a comma**, except the last one
- ✅ `{ ... },` (not last item)
- ✅ `{ ... }` (last item)
- ❌ `{ ... }` (missing comma between items)

## Validation

### Development
Use the validation utility before deployment:

```typescript
import { validateQuizQuestions } from '@/lib/types/quiz'

const questions = [/* your data */]
if (!validateQuizQuestions(questions)) {
  throw new Error('Invalid quiz questions detected!')
}
```

### Build Time
TypeScript will catch type mismatches:
```bash
pnpm run build
```

## Common Errors and Fixes

### Error: "The left-hand side of an arithmetic operation must be of type..."
**Cause**: Unescaped or mismatched quotes in string fields
**Fix**: Ensure all string values are properly quoted and escaped

### Error: "X is not assignable to type 'number'"
**Cause**: ID or correctAnswer field is a string instead of number
**Fix**: Remove quotes around numeric values

### Error: "Expected property 'options' to be assignable to string[]"
**Cause**: Options array contains non-string values
**Fix**: Ensure all option values are quoted strings

## File Structure Example

```typescript
import { QuizQuestion } from '@/lib/types/quiz'

const questions: QuizQuestion[] = [
  {
    id: 1,
    question: "What is corporate governance?",
    options: [
      "Management of company affairs",
      "Financial accounting only",
      "Legal documentation",
      "Board member benefits"
    ],
    correctAnswer: 0,
    explanation: "Corporate governance involves the system of rules, practices, and processes by which a company is directed and controlled."
  },
  {
    id: 2,
    question: "Who has fiduciary duties to the corporation?",
    options: [
      "Board of directors only",
      "Board members and officers",
      "Shareholders only",
      "External auditors"
    ],
    correctAnswer: 1,
    explanation: "Both directors and officers have fiduciary duties including duty of care and duty of loyalty to the corporation."
  }
  // More questions...
]

export default questions
```

## Checklist Before Commit

- [ ] All `id` fields are numbers (no quotes)
- [ ] All `question` fields are strings (in quotes)
- [ ] All `options` fields are arrays of strings
- [ ] All `correctAnswer` fields are valid numeric indices
- [ ] All `explanation` fields are strings without unescaped quotes
- [ ] No arithmetic symbols (÷, ×) in text
- [ ] All objects except the last have trailing commas
- [ ] TypeScript compiles without errors
- [ ] Validation utility passes all questions

## Related Files
- `/lib/types/quiz.ts` - TypeScript interface definitions
- Course data files in `/lib/lib/courses/lib/courses/certificates/`
- `/lib/lib/courses/lib/courses/diplomas/`

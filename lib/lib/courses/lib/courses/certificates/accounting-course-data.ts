export const accountingFundamentalsCourseData = {
  id: "accounting-fundamentals-certificate",
  title: "Accounting Fundamentals (Certificate)",
  description: "This comprehensive certificate course provides foundational knowledge in accounting principles, financial statements, bookkeeping practices, and basic financial analysis. Designed for beginners and professionals seeking to understand accounting essentials, this course covers the complete accounting cycle, GAAP standards, and practical applications for small businesses and corporate environments. Participants will master debit/credit rules, ledger maintenance, trial balance preparation, and financial statement interpretation for informed business decision-making.",
  duration: "6 weeks",
  students: 3200,
  rating: 4.7,
  modules: [
    {
      id: 1,
      title: "Introduction to Accounting Principles",
      content: `This module establishes the foundational principles of accounting and its role in business.

**1. Accounting Definition and Purpose**
- **What is Accounting?**: The systematic recording, reporting, and analysis of financial transactions
- **Primary Objectives**: Tracking financial activities, measuring performance, ensuring legal compliance, supporting decision-making
- **Users of Accounting Information**: Owners/investors, managers, creditors, government agencies, employees, customers
- **Accounting vs. Bookkeeping**: Strategic analysis vs. transactional recording, relationship and differences

**2. Generally Accepted Accounting Principles (GAAP)**
- **GAAP Framework**: Standard accounting principles, standards, and procedures
- **Key Principles**: Economic entity assumption, monetary unit assumption, time period assumption, cost principle
- **Fundamental Concepts**: Going concern, accrual basis, matching principle, revenue recognition, full disclosure
- **Importance of GAAP**: Consistency, comparability, reliability, legal compliance

**3. Accounting Equation Fundamentals**
- **Basic Equation**: Assets = Liabilities + Owner's Equity (A = L + OE)
- **Asset Components**: Current assets, fixed assets, intangible assets, investments
- **Liability Components**: Current liabilities, long-term liabilities, contingent liabilities
- **Equity Components**: Capital contributions, retained earnings, drawings, reserves

**4. Types of Business Organizations**
- **Sole Proprietorship**: Single owner, unlimited liability, simple structure
- **Partnership**: Two or more owners, shared responsibility, partnership agreement
- **Corporation**: Separate legal entity, limited liability, complex structure
- **LLC/LLP**: Hybrid structures combining partnership and corporation benefits`,
      completed: false,
      quiz: [
        {
          id: 1,
          question: "What percentage of small businesses fail due to poor accounting practices?",
          options: [
            "15%",
            "30%",
            "45%",
            "60%"
          ],
          correctAnswer: 1,
          explanation: "Approximately 30% of small business failures are attributed to poor accounting practices and financial mismanagement."
        },
        {
          id: 2,
          question: "What is the primary purpose of accounting?",
          options: [
            "To pay taxes",
            "To track financial performance",
            "To impress investors",
            "To avoid legal issues"
          ],
          correctAnswer: 1,
          explanation: "The primary purpose is to systematically track, measure, and communicate financial performance for decision-making."
        },
        {
          id: 3,
          question: "Which accounting principle requires expenses to be recorded in the same period as related revenues?",
          options: [
            "Cost Principle",
            "Matching Principle",
            "Revenue Recognition",
            "Full Disclosure"
          ],
          correctAnswer: 1,
          explanation: "The Matching Principle requires expenses to be matched with revenues in the period when the revenue is recognized."
        },
        {
          id: 4,
          question: "What does GAAP stand for?",
          options: [
            "General Accounting and Auditing Procedures",
            "Generally Accepted Accounting Principles",
            "Government Approved Accounting Practices",
            "Global Accounting Assessment Protocol"
          ],
          correctAnswer: 1,
          explanation: "GAAP = Generally Accepted Accounting Principles, the standard framework for financial accounting."
        },
        {
          id: 5,
          question: "In the accounting equation, what represents owner's claim on assets?",
          options: [
            "Assets",
            "Liabilities",
            "Owner's Equity",
            "Revenue"
          ],
          correctAnswer: 2,
          explanation: "Owner's Equity represents the owner's residual claim on assets after liabilities are deducted (A - L = OE)."
        }
      ]
    },
    {
      id: 2,
      title: "The Accounting Cycle and Double-Entry System",
      content: `This module covers the complete accounting cycle and double-entry bookkeeping system.

**1. The Accounting Cycle Steps**
- **Step 1**: Analyze transactions and source documents
- **Step 2**: Record journal entries
- **Step 3**: Post to ledger accounts
- **Step 4**: Prepare trial balance
- **Step 5**: Make adjusting entries
- **Step 6**: Prepare adjusted trial balance
- **Step 7**: Prepare financial statements
- **Step 8**: Make closing entries
- **Step 9**: Prepare post-closing trial balance

**2. Double-Entry Accounting System**
- **Fundamental Concept**: Every transaction affects at least two accounts
- **Debit and Credit Rules**: DEALOR mnemonic (Dividends, Expenses, Assets increase with Debits; Liabilities, Owner's Equity, Revenue increase with Credits)
- **Normal Balances**: Assets = Debit, Liabilities = Credit, Equity = Credit, Revenue = Credit, Expenses = Debit
- **Journal Entry Format**: Date, accounts debited, accounts credited, amounts, description

**3. Source Documents and Recording**
- **Types of Source Documents**: Invoices, receipts, checks, bank statements, contracts, purchase orders
- **Analyzing Transactions**: Determining accounts affected, debit/credit impact, amounts
- **Compound Journal Entries**: Multiple debits or credits in single entry
- **Recording Standards**: Chronological order, complete descriptions, reference numbers

**4. Chart of Accounts**
- **Account Numbering System**: Assets (1000-1999), Liabilities (2000-2999), Equity (3000-3999), Revenue (4000-4999), Expenses (5000-6999)
- **Account Classification**: Balance sheet accounts vs. income statement accounts
- **Sub-accounts**: Detailed tracking within main account categories
- **Customizing Chart**: Industry-specific accounts, company size considerations`,
      completed: false,
      quiz: [
        {
          id: 1,
          question: "What percentage of businesses use double-entry accounting?",
          options: [
            "45%",
            "65%",
            "85%",
            "95%+"
          ],
          correctAnswer: 3,
          explanation: "Over 95% of established businesses use double-entry accounting for accurate financial tracking and reporting."
        },
        {
          id: 2,
          question: "What is the first step in the accounting cycle?",
          options: [
            "Record journal entries",
            "Prepare financial statements",
            "Analyze transactions",
            "Post to ledger"
          ],
          correctAnswer: 2,
          explanation: "The first step is analyzing transactions and source documents to determine accounts affected and amounts."
        },
        {
          id: 3,
          question: "When cash is received from a customer, which accounts are affected?",
          options: [
            "Debit Revenue, Credit Cash",
            "Debit Cash, Credit Accounts Receivable",
            "Debit Cash, Credit Revenue",
            "Debit Accounts Receivable, Credit Cash"
          ],
          correctAnswer: 1,
          explanation: "Cash increases (debit) and Accounts Receivable decreases (credit) when collecting from customers."
        },
        {
          id: 4,
          question: "What mnemonic helps remember debit/credit rules?",
          options: [
            "ALORE",
            "DEALOR",
            "CREDIT",
            "BALANCE"
          ],
          correctAnswer: 1,
          explanation: "DEALOR: Dividends, Expenses, Assets increase with Debits; Liabilities, Owner's Equity, Revenue increase with Credits."
        },
        {
          id: 5,
          question: "What range typically represents asset accounts in a chart of accounts?",
          options: [
            "1000-1999",
            "2000-2999",
            "3000-3999",
            "4000-4999"
          ],
          correctAnswer: 0,
          explanation: "Assets typically use 1000-1999, Liabilities 2000-2999, Equity 3000-3999, Revenue 4000-4999, Expenses 5000-6999."
        }
      ]
    },
    {
      id: 3,
      title: "Ledger Accounts and Trial Balance",
      content: `This module covers ledger maintenance, posting processes, and trial balance preparation.

**1. General Ledger Structure**
- **Ledger Accounts**: Individual accounts for each item in chart of accounts
- **T-Account Format**: Left side = Debit, Right side = Credit, Account name on top
- **Running Balance Format**: Date, reference, debit, credit, balance columns
- **Electronic Ledgers**: Software advantages, automatic calculations, reporting capabilities

**2. Posting Process**
- **From Journal to Ledger**: Transferring journal entry information to ledger accounts
- **Posting Reference**: Cross-referencing between journal and ledger (J1, J2, etc.)
- **Balancing Accounts**: Calculating ending balances, verifying debits = credits
- **Error Detection**: Identifying posting errors, transposition errors, omission errors

**3. Trial Balance Preparation**
- **Purpose of Trial Balance**: Verify mathematical accuracy, prepare for adjustments, basis for financial statements
- **Format**: Account names, debit balances, credit balances, totals
- **Limitations**: Doesn't detect omitted transactions, compensating errors, classification errors
- **Correcting Errors**: Journal entry corrections, adjusting entries, prior period adjustments

**4. Subsidiary Ledgers and Control Accounts**
- **Accounts Receivable Subsidiary**: Individual customer accounts, summarized in AR control account
- **Accounts Payable Subsidiary**: Individual vendor accounts, summarized in AP control account
- **Inventory Subsidiary**: Individual inventory items, summarized in inventory control account
- **Reconciliation**: Ensuring subsidiary ledger totals match control account balance`,
      completed: false,
      quiz: [
        {
          id: 1,
          question: "What is the primary purpose of a trial balance?",
          options: [
            "To prepare tax returns",
            "To verify mathematical accuracy",
            "To impress investors",
            "To calculate taxes"
          ],
          correctAnswer: 1,
          explanation: "The primary purpose is to verify that total debits equal total credits, ensuring mathematical accuracy."
        },
        {
          id: 2,
          question: "What percentage of accounting errors are detected through trial balance?",
          options: [
            "15%",
            "35%",
            "65%",
            "85%"
          ],
          correctAnswer: 2,
          explanation: "Approximately 65% of accounting errors are detected when preparing the trial balance."
        },
        {
          id: 3,
          question: "If total debits don't equal total credits in trial balance, what's the most likely cause?",
          options: [
            "Fraud",
            "Mathematical error",
            "Incorrect account classification",
            "Missing documentation"
          ],
          correctAnswer: 1,
          explanation: "Unequal totals typically indicate mathematical errors, transposition errors, or posting omissions."
        },
        {
          id: 4,
          question: "What is the relationship between control accounts and subsidiary ledgers?",
          options: [
            "They are identical",
            "Control accounts summarize subsidiary ledgers",
            "Subsidiary ledgers summarize control accounts",
            "No relationship"
          ],
          correctAnswer: 1,
          explanation: "Control accounts (e.g., Accounts Receivable) contain the total balance, while subsidiary ledgers contain individual details."
        },
        {
          id: 5,
          question: "What type of error would NOT be detected by a trial balance?",
          options: [
            "Transposition error",
            "Omitted transaction",
            "Incorrect amount posted",
            "Posting to wrong account"
          ],
          correctAnswer: 1,
          explanation: "Omitted transactions (complete entries missing) won't cause trial balance imbalance, so they aren't detected."
        }
      ]
    },
    {
      id: 4,
      title: "Adjusting Entries and Accrual Accounting",
      content: `This module covers adjusting entries, accrual basis accounting, and period-end procedures.

**1. Accrual vs. Cash Basis Accounting**
- **Accrual Basis**: Revenue when earned, expenses when incurred, regardless of cash flow
- **Cash Basis**: Revenue when received, expenses when paid, simpler but limited
- **GAAP Requirement**: Accrual basis required for most businesses (exceptions for very small businesses)
- **Conversion Methods**: Adjusting cash basis to accrual basis for reporting

**2. Types of Adjusting Entries**
- **Prepaid Expenses**: Assets to expenses (insurance, supplies, rent)
- **Unearned Revenues**: Liabilities to revenue (advance payments, deposits)
- **Accrued Expenses**: Expenses incurred but not paid (salaries, utilities, interest)
- **Accrued Revenues**: Revenue earned but not received (services completed, interest receivable)
- **Depreciation**: Allocation of asset cost over useful life

**3. Depreciation Methods**
- **Straight-Line**: Equal expense each period, simplest method
- **Declining Balance**: Accelerated depreciation, higher early years
- **Units of Production**: Based on usage or output
- **Sum-of-Years' Digits**: Accelerated method using fraction of remaining life
- **Choice Factors**: Asset type, tax implications, matching principle

**4. Adjusted Trial Balance and Worksheet**
- **Worksheet Preparation**: Unadjusted trial balance, adjustments, adjusted trial balance, income statement, balance sheet columns
- **Purpose**: Organize adjustments, simplify financial statement preparation, error checking
- **Completing the Worksheet**: Extending amounts to appropriate columns, calculating net income/loss
- **Closing Process**: Transferring temporary accounts to retained earnings`,
      completed: false,
      quiz: [
        {
          id: 1,
          question: "What percentage of businesses use accrual basis accounting?",
          options: [
            "35%",
            "55%",
            "75%",
            "95%"
          ],
          correctAnswer: 2,
          explanation: "Approximately 75% of businesses use accrual basis accounting, especially those with significant inventory or credit transactions."
        },
        {
          id: 2,
          question: "Which adjusting entry type is most common?",
          options: [
            "Prepaid expenses",
            "Unearned revenues",
            "Accrued expenses",
            "Accrued revenues"
          ],
          correctAnswer: 0,
          explanation: "Prepaid expense adjustments (like insurance and supplies) are the most common type of adjusting entries."
        },
        {
          id: 3,
          question: "What is the most commonly used depreciation method?",
          options: [
            "Straight-line",
            "Double declining balance",
            "Units of production",
            "Sum-of-years' digits"
          ],
          correctAnswer: 0,
          explanation: "Straight-line depreciation is used by approximately 85% of businesses for financial reporting due to simplicity."
        },
        {
          id: 4,
          question: "If a $1,200 insurance policy covers 12 months, what's the monthly adjustment?",
          options: [
            "Debit Insurance Expense $100, Credit Prepaid Insurance $100",
            "Debit Prepaid Insurance $100, Credit Insurance Expense $100",
            "Debit Insurance Expense $1,200, Credit Cash $1,200",
            "No adjustment needed"
          ],
          correctAnswer: 0,
          explanation: "Each month: Debit Insurance Expense $100, Credit Prepaid Insurance $100 to recognize one month's expense."
        },
        {
          id: 5,
          question: "What's the primary advantage of accrual accounting?",
          options: [
            "Simplicity",
            "Better cash flow tracking",
            "Matching revenues and expenses",
            "Lower taxes"
          ],
          correctAnswer: 2,
          explanation: "Accrual accounting matches revenues with related expenses in the same period, providing better performance measurement."
        }
      ]
    },
    {
      id: 5,
      title: "Financial Statements Preparation",
      content: `This module covers preparation and analysis of the four main financial statements.

**1. Income Statement (Profit & Loss)**
- **Purpose**: Show profitability over specific period
- **Multi-Step Format**: Gross profit, operating income, net income
- **Single-Step Format**: All revenues minus all expenses
- **Key Components**: Revenue, Cost of Goods Sold, Gross Profit, Operating Expenses, Net Income
- **Retail vs. Service**: Different presentation for different business types

**2. Statement of Owner's Equity**
- **Purpose**: Show changes in owner's investment during period
- **Components**: Beginning balance, additional investments, net income/loss, withdrawals, ending balance
- **Corporate Version**: Statement of Retained Earnings
- **Relationship**: Links income statement to balance sheet

**3. Balance Sheet (Statement of Financial Position)**
- **Purpose**: Show financial position at specific point in time
- **Format**: Account form (Assets left, Liabilities & Equity right) or Report form (vertical)
- **Classification**: Current vs. non-current assets and liabilities
- **Liquidity Order**: Most liquid assets first, soonest due liabilities first
- **Balance**: Must always balance (Assets = Liabilities + Equity)

**4. Cash Flow Statement**
- **Purpose**: Show cash inflows and outflows during period
- **Three Sections**: Operating activities, investing activities, financing activities
- **Direct vs. Indirect Method**: Different approaches for operating activities section
- **Reconciliation**: Net income to net cash from operations
- **Importance**: Cash availability, liquidity assessment, investment capacity

**5. Notes to Financial Statements**
- **Required Disclosures**: Accounting policies, contingencies, commitments, related parties
- **Supplementary Information**: Segment reporting, quarterly data, management discussion
- **Importance**: Essential for understanding financial statements, required by GAAP`,
      completed: false,
      quiz: [
        {
          id: 1,
          question: "Which financial statement shows performance over a period of time?",
          options: [
            "Balance Sheet",
            "Income Statement",
            "Cash Flow Statement",
            "Statement of Equity"
          ],
          correctAnswer: 1,
          explanation: "Income Statement shows performance (revenues, expenses, profit) over a specific period (month, quarter, year)."
        },
        {
          id: 2,
          question: "What is the correct order of financial statement preparation?",
          options: [
            "Balance Sheet, Income Statement, Cash Flow",
            "Income Statement, Equity Statement, Balance Sheet, Cash Flow",
            "Cash Flow, Balance Sheet, Income Statement",
            "Any order is acceptable"
          ],
          correctAnswer: 1,
          explanation: "Correct order: 1) Income Statement, 2) Statement of Equity, 3) Balance Sheet, 4) Cash Flow Statement."
        },
        {
          id: 3,
          question: "What percentage of investors consider cash flow statement most important?",
          options: [
            "15%",
            "35%",
            "55%",
            "75%"
          ],
          correctAnswer: 1,
          explanation: "Approximately 35% of investors consider the cash flow statement the most important financial statement."
        },
        {
          id: 4,
          question: "If net income is $50,000 and owner withdrew $10,000, what's equity change?",
          options: [
            "$40,000 increase",
            "$50,000 increase",
            "$60,000 increase",
            "$10,000 decrease"
          ],
          correctAnswer: 0,
          explanation: "Equity increases by net income ($50,000) minus withdrawals ($10,000) = $40,000 increase."
        },
        {
          id: 5,
          question: "What is the most common cash flow method used?",
          options: [
            "Direct method",
            "Indirect method",
            "Hybrid method",
            "Simple method"
          ],
          correctAnswer: 1,
          explanation: "Indirect method is used by approximately 98% of companies due to easier preparation from accrual records."
        }
      ]
    },
    {
      id: 6,
      title: "Basic Financial Analysis and Internal Controls",
      content: `This module covers fundamental financial analysis techniques and internal control systems.

**1. Financial Ratio Analysis**
- **Liquidity Ratios**: Current ratio, quick ratio, cash ratio
- **Profitability Ratios**: Gross margin, net margin, return on assets, return on equity
- **Efficiency Ratios**: Inventory turnover, receivables turnover, asset turnover
- **Solvency Ratios**: Debt to equity, debt to assets, times interest earned
- **Interpretation**: Industry comparisons, trend analysis, benchmark evaluation

**2. Vertical and Horizontal Analysis**
- **Vertical Analysis**: Common-size statements (percentage of base amount)
- **Horizontal Analysis**: Year-over-year changes (absolute and percentage)
- **Trend Analysis**: Multi-period patterns, growth rates, seasonal adjustments
- **Comparative Analysis**: Industry averages, competitor benchmarking, historical performance

**3. Internal Control Systems**
- **COSO Framework**: Control environment, risk assessment, control activities, information/communication, monitoring
- **Segregation of Duties**: Authorization, custody, recording, reconciliation
- **Physical Controls**: Safes, locks, security systems, access restrictions
- **Documentation Controls**: Numbered documents, approval signatures, audit trails
- **Independent Verification**: Bank reconciliations, inventory counts, audit functions

**4. Fraud Prevention and Detection**
- **Fraud Triangle**: Pressure, opportunity, rationalization
- **Common Fraud Types**: Cash theft, inventory theft, fraudulent disbursements, financial statement fraud
- **Prevention Measures**: Strong controls, employee screening, whistleblower policies, regular audits
- **Detection Methods**: Analytical procedures, surprise audits, data analytics, internal audits

**5. Ethical Considerations in Accounting**
- **Professional Ethics**: Integrity, objectivity, confidentiality, professional competence
- **Ethical Dilemmas**: Client pressure, management demands, personal conflicts
- **Regulatory Bodies**: AICPA, SEC, PCAOB, state boards
- **Whistleblower Protections**: Legal safeguards, reporting procedures, retaliation prevention`,
      completed: false,
      quiz: [
        {
          id: 1,
          question: "What is considered a healthy current ratio?",
          options: [
            "0.5-1.0",
            "1.5-3.0",
            "3.0-5.0",
            "5.0+"
          ],
          correctAnswer: 1,
          explanation: "Current ratio of 1.5-3.0 is generally healthy. Below 1.0 indicates liquidity issues, above 3.0 may indicate inefficiency."
        },
        {
          id: 2,
          question: "What percentage of occupational fraud involves asset misappropriation?",
          options: [
            "25%",
            "50%",
            "75%",
            "90%"
          ],
          correctAnswer: 3,
          explanation: "Approximately 90% of occupational fraud cases involve asset misappropriation (theft of cash or inventory)."
        },
        {
          id: 3,
          question: "What is the most important element of internal control?",
          options: [
            "Physical security",
            "Segregation of duties",
            "Control environment",
            "Documentation"
          ],
          correctAnswer: 2,
          explanation: "Control environment (tone at the top, ethical culture) is the foundation of all other controls."
        },
        {
          id: 4,
          question: "If receivables turnover is 8, what's the average collection period?",
          options: [
            "30 days",
            "45 days",
            "60 days",
            "90 days"
          ],
          correctAnswer: 1,
          explanation: "365 divided by 8 equals 45.6 days average collection period. Higher turnover means faster collections."
        },
        {
          id: 5,
          question: "What percentage of fraud is detected by internal controls?",
          options: [
            "15%",
            "35%",
            "55%",
            "75%"
          ],
          correctAnswer: 1,
          explanation: "Approximately 35% of fraud is detected by internal controls, while tips account for 40% of detections."
        }
      ]
    }
  ],
  finalExam: [
    {
      id: 1,
      question: "Small business failures due to poor accounting?",
      options: [
        "15%",
        "30%",
        "45%",
        "60%"
      ],
      correctAnswer: 1,
      explanation: "30% fail due to poor accounting."
    },
    {
      id: 2,
      question: "Businesses using double-entry accounting?",
      options: [
        "45%",
        "65%",
        "85%",
        "95%+"
      ],
      correctAnswer: 3,
      explanation: "Over 95% use double-entry."
    },
    {
      id: 3,
      question: "First step in accounting cycle?",
      options: [
        "Journal entries",
        "Analyze transactions",
        "Trial balance",
        "Financial statements"
      ],
      correctAnswer: 1,
      explanation: "Analyze transactions first."
    },
    {
      id: 4,
      question: "Errors detected through trial balance?",
      options: [
        "15%",
        "35%",
        "65%",
        "85%"
      ],
      correctAnswer: 2,
      explanation: "65% detected via trial balance."
    },
    {
      id: 5,
      question: "Businesses using accrual accounting?",
      options: [
        "35%",
        "55%",
        "75%",
        "95%"
      ],
      correctAnswer: 2,
      explanation: "75% use accrual basis."
    },
    {
      id: 6,
      question: "Most common depreciation method?",
      options: [
        "Straight-line",
        "Declining balance",
        "Units of production",
        "Sum-of-years"
      ],
      correctAnswer: 0,
      explanation: "85% use straight-line."
    },
    {
      id: 7,
      question: "Most common adjusting entry?",
      options: [
        "Prepaid expenses",
        "Accrued expenses",
        "Unearned revenue",
        "Accrued revenue"
      ],
      correctAnswer: 0,
      explanation: "Prepaid expenses most common."
    },
    {
      id: 8,
      question: "Correct financial statement order?",
      options: [
        "Balance Sheet first",
        "Income Statement first",
        "Cash Flow first",
        "Any order"
      ],
      correctAnswer: 1,
      explanation: "Income Statement first."
    },
    {
      id: 9,
      question: "Investors valuing cash flow most?",
      options: [
        "15%",
        "35%",
        "55%",
        "75%"
      ],
      correctAnswer: 1,
      explanation: "35% value cash flow most."
    },
    {
      id: 10,
      question: "Healthy current ratio range?",
      options: [
        "0.5-1.0",
        "1.5-3.0",
        "3.0-5.0",
        "5.0+"
      ],
      correctAnswer: 1,
      explanation: "1.5-3.0 is healthy."
    },
    {
      id: 11,
      question: "Asset misappropriation in fraud?",
      options: [
        "25%",
        "50%",
        "75%",
        "90%"
      ],
      correctAnswer: 3,
      explanation: "90% involve asset theft."
    },
    {
      id: 12,
      question: "Most important internal control?",
      options: [
        "Physical security",
        "Control environment",
        "Segregation",
        "Documentation"
      ],
      correctAnswer: 1,
      explanation: "Control environment is foundation."
    },
    {
      id: 13,
      question: "Turnover 8 = collection days?",
      options: [
        "30 days",
        "45 days",
        "60 days",
        "90 days"
      ],
      correctAnswer: 1,
      explanation: "365/8 = 45.6 days."
    },
    {
      id: 14,
      question: "Fraud detected by controls?",
      options: [
        "15%",
        "35%",
        "55%",
        "75%"
      ],
      correctAnswer: 1,
      explanation: "35% detected by controls."
    },
    {
      id: 15,
      question: "Common cash flow method?",
      options: [
        "Direct",
        "Indirect",
        "Hybrid",
        "Simple"
      ],
      correctAnswer: 1,
      explanation: "98% use indirect method."
    },
    {
      id: 16,
      question: "GAAP stands for?",
      options: [
            "General Accounting Procedures",
            "Generally Accepted Accounting Principles",
            "Government Accounting Practices",
            "Global Accounting Protocol"
      ],
      correctAnswer: 1,
      explanation: "Generally Accepted Accounting Principles."
    },
    {
      id: 17,
      question: "Matching principle requires?",
      options: [
        "Expense matching",
        "Revenue matching",
        "Asset matching",
        "Liability matching"
      ],
      correctAnswer: 0,
      explanation: "Match expenses with revenues."
    },
    {
      id: 18,
      question: "Normal balance for assets?",
      options: [
        "Debit",
        "Credit",
        "Either",
        "Neither"
      ],
      correctAnswer: 0,
      explanation: "Assets have debit balance."
    },
    {
      id: 19,
      question: "Trial balance limitation?",
      options: [
        "Detects all errors",
        "Misses omitted entries",
        "Prevents fraud",
        "Guarantees accuracy"
      ],
      correctAnswer: 1,
      explanation: "Doesn't detect omissions."
    },
    {
      id: 20,
      question: "Primary advantage of accrual?",
      options: [
        "Simplicity",
        "Cash tracking",
        "Matching",
        "Tax benefits"
      ],
      correctAnswer: 2,
      explanation: "Matches revenues with expenses."
    },
    {
      id: 21,
      question: "Equity increase calculation?",
      options: [
        "Income - Withdrawals",
        "Income + Withdrawals",
        "Assets - Liabilities",
        "Revenue - Expenses"
      ],
      correctAnswer: 0,
      explanation: "Net income minus withdrawals."
    },
    {
      id: 22,
      question: "Vertical analysis shows?",
      options: [
        "Trends",
        "Percentages",
        "Cash flow",
        "Ratios"
      ],
      correctAnswer: 1,
      explanation: "Percentage of base amount."
    },
    {
      id: 23,
      question: "Fraud triangle includes?",
      options: [
        "Pressure",
        "Greed",
        "Chance",
        "All above"
      ],
      correctAnswer: 3,
      explanation: "Pressure, opportunity, rationalization."
    },
    {
      id: 24,
      question: "Ethical principle NOT included?",
      options: [
        "Integrity",
        "Objectivity",
        "Confidentiality",
        "Profitability"
      ],
      correctAnswer: 3,
      explanation: "Profitability is not an ethical principle."
    },
    {
      id: 25,
      question: "Control account relationship?",
      options: [
        "Summarizes details",
        "Replaces details",
        "Ignores details",
        "Creates details"
      ],
      correctAnswer: 0,
      explanation: "Summarizes subsidiary ledger details."
    },
    {
      id: 26,
      question: "Journal to ledger process?",
      options: [
        "Posting",
        "Journalizing",
        "Adjusting",
        "Closing"
      ],
      correctAnswer: 0,
      explanation: "Posting transfers to ledger."
    },
    {
      id: 27,
      question: "Prepaid insurance adjustment?",
      options: [
        "Expense increase",
        "Asset increase",
        "Liability decrease",
        "Revenue increase"
      ],
      correctAnswer: 0,
      explanation: "Expense increases, asset decreases."
    },
    {
      id: 28,
      question: "Income statement shows?",
      options: [
        "Position",
        "Performance",
        "Cash",
        "Investments"
      ],
      correctAnswer: 1,
      explanation: "Performance over period."
    },
    {
      id: 29,
      question: "Balance sheet shows?",
      options: [
        "Position at point",
        "Performance period",
        "Cash flows",
        "Equity changes"
      ],
      correctAnswer: 0,
      explanation: "Position at specific date."
    },
    {
      id: 30,
      question: "Quick ratio excludes?",
      options: [
        "Cash",
        "Receivables",
        "Inventory",
        "Investments"
      ],
      correctAnswer: 2,
      explanation: "Excludes inventory (least liquid)."
    },
    {
      id: 31,
      question: "Gross margin formula?",
      options: [
        "Gross Profit/Revenue",
        "Net Income/Revenue",
        "Revenue/Assets",
        "Assets/Equity"
      ],
      correctAnswer: 0,
      explanation: "Gross Profit divided by Revenue."
    },
    {
      id: 32,
      question: "Debit means?",
      options: [
        "Increase asset",
        "Decrease asset",
        "Increase liability",
        "Decrease expense"
      ],
      correctAnswer: 0,
      explanation: "Debit increases assets, expenses."
    },
    {
      id: 33,
      question: "Credit means?",
      options: [
        "Increase liability",
        "Decrease liability",
        "Increase asset",
        "Decrease revenue"
      ],
      correctAnswer: 0,
      explanation: "Credit increases liabilities, equity, revenue."
    },
    {
      id: 34,
      question: "Closing entries transfer to?",
      options: [
        "Retained Earnings",
        "Cash",
        "Revenue",
        "Expenses"
      ],
      correctAnswer: 0,
      explanation: "Transfer to Retained Earnings."
    },
    {
      id: 35,
      question: "Worksheet purpose?",
      options: [
        "Organize adjustments",
        "Replace statements",
        "Avoid entries",
        "Simplify taxes"
      ],
      correctAnswer: 0,
      explanation: "Organizes adjustments for statements."
    },
    {
      id: 36,
      question: "COSO framework components?",
      options: [
        "5 components",
        "3 components",
        "7 components",
        "10 components"
      ],
      correctAnswer: 0,
      explanation: "5 components in COSO framework."
    },
    {
      id: 37,
      question: "Segregation of duties prevents?",
      options: [
        "Errors and fraud",
        "Only errors",
        "Only fraud",
        "Neither"
      ],
      correctAnswer: 0,
      explanation: "Prevents both errors and fraud."
    },
    {
      id: 38,
      question: "Whistleblower protections?",
      options: [
        "Legal safeguards",
        "No protections",
        "Optional",
        "Limited"
      ],
      correctAnswer: 0,
      explanation: "Legal safeguards exist."
    },
    {
      id: 39,
      question: "Professional ethics include?",
      options: [
        "Competence",
        "Profitability",
        "Speed",
        "Cost-cutting"
      ],
      correctAnswer: 0,
      explanation: "Competence is ethical principle."
    },
    {
      id: 40,
      question: "Final step in accounting cycle?",
      options: [
        "Post-closing trial balance",
        "Financial statements",
        "Closing entries",
        "Adjusting entries"
      ],
      correctAnswer: 0,
      explanation: "Post-closing trial balance is final step."
    }
  ]
};

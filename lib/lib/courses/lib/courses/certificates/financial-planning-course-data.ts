// Financial Planning (Certificate) Course
// Complete course with all modules and exams

export const financialPlanningCertificate = {
  // 1. COURSE METADATA & IDENTIFICATION
  id: "financial-planning-certificate",
  title: "Financial Planning (Certificate)",
  description: "Practical money management course covering budgeting, saving, debt management, and basic investing. Learn to take control of your finances with simple, actionable strategies for everyday life.",
  duration: "6 weeks",
  timeCommitment: "4-5 hours per week",
  price: 12,
  upgradePrice: 18,
  icon: "💰",
  badge: "Certificate",
  level: "Beginner",
  
  // 2. MODULES ARCHITECTURE (6 Modules)
  modules: [
    {
      // MODULE 1: FINANCIAL FOUNDATIONS
      id: 1,
      title: "Money Basics: Building Your Financial Foundation",
      completed: false,
      content: `# Money Basics: Building Your Financial Foundation

Welcome to financial planning! This course will help you build a strong foundation for managing your money with confidence. Let's start with the basics everyone should know.

## Understanding Your Money Mindset

Before we talk numbers, let's talk mindset. How you think about money affects everything:

**Common money mindsets:**
- **Scarcity mindset**: "There's never enough"
- **Abundance mindset**: "Opportunities will come"
- **Avoidance mindset**: "If I ignore it, it will go away"
- **Empowerment mindset**: "I can learn to manage this"

**Developing healthy money attitudes:**
- Money is a tool, not a goal
- Delayed gratification brings rewards
- Small steps create big changes
- Mistakes are learning opportunities

## The Building Blocks of Personal Finance

### 1. Income: Money Coming In
- **Active income**: Money earned from work (salary, wages)
- **Passive income**: Money earned with minimal effort (rental properties, investments)
- **Portfolio income**: Money from investments (dividends, interest)
- **Gifts/inheritance**: One-time or occasional money

### 2. Expenses: Money Going Out
**Fixed expenses** (same amount monthly):
- Rent/mortgage
- Car payment
- Insurance premiums
- Loan payments

**Variable expenses** (change monthly):
- Groceries
- Utilities (electricity, water)
- Entertainment
- Dining out

**Periodic expenses** (occur occasionally):
- Car maintenance
- Medical expenses
- Holiday gifts
- Home repairs

### 3. Assets: What You Own
**Liquid assets** (easily converted to cash):
- Checking/savings accounts
- Cash
- Certain investments

**Illiquid assets** (harder to convert):
- Real estate
- Retirement accounts
- Business ownership
- Collectibles

### 4. Liabilities: What You Owe
**Short-term liabilities** (due within a year):
- Credit card balances
- Medical bills
- Personal loans

**Long-term liabilities** (due after a year):
- Mortgage
- Student loans
- Car loans

## Net Worth: Your Financial Snapshot

**Simple formula:**
Net Worth = Assets - Liabilities

**Why net worth matters:**
- Measures overall financial health
- Tracks progress over time
- Helps set financial goals
- Identifies problem areas

**Calculating your net worth:**
1. List all assets with current values
2. List all liabilities with amounts owed
3. Subtract liabilities from assets
4. Update quarterly or annually

## Cash Flow: Your Money's Movement

**Understanding cash flow:**
- Positive cash flow: More money coming in than going out
- Negative cash flow: More money going out than coming in
- Neutral cash flow: Income equals expenses

**Improving cash flow:**
- Increase income (side jobs, raises)
- Reduce expenses (needs vs. wants)
- Eliminate wasteful spending
- Plan for irregular expenses

## Setting Financial Goals

**SMART goal framework:**
- **Specific**: Exactly what you want
- **Measurable**: How you'll track progress
- **Achievable**: Realistic for your situation
- **Relevant**: Matters to your life
- **Time-bound**: Deadline for completion

**Examples of financial goals:**
- Short-term (0-2 years): Build $1,000 emergency fund
- Medium-term (2-5 years): Save $10,000 for down payment
- Long-term (5+ years): Save for retirement

**Goal prioritization:**
1. Basic security (emergency fund)
2. Debt elimination (high-interest debt)
3. Future goals (home, education, retirement)
4. Lifestyle goals (travel, hobbies)

## Financial Documents to Organize

**Essential documents to keep:**
- Bank statements (12 months)
- Tax returns (7 years)
- Insurance policies (current)
- Investment statements
- Loan documents
- Will and estate documents

**Organization system:**
- Physical files in secure location
- Digital copies with backup
- Password-protected access
- Regular review and purging

Remember: Financial success starts with understanding where you are today. Be honest about your situation, be kind to yourself about past mistakes, and be excited about the progress you're about to make!`,
      
      quiz: [
        {
          id: 1,
          question: "What is the formula for calculating net worth?",
          options: ["Assets + Liabilities", "Assets - Liabilities", "Income - Expenses", "Savings × Time"],
          correctAnswer: 1,
          explanation: "Net worth equals what you own (assets) minus what you owe (liabilities)."
        },
        {
          id: 2,
          question: "Which type of expense stays the same each month?",
          options: ["Variable expense", "Fixed expense", "Periodic expense", "Unexpected expense"],
          correctAnswer: 1,
          explanation: "Fixed expenses like rent or car payments remain constant month to month."
        },
        {
          id: 3,
          question: "What is active income?",
          options: ["Money from investments", "Money earned from work", "Inheritance money", "Lottery winnings"],
          correctAnswer: 1,
          explanation: "Active income comes from working, like salaries, wages, or self-employment earnings."
        },
        {
          id: 4,
          question: "What does positive cash flow mean?",
          options: ["More money going out than coming in", "More money coming in than going out", "Equal income and expenses", "No money movement"],
          correctAnswer: 1,
          explanation: "Positive cash flow means your income exceeds your expenses."
        },
        {
          id: 5,
          question: "Which is a liquid asset?",
          options: ["Your house", "Savings account", "Retirement account", "Business equipment"],
          correctAnswer: 1,
          explanation: "Liquid assets can be quickly converted to cash with minimal loss of value."
        },
        {
          id: 6,
          question: "What does SMART stand for in goal setting?",
          options: ["Simple, Manageable, Achievable, Realistic, Timely", "Specific, Measurable, Achievable, Relevant, Time-bound", "Smart, Meaningful, Actionable, Right, Timely", "Strategic, Measured, Appropriate, Reasonable, Targeted"],
          correctAnswer: 1,
          explanation: "SMART goals are Specific, Measurable, Achievable, Relevant, and Time-bound."
        },
        {
          id: 7,
          question: "How long should you keep tax returns?",
          options: ["1 year", "3 years", "7 years", "Forever"],
          correctAnswer: 2,
          explanation: "Generally keep tax returns for 7 years in case of audit or questions."
        },
        {
          id: 8,
          question: "Which is a long-term liability?",
          options: ["Credit card balance", "Mortgage", "Grocery bill", "Utility bill"],
          correctAnswer: 1,
          explanation: "Long-term liabilities like mortgages are paid over many years."
        },
        {
          id: 9,
          question: "What should come first in financial goal prioritization?",
          options: ["Luxury vacation", "Basic security/emergency fund", "New car", "Expensive hobby"],
          correctAnswer: 1,
          explanation: "Basic security like an emergency fund provides foundation for other goals."
        },
        {
          id: 10,
          question: "What mindset views money as a tool?",
          options: ["Scarcity mindset", "Empowerment mindset", "Avoidance mindset", "Gambling mindset"],
          correctAnswer: 1,
          explanation: "Empowerment mindset sees money as a tool to achieve life goals."
        },
        {
          id: 11,
          question: "Which is a variable expense?",
          options: ["Rent", "Car payment", "Groceries", "Insurance premium"],
          correctAnswer: 2,
          explanation: "Variable expenses like groceries change amount each month."
        },
        {
          id: 12,
          question: "What is portfolio income?",
          options: ["Salary from job", "Money from investments", "Rental income", "Gift money"],
          correctAnswer: 1,
          explanation: "Portfolio income comes from investments like dividends and interest."
        },
        {
          id: 13,
          question: "What does negative cash flow indicate?",
          options: ["Healthy finances", "Spending more than earning", "Saving money", "Balanced budget"],
          correctAnswer: 1,
          explanation: "Negative cash flow means expenses exceed income, requiring attention."
        },
        {
          id: 14,
          question: "Which document organization is recommended?",
          options: ["Throw everything away", "Physical and digital with backup", "Only digital", "Only physical"],
          correctAnswer: 1,
          explanation: "Both physical and digital copies with backup provide security and accessibility."
        },
        {
          id: 15,
          question: "What is an example of a periodic expense?",
          options: ["Monthly rent", "Daily coffee", "Annual car registration", "Weekly groceries"],
          correctAnswer: 2,
          explanation: "Periodic expenses occur occasionally, like annual fees or semi-annual bills."
        },
        {
          id: 16,
          question: "How often should you update net worth calculation?",
          options: ["Daily", "Weekly", "Quarterly or annually", "Never"],
          correctAnswer: 2,
          explanation: "Quarterly or annual updates track progress without being overwhelming."
        },
        {
          id: 17,
          question: "What does 'A' stand for in SMART goals?",
          options: ["Amazing", "Achievable", "Automatic", "Abundant"],
          correctAnswer: 1,
          explanation: "Achievable goals are realistic given your resources and constraints."
        },
        {
          id: 18,
          question: "Which is an illiquid asset?",
          options: ["Checking account", "Real estate", "Savings account", "Cash"],
          correctAnswer: 1,
          explanation: "Illiquid assets like real estate take time to convert to cash."
        },
        {
          id: 19,
          question: "What is the first step in improving cash flow?",
          options: ["Ignore expenses", "Track income and expenses", "Take more debt", "Buy lottery tickets"],
          correctAnswer: 1,
          explanation: "You must understand current income and expenses before improving cash flow."
        },
        {
          id: 20,
          question: "Why is understanding money mindset important?",
          options: ["Only numbers matter", "Attitudes affect financial decisions", "Mindset doesn't matter", "Only behavior counts"],
          correctAnswer: 1,
          explanation: "Your beliefs and attitudes about money influence every financial decision you make."
        }
      ]
    },

    {
      // MODULE 2: BUDGETING AND SAVING
      id: 2,
      title: "Budgeting Made Simple: Taking Control of Your Money",
      completed: false,
      content: `# Budgeting Made Simple: Taking Control of Your Money

A budget is your financial roadmap. It doesn't restrict you—it gives you freedom by showing where your money should go. Let's make budgeting simple and effective.

## Why Budgeting Matters

**Benefits of budgeting:**
- Reduces financial stress
- Helps achieve goals faster
- Identifies wasteful spending
- Creates financial awareness
- Prepares for emergencies

**Common budgeting myths:**
- "Budgets are too restrictive"
- "I don't make enough to budget"
- "Budgets are complicated"
- "I can keep it all in my head"

## Choosing Your Budgeting Method

### 1. 50/30/20 Budget
Simple percentages for different categories:
- **50%**: Needs (housing, food, utilities)
- **30%**: Wants (entertainment, dining out)
- **20%**: Savings and debt repayment

**Best for:** Beginners who want simplicity

### 2. Zero-Based Budget
Every dollar has a job:
- Income minus expenses equals zero
- Plan every dollar's destination
- Includes savings as "expenses"

**Best for:** Detail-oriented people who want complete control

### 3. Envelope System
Cash-based budgeting:
- Allocate cash to categories in envelopes
- When envelope is empty, spending stops
- Physical limitation prevents overspending

**Best for:** Those who struggle with overspending

### 4. Pay-Yourself-First Budget
Prioritize savings:
- Set aside savings immediately
- Live on what remains
- Automation makes it easy

**Best for:** Building savings habits

## Creating Your First Budget

### Step 1: Track Your Spending
**For one month, record every expense:**
- Keep receipts
- Use a spending journal
- Use budgeting apps
- Check bank statements

**Categories to track:**
- Housing (rent/mortgage, utilities)
- Transportation (car payment, gas, maintenance)
- Food (groceries, dining out)
- Personal (clothing, personal care)
- Entertainment (streaming, hobbies, outings)
- Debt payments (credit cards, loans)
- Savings and investments

### Step 2: Categorize Your Spending
**Needs vs. Wants:**
- **Needs**: Essential for survival and basic functioning
- **Wants**: Improve quality of life but not essential

**Ask yourself:**
- Is this necessary?
- Can I live without it?
- Does it align with my goals?
- Could I find a cheaper alternative?

### Step 3: Set Realistic Limits
**Based on your tracking:**
- Start with current spending levels
- Gradually adjust categories
- Be honest about what's sustainable
- Include occasional expenses (divide annual costs by 12)

### Step 4: Choose Your Tools
**Digital options:**
- Spreadsheets (Excel, Google Sheets)
- Budgeting apps (Mint, YNAB, EveryDollar)
- Bank-provided tools
- Custom templates

**Analog options:**
- Budgeting notebook
- Printable worksheets
- Bulletin board with envelopes
- Whiteboard tracking

## Saving Strategies That Work

### The Power of Automation
**Set it and forget it:**
- Automatic transfers to savings
- Direct deposit splits
- Round-up programs
- Scheduled investments

**Benefits:**
- Removes temptation
- Creates consistency
- Builds habits effortlessly
- Takes advantage of compounding

### Savings Buckets Method
**Separate accounts for different goals:**
- Emergency fund (3-6 months expenses)
- Short-term goals (vacation, gifts)
- Medium-term goals (car, home down payment)
- Long-term goals (retirement, education)

**Why it works:**
- Clear purpose for each dollar
- Reduces temptation to raid savings
- Visual progress on multiple goals
- Psychological satisfaction

### The 24-Hour Rule
**For non-essential purchases:**
- Wait 24 hours before buying
- Ask: Do I still want/need this tomorrow?
- Research alternatives during waiting period
- Often results in not buying

### No-Spend Challenges
**Temporary spending restrictions:**
- No-spend weekends
- No-spend months for specific categories
- Pantry challenges (eat what you have)
- Free entertainment only

**Benefits:**
- Breaks spending habits
- Increases creativity
- Builds savings quickly
- Changes relationship with money

## Overcoming Budgeting Challenges

### When You Overspend
**What to do:**
- Don't abandon the budget
- Identify what went wrong
- Adjust next month's budget
- Find areas to cut back temporarily
- Learn from the experience

### Irregular Income Budgeting
**For freelancers, seasonal workers, or commission-based earners:**
- Calculate average monthly income
- Base budget on lowest expected income
- Create buffer during high-income months
- Build larger emergency fund (6-9 months)
- Separate business and personal finances

### Couples Budgeting
**Strategies for financial harmony:**
- Regular money meetings
- Shared goals and priorities
- Combination of joint and individual accounts
- Transparency about spending
- Compromise on differences

## Making Your Budget Stick

### Monthly Check-Ins
**Regular budget reviews:**
- Compare actual vs. planned spending
- Celebrate successes
- Adjust for life changes
- Update goals progress
- Plan for upcoming expenses

### Reward Systems
**Celebrate milestones:**
- Small rewards for sticking to budget
- Bigger rewards for major goals achieved
- Non-financial rewards (time, experiences)
- Shared celebrations with family

### Flexibility and Grace
**Remember:**
- Budgets are guides, not straitjackets
- Life happens—adjust accordingly
- Progress matters more than perfection
- Each month is a fresh start

Remember: A budget is a living document that should work for you, not against you. The best budget is the one you'll actually use consistently!`,
      
      quiz: [
        {
          id: 1,
          question: "What percentage goes to needs in the 50/30/20 budget?",
          options: ["20%", "30%", "50%", "70%"],
          correctAnswer: 2,
          explanation: "The 50/30/20 budget allocates 50% of income to needs like housing and food."
        },
        {
          id: 2,
          question: "What is zero-based budgeting?",
          options: ["No spending allowed", "Every dollar has a planned purpose", "Only save, never spend", "Ignore some expenses"],
          correctAnswer: 1,
          explanation: "Zero-based budgeting means income minus expenses equals zero, with every dollar assigned."
        },
        {
          id: 3,
          question: "What is the first step in creating a budget?",
          options: ["Set strict limits", "Track your spending", "Open new accounts", "Cut all expenses"],
          correctAnswer: 1,
          explanation: "You must understand current spending before creating an effective budget."
        },
        {
          id: 4,
          question: "What does the envelope system use?",
          options: ["Only credit cards", "Physical cash in envelopes", "Digital wallets only", "No money tracking"],
          correctAnswer: 1,
          explanation: "The envelope system uses cash divided into envelopes for different spending categories."
        },
        {
          id: 5,
          question: "What is a key benefit of automating savings?",
          options: ["More work for you", "Removes temptation to skip saving", "Higher interest rates", "More bank fees"],
          correctAnswer: 1,
          explanation: "Automation makes saving consistent and removes the decision to save each time."
        },
        {
          id: 6,
          question: "What is the 24-hour rule for?",
          options: ["Paying bills", "Non-essential purchases", "Grocery shopping", "Bill negotiation"],
          correctAnswer: 1,
          explanation: "Waiting 24 hours before non-essential purchases reduces impulse buying."
        },
        {
          id: 7,
          question: "What should irregular income earners base their budget on?",
          options: ["Highest expected income", "Lowest expected income", "Last month's income", "Friend's income"],
          correctAnswer: 1,
          explanation: "Base budget on lowest expected income to ensure you can always cover expenses."
        },
        {
          id: 8,
          question: "What is the savings buckets method?",
          options: ["One savings account for everything", "Separate accounts for different goals", "No savings accounts", "Only cash savings"],
          correctAnswer: 1,
          explanation: "Different accounts for different goals keeps purposes clear and reduces temptation."
        },
        {
          id: 9,
          question: "What should you do if you overspend in a category?",
          options: ["Abandon the budget", "Adjust next month's budget", "Spend more elsewhere", "Ignore it"],
          correctAnswer: 1,
          explanation: "Adjust next month's budget rather than giving up—budgets are flexible tools."
        },
        {
          id: 10,
          question: "How often should you review your budget?",
          options: ["Never", "Yearly", "Monthly", "Daily"],
          correctAnswer: 2,
          explanation: "Monthly reviews help adjust for changes and track progress effectively."
        },
        {
          id: 11,
          question: "What budgeting method prioritizes savings first?",
          options: ["Envelope system", "Pay-yourself-first", "Zero-based", "50/30/20"],
          correctAnswer: 1,
          explanation: "Pay-yourself-first automatically saves before other spending occurs."
        },
        {
          id: 12,
          question: "What is a no-spend challenge?",
          options: ["Spending more", "Temporary restriction on spending", "Buying everything", "Only using credit"],
          correctAnswer: 1,
          explanation: "Temporary restrictions break habits and boost savings."
        },
        {
          id: 13,
          question: "What is essential for couples budgeting?",
          options: ["Secret spending", "Regular money meetings", "Separate everything", "No communication"],
          correctAnswer: 1,
          explanation: "Regular communication about money prevents conflicts and aligns goals."
        },
        {
          id: 14,
          question: "What should be included in needs vs. wants analysis?",
          options: ["Only luxury items", "Essential vs. non-essential spending", "Only fixed expenses", "Only variable expenses"],
          correctAnswer: 1,
          explanation: "Differentiating needs (essential) from wants (non-essential) helps prioritize spending."
        },
        {
          id: 15,
          question: "What is a benefit of budgeting?",
          options: ["More financial stress", "Reduces financial stress", "Less awareness", "More confusion"],
          correctAnswer: 1,
          explanation: "Knowing where your money goes reduces anxiety about finances."
        },
        {
          id: 16,
          question: "What tool is NOT typically used for budgeting?",
          options: ["Spreadsheets", "Budgeting apps", "Crystal ball", "Printable worksheets"],
          correctAnswer: 2,
          explanation: "While helpful, crystal balls aren't practical budgeting tools!"
        },
        {
          id: 17,
          question: "What does the 30% represent in 50/30/20?",
          options: ["Needs", "Wants", "Savings", "Taxes"],
          correctAnswer: 1,
          explanation: "30% is for wants like entertainment, dining out, and hobbies."
        },
        {
          id: 18,
          question: "Why reward budgeting milestones?",
          options: ["To spend more", "To celebrate progress and maintain motivation", "To impress others", "To break budget"],
          correctAnswer: 1,
          explanation: "Celebrating progress reinforces positive behavior and maintains motivation."
        },
        {
          id: 19,
          question: "What should be in an emergency fund?",
          options: ["3-6 days expenses", "3-6 weeks expenses", "3-6 months expenses", "3-6 years expenses"],
          correctAnswer: 2,
          explanation: "3-6 months of expenses provides cushion for job loss or emergencies."
        },
        {
          id: 20,
          question: "What mindset helps budgeting success?",
          options: ["Budget as restriction", "Budget as freedom", "Budget as punishment", "Budget as competition"],
          correctAnswer: 1,
          explanation: "Viewing budget as freedom (not restriction) makes it easier to maintain."
        }
      ]
    },

    {
      // MODULE 3: DEBT MANAGEMENT
      id: 3,
      title: "Smart Debt Management: Strategies for Getting Free",
      completed: false,
      content: `# Smart Debt Management: Strategies for Getting Free

Debt doesn't have to control your life. With the right strategies, you can take control, reduce your debt, and work toward financial freedom. Let's explore practical approaches to managing debt.

## Understanding Different Types of Debt

### Good Debt vs. Bad Debt

**Good debt** (generally):
- Invests in your future
- Has reasonable interest rates
- May provide tax benefits
- Increases net worth over time

**Examples of good debt:**
- Mortgages (builds equity)
- Student loans (increases earning potential)
- Business loans (grows income)
- Some home improvement loans

**Bad debt** (generally):
- Funds consumption, not investment
- Has high interest rates
- Depreciates quickly
- Creates financial stress

**Examples of bad debt:**
- Credit card debt (especially for non-essentials)
- Payday loans (extremely high interest)
- Car loans for expensive vehicles
- Consumer installment loans

### Debt by Interest Rates

**High-interest debt** (priority to pay off):
- Credit cards: 15-30% APR
- Payday loans: 300%+ APR equivalent
- Some personal loans: 10-36% APR

**Medium-interest debt:**
- Auto loans: 4-10% APR
- Private student loans: 5-12% APR

**Low-interest debt:**
- Federal student loans: 3-7% APR
- Mortgages: 3-6% APR

## Assessing Your Debt Situation

### Debt-to-Income Ratio (DTI)
**Formula:** Monthly debt payments ÷ Monthly gross income

**Interpretation:**
- Below 20%: Excellent
- 20-35%: Manageable
- 36-49%: Concerning
- 50%+: Critical

**Why DTI matters:**
- Lenders use it for loan decisions
- Measures debt burden
- Indicates financial stress level
- Helps prioritize repayment

### Debt Inventory Worksheet
**Create a complete list:**
- Creditor name
- Total balance owed
- Interest rate
- Minimum monthly payment
- Due date

**Update monthly to track:**
- Progress on balances
- Interest paid
- Changes in terms
- Early payoff possibilities

## Debt Repayment Strategies

### 1. Debt Avalanche Method
**How it works:**
1. List debts by interest rate (highest to lowest)
2. Pay minimums on all debts
3. Put extra money toward highest-interest debt
4. Repeat until all debts paid

**Advantages:**
- Saves the most on interest
- Mathematically optimal
- Faster overall payoff

**Best for:** Those motivated by math/logic

### 2. Debt Snowball Method
**How it works:**
1. List debts by balance (smallest to largest)
2. Pay minimums on all debts
3. Put extra money toward smallest balance
4. Celebrate small wins, roll payments to next debt

**Advantages:**
- Psychological wins keep motivation
- Quick visible progress
- Builds momentum

**Best for:** Those needing motivation

### 3. Debt Consolidation
**Combining multiple debts into one:**
- Balance transfer credit cards (0% introductory rates)
- Debt consolidation loans
- Home equity loans/lines of credit

**When it makes sense:**
- Lower overall interest rate
- Simplified payments (one vs. many)
- Fixed repayment timeline

**Risks:**
- May require good credit
- Could increase total cost if stretched
- May tempt new borrowing

### 4. Debt Management Plans
**Through credit counseling agencies:**
- Negotiate with creditors
- Lower interest rates
- Waive some fees
- Single monthly payment

**Considerations:**
- May close credit cards
- Requires commitment (3-5 years)
- Impacts credit temporarily
- Choose reputable agency (NFCC.org)

## Negotiating with Creditors

### When You're Struggling
**Options to discuss:**
- Lower interest rates
- Waived late fees
- Reduced minimum payments
- Temporary hardship plans
- Settlement offers (for severe situations)

**How to prepare:**
- Know your numbers (income, expenses)
- Have a realistic payment proposal
- Explain your situation honestly
- Get agreements in writing

### Credit Counseling Resources
**Nonprofit organizations:**
- National Foundation for Credit Counseling
- Money Management International
- GreenPath Financial Wellness

**Services offered:**
- Free budget counseling
- Debt management plans
- Housing counseling
- Student loan counseling

## Avoiding Common Debt Traps

### Credit Card Pitfalls
**Mistakes to avoid:**
- Paying only minimum payments
- Using cards for cash advances
- Maxing out credit limits
- Opening too many accounts
- Missing payments

**Smart credit card use:**
- Pay balance in full monthly
- Use for planned purchases only
- Keep utilization below 30%
- Take advantage of rewards wisely
- Review statements regularly

### Payday Loan Alternatives
**Better options when cash-strapped:**
- Credit union payday alternative loans
- Payment plans with creditors
- Community assistance programs
- Family loans with clear terms
- Side gigs for quick cash

## Building While Paying Down

### The Savings-Debt Balance
**Don't neglect savings entirely:**
- Maintain small emergency fund ($1,000)
- Continue retirement contributions if matched
- Balance debt repayment with future security

**Why save while paying debt:**
- Prevents new debt for emergencies
- Employer matches are free money
- Psychological benefit of progress on both fronts

### Increasing Payments
**Finding extra money for debt:**
- Side jobs or gig work
- Selling unused items
- Temporary spending cuts
- Tax refunds or bonuses
- Reducing other expenses

**Windfall strategy:**
- Allocate 50% to debt
- 30% to savings
- 20% for something enjoyable

## Maintaining Progress

### Tracking Your Journey
**Motivation tools:**
- Debt payoff thermometer chart
- Monthly progress updates
- Celebrating milestones
- Sharing progress with accountability partner

### Preventing Relapse
**Strategies to stay debt-free:**
- Build adequate emergency fund
- Create sinking funds for irregular expenses
- Continue budgeting discipline
- Regular financial check-ins
- Address emotional spending triggers

### Credit Score Recovery
**As you pay down debt:**
- Payment history improves
- Credit utilization decreases
- Credit mix may improve
- Inquiries age off report

**Timeline:**
- Late payments: 7 years on report
- Collections: 7 years from delinquency
- Bankruptcies: 7-10 years
- Positive information: Indefinitely helpful

Remember: Debt freedom is a journey, not a destination. Every payment moves you forward, and every lesson learned makes you financially stronger. Be patient with yourself and persistent in your efforts!`,
      
      quiz: [
        {
          id: 1,
          question: "What is generally considered 'good debt'?",
          options: ["Credit card debt for vacation", "Mortgage for home purchase", "Payday loan", "High-interest personal loan"],
          correctAnswer: 1,
          explanation: "Mortgages typically build equity and have reasonable interest rates."
        },
        {
          id: 2,
          question: "How does the debt avalanche method work?",
          options: ["Pay smallest balances first", "Pay highest interest rates first", "Pay all equally", "Pay newest debt first"],
          correctAnswer: 1,
          explanation: "Debt avalanche prioritizes highest interest debt to save the most money."
        },
        {
          id: 3,
          question: "What is the debt snowball method?",
          options: ["Pay largest balances first", "Pay smallest balances first", "Pay random debts", "Ignore some debts"],
          correctAnswer: 1,
          explanation: "Debt snowball pays smallest balances first for psychological wins."
        },
        {
          id: 4,
          question: "What is a reasonable Debt-to-Income ratio?",
          options: ["Below 20%", "Below 35%", "Below 50%", "Below 70%"],
          correctAnswer: 1,
          explanation: "Below 35% is generally manageable; below 20% is excellent."
        },
        {
          id: 5,
          question: "What does debt consolidation do?",
          options: ["Increases interest rates", "Combines multiple debts into one", "Eliminates all debt", "Creates more debt"],
          correctAnswer: 1,
          explanation: "Combines multiple payments into one, often with lower interest."
        },
        {
          id: 6,
          question: "Which debt typically has highest interest rates?",
          options: ["Mortgages", "Credit cards", "Federal student loans", "Auto loans"],
          correctAnswer: 1,
          explanation: "Credit cards often have 15-30% APR, much higher than other consumer debt."
        },
        {
          id: 7,
          question: "What should you maintain while paying down debt?",
          options: ["No savings", "Small emergency fund", "Maxed credit cards", "Only luxury spending"],
          correctAnswer: 1,
          explanation: "A small emergency fund prevents new debt when unexpected expenses arise."
        },
        {
          id: 8,
          question: "What is a payday loan alternative?",
          options: ["Credit union payday alternative loan", "Another payday loan", "High-interest credit card", "Borrow from loan shark"],
          correctAnswer: 0,
          explanation: "Credit union alternatives have much lower rates and better terms."
        },
        {
          id: 9,
          question: "What does DTI stand for?",
          options: ["Debt Total Investment", "Debt-to-Income ratio", "Direct Tax Income", "Daily Transaction Index"],
          correctAnswer: 1,
          explanation: "Debt-to-Income ratio compares monthly debt payments to monthly income."
        },
        {
          id: 10,
          question: "What should you do with windfalls while in debt?",
          options: ["Spend all", "Use mostly for debt repayment", "Invest all", "Hide it"],
          correctAnswer: 1,
          explanation: "Using most of windfalls for debt accelerates payoff significantly."
        },
        {
          id: 11,
          question: "What is a debt management plan?",
          options: ["Do-it-yourself plan", "Program through credit counseling agency", "Ignore debt plan", "Borrow more plan"],
          correctAnswer: 1,
          explanation: "Credit counseling agencies negotiate with creditors for better terms."
        },
        {
          id: 12,
          question: "What credit card utilization is recommended?",
          options: ["Below 30%", "Below 100%", "Exactly 50%", "As high as possible"],
          correctAnswer: 0,
          explanation: "Below 30% utilization helps maintain good credit scores."
        },
        {
          id: 13,
          question: "How long do late payments stay on credit report?",
          options: ["1 year", "3 years", "7 years", "Forever"],
          correctAnswer: 2,
          explanation: "Late payments typically remain for 7 years from delinquency date."
        },
        {
          id: 14,
          question: "What should you do if struggling with payments?",
          options: ["Ignore creditors", "Contact creditors to discuss options", "Borrow more", "Stop all payments"],
          correctAnswer: 1,
          explanation: "Creditors often work with borrowers who communicate proactively."
        },
        {
          id: 15,
          question: "What is a sinking fund?",
          options: ["Fund for emergencies only", "Fund for planned irregular expenses", "Fund for daily spending", "Fund for gambling"],
          correctAnswer: 1,
          explanation: "Sinking funds save gradually for known future expenses."
        },
        {
          id: 16,
          question: "Which debt repayment method saves most on interest?",
          options: ["Debt snowball", "Debt avalanche", "Random payment", "Minimum only"],
          correctAnswer: 1,
          explanation: "Debt avalanche targets highest interest first, minimizing total interest paid."
        },
        {
          id: 17,
          question: "What is an NFCC agency?",
          options: ["National Foundation for Credit Counseling", "New Financial Credit Company", "No Fee Credit Consultants", "National Federal Credit Union"],
          correctAnswer: 0,
          explanation: "NFCC provides reputable credit counseling services nationwide."
        },
        {
          id: 18,
          question: "Why continue retirement contributions while in debt?",
          options: ["Never contribute while in debt", "For employer matches (free money)", "To avoid taxes", "To impress friends"],
          correctAnswer: 1,
          explanation: "Employer matches are essentially free money and valuable despite debt."
        },
        {
          id: 19,
          question: "What helps prevent debt relapse?",
          options: ["No emergency fund", "Adequate emergency fund", "More credit cards", "Higher spending"],
          correctAnswer: 1,
          explanation: "Emergency funds prevent new debt when unexpected expenses occur."
        },
        {
          id: 20,
          question: "What mindset helps debt repayment?",
          options: ["Temporary sacrifice for long-term freedom", "Deprivation forever", "Ignore the problem", "Blame others"],
          correctAnswer: 0,
          explanation: "Viewing debt repayment as temporary sacrifice for future freedom maintains motivation."
        }
      ]
    },

    {
      // MODULE 4: SAVING AND INVESTING BASICS
      id: 4,
      title: "Saving and Investing Basics: Growing Your Money",
      completed: false,
      content: `# Saving and Investing Basics: Growing Your Money

Saving preserves your money; investing grows it. Understanding both is key to building wealth over time. Let's explore how to make your money work for you.

## The Difference Between Saving and Investing

**Saving:**
- Short-term focus (0-5 years)
- Preserves principal
- Low risk, low return
- Liquid (easily accessible)
- Examples: Savings accounts, CDs, money markets

**Investing:**
- Long-term focus (5+ years)
- Grows principal through returns
- Higher risk, higher potential return
- Less liquid (may take time to access)
- Examples: Stocks, bonds, real estate, mutual funds

## Building Your Savings Foundation

### Emergency Fund: Your Financial Safety Net

**How much to save:**
- Minimum: $1,000 starter fund
- Ideal: 3-6 months of essential expenses
- Extended: 6-12 months for irregular income or high-risk situations

**Where to keep it:**
- High-yield savings account
- Money market account
- Separate from checking account
- Easily accessible but not too accessible

**What counts as emergency:**
- Medical emergencies
- Job loss
- Essential car/home repairs
- Unexpected necessary travel

### Sinking Funds for Planned Expenses

**How they work:**
- Save monthly for known future expenses
- Prevent using credit for irregular costs
- Reduce financial stress

**Common sinking funds:**
- Car maintenance/repairs
- Holiday gifts
- Insurance premiums (annual)
- Property taxes
- Vacation fund
- Home maintenance

## Introduction to Investing

### The Power of Compound Interest

**How it works:**
- Earn interest on your principal
- Earn interest on your interest
- Time dramatically increases results

**Example:** $1,000 at 7% annual return
- Year 1: $1,070
- Year 5: $1,403
- Year 10: $1,967
- Year 20: $3,870
- Year 30: $7,612

**Rule of 72:** Estimate doubling time
72 ÷ interest rate = years to double
Example: 72 ÷ 7% = ~10 years to double

### Risk and Return Relationship

**General principle:**
- Higher potential return = Higher risk
- Lower risk = Lower potential return

**Risk tolerance factors:**
- Time horizon (when you need money)
- Financial goals
- Emotional comfort with volatility
- Financial capacity to absorb losses

## Common Investment Options

### 1. Stocks (Equities)
**What they are:** Ownership shares in companies
**Potential returns:** Dividends + price appreciation
**Risk level:** Medium to High
**Best for:** Long-term growth

### 2. Bonds (Fixed Income)
**What they are:** Loans to governments or corporations
**Potential returns:** Regular interest payments
**Risk level:** Low to Medium
**Best for:** Income and stability

### 3. Mutual Funds
**What they are:** Pooled money professionally managed
**Potential returns:** Varies by fund type
**Risk level:** Varies
**Best for:** Diversification, beginners

### 4. Exchange-Traded Funds (ETFs)
**What they are:** Baskets of securities traded like stocks
**Potential returns:** Track underlying index
**Risk level:** Varies
**Best for:** Low-cost diversification

### 5. Real Estate
**What they are:** Property ownership
**Potential returns:** Rental income + appreciation
**Risk level:** Medium to High
**Best for:** Tangible asset diversification

### 6. Retirement Accounts
**Types:**
- 401(k)/403(b): Employer-sponsored
- IRA: Individual retirement account
- Roth options: Tax-free growth

**Benefits:**
- Tax advantages
- Automatic contributions
- Employer matches (free money)
- Long-term focus

## Building Your Investment Plan

### Asset Allocation
**Mixing different investments:**
- Stocks for growth
- Bonds for stability
- Cash for liquidity
- Alternative assets for diversification

**Simple allocation by age:**
- 20s-30s: 80-90% stocks, 10-20% bonds
- 40s-50s: 60-70% stocks, 30-40% bonds
- 60s+: 40-50% stocks, 50-60% bonds

**Adjust based on:**
- Risk tolerance
- Time horizon
- Financial goals
- Market conditions

### Dollar-Cost Averaging
**How it works:**
- Invest fixed amount regularly
- Buy more shares when prices low
- Buy fewer shares when prices high
- Averages out purchase price

**Benefits:**
- Removes emotion from timing
- Builds discipline
- Takes advantage of market fluctuations
- Simpler than trying to time market

## Investment Accounts Explained

### Taxable Accounts
**Regular brokerage accounts:**
- No contribution limits
- No withdrawal restrictions
- Taxes on dividends and capital gains
- No tax advantages

### Tax-Advantaged Accounts

**Traditional IRA/401(k):**
- Tax-deductible contributions
- Tax-deferred growth
- Taxed as income when withdrawn
- Required minimum distributions after age 72

**Roth IRA/401(k):**
- Contributions with after-tax money
- Tax-free growth
- Tax-free withdrawals in retirement
- No required minimum distributions

**Health Savings Account (HSA):**
- Triple tax advantage
- Tax-deductible contributions
- Tax-free growth
- Tax-free withdrawals for medical expenses
- After age 65, can use for any purpose (taxed as income)

## Getting Started with Investing

### Step 1: Pay Off High-Interest Debt
**Why:** Investment returns unlikely to exceed credit card interest rates

### Step 2: Build Emergency Fund
**Why:** Prevents tapping investments during emergencies

### Step 3: Take Employer Match
**Why:** Immediate 100% return on matched contributions

### Step 4: Start Simple
**Beginner-friendly options:**
- Target-date retirement funds
- Index funds/ETFs
- Robo-advisors
- Employer retirement plans

### Step 5: Increase Contributions Gradually
**Strategies:**
- Annual raise allocation
- Automatic annual increases
- Side income investments
- Expense reduction redirection

## Common Investment Mistakes to Avoid

### 1. Trying to Time the Market
**Problem:** Impossible to consistently predict highs/lows
**Solution:** Regular investing regardless of market conditions

### 2. Chasing Hot Trends
**Problem:** Buying high after excitement, selling low after decline
**Solution:** Stick to investment plan, ignore hype

### 3. Excessive Fees
**Problem:** High fees eat returns over time
**Solution:** Choose low-cost index funds and ETFs

### 4. Lack of Diversification
**Problem:** All eggs in one basket increases risk
**Solution:** Spread investments across asset classes

### 5. Letting Emotions Drive Decisions
**Problem:** Fear/greed leads to poor timing
**Solution:** Automate investing, ignore daily fluctuations

## Monitoring and Adjusting

### Regular Portfolio Review
**Check quarterly or annually:**
- Rebalance if allocations drift
- Assess performance vs. benchmarks
- Review fees and expenses
- Adjust for life changes

### When to Adjust Strategy
**Life changes requiring review:**
- Marriage or divorce
- Birth of child
- Career change
- Approaching retirement
- Inheritance or windfall

Remember: The best time to start investing was yesterday; the second-best time is today. Start small, stay consistent, and let time work its magic on your investments!`,
      
      quiz: [
        {
          id: 1,
          question: "What is the main difference between saving and investing?",
          options: ["No difference", "Saving preserves money, investing grows it", "Investing is only for rich", "Saving is only for poor"],
          correctAnswer: 1,
          explanation: "Saving protects principal; investing aims to grow principal through returns."
        },
        {
          id: 2,
          question: "How much should be in an emergency fund?",
          options: ["$100", "3-6 months of expenses", "1 month income", "No emergency fund needed"],
          correctAnswer: 1,
          explanation: "3-6 months of essential expenses provides adequate safety net."
        },
        {
          id: 3,
          question: "What is compound interest?",
          options: ["Interest only on principal", "Interest on principal plus previous interest", "Simple interest", "No interest"],
          correctAnswer: 1,
          explanation: "Compound interest earns returns on both initial investment and accumulated interest."
        },
        {
          id: 4,
          question: "What does the Rule of 72 estimate?",
          options: ["Years to retire", "Years for money to double", "Months to save", "Interest rate needed"],
          correctAnswer: 1,
          explanation: "72 ÷ interest rate = approximate years for investment to double."
        },
        {
          id: 5,
          question: "What are stocks?",
          options: ["Loans to companies", "Ownership shares in companies", "Government bonds", "Savings accounts"],
          correctAnswer: 1,
          explanation: "Stocks represent ownership in corporations."
        },
        {
          id: 6,
          question: "What is dollar-cost averaging?",
          options: ["Investing lump sum once", "Investing fixed amounts regularly", "Only investing when market high", "Only investing when market low"],
          correctAnswer: 1,
          explanation: "Regular fixed investments average out purchase prices over time."
        },
        {
          id: 7,
          question: "What is a Roth IRA advantage?",
          options: ["Tax-deductible contributions", "Tax-free withdrawals in retirement", "Higher contribution limits", "No age restrictions"],
          correctAnswer: 1,
          explanation: "Roth accounts offer tax-free growth and withdrawals in retirement."
        },
        {
          id: 8,
          question: "What should you do before investing?",
          options: ["Pay off high-interest debt", "Buy luxury car", "Take expensive vacation", "Ignore all debt"],
          correctAnswer: 0,
          explanation: "High-interest debt typically costs more than investment returns."
        },
        {
          id: 9,
          question: "What is asset allocation?",
          options: ["Only stocks", "Mixing different investment types", "Only bonds", "Only cash"],
          correctAnswer: 1,
          explanation: "Asset allocation balances different investments based on goals and risk."
        },
        {
          id: 10,
          question: "What is a target-date fund?",
          options: ["Fund for specific goal date", "Only stock fund", "Only bond fund", "Money market fund"],
          correctAnswer: 0,
          explanation: "Target-date funds automatically adjust allocation as target date approaches."
        },
        {
          id: 11,
          question: "What is a common investment mistake?",
          options: ["Diversification", "Trying to time the market", "Regular investing", "Low-cost funds"],
          correctAnswer: 1,
          explanation: "Market timing rarely works consistently and often reduces returns."
        },
        {
          id: 12,
          question: "What is a sinking fund?",
          options: ["Emergency fund", "For planned future expenses", "For daily spending", "For gambling"],
          correctAnswer: 1,
          explanation: "Sinking funds save gradually for known upcoming expenses."
        },
        {
          id: 13,
          question: "What does HSA stand for?",
          options: ["Health Spending Account", "Health Savings Account", "High Salary Account", "Home Savings Account"],
          correctAnswer: 1,
          explanation: "Health Savings Account offers triple tax advantages for medical expenses."
        },
        {
          id: 14,
          question: "Why take employer 401(k) match?",
          options: ["It's free money", "Higher fees", "Complicated", "No benefit"],
          correctAnswer: 0,
          explanation: "Employer matches provide immediate 100% return on contributions."
        },
        {
          id: 15,
          question: "What is rebalancing?",
          options: ["Ignoring portfolio", "Restoring target asset allocation", "Selling everything", "Buying only stocks"],
          correctAnswer: 1,
          explanation: "Rebalancing adjusts portfolio back to target allocation percentages."
        },
        {
          id: 16,
          question: "What are bonds?",
          options: ["Company ownership", "Loans to entities", "Real estate", "Commodities"],
          correctAnswer: 1,
          explanation: "Bonds represent loans to governments or corporations paying interest."
        },
        {
          id: 17,
          question: "What is risk tolerance?",
          options: ["Ignoring all risk", "Comfort with investment volatility", "Only safe investments", "Guaranteed returns"],
          correctAnswer: 1,
          explanation: "Risk tolerance is emotional and financial capacity to withstand losses."
        },
        {
          id: 18,
          question: "What is a robo-advisor?",
          options: ["Human financial advisor", "Automated investment service", "Bank teller", "Insurance agent"],
          correctAnswer: 1,
          explanation: "Robo-advisors provide automated, algorithm-based portfolio management."
        },
        {
          id: 19,
          question: "How often review investments?",
          options: ["Daily", "Weekly", "Quarterly or annually", "Never"],
          correctAnswer: 2,
          explanation: "Regular but not excessive review prevents emotional reactions to market fluctuations."
        },
        {
          id: 20,
          question: "What mindset helps investing success?",
          options: ["Get rich quick", "Long-term patience", "Daily trading", "Following tips"],
          correctAnswer: 1,
          explanation: "Long-term perspective and patience are key to investment success."
        }
      ]
    },

    {
      // MODULE 5: INSURANCE AND PROTECTION
      id: 5,
      title: "Insurance Essentials: Protecting What Matters",
      completed: false,
      content: `# Insurance Essentials: Protecting What Matters

Insurance transfers financial risk from you to an insurance company. It's not exciting, but it's essential for protecting your financial future from unexpected events.

## Understanding Insurance Basics

### How Insurance Works

**The insurance concept:**
- Many people pay premiums
- Pooled money covers few who experience losses
- Spreads risk across large group
- Provides financial protection

**Key insurance terms:**
- **Premium**: Amount you pay for coverage
- **Deductible**: Amount you pay before insurance pays
- **Co-payment**: Fixed amount per service
- **Co-insurance**: Percentage you pay after deductible
- **Out-of-pocket maximum**: Most you'll pay in a year
- **Policy limit**: Maximum insurer will pay
- **Exclusion**: What's not covered
- **Claim**: Request for payment of covered loss

### Types of Insurance You May Need

## Health Insurance

### Why It's Essential
**Without health insurance:**
- Medical bankruptcy risk
- Delayed necessary care
- Higher costs for everyone
- Limited treatment options

### Understanding Your Plan
**Plan types:**
- **HMO**: Primary care physician coordinates care
- **PPO**: More provider choice, higher cost
- **EPO**: Limited network, no referrals needed
- **HDHP**: High deductible with HSA option

**Key considerations:**
- Monthly premium vs. out-of-pocket costs
- Network coverage (in-network vs. out-of-network)
- Prescription drug coverage
- Preventive care coverage

### Health Savings Accounts (HSAs)
**Triple tax advantage:**
1. Contributions tax-deductible
2. Growth tax-free
3. Withdrawals for medical expenses tax-free

**Eligibility requirements:**
- Must have HDHP
- No other health coverage
- Not enrolled in Medicare
- Not claimed as dependent

## Life Insurance

### Determining If You Need It
**Who needs life insurance:**
- People with dependents
- Spouses who rely on income
- Parents with minor children
- Business owners with partners
- Those with co-signed debts

**Who may not need it:**
- Single people with no dependents
- Retirees with adequate assets
- Children (generally)

### Types of Life Insurance

**Term Life Insurance:**
- Coverage for specific period (10, 20, 30 years)
- Pure protection only
- Lower premiums
- No cash value
- **Best for:** Most people needing coverage

**Permanent Life Insurance:**
- Lifetime coverage
- Includes cash value component
- Higher premiums
- Investment component
- **Types:** Whole life, universal life, variable life
- **Consider when:** Estate planning, permanent needs, tax advantages

### How Much Coverage You Need
**Simple calculation:**
- Income replacement (5-10 times annual income)
- Plus: Debts to pay off
- Plus: Future expenses (college, mortgage)
- Minus: Existing assets and savings

**DIME method:**
- **D**ebt: All outstanding debts
- **I**ncome: Years of income replacement needed
- **M**ortgage: Remaining mortgage balance
- **E**ducation: Future education costs

## Disability Insurance

### Why It's Often Overlooked
**Statistics:**
- 25% of workers will experience disability
- Average disability lasts 2.5 years
- Social Security denies most claims
- Employer coverage often insufficient

### Types of Disability Insurance
**Short-term disability:**
- Covers 3-6 months
- Often provided by employer
- Replaces 60-70% of income

**Long-term disability:**
- Covers years or to retirement age
- May need to purchase individually
- Replaces 50-60% of income

**Key features to check:**
- Definition of disability (own occupation vs. any occupation)
- Elimination period (waiting time)
- Benefit period (how long payments last)
- Inflation protection
- Renewability guarantees

## Property Insurance

### Homeowners/Renters Insurance
**What's typically covered:**
- Dwelling/structure
- Personal property
- Liability protection
- Additional living expenses

**What's often excluded:**
- Floods (separate policy needed)
- Earthquakes (separate policy)
- Maintenance issues
- Intentional damage

**Coverage levels:**
- **Actual cash value**: Replacement cost minus depreciation
- **Replacement cost**: Cost to replace with similar new items
- **Extended replacement cost**: Extra percentage above policy limit

### Auto Insurance
**Required coverages vary by state:**
- Liability (bodily injury and property damage)
- Personal injury protection
- Uninsured/underinsured motorist
- Collision (damage to your vehicle)
- Comprehensive (non-collision damage)

**Factors affecting premiums:**
- Driving record
- Vehicle type
- Location
- Credit score (in some states)
- Coverage choices and deductibles

## Other Important Insurance Types

### Umbrella Insurance
**Extra liability protection:**
- Kicks in when other policies exhausted
- Typically $1-5 million coverage
- Covers lawsuits, libel, slander
- Relatively inexpensive for coverage amount

### Long-Term Care Insurance
**Covers care services:**
- Nursing home care
- Assisted living
- Home health care
- Adult day care

**Considerations:**
- Rising costs make early purchase advisable
- Hybrid life/LTC policies available
- Government programs have limitations
- Family history and health factors

## Choosing Insurance Wisely

### Shopping for Insurance
**Comparison shopping tips:**
- Get quotes from multiple companies
- Compare identical coverage levels
- Check financial strength ratings (A.M. Best, Standard & Poor's)
- Read customer service reviews
- Consider independent agents

### Understanding Policy Documents
**What to review carefully:**
- Declaration page (who, what, how much)
- Insuring agreement (what's covered)
- Exclusions and limitations
- Conditions (rules for coverage)
- Endorsements/rider (additional provisions)

### Regular Policy Reviews
**When to review coverage:**
- Annual review at renewal
- After major life events (marriage, birth, divorce)
- When assets significantly change
- Every 3-5 years for adequacy

## Saving on Insurance Premiums

### Cost-Saving Strategies
**For all insurance types:**
- Increase deductibles (if you have emergency fund)
- Bundle policies with same company
- Maintain good credit (where allowed)
- Ask about discounts (safe driver, alarm systems, etc.)
- Review coverage needs regularly

**Specific strategies:**
- Health: Use HSA-eligible HDHP if healthy
- Auto: Take defensive driving course
- Home: Install security systems
- Life: Buy term when young and healthy

## Common Insurance Mistakes

### Mistakes to Avoid
1. **Being underinsured**: Saving on premiums but risking financial ruin
2. **Being overinsured**: Paying for coverage you don't need
3. **Not reading policy**: Surprised by exclusions when claim denied
4. **Filing small claims**: May increase premiums more than claim value
5. **Letting policies lapse**: Gap in coverage creates risk
6. **Not updating beneficiaries**: Assets may not go to intended recipients

### Red Flags with Insurance
**Warning signs:**
- Pressure to buy immediately
- Unusually low premiums
- Company not licensed in your state
- Vague answers to questions
- No physical address or website

Remember: Insurance is about peace of mind. The right coverage lets you sleep well knowing you're protected against life's unexpected events. Review your needs regularly and adjust as your life changes.`,
      
      quiz: [
        {
          id: 1,
          question: "What is an insurance premium?",
          options: ["Claim payment", "Amount you pay for coverage", "Deductible amount", "Commission"],
          correctAnswer: 1,
          explanation: "Premium is the amount paid (monthly, quarterly, annually) for insurance coverage."
        },
        {
          id: 2,
          question: "What is a deductible?",
          options: ["Maximum insurer pays", "Amount you pay before insurance pays", "Monthly payment", "Bonus payment"],
          correctAnswer: 1,
          explanation: "Deductible is out-of-pocket amount paid before insurance coverage begins."
        },
        {
          id: 3,
          question: "Who typically needs life insurance?",
          options: ["Everyone", "People with dependents", "No one", "Only wealthy people"],
          correctAnswer: 1,
          explanation: "Life insurance protects dependents who rely on your income or care."
        },
        {
          id: 4,
          question: "What is term life insurance?",
          options: ["Lifetime coverage", "Coverage for specific period", "Investment only", "No death benefit"],
          correctAnswer: 1,
          explanation: "Term life provides coverage for set period (10, 20, 30 years) at lower cost."
        },
        {
          id: 5,
          question: "What does HSA stand for?",
          options: ["Health Spending Account", "Health Savings Account", "Home Savings Account", "High Salary Account"],
          correctAnswer: 1,
          explanation: "Health Savings Account offers tax advantages for medical expenses with HDHP."
        },
        {
          id: 6,
          question: "Why is disability insurance important?",
          options: ["Never important", "Protects income if unable to work", "Only for dangerous jobs", "Replaces health insurance"],
          correctAnswer: 1,
          explanation: "Disability insurance replaces income if injury/illness prevents working."
        },
        {
          id: 7,
          question: "What does homeowners insurance typically exclude?",
          options: ["Fire damage", "Theft", "Floods", "Liability"],
          correctAnswer: 2,
          explanation: "Flood damage usually requires separate flood insurance policy."
        },
        {
          id: 8,
          question: "What is umbrella insurance?",
          options: ["For rain protection", "Extra liability coverage", "Home insurance only", "Auto insurance only"],
          correctAnswer: 1,
          explanation: "Umbrella insurance provides additional liability protection above other policies."
        },
        {
          id: 9,
          question: "What's a way to save on insurance?",
          options: ["Increase deductibles", "Never have insurance", "File many claims", "Choose highest coverage always"],
          correctAnswer: 0,
          explanation: "Higher deductibles lower premiums if you have emergency fund to cover deductible."
        },
        {
          id: 10,
          question: "When should you review insurance coverage?",
          options: ["Never", "After major life events", "Only at purchase", "Every 20 years"],
          correctAnswer: 1,
          explanation: "Major life changes (marriage, birth, home purchase) require coverage review."
        },
        {
          id: 11,
          question: "What is co-insurance?",
          options: ["Insurance for companies", "Percentage you pay after deductible", "Free insurance", "Government insurance"],
          correctAnswer: 1,
          explanation: "Co-insurance is your share of costs after deductible is met (e.g., 20%)."
        },
        {
          id: 12,
          question: "What is permanent life insurance?",
          options: ["Temporary coverage", "Lifetime coverage with cash value", "Only for seniors", "No death benefit"],
          correctAnswer: 1,
          explanation: "Permanent insurance lasts lifetime and includes investment/cash value component."
        },
        {
          id: 13,
          question: "What does HMO stand for?",
          options: ["Health Management Office", "Health Maintenance Organization", "Home Medical Option", "Hospital Medical Office"],
          correctAnswer: 1,
          explanation: "HMOs require primary care physician referrals for specialist care."
        },
        {
          id: 14,
          question: "What is long-term care insurance for?",
          options: ["Short illnesses", "Nursing home or home care costs", "Hospital stays", "Doctor visits"],
          correctAnswer: 1,
          explanation: "Covers extended care services not typically covered by health insurance."
        },
        {
          id: 15,
          question: "What affects auto insurance premiums?",
          options: ["Nothing", "Driving record and location", "Only car color", "Only mileage"],
          correctAnswer: 1,
          explanation: "Driving history, location, vehicle type, and coverage choices affect premiums."
        },
        {
          id: 16,
          question: "What is an insurance claim?",
          options: ["Premium payment", "Request for payment of covered loss", "Policy cancellation", "Rate increase"],
          correctAnswer: 1,
          explanation: "Claim is formal request to insurance company for payment under policy terms."
        },
        {
          id: 17,
          question: "What is out-of-pocket maximum?",
          options: ["Minimum you pay", "Most you'll pay in a year", "Deductible only", "Premium amount"],
          correctAnswer: 1,
          explanation: "Maximum annual amount you pay for covered services before insurance pays 100%."
        },
        {
          id: 18,
          question: "What should you compare when shopping insurance?",
          options: ["Only price", "Coverage, price, and company reputation", "Only company name", "Only agent personality"],
          correctAnswer: 1,
          explanation: "Compare coverage details, premiums, deductibles, and company financial strength."
        },
        {
          id: 19,
          question: "What is a common insurance mistake?",
          options: ["Being properly insured", "Being underinsured to save money", "Regular reviews", "Having emergency fund"],
          correctAnswer: 1,
          explanation: "Underinsurance saves premiums but leaves you vulnerable to financial loss."
        },
        {
          id: 20,
          question: "What does insurance primarily provide?",
          options: ["Investment returns", "Financial protection against risk", "Entertainment", "Social status"],
          correctAnswer: 1,
          explanation: "Insurance transfers financial risk from individual to insurance company."
        }
      ]
    },

    {
      // MODULE 6: FINANCIAL PLANNING FOR LIFE EVENTS
      id: 6,
      title: "Life Stage Planning: From College to Retirement",
      completed: false,
      content: `# Life Stage Planning: From College to Retirement

Financial needs change throughout life. Planning for major transitions helps you navigate each stage with confidence and avoid common financial pitfalls.

## Early Adulthood (18-25)

### Financial Firsts
**Common milestones:**
- First full-time job
- First apartment
- First car purchase
- Student loan repayment begins

### Key Priorities
1. **Budget establishment**: Learn to manage regular income
2. **Emergency fund**: Start with $1,000, build to one month expenses
3. **Retirement start**: Begin 401(k) contributions, especially with employer match
4. **Credit building**: Establish positive credit history
5. **Debt management**: Tackle student loans strategically

### Common Mistakes to Avoid
- Living beyond means to impress others
- Not saving because "I have time"
- Ignoring retirement savings
- Accumulating high-interest debt
- No insurance coverage

## Career Building (25-40)

### Financial Growth Phase
**Increased responsibilities:**
- Career advancement
- Marriage/partnership
- Home purchase
- Starting family

### Strategic Planning Areas
1. **Income growth**: Maximize earning potential
2. **Debt reduction**: Pay off student loans, avoid new high-interest debt
3. **Home ownership**: Save for down payment, understand mortgage options
4. **Family planning**: Budget for children, update insurance
5. **Retirement acceleration**: Increase contributions to 15%+ of income

### Investment Strategy
**Aggressive growth focus:**
- 80-90% in stocks for growth
- 10-20% in bonds for stability
- Regular rebalancing
- Tax-advantaged accounts priority

## Mid-Career (40-55)

### Peak Earning Years
**Financial opportunities:**
- Highest earning potential
- Greatest ability to save
- Potential for career changes
- May support children and aging parents

### Critical Planning Tasks
1. **Retirement catch-up**: Maximize contributions, consider additional accounts
2. **College funding**: Balance retirement and education savings
3. **Estate planning**: Create will, powers of attorney, healthcare directives
4. **Insurance review**: Update life, disability, and long-term care coverage
5. **Debt elimination**: Aim to enter retirement debt-free

### Investment Adjustments
**Moderate growth focus:**
- 60-70% in stocks
- 30-40% in bonds
- Consider real estate or other diversification
- Tax efficiency planning

## Pre-Retirement (55-65)

### Transition Planning
**Five years before retirement:**
- Finalize retirement date
- Estimate retirement expenses
- Review Social Security strategy
- Consider healthcare options
- Test retirement budget

### Key Decisions
1. **Social Security timing**: Early (62), full retirement age (66-67), or delayed (70)
2. **Retirement account withdrawals**: Develop distribution strategy
3. **Healthcare planning**: Medicare enrollment, supplemental insurance
4. **Housing decisions**: Downsize, relocate, or age in place
5. **Income streams**: Create reliable retirement paycheck

### Investment Strategy Shift
**Capital preservation focus:**
- 50-60% in stocks
- 40-50% in bonds and cash
- Reduce portfolio volatility
- Ensure adequate cash reserves

## Retirement (65+)

### Making It Last
**Critical considerations:**
- Sustainable withdrawal rates (typically 3-4%)
- Required minimum distributions (RMDs)
- Healthcare costs planning
- Inflation protection
- Legacy planning

### Income Management
**Three-bucket approach:**
1. **Immediate bucket**: 1-2 years expenses in cash
2. **Intermediate bucket**: 3-10 years expenses in bonds
3. **Long-term bucket**: 10+ years in stocks for growth

### Lifestyle Planning
**Non-financial aspects:**
- Purpose and routine in retirement
- Social connections
- Healthcare and wellness
- Housing suitability
- Family relationships

## Special Life Events Planning

### Marriage Financial Planning
**Before marriage discussions:**
- Debt disclosure
- Spending habits and values
- Financial goals alignment
- Credit histories
- Prenuptial agreement consideration (if appropriate)

**After marriage actions:**
- Update beneficiaries
- Review insurance needs
- Combine or keep separate accounts
- Create joint budget
- Set shared financial goals

### Having Children
**Financial preparations:**
- Increase emergency fund
- Update life insurance
- Create or update will
- Estimate childcare costs
- Start education savings (529 plans)
- Adjust budget for new expenses

### Home Purchase
**Steps to prepare:**
- Save 20% down payment (if possible)
- Check and improve credit score
- Get pre-approved for mortgage
- Budget for closing costs (2-5% of purchase price)
- Plan for moving expenses and initial repairs
- Consider ongoing maintenance (1% of home value annually)

### Career Changes
**Financial considerations:**
- Health insurance continuity
- Retirement plan rollovers
- Emergency fund adequacy
- Income transition planning
- Skill development investment

### Caring for Aging Parents
**Planning conversations:**
- Understand their financial situation
- Discuss long-term care preferences
- Review important documents
- Consider power of attorney
- Explore community resources
- Balance their needs with your financial capacity

## Creating Your Financial Plan

### Components of Comprehensive Plan
1. **Net worth statement**: Current financial snapshot
2. **Cash flow analysis**: Income and expenses
3. **Debt management plan**: Repayment strategy
4. **Emergency fund**: Adequate reserves
5. **Insurance review**: Proper coverage
6. **Investment strategy**: Asset allocation
7. **Retirement plan**: Savings targets and strategy
8. **Tax planning**: Efficiency strategies
9. **Estate planning**: Document preparation
10. **Goal tracking**: Progress measurement

### Working with Professionals
**When to seek help:**
- Complex tax situations
- Investment portfolio above comfort level
- Estate planning needs
- Business ownership
- Major life transitions
- Lack of time or expertise

**Choosing advisors:**
- Fee-only vs. commission-based
- Credentials (CFP, CPA, CFA)
- Fiduciary responsibility
- Experience with similar situations
- Communication style match

## Maintaining Your Plan

### Annual Financial Check-up
**Review each area:**
- Progress toward goals
- Budget effectiveness
- Insurance adequacy
- Investment performance and allocation
- Beneficiary updates
- Document organization

### Adjusting for Life Changes
**Trigger events for plan review:**
- Marriage or divorce
- Birth or adoption
- Job change or loss
- Inheritance or windfall
- Health changes
- Market volatility
- Legislative changes

Remember: Financial planning is a lifelong process, not a one-time event. Regular review and adjustment keeps your plan relevant as your life evolves. Celebrate progress at each stage while staying focused on your long-term vision.`,
      
      quiz: [
        {
          id: 1,
          question: "What is a key priority in early adulthood?",
          options: ["Buy luxury car", "Establish budget and emergency fund", "Maximize credit card debt", "Ignore retirement"],
          correctAnswer: 1,
          explanation: "Early adulthood should focus on financial foundation: budgeting and emergency savings."
        },
        {
          id: 2,
          question: "What age range is mid-career?",
          options: ["18-25", "25-40", "40-55", "55-65"],
          correctAnswer: 2,
          explanation: "Mid-career typically spans ages 40-55, peak earning and saving years."
        },
        {
          id: 3,
          question: "What should you review 5 years before retirement?",
          options: ["Only Social Security", "Retirement expenses and healthcare", "Only investments", "Nothing"],
          correctAnswer: 1,
          explanation: "Five-year pre-retirement review should cover expenses, healthcare, and income strategy."
        },
        {
          id: 4,
          question: "What is the three-bucket retirement approach?",
          options: ["All cash", "Immediate, intermediate, long-term buckets", "Only stocks", "Only bonds"],
          correctAnswer: 1,
          explanation: "Three buckets manage different time horizons: cash (1-2 years), bonds (3-10 years), stocks (10+ years)."
        },
        {
          id: 5,
          question: "What should couples discuss before marriage?",
          options: ["Only wedding plans", "Debt, spending habits, financial goals", "Nothing financial", "Only vacation plans"],
          correctAnswer: 1,
          explanation: "Financial transparency before marriage prevents conflicts and aligns goals."
        },
        {
          id: 6,
          question: "What percentage for down payment is ideal?",
          options: ["0%", "20%", "50%", "100%"],
          correctAnswer: 1,
          explanation: "20% down avoids private mortgage insurance and demonstrates savings discipline."
        },
        {
          id: 7,
          question: "What should you increase before having children?",
          options: ["Credit card limits", "Emergency fund", "Car payments", "Dining budget"],
          correctAnswer: 1,
          explanation: "Larger emergency fund provides cushion for unexpected child-related expenses."
        },
        {
          id: 8,
          question: "What is a sustainable retirement withdrawal rate?",
          options: ["1-2%", "3-4%", "7-8%", "10%+"],
          correctAnswer: 1,
          explanation: "3-4% withdrawal rate helps ensure retirement savings last lifetime."
        },
        {
          id: 9,
          question: "When should you update beneficiaries?",
          options: ["Never", "After major life events", "Only at retirement", "Every week"],
          correctAnswer: 1,
          explanation: "Life events like marriage, divorce, births, or deaths require beneficiary updates."
        },
        {
          id: 10,
          question: "What should mid-career focus include?",
          options: ["Only spending", "Retirement catch-up and college funding", "Only debt accumulation", "No planning needed"],
          correctAnswer: 1,
          explanation: "Mid-career balances retirement acceleration with children's education funding."
        },
        {
          id: 11,
          question: "What is an RMD?",
          options: ["Required Minimum Distribution", "Recommended Maximum Donation", "Retirement Money Deposit", "Regular Monthly Dividend"],
          correctAnswer: 0,
          explanation: "RMDs are minimum amounts that must be withdrawn from retirement accounts after age 72."
        },
        {
          id: 12,
          question: "What should pre-retirement investment focus on?",
          options: ["Only growth", "Capital preservation", "Only speculation", "No investments"],
          correctAnswer: 1,
          explanation: "Pre-retirement shifts toward preserving capital while maintaining some growth."
        },
        {
          id: 13,
          question: "What is a 529 plan for?",
          options: ["Retirement", "Education savings", "Emergency fund", "Vacation fund"],
          correctAnswer: 1,
          explanation: "529 plans offer tax advantages for education savings at any level."
        },
        {
          id: 14,
          question: "How often should you do financial check-up?",
          options: ["Never", "Annually", "Every 10 years", "Only when broke"],
          correctAnswer: 1,
          explanation: "Annual reviews keep your plan current with life changes and goal progress."
        },
        {
          id: 15,
          question: "What should you consider with aging parents?",
          options: ["Ignore their finances", "Their financial situation and care preferences", "Only their will", "Nothing"],
          correctAnswer: 1,
          explanation: "Understanding parents' finances and preferences helps plan for their care needs."
        },
        {
          id: 16,
          question: "What percentage of income should go to retirement in career building?",
          options: ["0%", "5%", "15%+", "50%"],
          correctAnswer: 2,
          explanation: "15% or more allows substantial retirement savings during peak earning years."
        },
        {
          id: 17,
          question: "What should you test before retirement?",
          options: ["Retirement budget", "Only investments", "Nothing", "Social Security only"],
          correctAnswer: 0,
          explanation: "Testing retirement budget while still working reveals if projections are realistic."
        },
        {
          id: 18,
          question: "What is a fiduciary advisor?",
          options: ["Commission-only", "Must act in your best interest", "Salesperson", "Bank employee"],
          correctAnswer: 1,
          explanation: "Fiduciaries are legally required to prioritize clients' interests over their own."
        },
        {
          id: 19,
          question: "What closes the gap in health insurance during job change?",
          options: ["Nothing needed", "COBRA or marketplace coverage", "Hope for health", "Ignore insurance"],
          correctAnswer: 1,
          explanation: "COBRA or ACA marketplace plans prevent coverage gaps between employers."
        },
        {
          id: 20,
          question: "What mindset helps life stage planning?",
          options: ["One-time fix", "Lifelong adaptive process", "Ignore until crisis", "Only follow trends"],
          correctAnswer: 1,
          explanation: "Financial planning evolves with life stages—regular review and adjustment are essential."
        }
      ]
    }
  ],

  // 3. FINAL EXAM (40 Questions - 6-7 questions from each module)
  finalExam: {
    id: "financial-planning-cert-exam",
    title: "Financial Planning Certificate Final Exam",
    passingScore: 70,
    questions: [
      // Module 1 Questions (7)
      {
        id: 1,
        module: 1,
        question: "What is the net worth formula?",
        options: ["Assets + Liabilities", "Assets - Liabilities", "Income - Expenses", "Savings × 10"],
        correctAnswer: 1,
        explanation: "Net worth = What you own (assets) minus what you owe (liabilities)."
      },
      {
        id: 2,
        module: 1,
        question: "Which expense stays the same monthly?",
        options: ["Variable expense", "Fixed expense", "Periodic expense", "Unexpected expense"],
        correctAnswer: 1,
        explanation: "Fixed expenses like rent or car payments remain constant."
      },
      {
        id: 3,
        module: 1,
        question: "What does positive cash flow mean?",
        options: ["Spending more than earning", "Earning more than spending", "Equal income and expenses", "No income"],
        correctAnswer: 1,
        explanation: "Positive cash flow = Income exceeds expenses."
      },
      {
        id: 4,
        module: 1,
        question: "What does SMART stand for in goals?",
        options: ["Simple, Manageable, Achievable, Realistic, Timely", "Specific, Measurable, Achievable, Relevant, Time-bound", "Smart, Meaningful, Actionable, Right, Timely", "Strategic, Measured, Appropriate, Reasonable, Targeted"],
        correctAnswer: 1,
        explanation: "SMART: Specific, Measurable, Achievable, Relevant, Time-bound."
      },
      {
        id: 5,
        module: 1,
        question: "What is a liquid asset?",
        options: ["Real estate", "Savings account", "Retirement account", "Business equipment"],
        correctAnswer: 1,
        explanation: "Liquid assets convert to cash quickly with minimal loss."
      },
      {
        id: 6,
        module: 1,
        question: "What mindset views money as a tool?",
        options: ["Scarcity mindset", "Empowerment mindset", "Avoidance mindset", "Gambling mindset"],
        correctAnswer: 1,
        explanation: "Empowerment mindset sees money as tool for achieving life goals."
      },
      {
        id: 7,
        module: 1,
        question: "What is active income?",
        options: ["Investment income", "Money earned from work", "Inheritance", "Lottery winnings"],
        correctAnswer: 1,
        explanation: "Active income comes from employment or self-employment work."
      },
      // Module 2 Questions (7)
      {
        id: 8,
        module: 2,
        question: "What percentage is for needs in 50/30/20 budget?",
        options: ["20%", "30%", "50%", "70%"],
        correctAnswer: 2,
        explanation: "50% of income goes to needs like housing and food."
      },
      {
        id: 9,
        module: 2,
        question: "What is zero-based budgeting?",
        options: ["No spending", "Every dollar assigned a purpose", "Only saving", "Ignore some expenses"],
        correctAnswer: 1,
        explanation: "Income minus expenses equals zero, with every dollar planned."
      },
      {
        id: 10,
        module: 2,
        question: "What is the envelope system?",
        options: ["Digital only", "Cash in envelopes for categories", "No tracking", "Credit cards only"],
        correctAnswer: 1,
        explanation: "Physical cash divided into envelopes limits category spending."
      },
      {
        id: 11,
        module: 2,
        question: "What helps make saving automatic?",
        options: ["Manual transfers", "Automatic transfers", "Forgetting to save", "Only saving leftovers"],
        correctAnswer: 1,
        explanation: "Automation ensures consistent saving without willpower needed."
      },
      {
        id: 12,
        module: 2,
        question: "What is the 24-hour rule for?",
        options: ["Paying bills", "Non-essential purchases", "Grocery shopping", "Work decisions"],
        correctAnswer: 1,
        explanation: "Waiting 24 hours reduces impulse purchases."
      },
      {
        id: 13,
        module: 2,
        question: "How much emergency fund is recommended?",
        options: ["1 week expenses", "3-6 months expenses", "1 year income", "No emergency fund"],
        correctAnswer: 1,
        explanation: "3-6 months of essential expenses provides adequate safety net."
      },
      {
        id: 14,
        module: 2,
        question: "What should irregular income earners budget based on?",
        options: ["Highest expected", "Lowest expected", "Friend's income", "Last month only"],
        correctAnswer: 1,
        explanation: "Base budget on lowest expected income for financial safety."
      },
      // Module 3 Questions (7)
      {
        id: 15,
        module: 3,
        question: "What is good debt generally?",
        options: ["Credit card for vacation", "Mortgage for home", "Payday loan", "High-interest personal loan"],
        correctAnswer: 1,
        explanation: "Mortgages build equity and typically have reasonable rates."
      },
      {
        id: 16,
        module: 3,
        question: "How does debt avalanche work?",
        options: ["Pay smallest first", "Pay highest interest first", "Pay all equally", "Pay newest first"],
        correctAnswer: 1,
        explanation: "Targets highest interest debt first to save most money."
      },
      {
        id: 17,
        module: 3,
        question: "What is debt snowball method?",
        options: ["Pay largest first", "Pay smallest first", "Ignore some", "Pay random"],
        correctAnswer: 1,
        explanation: "Pays smallest balances first for psychological motivation."
      },
      {
        id: 18,
        module: 3,
        question: "What is a reasonable Debt-to-Income ratio?",
        options: ["Below 20%", "Below 35%", "Below 50%", "Below 70%"],
        correctAnswer: 1,
        explanation: "Below 35% is generally manageable for most households."
      },
      {
        id: 19,
        module: 3,
        question: "What should you maintain while paying debt?",
        options: ["No savings", "Small emergency fund", "Max credit cards", "Luxury spending"],
        correctAnswer: 1,
        explanation: "Small emergency fund prevents new debt from unexpected expenses."
      },
      {
        id: 20,
        module: 3,
        question: "What credit utilization is recommended?",
        options: ["Below 30%", "Below 100%", "Exactly 50%", "As high as possible"],
        correctAnswer: 0,
        explanation: "Below 30% utilization helps maintain good credit scores."
      },
      {
        id: 21,
        module: 3,
        question: "What is debt consolidation?",
        options: ["More debt", "Combining multiple debts into one", "Ignoring debt", "Only minimum payments"],
        correctAnswer: 1,
        explanation: "Combines multiple payments into one, often with better terms."
      },
      // Module 4 Questions (6)
      {
        id: 22,
        module: 4,
        question: "What's main difference between saving and investing?",
        options: ["No difference", "Saving preserves, investing grows", "Only rich invest", "Only poor save"],
        correctAnswer: 1,
        explanation: "Saving protects principal; investing aims to grow it."
      },
      {
        id: 23,
        module: 4,
        question: "What is compound interest?",
        options: ["Interest only on principal", "Interest on principal plus accumulated interest", "Simple interest", "No interest"],
        correctAnswer: 1,
        explanation: "Earns returns on both initial investment and previous earnings."
      },
      {
        id: 24,
        module: 4,
        question: "What does Rule of 72 estimate?",
        options: ["Retirement age", "Years for money to double", "Savings needed", "Debt payoff time"],
        correctAnswer: 1,
        explanation: "72 ÷ interest rate = approximate doubling time."
      },
      {
        id: 25,
        module: 4,
        question: "What is dollar-cost averaging?",
        options: ["Investing lump sum", "Investing fixed amounts regularly", "Only when market high", "Only when market low"],
        correctAnswer: 1,
        explanation: "Regular investments average purchase prices over time."
      },
      {
        id: 26,
        module: 4,
        question: "What should you do before investing?",
        options: ["Pay off high-interest debt", "Buy luxury items", "Take vacation", "Ignore debt"],
        correctAnswer: 0,
        explanation: "High-interest debt typically costs more than investment returns."
      },
      {
        id: 27,
        module: 4,
        question: "What is asset allocation?",
        options: ["Only stocks", "Mixing investment types", "Only bonds", "Only cash"],
        correctAnswer: 1,
        explanation: "Balancing different investments based on goals and risk."
      },
      // Module 5 Questions (6)
      {
        id: 28,
        module: 5,
        question: "What is an insurance premium?",
        options: ["Claim payment", "Amount paid for coverage", "Deductible", "Commission"],
        correctAnswer: 1,
        explanation: "Premium is payment for insurance coverage."
      },
      {
        id: 29,
        module: 5,
        question: "What is a deductible?",
        options: ["Maximum insurer pays", "Amount you pay before insurance", "Monthly payment", "Bonus"],
        correctAnswer: 1,
        explanation: "Out-of-pocket amount before insurance coverage begins."
      },
      {
        id: 30,
        module: 5,
        question: "Who needs life insurance?",
        options: ["Everyone", "People with dependents", "No one", "Only wealthy"],
        correctAnswer: 1,
        explanation: "Life insurance protects those who depend on your income or care."
      },
      {
        id: 31,
        module: 5,
        question: "What is term life insurance?",
        options: ["Lifetime coverage", "Coverage for specific period", "Investment only", "No death benefit"],
        correctAnswer: 1,
        explanation: "Provides coverage for set period at lower cost."
      },
      {
        id: 32,
        module: 5,
        question: "Why disability insurance important?",
        options: ["Never important", "Protects income if can't work", "Only dangerous jobs", "Replaces health insurance"],
        correctAnswer: 1,
        explanation: "Replaces income if injury/illness prevents working."
      },
      {
        id: 33,
        module: 5,
        question: "What does HSA stand for?",
        options: ["Health Spending Account", "Health Savings Account", "Home Savings Account", "High Salary Account"],
        correctAnswer: 1,
        explanation: "Health Savings Account offers tax advantages for medical expenses."
      },
      // Module 6 Questions (7)
      {
        id: 34,
        module: 6,
        question: "What is early adulthood financial priority?",
        options: ["Luxury spending", "Budget and emergency fund", "Max debt", "Ignore retirement"],
        correctAnswer: 1,
        explanation: "Establishing budget and emergency fund builds financial foundation."
      },
      {
        id: 35,
        module: 6,
        question: "What should you review 5 years pre-retirement?",
        options: ["Only Social Security", "Expenses and healthcare", "Only investments", "Nothing"],
        correctAnswer: 1,
        explanation: "Comprehensive review including expenses, healthcare, and income."
      },
      {
        id: 36,
        module: 6,
        question: "What is three-bucket retirement approach?",
        options: ["All cash", "Immediate, intermediate, long-term", "Only stocks", "Only bonds"],
        correctAnswer: 1,
        explanation: "Manages different time horizons for retirement income."
      },
      {
        id: 37,
        module: 6,
        question: "What should couples discuss before marriage?",
        options: ["Only wedding", "Debt and financial goals", "Nothing financial", "Only vacations"],
        correctAnswer: 1,
        explanation: "Financial transparency prevents conflicts and aligns goals."
      },
      {
        id: 38,
        module: 6,
        question: "Ideal home down payment percentage?",
        options: ["0%", "20%", "50%", "100%"],
        correctAnswer: 1,
        explanation: "20% avoids PMI and demonstrates savings discipline."
      },
      {
        id: 39,
        module: 6,
        question: "Sustainable retirement withdrawal rate?",
        options: ["1-2%", "3-4%", "7-8%", "10%+"],
        correctAnswer: 1,
        explanation: "3-4% helps ensure savings last through retirement."
      },
      {
        id: 40,
        module: 6,
        question: "How often financial check-up?",
        options: ["Never", "Annually", "Every 10 years", "Only when broke"],
        correctAnswer: 1,
        explanation: "Annual reviews keep plan current with life changes and progress."
      }
    ]
  }
};

export default financialPlanningCertificate;

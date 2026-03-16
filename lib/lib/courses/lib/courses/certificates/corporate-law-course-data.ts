// Corporate Law (Certificate) - Complete Course Data
// This is a single, continuous TypeScript object ready for implementation

export const corporateLawCertificateCourse = {
  // 1. COURSE METADATA & IDENTIFICATION
  id: "corporate-law-certificate",
  title: "Corporate Law (Certificate)",
  description: "Essential knowledge of corporate legal structures, governance, compliance, and business regulations. Learn foundational concepts for business law, entity formation, and corporate compliance.",
  duration: "6 weeks",
  timeCommitment: "5-7 hours per week",
  price: 12,
  upgradePrice: 18,
  icon: "⚖️",
  badge: "Certificate",
  prerequisites: "No prior legal knowledge required",
  learningOutcomes: [
    "Understand different business entity types and their legal implications",
    "Comprehend corporate governance structures and fiduciary duties",
    "Identify key compliance requirements for corporations",
    "Understand basic contract law principles for business",
    "Recognize intellectual property protections for businesses",
    "Navigate corporate regulatory frameworks and reporting requirements"
  ],

  // 2. MODULE ARCHITECTURE (6 Modules + Final Exam)
  modules: [
    {
      id: 1,
      title: "Business Entities & Formation",
      content: `
# Module 1: Business Entities & Formation

Understanding different business structures is fundamental to corporate law. This module covers entity types, formation requirements, and legal implications.

## **1.1 Types of Business Entities**
Businesses can be structured in **five primary legal forms**:

1. **Sole Proprietorship**
   - **Definition**: Single owner, no legal distinction from owner
   - **Liability**: Unlimited personal liability
   - **Taxation**: Pass-through to owner's personal taxes
   - **Formation**: Simplest, often just business license required
   - **Advantages**: Complete control, simple taxation, minimal compliance
   - **Disadvantages**: Personal liability, limited growth potential

2. **Partnership**
   - **Definition**: Two or more owners (partners)
   - **Types**: General Partnership (GP), Limited Partnership (LP), Limited Liability Partnership (LLP)
   - **Liability**: Varies by type (general partners have unlimited liability)
   - **Taxation**: Pass-through to partners
   - **Formation**: Partnership agreement recommended
   - **Advantages**: Shared responsibility, combined resources
   - **Disadvantages**: Potential partner disputes, shared liability

3. **Limited Liability Company (LLC)**
   - **Definition**: Hybrid structure combining corporation and partnership features
   - **Liability**: Members have limited liability (protects personal assets)
   - **Taxation**: Flexible (can choose pass-through or corporate taxation)
   - **Formation**: Articles of Organization filed with state
   - **Management**: Member-managed or manager-managed
   - **Advantages**: Liability protection, tax flexibility, fewer formalities
   - **Disadvantages**: Varies by state, may have limited life

4. **Corporation (C-Corp)**
   - **Definition**: Separate legal entity from owners (shareholders)
   - **Liability**: Limited shareholder liability
   - **Taxation**: Double taxation (corporate profits taxed, dividends taxed)
   - **Formation**: Articles of Incorporation filed with state
   - **Structure**: Shareholders → Board of Directors → Officers
   - **Advantages**: Strong liability protection, perpetual existence, easier capital raising
   - **Disadvantages**: Complex compliance, double taxation, more expensive

5. **S-Corporation**
   - **Definition**: Special tax status election for corporations
   - **Requirements**: ≤100 shareholders, one class of stock, U.S. shareholders only
   - **Taxation**: Pass-through (avoids double taxation)
   - **Formation**: Must first form C-Corp, then file Form 2553 with IRS
   - **Advantages**: Liability protection + pass-through taxation
   - **Disadvantages**: Strict eligibility requirements, limited growth potential

## **1.2 Formation Requirements**
**Essential formation documents by entity type**:

- **LLC**: Articles of Organization (state filing), Operating Agreement (internal)
- **Corporation**: Articles of Incorporation (state filing), Bylaws (internal)
- **Partnership**: Partnership Agreement (highly recommended, not always filed)
- **Sole Proprietorship**: Business license, DBA ("Doing Business As") if using different name

**Key formation steps**:
1. **Choose Business Name**: Check availability, comply with naming rules
2. **Select Registered Agent**: Required for LLCs and corporations in all states
3. **File Formation Documents**: With appropriate state agency (usually Secretary of State)
4. **Obtain EIN**: Employer Identification Number from IRS
5. **Create Internal Documents**: Operating Agreement, Bylaws, or Partnership Agreement
6. **Comply with Local Requirements**: Business licenses, permits, zoning approvals

## **1.3 Legal Implications by Entity Type**
**Liability protection levels**:
- **Full Protection**: Corporation, LLC, LLP limited partners
- **Partial Protection**: LLP general partners (varies by state)
- **No Protection**: Sole proprietorship, general partnership

**Tax treatment comparison**:
- **Pass-through**: Sole proprietorship, partnership, LLC (default), S-Corp
- **Double Taxation**: C-Corporation
- **Flexible**: LLC can elect corporate taxation if beneficial

**Management structure requirements**:
- **Corporations**: Formal structure required (Board of Directors, Officers)
- **LLCs**: Flexible (can be member-managed like partnership or manager-managed)
- **Partnerships**: Typically equal management rights unless agreement states otherwise

## **1.4 State-Specific Considerations**
**Important variations by state**:
- **Filing Fees**: Range from $50 to $500+ for entity formation
- **Annual Reports**: Required in most states, with varying fees
- **Publication Requirements**: Some states (like NY, AZ) require newspaper publication
- **Professional Entities**: Special rules for lawyers, doctors, architects (PC, PLLC)
- **Series LLC**: Available in some states (separate liability protection for different business units)

**Delaware advantage**: 66% of Fortune 500 companies incorporate in Delaware due to:
- Established corporate law precedents
- Business-friendly court system (Court of Chancery)
- Flexible corporate governance rules
- No state corporate income tax for companies not operating in Delaware

## **1.5 Entity Selection Factors**
**Consider these seven factors when choosing business structure**:
1. **Liability Protection Needed**: Risk level of business operations
2. **Tax Implications**: Current and future tax situation
3. **Number of Owners**: Current and anticipated future owners
4. **Growth Plans**: Potential for outside investment or going public
5. **Administrative Burden**: Willingness to handle compliance requirements
6. **Management Preferences**: Desired control and decision-making structure
7. **Cost Considerations**: Formation and ongoing maintenance costs

**Remember**: The choice of entity affects liability, taxes, control, and compliance obligations for the life of the business.
`,
      completed: false,
      quiz: [
        {
          id: 1,
          question: "Which business entity has unlimited personal liability for the owner?",
          options: ["Corporation", "LLC", "Sole Proprietorship", "S-Corporation"],
          correctAnswer: 2,
          explanation: "Sole proprietorships have unlimited personal liability because there's no legal separation between owner and business."
        },
        {
          id: 2,
          question: "What is the primary tax disadvantage of a C-Corporation?",
          options: ["Pass-through taxation", "Double taxation", "No tax deductions", "Quarterly tax payments"],
          correctAnswer: 1,
          explanation: "C-Corporations face double taxation: corporate profits are taxed, and dividends to shareholders are taxed again."
        },
        {
          id: 3,
          question: "How many shareholders maximum can an S-Corporation have?",
          options: ["50", "100", "200", "Unlimited"],
          correctAnswer: 1,
          explanation: "S-Corporations are limited to 100 shareholders maximum by IRS regulations."
        },
        {
          id: 4,
          question: "What document must an LLC file with the state to form legally?",
          options: ["Operating Agreement", "Articles of Organization", "Partnership Agreement", "Corporate Bylaws"],
          correctAnswer: 1,
          explanation: "Articles of Organization (called Certificate of Formation in some states) must be filed with the state to form an LLC."
        },
        {
          id: 5,
          question: "What percentage of Fortune 500 companies incorporate in Delaware?",
          options: ["33%", "50%", "66%", "75%"],
          correctAnswer: 2,
          explanation: "Approximately 66% of Fortune 500 companies incorporate in Delaware due to its business-friendly legal environment."
        },
        {
          id: 6,
          question: "Which entity type offers the most flexible tax treatment options?",
          options: ["Sole Proprietorship", "Partnership", "LLC", "Corporation"],
          correctAnswer: 2,
          explanation: "LLCs offer flexible tax treatment - they can choose to be taxed as pass-through entities or as corporations."
        },
        {
          id: 7,
          question: "What is required for all LLCs and corporations in every state?",
          options: ["Business license", "Registered agent", "Board of directors", "Quarterly reports"],
          correctAnswer: 1,
          explanation: "All LLCs and corporations must have a registered agent in the state where they're formed."
        },
        {
          id: 8,
          question: "Which business structure requires the most formal management structure?",
          options: ["Sole Proprietorship", "Partnership", "LLC", "Corporation"],
          correctAnswer: 3,
          explanation: "Corporations require the most formal structure with shareholders, a board of directors, and officers."
        },
        {
          id: 9,
          question: "What IRS form must be filed to elect S-Corporation status?",
          options: ["Form 1040", "Form 2553", "Form 1120S", "Form 1065"],
          correctAnswer: 1,
          explanation: "Form 2553 must be filed with the IRS to elect S-Corporation tax status."
        },
        {
          id: 10,
          question: "Which entity type can have only one class of stock?",
          options: ["C-Corporation", "LLC", "S-Corporation", "Partnership"],
          correctAnswer: 2,
          explanation: "S-Corporations can only have one class of stock, while C-Corporations can have multiple classes."
        },
        {
          id: 11,
          question: "What is the internal governing document for an LLC?",
          options: ["Articles of Organization", "Operating Agreement", "Corporate Bylaws", "Partnership Agreement"],
          correctAnswer: 1,
          explanation: "The Operating Agreement is the internal governing document that outlines how an LLC will operate."
        },
        {
          id: 12,
          question: "Which business entity type has the simplest formation requirements?",
          options: ["Corporation", "LLC", "Sole Proprietorship", "Partnership"],
          correctAnswer: 2,
          explanation: "Sole proprietorships have the simplest formation, often requiring just a business license."
        },
        {
          id: 13,
          question: "What court in Delaware specializes in corporate law cases?",
          options: ["Supreme Court", "Court of Chancery", "Business Court", "Corporate Tribunal"],
          correctAnswer: 1,
          explanation: "Delaware's Court of Chancery specializes in corporate law and has established many important precedents."
        },
        {
          id: 14,
          question: "Which entity type provides liability protection but allows pass-through taxation by default?",
          options: ["C-Corporation", "Sole Proprietorship", "LLC", "General Partnership"],
          correctAnswer: 2,
          explanation: "LLCs provide liability protection to members and have pass-through taxation by default."
        },
        {
          id: 15,
          question: "What must be obtained from the IRS for most businesses with employees?",
          options: ["Business license", "EIN", "State ID number", "Tax exemption certificate"],
          correctAnswer: 1,
          explanation: "An Employer Identification Number (EIN) must be obtained from the IRS for most businesses, especially those with employees."
        },
        {
          id: 16,
          question: "Which partnership type limits liability for all partners?",
          options: ["General Partnership", "Limited Partnership", "Limited Liability Partnership", "Joint Venture"],
          correctAnswer: 2,
          explanation: "Limited Liability Partnerships (LLPs) provide liability protection to all partners, unlike general partnerships."
        },
        {
          id: 17,
          question: "What is the main advantage of a corporation over an LLC?",
          options: ["Simpler compliance", "Better for raising capital", "Lower taxes", "Fewer formal meetings"],
          correctAnswer: 1,
          explanation: "Corporations are generally better for raising capital through stock offerings to multiple investors."
        },
        {
          id: 18,
          question: "Which factor is NOT typically considered when choosing a business entity?",
          options: ["Liability protection", "Tax implications", "Number of owners", "Owner's favorite color"],
          correctAnswer: 3,
          explanation: "While many factors matter, personal color preferences don't affect the legal or tax implications of entity choice."
        },
        {
          id: 19,
          question: "What special business structure exists for professionals like lawyers and doctors?",
          options: ["Professional Corporation", "Specialized LLC", "Expert Partnership", "Licensed Entity"],
          correctAnswer: 0,
          explanation: "Professional Corporations (PCs) or Professional LLCs (PLLCs) are special structures for licensed professionals."
        },
        {
          id: 20,
          question: "Which entity formation document is typically NOT filed with the state?",
          options: ["Articles of Organization", "Articles of Incorporation", "Operating Agreement", "Certificate of Formation"],
          correctAnswer: 2,
          explanation: "Operating Agreements for LLCs are internal documents that are typically not filed with the state."
        }
      ]
    },
    {
      id: 2,
      title: "Corporate Governance & Fiduciary Duties",
      content: `
# Module 2: Corporate Governance & Fiduciary Duties

Corporate governance establishes the framework for decision-making and accountability. This module covers governance structures, fiduciary duties, and director/officer responsibilities.

## **2.1 Corporate Governance Structure**
**Three-tier governance structure in corporations**:

1. **Shareholders**
   - **Role**: Owners of the corporation
   - **Rights**: Vote on major decisions, elect directors, approve fundamental changes
   - **Meetings**: Annual shareholder meetings required
   - **Voting**: Typically one vote per share (can vary by class)
   - **Limited Liability**: Generally not personally liable for corporate debts

2. **Board of Directors**
   - **Role**: Governing body elected by shareholders
   - **Responsibilities**: Set strategy, oversee management, declare dividends
   - **Size**: Typically 3-15 members (public companies average 11)
   - **Committees**: Audit, Compensation, Nominating & Governance
   - **Election**: Staggered or annual elections (varies by corporate bylaws)

3. **Officers**
   - **Role**: Day-to-day management appointed by Board
   - **Positions**: CEO, CFO, COO, Secretary, Treasurer (required in most states)
   - **Authority**: Defined in bylaws and board resolutions
   - **Reporting**: Officers report to Board of Directors

## **2.2 Fiduciary Duties**
**Three core fiduciary duties of directors and officers**:

1. **Duty of Care**
   - **Definition**: Act with care that reasonably prudent person would use
   - **Requirements**: Informed decision-making, reasonable investigation
   - **Business Judgment Rule**: Protection if acting in good faith, with care, and in corporation's best interest
   - **Violations**: Gross negligence, failure to become informed

2. **Duty of Loyalty**
   - **Definition**: Put corporation's interests before personal interests
   - **Requirements**: Avoid conflicts of interest, no self-dealing
   - **Disclosure**: Must fully disclose any potential conflicts
   - **Corporate Opportunity Doctrine**: Cannot take business opportunities that belong to corporation

3. **Duty of Good Faith**
   - **Definition**: Act with honesty and faithfulness to purpose
   - **Requirements**: Intentional disregard of duties, conscious wrongdoing
   - **Examples**: Knowingly violating law, failing to monitor operations
   - **Relation**: Often considered part of duty of loyalty

## **2.3 Board Committees & Responsibilities**
**Mandatory and common board committees**:

- **Audit Committee**
  - **Composition**: All independent directors, at least one financial expert
  - **Responsibilities**: Oversee financial reporting, internal controls, external auditor
  - **Requirements**: Sarbanes-Oxley Act mandates for public companies
  - **Meetings**: Quarterly minimum, more during financial reporting periods

- **Compensation Committee**
  - **Composition**: All independent directors
  - **Responsibilities**: Set executive compensation, review compensation policies
  - **Say-on-Pay**: Shareholder advisory votes on executive compensation (Dodd-Frank requirement)
  - **Disclosure**: Must explain compensation decisions in proxy statements

- **Nominating & Governance Committee**
  - **Composition**: All independent directors
  - **Responsibilities**: Identify board candidates, recommend governance policies
  - **Diversity**: Increasing focus on gender, racial, and experiential diversity
  - **Evaluation**: Oversees board and director performance evaluations

## **2.4 Shareholder Rights & Protections**
**Fundamental shareholder rights**:

1. **Voting Rights**
   - **Annual Meetings**: Right to attend and vote
   - **Proxy Voting**: Can vote without attending meeting
   - **Cumulative Voting**: Available in some states for director elections
   - **Majority vs. Supermajority**: Different vote requirements for different actions

2. **Information Rights**
   - **Financial Statements**: Right to receive annual financial statements
   - **Inspection Rights**: Right to inspect corporate books and records (with proper purpose)
   - **Proxy Statements**: Receive information before shareholder meetings

3. **Economic Rights**
   - **Dividends**: Right to receive declared dividends
   - **Liquidation**: Right to share in assets upon dissolution
   - **Preemptive Rights**: Right to maintain percentage ownership in new share offerings (if provided in charter)

4. **Protection Rights**
   - **Derivative Lawsuits**: Can sue on behalf of corporation when directors fail to act
   - **Appraisal Rights**: Right to fair value payment in certain mergers/acquisitions
   - **Oppression Remedies**: Protection against majority shareholder oppression

## **2.5 Governance Documents & Compliance**
**Key governance documents**:

- **Articles of Incorporation** (Certificate of Incorporation)
  - **Purpose**: Filed with state, establishes corporate existence
  - **Contents**: Corporate name, purpose, stock structure, registered agent
  - **Amendments**: Require shareholder approval

- **Bylaws**
  - **Purpose**: Internal operating rules
  - **Contents**: Meeting procedures, officer duties, voting requirements
  - **Amendments**: Typically by board or shareholders (as specified)

- **Board Resolutions**
  - **Purpose**: Formalize board decisions
  - **Requirements**: Major decisions should be documented
  - **Examples**: Approving contracts, declaring dividends, authorizing stock

**Compliance requirements**:
- **Annual Meetings**: Required for shareholders and board
- **Minutes**: Must be kept for all board and shareholder meetings
- **Corporate Records**: Must be maintained at principal office
- **Annual Reports**: Filed with state (requirements vary)
- **Tax Filings**: Federal, state, and local tax compliance

**Remember**: Good corporate governance balances authority, accountability, and transparency to protect all stakeholders.
`,
      completed: false,
      quiz: [
        {
          id: 1,
          question: "What are the three core fiduciary duties of corporate directors?",
          options: ["Duty of Care, Duty of Loyalty, Duty of Good Faith", "Duty to Shareholders, Duty to Employees, Duty to Customers", "Financial Duty, Legal Duty, Ethical Duty", "Management Duty, Oversight Duty, Compliance Duty"],
          correctAnswer: 0,
          explanation: "The three core fiduciary duties are Duty of Care, Duty of Loyalty, and Duty of Good Faith."
        },
        {
          id: 2,
          question: "Which board committee is required by the Sarbanes-Oxley Act for public companies?",
          options: ["Compensation Committee", "Audit Committee", "Nominating Committee", "Risk Committee"],
          correctAnswer: 1,
          explanation: "Sarbanes-Oxley Act requires public companies to have an audit committee composed entirely of independent directors."
        },
        {
          id: 3,
          question: "What legal protection shields directors from liability for good faith business decisions?",
          options: ["Corporate Shield", "Business Judgment Rule", "Director Immunity", "Fiduciary Protection"],
          correctAnswer: 1,
          explanation: "The Business Judgment Rule protects directors from liability for decisions made in good faith with reasonable care."
        },
        {
          id: 4,
          question: "How many directors typically serve on public company boards?",
          options: ["3-5", "5-7", "7-9", "11 average"],
          correctAnswer: 3,
          explanation: "Public company boards average about 11 directors, though sizes range from 3 to 15 or more."
        },
        {
          id: 5,
          question: "What shareholder right allows them to sue on behalf of the corporation?",
          options: ["Direct lawsuit", "Derivative lawsuit", "Class action", "Appraisal action"],
          correctAnswer: 1,
          explanation: "Derivative lawsuits allow shareholders to sue on behalf of the corporation when directors fail to act."
        },
        {
          id: 6,
          question: "Which fiduciary duty prohibits directors from taking corporate opportunities for themselves?",
          options: ["Duty of Care", "Duty of Loyalty", "Duty of Good Faith", "Duty of Disclosure"],
          correctAnswer: 1,
          explanation: "The Duty of Loyalty includes the Corporate Opportunity Doctrine, prohibiting directors from taking opportunities that belong to the corporation."
        },
        {
          id: 7,
          question: "What document contains the internal operating rules of a corporation?",
          options: ["Articles of Incorporation", "Corporate Charter", "Bylaws", "Operating Agreement"],
          correctAnswer: 2,
          explanation: "Corporate Bylaws contain the internal operating rules and procedures for the corporation."
        },
        {
          id: 8,
          question: "What is the primary role of the board of directors?",
          options: ["Day-to-day management", "Setting corporate strategy", "Marketing products", "Handling customer complaints"],
          correctAnswer: 1,
          explanation: "The board's primary role is setting corporate strategy and overseeing management, not day-to-day operations."
        },
        {
          id: 9,
          question: "Which committee typically sets executive compensation?",
          options: ["Audit Committee", "Compensation Committee", "Governance Committee", "Executive Committee"],
          correctAnswer: 1,
          explanation: "The Compensation Committee is responsible for setting executive compensation packages."
        },
        {
          id: 10,
          question: "What must shareholders approve according to corporate law?",
          options: ["Daily operations", "Fundamental changes like mergers", "Hiring employees", "Marketing campaigns"],
          correctAnswer: 1,
          explanation: "Shareholders must approve fundamental changes like mergers, acquisitions, and charter amendments."
        },
        {
          id: 11,
          question: "What doctrine prevents directors from personally benefiting from corporate opportunities?",
          options: ["Business Judgment Rule", "Corporate Opportunity Doctrine", "Fiduciary Exclusion", "Director Benefit Rule"],
          correctAnswer: 1,
          explanation: "The Corporate Opportunity Doctrine is part of the Duty of Loyalty, preventing directors from taking corporate opportunities."
        },
        {
          id: 12,
          question: "How often are annual shareholder meetings typically required?",
          options: ["Monthly", "Quarterly", "Annually", "Biennially"],
          correctAnswer: 2,
          explanation: "Corporations are generally required to hold annual shareholder meetings."
        },
        {
          id: 13,
          question: "What type of voting allows shareholders to concentrate votes on fewer director candidates?",
          options: ["Proxy voting", "Cumulative voting", "Straight voting", "Majority voting"],
          correctAnswer: 1,
          explanation: "Cumulative voting allows shareholders to concentrate their votes on fewer candidates, helping minority representation."
        },
        {
          id: 14,
          question: "What must directors do regarding conflicts of interest?",
          options: ["Ignore them", "Fully disclose them", "Hide them", "Resign immediately"],
          correctAnswer: 1,
          explanation: "Directors must fully disclose any conflicts of interest to the board."
        },
        {
          id: 15,
          question: "What document establishes a corporation's existence with the state?",
          options: ["Bylaws", "Articles of Incorporation", "Board Resolutions", "Shareholder Agreement"],
          correctAnswer: 1,
          explanation: "Articles of Incorporation (or Certificate of Incorporation) are filed with the state to create the corporation."
        },
        {
          id: 16,
          question: "What right allows shareholders to receive fair value for shares in certain mergers?",
          options: ["Voting right", "Appraisal right", "Dividend right", "Inspection right"],
          correctAnswer: 1,
          explanation: "Appraisal rights allow shareholders to receive fair value for their shares in certain mergers and acquisitions."
        },
        {
          id: 17,
          question: "Who appoints corporate officers?",
          options: ["Shareholders", "Board of Directors", "CEO alone", "Government regulators"],
          correctAnswer: 1,
          explanation: "The board of directors appoints corporate officers to handle day-to-day management."
        },
        {
          id: 18,
          question: "What must be kept for all board and shareholder meetings?",
          options: ["Video recordings", "Audio recordings", "Minutes", "Attendance sheets"],
          correctAnswer: 2,
          explanation: "Corporations must keep minutes of all board and shareholder meetings as official records."
        },
        {
          id: 19,
          question: "What law requires shareholder advisory votes on executive compensation?",
          options: ["Sarbanes-Oxley Act", "Dodd-Frank Act", "Securities Act of 1933", "Exchange Act of 1934"],
          correctAnswer: 1,
          explanation: "The Dodd-Frank Act requires say-on-pay shareholder advisory votes on executive compensation."
        },
        {
          id: 20,
          question: "What is the typical board committee structure for public companies?",
          options: ["No committees required", "Audit, Compensation, and Nominating committees", "Only Executive Committee", "As determined by CEO"],
          correctAnswer: 1,
          explanation: "Public companies typically have Audit, Compensation, and Nominating & Governance committees."
        }
      ]
    },
    {
      id: 3,
      title: "Contracts & Commercial Transactions",
      content: `
# Module 3: Contracts & Commercial Transactions

Contract law forms the foundation of all business relationships. This module covers contract formation, essential elements, types of contracts, and commercial transaction principles.

## **3.1 Essential Elements of a Contract**
**Five essential elements for a valid contract**:

1. **Offer**
   - **Definition**: Clear, definite promise to do or refrain from doing something
   - **Requirements**: Must be communicated to offeree, show intent to be bound
   - **Termination**: Can be revoked, rejected, or expire by time
   - **Examples**: Price quote, proposal, bid

2. **Acceptance**
   - **Definition**: Unqualified agreement to terms of offer
   - **Requirements**: Must mirror offer terms (mirror image rule)
   - **Methods**: Can be express (verbal/written) or implied by conduct
   - **Timing**: Generally effective upon dispatch (mailbox rule)

3. **Consideration**
   - **Definition**: Something of value exchanged between parties
   - **Types**: Benefit to promisor or detriment to promisee
   - **Adequacy**: Courts generally don't evaluate fairness, only existence
   - **Examples**: Money, goods, services, promises

4. **Mutual Assent (Meeting of the Minds)**
   - **Definition**: Both parties understand and agree to same terms
   - **Manifestation**: Objective standard (what reasonable person would understand)
   - **Mistake**: Unilateral vs. mutual mistakes can affect validity
   - **Misrepresentation/Fraud**: Can void contract

5. **Legal Capacity**
   - **Definition**: Parties must have legal ability to enter contract
   - **Minors**: Generally can disaffirm contracts (except necessities)
   - **Mental Incapacity**: Cannot enter binding contracts
   - **Intoxication**: May void contract if unable to understand nature

6. **Legality of Purpose**
   - **Requirement**: Contract must be for legal purpose
   - **Illegal Contracts**: Void and unenforceable
   - **Examples**: Contracts for illegal activities, against public policy

## **3.2 Types of Contracts**
**Various contract classifications**:

- **Express vs. Implied Contracts**
  - **Express**: Terms explicitly stated (oral or written)
  - **Implied**: Created by parties' conduct (implied-in-fact or implied-in-law/quasi-contract)

- **Bilateral vs. Unilateral Contracts**
  - **Bilateral**: Both parties make promises (most common)
  - **Unilateral**: One party promises, other performs act to accept

- **Executed vs. Executory Contracts**
  - **Executed**: All parties have fully performed
  - **Executory**: Performance still owed by one or both parties

- **Valid, Void, Voidable, and Unenforceable**
  - **Valid**: Meets all legal requirements
  - **Void**: Never legally binding (illegal purpose, lacks element)
  - **Voidable**: One party can cancel (minor, fraud, duress)
  - **Unenforceable**: Valid but court won't enforce (statute of frauds issue)

## **3.3 Statute of Frauds**
**Contracts that must be in writing to be enforceable**:

1. **Real Estate Transactions**: Contracts for sale of land or interests in land
2. **Marriage Consideration**: Contracts made in consideration of marriage
3. **One-Year Rule**: Contracts that cannot be performed within one year
4. **Goods $500+**: Sale of goods for $500 or more (UCC §2-201)
5. **Suretyship**: Promise to pay another's debt
6. **Executor/Administrator**: Promise by estate executor to pay estate debts personally

**Writing requirements**:
- **Signature**: Party to be charged must sign
- **Essential Terms**: Must include key terms (parties, subject matter, price, etc.)
- **Electronic Signatures**: Generally valid (ESIGN Act, UETA)
- **Exceptions**: Part performance, admission in court, merchant confirmations

## **3.4 Uniform Commercial Code (UCC)**
**Key UCC provisions for commercial transactions**:

- **Article 2**: Sale of Goods
  - **Scope**: Applies to transactions in goods
  - **Formation**: Less formal than common law (open terms allowed)
  - **Merchant Rules**: Special rules apply between merchants
  - **Warranties**: Implied warranties of merchantability and fitness

- **Article 3**: Negotiable Instruments
  - **Types**: Checks, notes, drafts, certificates of deposit
  - **Requirements**: Must be written, signed, unconditional promise, fixed amount, payable on demand or at definite time, payable to order or bearer

- **Article 9**: Secured Transactions
  - **Security Interests**: Creditor's interest in debtor's collateral
  - **Perfection**: Usually by filing financing statement (UCC-1)
  - **Priority**: Determines which creditor gets paid first

## **3.5 Contract Remedies**
**Legal remedies for breach of contract**:

1. **Compensatory Damages**
   - **Purpose**: Put injured party in position as if contract performed
   - **Types**: Expectation, reliance, consequential
   - **Limitation**: Must be reasonably foreseeable at contract formation
   - **Mitigation**: Injured party must take reasonable steps to minimize damages

2. **Specific Performance**
   - **Definition**: Court orders breaching party to perform contract
   - **Availability**: Usually only for unique goods (real estate, rare items)
   - **Limitations**: Not available for personal service contracts

3. **Rescission & Restitution**
   - **Rescission**: Cancel contract, return parties to pre-contract position
   - **Restitution**: Return benefits received
   - **Grounds**: Fraud, mistake, incapacity, failure of consideration

4. **Liquidated Damages**
   - **Definition**: Pre-agreed damage amount in contract
   - **Requirements**: Must be reasonable forecast of actual damages
   - **Penalty Rule**: Cannot be penalty (unenforceable if punitive)

5. **Injunctive Relief**
   - **Definition**: Court order to do or stop doing something
   - **Types**: Temporary restraining order, preliminary injunction, permanent injunction
   - **Requirements**: Irreparable harm, likelihood of success on merits

**Remember**: A well-drafted contract anticipates potential issues and provides clear mechanisms for resolution.
`,
      completed: false,
      quiz: [
        {
          id: 1,
          question: "What are the five essential elements of a valid contract?",
          options: ["Offer, Acceptance, Consideration, Mutual Assent, Legality", "Writing, Signature, Witness, Notary, Recording", "Parties, Price, Date, Location, Purpose", "Good Faith, Fair Dealing, Honesty, Transparency, Equity"],
          correctAnswer: 0,
          explanation: "The five essential elements are Offer, Acceptance, Consideration, Mutual Assent (Meeting of the Minds), and Legality."
        },
        {
          id: 2,
          question: "Which UCC Article governs the sale of goods?",
          options: ["Article 1", "Article 2", "Article 3", "Article 9"],
          correctAnswer: 1,
          explanation: "UCC Article 2 governs transactions involving the sale of goods."
        },
        {
          id: 3,
          question: "What is the minimum dollar amount requiring a written contract for goods under the Statute of Frauds?",
          options: ["$100", "$500", "$1,000", "$5,000"],
          correctAnswer: 1,
          explanation: "The UCC Statute of Frauds requires written contracts for sale of goods valued at $500 or more."
        },
        {
          id: 4,
          question: "What remedy involves canceling a contract and returning parties to their original positions?",
          options: ["Compensatory damages", "Specific performance", "Rescission", "Liquidated damages"],
          correctAnswer: 2,
          explanation: "Rescission cancels the contract and aims to return parties to their pre-contract positions."
        },
        {
          id: 5,
          question: "What is required for a negotiable instrument under UCC Article 3?",
          options: ["Must be notarized", "Must be in writing, signed, unconditional promise, fixed amount", "Must be registered with state", "Must have three witnesses"],
          correctAnswer: 1,
          explanation: "Negotiable instruments must be written, signed, contain unconditional promise, fixed amount, payable on demand/definite time, to order/bearer."
        },
        {
          id: 6,
          question: "Which contract type involves one promise in exchange for performance of an act?",
          options: ["Bilateral contract", "Unilateral contract", "Executory contract", "Implied contract"],
          correctAnswer: 1,
          explanation: "Unilateral contracts involve one promise in exchange for performance of an act (like reward offers)."
        },
        {
          id: 7,
          question: "What is the 'mailbox rule' in contract law?",
          options: ["Acceptance effective when mailed", "Offers must be sent by certified mail", "Contracts void if not mailed", "All business contracts must be mailed"],
          correctAnswer: 0,
          explanation: "The mailbox rule states that acceptance is generally effective when dispatched (mailed), not when received."
        },
        {
          id: 8,
          question: "What UCC form is used to perfect a security interest?",
          options: ["UCC-1", "UCC-3", "UCC-9", "UCC-11"],
          correctAnswer: 0,
          explanation: "A UCC-1 financing statement is filed to perfect a security interest under Article 9."
        },
        {
          id: 9,
          question: "Which contract remedy orders a party to perform as promised?",
          options: ["Damages", "Specific performance", "Rescission", "Restitution"],
          correctAnswer: 1,
          explanation: "Specific performance is a court order requiring a party to perform their contractual obligations."
        },
        {
          id: 10,
          question: "What is the legal term for 'meeting of the minds'?",
          options: ["Consideration", "Mutual assent", "Capacity", "Legality"],
          correctAnswer: 1,
          explanation: "Mutual assent means both parties understand and agree to the same contractual terms."
        },
        {
          id: 11,
          question: "Which contracts typically fall under the Statute of Frauds requirement?",
          options: ["All oral contracts", "Contracts that cannot be performed within one year", "All business contracts", "Only real estate contracts"],
          correctAnswer: 1,
          explanation: "Contracts that cannot be performed within one year from making must be in writing under Statute of Frauds."
        },
        {
          id: 12,
          question: "What type of damages aim to put injured party in position as if contract was performed?",
          options: ["Punitive damages", "Compensatory damages", "Nominal damages", "Liquidated damages"],
          correctAnswer: 1,
          explanation: "Compensatory damages aim to compensate for actual losses and put party in position as if contract performed."
        },
        {
          id: 13,
          question: "What is required for consideration to be valid?",
          options: ["Must be adequate (fair value)", "Must be money", "Something of legal value exchanged", "Must be substantial"],
          correctAnswer: 2,
          explanation: "Consideration requires something of legal value (benefit/detriment) exchanged between parties."
        },
        {
          id: 14,
          question: "Which UCC warranty is automatically included in merchant sales?",
          options: ["Warranty of title", "Warranty of merchantability", "Express warranty", "No warranties are automatic"],
          correctAnswer: 1,
          explanation: "UCC implies warranty of merchantability in sales by merchants - goods must be fit for ordinary purposes."
        },
        {
          id: 15,
          question: "What makes a contract voidable?",
          options: ["Illegal purpose", "Lacks essential element", "One party can cancel (e.g., minor)", "Never legally existed"],
          correctAnswer: 2,
          explanation: "Voidable contracts are valid but can be canceled by one party (e.g., minor, fraud victim)."
        },
        {
          id: 16,
          question: "What law governs electronic signatures in interstate commerce?",
          options: ["Uniform Electronic Transactions Act", "Electronic Signatures Act", "ESIGN Act", "Digital Contract Law"],
          correctAnswer: 2,
          explanation: "The ESIGN Act (Electronic Signatures in Global and National Commerce Act) governs electronic signatures."
        },
        {
          id: 17,
          question: "What is the 'mirror image rule' in contract formation?",
          options: ["Acceptance must exactly match offer terms", "Both parties must be mirror images", "Contracts must be duplicated", "All terms must be reflected in writing"],
          correctAnswer: 0,
          explanation: "The mirror image rule requires acceptance to exactly match offer terms; different terms may be counteroffer."
        },
        {
          id: 18,
          question: "What type of contract is created by parties' conduct rather than explicit agreement?",
          options: ["Express contract", "Implied contract", "Unilateral contract", "Executed contract"],
          correctAnswer: 1,
          explanation: "Implied contracts are created by parties' conduct rather than explicit verbal or written agreement."
        },
        {
          id: 19,
          question: "What must an injured party do to minimize damages from breach?",
          options: ["Sue immediately", "Mitigate damages", "Do nothing", "Breach their own obligations"],
          correctAnswer: 1,
          explanation: "The duty to mitigate requires injured parties to take reasonable steps to minimize their damages."
        },
        {
          id: 20,
          question: "What makes liquidated damages clauses unenforceable?",
          options: ["If they're reasonable estimates", "If they're penalties", "If they're too small", "If they're not in writing"],
          correctAnswer: 1,
          explanation: "Liquidated damages clauses that act as penalties (unreasonable forecasts) are unenforceable."
        }
      ]
    },
    {
      id: 4,
      title: "Intellectual Property & Corporate Assets",
      content: `
# Module 4: Intellectual Property & Corporate Assets

Intellectual property represents valuable corporate assets that require protection. This module covers IP types, protection mechanisms, licensing, and corporate asset management.

## **4.1 Types of Intellectual Property**
**Four main categories of intellectual property**:

1. **Patents**
   - **Definition**: Exclusive rights to inventions or discoveries
   - **Types**: Utility (20 years), Design (15 years), Plant (20 years)
   - **Requirements**: Novel, non-obvious, useful
   - **Protection**: Prevents others from making, using, selling invention
   - **Process**: File with USPTO, examination, grant (2-5 year process)
   - **Maintenance**: Fees due at 3.5, 7.5, and 11.5 years

2. **Trademarks**
   - **Definition**: Words, symbols, designs identifying source of goods/services
   - **Types**: Standard character, stylized/design, sound, color
   - **Protection**: Prevents consumer confusion
   - **Rights**: Use in commerce creates common law rights
   - **Registration**: USPTO registration provides nationwide protection
   - **Duration**: Renewable every 10 years with continued use

3. **Copyrights**
   - **Definition**: Protection for original works of authorship
   - **Coverage**: Literary, musical, dramatic, artistic works
   - **Requirements**: Original, creative, fixed in tangible medium
   - **Rights**: Reproduction, distribution, adaptation, public performance/display
   - **Duration**: Life of author + 70 years, or 95 years from publication for works for hire
   - **Registration**: Not required but provides litigation benefits

4. **Trade Secrets**
   - **Definition**: Confidential business information with economic value
   - **Examples**: Formulas, processes, customer lists, business methods
   - **Protection**: No registration, must take reasonable steps to maintain secrecy
   - **Duration**: Potentially indefinite if kept secret
   - **Legal Basis**: State laws (Uniform Trade Secrets Act), Federal Defend Trade Secrets Act

## **4.2 Patent Protection Strategies**
**Patent prosecution process**:

1. **Prior Art Search**: Determine if invention is novel
2. **Patentability Assessment**: Evaluate novelty, non-obviousness, utility
3. **Application Preparation**: Detailed description, claims, drawings
4. **USPTO Filing**: Provisional (12-month placeholder) or non-provisional
5. **Examination**: Patent examiner reviews, may issue office actions
6. **Prosecution**: Respond to objections, amend claims if necessary
7. **Grant/Issuance**: Patent issues if requirements met

**Patent claim types**:
- **Independent Claims**: Standalone, define core invention
- **Dependent Claims**: Refer to previous claims, add limitations
- **Means-Plus-Function**: Describe function, structure in specification

**International considerations**:
- **Paris Convention**: 12-month priority filing in other countries
- **PCT Application**: International application preserving rights in 153+ countries
- **National Phase**: Must enter individual countries within 30 months

## **4.3 Trademark Registration & Protection**
**Trademark selection and registration**:

1. **Clearance Search**: Check for conflicting marks
2. **Strength Assessment**: Evaluate distinctiveness
   - **Fanciful**: Made-up words (Kodak, Xerox) - strongest
   - **Arbitrary**: Real words unrelated to product (Apple computers) - strong
   - **Suggestive**: Hint at product qualities (Coppertone) - protectable
   - **Descriptive**: Describe product (Vision Center) - only with secondary meaning
   - **Generic**: Product name (Computer) - never protectable

3. **Application Process**:
   - **Intent-to-Use**: File before actual use (must show use within 6 months+extensions)
   - **Use-Based**: File after using mark in commerce
   - **Examination**: USPTO examines for conflicts, descriptiveness, other issues
   - **Publication**: Opposition period (30 days for others to object)
   - **Registration**: Certificate issues if no successful opposition

**Trademark maintenance**:
- **Section 8 Declaration**: File between 5th-6th year showing continued use
- **Section 15 Declaration**: File to make registration incontestable
- **Section 9 Renewal**: Every 10 years with continued use
- **Monitoring**: Watch for infringements, file oppositions against conflicting applications

## **4.4 Copyright Protection & Management**
**Copyright ownership issues**:

- **Works Made for Hire**: Employer owns copyright if:
  1. Employee creates within scope of employment, OR
  2. Specially ordered/commissioned work with written agreement specifying work for hire

- **Joint Works**: Multiple authors, each owns undivided interest
- **Transfer of Rights**: Must be in writing (except non-exclusive licenses)
- **Termination Rights**: Authors/heirs can terminate transfers after 35-40 years

**Digital Millennium Copyright Act (DMCA)**:
- **Safe Harbor**: Protects online service providers from liability for user infringement
- **Takedown Notices**: Procedure for copyright owners to request removal of infringing content
- **Counter-Notice**: Procedure for users to contest takedowns

**Fair Use Doctrine**: Allows limited use without permission for:
1. Criticism/commentary
2. News reporting
3. Teaching/scholarship
4. Research
**Factors**: Purpose, nature of work, amount used, effect on market

## **4.5 Trade Secret Protection Programs**
**Essential elements of trade secret protection**:

1. **Identification**: Document what constitutes trade secrets
2. **Physical Security**: Secure facilities, locked cabinets, access controls
3. **Digital Security**: Encryption, passwords, access logs, network security
4. **Employee Policies**: Confidentiality agreements, training, exit interviews
5. **Third-Party Controls**: Nondisclosure agreements, limited access, audits

**Uniform Trade Secrets Act (UTSA)**:
- **Adopted**: By 48 states (NY, NC exceptions)
- **Definition**: Information that derives economic value from not being generally known, subject to reasonable secrecy efforts
- **Remedies**: Injunctions, damages (actual loss + unjust enrichment), attorney fees, exemplary damages for willful/malicious misappropriation

**Defend Trade Secrets Act (DTSA)**:
- **Federal Law**: 2016, provides federal civil cause of action
- **Ex Parte Seizure**: In extraordinary circumstances, can seize property to prevent dissemination
- **Whistleblower Immunity**: Protection for employees reporting violations to government

## **4.6 IP Licensing & Commercialization**
**License agreement components**:

- **Grant Clause**: What rights are licensed (exclusive, non-exclusive, sole)
- **Field of Use**: Restrictions on how IP can be used
- **Territory**: Geographic limitations
- **Term**: Duration of license
- **Royalties**: Payment structure (flat fee, percentage, minimums)
- **Improvements**: Who owns enhancements
- **Quality Control**: For trademarks, licensor's right to control quality
- **Termination**: Conditions for ending agreement

**Due diligence in M&A**:
- **IP Audit**: Identify all IP assets
- **Chain of Title**: Verify ownership history
- **Validity Assessment**: Evaluate strength and enforceability
- **Infringement Risks**: Analyze potential claims by or against company
- **Freedom to Operate**: Ensure business can operate without infringing others' IP

**Remember**: IP assets often represent a company's most valuable property—protect them accordingly.
`,
      completed: false,
      quiz: [
        {
          id: 1,
          question: "What are the four main types of intellectual property?",
          options: ["Patents, Trademarks, Copyrights, Trade Secrets", "Licenses, Contracts, Agreements, Deeds", "Real Estate, Equipment, Inventory, Cash", "Brands, Logos, Slogans, Designs"],
          correctAnswer: 0,
          explanation: "The four main IP types are Patents, Trademarks, Copyrights, and Trade Secrets."
        },
        {
          id: 2,
          question: "How long does a utility patent typically last?",
          options: ["10 years", "15 years", "20 years", "Life of inventor + 70 years"],
          correctAnswer: 2,
          explanation: "Utility patents last 20 years from filing date, subject to maintenance fees."
        },
        {
          id: 3,
          question: "What is the strongest type of trademark?",
          options: ["Descriptive", "Suggestive", "Arbitrary", "Fanciful"],
          correctAnswer: 3,
          explanation: "Fanciful trademarks (made-up words like Kodak) are the strongest because they're inherently distinctive."
        },
        {
          id: 4,
          question: "When does copyright protection begin?",
          options: ["Upon registration", "Upon publication", "Upon creation and fixation", "After 90 days"],
          correctAnswer: 2,
          explanation: "Copyright protection begins automatically when an original work is created and fixed in tangible form."
        },
        {
          id: 5,
          question: "What must companies do to protect trade secrets?",
          options: ["Register with government", "Take reasonable steps to maintain secrecy", "Publish them widely", "Only protect formulas, not processes"],
          correctAnswer: 1,
          explanation: "Trade secret protection requires taking reasonable steps to maintain secrecy of the information."
        },
        {
          id: 6,
          question: "How often must trademarks be renewed?",
          options: ["Every 5 years", "Every 10 years", "Every 15 years", "Never need renewal"],
          correctAnswer: 1,
          explanation: "Trademark registrations must be renewed every 10 years with proof of continued use."
        },
        {
          id: 7,
          question: "What patent requirement means the invention isn't obvious to experts in the field?",
          options: ["Novelty", "Non-obviousness", "Utility", "Enablement"],
          correctAnswer: 1,
          explanation: "Non-obviousness means the invention wouldn't be obvious to someone skilled in the relevant field."
        },
        {
          id: 8,
          question: "What law protects online service providers from user copyright infringement?",
          options: ["Copyright Act", "DMCA safe harbor", "First Amendment", "Fair Use Doctrine"],
          correctAnswer: 1,
          explanation: "The DMCA (Digital Millennium Copyright Act) provides safe harbor protections for online service providers."
        },
        {
          id: 9,
          question: "Which trademark type describes the product directly?",
          options: ["Fanciful", "Arbitrary", "Suggestive", "Descriptive"],
          correctAnswer: 3,
          explanation: "Descriptive trademarks directly describe the product or service and require secondary meaning for protection."
        },
        {
          id: 10,
          question: "Who owns copyright in a work made for hire?",
          options: ["The employee creator", "The employer", "Both equally", "The government"],
          correctAnswer: 1,
          explanation: "For works made for hire, the employer owns the copyright, not the individual employee creator."
        },
        {
          id: 11,
          question: "What federal law provides civil action for trade secret theft?",
          options: ["Uniform Trade Secrets Act", "Defend Trade Secrets Act", "Economic Espionage Act", "Trade Protection Act"],
          correctAnswer: 1,
          explanation: "The Defend Trade Secrets Act (DTSA) of 2016 provides federal civil remedies for trade secret misappropriation."
        },
        {
          id: 12,
          question: "How long does copyright typically last for individual authors?",
          options: ["Life of author", "Life of author + 50 years", "Life of author + 70 years", "95 years from publication"],
          correctAnswer: 2,
          explanation: "Copyright for individual authors typically lasts for the life of the author plus 70 years."
        },
        {
          id: 13,
          question: "What must be filed between 5th and 6th year of trademark registration?",
          options: ["Renewal application", "Section 8 declaration", "Assignment recordation", "License filing"],
          correctAnswer: 1,
          explanation: "A Section 8 declaration of continued use must be filed between the 5th and 6th anniversary of registration."
        },
        {
          id: 14,
          question: "What patent application preserves rights while allowing time to develop invention?",
          options: ["Non-provisional", "Provisional", "PCT", "Divisional"],
          correctAnswer: 1,
          explanation: "Provisional patent applications establish a filing date but don't require formal claims, buying time (12 months) to develop."
        },
        {
          id: 15,
          question: "What doctrine allows limited use of copyrighted works without permission?",
          options: ["Public domain", "Fair use", "First sale", "Compulsory license"],
          correctAnswer: 1,
          explanation: "The fair use doctrine allows limited use of copyrighted material without permission for purposes like criticism, news, teaching, or research."
        },
        {
          id: 16,
          question: "What international treaty allows priority patent filings in multiple countries?",
          options: ["Paris Convention", "Berne Convention", "TRIPS Agreement", "Madrid Protocol"],
          correctAnswer: 0,
          explanation: "The Paris Convention allows inventors to file in other countries within 12 months and claim priority from original filing date."
        },
        {
          id: 17,
          question: "What type of trademark protection exists without registration?",
          options: ["No protection without registration", "State registration only", "Common law rights from use in commerce", "International protection only"],
          correctAnswer: 2,
          explanation: "Common law trademark rights arise from actual use in commerce, even without federal registration."
        },
        {
          id: 18,
          question: "What must copyright transfers be in to be valid?",
          options: ["Oral agreement", "Writing", "Email", "Any form if witnessed"],
          correctAnswer: 1,
          explanation: "Transfers of copyright ownership must be in writing to be valid, except for non-exclusive licenses."
        },
        {
          id: 19,
          question: "What is NOT a factor in determining fair use?",
          options: ["Purpose and character of use", "Nature of copyrighted work", "Amount and substantiality used", "Author's wealth"],
          correctAnswer: 3,
          explanation: "The four fair use factors are: purpose, nature of work, amount used, and effect on market—not the author's wealth."
        },
        {
          id: 20,
          question: "What clause in trademark licenses allows quality control by licensor?",
          options: ["Royalty clause", "Quality control clause", "Territory clause", "Grant clause"],
          correctAnswer: 1,
          explanation: "Quality control clauses in trademark licenses allow licensors to maintain control over how their mark is used."
        }
      ]
    },
    {
      id: 5,
      title: "Employment Law & Corporate Compliance",
      content: `
# Module 5: Employment Law & Corporate Compliance

Employment relationships create numerous legal obligations for corporations. This module covers employment law fundamentals, discrimination, workplace safety, and corporate compliance programs.

## **5.1 Employment Relationship Fundamentals**
**Types of employment relationships**:

1. **Employee vs. Independent Contractor**
   - **Employee**: Employer controls work details, provides tools, withholds taxes
   - **Independent Contractor**: Controls own work, provides own tools, pays own taxes
   - **IRS Test**: 20-factor common law test, now simplified to three categories
   - **Misclassification Risks**: Back taxes, penalties, benefits obligations

2. **At-Will Employment**
   - **Default Rule**: Employment can end at any time, by either party, for any (non-illegal) reason
   - **Exceptions**: Contract (express or implied), public policy, discrimination laws
   - **Modifications**: Employment contracts, collective bargaining agreements, employee handbooks

3. **Employment Contracts**
   - **Types**: Fixed-term, indefinite, offer letters with conditions
   - **Key Provisions**: Position, compensation, benefits, duties, termination conditions
   - **Consideration**: Continued employment often sufficient for modifications

## **5.2 Anti-Discrimination Laws**
**Major federal employment discrimination laws**:

- **Title VII of Civil Rights Act of 1964**
  - **Protected Classes**: Race, color, religion, sex, national origin
  - **Coverage**: Employers with 15+ employees
  - **Agency**: Equal Employment Opportunity Commission (EEOC)
  - **Claims**: Disparate treatment, disparate impact, harassment, retaliation

- **Age Discrimination in Employment Act (ADEA)**
  - **Protection**: Employees 40+ years old
  - **Coverage**: Employers with 20+ employees
  - **Exceptions**: BFOQ (Bona Fide Occupational Qualification), seniority systems
  - **Waivers**: Special requirements for valid age discrimination waivers

- **Americans with Disabilities Act (ADA)**
  - **Protection**: Qualified individuals with disabilities
  - **Definition**: Physical/mental impairment substantially limiting major life activity
  - **Reasonable Accommodation**: Employer must provide unless undue hardship
  - **Interactive Process**: Required dialogue about accommodations

- **Pregnancy Discrimination Act**
  - **Protection**: Pregnancy, childbirth, related medical conditions
  - **Treatment**: Must be treated same as other temporarily disabled employees
  - **Relation**: Amendment to Title VII

**Other important laws**:
- **Equal Pay Act**: Requires equal pay for equal work regardless of gender
- **Genetic Information Nondiscrimination Act (GINA)**: Prohibits genetic information discrimination
- **State/Local Laws**: Often provide broader protections than federal law

## **5.3 Workplace Safety & Health**
**Occupational Safety and Health Act (OSHA)**:

- **Coverage**: Most private sector employers
- **General Duty Clause**: Employer must provide workplace free from recognized hazards
- **Standards**: Specific requirements for industries/hazards
- **Inspections**: Can be scheduled, complaint-based, accident-based, or follow-up
- **Violations**: Willful, serious, other-than-serious, repeated
- **Penalties**: Fines up to $70,000+ per violation (adjusted annually)
- **Recordkeeping**: Employers with 10+ employees must keep injury/illness records

**Workers' Compensation**:
- **No-Fault System**: Employees compensated for work-related injuries regardless of fault
- **Exclusive Remedy**: Generally bars tort lawsuits against employer
- **Benefits**: Medical expenses, disability payments, vocational rehabilitation, death benefits
- **Requirements**: Most states require coverage (purchase insurance or self-insure)

## **5.4 Wage & Hour Laws**
**Fair Labor Standards Act (FLSA)**:

- **Coverage**: Most employees engaged in interstate commerce
- **Minimum Wage**: Federal $7.25/hour (states can have higher)
- **Overtime**: 1.5 times regular rate for hours over 40 in workweek
- **Exemptions**: Executive, administrative, professional, outside sales, computer employees
- **Salary Basis Test**: Generally must pay minimum salary ($684/week federal)
- **Duties Test**: Primary duties must match exemption category

**Other wage laws**:
- **Family and Medical Leave Act (FMLA)**
  - **Coverage**: Employers with 50+ employees within 75-mile radius
  - **Eligibility**: Employees with 12 months service, 1,250 hours in past year
  - **Leave**: Up to 12 weeks unpaid for qualifying reasons
  - **Job Protection**: Right to return to same or equivalent position
  - **Health Benefits**: Must continue during leave

- **State Wage Laws**: Often provide higher minimum wages, paid sick leave, other benefits

## **5.5 Corporate Compliance Programs**
**Elements of effective compliance programs**:

1. **Written Policies & Procedures**
   - Code of conduct, specific policy manuals
   - Clear reporting procedures
   - Regular review and updates

2. **Compliance Officer & Committee**
   - Designated compliance officer with authority
   - Compliance committee with board oversight
   - Adequate resources and independence

3. **Effective Training & Education**
   - Regular employee training
   - Targeted training for high-risk areas
   - Documentation of training completion

4. **Monitoring & Auditing**
   - Regular compliance audits
   - Risk assessments
   - Corrective action plans

5. **Reporting & Investigation Procedures**
   - Confidential reporting channels (hotline)
   - Non-retaliation policies
   - Thorough investigation procedures
   - Timely corrective actions

6. **Consistent Enforcement**
   - Disciplinary standards
   - Consistent application
   - Escalation for serious violations

7. **Response & Prevention**
   - Prompt response to detected problems
   - Modifications to prevent recurrence
   - Continuous improvement

**Federal Sentencing Guidelines**:
- **Chapter 8**: Guidelines for organizational sentencing
- **Effective Program**: Can reduce fines up to 95%
- **Seven Elements**: As outlined above for effective compliance programs

**Whistleblower Protections**:
- **Sarbanes-Oxley**: Protects employees reporting fraud
- **Dodd-Frank**: Incentives and protections for securities law violations
- **False Claims Act**: Qui tam provisions reward whistleblowers
- **Non-Retaliation**: Protected activity cannot lead to adverse employment actions

**Remember**: Proactive compliance is far less expensive than reactive litigation.
`,
      completed: false,
      quiz: [
        {
          id: 1,
          question: "What is the default employment relationship in the United States?",
          options: ["Fixed-term contract", "At-will employment", "Lifetime employment", "Union collective bargaining"],
          correctAnswer: 1,
          explanation: "At-will employment is the default rule in the U.S., meaning employment can end at any time for any legal reason."
        },
        {
          id: 2,
          question: "How many employees must an employer have to be covered by Title VII?",
          options: ["1 employee", "15 employees", "50 employees", "100 employees"],
          correctAnswer: 1,
          explanation: "Title VII of the Civil Rights Act applies to employers with 15 or more employees."
        },
        {
          id: 3,
          question: "What federal agency enforces workplace safety standards?",
          options: ["EEOC", "OSHA", "DOL", "FDA"],
          correctAnswer: 1,
          explanation: "OSHA (Occupational Safety and Health Administration) enforces workplace safety standards."
        },
        {
          id: 4,
          question: "What is the current federal minimum wage?",
          options: ["$5.15/hour", "$7.25/hour", "$10.10/hour", "$15.00/hour"],
          correctAnswer: 1,
          explanation: "The federal minimum wage has been $7.25 per hour since 2009, though many states have higher minimums."
        },
        {
          id: 5,
          question: "What does the ADA require employers to provide to qualified disabled employees?",
          options: ["Guaranteed employment", "Reasonable accommodation", "Higher pay", "Shorter hours"],
          correctAnswer: 1,
          explanation: "The Americans with Disabilities Act requires employers to provide reasonable accommodations unless it causes undue hardship."
        },
        {
          id: 6,
          question: "How many weeks of unpaid leave does FMLA provide?",
          options: ["6 weeks", "12 weeks", "24 weeks", "52 weeks"],
          correctAnswer: 1,
          explanation: "The Family and Medical Leave Act provides up to 12 weeks of unpaid, job-protected leave for qualifying reasons."
        },
        {
          id: 7,
          question: "What age does ADEA protection begin?",
          options: ["30 years old", "40 years old", "50 years old", "60 years old"],
          correctAnswer: 1,
          explanation: "The Age Discrimination in Employment Act protects employees who are 40 years of age or older."
        },
        {
          id: 8,
          question: "What is the overtime rate required by FLSA?",
          options: ["1.25 times regular rate", "1.5 times regular rate", "2 times regular rate", "No requirement for overtime"],
          correctAnswer: 1,
          explanation: "FLSA requires employers to pay 1.5 times the regular rate for hours worked over 40 in a workweek."
        },
        {
          id: 9,
          question: "What type of workers' compensation system exists in the U.S.?",
          options: ["Fault-based system", "No-fault system", "Optional system", "Federal system only"],
          correctAnswer: 1,
          explanation: "Workers' compensation is a no-fault system where employees are compensated for work-related injuries regardless of who was at fault."
        },
        {
          id: 10,
          question: "What law protects employees who report corporate fraud?",
          options: ["ADA", "FMLA", "Sarbanes-Oxley", "FLSA"],
          correctAnswer: 2,
          explanation: "Sarbanes-Oxley includes whistleblower protections for employees who report corporate fraud."
        },
        {
          id: 11,
          question: "What is the minimum salary for most exempt employees under FLSA?",
          options: ["$455/week", "$684/week", "$1,000/week", "No salary minimum"],
          correctAnswer: 1,
          explanation: "Most exempt employees must earn at least $684 per week ($35,568 annually) under current FLSA regulations."
        },
        {
          id: 12,
          question: "What must employers engage in with disabled employees regarding accommodations?",
          options: ["Interactive process", "Mediation", "Arbitration", "Litigation"],
          correctAnswer: 0,
          explanation: "The ADA requires employers to engage in an interactive process with disabled employees to determine reasonable accommodations."
        },
        {
          id: 13,
          question: "How many elements of an effective compliance program are in the Federal Sentencing Guidelines?",
          options: ["3 elements", "5 elements", "7 elements", "10 elements"],
          correctAnswer: 2,
          explanation: "The Federal Sentencing Guidelines outline 7 elements for an effective compliance and ethics program."
        },
        {
          id: 14,
          question: "What type of discrimination claim involves neutral policies that disproportionately affect protected groups?",
          options: ["Disparate treatment", "Disparate impact", "Harassment", "Retaliation"],
          correctAnswer: 1,
          explanation: "Disparate impact claims involve neutral policies that have disproportionate adverse effects on protected groups."
        },
        {
          id: 15,
          question: "What law prohibits genetic information discrimination?",
          options: ["Title VII", "ADA", "GINA", "ADEA"],
          correctAnswer: 2,
          explanation: "GINA (Genetic Information Nondiscrimination Act) prohibits discrimination based on genetic information."
        },
        {
          id: 16,
          question: "What workers' compensation concept generally prevents employees from suing employers for workplace injuries?",
          options: ["Sovereign immunity", "Exclusive remedy", "Employer immunity", "Tort reform"],
          correctAnswer: 1,
          explanation: "Workers' compensation is generally the exclusive remedy for workplace injuries, barring most tort lawsuits against employers."
        },
        {
          id: 17,
          question: "What FMLA requirement ensures employees can return to work after leave?",
          options: ["Health insurance continuation", "Job protection", "Paid leave", "Promotion guarantee"],
          correctAnswer: 1,
          explanation: "FMLA provides job protection, meaning employees have the right to return to the same or equivalent position after leave."
        },
        {
          id: 18,
          question: "What is the IRS test for distinguishing employees from independent contractors?",
          options: ["10-factor test", "20-factor common law test", "Simple bright-line test", "No official test"],
          correctAnswer: 1,
          explanation: "The IRS uses a 20-factor common law test (now simplified into three categories) to determine employee vs. independent contractor status."
        },
        {
          id: 19,
          question: "What OSHA clause requires employers to provide hazard-free workplaces?",
          options: ["Specific duty clause", "General duty clause", "Safety clause", "Health clause"],
          correctAnswer: 1,
          explanation: "OSHA's general duty clause requires employers to provide workplaces free from recognized hazards."
        },
        {
          id: 20,
          question: "What is NOT a protected class under Title VII?",
          options: ["Race", "Sex", "Age", "Religion"],
          correctAnswer: 2,
          explanation: "Age is protected under ADEA, not Title VII. Title VII protects race, color, religion, sex, and national origin."
        }
      ]
    },
    {
      id: 6,
      title: "Securities Regulation & Corporate Finance",
      content: `
# Module 6: Securities Regulation & Corporate Finance

Securities laws regulate how corporations raise capital and disclose information to investors. This module covers securities regulation, corporate finance, and public company obligations.

## **6.1 Securities Laws Framework**
**Major federal securities laws**:

1. **Securities Act of 1933**
   - **Purpose**: Regulate initial public offerings (IPOs) and securities offerings
   - **Core Concept**: Full and fair disclosure to investors
   - **Registration**: Securities must be registered unless exemption applies
   - **Prospectus**: Required disclosure document for registered offerings
   - **Liability**: Section 11 for false registration statements, Section 12 for prospectus violations

2. **Securities Exchange Act of 1934**
   - **Purpose**: Regulate secondary trading, exchanges, brokers, dealers
   - **Reporting Requirements**: Periodic reports (10-K, 10-Q, 8-K)
   - **Proxy Rules**: Regulation of shareholder voting materials
   - **Tender Offers**: Regulation of corporate takeover attempts
   - **Insider Trading**: Prohibited under Section 10(b) and Rule 10b-5

3. **Sarbanes-Oxley Act of 2002**
   - **Response**: Corporate accounting scandals (Enron, WorldCom)
   - **CEO/CFO Certification**: Personal certification of financial reports
   - **Internal Controls**: Section 404 requires management assessment and auditor attestation
   - **Audit Committee**: Must be independent, include financial expert
   - **Whistleblower Protections**: For employees reporting fraud

4. **Dodd-Frank Act of 2010**
   - **Response**: 2008 financial crisis
   - **Say-on-Pay**: Shareholder advisory votes on executive compensation
   - **Clawback Provisions**: Recovery of incentive compensation after restatements
   - **Conflict Minerals**: Disclosure requirements for certain minerals from conflict zones
   - **Whistleblower Incentives**: Bounties for reporting securities violations

## **6.2 What is a Security?**
**The Howey Test** (from SEC v. W.J. Howey Co.):
An investment contract (security) exists if:
1. **Investment of Money**
2. **In a Common Enterprise**
3. **With Expectation of Profits**
4. **Primarily from Efforts of Others**

**Common securities types**:
- **Stocks**: Equity ownership in corporation
- **Bonds**: Debt securities with fixed interest payments
- **Notes**: Short-term debt instruments
- **Investment Contracts**: Broad category including many modern investments
- **Recent Applications**: Cryptocurrencies, NFTs may be securities depending on facts

**SEC v. W.J. Howey Co. (1946)**:
- **Facts**: Sale of orange grove parcels with service contracts
- **Holding**: Investment contracts are securities under 1933 Act
- **Impact**: Established four-part test still used today

## **6.3 Public Company Reporting Requirements**
**Key SEC filings for public companies**:

- **Form S-1**: Registration statement for IPOs
- **Form 10-K**: Annual report (due 60-90 days after fiscal year end)
- **Form 10-Q**: Quarterly report (due 40-45 days after quarter end)
- **Form 8-K**: Current report for significant events (due 4 business days)
- **Schedule 14A**: Proxy statement for shareholder meetings
- **Form 4**: Insider trading reports (due 2 business days after transaction)

**10-K contents**:
1. **Business Description**: Operations, markets, competition
2. **Risk Factors**: Material risks facing company
3. **Financial Data**: 5-year selected financial data
4. **MD&A**: Management Discussion & Analysis of financial condition
5. **Financial Statements**: Audited balance sheet, income statement, cash flows
6. **Controls & Procedures**: Disclosure controls, internal controls over financial reporting

**Regulation FD (Fair Disclosure)**:
- **Purpose**: Prevent selective disclosure to favored analysts/investors
- **Requirement**: Material information must be disclosed publicly
- **Timing**: Simultaneously for intentional disclosures, promptly for non-intentional
- **Methods**: SEC filings, press releases, webcasts

## **6.4 Insider Trading Regulation**
**Legal framework for insider trading**:

1. **Classical Theory** (Traditional Insider Trading)
   - **Elements**: Insider + material nonpublic information + trading + duty
   - **Duty**: Fiduciary duty to shareholders or company
   - **Tipper/Tippee Liability**: Tippers liable, tippees liable if know information was improperly disclosed

2. **Misappropriation Theory**
   - **Elements**: Outsider misappropriates information + breaches duty to source
   - **Duty**: Duty to source of information (employer, client, etc.)
   - **Example**: Lawyer trades on client's merger information

3. **Rule 10b-5** (General Anti-Fraud Rule)
   - "It shall be unlawful... to make any untrue statement... or to engage in any act... which would operate as a fraud or deceit..."

**Key cases**:
- **Dirks v. SEC (1983)**: Established personal benefit test for tipper liability
- **United States v. O'Hagan (1997)**: Approved misappropriation theory
- **Salman v. United States (2016)**: Clarified personal benefit can be gift to relative/friend

**SEC Rule 10b5-1 Trading Plans**:
- **Purpose**: Allow insiders to trade without insider trading allegations
- **Requirements**: Established in good faith when not aware of material nonpublic information
- **Elements**: Written plan specifying amount, price, dates
- **Modification**: Limited ability to modify or cancel

## **6.5 Private Placements & Exempt Offerings**
**Regulation D exemptions**:

- **Rule 506(b)**
  - **Investors**: Unlimited accredited, up to 35 sophisticated non-accredited
  - **General Solicitation**: Not allowed
  - **Disclosure**: To non-accredited investors similar to registered offering
  - **State Preemption**: Exempt from state registration (Blue Sky laws)

- **Rule 506(c)**
  - **Investors**: Unlimited accredited investors only
  - **General Solicitation**: Allowed if verify accredited status
  - **Verification**: Reasonable steps to verify accredited investor status
  - **State Preemption**: Exempt from state registration

- **Rule 504**
  - **Amount**: Up to $10 million in 12 months
  - **Investors**: Unlimited, any type
  - **General Solicitation**: Allowed in some circumstances
  - **State Compliance**: Must comply with state registration or exemption

**Accredited Investor Definition**:
- **Individuals**: $200k income ($300k joint) last 2 years + expectation, OR $1M net worth (excluding primary residence)
- **Entities**: $5M in assets, OR all equity owners accredited
- **Recent Additions**: Certain professional credentials, knowledgeable employees of private funds

**Crowdfunding Exemptions**:
- **Regulation Crowdfunding (Reg CF)**
  - **Amount**: Up to $5 million in 12 months
  - **Investor Limits**: Based on income/net worth
  - **Platform Requirements**: Must use registered intermediary (funding portal/broker)
  - **Disclosure**: Financial statements, progress updates

## **6.6 Corporate Finance Transactions**
**Common corporate finance activities**:

1. **Initial Public Offering (IPO)**
   - **Process**: Due diligence, S-1 filing, roadshow, pricing, trading begins
   - **Underwriters**: Investment banks that manage offering
   - **Lock-up Period**: Typically 180 days insiders cannot sell
   - **Quiet Period**: Restrictions on promotional statements

2. **Follow-on Offerings**
   - **Types**: Secondary offerings, at-the-market offerings
   - **Shelf Registration**: Form S-3 allows "take down" offerings as needed
   - **WKSI**: Well-Known Seasoned Issuer status for largest companies

3. **Debt Offerings**
   - **Types**: Bonds, notes, commercial paper
   - **Credit Ratings**: From agencies (Moody's, S&P, Fitch)
   - **Indenture**: Contract between issuer and bondholders
   - **Covenants**: Financial and operational restrictions

4. **Mergers & Acquisitions**
   - **Disclosure**: Material M&A information must be disclosed
   - **Tender Offers**: Regulation 14D, Schedule TO
   - **Hart-Scott-Rodino**: Pre-merger notification for large transactions
   - **Proxy Statements**: Shareholder approval for certain transactions

**Remember**: Securities laws aim for transparent markets where investors can make informed decisions.
`,
      completed: false,
      quiz: [
        {
          id: 1,
          question: "What law regulates initial public offerings and securities registration?",
          options: ["Securities Act of 1933", "Securities Exchange Act of 1934", "Sarbanes-Oxley Act", "Dodd-Frank Act"],
          correctAnswer: 0,
          explanation: "The Securities Act of 1933 regulates the initial offering and registration of securities."
        },
        {
          id: 2,
          question: "What is the annual report filed by public companies called?",
          options: ["Form 10-Q", "Form 8-K", "Form 10-K", "Form S-1"],
          correctAnswer: 2,
          explanation: "Form 10-K is the annual report that public companies must file with the SEC."
        },
        {
          id: 3,
          question: "What test determines if something is a security?",
          options: ["Blue Sky Test", "Howey Test", "Securities Test", "Investment Test"],
          correctAnswer: 1,
          explanation: "The Howey Test (from SEC v. W.J. Howey Co.) determines if an investment qualifies as a security."
        },
        {
          id: 4,
          question: "What Sarbanes-Oxley requirement involves CEO/CFO certification of financial reports?",
          options: ["Section 302", "Section 404", "Section 406", "Section 802"],
          correctAnswer: 0,
          explanation: "Section 302 of Sarbanes-Oxley requires CEOs and CFOs to personally certify financial reports."
        },
        {
          id: 5,
          question: "How many days after a quarter ends is Form 10-Q typically due?",
          options: ["30 days", "40-45 days", "60 days", "90 days"],
          correctAnswer: 1,
          explanation: "Form 10-Q (quarterly report) is typically due 40-45 days after the end of each fiscal quarter."
        },
        {
          id: 6,
          question: "What theory of insider trading involves outsiders misappropriating information?",
          options: ["Classical theory", "Misappropriation theory", "Tipper theory", "Fraud theory"],
          correctAnswer: 1,
          explanation: "The misappropriation theory applies to outsiders who trade on misappropriated confidential information."
        },
        {
          id: 7,
          question: "What Regulation D rule allows general solicitation to accredited investors?",
          options: ["Rule 504", "Rule 505", "Rule 506(b)", "Rule 506(c)"],
          correctAnswer: 3,
          explanation: "Rule 506(c) allows general solicitation but requires verification that all investors are accredited."
        },
        {
          id: 8,
          question: "What law created shareholder 'say-on-pay' votes?",
          options: ["Sarbanes-Oxley", "Dodd-Frank", "Securities Act of 1933", "Exchange Act of 1934"],
          correctAnswer: 1,
          explanation: "The Dodd-Frank Act requires public companies to hold shareholder advisory votes on executive compensation."
        },
        {
          id: 9,
          question: "What rule prohibits selective disclosure of material information?",
          options: ["Regulation FD", "Regulation D", "Regulation S-K", "Regulation S-X"],
          correctAnswer: 0,
          explanation: "Regulation FD (Fair Disclosure) prohibits selective disclosure of material information to favored analysts or investors."
        },
        {
          id: 10,
          question: "What is the minimum individual income to qualify as an accredited investor?",
          options: ["$100,000", "$200,000", "$300,000", "$1,000,000"],
          correctAnswer: 1,
          explanation: "Individuals need $200,000 annual income ($300,000 joint) for last two years with expectation to qualify as accredited investors."
        },
        {
          id: 11,
          question: "What type of offering allows companies to register securities for future issuance?",
          options: ["IPO", "Shelf registration", "Private placement", "Crowdfunding"],
          correctAnswer: 1,
          explanation: "Shelf registration (Form S-3) allows companies to register securities and sell them periodically as needed."
        },
        {
          id: 12,
          question: "What is the typical lock-up period after an IPO?",
          options: ["30 days", "90 days", "180 days", "365 days"],
          correctAnswer: 2,
          explanation: "The typical lock-up period after an IPO is 180 days, during which insiders cannot sell shares."
        },
        {
          id: 13,
          question: "What Sarbanes-Oxley section requires internal controls over financial reporting?",
          options: ["Section 302", "Section 404", "Section 409", "Section 806"],
          correctAnswer: 1,
          explanation: "Section 404 of Sarbanes-Oxley requires management assessment and auditor attestation of internal controls."
        },
        {
          id: 14,
          question: "What case established the personal benefit test for tipper liability?",
          options: ["SEC v. Howey", "Dirks v. SEC", "United States v. O'Hagan", "Salman v. United States"],
          correctAnswer: 1,
          explanation: "Dirks v. SEC established that tippers must receive personal benefit for tipper/tippee liability."
        },
        {
          id: 15,
          question: "What is the maximum amount under Regulation Crowdfunding?",
          options: ["$1 million", "$5 million", "$10 million", "$50 million"],
          correctAnswer: 1,
          explanation: "Regulation Crowdfunding allows companies to raise up to $5 million in a 12-month period."
        },
        {
          id: 16,
          question: "What filing reports insider stock transactions?",
          options: ["Form 3", "Form 4", "Form 5", "Form 144"],
          correctAnswer: 1,
          explanation: "Form 4 reports insider transactions and must be filed within 2 business days of the transaction."
        },
        {
          id: 17,
          question: "What rule provides affirmative defense for insider trading through pre-arranged plans?",
          options: ["Rule 10b-5", "Rule 10b5-1", "Rule 10b5-2", "Rule 144"],
          correctAnswer: 1,
          explanation: "Rule 10b5-1 provides an affirmative defense for insider trading if trades follow pre-established written plans."
        },
        {
          id: 18,
          question: "What percentage of Fortune 500 companies incorporate in Delaware?",
          options: ["33%", "50%", "66%", "75%"],
          correctAnswer: 2,
          explanation: "Approximately 66% of Fortune 500 companies incorporate in Delaware for its corporate-friendly legal system."
        },
        {
          id: 19,
          question: "What filing reports significant corporate events between quarterly reports?",
          options: ["Form 8-K", "Form 10-Q", "Form 10-K", "Form S-1"],
          correctAnswer: 0,
          explanation: "Form 8-K reports current events and significant corporate developments between quarterly reports."
        },
        {
          id: 20,
          question: "What theory from United States v. O'Hagan expanded insider trading liability?",
          options: ["Classical theory", "Misappropriation theory", "Market manipulation theory", "Fraud-on-the-market theory"],
          correctAnswer: 1,
          explanation: "United States v. O'Hagan approved the misappropriation theory, expanding insider trading liability to outsiders."
        }
      ]
    }
  ],

  // 3. FINAL EXAM (40 Questions - Comprehensive)
  finalExam: {
    title: "Corporate Law Certificate Final Examination",
    description: "Comprehensive exam covering all 6 modules. Score 70% or higher to earn your certificate.",
    passingScore: 70,
    questions: [
      {
        id: 1,
        question: "Which business entity has unlimited personal liability for the owner?",
        options: ["Corporation", "LLC", "Sole Proprietorship", "S-Corporation"],
        correctAnswer: 2,
        explanation: "Sole proprietorships have unlimited personal liability because there's no legal separation between owner and business.",
        module: 1
      },
      {
        id: 2,
        question: "What are the three core fiduciary duties of corporate directors?",
        options: ["Duty of Care, Duty of Loyalty, Duty of Good Faith", "Duty to Shareholders, Duty to Employees, Duty to Customers", "Financial Duty, Legal Duty, Ethical Duty", "Management Duty, Oversight Duty, Compliance Duty"],
        correctAnswer: 0,
        explanation: "The three core fiduciary duties are Duty of Care, Duty of Loyalty, and Duty of Good Faith.",
        module: 2
      },
      {
        id: 3,
        question: "What are the five essential elements of a valid contract?",
        options: ["Offer, Acceptance, Consideration, Mutual Assent, Legality", "Writing, Signature, Witness, Notary, Recording", "Parties, Price, Date, Location, Purpose", "Good Faith, Fair Dealing, Honesty, Transparency, Equity"],
        correctAnswer: 0,
        explanation: "The five essential elements are Offer, Acceptance, Consideration, Mutual Assent, and Legality.",
        module: 3
      },
      {
        id: 4,
        question: "What are the four main types of intellectual property?",
        options: ["Patents, Trademarks, Copyrights, Trade Secrets", "Licenses, Contracts, Agreements, Deeds", "Real Estate, Equipment, Inventory, Cash", "Brands, Logos, Slogans, Designs"],
        correctAnswer: 0,
        explanation: "The four main IP types are Patents, Trademarks, Copyrights, and Trade Secrets.",
        module: 4
      },
      {
        id: 5,
        question: "What is the default employment relationship in the United States?",
        options: ["Fixed-term contract", "At-will employment", "Lifetime employment", "Union collective bargaining"],
        correctAnswer: 1,
        explanation: "At-will employment is the default rule in the U.S., meaning employment can end at any time for any legal reason.",
        module: 5
      },
      {
        id: 6,
        question: "What law regulates initial public offerings and securities registration?",
        options: ["Securities Act of 1933", "Securities Exchange Act of 1934", "Sarbanes-Oxley Act", "Dodd-Frank Act"],
        correctAnswer: 0,
        explanation: "The Securities Act of 1933 regulates the initial offering and registration of securities.",
        module: 6
      },
      {
        id: 7,
        question: "What percentage of Fortune 500 companies incorporate in Delaware?",
        options: ["33%", "50%", "66%", "75%"],
        correctAnswer: 2,
        explanation: "Approximately 66% of Fortune 500 companies incorporate in Delaware due to its business-friendly legal environment.",
        module: 1
      },
      {
        id: 8,
        question: "Which board committee is required by Sarbanes-Oxley for public companies?",
        options: ["Compensation Committee", "Audit Committee", "Nominating Committee", "Risk Committee"],
        correctAnswer: 1,
        explanation: "Sarbanes-Oxley requires public companies to have an independent audit committee.",
        module: 2
      },
      {
        id: 9,
        question: "What UCC Article governs the sale of goods?",
        options: ["Article 1", "Article 2", "Article 3", "Article 9"],
        correctAnswer: 1,
        explanation: "UCC Article 2 governs transactions involving the sale of goods.",
        module: 3
      },
      {
        id: 10,
        question: "How long does a utility patent typically last?",
        options: ["10 years", "15 years", "20 years", "Life of inventor + 70 years"],
        correctAnswer: 2,
        explanation: "Utility patents last 20 years from filing date, subject to maintenance fees.",
        module: 4
      },
      {
        id: 11,
        question: "How many employees must an employer have to be covered by Title VII?",
        options: ["1 employee", "15 employees", "50 employees", "100 employees"],
        correctAnswer: 1,
        explanation: "Title VII of the Civil Rights Act applies to employers with 15 or more employees.",
        module: 5
      },
      {
        id: 12,
        question: "What is the annual report filed by public companies called?",
        options: ["Form 10-Q", "Form 8-K", "Form 10-K", "Form S-1"],
        correctAnswer: 2,
        explanation: "Form 10-K is the annual report that public companies must file with the SEC.",
        module: 6
      },
      {
        id: 13,
        question: "What is the primary tax disadvantage of a C-Corporation?",
        options: ["Pass-through taxation", "Double taxation", "No tax deductions", "Quarterly tax payments"],
        correctAnswer: 1,
        explanation: "C-Corporations face double taxation: corporate profits are taxed, and dividends to shareholders are taxed again.",
        module: 1
      },
      {
        id: 14,
        question: "What legal protection shields directors from liability for good faith business decisions?",
        options: ["Corporate Shield", "Business Judgment Rule", "Director Immunity", "Fiduciary Protection"],
        correctAnswer: 1,
        explanation: "The Business Judgment Rule protects directors from liability for decisions made in good faith with reasonable care.",
        module: 2
      },
      {
        id: 15,
        question: "What is the minimum dollar amount requiring a written contract for goods under Statute of Frauds?",
        options: ["$100", "$500", "$1,000", "$5,000"],
        correctAnswer: 1,
        explanation: "The UCC Statute of Frauds requires written contracts for sale of goods valued at $500 or more.",
        module: 3
      },
      {
        id: 16,
        question: "What is the strongest type of trademark?",
        options: ["Descriptive", "Suggestive", "Arbitrary", "Fanciful"],
        correctAnswer: 3,
        explanation: "Fanciful trademarks (made-up words like Kodak) are the strongest because they're inherently distinctive.",
        module: 4
      },
      {
        id: 17,
        question: "What federal agency enforces workplace safety standards?",
        options: ["EEOC", "OSHA", "DOL", "FDA"],
        correctAnswer: 1,
        explanation: "OSHA (Occupational Safety and Health Administration) enforces workplace safety standards.",
        module: 5
      },
      {
        id: 18,
        question: "What test determines if something is a security?",
        options: ["Blue Sky Test", "Howey Test", "Securities Test", "Investment Test"],
        correctAnswer: 1,
        explanation: "The Howey Test (from SEC v. W.J. Howey Co.) determines if an investment qualifies as a security.",
        module: 6
      },
      {
        id: 19,
        question: "How many shareholders maximum can an S-Corporation have?",
        options: ["50", "100", "200", "Unlimited"],
        correctAnswer: 1,
        explanation: "S-Corporations are limited to 100 shareholders maximum by IRS regulations.",
        module: 1
      },
      {
        id: 20,
        question: "What shareholder right allows them to sue on behalf of the corporation?",
        options: ["Direct lawsuit", "Derivative lawsuit", "Class action", "Appraisal action"],
        correctAnswer: 1,
        explanation: "Derivative lawsuits allow shareholders to sue on behalf of the corporation when directors fail to act.",
        module: 2
      },
      {
        id: 21,
        question: "What remedy involves canceling a contract and returning parties to original positions?",
        options: ["Compensatory damages", "Specific performance", "Rescission", "Liquidated damages"],
        correctAnswer: 2,
        explanation: "Rescission cancels the contract and aims to return parties to their pre-contract positions.",
        module: 3
      },
      {
        id: 22,
        question: "When does copyright protection begin?",
        options: ["Upon registration", "Upon publication", "Upon creation and fixation", "After 90 days"],
        correctAnswer: 2,
        explanation: "Copyright protection begins automatically when an original work is created and fixed in tangible form.",
        module: 4
      },
      {
        id: 23,
        question: "What is the current federal minimum wage?",
        options: ["$5.15/hour", "$7.25/hour", "$10.10/hour", "$15.00/hour"],
        correctAnswer: 1,
        explanation: "The federal minimum wage has been $7.25 per hour since 2009, though many states have higher minimums.",
        module: 5
      },
      {
        id: 24,
        question: "What Sarbanes-Oxley requirement involves CEO/CFO certification of financial reports?",
        options: ["Section 302", "Section 404", "Section 406", "Section 802"],
        correctAnswer: 0,
        explanation: "Section 302 of Sarbanes-Oxley requires CEOs and CFOs to personally certify financial reports.",
        module: 6
      },
      {
        id: 25,
        question: "What document must an LLC file with the state to form legally?",
        options: ["Operating Agreement", "Articles of Organization", "Partnership Agreement", "Corporate Bylaws"],
        correctAnswer: 1,
        explanation: "Articles of Organization (Certificate of Formation in some states) must be filed to form an LLC.",
        module: 1
      },
      {
        id: 26,
        question: "What document contains the internal operating rules of a corporation?",
        options: ["Articles of Incorporation", "Corporate Charter", "Bylaws", "Operating Agreement"],
        correctAnswer: 2,
        explanation: "Corporate Bylaws contain the internal operating rules and procedures for the corporation.",
        module: 2
      },
      {
        id: 27,
        question: "What is required for a negotiable instrument under UCC Article 3?",
        options: ["Must be notarized", "Must be in writing, signed, unconditional promise, fixed amount", "Must be registered with state", "Must have three witnesses"],
        correctAnswer: 1,
        explanation: "Negotiable instruments must be written, signed, contain unconditional promise, fixed amount, etc.",
        module: 3
      },
      {
        id: 28,
        question: "What must companies do to protect trade secrets?",
        options: ["Register with government", "Take reasonable steps to maintain secrecy", "Publish them widely", "Only protect formulas, not processes"],
        correctAnswer: 1,
        explanation: "Trade secret protection requires taking reasonable steps to maintain secrecy of the information.",
        module: 4
      },
      {
        id: 29,
        question: "What does the ADA require employers to provide to qualified disabled employees?",
        options: ["Guaranteed employment", "Reasonable accommodation", "Higher pay", "Shorter hours"],
        correctAnswer: 1,
        explanation: "The Americans with Disabilities Act requires reasonable accommodations unless undue hardship.",
        module: 5
      },
      {
        id: 30,
        question: "How many days after a quarter ends is Form 10-Q typically due?",
        options: ["30 days", "40-45 days", "60 days", "90 days"],
        correctAnswer: 1,
        explanation: "Form 10-Q (quarterly report) is typically due 40-45 days after the end of each fiscal quarter.",
        module: 6
      },
      {
        id: 31,
        question: "Which entity type offers the most flexible tax treatment options?",
        options: ["Sole Proprietorship", "Partnership", "LLC", "Corporation"],
        correctAnswer: 2,
        explanation: "LLCs offer flexible tax treatment - can choose pass-through or corporate taxation.",
        module: 1
      },
      {
        id: 32,
        question: "What is the primary role of the board of directors?",
        options: ["Day-to-day management", "Setting corporate strategy", "Marketing products", "Handling customer complaints"],
        correctAnswer: 1,
        explanation: "The board's primary role is setting corporate strategy and overseeing management.",
        module: 2
      },
      {
        id: 33,
        question: "Which contract type involves one promise in exchange for performance of an act?",
        options: ["Bilateral contract", "Unilateral contract", "Executory contract", "Implied contract"],
        correctAnswer: 1,
        explanation: "Unilateral contracts involve one promise in exchange for performance of an act.",
        module: 3
      },
      {
        id: 34,
        question: "How often must trademarks be renewed?",
        options: ["Every 5 years", "Every 10 years", "Every 15 years", "Never need renewal"],
        correctAnswer: 1,
        explanation: "Trademark registrations must be renewed every 10 years with proof of continued use.",
        module: 4
      },
      {
        id: 35,
        question: "How many weeks of unpaid leave does FMLA provide?",
        options: ["6 weeks", "12 weeks", "24 weeks", "52 weeks"],
        correctAnswer: 1,
        explanation: "The Family and Medical Leave Act provides up to 12 weeks of unpaid, job-protected leave.",
        module: 5
      },
      {
        id: 36,
        question: "What theory of insider trading involves outsiders misappropriating information?",
        options: ["Classical theory", "Misappropriation theory", "Tipper theory", "Fraud theory"],
        correctAnswer: 1,
        explanation: "The misappropriation theory applies to outsiders who trade on misappropriated information.",
        module: 6
      },
      {
        id: 37,
        question: "What is required for all LLCs and corporations in every state?",
        options: ["Business license", "Registered agent", "Board of directors", "Quarterly reports"],
        correctAnswer: 1,
        explanation: "All LLCs and corporations must have a registered agent in the state where they're formed.",
        module: 1
      },
      {
        id: 38,
        question: "What must directors do regarding conflicts of interest?",
        options: ["Ignore them", "Fully disclose them", "Hide them", "Resign immediately"],
        correctAnswer: 1,
        explanation: "Directors must fully disclose any conflicts of interest to the board.",
        module: 2
      },
      {
        id: 39,
        question: "What UCC form is used to perfect a security interest?",
        options: ["UCC-1", "UCC-3", "UCC-9", "UCC-11"],
        correctAnswer: 0,
        explanation: "A UCC-1 financing statement is filed to perfect a security interest under Article 9.",
        module: 3
      },
      {
        id: 40,
        question: "What patent requirement means invention isn't obvious to experts?",
        options: ["Novelty", "Non-obviousness", "Utility", "Enablement"],
        correctAnswer: 1,
        explanation: "Non-obviousness means the invention wouldn't be obvious to someone skilled in the field.",
        module: 4
      }
    ]
  },

  // 4. ADDITIONAL COURSE METADATA
  certificateDetails: {
    issuer: "Edusanna Corporate Law Institute",
    verificationUrl: "https://edusanna.com/verify",
    issuedDate: null,
    credentialId: null,
    competencies: [
      "Business entity selection and formation procedures",
      "Corporate governance structures and fiduciary duties",
      "Contract law fundamentals and commercial transactions",
      "Intellectual property protection strategies",
      "Employment law compliance and workplace regulations",
      "Securities regulation and corporate finance basics"
    ]
  },

  // 5. UPGRADE PATH TO DIPLOMA
  upgradePath: {
    targetCourse: "corporate-law-diploma",
    title: "Advanced Corporate Law & Legal Practice (Diploma)",
    description: "Advanced corporate transactions, mergers & acquisitions, securities litigation, complex contracts, and regulatory compliance.",
    fastTrackModules: [1, 2, 3, 4, 5, 6],
    additionalModules: 4,
    price: 18,
    prerequisites: ["corporate-law-certificate"]
  }
};

export type CorporateLawCertificateCourse = typeof corporateLawCertificateCourse;
export default corporateLawCertificateCourse;

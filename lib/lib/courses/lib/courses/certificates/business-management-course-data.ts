// business-management-certificate.ts

export const BusinessManagementCertificate = {
  // ==================== COURSE METADATA ====================
  id: "business-management-certificate",
  title: "Business Management (Certificate)",
  description: "Master essential business management concepts including planning, organizing, leading, and controlling. Learn practical frameworks like SWOT, PESTLE, and SMART goals to effectively manage teams and operations.",
  duration: "6 weeks",
  timeCommitment: "4-6 hours per week",
  price: 12,
  upgradePrice: 18,
  icon: "📊",
  badge: "Certificate",
  
  // ==================== MODULES ====================
  modules: [
    {
      id: 1,
      title: "Foundations of Business Management",
      content: `# Foundations of Business Management

## Introduction to Business Management
Business management is the process of planning, organizing, leading, and controlling organizational resources to achieve specific goals. Every successful business requires effective management to coordinate people, processes, and technology.

### The Four Functions of Management
1. **Planning**: Setting objectives and determining how to achieve them
2. **Organizing**: Arranging resources and tasks to implement plans
3. **Leading**: Motivating and directing people toward organizational goals
4. **Controlling**: Monitoring performance and making necessary adjustments

**Real-world application**: A restaurant manager plans the weekly menu (planning), organizes staff schedules (organizing), motivates the team during busy hours (leading), and reviews daily sales (controlling).

### Historical Management Theories
**Scientific Management** (Taylorism) focuses on efficiency through time studies and standardized work methods. **Administrative Management** (Fayol) introduced 14 principles including unity of command and division of work. **Human Relations Movement** (Mayo) emphasized social factors and employee satisfaction.

### Management Levels
- **Top Management** (5% of managers): CEOs, Presidents - Strategic decisions
- **Middle Management** (35% of managers): Department heads - Tactical decisions  
- **First-line Management** (60% of managers): Supervisors - Operational decisions

### Key Management Skills
- **Technical skills**: Specific knowledge needed for tasks
- **Human skills**: Ability to work with and motivate people
- **Conceptual skills**: Seeing the organization as a whole

**Framework alert**: These three skills vary in importance by management level, with conceptual skills being most important at the top and technical skills most important at entry levels.`,
      completed: false,
      quiz: [
        {
          id: 1,
          question: "What are the four primary functions of management?",
          options: [
            "Planning, Organizing, Leading, Controlling",
            "Marketing, Finance, HR, Operations", 
            "Strategy, Tactics, Operations, Evaluation",
            "Hiring, Training, Evaluating, Firing"
          ],
          correctAnswer: 0,
          explanation: "The four functions are Planning (setting objectives), Organizing (arranging resources), Leading (motivating people), and Controlling (monitoring performance)."
        },
        {
          id: 2,
          question: "Which management theory focuses on efficiency through time studies and standardized methods?",
          options: [
            "Scientific Management",
            "Human Relations Movement",
            "Administrative Management", 
            "Systems Theory"
          ],
          correctAnswer: 0,
          explanation: "Scientific Management, also called Taylorism, emphasizes efficiency through careful measurement and standardization of work processes."
        },
        {
          id: 3,
          question: "What percentage of managers are typically in middle management positions?",
          options: [
            "35%",
            "60%", 
            "5%",
            "25%"
          ],
          correctAnswer: 0,
          explanation: "Middle management comprises about 35% of managers in most organizations, between top management (5%) and first-line management (60%)."
        },
        {
          id: 4,
          question: "Which management skill is most important for first-line supervisors?",
          options: [
            "Technical skills",
            "Conceptual skills",
            "Strategic skills", 
            "Financial skills"
          ],
          correctAnswer: 0,
          explanation: "First-line managers need strong technical skills because they work directly with employees on specific tasks and processes."
        },
        {
          id: 5,
          question: "Who introduced the 14 principles of management including unity of command?",
          options: [
            "Henri Fayol",
            "Frederick Taylor",
            "Elton Mayo", 
            "Peter Drucker"
          ],
          correctAnswer: 0,
          explanation: "Henri Fayol developed Administrative Management theory with 14 principles that remain influential in modern management practice."
        },
        {
          id: 6,
          question: "What function involves setting objectives and determining how to achieve them?",
          options: [
            "Planning",
            "Organizing",
            "Leading", 
            "Controlling"
          ],
          correctAnswer: 0,
          explanation: "Planning is the management function concerned with defining goals and establishing strategies to achieve them."
        },
        {
          id: 7,
          question: "Which management level makes strategic decisions?",
          options: [
            "Top Management",
            "Middle Management",
            "First-line Management", 
            "Operational Management"
          ],
          correctAnswer: 0,
          explanation: "Top management (CEOs, Presidents) focuses on strategic decisions that affect the entire organization's direction."
        },
        {
          id: 8,
          question: "What does the Human Relations Movement emphasize?",
          options: [
            "Social factors and employee satisfaction",
            "Efficiency and standardization",
            "Formal organizational structure", 
            "Financial performance metrics"
          ],
          correctAnswer: 0,
          explanation: "The Human Relations Movement, pioneered by Elton Mayo, highlighted the importance of social relationships and job satisfaction in productivity."
        },
        {
          id: 9,
          question: "Which function involves arranging resources and tasks?",
          options: [
            "Organizing",
            "Planning",
            "Leading", 
            "Controlling"
          ],
          correctAnswer: 0,
          explanation: "Organizing is the process of arranging human, financial, physical, and information resources to implement plans effectively."
        },
        {
          id: 10,
          question: "What are conceptual skills in management?",
          options: [
            "Seeing the organization as a whole",
            "Working with specific tools and techniques",
            "Motivating and communicating with people", 
            "Analyzing financial statements"
          ],
          correctAnswer: 0,
          explanation: "Conceptual skills involve the ability to see the organization as a complete system and understand how parts interrelate."
        },
        {
          id: 11,
          question: "Which management function includes monitoring performance?",
          options: [
            "Controlling",
            "Planning",
            "Organizing", 
            "Leading"
          ],
          correctAnswer: 0,
          explanation: "Controlling involves monitoring activities to ensure they're accomplished as planned and making corrections when needed."
        },
        {
          id: 12,
          question: "What percentage of managers are typically in top management?",
          options: [
            "5%",
            "35%",
            "60%", 
            "15%"
          ],
          correctAnswer: 0,
          explanation: "Only about 5% of managers occupy top management positions in most organizational hierarchies."
        },
        {
          id: 13,
          question: "Which skill involves the ability to motivate and communicate effectively?",
          options: [
            "Human skills",
            "Technical skills",
            "Conceptual skills", 
            "Analytical skills"
          ],
          correctAnswer: 0,
          explanation: "Human skills (also called interpersonal skills) involve working well with others, communicating effectively, and motivating team members."
        },
        {
          id: 14,
          question: "What is another name for Scientific Management?",
          options: [
            "Taylorism",
            "Fayolism",
            "Mayo Theory", 
            "Drucker Principles"
          ],
          correctAnswer: 0,
          explanation: "Scientific Management is commonly called Taylorism after its founder, Frederick Winslow Taylor."
        },
        {
          id: 15,
          question: "Which management function involves motivating people toward goals?",
          options: [
            "Leading",
            "Planning",
            "Organizing", 
            "Controlling"
          ],
          correctAnswer: 0,
          explanation: "Leading involves influencing and motivating employees to work toward achieving organizational objectives."
        },
        {
          id: 16,
          question: "What principle suggests each employee should report to only one supervisor?",
          options: [
            "Unity of Command",
            "Division of Work",
            "Scalar Chain", 
            "Order"
          ],
          correctAnswer: 0,
          explanation: "Unity of Command, one of Fayol's principles, states that each employee should receive orders from only one superior."
        },
        {
          id: 17,
          question: "Which management level has the highest percentage of managers?",
          options: [
            "First-line Management",
            "Middle Management",
            "Top Management", 
            "Executive Management"
          ],
          correctAnswer: 0,
          explanation: "First-line management typically comprises about 60% of all managers in an organization."
        },
        {
          id: 18,
          question: "What type of decisions do middle managers typically make?",
          options: [
            "Tactical decisions",
            "Strategic decisions",
            "Operational decisions", 
            "Financial decisions"
          ],
          correctAnswer: 0,
          explanation: "Middle managers focus on tactical decisions that implement the strategic plans set by top management."
        },
        {
          id: 19,
          question: "Which function would include creating staff schedules?",
          options: [
            "Organizing",
            "Planning",
            "Leading", 
            "Controlling"
          ],
          correctAnswer: 0,
          explanation: "Creating staff schedules is part of organizing, which involves arranging human resources to accomplish work efficiently."
        },
        {
          id: 20,
          question: "What did the Hawthorne Studies contribute to management theory?",
          options: [
            "Importance of social factors at work",
            "Time and motion studies",
            "Organizational hierarchy principles", 
            "Strategic planning frameworks"
          ],
          correctAnswer: 0,
          explanation: "The Hawthorne Studies led by Elton Mayo revealed that social factors and attention from management significantly affect worker productivity."
        }
      ]
    },
    {
      id: 2,
      title: "Strategic Planning and Decision Making",
      content: `# Strategic Planning and Decision Making

## The Planning Process
Planning is the foundation of effective management. It involves setting objectives and determining the best way to achieve them. Without proper planning, organizations drift without direction.

### Types of Planning
1. **Strategic Planning** (3-5 years): Long-term direction for the entire organization
2. **Tactical Planning** (1-3 years): Department-level plans to implement strategy
3. **Operational Planning** (Daily-1 year): Short-term plans for specific tasks
4. **Contingency Planning**: Backup plans for unexpected situations

**Industry statistic**: Companies with formal planning processes earn 30% higher profits on average than those without formal planning.

### Strategic Planning Framework
**SWOT Analysis** examines:
- **Strengths**: Internal advantages (what you do well)
- **Weaknesses**: Internal limitations (areas for improvement)
- **Opportunities**: External favorable conditions
- **Threats**: External challenges

**PESTLE Analysis** evaluates external factors:
- **Political**: Government policies, regulations
- **Economic**: Growth rates, inflation, exchange rates
- **Social**: Demographics, cultural trends
- **Technological**: Innovations, automation
- **Legal**: Laws, regulations
- **Environmental**: Sustainability, climate concerns

### SMART Goals Framework
Effective goals should be:
- **Specific**: Clear and unambiguous
- **Measurable**: Quantifiable with metrics
- **Achievable**: Realistic and attainable
- **Relevant**: Aligned with organizational objectives
- **Time-bound**: With clear deadlines

### Decision-Making Process
1. **Identify the Problem**: Recognize need for a decision
2. **Gather Information**: Collect relevant data
3. **Generate Alternatives**: Brainstorm possible solutions
4. **Evaluate Alternatives**: Assess pros and cons
5. **Choose Solution**: Select best alternative
6. **Implement Decision**: Put chosen solution into action
7. **Evaluate Results**: Monitor outcomes and adjust

**Framework application**: A retail store manager uses this process to decide whether to extend store hours, gathering sales data, customer feedback, and staff availability before making a decision.`,
      completed: false,
      quiz: [
        {
          id: 1,
          question: "What is the typical timeframe for strategic planning?",
          options: [
            "3-5 years",
            "Daily-1 year", 
            "1-3 years",
            "Weekly-Monthly"
          ],
          correctAnswer: 0,
          explanation: "Strategic planning focuses on long-term direction, typically covering 3-5 years for the entire organization."
        },
        {
          id: 2,
          question: "What does SWOT stand for in strategic analysis?",
          options: [
            "Strengths, Weaknesses, Opportunities, Threats",
            "Strategy, Workflow, Operations, Tactics",
            "Sales, Workforce, Objectives, Timeline", 
            "System, Work, Organization, Technology"
          ],
          correctAnswer: 0,
          explanation: "SWOT Analysis examines internal Strengths and Weaknesses, and external Opportunities and Threats."
        },
        {
          id: 3,
          question: "What percentage higher profits do companies with formal planning processes typically earn?",
          options: [
            "30%",
            "10%", 
            "50%",
            "20%"
          ],
          correctAnswer: 0,
          explanation: "Research shows companies with formal planning processes earn about 30% higher profits on average."
        },
        {
          id: 4,
          question: "What does the 'M' in SMART goals stand for?",
          options: [
            "Measurable",
            "Manageable",
            "Meaningful", 
            "Motivational"
          ],
          correctAnswer: 0,
          explanation: "In SMART goals, 'M' stands for Measurable, meaning goals should have quantifiable metrics."
        },
        {
          id: 5,
          question: "Which type of planning focuses on department-level implementation?",
          options: [
            "Tactical Planning",
            "Strategic Planning",
            "Operational Planning", 
            "Contingency Planning"
          ],
          correctAnswer: 0,
          explanation: "Tactical planning translates strategic plans into specific actions for departments or units, typically covering 1-3 years."
        },
        {
          id: 6,
          question: "What does PESTLE analysis evaluate?",
          options: [
            "External environmental factors",
            "Internal organizational capabilities",
            "Financial performance metrics", 
            "Employee satisfaction levels"
          ],
          correctAnswer: 0,
          explanation: "PESTLE Analysis examines Political, Economic, Social, Technological, Legal, and Environmental external factors affecting an organization."
        },
        {
          id: 7,
          question: "What is the first step in the decision-making process?",
          options: [
            "Identify the Problem",
            "Gather Information",
            "Generate Alternatives", 
            "Evaluate Alternatives"
          ],
          correctAnswer: 0,
          explanation: "The decision-making process begins with recognizing that a decision needs to be made by identifying a problem or opportunity."
        },
        {
          id: 8,
          question: "What type of planning creates backup plans for unexpected situations?",
          options: [
            "Contingency Planning",
            "Strategic Planning",
            "Tactical Planning", 
            "Operational Planning"
          ],
          correctAnswer: 0,
          explanation: "Contingency planning develops alternative courses of action to be used if original plans become inappropriate."
        },
        {
          id: 9,
          question: "What does the 'A' in SMART goals stand for?",
          options: [
            "Achievable",
            "Ambitious",
            "Actionable", 
            "Accountable"
          ],
          correctAnswer: 0,
          explanation: "In SMART goals, 'A' stands for Achievable, meaning goals should be realistic and attainable with available resources."
        },
        {
          id: 10,
          question: "What timeframe does operational planning typically cover?",
          options: [
            "Daily-1 year",
            "3-5 years",
            "1-3 years", 
            "Monthly-Quarterly"
          ],
          correctAnswer: 0,
          explanation: "Operational planning focuses on short-term activities, typically covering daily to annual timeframes."
        },
        {
          id: 11,
          question: "Which part of SWOT analysis examines internal advantages?",
          options: [
            "Strengths",
            "Weaknesses",
            "Opportunities", 
            "Threats"
          ],
          correctAnswer: 0,
          explanation: "Strengths are internal positive attributes that give an organization an advantage over competitors."
        },
        {
          id: 12,
          question: "What is the final step in the decision-making process?",
          options: [
            "Evaluate Results",
            "Choose Solution",
            "Implement Decision", 
            "Generate Alternatives"
          ],
          correctAnswer: 0,
          explanation: "The decision-making process concludes with evaluating results to determine if the decision solved the problem and what can be learned."
        },
        {
          id: 13,
          question: "What does the 'T' in SMART goals stand for?",
          options: [
            "Time-bound",
            "Tangible",
            "Targeted", 
            "Trackable"
          ],
          correctAnswer: 0,
          explanation: "In SMART goals, 'T' stands for Time-bound, meaning goals should have specific deadlines or timeframes."
        },
        {
          id: 14,
          question: "Which PESTLE factor includes government policies and regulations?",
          options: [
            "Political",
            "Economic",
            "Social", 
            "Technological"
          ],
          correctAnswer: 0,
          explanation: "The Political factor in PESTLE includes government policies, political stability, tax policies, and trade regulations."
        },
        {
          id: 15,
          question: "What type of goals should be clear and unambiguous?",
          options: [
            "Specific goals",
            "Measurable goals",
            "Achievable goals", 
            "Relevant goals"
          ],
          correctAnswer: 0,
          explanation: "Specific goals are clear, unambiguous, and well-defined, leaving no room for misinterpretation."
        },
        {
          id: 16,
          question: "Which part of SWOT analysis examines external challenges?",
          options: [
            "Threats",
            "Opportunities",
            "Strengths", 
            "Weaknesses"
          ],
          correctAnswer: 0,
          explanation: "Threats are external factors that could cause trouble or negatively impact the organization's performance."
        },
        {
          id: 17,
          question: "What step comes after 'Generate Alternatives' in decision-making?",
          options: [
            "Evaluate Alternatives",
            "Choose Solution",
            "Implement Decision", 
            "Identify the Problem"
          ],
          correctAnswer: 0,
          explanation: "After generating possible solutions, the next step is to evaluate the pros and cons of each alternative."
        },
        {
          id: 18,
          question: "Which PESTLE factor includes demographic trends?",
          options: [
            "Social",
            "Political",
            "Economic", 
            "Technological"
          ],
          correctAnswer: 0,
          explanation: "The Social factor in PESTLE includes demographics, cultural trends, population growth rates, and age distribution."
        },
        {
          id: 19,
          question: "What does the 'R' in SMART goals stand for?",
          options: [
            "Relevant",
            "Realistic",
            "Results-oriented", 
            "Reviewable"
          ],
          correctAnswer: 0,
          explanation: "In SMART goals, 'R' stands for Relevant, meaning goals should matter and align with broader organizational objectives."
        },
        {
          id: 20,
          question: "Which planning type translates strategy into department actions?",
          options: [
            "Tactical Planning",
            "Strategic Planning",
            "Operational Planning", 
            "Contingency Planning"
          ],
          correctAnswer: 0,
          explanation: "Tactical planning breaks down strategic plans into actionable steps for specific departments or functions."
        }
      ]
    },
    {
      id: 3,
      title: "Organizational Structure and Design",
      content: `# Organizational Structure and Design

## Understanding Organizational Structure
Organizational structure defines how tasks are divided, grouped, and coordinated. It establishes reporting relationships and communication channels within an organization.

### Key Elements of Structure
1. **Work Specialization**: Degree to which tasks are divided into separate jobs
2. **Departmentalization**: Basis for grouping jobs together
3. **Chain of Command**: Line of authority from top to bottom
4. **Span of Control**: Number of employees a manager supervises
5. **Centralization vs Decentralization**: Where decision-making authority lies
6. **Formalization**: Degree to which jobs are standardized

**Industry benchmark**: The optimal span of control varies by industry, but averages 8-10 employees per manager in knowledge work and 15-20 in manufacturing.

### Types of Organizational Structures
**Functional Structure**: Groups employees by specialized function (Marketing, Finance, Operations)
- *Advantage*: Efficiency through specialization
- *Disadvantage*: Poor communication between departments

**Divisional Structure**: Groups by product, customer, or geography
- *Advantage*: Focus on specific markets/products
- *Disadvantage*: Duplication of resources across divisions

**Matrix Structure**: Combines functional and divisional approaches
- *Advantage*: Flexibility and cross-functional collaboration
- *Disadvantage*: Dual reporting can cause conflict

**Flat Structure**: Few management layers, wide spans of control
- *Advantage*: Faster decision-making, lower costs
- *Disadvantage*: Limited career progression, manager overload

**Hierarchical Structure**: Multiple layers, narrow spans of control
- *Advantage*: Clear promotion paths, close supervision
- *Disadvantage*: Slow decision-making, high overhead

### Organizational Design Considerations
**Contingency Factors** influencing structure:
- **Strategy**: Structure follows strategy (Chandler's principle)
- **Size**: Larger organizations need more formalization
- **Technology**: Routine technology allows more formalization
- **Environment**: Stable vs dynamic environments require different structures

**Framework application**: A tech startup might use a flat structure for agility, while a bank might use a hierarchical structure for control and compliance.`,
      completed: false,
      quiz: [
        {
          id: 1,
          question: "What is work specialization in organizational structure?",
          options: [
            "Dividing tasks into separate jobs",
            "Grouping jobs together by function",
            "Line of authority from top to bottom", 
            "Number of employees per manager"
          ],
          correctAnswer: 0,
          explanation: "Work specialization refers to the degree to which organizational tasks are divided into separate jobs to improve efficiency."
        },
        {
          id: 2,
          question: "What is the average span of control in manufacturing?",
          options: [
            "15-20 employees per manager",
            "8-10 employees per manager", 
            "5-7 employees per manager",
            "20-25 employees per manager"
          ],
          correctAnswer: 0,
          explanation: "In manufacturing environments, the typical span of control is 15-20 employees per manager due to more routine work."
        },
        {
          id: 3,
          question: "Which structure groups employees by specialized functions?",
          options: [
            "Functional Structure",
            "Divisional Structure",
            "Matrix Structure", 
            "Flat Structure"
          ],
          correctAnswer: 0,
          explanation: "Functional structure organizes employees into departments based on specialized areas like marketing, finance, or operations."
        },
        {
          id: 4,
          question: "What does 'span of control' refer to?",
          options: [
            "Number of employees a manager supervises",
            "Number of management levels in organization",
            "Degree of task standardization", 
            "Where decision-making authority resides"
          ],
          correctAnswer: 0,
          explanation: "Span of control is the number of subordinates that report directly to a manager or supervisor."
        },
        {
          id: 5,
          question: "Which structure combines functional and divisional approaches?",
          options: [
            "Matrix Structure",
            "Hierarchical Structure",
            "Flat Structure", 
            "Network Structure"
          ],
          correctAnswer: 0,
          explanation: "Matrix structure combines elements of both functional and divisional structures, creating dual reporting relationships."
        },
        {
          id: 6,
          question: "What is a disadvantage of functional structure?",
          options: [
            "Poor communication between departments",
            "Duplication of resources",
            "Slow decision-making", 
            "High overhead costs"
          ],
          correctAnswer: 0,
          explanation: "Functional structures can suffer from poor interdepartmental communication as each department focuses on its own specialized area."
        },
        {
          id: 7,
          question: "What is the average span of control in knowledge work?",
          options: [
            "8-10 employees per manager",
            "15-20 employees per manager", 
            "5-7 employees per manager",
            "12-15 employees per manager"
          ],
          correctAnswer: 0,
          explanation: "In knowledge work environments, the typical span of control is 8-10 employees per manager due to more complex tasks."
        },
        {
          id: 8,
          question: "Which structure has few management layers?",
          options: [
            "Flat Structure",
            "Hierarchical Structure",
            "Functional Structure", 
            "Divisional Structure"
          ],
          correctAnswer: 0,
          explanation: "Flat structures have minimal levels of management between staff and executives, resulting in wider spans of control."
        },
        {
          id: 9,
          question: "What does 'formalization' refer to in organizational structure?",
          options: [
            "Degree to which jobs are standardized",
            "Number of management levels",
            "Basis for grouping jobs together", 
            "Where decisions are made"
          ],
          correctAnswer: 0,
          explanation: "Formalization is the extent to which an organization's jobs are standardized and guided by rules and procedures."
        },
        {
          id: 10,
          question: "Which structure groups by product, customer, or geography?",
          options: [
            "Divisional Structure",
            "Functional Structure",
            "Matrix Structure", 
            "Flat Structure"
          ],
          correctAnswer: 0,
          explanation: "Divisional structure organizes employees into units based on products, customers, or geographic regions."
        },
        {
          id: 11,
          question: "What is an advantage of flat structure?",
          options: [
            "Faster decision-making",
            "Clear promotion paths",
            "Close supervision", 
            "High specialization"
          ],
          correctAnswer: 0,
          explanation: "Flat structures enable faster decision-making because there are fewer management layers for information to pass through."
        },
        {
          id: 12,
          question: "What does 'chain of command' establish?",
          options: [
            "Line of authority from top to bottom",
            "Basis for grouping jobs",
            "Degree of task division", 
            "Number of subordinates per manager"
          ],
          correctAnswer: 0,
          explanation: "Chain of command is the unbroken line of authority that extends from the top of the organization to the lowest level."
        },
        {
          id: 13,
          question: "What is a disadvantage of matrix structure?",
          options: [
            "Dual reporting can cause conflict",
            "Poor communication between departments",
            "Duplication of resources", 
            "Limited career progression"
          ],
          correctAnswer: 0,
          explanation: "Matrix structures can create conflict because employees report to both functional managers and project/product managers."
        },
        {
          id: 14,
          question: "What does departmentalization refer to?",
          options: [
            "Basis for grouping jobs together",
            "Degree of task division",
            "Line of authority", 
            "Number of management levels"
          ],
          correctAnswer: 0,
          explanation: "Departmentalization is the basis by which jobs are grouped together within an organization."
        },
        {
          id: 15,
          question: "Which structure has multiple management layers?",
          options: [
            "Hierarchical Structure",
            "Flat Structure",
            "Matrix Structure", 
            "Network Structure"
          ],
          correctAnswer: 0,
          explanation: "Hierarchical structures have many levels of management, creating tall organizational pyramids with narrow spans of control."
        },
        {
          id: 16,
          question: "What is an advantage of divisional structure?",
          options: [
            "Focus on specific markets/products",
            "Efficiency through specialization",
            "Flexibility and collaboration", 
            "Lower management costs"
          ],
          correctAnswer: 0,
          explanation: "Divisional structures allow organizations to focus attention and resources on specific markets, products, or customer groups."
        },
        {
          id: 17,
          question: "What does centralization vs decentralization refer to?",
          options: [
            "Where decision-making authority lies",
            "How tasks are divided",
            "Basis for grouping jobs", 
            "Degree of standardization"
          ],
          correctAnswer: 0,
          explanation: "Centralization vs decentralization concerns whether decision-making authority is concentrated at the top or distributed throughout the organization."
        },
        {
          id: 18,
          question: "What is a disadvantage of hierarchical structure?",
          options: [
            "Slow decision-making",
            "Poor interdepartmental communication",
            "Dual reporting conflicts", 
            "Duplication of resources"
          ],
          correctAnswer: 0,
          explanation: "Hierarchical structures can lead to slow decision-making because information must pass through multiple management layers."
        },
        {
          id: 19,
          question: "Which contingency factor states 'structure follows strategy'?",
          options: [
            "Strategy",
            "Size",
            "Technology", 
            "Environment"
          ],
          correctAnswer: 0,
          explanation: "Alfred Chandler's principle 'structure follows strategy' means organizational structure should be designed to support strategic goals."
        },
        {
          id: 20,
          question: "What is an advantage of functional structure?",
          options: [
            "Efficiency through specialization",
            "Focus on specific markets",
            "Faster decision-making", 
            "Flexibility and collaboration"
          ],
          correctAnswer: 0,
          explanation: "Functional structures create efficiency by grouping specialists together who can develop deep expertise in their functional area."
        }
      ]
    },
    {
      id: 4,
      title: "Leadership and Team Management",
      content: `# Leadership and Team Management

## Understanding Leadership vs Management
Leadership is about influencing people toward goals, while management focuses on processes and systems. Both are essential for organizational success.

**Key distinction**: Managers do things right, leaders do the right things (Bennis).

### Leadership Theories and Styles
**Trait Theory**: Focuses on innate qualities of leaders
- Early research identified intelligence, confidence, charisma
- Modern view: Traits can be developed through experience

**Behavioral Theory**: Focuses on what leaders do
- **Task-oriented**: Focus on getting work done
- **Relationship-oriented**: Focus on people and relationships
- **Situational Theory** (Fiedler): Effectiveness depends on situation

**Contemporary Approaches**:
- **Transformational Leadership**: Inspires and motivates followers
- **Transactional Leadership**: Uses rewards and punishments
- **Servant Leadership**: Focuses on serving followers' needs

### Motivation Theories
**Maslow's Hierarchy of Needs** (5 levels):
1. **Physiological**: Basic survival needs
2. **Safety**: Security and stability
3. **Social**: Belonging and relationships
4. **Esteem**: Recognition and respect
5. **Self-actualization**: Achieving full potential

**Herzberg's Two-Factor Theory**:
- **Hygiene Factors** (prevent dissatisfaction): Salary, working conditions, policies
- **Motivators** (create satisfaction): Achievement, recognition, responsibility

**McGregor's Theory X and Theory Y**:
- **Theory X**: Employees dislike work, need control
- **Theory Y**: Employees enjoy work, are self-motivated

### Team Development Stages (Tuckman)
1. **Forming**: Orientation and testing
2. **Storming**: Conflict and competition
3. **Norming**: Cohesion and cooperation
4. **Performing**: Productivity and achievement
5. **Adjourning** (added later): Disbanding the team

### Effective Team Characteristics
- Clear goals and purpose
- Complementary skills among members
- Mutual accountability
- Trust and psychological safety
- Effective communication

**Industry statistic**: Companies with highly engaged teams show 21% greater profitability.`,
      completed: false,
      quiz: [
        {
          id: 1,
          question: "What is the key distinction between leadership and management?",
          options: [
            "Managers do things right, leaders do the right things",
            "Managers set vision, leaders implement",
            "Leaders focus on processes, managers on people", 
            "Leaders manage resources, managers inspire teams"
          ],
          correctAnswer: 0,
          explanation: "Warren Bennis famously said: 'Managers are people who do things right and leaders are people who do the right things.'"
        },
        {
          id: 2,
          question: "How many levels are in Maslow's Hierarchy of Needs?",
          options: [
            "5 levels",
            "3 levels", 
            "7 levels",
            "4 levels"
          ],
          correctAnswer: 0,
          explanation: "Maslow's Hierarchy has five levels: Physiological, Safety, Social, Esteem, and Self-actualization needs."
        },
        {
          id: 3,
          question: "What percentage greater profitability do companies with engaged teams show?",
          options: [
            "21%",
            "15%", 
            "30%",
            "25%"
          ],
          correctAnswer: 0,
          explanation: "Research shows companies with highly engaged teams achieve 21% greater profitability than those with low engagement."
        },
        {
          id: 4,
          question: "Which leadership style focuses on inspiring and motivating followers?",
          options: [
            "Transformational Leadership",
            "Transactional Leadership",
            "Servant Leadership", 
            "Autocratic Leadership"
          ],
          correctAnswer: 0,
          explanation: "Transformational leadership inspires followers to transcend their own self-interests for the good of the organization."
        },
        {
          id: 5,
          question: "What are hygiene factors in Herzberg's theory?",
          options: [
            "Factors that prevent dissatisfaction",
            "Factors that create satisfaction",
            "Basic survival needs", 
            "Self-fulfillment needs"
          ],
          correctAnswer: 0,
          explanation: "Hygiene factors (like salary and working conditions) prevent dissatisfaction but don't necessarily motivate employees."
        },
        {
          id: 6,
          question: "Which team stage involves conflict and competition?",
          options: [
            "Storming",
            "Forming",
            "Norming", 
            "Performing"
          ],
          correctAnswer: 0,
          explanation: "The Storming stage is characterized by conflict as team members establish roles and confront differences."
        },
        {
          id: 7,
          question: "What does Theory Y assume about employees?",
          options: [
            "They enjoy work and are self-motivated",
            "They dislike work and need control",
            "They work only for money", 
            "They resist change naturally"
          ],
          correctAnswer: 0,
          explanation: "Theory Y assumes that employees find work as natural as play, are self-motivated, and seek responsibility."
        },
        {
          id: 8,
          question: "Which leadership theory focuses on innate qualities?",
          options: [
            "Trait Theory",
            "Behavioral Theory",
            "Situational Theory", 
            "Transformational Theory"
          ],
          correctAnswer: 0,
          explanation: "Trait theory suggests that certain innate qualities and characteristics make people better suited to leadership."
        },
        {
          id: 9,
          question: "What is the first stage in team development?",
          options: [
            "Forming",
            "Storming",
            "Norming", 
            "Performing"
          ],
          correctAnswer: 0,
          explanation: "Forming is the initial stage where team members meet, learn about the project, and establish ground rules."
        },
        {
          id: 10,
          question: "What are motivators in Herzberg's theory?",
          options: [
            "Factors that create satisfaction",
            "Factors that prevent dissatisfaction",
            "Basic working conditions", 
            "Company policies"
          ],
          correctAnswer: 0,
          explanation: "Motivators (like achievement and recognition) create job satisfaction and motivate employees to perform better."
        },
        {
          id: 11,
          question: "Which leadership style uses rewards and punishments?",
          options: [
            "Transactional Leadership",
            "Transformational Leadership",
            "Servant Leadership", 
            "Democratic Leadership"
          ],
          correctAnswer: 0,
          explanation: "Transactional leadership focuses on exchanges between leaders and followers, using rewards and punishments to motivate."
        },
        {
          id: 12,
          question: "What is the highest level in Maslow's hierarchy?",
          options: [
            "Self-actualization",
            "Esteem",
            "Social", 
            "Safety"
          ],
          correctAnswer: 0,
          explanation: "Self-actualization is the highest level, representing the desire to become everything one is capable of becoming."
        },
        {
          id: 13,
          question: "Which team stage is most productive?",
          options: [
            "Performing",
            "Forming",
            "Storming", 
            "Norming"
          ],
          correctAnswer: 0,
          explanation: "During the Performing stage, the team is highly productive, works effectively, and achieves goals efficiently."
        },
        {
          id: 14,
          question: "What does Theory X assume about employees?",
          options: [
            "They dislike work and need control",
            "They enjoy work and are self-motivated",
            "They work for personal growth", 
            "They naturally seek responsibility"
          ],
          correctAnswer: 0,
          explanation: "Theory X assumes that employees dislike work, avoid responsibility, and must be controlled and directed."
        },
        {
          id: 15,
          question: "Which leadership style focuses on serving followers' needs?",
          options: [
            "Servant Leadership",
            "Transactional Leadership",
            "Transformational Leadership", 
            "Autocratic Leadership"
          ],
          correctAnswer: 0,
          explanation: "Servant leadership emphasizes the leader's role as a servant who focuses on meeting the needs of team members."
        },
        {
          id: 16,
          question: "What stage involves cohesion and cooperation?",
          options: [
            "Norming",
            "Forming",
            "Storming", 
            "Performing"
          ],
          correctAnswer: 0,
          explanation: "During Norming, the team establishes cohesion, resolves conflicts, and develops cooperative working relationships."
        },
        {
          id: 17,
          question: "Which need level includes belonging and relationships?",
          options: [
            "Social needs",
            "Physiological needs",
            "Safety needs", 
            "Esteem needs"
          ],
          correctAnswer: 0,
          explanation: "Social needs in Maslow's hierarchy include the need for friendship, intimacy, family, and sense of belonging."
        },
        {
          id: 18,
          question: "What does situational leadership theory emphasize?",
          options: [
            "Effectiveness depends on the situation",
            "Leaders are born with certain traits",
            "Leadership behaviors can be learned", 
            "Leaders should serve followers"
          ],
          correctAnswer: 0,
          explanation: "Situational theory (Fiedler) suggests that leadership effectiveness depends on matching leadership style to the situation."
        },
        {
          id: 19,
          question: "What was later added to Tuckman's team stages?",
          options: [
            "Adjourning",
            "Evaluating",
            "Revising", 
            "Celebrating"
          ],
          correctAnswer: 0,
          explanation: "Tuckman later added a fifth stage, Adjourning, which involves disbanding the team after task completion."
        },
        {
          id: 20,
          question: "Which need level includes recognition and respect?",
          options: [
            "Esteem needs",
            "Social needs",
            "Safety needs", 
            "Self-actualization"
          ],
          correctAnswer: 0,
          explanation: "Esteem needs include the desire for reputation, prestige, recognition, attention, and appreciation from others."
        }
      ]
    },
    {
      id: 5,
      title: "Financial Management for Managers",
      content: `# Financial Management for Managers

## Essential Financial Literacy
All managers need financial literacy to make informed decisions, allocate resources effectively, and contribute to organizational profitability.

### Key Financial Statements
**Balance Sheet**: Snapshot of financial position at a point in time
- **Assets** = Liabilities + Owner's Equity
- Shows what the company owns vs owes

**Income Statement** (Profit & Loss Statement): Performance over a period
- **Revenue** - Expenses = Net Income
- Shows profitability

**Cash Flow Statement**: Cash movements over a period
- Operating, Investing, and Financing activities
- Shows liquidity position

### Financial Analysis Ratios
**Profitability Ratios**:
- **Gross Profit Margin**: (Revenue - COGS) / Revenue
- **Net Profit Margin**: Net Income / Revenue
- **Return on Investment (ROI)**: (Gain - Cost) / Cost

**Liquidity Ratios**:
- **Current Ratio**: Current Assets / Current Liabilities
- **Quick Ratio**: (Current Assets - Inventory) / Current Liabilities

**Efficiency Ratios**:
- **Inventory Turnover**: COGS / Average Inventory
- **Accounts Receivable Turnover**: Net Credit Sales / Average Receivables

**Industry benchmark**: Healthy companies typically maintain a current ratio above 1.5 and inventory turnover above 5 times per year.

### Budgeting Process
**Types of Budgets**:
- **Operating Budget**: Day-to-day expenses and revenues
- **Capital Budget**: Long-term investments in assets
- **Cash Budget**: Planned cash inflows and outflows

**Budgeting Approaches**:
- **Incremental Budgeting**: Adjusts previous year's budget
- **Zero-Based Budgeting**: Justifies every expense from zero
- **Activity-Based Budgeting**: Links costs to activities

### Cost Concepts for Decision Making
**Fixed Costs**: Don't change with production volume (rent, salaries)
**Variable Costs**: Change with production volume (materials, commissions)
**Semi-variable Costs**: Mix of fixed and variable components
**Opportunity Cost**: Value of next best alternative forgone
**Sunk Costs**: Already incurred, irrelevant for future decisions

**Break-even Analysis**:
- **Break-even Point** = Fixed Costs / (Price - Variable Cost per unit)
- Shows sales volume needed to cover all costs

### Capital Investment Evaluation
**Payback Period**: Time to recover initial investment
**Net Present Value (NPV)**: Present value of future cash flows minus initial investment
**Internal Rate of Return (IRR)**: Discount rate making NPV zero

**Framework application**: A department manager uses break-even analysis to decide whether to launch a new product line, considering fixed setup costs and variable production costs.`,
      completed: false,
      quiz: [
        {
          id: 1,
          question: "What does the balance sheet equation state?",
          options: [
            "Assets = Liabilities + Owner's Equity",
            "Revenue - Expenses = Net Income", 
            "Assets = Revenue - Expenses",
            "Liabilities = Assets - Equity"
          ],
          correctAnswer: 0,
          explanation: "The fundamental accounting equation is Assets = Liabilities + Owner's Equity, showing what the company owns equals what it owes plus owner's investment."
        },
        {
          id: 2,
          question: "What is a healthy current ratio for most companies?",
          options: [
            "Above 1.5",
            "Below 1.0", 
            "Exactly 2.0",
            "Between 0.5 and 1.0"
          ],
          correctAnswer: 0,
          explanation: "A current ratio above 1.5 is generally considered healthy, indicating the company can cover its short-term obligations."
        },
        {
          id: 3,
          question: "Which financial statement shows performance over a period?",
          options: [
            "Income Statement",
            "Balance Sheet",
            "Cash Flow Statement", 
            "Statement of Equity"
          ],
          correctAnswer: 0,
          explanation: "The Income Statement (or Profit & Loss Statement) shows revenues, expenses, and profits over a specific time period."
        },
        {
          id: 4,
          question: "What is the formula for gross profit margin?",
          options: [
            "(Revenue - COGS) / Revenue",
            "Net Income / Revenue",
            "(Gain - Cost) / Cost", 
            "Current Assets / Current Liabilities"
          ],
          correctAnswer: 0,
          explanation: "Gross Profit Margin = (Revenue - Cost of Goods Sold) / Revenue, measuring the percentage of revenue remaining after direct production costs."
        },
        {
          id: 5,
          question: "What type of costs don't change with production volume?",
          options: [
            "Fixed Costs",
            "Variable Costs",
            "Semi-variable Costs", 
            "Opportunity Costs"
          ],
          correctAnswer: 0,
          explanation: "Fixed costs remain constant regardless of production volume (like rent, salaries, insurance premiums)."
        },
        {
          id: 6,
          question: "What is inventory turnover typically measured as?",
          options: [
            "COGS / Average Inventory",
            "Revenue / Inventory",
            "Net Income / Inventory", 
            "Assets / Inventory"
          ],
          correctAnswer: 0,
          explanation: "Inventory Turnover = Cost of Goods Sold / Average Inventory, indicating how efficiently inventory is managed."
        },
        {
          id: 7,
          question: "Which budgeting approach justifies every expense from zero?",
          options: [
            "Zero-Based Budgeting",
            "Incremental Budgeting",
            "Activity-Based Budgeting", 
            "Traditional Budgeting"
          ],
          correctAnswer: 0,
          explanation: "Zero-Based Budgeting requires managers to justify all expenses for each new period, starting from a 'zero base.'"
        },
        {
          id: 8,
          question: "What is the break-even point formula?",
          options: [
            "Fixed Costs / (Price - Variable Cost per unit)",
            "Revenue / Fixed Costs",
            "Variable Costs / Fixed Costs", 
            "(Price - Cost) / Units Sold"
          ],
          correctAnswer: 0,
          explanation: "Break-even Point = Fixed Costs / (Price per unit - Variable Cost per unit), showing units needed to cover all costs."
        },
        {
          id: 9,
          question: "Which ratio measures short-term liquidity?",
          options: [
            "Current Ratio",
            "Net Profit Margin",
            "Return on Investment", 
            "Inventory Turnover"
          ],
          correctAnswer: 0,
          explanation: "Current Ratio = Current Assets / Current Liabilities, measuring a company's ability to pay short-term obligations."
        },
        {
          id: 10,
          question: "What does ROI stand for?",
          options: [
            "Return on Investment",
            "Return on Income",
            "Rate of Investment", 
            "Revenue on Investment"
          ],
          correctAnswer: 0,
          explanation: "ROI = Return on Investment, calculated as (Gain from Investment - Cost of Investment) / Cost of Investment."
        },
        {
          id: 11,
          question: "Which financial statement shows cash movements?",
          options: [
            "Cash Flow Statement",
            "Balance Sheet",
            "Income Statement", 
            "Budget Statement"
          ],
          correctAnswer: 0,
          explanation: "The Cash Flow Statement shows cash inflows and outflows from operating, investing, and financing activities over a period."
        },
        {
          id: 12,
          question: "What type of costs change with production volume?",
          options: [
            "Variable Costs",
            "Fixed Costs",
            "Sunk Costs", 
            "Opportunity Costs"
          ],
          correctAnswer: 0,
          explanation: "Variable costs change in direct proportion to production volume (like raw materials, production supplies, sales commissions)."
        },
        {
          id: 13,
          question: "What is the formula for net profit margin?",
          options: [
            "Net Income / Revenue",
            "(Revenue - COGS) / Revenue",
            "(Gain - Cost) / Cost", 
            "Assets / Revenue"
          ],
          correctAnswer: 0,
          explanation: "Net Profit Margin = Net Income / Revenue, showing what percentage of revenue becomes profit after all expenses."
        },
        {
          id: 14,
          question: "Which budgeting approach adjusts previous year's budget?",
          options: [
            "Incremental Budgeting",
            "Zero-Based Budgeting",
            "Activity-Based Budgeting", 
            "Capital Budgeting"
          ],
          correctAnswer: 0,
          explanation: "Incremental Budgeting takes the previous period's budget and adjusts it for inflation, growth, or other factors."
        },
        {
          id: 15,
          question: "What does NPV stand for?",
          options: [
            "Net Present Value",
            "Net Profit Value",
            "Nominal Present Value", 
            "New Project Valuation"
          ],
          correctAnswer: 0,
          explanation: "NPV = Net Present Value, calculated as present value of future cash flows minus initial investment."
        },
        {
          id: 16,
          question: "What is a healthy inventory turnover rate?",
          options: [
            "Above 5 times per year",
            "Below 2 times per year",
            "Exactly 10 times per year", 
            "Between 1 and 2 times per year"
          ],
          correctAnswer: 0,
          explanation: "Inventory turnover above 5 times per year is generally healthy, indicating efficient inventory management."
        },
        {
          id: 17,
          question: "Which costs are irrelevant for future decisions?",
          options: [
            "Sunk Costs",
            "Variable Costs",
            "Fixed Costs", 
            "Opportunity Costs"
          ],
          correctAnswer: 0,
          explanation: "Sunk costs are costs already incurred that cannot be recovered and should not affect future decision-making."
        },
        {
          id: 18,
          question: "What is the quick ratio formula?",
          options: [
            "(Current Assets - Inventory) / Current Liabilities",
            "Current Assets / Current Liabilities",
            "Cash / Current Liabilities", 
            "Assets / Liabilities"
          ],
          correctAnswer: 0,
          explanation: "Quick Ratio = (Current Assets - Inventory) / Current Liabilities, measuring immediate liquidity without relying on inventory sales."
        },
        {
          id: 19,
          question: "What type of budget covers long-term investments?",
          options: [
            "Capital Budget",
            "Operating Budget",
            "Cash Budget", 
            "Master Budget"
          ],
          correctAnswer: 0,
          explanation: "Capital budgets plan for long-term investments in assets like equipment, buildings, or technology."
        },
        {
          id: 20,
          question: "What does IRR stand for?",
          options: [
            "Internal Rate of Return",
            "Investment Return Rate",
            "Initial Revenue Return", 
            "Interest Rate of Return"
          ],
          correctAnswer: 0,
          explanation: "IRR = Internal Rate of Return, the discount rate that makes the net present value of all cash flows equal to zero."
        }
      ]
    },
    {
      id: 6,
      title: "Operations and Quality Management",
      content: `# Operations and Quality Management

## Understanding Operations Management
Operations management transforms inputs (materials, labor, information) into outputs (goods, services) that create value for customers. It's the engine room of any organization.

### Key Operations Decisions
**Strategic Decisions** (long-term):
- Facility location and capacity
- Technology selection
- Vertical integration decisions

**Tactical Decisions** (medium-term):
- Workforce planning
- Inventory management
- Quality assurance systems

**Operational Decisions** (short-term):
- Scheduling and sequencing
- Quality control checks
- Maintenance planning

### Quality Management Approaches
**Total Quality Management (TQM)**:
- Organization-wide commitment to continuous improvement
- Focus on customer satisfaction
- Employee involvement at all levels
- Process-centered approach

**Six Sigma**:
- Goal: Reduce defects to 3.4 per million opportunities
- DMAIC methodology: Define, Measure, Analyze, Improve, Control
- Uses statistical tools for process improvement

**Lean Manufacturing**:
- Focus on eliminating waste (muda)
- Seven wastes: Transport, Inventory, Motion, Waiting, Overprocessing, Overproduction, Defects
- Just-in-Time (JIT) production

**ISO 9000 Standards**:
- International quality management standards
- Process documentation and standardization
- Continuous improvement requirement

### Process Improvement Tools
**Process Mapping**: Visual representation of workflow
**Pareto Analysis**: 80/20 rule - focus on vital few causes
**Cause-and-Effect Diagrams** (Fishbone/Ishikawa): Identify root causes
**Control Charts**: Monitor process variation over time
**Benchmarking**: Compare against industry best practices

### Supply Chain Management
**Key Components**:
- **Procurement**: Sourcing raw materials
- **Production**: Transforming materials into products
- **Distribution**: Getting products to customers
- **Logistics**: Transportation and storage

**Inventory Management Systems**:
- **Economic Order Quantity (EOQ)**: Optimal order quantity minimizing total costs
- **ABC Analysis**: Classify inventory by value/importance
- **Just-in-Time (JIT)**: Minimize inventory through timed deliveries

**Industry statistic**: Companies implementing TQM typically see 10-20% reduction in costs and 20-30% improvement in productivity.

### Performance Metrics
- **Throughput**: Rate of production
- **Cycle Time**: Time to complete one process
- **Capacity Utilization**: Percentage of capacity used
- **First-pass Yield**: Percentage of units passing quality first time
- **Customer Satisfaction Scores**: Direct feedback measures

**Framework application**: A service company uses process mapping to identify bottlenecks in customer service, then applies Six Sigma tools to reduce wait times and improve satisfaction.`,
      completed: false,
      quiz: [
        {
          id: 1,
          question: "What does TQM stand for?",
          options: [
            "Total Quality Management",
            "Total Quantity Management", 
            "Technical Quality Methods",
            "Team Quality Management"
          ],
          correctAnswer: 0,
          explanation: "TQM = Total Quality Management, an organization-wide approach to continuous improvement and customer satisfaction."
        },
        {
          id: 2,
          question: "What is the Six Sigma defect rate goal?",
          options: [
            "3.4 defects per million opportunities",
            "10 defects per thousand opportunities", 
            "1 defect per hundred opportunities",
            "Zero defects always"
          ],
          correctAnswer: 0,
          explanation: "Six Sigma aims for 3.4 defects per million opportunities, representing near-perfect quality performance."
        },
        {
          id: 3,
          question: "What productivity improvement do companies typically see with TQM?",
          options: [
            "20-30% improvement",
            "5-10% improvement", 
            "40-50% improvement",
            "No significant improvement"
          ],
          correctAnswer: 0,
          explanation: "Companies implementing TQM typically achieve 20-30% productivity improvements through process optimization."
        },
        {
          id: 4,
          question: "What does DMAIC stand for in Six Sigma?",
          options: [
            "Define, Measure, Analyze, Improve, Control",
            "Design, Make, Analyze, Improve, Check",
            "Develop, Measure, Assess, Implement, Control", 
            "Define, Monitor, Analyze, Improve, Complete"
          ],
          correctAnswer: 0,
          explanation: "DMAIC is the Six Sigma improvement methodology: Define, Measure, Analyze, Improve, Control."
        },
        {
          id: 5,
          question: "How many types of waste does Lean identify?",
          options: [
            "7 wastes",
            "5 wastes", 
            "3 wastes",
            "10 wastes"
          ],
          correctAnswer: 0,
          explanation: "Lean Manufacturing identifies seven types of waste (muda): Transport, Inventory, Motion, Waiting, Overprocessing, Overproduction, Defects."
        },
        {
          id: 6,
          question: "What type of decisions involve facility location?",
          options: [
            "Strategic decisions",
            "Tactical decisions",
            "Operational decisions", 
            "Daily decisions"
          ],
          correctAnswer: 0,
          explanation: "Strategic decisions in operations include long-term choices like facility location, capacity, and technology selection."
        },
        {
          id: 7,
          question: "What cost reduction do companies typically see with TQM?",
          options: [
            "10-20% reduction",
            "30-40% reduction", 
            "5-10% reduction",
            "No cost reduction"
          ],
          correctAnswer: 0,
          explanation: "TQM implementation typically results in 10-20% cost reductions through waste elimination and process improvements."
        },
        {
          id: 8,
          question: "What does JIT stand for?",
          options: [
            "Just-in-Time",
            "Job-in-Transit",
            "Just-in-Turnover", 
            "Job-in-Training"
          ],
          correctAnswer: 0,
          explanation: "JIT = Just-in-Time, an inventory strategy that aligns raw material orders with production schedules to minimize inventory."
        },
        {
          id: 9,
          question: "What are international quality standards called?",
          options: [
            "ISO 9000 Standards",
            "TQM Standards",
            "Six Sigma Standards", 
            "Lean Standards"
          ],
          correctAnswer: 0,
          explanation: "ISO 9000 is a family of international standards for quality management systems and continuous improvement."
        },
        {
          id: 10,
          question: "What tool uses the 80/20 rule?",
          options: [
            "Pareto Analysis",
            "Process Mapping",
            "Control Charts", 
            "Fishbone Diagrams"
          ],
          correctAnswer: 0,
          explanation: "Pareto Analysis applies the 80/20 rule, suggesting 80% of problems come from 20% of causes."
        },
        {
          id: 11,
          question: "What type of decisions involve scheduling?",
          options: [
            "Operational decisions",
            "Strategic decisions",
            "Tactical decisions", 
            "Long-term decisions"
          ],
          correctAnswer: 0,
          explanation: "Operational decisions include short-term activities like scheduling, daily quality checks, and maintenance planning."
        },
        {
          id: 12,
          question: "What does EOQ stand for?",
          options: [
            "Economic Order Quantity",
            "Efficient Order Quality",
            "Estimated Order Quantity", 
            "Effective Order Quota"
          ],
          correctAnswer: 0,
          explanation: "EOQ = Economic Order Quantity, the optimal order quantity that minimizes total inventory costs."
        },
        {
          id: 13,
          question: "What is another name for Cause-and-Effect diagrams?",
          options: [
            "Fishbone or Ishikawa diagrams",
            "Pareto diagrams",
            "Control charts", 
            "Process maps"
          ],
          correctAnswer: 0,
          explanation: "Cause-and-Effect diagrams are also called Fishbone diagrams (for their shape) or Ishikawa diagrams (after their creator)."
        },
        {
          id: 14,
          question: "What type of decisions involve workforce planning?",
          options: [
            "Tactical decisions",
            "Strategic decisions",
            "Operational decisions", 
            "Executive decisions"
          ],
          correctAnswer: 0,
          explanation: "Tactical decisions include medium-term planning like workforce scheduling, inventory policies, and quality system implementation."
        },
        {
          id: 15,
          question: "What inventory classification method uses ABC categories?",
          options: [
            "ABC Analysis",
            "EOQ Analysis",
            "JIT Analysis", 
            "TQM Analysis"
          ],
          correctAnswer: 0,
          explanation: "ABC Analysis classifies inventory into three categories (A, B, C) based on value and importance for focused management."
        },
        {
          id: 16,
          question: "What measures the rate of production?",
          options: [
            "Throughput",
            "Cycle Time",
            "Capacity Utilization", 
            "First-pass Yield"
          ],
          correctAnswer: 0,
          explanation: "Throughput measures the rate at which a system produces goods or services over a specific period."
        },
        {
          id: 17,
          question: "What is the focus of Lean Manufacturing?",
          options: [
            "Eliminating waste",
            "Reducing defects",
            "Standardizing processes", 
            "Increasing capacity"
          ],
          correctAnswer: 0,
          explanation: "Lean Manufacturing focuses on eliminating all forms of waste (muda) to create more value with fewer resources."
        },
        {
          id: 18,
          question: "What measures time to complete one process?",
          options: [
            "Cycle Time",
            "Throughput",
            "Capacity Utilization", 
            "Lead Time"
          ],
          correctAnswer: 0,
          explanation: "Cycle Time measures the time required to complete one cycle of an operation or process from start to finish."
        },
        {
          id: 19,
          question: "What does benchmarking involve?",
          options: [
            "Comparing against industry best practices",
            "Setting internal quality standards",
            "Measuring defect rates", 
            "Mapping workflow processes"
          ],
          correctAnswer: 0,
          explanation: "Benchmarking involves comparing an organization's processes and performance metrics to industry best practices."
        },
        {
          id: 20,
          question: "What percentage of capacity is typically measured?",
          options: [
            "Capacity Utilization",
            "Throughput Rate",
            "Cycle Efficiency", 
            "Yield Percentage"
          ],
          correctAnswer: 0,
          explanation: "Capacity Utilization measures the percentage of an organization's production capacity that is actually being used."
        }
      ]
    }
  ],
  
  // ==================== FINAL EXAM ====================
  finalExam: [
    {
      id: 1,
      question: "What are the four primary functions of management?",
      options: [
        "Planning, Organizing, Leading, Controlling",
        "Marketing, Finance, HR, Operations",
        "Strategy, Tactics, Operations, Evaluation",
        "Hiring, Training, Evaluating, Firing"
      ],
      correctAnswer: 0,
      explanation: "These four functions form the foundation of management: Planning (objectives), Organizing (resources), Leading (motivation), Controlling (monitoring)."
    },
    {
      id: 2,
      question: "What percentage higher profits do companies with formal planning processes typically earn?",
      options: [
        "30%",
        "15%",
        "45%",
        "60%"
      ],
      correctAnswer: 0,
      explanation: "Companies with formal planning processes earn approximately 30% higher profits on average than those without formal planning."
    },
    {
      id: 3,
      question: "What does SWOT stand for in strategic analysis?",
      options: [
        "Strengths, Weaknesses, Opportunities, Threats",
        "Strategy, Workflow, Operations, Tactics",
        "Sales, Workforce, Objectives, Timeline",
        "System, Work, Organization, Technology"
      ],
      correctAnswer: 0,
      explanation: "SWOT Analysis examines internal Strengths/Weaknesses and external Opportunities/Threats to inform strategic planning."
    },
    {
      id: 4,
      question: "What is the typical span of control in knowledge work environments?",
      options: [
        "8-10 employees per manager",
        "15-20 employees per manager",
        "5-7 employees per manager",
        "12-15 employees per manager"
      ],
      correctAnswer: 0,
      explanation: "Knowledge work typically requires closer supervision, resulting in spans of control of 8-10 employees per manager."
    },
    {
      id: 5,
      question: "Which organizational structure combines functional and divisional approaches?",
      options: [
        "Matrix Structure",
        "Hierarchical Structure",
        "Flat Structure",
        "Network Structure"
      ],
      correctAnswer: 0,
      explanation: "Matrix structure combines elements of both functional and divisional structures, creating dual reporting relationships."
    },
    {
      id: 6,
      question: "How many levels are in Maslow's Hierarchy of Needs?",
      options: [
        "5 levels",
        "3 levels",
        "7 levels",
        "4 levels"
      ],
      correctAnswer: 0,
      explanation: "Maslow's Hierarchy has five levels: Physiological, Safety, Social, Esteem, and Self-actualization needs."
    },
    {
      id: 7,
      question: "What percentage greater profitability do companies with engaged teams show?",
      options: [
        "21%",
        "12%",
        "33%",
        "28%"
      ],
      correctAnswer: 0,
      explanation: "Research indicates companies with highly engaged teams achieve 21% greater profitability than those with low engagement."
    },
    {
      id: 8,
      question: "What is the balance sheet equation?",
      options: [
        "Assets = Liabilities + Owner's Equity",
        "Revenue - Expenses = Net Income",
        "Assets = Revenue - Expenses",
        "Liabilities = Assets - Equity"
      ],
      correctAnswer: 0,
      explanation: "The fundamental accounting equation shows that what a company owns (Assets) equals what it owes (Liabilities) plus owner's investment (Equity)."
    },
    {
      id: 9,
      question: "What is a healthy current ratio for most companies?",
      options: [
        "Above 1.5",
        "Below 1.0",
        "Exactly 2.0",
        "Between 0.5 and 1.0"
      ],
      correctAnswer: 0,
      explanation: "A current ratio above 1.5 indicates good short-term financial health, showing ability to cover current obligations."
    },
    {
      id: 10,
      question: "What does TQM stand for?",
      options: [
        "Total Quality Management",
        "Total Quantity Management",
        "Technical Quality Methods",
        "Team Quality Management"
      ],
      correctAnswer: 0,
      explanation: "TQM = Total Quality Management, an organization-wide commitment to continuous improvement and customer satisfaction."
    },
    {
      id: 11,
      question: "What is the Six Sigma defect rate goal?",
      options: [
        "3.4 defects per million opportunities",
        "10 defects per thousand opportunities",
        "1 defect per hundred opportunities",
        "Zero defects always"
      ],
      correctAnswer: 0,
      explanation: "Six Sigma aims for near-perfect quality with only 3.4 defects per million opportunities."
    },
    {
      id: 12,
      question: "What productivity improvement do companies typically see with TQM?",
      options: [
        "20-30% improvement",
        "5-10% improvement",
        "40-50% improvement",
        "No significant improvement"
      ],
      correctAnswer: 0,
      explanation: "TQM implementation typically results in 20-30% productivity improvements through process optimization."
    },
    {
      id: 13,
      question: "What are SMART goals?",
      options: [
        "Specific, Measurable, Achievable, Relevant, Time-bound",
        "Strategic, Meaningful, Actionable, Realistic, Timely",
        "Simple, Manageable, Attainable, Reasonable, Trackable",
        "Structured, Measurable, Attainable, Relevant, Time-sensitive"
      ],
      correctAnswer: 0,
      explanation: "SMART goals should be Specific, Measurable, Achievable, Relevant, and Time-bound for effective goal setting."
    },
    {
      id: 14,
      question: "What does the 'M' in SMART goals stand for?",
      options: [
        "Measurable",
        "Manageable",
        "Meaningful",
        "Motivational"
      ],
      correctAnswer: 0,
      explanation: "The 'M' in SMART stands for Measurable, meaning goals should have quantifiable metrics to track progress."
    },
    {
      id: 15,
      question: "Which leadership style focuses on inspiring followers?",
      options: [
        "Transformational Leadership",
        "Transactional Leadership",
        "Servant Leadership",
        "Autocratic Leadership"
      ],
      correctAnswer: 0,
      explanation: "Transformational leadership inspires followers to exceed their own interests for the greater good of the organization."
    },
    {
      id: 16,
      question: "What is the break-even point formula?",
      options: [
        "Fixed Costs / (Price - Variable Cost per unit)",
        "Revenue / Fixed Costs",
        "Variable Costs / Fixed Costs",
        "(Price - Cost) / Units Sold"
      ],
      correctAnswer: 0,
      explanation: "Break-even Point = Fixed Costs divided by (Price per unit minus Variable Cost per unit)."
    },
    {
      id: 17,
      question: "What are hygiene factors in Herzberg's theory?",
      options: [
        "Factors that prevent dissatisfaction",
        "Factors that create satisfaction",
        "Basic survival needs",
        "Self-fulfillment needs"
      ],
      correctAnswer: 0,
      explanation: "Hygiene factors (like salary and working conditions) prevent dissatisfaction but don't necessarily motivate employees."
    },
    {
      id: 18,
      question: "What does DMAIC stand for in Six Sigma?",
      options: [
        "Define, Measure, Analyze, Improve, Control",
        "Design, Make, Analyze, Improve, Check",
        "Develop, Measure, Assess, Implement, Control",
        "Define, Monitor, Analyze, Improve, Complete"
      ],
      correctAnswer: 0,
      explanation: "DMAIC is the Six Sigma improvement methodology: Define, Measure, Analyze, Improve, Control."
    },
    {
      id: 19,
      question: "What does JIT stand for in operations?",
      options: [
        "Just-in-Time",
        "Job-in-Transit",
        "Just-in-Turnover",
        "Job-in-Training"
      ],
      correctAnswer: 0,
      explanation: "JIT = Just-in-Time, an inventory strategy that minimizes stock by receiving materials only as needed in production."
    },
    {
      id: 20,
      question: "Which team development stage involves conflict?",
      options: [
        "Storming",
        "Forming",
        "Norming",
        "Performing"
      ],
      correctAnswer: 0,
      explanation: "The Storming stage is characterized by conflict as team members establish roles, confront differences, and compete for position."
    }
  ]
};

export default BusinessManagementCertificate;

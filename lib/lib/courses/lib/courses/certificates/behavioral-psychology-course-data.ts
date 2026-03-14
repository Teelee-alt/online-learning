// Behavioral Psychology (Certificate) - Complete Course Data
export const behavioralPsychologyCertificate = {
  // 1. COURSE METADATA & IDENTIFICATION
  id: "behavioral-psychology-certificate",
  title: "Behavioral Psychology (Certificate)",
  description: "Foundational course in behavioral psychology covering basic principles of learning, conditioning, behavior modification, and practical applications in everyday life.",
  duration: "6 weeks",
  timeCommitment: "4-6 hours per week",
  price: 12,
  upgradePrice: 18,
  icon: "🧠",
  badge: "Certificate",
  prerequisites: [],
  
  // 2. MODULE ARCHITECTURE - 6 Modules for Certificate
  modules: [
    {
      id: 1,
      title: "Introduction to Behavioral Psychology",
      content: `
# Module 1: Introduction to Behavioral Psychology

## Understanding Behavior Through Science
This module introduces the fundamental concepts of behavioral psychology and its scientific approach to understanding human behavior.

## 1.1 What is Behavioral Psychology?
**Behavioral psychology** (also called behaviorism) is the scientific study of observable behavior. Key principles include:

- **Focus on observable behavior**: Studies what people actually do, not just what they think or feel
- **Environmental influences**: Behavior is shaped by environment and experience
- **Learning principles**: Behavior changes through learning processes
- **Scientific method**: Uses experimental methods to study behavior

**Historical foundations**:
- **John B. Watson** (1878-1958): Founder of behaviorism, emphasized observable behavior
- **B.F. Skinner** (1904-1990): Developed operant conditioning, radical behaviorism
- **Ivan Pavlov** (1849-1936): Discovered classical conditioning with dogs

## 1.2 Basic Assumptions of Behaviorism
**Key assumptions** that guide behavioral psychology:

1. **Behavior is learned**: Most behavior is acquired through learning experiences
2. **Environment shapes behavior**: External factors influence what we do
3. **Behavior can be measured**: Observable actions can be quantified and studied
4. **Laws of behavior**: Behavior follows predictable patterns and principles
5. **Focus on present**: Current environment and behaviors are most important for change

**Three-term contingency**: Antecedent → Behavior → Consequence
This describes how environmental events (antecedents) trigger behaviors that lead to consequences.

## 1.3 Methods of Study
**Scientific methods** used in behavioral psychology:

- **Observation**: Systematic watching and recording of behavior
- **Experimentation**: Controlled studies to test hypotheses
- **Case studies**: In-depth examination of individual cases
- **Applied behavior analysis**: Using principles to solve real-world problems

**Measurement techniques**:
- **Frequency counting**: How often a behavior occurs
- **Duration recording**: How long a behavior lasts
- **Interval recording**: Whether behavior occurs in specific time intervals
- **Latency recording**: Time between stimulus and response
      `,
      completed: false,
      quiz: [
        {
          id: 1,
          question: "What is the primary focus of behavioral psychology?",
          options: ["Unconscious thoughts", "Observable behavior", "Genetic influences", "Spiritual experiences"],
          correctAnswer: 1,
          explanation: "Behavioral psychology focuses on observable, measurable behavior."
        },
        {
          id: 2,
          question: "Who is considered the founder of behaviorism?",
          options: ["B.F. Skinner", "Sigmund Freud", "John B. Watson", "Carl Rogers"],
          correctAnswer: 2,
          explanation: "John B. Watson is considered the founder of behaviorism."
        },
        {
          id: 3,
          question: "What does the three-term contingency describe?",
          options: ["Thought → Feeling → Action", "Antecedent → Behavior → Consequence", "Stimulus → Response → Reinforcement", "Input → Process → Output"],
          correctAnswer: 1,
          explanation: "Three-term contingency: Antecedent (what happens before), Behavior (the action), Consequence (what happens after)."
        },
        {
          id: 4,
          question: "Which psychologist developed operant conditioning?",
          options: ["Ivan Pavlov", "B.F. Skinner", "John B. Watson", "Albert Bandura"],
          correctAnswer: 1,
          explanation: "B.F. Skinner developed operant conditioning principles."
        },
        {
          id: 5,
          question: "What assumption states behavior is shaped by environment?",
          options: ["Behavior is genetic", "Environment shapes behavior", "Behavior is random", "Behavior is spiritual"],
          correctAnswer: 1,
          explanation: "Behaviorism assumes environment and experience shape behavior."
        },
        {
          id: 6,
          question: "What method involves systematic watching and recording?",
          options: ["Experimentation", "Observation", "Survey", "Interview"],
          correctAnswer: 1,
          explanation: "Observation involves systematic watching and recording of behavior."
        },
        {
          id: 7,
          question: "Who discovered classical conditioning?",
          options: ["B.F. Skinner", "Ivan Pavlov", "John B. Watson", "Carl Jung"],
          correctAnswer: 1,
          explanation: "Ivan Pavlov discovered classical conditioning through dog experiments."
        },
        {
          id: 8,
          question: "What is frequency counting?",
          options: ["How long behavior lasts", "How often behavior occurs", "Time between stimulus and response", "Whether behavior occurs in intervals"],
          correctAnswer: 1,
          explanation: "Frequency counting measures how often a behavior occurs."
        },
        {
          id: 9,
          question: "What does behaviorism focus on regarding time?",
          options: ["Past experiences", "Present environment", "Future goals", "All time periods"],
          correctAnswer: 1,
          explanation: "Behaviorism focuses on current environment and present behaviors."
        },
        {
          id: 10,
          question: "What is applied behavior analysis?",
          options: ["Studying brain chemistry", "Using principles to solve problems", "Analyzing dreams", "Genetic testing"],
          correctAnswer: 1,
          explanation: "Applied behavior analysis uses behavioral principles to solve real-world problems."
        },
        {
          id: 11,
          question: "What is NOT a basic assumption of behaviorism?",
          options: ["Behavior is learned", "Behavior can be measured", "All behavior is genetic", "Environment shapes behavior"],
          correctAnswer: 2,
          explanation: "Behaviorism assumes behavior is learned, not that all behavior is genetic."
        },
        {
          id: 12,
          question: "What does duration recording measure?",
          options: ["How often behavior occurs", "How long behavior lasts", "Time between stimulus and response", "Whether behavior occurs in intervals"],
          correctAnswer: 1,
          explanation: "Duration recording measures how long a behavior lasts."
        },
        {
          id: 13,
          question: "What is the scientific approach in behaviorism?",
          options: ["Introspection", "Experimental methods", "Dream analysis", "Free association"],
          correctAnswer: 1,
          explanation: "Behaviorism uses experimental methods and scientific observation."
        },
        {
          id: 14,
          question: "What is latency recording?",
          options: ["How often behavior occurs", "How long behavior lasts", "Time between stimulus and response", "Whether behavior occurs in intervals"],
          correctAnswer: 2,
          explanation: "Latency recording measures time between stimulus and response."
        },
        {
          id: 15,
          question: "What does 'behavior is learned' mean?",
          options: ["Behavior is instinctual", "Behavior is acquired through experience", "Behavior is predetermined", "Behavior is random"],
          correctAnswer: 1,
          explanation: "'Behavior is learned' means behavior is acquired through learning experiences."
        },
        {
          id: 16,
          question: "What is interval recording?",
          options: ["How often behavior occurs", "How long behavior lasts", "Time between stimulus and response", "Whether behavior occurs in specific time intervals"],
          correctAnswer: 3,
          explanation: "Interval recording notes whether behavior occurs in specific time intervals."
        },
        {
          id: 17,
          question: "What historical figure emphasized observable behavior?",
          options: ["Sigmund Freud", "John B. Watson", "Carl Rogers", "Abraham Maslow"],
          correctAnswer: 1,
          explanation: "John B. Watson emphasized studying observable behavior, not mental processes."
        },
        {
          id: 18,
          question: "What are 'laws of behavior'?",
          options: ["Legal rules", "Predictable patterns and principles", "Government regulations", "Moral guidelines"],
          correctAnswer: 1,
          explanation: "Laws of behavior refer to predictable patterns and principles that govern behavior."
        },
        {
          id: 19,
          question: "What method uses controlled studies?",
          options: ["Observation", "Experimentation", "Case study", "Survey"],
          correctAnswer: 1,
          explanation: "Experimentation uses controlled studies to test hypotheses about behavior."
        },
        {
          id: 20,
          question: "What does behavioral psychology NOT typically study?",
          options: ["Observable actions", "Environmental influences", "Unconscious thoughts", "Learning processes"],
          correctAnswer: 2,
          explanation: "Behavioral psychology focuses on observable behavior, not unconscious thoughts."
        }
      ]
    },
    {
      id: 2,
      title: "Classical Conditioning",
      content: `
# Module 2: Classical Conditioning

## Learning Through Association
This module covers classical conditioning, the process of learning through association between stimuli.

## 2.1 Pavlov's Discovery
**Ivan Pavlov's experiment** with dogs:
- **Unconditioned Stimulus (US)**: Food (automatically causes salivation)
- **Unconditioned Response (UR)**: Salivation (natural response to food)
- **Neutral Stimulus (NS)**: Bell (initially no response)
- **Conditioned Stimulus (CS)**: Bell after pairing (causes salivation)
- **Conditioned Response (CR)**: Salivation to bell (learned response)

**Process**:
1. Before conditioning: Bell (NS) → No salivation
2. During conditioning: Bell (NS) + Food (US) → Salivation (UR)
3. After conditioning: Bell (CS) → Salivation (CR)

**Key finding**: Neutral stimulus becomes conditioned stimulus through repeated pairing with unconditioned stimulus.

## 2.2 Key Principles
**Acquisition**: Initial learning phase when NS is paired with US.
- **Optimal timing**: CS should precede US by about 0.5 seconds
- **Strength of conditioning**: Depends on intensity of US and number of pairings

**Extinction**: Weakening and disappearance of CR when CS is presented without US.
- Example: Ring bell without food repeatedly → dog stops salivating to bell

**Spontaneous Recovery**: Sudden reappearance of extinguished CR after rest period.
- Even after extinction, CR may briefly reappear

**Generalization**: Responding to stimuli similar to CS.
- Example: Dog salivates to similar bells or tones

**Discrimination**: Learning to respond only to specific CS, not similar stimuli.
- Example: Dog learns to salivate only to specific bell tone

## 2.3 Applications & Examples
**Everyday examples** of classical conditioning:
- **Phobias**: Fear response to previously neutral stimuli (e.g., fear of dogs after bite)
- **Advertising**: Products paired with positive emotions (e.g., soda with happy people)
- **Medical treatments**: Chemotherapy causing nausea to hospital smells
- **Taste aversions**: Avoiding food that made you sick once

**Systematic desensitization** (therapy for phobias):
1. Create fear hierarchy
2. Learn relaxation techniques
3. Gradually pair relaxation with feared stimuli
4. Replace fear response with relaxation response

**Conditioned emotional responses**:
- **Little Albert experiment** (Watson & Rayner): Conditioned fear response in baby
- **Counterconditioning**: Replace unwanted CR with new response
      `,
      completed: false,
      quiz: [
        {
          id: 1,
          question: "What was the unconditioned stimulus in Pavlov's experiment?",
          options: ["Bell", "Food", "Salivation", "Light"],
          correctAnswer: 1,
          explanation: "Food was the unconditioned stimulus (automatically caused salivation)."
        },
        {
          id: 2,
          question: "What becomes the conditioned stimulus after pairing?",
          options: ["Unconditioned stimulus", "Neutral stimulus", "Unconditioned response", "Conditioned response"],
          correctAnswer: 1,
          explanation: "Neutral stimulus becomes conditioned stimulus after pairing with US."
        },
        {
          id: 3,
          question: "What is acquisition?",
          options: ["Loss of response", "Initial learning phase", "Response recovery", "Stimulus generalization"],
          correctAnswer: 1,
          explanation: "Acquisition is the initial learning phase when NS is paired with US."
        },
        {
          id: 4,
          question: "What is extinction?",
          options: ["Initial learning", "Weakening of CR without US", "Response to similar stimuli", "Sudden recovery"],
          correctAnswer: 1,
          explanation: "Extinction is weakening/disappearance of CR when CS presented without US."
        },
        {
          id: 5,
          question: "What is spontaneous recovery?",
          options: ["Initial learning", "Weakening of response", "Sudden reappearance after rest", "Response to similar stimuli"],
          correctAnswer: 2,
          explanation: "Spontaneous recovery is sudden reappearance of extinguished CR after rest period."
        },
        {
          id: 6,
          question: "What is generalization?",
          options: ["Learning specific response", "Responding to similar stimuli", "Loss of response", "Initial learning"],
          correctAnswer: 1,
          explanation: "Generalization is responding to stimuli similar to the conditioned stimulus."
        },
        {
          id: 7,
          question: "What optimal timing for CS before US?",
          options: ["0.5 seconds", "2 seconds", "5 seconds", "10 seconds"],
          correctAnswer: 0,
          explanation: "CS should precede US by about 0.5 seconds for optimal conditioning."
        },
        {
          id: 8,
          question: "What is discrimination?",
          options: ["Responding to all stimuli", "Learning specific response to specific CS", "Loss of response", "Initial learning"],
          correctAnswer: 1,
          explanation: "Discrimination is learning to respond only to specific CS, not similar stimuli."
        },
        {
          id: 9,
          question: "What therapy uses classical conditioning for phobias?",
          options: ["Psychoanalysis", "Systematic desensitization", "Cognitive therapy", "Group therapy"],
          correctAnswer: 1,
          explanation: "Systematic desensitization uses classical conditioning to treat phobias."
        },
        {
          id: 10,
          question: "What was Little Albert conditioned to fear?",
          options: ["Dogs", "Rats", "Loud noises", "All of the above"],
          correctAnswer: 3,
          explanation: "Little Albert was conditioned to fear rats, and fear generalized to other fuzzy objects."
        },
        {
          id: 11,
          question: "What is the conditioned response to bell after learning?",
          options: ["Eating", "Salivation", "Bell ringing", "Food presentation"],
          correctAnswer: 1,
          explanation: "Salivation becomes conditioned response to bell after conditioning."
        },
        {
          id: 12,
          question: "What affects strength of conditioning?",
          options: ["Intensity of US", "Number of pairings", "Both A and B", "Neither A nor B"],
          correctAnswer: 2,
          explanation: "Strength depends on intensity of US and number of pairings."
        },
        {
          id: 13,
          question: "What is counterconditioning?",
          options: ["Increasing fear response", "Replacing unwanted CR with new response", "Creating new phobias", "Eliminating all responses"],
          correctAnswer: 1,
          explanation: "Counterconditioning replaces unwanted conditioned response with new response."
        },
        {
          id: 14,
          question: "What is taste aversion example of?",
          options: ["Operant conditioning", "Classical conditioning", "Observational learning", "Cognitive learning"],
          correctAnswer: 1,
          explanation: "Taste aversion (avoiding food that made you sick) is classical conditioning."
        },
        {
          id: 15,
          question: "What happens in systematic desensitization?",
          options: ["Pair relaxation with feared stimuli", "Increase exposure suddenly", "Avoid feared stimuli", "Use punishment"],
          correctAnswer: 0,
          explanation: "Systematic desensitization gradually pairs relaxation with feared stimuli."
        },
        {
          id: 16,
          question: "What is conditioned emotional response?",
          options: ["Genetic emotion", "Learned emotional reaction", "Random emotion", "Spiritual feeling"],
          correctAnswer: 1,
          explanation: "Conditioned emotional response is learned emotional reaction to previously neutral stimulus."
        },
        {
          id: 17,
          question: "What advertising technique uses classical conditioning?",
          options: ["Listing ingredients", "Pairing product with positive emotions", "Showing price only", "Technical specifications"],
          correctAnswer: 1,
          explanation: "Advertising often pairs products with positive emotions through classical conditioning."
        },
        {
          id: 18,
          question: "What medical treatment side effect involves conditioning?",
          options: ["Chemotherapy causing nausea to hospital smells", "Antibiotics killing bacteria", "Pain relief from medication", "Surgery recovery"],
          correctAnswer: 0,
          explanation: "Chemotherapy can cause conditioned nausea response to hospital smells."
        },
        {
          id: 19,
          question: "What is fear hierarchy?",
          options: ["List of fears from least to most frightening", "Random fear list", "Only worst fears", "Childhood fears only"],
          correctAnswer: 0,
          explanation: "Fear hierarchy lists feared situations from least to most frightening for systematic desensitization."
        },
        {
          id: 20,
          question: "What is the natural response to US called?",
          options: ["Conditioned response", "Unconditioned response", "Neutral response", "Learned response"],
          correctAnswer: 1,
          explanation: "Unconditioned response is natural, unlearned response to unconditioned stimulus."
        }
      ]
    },
    {
      id: 3,
      title: "Operant Conditioning",
      content: `
# Module 3: Operant Conditioning

## Learning Through Consequences
This module covers operant conditioning, where behavior is strengthened or weakened by its consequences.

## 3.1 Basic Principles (B.F. Skinner)
**Operant conditioning** focuses on voluntary behavior and its consequences.

**Key concepts**:
- **Reinforcement**: Increases behavior frequency
- **Punishment**: Decreases behavior frequency
- **Antecedent**: What happens before behavior
- **Consequence**: What happens after behavior
- **Operant**: Voluntary behavior that operates on environment

**Skinner box** (operant chamber): Experimental apparatus for studying operant conditioning with animals.

## 3.2 Types of Reinforcement
**Positive reinforcement**: Adding something desirable to increase behavior.
- Example: Giving praise for completing homework
- Works by presenting appetitive stimulus after behavior

**Negative reinforcement**: Removing something undesirable to increase behavior.
- Example: Taking aspirin to remove headache (increases aspirin-taking)
- Works by removing aversive stimulus after behavior
- **NOT punishment** - it increases behavior!

**Primary reinforcers**: Biologically significant (food, water, warmth).
**Secondary reinforcers**: Learned value (money, grades, praise).

**Schedules of reinforcement**: Patterns of delivering reinforcement:
- **Continuous**: Every response reinforced (fast learning, fast extinction)
- **Partial/Intermittent**: Only some responses reinforced (slower learning, slower extinction)

## 3.3 Types of Punishment
**Positive punishment**: Adding something undesirable to decrease behavior.
- Example: Giving extra chores for breaking rules
- Works by presenting aversive stimulus after behavior

**Negative punishment**: Removing something desirable to decrease behavior.
- Example: Taking away phone privileges for poor grades
- Works by removing appetitive stimulus after behavior
- Also called "response cost"

**Problems with punishment**:
- May cause fear, anxiety, or aggression
- Doesn't teach appropriate behavior
- May only suppress behavior temporarily
- Can damage relationship between punisher and punished

**Effective punishment guidelines**:
1. Immediate
2. Consistent
3. Appropriate intensity
4. Paired with reinforcement of alternative behavior
      `,
      completed: false,
      quiz: [
        {
          id: 1,
          question: "What increases behavior frequency?",
          options: ["Reinforcement", "Punishment", "Extinction", "Discrimination"],
          correctAnswer: 0,
          explanation: "Reinforcement increases the frequency of behavior."
        },
        {
          id: 2,
          question: "What decreases behavior frequency?",
          options: ["Reinforcement", "Punishment", "Acquisition", "Generalization"],
          correctAnswer: 1,
          explanation: "Punishment decreases the frequency of behavior."
        },
        {
          id: 3,
          question: "What is positive reinforcement?",
          options: ["Adding desirable to increase behavior", "Removing undesirable to increase behavior", "Adding undesirable to decrease behavior", "Removing desirable to decrease behavior"],
          correctAnswer: 0,
          explanation: "Positive reinforcement adds something desirable to increase behavior."
        },
        {
          id: 4,
          question: "What is negative reinforcement?",
          options: ["Adding desirable to increase behavior", "Removing undesirable to increase behavior", "Adding undesirable to decrease behavior", "Removing desirable to decrease behavior"],
          correctAnswer: 1,
          explanation: "Negative reinforcement removes something undesirable to increase behavior."
        },
        {
          id: 5,
          question: "What is positive punishment?",
          options: ["Adding desirable to increase behavior", "Removing undesirable to increase behavior", "Adding undesirable to decrease behavior", "Removing desirable to decrease behavior"],
          correctAnswer: 2,
          explanation: "Positive punishment adds something undesirable to decrease behavior."
        },
        {
          id: 6,
          question: "What is negative punishment?",
          options: ["Adding desirable to increase behavior", "Removing undesirable to increase behavior", "Adding undesirable to decrease behavior", "Removing desirable to decrease behavior"],
          correctAnswer: 3,
          explanation: "Negative punishment removes something desirable to decrease behavior."
        },
        {
          id: 7,
          question: "What type of reinforcement is money?",
          options: ["Primary reinforcer", "Secondary reinforcer", "Unconditioned reinforcer", "Biological reinforcer"],
          correctAnswer: 1,
          explanation: "Money is a secondary reinforcer (learned value, not biologically significant)."
        },
        {
          id: 8,
          question: "What schedule reinforces every response?",
          options: ["Continuous", "Fixed ratio", "Variable ratio", "Fixed interval"],
          correctAnswer: 0,
          explanation: "Continuous reinforcement reinforces every response."
        },
        {
          id: 9,
          question: "What is an example of negative reinforcement?",
          options: ["Praise for good work", "Taking aspirin for headache", "Extra chores for misbehavior", "Time-out for hitting"],
          correctAnswer: 1,
          explanation: "Taking aspirin removes headache (undesirable), increasing aspirin-taking behavior."
        },
        {
          id: 10,
          question: "What is response cost?",
          options: ["Positive reinforcement", "Negative reinforcement", "Positive punishment", "Negative punishment"],
          correctAnswer: 3,
          explanation: "Response cost is another name for negative punishment (removing something desirable)."
        },
        {
          id: 11,
          question: "Who developed operant conditioning?",
          options: ["Ivan Pavlov", "B.F. Skinner", "John B. Watson", "Albert Bandura"],
          correctAnswer: 1,
          explanation: "B.F. Skinner developed operant conditioning principles."
        },
        {
          id: 12,
          question: "What is a primary reinforcer?",
          options: ["Money", "Praise", "Food", "Grades"],
          correctAnswer: 2,
          explanation: "Food is a primary reinforcer (biologically significant)."
        },
        {
          id: 13,
          question: "What schedule leads to fastest extinction?",
          options: ["Continuous", "Fixed ratio", "Variable ratio", "Fixed interval"],
          correctAnswer: 0,
          explanation: "Continuous reinforcement leads to fastest extinction when stopped."
        },
        {
          id: 14,
          question: "What problem with punishment?",
          options: ["Teaches appropriate behavior", "May cause fear or aggression", "Always effective", "Builds positive relationships"],
          correctAnswer: 1,
          explanation: "Punishment may cause fear, anxiety, or aggression as side effects."
        },
        {
          id: 15,
          question: "What is Skinner box?",
          options: ["Sleeping chamber", "Operant chamber for experiments", "Punishment device", "Reinforcement theory"],
          correctAnswer: 1,
          explanation: "Skinner box (operant chamber) is experimental apparatus for studying operant conditioning."
        },
        {
          id: 16,
          question: "What is effective punishment guideline?",
          options: ["Delayed", "Inconsistent", "Immediate", "Random intensity"],
          correctAnswer: 2,
          explanation: "Effective punishment should be immediate to be most effective."
        },
        {
          id: 17,
          question: "What does negative reinforcement do?",
          options: ["Decreases behavior", "Increases behavior", "Has no effect", "Randomly affects behavior"],
          correctAnswer: 1,
          explanation: "Negative reinforcement INCREASES behavior (by removing something undesirable)."
        },
        {
          id: 18,
          question: "What is partial reinforcement?",
          options: ["Every response reinforced", "No reinforcement", "Only some responses reinforced", "Constant reinforcement"],
          correctAnswer: 2,
          explanation: "Partial/intermittent reinforcement reinforces only some responses."
        },
        {
          id: 19,
          question: "What should punishment be paired with?",
          options: ["More punishment", "Reinforcement of alternative behavior", "Ignoring all behavior", "Random consequences"],
          correctAnswer: 1,
          explanation: "Punishment should be paired with reinforcement of appropriate alternative behavior."
        },
        {
          id: 20,
          question: "What is operant behavior?",
          options: ["Reflexive behavior", "Voluntary behavior operating on environment", "Instinctual behavior", "Genetic behavior"],
          correctAnswer: 1,
          explanation: "Operant behavior is voluntary behavior that operates on (affects) the environment."
        }
      ]
    },
    {
      id: 4,
      title: "Schedules of Reinforcement",
      content: `
# Module 4: Schedules of Reinforcement

## Patterns of Reward Delivery
This module covers different schedules of reinforcement and how they affect learning and behavior maintenance.

## 4.1 Ratio Schedules
**Ratio schedules** reinforce after certain number of responses.

**Fixed Ratio (FR)**:
- Reinforcement after fixed number of responses
- Example: FR-5 = reinforce after every 5 responses
- **Pattern**: Post-reinforcement pause, then high steady rate
- **Real example**: Piece-rate pay (paid per item produced)

**Variable Ratio (VR)**:
- Reinforcement after average number of responses (varies)
- Example: VR-10 = reinforce on average every 10 responses (could be 5, 15, 8, etc.)
- **Pattern**: High steady rate with no pauses
- **Most resistant to extinction**
- **Real example**: Slot machines, lottery tickets

## 4.2 Interval Schedules
**Interval schedules** reinforce first response after time period.

**Fixed Interval (FI)**:
- Reinforcement for first response after fixed time period
- Example: FI-2min = reinforce first response after 2 minutes
- **Pattern**: Scalloped pattern (slow responding after reinforcement, increasing as interval ends)
- **Real example**: Weekly paycheck, studying before exams

**Variable Interval (VI)**:
- Reinforcement for first response after average time period (varies)
- Example: VI-1min = reinforce first response after average 1 minute (could be 30 sec, 90 sec, etc.)
- **Pattern**: Low steady rate
- **Real example**: Checking email, social media notifications

## 4.3 Comparing Schedules
**Extinction resistance** (most to least):
1. Variable Ratio (most resistant)
2. Variable Interval
3. Fixed Ratio
4. Fixed Interval (least resistant)

**Response rates**:
- **Highest**: Variable Ratio, Fixed Ratio
- **Moderate**: Variable Interval
- **Lowest/Patterned**: Fixed Interval (scalloped pattern)

**Practical applications**:
- **Teaching new skills**: Start with continuous, move to variable
- **Maintaining behavior**: Use variable schedules
- **Reducing extinction**: Use partial reinforcement from beginning
- **Work settings**: Different schedules for different goals

**Partial reinforcement effect**: Behaviors learned on partial schedules more resistant to extinction than those learned on continuous.
      `,
      completed: false,
      quiz: [
        {
          id: 1,
          question: "What schedule reinforces after fixed number of responses?",
          options: ["Fixed Ratio", "Variable Ratio", "Fixed Interval", "Variable Interval"],
          correctAnswer: 0,
          explanation: "Fixed Ratio reinforces after fixed number of responses."
        },
        {
          id: 2,
          question: "What schedule is most resistant to extinction?",
          options: ["Fixed Ratio", "Variable Ratio", "Fixed Interval", "Variable Interval"],
          correctAnswer: 1,
          explanation: "Variable Ratio is most resistant to extinction."
        },
        {
          id: 3,
          question: "What schedule reinforces first response after fixed time?",
          options: ["Fixed Ratio", "Variable Ratio", "Fixed Interval", "Variable Interval"],
          correctAnswer: 2,
          explanation: "Fixed Interval reinforces first response after fixed time period."
        },
        {
          id: 4,
          question: "What pattern does Fixed Interval produce?",
          options: ["High steady rate", "Scalloped pattern", "No pattern", "Random pattern"],
          correctAnswer: 1,
          explanation: "Fixed Interval produces scalloped pattern (slow then increasing response)."
        },
        {
          id: 5,
          question: "What is example of Variable Ratio schedule?",
          options: ["Weekly paycheck", "Slot machines", "Piece-rate pay", "Checking email"],
          correctAnswer: 1,
          explanation: "Slot machines use Variable Ratio schedule (reinforcement varies)."
        },
        {
          id: 6,
          question: "What schedule has post-reinforcement pause?",
          options: ["Fixed Ratio", "Variable Ratio", "Fixed Interval", "Variable Interval"],
          correctAnswer: 0,
          explanation: "Fixed Ratio typically shows post-reinforcement pause."
        },
        {
          id: 7,
          question: "What is example of Fixed Interval?",
          options: ["Slot machines", "Weekly paycheck", "Piece-rate pay", "Sales commission"],
          correctAnswer: 1,
          explanation: "Weekly paycheck is Fixed Interval (reinforced after set time period)."
        },
        {
          id: 8,
          question: "What schedule produces high steady rate?",
          options: ["Fixed Ratio", "Variable Ratio", "Both A and B", "Fixed Interval"],
          correctAnswer: 2,
          explanation: "Both Fixed Ratio and Variable Ratio produce high response rates."
        },
        {
          id: 9,
          question: "What is Variable Interval example?",
          options: ["Slot machines", "Weekly paycheck", "Checking email", "Piece-rate pay"],
          correctAnswer: 2,
          explanation: "Checking email is Variable Interval (reinforcement varies in time)."
        },
        {
          id: 10,
          question: "What is partial reinforcement effect?",
          options: ["Continuous faster learning", "Partial more resistant to extinction", "Continuous more resistant", "No difference"],
          correctAnswer: 1,
          explanation: "Partial reinforcement effect: behaviors on partial schedules more resistant to extinction."
        },
        {
          id: 11,
          question: "What schedule for teaching new skills initially?",
          options: ["Variable Ratio", "Continuous", "Fixed Interval", "Variable Interval"],
          correctAnswer: 1,
          explanation: "Start with continuous reinforcement for new skills, then move to partial."
        },
        {
          id: 12,
          question: "What schedule for maintaining behavior long-term?",
          options: ["Continuous", "Variable schedules", "Fixed schedules only", "No reinforcement"],
          correctAnswer: 1,
          explanation: "Variable schedules (VR or VI) best for maintaining behavior long-term."
        },
        {
          id: 13,
          question: "What is FR-10 schedule?",
          options: ["Reinforce every 10 minutes", "Reinforce every 10 responses", "Variable every 10", "Interval of 10"],
          correctAnswer: 1,
          explanation: "FR-10 = reinforce after every 10 responses."
        },
        {
          id: 14,
          question: "What is VI-2min schedule?",
          options: ["Fixed 2 minutes", "Variable average 2 minutes", "Ratio every 2", "Continuous every 2"],
          correctAnswer: 1,
          explanation: "VI-2min = reinforce first response after average 2 minutes (varies)."
        },
        {
          id: 15,
          question: "What schedule produces scalloped pattern?",
          options: ["Fixed Ratio", "Variable Ratio", "Fixed Interval", "Variable Interval"],
          correctAnswer: 2,
          explanation: "Fixed Interval produces scalloped response pattern."
        },
        {
          id: 16,
          question: "What is piece-rate pay example of?",
          options: ["Fixed Ratio", "Variable Ratio", "Fixed Interval", "Variable Interval"],
          correctAnswer: 0,
          explanation: "Piece-rate pay (paid per item) is Fixed Ratio schedule."
        },
        {
          id: 17,
          question: "What schedule for social media notifications?",
          options: ["Fixed Ratio", "Variable Ratio", "Fixed Interval", "Variable Interval"],
          correctAnswer: 3,
          explanation: "Social media notifications use Variable Interval schedule."
        },
        {
          id: 18,
          question: "What extinction resistance order?",
          options: ["VR > VI > FR > FI", "FI > FR > VI > VR", "Continuous > All", "All equal"],
          correctAnswer: 0,
          explanation: "Extinction resistance: Variable Ratio > Variable Interval > Fixed Ratio > Fixed Interval."
        },
        {
          id: 19,
          question: "What schedule produces low steady rate?",
          options: ["Fixed Ratio", "Variable Ratio", "Fixed Interval", "Variable Interval"],
          correctAnswer: 3,
          explanation: "Variable Interval produces low steady response rate."
        },
        {
          id: 20,
          question: "What is studying before exams example of?",
          options: ["Fixed Ratio", "Variable Ratio", "Fixed Interval", "Variable Interval"],
          correctAnswer: 2,
          explanation: "Studying increases before exams (Fixed Interval scalloped pattern)."
        }
      ]
    },
    {
      id: 5,
      title: "Shaping & Behavior Modification",
      content: `
# Module 5: Shaping & Behavior Modification

## Changing Behavior Step by Step
This module covers techniques for developing new behaviors and modifying existing behaviors using behavioral principles.

## 5.1 Shaping New Behaviors
**Shaping** (successive approximations): Reinforcing closer and closer approximations to target behavior.

**Steps in shaping**:
1. **Identify target behavior**: Clearly define final desired behavior
2. **Identify starting behavior**: What the person/animal can already do
3. **Reinforce successive approximations**: Reward behaviors closer to target
4. **Raise criterion gradually**: Only reinforce closer approximations
5. **Continue until target behavior achieved**

**Examples**:
- Teaching dog to roll over: Reward turning head → turning body → partial roll → complete roll
- Teaching child to write: Reward holding pencil → making marks → forming letters → writing words

**Key principle**: Reinforce small steps toward final behavior.

## 5.2 Chaining Complex Behaviors
**Behavioral chaining**: Linking simple behaviors into complex sequence.

**Forward chaining**: Teach first step first, then add steps in order.
- Example: Teaching shoe tying: 1) Cross laces, 2) Make loop, 3) Wrap other lace, etc.

**Backward chaining**: Teach last step first, work backward.
- Example: Teaching bed making: Start with smoothing comforter (last step), then adding pillows, etc.
- Advantages: Always end with completion/reinforcement

**Total task presentation**: Practice entire sequence each time.
- Best for simpler tasks or more capable learners

**Task analysis**: Breaking complex behavior into smaller teachable steps.

## 5.3 Behavior Modification Techniques
**Prompting**: Providing cues to initiate behavior.
- **Verbal prompts**: Instructions or reminders
- **Visual prompts**: Pictures, written instructions
- **Physical prompts**: Guiding physically
- **Modeling prompts**: Demonstrating the behavior

**Fading**: Gradually removing prompts as behavior is learned.

**Token economies**: System where tokens earned for desired behaviors, exchanged for rewards.
- Used in classrooms, psychiatric hospitals, rehabilitation programs
- Tokens are secondary reinforcers

**Contingency contracts**: Written agreement specifying behavior-consequence relationships.
- Used with children, in therapy, in organizations

**Self-management**: Applying behavioral principles to one's own behavior.
- Self-monitoring: Recording own behavior
- Self-reinforcement: Rewarding oneself
- Stimulus control: Managing environmental cues
      `,
      completed: false,
      quiz: [
        {
          id: 1,
          question: "What is shaping?",
          options: ["Punishing unwanted behavior", "Reinforcing successive approximations", "Ignoring all behavior", "Using only punishment"],
          correctAnswer: 1,
          explanation: "Shaping reinforces closer and closer approximations to target behavior."
        },
        {
          id: 2,
          question: "What is first step in shaping?",
          options: ["Reinforce random behavior", "Identify target behavior", "Use punishment", "Ignore starting behavior"],
          correctAnswer: 1,
          explanation: "First step: Clearly identify the final desired target behavior."
        },
        {
          id: 3,
          question: "What is backward chaining?",
          options: ["Teach first step first", "Teach last step first", "Teach all steps at once", "Teach randomly"],
          correctAnswer: 1,
          explanation: "Backward chaining teaches last step first, then works backward."
        },
        {
          id: 4,
          question: "What advantage of backward chaining?",
          options: ["More complicated", "Always ends with completion", "Starts with hardest step", "No reinforcement"],
          correctAnswer: 1,
          explanation: "Backward chaining always ends with completion and reinforcement."
        },
        {
          id: 5,
          question: "What is task analysis?",
          options: ["Ignoring tasks", "Breaking complex behavior into steps", "Punishing all behavior", "Reinforcing randomly"],
          correctAnswer: 1,
          explanation: "Task analysis breaks complex behavior into smaller teachable steps."
        },
        {
          id: 6,
          question: "What is forward chaining?",
          options: ["Teach first step first", "Teach last step first", "Teach all at once", "Teach backward"],
          correctAnswer: 0,
          explanation: "Forward chaining teaches first step first, then adds steps in order."
        },
        {
          id: 7,
          question: "What is prompting?",
          options: ["Ignoring behavior", "Providing cues to initiate behavior", "Punishing behavior", "Reinforcing after behavior"],
          correctAnswer: 1,
          explanation: "Prompting provides cues to help initiate desired behavior."
        },
        {
          id: 8,
          question: "What is fading?",
          options: ["Increasing prompts", "Gradually removing prompts", "Changing prompts randomly", "Eliminating all prompts immediately"],
          correctAnswer: 1,
          explanation: "Fading gradually removes prompts as behavior is learned."
        },
        {
          id: 9,
          question: "What is token economy?",
          options: ["Money system", "Tokens earned for desired behaviors", "Punishment system", "Random reward system"],
          correctAnswer: 1,
          explanation: "Token economy: tokens earned for desired behaviors, exchanged for rewards."
        },
        {
          id: 10,
          question: "What are tokens in token economy?",
          options: ["Primary reinforcers", "Secondary reinforcers", "Punishers", "Neutral stimuli"],
          correctAnswer: 1,
          explanation: "Tokens are secondary reinforcers (learned value)."
        },
        {
          id: 11,
          question: "What is contingency contract?",
          options: ["Random agreement", "Written behavior-consequence agreement", "Verbal promise", "Legal document only"],
          correctAnswer: 1,
          explanation: "Contingency contract is written agreement specifying behavior-consequence relationships."
        },
        {
          id: 12,
          question: "What is self-monitoring?",
          options: ["Others recording behavior", "Recording own behavior", "Ignoring behavior", "Punishing self"],
          correctAnswer: 1,
          explanation: "Self-monitoring involves recording one's own behavior."
        },
        {
          id: 13,
          question: "What is total task presentation?",
          options: ["Practice parts separately", "Practice entire sequence", "Practice last step only", "Practice first step only"],
          correctAnswer: 1,
          explanation: "Total task presentation practices entire behavior sequence each time."
        },
        {
          id: 14,
          question: "What type of prompt is demonstration?",
          options: ["Verbal prompt", "Visual prompt", "Modeling prompt", "Physical prompt"],
          correctAnswer: 2,
          explanation: "Demonstrating behavior is a modeling prompt."
        },
        {
          id: 15,
          question: "What is self-reinforcement?",
          options: ["Others rewarding you", "Rewarding oneself", "Punishing oneself", "Ignoring achievements"],
          correctAnswer: 1,
          explanation: "Self-reinforcement involves rewarding oneself for desired behavior."
        },
        {
          id: 16,
          question: "What is stimulus control?",
          options: ["Controlling others", "Managing environmental cues", "Ignoring environment", "Random environment changes"],
          correctAnswer: 1,
          explanation: "Stimulus control involves managing environmental cues that trigger behavior."
        },
        {
          id: 17,
          question: "Where are token economies used?",
          options: ["Only in businesses", "Classrooms and hospitals", "Nowhere", "Only with animals"],
          correctAnswer: 1,
          explanation: "Token economies used in classrooms, psychiatric hospitals, rehabilitation programs."
        },
        {
          id: 18,
          question: "What is key principle in shaping?",
          options: ["Reinforce small steps toward final behavior", "Punish all errors", "Ignore progress", "Reinforce only perfect performance"],
          correctAnswer: 0,
          explanation: "Key shaping principle: reinforce small steps toward final behavior."
        },
        {
          id: 19,
          question: "What type of prompt is written instructions?",
          options: ["Verbal", "Visual", "Physical", "Modeling"],
          correctAnswer: 1,
          explanation: "Written instructions are visual prompts."
        },
        {
          id: 20,
          question: "What is self-management?",
          options: ["Managing others", "Applying principles to own behavior", "Ignoring self", "Only professional management"],
          correctAnswer: 1,
          explanation: "Self-management applies behavioral principles to one's own behavior."
        }
      ]
    },
    {
      id: 6,
      title: "Applications in Daily Life",
      content: `
# Module 6: Applications in Daily Life

## Practical Behavior Change Strategies
This module covers how to apply behavioral psychology principles to everyday situations for personal improvement and helping others.

## 6.1 Personal Behavior Change
**Using behavioral principles for self-improvement**:

**Goal setting** (using behavioral terms):
- Specific, measurable behaviors
- Observable criteria for success
- Small, achievable steps

**Self-monitoring techniques**:
- **Behavior tracking**: Recording target behaviors
- **ABC recording**: Antecedent-Behavior-Consequence analysis
- **Frequency/duration charts**: Quantifying behavior

**Self-reinforcement strategies**:
- **Premack principle**: Using preferred activities to reinforce less preferred ones
  - "First do homework, then watch TV"
- **Token systems for self**: Earn points for behaviors, exchange for rewards
- **Social reinforcement**: Share progress with supportive others

**Stimulus control for habit change**:
- **Cue management**: Change environmental triggers
- **Response prevention**: Make unwanted behaviors difficult
- **Alternative response training**: Replace unwanted behaviors with desired ones

## 6.2 Parenting & Education
**Effective parenting strategies**:

**Positive parenting techniques**:
- **Catch them being good**: Reinforce desired behaviors
- **Specific praise**: "Good job cleaning your room" vs. "Good job"
- **Time-in**: Positive attention for good behavior
- **Natural consequences**: Logical results of behavior

**Classroom applications**:
- **Group contingencies**: Whole class earns reward for collective behavior
- **Behavior charts**: Visual tracking of behavior
- **Precision teaching**: Frequent measurement and charting
- **Direct instruction**: Clear, structured teaching with immediate feedback

**Decreasing problem behaviors**:
- **Differential reinforcement**: Reinforce alternative or incompatible behaviors
- **Extinction**: Withholding reinforcement for unwanted behavior
- **Time-out**: Brief removal from reinforcing environment

## 6.3 Workplace & Organizational Applications
**Performance management**:

**Effective feedback**:
- Immediate and specific
- Focus on behavior, not person
- Include both positive and corrective

**Motivation strategies**:
- **Clear expectations**: Specific job requirements
- **Performance-based rewards**: Link consequences to behavior
- **Recognition programs**: Public acknowledgment of achievements

**Behavioral safety programs**:
- Observe and record safe/unsafe behaviors
- Provide feedback and reinforcement for safety
- Set safety goals and track progress

**Customer service training**:
- **Behavioral scripts**: Standard responses to common situations
- **Reinforcement for quality service**: Recognition and rewards
- **Mystery shoppers**: Objective measurement of service behaviors
      `,
      completed: false,
      quiz: [
        {
          id: 1,
          question: "What is Premack principle?",
          options: ["Punish then reward", "Use preferred activities to reinforce less preferred", "Ignore all preferences", "Random reinforcement"],
          correctAnswer: 1,
          explanation: "Premack principle: use preferred activities to reinforce less preferred ones."
        },
        {
          id: 2,
          question: "What is ABC recording?",
          options: ["Alphabet recording", "Antecedent-Behavior-Consequence analysis", "Always Be Careful", "Action-Based Counting"],
          correctAnswer: 1,
          explanation: "ABC recording analyzes Antecedent, Behavior, and Consequence of behaviors."
        },
        {
          id: 3,
          question: "What is 'catch them being good'?",
          options: ["Ignore good behavior", "Reinforce desired behaviors", "Only punish bad behavior", "Criticize constantly"],
          correctAnswer: 1,
          explanation: "'Catch them being good' means reinforcing desired behaviors when they occur."
        },
        {
          id: 4,
          question: "What is specific praise?",
          options: ["Vague compliments", "Specific description of good behavior", "General praise", "No praise"],
          correctAnswer: 1,
          explanation: "Specific praise describes exactly what behavior was good."
        },
        {
          id: 5,
          question: "What are natural consequences?",
          options: ["Arbitrary punishments", "Logical results of behavior", "Random events", "Parent-imposed only"],
          correctAnswer: 1,
          explanation: "Natural consequences are logical, natural results of behavior."
        },
        {
          id: 6,
          question: "What is differential reinforcement?",
          options: ["Reinforce all behavior", "Reinforce alternative/incompatible behaviors", "Punish all behavior", "Ignore all behavior"],
          correctAnswer: 1,
          explanation: "Differential reinforcement reinforces alternative or incompatible behaviors."
        },
        {
          id: 7,
          question: "What is extinction in behavior modification?",
          options: ["Increasing behavior", "Withholding reinforcement", "Adding punishment", "Ignoring everything"],
          correctAnswer: 1,
          explanation: "Extinction means withholding reinforcement for unwanted behavior."
        },
        {
          id: 8,
          question: "What is time-out?",
          options: ["Time for fun", "Brief removal from reinforcing environment", "Permanent removal", "Time for discussion"],
          correctAnswer: 1,
          explanation: "Time-out is brief removal from reinforcing environment."
        },
        {
          id: 9,
          question: "What is group contingency?",
          options: ["Individual rewards", "Whole group earns reward for collective behavior", "No rewards", "Random rewards"],
          correctAnswer: 1,
          explanation: "Group contingency: whole class/group earns reward for collective behavior."
        },
        {
          id: 10,
          question: "What is precision teaching?",
          options: ["Vague instruction", "Frequent measurement and charting", "No measurement", "Random teaching"],
          correctAnswer: 1,
          explanation: "Precision teaching involves frequent measurement and charting of progress."
        },
        {
          id: 11,
          question: "What is stimulus control for habits?",
          options: ["Ignore environment", "Change environmental triggers", "Change personality", "Medication only"],
          correctAnswer: 1,
          explanation: "Stimulus control for habits involves changing environmental triggers."
        },
        {
          id: 12,
          question: "What is response prevention?",
          options: ["Make unwanted behaviors easy", "Make unwanted behaviors difficult", "Ignore behaviors", "Punish immediately"],
          correctAnswer: 1,
          explanation: "Response prevention makes unwanted behaviors difficult to perform."
        },
        {
          id: 13,
          question: "What is effective feedback?",
          options: ["Vague and delayed", "Immediate and specific", "Only negative", "Only positive"],
          correctAnswer: 1,
          explanation: "Effective feedback is immediate, specific, and focuses on behavior."
        },
        {
          id: 14,
          question: "What are behavioral scripts?",
          options: ["Random responses", "Standard responses to common situations", "No responses", "Complex theories"],
          correctAnswer: 1,
          explanation: "Behavioral scripts are standard responses to common situations."
        },
        {
          id: 15,
          question: "What is mystery shopper?",
          options: ["Regular customer", "Objective measurement of service behaviors", "Complaining customer", "Manager"],
          correctAnswer: 1,
          explanation: "Mystery shoppers provide objective measurement of service behaviors."
        },
        {
          id: 16,
          question: "What is self-monitoring?",
          options: ["Others track you", "Recording own behavior", "Ignoring behavior", "Punishing self"],
          correctAnswer: 1,
          explanation: "Self-monitoring involves recording one's own target behaviors."
        },
        {
          id: 17,
          question: "What is alternative response training?",
          options: ["Continue unwanted behavior", "Replace unwanted with desired behavior", "Ignore all behaviors", "Punish all behaviors"],
          correctAnswer: 1,
          explanation: "Alternative response training replaces unwanted behaviors with desired ones."
        },
        {
          id: 18,
          question: "What is time-in?",
          options: ["Punishment", "Positive attention for good behavior", "Ignoring", "Time away"],
          correctAnswer: 1,
          explanation: "Time-in provides positive attention for good behavior."
        },
        {
          id: 19,
          question: "What is direct instruction?",
          options: ["Vague teaching", "Clear, structured teaching with feedback", "No instruction", "Self-teaching"],
          correctAnswer: 1,
          explanation: "Direct instruction is clear, structured teaching with immediate feedback."
        },
        {
          id: 20,
          question: "What are behavioral safety programs?",
          options: ["Ignore safety", "Observe and reinforce safe behaviors", "Punish all accidents", "No measurement"],
          correctAnswer: 1,
          explanation: "Behavioral safety programs observe and reinforce safe behaviors."
        }
      ]
    }
  ],

  // 3. FINAL EXAM STRUCTURE
  finalExam: {
    title: "Behavioral Psychology Certificate Final Examination",
    description: "Comprehensive 40-question exam covering all 6 modules of the Behavioral Psychology Certificate program.",
    passingScore: 70,
    questions: [
      {
        id: 1,
        module: 1,
        question: "What is the primary focus of behavioral psychology?",
        options: ["Unconscious thoughts", "Observable behavior", "Genetic influences", "Spiritual experiences"],
        correctAnswer: 1,
        explanation: "Behavioral psychology focuses on observable, measurable behavior."
      },
      {
        id: 2,
        module: 1,
        question: "Who is considered the founder of behaviorism?",
        options: ["B.F. Skinner", "Sigmund Freud", "John B. Watson", "Carl Rogers"],
        correctAnswer: 2,
        explanation: "John B. Watson is considered the founder of behaviorism."
      },
      {
        id: 3,
        module: 2,
        question: "What was the unconditioned stimulus in Pavlov's experiment?",
        options: ["Bell", "Food", "Salivation", "Light"],
        correctAnswer: 1,
        explanation: "Food was the unconditioned stimulus (automatically caused salivation)."
      },
      {
        id: 4,
        module: 2,
        question: "What is extinction in classical conditioning?",
        options: ["Initial learning", "Weakening of CR without US", "Response to similar stimuli", "Sudden recovery"],
        correctAnswer: 1,
        explanation: "Extinction is weakening/disappearance of CR when CS presented without US."
      },
      {
        id: 5,
        module: 3,
        question: "What increases behavior frequency?",
        options: ["Reinforcement", "Punishment", "Extinction", "Discrimination"],
        correctAnswer: 0,
        explanation: "Reinforcement increases the frequency of behavior."
      },
      {
        id: 6,
        module: 3,
        question: "What is negative reinforcement?",
        options: ["Adding desirable to increase behavior", "Removing undesirable to increase behavior", "Adding undesirable to decrease behavior", "Removing desirable to decrease behavior"],
        correctAnswer: 1,
        explanation: "Negative reinforcement removes something undesirable to increase behavior."
      },
      {
        id: 7,
        module: 4,
        question: "What schedule is most resistant to extinction?",
        options: ["Fixed Ratio", "Variable Ratio", "Fixed Interval", "Variable Interval"],
        correctAnswer: 1,
        explanation: "Variable Ratio is most resistant to extinction."
      },
      {
        id: 8,
        module: 4,
        question: "What schedule reinforces after fixed number of responses?",
        options: ["Fixed Ratio", "Variable Ratio", "Fixed Interval", "Variable Interval"],
        correctAnswer: 0,
        explanation: "Fixed Ratio reinforces after fixed number of responses."
      },
      {
        id: 9,
        module: 5,
        question: "What is shaping?",
        options: ["Punishing unwanted behavior", "Reinforcing successive approximations", "Ignoring all behavior", "Using only punishment"],
        correctAnswer: 1,
        explanation: "Shaping reinforces closer and closer approximations to target behavior."
      },
      {
        id: 10,
        module: 5,
        question: "What is backward chaining?",
        options: ["Teach first step first", "Teach last step first", "Teach all steps at once", "Teach randomly"],
        correctAnswer: 1,
        explanation: "Backward chaining teaches last step first, then works backward."
      },
      {
        id: 11,
        module: 6,
        question: "What is Premack principle?",
        options: ["Punish then reward", "Use preferred activities to reinforce less preferred", "Ignore all preferences", "Random reinforcement"],
        correctAnswer: 1,
        explanation: "Premack principle: use preferred activities to reinforce less preferred ones."
      },
      {
        id: 12,
        module: 6,
        question: "What is ABC recording?",
        options: ["Alphabet recording", "Antecedent-Behavior-Consequence analysis", "Always Be Careful", "Action-Based Counting"],
        correctAnswer: 1,
        explanation: "ABC recording analyzes Antecedent, Behavior, and Consequence of behaviors."
      },
      {
        id: 13,
        module: 1,
        question: "What does the three-term contingency describe?",
        options: ["Thought → Feeling → Action", "Antecedent → Behavior → Consequence", "Stimulus → Response → Reinforcement", "Input → Process → Output"],
        correctAnswer: 1,
        explanation: "Three-term contingency: Antecedent (what happens before), Behavior (the action), Consequence (what happens after)."
      },
      {
        id: 14,
        module: 1,
        question: "What method involves systematic watching and recording?",
        options: ["Experimentation", "Observation", "Survey", "Interview"],
        correctAnswer: 1,
        explanation: "Observation involves systematic watching and recording of behavior."
      },
      {
        id: 15,
        module: 2,
        question: "What becomes the conditioned stimulus after pairing?",
        options: ["Unconditioned stimulus", "Neutral stimulus", "Unconditioned response", "Conditioned response"],
        correctAnswer: 1,
        explanation: "Neutral stimulus becomes conditioned stimulus after pairing with US."
      },
      {
        id: 16,
        module: 2,
        question: "What is spontaneous recovery?",
        options: ["Initial learning", "Weakening of response", "Sudden reappearance after rest", "Response to similar stimuli"],
        correctAnswer: 2,
        explanation: "Spontaneous recovery is sudden reappearance of extinguished CR after rest period."
      },
      {
        id: 17,
        module: 3,
        question: "What decreases behavior frequency?",
        options: ["Reinforcement", "Punishment", "Acquisition", "Generalization"],
        correctAnswer: 1,
        explanation: "Punishment decreases the frequency of behavior."
      },
      {
        id: 18,
        module: 3,
        question: "Who developed operant conditioning?",
        options: ["Ivan Pavlov", "B.F. Skinner", "John B. Watson", "Albert Bandura"],
        correctAnswer: 1,
        explanation: "B.F. Skinner developed operant conditioning principles."
      },
      {
        id: 19,
        module: 4,
        question: "What schedule reinforces first response after fixed time?",
        options: ["Fixed Ratio", "Variable Ratio", "Fixed Interval", "Variable Interval"],
        correctAnswer: 2,
        explanation: "Fixed Interval reinforces first response after fixed time period."
      },
      {
        id: 20,
        module: 4,
        question: "What is variable ratio example?",
        options: ["Weekly paycheck", "Slot machines", "Piece-rate pay", "Checking email"],
        correctAnswer: 1,
        explanation: "Slot machines use Variable Ratio schedule (reinforcement varies)."
      },
      {
        id: 21,
        module: 5,
        question: "What is first step in shaping?",
        options: ["Reinforce random behavior", "Identify target behavior", "Use punishment", "Ignore starting behavior"],
        correctAnswer: 1,
        explanation: "First step: Clearly identify the final desired target behavior."
      },
      {
        id: 22,
        module: 5,
        question: "What is token economy?",
        options: ["Money system", "Tokens earned for desired behaviors", "Punishment system", "Random reward system"],
        correctAnswer: 1,
        explanation: "Token economy: tokens earned for desired behaviors, exchanged for rewards."
      },
      {
        id: 23,
        module: 6,
        question: "What is 'catch them being good'?",
        options: ["Ignore good behavior", "Reinforce desired behaviors", "Only punish bad behavior", "Criticize constantly"],
        correctAnswer: 1,
        explanation: "'Catch them being good' means reinforcing desired behaviors when they occur."
      },
      {
        id: 24,
        module: 6,
        question: "What is extinction in behavior modification?",
        options: ["Increasing behavior", "Withholding reinforcement", "Adding punishment", "Ignoring everything"],
        correctAnswer: 1,
        explanation: "Extinction means withholding reinforcement for unwanted behavior."
      },
      {
        id: 25,
        module: 1,
        question: "What does behaviorism focus on regarding time?",
        options: ["Past experiences", "Present environment", "Future goals", "All time periods"],
        correctAnswer: 1,
        explanation: "Behaviorism focuses on current environment and present behaviors."
      },
      {
        id: 26,
        module: 1,
        question: "What is frequency counting?",
        options: ["How long behavior lasts", "How often behavior occurs", "Time between stimulus and response", "Whether behavior occurs in intervals"],
        correctAnswer: 1,
        explanation: "Frequency counting measures how often a behavior occurs."
      },
      {
        id: 27,
        module: 2,
        question: "What is generalization?",
        options: ["Learning specific response", "Responding to similar stimuli", "Loss of response", "Initial learning"],
        correctAnswer: 1,
        explanation: "Generalization is responding to stimuli similar to the conditioned stimulus."
      },
      {
        id: 28,
        module: 2,
        question: "What therapy uses classical conditioning for phobias?",
        options: ["Psychoanalysis", "Systematic desensitization", "Cognitive therapy", "Group therapy"],
        correctAnswer: 1,
        explanation: "Systematic desensitization uses classical conditioning to treat phobias."
      },
      {
        id: 29,
        module: 3,
        question: "What is positive reinforcement?",
        options: ["Adding desirable to increase behavior", "Removing undesirable to increase behavior", "Adding undesirable to decrease behavior", "Removing desirable to decrease behavior"],
        correctAnswer: 0,
        explanation: "Positive reinforcement adds something desirable to increase behavior."
      },
      {
        id: 30,
        module: 3,
        question: "What is negative punishment?",
        options: ["Adding desirable to increase behavior", "Removing undesirable to increase behavior", "Adding undesirable to decrease behavior", "Removing desirable to decrease behavior"],
        correctAnswer: 3,
        explanation: "Negative punishment removes something desirable to decrease behavior."
      },
      {
        id: 31,
        module: 4,
        question: "What pattern does Fixed Interval produce?",
        options: ["High steady rate", "Scalloped pattern", "No pattern", "Random pattern"],
        correctAnswer: 1,
        explanation: "Fixed Interval produces scalloped pattern (slow then increasing response)."
      },
      {
        id: 32,
        module: 4,
        question: "What is partial reinforcement effect?",
        options: ["Continuous faster learning", "Partial more resistant to extinction", "Continuous more resistant", "No difference"],
        correctAnswer: 1,
        explanation: "Partial reinforcement effect: behaviors on partial schedules more resistant to extinction."
      },
      {
        id: 33,
        module: 5,
        question: "What is task analysis?",
        options: ["Ignoring tasks", "Breaking complex behavior into steps", "Punishing all behavior", "Reinforcing randomly"],
        correctAnswer: 1,
        explanation: "Task analysis breaks complex behavior into smaller teachable steps."
      },
      {
        id: 33,
        module: 5,
        question: "What is prompting?",
        options: ["Ignoring behavior", "Providing cues to initiate behavior", "Punishing behavior", "Reinforcing after behavior"],
        correctAnswer: 1,
        explanation: "Prompting provides cues to help initiate desired behavior."
      },
      {
        id: 34,
        module: 6,
        question: "What are natural consequences?",
        options: ["Arbitrary punishments", "Logical results of behavior", "Random events", "Parent-imposed only"],
        correctAnswer: 1,
        explanation: "Natural consequences are logical, natural results of behavior."
      },
      {
        id: 35,
        module: 6,
        question: "What is differential reinforcement?",
        options: ["Reinforce all behavior", "Reinforce alternative/incompatible behaviors", "Punish all behavior", "Ignore all behavior"],
        correctAnswer: 1,
        explanation: "Differential reinforcement reinforces alternative or incompatible behaviors."
      },
      {
        id: 36,
        module: 1,
        question: "Who discovered classical conditioning?",
        options: ["B.F. Skinner", "Ivan Pavlov", "John B. Watson", "Carl Jung"],
        correctAnswer: 1,
        explanation: "Ivan Pavlov discovered classical conditioning through dog experiments."
      },
      {
        id: 37,
        module: 2,
        question: "What optimal timing for CS before US?",
        options: ["0.5 seconds", "2 seconds", "5 seconds", "10 seconds"],
        correctAnswer: 0,
        explanation: "CS should precede US by about 0.5 seconds for optimal conditioning."
      },
      {
        id: 38,
        module: 3,
        question: "What is a primary reinforcer?",
        options: ["Money", "Praise", "Food", "Grades"],
        correctAnswer: 2,
        explanation: "Food is a primary reinforcer (biologically significant)."
      },
      {
        id: 39,
        module: 4,
        question: "What schedule for maintaining behavior long-term?",
        options: ["Continuous", "Variable schedules", "Fixed schedules only", "No reinforcement"],
        correctAnswer: 1,
        explanation: "Variable schedules (VR or VI) best for maintaining behavior long-term."
      },
      {
        id: 40,
        module: 5,
        question: "What is self-management?",
        options: ["Managing others", "Applying principles to own behavior", "Ignoring self", "Only professional management"],
        correctAnswer: 1,
        explanation: "Self-management applies behavioral principles to one's own behavior."
      }
    ]
  }
};

export default behavioralPsychologyCertificate;

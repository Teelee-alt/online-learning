export const counselingSkillsCertificate = {
  id: "counseling-skills-certificate",
  title: "Counseling Skills (Certificate)",
  description: "Develop foundational helping skills, active listening techniques, and basic counseling frameworks for supporting others in personal and professional settings.",
  duration: "6 weeks",
  timeCommitment: "4-6 hours per week",
  price: 12,
  upgradePrice: 18,
  icon: "🤝",
  badge: "Certificate",
  
  modules: [
    {
      id: 1,
      title: "Introduction to Helping Relationships",
      content: `# Module 1: Introduction to Helping Relationships

## Foundations of Effective Support

This module introduces the core principles of helping relationships and establishes the foundation for effective counseling skills.

### **1. What Are Helping Relationships?**
**Helping relationships** are intentional connections where one person provides support, guidance, or assistance to another. These relationships exist in many contexts:
- **Professional counseling**: Licensed therapists working with clients
- **Peer support**: Friends, family, or colleagues offering help
- **Mentoring**: Guidance in professional or personal development
- **Crisis intervention**: Immediate support during difficult situations

**Three core conditions** for effective helping relationships (identified by psychologist Carl Rogers):
1. **Unconditional Positive Regard**: Accepting the person without judgment
2. **Empathy**: Understanding the person's feelings and perspective
3. **Congruence/Genuineness**: Being authentic and transparent

**Boundaries in helping relationships**:
- **Time boundaries**: Clear session start/end times (typically 50-60 minutes)
- **Relationship boundaries**: Maintaining professional distance
- **Confidentiality**: Protecting private information (with specific exceptions)
- **Competence boundaries**: Working within your training and expertise

### **2. The Helping Process Stages**
Effective helping follows a **structured process** with four main stages:

**Stage 1: Building Rapport and Relationship**
- **First 5-10 minutes** of initial contact are critical
- **Active listening** demonstrates genuine interest
- **Nonverbal cues**: Appropriate eye contact, open posture, nodding
- **Initial assessment**: Understanding why the person is seeking help

**Stage 2: Problem Exploration and Clarification**
- **Gathering information**: Who, what, when, where, how
- **Identifying patterns**: Recurring issues or behaviors
- **Clarifying feelings**: Helping person identify and express emotions
- **Setting focus**: Determining what to work on first

**Stage 3: Goal Setting and Action Planning**
- **SMART goals**: Specific, Measurable, Achievable, Relevant, Time-bound
- **Identifying resources**: Personal strengths, support systems
- **Developing strategies**: Practical steps for change
- **Anticipating obstacles**: Preparing for potential challenges

**Stage 4: Implementation and Evaluation**
- **Taking action**: Putting plans into practice
- **Monitoring progress**: Regular check-ins on goals
- **Adjusting approach**: Modifying strategies as needed
- **Ending well**: Planning for termination and follow-up

### **3. Ethical Foundations**
**Core ethical principles** in helping relationships:
1. **Autonomy**: Respecting the person's right to make their own decisions
2. **Beneficence**: Acting in the person's best interest
3. **Non-maleficence**: Avoiding harm ("first, do no harm")
4. **Justice**: Treating people fairly and equally
5. **Fidelity**: Being trustworthy and keeping promises

**Confidentiality guidelines**:
- **Absolute confidentiality**: What is shared stays private
- **Exceptions to confidentiality**: Harm to self, harm to others, abuse of vulnerable populations
- **Informed consent**: Explaining confidentiality limits at the beginning
- **Documentation**: Keeping minimal, factual records when necessary

**Cultural competence** involves:
- **Awareness**: Recognizing your own cultural background and biases
- **Knowledge**: Learning about others' cultural backgrounds
- **Skills**: Adapting your approach to be culturally responsive
- **Humility**: Recognizing you don't know everything about others' experiences

### **4. Self-Care for Helpers**
**Burnout prevention** is essential for sustainable helping:
- **Burnout signs**: Emotional exhaustion, cynicism, reduced effectiveness
- **Compassion fatigue**: Emotional drain from helping traumatized people
- **Vicarious trauma**: Secondary trauma from hearing others' traumatic experiences

**Effective self-care strategies**:
- **Professional boundaries**: Separating work from personal life
- **Regular supervision**: Discussing cases with experienced colleagues
- **Peer support**: Connecting with others in helping professions
- **Personal therapy**: Addressing your own issues with a professional

**Mindfulness practices** for helpers:
- **Grounding techniques**: Staying present during difficult conversations
- **Breathing exercises**: Managing stress in the moment
- **Reflective journaling**: Processing experiences after sessions
- **Regular breaks**: Preventing emotional overload`,
      
      completed: false,
      quiz: [
        {
          id: 1,
          question: "What are the three core conditions for effective helping relationships identified by Carl Rogers?",
          options: [
            "Honesty, Intelligence, Experience",
            "Unconditional Positive Regard, Empathy, Congruence",
            "Professionalism, Education, Certification",
            "Advice-giving, Problem-solving, Direction"
          ],
          correctAnswer: 1,
          explanation: "Carl Rogers identified Unconditional Positive Regard (acceptance), Empathy (understanding), and Congruence (genuineness) as essential for therapeutic relationships."
        },
        {
          id: 2,
          question: "What is the typical duration of a professional counseling session?",
          options: [
            "30-40 minutes",
            "50-60 minutes",
            "70-80 minutes",
            "90-100 minutes"
          ],
          correctAnswer: 1,
          explanation: "Professional counseling sessions typically last 50-60 minutes, allowing time for meaningful work while maintaining boundaries."
        },
        {
          id: 3,
          question: "Which ethical principle means 'avoiding harm' in helping relationships?",
          options: [
            "Autonomy",
            "Beneficence",
            "Non-maleficence",
            "Justice"
          ],
          correctAnswer: 2,
          explanation: "Non-maleficence means 'first, do no harm' - avoiding actions that could hurt the person seeking help."
        },
        {
          id: 4,
          question: "What is the first stage in the helping process?",
          options: [
            "Problem Exploration",
            "Building Rapport and Relationship",
            "Goal Setting",
            "Implementation"
          ],
          correctAnswer: 1,
          explanation: "Building Rapport and Relationship is the foundational first stage, establishing trust and connection before problem-solving."
        },
        {
          id: 5,
          question: "What does 'compassion fatigue' refer to in helping professions?",
          options: [
            "Feeling too much compassion",
            "Emotional drain from helping traumatized people",
            "Losing interest in helping others",
            "Becoming emotionally detached"
          ],
          correctAnswer: 1,
          explanation: "Compassion fatigue is emotional exhaustion specifically from helping people who have experienced trauma or intense suffering."
        },
        {
          id: 6,
          question: "What does 'cultural competence' involve in helping relationships?",
          options: [
            "Speaking multiple languages",
            "Awareness, knowledge, skills, and humility regarding cultural differences",
            "Only working with people from your own culture",
            "Ignoring cultural differences to treat everyone equally"
          ],
          correctAnswer: 1,
          explanation: "Cultural competence involves awareness of your own biases, knowledge of others' cultures, skills to adapt your approach, and humility to recognize limitations."
        },
        {
          id: 7,
          question: "What are SMART goals in the helping process?",
          options: [
            "Simple, Manageable, Achievable, Realistic, Timely",
            "Specific, Measurable, Achievable, Relevant, Time-bound",
            "Strategic, Meaningful, Appropriate, Reasonable, Targeted",
            "Systematic, Motivating, Action-oriented, Responsible, Trackable"
          ],
          correctAnswer: 1,
          explanation: "SMART goals are Specific, Measurable, Achievable, Relevant, and Time-bound - a framework for creating effective change objectives."
        },
        {
          id: 8,
          question: "Which is NOT a common exception to confidentiality?",
          options: [
            "Harm to self",
            "Harm to others",
            "Abuse of vulnerable populations",
            "Breaking minor laws"
          ],
          correctAnswer: 3,
          explanation: "Confidentiality typically must be broken for harm to self, harm to others, or abuse of vulnerable populations, but not for minor law-breaking."
        },
        {
          id: 9,
          question: "What does the ethical principle of 'autonomy' mean?",
          options: [
            "Making decisions for the person",
            "Respecting the person's right to make their own decisions",
            "Following professional guidelines automatically",
            "Working independently without supervision"
          ],
          correctAnswer: 1,
          explanation: "Autonomy means respecting the person's right to self-determination and making their own choices, even if you disagree."
        },
        {
          id: 10,
          question: "What percentage of initial contact time is critical for building rapport?",
          options: [
            "First 1-2 minutes",
            "First 5-10 minutes",
            "First 20-30 minutes",
            "The entire first session"
          ],
          correctAnswer: 1,
          explanation: "The first 5-10 minutes of initial contact are critical for establishing rapport and setting the tone for the helping relationship."
        },
        {
          id: 11,
          question: "What is 'vicarious trauma'?",
          options: [
            "Trauma experienced directly",
            "Secondary trauma from hearing others' traumatic experiences",
            "Trauma from watching news reports",
            "Trauma that is imagined or exaggerated"
          ],
          correctAnswer: 1,
          explanation: "Vicarious trauma is secondary trauma experienced by helpers from repeatedly hearing about others' traumatic experiences."
        },
        {
          id: 12,
          question: "What does 'congruence' mean in Carl Rogers' core conditions?",
          options: [
            "Agreeing with everything the person says",
            "Being authentic and transparent",
            "Having consistent theoretical approaches",
            "Matching the person's emotional state"
          ],
          correctAnswer: 1,
          explanation: "Congruence (or genuineness) means being authentic, transparent, and real in the helping relationship, not playing a role."
        },
        {
          id: 13,
          question: "Which stage involves identifying patterns and clarifying feelings?",
          options: [
            "Building Rapport",
            "Problem Exploration and Clarification",
            "Goal Setting",
            "Implementation"
          ],
          correctAnswer: 1,
          explanation: "Problem Exploration and Clarification involves gathering information, identifying patterns, and helping the person clarify their feelings."
        },
        {
          id: 14,
          question: "What is 'unconditional positive regard'?",
          options: [
            "Always praising the person",
            "Accepting the person without judgment",
            "Agreeing with all their decisions",
            "Providing constant positive feedback"
          ],
          correctAnswer: 1,
          explanation: "Unconditional Positive Regard means accepting the person as they are, without judgment or conditions, while still possibly challenging behaviors."
        },
        {
          id: 15,
          question: "What does the ethical principle of 'fidelity' mean?",
          options: [
            "Being faithful to theoretical models",
            "Being trustworthy and keeping promises",
            "Maintaining financial records accurately",
            "Following legal requirements exactly"
          ],
          correctAnswer: 1,
          explanation: "Fidelity means being trustworthy, keeping promises, and maintaining professional boundaries and commitments."
        },
        {
          id: 16,
          question: "What is a key component of effective self-care for helpers?",
          options: [
            "Working longer hours to help more people",
            "Professional boundaries separating work from personal life",
            "Avoiding emotional involvement with clients",
            "Taking on more challenging cases to grow"
          ],
          correctAnswer: 1,
          explanation: "Professional boundaries that separate work from personal life are essential for preventing burnout and maintaining effectiveness."
        },
        {
          id: 17,
          question: "What does 'informed consent' involve regarding confidentiality?",
          options: [
            "Getting written permission for everything",
            "Explaining confidentiality limits at the beginning",
            "Only sharing information with the person's explicit permission each time",
            "Keeping all information completely secret"
          ],
          correctAnswer: 1,
          explanation: "Informed consent involves explaining the limits of confidentiality (exceptions) at the beginning so the person understands what they're agreeing to."
        },
        {
          id: 18,
          question: "Which is NOT one of the four main stages of the helping process?",
          options: [
            "Building Rapport and Relationship",
            "Problem Exploration and Clarification",
            "Immediate Advice Giving",
            "Goal Setting and Action Planning"
          ],
          correctAnswer: 2,
          explanation: "Immediate Advice Giving is not a stage in the professional helping process; effective helping involves exploration before solution-focused work."
        },
        {
          id: 19,
          question: "What is 'empathy' in the context of helping relationships?",
          options: [
            "Feeling sorry for the person",
            "Understanding the person's feelings and perspective",
            "Sharing similar personal experiences",
            "Telling the person you understand how they feel"
          ],
          correctAnswer: 1,
          explanation: "Empathy involves understanding the person's feelings and perspective from their point of view, not just sympathizing or sharing your own experiences."
        },
        {
          id: 20,
          question: "What is the purpose of 'regular supervision' for helpers?",
          options: [
            "Micromanaging their work",
            "Discussing cases with experienced colleagues for guidance",
            "Monitoring their time and productivity",
            "Evaluating their performance for promotions"
          ],
          correctAnswer: 1,
          explanation: "Regular supervision provides opportunities to discuss challenging cases with experienced colleagues, gain perspective, and prevent burnout."
        }
      ]
    },
    {
      id: 2,
      title: "Active Listening Skills",
      content: `# Module 2: Active Listening Skills

## The Foundation of Effective Communication

Active listening is the most critical skill in helping relationships. This module teaches how to listen effectively to understand, not just to respond.

### **1. Components of Active Listening**
Active listening involves **three key components** working together:

**1. Attending Behaviors** (Physical presence):
- **Eye contact**: Appropriate and culturally sensitive (not staring)
- **Body posture**: Leaning slightly forward, open posture
- **Facial expressions**: Responsive and appropriate
- **Minimal encouragers**: Nodding, "mm-hmm," "I see"
- **Physical environment**: Comfortable, private, free from distractions

**2. Following Skills** (Verbal tracking):
- **Door openers**: Invitations to talk ("Would you like to tell me more?")
- **Open questions**: Encouraging elaboration (What? How? Tell me about...)
- **Closed questions**: For specific information (used sparingly)
- **Silence**: Allowing thinking time (comfortable with pauses)
- **Paraphrasing**: Restating content in your own words

**3. Reflecting Skills** (Depth understanding):
- **Reflecting feelings**: Identifying and naming emotions
- **Reflecting meaning**: Understanding significance behind words
- **Reflecting experience**: Capturing the person's subjective reality
- **Summarizing**: Pulling together key points periodically

### **2. The SOLER Model of Attending**
Gerard Egan's **SOLER model** provides a framework for physical attending:

**S: Squarely face the person**
- Position yourself directly toward them (angled slightly is okay)
- Shows you are fully present and engaged
- Avoid barriers like desks between you

**O: Open posture**
- Arms uncrossed, hands visible
- Shows receptiveness and availability
- Avoid defensive or closed positions

**L: Lean slightly forward**
- Shows interest and engagement
- Not so far as to invade personal space
- Natural, comfortable inclination

**E: Eye contact**
- Appropriate and comfortable level
- Cultural considerations important
- Breaks are normal and natural

**R: Relaxed**
- Calm, comfortable presence
- Models calmness for the person
- Avoids fidgeting or nervous habits

### **3. Questioning Techniques**
**Open-ended questions** encourage exploration:
- Begin with: What, How, Tell me about, Describe, In what ways...
- Examples: "What was that experience like for you?" "How did you feel when that happened?"
- **Purpose**: Encourage elaboration, exploration, self-expression

**Closed questions** gather specific information:
- Begin with: Is, Are, Do, Did, Have, Will, Can...
- Examples: "Did that happen yesterday?" "Are you currently taking medication?"
- **Purpose**: Gather facts, clarify details, confirm information
- **Use sparingly**: Too many can feel like interrogation

**Circular questions** explore relationships and systems:
- Focus on others' perspectives: "How do you think your partner sees this situation?"
- Explore differences: "What's different about times when this problem doesn't occur?"
- Future-oriented: "If this problem were solved, what would be different?"
- **Purpose**: Broaden perspective, explore connections, identify patterns

### **4. Reflecting and Paraphrasing**
**Paraphrasing** (restating content):
- Capture the essence of what was said
- Use your own words
- Keep it slightly shorter than original
- Check for accuracy: "So what I'm hearing is..."
- **Purpose**: Show you're listening, clarify understanding, highlight important points

**Reflecting feelings** (identifying emotions):
- Look for emotional words or cues
- Name the feeling: "You sound really frustrated about that"
- Include intensity: "That seems extremely disappointing"
- Check accuracy: "Am I understanding correctly that you feel...?"
- **Purpose**: Validate emotions, help person identify feelings, deepen connection

**Summarizing** (periodic review):
- Pull together key points from a segment of conversation
- Include both content and feelings
- End with invitation for correction: "Did I get that right?"
- **Purpose**: Organize thoughts, show progress, transition to new topics

### **5. Common Listening Barriers**
**Internal barriers** (within the listener):
- **Mind reading**: Assuming you know what they mean
- **Rehearsing**: Planning your response while they're talking
- **Filtering**: Only hearing what you want to hear
- **Judging**: Evaluating instead of understanding
- **Daydreaming**: Letting your mind wander

**External barriers** (environmental):
- **Noise**: Background sounds distracting attention
- **Interruptions**: Phone, door, other people
- **Physical discomfort**: Temperature, seating, lighting
- **Time pressure**: Feeling rushed or watching clock

**Cultural barriers**:
- **Language differences**: Words having different meanings
- **Nonverbal differences**: Different meanings for gestures, eye contact
- **Communication styles**: Direct vs. indirect, emotional vs. reserved
- **Power dynamics**: Different expectations about authority

**Overcoming barriers**:
- **Awareness**: Recognizing when barriers are occurring
- **Self-monitoring**: Checking your own attention and assumptions
- **Environmental control**: Minimizing distractions when possible
- **Cultural humility**: Asking for clarification when uncertain`,
      
      completed: false,
      quiz: [
        {
          id: 1,
          question: "What does the 'S' stand for in the SOLER model of attending?",
          options: [
            "Silent",
            "Squarely face the person",
            "Sincere",
            "Sitting straight"
          ],
          correctAnswer: 1,
          explanation: "S = Squarely face the person (or sit at an angle) to show you are fully present and engaged."
        },
        {
          id: 2,
          question: "What type of question typically begins with 'What,' 'How,' or 'Tell me about'?",
          options: [
            "Closed question",
            "Open-ended question",
            "Leading question",
            "Hypothetical question"
          ],
          correctAnswer: 1,
          explanation: "Open-ended questions begin with What, How, Tell me about, Describe, etc., encouraging elaboration and exploration."
        },
        {
          id: 3,
          question: "What is the difference between paraphrasing and reflecting feelings?",
          options: [
            "Paraphrasing restates content, reflecting feelings identifies emotions",
            "Paraphrasing is shorter, reflecting feelings is longer",
            "Paraphrasing uses their words, reflecting feelings uses your words",
            "Paraphrasing is for facts, reflecting feelings is for opinions"
          ],
          correctAnswer: 0,
          explanation: "Paraphrasing restates the content/message in your own words, while reflecting feelings identifies and names emotions."
        },
        {
          id: 4,
          question: "What does the 'L' stand for in the SOLER model?",
          options: [
            "Listen carefully",
            "Look interested",
            "Lean slightly forward",
            "Lower your voice"
          ],
          correctAnswer: 2,
          explanation: "L = Lean slightly forward to show interest and engagement (without invading personal space)."
        },
        {
          id: 5,
          question: "Which is an example of a minimal encourager?",
          options: [
            "Giving advice",
            "Nodding and saying 'mm-hmm'",
            "Asking multiple questions",
            "Sharing your own experience"
          ],
          correctAnswer: 1,
          explanation: "Minimal encouragers are small verbal and nonverbal cues like nodding, 'mm-hmm,' 'I see' that show you're listening without interrupting."
        },
        {
          id: 6,
          question: "What is 'mind reading' as a listening barrier?",
          options: [
            "Actually reading the person's mind",
            "Assuming you know what they mean without checking",
            "Reading about psychology theories",
            "Predicting what they will say next"
          ],
          correctAnswer: 1,
          explanation: "Mind reading is assuming you understand what the person means without checking your understanding, which can lead to misunderstandings."
        },
        {
          id: 7,
          question: "What type of question would 'Did that happen yesterday?' be classified as?",
          options: [
            "Open-ended question",
            "Closed question",
            "Circular question",
            "Reflective question"
          ],
          correctAnswer: 1,
          explanation: "This is a closed question because it can be answered with yes/no or specific fact, not encouraging elaboration."
        },
        {
          id: 8,
          question: "What is the purpose of summarizing in active listening?",
          options: [
            "To show how smart you are",
            "To take control of the conversation",
            "To organize thoughts and show progress",
            "To end the conversation quickly"
          ],
          correctAnswer: 2,
          explanation: "Summarizing pulls together key points, shows you've been listening, organizes thoughts, and can transition to new topics."
        },
        {
          id: 9,
          question: "What does the 'E' stand for in the SOLER model?",
          options: [
            "Engage fully",
            "Eye contact",
            "Express empathy",
            "Encourage talking"
          ],
          correctAnswer: 1,
          explanation: "E = Eye contact (appropriate and culturally sensitive) to show attention and connection."
        },
        {
          id: 10,
          question: "What is 'rehearsing' as a listening barrier?",
          options: [
            "Practicing counseling skills",
            "Planning your response while the person is talking",
            "Repeating what the person said",
            "Preparing for future sessions"
          ],
          correctAnswer: 1,
          explanation: "Rehearsing means planning what you'll say next instead of fully listening to what the person is saying now."
        },
        {
          id: 11,
          question: "What are 'door openers' in active listening?",
          options: [
            "Physical doors to private rooms",
            "Invitations to talk more about a topic",
            "Questions that open up new topics",
            "Statements that close off conversation"
          ],
          correctAnswer: 1,
          explanation: "Door openers are invitations to elaborate, like 'Would you like to tell me more about that?' or 'What was that like for you?'"
        },
        {
          id: 12,
          question: "What is an appropriate way to check your paraphrasing accuracy?",
          options: [
            "Assume you're always right",
            "Say 'So what I'm hearing is...' and ask for correction",
            "Just move on to the next topic",
            "Ask someone else if you understood correctly"
          ],
          correctAnswer: 1,
          explanation: "End paraphrasing with invitations like 'So what I'm hearing is... Is that right?' or 'Did I understand you correctly?'"
        },
        {
          id: 13,
          question: "What does the 'R' stand for in the SOLER model?",
          options: [
            "Respond quickly",
            "Relaxed",
            "Remember details",
            "Respectful attitude"
          ],
          correctAnswer: 1,
          explanation: "R = Relaxed - being calm and comfortable models calmness and creates a safe atmosphere."
        },
        {
          id: 14,
          question: "What are circular questions?",
          options: [
            "Questions that go around in circles",
            "Questions that explore relationships and different perspectives",
            "Questions asked in a circular seating arrangement",
            "Questions repeated multiple times"
          ],
          correctAnswer: 1,
          explanation: "Circular questions explore relationships, different perspectives (how others see things), and systemic connections."
        },
        {
          id: 15,
          question: "What is 'filtering' as a listening barrier?",
          options: [
            "Using a water filter",
            "Only hearing what you want or expect to hear",
            "Cleaning up language",
            "Removing emotional content"
          ],
          correctAnswer: 1,
          explanation: "Filtering means only paying attention to parts that confirm your expectations or interests while ignoring other information."
        },
        {
          id: 16,
          question: "What is the purpose of reflecting feelings?",
          options: [
            "To tell the person how they should feel",
            "To identify and name emotions to validate and clarify them",
            "To share how you feel about what they said",
            "To analyze why they feel that way"
          ],
          correctAnswer: 1,
          explanation: "Reflecting feelings involves identifying and naming emotions to help the person recognize, validate, and explore their feelings."
        },
        {
          id: 17,
          question: "What does the 'O' stand for in the SOLER model?",
          options: [
            "Open posture",
            "Observant",
            "Organized thoughts",
            "Outward focused"
          ],
          correctAnswer: 0,
          explanation: "O = Open posture (uncrossed arms, hands visible) showing receptiveness and availability."
        },
        {
          id: 18,
          question: "What is an example of an external listening barrier?",
          options: [
            "Daydreaming",
            "Background noise",
            "Mind reading",
            "Judging"
          ],
          correctAnswer: 1,
          explanation: "External barriers are environmental factors like noise, interruptions, discomfort, or time pressure that distract from listening."
        },
        {
          id: 19,
          question: "How should silence be used in active listening?",
          options: [
            "Avoided as much as possible",
            "Used to make the person uncomfortable",
            "Allowed for thinking time and processing",
            "Only used when you don't know what to say"
          ],
          correctAnswer: 2,
          explanation: "Comfortable silence allows thinking time, processing of emotions, and space for the person to continue at their own pace."
        },
        {
          id: 20,
          question: "What percentage of communication is estimated to be nonverbal?",
          options: [
            "30-40%",
            "50-60%",
            "70-80%",
            "90-100%"
          ],
          correctAnswer: 2,
          explanation: "Research suggests 70-80% of communication is nonverbal (body language, tone, facial expressions), making attending behaviors crucial."
        }
      ]
    },
    {
      id: 3,
      title: "Understanding Emotions and Feelings",
      content: `# Module 3: Understanding Emotions and Feelings

## Navigating the Emotional Landscape

This module explores the nature of emotions, how to identify them, and how to help others process feelings effectively.

### **1. Basic Emotions Theory**
Psychologist Paul Ekman identified **six basic emotions** that are universal across cultures:
1. **Happiness**: Joy, contentment, satisfaction
2. **Sadness**: Grief, sorrow, disappointment
3. **Fear**: Anxiety, worry, terror
4. **Anger**: Frustration, irritation, rage
5. **Surprise**: Shock, astonishment (can be positive or negative)
6. **Disgust**: Revulsion, distaste, contempt

**Emotion vs. Feeling**:
- **Emotion**: Automatic physiological response (hardwired, quick)
- **Feeling**: Conscious experience of emotion (processed, slower)
- **Example**: Emotion = heart racing (fear response), Feeling = "I'm scared"

**Primary vs. Secondary Emotions**:
- **Primary emotions**: Immediate reactions to events (hurt, fear, joy)
- **Secondary emotions**: Reactions to primary emotions (anger about being hurt, guilt about feeling joy)
- **Example**: Someone insults you → Primary = hurt → Secondary = anger at being hurt

### **2. The Function of Emotions**
**Emotions serve important functions**:
- **Communication**: Expressing needs and states to others
- **Motivation**: Driving action and decision-making
- **Survival**: Alerting to danger or opportunity
- **Social bonding**: Creating connections with others
- **Self-understanding**: Providing information about needs and values

**Common emotion myths**:
- Myth: "Some emotions are bad" (All emotions have value)
- Myth: "Strong people don't show emotions" (Authenticity requires emotional expression)
- Myth: "Time heals all emotional wounds" (Processing is needed, not just time)
- Myth: "Thinking positively eliminates negative emotions" (Suppression often backfires)

**The emotion timeline**:
1. **Trigger**: Event or thought that sparks emotion
2. **Sensation**: Physical feelings in the body
3. **Interpretation**: Brain makes meaning of sensations
4. **Expression**: Outward showing of emotion
5. **Regulation**: Managing intensity and duration

### **3. Identifying Emotions in Others**
**Verbal cues** to listen for:
- **Emotion words**: "I feel angry/sad/happy/anxious"
- **Metaphors**: "I feel like I'm carrying the weight of the world"
- **Intensity indicators**: "I'm absolutely furious" vs. "I'm a little annoyed"
- **Contradictions**: Words saying one thing, tone saying another

**Nonverbal cues** to observe:
- **Facial expressions**: Micro-expressions (brief, involuntary)
- **Body language**: Posture, gestures, fidgeting
- **Vocal qualities**: Tone, pace, volume, pitch
- **Physiological signs**: Breathing rate, skin color, sweating

**Asking about emotions effectively**:
- **Open invitations**: "How are you feeling about that?"
- **Specific inquiries**: "What emotion comes up when you think about that?"
- **Scale questions**: "On a scale of 1-10, how strong is that feeling?"
- **Metaphor exploration**: "If that feeling had a color/shape/texture, what would it be?"

### **4. Helping with Emotional Processing**
**The emotion processing stages**:
1. **Awareness**: Noticing the emotion is present
2. **Acceptance**: Allowing the emotion without judgment
3. **Identification**: Naming the specific emotion
4. **Understanding**: Exploring causes and meanings
5. **Expression**: Healthy outward expression
6. **Integration**: Learning from the experience

**Validating emotions** (communicating they make sense):
- **Simple validation**: "That sounds really difficult"
- **Complex validation**: "Given what you've been through, that reaction makes complete sense"
- **Radical validation**: Accepting even emotions that seem "irrational"
- **Avoid invalidation**: "Don't feel that way," "It's not that bad," "You shouldn't be upset"

**Emotion regulation techniques** to teach:
- **Grounding**: 5-4-3-2-1 technique (5 things you see, 4 you feel, 3 you hear, 2 you smell, 1 you taste)
- **Breathing**: Box breathing (inhale 4, hold 4, exhale 4, hold 4)
- **Mindfulness**: Observing emotions without getting swept away
- **Physical release**: Exercise, progressive muscle relaxation
- **Creative expression**: Writing, art, music

### **5. Common Emotional Challenges**
**Emotional avoidance patterns**:
- **Intellectualizing**: Talking about emotions theoretically without feeling them
- **Minimizing**: Downplaying the importance of emotions
- **Distracting**: Keeping busy to avoid feeling
- **Substituting**: Expressing one emotion (anger) to avoid another (sadness)
- **Numbing**: Using substances or behaviors to dull emotions

**Working with intense emotions**:
- **Safety first**: Ensure physical and emotional safety
- **De-escalation**: Lower arousal before processing (calm breathing, quiet space)
- **Containment**: Temporary holding of emotions until safe to process
- **Titration**: Processing small amounts at a time, not all at once
- **Resourcing**: Identifying strengths and supports before diving deep

**Cultural considerations in emotional expression**:
- **Display rules**: Cultural norms about which emotions to show and when
- **Collectivist vs. individualist**: Different values around emotional expression
- **Gender expectations**: Different emotional expression norms by gender
- **Historical trauma**: Collective emotional experiences affecting groups`,
      
      completed: false,
      quiz: [
        {
          id: 1,
          question: "How many basic universal emotions did Paul Ekman identify?",
          options: [
            "4 basic emotions",
            "6 basic emotions",
            "8 basic emotions",
            "10 basic emotions"
          ],
          correctAnswer: 1,
          explanation: "Paul Ekman identified 6 basic emotions that appear to be universal across cultures: happiness, sadness, fear, anger, surprise, disgust."
        },
        {
          id: 2,
          question: "What is the difference between emotion and feeling?",
          options: [
            "Emotion is physical, feeling is mental",
            "Emotion is automatic response, feeling is conscious experience",
            "Emotion is short-term, feeling is long-term",
            "Emotion is visible, feeling is invisible"
          ],
          correctAnswer: 1,
          explanation: "Emotion is the automatic physiological response, while feeling is the conscious experience and interpretation of that emotion."
        },
        {
          id: 3,
          question: "What are secondary emotions?",
          options: [
            "Less important emotions",
            "Reactions to primary emotions",
            "Emotions felt by others",
            "Emotions that come second in sequence"
          ],
          correctAnswer: 1,
          explanation: "Secondary emotions are emotional reactions to primary emotions (e.g., anger about feeling hurt, guilt about feeling joy)."
        },
        {
          id: 4,
          question: "Which is NOT one of the six basic emotions?",
          options: [
            "Happiness",
            "Sadness",
            "Anxiety",
            "Surprise"
          ],
          correctAnswer: 2,
          explanation: "Anxiety is considered a variation or subtype of fear, not one of the six basic universal emotions."
        },
        {
          id: 5,
          question: "What is the first stage in emotion processing?",
          options: [
            "Expression",
            "Awareness",
            "Understanding",
            "Acceptance"
          ],
          correctAnswer: 1,
          explanation: "Awareness (noticing the emotion is present) is the necessary first stage before any processing can occur."
        },
        {
          id: 6,
          question: "What does 'validating emotions' mean?",
          options: [
            "Telling someone their emotions are correct",
            "Communicating that emotions make sense given the situation",
            "Approving of how someone expresses emotions",
            "Measuring the intensity of emotions"
          ],
          correctAnswer: 1,
          explanation: "Validation communicates that emotions make sense and are understandable given the person's experience and perspective."
        },
        {
          id: 7,
          question: "What is 'intellectualizing' as an emotional avoidance pattern?",
          options: [
            "Being very smart about emotions",
            "Talking about emotions theoretically without feeling them",
            "Reading psychology books",
            "Analyzing others' emotions"
          ],
          correctAnswer: 1,
          explanation: "Intellectualizing involves discussing emotions in abstract, theoretical terms while avoiding actually experiencing the feelings."
        },
        {
          id: 8,
          question: "What is the 5-4-3-2-1 grounding technique?",
          options: [
            "A breathing exercise",
            "A method to notice 5 things you see, 4 you feel, 3 you hear, 2 you smell, 1 you taste",
            "Counting down from 5 to manage anger",
            "A 5-step emotion processing model"
          ],
          correctAnswer: 1,
          explanation: "The 5-4-3-2-1 grounding technique engages the senses to bring attention to the present moment when emotions feel overwhelming."
        },
        {
          id: 9,
          question: "What are 'display rules' regarding emotions?",
          options: [
            "Rules about displaying emotion charts",
            "Cultural norms about which emotions to show and when",
            "Rules for emotional expression in therapy",
            "Guidelines for expressing emotions professionally"
          ],
          correctAnswer: 1,
          explanation: "Display rules are cultural norms that dictate appropriate emotional expression - what emotions to show, to whom, and in what situations."
        },
        {
          id: 10,
          question: "What is box breathing?",
          options: [
            "Breathing in a square pattern",
            "Inhale 4, hold 4, exhale 4, hold 4",
            "Breathing while thinking outside the box",
            "A breathing exercise for anger management"
          ],
          correctAnswer: 1,
          explanation: "Box breathing involves inhaling for 4 counts, holding for 4, exhaling for 4, and holding for 4 - a calming breath pattern."
        },
        {
          id: 11,
          question: "Which emotion is considered both positive and negative?",
          options: [
            "Happiness",
            "Surprise",
            "Anger",
            "Disgust"
          ],
          correctAnswer: 1,
          explanation: "Surprise can be positive (pleasant surprise) or negative (shock), depending on the context and interpretation."
        },
        {
          id: 12,
          question: "What does 'titration' mean in emotional processing?",
          options: [
            "Measuring emotion intensity",
            "Processing small amounts at a time, not all at once",
            "Balancing different emotions",
            "Neutralizing strong emotions"
          ],
          correctAnswer: 1,
          explanation: "Titration involves processing emotions in small, manageable amounts rather than overwhelming the person with too much at once."
        },
        {
          id: 13,
          question: "What is an example of emotional invalidation?",
          options: [
            "I understand why you feel that way",
            "Don't feel that way, it's not that bad",
            "That sounds really difficult",
            "Your feelings make sense given what happened"
          ],
          correctAnswer: 1,
          explanation: "Telling someone 'don't feel that way' or 'it's not that bad' invalidates their emotional experience."
        },
        {
          id: 14,
          question: "What are 'micro-expressions'?",
          options: [
            "Very small written expressions",
            "Brief, involuntary facial expressions revealing true emotions",
            "Subtle verbal cues about emotions",
            "Minimal emotional expressions"
          ],
          correctAnswer: 1,
          explanation: "Micro-expressions are brief, involuntary facial expressions that reveal true emotions, often lasting less than half a second."
        },
        {
          id: 15,
          question: "What is 'containment' in working with intense emotions?",
          options: [
            "Keeping emotions completely hidden",
            "Temporary holding of emotions until safe to process",
            "Putting emotions in a mental box",
            "Controlling others' emotional expressions"
          ],
          correctAnswer: 1,
          explanation: "Containment involves temporarily holding or managing intense emotions until there is enough safety and support to process them."
        },
        {
          id: 16,
          question: "Which is a function of emotions?",
          options: [
            "Making life more complicated",
            "Communication, motivation, survival, social bonding",
            "Only causing problems in relationships",
            "Something to eliminate for better decision-making"
          ],
          correctAnswer: 1,
          explanation: "Emotions serve important functions including communication, motivation, survival alerts, social bonding, and self-understanding."
        },
        {
          id: 17,
          question: "What does 'radical validation' mean?",
          options: [
            "Extreme approval of all emotions",
            "Accepting even emotions that seem irrational",
            "Validating only reasonable emotions",
            "Strongly agreeing with the person's emotions"
          ],
          correctAnswer: 1,
          explanation: "Radical validation involves accepting and validating emotions even when they don't seem logical or rational from an outside perspective."
        },
        {
          id: 18,
          question: "What is 'numbing' as an emotional avoidance pattern?",
          options: [
            "Making emotions less intense through healthy means",
            "Using substances or behaviors to dull emotions",
            "Forgetting about emotional experiences",
            "Making emotions go completely away"
          ],
          correctAnswer: 1,
          explanation: "Numbing involves using substances (alcohol, drugs) or behaviors (overworking, binge-watching) to avoid feeling emotions."
        },
        {
          id: 19,
          question: "What scale question can help identify emotion intensity?",
          options: [
            "On a scale of 1-10, how strong is that feeling?",
            "How big is your emotion?",
            "What number would you give your emotion?",
            "Rate your emotion from small to large"
          ],
          correctAnswer: 0,
          explanation: "Asking 'On a scale of 1-10, how strong is that feeling?' helps quantify emotion intensity and track changes over time."
        },
        {
          id: 20,
          question: "What is the emotion timeline?",
          options: [
            "How long emotions last",
            "Trigger → Sensation → Interpretation → Expression → Regulation",
            "The history of emotion theory",
            "When different emotions typically occur"
          ],
          correctAnswer: 1,
          explanation: "The emotion timeline shows the sequence from trigger to sensation, interpretation, expression, and regulation of emotions."
        }
      ]
    },
    {
      id: 4,
      title: "Basic Counseling Frameworks",
      content: `# Module 4: Basic Counseling Frameworks

## Structured Approaches to Helping

This module introduces foundational counseling models and frameworks that guide effective helping conversations.

### **1. Person-Centered Approach**
Developed by **Carl Rogers**, this humanistic approach emphasizes:

**Core principles**:
- **Non-directive**: The helper follows the person's lead, doesn't give advice
- **Growth-oriented**: Belief that people naturally move toward growth and healing
- **Present-focused**: Emphasis on current experience and feelings
- **Holistic**: Viewing the person as a whole, not just problems

**Three necessary and sufficient conditions** (for therapeutic change):
1. **Congruence**: Helper is genuine, authentic, transparent
2. **Empathy**: Understanding the person's internal frame of reference
3. **Unconditional Positive Regard**: Accepting the person without judgment

**Key techniques**:
- **Reflection**: Mirroring feelings and content
- **Summarization**: Pulling together themes
- **Clarification**: Helping articulate thoughts and feelings
- **Open questions**: Encouraging exploration

**When to use**: Building trust, exploring feelings, when the person is capable of self-direction

### **2. Solution-Focused Brief Therapy (SFBT)**
Developed by **Steve de Shazer and Insoo Kim Berg**, this future-focused approach:

**Core principles**:
- **Solution-focused, not problem-focused**: Emphasis on what's working
- **Future-oriented**: Looking toward desired future rather than analyzing past
- **Strength-based**: Building on existing resources and successes
- **Brief**: Designed to be time-limited (typically 5-8 sessions)

**Key techniques**:
- **Miracle question**: "If a miracle happened overnight and your problem was solved, what would be different?"
- **Scaling questions**: "On a scale of 1-10, where are you now? What would one point higher look like?"
- **Exception finding**: "When doesn't the problem happen? What's different then?"
- **Coping questions**: "How have you managed to cope so far?"

**The SFBT process**:
1. **Describing the problem** (briefly)
2. **Developing a well-formed goal** (positive, concrete, meaningful)
3. **Exploring exceptions** (times when problem isn't happening)
4. **End-of-session feedback** (compliments and suggestions)
5. **Evaluating progress** (what's better?)

**When to use**: Goal-setting, building motivation, when people feel stuck, time-limited situations

### **3. Cognitive Behavioral Framework**
Based on the work of **Aaron Beck and Albert Ellis**, this approach focuses on:

**Core principle**: Thoughts → Feelings → Behaviors (all interconnected)

**The ABC model** (Albert Ellis):
- **A**: Activating event (situation)
- **B**: Beliefs (thoughts about the event)
- **C**: Consequences (emotional and behavioral results)
- **D**: Disputing (challenging unhelpful beliefs)
- **E**: Effective new beliefs

**Common cognitive distortions** (unhelpful thinking patterns):
1. **All-or-nothing thinking**: Black/white, no middle ground
2. **Overgeneralization**: One event becomes a never-ending pattern
3. **Mental filter**: Focusing only on negatives, filtering out positives
4. **Catastrophizing**: Expecting the worst possible outcome
5. **Personalization**: Blaming yourself for things outside your control

**Basic CBT techniques**:
- **Thought records**: Tracking situations, thoughts, feelings, behaviors
- **Cognitive restructuring**: Identifying and challenging unhelpful thoughts
- **Behavioral experiments**: Testing beliefs through action
- **Activity scheduling**: Planning rewarding activities

**When to use**: Anxiety, depression, changing thinking patterns, when thoughts are clearly problematic

### **4. The GROW Model**
A coaching framework developed by **John Whitmore**:

**G: Goal** (What do you want?)
- Specific, measurable, achievable, relevant, time-bound
- Exploration of multiple possibilities
- Commitment to the goal

**R: Reality** (Where are you now?)
- Current situation assessment
- Obstacles and resources identification
- Objective perspective on reality

**O: Options** (What could you do?)
- Brainstorming possibilities
- Creative thinking, no evaluation initially
- Considering multiple pathways

**W: Will** (What will you do?)
- Committing to specific actions
- Planning next steps
- Establishing accountability

**Application steps**:
1. Establish coaching relationship and rapport
2. Work through GROW stages systematically
3. Use powerful questions for each stage
4. Support accountability and follow-up

**When to use**: Coaching situations, goal achievement, decision-making, performance improvement

### **5. Integrative Approach**
**Combining frameworks** based on:
- **Person needs**: Different approaches for different situations
- **Helper style**: Working within your natural strengths
- **Cultural fit**: Approaches that match the person's worldview
- **Evidence base**: What research supports for specific concerns

**The helping relationship as foundation**:
- Regardless of approach, relationship quality predicts outcomes
- Techniques are tools used within relationship context
- Flexibility to shift approaches as needed
- Ongoing assessment of what's working

**Developing your personal approach**:
- **Self-awareness**: Understanding your natural style
- **Supervised practice**: Trying different approaches with guidance
- **Continuing education**: Learning multiple frameworks
- **Reflective practice**: Considering what works and why`,
      
      completed: false,
      quiz: [
        {
          id: 1,
          question: "Who developed the Person-Centered Approach?",
          options: [
            "Aaron Beck",
            "Carl Rogers",
            "Steve de Shazer",
            "John Whitmore"
          ],
          correctAnswer: 1,
          explanation: "Carl Rogers developed the Person-Centered (Client-Centered) Approach, emphasizing congruence, empathy, and unconditional positive regard."
        },
        {
          id: 2,
          question: "What is the 'miracle question' in Solution-Focused Brief Therapy?",
          options: [
            "Asking if miracles are possible",
            "\"If a miracle happened overnight and your problem was solved, what would be different?\"",
            "Questioning miraculous recoveries",
            "Asking about religious beliefs in miracles"
          ],
          correctAnswer: 1,
          explanation: "The miracle question helps people imagine a future without the problem and identify concrete changes that would indicate improvement."
        },
        {
          id: 3,
          question: "What does the 'B' stand for in the ABC model of CBT?",
          options: [
            "Behavior",
            "Beliefs",
            "Background",
            "Balance"
          ],
          correctAnswer: 1,
          explanation: "In Ellis's ABC model: A = Activating event, B = Beliefs (thoughts about event), C = Consequences (emotional/behavioral results)."
        },
        {
          id: 4,
          question: "What does the 'G' stand for in the GROW model?",
          options: [
            "Growth",
            "Goal",
            "Guidance",
            "Gain"
          ],
          correctAnswer: 1,
          explanation: "In the GROW coaching model: G = Goal, R = Reality, O = Options, W = Will (or Way forward)."
        },
        {
          id: 5,
          question: "Which approach is considered 'non-directive'?",
          options: [
            "Cognitive Behavioral Therapy",
            "Person-Centered Approach",
            "Solution-Focused Brief Therapy",
            "The GROW Model"
          ],
          correctAnswer: 1,
          explanation: "The Person-Centered Approach is non-directive, following the person's lead rather than directing the conversation or giving advice."
        },
        {
          id: 6,
          question: "What are 'cognitive distortions'?",
          options: [
            "Memory problems",
            "Unhelpful thinking patterns",
            "Visual illusions",
            "Confusing thoughts"
          ],
          correctAnswer: 1,
          explanation: "Cognitive distortions are systematic errors in thinking that contribute to emotional distress, such as all-or-nothing thinking or catastrophizing."
        },
        {
          id: 7,
          question: "What is 'exception finding' in SFBT?",
          options: [
            "Finding exceptions to rules",
            "Identifying times when the problem doesn't happen",
            "Looking for special circumstances",
            "Finding legal exceptions"
          ],
          correctAnswer: 1,
          explanation: "Exception finding involves exploring times when the problem is less severe or absent, to identify what's different then and build on those successes."
        },
        {
          id: 8,
          question: "What are the three necessary and sufficient conditions in Person-Centered Approach?",
          options: [
            "Training, Experience, Certification",
            "Congruence, Empathy, Unconditional Positive Regard",
            "Listening, Questioning, Reflecting",
            "Diagnosis, Treatment Plan, Evaluation"
          ],
          correctAnswer: 1,
          explanation: "Rogers believed congruence (genuineness), empathy (understanding), and unconditional positive regard (acceptance) were necessary and sufficient for therapeutic change."
        },
        {
          id: 9,
          question: "What does 'scaling questions' involve in SFBT?",
          options: [
            "Weighing pros and cons",
            "\"On a scale of 1-10, where are you now?\"",
            "Measuring problem severity",
            "Comparing different problems"
          ],
          correctAnswer: 1,
          explanation: "Scaling questions use numerical scales to assess current status, track progress, and identify what small improvements would look like."
        },
        {
          id: 10,
          question: "What is 'all-or-nothing thinking' as a cognitive distortion?",
          options: [
            "Thinking in black/white terms with no middle ground",
            "Making complete decisions quickly",
            "Having strong opinions",
            "Being very decisive"
          ],
          correctAnswer: 0,
          explanation: "All-or-nothing thinking (also called black-and-white thinking) sees things in extreme categories with no shades of gray or middle ground."
        },
        {
          id: 11,
          question: "Which approach is most future-focused?",
          options: [
            "Person-Centered Approach",
            "Solution-Focused Brief Therapy",
            "Cognitive Behavioral Therapy",
            "Psychodynamic Therapy"
          ],
          correctAnswer: 1,
          explanation: "Solution-Focused Brief Therapy is explicitly future-focused, emphasizing desired outcomes rather than analyzing past problems."
        },
        {
          id: 12,
          question: "What does the 'W' stand for in the GROW model?",
          options: [
            "Work",
            "Will (or Way forward)",
            "Wisdom",
            "Winning"
          ],
          correctAnswer: 1,
          explanation: "W = Will (or Way forward) - committing to specific actions and establishing accountability for implementation."
        },
        {
          id: 13,
          question: "What is 'cognitive restructuring' in CBT?",
          options: [
            "Rebuilding memory",
            "Identifying and challenging unhelpful thoughts",
            "Restructuring daily schedule",
            "Changing brain structure"
          ],
          correctAnswer: 1,
          explanation: "Cognitive restructuring involves identifying unhelpful thoughts, examining evidence for and against them, and developing more balanced alternatives."
        },
        {
          id: 14,
          question: "How many sessions is SFBT typically designed for?",
          options: [
            "1-2 sessions",
            "5-8 sessions",
            "12-20 sessions",
            "Long-term, open-ended"
          ],
          correctAnswer: 1,
          explanation: "Solution-Focused Brief Therapy is designed to be brief, typically 5-8 sessions, focusing on rapid change and solution-building."
        },
        {
          id: 15,
          question: "What does 'unconditional positive regard' mean?",
          options: [
            "Always agreeing with the person",
            "Accepting the person without judgment",
            "Providing constant praise",
            "Approving of all behaviors"
          ],
          correctAnswer: 1,
          explanation: "Unconditional positive regard means accepting and valuing the person as they are, without conditions or judgment, while still possibly challenging specific behaviors."
        },
        {
          id: 16,
          question: "What is 'catastrophizing' as a cognitive distortion?",
          options: [
            "Making small problems into catastrophes",
            "Expecting the worst possible outcome",
            "Overreacting to minor issues",
            "Creating drama unnecessarily"
          ],
          correctAnswer: 1,
          explanation: "Catastrophizing involves expecting the worst possible outcome, often jumping from a minor concern to a disastrous conclusion."
        },
        {
          id: 17,
          question: "What are 'coping questions' in SFBT?",
          options: [
            "Questions about coping mechanisms",
            "\"How have you managed to cope so far?\"",
            "Questions about stress management",
            "Inquiries about survival strategies"
          ],
          correctAnswer: 1,
          explanation: "Coping questions highlight strengths and resources by asking how the person has managed to cope with difficulties so far."
        },
        {
          id: 18,
          question: "What does the 'R' in GROW model involve?",
          options: [
            "Resources",
            "Reality (current situation assessment)",
            "Reflection",
            "Readiness"
          ],
          correctAnswer: 1,
          explanation: "R = Reality - objectively assessing the current situation, identifying obstacles and resources, and understanding where things stand now."
        },
        {
          id: 19,
          question: "Which approach emphasizes the connection between thoughts, feelings, and behaviors?",
          options: [
            "Person-Centered Approach",
            "Cognitive Behavioral Framework",
            "Solution-Focused Brief Therapy",
            "The GROW Model"
          ],
          correctAnswer: 1,
          explanation: "The Cognitive Behavioral Framework explicitly focuses on the interconnectedness of thoughts, feelings, and behaviors."
        },
        {
          id: 20,
          question: "What is a 'thought record' in CBT?",
          options: [
            "A diary of all thoughts",
            "A worksheet tracking situations, thoughts, feelings, and behaviors",
            "Recording therapy sessions",
            "A list of positive thoughts"
          ],
          correctAnswer: 1,
          explanation: "Thought records are structured worksheets that help people track situations, automatic thoughts, resulting emotions, and behaviors to identify patterns."
        }
      ]
    },
    {
      id: 5,
      title: "Crisis Intervention Basics",
      content: `# Module 5: Crisis Intervention Basics

## Providing Immediate Support in Difficult Situations

This module covers fundamental skills for supporting people during crises, emergencies, and acute distress.

### **1. Understanding Crisis**
**What is a crisis?**
- **Subjective experience**: Situation perceived as overwhelming
- **Temporary state**: Typically lasts 4-6 weeks if unaddressed
- **Three components**: 1) Hazardous event, 2) Vulnerable state, 3) Inadequate coping
- **Not the same as emergency**: Crisis is psychological, emergency may be physical

**Types of crises**:
- **Developmental**: Normal life transitions (adolescence, retirement)
- **Situational**: Unexpected events (job loss, accident, diagnosis)
- **Existential**: Questions of meaning, purpose, values
- **Traumatic**: Overwhelming events threatening safety
- **Psychiatric**: Mental health emergencies (suicidal thoughts, psychosis)

**Crisis reaction phases** (Caplan, 1964):
1. **Impact phase**: Initial shock, disbelief, numbness
2. **Recoil phase**: Emotional turmoil, confusion, searching for meaning
3. **Adjustment phase**: Beginning to adapt and cope
4. **Reconstruction phase**: Integrating experience, moving forward

### **2. Basic Crisis Intervention Model**
**The ABC model of crisis intervention** (Kanel, 2015):

**A: Achieving rapport**
- **Quick connection**: Establishing trust rapidly
- **Active listening**: Demonstrating understanding immediately
- **Nonjudgmental stance**: Accepting whatever is shared
- **Calm presence**: Modeling stability amid chaos

**B: Identifying the problem**
- **Crisis exploration**: What happened? When? How?
- **Safety assessment**: Immediate danger to self or others?
- **Emotional state**: Current feelings and reactions
- **Coping assessment**: What has been tried? What usually helps?

**C: Coping**
- **Exploring alternatives**: Brainstorming possible responses
- **Developing action plan**: Concrete, manageable steps
- **Mobilizing support**: Identifying who can help
- **Providing information**: Resources, referrals, education

### **3. Safety Assessment and Management**
**Suicide risk assessment** (basic screening):
- **Ideation**: Thoughts of suicide ("Have you had thoughts of ending your life?")
- **Plan**: Specific method ("Do you have a plan for how you would do this?")
- **Means**: Access to method ("Do you have access to [the method]?")
- **Intent**: Determination to act ("How likely do you think you are to act on these thoughts?")
- **Protective factors**: Reasons for living, support systems

**Risk levels and responses**:
- **Low risk**: Thoughts but no plan/intent → Safety planning, follow-up
- **Moderate risk**: Plan but no immediate intent → Close monitoring, increased support
- **High risk**: Plan, means, and intent → Immediate intervention, don't leave alone

**Safety planning components**:
1. **Warning signs**: What indicates crisis is building
2. **Internal coping strategies**: What to do to calm/distract self
3. **Social supports**: Who to contact for help
4. **Professional supports**: Crisis lines, emergency contacts
5. **Means restriction**: Making environment safer
6. **Reasons for living**: What makes life worth living

### **4. Immediate Intervention Skills**
**De-escalation techniques**:
- **Remain calm**: Your calmness can help regulate their arousal
- **Give space**: Allow physical and emotional space
- **Use calm voice**: Slow, soft, steady tone
- **Simple language**: Clear, concise statements
- **Offer choices**: Within appropriate limits ("Would you like to sit or stand?")
- **Focus on present**: Bring attention to current moment, not past triggers

**Psychological First Aid (PFA) core actions**:
1. **Contact and engagement**: Initiating contact respectfully
2. **Safety and comfort**: Ensuring physical/emotional safety
3. **Stabilization**: Calming overwhelmed individuals
4. **Information gathering**: Identifying immediate needs
5. **Practical assistance**: Helping with concrete needs
6. **Connection with social supports**: Linking to loved ones
7. **Information on coping**: Providing education
8. **Linkage with services**: Referring to additional help

**Grounding techniques for acute distress**:
- **5-4-3-2-1**: Notice 5 things you see, 4 you feel, 3 you hear, 2 you smell, 1 you taste
- **Breath counting**: Inhale 1, exhale 2, up to 10 then repeat
- **Body awareness**: Notice sensations from feet upward
- **Object focus**: Describe an object in detail (color, texture, weight, temperature)

### **5. Limits and Referrals**
**Knowing your limits**:
- **Competence boundaries**: What you're trained to handle
- **Legal limitations**: What you're legally allowed to do
- **Emotional capacity**: When you're becoming overwhelmed
- **Time constraints**: When situation needs more time than available

**When to refer**:
- **Immediate danger**: Risk of harm to self or others
- **Beyond training**: Issues requiring specialized expertise
- **Need for medication**: Psychiatric evaluation needed
- **Legal involvement**: Situations requiring police or legal aid
- **Long-term needs**: Issues requiring ongoing therapy

**Making effective referrals**:
- **Warm handoffs**: Direct introduction when possible
- **Specific information**: Names, numbers, what to expect
- **Follow-up support**: Checking if connection was made
- **Multiple options**: Providing several referral sources
- **Normalizing**: Framing referral as additional support, not rejection

**Self-care after crisis work**:
- **Immediate debriefing**: Processing what happened
- **Emotional check-in**: Noticing your own reactions
- **Physical care**: Rest, nutrition, movement
- **Professional support**: Supervision or counseling if needed
- **Boundary setting**: Leaving work at work`,
      
      completed: false,
      quiz: [
        {
          id: 1,
          question: "How long does an unaddressed crisis typically last?",
          options: [
            "1-2 days",
            "1-2 weeks",
            "4-6 weeks",
            "3-6 months"
          ],
          correctAnswer: 2,
          explanation: "An unaddressed crisis typically lasts 4-6 weeks before either resolving, becoming chronic, or leading to breakdown."
        },
        {
          id: 2,
          question: "What does the 'A' stand for in the ABC model of crisis intervention?",
          options: [
            "Assessment",
            "Achieving rapport",
            "Action plan",
            "Acute intervention"
          ],
          correctAnswer: 1,
          explanation: "In Kanel's ABC model: A = Achieving rapport (establishing connection quickly), B = Identifying the problem, C = Coping."
        },
        {
          id: 3,
          question: "What is the first phase in crisis reaction according to Caplan?",
          options: [
            "Recoil phase",
            "Impact phase",
            "Adjustment phase",
            "Reconstruction phase"
          ],
          correctAnswer: 1,
          explanation: "Impact phase is first - initial shock, disbelief, numbness immediately after the crisis event."
        },
        {
          id: 4,
          question: "What are the three components of a crisis situation?",
          options: [
            "Person, Problem, Solution",
            "Hazardous event, Vulnerable state, Inadequate coping",
            "Thoughts, Feelings, Behaviors",
            "Past, Present, Future"
          ],
          correctAnswer: 1,
          explanation: "Crisis involves: 1) Hazardous event, 2) Vulnerable state of the person, 3) Inadequate coping resources to handle it."
        },
        {
          id: 5,
          question: "What does 'ideation' refer to in suicide risk assessment?",
          options: [
            "Having creative ideas",
            "Thoughts of suicide",
            "Making plans",
            "Having intentions"
          ],
          correctAnswer: 1,
          explanation: "Ideation refers to thoughts about suicide. Assessment questions include: \"Have you had thoughts of ending your life?\""
        },
        {
          id: 6,
          question: "What is Psychological First Aid (PFA)?",
          options: [
            "Medical first aid for psychological issues",
            "A set of core actions to help people in acute distress",
            "Psychological treatment for trauma",
            "First aid certification for mental health"
          ],
          correctAnswer: 1,
          explanation: "PFA is an evidence-informed approach with 8 core actions to reduce initial distress and promote adaptive functioning after crises."
        },
        {
          id: 7,
          question: "What risk level requires immediate intervention and not leaving the person alone?",
          options: [
            "Low risk",
            "Moderate risk",
            "High risk",
            "All risk levels"
          ],
          correctAnswer: 2,
          explanation: "High risk (plan, means, and intent) requires immediate intervention, continuous monitoring, and not leaving the person alone."
        },
        {
          id: 8,
          question: "What does the 5-4-3-2-1 grounding technique involve?",
          options: [
            "Counting down from 5",
            "Noticing 5 things you see, 4 you feel, 3 you hear, 2 you smell, 1 you taste",
            "5 breaths, 4 thoughts, 3 feelings, 2 actions, 1 goal",
            "5 minutes of breathing, 4 of stretching, 3 of listening, 2 of smelling, 1 of tasting"
          ],
          correctAnswer: 1,
          explanation: "The 5-4-3-2-1 technique engages all five senses to ground someone in the present moment during acute distress."
        },
        {
          id: 9,
          question: "What is a 'warm handoff' when making referrals?",
          options: [
            "A physically warm handshake",
            "Direct introduction to the referral source when possible",
            "Referring only to people you know well",
            "Making referrals with emotional warmth"
          ],
          correctAnswer: 1,
          explanation: "A warm handoff involves directly introducing the person to the referral source (e.g., making a three-way call) rather than just giving a phone number."
        },
        {
          id: 10,
          question: "Which is NOT one of the 8 core actions of Psychological First Aid?",
          options: [
            "Contact and engagement",
            "Safety and comfort",
            "Long-term psychotherapy",
            "Connection with social supports"
          ],
          correctAnswer: 2,
          explanation: "PFA focuses on immediate stabilization and support, not long-term therapy. The 8 actions are all short-term crisis response strategies."
        },
        {
          id: 11,
          question: "What is the difference between a crisis and an emergency?",
          options: [
            "Crisis is psychological, emergency may be physical",
            "Crisis is always more serious",
            "Emergency always involves danger",
            "They are the same thing"
          ],
          correctAnswer: 0,
          explanation: "A crisis is primarily a psychological experience of being overwhelmed, while an emergency may involve immediate physical danger requiring different response."
        },
        {
          id: 12,
          question: "What should you assess after 'ideation' in suicide risk screening?",
          options: [
            "Plan",
            "Past attempts",
            "Family history",
            "Depression level"
          ],
          correctAnswer: 0,
          explanation: "After ideation (thoughts), assess plan (specific method), then means (access to method), then intent (likelihood of acting)."
        },
        {
          id: 13,
          question: "What is 'means restriction' in safety planning?",
          options: [
            "Restricting access to lethal means",
            "Limiting coping mechanisms",
            "Reducing available resources",
            "Controlling environmental factors"
          ],
          correctAnswer: 0,
          explanation: "Means restriction involves making the environment safer by limiting access to lethal methods (e.g., locking up medications, removing firearms)."
        },
        {
          id: 14,
          question: "Which de-escalation technique involves offering limited choices?",
          options: [
            "Giving commands",
            "Offering choices within appropriate limits",
            "Making all decisions for the person",
            "Avoiding decision-making"
          ],
          correctAnswer: 1,
          explanation: "Offering limited, appropriate choices (\"Would you like to sit here or there?\") can help restore sense of control during crisis."
        },
        {
          id: 15,
          question: "What is a 'situational crisis'?",
          options: [
            "Crisis from normal development",
            "Unexpected events like job loss or accident",
            "Crisis about meaning and purpose",
            "Mental health emergency"
          ],
          correctAnswer: 1,
          explanation: "Situational crises result from unexpected, disruptive events like accidents, losses, diagnoses, or traumatic incidents."
        },
        {
          id: 16,
          question: "What does the 'B' in ABC crisis model involve?",
          options: [
            "Building solutions",
            "Identifying the problem",
            "Behavior modification",
            "Breathing exercises"
          ],
          correctAnswer: 1,
          explanation: "B = Identifying the problem - exploring what happened, assessing safety, understanding emotional state and coping attempts."
        },
        {
          id: 17,
          question: "What is the recoil phase of crisis reaction?",
          options: [
            "Initial shock and numbness",
            "Emotional turmoil and searching for meaning",
            "Beginning to adapt and cope",
            "Integrating experience and moving forward"
          ],
          correctAnswer: 1,
          explanation: "Recoil phase follows impact - characterized by emotional turmoil, confusion, and searching for understanding and meaning."
        },
        {
          id: 18,
          question: "What is NOT a key component of safety planning?",
          options: [
            "Warning signs",
            "Internal coping strategies",
            "Detailed autobiography",
            "Professional support contacts"
          ],
          correctAnswer: 2,
          explanation: "Safety planning focuses on immediate crisis management, not comprehensive life history. Key components are warning signs, coping strategies, supports, etc."
        },
        {
          id: 19,
          question: "When should you consider making a referral?",
          options: [
            "Only as a last resort",
            "When issues are beyond your training or capacity",
            "Whenever someone is in crisis",
            "Only for long-term issues"
          ],
          correctAnswer: 1,
          explanation: "Refer when issues are beyond your training, when there's immediate danger, when specialized expertise is needed, or when long-term support is required."
        },
        {
          id: 20,
          question: "What is important for self-care after crisis work?",
          options: [
            "Immediate debriefing and emotional check-in",
            "Ignoring your own reactions to stay strong",
            "Working longer hours to help more people",
            "Avoiding thinking about what happened"
          ],
          correctAnswer: 0,
          explanation: "Immediate debriefing, emotional check-in, physical care, professional support, and boundary setting are all important for helper self-care."
        }
      ]
    },
    {
      id: 6,
      title: "Applying Skills in Different Contexts",
      content: `# Module 6: Applying Skills in Different Contexts

## Practical Implementation of Counseling Skills

This final module focuses on applying counseling skills in various settings and developing your personal helping approach.

### **1. Skills Application Framework**
**The RESPOND model** for applying skills:

**R: Rapport Building**
- **First impressions**: Initial connection sets the tone
- **Cultural responsiveness**: Adapting to individual and cultural differences
- **Environment creation**: Setting up physical and emotional space
- **Contract setting**: Clarifying purpose, boundaries, expectations

**E: Exploring the Situation**
- **Open inquiry**: Beginning with broad, open questions
- **Active listening**: Demonstrating full attention and understanding
- **Story gathering**: Allowing the narrative to unfold naturally
- **Context understanding**: Considering broader life circumstances

**S: Specific Focus Development**
- **Theme identification**: Noticing patterns and key issues
- **Priority setting**: Collaboratively deciding what to address first
- **Goal clarification**: Making objectives clear and concrete
- **Resource identification**: Noticing strengths and supports

**P: Perspective Expansion**
- **Alternative viewing**: Exploring different ways of seeing the situation
- **Challenging constructively**: Gently questioning assumptions when helpful
- **Future focus**: Considering desired outcomes and possibilities
- **Solution brainstorming**: Generating options together

**O: Options and Planning**
- **Action development**: Creating specific, manageable steps
- **Realistic planning**: Considering practical constraints
- **Anticipating obstacles**: Preparing for potential challenges
- **Support mobilization**: Identifying who can help with implementation

**N: Next Steps Confirmation**
- **Commitment checking**: Ensuring buy-in to the plan
- **Timeline setting**: Establishing when actions will happen
- **Follow-up planning**: Scheduling check-ins or next contact
- **Documentation**: Recording key points when appropriate

**D: Departure and Debrief**
- **Summary review**: Recapping what was accomplished
- **Feedback exchange**: Sharing observations and appreciation
- **Emotional closure**: Acknowledging the relationship and work
- **Self-reflection**: Processing your own experience afterward

### **2. Application in Specific Settings**
**Workplace settings**:
- **Colleague support**: Listening to work-related stress
- **Manager conversations**: Addressing performance or personal issues
- **Conflict mediation**: Helping resolve workplace disputes
- **Boundaries**: Maintaining professionalism in work relationships
- **Referral awareness**: Knowing workplace EAP or HR resources

**Educational settings**:
- **Student conversations**: Academic or personal issues
- **Parent meetings**: Sensitive family discussions
- **Crisis response**: School-based emergencies
- **Developmental approach**: Age-appropriate communication
- **Confidentiality limits**: Legal requirements in educational settings

**Healthcare settings**:
- **Patient conversations**: Illness, treatment, prognosis discussions
- **Family meetings**: Complex medical decisions
- **Bad news delivery**: Sensitive information sharing
- **Interdisciplinary collaboration**: Working with healthcare teams
- **Medical ethics**: Navigating healthcare-specific ethical issues

**Community and volunteer settings**:
- **Peer support**: Mutual help relationships
- **Crisis hotlines**: Telephone or text-based support
- **Support groups**: Facilitating group helping
- **Resource navigation**: Connecting people to community services
- **Advocacy**: Supporting people in accessing rights or services

### **3. Cultural Adaptation of Skills**
**Cultural humility principles**:
- **Lifelong learning**: Recognizing you'll never know everything about other cultures
- **Critical self-reflection**: Examining your own biases and assumptions
- **Recognizing power imbalances**: Acknowledging privilege and power dynamics
- **Community partnership**: Collaborating with cultural communities

**Adapting communication styles**:
- **Direct vs. indirect**: Cultural differences in communication directness
- **Emotional expression**: Cultural norms about showing emotions
- **Silence interpretation**: Different meanings of pauses and silence
- **Nonverbal communication**: Cultural variations in gestures, eye contact, touch

**Addressing cultural differences explicitly**:
- **Asking about preferences**: "How would you like me to support you?"
- **Acknowledging differences**: "I realize my experience may be different from yours..."
- **Inviting correction**: "Please let me know if I misunderstand something cultural..."
- **Learning together**: "Help me understand what this means in your culture..."

**Working with interpreters**:
- **Speaking to the person, not interpreter**: Maintain eye contact with the person
- **Using short segments**: Speak in manageable chunks for interpretation
- **Checking understanding**: Ensure accurate interpretation of key points
- **Cultural mediation**: Recognizing interpreter may also provide cultural context

### **4. Developing Your Personal Style**
**Self-assessment questions**:
- **Natural strengths**: What comes easily to you in helping conversations?
- **Growth areas**: What skills need more development?
- **Comfort zones**: What types of situations or people do you feel most/least comfortable with?
- **Values alignment**: How does helping work align with your personal values?
- **Energy patterns**: When do you have most/least energy for helping work?

**Skill integration process**:
1. **Awareness**: Noticing what you're doing and how it's working
2. **Experimentation**: Trying new approaches in low-risk situations
3. **Feedback seeking**: Asking for input from those you help (when appropriate)
4. **Supervision/consultation**: Getting guidance from experienced helpers
5. **Reflection**: Thinking about what worked, what didn't, and why

**Finding your authentic voice**:
- **Not mimicking**: Adapting approaches to fit your personality
- **Genuine presence**: Being yourself while maintaining professionalism
- **Style flexibility**: Having range while staying authentic
- **Continuous evolution**: Allowing your style to develop over time

### **5. Ethical Application and Boundaries**
**Maintaining appropriate boundaries**:
- **Time boundaries**: Starting and ending sessions on time
- **Relationship boundaries**: Keeping relationships professional
- **Self-disclosure limits**: Sharing only what serves the helping purpose
- **Physical boundaries**: Appropriate touch (if any) and personal space
- **Digital boundaries**: Professional use of email, text, social media

**Dual relationship management**:
- **Awareness**: Recognizing when multiple relationships exist
- **Transparency**: Discussing potential conflicts openly
- **Documentation**: Recording boundary decisions and discussions
- **Consultation**: Seeking guidance on complex boundary situations
- **Referral**: Transferring to another helper when conflicts can't be managed

**Continuous professional development**:
- **Regular training**: Updating skills and knowledge
- **Supervision/consultation**: Ongoing guidance for complex cases
- **Peer support**: Connecting with others in helping roles
- **Self-care maintenance**: Prioritizing your own wellbeing
- **Ethical reflection**: Regularly considering ethical implications of your work

**Knowing when to stop or refer**:
- **Competence limits**: Issues beyond your training or experience
- **Personal triggers**: Situations activating your own unresolved issues
- **Relationship impasse**: When helping relationship isn't productive
- **Ethical concerns**: When continuing would violate ethical principles
- **Burnout signs**: When you're too depleted to be effective`,
      
      completed: false,
      quiz: [
        {
          id: 1,
          question: "What does the 'R' stand for in the RESPOND model?",
          options: [
            "Resolution",
            "Rapport Building",
            "Response",
            "Review"
          ],
          correctAnswer: 1,
          explanation: "In the RESPOND model: R = Rapport Building, E = Exploring, S = Specific Focus, P = Perspective, O = Options, N = Next Steps, D = Departure."
        },
        {
          id: 2,
          question: "What is 'cultural humility'?",
          options: [
            "Thinking you know everything about other cultures",
            "Lifelong learning about cultures with critical self-reflection",
            "Being humble about your own culture only",
            "Apologizing for cultural differences"
          ],
          correctAnswer: 1,
          explanation: "Cultural humility involves lifelong learning, critical self-reflection, recognizing power imbalances, and community partnership."
        },
        {
          id: 3,
          question: "What should you do when working with an interpreter?",
          options: [
            "Speak only to the interpreter",
            "Speak to the person, not the interpreter",
            "Use complex language to be precise",
            "Let the interpreter handle everything"
          ],
          correctAnswer: 1,
          explanation: "Maintain eye contact with the person, speak directly to them, and use short segments for accurate interpretation."
        },
        {
          id: 4,
          question: "What is a 'dual relationship'?",
          options: [
            "Having two people in a helping relationship",
            "Multiple relationships with the same person (e.g., friend and helper)",
            "Helping two people at once",
            "Having relationships in dual contexts"
          ],
          correctAnswer: 1,
          explanation: "Dual relationships occur when you have multiple roles with someone (e.g., supervisor and counselor, friend and helper), requiring careful boundary management."
        },
        {
          id: 5,
          question: "What does the 'P' in RESPOND model involve?",
          options: [
            "Problem-solving",
            "Perspective Expansion",
            "Planning",
            "Processing"
          ],
          correctAnswer: 1,
          explanation: "P = Perspective Expansion - exploring different ways of viewing the situation, challenging assumptions constructively, and focusing on future possibilities."
        },
        {
          id: 6,
          question: "What should you consider when developing your personal helping style?",
          options: [
            "Only mimic expert helpers",
            "Natural strengths, growth areas, comfort zones, values alignment",
            "What style is most popular",
            "The style that requires least effort"
          ],
          correctAnswer: 1,
          explanation: "Consider your natural strengths, areas for growth, comfort zones, values alignment, and energy patterns to develop an authentic, effective style."
        },
        {
          id: 7,
          question: "What is appropriate when addressing cultural differences?",
          options: [
            "Ignore them to treat everyone equally",
            "Ask about preferences and acknowledge differences explicitly",
            "Assume you understand based on stereotypes",
            "Focus only on similarities"
          ],
          correctAnswer: 1,
          explanation: "Ask about preferences, acknowledge differences openly, invite correction, and learn together about cultural meanings."
        },
        {
          id: 8,
          question: "What does 'skill integration' involve?",
          options: [
            "Using only one skill at a time",
            "Awareness, experimentation, feedback seeking, supervision, reflection",
            "Combining skills randomly",
            "Mastering all skills before using any"
          ],
          correctAnswer: 1,
          explanation: "Skill integration involves awareness of what you're doing, experimentation, seeking feedback, getting supervision, and reflective practice."
        },
        {
          id: 9,
          question: "What is important in workplace helping situations?",
          options: [
            "Becoming friends with everyone",
            "Maintaining professionalism and knowing referral resources",
            "Sharing personal problems with colleagues",
            "Avoiding all personal conversations at work"
          ],
          correctAnswer: 1,
          explanation: "Maintain professionalism, clear boundaries, and awareness of workplace resources like Employee Assistance Programs or HR support."
        },
        {
          id: 10,
          question: "What should you do during the 'Departure' phase of RESPOND?",
          options: [
            "Leave quickly",
            "Summary review, feedback exchange, emotional closure, self-reflection",
            "Only say goodbye",
            "Schedule the next meeting immediately"
          ],
          correctAnswer: 1,
          explanation: "Departure involves summary review, exchanging feedback, emotional closure, and self-reflection on your own experience."
        },
        {
          id: 11,
          question: "What does 'authentic voice' mean in helping?",
          options: [
            "Speaking loudly and clearly",
            "Being yourself while maintaining professionalism",
            "Always being completely honest",
            "Using your natural speaking voice only"
          ],
          correctAnswer: 1,
          explanation: "Finding your authentic voice means being genuine and yourself while maintaining professional standards and adapting to different situations."
        },
        {
          id: 12,
          question: "What are 'time boundaries'?",
          options: [
            "Having unlimited time for helping",
            "Starting and ending sessions on time",
            "Only helping during certain hours",
            "Setting time limits for conversations"
          ],
          correctAnswer: 1,
          explanation: "Time boundaries involve starting and ending sessions consistently, which shows respect and maintains professional structure."
        },
        {
          id: 13,
          question: "What does the 'E' in RESPOND model involve?",
          options: [
            "Evaluation",
            "Exploring the Situation",
            "Empathy expression",
            "Emergency response"
          ],
          correctAnswer: 1,
          explanation: "E = Exploring the Situation - using open inquiry, active listening, story gathering, and understanding broader context."
        },
        {
          id: 14,
          question: "When should you consider referring someone to another helper?",
          options: [
            "Only as a last resort",
            "When issues are beyond your competence or create ethical concerns",
            "Whenever someone has a different cultural background",
            "Only for long-term therapy needs"
          ],
          correctAnswer: 1,
          explanation: "Refer when issues are beyond your training, when there are ethical concerns, personal triggers, relationship impasses, or burnout."
        },
        {
          id: 15,
          question: "What is 'continuous professional development'?",
          options: [
            "Getting one certification and stopping",
            "Regular training, supervision, peer support, and self-care",
            "Only learning from experience",
            "Reading one book per year"
          ],
          correctAnswer: 1,
          explanation: "Continuous development involves regular training, supervision/consultation, peer support, self-care, and ethical reflection throughout your career."
        },
        {
          id: 16,
          question: "What should you do during 'Specific Focus Development'?",
          options: [
            "Focus on everything at once",
            "Theme identification, priority setting, goal clarification, resource identification",
            "Only focus on the main problem",
            "Let the person choose without guidance"
          ],
          correctAnswer: 1,
          explanation: "Specific Focus Development involves identifying themes, setting priorities, clarifying goals, and identifying resources collaboratively."
        },
        {
          id: 17,
          question: "What are 'digital boundaries' in helping relationships?",
          options: [
            "Not using digital devices",
            "Professional use of email, text, and social media",
            "Having no online presence",
            "Using digital tools for everything"
          ],
          correctAnswer: 1,
          explanation: "Digital boundaries involve professional, appropriate use of digital communication (email, text) and maintaining boundaries on social media."
        },
        {
          id: 18,
          question: "What does 'self-disclosure limits' mean?",
          options: [
            "Never sharing anything personal",
            "Sharing only what serves the helping purpose",
            "Sharing everything about yourself",
            "Only sharing positive experiences"
          ],
          correctAnswer: 1,
          explanation: "Self-disclosure should be limited to what serves the helping purpose - to build rapport, normalize experiences, or model coping - not for your own needs."
        },
        {
          id: 19,
          question: "What is involved in 'Next Steps Confirmation'?",
          options: [
            "Making all decisions for the person",
            "Commitment checking, timeline setting, follow-up planning, documentation",
            "Only planning the next meeting",
            "Giving homework assignments"
          ],
          correctAnswer: 1,
          explanation: "Next Steps Confirmation involves checking commitment, setting timelines, planning follow-up, and documenting when appropriate."
        },
        {
          id: 20,
          question: "What should guide your ethical application of skills?",
          options: [
            "Whatever feels right in the moment",
            "Core ethical principles and professional guidelines",
            "What the person wants you to do",
            "What would be most efficient"
          ],
          correctAnswer: 1,
          explanation: "Ethical application should be guided by core principles (autonomy, beneficence, etc.) and relevant professional guidelines, not just intuition or convenience."
        }
      ]
    }
  ],
  
  finalExam: {
    title: "Counseling Skills Certificate Final Examination",
    description: "Comprehensive exam covering all 6 modules. 40 questions testing your mastery of foundational counseling skills.",
    passingScore: 70,
    
    questions: [
      {
        id: 1,
        question: "What are the three core conditions for effective helping relationships identified by Carl Rogers?",
        options: [
          "Honesty, Intelligence, Experience",
          "Unconditional Positive Regard, Empathy, Congruence",
          "Professionalism, Education, Certification",
          "Advice-giving, Problem-solving, Direction"
        ],
        correctAnswer: 1,
        explanation: "Carl Rogers identified Unconditional Positive Regard, Empathy, and Congruence as essential for therapeutic relationships."
      },
      {
        id: 2,
        question: "What does the 'S' stand for in the SOLER model of attending?",
        options: [
          "Silent",
          "Squarely face the person",
          "Sincere",
          "Sitting straight"
        ],
        correctAnswer: 1,
        explanation: "S = Squarely face the person (or sit at an angle) to show full presence and engagement."
      },
      {
        id: 3,
        question: "How many basic universal emotions did Paul Ekman identify?",
        options: [
          "4 basic emotions",
          "6 basic emotions",
          "8 basic emotions",
          "10 basic emotions"
        ],
        correctAnswer: 1,
        explanation: "Paul Ekman identified 6 basic emotions: happiness, sadness, fear, anger, surprise, disgust."
      },
      {
        id: 4,
        question: "Who developed the Person-Centered Approach?",
        options: [
          "Aaron Beck",
          "Carl Rogers",
          "Steve de Shazer",
          "John Whitmore"
        ],
        correctAnswer: 1,
        explanation: "Carl Rogers developed the Person-Centered Approach emphasizing congruence, empathy, and unconditional positive regard."
      },
      {
        id: 5,
        question: "How long does an unaddressed crisis typically last?",
        options: [
          "1-2 days",
          "1-2 weeks",
          "4-6 weeks",
          "3-6 months"
        ],
        correctAnswer: 2,
        explanation: "An unaddressed crisis typically lasts 4-6 weeks before either resolving, becoming chronic, or leading to breakdown."
      },
      {
        id: 6,
        question: "What does the 'R' stand for in the RESPOND model?",
        options: [
          "Resolution",
          "Rapport Building",
          "Response",
          "Review"
        ],
        correctAnswer: 1,
        explanation: "In RESPOND model: R = Rapport Building, establishing initial connection and setting the tone."
      },
      {
        id: 7,
        question: "What is the typical duration of a professional counseling session?",
        options: [
          "30-40 minutes",
          "50-60 minutes",
          "70-80 minutes",
          "90-100 minutes"
        ],
        correctAnswer: 1,
        explanation: "Professional counseling sessions typically last 50-60 minutes, allowing meaningful work while maintaining boundaries."
      },
      {
        id: 8,
        question: "What type of question typically begins with 'What,' 'How,' or 'Tell me about'?",
        options: [
          "Closed question",
          "Open-ended question",
          "Leading question",
          "Hypothetical question"
        ],
        correctAnswer: 1,
        explanation: "Open-ended questions begin with What, How, Tell me about - encouraging elaboration and exploration."
      },
      {
        id: 9,
        question: "What is the difference between emotion and feeling?",
        options: [
          "Emotion is physical, feeling is mental",
          "Emotion is automatic response, feeling is conscious experience",
          "Emotion is short-term, feeling is long-term",
          "Emotion is visible, feeling is invisible"
        ],
        correctAnswer: 1,
        explanation: "Emotion is automatic physiological response, feeling is conscious experience and interpretation of that emotion."
      },
      {
        id: 10,
        question: "What is the 'miracle question' in Solution-Focused Brief Therapy?",
        options: [
          "Asking if miracles are possible",
          "\"If a miracle happened overnight and your problem was solved, what would be different?\"",
          "Questioning miraculous recoveries",
          "Asking about religious beliefs in miracles"
        ],
        correctAnswer: 1,
        explanation: "The miracle question helps imagine a future without the problem and identify concrete changes indicating improvement."
      },
      {
        id: 11,
        question: "What does the 'A' stand for in the ABC model of crisis intervention?",
        options: [
          "Assessment",
          "Achieving rapport",
          "Action plan",
          "Acute intervention"
        ],
        correctAnswer: 1,
        explanation: "In Kanel's ABC model: A = Achieving rapport, establishing connection quickly in crisis situations."
      },
      {
        id: 12,
        question: "What is 'cultural humility'?",
        options: [
          "Thinking you know everything about other cultures",
          "Lifelong learning about cultures with critical self-reflection",
          "Being humble about your own culture only",
          "Apologizing for cultural differences"
        ],
        correctAnswer: 1,
        explanation: "Cultural humility involves lifelong learning, critical self-reflection, recognizing power imbalances, and community partnership."
      },
      {
        id: 13,
        question: "Which ethical principle means 'avoiding harm' in helping relationships?",
        options: [
          "Autonomy",
          "Beneficence",
          "Non-maleficence",
          "Justice"
        ],
        correctAnswer: 2,
        explanation: "Non-maleficence means 'first, do no harm' - avoiding actions that could hurt the person seeking help."
      },
      {
        id: 14,
        question: "What is the difference between paraphrasing and reflecting feelings?",
        options: [
          "Paraphrasing restates content, reflecting feelings identifies emotions",
          "Paraphrasing is shorter, reflecting feelings is longer",
          "Paraphrasing uses their words, reflecting feelings uses your words",
          "Paraphrasing is for facts, reflecting feelings is for opinions"
        ],
        correctAnswer: 0,
        explanation: "Paraphrasing restates content in your own words, reflecting feelings identifies and names emotions."
      },
      {
        id: 15,
        question: "What are secondary emotions?",
        options: [
          "Less important emotions",
          "Reactions to primary emotions",
          "Emotions felt by others",
          "Emotions that come second in sequence"
        ],
        correctAnswer: 1,
        explanation: "Secondary emotions are emotional reactions to primary emotions (e.g., anger about feeling hurt)."
      },
      {
        id: 16,
        question: "What does the 'B' stand for in the ABC model of CBT?",
        options: [
          "Behavior",
          "Beliefs",
          "Background",
          "Balance"
        ],
        correctAnswer: 1,
        explanation: "In Ellis's ABC model: A = Activating event, B = Beliefs, C = Consequences."
      },
      {
        id: 17,
        question: "What does 'ideation' refer to in suicide risk assessment?",
        options: [
          "Having creative ideas",
          "Thoughts of suicide",
          "Making plans",
          "Having intentions"
        ],
        correctAnswer: 1,
        explanation: "Ideation refers to thoughts about suicide. Assessment includes: 'Have you had thoughts of ending your life?'"
      },
      {
        id: 18,
        question: "What should you do when working with an interpreter?",
        options: [
          "Speak only to the interpreter",
          "Speak to the person, not the interpreter",
          "Use complex language to be precise",
          "Let the interpreter handle everything"
        ],
        correctAnswer: 1,
        explanation: "Maintain eye contact with the person, speak directly to them, and use short segments for accurate interpretation."
      },
      {
        id: 19,
        question: "What is the first stage in the helping process?",
        options: [
          "Problem Exploration",
          "Building Rapport and Relationship",
          "Goal Setting",
          "Implementation"
        ],
        correctAnswer: 1,
        explanation: "Building Rapport and Relationship is the foundational first stage, establishing trust before problem-solving."
      },
      {
        id: 20,
        question: "What does the 'L' stand for in the SOLER model?",
        options: [
          "Listen carefully",
          "Look interested",
          "Lean slightly forward",
          "Lower your voice"
        ],
        correctAnswer: 2,
        explanation: "L = Lean slightly forward to show interest and engagement without invading personal space."
      },
      {
        id: 21,
        question: "What is the first stage in emotion processing?",
        options: [
          "Expression",
          "Awareness",
          "Understanding",
          "Acceptance"
        ],
        correctAnswer: 1,
        explanation: "Awareness (noticing the emotion is present) is the necessary first stage before any processing can occur."
      },
      {
        id: 22,
        question: "What does the 'G' stand for in the GROW model?",
        options: [
          "Growth",
          "Goal",
          "Guidance",
          "Gain"
        ],
        correctAnswer: 1,
        explanation: "In GROW coaching model: G = Goal, R = Reality, O = Options, W = Will."
      },
      {
        id: 23,
        question: "What is Psychological First Aid (PFA)?",
        options: [
          "Medical first aid for psychological issues",
          "A set of core actions to help people in acute distress",
          "Psychological treatment for trauma",
          "First aid certification for mental health"
        ],
        correctAnswer: 1,
        explanation: "PFA is an evidence-informed approach with 8 core actions to reduce initial distress after crises."
      },
      {
        id: 24,
        question: "What is a 'dual relationship'?",
        options: [
          "Having two people in a helping relationship",
          "Multiple relationships with the same person",
          "Helping two people at once",
          "Having relationships in dual contexts"
        ],
        correctAnswer: 1,
        explanation: "Dual relationships occur when you have multiple roles with someone, requiring careful boundary management."
      },
      {
        id: 25,
        question: "What does 'compassion fatigue' refer to in helping professions?",
        options: [
          "Feeling too much compassion",
          "Emotional drain from helping traumatized people",
          "Losing interest in helping others",
          "Becoming emotionally detached"
        ],
        correctAnswer: 1,
        explanation: "Compassion fatigue is emotional exhaustion specifically from helping people who have experienced trauma."
      },
      {
        id: 26,
        question: "Which is an example of a minimal encourager?",
        options: [
          "Giving advice",
          "Nodding and saying 'mm-hmm'",
          "Asking multiple questions",
          "Sharing your own experience"
        ],
        correctAnswer: 1,
        explanation: "Minimal encouragers are small verbal/nonverbal cues like nodding, 'mm-hmm,' 'I see' that show listening without interrupting."
      },
      {
        id: 27,
        question: "What does 'validating emotions' mean?",
        options: [
          "Telling someone their emotions are correct",
          "Communicating that emotions make sense given the situation",
          "Approving of how someone expresses emotions",
          "Measuring the intensity of emotions"
        ],
        correctAnswer: 1,
        explanation: "Validation communicates that emotions make sense and are understandable given the person's experience."
      },
      {
        id: 28,
        question: "Which approach is considered 'non-directive'?",
        options: [
          "Cognitive Behavioral Therapy",
          "Person-Centered Approach",
          "Solution-Focused Brief Therapy",
          "The GROW Model"
        ],
        correctAnswer: 1,
        explanation: "Person-Centered Approach is non-directive, following the person's lead rather than directing or giving advice."
      },
      {
        id: 29,
        question: "What risk level requires immediate intervention and not leaving alone?",
        options: [
          "Low risk",
          "Moderate risk",
          "High risk",
          "All risk levels"
        ],
        correctAnswer: 2,
        explanation: "High risk (plan, means, and intent) requires immediate intervention and continuous monitoring."
      },
      {
        id: 30,
        question: "What does the 'P' in RESPOND model involve?",
        options: [
          "Problem-solving",
          "Perspective Expansion",
          "Planning",
          "Processing"
        ],
        correctAnswer: 1,
        explanation: "P = Perspective Expansion - exploring different ways of viewing the situation and future possibilities."
      },
      {
        id: 31,
        question: "What does 'cultural competence' involve in helping relationships?",
        options: [
          "Speaking multiple languages",
          "Awareness, knowledge, skills, and humility regarding cultural differences",
          "Only working with people from your own culture",
          "Ignoring cultural differences to treat everyone equally"
        ],
        correctAnswer: 1,
        explanation: "Cultural competence involves awareness of biases, knowledge of cultures, adaptation skills, and humility."
      },
      {
        id: 32,
        question: "What is 'mind reading' as a listening barrier?",
        options: [
          "Actually reading the person's mind",
          "Assuming you know what they mean without checking",
          "Reading about psychology theories",
          "Predicting what they will say next"
        ],
        correctAnswer: 1,
        explanation: "Mind reading is assuming understanding without checking, which can lead to misunderstandings."
      },
      {
        id: 33,
        question: "What are SMART goals in the helping process?",
        options: [
          "Simple, Manageable, Achievable, Realistic, Timely",
          "Specific, Measurable, Achievable, Relevant, Time-bound",
          "Strategic, Meaningful, Appropriate, Reasonable, Targeted",
          "Systematic, Motivating, Action-oriented, Responsible, Trackable"
        ],
        correctAnswer: 1,
        explanation: "SMART goals are Specific, Measurable, Achievable, Relevant, Time-bound - framework for effective change objectives."
      },
      {
        id: 34,
        question: "What are 'cognitive distortions'?",
        options: [
          "Memory problems",
          "Unhelpful thinking patterns",
          "Visual illusions",
          "Confusing thoughts"
        ],
        correctAnswer: 1,
        explanation: "Cognitive distortions are systematic errors in thinking that contribute to emotional distress."
      },
      {
        id: 35,
        question: "What does the 5-4-3-2-1 grounding technique involve?",
        options: [
          "Counting down from 5",
          "Noticing 5 things you see, 4 you feel, 3 you hear, 2 you smell, 1 you taste",
          "5 breaths, 4 thoughts, 3 feelings, 2 actions, 1 goal",
          "5 minutes of breathing, 4 of stretching, 3 of listening, 2 of smelling, 1 of tasting"
        ],
        correctAnswer: 1,
        explanation: "5-4-3-2-1 technique engages all five senses to ground someone in the present during distress."
      },
      {
        id: 36,
        question: "What is a 'warm handoff' when making referrals?",
        options: [
          "A physically warm handshake",
          "Direct introduction to the referral source when possible",
          "Referring only to people you know well",
          "Making referrals with emotional warmth"
        ],
        correctAnswer: 1,
        explanation: "Warm handoff involves directly introducing the person to the referral source rather than just giving contact information."
      },
      {
        id: 37,
        question: "Which is NOT a common exception to confidentiality?",
        options: [
          "Harm to self",
          "Harm to others",
          "Abuse of vulnerable populations",
          "Breaking minor laws"
        ],
        correctAnswer: 3,
        explanation: "Confidentiality typically must be broken for harm to self/others or abuse of vulnerable populations, not minor law-breaking."
      },
      {
        id: 38,
        question: "What type of question would 'Did that happen yesterday?' be classified as?",
        options: [
          "Open-ended question",
          "Closed question",
          "Circular question",
          "Reflective question"
        ],
        correctAnswer: 1,
        explanation: "This is a closed question answered with yes/no or specific fact, not encouraging elaboration."
      },
      {
        id: 39,
        question: "What is 'exception finding' in SFBT?",
        options: [
          "Finding exceptions to rules",
          "Identifying times when the problem doesn't happen",
          "Looking for special circumstances",
          "Finding legal exceptions"
        ],
        correctAnswer: 1,
        explanation: "Exception finding explores times when the problem is less severe or absent to identify what's different then."
      },
      {
        id: 40,
        question: "What should you consider when developing your personal helping style?",
        options: [
          "Only mimic expert helpers",
          "Natural strengths, growth areas, comfort zones, values alignment",
          "What style is most popular",
          "The style that requires least effort"
        ],
        correctAnswer: 1,
        explanation: "Consider natural strengths, growth areas, comfort zones, values alignment, and energy patterns for authentic style development."
      }
    ]
  }
};

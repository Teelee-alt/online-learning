export const forensicScienceCertificate = {
  // COURSE METADATA & IDENTIFICATION
  id: "forensic-science-certificate",
  title: "Forensic Science (Certificate)",
  description: "Master the fundamentals of crime scene investigation, evidence collection, and basic forensic analysis techniques used in modern law enforcement.",
  duration: "6 weeks",
  timeCommitment: "4-6 hours per week",
  price: 12,
  upgradePrice: 18,
  icon: "🔬",
  badge: "Certificate",
  
  // MODULE ARCHITECTURE - 6 MODULES + FINAL EXAM
  modules: [
    {
      id: 1,
      title: "Introduction to Forensic Science",
      content: `# Welcome to Forensic Science

## What is Forensic Science?
Forensic science is the application of scientific principles to criminal investigations. It helps law enforcement solve crimes by analyzing physical evidence found at crime scenes. The word "forensic" comes from Latin and means "of or before the forum," referring to the legal context where evidence is presented.

## Three Main Branches of Forensic Science
1. **Crime Scene Investigation** - Collection and documentation of evidence
2. **Laboratory Analysis** - Scientific examination of collected evidence
3. **Forensic Medicine** - Application of medical knowledge to legal problems

## Basic Principles of Forensic Evidence
- **Locard's Exchange Principle**: Every contact leaves a trace
- **Chain of Custody**: Documented history of evidence handling
- **Preservation**: Proper methods to prevent evidence contamination

## Common Types of Evidence
- **Physical Evidence**: Objects like weapons, clothing, or tools
- **Biological Evidence**: Blood, hair, saliva, or other bodily fluids
- **Trace Evidence**: Small particles like fibers, glass, or paint

## The Forensic Process
The standard forensic process follows these steps: recognition, documentation, collection, analysis, and interpretation. Each step must be carefully followed to ensure evidence remains valid in court.

## Key Forensic Terms
- **Modus Operandi**: A criminal's characteristic method of operation
- **Alibi**: Proof someone was elsewhere during a crime
- **Corpus Delicti**: The body of facts proving a crime occurred`,
      completed: false,
      quiz: [
        {
          id: 1,
          question: "What does the term 'forensic' originally mean in Latin?",
          options: ["Science of crime", "Of or before the forum", "Legal investigation", "Evidence analysis"],
          correctAnswer: 1,
          explanation: "The word 'forensic' comes from Latin meaning 'of or before the forum,' referring to the legal context."
        },
        {
          id: 2,
          question: "What principle states 'every contact leaves a trace'?",
          options: ["Chain of Custody", "Locard's Exchange Principle", "Evidence Rule", "Forensic Law"],
          correctAnswer: 1,
          explanation: "Locard's Exchange Principle is fundamental to forensic science."
        },
        {
          id: 3,
          question: "What type of evidence includes blood and saliva?",
          options: ["Physical Evidence", "Documentary Evidence", "Biological Evidence", "Trace Evidence"],
          correctAnswer: 2,
          explanation: "Biological evidence comes from living organisms."
        },
        {
          id: 4,
          question: "What document tracks evidence handling?",
          options: ["Evidence Log", "Chain of Custody", "Forensic Report", "Police Record"],
          correctAnswer: 1,
          explanation: "Chain of Custody documents every person who handles evidence."
        },
        {
          id: 5,
          question: "Which branch involves collecting evidence at crime scenes?",
          options: ["Forensic Medicine", "Laboratory Analysis", "Crime Scene Investigation", "Digital Forensics"],
          correctAnswer: 2,
          explanation: "Crime Scene Investigation focuses on evidence collection at the scene."
        },
        {
          id: 6,
          question: "What is the term for a criminal's characteristic method?",
          options: ["Alibi", "Corpus Delicti", "Modus Operandi", "Forensic Pattern"],
          correctAnswer: 2,
          explanation: "Modus Operandi describes a criminal's typical way of operating."
        },
        {
          id: 7,
          question: "What does 'corpus delicti' refer to?",
          options: ["The victim's body", "The murder weapon", "Proof a crime occurred", "Suspect's confession"],
          correctAnswer: 2,
          explanation: "Corpus delicti means the body of facts proving a crime."
        },
        {
          id: 8,
          question: "What is evidence that someone was elsewhere called?",
          options: ["Defense", "Excuse", "Alibi", "Testimony"],
          correctAnswer: 2,
          explanation: "An alibi provides proof someone was elsewhere during the crime."
        },
        {
          id: 9,
          question: "What type of evidence includes fibers and paint chips?",
          options: ["Biological Evidence", "Physical Evidence", "Trace Evidence", "Documentary Evidence"],
          correctAnswer: 2,
          explanation: "Trace evidence consists of small, often microscopic particles."
        },
        {
          id: 10,
          question: "How many main branches of forensic science were discussed?",
          options: ["Two", "Three", "Four", "Five"],
          correctAnswer: 1,
          explanation: "Three main branches: Crime Scene Investigation, Laboratory Analysis, and Forensic Medicine."
        },
        {
          id: 11,
          question: "What must be maintained to ensure evidence validity?",
          options: ["Evidence Labels", "Chain of Custody", "Police Reports", "Witness Statements"],
          correctAnswer: 1,
          explanation: "Chain of Custody is essential for evidence validity in court."
        },
        {
          id: 12,
          question: "What is the first step in the forensic process?",
          options: ["Documentation", "Recognition", "Collection", "Analysis"],
          correctAnswer: 1,
          explanation: "Recognition is identifying what might be evidence."
        },
        {
          id: 13,
          question: "Which is NOT a type of evidence discussed?",
          options: ["Physical", "Biological", "Emotional", "Trace"],
          correctAnswer: 2,
          explanation: "Emotional evidence is not a recognized forensic category."
        },
        {
          id: 14,
          question: "Where is forensic evidence typically presented?",
          options: ["Police Station", "Laboratory", "Court", "News Conference"],
          correctAnswer: 2,
          explanation: "Forensic evidence is presented in court during legal proceedings."
        },
        {
          id: 15,
          question: "What does proper evidence handling prevent?",
          options: ["Theft", "Contamination", "Analysis", "Documentation"],
          correctAnswer: 1,
          explanation: "Proper handling prevents contamination of evidence."
        },
        {
          id: 16,
          question: "What kind of evidence might a weapon be?",
          options: ["Biological", "Trace", "Physical", "Documentary"],
          correctAnswer: 2,
          explanation: "Weapons are considered physical evidence."
        },
        {
          id: 17,
          question: "What follows documentation in the forensic process?",
          options: ["Interpretation", "Collection", "Analysis", "Recognition"],
          correctAnswer: 1,
          explanation: "After documentation comes collection of evidence."
        },
        {
          id: 18,
          question: "What does forensic science apply to criminal investigations?",
          options: ["Legal Principles", "Scientific Principles", "Police Procedures", "Court Rules"],
          correctAnswer: 1,
          explanation: "Forensic science applies scientific principles to investigations."
        },
        {
          id: 19,
          question: "What might trace evidence include?",
          options: ["Blood", "Glass fragments", "Confessions", "Photographs"],
          correctAnswer: 1,
          explanation: "Glass fragments are common trace evidence."
        },
        {
          id: 20,
          question: "How many steps are in the standard forensic process?",
          options: ["Three", "Four", "Five", "Six"],
          correctAnswer: 2,
          explanation: "Five steps: recognition, documentation, collection, analysis, and interpretation."
        }
      ]
    },
    {
      id: 2,
      title: "Crime Scene Investigation",
      content: `# Crime Scene Investigation Basics

## First Responder Responsibilities
The first officer at a crime scene has critical duties. They must ensure scene safety, provide medical assistance if needed, and secure the area. Preserving evidence starts the moment they arrive.

## Securing the Crime Scene
Establishing boundaries is essential. Use crime scene tape to create two zones: the inner core area and an outer perimeter. Only authorized personnel should enter. A log records everyone who enters or leaves.

## Three Types of Crime Scenes
1. **Primary Scene**: Where the main crime occurred
2. **Secondary Scene**: Related locations like escape routes
3. **Tertiary Scene**: Where evidence might have been transferred

## Documentation Methods
- **Photography**: Take overall, medium, and close-up shots
- **Sketching**: Create rough and finished sketches with measurements
- **Notes**: Write detailed descriptions of everything observed
- **Video**: Record the scene before anything is moved

## Evidence Search Patterns
Four common search patterns help ensure thorough coverage:
1. **Grid Pattern**: Searching in perpendicular lines
2. **Spiral Pattern**: Starting from outside and moving inward
3. **Strip/Lane Pattern**: Walking parallel lines
4. **Zone Pattern**: Dividing area into sections

## Evidence Collection Guidelines
Always use clean tools and containers. Wear gloves to prevent contamination. Place evidence in proper containers: paper bags for dry items, airtight containers for wet evidence. Label everything clearly.

## Common Mistakes to Avoid
- Not wearing protective gear
- Moving items before documentation
- Using the same gloves for multiple items
- Failing to maintain the chain of custody`,
      completed: false,
      quiz: [
        {
          id: 1,
          question: "What is the first duty of a first responder?",
          options: ["Take photos", "Ensure scene safety", "Collect evidence", "Interview witnesses"],
          correctAnswer: 1,
          explanation: "Scene safety is the top priority for first responders."
        },
        {
          id: 2,
          question: "How many zones are typically created at a crime scene?",
          options: ["One", "Two", "Three", "Four"],
          correctAnswer: 1,
          explanation: "Two zones: inner core area and outer perimeter."
        },
        {
          id: 3,
          question: "What type of scene is where the main crime occurred?",
          options: ["Primary Scene", "Secondary Scene", "Tertiary Scene", "Transfer Scene"],
          correctAnswer: 0,
          explanation: "The primary scene is where the main criminal activity happened."
        },
        {
          id: 4,
          question: "Which documentation method includes overall and close-up shots?",
          options: ["Sketching", "Photography", "Note-taking", "Video Recording"],
          correctAnswer: 1,
          explanation: "Photography should include shots from different distances."
        },
        {
          id: 5,
          question: "What search pattern uses perpendicular lines?",
          options: ["Spiral", "Grid", "Strip", "Zone"],
          correctAnswer: 1,
          explanation: "Grid pattern involves searching in crossing perpendicular lines."
        },
        {
          id: 6,
          question: "What should be worn to prevent contamination?",
          options: ["Boots", "Gloves", "Mask", "All protective gear"],
          correctAnswer: 3,
          explanation: "All appropriate protective gear should be worn."
        },
        {
          id: 7,
          question: "What should wet evidence be placed in?",
          options: ["Paper Bag", "Airtight Container", "Plastic Bag", "Cardboard Box"],
          correctAnswer: 1,
          explanation: "Wet evidence needs airtight containers to prevent mold."
        },
        {
          id: 8,
          question: "What pattern starts from outside and moves inward?",
          options: ["Grid", "Zone", "Spiral", "Strip"],
          correctAnswer: 2,
          explanation: "Spiral pattern begins at the perimeter and moves toward the center."
        },
        {
          id: 9,
          question: "What records everyone entering the crime scene?",
          options: ["Evidence Log", "Police Report", "Entry Log", "Chain of Custody"],
          correctAnswer: 2,
          explanation: "An entry log tracks all personnel at the scene."
        },
        {
          id: 10,
          question: "How many types of crime scenes were discussed?",
          options: ["Two", "Three", "Four", "Five"],
          correctAnswer: 1,
          explanation: "Three types: primary, secondary, and tertiary scenes."
        },
        {
          id: 11,
          question: "What type of sketch includes measurements?",
          options: ["Rough Sketch", "Finished Sketch", "Both sketches", "Neither sketch"],
          correctAnswer: 2,
          explanation: "Both rough and finished sketches should include measurements."
        },
        {
          id: 12,
          question: "What pattern divides area into sections?",
          options: ["Grid", "Spiral", "Zone", "Strip"],
          correctAnswer: 2,
          explanation: "Zone pattern divides the area into manageable sections."
        },
        {
          id: 13,
          question: "What should dry evidence be placed in?",
          options: ["Plastic Bag", "Airtight Container", "Paper Bag", "Glass Jar"],
          correctAnswer: 2,
          explanation: "Dry evidence goes in paper bags to prevent moisture buildup."
        },
        {
          id: 14,
          question: "What is a common mistake at crime scenes?",
          options: ["Taking too many photos", "Wearing protective gear", "Moving items before documentation", "Using clean tools"],
          correctAnswer: 2,
          explanation: "Moving items before proper documentation compromises evidence."
        },
        {
          id: 15,
          question: "What pattern involves walking parallel lines?",
          options: ["Grid", "Spiral", "Strip", "Zone"],
          correctAnswer: 2,
          explanation: "Strip or lane pattern uses parallel search lines."
        },
        {
          id: 16,
          question: "What should evidence labels include?",
          options: ["Date only", "Collector's name only", "Case number and details", "Just the item name"],
          correctAnswer: 2,
          explanation: "Labels need complete information including case number."
        },
        {
          id: 17,
          question: "What might a secondary scene be?",
          options: ["Where the crime occurred", "Escape route", "Evidence transfer location", "Police station"],
          correctAnswer: 1,
          explanation: "Secondary scenes include related locations like escape routes."
        },
        {
          id: 18,
          question: "What documentation method records descriptions?",
          options: ["Photography", "Sketching", "Note-taking", "Video"],
          correctAnswer: 2,
          explanation: "Note-taking provides detailed written descriptions."
        },
        {
          id: 19,
          question: "How many search patterns were discussed?",
          options: ["Two", "Three", "Four", "Five"],
          correctAnswer: 2,
          explanation: "Four patterns: grid, spiral, strip, and zone."
        },
        {
          id: 20,
          question: "What prevents using the same gloves for multiple items?",
          options: ["Time", "Cost", "Contamination", "Comfort"],
          correctAnswer: 2,
          explanation: "Using the same gloves can transfer evidence between items."
        }
      ]
    },
    {
      id: 3,
      title: "Fingerprint Analysis",
      content: `# Fingerprint Science

## What Are Fingerprints?
Fingerprints are unique patterns of ridges on our fingers. No two people have the same fingerprints, not even identical twins. Fingerprints form before birth and remain unchanged throughout life.

## Three Basic Fingerprint Patterns
1. **Loops**: Ridges enter from one side, curve, and exit same side (65% of population)
2. **Whorls**: Circular or spiral patterns (30% of population)
3. **Arches**: Ridges enter from one side and exit the other (5% of population)

## Fingerprint Classification
The Henry System is commonly used. It classifies fingerprints based on pattern types. Each finger gets a specific value. The system helps organize and search fingerprint records efficiently.

## Types of Fingerprint Evidence
- **Visible Prints**: Can be seen with naked eye (paint, blood, dirt)
- **Plastic Prints**: Indentations in soft material (clay, wax, soap)
- **Latent Prints**: Invisible prints requiring development

## Developing Latent Prints
Several methods make latent prints visible:
1. **Powder Method**: Using contrasting powders on smooth surfaces
2. **Chemical Methods**: Cyanoacrylate (super glue) fuming for non-porous surfaces
3. **Ninhydrin**: Reacts with amino acids on paper
4. **Physical Developer**: For porous surfaces

## Lifting and Preserving Prints
After development, prints must be lifted. Use fingerprint tape for powder prints. Photograph the print before lifting. Place lifted prints on fingerprint cards with proper labeling.

## Fingerprint Comparison
The ACE-V method is standard:
1. **Analysis**: Examine the unknown print
2. **Comparison**: Compare with known prints
3. **Evaluation**: Determine if they match
4. **Verification**: Another expert verifies the findings

## Points of Comparison
Experts look for matching ridge characteristics: endings, bifurcations, dots, and islands. No set number of points proves identity, but experts seek sufficient corresponding features.`,
      completed: false,
      quiz: [
        {
          id: 1,
          question: "What percentage of people have loop patterns?",
          options: ["30%", "65%", "5%", "50%"],
          correctAnswer: 1,
          explanation: "Approximately 65% of people have loop fingerprint patterns."
        },
        {
          id: 2,
          question: "What pattern has circular designs?",
          options: ["Loops", "Arches", "Whorls", "Lines"],
          correctAnswer: 2,
          explanation: "Whorls have circular or spiral ridge patterns."
        },
        {
          id: 3,
          question: "What type of print is invisible?",
          options: ["Visible", "Plastic", "Latent", "Developed"],
          correctAnswer: 2,
          explanation: "Latent prints are invisible until developed."
        },
        {
          id: 4,
          question: "What method uses super glue fumes?",
          options: ["Powder", "Cyanoacrylate", "Ninhydrin", "Physical Developer"],
          correctAnswer: 1,
          explanation: "Cyanoacrylate (super glue) fuming develops prints."
        },
        {
          id: 5,
          question: "What reacts with amino acids on paper?",
          options: ["Powder", "Super Glue", "Ninhydrin", "Tape"],
          correctAnswer: 2,
          explanation: "Ninhydrin reacts with amino acids in fingerprints on paper."
        },
        {
          id: 6,
          question: "What is the standard comparison method?",
          options: ["ABC", "ACE-V", "FBI", "Henry"],
          correctAnswer: 1,
          explanation: "ACE-V stands for Analysis, Comparison, Evaluation, Verification."
        },
        {
          id: 7,
          question: "What type of print leaves indentations?",
          options: ["Visible", "Latent", "Plastic", "Powder"],
          correctAnswer: 2,
          explanation: "Plastic prints are indentations in soft materials."
        },
        {
          id: 8,
          question: "What classification system is commonly used?",
          options: ["FBI System", "Henry System", "ACE System", "Pattern System"],
          correctAnswer: 1,
          explanation: "The Henry System is widely used for fingerprint classification."
        },
        {
          id: 9,
          question: "What percentage have arch patterns?",
          options: ["65%", "30%", "5%", "10%"],
          correctAnswer: 2,
          explanation: "Only about 5% of people have arch patterns."
        },
        {
          id: 10,
          question: "What should be done before lifting a print?",
          options: ["Develop it", "Photograph it", "Label it", "Compare it"],
          correctAnswer: 1,
          explanation: "Always photograph prints before attempting to lift them."
        },
        {
          id: 11,
          question: "What pattern do ridges enter and exit same side?",
          options: ["Loops", "Whorls", "Arches", "Circles"],
          correctAnswer: 0,
          explanation: "In loops, ridges enter and exit on the same side."
        },
        {
          id: 12,
          question: "What do experts look for in comparisons?",
          options: ["Colors", "Ridge characteristics", "Size", "Shape only"],
          correctAnswer: 1,
          explanation: "Ridge characteristics like endings and bifurcations are compared."
        },
        {
          id: 13,
          question: "What develops prints on porous surfaces?",
          options: ["Powder", "Physical Developer", "Super Glue", "Ninhydrin"],
          correctAnswer: 1,
          explanation: "Physical developer works on porous surfaces like paper."
        },
        {
          id: 14,
          question: "What does the 'V' in ACE-V stand for?",
          options: ["Validation", "Verification", "Value", "Visual"],
          correctAnswer: 1,
          explanation: "Verification means another expert checks the findings."
        },
        {
          id: 15,
          question: "When do fingerprints form?",
          options: ["At birth", "Before birth", "During childhood", "They change"],
          correctAnswer: 1,
          explanation: "Fingerprints form before birth and don't change."
        },
        {
          id: 16,
          question: "What type of print might be in blood?",
          options: ["Latent", "Plastic", "Visible", "All types"],
          correctAnswer: 2,
          explanation: "Prints in blood are visible to the naked eye."
        },
        {
          id: 17,
          question: "What is used to lift powder prints?",
          options: ["Tape", "Glue", "Paper", "Brush"],
          correctAnswer: 0,
          explanation: "Fingerprint tape lifts powder-developed prints."
        },
        {
          id: 18,
          question: "What pattern is least common?",
          options: ["Loops", "Whorls", "Arches", "All equal"],
          correctAnswer: 2,
          explanation: "Arches are the least common fingerprint pattern."
        },
        {
          id: 19,
          question: "What does the Henry System organize?",
          options: ["Crime scenes", "Fingerprint records", "Evidence", "Tools"],
          correctAnswer: 1,
          explanation: "The Henry System helps organize fingerprint records."
        },
        {
          id: 20,
          question: "How many basic fingerprint patterns are there?",
          options: ["Two", "Three", "Four", "Five"],
          correctAnswer: 1,
          explanation: "Three basic patterns: loops, whorls, and arches."
        }
      ]
    },
    {
      id: 4,
      title: "DNA Evidence",
      content: `# DNA in Forensic Science

## What is DNA?
DNA (Deoxyribonucleic Acid) is the genetic material in our cells. It contains instructions for building and maintaining organisms. Except for identical twins, everyone's DNA is unique.

## DNA Structure Basics
DNA looks like a twisted ladder (double helix). The ladder's rungs are made of base pairs: Adenine (A) pairs with Thymine (T), and Guanine (G) pairs with Cytosine (C). This pairing is consistent in all humans.

## Sources of DNA Evidence
DNA can be found in many biological materials:
- Blood and bloodstains
- Saliva (on cups, cigarettes, stamps)
- Hair with root attached
- Skin cells (touch DNA)
- Semen
- Bones and teeth

## Collecting DNA Evidence
Use sterile swabs for liquid samples. For dry stains, use slightly moistened swabs. Wear gloves and change them between samples. Use clean tools for each item. Package evidence in paper containers.

## DNA Analysis Process
1. **Extraction**: Remove DNA from cells
2. **Quantification**: Measure how much DNA is present
3. **Amplification**: Make copies using PCR (Polymerase Chain Reaction)
4. **Separation**: Sort DNA fragments by size
5. **Analysis**: Examine the DNA profile

## STR Analysis
Short Tandem Repeats (STRs) are the standard for forensic DNA. These are short DNA sequences that repeat. Different people have different numbers of repeats. Labs examine 13-20 STR regions.

## DNA Databases
CODIS (Combined DNA Index System) is the FBI's DNA database. It contains DNA profiles from convicted offenders, crime scenes, and missing persons. It helps connect crimes and identify suspects.

## Limitations of DNA Evidence
- Requires sufficient quantity and quality
- Can be contaminated easily
- Doesn't indicate when DNA was deposited
- Can't determine age, race, or appearance from basic analysis
- Mixed samples can be challenging to interpret`,
      completed: false,
      quiz: [
        {
          id: 1,
          question: "What does DNA stand for?",
          options: ["Digital Nucleic Acid", "Deoxyribonucleic Acid", "Diagnostic Nuclear Analysis", "Developmental Nucleic Array"],
          correctAnswer: 1,
          explanation: "DNA stands for Deoxyribonucleic Acid."
        },
        {
          id: 2,
          question: "What base pairs with Adenine?",
          options: ["Guanine", "Cytosine", "Thymine", "Uracil"],
          correctAnswer: 2,
          explanation: "Adenine always pairs with Thymine in DNA."
        },
        {
          id: 3,
          question: "What is NOT a good source of DNA?",
          options: ["Hair with root", "Saliva", "Hair without root", "Blood"],
          correctAnswer: 2,
          explanation: "Hair without the root contains little nuclear DNA."
        },
        {
          id: 4,
          question: "What should be used for dry stain collection?",
          options: ["Dry swab", "Moistened swab", "Tape", "Brush"],
          correctAnswer: 1,
          explanation: "Slightly moistened swabs help collect dry biological stains."
        },
        {
          id: 5,
          question: "What makes copies of DNA?",
          options: ["Extraction", "Quantification", "PCR", "Separation"],
          correctAnswer: 2,
          explanation: "PCR (Polymerase Chain Reaction) amplifies DNA."
        },
        {
          id: 6,
          question: "What does STR stand for?",
          options: ["Standard Tandem Repeats", "Short Tandem Repeats", "Simple Testing Regions", "Scientific Technical Review"],
          correctAnswer: 1,
          explanation: "STR stands for Short Tandem Repeats."
        },
        {
          id: 7,
          question: "What is the FBI's DNA database called?",
          options: ["FBI-DNA", "NDIS", "CODIS", "DNAdex"],
          correctAnswer: 2,
          explanation: "CODIS stands for Combined DNA Index System."
        },
        {
          id: 8,
          question: "How many STR regions do labs typically examine?",
          options: ["5-10", "13-20", "25-30", "50+"],
          correctAnswer: 1,
          explanation: "Most forensic labs examine 13-20 STR regions."
        },
        {
          id: 9,
          question: "What pairs with Guanine?",
          options: ["Adenine", "Thymine", "Cytosine", "Uracil"],
          correctAnswer: 2,
          explanation: "Guanine pairs with Cytosine in DNA."
        },
        {
          id: 10,
          question: "What can DNA NOT determine?",
          options: ["Identity", "When deposited", "Family relationships", "Source"],
          correctAnswer: 1,
          explanation: "Basic DNA analysis cannot determine when DNA was deposited."
        },
        {
          id: 11,
          question: "What is the first step in DNA analysis?",
          options: ["Amplification", "Extraction", "Quantification", "Separation"],
          correctAnswer: 1,
          explanation: "Extraction removes DNA from cells."
        },
        {
          id: 12,
          question: "What type of DNA comes from skin cells?",
          options: ["Blood DNA", "Touch DNA", "Saliva DNA", "Hair DNA"],
          correctAnswer: 1,
          explanation: "Touch DNA comes from skin cells left by contact."
        },
        {
          id: 13,
          question: "What measures DNA quantity?",
          options: ["Extraction", "Quantification", "Amplification", "Analysis"],
          correctAnswer: 1,
          explanation: "Quantification measures how much DNA is present."
        },
        {
          id: 14,
          question: "Who has identical DNA?",
          options: ["Siblings", "Parents/children", "Identical twins", "All humans"],
          correctAnswer: 2,
          explanation: "Only identical twins share identical DNA."
        },
        {
          id: 15,
          question: "What should evidence be packaged in?",
          options: ["Plastic bags", "Paper containers", "Glass jars", "Metal cans"],
          correctAnswer: 1,
          explanation: "Paper containers prevent moisture buildup that degrades DNA."
        },
        {
          id: 16,
          question: "What does PCR stand for?",
          options: ["Polymerase Chain Reaction", "Protein Chain Reaction", "Polymer Copying Reaction", "Primary Cellular Replication"],
          correctAnswer: 0,
          explanation: "PCR stands for Polymerase Chain Reaction."
        },
        {
          id: 17,
          question: "What is a limitation of DNA evidence?",
          options: ["It's unique", "It degrades", "It's specific", "It's reliable"],
          correctAnswer: 1,
          explanation: "DNA degrades over time and with environmental exposure."
        },
        {
          id: 18,
          question: "What shape is DNA?",
          options: ["Single strand", "Double helix", "Triple helix", "Circle"],
          correctAnswer: 1,
          explanation: "DNA has a double helix structure like a twisted ladder."
        },
        {
          id: 19,
          question: "What should be changed between samples?",
          options: ["Swabs", "Gloves", "Containers", "All equipment"],
          correctAnswer: 3,
          explanation: "All equipment should be clean between samples to prevent contamination."
        },
        {
          id: 20,
          question: "What database includes missing persons?",
          options: ["Only convicted offenders", "Only crime scenes", "CODIS", "No database does"],
          correctAnswer: 2,
          explanation: "CODIS includes profiles from missing persons."
        }
      ]
    },
    {
      id: 5,
      title: "Trace Evidence Analysis",
      content: `# Trace Evidence Examination

## What is Trace Evidence?
Trace evidence includes small, often microscopic materials transferred during contact. According to Locard's Principle, these transfers happen whenever two surfaces touch. Trace evidence can link people, places, and objects.

## Common Types of Trace Evidence
1. **Hairs and Fibers**: Natural or synthetic materials
2. **Glass Fragments**: From windows, bottles, or vehicle glass
3. **Paint Chips**: From vehicles, buildings, or tools
4. **Soil and Minerals**: Unique to geographic locations
5. **Gunshot Residue**: Particles from firearm discharge

## Hair Examination
Hair can be human or animal. Examination looks at color, length, diameter, and scale pattern. Human hair varies by body area: head, pubic, facial, etc. Hair can indicate race, but not individual identity without DNA.

## Fiber Analysis
Fibers can be natural (cotton, wool, silk) or synthetic (nylon, polyester, acrylic). Analysis examines color, diameter, cross-section shape, and chemical composition. Matching fibers can suggest contact between surfaces.

## Glass Evidence
When glass breaks, tiny fragments scatter. Examination determines physical and optical properties: color, thickness, density, and refractive index. Broken edges can be matched like puzzle pieces.

## Paint Analysis
Paint has multiple layers: primer, color coats, clear coats. Analysis examines layer sequence, colors, and chemical composition. Paint databases help identify vehicle makes and models.

## Collection Methods
- **Tape Lifting**: Clear tape collects hairs and fibers
- **Vacuuming**: With filter collection for large areas
- **Hand Picking**: Using tweezers for visible items
- **Combing**: For hair collection from victims or suspects

## Laboratory Techniques
- **Microscopy**: Light and comparison microscopes
- **Microspectrophotometry**: Measures color precisely
- **Chromatography**: Separates chemical components
- **SEM-EDS**: Scanning electron microscope with energy dispersive spectroscopy

## Interpretation Guidelines
Trace evidence is class evidence - it can exclude sources but rarely provides individual identification. Multiple matching types increase significance. Absence of evidence doesn't prove absence of contact.`,
      completed: false,
      quiz: [
        {
          id: 1,
          question: "What principle explains trace evidence transfer?",
          options: ["Chain of Custody", "Locard's Principle", "Forensic Law", "Evidence Rule"],
          correctAnswer: 1,
          explanation: "Locard's Exchange Principle explains trace evidence transfer."
        },
        {
          id: 2,
          question: "What is NOT a type of trace evidence?",
          options: ["Hairs", "Blood drops", "Glass fragments", "Paint chips"],
          correctAnswer: 1,
          explanation: "Blood drops are biological evidence, not trace evidence."
        },
        {
          id: 3,
          question: "What can hair indicate?",
          options: ["Individual identity", "Exact age", "Race characteristics", "Occupation"],
          correctAnswer: 2,
          explanation: "Hair can indicate racial characteristics but not exact identity."
        },
        {
          id: 4,
          question: "What type of fiber is cotton?",
          options: ["Synthetic", "Natural", "Mixed", "Artificial"],
          correctAnswer: 1,
          explanation: "Cotton is a natural plant fiber."
        },
        {
          id: 5,
          question: "What can broken glass edges do?",
          options: ["Dissolve", "Match like puzzles", "Change color", "Melt"],
          correctAnswer: 1,
          explanation: "Broken glass edges can sometimes be matched directly."
        },
        {
          id: 6,
          question: "How many layers does paint typically have?",
          options: ["One", "Two", "Multiple", "None"],
          correctAnswer: 2,
          explanation: "Paint typically has multiple layers: primer, color, clear coat."
        },
        {
          id: 7,
          question: "What collects hairs and fibers with tape?",
          options: ["Vacuuming", "Tape Lifting", "Hand Picking", "Combing"],
          correctAnswer: 1,
          explanation: "Tape lifting uses clear adhesive tape to collect trace evidence."
        },
        {
          id: 8,
          question: "What examines color precisely?",
          options: ["Microscope", "Microspectrophotometry", "Chromatography", "SEM-EDS"],
          correctAnswer: 1,
          explanation: "Microspectrophotometry measures color scientifically."
        },
        {
          id: 9,
          question: "What type of evidence is trace evidence?",
          options: ["Individual", "Class", "Direct", "Testimonial"],
          correctAnswer: 1,
          explanation: "Trace evidence is class evidence, not individual evidence."
        },
        {
          id: 10,
          question: "What can soil evidence indicate?",
          options: ["Exact address", "Geographic location", "Time of day", "Weather"],
          correctAnswer: 1,
          explanation: "Soil can indicate general geographic origin."
        },
        {
          id: 11,
          question: "What is GSR?",
          options: ["Glass Sample Residue", "Gunshot Residue", "Genetic Sample Report", "Ground Soil Remains"],
          correctAnswer: 1,
          explanation: "GSR stands for Gunshot Residue."
        },
        {
          id: 12,
          question: "What examines chemical components?",
          options: ["Microscopy", "Chromatography", "Visual inspection", "Tape lifting"],
          correctAnswer: 1,
          explanation: "Chromatography separates chemical components for analysis."
        },
        {
          id: 13,
          question: "What human hair varies by body area?",
          options: ["Color only", "DNA", "All characteristics", "Length only"],
          correctAnswer: 2,
          explanation: "Human hair characteristics vary by body region."
        },
        {
          id: 14,
          question: "What is nylon?",
          options: ["Natural fiber", "Synthetic fiber", "Mineral", "Animal product"],
          correctAnswer: 1,
          explanation: "Nylon is a synthetic fiber."
        },
        {
          id: 15,
          question: "What measures glass properties?",
          options: ["Refractive index", "Color only", "Smell", "Taste"],
          correctAnswer: 0,
          explanation: "Refractive index is an important glass property."
        },
        {
          id: 16,
          question: "What helps identify vehicles from paint?",
          options: ["Color only", "Paint databases", "Smell", "Texture"],
          correctAnswer: 1,
          explanation: "Paint databases contain information on vehicle paints."
        },
        {
          id: 17,
          question: "What is SEM-EDS?",
          options: ["Simple Evidence Method", "Scanning Electron Microscope", "Standard Evaluation", "Trace Analysis"],
          correctAnswer: 1,
          explanation: "SEM-EDS is Scanning Electron Microscope with Energy Dispersive Spectroscopy."
        },
        {
          id: 18,
          question: "What does absence of trace evidence prove?",
          options: ["No contact", "Contact occurred", "Nothing definite", "Innocence"],
          correctAnswer: 2,
          explanation: "Absence of evidence doesn't prove absence of contact."
        },
        {
          id: 19,
          question: "What collects evidence from large areas?",
          options: ["Tweezers", "Vacuuming", "Tape", "Comb"],
          correctAnswer: 1,
          explanation: "Vacuuming with filter collection works for large areas."
        },
        {
          id: 20,
          question: "What increases significance of trace evidence?",
          options: ["Single match", "Multiple matching types", "Large size", "Bright color"],
          correctAnswer: 1,
          explanation: "Multiple types of matching evidence increase significance."
        }
      ]
    },
    {
      id: 6,
      title: "Forensic Documentation & Courtroom Testimony",
      content: `# Forensic Reporting and Testimony

## The Forensic Report
Every forensic examination requires a written report. The report documents methods, findings, and conclusions. It must be clear, accurate, and objective. Reports become legal documents.

## Report Components
1. **Case Information**: Agency, case number, dates
2. **Evidence Received**: List of items examined
3. **Methods Used**: Scientific procedures applied
4. **Results**: What was found
5. **Conclusions**: Interpretation of results
6. **Limitations**: Any constraints on findings

## Writing Effective Reports
Use clear, simple language. Avoid technical jargon when possible. Be objective - report only what the evidence shows. Distinguish between observations and opinions. Number pages and include signatures.

## Chain of Custody Documentation
Every evidence transfer must be documented. The chain shows who had the evidence, when, and why. Breaks in the chain can make evidence inadmissible. Use standardized forms for consistency.

## Preparing for Court
Review all case materials before testimony. Re-examine evidence if necessary. Prepare visual aids if allowed. Practice explaining complex concepts simply. Know your qualifications and limitations.

## Expert Witness Testimony
Forensic scientists often testify as expert witnesses. Experts can offer opinions based on their expertise. They must establish their qualifications first. They should educate, not advocate.

## Testimony Guidelines
- Speak clearly and slowly
- Face the jury when answering
- Use simple analogies for complex ideas
- Admit when you don't know something
- Remain calm under cross-examination

## Common Courtroom Questions
Be prepared for questions about: methods used, error rates, laboratory protocols, quality control, alternative explanations, and limitations of the analysis.

## Ethics in Forensic Science
Maintain scientific integrity. Don't exaggerate findings. Disclose any limitations. Remain impartial. Correct errors promptly. Follow professional codes of conduct.

## Continuing Education
Forensic science evolves constantly. Stay current with new methods and research. Attend professional conferences. Read scientific journals. Participate in proficiency testing.`,
      completed: false,
      quiz: [
        {
          id: 1,
          question: "What does a forensic report document?",
          options: ["Only findings", "Methods and findings", "Personal opinions", "What police want"],
          correctAnswer: 1,
          explanation: "Reports document methods, findings, and conclusions."
        },
        {
          id: 2,
          question: "What is the first report component?",
          options: ["Conclusions", "Case information", "Methods", "Results"],
          correctAnswer: 1,
          explanation: "Case information (agency, case number) comes first."
        },
        {
          id: 3,
          question: "What should reports avoid?",
          options: ["Clear language", "Technical jargon", "Facts", "Evidence list"],
          correctAnswer: 1,
          explanation: "Avoid unnecessary technical jargon for clarity."
        },
        {
          id: 4,
          question: "What can breaks in the chain cause?",
          options: ["Better evidence", "Inadmissible evidence", "Faster processing", "Lower cost"],
          correctAnswer: 1,
          explanation: "Chain of custody breaks can make evidence inadmissible."
        },
        {
          id: 5,
          question: "What should you do before testimony?",
          options: ["Ignore the case", "Review materials", "Talk to media", "Meet with lawyers only"],
          correctAnswer: 1,
          explanation: "Always review all case materials before testifying."
        },
        {
          id: 6,
          question: "What can expert witnesses offer?",
          options: ["Only facts", "Opinions", "Legal advice", "Verdicts"],
          correctAnswer: 1,
          explanation: "Experts can offer opinions based on their expertise."
        },
        {
          id: 7,
          question: "Who should you face when answering?",
          options: ["The judge", "The lawyer asking", "The jury", "Your notes"],
          correctAnswer: 2,
          explanation: "Face the jury when answering to help them understand."
        },
        {
          id: 8,
          question: "What should you admit?",
          options: ["Everything", "When you don't know", "Nothing", "Only good things"],
          correctAnswer: 1,
          explanation: "Admit when you don't know something - it builds credibility."
        },
        {
          id: 9,
          question: "What question is common in court?",
          options: ["Favorite color", "Error rates", "Salary", "Political views"],
          correctAnswer: 1,
          explanation: "Questions about error rates are common in cross-examination."
        },
        {
          id: 10,
          question: "What should forensic scientists maintain?",
          options: ["Popularity", "Scientific integrity", "Secrets", "Speed"],
          correctAnswer: 1,
          explanation: "Scientific integrity is essential in forensic work."
        },
        {
          id: 11,
          question: "How many main report components are there?",
          options: ["Three", "Four", "Five", "Six"],
          correctAnswer: 3,
          explanation: "Six components: case info, evidence, methods, results, conclusions, limitations."
        },
        {
          id: 12,
          question: "What should visual aids do?",
          options: ["Confuse", "Simplify", "Entertain", "Delay"],
          correctAnswer: 1,
          explanation: "Visual aids should simplify complex information."
        },
        {
          id: 13,
          question: "What must experts establish first?",
          options: ["Opinions", "Qualifications", "Conclusions", "Bias"],
          correctAnswer: 1,
          explanation: "Experts must establish their qualifications before testifying."
        },
        {
          id: 14,
          question: "What should reports distinguish?",
          options: ["Good/bad", "Observations/opinions", "Police/suspects", "Day/night"],
          correctAnswer: 1,
          explanation: "Distinguish between observations and opinions."
        },
        {
          id: 15,
          question: "What should you do with errors?",
          options: ["Hide them", "Correct promptly", "Blame others", "Ignore them"],
          correctAnswer: 1,
          explanation: "Correct errors promptly to maintain integrity."
        },
        {
          id: 16,
          question: "What evolves constantly?",
          options: ["Courtrooms", "Forensic science", "Laws", "All of these"],
          correctAnswer: 1,
          explanation: "Forensic science methods and knowledge constantly evolve."
        },
        {
          id: 17,
          question: "What forms document evidence transfers?",
          options: ["Standardized forms", "Any paper", "Emails", "Text messages"],
          correctAnswer: 0,
          explanation: "Use standardized chain of custody forms."
        },
        {
          id: 18,
          question: "What should experts educate?",
          options: ["The jury", "Only the judge", "Themselves", "The media"],
          correctAnswer: 0,
          explanation: "Experts should educate the jury about scientific matters."
        },
        {
          id: 19,
          question: "What should you remain under cross-examination?",
          options: ["Calm", "Angry", "Silent", "Argumentative"],
          correctAnswer: 0,
          explanation: "Remain calm and professional during cross-examination."
        },
        {
          id: 20,
          question: "What helps stay current?",
          options: ["Ignore changes", "Professional conferences", "Only work", "Guess"],
          correctAnswer: 1,
          explanation: "Attend professional conferences to stay current."
        }
      ]
    }
  ],
  
  // FINAL EXAM - 40 QUESTIONS FROM ALL MODULES
  finalExam: {
    title: "Forensic Science Certificate Final Examination",
    description: "Comprehensive exam covering all 6 modules. Score 70% or higher to earn your certificate.",
    passingScore: 70,
    questions: [
      {
        id: 1,
        question: "What principle states 'every contact leaves a trace'?",
        options: ["Chain of Custody", "Locard's Exchange", "Forensic Rule", "Evidence Principle"],
        correctAnswer: 1,
        explanation: "Locard's Exchange Principle is fundamental to forensic science.",
        module: 1
      },
      {
        id: 2,
        question: "What should a first responder ensure first?",
        options: ["Evidence collection", "Scene safety", "Photography", "Witness interviews"],
        correctAnswer: 1,
        explanation: "Scene safety is the top priority.",
        module: 2
      },
      {
        id: 3,
        question: "What percentage of people have loop fingerprints?",
        options: ["30%", "65%", "5%", "50%"],
        correctAnswer: 1,
        explanation: "Approximately 65% of people have loop patterns.",
        module: 3
      },
      {
        id: 4,
        question: "What does DNA stand for?",
        options: ["Digital Nucleic Acid", "Deoxyribonucleic Acid", "Diagnostic Nuclear Analysis", "Developmental Nucleic Array"],
        correctAnswer: 1,
        explanation: "DNA stands for Deoxyribonucleic Acid.",
        module: 4
      },
      {
        id: 5,
        question: "What type of evidence are hairs and fibers?",
        options: ["Biological", "Trace", "Physical", "Direct"],
        correctAnswer: 1,
        explanation: "Hairs and fibers are trace evidence.",
        module: 5
      },
      {
        id: 6,
        question: "What should reports avoid for clarity?",
        options: ["Facts", "Technical jargon", "Evidence lists", "Conclusions"],
        correctAnswer: 1,
        explanation: "Avoid unnecessary technical jargon.",
        module: 6
      },
      {
        id: 7,
        question: "What tracks evidence handling?",
        options: ["Police report", "Chain of Custody", "Evidence log", "All of these"],
        correctAnswer: 1,
        explanation: "Chain of Custody documents evidence handling.",
        module: 1
      },
      {
        id: 8,
        question: "How many crime scene zones are typical?",
        options: ["One", "Two", "Three", "Four"],
        correctAnswer: 1,
        explanation: "Two zones: inner core and outer perimeter.",
        module: 2
      },
      {
        id: 9,
        question: "What fingerprint pattern is circular?",
        options: ["Loop", "Arch", "Whorl", "Line"],
        correctAnswer: 2,
        explanation: "Whorls have circular or spiral patterns.",
        module: 3
      },
      {
        id: 10,
        question: "What base pairs with Thymine?",
        options: ["Guanine", "Cytosine", "Adenine", "Uracil"],
        correctAnswer: 2,
        explanation: "Adenine pairs with Thymine in DNA.",
        module: 4
      },
      {
        id: 11,
        question: "What collects trace evidence with tape?",
        options: ["Vacuuming", "Tape lifting", "Hand picking", "Combing"],
        correctAnswer: 1,
        explanation: "Tape lifting uses adhesive to collect evidence.",
        module: 5
      },
      {
        id: 12,
        question: "What must experts establish first in court?",
        options: ["Opinions", "Qualifications", "Conclusions", "Bias"],
        correctAnswer: 1,
        explanation: "Experts must establish their qualifications.",
        module: 6
      },
      {
        id: 13,
        question: "What is biological evidence?",
        options: ["Weapons", "Blood", "Fibers", "Paint"],
        correctAnswer: 1,
        explanation: "Blood is biological evidence.",
        module: 1
      },
      {
        id: 14,
        question: "What search pattern uses perpendicular lines?",
        options: ["Spiral", "Grid", "Strip", "Zone"],
        correctAnswer: 1,
        explanation: "Grid pattern uses crossing perpendicular lines.",
        module: 2
      },
      {
        id: 15,
        question: "What develops latent prints with super glue?",
        options: ["Powder", "Cyanoacrylate", "Ninhydrin", "Developer"],
        correctAnswer: 1,
        explanation: "Cyanoacrylate (super glue) fuming develops prints.",
        module: 3
      },
      {
        id: 16,
        question: "What makes DNA copies?",
        options: ["Extraction", "Quantification", "PCR", "Separation"],
        correctAnswer: 2,
        explanation: "PCR (Polymerase Chain Reaction) amplifies DNA.",
        module: 4
      },
      {
        id: 17,
        question: "What type of evidence is trace evidence?",
        options: ["Individual", "Class", "Direct", "Testimonial"],
        correctAnswer: 1,
        explanation: "Trace evidence is class evidence.",
        module: 5
      },
      {
        id: 18,
        question: "What can chain breaks cause?",
        options: ["Better evidence", "Inadmissible evidence", "Faster processing", "No effect"],
        correctAnswer: 1,
        explanation: "Chain breaks can make evidence inadmissible.",
        module: 6
      },
      {
        id: 19,
        question: "What does 'corpus delicti' mean?",
        options: ["Body of victim", "Murder weapon", "Proof crime occurred", "Suspect's confession"],
        correctAnswer: 2,
        explanation: "Corpus delicti means proof a crime occurred.",
        module: 1
      },
      {
        id: 20,
        question: "What should wet evidence be placed in?",
        options: ["Paper bag", "Airtight container", "Plastic bag", "Cardboard box"],
        correctAnswer: 1,
        explanation: "Wet evidence needs airtight containers.",
        module: 2
      },
      {
        id: 21,
        question: "What is the ACE-V method?",
        options: ["Arrest procedure", "Fingerprint comparison", "Evidence collection", "Court testimony"],
        correctAnswer: 1,
        explanation: "ACE-V is for fingerprint comparison.",
        module: 3
      },
      {
        id: 22,
        question: "What does STR stand for?",
        options: ["Standard Tandem Repeats", "Short Tandem Repeats", "Simple Testing Regions", "Scientific Technical Review"],
        correctAnswer: 1,
        explanation: "STR stands for Short Tandem Repeats.",
        module: 4
      },
      {
        id: 23,
        question: "What principle explains trace transfer?",
        options: ["Chain of Custody", "Locard's Principle", "Forensic Law", "Evidence Rule"],
        correctAnswer: 1,
        explanation: "Locard's Exchange Principle explains transfer.",
        module: 5
      },
      {
        id: 24,
        question: "What should you admit in court?",
        options: ["Everything", "When you don't know", "Nothing", "Only positive things"],
        correctAnswer: 1,
        explanation: "Admit when you don't know something.",
        module: 6
      },
      {
        id: 25,
        question: "What are the three forensic branches?",
        options: ["Police, Lab, Court", "CSI, Lab, Medical", "Collection, Analysis, Testimony", "Field, Office, Court"],
        correctAnswer: 1,
        explanation: "Crime Scene Investigation, Laboratory Analysis, Forensic Medicine.",
        module: 1
      },
      {
        id: 26,
        question: "What documentation method includes sketches?",
        options: ["Photography", "Sketching", "Note-taking", "Video"],
        correctAnswer: 1,
        explanation: "Sketching creates diagrams of the scene.",
        module: 2
      },
      {
        id: 27,
        question: "What percentage have arch fingerprints?",
        options: ["65%", "30%", "5%", "10%"],
        correctAnswer: 2,
        explanation: "About 5% of people have arch patterns.",
        module: 3
      },
      {
        id: 28,
        question: "What is CODIS?",
        options: ["Court database", "DNA database", "Evidence system", "Police records"],
        correctAnswer: 1,
        explanation: "CODIS is the FBI's DNA database.",
        module: 4
      },
      {
        id: 29,
        question: "What examines hair scale patterns?",
        options: ["DNA test", "Microscopy", "Chemical test", "Visual inspection"],
        correctAnswer: 1,
        explanation: "Microscopy examines hair characteristics.",
        module: 5
      },
      {
        id: 30,
        question: "What should reports distinguish?",
        options: ["Good/bad", "Observations/opinions", "Police/suspects", "Day/night"],
        correctAnswer: 1,
        explanation: "Distinguish observations from opinions.",
        module: 6
      },
      {
        id: 31,
        question: "What is an alibi?",
        options: ["Defense", "Proof elsewhere", "Confession", "Witness"],
        correctAnswer: 1,
        explanation: "An alibi proves someone was elsewhere.",
        module: 1
      },
      {
        id: 32,
        question: "What pattern starts outside and moves in?",
        options: ["Grid", "Zone", "Spiral", "Strip"],
        correctAnswer: 2,
        explanation: "Spiral pattern starts at perimeter.",
        module: 2
      },
      {
        id: 33,
        question: "What should be done before lifting prints?",
        options: ["Develop", "Photograph", "Label", "Compare"],
        correctAnswer: 1,
        explanation: "Photograph prints before lifting.",
        module: 3
      },
      {
        id: 34,
        question: "What can DNA NOT determine?",
        options: ["Identity", "When deposited", "Family relationships", "Source"],
        correctAnswer: 1,
        explanation: "DNA can't determine when deposited.",
        module: 4
      },
      {
        id: 35,
        question: "What is GSR?",
        options: ["Glass Sample Residue", "Gunshot Residue", "Genetic Sample Report", "Ground Soil Remains"],
        correctAnswer: 1,
        explanation: "GSR stands for Gunshot Residue.",
        module: 5
      },
      {
        id: 36,
        question: "What evolves constantly?",
        options: ["Courtrooms", "Forensic science", "Laws", "All of these"],
        correctAnswer: 1,
        explanation: "Forensic science methods evolve constantly.",
        module: 6
      },
      {
        id: 37,
        question: "What are the forensic process steps?",
        options: ["3 steps", "4 steps", "5 steps", "6 steps"],
        correctAnswer: 2,
        explanation: "5 steps: recognition, documentation, collection, analysis, interpretation.",
        module: 1
      },
      {
        id: 38,
        question: "What prevents contamination?",
        options: ["Gloves", "Clean tools", "Proper packaging", "All of these"],
        correctAnswer: 3,
        explanation: "All these practices prevent contamination.",
        module: 2
      },
      {
        id: 39,
        question: "What is the Henry System for?",
        options: ["Evidence collection", "Fingerprint classification", "DNA analysis", "Court testimony"],
        correctAnswer: 1,
        explanation: "Henry System classifies fingerprints.",
        module: 3
      },
      {
        id: 40,
        question: "What examines paint layers?",
        options: ["Visual inspection", "Chemical analysis", "Microscopy", "All of these"],
        correctAnswer: 3,
        explanation: "All methods help examine paint evidence.",
        module: 5
      }
    ]
  }
};

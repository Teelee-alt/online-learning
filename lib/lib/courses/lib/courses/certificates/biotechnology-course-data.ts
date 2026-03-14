// biotechnology-certificate.ts

export const BiotechnologyCertificate = {
  // ==================== COURSE METADATA ====================
  id: "biotechnology-certificate",
  title: "Biotechnology (Certificate)",
  description: "Foundational course covering basic biotechnology principles, laboratory techniques, genetic engineering fundamentals, and applications in healthcare, agriculture, and industry. Learn essential skills for entry-level biotech positions.",
  duration: "6 weeks",
  timeCommitment: "4-6 hours per week",
  price: 12,
  upgradePrice: 18,
  icon: "🧬",
  badge: "Certificate",
  
  // ==================== MODULES ====================
  modules: [
    {
      id: 1,
      title: "Introduction to Biotechnology",
      content: `# Introduction to Biotechnology

## What is Biotechnology?
Biotechnology is the application of biological systems, organisms, or derivatives to develop or create products and technologies that improve human life and the environment. It combines biology with technology to solve problems and create useful products.

### Historical Development
**Traditional Biotechnology** (Ancient to 19th century):
- Fermentation for bread, cheese, wine, and beer
- Selective breeding of plants and animals
- Use of microorganisms in food preservation

**Modern Biotechnology** (20th century onward):
- **1953**: Discovery of DNA structure by Watson and Crick
- **1973**: First successful recombinant DNA experiment
- **1982**: First genetically engineered insulin approved
- **1990**: Human Genome Project begins
- **2003**: Human genome sequencing completed

### Major Areas of Biotechnology
1. **Medical Biotechnology**: Healthcare applications
2. **Agricultural Biotechnology**: Crop and livestock improvement
3. **Industrial Biotechnology**: Manufacturing and environmental applications
4. **Environmental Biotechnology**: Pollution control and remediation
5. **Bioinformatics**: Data analysis and computational biology

### Key Biotechnology Principles
**Central Dogma of Molecular Biology**:
- **DNA → RNA → Protein**
- Information flows from DNA to RNA to proteins
- DNA stores genetic information
- RNA transfers information
- Proteins perform cellular functions

**Genetic Engineering Basics**:
- **Recombinant DNA Technology**: Combining DNA from different sources
- **Gene Cloning**: Making copies of specific genes
- **Gene Expression**: Controlling when and where genes are active

### Biotechnology Applications Overview
**Healthcare Applications**:
- **Therapeutic Proteins**: Insulin, growth hormones, antibodies
- **Vaccines**: Recombinant vaccines like hepatitis B vaccine
- **Diagnostics**: DNA tests, biosensors, rapid tests
- **Gene Therapy**: Treating genetic disorders

**Agricultural Applications**:
- **GM Crops**: Pest-resistant, herbicide-tolerant crops
- **Animal Biotechnology**: Transgenic animals, cloning
- **Biofertilizers**: Microorganisms improving soil fertility

**Industrial Applications**:
- **Biofuels**: Ethanol from corn or cellulose
- **Bioplastics**: Biodegradable plastics from biomass
- **Enzymes**: Detergent enzymes, food processing enzymes

**Industry statistic**: The global biotechnology market is valued at over $1 trillion, with healthcare biotechnology accounting for approximately 60% of the market.`,
      completed: false,
      quiz: [
        {
          id: 1,
          question: "What is the Central Dogma of Molecular Biology?",
          options: [
            "DNA → RNA → Protein",
            "Protein → RNA → DNA",
            "RNA → DNA → Protein",
            "DNA → Protein → RNA"
          ],
          correctAnswer: 0,
          explanation: "The Central Dogma describes the flow of genetic information: DNA is transcribed to RNA, which is translated to protein."
        },
        {
          id: 2,
          question: "What percentage of the global biotech market is healthcare biotechnology?",
          options: [
            "60%",
            "30%",
            "75%",
            "45%"
          ],
          correctAnswer: 0,
          explanation: "Healthcare biotechnology accounts for approximately 60% of the global biotechnology market value."
        },
        {
          id: 3,
          question: "When was the DNA structure discovered?",
          options: [
            "1953",
            "1943",
            "1963",
            "1973"
          ],
          correctAnswer: 0,
          explanation: "James Watson and Francis Crick discovered the double helix structure of DNA in 1953."
        },
        {
          id: 4,
          question: "Which area of biotechnology focuses on crop improvement?",
          options: [
            "Agricultural Biotechnology",
            "Medical Biotechnology",
            "Industrial Biotechnology",
            "Environmental Biotechnology"
          ],
          correctAnswer: 0,
          explanation: "Agricultural Biotechnology focuses on improving crops through genetic engineering and other biotech methods."
        },
        {
          id: 5,
          question: "What was the first genetically engineered pharmaceutical approved?",
          options: [
            "Insulin",
            "Human Growth Hormone",
            "Hepatitis B Vaccine",
            "Erythropoietin"
          ],
          correctAnswer: 0,
          explanation: "Genetically engineered human insulin was the first recombinant DNA pharmaceutical approved in 1982."
        },
        {
          id: 6,
          question: "What does recombinant DNA technology involve?",
          options: [
            "Combining DNA from different sources",
            "Copying DNA within cells",
            "Destroying unwanted DNA",
            "Sequencing DNA molecules"
          ],
          correctAnswer: 0,
          explanation: "Recombinant DNA technology involves combining DNA molecules from different biological sources."
        },
        {
          id: 7,
          question: "When did the Human Genome Project begin?",
          options: [
            "1990",
            "1980",
            "2000",
            "1995"
          ],
          correctAnswer: 0,
          explanation: "The Human Genome Project officially began in 1990 with the goal of sequencing the entire human genome."
        },
        {
          id: 8,
          question: "Which application uses microorganisms for pollution control?",
          options: [
            "Environmental Biotechnology",
            "Medical Biotechnology",
            "Agricultural Biotechnology",
            "Industrial Biotechnology"
          ],
          correctAnswer: 0,
          explanation: "Environmental Biotechnology uses microorganisms to clean up pollution and remediate contaminated sites."
        },
        {
          id: 9,
          question: "What is the global biotechnology market valued at?",
          options: [
            "Over $1 trillion",
            "Over $500 billion",
            "Over $2 trillion",
            "Over $300 billion"
          ],
          correctAnswer: 0,
          explanation: "The global biotechnology market is currently valued at over $1 trillion and continues to grow rapidly."
        },
        {
          id: 10,
          question: "What traditional biotechnology process makes bread rise?",
          options: [
            "Fermentation",
            "Distillation",
            "Pasteurization",
            "Centrifugation"
          ],
          correctAnswer: 0,
          explanation: "Fermentation by yeast produces carbon dioxide that makes bread rise, a traditional biotechnology application."
        },
        {
          id: 11,
          question: "Which biotechnology area focuses on manufacturing?",
          options: [
            "Industrial Biotechnology",
            "Medical Biotechnology",
            "Agricultural Biotechnology",
            "Environmental Biotechnology"
          ],
          correctAnswer: 0,
          explanation: "Industrial Biotechnology uses biological processes for manufacturing products like enzymes, chemicals, and biofuels."
        },
        {
          id: 12,
          question: "When was the human genome sequencing completed?",
          options: [
            "2003",
            "1993",
            "2013",
            "2000"
          ],
          correctAnswer: 0,
          explanation: "The sequencing of the human genome was completed in 2003, ahead of schedule."
        },
        {
          id: 13,
          question: "What is gene cloning?",
          options: [
            "Making copies of specific genes",
            "Creating new genes",
            "Destroying unwanted genes",
            "Sequencing genes"
          ],
          correctAnswer: 0,
          explanation: "Gene cloning involves making multiple identical copies of a specific gene or DNA fragment."
        },
        {
          id: 14,
          question: "Which recombinant vaccine was mentioned?",
          options: [
            "Hepatitis B vaccine",
            "Polio vaccine",
            "Measles vaccine",
            "COVID-19 vaccine"
          ],
          correctAnswer: 0,
          explanation: "The hepatitis B vaccine was one of the first successful recombinant vaccines developed through biotechnology."
        },
        {
          id: 15,
          question: "What does bioinformatics focus on?",
          options: [
            "Data analysis and computational biology",
            "Laboratory experiments only",
            "Field research",
            "Clinical trials"
          ],
          correctAnswer: 0,
          explanation: "Bioinformatics combines biology with computer science to analyze biological data like DNA sequences."
        },
        {
          id: 16,
          question: "What is gene expression?",
          options: [
            "Controlling when and where genes are active",
            "Destroying genes",
            "Creating new genes",
            "Sequencing genes"
          ],
          correctAnswer: 0,
          explanation: "Gene expression refers to the process by which information from a gene is used to create functional products like proteins."
        },
        {
          id: 17,
          question: "What are GM crops?",
          options: [
            "Genetically modified crops",
            "Growth modified crops",
            "Germination modified crops",
            "Greenhouse maintained crops"
          ],
          correctAnswer: 0,
          explanation: "GM stands for Genetically Modified - crops that have been altered using genetic engineering techniques."
        },
        {
          id: 18,
          question: "What traditional process preserves food using microorganisms?",
          options: [
            "Fermentation",
            "Freezing",
            "Canning",
            "Dehydration"
          ],
          correctAnswer: 0,
          explanation: "Fermentation uses microorganisms to preserve food while creating desirable flavors and textures."
        },
        {
          id: 19,
          question: "What is the goal of gene therapy?",
          options: [
            "Treating genetic disorders",
            "Creating new organisms",
            "Improving crop yields",
            "Producing biofuels"
          ],
          correctAnswer: 0,
          explanation: "Gene therapy aims to treat genetic disorders by introducing, removing, or altering genetic material in cells."
        },
        {
          id: 20,
          question: "What industrial application produces biodegradable plastics?",
          options: [
            "Bioplastics",
            "Biofuels",
            "Biofertilizers",
            "Biosensors"
          ],
          correctAnswer: 0,
          explanation: "Bioplastics are biodegradable plastics produced from renewable biomass sources through biotechnology."
        }
      ]
    },
    {
      id: 2,
      title: "Basic Laboratory Techniques",
      content: `# Basic Laboratory Techniques

## Essential Laboratory Skills
Proper laboratory techniques are fundamental to biotechnology research and development. Mastering these basic skills ensures accurate results, safety, and reproducibility in experiments.

### Laboratory Safety Principles
**Personal Protective Equipment (PPE)**:
- **Lab coats**: Protection from chemical spills and contamination
- **Safety goggles**: Eye protection from splashes and particles
- **Gloves**: Appropriate types for different chemicals
- **Closed-toe shoes**: Foot protection

**Chemical Safety**:
- **MSDS/SDS**: Material Safety Data Sheets for chemical information
- **Proper labeling**: All containers must be clearly labeled
- **Chemical storage**: Incompatible chemicals stored separately
- **Spill procedures**: Immediate cleanup with appropriate materials

**Biological Safety**:
- **Biosafety levels**: BSL-1 to BSL-4 based on risk
- **Sterilization**: Autoclaving, filtration, chemical treatment
- **Disposal**: Proper disposal of biological waste
- **Containment**: Working in appropriate biosafety cabinets

### Measurement and Solution Preparation
**Volumetric Measurements**:
- **Pipettes**: Micropipettes (1μL-1000μL), macro pipettes
- **Graduated cylinders**: For approximate volume measurements
- **Volumetric flasks**: Precise solution preparation
- **Burettes**: For titrations and precise dispensing

**Solution Preparation**:
- **Molarity (M)**: moles of solute per liter of solution
- **Percent solutions**: Weight/volume, volume/volume, weight/weight
- **Dilutions**: C1V1 = C2V2 formula
- **pH adjustment**: Using acids, bases, and buffers

**Common Concentrations in Biotechnology**:
- **Tris buffer**: 10-100 mM, pH 7.0-8.0
- **SDS solution**: 0.1-2% for protein denaturation
- **Agarose gels**: 0.8-2% for DNA separation
- **Antibiotics**: Specific concentrations for selection

### Sterile Technique and Microbiology
**Aseptic Technique Principles**:
- **Work area disinfection**: 70% ethanol or other disinfectants
- **Flame sterilization**: Bunsen burners for loop sterilization
- **Media preparation**: Autoclaving at 121°C for 15-20 minutes
- **Contamination prevention**: Minimizing exposure to air

**Microbial Culture Methods**:
- **Media types**: Liquid (broth) and solid (agar plates)
- **Inoculation methods**: Streaking, spreading, stabbing
- **Incubation conditions**: Temperature, atmosphere, time
- **Storage**: Short-term (plates) and long-term (cryopreservation)

**Common Microbial Media**:
- **LB broth**: General bacterial growth
- **YPD**: Yeast growth medium
- **Minimal media**: Defined components for specific studies
- **Selective media**: Contains antibiotics or other selective agents

### Basic Separation Techniques
**Centrifugation**:
- **Principles**: Separation by density and particle size
- **Types**: Microcentrifuges, refrigerated centrifuges, ultracentrifuges
- **Speeds**: RPM (revolutions per minute) vs RCF (relative centrifugal force)
- **Applications**: Cell pelleting, protein purification, DNA isolation

**Filtration**:
- **Membrane filters**: 0.22μm for sterilization, 0.45μm for clarification
- **Depth filters**: For larger volumes and particle removal
- **Syringe filters**: Small volume sterilization
- **Vacuum filtration**: For larger volumes

**Chromatography Basics**:
- **Size exclusion**: Separation by molecular size
- **Ion exchange**: Separation by charge
- **Affinity**: Specific binding interactions
- **Reverse phase**: Hydrophobic interactions

### Laboratory Equipment and Maintenance
**Essential Equipment**:
- **Microscopes**: Light microscopes, phase contrast, fluorescence
- **Spectrophotometers**: Measuring absorbance at specific wavelengths
- **Thermocyclers**: For PCR amplification
- **Electrophoresis equipment**: For separating DNA, RNA, proteins

**Equipment Calibration and Maintenance**:
- **pH meters**: Regular calibration with standard buffers
- **Balances**: Regular calibration and leveling
- **Pipettes**: Regular calibration and maintenance
- **Incubators**: Temperature calibration and monitoring

**Quality Control Procedures**:
- **Positive controls**: Known samples that should work
- **Negative controls**: Samples that should not react
- **Replicates**: Multiple samples for statistical validity
- **Standard curves**: For quantitative measurements

**Industry standard**: Laboratories typically require documentation of all equipment calibration, with pipettes calibrated every 3-6 months and balances calibrated monthly.`,
      completed: false,
      quiz: [
        {
          id: 1,
          question: "What does PPE stand for in laboratory safety?",
          options: [
            "Personal Protective Equipment",
            "Professional Protection Equipment",
            "Personal Prevention Equipment",
            "Professional Prevention Equipment"
          ],
          correctAnswer: 0,
          explanation: "PPE stands for Personal Protective Equipment, including lab coats, goggles, gloves, and appropriate footwear."
        },
        {
          id: 2,
          question: "How often should pipettes typically be calibrated?",
          options: [
            "Every 3-6 months",
            "Every month",
            "Every year",
            "Every 2 years"
          ],
          correctAnswer: 0,
          explanation: "Pipettes should be calibrated every 3-6 months to ensure accurate volume measurements."
        },
        {
          id: 3,
          question: "What is the formula for calculating dilutions?",
          options: [
            "C1V1 = C2V2",
            "M1V1 = M2V2",
            "D1V1 = D2V2",
            "P1V1 = P2V2"
          ],
          correctAnswer: 0,
          explanation: "The dilution formula C1V1 = C2V2 calculates volumes needed for preparing diluted solutions from concentrated stocks."
        },
        {
          id: 4,
          question: "What does SDS stand for in chemical safety?",
          options: [
            "Safety Data Sheet",
            "Standard Data Sheet",
            "Safety Documentation Sheet",
            "Standard Documentation Sheet"
          ],
          correctAnswer: 0,
          explanation: "SDS stands for Safety Data Sheet, providing information on chemical properties, hazards, and safe handling procedures."
        },
        {
          id: 5,
          question: "What temperature is used for autoclave sterilization?",
          options: [
            "121°C",
            "100°C",
            "80°C",
            "150°C"
          ],
          correctAnswer: 0,
          explanation: "Autoclaves typically operate at 121°C (250°F) for effective sterilization of laboratory media and equipment."
        },
        {
          id: 6,
          question: "What is molarity defined as?",
          options: [
            "Moles of solute per liter of solution",
            "Grams of solute per liter of solution",
            "Moles of solute per kilogram of solvent",
            "Grams of solute per 100mL of solution"
          ],
          correctAnswer: 0,
          explanation: "Molarity (M) = moles of solute divided by liters of solution, a common concentration unit in laboratories."
        },
        {
          id: 7,
          question: "What does BSL stand for in biological safety?",
          options: [
            "Biosafety Level",
            "Biological Safety Level",
            "Biohazard Safety Level",
            "Biological Security Level"
          ],
          correctAnswer: 0,
          explanation: "BSL stands for Biosafety Level, ranging from 1 (lowest risk) to 4 (highest risk) for biological agents."
        },
        {
          id: 8,
          question: "What is a common concentration range for Tris buffer?",
          options: [
            "10-100 mM",
            "1-10 mM",
            "100-500 mM",
            "0.1-1 M"
          ],
          correctAnswer: 0,
          explanation: "Tris buffer is commonly used at concentrations between 10-100 mM in molecular biology experiments."
        },
        {
          id: 9,
          question: "How often should laboratory balances be calibrated?",
          options: [
            "Monthly",
            "Weekly",
            "Quarterly",
            "Annually"
          ],
          correctAnswer: 0,
          explanation: "Laboratory balances should be calibrated monthly to ensure accurate weight measurements."
        },
        {
          id: 10,
          question: "What does RPM stand for in centrifugation?",
          options: [
            "Revolutions Per Minute",
            "Rotations Per Minute",
            "Relative Particle Movement",
            "Rapid Particle Motion"
          ],
          correctAnswer: 0,
          explanation: "RPM stands for Revolutions Per Minute, indicating how fast a centrifuge rotor spins."
        },
        {
          id: 11,
          question: "What percentage ethanol is commonly used for disinfection?",
          options: [
            "70%",
            "50%",
            "95%",
            "100%"
          ],
          correctAnswer: 0,
          explanation: "70% ethanol is commonly used for laboratory disinfection as it effectively kills microorganisms without evaporating too quickly."
        },
        {
          id: 12,
          question: "What type of chromatography separates by molecular size?",
          options: [
            "Size exclusion chromatography",
            "Ion exchange chromatography",
            "Affinity chromatography",
            "Reverse phase chromatography"
          ],
          correctAnswer: 0,
          explanation: "Size exclusion chromatography separates molecules based on their size as they pass through porous beads."
        },
        {
          id: 13,
          question: "What is the purpose of a negative control?",
          options: [
            "Shows what should not happen in the experiment",
            "Shows the expected positive result",
            "Measures instrument sensitivity",
            "Calibrates the equipment"
          ],
          correctAnswer: 0,
          explanation: "Negative controls contain all components except the test substance and should show no reaction or effect."
        },
        {
          id: 14,
          question: "What membrane filter size is used for sterilization?",
          options: [
            "0.22μm",
            "0.45μm",
            "1.0μm",
            "5.0μm"
          ],
          correctAnswer: 0,
          explanation: "0.22μm membrane filters are used for sterilization as they remove bacteria and other microorganisms."
        },
        {
          id: 15,
          question: "What is the purpose of flame sterilization?",
          options: [
            "Sterilizing inoculation loops",
            "Heating solutions",
            "Melting agar",
            "Drying glassware"
          ],
          correctAnswer: 0,
          explanation: "Flame sterilization using Bunsen burners is used to sterilize inoculation loops and needles before and after use."
        },
        {
          id: 16,
          question: "What does RCF stand for in centrifugation?",
          options: [
            "Relative Centrifugal Force",
            "Rapid Centrifugal Force",
            "Relative Cell Fractionation",
            "Rapid Cell Fractionation"
          ],
          correctAnswer: 0,
          explanation: "RCF stands for Relative Centrifugal Force, which is more accurate than RPM for describing centrifugation conditions."
        },
        {
          id: 17,
          question: "What is LB broth used for?",
          options: [
            "General bacterial growth",
            "Yeast growth only",
            "Plant tissue culture",
            "Mammalian cell culture"
          ],
          correctAnswer: 0,
          explanation: "LB (Luria-Bertani) broth is a common medium for growing E. coli and other bacteria in laboratory settings."
        },
        {
          id: 18,
          question: "What is the purpose of selective media?",
          options: [
            "Contains agents to select for specific organisms",
            "Promotes growth of all microorganisms",
            "Inhibits all microbial growth",
            "Only contains minimal nutrients"
          ],
          correctAnswer: 0,
          explanation: "Selective media contains antibiotics or other agents that allow growth of only certain microorganisms."
        },
        {
          id: 19,
          question: "What is the purpose of a positive control?",
          options: [
            "Shows the expected result when everything works",
            "Shows what should not happen",
            "Measures background noise",
            "Calibrates instruments"
          ],
          correctAnswer: 0,
          explanation: "Positive controls contain known components that should produce the expected positive result in an experiment."
        },
        {
          id: 20,
          question: "What is YPD medium used for?",
          options: [
            "Yeast growth",
            "Bacterial growth",
            "Mammalian cell culture",
            "Plant tissue culture"
          ],
          correctAnswer: 0,
          explanation: "YPD (Yeast Extract Peptone Dextrose) is a rich medium commonly used for growing yeast in laboratory settings."
        }
      ]
    },
    {
      id: 3,
      title: "Molecular Biology Fundamentals",
      content: `# Molecular Biology Fundamentals

## The Molecules of Life
Molecular biology focuses on understanding biological processes at the molecular level, particularly the interactions between DNA, RNA, and proteins that control cellular functions.

### DNA Structure and Function
**DNA Double Helix Structure**:
- **Sugar-phosphate backbone**: Deoxyribose sugar and phosphate groups
- **Nitrogenous bases**: Adenine (A), Thymine (T), Cytosine (C), Guanine (G)
- **Base pairing**: A pairs with T, C pairs with G (Chargaff's rules)
- **Antiparallel strands**: 5'→3' direction opposite in each strand

**DNA Organization**:
- **Chromosomes**: Packaged DNA-protein complexes
- **Genes**: Functional units of heredity
- **Genome**: Complete set of genetic material
- **Non-coding DNA**: Regulatory sequences, introns, repetitive DNA

**DNA Replication**:
- **Semiconservative replication**: Each new DNA molecule contains one old and one new strand
- **Enzymes involved**: DNA polymerase, helicase, ligase, primase
- **Replication forks**: Sites where DNA unwinds and replication occurs
- **Proofreading**: DNA polymerase error correction mechanisms

### RNA Structure and Types
**RNA vs DNA Differences**:
- **Sugar**: Ribose in RNA vs deoxyribose in DNA
- **Base**: Uracil (U) replaces Thymine (T) in RNA
- **Structure**: Usually single-stranded vs DNA double-stranded
- **Stability**: Generally less stable than DNA

**Major RNA Types**:
1. **mRNA (messenger RNA)**: Carries genetic code from DNA to ribosomes
2. **tRNA (transfer RNA)**: Brings amino acids to ribosomes during translation
3. **rRNA (ribosomal RNA)**: Structural component of ribosomes
4. **Other non-coding RNAs**: miRNA, siRNA, snRNA with regulatory functions

### Protein Synthesis
**Transcription Process**:
- **Initiation**: RNA polymerase binds to promoter region
- **Elongation**: RNA synthesis along DNA template
- **Termination**: RNA polymerase detaches at terminator
- **Processing**: 5' capping, polyadenylation, splicing in eukaryotes

**Translation Process**:
- **Genetic code**: Triplet codons specify amino acids
- **Start codon**: AUG (methionine) initiates translation
- **Stop codons**: UAA, UAG, UGA terminate translation
- **Ribosome structure**: Large and small subunits with binding sites

**Protein Structure Levels**:
1. **Primary**: Amino acid sequence
2. **Secondary**: Local folding (α-helices, β-sheets)
3. **Tertiary**: Overall 3D structure of single polypeptide
4. **Quaternary**: Multiple polypeptide chains assembled

### Gene Regulation
**Prokaryotic Gene Regulation**:
- **Operon model**: Clusters of related genes controlled together
- **Lac operon**: Inducible system for lactose metabolism
- **Trp operon**: Repressible system for tryptophan synthesis
- **Promoters and operators**: DNA sequences controlling transcription

**Eukaryotic Gene Regulation**:
- **Transcription factors**: Proteins binding to regulatory sequences
- **Enhancers and silencers**: Distant regulatory elements
- **Chromatin remodeling**: DNA accessibility changes
- **Epigenetic modifications**: DNA methylation, histone modifications

### Molecular Techniques
**Nucleic Acid Isolation**:
- **DNA extraction**: Cell lysis, protein removal, DNA precipitation
- **RNA extraction**: Rapid processing to prevent degradation
- **Quality assessment**: Spectrophotometry, gel electrophoresis

**Polymerase Chain Reaction (PCR)**:
- **Denaturation**: Heating to separate DNA strands (94-95°C)
- **Annealing**: Primers bind to target sequences (50-65°C)
- **Extension**: DNA polymerase synthesizes new strands (72°C)
- **Applications**: DNA amplification, cloning, diagnostics

**Gel Electrophoresis**:
- **Agarose gels**: For DNA fragments (100 bp - 20 kb)
- **Polyacrylamide gels**: For proteins and small DNA fragments
- **Staining methods**: Ethidium bromide, SYBR Safe, Coomassie blue
- **Size standards**: DNA or protein ladders for comparison

**Blotting Techniques**:
- **Southern blot**: DNA detection using probes
- **Northern blot**: RNA detection
- **Western blot**: Protein detection using antibodies

**Industry fact**: PCR amplification can produce over 1 billion copies of a specific DNA sequence in just 30 cycles, starting from a single template molecule.`,
      completed: false,
      quiz: [
        {
          id: 1,
          question: "What are the DNA base pairing rules?",
          options: [
            "A pairs with T, C pairs with G",
            "A pairs with C, T pairs with G",
            "A pairs with U, C pairs with G",
            "A pairs with G, T pairs with C"
          ],
          correctAnswer: 0,
          explanation: "DNA base pairing follows Chargaff's rules: Adenine pairs with Thymine, and Cytosine pairs with Guanine."
        },
        {
          id: 2,
          question: "How many copies can PCR produce in 30 cycles?",
          options: [
            "Over 1 billion",
            "About 1 million",
            "About 10 million",
            "About 100 million"
          ],
          correctAnswer: 0,
          explanation: "PCR can theoretically produce over 1 billion copies (2^30 ≈ 1.07 billion) from a single DNA template in 30 cycles."
        },
        {
          id: 3,
          question: "Which RNA type carries genetic code to ribosomes?",
          options: [
            "mRNA",
            "tRNA",
            "rRNA",
            "miRNA"
          ],
          correctAnswer: 0,
          explanation: "Messenger RNA (mRNA) carries the genetic code from DNA to ribosomes for protein synthesis."
        },
        {
          id: 4,
          question: "What type of replication is DNA replication?",
          options: [
            "Semiconservative",
            "Conservative",
            "Dispersive",
            "Random"
          ],
          correctAnswer: 0,
          explanation: "DNA replication is semiconservative - each new DNA molecule contains one original strand and one newly synthesized strand."
        },
        {
          id: 5,
          question: "What base does RNA use instead of thymine?",
          options: [
            "Uracil",
            "Adenine",
            "Cytosine",
            "Guanine"
          ],
          correctAnswer: 0,
          explanation: "RNA uses uracil (U) instead of thymine (T) to pair with adenine during transcription."
        },
        {
          id: 6,
          question: "What is the start codon for protein synthesis?",
          options: [
            "AUG",
            "UAA",
            "UAG",
            "UGA"
          ],
          correctAnswer: 0,
          explanation: "AUG is the start codon that initiates protein synthesis and codes for methionine."
        },
        {
          id: 7,
          question: "What enzyme synthesizes DNA during replication?",
          options: [
            "DNA polymerase",
            "RNA polymerase",
            "DNA helicase",
            "DNA ligase"
          ],
          correctAnswer: 0,
          explanation: "DNA polymerase is the main enzyme that synthesizes new DNA strands during replication."
        },
        {
          id: 8,
          question: "Which operon is inducible for lactose metabolism?",
          options: [
            "Lac operon",
            "Trp operon",
            "Ara operon",
            "His operon"
          ],
          correctAnswer: 0,
          explanation: "The Lac operon is an inducible system that is turned on when lactose is present as an energy source."
        },
        {
          id: 9,
          question: "What sugar is in RNA?",
          options: [
            "Ribose",
            "Deoxyribose",
            "Glucose",
            "Fructose"
          ],
          correctAnswer: 0,
          explanation: "RNA contains ribose sugar, while DNA contains deoxyribose (missing one oxygen atom at the 2' position)."
        },
        {
          id: 10,
          question: "What are the stop codons?",
          options: [
            "UAA, UAG, UGA",
            "AUG, UAA, UAG",
            "UAG, UGA, UGG",
            "AUG, UAG, UGA"
          ],
          correctAnswer: 0,
          explanation: "UAA, UAG, and UGA are the three stop codons that signal termination of protein synthesis."
        },
        {
          id: 11,
          question: "What technique detects specific DNA sequences?",
          options: [
            "Southern blot",
            "Northern blot",
            "Western blot",
            "Eastern blot"
          ],
          correctAnswer: 0,
          explanation: "Southern blot is used to detect specific DNA sequences using labeled probes."
        },
        {
          id: 12,
          question: "What is the first step in PCR?",
          options: [
            "Denaturation",
            "Annealing",
            "Extension",
            "Initialization"
          ],
          correctAnswer: 0,
          explanation: "Denaturation is the first step in PCR, where DNA is heated to separate the double strands."
        },
        {
          id: 13,
          question: "Which RNA brings amino acids to ribosomes?",
          options: [
            "tRNA",
            "mRNA",
            "rRNA",
            "snRNA"
          ],
          correctAnswer: 0,
          explanation: "Transfer RNA (tRNA) brings specific amino acids to the ribosome during protein synthesis."
        },
        {
          id: 14,
          question: "What is the term for complete genetic material?",
          options: [
            "Genome",
            "Chromosome",
            "Gene",
            "Proteome"
          ],
          correctAnswer: 0,
          explanation: "The genome is the complete set of genetic material (DNA or RNA) in an organism."
        },
        {
          id: 15,
          question: "What technique separates DNA by size?",
          options: [
            "Gel electrophoresis",
            "Chromatography",
            "Centrifugation",
            "Spectrophotometry"
          ],
          correctAnswer: 0,
          explanation: "Gel electrophoresis separates DNA fragments by size as they migrate through a gel matrix under electrical current."
        },
        {
          id: 16,
          question: "What enzyme synthesizes RNA during transcription?",
          options: [
            "RNA polymerase",
            "DNA polymerase",
            "Reverse transcriptase",
            "Helicase"
          ],
          correctAnswer: 0,
          explanation: "RNA polymerase synthesizes RNA molecules using DNA as a template during transcription."
        },
        {
          id: 17,
          question: "What is the term for protein 3D structure?",
          options: [
            "Tertiary structure",
            "Primary structure",
            "Secondary structure",
            "Quaternary structure"
          ],
          correctAnswer: 0,
          explanation: "Tertiary structure refers to the overall three-dimensional shape of a single polypeptide chain."
        },
        {
          id: 18,
          question: "What temperature is typically used for PCR extension?",
          options: [
            "72°C",
            "94°C",
            "55°C",
            "37°C"
          ],
          correctAnswer: 0,
          explanation: "The extension step in PCR typically occurs at 72°C, which is optimal for Taq DNA polymerase activity."
        },
        {
          id: 19,
          question: "Which operon is repressible for tryptophan synthesis?",
          options: [
            "Trp operon",
            "Lac operon",
            "Ara operon",
            "His operon"
          ],
          correctAnswer: 0,
          explanation: "The Trp operon is a repressible system that is turned off when tryptophan levels are sufficient."
        },
        {
          id: 20,
          question: "What technique detects specific proteins?",
          options: [
            "Western blot",
            "Southern blot",
            "Northern blot",
            "Eastern blot"
          ],
          correctAnswer: 0,
          explanation: "Western blot uses antibodies to detect specific proteins separated by gel electrophoresis."
        }
      ]
    },
    {
      id: 4,
      title: "Genetic Engineering Basics",
      content: `# Genetic Engineering Basics

## Principles of Genetic Manipulation
Genetic engineering involves deliberately modifying an organism's genetic material to achieve desired traits or produce specific products. This field has revolutionized biotechnology by enabling precise control over biological systems.

### Recombinant DNA Technology
**Key Components**:
- **Restriction Enzymes**: Molecular scissors that cut DNA at specific sequences
- **DNA Ligase**: Molecular glue that joins DNA fragments
- **Vectors**: DNA molecules that carry foreign DNA into host cells
- **Host Cells**: Organisms that replicate recombinant DNA

**Restriction Enzymes Characteristics**:
- **Recognition sequences**: Typically 4-8 base pairs, often palindromic
- **Cut patterns**: Sticky ends (overhangs) or blunt ends
- **Examples**: EcoRI (5'-GAATTC-3'), HindIII (5'-AAGCTT-3')
- **Applications**: DNA cutting for cloning, RFLP analysis

**Common Vectors**:
1. **Plasmids**: Circular DNA in bacteria, 1-200 kb capacity
2. **Bacteriophages**: Virus vectors for larger inserts
3. **Cosmids**: Hybrid plasmid-phage vectors
4. **Artificial chromosomes**: YACs, BACs for very large inserts
5. **Expression vectors**: Designed for protein production

### Cloning Strategies
**Steps in DNA Cloning**:
1. **Isolation**: Extract DNA from source organism
2. **Cutting**: Use restriction enzymes to cut DNA
3. **Ligation**: Join DNA fragments with vector
4. **Transformation**: Introduce recombinant DNA into host
5. **Selection**: Identify cells containing recombinant DNA
6. **Screening**: Confirm presence of desired DNA

**Selection Methods**:
- **Antibiotic resistance**: Vectors carry genes for antibiotic resistance
- **Blue-white screening**: lacZ gene disruption indicates successful cloning
- **Complementary markers**: Host cells with specific nutritional requirements

**Screening Techniques**:
- **Colony hybridization**: Using labeled DNA probes
- **PCR screening**: Amplifying specific sequences from colonies
- **Restriction analysis**: Cutting plasmid DNA and analyzing fragments
- **Sequencing**: Determining exact DNA sequence

### Gene Expression Systems
**Prokaryotic Expression Systems**:
- **E. coli**: Most common bacterial host
- **Advantages**: Fast growth, well-characterized, inexpensive
- **Challenges**: No post-translational modifications, inclusion bodies
- **Promoters**: lac, trp, T7, arabinose-inducible

**Eukaryotic Expression Systems**:
- **Yeast**: Saccharomyces cerevisiae, Pichia pastoris
- **Insect cells**: Baculovirus system
- **Mammalian cells**: CHO, HEK293 cells
- **Advantages**: Proper folding, post-translational modifications
- **Challenges**: Slower growth, more expensive

**Protein Purification Tags**:
- **His-tag**: 6-10 histidine residues for nickel affinity
- **GST-tag**: Glutathione-S-transferase for glutathione affinity
- **MBP-tag**: Maltose binding protein for maltose affinity
- **FLAG-tag**: Short peptide for antibody recognition

### Applications of Genetic Engineering
**Therapeutic Proteins**:
- **Insulin**: First recombinant pharmaceutical (1982)
- **Human growth hormone**: Treatment for growth disorders
- **Erythropoietin**: Treatment for anemia
- **Monoclonal antibodies**: Cancer therapy, autoimmune diseases

**Genetically Modified Organisms (GMOs)**:
- **Bt crops**: Produce insecticidal proteins from Bacillus thuringiensis
- **Herbicide-resistant crops**: Tolerant to specific herbicides
- **Golden Rice**: Beta-carotene enriched rice for vitamin A deficiency
- **Fast-growing salmon**: AquaAdvantage salmon with growth hormone gene

**Gene Therapy Approaches**:
- **Ex vivo**: Cells modified outside body then returned
- **In vivo**: Direct delivery of genes to target cells
- **Viral vectors**: Retroviruses, adenoviruses, AAV
- **Non-viral methods**: Liposomes, electroporation, gene guns

### Ethical and Safety Considerations
**Biosafety Guidelines**:
- **Containment levels**: Physical and biological barriers
- **Risk assessment**: Evaluating potential hazards
- **Waste disposal**: Proper treatment of biological materials
- **Training**: Proper education for personnel

**Ethical Issues**:
- **Environmental impact**: Gene flow to wild populations
- **Food safety**: Allergenicity, toxicity testing
- **Animal welfare**: Concerns about transgenic animals
- **Social justice**: Access to biotechnology benefits

**Regulatory Framework**:
- **FDA**: Regulation of pharmaceuticals and foods
- **USDA**: Regulation of agricultural biotechnology
- **EPA**: Regulation of pesticidal substances
- **International agreements**: Cartagena Protocol on Biosafety

**Industry statistic**: Over 90% of soybeans and 80% of corn grown in the United States are genetically modified varieties, demonstrating the widespread adoption of agricultural biotechnology.`,
      completed: false,
      quiz: [
        {
          id: 1,
          question: "What percentage of US soybeans are genetically modified?",
          options: [
            "Over 90%",
            "About 50%",
            "About 70%",
            "Over 95%"
          ],
          correctAnswer: 0,
          explanation: "Over 90% of soybeans grown in the United States are genetically modified varieties, primarily herbicide-resistant."
        },
        {
          id: 2,
          question: "What are restriction enzymes often called?",
          options: [
            "Molecular scissors",
            "DNA glue",
            "Genetic markers",
            "Protein tags"
          ],
          correctAnswer: 0,
          explanation: "Restriction enzymes are often called molecular scissors because they cut DNA at specific recognition sequences."
        },
        {
          id: 3,
          question: "What was the first recombinant pharmaceutical?",
          options: [
            "Insulin",
            "Human growth hormone",
            "Erythropoietin",
            "Interferon"
          ],
          correctAnswer: 0,
          explanation: "Recombinant human insulin was the first genetically engineered pharmaceutical approved for medical use in 1982."
        },
        {
          id: 4,
          question: "What enzyme joins DNA fragments together?",
          options: [
            "DNA ligase",
            "Restriction enzyme",
            "DNA polymerase",
            "Reverse transcriptase"
          ],
          correctAnswer: 0,
          explanation: "DNA ligase is the enzyme that joins DNA fragments together by forming phosphodiester bonds."
        },
        {
          id: 5,
          question: "What percentage of US corn is genetically modified?",
          options: [
            "About 80%",
            "About 50%",
            "About 90%",
            "About 70%"
          ],
          correctAnswer: 0,
          explanation: "Approximately 80% of corn grown in the United States is genetically modified, primarily for insect resistance and herbicide tolerance."
        },
        {
          id: 6,
          question: "What is the most common bacterial host for cloning?",
          options: [
            "E. coli",
            "B. subtilis",
            "S. cerevisiae",
            "P. pastoris"
          ],
          correctAnswer: 0,
          explanation: "Escherichia coli (E. coli) is the most commonly used bacterial host for DNA cloning and protein expression."
        },
        {
          id: 7,
          question: "What does GMO stand for?",
          options: [
            "Genetically Modified Organism",
            "Genetically Manipulated Organism",
            "Genetic Modification Operation",
            "Genomic Modification Organism"
          ],
          correctAnswer: 0,
          explanation: "GMO stands for Genetically Modified Organism, referring to organisms whose genetic material has been altered using genetic engineering."
        },
        {
          id: 8,
          question: "What is blue-white screening used for?",
          options: [
            "Identifying successful cloning events",
            "Staining DNA in gels",
            "Visualizing protein expression",
            "Counting bacterial colonies"
          ],
          correctAnswer: 0,
          explanation: "Blue-white screening uses the lacZ gene to identify bacterial colonies containing recombinant plasmids (white) versus non-recombinant (blue)."
        },
        {
          id: 9,
          question: "What crop produces insecticidal Bt proteins?",
          options: [
            "Bt crops",
            "Golden Rice",
            "Herbicide-resistant crops",
            "Roundup Ready crops"
          ],
          correctAnswer: 0,
          explanation: "Bt crops are genetically modified to produce insecticidal proteins from Bacillus thuringiensis, providing resistance to certain insect pests."
        },
        {
          id: 10,
          question: "What type of ends do restriction enzymes create?",
          options: [
            "Sticky ends or blunt ends",
            "Only sticky ends",
            "Only blunt ends",
            "Cohesive ends only"
          ],
          correctAnswer: 0,
          explanation: "Restriction enzymes can create either sticky ends (with overhangs) or blunt ends (no overhangs) depending on the enzyme."
        },
        {
          id: 11,
          question: "What is Golden Rice enriched with?",
          options: [
            "Beta-carotene",
            "Vitamin C",
            "Iron",
            "Protein"
          ],
          correctAnswer: 0,
          explanation: "Golden Rice is genetically modified to produce beta-carotene, which the body converts to vitamin A, addressing vitamin A deficiency."
        },
        {
          id: 12,
          question: "What is a common purification tag?",
          options: [
            "His-tag",
            "GFP-tag",
            "RFP-tag",
            "Luciferase-tag"
          ],
          correctAnswer: 0,
          explanation: "His-tag (histidine tag) is commonly used for protein purification via nickel affinity chromatography."
        },
        {
          id: 13,
          question: "What gene therapy approach modifies cells outside the body?",
          options: [
            "Ex vivo",
            "In vivo",
            "In vitro",
            "In situ"
          ],
          correctAnswer: 0,
          explanation: "Ex vivo gene therapy involves removing cells from the body, genetically modifying them, and then returning them to the patient."
        },
        {
          id: 14,
          question: "What is the typical size range for plasmids?",
          options: [
            "1-200 kb",
            "100-1000 kb",
            "0.1-1 kb",
            "200-500 kb"
          ],
          correctAnswer: 0,
          explanation: "Plasmids are small, circular DNA molecules typically ranging from 1 to 200 kilobases in size."
        },
        {
          id: 15,
          question: "Which agency regulates agricultural biotechnology in the US?",
          options: [
            "USDA",
            "FDA",
            "EPA",
            "NIH"
          ],
          correctAnswer: 0,
          explanation: "The United States Department of Agriculture (USDA) regulates agricultural biotechnology products and field testing."
        },
        {
          id: 16,
          question: "What is the purpose of antibiotic resistance genes in vectors?",
          options: [
            "Selection of transformed cells",
            "Killing host cells",
            "Increasing plasmid size",
            "Enhancing protein expression"
          ],
          correctAnswer: 0,
          explanation: "Antibiotic resistance genes in vectors allow selection of host cells that have taken up the plasmid by surviving antibiotic treatment."
        },
        {
          id: 17,
          question: "What is an example of a eukaryotic expression system?",
          options: [
            "Yeast",
            "E. coli",
            "Bacteria",
            "Archaea"
          ],
          correctAnswer: 0,
          explanation: "Yeast (Saccharomyces cerevisiae) is a commonly used eukaryotic expression system for producing properly folded proteins."
        },
        {
          id: 18,
          question: "What international agreement addresses biosafety?",
          options: [
            "Cartagena Protocol",
            "Kyoto Protocol",
            "Paris Agreement",
            "Montreal Protocol"
          ],
          correctAnswer: 0,
          explanation: "The Cartagena Protocol on Biosafety addresses the safe transfer, handling, and use of living modified organisms."
        },
        {
          id: 19,
          question: "What is the step after cutting DNA with restriction enzymes?",
          options: [
            "Ligation",
            "Transformation",
            "Selection",
            "Screening"
          ],
          correctAnswer: 0,
          explanation: "After cutting DNA with restriction enzymes, the next step is ligation to join DNA fragments with the vector."
        },
        {
          id: 20,
          question: "What does FDA regulate in biotechnology?",
          options: [
            "Pharmaceuticals and foods",
            "Agricultural field trials",
            "Pesticidal substances",
            "International trade"
          ],
          correctAnswer: 0,
          explanation: "The Food and Drug Administration (FDA) regulates biotechnology-derived pharmaceuticals, foods, and medical devices."
        }
      ]
    },
    {
      id: 5,
      title: "Cell Culture Techniques",
      content: `# Cell Culture Techniques

## Principles of Cell Culture
Cell culture involves growing cells under controlled conditions outside their natural environment. This fundamental biotechnology technique enables study of cell biology, drug testing, and production of biological products.

### Basic Cell Culture Concepts
**Types of Cell Cultures**:
- **Primary cultures**: Cells taken directly from tissue
- **Cell lines**: Immortalized cells that can divide indefinitely
- **Suspension cultures**: Cells growing freely in medium
- **Adherent cultures**: Cells attached to surface

**Culture Conditions**:
- **Temperature**: 37°C for mammalian cells, 30°C for yeast
- **pH**: Typically 7.2-7.4, maintained by buffers
- **Humidity**: 95% to prevent evaporation
- **CO₂**: 5% for bicarbonate buffer systems
- **Sterility**: Essential to prevent contamination

**Culture Media Components**:
1. **Energy sources**: Glucose, glutamine
2. **Amino acids**: Essential and non-essential
3. **Vitamins**: B vitamins, ascorbic acid
4. **Salts**: Sodium, potassium, calcium, magnesium
5. **Buffers**: Sodium bicarbonate, HEPES
6. **Growth factors**: Serum or defined supplements
7. **Antibiotics**: Penicillin, streptomycin (optional)

### Mammalian Cell Culture
**Common Cell Lines**:
- **HEK293**: Human embryonic kidney cells, easy to transfer
- **CHO**: Chinese hamster ovary cells, for protein production
- **HeLa**: Cervical cancer cells, first immortal cell line
- **MCF-7**: Breast cancer cells, for cancer research
- **NIH-3T3**: Mouse fibroblast cells, for basic research

**Culture Techniques**:
- **Passaging/subculturing**: Transferring cells to new vessels
- **Cryopreservation**: Freezing cells for long-term storage
- **Cell counting**: Using hemocytometers or automated counters
- **Viability assessment**: Trypan blue exclusion, MTT assays

**Contamination Control**:
- **Bacterial contamination**: Turbid media, pH changes
- **Fungal contamination**: Visible filaments or spores
- **Mycoplasma contamination**: Difficult to detect, affects cell behavior
- **Cross-contamination**: Mixing of different cell lines

### Microbial Culture
**Bacterial Culture Methods**:
- **Broth culture**: Liquid medium for growth
- **Agar plates**: Solid medium for isolation
- **Culture conditions**: Temperature, aeration, time
- **Growth phases**: Lag, log, stationary, death

**Yeast Culture**:
- **S. cerevisiae**: Baker's yeast, model eukaryotic organism
- **Culture media**: YPD, minimal media, selective media
- **Growth conditions**: 30°C, shaking for aeration
- **Applications**: Protein expression, fermentation studies

**Culture Scale-up**:
- **Shake flasks**: Small-scale, simple equipment
- **Bioreactors**: Controlled parameters, large-scale
- **Fermenters**: For industrial production
- **Process parameters**: pH, temperature, dissolved oxygen, agitation

### Stem Cell Culture
**Types of Stem Cells**:
- **Embryonic stem cells**: Pluripotent, from early embryos
- **Adult stem cells**: Multipotent, in specific tissues
- **Induced pluripotent stem cells**: Reprogrammed adult cells
- **Mesenchymal stem cells**: From bone marrow, adipose tissue

**Culture Requirements**:
- **Specialized media**: Growth factors, cytokines
- **Feeder layers**: Supporting cells (for some stem cells)
- **Extracellular matrices**: Matrigel, collagen, laminin
- **Culture conditions**: Low oxygen (3-5%) for some types

**Applications**:
- **Drug screening**: Testing toxicity and efficacy
- **Disease modeling**: Studying genetic disorders
- **Regenerative medicine**: Tissue engineering
- **Developmental biology**: Studying cell differentiation

### Quality Control and Characterization
**Cell Line Authentication**:
- **STR profiling**: Short tandem repeat analysis
- **Karyotyping**: Chromosome analysis
- **Isoenzyme analysis**: Enzyme pattern comparison
- **DNA barcoding**: Species identification

**Mycoplasma Testing**:
- **PCR methods**: DNA amplification of mycoplasma genes
- **Culture methods**: Growing on specific media
- **DNA staining**: Hoechst staining of DNA
- **Commercial kits**: Available for routine testing

**Viability and Proliferation Assays**:
- **MTT assay**: Measures metabolic activity
- **ATP assays**: Measures cellular energy
- **BrdU incorporation**: Measures DNA synthesis
- **Clonogenic assays**: Measures colony-forming ability

**Industry standard**: Cell banks typically maintain master cell stocks, working cell stocks, and distribution stocks, with regular testing for identity, purity, and sterility. Cryopreserved cells are stored in liquid nitrogen at -196°C for long-term preservation.`,
      completed: false,
      quiz: [
        {
          id: 1,
          question: "What temperature is typically used for mammalian cell culture?",
          options: [
            "37°C",
            "25°C",
            "30°C",
            "42°C"
          ],
          correctAnswer: 0,
          explanation: "Mammalian cells are typically cultured at 37°C, which matches human body temperature for optimal growth."
        },
        {
          id: 2,
          question: "At what temperature are cryopreserved cells stored long-term?",
          options: [
            "-196°C (liquid nitrogen)",
            "-80°C",
            "-20°C",
            "4°C"
          ],
          correctAnswer: 0,
          explanation: "Cryopreserved cells are stored in liquid nitrogen at -196°C for long-term preservation and viability."
        },
        {
          id: 3,
          question: "What percentage of CO₂ is typically used for mammalian cell culture?",
          options: [
            "5%",
            "10%",
            "2%",
            "20%"
          ],
          correctAnswer: 0,
          explanation: "Most mammalian cell cultures use 5% CO₂ to maintain proper pH in bicarbonate-buffered media."
        },
        {
          id: 4,
          question: "What was the first immortal human cell line?",
          options: [
            "HeLa",
            "HEK293",
            "CHO",
            "MCF-7"
          ],
          correctAnswer: 0,
          explanation: "HeLa cells, derived from Henrietta Lacks in 1951, were the first immortal human cell line established."
        },
        {
          id: 5,
          question: "What type of cells grow attached to surfaces?",
          options: [
            "Adherent cells",
            "Suspension cells",
            "Floating cells",
            "Anchorage-independent cells"
          ],
          correctAnswer: 0,
          explanation: "Adherent cells require attachment to a surface (like plastic or glass) for growth and proliferation."
        },
        {
          id: 6,
          question: "What is the typical pH range for mammalian cell culture?",
          options: [
            "7.2-7.4",
            "6.8-7.0",
            "7.6-7.8",
            "7.0-7.2"
          ],
          correctAnswer: 0,
          explanation: "Mammalian cells are typically cultured at pH 7.2-7.4, which is similar to physiological conditions."
        },
        {
          id: 7,
          question: "What cell line is commonly used for protein production?",
          options: [
            "CHO cells",
            "HeLa cells",
            "HEK293 cells",
            "NIH-3T3 cells"
          ],
          correctAnswer: 0,
          explanation: "CHO (Chinese Hamster Ovary) cells are widely used for industrial production of therapeutic proteins."
        },
        {
          id: 8,
          question: "What does STR profiling authenticate?",
          options: [
            "Cell line identity",
            "Protein expression",
            "Media composition",
            "Contamination levels"
          ],
          correctAnswer: 0,
          explanation: "STR (Short Tandem Repeat) profiling is used to authenticate cell lines by their unique genetic fingerprint."
        },
        {
          id: 9,
          question: "What are cells taken directly from tissue called?",
          options: [
            "Primary cultures",
            "Cell lines",
            "Transformed cells",
            "Immortalized cells"
          ],
          correctAnswer: 0,
          explanation: "Primary cultures consist of cells taken directly from animal or human tissue and have limited lifespan."
        },
        {
          id: 10,
          question: "What common contamination is difficult to detect visually?",
          options: [
            "Mycoplasma",
            "Bacteria",
            "Fungi",
            "Yeast"
          ],
          correctAnswer: 0,
          explanation: "Mycoplasma contamination doesn't cause visible turbidity but can significantly affect cell behavior and experimental results."
        },
        {
          id: 11,
          question: "What is the process of transferring cells to new vessels called?",
          options: [
            "Passaging",
            "Freezing",
            "Counting",
            "Seeding"
          ],
          correctAnswer: 0,
          explanation: "Passaging (or subculturing) involves transferring a portion of cells to new culture vessels to maintain continuous culture."
        },
        {
          id: 12,
          question: "What cell line is derived from human embryonic kidney?",
          options: [
            "HEK293",
            "CHO",
            "HeLa",
            "MCF-7"
          ],
          correctAnswer: 0,
          explanation: "HEK293 cells are derived from human embryonic kidney cells and are commonly used for transfection and protein expression."
        },
        {
          id: 13,
          question: "What dye is commonly used for viability assessment?",
          options: [
            "Trypan blue",
            "Methylene blue",
            "Crystal violet",
            "Safranin"
          ],
          correctAnswer: 0,
          explanation: "Trypan blue is commonly used to assess cell viability - live cells exclude the dye, while dead cells take it up and appear blue."
        },
        {
          id: 14,
          question: "What are cells that can divide indefinitely called?",
          options: [
            "Cell lines",
            "Primary cultures",
            "Senescent cells",
            "Differentiated cells"
          ],
          correctAnswer: 0,
          explanation: "Cell lines are immortalized cells that can divide indefinitely under appropriate culture conditions."
        },
        {
          id: 15,
          question: "What assay measures metabolic activity?",
          options: [
            "MTT assay",
            "BrdU assay",
            "Clonogenic assay",
            "Flow cytometry"
          ],
          correctAnswer: 0,
          explanation: "The MTT assay measures mitochondrial dehydrogenase activity, which correlates with cell metabolic activity and viability."
        },
        {
          id: 16,
          question: "What temperature is typically used for yeast culture?",
          options: [
            "30°C",
            "37°C",
            "25°C",
            "42°C"
          ],
          correctAnswer: 0,
          explanation: "Yeast, particularly Saccharomyces cerevisiae, is typically cultured at 30°C for optimal growth."
        },
        {
          id: 17,
          question: "What are master cell stocks used for?",
          options: [
            "Long-term storage and quality control",
            "Daily experiments",
            "Throwing away",
            "Contamination testing only"
          ],
          correctAnswer: 0,
          explanation: "Master cell stocks are carefully preserved aliquots used to generate working stocks, ensuring consistent quality over time."
        },
        {
          id: 18,
          question: "What are induced pluripotent stem cells?",
          options: [
            "Reprogrammed adult cells",
            "Embryonic stem cells",
            "Adult stem cells",
            "Cancer stem cells"
          ],
          correctAnswer: 0,
          explanation: "Induced pluripotent stem cells (iPSCs) are adult cells that have been reprogrammed to a pluripotent state."
        },
        {
          id: 19,
          question: "What is the purpose of antibiotics in cell culture?",
          options: [
            "Prevent bacterial contamination",
            "Stimulate cell growth",
            "Induce differentiation",
            "Enhance protein expression"
          ],
          correctAnswer: 0,
          explanation: "Antibiotics like penicillin and streptomycin are added to culture media to prevent bacterial contamination."
        },
        {
          id: 20,
          question: "What are suspension cultures?",
          options: [
            "Cells growing freely in medium",
            "Cells attached to surfaces",
            "Cells in solid agar",
            "Cells in tissue slices"
          ],
          correctAnswer: 0,
          explanation: "Suspension cultures consist of cells that grow freely floating in liquid medium without surface attachment."
        }
      ]
    },
    {
      id: 6,
      title: "Biotechnology Applications",
      content: `# Biotechnology Applications

## Real-World Biotechnology Impact
Biotechnology has transformed multiple industries by providing innovative solutions to longstanding challenges. Understanding these applications demonstrates the practical value and societal impact of biotechnological advances.

### Healthcare Biotechnology
**Therapeutic Proteins and Monoclonal Antibodies**:
- **Insulin**: Diabetes treatment, recombinant human insulin
- **Growth hormone**: Treatment of growth disorders
- **Erythropoietin**: Anemia treatment in kidney disease
- **Monoclonal antibodies**: Cancer therapy (Herceptin, Rituxan), autoimmune diseases (Humira, Remicade)

**Vaccine Development**:
- **Recombinant vaccines**: Hepatitis B vaccine (first recombinant vaccine)
- **mRNA vaccines**: COVID-19 vaccines (Pfizer-BioNTech, Moderna)
- **Viral vector vaccines**: COVID-19 (Johnson & Johnson, AstraZeneca)
- **Cancer vaccines**: Therapeutic vaccines under development

**Diagnostics and Testing**:
- **PCR-based tests**: COVID-19 detection, genetic testing
- **ELISA tests**: Pregnancy tests, infectious disease detection
- **Biosensors**: Glucose monitoring for diabetes
- **Rapid tests**: Lateral flow assays for various diseases

**Gene Therapy Advances**:
- **CAR-T therapy**: Engineered T-cells for cancer treatment
- **Adeno-associated virus vectors**: For inherited disorders
- **CRISPR-based therapies**: For genetic diseases
- **Ex vivo approaches**: Modified cells returned to patients

**Industry statistic**: The global market for monoclonal antibodies exceeded $150 billion in 2022, with cancer treatments accounting for over 60% of this market.

### Agricultural Biotechnology
**Genetically Modified Crops**:
- **Herbicide-tolerant crops**: Roundup Ready soybeans, corn, cotton
- **Insect-resistant crops**: Bt corn, Bt cotton (produce insecticidal proteins)
- **Drought-tolerant crops**: Under development for water-scarce regions
- **Nutritionally enhanced crops**: Golden Rice (vitamin A), high-lysine corn

**Animal Biotechnology**:
- **Transgenic animals**: Goats producing therapeutic proteins in milk
- **Cloning**: Reproductive cloning for breeding
- **Gene editing**: CRISPR for disease resistance in livestock
- **Embryo transfer**: For genetic improvement

**Sustainable Agriculture**:
- **Biofertilizers**: Nitrogen-fixing bacteria
- **Biopesticides**: Microbial pesticides
- **Bioremediation**: Microorganisms cleaning contaminated soil
- **Waste management**: Converting agricultural waste to biofuels

### Industrial Biotechnology (White Biotechnology)
**Biofuel Production**:
- **Bioethanol**: From corn, sugarcane, cellulose
- **Biodiesel**: From vegetable oils, animal fats
- **Biogas**: From anaerobic digestion of organic waste
- **Advanced biofuels**: Algal biofuels, biohydrogen

**Bioplastics and Biomaterials**:
- **PLA**: Polylactic acid from corn starch
- **PHA**: Polyhydroxyalkanoates from bacteria
- **Biopolymers**: For medical implants, drug delivery
- **Bio-based chemicals**: Replace petroleum-based chemicals

**Enzyme Technology**:
- **Detergent enzymes**: Proteases, lipases, amylases
- **Food processing enzymes**: Cheese making, baking, brewing
- **Textile enzymes**: Bio-stoning of denim, bio-polishing
- **Paper and pulp enzymes**: Reducing chemical use

### Environmental Biotechnology
**Wastewater Treatment**:
- **Activated sludge process**: Microbial degradation of organic matter
- **Anaerobic digestion**: Methane production from wastewater
- **Biofilters**: Microbial treatment of air pollutants
- **Constructed wetlands**: Natural treatment systems

**Bioremediation**:
- **Oil spill cleanup**: Oil-degrading bacteria
- **Heavy metal removal**: Bioaccumulation, biosorption
- **Pesticide degradation**: Microbial breakdown of contaminants
- **Groundwater treatment**: In situ bioremediation

**Bioindicators and Biosensors**:
- **Water quality monitoring**: Using sensitive organisms
- **Air pollution detection**: Lichens as bioindicators
- **Toxicity testing**: Using bacteria, algae, or small animals
- **Environmental monitoring**: Real-time biosensor networks

### Emerging Biotechnology Fields
**Synthetic Biology**:
- **Standard biological parts**: BioBricks, standardized genetic elements
- **Minimal genomes**: Creating cells with essential genes only
- **Metabolic engineering**: Designing metabolic pathways
- **Xenobiology**: Creating organisms with expanded genetic codes

**Nanobiotechnology**:
- **Drug delivery systems**: Nanoparticle carriers
- **Diagnostic tools**: Quantum dots, nanosensors
- **Tissue engineering**: Nanofiber scaffolds
- **Bioimaging**: Enhanced imaging techniques

**Bioinformatics and Computational Biology**:
- **Genome analysis**: Sequencing data interpretation
- **Protein structure prediction**: Computational modeling
- **Drug discovery**: Virtual screening of compounds
- **Systems biology**: Modeling biological networks

### Regulatory and Commercial Aspects
**Product Development Pipeline**:
- **Discovery research**: 2-5 years, basic research
- **Preclinical testing**: 1-2 years, animal studies
- **Clinical trials**: Phase I-III, 5-7 years, human testing
- **Regulatory approval**: 1-2 years, FDA/EMA review
- **Post-marketing surveillance**: Phase IV, ongoing monitoring

**Intellectual Property**:
- **Patents**: Protection of inventions
- **Trade secrets**: Confidential business information
- **Licensing agreements**: Technology transfer
- **Regulatory data protection**: Exclusive rights for clinical data

**Market Trends**:
- **Personalized medicine**: Tailored treatments based on genetics
- **Biosimilars**: Follow-on versions of biologic drugs
- **Digital health**: Integration with information technology
- **Sustainability focus**: Green biotechnology solutions

**Success rates**: Only about 10% of drugs that enter clinical trials eventually receive FDA approval, highlighting the challenges in biotechnology product development.`,
      completed: false,
      quiz: [
        {
          id: 1,
          question: "What was the value of the monoclonal antibody market in 2022?",
          options: [
            "Over $150 billion",
            "Over $50 billion",
            "Over $200 billion",
            "Over $100 billion"
          ],
          correctAnswer: 0,
          explanation: "The global monoclonal antibody market exceeded $150 billion in 2022, driven by cancer and autoimmune disease treatments."
        },
        {
          id: 2,
          question: "What percentage of drugs in clinical trials receive FDA approval?",
          options: [
            "About 10%",
            "About 50%",
            "About 25%",
            "About 75%"
          ],
          correctAnswer: 0,
          explanation: "Only about 10% of drugs that enter clinical trials eventually receive FDA approval, demonstrating the high failure rate in drug development."
        },
        {
          id: 3,
          question: "What was the first recombinant vaccine?",
          options: [
            "Hepatitis B vaccine",
            "COVID-19 vaccine",
            "HPV vaccine",
            "Polio vaccine"
          ],
          correctAnswer: 0,
          explanation: "The hepatitis B vaccine was the first recombinant vaccine approved for human use, produced in yeast cells."
        },
        {
          id: 4,
          question: "What percentage of monoclonal antibody market is cancer treatments?",
          options: [
            "Over 60%",
            "About 30%",
            "About 50%",
            "About 40%"
          ],
          correctAnswer: 0,
          explanation: "Cancer treatments account for over 60% of the monoclonal antibody market, with drugs like Herceptin and Rituxan leading sales."
        },
        {
          id: 5,
          question: "What crop produces vitamin A through genetic engineering?",
          options: [
            "Golden Rice",
            "Bt corn",
            "Roundup Ready soybeans",
            "Herbicide-tolerant cotton"
          ],
          correctAnswer: 0,
          explanation: "Golden Rice is genetically modified to produce beta-carotene, which the body converts to vitamin A to address deficiency."
        },
        {
          id: 6,
          question: "What type of therapy uses engineered T-cells?",
          options: [
            "CAR-T therapy",
            "Gene therapy",
            "Monoclonal antibody therapy",
            "Vaccine therapy"
          ],
          correctAnswer: 0,
          explanation: "CAR-T (Chimeric Antigen Receptor T-cell) therapy engineers patient T-cells to target and kill cancer cells."
        },
        {
          id: 7,
          question: "What bioplastic comes from corn starch?",
          options: [
            "PLA",
            "PHA",
            "PET",
            "PVC"
          ],
          correctAnswer: 0,
          explanation: "PLA (polylactic acid) is a bioplastic made from corn starch that is biodegradable and used in various applications."
        },
        {
          id: 8,
          question: "What are BioBricks in synthetic biology?",
          options: [
            "Standardized genetic elements",
            "Building blocks for proteins",
            "Types of bioreactors",
            "Laboratory equipment"
          ],
          correctAnswer: 0,
          explanation: "BioBricks are standardized DNA sequences that can be assembled like building blocks to create biological systems."
        },
        {
          id: 9,
          question: "What process treats wastewater with microbes?",
          options: [
            "Activated sludge process",
            "Reverse osmosis",
            "Chlorination",
            "UV treatment"
          ],
          correctAnswer: 0,
          explanation: "The activated sludge process uses microbial communities to break down organic matter in wastewater treatment plants."
        },
        {
          id: 10,
          question: "How long do clinical trials typically take?",
          options: [
            "5-7 years",
            "1-2 years",
            "2-3 years",
            "7-10 years"
          ],
          correctAnswer: 0,
          explanation: "Clinical trials (Phases I-III) typically take 5-7 years to complete before regulatory submission."
        },
        {
          id: 11,
          question: "What insect-resistant crop produces Bt proteins?",
          options: [
            "Bt corn",
            "Golden Rice",
            "Roundup Ready soybeans",
            "Drought-tolerant wheat"
          ],
          correctAnswer: 0,
          explanation: "Bt corn is genetically modified to produce proteins from Bacillus thuringiensis that are toxic to specific insect pests."
        },
        {
          id: 12,
          question: "What is the goal of metabolic engineering?",
          options: [
            "Designing metabolic pathways",
            "Sequencing genomes",
            "Cloning genes",
            "Culturing cells"
          ],
          correctAnswer: 0,
          explanation: "Metabolic engineering aims to design and optimize metabolic pathways in microorganisms to produce desired compounds."
        },
        {
          id: 13,
          question: "What biofuel comes from vegetable oils?",
          options: [
            "Biodiesel",
            "Bioethanol",
            "Biogas",
            "Biohydrogen"
          ],
          correctAnswer: 0,
          explanation: "Biodiesel is produced from vegetable oils or animal fats through a chemical process called transesterification."
        },
        {
          id: 14,
          question: "What are biosimilars?",
          options: [
            "Follow-on versions of biologic drugs",
            "New chemical entities",
            "Generic small molecule drugs",
            "Diagnostic tests"
          ],
          correctAnswer: 0,
          explanation: "Biosimilars are biological products that are highly similar to already approved biologic drugs (reference products)."
        },
        {
          id: 15,
          question: "What uses microorganisms to clean oil spills?",
          options: [
            "Bioremediation",
            "Biofiltration",
            "Bioaccumulation",
            "Biosorption"
          ],
          correctAnswer: 0,
          explanation: "Bioremediation uses oil-degrading microorganisms to break down hydrocarbons and clean up oil spills."
        },
        {
          id: 16,
          question: "What is the goal of personalized medicine?",
          options: [
            "Tailored treatments based on genetics",
            "Mass production of drugs",
            "One-size-fits-all treatments",
            "Alternative medicine approaches"
          ],
          correctAnswer: 0,
          explanation: "Personalized medicine aims to tailor medical treatment to individual characteristics like genetics, lifestyle, and environment."
        },
        {
          id: 17,
          question: "What enzyme is used in cheese making?",
          options: [
            "Rennet (chymosin)",
            "Amylase",
            "Lipase",
            "Protease"
          ],
          correctAnswer: 0,
          explanation: "Rennet, containing the enzyme chymosin, is used in cheese making to coagulate milk and separate curds from whey."
        },
        {
          id: 18,
          question: "What does preclinical testing involve?",
          options: [
            "Animal studies",
            "Human clinical trials",
            "Market analysis",
            "Manufacturing scale-up"
          ],
          correctAnswer: 0,
          explanation: "Preclinical testing involves laboratory and animal studies to evaluate safety and biological activity before human trials."
        },
        {
          id: 19,
          question: "What uses quantum dots in biotechnology?",
          options: [
            "Bioimaging and diagnostics",
            "Drug production",
            "Cell culture",
            "Protein purification"
          ],
          correctAnswer: 0,
          explanation: "Quantum dots are semiconductor nanoparticles used in bioimaging and diagnostic applications due to their optical properties."
        },
        {
          id: 20,
          question: "What is xenobiology?",
          options: [
            "Creating organisms with expanded genetic codes",
            "Studying foreign organisms",
            "Xenotransplantation research",
            "Alien biology"
          ],
          correctAnswer: 0,
          explanation: "Xenobiology involves creating biological systems with expanded genetic codes using non-natural bases or amino acids."
        }
      ]
    }
  ],
  
  // ==================== FINAL EXAM (40 QUESTIONS) ====================
  finalExam: [
    // Module 1: Introduction (7 questions)
    {
      id: 1,
      question: "What is the Central Dogma of Molecular Biology?",
      options: [
        "DNA → RNA → Protein",
        "Protein → RNA → DNA",
        "RNA → DNA → Protein",
        "DNA → Protein → RNA"
      ],
      correctAnswer: 0,
      module: 1,
      explanation: "The Central Dogma describes the flow of genetic information: DNA is transcribed to RNA, which is translated to protein."
    },
    {
      id: 2,
      question: "What percentage of the global biotech market is healthcare biotechnology?",
      options: [
        "60%",
        "30%",
        "75%",
        "45%"
      ],
      correctAnswer: 0,
      module: 1,
      explanation: "Healthcare biotechnology accounts for approximately 60% of the global biotechnology market value."
    },
    {
      id: 3,
      question: "When was the DNA structure discovered?",
      options: [
        "1953",
        "1943",
        "1963",
        "1973"
      ],
      correctAnswer: 0,
      module: 1,
      explanation: "James Watson and Francis Crick discovered the double helix structure of DNA in 1953."
    },
    {
      id: 4,
      question: "When did the Human Genome Project begin?",
      options: [
        "1990",
        "1980",
        "2000",
        "1995"
      ],
      correctAnswer: 0,
      module: 1,
      explanation: "The Human Genome Project officially began in 1990 with the goal of sequencing the entire human genome."
    },
    {
      id: 5,
      question: "What is the global biotechnology market valued at?",
      options: [
        "Over $1 trillion",
        "Over $500 billion",
        "Over $2 trillion",
        "Over $300 billion"
      ],
      correctAnswer: 0,
      module: 1,
      explanation: "The global biotechnology market is currently valued at over $1 trillion and continues to grow rapidly."
    },
    {
      id: 6,
      question: "What was the first genetically engineered pharmaceutical?",
      options: [
        "Insulin",
        "Human Growth Hormone",
        "Hepatitis B Vaccine",
        "Erythropoietin"
      ],
      correctAnswer: 0,
      module: 1,
      explanation: "Genetically engineered human insulin was the first recombinant DNA pharmaceutical approved in 1982."
    },
    {
      id: 7,
      question: "When was the human genome sequencing completed?",
      options: [
        "2003",
        "1993",
        "2013",
        "2000"
      ],
      correctAnswer: 0,
      module: 1,
      explanation: "The sequencing of the human genome was completed in 2003, ahead of schedule."

    // Module 2: Laboratory Techniques (6 questions)
    },
    {
      id: 8,
      question: "What does PPE stand for in laboratory safety?",
      options: [
        "Personal Protective Equipment",
        "Professional Protection Equipment",
        "Personal Prevention Equipment",
        "Professional Prevention Equipment"
      ],
      correctAnswer: 0,
      module: 2,
      explanation: "PPE stands for Personal Protective Equipment, including lab coats, goggles, gloves, and appropriate footwear."
    },
    {
      id: 9,
      question: "How often should pipettes typically be calibrated?",
      options: [
        "Every 3-6 months",
        "Every month",
        "Every year",
        "Every 2 years"
      ],
      correctAnswer: 0,
      module: 2,
      explanation: "Pipettes should be calibrated every 3-6 months to ensure accurate volume measurements."
    },
    {
      id: 10,
      question: "What temperature is used for autoclave sterilization?",
      options: [
        "121°C",
        "100°C",
        "80°C",
        "150°C"
      ],
      correctAnswer: 0,
      module: 2,
      explanation: "Autoclaves typically operate at 121°C (250°F) for effective sterilization of laboratory media and equipment."
    },
    {
      id: 11,
      question: "What is the formula for calculating dilutions?",
      options: [
        "C1V1 = C2V2",
        "M1V1 = M2V2",
        "D1V1 = D2V2",
        "P1V1 = P2V2"
      ],
      correctAnswer: 0,
      module: 2,
      explanation: "The dilution formula C1V1 = C2V2 calculates volumes needed for preparing diluted solutions from concentrated stocks."
    },
    {
      id: 12,
      question: "What percentage ethanol is commonly used for disinfection?",
      options: [
        "70%",
        "50%",
        "95%",
        "100%"
      ],
      correctAnswer: 0,
      module: 2,
      explanation: "70% ethanol is commonly used for laboratory disinfection as it effectively kills microorganisms without evaporating too quickly."
    },
    {
      id: 13,
      question: "How often should laboratory balances be calibrated?",
      options: [
        "Monthly",
        "Weekly",
        "Quarterly",
        "Annually"
      ],
      correctAnswer: 0,
      module: 2,
      explanation: "Laboratory balances should be calibrated monthly to ensure accurate weight measurements."

    // Module 3: Molecular Biology (6 questions)
    },
    {
      id: 14,
      question: "What are the DNA base pairing rules?",
      options: [
        "A pairs with T, C pairs with G",
        "A pairs with C, T pairs with G",
        "A pairs with U, C pairs with G",
        "A pairs with G, T pairs with C"
      ],
      correctAnswer: 0,
      module: 3,
      explanation: "DNA base pairing follows Chargaff's rules: Adenine pairs with Thymine, and Cytosine pairs with Guanine."
    },
    {
      id: 15,
      question: "How many copies can PCR produce in 30 cycles?",
      options: [
        "Over 1 billion",
        "About 1 million",
        "About 10 million",
        "About 100 million"
      ],
      correctAnswer: 0,
      module: 3,
      explanation: "PCR can theoretically produce over 1 billion copies (2^30 ≈ 1.07 billion) from a single DNA template in 30 cycles."
    },
    {
      id: 16,
      question: "Which RNA type carries genetic code to ribosomes?",
      options: [
        "mRNA",
        "tRNA",
        "rRNA",
        "miRNA"
      ],
      correctAnswer: 0,
      module: 3,
      explanation: "Messenger RNA (mRNA) carries the genetic code from DNA to ribosomes for protein synthesis."
    },
    {
      id: 17,
      question: "What is the start codon for protein synthesis?",
      options: [
        "AUG",
        "UAA",
        "UAG",
        "UGA"
      ],
      correctAnswer: 0,
      module: 3,
      explanation: "AUG is the start codon that initiates protein synthesis and codes for methionine."
    },
    {
      id: 18,
      question: "What is the first step in PCR?",
      options: [
        "Denaturation",
        "Annealing",
        "Extension",
        "Initialization"
      ],
      correctAnswer: 0,
      module: 3,
      explanation: "Denaturation is the first step in PCR, where DNA is heated to separate the double strands."
    },
    {
      id: 19,
      question: "What technique separates DNA by size?",
      options: [
        "Gel electrophoresis",
        "Chromatography",
        "Centrifugation",
        "Spectrophotometry"
      ],
      correctAnswer: 0,
      module: 3,
      explanation: "Gel electrophoresis separates DNA fragments by size as they migrate through a gel matrix under electrical current."

    // Module 4: Genetic Engineering (7 questions)
    },
    {
      id: 20,
      question: "What percentage of US soybeans are genetically modified?",
      options: [
        "Over 90%",
        "About 50%",
        "About 70%",
        "Over 95%"
      ],
      correctAnswer: 0,
      module: 4,
      explanation: "Over 90% of soybeans grown in the United States are genetically modified varieties, primarily herbicide-resistant."
    },
    {
      id: 21,
      question: "What are restriction enzymes often called?",
      options: [
        "Molecular scissors",
        "DNA glue",
        "Genetic markers",
        "Protein tags"
      ],
      correctAnswer: 0,
      module: 4,
      explanation: "Restriction enzymes are often called molecular scissors because they cut DNA at specific recognition sequences."
    },
    {
      id: 22,
      question: "What was the first recombinant pharmaceutical?",
      options: [
        "Insulin",
        "Human growth hormone",
        "Erythropoietin",
        "Interferon"
      ],
      correctAnswer: 0,
      module: 4,
      explanation: "Recombinant human insulin was the first genetically engineered pharmaceutical approved for medical use in 1982."
    },
    {
      id: 23,
      question: "What enzyme joins DNA fragments together?",
      options: [
        "DNA ligase",
        "Restriction enzyme",
        "DNA polymerase",
        "Reverse transcriptase"
      ],
      correctAnswer: 0,
      module: 4,
      explanation: "DNA ligase is the enzyme that joins DNA fragments together by forming phosphodiester bonds."
    },
    {
      id: 24,
      question: "What percentage of US corn is genetically modified?",
      options: [
        "About 80%",
        "About 50%",
        "About 90%",
        "About 70%"
      ],
      correctAnswer: 0,
      module: 4,
      explanation: "Approximately 80% of corn grown in the United States is genetically modified, primarily for insect resistance and herbicide tolerance."
    },
    {
      id: 25,
      question: "What is the most common bacterial host for cloning?",
      options: [
        "E. coli",
        "B. subtilis",
        "S. cerevisiae",
        "P. pastoris"
      ],
      correctAnswer: 0,
      module: 4,
      explanation: "Escherichia coli (E. coli) is the most commonly used bacterial host for DNA cloning and protein expression."
    },
    {
      id: 26,
      question: "What does GMO stand for?",
      options: [
        "Genetically Modified Organism",
        "Genetically Manipulated Organism",
        "Genetic Modification Operation",
        "Genomic Modification Organism"
      ],
      correctAnswer: 0,
      module: 4,
      explanation: "GMO stands for Genetically Modified Organism, referring to organisms whose genetic material has been altered using genetic engineering."

    // Module 5: Cell Culture (6 questions)
    },
    {
      id: 27,
      question: "What temperature is typically used for mammalian cell culture?",
      options: [
        "37°C",
        "25°C",
        "30°C",
        "42°C"
      ],
      correctAnswer: 0,
      module: 5,
      explanation: "Mammalian cells are typically cultured at 37°C, which matches human body temperature for optimal growth."
    },
    {
      id: 28,
      question: "At what temperature are cryopreserved cells stored long-term?",
      options: [
        "-196°C (liquid nitrogen)",
        "-80°C",
        "-20°C",
        "4°C"
      ],
      correctAnswer: 0,
      module: 5,
      explanation: "Cryopreserved cells are stored in liquid nitrogen at -196°C for long-term preservation and viability."
    },
    {
      id: 29,
      question: "What percentage of CO₂ is typically used for mammalian cell culture?",
      options: [
        "5%",
        "10%",
        "2%",
        "20%"
      ],
      correctAnswer: 0,
      module: 5,
      explanation: "Most mammalian cell cultures use 5% CO₂ to maintain proper pH in bicarbonate-buffered media."
    },
    {
      id: 30,
      question: "What was the first immortal human cell line?",
      options: [
        "HeLa",
        "HEK293",
        "CHO",
        "MCF-7"
      ],
      correctAnswer: 0,
      module: 5,
      explanation: "HeLa cells, derived from Henrietta Lacks in 1951, were the first immortal human cell line established."
    },
    {
      id: 31,
      question: "What type of cells grow attached to surfaces?",
      options: [
        "Adherent cells",
        "Suspension cells",
        "Floating cells",
        "Anchorage-independent cells"
      ],
      correctAnswer: 0,
      module: 5,
      explanation: "Adherent cells require attachment to a surface (like plastic or glass) for growth and proliferation."
    },
    {
      id: 32,
      question: "What cell line is commonly used for protein production?",
      options: [
        "CHO cells",
        "HeLa cells",
        "HEK293 cells",
        "NIH-3T3 cells"
      ],
      correctAnswer: 0,
      module: 5,
      explanation: "CHO (Chinese Hamster Ovary) cells are widely used for industrial production of therapeutic proteins."

    // Module 6: Applications (8 questions)
    },
    {
      id: 33,
      question: "What was the value of the monoclonal antibody market in 2022?",
      options: [
        "Over $150 billion",
        "Over $50 billion",
        "Over $200 billion",
        "Over $100 billion"
      ],
      correctAnswer: 0,
      module: 6,
      explanation: "The global monoclonal antibody market exceeded $150 billion in 2022, driven by cancer and autoimmune disease treatments."
    },
    {
      id: 34,
      question: "What percentage of drugs in clinical trials receive FDA approval?",
      options: [
        "About 10%",
        "About 50%",
        "About 25%",
        "About 75%"
      ],
      correctAnswer: 0,
      module: 6,
      explanation: "Only about 10% of drugs that enter clinical trials eventually receive FDA approval, demonstrating the high failure rate in drug development."
    },
    {
      id: 35,
      question: "What was the first recombinant vaccine?",
      options: [
        "Hepatitis B vaccine",
        "COVID-19 vaccine",
        "HPV vaccine",
        "Polio vaccine"
      ],
      correctAnswer: 0,
      module: 6,
      explanation: "The hepatitis B vaccine was the first recombinant vaccine approved for human use, produced in yeast cells."
    },
    {
      id: 36,
      question: "What percentage of monoclonal antibody market is cancer treatments?",
      options: [
        "Over 60%",
        "About 30%",
        "About 50%",
        "About 40%"
      ],
      correctAnswer: 0,
      module: 6,
      explanation: "Cancer treatments account for over 60% of the monoclonal antibody market, with drugs like Herceptin and Rituxan leading sales."
    },
    {
      id: 37,
      question: "What crop produces vitamin A through genetic engineering?",
      options: [
        "Golden Rice",
        "Bt corn",
        "Roundup Ready soybeans",
        "Herbicide-tolerant cotton"
      ],
      correctAnswer: 0,
      module: 6,
      explanation: "Golden Rice is genetically modified to produce beta-carotene, which the body converts to vitamin A to address deficiency."
    },
    {
      id: 38,
      question: "What type of therapy uses engineered T-cells?",
      options: [
        "CAR-T therapy",
        "Gene therapy",
        "Monoclonal antibody therapy",
        "Vaccine therapy"
      ],
      correctAnswer: 0,
      module: 6,
      explanation: "CAR-T (Chimeric Antigen Receptor T-cell) therapy engineers patient T-cells to target and kill cancer cells."
    },
    {
      id: 39,
      question: "What bioplastic comes from corn starch?",
      options: [
        "PLA",
        "PHA",
        "PET",
        "PVC"
      ],
      correctAnswer: 0,
      module: 6,
      explanation: "PLA (polylactic acid) is a bioplastic made from corn starch that is biodegradable and used in various applications."
    },
    {
      id: 40,
      question: "How long do clinical trials typically take?",
      options: [
        "5-7 years",
        "1-2 years",
        "2-3 years",
        "7-10 years"
      ],
      correctAnswer: 0,
      module: 6,
      explanation: "Clinical trials (Phases I-III) typically take 5-7 years to complete before regulatory submission."
    }
  ]
};

export default BiotechnologyCertificate;

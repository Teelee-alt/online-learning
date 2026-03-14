export const geneticsCertificateCourse = {
  id: "genetics-certificate",
  title: "Genetics (Certificate)",
  description: "Explore the fundamentals of genetics, DNA structure, inheritance patterns, and genetic technologies through easy-to-understand modules designed for beginners with no prior biology background.",
  duration: "6 weeks",
  timeCommitment: "4-6 hours per week",
  price: 12,
  upgradePrice: 18,
  icon: "🧬",
  badge: "Certificate",
  
  modules: [
    {
      id: 1,
      title: "DNA and the Blueprint of Life",
      content: `
## Understanding DNA Basics

**DNA (deoxyribonucleic acid)** is the molecule that carries the genetic instructions for all living things. Think of DNA as the blueprint or recipe book for building and maintaining an organism. Every cell in your body (except red blood cells) contains the same complete set of DNA instructions.

**The structure of DNA** was discovered in 1953 by James Watson and Francis Crick. DNA looks like a twisted ladder, called a double helix. The sides of the ladder are made of sugar and phosphate molecules. The rungs of the ladder are made of four chemical bases that pair together in specific ways.

**The four DNA bases** are: Adenine (A), Thymine (T), Guanine (G), and Cytosine (C). These bases always pair in a specific way: A pairs with T, and G pairs with C. This is called complementary base pairing. The order of these bases along the DNA strand forms the genetic code.

**Genes** are specific sections of DNA that contain instructions for making proteins. Each gene provides the code for a specific protein that has a particular job in the body. Humans have about 20,000-25,000 genes, but genes make up only about 1-2% of our total DNA.

### Chromosomes and Cells

**Chromosomes** are tightly coiled packages of DNA. Humans have 46 chromosomes arranged in 23 pairs. One chromosome in each pair comes from your mother, and the other comes from your father. Chromosomes are visible under a microscope and look like X-shaped structures when cells are dividing.

**Cells** are the basic building blocks of all living things. Your body contains about 37 trillion cells! Inside each cell (except red blood cells) is a nucleus that contains the chromosomes. When cells divide to make new cells, they copy their DNA so each new cell gets a complete set of instructions.

**DNA replication** is the process where DNA makes a copy of itself before cell division. The DNA double helix unwinds, and each strand serves as a template for building a new complementary strand. This ensures that each new cell gets an identical copy of the genetic material.

**Mutations** are changes in the DNA sequence. Some mutations happen naturally during DNA replication, while others can be caused by environmental factors like radiation or chemicals. Most mutations have no effect, some are harmful, and a few can be beneficial.
`,
      completed: false,
      quiz: [
        {
          id: 1,
          question: "What does DNA stand for?",
          options: [
            "Deoxyribonucleic acid",
            "Dynamic nucleic acid",
            "Deoxyribose nucleotide acid",
            "Developmental nucleic acid"
          ],
          correctAnswer: 0,
          explanation: "DNA stands for deoxyribonucleic acid, the molecule that carries genetic instructions."
        },
        {
          id: 2,
          question: "What shape does DNA form?",
          options: [
            "Double helix (twisted ladder)",
            "Single straight strand",
            "Circular loop",
            "Triple helix"
          ],
          correctAnswer: 0,
          explanation: "DNA forms a double helix structure that looks like a twisted ladder."
        },
        {
          id: 3,
          question: "Which DNA bases always pair together?",
          options: [
            "Adenine with Thymine, Guanine with Cytosine",
            "Adenine with Guanine, Thymine with Cytosine",
            "Adenine with Cytosine, Guanine with Thymine",
            "Any bases can pair randomly"
          ],
          correctAnswer: 0,
          explanation: "A always pairs with T, and G always pairs with C in DNA."
        },
        {
          id: 4,
          question: "What are genes?",
          options: [
            "Sections of DNA with instructions for proteins",
            "Entire chromosomes",
            "Only the visible traits we see",
            "Proteins that build cells"
          ],
          correctAnswer: 0,
          explanation: "Genes are specific sections of DNA that contain instructions for making proteins."
        },
        {
          id: 5,
          question: "How many chromosomes do humans have?",
          options: [
            "46 chromosomes (23 pairs)",
            "23 chromosomes (single set)",
            "92 chromosomes (46 pairs)",
            "The number varies between people"
          ],
          correctAnswer: 0,
          explanation: "Humans have 46 chromosomes arranged in 23 pairs."
        },
        {
          id: 6,
          question: "Where is DNA located in human cells?",
          options: [
            "In the nucleus (except in red blood cells)",
            "Floating freely in the cell",
            "Only in brain cells",
            "In the cell membrane"
          ],
          correctAnswer: 0,
          explanation: "DNA is located in the nucleus of human cells (red blood cells lack nuclei)."
        },
        {
          id: 7,
          question: "What is DNA replication?",
          options: [
            "DNA making a copy of itself before cell division",
            "DNA being destroyed and rebuilt",
            "DNA changing its structure completely",
            "DNA being translated into proteins"
          ],
          correctAnswer: 0,
          explanation: "DNA replication is the process where DNA makes a copy of itself before cell division."
        },
        {
          id: 8,
          question: "What are mutations?",
          options: [
            "Changes in the DNA sequence",
            "Always harmful DNA alterations",
            "Only changes in visible traits",
            "DNA copying without changes"
          ],
          correctAnswer: 0,
          explanation: "Mutations are changes in the DNA sequence, which can be neutral, harmful, or beneficial."
        },
        {
          id: 9,
          question: "How many genes do humans have approximately?",
          options: [
            "20,000-25,000 genes",
            "100,000-150,000 genes",
            "Only about 5,000 genes",
            "Exactly 46 genes"
          ],
          correctAnswer: 0,
          explanation: "Humans have approximately 20,000-25,000 genes."
        },
        {
          id: 10,
          question: "What do chromosomes look like under a microscope?",
          options: [
            "X-shaped structures when cells divide",
            "Always circular shapes",
            "Random blobs without shape",
            "Straight lines like rods"
          ],
          correctAnswer: 0,
          explanation: "Chromosomes look like X-shaped structures when cells are dividing."
        },
        {
          id: 11,
          question: "What are the sides of the DNA ladder made of?",
          options: [
            "Sugar and phosphate molecules",
            "Only protein molecules",
            "Lipid molecules",
            "Water molecules"
          ],
          correctAnswer: 0,
          explanation: "The sides of the DNA ladder are made of sugar and phosphate molecules."
        },
        {
          id: 12,
          question: "When was DNA structure discovered?",
          options: [
            "1953 by Watson and Crick",
            "1865 by Mendel",
            "2003 by Human Genome Project",
            "1944 by Avery"
          ],
          correctAnswer: 0,
          explanation: "The double helix structure of DNA was discovered in 1953 by James Watson and Francis Crick."
        },
        {
          id: 13,
          question: "What percentage of human DNA consists of genes?",
          options: [
            "About 1-2% of total DNA",
            "About 50% of total DNA",
            "About 90% of total DNA",
            "100% of DNA consists of genes"
          ],
          correctAnswer: 0,
          explanation: "Genes make up only about 1-2% of human DNA; the rest has other functions."
        },
        {
          id: 14,
          question: "Where do the two chromosomes in each pair come from?",
          options: [
            "One from mother, one from father",
            "Both from the mother only",
            "Both from the father only",
            "They form randomly"
          ],
          correctAnswer: 0,
          explanation: "In each chromosome pair, one comes from the mother and one from the father."
        },
        {
          id: 15,
          question: "What ensures each new cell gets identical DNA?",
          options: [
            "DNA replication before cell division",
            "Random distribution of chromosomes",
            "Only in some cell types",
            "Proteins carrying DNA to new cells"
          ],
          correctAnswer: 0,
          explanation: "DNA replication before cell division ensures each new cell gets an identical copy."
        },
        {
          id: 16,
          question: "What can cause mutations?",
          options: [
            "Errors in replication or environmental factors",
            "Only intentional changes by cells",
            "Only during protein production",
            "Mutations never occur naturally"
          ],
          correctAnswer: 0,
          explanation: "Mutations can occur from replication errors or environmental factors like radiation."
        },
        {
          id: 17,
          question: "What do genes provide instructions for?",
          options: [
            "Making specific proteins",
            "Directly creating visible traits",
            "Controlling cell division only",
            "Building DNA molecules"
          ],
          correctAnswer: 0,
          explanation: "Genes provide the code for making specific proteins that have jobs in the body."
        },
        {
          id: 18,
          question: "About how many cells are in the human body?",
          options: [
            "About 37 trillion cells",
            "About 1 million cells",
            "Exactly 100 billion cells",
            "The number constantly changes"
          ],
          correctAnswer: 0,
          explanation: "The human body contains approximately 37 trillion cells."
        },
        {
          id: 19,
          question: "What unwinds during DNA replication?",
          options: [
            "The DNA double helix unwinds",
            "Only the protein coatings",
            "The entire cell membrane",
            "Chromosomes break apart"
          ],
          correctAnswer: 0,
          explanation: "During replication, the DNA double helix unwinds so each strand can serve as a template."
        },
        {
          id: 20,
          question: "What are the rungs of the DNA ladder made of?",
          options: [
            "Paired chemical bases (A, T, G, C)",
            "Sugar molecules only",
            "Phosphate molecules only",
            "Protein molecules"
          ],
          correctAnswer: 0,
          explanation: "The rungs of the DNA ladder are made of paired chemical bases (A-T and G-C pairs)."
        }
      ]
    },
    {
      id: 2,
      title: "How Traits Are Inherited",
      content: `
## Mendel's Laws of Inheritance

**Gregor Mendel** was an Austrian monk who conducted experiments with pea plants in the 1860s. His work established the basic principles of inheritance, though it wasn't recognized until decades later. Mendel is called the "father of genetics" for his discoveries about how traits pass from parents to offspring.

**Mendel's first law (Law of Segregation)** states that each individual has two factors (now called alleles) for each trait, and these factors separate during the formation of reproductive cells (eggs and sperm). Each reproductive cell receives only one factor for each trait.

**Mendel's second law (Law of Independent Assortment)** states that factors for different traits are inherited independently of each other. For example, the gene for seed color in peas is inherited separately from the gene for seed shape. This law applies to genes on different chromosomes.

**Dominant and recessive traits** explain why some traits appear more frequently. A dominant allele will be expressed even if only one copy is present. A recessive allele will only be expressed if two copies are present (one from each parent). For example, brown eye color is dominant over blue eye color.

### Basic Inheritance Patterns

**Genotype** refers to the genetic makeup of an individual—the specific alleles they carry for a trait. **Phenotype** refers to the observable characteristics—what the trait actually looks like. For example, someone could have the genotype for brown eyes (one or two brown alleles) and the phenotype of brown eyes.

**Homozygous** means having two identical alleles for a trait (e.g., BB for brown eyes or bb for blue eyes). **Heterozygous** means having two different alleles for a trait (e.g., Bb for brown eyes, where B is brown and b is blue).

**Punnett squares** are simple diagrams used to predict the probability of offspring inheriting particular traits. They show all possible combinations of parental alleles. A basic Punnett square for one trait has four boxes showing possible genotypes of offspring.

**Family pedigrees** are diagrams that show the inheritance of a trait across generations in a family. Squares represent males, circles represent females, and shaded shapes indicate individuals who express the trait. Pedigrees help track how traits are inherited in families.

### Human Inheritance Examples

**Single gene traits** in humans follow Mendelian patterns. Examples include: earlobe attachment (free hanging is dominant, attached is recessive), tongue rolling (ability is dominant), widow's peak (V-shaped hairline is dominant), and hitchhiker's thumb (straight thumb is dominant).

**Blood type inheritance** involves multiple alleles (A, B, O) and shows both dominance and codominance. A and B are codominant (both expressed when present together), and both are dominant over O. This explains why type O parents can have type O children, but type A and B parents can have type O children if both carry O alleles.

**Sex-linked inheritance** involves genes on the X or Y chromosomes. Since males have only one X chromosome (XY), they express all alleles on their X chromosome, even recessive ones. Females have two X chromosomes (XX), so they need two copies of a recessive allele to express it. Color blindness is an example of X-linked recessive inheritance.

**Genetic carriers** are individuals who carry a recessive allele but don't show the trait because they also have a dominant allele. Carriers can pass the recessive allele to their children. Carrier status is important in genetic counseling for conditions like cystic fibrosis or sickle cell anemia.
`,
      completed: false,
      quiz: [
        {
          id: 1,
          question: "Who is called the 'father of genetics'?",
          options: [
            "Gregor Mendel",
            "James Watson",
            "Francis Crick",
            "Charles Darwin"
          ],
          correctAnswer: 0,
          explanation: "Gregor Mendel is called the father of genetics for his pea plant experiments in the 1860s."
        },
        {
          id: 2,
          question: "What does Mendel's Law of Segregation state?",
          options: [
            "Each individual has two factors that separate during reproduction",
            "All traits are inherited together",
            "Only dominant traits are inherited",
            "Factors don't separate during reproduction"
          ],
          correctAnswer: 0,
          explanation: "Law of Segregation states each individual has two factors that separate during reproduction."
        },
        {
          id: 3,
          question: "What is a dominant allele?",
          options: [
            "Expressed even if only one copy is present",
            "Only expressed if two copies are present",
            "Never expressed in any situation",
            "Only expressed in females"
          ],
          correctAnswer: 0,
          explanation: "A dominant allele will be expressed even if only one copy is present."
        },
        {
          id: 4,
          question: "What is the difference between genotype and phenotype?",
          options: [
            "Genotype is genetic makeup, phenotype is observable traits",
            "Genotype is observable traits, phenotype is genetic makeup",
            "They mean exactly the same thing",
            "Genotype is for plants, phenotype is for animals"
          ],
          correctAnswer: 0,
          explanation: "Genotype is the genetic makeup (alleles), phenotype is the observable characteristics."
        },
        {
          id: 5,
          question: "What does homozygous mean?",
          options: [
            "Having two identical alleles for a trait",
            "Having two different alleles for a trait",
            "Having no alleles for a trait",
            "Having multiple alleles for a trait"
          ],
          correctAnswer: 0,
          explanation: "Homozygous means having two identical alleles for a particular trait."
        },
        {
          id: 6,
          question: "What are Punnett squares used for?",
          options: [
            "Predicting probability of offspring traits",
            "Measuring actual DNA sequences",
            "Viewing chromosomes under microscope",
            "Counting cells in the body"
          ],
          correctAnswer: 0,
          explanation: "Punnett squares are diagrams used to predict probability of offspring inheriting traits."
        },
        {
          id: 7,
          question: "What do pedigrees show?",
          options: [
            "Inheritance of traits across family generations",
            "Only current family members' traits",
            "DNA sequences of individuals",
            "Chromosome structures"
          ],
          correctAnswer: 0,
          explanation: "Pedigrees are diagrams showing inheritance of traits across generations in a family."
        },
        {
          id: 8,
          question: "What is an example of a single gene trait in humans?",
          options: [
            "Earlobe attachment (free vs attached)",
            "Height (which involves many genes)",
            "Skin color (multiple genes involved)",
            "Intelligence (many factors involved)"
          ],
          correctAnswer: 0,
          explanation: "Earlobe attachment is a single gene trait following Mendelian inheritance patterns."
        },
        {
          id: 9,
          question: "What does codominance mean in blood type inheritance?",
          options: [
            "Both A and B alleles are expressed when present together",
            "Only one allele is ever expressed",
            "A is dominant over B and O",
            "O is dominant over A and B"
          ],
          correctAnswer: 0,
          explanation: "In blood types, A and B are codominant—both are expressed when present together (type AB)."
        },
        {
          id: 10,
          question: "Why do males express X-linked recessive traits more often?",
          options: [
            "They have only one X chromosome",
            "They have two X chromosomes",
            "Y chromosome causes more expression",
            "Females never get X-linked traits"
          ],
          correctAnswer: 0,
          explanation: "Males have only one X chromosome, so they express all alleles on it, even recessive ones."
        },
        {
          id: 11,
          question: "What is a genetic carrier?",
          options: [
            "Carries recessive allele but doesn't show trait",
            "Always shows the trait they carry",
            "Cannot pass alleles to children",
            "Has only dominant alleles"
          ],
          correctAnswer: 0,
          explanation: "Carriers have one recessive allele but don't show the trait due to a dominant allele."
        },
        {
          id: 12,
          question: "What does Mendel's Law of Independent Assortment state?",
          options: [
            "Factors for different traits are inherited independently",
            "All traits are inherited together always",
            "Only linked traits are inherited together",
            "Traits depend on environmental factors only"
          ],
          correctAnswer: 0,
          explanation: "Law of Independent Assortment states factors for different traits are inherited independently."
        },
        {
          id: 13,
          question: "What is a recessive allele?",
          options: [
            "Only expressed if two copies are present",
            "Always expressed when present",
            "Never expressed in any situation",
            "Only expressed in males"
          ],
          correctAnswer: 0,
          explanation: "A recessive allele is only expressed if two copies are present (no dominant allele)."
        },
        {
          id: 14,
          question: "What does heterozygous mean?",
          options: [
            "Having two different alleles for a trait",
            "Having two identical alleles for a trait",
            "Having no alleles for a trait",
            "Having extra alleles for a trait"
          ],
          correctAnswer: 0,
          explanation: "Heterozygous means having two different alleles for a particular trait."
        },
        {
          id: 15,
          question: "What shapes represent males and females in pedigrees?",
          options: [
            "Squares for males, circles for females",
            "Circles for males, squares for females",
            "Triangles for both males and females",
            "Diamonds for males, hearts for females"
          ],
          correctAnswer: 0,
          explanation: "In pedigrees, squares represent males and circles represent females."
        },
        {
          id: 16,
          question: "What blood type is recessive to both A and B?",
          options: [
            "Type O",
            "Type A",
            "Type B",
            "Type AB"
          ],
          correctAnswer: 0,
          explanation: "Type O is recessive to both A and B blood types."
        },
        {
          id: 17,
          question: "What chromosome combination do females have?",
          options: [
            "XX chromosomes",
            "XY chromosomes",
            "YY chromosomes",
            "XO chromosomes"
          ],
          correctAnswer: 0,
          explanation: "Females have two X chromosomes (XX)."
        },
        {
          id: 18,
          question: "When can two brown-eyed parents have a blue-eyed child?",
          options: [
            "When both parents carry recessive blue allele",
            "Never possible",
            "Only if mutation occurs",
            "Only if environmental factors change eye color"
          ],
          correctAnswer: 0,
          explanation: "Two brown-eyed parents can have a blue-eyed child if both carry the recessive blue allele."
        },
        {
          id: 19,
          question: "What do shaded shapes indicate in pedigrees?",
          options: [
            "Individuals who express the trait",
            "Individuals who are carriers only",
            "Individuals who have died",
            "Individuals who are adopted"
          ],
          correctAnswer: 0,
          explanation: "Shaded shapes in pedigrees indicate individuals who express the trait being studied."
        },
        {
          id: 20,
          question: "Why is carrier status important in genetic counseling?",
          options: [
            "Carriers can pass recessive alleles to children",
            "Carriers always show the condition",
            "Carriers cannot have children",
            "Carrier status has no importance"
          ],
          correctAnswer: 0,
          explanation: "Carrier status is important because carriers can pass recessive alleles to their children."
        }
      ]
    },
    {
      id: 3,
      title: "From DNA to Proteins",
      content: `
## The Central Dogma of Molecular Biology

**The central dogma** describes the flow of genetic information: DNA → RNA → protein. DNA contains the instructions, RNA carries the message, and proteins perform the work in cells. This process explains how genes are expressed to create traits.

**Transcription** is the first step where DNA is used to create messenger RNA (mRNA). The DNA double helix unwinds in a specific region, and RNA polymerase enzyme builds an mRNA strand using one DNA strand as a template. The mRNA is complementary to the DNA template strand.

**Translation** is the second step where mRNA is used to build a protein. Ribosomes read the mRNA sequence three bases at a time (each group of three is called a codon). Transfer RNA (tRNA) molecules bring amino acids to the ribosome, matching their anticodon to the mRNA codon. Amino acids are linked together to form a protein chain.

**The genetic code** is the set of rules that translates mRNA codons into amino acids. There are 64 possible codons (4³ combinations) but only 20 amino acids, so the code is redundant—multiple codons can specify the same amino acid. The code is nearly universal across all living organisms.

### RNA Types and Functions

**Messenger RNA (mRNA)** carries the genetic code from DNA in the nucleus to ribosomes in the cytoplasm. It's a single-stranded copy of a gene that serves as the instructions for protein building. After being used, mRNA is broken down and recycled.

**Transfer RNA (tRNA)** brings amino acids to the ribosome during translation. Each tRNA has an anticodon that matches a specific mRNA codon and carries the corresponding amino acid. There are different tRNA molecules for each amino acid.

**Ribosomal RNA (rRNA)** combines with proteins to form ribosomes—the cellular machinery that builds proteins. rRNA makes up about 60% of a ribosome's mass and helps catalyze the formation of peptide bonds between amino acids.

**Other RNA types** have regulatory functions: microRNAs (miRNAs) regulate gene expression by blocking mRNA translation, and ribosomal RNAs help with various cellular processes. These RNAs don't code for proteins but influence which proteins are made.

### Protein Structure and Function

**Proteins** are made of chains of amino acids folded into specific three-dimensional shapes. The sequence of amino acids determines how the protein folds, and the shape determines the protein's function. Proteins have many roles: enzymes (catalyze reactions), structural components (like collagen), antibodies (fight infections), hormones (chemical messengers), and transporters (like hemoglobin carrying oxygen).

**Amino acids** are the building blocks of proteins. There are 20 standard amino acids that can combine in different sequences to make countless different proteins. The properties of amino acids (size, charge, water-attracting or repelling) determine how the protein folds.

**Protein folding** occurs as the amino acid chain is synthesized. The primary structure is the amino acid sequence. Secondary structures include alpha helices and beta sheets formed by hydrogen bonds. Tertiary structure is the overall 3D shape. Some proteins have quaternary structure when multiple chains combine.

**Misfolded proteins** can cause diseases. When proteins don't fold correctly, they may not function properly or may form harmful clumps. Examples include Alzheimer's disease (amyloid plaques) and mad cow disease (prion proteins). Cells have quality control systems to detect and destroy misfolded proteins.

### Gene Expression Regulation

**Gene expression** refers to whether and how much a gene is turned on to make its protein. Not all genes are active in all cells at all times. Different cell types express different sets of genes—liver cells express different genes than brain cells, even though they have the same DNA.

**Transcriptional regulation** controls whether a gene is transcribed into mRNA. Regulatory proteins bind to specific DNA sequences near genes to turn them on or off. Promoters are DNA sequences where RNA polymerase binds to start transcription.

**Epigenetic modifications** can turn genes on or off without changing the DNA sequence. DNA methylation adds methyl groups to DNA, usually turning genes off. Histone modification changes how DNA is packaged, making genes more or less accessible for transcription.

**Environmental factors** can influence gene expression. Diet, stress, exercise, and exposure to toxins can affect which genes are turned on or off. This explains how identical twins can develop differences despite having identical DNA sequences.
`,
      completed: false,
      quiz: [
        {
          id: 1,
          question: "What does the central dogma describe?",
          options: [
            "Flow of genetic information: DNA → RNA → protein",
            "Only DNA replication process",
            "How traits are inherited from parents",
            "The structure of chromosomes"
          ],
          correctAnswer: 0,
          explanation: "The central dogma describes flow of genetic information: DNA → RNA → protein."
        },
        {
          id: 2,
          question: "What is transcription?",
          options: [
            "DNA used to create messenger RNA",
            "RNA used to create DNA",
            "Protein used to create RNA",
            "RNA used to create protein"
          ],
          correctAnswer: 0,
          explanation: "Transcription is the process where DNA is used to create messenger RNA (mRNA)."
        },
        {
          id: 3,
          question: "What happens during translation?",
          options: [
            "mRNA is used to build a protein",
            "DNA is copied to make new DNA",
            "Proteins are broken down into amino acids",
            "RNA is converted back to DNA"
          ],
          correctAnswer: 0,
          explanation: "Translation is where mRNA is used by ribosomes to build a protein chain."
        },
        {
          id: 4,
          question: "What are codons?",
          options: [
            "Groups of three mRNA bases that specify amino acids",
            "Single DNA bases",
            "Complete genes",
            "Protein folding patterns"
          ],
          correctAnswer: 0,
          explanation: "Codons are groups of three mRNA bases that specify particular amino acids."
        },
        {
          id: 5,
          question: "What does mRNA do?",
          options: [
            "Carries genetic code from DNA to ribosomes",
            "Brings amino acids to ribosomes",
            "Forms part of ribosome structure",
            "Regulates gene expression"
          ],
          correctAnswer: 0,
          explanation: "mRNA carries the genetic code from DNA in nucleus to ribosomes in cytoplasm."
        },
        {
          id: 6,
          question: "What does tRNA do?",
          options: [
            "Brings amino acids to the ribosome",
            "Carries code from DNA to ribosomes",
            "Forms ribosome structure",
            "Regulates other RNAs"
          ],
          correctAnswer: 0,
          explanation: "tRNA brings specific amino acids to the ribosome during protein synthesis."
        },
        {
          id: 7,
          question: "What are ribosomes made of?",
          options: [
            "rRNA and proteins",
            "Only mRNA molecules",
            "Only tRNA molecules",
            "DNA and lipids"
          ],
          correctAnswer: 0,
          explanation: "Ribosomes are made of ribosomal RNA (rRNA) and proteins."
        },
        {
          id: 8,
          question: "What determines a protein's function?",
          options: [
            "Its three-dimensional shape",
            "Only its amino acid sequence",
            "The DNA sequence alone",
            "The RNA that made it"
          ],
          correctAnswer: 0,
          explanation: "A protein's three-dimensional shape determines its function in the cell."
        },
        {
          id: 9,
          question: "How many standard amino acids are there?",
          options: [
            "20 amino acids",
            "64 amino acids",
            "4 amino acids",
            "100+ amino acids"
          ],
          correctAnswer: 0,
          explanation: "There are 20 standard amino acids that combine to form proteins."
        },
        {
          id: 10,
          question: "What can misfolded proteins cause?",
          options: [
            "Diseases like Alzheimer's",
            "Always beneficial effects",
            "No effect on health",
            "Only temporary cell issues"
          ],
          correctAnswer: 0,
          explanation: "Misfolded proteins can cause diseases like Alzheimer's and mad cow disease."
        },
        {
          id: 11,
          question: "What is gene expression?",
          options: [
            "Whether and how much a gene is turned on",
            "Only the DNA sequence of a gene",
            "The inheritance pattern of a gene",
            "The mutation rate of a gene"
          ],
          correctAnswer: 0,
          explanation: "Gene expression refers to whether and how much a gene is activated to make protein."
        },
        {
          id: 12,
          question: "What controls transcriptional regulation?",
          options: [
            "Regulatory proteins binding to DNA",
            "Only the DNA sequence itself",
            "Environmental factors only",
            "Random chance"
          ],
          correctAnswer: 0,
          explanation: "Transcriptional regulation involves regulatory proteins binding to DNA to turn genes on/off."
        },
        {
          id: 13,
          question: "What are epigenetic modifications?",
          options: [
            "Changes that turn genes on/off without DNA sequence change",
            "Changes in DNA sequence itself",
            "Only mutations in genes",
            "Protein folding changes"
          ],
          correctAnswer: 0,
          explanation: "Epigenetic modifications turn genes on/off without changing the DNA sequence."
        },
        {
          id: 14,
          question: "What does DNA methylation usually do?",
          options: [
            "Turns genes off",
            "Turns genes on",
            "Causes mutations in DNA",
            "Repairs DNA damage"
          ],
          correctAnswer: 0,
          explanation: "DNA methylation usually turns genes off by adding methyl groups to DNA."
        },
        {
          id: 15,
          question: "Why do different cell types express different genes?",
          options: [
            "Different genes are turned on in different cells",
            "They have different DNA sequences",
            "Only some cells have DNA",
            "Environmental factors don't affect cells"
          ],
          correctAnswer: 0,
          explanation: "Different cell types express different genes even though they have the same DNA."
        },
        {
          id: 16,
          question: "What builds the mRNA strand during transcription?",
          options: [
            "RNA polymerase enzyme",
            "DNA polymerase enzyme",
            "Ribosomes",
            "tRNA molecules"
          ],
          correctAnswer: 0,
          explanation: "RNA polymerase enzyme builds the mRNA strand using DNA as a template."
        },
        {
          id: 17,
          question: "What reads mRNA during translation?",
          options: [
            "Ribosomes",
            "RNA polymerase",
            "DNA helicase",
            "Proteins alone"
          ],
          correctAnswer: 0,
          explanation: "Ribosomes read the mRNA sequence during translation to build proteins."
        },
        {
          id: 18,
          question: "How many possible mRNA codons are there?",
          options: [
            "64 possible codons",
            "20 codons (one per amino acid)",
            "4 codons (one per base)",
            "Unlimited number of codons"
          ],
          correctAnswer: 0,
          explanation: "There are 64 possible mRNA codons (4 bases in groups of three = 4³ = 64)."
        },
        {
          id: 19,
          question: "What are promoters?",
          options: [
            "DNA sequences where RNA polymerase binds",
            "Proteins that bind to DNA",
            "mRNA sequences that start translation",
            "Amino acid sequences in proteins"
          ],
          correctAnswer: 0,
          explanation: "Promoters are DNA sequences where RNA polymerase binds to start transcription."
        },
        {
          id: 20,
          question: "How can identical twins develop differences?",
          options: [
            "Different gene expression from environmental factors",
            "They have different DNA sequences",
            "Only through mutations after birth",
            "They cannot develop differences"
          ],
          correctAnswer: 0,
          explanation: "Identical twins can develop differences due to different gene expression from environmental factors."
        }
      ]
    },
    {
      id: 4,
      title: "Genetic Variation and Mutations",
      content: `
## Sources of Genetic Diversity

**Genetic variation** refers to differences in DNA sequences among individuals. This variation is the raw material for evolution and explains why people look different, have different susceptibilities to diseases, and respond differently to medications. Without genetic variation, all members of a species would be identical.

**Mutations** are the ultimate source of all genetic variation. A mutation is any change in the DNA sequence. Mutations can occur during DNA replication, from environmental factors like radiation or chemicals, or from errors in DNA repair. Most mutations are neutral, some are harmful, and a few are beneficial.

**Types of mutations** include: point mutations (change in single DNA base), insertions (adding extra bases), deletions (removing bases), and chromosomal mutations (large-scale changes affecting many genes). The effect of a mutation depends on where it occurs and what it changes.

**Genetic recombination** during sexual reproduction creates new combinations of alleles. During meiosis (formation of egg and sperm cells), chromosomes exchange segments in a process called crossing over. This shuffles parental genes so offspring get unique combinations not identical to either parent.

### Types of Genetic Changes

**Silent mutations** change a DNA base but don't change the amino acid in the protein because of the genetic code's redundancy. For example, if a codon changes from GAA to GAG, both code for the same amino acid (glutamic acid). These mutations usually have no effect.

**Missense mutations** change a DNA base so it codes for a different amino acid. This can change the protein's structure and function. Some missense mutations cause diseases like sickle cell anemia (one DNA base change alters hemoglobin protein).

**Nonsense mutations** change a normal codon into a stop codon, causing premature termination of protein synthesis. The resulting truncated protein is usually nonfunctional. Many genetic disorders result from nonsense mutations.

**Frameshift mutations** occur when bases are inserted or deleted (not in multiples of three), shifting the reading frame. All codons after the mutation are read incorrectly, usually producing a completely nonfunctional protein. Frameshift mutations often have severe effects.

### Chromosomal Abnormalities

**Aneuploidy** is having an abnormal number of chromosomes. Down syndrome (trisomy 21) results from having three copies of chromosome 21 instead of two. Other examples include Turner syndrome (female with only one X chromosome) and Klinefelter syndrome (male with XXY chromosomes).

**Chromosomal rearrangements** include: deletions (loss of chromosome segment), duplications (extra copies of segment), inversions (segment reversed), and translocations (segment moved to different chromosome). These can cause genetic disorders or be balanced (no genetic material lost).

**Genetic mosaicism** occurs when an individual has cells with different genetic makeup. This happens when mutations occur early in embryonic development, affecting only some cell lines. Mosaicism can explain why some genetic conditions affect only parts of the body.

**Mitochondrial DNA** is inherited only from the mother and has its own mutation rate. Mitochondrial disorders affect energy production in cells and can cause muscle weakness, neurological problems, and other symptoms. These follow maternal inheritance patterns.

### Evolution and Population Genetics

**Natural selection** acts on genetic variation. Individuals with traits that help them survive and reproduce pass those traits to offspring. Over generations, beneficial traits become more common in the population. This is the driving force of evolution.

**Genetic drift** is random changes in allele frequencies in small populations. Unlike natural selection, drift is not based on fitness. Founder effect occurs when a small group starts a new population, carrying only a sample of the original population's genetic variation.

**Gene flow** occurs when individuals migrate between populations, bringing their genes with them. This increases genetic variation within populations and reduces differences between populations. Gene flow can introduce new alleles into a population.

**Genetic bottlenecks** occur when a population is drastically reduced in size, then recovers. The surviving individuals have only a fraction of the original genetic variation. Cheetahs experienced a genetic bottleneck, resulting in very low genetic diversity today.
`,
      completed: false,
      quiz: [
        {
          id: 1,
          question: "What is genetic variation?",
          options: [
            "Differences in DNA sequences among individuals",
            "Identical DNA in all individuals",
            "Only visible differences between people",
            "Environmental differences only"
          ],
          correctAnswer: 0,
          explanation: "Genetic variation refers to differences in DNA sequences among individuals."
        },
        {
          id: 2,
          question: "What is the ultimate source of all genetic variation?",
          options: [
            "Mutations",
            "Only environmental factors",
            "Learning and experience",
            "Parental teaching"
          ],
          correctAnswer: 0,
          explanation: "Mutations are the ultimate source of all genetic variation."
        },
        {
          id: 3,
          question: "What happens during genetic recombination?",
          options: [
            "Chromosomes exchange segments during meiosis",
            "DNA is completely rewritten",
            "Mutations are repaired",
            "Proteins are synthesized"
          ],
          correctAnswer: 0,
          explanation: "During recombination (crossing over), chromosomes exchange segments during meiosis."
        },
        {
          id: 4,
          question: "What is a silent mutation?",
          options: [
            "Changes DNA base but not the amino acid",
            "Changes amino acid in protein",
            "Creates a stop codon",
            "Shifts the reading frame"
          ],
          correctAnswer: 0,
          explanation: "Silent mutations change a DNA base but don't change the amino acid due to code redundancy."
        },
        {
          id: 5,
          question: "What is a missense mutation?",
          options: [
            "Changes DNA base to code for different amino acid",
            "Doesn't change the amino acid",
            "Creates premature stop codon",
            "Inserts or deletes bases"
          ],
          correctAnswer: 0,
          explanation: "Missense mutations change a DNA base so it codes for a different amino acid."
        },
        {
          id: 6,
          question: "What causes sickle cell anemia?",
          options: [
            "Missense mutation in hemoglobin gene",
            "Chromosome deletion",
            "Extra chromosome 21",
            "Mitochondrial mutation"
          ],
          correctAnswer: 0,
          explanation: "Sickle cell anemia results from a missense mutation in the hemoglobin gene."
        },
        {
          id: 7,
          question: "What is a nonsense mutation?",
          options: [
            "Changes normal codon to stop codon",
            "Changes amino acid to different one",
            "Doesn't change the protein",
            "Adds extra amino acids"
          ],
          correctAnswer: 0,
          explanation: "Nonsense mutations change a normal codon into a stop codon, truncating the protein."
        },
        {
          id: 8,
          question: "What happens in frameshift mutations?",
          options: [
            "Insertion/deletion shifts reading frame",
            "Single base change without frame shift",
            "Chromosome number changes",
            "Protein folds correctly"
          ],
          correctAnswer: 0,
          explanation: "Frameshift mutations insert/delete bases not in multiples of three, shifting reading frame."
        },
        {
          id: 9,
          question: "What is aneuploidy?",
          options: [
            "Abnormal number of chromosomes",
            "Normal chromosome number",
            "Only chromosome structure changes",
            "Mitochondrial DNA changes"
          ],
          correctAnswer: 0,
          explanation: "Aneuploidy means having an abnormal number of chromosomes."
        },
        {
          id: 10,
          question: "What causes Down syndrome?",
          options: [
            "Three copies of chromosome 21",
            "Missing X chromosome",
            "Extra Y chromosome",
            "Deletion on chromosome 5"
          ],
          correctAnswer: 0,
          explanation: "Down syndrome (trisomy 21) results from three copies of chromosome 21."
        },
        {
          id: 11,
          question: "What is genetic mosaicism?",
          options: [
            "Individual has cells with different genetic makeup",
            "All cells have identical DNA",
            "Only mitochondrial DNA varies",
            "Chromosomes are perfectly matched"
          ],
          correctAnswer: 0,
          explanation: "Genetic mosaicism occurs when an individual has cells with different genetic makeup."
        },
        {
          id: 12,
          question: "How is mitochondrial DNA inherited?",
          options: [
            "Only from the mother",
            "Only from the father",
            "Equally from both parents",
            "Randomly from either parent"
          ],
          correctAnswer: 0,
          explanation: "Mitochondrial DNA is inherited only from the mother."
        },
        {
          id: 13,
          question: "What is natural selection?",
          options: [
            "Individuals with beneficial traits reproduce more",
            "Random changes in allele frequencies",
            "Migration between populations",
            "Sudden population decrease"
          ],
          correctAnswer: 0,
          explanation: "Natural selection occurs when individuals with beneficial traits survive/reproduce better."
        },
        {
          id: 14,
          question: "What is genetic drift?",
          options: [
            "Random changes in allele frequencies",
            "Selection based on fitness",
            "Intentional breeding by humans",
            "Migration between populations"
          ],
          correctAnswer: 0,
          explanation: "Genetic drift is random changes in allele frequencies, especially in small populations."
        },
        {
          id: 15,
          question: "What is the founder effect?",
          options: [
            "Small group starts new population with limited variation",
            "Large population maintains all variation",
            "Mutation creating new species",
            "Environmental adaptation"
          ],
          correctAnswer: 0,
          explanation: "Founder effect occurs when a small group starts a new population with limited genetic variation."
        },
        {
          id: 16,
          question: "What is gene flow?",
          options: [
            "Migration bringing genes between populations",
            "Mutations within a population",
            "Natural selection acting on traits",
            "Genetic drift in isolation"
          ],
          correctAnswer: 0,
          explanation: "Gene flow occurs when individuals migrate between populations, bringing their genes."
        },
        {
          id: 17,
          question: "What is a genetic bottleneck?",
          options: [
            "Population drastically reduced then recovers with less variation",
            "Population grows exponentially",
            "All genetic variation is maintained",
            "New species forms suddenly"
          ],
          correctAnswer: 0,
          explanation: "Genetic bottlenecks occur when a population is drastically reduced, then recovers with less genetic variation."
        },
        {
          id: 18,
          question: "What animal experienced a genetic bottleneck?",
          options: [
            "Cheetahs",
            "Humans worldwide",
            "Domestic dogs",
            "Laboratory mice"
          ],
          correctAnswer: 0,
          explanation: "Cheetahs experienced a genetic bottleneck, resulting in very low genetic diversity."
        },
        {
          id: 19,
          question: "What type of mutation usually has no effect?",
          options: [
            "Silent mutations",
            "Missense mutations",
            "Nonsense mutations",
            "Frameshift mutations"
          ],
          correctAnswer: 0,
          explanation: "Silent mutations usually have no effect because they don't change the amino acid."
        },
        {
          id: 20,
          question: "When does crossing over occur?",
          options: [
            "During meiosis (formation of egg/sperm)",
            "During DNA replication",
            "During protein synthesis",
            "During cell division for growth"
          ],
          correctAnswer: 0,
          explanation: "Crossing over (genetic recombination) occurs during meiosis when egg and sperm cells form."
        }
      ]
    },
    {
      id: 5,
      title: "Modern Genetics and Biotechnology",
      content: `
## DNA Sequencing and Genomics

**DNA sequencing** determines the exact order of DNA bases in a segment of DNA. The first methods were developed in the 1970s, but modern next-generation sequencing is much faster and cheaper. The Human Genome Project (1990-2003) sequenced the entire human genome.

**The human genome** contains about 3 billion DNA base pairs. Only about 1-2% codes for proteins. The rest includes regulatory sequences, non-coding RNAs, and repetitive DNA. Comparing genomes between species reveals evolutionary relationships and conserved genes.

**Personal genomics** allows individuals to have their DNA analyzed. Direct-to-consumer genetic testing can provide information about ancestry, traits, and health risks. However, results should be interpreted carefully with genetic counseling, as they often show probabilities rather than certainties.

**Pharmacogenomics** studies how genes affect responses to medications. Genetic variations can make drugs more effective, less effective, or cause side effects in different people. This field aims to develop personalized medicine—choosing the right drug at the right dose for each person based on their genetics.

### Genetic Engineering Techniques

**Recombinant DNA technology** combines DNA from different sources. Restriction enzymes cut DNA at specific sequences, and DNA ligase joins DNA fragments together. This allows genes to be inserted into plasmids (small circular DNA) and transferred into bacteria or other organisms.

**Polymerase chain reaction (PCR)** amplifies specific DNA segments, making millions of copies from a tiny sample. PCR requires DNA template, primers (short DNA sequences that match the target), nucleotides, and heat-resistant DNA polymerase. PCR revolutionized genetics by enabling analysis of minute DNA samples.

**CRISPR-Cas9** is a gene editing system adapted from bacterial immune systems. The Cas9 protein acts as molecular scissors that cut DNA at specific locations guided by RNA. Cells repair the cut, allowing genes to be added, removed, or modified. CRISPR has transformed genetic research and has therapeutic potential.

**Gene therapy** aims to treat genetic disorders by introducing functional genes into patients' cells. Viral vectors often deliver the therapeutic genes. Early gene therapy faced challenges, but recent advances show promise for conditions like inherited blindness, immune deficiencies, and blood disorders.

### Applications in Medicine and Agriculture

**Genetic testing** can diagnose genetic disorders, identify carriers, and assess disease risk. Types include: prenatal testing (on fetal cells), newborn screening (for conditions like PKU), diagnostic testing (for symptoms), predictive testing (for late-onset disorders), and carrier testing (for recessive conditions).

**Gene cloning** produces multiple copies of a gene for research or therapeutic use. Therapeutic cloning creates embryonic stem cells for regenerative medicine. Reproductive cloning produces genetically identical organisms (like Dolly the sheep in 1996), raising ethical concerns.

**Genetically modified organisms (GMOs)** have altered DNA using biotechnology. In agriculture, GM crops may be pest-resistant, herbicide-tolerant, or nutritionally enhanced. In medicine, GM bacteria produce insulin, and GM animals model human diseases. Regulations and labeling vary by country.

**Synthetic biology** designs and constructs new biological parts and systems. This includes creating artificial genes, metabolic pathways, or even minimal genomes. Applications range from producing biofuels to developing biosensors that detect environmental contaminants.

### Ethical, Legal, and Social Issues

**Genetic privacy** concerns who has access to genetic information and how it's used. Genetic discrimination occurs when people are treated differently based on genetic information. Laws like GINA (Genetic Information Nondiscrimination Act) in the US protect against health insurance and employment discrimination.

**Informed consent** for genetic testing requires understanding potential results, limitations, and implications for family members. Genetic counseling helps individuals make informed decisions about testing and understand results in context of personal and family history.

**Eugenics** refers to attempts to improve human genetics through selective breeding. Historical eugenics programs were unethical and harmful. Modern discussions about genetic enhancement raise similar ethical questions about inequality, coercion, and defining "improvement."

**Ownership of genetic material** raises questions about patenting genes, benefit-sharing from research, and indigenous rights to traditional knowledge. The Supreme Court ruled in 2013 that naturally occurring genes cannot be patented, but synthetic DNA can be.
`,
      completed: false,
      quiz: [
        {
          id: 1,
          question: "What does DNA sequencing determine?",
          options: [
            "Exact order of DNA bases in a segment",
            "Only the number of chromosomes",
            "Protein structure directly",
            "Gene expression levels"
          ],
          correctAnswer: 0,
          explanation: "DNA sequencing determines the exact order of DNA bases (A, T, C, G) in a DNA segment."
        },
        {
          id: 2,
          question: "When was the Human Genome Project completed?",
          options: [
            "2003 (after 13 years of work)",
            "1953 (when DNA structure discovered)",
            "1985 (when PCR invented)",
            "2012 (when CRISPR discovered)"
          ],
          correctAnswer: 0,
          explanation: "The Human Genome Project was completed in 2003 after 13 years of international effort."
        },
        {
          id: 3,
          question: "What percentage of human DNA codes for proteins?",
          options: [
            "About 1-2%",
            "About 50%",
            "About 90%",
            "100% (all DNA codes for proteins)"
          ],
          correctAnswer: 0,
          explanation: "Only about 1-2% of human DNA actually codes for proteins."
        },
        {
          id: 4,
          question: "What is pharmacogenomics?",
          options: [
            "How genes affect responses to medications",
            "Developing new pharmaceutical drugs",
            "Genetic testing for diseases only",
            "Cloning genes for drug production"
          ],
          correctAnswer: 0,
          explanation: "Pharmacogenomics studies how genetic variations affect individual responses to medications."
        },
        {
          id: 5,
          question: "What does recombinant DNA technology do?",
          options: [
            "Combines DNA from different sources",
            "Only sequences DNA",
            "Amplifies DNA segments",
            "Edits genes precisely"
          ],
          correctAnswer: 0,
          explanation: "Recombinant DNA technology combines DNA from different sources to create new genetic combinations."
        },
        {
          id: 6,
          question: "What does PCR do?",
          options: [
            "Amplifies specific DNA segments",
            "Cuts DNA at specific sites",
            "Sequences entire genomes",
            "Edits genes in cells"
          ],
          correctAnswer: 0,
          explanation: "PCR (polymerase chain reaction) amplifies specific DNA segments, making millions of copies."
        },
        {
          id: 7,
          question: "What is CRISPR-Cas9 used for?",
          options: [
            "Gene editing (cutting and modifying DNA)",
            "Only DNA sequencing",
            "Protein synthesis",
            "Cell division observation"
          ],
          correctAnswer: 0,
          explanation: "CRISPR-Cas9 is a gene editing system that cuts DNA at specific locations for modification."
        },
        {
          id: 8,
          question: "What does gene therapy aim to do?",
          options: [
            "Treat disorders by introducing functional genes",
            "Only diagnose genetic conditions",
            "Prevent all genetic mutations",
            "Clone entire organisms"
          ],
          correctAnswer: 0,
          explanation: "Gene therapy aims to treat genetic disorders by introducing functional genes into patients' cells."
        },
        {
          id: 9,
          question: "What is newborn screening for?",
          options: [
            "Detecting genetic conditions early (like PKU)",
            "Determining eye color genes",
            "Predicting adult height",
            "Testing intelligence genes"
          ],
          correctAnswer: 0,
          explanation: "Newborn screening tests babies for genetic conditions that benefit from early treatment."
        },
        {
          id: 10,
          question: "What was Dolly the sheep?",
          options: [
            "First mammal cloned from adult cell",
            "First genetically modified animal",
            "First animal with edited genes",
            "First animal sequenced completely"
          ],
          correctAnswer: 0,
          explanation: "Dolly was the first mammal cloned from an adult somatic cell in 1996."
        },
        {
          id: 11,
          question: "What are GMOs?",
          options: [
            "Genetically modified organisms",
            "Only genetically sequenced organisms",
            "Organisms with natural mutations",
            "Extinct organisms revived"
          ],
          correctAnswer: 0,
          explanation: "GMOs are genetically modified organisms with altered DNA using biotechnology."
        },
        {
          id: 12,
          question: "What is synthetic biology?",
          options: [
            "Designing and constructing new biological systems",
            "Only analyzing existing biology",
            "Studying natural ecosystems",
            "Preserving endangered species"
          ],
          correctAnswer: 0,
          explanation: "Synthetic biology designs and constructs new biological parts, devices, and systems."
        },
        {
          id: 13,
          question: "What does GINA protect against?",
          options: [
            "Genetic discrimination in health insurance and employment",
            "All discrimination of any type",
            "Only privacy violations",
            "Environmental genetic contamination"
          ],
          correctAnswer: 0,
          explanation: "GINA protects against genetic discrimination in health insurance and employment in the US."
        },
        {
          id: 14,
          question: "What does informed consent for genetic testing require?",
          options: [
            "Understanding potential results and implications",
            "Only signing a form",
            "Having a family history of disease",
            "Being over 18 years old"
          ],
          correctAnswer: 0,
          explanation: "Informed consent requires understanding potential results, limitations, and family implications."
        },
        {
          id: 15,
          question: "What is eugenics?",
          options: [
            "Attempts to improve human genetics through selection",
            "Study of European genetics",
            "Natural evolutionary processes",
            "Genetic counseling practices"
          ],
          correctAnswer: 0,
          explanation: "Eugenics refers to attempts to improve human genetics through selective breeding."
        },
        {
          id: 16,
          question: "Can naturally occurring human genes be patented?",
          options: [
            "No, according to 2013 Supreme Court ruling",
            "Yes, always",
            "Only if discovered by companies",
            "Only genes from other species"
          ],
          correctAnswer: 0,
          explanation: "The Supreme Court ruled in 2013 that naturally occurring human genes cannot be patented."
        },
        {
          id: 17,
          question: "What do restriction enzymes do?",
          options: [
            "Cut DNA at specific sequences",
            "Join DNA fragments together",
            "Copy DNA segments",
            "Repair DNA damage"
          ],
          correctAnswer: 0,
          explanation: "Restriction enzymes cut DNA at specific recognition sequences."
        },
        {
          id: 18,
          question: "What does DNA ligase do?",
          options: [
            "Joins DNA fragments together",
            "Cuts DNA at specific sites",
            "Copies DNA sequences",
            "Unwinds DNA helix"
          ],
          correctAnswer: 0,
          explanation: "DNA ligase joins DNA fragments together by forming phosphodiester bonds."
        },
        {
          id: 19,
          question: "What are plasmids?",
          options: [
            "Small circular DNA used in genetic engineering",
            "Large human chromosomes",
            "Protein molecules in cells",
            "RNA molecules for translation"
          ],
          correctAnswer: 0,
          explanation: "Plasmids are small circular DNA molecules used to transfer genes in genetic engineering."
        },
        {
          id: 20,
          question: "What might personalized medicine use?",
          options: [
            "Genetic information to choose right drug/dose",
            "Only traditional treatment approaches",
            "One-size-fits-all medications",
            "Only surgical interventions"
          ],
          correctAnswer: 0,
          explanation: "Personalized medicine uses genetic information to choose the right drug and dose for each person."
        }
      ]
    },
    {
      id: 6,
      title: "Genetics in Society and Everyday Life",
      content: `
## Genetics in Medicine and Health

**Genetic counseling** helps individuals and families understand genetic disorders, assess risks, and make informed decisions. Counselors explain inheritance patterns, discuss testing options, interpret results, and provide support. They work with people considering genetic testing or dealing with genetic diagnoses.

**Precision medicine** uses genetic information to guide prevention, diagnosis, and treatment. For example, BRCA gene testing can guide breast cancer screening and prevention strategies for high-risk individuals. Targeted cancer therapies work against tumors with specific genetic mutations.

**Newborn screening** tests babies for genetic conditions that benefit from early treatment. All US states screen for phenylketonuria (PKU), which causes intellectual disability if untreated but can be managed with diet. Early detection through genetic screening prevents severe outcomes.

**Carrier screening** identifies individuals who carry recessive alleles for conditions like cystic fibrosis, Tay-Sachs disease, or sickle cell anemia. This information helps couples understand risks for their children. Some communities have higher carrier frequencies for specific conditions.

### Genetics in Forensics and Identification

**DNA fingerprinting** identifies individuals based on unique DNA patterns. It analyzes repetitive DNA sequences that vary between people (except identical twins). DNA fingerprinting is used in criminal investigations, paternity testing, and identifying human remains.

**Forensic DNA analysis** can match crime scene evidence to suspects or victims. Even tiny samples (hair, skin cells, saliva) contain enough DNA for analysis using PCR. DNA databases like CODIS help solve crimes by comparing DNA profiles.

**Genealogy and ancestry testing** uses DNA to trace family origins and ethnic background. Companies analyze single nucleotide polymorphisms (SNPs) that vary among populations. Results show percentages of ancestry from different geographic regions and can connect genetic relatives.

**Missing persons identification** uses DNA to identify remains in disasters, wars, or historical cases. Comparing DNA from remains to relatives' DNA can establish identity. Mass disasters like plane crashes or natural disasters use DNA for victim identification.

### Genetics in Agriculture and Environment

**Plant and animal breeding** has used genetic principles for thousands of years. Traditional selective breeding chooses parents with desirable traits. Modern breeding uses genetic markers to select for traits more efficiently (marker-assisted selection).

**Genetically modified crops** may have traits like: insect resistance (Bt corn produces bacterial toxin harmful to pests), herbicide tolerance (Roundup Ready crops survive weed killers), drought tolerance, or improved nutrition (Golden Rice with vitamin A).

**Conservation genetics** helps preserve endangered species. Genetic analysis identifies distinct populations, measures genetic diversity, and detects inbreeding. Breeding programs aim to maintain genetic diversity. DNA barcoding identifies species from small samples.

**Environmental DNA (eDNA)** detects species presence from DNA shed into environment (water, soil, air). Scientists can monitor biodiversity, detect invasive species, or find rare organisms without seeing them. eDNA is revolutionizing ecology and conservation monitoring.

### Social and Ethical Considerations

**Direct-to-consumer genetic testing** raises questions about accuracy, interpretation, and psychological impact. Results may reveal unexpected information about health risks, ancestry, or family relationships. Genetic counseling helps interpret consumer genetic test results.

**Genetic discrimination** protections vary by country. Beyond health insurance and employment, concerns include life insurance, disability insurance, and social stigma. Some fear "genetic underclass" if those with genetic risks face disadvantages.

**Reproductive technologies** like preimplantation genetic diagnosis (PGD) test embryos for genetic conditions before implantation during IVF. This allows selection of embryos without specific disorders but raises ethical questions about embryo selection criteria.

**Gene drives** are genetic systems that spread traits through populations rapidly. Proposed uses include controlling disease vectors (mosquitoes that spread malaria) or invasive species. Concerns include unintended ecological consequences and ethical issues about modifying wild populations.

### Genetics Education and Literacy

**Genetic literacy** helps people understand basic genetic concepts to make informed decisions about health, reproduction, and consumer choices. Misunderstandings about genetics can lead to false hopes, unnecessary fears, or discrimination.

**Public engagement** in genetics policy ensures diverse perspectives inform regulations. Topics include: GMO labeling, gene editing guidelines, genetic privacy laws, and research ethics. Citizen science projects involve public in genetic research.

**Science communication** about genetics should be accurate, balanced, and accessible. Media often oversimplifies or sensationalizes genetics. Responsible reporting distinguishes between established facts, promising research, and speculative possibilities.

**Future directions** in genetics include: gene editing therapies, synthetic organisms, brain genetics, microbiome genetics (how gut bacteria interact with our genes), and epigenetics (how environment affects gene expression). Society must consider benefits and risks of advancing genetic technologies.
`,
      completed: false,
      quiz: [
        {
          id: 1,
          question: "What does genetic counseling help with?",
          options: [
            "Understanding genetic disorders and making decisions",
            "Only ordering genetic tests",
            "Treating genetic diseases directly",
            "Changing people's genes"
          ],
          correctAnswer: 0,
          explanation: "Genetic counseling helps understand disorders, assess risks, and make informed decisions."
        },
        {
          id: 2,
          question: "What is precision medicine?",
          options: [
            "Using genetic info to guide prevention and treatment",
            "Only using the most expensive treatments",
            "Treating all patients identically",
            "Medicine that is precisely measured"
          ],
          correctAnswer: 0,
          explanation: "Precision medicine uses genetic information to guide prevention, diagnosis, and treatment."
        },
        {
          id: 3,
          question: "What does newborn screening test for?",
          options: [
            "Genetic conditions that benefit from early treatment",
            "All possible genetic disorders",
            "Only physical abnormalities",
            "Future career aptitudes"
          ],
          correctAnswer: 0,
          explanation: "Newborn screening tests for genetic conditions where early treatment prevents severe outcomes."
        },
        {
          id: 4,
          question: "What is carrier screening for?",
          options: [
            "Identifying individuals with recessive alleles",
            "Diagnosing active diseases",
            "Predicting intelligence",
            "Determining physical abilities"
          ],
          correctAnswer: 0,
          explanation: "Carrier screening identifies individuals who carry recessive alleles for genetic conditions."
        },
        {
          id: 5,
          question: "What is DNA fingerprinting used for?",
          options: [
            "Identifying individuals based on unique DNA",
            "Sequencing entire genomes",
            "Editing genes in cells",
            "Cloning organisms"
          ],
          correctAnswer: 0,
          explanation: "DNA fingerprinting identifies individuals based on their unique DNA patterns."
        },
        {
          id: 6,
          question: "What does forensic DNA analysis do?",
          options: [
            "Matches crime scene evidence to suspects/victims",
            "Only studies ancient DNA",
            "Creates new DNA sequences",
            "Treats genetic disorders"
          ],
          correctAnswer: 0,
          explanation: "Forensic DNA analysis matches crime scene DNA evidence to suspects or victims."
        },
        {
          id: 7,
          question: "What does ancestry testing show?",
          options: [
            "Ethnic background and geographic origins",
            "Exact future health outcomes",
            "Personality traits definitively",
            "Career success probabilities"
          ],
          correctAnswer: 0,
          explanation: "Ancestry testing shows percentages of ancestry from different geographic regions."
        },
        {
          id: 8,
          question: "What is traditional selective breeding?",
          options: [
            "Choosing parents with desirable traits",
            "Genetically modifying organisms",
            "Cloning the best organisms",
            "Editing genes directly"
          ],
          correctAnswer: 0,
          explanation: "Selective breeding chooses parents with desirable traits for reproduction."
        },
        {
          id: 9,
          question: "What does Bt corn have?",
          options: [
            "Insect resistance from bacterial gene",
            "Herbicide tolerance",
            "Drought tolerance",
            "Vitamin enhancement"
          ],
          correctAnswer: 0,
          explanation: "Bt corn has insect resistance from a bacterial gene producing toxin harmful to pests."
        },
        {
          id: 10,
          question: "What does conservation genetics help with?",
          options: [
            "Preserving endangered species and genetic diversity",
            "Creating new species",
            "Increasing crop yields only",
            "Studying human genetics exclusively"
          ],
          correctAnswer: 0,
          explanation: "Conservation genetics helps preserve endangered species and maintain genetic diversity."
        },
        {
          id: 11,
          question: "What is eDNA?",
          options: [
            "DNA shed into environment from organisms",
            "Electronic DNA records",
            "Edited DNA sequences",
            "Embryonic DNA only"
          ],
          correctAnswer: 0,
          explanation: "Environmental DNA (eDNA) is DNA shed by organisms into their environment."
        },
        {
          id: 12,
          question: "What concerns exist about direct-to-consumer genetic testing?",
          options: [
            "Accuracy, interpretation, psychological impact",
            "Only high cost",
            "Too much genetic information",
            "Not enough data provided"
          ],
          correctAnswer: 0,
          explanation: "Concerns include accuracy, interpretation difficulties, and psychological impact of results."
        },
        {
          id: 13,
          question: "What does PGD do?",
          options: [
            "Tests embryos for genetic conditions before implantation",
            "Diagnoses diseases in adults only",
            "Edits genes in embryos",
            "Clones embryos for research"
          ],
          correctAnswer: 0,
          explanation: "Preimplantation genetic diagnosis (PGD) tests embryos for genetic conditions before IVF implantation."
        },
        {
          id: 14,
          question: "What are gene drives?",
          options: [
            "Genetic systems that spread traits rapidly through populations",
            "Cars powered by genetic engineering",
            "Motivation from genetic traits",
            "Drug delivery systems"
          ],
          correctAnswer: 0,
          explanation: "Gene drives are genetic systems designed to spread specific traits rapidly through populations."
        },
        {
          id: 15,
          question: "What is genetic literacy?",
          options: [
            "Understanding basic genetic concepts for decisions",
            "Ability to read DNA sequences",
            "Knowledge of all human genes",
            "Literacy about famous geneticists"
          ],
          correctAnswer: 0,
          explanation: "Genetic literacy is understanding basic genetic concepts to make informed decisions."
        },
        {
          id: 16,
          question: "Why is public engagement important in genetics policy?",
          options: [
            "Ensures diverse perspectives inform regulations",
            "Only scientists should make decisions",
            "Public doesn't understand genetics",
            "Policies don't affect public"
          ],
          correctAnswer: 0,
          explanation: "Public engagement ensures diverse perspectives inform genetic technology regulations."
        },
        {
          id: 17,
          question: "What does PKU newborn screening prevent?",
          options: [
            "Intellectual disability through dietary management",
            "All genetic disorders completely",
            "Physical disabilities only",
            "Emotional problems"
          ],
          correctAnswer: 0,
          explanation: "PKU screening and dietary management prevent intellectual disability from this metabolic disorder."
        },
        {
          id: 18,
          question: "What does CODIS do?",
          options: [
            "DNA database for criminal investigations",
            "Stores genetic research data",
            "Tracks genetic diseases worldwide",
            "Catalogs all known genes"
          ],
          correctAnswer: 0,
          explanation: "CODIS is the Combined DNA Index System used in criminal investigations."
        },
        {
          id: 19,
          question: "What is marker-assisted selection?",
          options: [
            "Using genetic markers to select for traits in breeding",
            "Random breeding of organisms",
            "Gene editing in plants",
            "Cloning selected organisms"
          ],
          correctAnswer: 0,
          explanation: "Marker-assisted selection uses genetic markers to select for desirable traits in breeding."
        },
        {
          id: 20,
          question: "What does microbiome genetics study?",
          options: [
            "How gut bacteria interact with our genes",
            "Only human genes",
            "Plant genetics exclusively",
            "Ancient human genetics"
          ],
          correctAnswer: 0,
          explanation: "Microbiome genetics studies how our gut bacteria interact with our human genes."
        }
      ]
    }
  ],
  
  finalExam: [
    {
      id: 1,
      question: "What does DNA stand for?",
      options: [
        "Deoxyribonucleic acid",
        "Dynamic nucleic acid",
        "Deoxyribose nucleotide acid",
        "Developmental nucleic acid"
      ],
      correctAnswer: 0,
      explanation: "DNA stands for deoxyribonucleic acid, the molecule carrying genetic instructions."
    },
    {
      id: 2,
      question: "What shape does DNA form?",
      options: [
        "Double helix (twisted ladder)",
        "Single straight strand",
        "Circular loop",
        "Triple helix"
      ],
      correctAnswer: 0,
      explanation: "DNA forms a double helix structure that looks like a twisted ladder."
    },
    {
      id: 3,
      question: "Which DNA bases always pair together?",
      options: [
        "Adenine with Thymine, Guanine with Cytosine",
        "Adenine with Guanine, Thymine with Cytosine",
        "Adenine with Cytosine, Guanine with Thymine",
        "Any bases can pair randomly"
      ],
      correctAnswer: 0,
      explanation: "A always pairs with T, and G always pairs with C in DNA."
    },
    {
      id: 4,
      question: "How many chromosomes do humans have?",
      options: [
        "46 chromosomes (23 pairs)",
        "23 chromosomes (single set)",
        "92 chromosomes (46 pairs)",
        "The number varies between people"
      ],
      correctAnswer: 0,
      explanation: "Humans have 46 chromosomes arranged in 23 pairs."
    },
    {
      id: 5,
      question: "Who is called the 'father of genetics'?",
      options: [
        "Gregor Mendel",
        "James Watson",
        "Francis Crick",
        "Charles Darwin"
      ],
      correctAnswer: 0,
      explanation: "Gregor Mendel is called the father of genetics for his pea plant experiments."
    },
    {
      id: 6,
      question: "What is a dominant allele?",
      options: [
        "Expressed even if only one copy is present",
        "Only expressed if two copies are present",
        "Never expressed in any situation",
        "Only expressed in females"
      ],
      correctAnswer: 0,
      explanation: "A dominant allele is expressed even if only one copy is present."
    },
    {
      id: 7,
      question: "What does the central dogma describe?",
      options: [
        "Flow of genetic information: DNA → RNA → protein",
        "Only DNA replication process",
        "How traits are inherited from parents",
        "The structure of chromosomes"
      ],
      correctAnswer: 0,
      explanation: "The central dogma describes flow: DNA → RNA → protein."
    },
    {
      id: 8,
      question: "What happens during translation?",
      options: [
        "mRNA is used to build a protein",
        "DNA is copied to make new DNA",
        "Proteins are broken down into amino acids",
        "RNA is converted back to DNA"
      ],
      correctAnswer: 0,
      explanation: "Translation uses mRNA to build proteins at ribosomes."
    },
    {
      id: 9,
      question: "What is genetic variation?",
      options: [
        "Differences in DNA sequences among individuals",
        "Identical DNA in all individuals",
        "Only visible differences between people",
        "Environmental differences only"
      ],
      correctAnswer: 0,
      explanation: "Genetic variation refers to differences in DNA sequences."
    },
    {
      id: 10,
      question: "What causes sickle cell anemia?",
      options: [
        "Missense mutation in hemoglobin gene",
        "Chromosome deletion",
        "Extra chromosome 21",
        "Mitochondrial mutation"
      ],
      correctAnswer: 0,
      explanation: "Sickle cell anemia results from missense mutation in hemoglobin gene."
    },
    {
      id: 11,
      question: "When was the Human Genome Project completed?",
      options: [
        "2003 (after 13 years of work)",
        "1953 (when DNA structure discovered)",
        "1985 (when PCR invented)",
        "2012 (when CRISPR discovered)"
      ],
      correctAnswer: 0,
      explanation: "The Human Genome Project was completed in 2003."
    },
    {
      id: 12,
      question: "What does CRISPR-Cas9 do?",
      options: [
        "Gene editing (cutting and modifying DNA)",
        "Only DNA sequencing",
        "Protein synthesis",
        "Cell division observation"
      ],
      correctAnswer: 0,
      explanation: "CRISPR-Cas9 is a gene editing system that cuts DNA."
    },
    {
      id: 13,
      question: "What does genetic counseling help with?",
      options: [
        "Understanding genetic disorders and making decisions",
        "Only ordering genetic tests",
        "Treating genetic diseases directly",
        "Changing people's genes"
      ],
      correctAnswer: 0,
      explanation: "Genetic counseling helps understand disorders and make decisions."
    },
    {
      id: 14,
      question: "What is DNA fingerprinting used for?",
      options: [
        "Identifying individuals based on unique DNA",
        "Sequencing entire genomes",
        "Editing genes in cells",
        "Cloning organisms"
      ],
      correctAnswer: 0,
      explanation: "DNA fingerprinting identifies individuals based on unique DNA."
    },
    {
      id: 15,
      question: "What are genes?",
      options: [
        "Sections of DNA with instructions for proteins",
        "Entire chromosomes",
        "Only the visible traits we see",
        "Proteins that build cells"
      ],
      correctAnswer: 0,
      explanation: "Genes are DNA sections with instructions for making proteins."
    },
    {
      id: 16,
      question: "What is the difference between genotype and phenotype?",
      options: [
        "Genotype is genetic makeup, phenotype is observable traits",
        "Genotype is observable traits, phenotype is genetic makeup",
        "They mean exactly the same thing",
        "Genotype is for plants, phenotype is for animals"
      ],
      correctAnswer: 0,
      explanation: "Genotype is genetic makeup, phenotype is observable traits."
    },
    {
      id: 17,
      question: "What does mRNA do?",
      options: [
        "Carries genetic code from DNA to ribosomes",
        "Brings amino acids to ribosomes",
        "Forms part of ribosome structure",
        "Regulates gene expression"
      ],
      correctAnswer: 0,
      explanation: "mRNA carries genetic code from DNA to ribosomes."
    },
    {
      id: 18,
      question: "What is natural selection?",
      options: [
        "Individuals with beneficial traits reproduce more",
        "Random changes in allele frequencies",
        "Migration between populations",
        "Sudden population decrease"
      ],
      correctAnswer: 0,
      explanation: "Natural selection: beneficial traits lead to more reproduction."
    },
    {
      id: 19,
      question: "What does PCR do?",
      options: [
        "Amplifies specific DNA segments",
        "Cuts DNA at specific sites",
        "Sequences entire genomes",
        "Edits genes in cells"
      ],
      correctAnswer: 0,
      explanation: "PCR amplifies specific DNA segments, making millions of copies."
    },
    {
      id: 20,
      question: "What is precision medicine?",
      options: [
        "Using genetic info to guide prevention and treatment",
        "Only using the most expensive treatments",
        "Treating all patients identically",
        "Medicine that is precisely measured"
      ],
      correctAnswer: 0,
      explanation: "Precision medicine uses genetic info to guide treatment."
    },
    {
      id: 21,
      question: "What are the four DNA bases?",
      options: [
        "Adenine, Thymine, Guanine, Cytosine",
        "Adenine, Thymine, Guanine, Uracil",
        "Amino acids only",
        "Sugar, phosphate, base, protein"
      ],
      correctAnswer: 0,
      explanation: "The four DNA bases are Adenine, Thymine, Guanine, Cytosine."
    },
    {
      id: 22,
      question: "What does Mendel's Law of Segregation state?",
      options: [
        "Each individual has two factors that separate during reproduction",
        "All traits are inherited together",
        "Only dominant traits are inherited",
        "Factors don't separate during reproduction"
      ],
      correctAnswer: 0,
      explanation: "Law of Segregation: two factors separate during reproduction."
    },
    {
      id: 23,
      question: "What are codons?",
      options: [
        "Groups of three mRNA bases that specify amino acids",
        "Single DNA bases",
        "Complete genes",
        "Protein folding patterns"
      ],
      correctAnswer: 0,
      explanation: "Codons are groups of three mRNA bases specifying amino acids."
    },
    {
      id: 24,
      question: "What is aneuploidy?",
      options: [
        "Abnormal number of chromosomes",
        "Normal chromosome number",
        "Only chromosome structure changes",
        "Mitochondrial DNA changes"
      ],
      correctAnswer: 0,
      explanation: "Aneuploidy means abnormal number of chromosomes."
    },
    {
      id: 25,
      question: "What percentage of human DNA codes for proteins?",
      options: [
        "About 1-2%",
        "About 50%",
        "About 90%",
        "100% (all DNA codes for proteins)"
      ],
      correctAnswer: 0,
      explanation: "Only about 1-2% of human DNA codes for proteins."
    },
    {
      id: 26,
      question: "What is newborn screening for?",
      options: [
        "Genetic conditions that benefit from early treatment",
        "All possible genetic disorders",
        "Only physical abnormalities",
        "Future career aptitudes"
      ],
      correctAnswer: 0,
      explanation: "Newborn screening tests for conditions benefiting from early treatment."
    },
    {
      id: 27,
      question: "Where is DNA located in human cells?",
      options: [
        "In the nucleus (except in red blood cells)",
        "Floating freely in the cell",
        "Only in brain cells",
        "In the cell membrane"
      ],
      correctAnswer: 0,
      explanation: "DNA is in the nucleus of human cells (except red blood cells)."
    },
    {
      id: 28,
      question: "What is a recessive allele?",
      options: [
        "Only expressed if two copies are present",
        "Always expressed when present",
        "Never expressed in any situation",
        "Only expressed in males"
      ],
      correctAnswer: 0,
      explanation: "Recessive allele only expressed if two copies present."
    },
    {
      id: 29,
      question: "What determines a protein's function?",
      options: [
        "Its three-dimensional shape",
        "Only its amino acid sequence",
        "The DNA sequence alone",
        "The RNA that made it"
      ],
      correctAnswer: 0,
      explanation: "A protein's three-dimensional shape determines its function."
    },
    {
      id: 30,
      question: "What is genetic drift?",
      options: [
        "Random changes in allele frequencies",
        "Selection based on fitness",
        "Intentional breeding by humans",
        "Migration between populations"
      ],
      correctAnswer: 0,
      explanation: "Genetic drift is random changes in allele frequencies."
    },
    {
      id: 31,
      question: "What does recombinant DNA technology do?",
      options: [
        "Combines DNA from different sources",
        "Only sequences DNA",
        "Amplifies DNA segments",
        "Edits genes precisely"
      ],
      correctAnswer: 0,
      explanation: "Recombinant DNA combines DNA from different sources."
    },
    {
      id: 32,
      question: "What is carrier screening for?",
      options: [
        "Identifying individuals with recessive alleles",
        "Diagnosing active diseases",
        "Predicting intelligence",
        "Determining physical abilities"
      ],
      correctAnswer: 0,
      explanation: "Carrier screening identifies individuals with recessive alleles."
    },
    {
      id: 33,
      question: "What does DNA replication do?",
      options: [
        "DNA makes a copy of itself before cell division",
        "DNA is destroyed and rebuilt",
        "DNA changes its structure completely",
        "DNA is translated into proteins"
      ],
      correctAnswer: 0,
      explanation: "DNA replication makes a copy before cell division."
    },
    {
      id: 34,
      question: "What are Punnett squares used for?",
      options: [
        "Predicting probability of offspring traits",
        "Measuring actual DNA sequences",
        "Viewing chromosomes under microscope",
        "Counting cells in the body"
      ],
      correctAnswer: 0,
      explanation: "Punnett squares predict probability of offspring traits."
    },
    {
      id: 35,
      question: "What is transcription?",
      options: [
        "DNA used to create messenger RNA",
        "RNA used to create DNA",
        "Protein used to create RNA",
        "RNA used to create protein"
      ],
      correctAnswer: 0,
      explanation: "Transcription uses DNA to create mRNA."
    },
    {
      id: 36,
      question: "What is the founder effect?",
      options: [
        "Small group starts new population with limited variation",
        "Large population maintains all variation",
        "Mutation creating new species",
        "Environmental adaptation"
      ],
      correctAnswer: 0,
      explanation: "Founder effect: small group starts population with limited variation."
    },
    {
      id: 37,
      question: "What is pharmacogenomics?",
      options: [
        "How genes affect responses to medications",
        "Developing new pharmaceutical drugs",
        "Genetic testing for diseases only",
        "Cloning genes for drug production"
      ],
      correctAnswer: 0,
      explanation: "Pharmacogenomics: how genes affect medication responses."
    },
    {
      id: 38,
      question: "What is traditional selective breeding?",
      options: [
        "Choosing parents with desirable traits",
        "Genetically modifying organisms",
        "Cloning the best organisms",
        "Editing genes directly"
      ],
      correctAnswer: 0,
      explanation: "Selective breeding chooses parents with desirable traits."
    },
    {
      id: 39,
      question: "What are mutations?",
      options: [
        "Changes in the DNA sequence",
        "Always harmful DNA alterations",
        "Only changes in visible traits",
        "DNA copying without changes"
      ],
      correctAnswer: 0,
      explanation: "Mutations are changes in DNA sequence."
    },
    {
      id: 40,
      question: "What does gene therapy aim to do?",
      options: [
        "Treat disorders by introducing functional genes",
        "Only diagnose genetic conditions",
        "Prevent all genetic mutations",
        "Clone entire organisms"
      ],
      correctAnswer: 0,
      explanation: "Gene therapy treats disorders by introducing functional genes."
    }
  ]
};

// Carpentry (Certificate) - Complete Course Data
// This is a single, continuous TypeScript object ready for implementation

export const carpentryCertificateCourse = {
  // 1. COURSE METADATA & IDENTIFICATION
  id: "carpentry-certificate",
  title: "Carpentry (Certificate)",
  description: "Master essential woodworking skills from basic tool handling to furniture construction. Learn measurement techniques, joinery methods, and safety protocols to build functional wooden projects.",
  duration: "6 weeks",
  timeCommitment: "4-6 hours per week",
  price: 12,
  upgradePrice: 18,
  icon: "🔨",
  badge: "Certificate",
  prerequisites: "No prior experience required",
  learningOutcomes: [
    "Identify and use basic carpentry tools safely",
    "Read and interpret woodworking plans",
    "Measure, mark, and cut wood accurately",
    "Create basic wood joints",
    "Assemble and finish simple furniture",
    "Apply proper safety procedures"
  ],

  // 2. MODULE ARCHITECTURE (6 Modules + Final Exam)
  modules: [
    {
      id: 1,
      title: "Introduction to Carpentry & Safety",
      content: `
# Module 1: Introduction to Carpentry & Safety

Welcome to your carpentry journey! This module covers the fundamentals of woodworking safety and introduces essential tools.

## **1.1 The Carpentry Workshop**
A carpentry workshop contains several key areas:
- **Workbench Zone**: Primary surface for woodworking (3-4 feet high)
- **Tool Storage**: Organized racks for hand and power tools
- **Material Storage**: Vertical racks for lumber storage
- **Finishing Area**: Separate space for sanding and staining
- **Dust Collection**: Required for respiratory safety (removes 95% of airborne particles)

## **1.2 Essential Safety Equipment**
Every carpenter must use **PPE (Personal Protective Equipment)**:
- **Safety Glasses**: Protect eyes from flying debris (reduce eye injuries by 90%)
- **Hearing Protection**: Required for power tools over 85 decibels
- **Dust Masks**: N95 or better for wood dust (some woods cause respiratory issues)
- **Work Gloves**: Leather palms for material handling
- **Steel-toed Boots**: Prevent foot injuries from dropped tools

## **1.3 Workshop Safety Rules**
Follow these **non-negotiable** safety guidelines:
1. **Disconnect Power**: Always unplug tools before changing blades or bits
2. **Keep Work Area Clean**: Remove scrap wood and tools after each task
3. **No Loose Clothing**: Ties, long sleeves, and jewelry can catch in machinery
4. **Proper Lighting**: Minimum 100 lumens per square foot for detailed work
5. **Emergency Preparedness**: Know location of fire extinguisher and first aid kit

## **1.4 Basic Hand Tools Introduction**
Start with these **five essential hand tools**:
- **Claw Hammer**: 16-ounce weight for general use (framing requires 20+ ounces)
- **Tape Measure**: 25-foot length minimum (accurate to 1/16 inch)
- **Carpenter's Pencil**: Flat design prevents rolling
- **Utility Knife**: Retractable blade for scoring and marking
- **Chisel Set**: 1/4, 1/2, and 1-inch widths for basic joinery

## **1.5 Woodworking Materials Basics**
Understand common **wood types and characteristics**:
- **Softwoods**: Pine, cedar, fir (easy to work with, less expensive)
- **Hardwoods**: Oak, maple, walnut (denser, more durable)
- **Plywood**: Layers of wood veneer (strong, dimensionally stable)
- **MDF**: Medium-density fiberboard (smooth surface, no grain)
- **Pressure-treated**: Chemical protection for outdoor use

Remember: **Safety first, quality second, speed last.** Always measure twice, cut once!
`,
      completed: false,
      quiz: [
        {
          id: 1,
          question: "What is the recommended height range for a carpentry workbench?",
          options: ["2-3 feet", "3-4 feet", "4-5 feet", "5-6 feet"],
          correctAnswer: 1,
          explanation: "A workbench should be 3-4 feet high to allow comfortable work while standing."
        },
        {
          id: 2,
          question: "Which type of wood is considered a softwood?",
          options: ["Oak", "Maple", "Pine", "Walnut"],
          correctAnswer: 2,
          explanation: "Pine is a softwood, while oak, maple, and walnut are hardwoods."
        },
        {
          id: 3,
          question: "What percentage of airborne particles should a dust collection system remove?",
          options: ["75%", "85%", "90%", "95%"],
          correctAnswer: 3,
          explanation: "A proper dust collection system should remove at least 95% of airborne particles for respiratory safety."
        },
        {
          id: 4,
          question: "What is the minimum tape measure length recommended for carpentry work?",
          options: ["10 feet", "16 feet", "25 feet", "30 feet"],
          correctAnswer: 2,
          explanation: "A 25-foot tape measure is the minimum recommended length for general carpentry work."
        },
        {
          id: 5,
          question: "Which safety equipment reduces eye injuries by approximately 90%?",
          options: ["Dust masks", "Hearing protection", "Safety glasses", "Work gloves"],
          correctAnswer: 2,
          explanation: "Safety glasses reduce the risk of eye injuries by about 90% when working with wood."
        },
        {
          id: 6,
          question: "What should you always do before changing a saw blade?",
          options: ["Wear gloves", "Clean the saw", "Disconnect power", "Measure twice"],
          correctAnswer: 2,
          explanation: "Always disconnect power tools from their power source before changing blades or bits."
        },
        {
          id: 7,
          question: "Which wood product is made from layers of wood veneer?",
          options: ["MDF", "Plywood", "Pressure-treated", "Solid wood"],
          correctAnswer: 1,
          explanation: "Plywood is made from layers of wood veneer glued together at alternating angles."
        },
        {
          id: 8,
          question: "What does PPE stand for in workshop safety?",
          options: ["Professional Protection Equipment", "Personal Protective Equipment", "Proper Power Equipment", "Practical Project Essentials"],
          correctAnswer: 1,
          explanation: "PPE stands for Personal Protective Equipment, which includes safety glasses, hearing protection, and dust masks."
        },
        {
          id: 9,
          question: "Which hammer weight is recommended for general carpentry work?",
          options: ["8 ounces", "12 ounces", "16 ounces", "24 ounces"],
          correctAnswer: 2,
          explanation: "A 16-ounce claw hammer is ideal for general carpentry work, providing good balance and power."
        },
        {
          id: 10,
          question: "What is the primary purpose of a carpenter's pencil's flat design?",
          options: ["Easier sharpening", "Prevents rolling", "Better grip", "More visible"],
          correctAnswer: 1,
          explanation: "The flat design of a carpenter's pencil prevents it from rolling off surfaces."
        },
        {
          id: 11,
          question: "At what decibel level is hearing protection required?",
          options: ["70 decibels", "75 decibels", "80 decibels", "85 decibels"],
          correctAnswer: 3,
          explanation: "Hearing protection is required when using power tools that exceed 85 decibels."
        },
        {
          id: 12,
          question: "What type of wood is best for outdoor projects due to chemical treatment?",
          options: ["Pine", "Pressure-treated", "Oak", "MDF"],
          correctAnswer: 1,
          explanation: "Pressure-treated wood contains chemicals that protect against moisture and insects, making it suitable for outdoor use."
        },
        {
          id: 13,
          question: "Which area of the workshop should be separate from the main work area?",
          options: ["Tool storage", "Workbench zone", "Finishing area", "Material storage"],
          correctAnswer: 2,
          explanation: "The finishing area should be separate to prevent contamination of unfinished projects with dust and debris."
        },
        {
          id: 14,
          question: "What is the minimum lighting requirement in lumens per square foot?",
          options: ["50 lumens", "75 lumens", "100 lumens", "125 lumens"],
          correctAnswer: 2,
          explanation: "Proper workshop lighting requires at least 100 lumens per square foot for detailed work."
        },
        {
          id: 15,
          question: "Which chisel width is NOT mentioned in the basic set?",
          options: ["1/4 inch", "1/2 inch", "3/4 inch", "1 inch"],
          correctAnswer: 2,
          explanation: "The basic chisel set includes 1/4, 1/2, and 1-inch widths, but not 3/4 inch."
        },
        {
          id: 16,
          question: "What does MDF stand for?",
          options: ["Medium-density fiberboard", "Multi-directional fiber", "Machine-drilled framework", "Modular design finish"],
          correctAnswer: 0,
          explanation: "MDF stands for Medium-density fiberboard, a manufactured wood product."
        },
        {
          id: 17,
          question: "What should be done with scrap wood after completing a task?",
          options: ["Leave for later", "Burn immediately", "Remove from work area", "Stack neatly"],
          correctAnswer: 2,
          explanation: "Always remove scrap wood and tools from the work area after each task to maintain safety."
        },
        {
          id: 18,
          question: "Which tool has a retractable blade for scoring and marking?",
          options: ["Hammer", "Tape measure", "Utility knife", "Chisel"],
          correctAnswer: 2,
          explanation: "A utility knife has a retractable blade ideal for scoring wood and making precise marks."
        },
        {
          id: 19,
          question: "What is the carpenter's golden rule mentioned in the module?",
          options: ["Measure once, cut twice", "Measure twice, cut once", "Cut first, measure later", "Estimate and adjust"],
          correctAnswer: 1,
          explanation: "The golden rule is 'Measure twice, cut once' to prevent material waste."
        },
        {
          id: 20,
          question: "Which wood type has no visible grain pattern?",
          options: ["Pine", "Oak", "MDF", "Plywood"],
          correctAnswer: 2,
          explanation: "MDF (Medium-density fiberboard) has a smooth, uniform surface with no visible wood grain."
        }
      ]
    },
    {
      id: 2,
      title: "Measuring, Marking & Layout Techniques",
      content: `
# Module 2: Measuring, Marking & Layout Techniques

Accurate measurement is the foundation of quality carpentry. This module teaches precision techniques for measuring, marking, and laying out projects.

## **2.1 Measuring Systems & Accuracy**
Carpentry uses **two primary measuring systems**:
- **Imperial System**: Inches and feet (standard in North America)
- **Metric System**: Millimeters and centimeters (common internationally)

**Measurement accuracy levels**:
- **Rough framing**: ±1/8 inch acceptable
- **Finish carpentry**: ±1/16 inch required
- **Cabinet making**: ±1/32 inch expected
- **Fine furniture**: ±1/64 inch precision

## **2.2 Reading a Tape Measure**
A standard **25-foot tape measure** has these markings:
- **Whole inches**: Largest numbers (1, 2, 3...)
- **Half inches**: 1/2 marks (second longest lines)
- **Quarter inches**: 1/4 marks (medium lines)
- **Eighth inches**: 1/8 marks (smaller lines)
- **Sixteenth inches**: 1/16 marks (smallest lines)

**Pro tip**: The tape hook slides 1/16 inch to account for its thickness when measuring inside or outside dimensions.

## **2.3 Essential Marking Tools**
Use these **five marking tools** for accurate layout:
1. **Carpenter's Pencil**: Flat design with thick lead for visible lines
2. **Marking Knife**: Creates precise knife lines for exact cuts
3. **Combination Square**: 45° and 90° angles with ruler
4. **Chalk Line**: For long straight lines up to 100 feet
5. **Marking Gauge**: Adjustable tool for parallel lines

## **2.4 Layout Techniques**
Follow these **layout steps** for any project:
1. **Establish Reference Edge**: Select the straightest board edge
2. **Square Lines**: Use a combination square for 90° marks
3. **Transfer Measurements**: Mark from reference edge, not tape end
4. **Knife Walls**: Score lines with marking knife for exact cuts
5. **Test Fit**: Dry assemble before final glue-up

## **2.5 Common Layout Mistakes to Avoid**
**Avoid these five common errors**:
- **Parallax Error**: Reading tape measure at an angle
- **Blunt Pencil**: Thick lines reduce accuracy (keep pencil sharp)
- **Wrong Side Marking**: Marking on finished side instead of back
- **Accumulated Error**: Small errors that compound across multiple pieces
- **Temperature Ignorance**: Wood expands/contracts with humidity changes

**Remember**: The difference between amateur and professional work is often in the layout. Take your time here!
`,
      completed: false,
      quiz: [
        {
          id: 1,
          question: "What measurement accuracy is acceptable for rough framing?",
          options: ["±1/64 inch", "±1/32 inch", "±1/16 inch", "±1/8 inch"],
          correctAnswer: 3,
          explanation: "Rough framing allows ±1/8 inch accuracy, while finish work requires greater precision."
        },
        {
          id: 2,
          question: "How much does a tape measure hook slide to account for its thickness?",
          options: ["1/32 inch", "1/16 inch", "1/8 inch", "1/4 inch"],
          correctAnswer: 1,
          explanation: "The tape measure hook slides 1/16 inch to ensure accurate inside and outside measurements."
        },
        {
          id: 3,
          question: "Which marking tool is used for lines up to 100 feet long?",
          options: ["Marking knife", "Chalk line", "Combination square", "Marking gauge"],
          correctAnswer: 1,
          explanation: "A chalk line can create straight lines up to 100 feet long when snapped against wood."
        },
        {
          id: 4,
          question: "What is the first step in the layout process?",
          options: ["Square lines", "Establish reference edge", "Transfer measurements", "Test fit"],
          correctAnswer: 1,
          explanation: "Always establish a reference edge (the straightest edge) first before making any other marks."
        },
        {
          id: 5,
          question: "Which measuring system uses millimeters and centimeters?",
          options: ["Imperial system", "Metric system", "Both systems", "Neither system"],
          correctAnswer: 1,
          explanation: "The metric system uses millimeters and centimeters, while the imperial system uses inches and feet."
        },
        {
          id: 6,
          question: "What accuracy is expected for fine furniture making?",
          options: ["±1/8 inch", "±1/16 inch", "±1/32 inch", "±1/64 inch"],
          correctAnswer: 3,
          explanation: "Fine furniture requires ±1/64 inch precision for quality joinery and fit."
        },
        {
          id: 7,
          question: "Which tool creates precise knife lines for exact cuts?",
          options: ["Carpenter's pencil", "Marking knife", "Chalk line", "Combination square"],
          correctAnswer: 1,
          explanation: "A marking knife scores wood fibers cleanly, providing an exact line for cutting."
        },
        {
          id: 8,
          question: "What type of error occurs when reading a tape measure at an angle?",
          options: ["Accumulated error", "Parallax error", "Transfer error", "Measurement error"],
          correctAnswer: 1,
          explanation: "Parallax error occurs when viewing markings from an incorrect angle, causing inaccurate readings."
        },
        {
          id: 9,
          question: "What angles does a combination square provide?",
          options: ["30° and 60°", "45° and 90°", "15° and 75°", "22.5° and 67.5°"],
          correctAnswer: 1,
          explanation: "A combination square provides both 45° and 90° angles for common carpentry layouts."
        },
        {
          id: 10,
          question: "Why should you keep a carpenter's pencil sharp?",
          options: ["Thick lines reduce accuracy", "Dull pencils break easily", "Sharpening is traditional", "Better grip when sharp"],
          correctAnswer: 0,
          explanation: "A sharp pencil makes thinner, more accurate lines, while blunt pencils create thick, imprecise marks."
        },
        {
          id: 11,
          question: "What is the purpose of a marking gauge?",
          options: ["Measuring angles", "Creating parallel lines", "Checking squareness", "Cutting curves"],
          correctAnswer: 1,
          explanation: "A marking gauge is an adjustable tool for creating lines parallel to an edge."
        },
        {
          id: 12,
          question: "When should you perform a test fit in the layout process?",
          options: ["Before establishing reference edge", "After squaring lines", "Before final glue-up", "After completing project"],
          correctAnswer: 2,
          explanation: "Always perform a test fit (dry assembly) before applying glue to ensure proper fit."
        },
        {
          id: 13,
          question: "What causes wood to expand and contract?",
          options: ["Temperature changes", "Humidity changes", "Both temperature and humidity", "Neither temperature nor humidity"],
          correctAnswer: 2,
          explanation: "Wood expands and contracts with both temperature and humidity changes, affecting measurements."
        },
        {
          id: 14,
          question: "Which lines on a tape measure indicate 1/4 inch increments?",
          options: ["Smallest lines", "Medium lines", "Second longest lines", "Longest lines"],
          correctAnswer: 1,
          explanation: "Medium lines on a tape measure indicate 1/4 inch increments."
        },
        {
          id: 15,
          question: "What should you mark from instead of the end of the tape measure?",
          options: ["The hook", "The lock", "The reference edge", "The midpoint"],
          correctAnswer: 2,
          explanation: "Always transfer measurements from the established reference edge for consistency."
        },
        {
          id: 16,
          question: "What is the term for small errors that compound across multiple pieces?",
          options: ["Parallax error", "Accumulated error", "Transfer error", "Measurement error"],
          correctAnswer: 1,
          explanation: "Accumulated error occurs when small mistakes in each piece combine to create larger problems in assembly."
        },
        {
          id: 17,
          question: "What is the purpose of scoring lines with a marking knife?",
          options: ["To decorate wood", "To weaken wood for breaking", "For exact cuts", "To prevent splitting"],
          correctAnswer: 2,
          explanation: "Scoring with a marking knife severs wood fibers cleanly, allowing for exact cuts along the line."
        },
        {
          id: 18,
          question: "Which tool has an adjustable fence for consistent marking?",
          options: ["Tape measure", "Combination square", "Marking gauge", "Chalk line"],
          correctAnswer: 2,
          explanation: "A marking gauge has an adjustable fence that locks at specific distances from the cutting point."
        },
        {
          id: 19,
          question: "What is the main advantage of using a marking knife over a pencil?",
          options: ["Cheaper", "More visible", "More precise", "Easier to use"],
          correctAnswer: 2,
          explanation: "A marking knife is more precise than a pencil because it cuts a fine line exactly where the cut should be."
        },
        {
          id: 20,
          question: "What should be done before making any marks on wood?",
          options: ["Sharpen pencil", "Check tape measure", "Select straightest edge", "All of the above"],
          correctAnswer: 3,
          explanation: "All these steps are important: sharpen pencil, check tools, and establish a reference edge before marking."
        }
      ]
    },
    {
      id: 3,
      title: "Hand Tool Fundamentals",
      content: `
# Module 3: Hand Tool Fundamentals

Mastering hand tools is essential for every carpenter. This module covers proper selection, use, and maintenance of essential woodworking hand tools.

## **3.1 Saw Selection & Use**
Carpentry uses **five main types of handsaws**:
1. **Crosscut Saw**: 10-12 teeth per inch (cuts across wood grain)
2. **Rip Saw**: 5-7 teeth per inch (cuts with wood grain)
3. **Backsaw**: Fine teeth with rigid back (for joinery)
4. **Coping Saw**: Thin blade for curves (replaces traditional bowsaw)
5. **Japanese Pull Saw**: Cuts on pull stroke (thinner kerf)

**Saw tooth geometry**:
- **Rake Angle**: Forward or backward lean of teeth
- **Set**: Alternating bend of teeth (creates kerf wider than blade)
- **TPI**: Teeth per inch (higher = smoother, slower cuts)

## **3.2 Plane Types & Techniques**
**Three essential hand planes**:
- **Jack Plane**: 14-15 inches (general purpose, removes material quickly)
- **Smoothing Plane**: 8-10 inches (final surface preparation)
- **Block Plane**: 6-7 inches (small, one-handed use for end grain)

**Plane adjustment steps**:
1. **Flatten Sole**: Check with straightedge
2. **Sharpen Iron**: 25-30° bevel angle
3. **Set Depth**: Thin shavings (0.002-0.005 inches)
4. **Set Lateral**: Blade even across mouth
5. **Test Cut**: Adjust until consistent shavings

## **3.3 Chisel Skills**
**Chisel types and uses**:
- **Bench Chisels**: General purpose (bevel-edged for dovetails)
- **Mortise Chisels**: Thicker, stronger (for chopping mortises)
- **Paring Chisels**: Longer, thinner (for precise fitting)
- **Corner Chisels**: 90° angle (for cleaning square corners)

**Sharpening angles**:
- **Softwoods**: 20-25° cutting angle
- **Hardwoods**: 25-30° cutting angle
- **End grain**: 30-35° stronger angle

## **3.4 Hammer Techniques**
**Proper hammer use**:
- **Grip**: Hold near end of handle (maximizes swing)
- **Swing**: Elbow and wrist, not just shoulder
- **Strike**: Face parallel to surface
- **Nail Set**: Use for finish nails (prevents hammer marks)
- **Extraction**: Rock side to side, don't pull straight

**Common hammer types**:
- **Claw Hammer**: General use (curved vs straight claw)
- **Mallet**: Wood or rubber (for chisels without damaging)
- **Tack Hammer**: Small, magnetic (for upholstery)
- **Sledge Hammer**: Heavy demolition (3+ pounds)

## **3.5 Drill & Brace Operation**
**Hand drilling tools**:
- **Brace & Bit**: For large holes (1/2 to 2 inches)
- **Hand Drill**: Smaller holes (geared mechanism)
- **Gimlet**: Starting holes for screws
- **Countersink**: Recessing screw heads

**Drilling tips**:
1. **Center Punch**: Create starting dimple
2. **Perpendicular**: Use square to check angle
3. **Clear Chips**: Back out regularly
4. **Exit Side**: Support to prevent tear-out
5. **Lubricate**: For metal or dense woods

**Remember**: Sharp tools are safe tools. Dull tools require more force and are more likely to slip.
`,
      completed: false,
      quiz: [
        {
          id: 1,
          question: "Which saw has 10-12 teeth per inch and cuts across wood grain?",
          options: ["Rip saw", "Crosscut saw", "Backsaw", "Coping saw"],
          correctAnswer: 1,
          explanation: "A crosscut saw has 10-12 TPI and is designed for cutting across the wood grain."
        },
        {
          id: 2,
          question: "What is the general length of a jack plane?",
          options: ["6-7 inches", "8-10 inches", "14-15 inches", "18-20 inches"],
          correctAnswer: 2,
          explanation: "A jack plane is typically 14-15 inches long and serves as a general-purpose plane."
        },
        {
          id: 3,
          question: "Which chisel type is designed specifically for chopping mortises?",
          options: ["Bench chisels", "Mortise chisels", "Paring chisels", "Corner chisels"],
          correctAnswer: 1,
          explanation: "Mortise chisels are thicker and stronger, specifically designed for chopping mortises."
        },
        {
          id: 4,
          question: "What is the recommended sharpening angle for chisels used on softwoods?",
          options: ["15-20°", "20-25°", "25-30°", "30-35°"],
          correctAnswer: 1,
          explanation: "For softwoods, a 20-25° cutting angle provides a good balance of sharpness and durability."
        },
        {
          id: 5,
          question: "Where should you grip a hammer for maximum swing efficiency?",
          options: ["At the head", "In the middle", "Near the end", "Anywhere comfortable"],
          correctAnswer: 2,
          explanation: "Gripping near the end of the handle maximizes swing efficiency through leverage."
        },
        {
          id: 6,
          question: "What does TPI stand for in saw terminology?",
          options: ["Teeth per inch", "Total pitch indicator", "Tool performance index", "Tooth placement interval"],
          correctAnswer: 0,
          explanation: "TPI stands for Teeth Per Inch, which indicates how fine or coarse a saw cut will be."
        },
        {
          id: 7,
          question: "What type of plane is 8-10 inches long and used for final surface preparation?",
          options: ["Jack plane", "Smoothing plane", "Block plane", "Jointer plane"],
          correctAnswer: 1,
          explanation: "A smoothing plane is 8-10 inches long and creates the final smooth surface before finishing."
        },
        {
          id: 8,
          question: "What is the purpose of a nail set?",
          options: ["To start nails", "To remove nails", "To sink nails below surface", "To hold nails in place"],
          correctAnswer: 2,
          explanation: "A nail set is used to drive finish nails below the wood surface without leaving hammer marks."
        },
        {
          id: 9,
          question: "Which saw uses a thin blade and is designed for cutting curves?",
          options: ["Crosscut saw", "Rip saw", "Coping saw", "Backsaw"],
          correctAnswer: 2,
          explanation: "A coping saw has a thin, flexible blade perfect for cutting curves and intricate shapes."
        },
        {
          id: 10,
          question: "What is the recommended thickness for plane shavings during adjustment?",
          options: ["0.001-0.002 inches", "0.002-0.005 inches", "0.005-0.010 inches", "0.010-0.020 inches"],
          correctAnswer: 1,
          explanation: "Plane shavings should be 0.002-0.005 inches thick for efficient material removal."
        },
        {
          id: 11,
          question: "What type of hammer has a wood or rubber head for use with chisels?",
          options: ["Claw hammer", "Mallet", "Tack hammer", "Sledge hammer"],
          correctAnswer: 1,
          explanation: "A mallet has a wood or rubber head that won't damage chisel handles when striking."
        },
        {
          id: 12,
          question: "What tool is used for drilling large holes from 1/2 to 2 inches?",
          options: ["Hand drill", "Brace and bit", "Gimlet", "Countersink"],
          correctAnswer: 1,
          explanation: "A brace and bit is designed for drilling large holes with significant torque."
        },
        {
          id: 13,
          question: "What is the alternating bend of saw teeth called?",
          options: ["Rake", "Set", "Kerf", "Gullet"],
          correctAnswer: 1,
          explanation: "The set refers to the alternating bend of saw teeth that creates a kerf wider than the blade."
        },
        {
          id: 14,
          question: "Which plane is small enough for one-handed use and ideal for end grain?",
          options: ["Jack plane", "Smoothing plane", "Block plane", "Shoulder plane"],
          correctAnswer: 2,
          explanation: "A block plane is 6-7 inches long, designed for one-handed use, particularly on end grain."
        },
        {
          id: 15,
          question: "What should you use to create a starting dimple before drilling?",
          options: ["Hammer", "Center punch", "Awl", "Chisel"],
          correctAnswer: 1,
          explanation: "A center punch creates a small dimple that prevents drill bits from wandering when starting."
        },
        {
          id: 16,
          question: "Which chisel has a 90° angle for cleaning square corners?",
          options: ["Bench chisel", "Mortise chisel", "Paring chisel", "Corner chisel"],
          correctAnswer: 3,
          explanation: "A corner chisel has a 90° angle specifically designed for cleaning square corners in mortises."
        },
        {
          id: 17,
          question: "What does a higher TPI number indicate about a saw?",
          options: ["Faster cutting", "Smoother cutting", "Less expensive", "Heavier weight"],
          correctAnswer: 1,
          explanation: "Higher TPI (teeth per inch) means smoother but slower cuts, while lower TPI means faster but rougher cuts."
        },
        {
          id: 18,
          question: "Why should you back out a drill bit regularly while drilling?",
          options: ["To check progress", "To clear chips", "To rest your arm", "To lubricate bit"],
          correctAnswer: 1,
          explanation: "Backing out a drill bit clears wood chips from the hole, preventing binding and overheating."
        },
        {
          id: 19,
          question: "What is the main advantage of a Japanese pull saw?",
          options: ["Thicker blade", "Thinner kerf", "Heavier weight", "Lower cost"],
          correctAnswer: 1,
          explanation: "Japanese pull saws cut on the pull stroke, allowing for thinner blades that create a thinner kerf."
        },
        {
          id: 20,
          question: "What should be checked with a straightedge when preparing a plane?",
          options: ["The blade", "The sole", "The handle", "The frog"],
          correctAnswer: 1,
          explanation: "The sole of a plane should be checked with a straightedge to ensure it's flat for accurate planing."
        }
      ]
    },
    {
      id: 4,
      title: "Wood Joints & Fastening Methods",
      content: `
# Module 4: Wood Joints & Fastening Methods

Creating strong, lasting connections is crucial in carpentry. This module covers traditional joinery and modern fastening techniques.

## **4.1 Basic Wood Joints**
**Five essential wood joints**:
1. **Butt Joint**: Simplest (end grain to face grain)
   - Strength: Weak (requires reinforcement)
   - Uses: Framing, simple boxes
   - Reinforcement: Glue blocks, screws, nails

2. **Miter Joint**: 45° angle meeting
   - Strength: Moderate (depends on glue surface)
   - Uses: Picture frames, trim work
   - Reinforcement: Splines, biscuits, dowels

3. **Lap Joint**: Overlapping material
   - Strength: Good (increased glue area)
   - Uses: Cabinet frames, rustic furniture
   - Types: Cross lap, half lap, dovetail lap

4. **Dado Joint**: Channel cut across grain
   - Strength: Excellent (mechanical lock)
   - Uses: Shelves, cabinet dividers
   - Variations: Through dado, stopped dado

5. **Rabbet Joint**: L-shaped recess at edge
   - Strength: Good (mechanical lock)
   - Uses: Cabinet backs, drawer bottoms
   - Combinations: Often used with dados

## **4.2 Fastener Types & Selection**
**Nail types and uses**:
- **Common Nails**: Heavy construction (3d to 60d sizes)
- **Finish Nails**: Small heads (sunk below surface)
- **Brad Nails**: Very small (18-23 gauge for trim)
- **Ring Shank**: Extra holding power (flooring, decks)
- **Spiral Shank**: Less splitting (drywall, paneling)

**Screw selection guide**:
- **Wood Screws**: Coarse threads, unthreaded shank
- **Drywall Screws**: Fine threads, brittle (not for structural)
- **Deck Screws**: Corrosion resistant (zinc, ceramic coated)
- **Pocket Hole Screws**: Self-tapping, flat heads
- **Machine Screws**: Used with nuts (not for wood alone)

## **4.3 Gluing Techniques**
**Wood glue characteristics**:
- **PVA Glue**: White or yellow (most common, 15-30 minute clamp time)
- **Polyurethane Glue**: Expands (fills gaps, waterproof)
- **Hide Glue**: Traditional (reversible, long open time)
- **Epoxy**: Fills gaps (structural repairs, 5:1 mixing ratio)
- **CA Glue**: Instant bond (small repairs, no clamp time)

**Proper gluing steps**:
1. **Surface Prep**: Clean, dry, properly fitted
2. **Apply Evenly**: Spread with brush or roller
3. **Clamp Pressure**: 100-150 PSI for most woods
4. **Clamp Time**: Follow manufacturer (typically 30 min-24 hours)
5. **Clean Squeeze-out**: Damp cloth before drying

## **4.4 Mechanical Fasteners**
**Specialized fastening systems**:
- **Pocket Hole Jigs**: Angled holes for hidden screws
- **Biscuit Joiners**: Oval wafers swell with glue
- **Dowels**: Round wood pins (3/8" most common)
- **Dominoes**: Floating tenons (similar to biscuits but larger)
- **Knock-down Fittings**: Ikea-style for disassembly

**Fastener spacing rules**:
- **Edge Distance**: Minimum 1/2 nail diameter
- **End Distance**: Minimum 3-4 times nail diameter
- **Row Spacing**: Minimum 4 times nail diameter
- **Stagger Pattern**: Prevents wood splitting

## **4.5 Joint Reinforcement**
**Methods to strengthen joints**:
1. **Corner Blocks**: Triangular glue blocks inside corners
2. **Metal Brackets**: L-brackets, corner braces
3. **Splines**: Thin wood strips in grooves
4. **Keys**: External wedges or butterflies
5. **Pegs**: Decorative through-tenon reinforcement

**Remember**: The best joint is properly fitted before any fastener or glue is applied.
`,
      completed: false,
      quiz: [
        {
          id: 1,
          question: "Which joint is the simplest, involving end grain to face grain?",
          options: ["Miter joint", "Lap joint", "Butt joint", "Dado joint"],
          correctAnswer: 2,
          explanation: "A butt joint is the simplest joint, where end grain meets face grain, requiring reinforcement."
        },
        {
          id: 2,
          question: "What angle is used for a standard miter joint?",
          options: ["30°", "45°", "60°", "90°"],
          correctAnswer: 1,
          explanation: "Standard miter joints use a 45° angle so two pieces form a 90° corner."
        },
        {
          id: 3,
          question: "Which joint features a channel cut across the wood grain?",
          options: ["Rabbet joint", "Dado joint", "Lap joint", "Miter joint"],
          correctAnswer: 1,
          explanation: "A dado joint has a channel cut across the grain to receive another piece of wood."
        },
        {
          id: 4,
          question: "What type of nail has a very small head designed to be sunk below the surface?",
          options: ["Common nail", "Finish nail", "Brad nail", "Ring shank nail"],
          correctAnswer: 1,
          explanation: "Finish nails have small heads that can be driven below the surface and filled for invisible fastening."
        },
        {
          id: 5,
          question: "What is the typical clamp time for PVA wood glue?",
          options: ["5-10 minutes", "15-30 minutes", "1-2 hours", "4-6 hours"],
          correctAnswer: 1,
          explanation: "PVA (yellow) wood glue typically requires 15-30 minutes of clamp time."
        },
        {
          id: 6,
          question: "Which screw type is corrosion resistant and designed for outdoor use?",
          options: ["Wood screws", "Drywall screws", "Deck screws", "Machine screws"],
          correctAnswer: 2,
          explanation: "Deck screws are corrosion resistant with coatings suitable for outdoor exposure."
        },
        {
          id: 7,
          question: "What type of joint has an L-shaped recess at the edge of a board?",
          options: ["Dado joint", "Rabbet joint", "Lap joint", "Butt joint"],
          correctAnswer: 1,
          explanation: "A rabbet joint has an L-shaped recess cut along the edge or end of a board."
        },
        {
          id: 8,
          question: "Which glue expands as it cures and can fill gaps?",
          options: ["PVA glue", "Polyurethane glue", "Hide glue", "CA glue"],
          correctAnswer: 1,
          explanation: "Polyurethane glue expands as it cures, helping to fill gaps in imperfect joints."
        },
        {
          id: 9,
          question: "What is the minimum edge distance for nails?",
          options: ["1/4 nail diameter", "1/2 nail diameter", "Equal to nail diameter", "2 times nail diameter"],
          correctAnswer: 1,
          explanation: "Nails should be placed at least 1/2 their diameter from the edge to prevent splitting."
        },
        {
          id: 10,
          question: "Which joint involves overlapping material for increased glue surface?",
          options: ["Butt joint", "Miter joint", "Lap joint", "Dado joint"],
          correctAnswer: 2,
          explanation: "Lap joints overlap material, creating more glue surface area than butt joints."
        },
        {
          id: 11,
          question: "What type of nail has rings on the shank for extra holding power?",
          options: ["Common nail", "Finish nail", "Ring shank nail", "Spiral shank nail"],
          correctAnswer: 2,
          explanation: "Ring shank nails have rings that grip wood fibers, providing exceptional holding power."
        },
        {
          id: 12,
          question: "What size dowel is most commonly used in woodworking?",
          options: ["1/4 inch", "3/8 inch", "1/2 inch", "5/8 inch"],
          correctAnswer: 1,
          explanation: "3/8 inch dowels are the most commonly used size for general woodworking joinery."
        },
        {
          id: 13,
          question: "Which type of screw should NOT be used for structural wood connections?",
          options: ["Wood screws", "Drywall screws", "Deck screws", "Pocket hole screws"],
          correctAnswer: 1,
          explanation: "Drywall screws are brittle and not designed for structural connections in wood."
        },
        {
          id: 14,
          question: "What clamping pressure is recommended for most wood gluing?",
          options: ["50-75 PSI", "100-150 PSI", "200-250 PSI", "300-350 PSI"],
          correctAnswer: 1,
          explanation: "100-150 PSI is the typical clamping pressure range for most wood gluing applications."
        },
        {
          id: 15,
          question: "Which mechanical fastener uses oval wafers that swell with glue?",
          options: ["Dowels", "Biscuits", "Dominos", "Pocket holes"],
          correctAnswer: 1,
          explanation: "Biscuit joiners use oval-shaped wafers that swell when exposed to glue moisture."
        },
        {
          id: 16,
          question: "What is the minimum end distance for nails?",
          options: ["1-2 times nail diameter", "3-4 times nail diameter", "5-6 times nail diameter", "7-8 times nail diameter"],
          correctAnswer: 1,
          explanation: "Nails should be placed at least 3-4 times their diameter from the end of a board."
        },
        {
          id: 17,
          question: "Which glue is traditional, reversible, and has a long open time?",
          options: ["PVA glue", "Polyurethane glue", "Hide glue", "Epoxy"],
          correctAnswer: 2,
          explanation: "Hide glue is traditional, can be reversed with heat and moisture, and has a long open time."
        },
        {
          id: 18,
          question: "What type of joint reinforcement involves triangular blocks inside corners?",
          options: ["Metal brackets", "Corner blocks", "Splines", "Keys"],
          correctAnswer: 1,
          explanation: "Corner blocks are triangular glue blocks added inside corners for reinforcement."
        },
        {
          id: 19,
          question: "What gauge are brad nails typically?",
          options: ["11-16 gauge", "18-23 gauge", "25-30 gauge", "32-35 gauge"],
          correctAnswer: 1,
          explanation: "Brad nails are typically 18-23 gauge, very small for trim and delicate work."
        },
        {
          id: 20,
          question: "What should be done to glue squeeze-out before it dries?",
          options: ["Leave it to strengthen joint", "Sand it off after drying", "Wipe with damp cloth", "Scrape with chisel"],
          correctAnswer: 2,
          explanation: "Glue squeeze-out should be wiped with a damp cloth before it dries for easier cleanup."
        }
      ]
    },
    {
      id: 5,
      title: "Power Tool Basics",
      content: `
# Module 5: Power Tool Basics

Power tools increase efficiency and precision when used correctly. This module introduces essential power tools with safety-first operation.

## **5.1 Circular Saw Mastery**
The **circular saw** is the most versatile portable power tool:
- **Blade Sizes**: 5-1/2" to 10-1/4" (7-1/4" most common)
- **Cutting Depth**: 2-1/2" at 90°, 1-3/4" at 45° (for 7-1/4" blade)
- **Blade Types**: Rip, crosscut, combination, plywood, masonry

**Circular saw cutting techniques**:
1. **Rip Cuts**: Use rip fence or straightedge guide
2. **Cross Cuts**: Use square for 90° accuracy
3. **Bevel Cuts**: Adjust base plate (0-45° typical)
4. **Plunge Cuts**: Start with blade raised, lower into material
5. **Sheet Goods**: Support entire piece to prevent binding

**Safety features**:
- **Blade Guard**: Spring-loaded, retracts during cut
- **Electric Brake**: Stops blade quickly after trigger release
- **Riving Knife**: Prevents kickback by keeping kerf open

## **5.2 Power Drill Essentials**
**Drill/driver types**:
- **Corded Drill**: Consistent power (6-8 amp motor)
- **Cordless Drill**: 12V-20V systems (2-6 Ah batteries)
- **Hammer Drill**: Impact action for masonry
- **Right Angle Drill**: Tight spaces
- **Impact Driver**: High torque for driving screws

**Drill bit selection**:
- **Twist Bits**: General purpose (118° point angle)
- **Brad Point**: Clean holes in wood (center spur)
- **Forstner Bits**: Flat-bottom holes (no center point)
- **Hole Saws**: Large diameter holes (1-6 inches)
- **Countersink Bits**: Combined drill and countersink

## **5.3 Jigsaw Operation**
The **jigsaw** cuts curves and irregular shapes:
- **Stroke Length**: 3/4" to 1" (longer = faster cutting)
- **Orbital Action**: Blade moves forward on upstroke (faster but rougher)
- **Blade Types**: Wood, metal, scroll, reverse tooth

**Jigsaw cutting tips**:
- **Speed Control**: Slower for curves, faster for straight
- **Blade Selection**: More teeth = smoother, fewer = faster
- **Support Workpiece**: Prevents vibration and blade bending
- **Pilot Holes**: For interior cutouts (drill starting hole)
- **Guide Fence**: For straight cuts parallel to edge

## **5.4 Router Fundamentals**
The **router** shapes edges and cuts joinery:
- **Collet Sizes**: 1/4" and 1/2" (1/2" for larger bits)
- **Horsepower**: 1-3 HP (higher = smoother in hardwoods)
- **Speed Control**: 10,000-30,000 RPM (slower for larger bits)

**Common router bits**:
- **Straight Bits**: Grooves, dados, rabbets
- **Round-over Bits**: Rounded edges (1/8" to 1" radius)
- **Chamfer Bits**: Angled edges (typically 45°)
- **Cove Bits**: Concave profiles
- **Rabbeting Bits**: Adjustable bearing for rabbet depth

**Router techniques**:
- **Climb Cutting**: Against rotation (reduces tear-out on edges)
- **Template Routing**: Pattern following with guide bushings
- **Router Table**: More control for small workpieces

## **5.5 Power Tool Safety Systems**
**Essential safety practices**:
1. **PPE Always**: Safety glasses, hearing protection, dust mask
2. **Cord Management**: Prevent tripping, use GFCI outdoors
3. **Blade/Bit Condition**: Dull tools are dangerous tools
4. **Workpiece Security**: Clamp everything that moves
5. **Dust Collection**: Connect to vacuum for cleaner air
6. **Unplug Changes**: Always unplug before blade/bit changes

**Remember**: Let the tool do the work. Forcing causes kickback, burning, and poor results.
`,
      completed: false,
      quiz: [
        {
          id: 1,
          question: "What is the most common circular saw blade size?",
          options: ["5-1/2 inch", "6-1/2 inch", "7-1/4 inch", "8-1/4 inch"],
          correctAnswer: 2,
          explanation: "7-1/4 inch is the most common circular saw blade size for general construction."
        },
        {
          id: 2,
          question: "What does a riving knife on a circular saw prevent?",
          options: ["Overheating", "Kickback", "Blade dulling", "Motor burnout"],
          correctAnswer: 1,
          explanation: "A riving knife prevents kickback by keeping the kerf open behind the blade."
        },
        {
          id: 3,
          question: "Which drill type provides impact action for masonry drilling?",
          options: ["Corded drill", "Cordless drill", "Hammer drill", "Right angle drill"],
          correctAnswer: 2,
          explanation: "A hammer drill combines rotation with hammering action for drilling into masonry."
        },
        {
          id: 4,
          question: "What type of drill bit has a center spur for clean holes in wood?",
          options: ["Twist bit", "Brad point bit", "Forstner bit", "Hole saw"],
          correctAnswer: 1,
          explanation: "Brad point bits have a center spur that helps position the bit precisely for clean holes."
        },
        {
          id: 5,
          question: "Which power tool is specifically designed for cutting curves?",
          options: ["Circular saw", "Jigsaw", "Router", "Power drill"],
          correctAnswer: 1,
          explanation: "A jigsaw is specifically designed for cutting curves and irregular shapes in wood."
        },
        {
          id: 6,
          question: "What is the typical RPM range for routers?",
          options: ["1,000-5,000 RPM", "5,000-10,000 RPM", "10,000-30,000 RPM", "30,000-50,000 RPM"],
          correctAnswer: 2,
          explanation: "Routers typically operate between 10,000 and 30,000 RPM for clean cutting."
        },
        {
          id: 7,
          question: "What should you always do before changing a circular saw blade?",
          options: ["Wear gloves", "Check blade sharpness", "Unplug the saw", "Clean the saw"],
          correctAnswer: 2,
          explanation: "Always unplug power tools before changing blades or bits to prevent accidental startup."
        },
        {
          id: 8,
          question: "What does orbital action on a jigsaw do?",
          options: ["Blade moves forward on upstroke", "Blade moves backward on upstroke", "Blade stays vertical", "Blade rotates 360°"],
          correctAnswer: 0,
          explanation: "Orbital action moves the jigsaw blade forward on the upstroke for faster cutting."
        },
        {
          id: 9,
          question: "Which router bit creates rounded edges?",
          options: ["Straight bit", "Round-over bit", "Chamfer bit", "Cove bit"],
          correctAnswer: 1,
          explanation: "Round-over bits create rounded edges with various radius options (typically 1/8\" to 1\")."
        },
        {
          id: 10,
          question: "What is the purpose of a pilot hole when using a jigsaw?",
          options: ["For interior cutouts", "For starting straight cuts", "For dust collection", "For blade lubrication"],
          correctAnswer: 0,
          explanation: "Pilot holes allow you to start jigsaw cuts in the interior of a workpiece for cutouts."
        },
        {
          id: 11,
          question: "What voltage range is typical for cordless drills?",
          options: ["6V-10V", "12V-20V", "24V-36V", "40V-60V"],
          correctAnswer: 1,
          explanation: "Cordless drills typically use 12V to 20V battery systems for power and runtime."
        },
        {
          id: 12,
          question: "Which cutting technique reduces tear-out when routing edges?",
          options: ["Climb cutting", "Template routing", "Table routing", "Freehand routing"],
          correctAnswer: 0,
          explanation: "Climb cutting (cutting against the router's rotation) reduces tear-out on edges."
        },
        {
          id: 13,
          question: "What type of drill bit creates flat-bottom holes without a center point?",
          options: ["Twist bit", "Brad point bit", "Forstner bit", "Countersink bit"],
          correctAnswer: 2,
          explanation: "Forstner bits create flat-bottom holes and can cut overlapping holes without a center point."
        },
        {
          id: 14,
          question: "What safety device should be used with power tools outdoors?",
          options: ["Extension cord", "GFCI", "Voltage regulator", "Power strip"],
          correctAnswer: 1,
          explanation: "A GFCI (Ground Fault Circuit Interrupter) should always be used with power tools outdoors."
        },
        {
          id: 15,
          question: "What is the typical point angle for general-purpose twist drill bits?",
          options: ["90°", "118°", "135°", "150°"],
          correctAnswer: 1,
          explanation: "General-purpose twist drill bits typically have a 118° point angle."
        },
        {
          id: 16,
          question: "Which router feature allows for pattern following?",
          options: ["Speed control", "Template routing", "Dust collection", "Collet size"],
          correctAnswer: 1,
          explanation: "Template routing with guide bushings allows the router to follow patterns accurately."
        },
        {
          id: 17,
          question: "What should be done with workpieces before power tool operation?",
          options: ["Clamp them securely", "Mark them clearly", "Sand them smooth", "All of the above"],
          correctAnswer: 3,
          explanation: "All these steps are important: clamp securely, mark clearly, and prepare surfaces."
        },
        {
          id: 18,
          question: "What does a longer stroke length on a jigsaw provide?",
          options: ["Faster cutting", "Smoother cutting", "More precise curves", "Less vibration"],
          correctAnswer: 0,
          explanation: "A longer stroke length on a jigsaw provides faster cutting speed through material."
        },
        {
          id: 19,
          question: "Which power tool is best for driving screws efficiently?",
          options: ["Corded drill", "Cordless drill", "Impact driver", "Hammer drill"],
          correctAnswer: 2,
          explanation: "Impact drivers provide high torque with minimal effort for driving screws efficiently."
        },
        {
          id: 20,
          question: "What is the primary rule for using power tools safely?",
          options: ["Wear safety glasses", "Let the tool do the work", "Keep blades sharp", "All of the above"],
          correctAnswer: 3,
          explanation: "All these are essential safety practices for power tool operation."
        }
      ]
    },
    {
      id: 6,
      title: "Project Planning & Simple Furniture",
      content: `
# Module 6: Project Planning & Simple Furniture

Apply your carpentry skills to complete practical projects. This module covers project planning, material selection, and building simple furniture.

## **6.1 Project Planning Process**
Follow this **5-step planning process**:

1. **Define Requirements**:
   - Purpose: What will it be used for?
   - Location: Indoor vs outdoor considerations
   - Size: Dimensions and proportions
   - Style: Modern, rustic, traditional
   - Budget: Material and tool costs

2. **Create Drawings**:
   - **Sketch**: Rough idea with dimensions
   - **Elevations**: Front, side, top views
   - **Cut List**: All pieces with exact dimensions
   - **Materials List**: Types, quantities, grades

3. **Material Selection**:
   - **Softwoods**: Pine, cedar, fir (budget-friendly)
   - **Hardwoods**: Oak, maple, cherry (durability)
   - **Plywood**: Baltic birch, cabinet grade (stable)
   - **Board Feet Calculation**: (Width" × Thickness" × Length') ÷ 12

4. **Tool & Supply Checklist**:
   - Required tools (buy, rent, or borrow)
   - Fasteners: Type, size, quantity
   - Finishes: Stain, paint, clear coat
   - Safety equipment: PPE, clamps, supports

5. **Schedule & Workspace**:
   - Time estimate: Double your initial guess
   - Workspace preparation: Clean, organized, adequate lighting
   - Break into phases: Cutting, assembly, finishing

## **6.2 Building a Basic Bookshelf**
**Simple bookshelf specifications**:
- **Dimensions**: 36" tall × 24" wide × 10" deep
- **Materials**: 1×10 pine boards (actual 3/4" × 9-1/4")
- **Shelves**: 3 adjustable shelves (supports 50 lbs each)
- **Joinery**: Pocket hole screws (hidden fastening)
- **Finish**: Sanding + stain or paint

**Construction steps**:
1. **Cut Components**:
   - Sides: 2 pieces @ 36" long
   - Top/Bottom: 2 pieces @ 24" long
   - Shelves: 3 pieces @ 22-1/2" long (allow for side thickness)
   - Back: 1/4" plywood @ 35-1/2" × 23-1/2"

2. **Drill Shelf Pin Holes**:
   - Layout: 1" from bottom, then every 4"
   - Jig: Use shelf pin drilling jig for consistency
   - Depth: 1/4" deep for standard shelf pins

3. **Assemble Case**:
   - Attach top/bottom between sides with pocket holes
   - Check square: Diagonal measurements should equal
   - Attach back: 1" brad nails every 6" around perimeter

4. **Install Shelves**:
   - Insert shelf pins at desired heights
   - Place shelves on pins
   - Test level: Adjust pins as needed

## **6.3 Building a Simple Table**
**Basic side table design**:
- **Dimensions**: 24" tall × 18" square top
- **Legs**: 4 pieces @ 24" long (2×2 actual 1-1/2" square)
- **Apron**: 4 pieces @ 14-1/2" long (1×4 actual 3/4" × 3-1/2")
- **Top**: 1×6 boards edge-glued (actual 3/4" × 5-1/2")
- **Joinery**: Mortise and tenon or pocket screws

**Table construction sequence**:
1. **Prepare Legs**:
   - Cut legs to exact length
   - Mark mortise locations (3/4" from top and bottom)
   - Cut mortises: 3/4" wide × 1-1/2" deep

2. **Make Aprons**:
   - Cut tenons: 3/4" thick × 1-1/2" long × 3-1/2" wide
   - Test fit: Should be snug but not forced
   - Sand all parts before assembly

3. **Dry Assembly**:
   - Assemble without glue to check fit
   - Measure diagonals: Should be equal (square frame)
   - Adjust as needed

4. **Final Assembly**:
   - Apply glue to tenons and mortises
   - Clamp with corner-to-corner clamps
   - Check square repeatedly during clamp-up
   - Wipe excess glue with damp cloth

5. **Attach Top**:
   - Use figure-8 fasteners or pocket screws
   - Allow for wood movement (slotted holes)
   - Center on base and secure

## **6.4 Finishing Techniques**
**Three basic finish options**:

1. **Clear Finish** (shows wood grain):
   - Sanding: 80 → 120 → 180 → 220 grit progression
   - Stain: Oil-based (deep penetration) or water-based (quick dry)
   - Top Coat: Polyurethane (2-3 coats, sand between)

2. **Paint Finish** (hides wood grain):
   - Primer: Oil-based for knots, water-based for general
   - Sanding: Lightly sand primer (220 grit)
   - Paint: Latex or oil-based (2 coats minimum)
   - Protection: Clear coat for high-use surfaces

3. **Natural Oil Finish**:
   - Tung Oil: Water resistant, multiple coats
   - Linseed Oil: Traditional, slow drying
   - Danish Oil: Oil + varnish combination
   - Application: Flood surface, wipe excess, repeat

**Finishing tips**:
- **Work Environment**: Dust-free, 65-75°F, good ventilation
- **Test First**: Always test on scrap same wood
- **Thin Coats**: Better than thick, drippy coats
- **Drying Time**: Follow manufacturer recommendations
- **Final Polish**: 0000 steel wool or 400+ grit sandpaper

## **6.5 Project Evaluation & Improvement**
**After completing any project**:
1. **Function Check**: Does it work as intended?
2. **Quality Assessment**: Are joints tight? Surfaces smooth?
3. **Learning Points**: What would you do differently next time?
4. **Tool Skills**: Which tools became more comfortable?
5. **Next Project**: What skills do you want to develop?

**Remember**: Your first projects won't be perfect, but each one teaches valuable lessons for the next.
`,
      completed: false,
      quiz: [
        {
          id: 1,
          question: "What is the first step in the project planning process?",
          options: ["Create drawings", "Define requirements", "Select materials", "Estimate budget"],
          correctAnswer: 1,
          explanation: "Always start by defining requirements: purpose, location, size, style, and budget."
        },
        {
          id: 2,
          question: "What calculation is used for board feet?",
          options: ["Width × Length ÷ 144", "(Width × Thickness × Length) ÷ 12", "Length × Thickness × 12", "Width × Length × Thickness"],
          correctAnswer: 1,
          explanation: "Board feet = (Width in inches × Thickness in inches × Length in feet) ÷ 12"
        },
        {
          id: 3,
          question: "What joinery method is suggested for the basic bookshelf project?",
          options: ["Dovetail joints", "Mortise and tenon", "Pocket hole screws", "Biscuit joinery"],
          correctAnswer: 2,
          explanation: "Pocket hole screws provide strong, hidden fastening suitable for a basic bookshelf."
        },
        {
          id: 4,
          question: "How many adjustable shelves does the basic bookshelf design include?",
          options: ["2 shelves", "3 shelves", "4 shelves", "5 shelves"],
          correctAnswer: 1,
          explanation: "The basic bookshelf design includes 3 adjustable shelves with shelf pin support."
        },
        {
          id: 5,
          question: "What should be checked during dry assembly of a table?",
          options: ["Diagonal measurements", "Paint color", "Tool sharpness", "Glue expiration"],
          correctAnswer: 0,
          explanation: "Check diagonal measurements during dry assembly to ensure the frame is square."
        },
        {
          id: 6,
          question: "What is the recommended sanding grit progression?",
          options: ["40 → 80 → 120", "80 → 120 → 180 → 220", "100 → 150 → 200", "60 → 100 → 150 → 200"],
          correctAnswer: 1,
          explanation: "80 → 120 → 180 → 220 grit progression provides a smooth surface for finishing."
        },
        {
          id: 7,
          question: "What type of fastener allows for wood movement when attaching a table top?",
          options: ["Regular screws", "Figure-8 fasteners", "Nails", "Corner brackets"],
          correctAnswer: 1,
          explanation: "Figure-8 fasteners allow wood to expand and contract while keeping the top secure."
        },
        {
          id: 8,
          question: "How many coats of polyurethane are typically recommended?",
          options: ["1 coat", "2-3 coats", "4-5 coats", "6+ coats"],
          correctAnswer: 1,
          explanation: "2-3 coats of polyurethane with light sanding between coats provides good protection."
        },
        {
          id: 9,
          question: "What should you always do before applying finish to a project?",
          options: ["Test on scrap wood", "Wash the wood", "Apply primer", "Heat the finish"],
          correctAnswer: 0,
          explanation: "Always test finishes on scrap wood of the same type to ensure desired results."
        },
        {
          id: 10,
          question: "What is the actual dimension of a 1×10 pine board?",
          options: ["3/4\" × 9-1/4\"", "1\" × 10\"", "3/4\" × 9-1/2\"", "1-1/2\" × 9-1/4\""],
          correctAnswer: 0,
          explanation: "A 1×10 board is actually 3/4\" thick × 9-1/4\" wide after planing and drying."
        },
        {
          id: 11,
          question: "What type of finish shows the wood grain?",
          options: ["Paint", "Clear finish", "Both paint and clear", "Neither paint nor clear"],
          correctAnswer: 1,
          explanation: "Clear finishes (stain + top coat or natural oils) show the wood grain."
        },
        {
          id: 12,
          question: "What is the recommended spacing for brad nails when attaching a bookshelf back?",
          options: ["Every 2 inches", "Every 4 inches", "Every 6 inches", "Every 8 inches"],
          correctAnswer: 2,
          explanation: "Space brad nails every 6 inches around the perimeter when attaching backs."
        },
        {
          id: 13,
          question: "What should you do with excess glue during assembly?",
          options: ["Leave it to strengthen joint", "Sand it off after drying", "Wipe with damp cloth", "Scrape with chisel after drying"],
          correctAnswer: 2,
          explanation: "Wipe excess glue with a damp cloth before it dries for easier cleanup."
        },
        {
          id: 14,
          question: "What is the ideal temperature range for finishing?",
          options: ["50-60°F", "65-75°F", "75-85°F", "85-95°F"],
          correctAnswer: 1,
          explanation: "65-75°F is the ideal temperature range for most finishing products."
        },
        {
          id: 15,
          question: "What type of oil finish combines oil and varnish?",
          options: ["Tung oil", "Linseed oil", "Danish oil", "Mineral oil"],
          correctAnswer: 2,
          explanation: "Danish oil is a combination of oil and varnish that provides both penetration and surface film."
        },
        {
          id: 16,
          question: "How much weight should each bookshelf shelf support in the design?",
          options: ["25 lbs", "50 lbs", "75 lbs", "100 lbs"],
          correctAnswer: 1,
          explanation: "Each shelf in the basic bookshelf design should support at least 50 pounds."
        },
        {
          id: 17,
          question: "What is a good rule for time estimation on projects?",
          options: ["Use manufacturer's estimate", "Double your initial guess", "Ask someone else", "Time each step precisely"],
          correctAnswer: 1,
          explanation: "Double your initial time estimate—projects almost always take longer than expected."
        },
        {
          id: 18,
          question: "What grit sandpaper is recommended for final polishing?",
          options: ["180 grit", "220 grit", "320 grit", "400+ grit"],
          correctAnswer: 3,
          explanation: "400+ grit sandpaper or 0000 steel wool provides a fine polish between finish coats."
        },
        {
          id: 19,
          question: "What should you do after completing a project to improve future work?",
          options: ["Sell it immediately", "Identify learning points", "Forget about it", "Only show perfect projects"],
          correctAnswer: 1,
          explanation: "Always identify learning points—what worked, what didn't, what you'd do differently."
        },
        {
          id: 20,
          question: "What is the most important consideration for project success?",
          options: ["Expensive tools", "Perfect planning", "Learning from each project", "Rushing to completion"],
          correctAnswer: 2,
          explanation: "Learning from each project, whether successful or not, leads to continuous improvement."
        }
      ]
    }
  ],

  // 3. FINAL EXAM (40 Questions - Comprehensive)
  finalExam: {
    title: "Carpentry Certificate Final Examination",
    description: "Comprehensive exam covering all 6 modules. Score 70% or higher to earn your certificate.",
    passingScore: 70,
    questions: [
      {
        id: 1,
        question: "What is the primary purpose of safety glasses in a workshop?",
        options: ["Improve vision", "Reduce eye injuries by 90%", "Prevent dust inhalation", "Look professional"],
        correctAnswer: 1,
        explanation: "Safety glasses reduce eye injuries by approximately 90% when working with wood and tools.",
        module: 1
      },
      {
        id: 2,
        question: "Which wood type is chemically treated for outdoor use?",
        options: ["Pine", "Pressure-treated", "Oak", "MDF"],
        correctAnswer: 1,
        explanation: "Pressure-treated wood contains chemicals that protect against moisture and insects for outdoor applications.",
        module: 1
      },
      {
        id: 3,
        question: "What measurement accuracy is acceptable for rough framing?",
        options: ["±1/64 inch", "±1/32 inch", "±1/16 inch", "±1/8 inch"],
        correctAnswer: 3,
        explanation: "Rough framing allows ±1/8 inch tolerance, while finish work requires greater precision.",
        module: 2
      },
      {
        id: 4,
        question: "What tool creates precise knife lines for exact cuts?",
        options: ["Carpenter's pencil", "Marking knife", "Chalk line", "Combination square"],
        correctAnswer: 1,
        explanation: "A marking knife scores wood fibers cleanly, providing an exact line for cutting.",
        module: 2
      },
      {
        id: 5,
        question: "Which saw has 10-12 teeth per inch for cutting across wood grain?",
        options: ["Rip saw", "Crosscut saw", "Backsaw", "Coping saw"],
        correctAnswer: 1,
        explanation: "A crosscut saw has 10-12 TPI and is designed specifically for cutting across the wood grain.",
        module: 3
      },
      {
        id: 6,
        question: "What is the recommended sharpening angle for chisels used on softwoods?",
        options: ["15-20°", "20-25°", "25-30°", "30-35°"],
        correctAnswer: 1,
        explanation: "For softwoods, a 20-25° cutting angle provides a good balance of sharpness and durability.",
        module: 3
      },
      {
        id: 7,
        question: "Which joint involves overlapping material for increased glue surface?",
        options: ["Butt joint", "Miter joint", "Lap joint", "Dado joint"],
        correctAnswer: 2,
        explanation: "Lap joints overlap material, creating more glue surface area than simple butt joints.",
        module: 4
      },
      {
        id: 8,
        question: "What type of nail has a very small head designed to be sunk below the surface?",
        options: ["Common nail", "Finish nail", "Brad nail", "Ring shank nail"],
        correctAnswer: 1,
        explanation: "Finish nails have small heads that can be driven below the surface and filled for invisible fastening.",
        module: 4
      },
      {
        id: 9,
        question: "What is the most common circular saw blade size?",
        options: ["5-1/2 inch", "6-1/2 inch", "7-1/4 inch", "8-1/4 inch"],
        correctAnswer: 2,
        explanation: "7-1/4 inch is the most common circular saw blade size for general construction work.",
        module: 5
      },
      {
        id: 10,
        question: "Which power tool is specifically designed for cutting curves?",
        options: ["Circular saw", "Jigsaw", "Router", "Power drill"],
        correctAnswer: 1,
        explanation: "A jigsaw is specifically designed for cutting curves and irregular shapes in wood.",
        module: 5
      },
      {
        id: 11,
        question: "What is the first step in the project planning process?",
        options: ["Create drawings", "Define requirements", "Select materials", "Estimate budget"],
        correctAnswer: 1,
        explanation: "Always start by defining requirements: purpose, location, size, style, and budget.",
        module: 6
      },
      {
        id: 12,
        question: "What calculation is used for board feet?",
        options: ["Width × Length ÷ 144", "(Width × Thickness × Length) ÷ 12", "Length × Thickness × 12", "Width × Length × Thickness"],
        correctAnswer: 1,
        explanation: "Board feet = (Width in inches × Thickness in inches × Length in feet) ÷ 12",
        module: 6
      },
      {
        id: 13,
        question: "What does PPE stand for in workshop safety?",
        options: ["Professional Protection Equipment", "Personal Protective Equipment", "Proper Power Equipment", "Practical Project Essentials"],
        correctAnswer: 1,
        explanation: "PPE stands for Personal Protective Equipment, essential for workshop safety.",
        module: 1
      },
      {
        id: 14,
        question: "What is the purpose of a tape measure hook sliding 1/16 inch?",
        options: ["For metric conversion", "Account for hook thickness", "Prevent breaking", "Make it flexible"],
        correctAnswer: 1,
        explanation: "The tape hook slides 1/16 inch to ensure accurate inside and outside measurements.",
        module: 2
      },
      {
        id: 15,
        question: "Which plane is 8-10 inches long for final surface preparation?",
        options: ["Jack plane", "Smoothing plane", "Block plane", "Jointer plane"],
        correctAnswer: 1,
        explanation: "A smoothing plane creates the final smooth surface before finishing.",
        module: 3
      },
      {
        id: 16,
        question: "What is the typical clamp time for PVA wood glue?",
        options: ["5-10 minutes", "15-30 minutes", "1-2 hours", "4-6 hours"],
        correctAnswer: 1,
        explanation: "PVA (yellow) wood glue typically requires 15-30 minutes of clamp time.",
        module: 4
      },
      {
        id: 17,
        question: "What should you always do before changing a circular saw blade?",
        options: ["Wear gloves", "Check blade sharpness", "Unplug the saw", "Clean the saw"],
        correctAnswer: 2,
        explanation: "Always unplug power tools before changing blades or bits to prevent accidental startup.",
        module: 5
      },
      {
        id: 18,
        question: "What joinery method is suggested for the basic bookshelf project?",
        options: ["Dovetail joints", "Mortise and tenon", "Pocket hole screws", "Biscuit joinery"],
        correctAnswer: 2,
        explanation: "Pocket hole screws provide strong, hidden fastening suitable for beginners.",
        module: 6
      },
      {
        id: 19,
        question: "Which wood product has no visible grain pattern?",
        options: ["Pine", "Oak", "MDF", "Plywood"],
        correctAnswer: 2,
        explanation: "MDF (Medium-density fiberboard) has a smooth, uniform surface with no visible wood grain.",
        module: 1
      },
      {
        id: 20,
        question: "What tool is used for creating long straight lines up to 100 feet?",
        options: ["Marking knife", "Chalk line", "Combination square", "Marking gauge"],
        correctAnswer: 1,
        explanation: "A chalk line creates straight lines up to 100 feet when snapped against wood.",
        module: 2
      },
      {
        id: 21,
        question: "What does TPI stand for in saw terminology?",
        options: ["Teeth per inch", "Total pitch indicator", "Tool performance index", "Tooth placement interval"],
        correctAnswer: 0,
        explanation: "TPI stands for Teeth Per Inch, indicating how fine or coarse a saw cut will be.",
        module: 3
      },
      {
        id: 22,
        question: "Which screw type is corrosion resistant for outdoor use?",
        options: ["Wood screws", "Drywall screws", "Deck screws", "Machine screws"],
        correctAnswer: 2,
        explanation: "Deck screws are corrosion resistant with coatings suitable for outdoor exposure.",
        module: 4
      },
      {
        id: 23,
        question: "What type of drill bit creates flat-bottom holes?",
        options: ["Twist bit", "Brad point bit", "Forstner bit", "Countersink bit"],
        correctAnswer: 2,
        explanation: "Forstner bits create flat-bottom holes without a center point.",
        module: 5
      },
      {
        id: 24,
        question: "What should be checked during dry assembly of a table?",
        options: ["Diagonal measurements", "Paint color", "Tool sharpness", "Glue expiration"],
        correctAnswer: 0,
        explanation: "Check diagonal measurements during dry assembly to ensure the frame is square.",
        module: 6
      },
      {
        id: 25,
        question: "At what decibel level is hearing protection required?",
        options: ["70 decibels", "75 decibels", "80 decibels", "85 decibels"],
        correctAnswer: 3,
        explanation: "Hearing protection is required when using power tools that exceed 85 decibels.",
        module: 1
      },
      {
        id: 26,
        question: "What is the carpenter's golden rule for measuring?",
        options: ["Measure once, cut twice", "Measure twice, cut once", "Cut first, measure later", "Estimate and adjust"],
        correctAnswer: 1,
        explanation: "The golden rule is 'Measure twice, cut once' to prevent material waste.",
        module: 2
      },
      {
        id: 27,
        question: "Which chisel type is designed for chopping mortises?",
        options: ["Bench chisels", "Mortise chisels", "Paring chisels", "Corner chisels"],
        correctAnswer: 1,
        explanation: "Mortise chisels are thicker and stronger for chopping mortises.",
        module: 3
      },
      {
        id: 28,
        question: "What is the minimum edge distance for nails?",
        options: ["1/4 nail diameter", "1/2 nail diameter", "Equal to nail diameter", "2 times nail diameter"],
        correctAnswer: 1,
        explanation: "Nails should be placed at least 1/2 their diameter from the edge to prevent splitting.",
        module: 4
      },
      {
        id: 29,
        question: "What is the typical RPM range for routers?",
        options: ["1,000-5,000 RPM", "5,000-10,000 RPM", "10,000-30,000 RPM", "30,000-50,000 RPM"],
        correctAnswer: 2,
        explanation: "Routers typically operate between 10,000 and 30,000 RPM for clean cutting.",
        module: 5
      },
      {
        id: 30,
        question: "What is the recommended sanding grit progression?",
        options: ["40 → 80 → 120", "80 → 120 → 180 → 220", "100 → 150 → 200", "60 → 100 → 150 → 200"],
        correctAnswer: 1,
        explanation: "80 → 120 → 180 → 220 grit progression provides a smooth surface for finishing.",
        module: 6
      },
      {
        id: 31,
        question: "What is the actual dimension of a 1×10 pine board?",
        options: ["3/4\" × 9-1/4\"", "1\" × 10\"", "3/4\" × 9-1/2\"", "1-1/2\" × 9-1/4\""],
        correctAnswer: 0,
        explanation: "A 1×10 board is actually 3/4\" thick × 9-1/4\" wide after planing and drying.",
        module: 6
      },
      {
        id: 32,
        question: "Which safety feature prevents circular saw kickback?",
        options: ["Blade guard", "Riving knife", "Electric brake", "Safety switch"],
        correctAnswer: 1,
        explanation: "A riving knife prevents kickback by keeping the kerf open behind the blade.",
        module: 5
      },
      {
        id: 33,
        question: "Which glue expands as it cures and can fill gaps?",
        options: ["PVA glue", "Polyurethane glue", "Hide glue", "CA glue"],
        correctAnswer: 1,
        explanation: "Polyurethane glue expands as it cures, helping to fill gaps in imperfect joints.",
        module: 4
      },
      {
        id: 34,
        question: "Where should you grip a hammer for maximum swing efficiency?",
        options: ["At the head", "In the middle", "Near the end", "Anywhere comfortable"],
        correctAnswer: 2,
        explanation: "Gripping near the end of the handle maximizes swing efficiency through leverage.",
        module: 3
      },
      {
        id: 35,
        question: "What accuracy is required for finish carpentry?",
        options: ["±1/8 inch", "±1/16 inch", "±1/32 inch", "±1/64 inch"],
        correctAnswer: 1,
        explanation: "Finish carpentry requires ±1/16 inch accuracy for quality visible work.",
        module: 2
      },
      {
        id: 36,
        question: "What removes 95% of airborne dust particles?",
        options: ["Dust mask", "Dust collection system", "Open windows", "Shop vacuum"],
        correctAnswer: 1,
        explanation: "A proper dust collection system should remove at least 95% of airborne particles.",
        module: 1
      },
      {
        id: 37,
        question: "How many coats of polyurethane are typically recommended?",
        options: ["1 coat", "2-3 coats", "4-5 coats", "6+ coats"],
        correctAnswer: 1,
        explanation: "2-3 coats of polyurethane with light sanding between coats provides good protection.",
        module: 6
      },
      {
        id: 38,
        question: "What type of drill is best for driving screws efficiently?",
        options: ["Corded drill", "Cordless drill", "Impact driver", "Hammer drill"],
        correctAnswer: 2,
        explanation: "Impact drivers provide high torque with minimal effort for driving screws.",
        module: 5
      },
      {
        id: 39,
        question: "What size dowel is most commonly used in woodworking?",
        options: ["1/4 inch", "3/8 inch", "1/2 inch", "5/8 inch"],
        correctAnswer: 1,
        explanation: "3/8 inch dowels are the most commonly used size for general woodworking joinery.",
        module: 4
      },
      {
        id: 40,
        question: "What should you do after completing a project to improve future work?",
        options: ["Sell it immediately", "Identify learning points", "Forget about it", "Only show perfect projects"],
        correctAnswer: 1,
        explanation: "Always identify learning points—what worked, what didn't, what you'd do differently.",
        module: 6
      }
    ]
  },

  // 4. ADDITIONAL COURSE METADATA
  certificateDetails: {
    issuer: "Edusanna Carpentry Institute",
    verificationUrl: "https://edusanna.com/verify",
    issuedDate: null, // Will be set upon completion
    credentialId: null, // Will be generated upon completion
    competencies: [
      "Workshop safety and tool identification",
      "Precision measuring and layout techniques",
      "Hand tool selection and proper use",
      "Basic wood joinery and fastening methods",
      "Power tool operation and safety",
      "Simple furniture project planning and construction"
    ]
  },

  // 5. UPGRADE PATH TO DIPLOMA
  upgradePath: {
    targetCourse: "carpentry-diploma",
    title: "Advanced Carpentry & Furniture Design (Diploma)",
    description: "Advanced joinery, furniture design, cabinet making, and professional finishing techniques.",
    fastTrackModules: [1, 2, 3, 4, 5, 6], // Certificate modules that can be fast-tracked
    additionalModules: 4, // Diploma adds 4 more modules
    price: 18,
    prerequisites: ["carpentry-certificate"]
  }
};

export type CarpentryCertificateCourse = typeof carpentryCertificateCourse;
export default carpentryCertificateCourse;

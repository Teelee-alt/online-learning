// Food Safety (Certificate) Course Data
export const foodSafetyCertificateCourse = {
  // COURSE METADATA
  id: "food-safety-certificate",
  title: "Food Safety (Certificate)",
  description: "Learn essential food safety practices, hygiene standards, and contamination prevention to ensure safe food handling in any kitchen environment. Perfect for home cooks, food service workers, and aspiring chefs.",
  duration: "6 weeks",
  timeCommitment: "4-6 hours per week",
  price: 12,
  upgradePrice: 18,
  icon: "🥗",
  badge: "Certificate",
  prerequisites: "None",
  
  // MODULE 1: FOOD SAFETY FOUNDATIONS
  modules: [
    {
      id: 1,
      title: "Food Safety Basics and Why It Matters",
      content: `
# Food Safety Basics and Why It Matters

Food safety prevents people from getting sick from contaminated food. Understanding basic food safety is essential for anyone who handles food.

## What is Food Safety?
Food safety means handling, preparing, and storing food in ways that prevent foodborne illness. This includes proper cleaning, cooking, and storage practices.

## Why Food Safety is Important
Every year, many people get sick from foodborne illnesses. Most of these illnesses can be prevented with proper food safety knowledge. Food safety protects:
- **Your health** - prevents sickness
- **Others' health** - when you cook for family or customers
- **Food quality** - keeps food fresh and tasty
- **Reputation** - especially important for food businesses

## Three Main Food Safety Hazards
1. **Biological hazards** - Bacteria, viruses, and parasites
2. **Chemical hazards** - Cleaning chemicals, pesticides
3. **Physical hazards** - Glass, hair, or plastic in food

## Temperature Danger Zone
The temperature danger zone is between 5°C and 60°C (41°F and 140°F). Bacteria grow fastest in this temperature range. Keep food out of this zone as much as possible.

## Basic Food Safety Rules
- Always wash hands before handling food
- Keep raw and cooked foods separate
- Cook foods to proper temperatures
- Refrigerate foods promptly
- When in doubt, throw it out

These basics form the foundation for all food safety practices you'll learn in this course.
`,
      completed: false,
      quiz: [
        {
          id: 1,
          question: "What is the main purpose of food safety practices?",
          options: [
            "To make food taste better",
            "To prevent foodborne illness",
            "To reduce cooking time",
            "To save money on groceries"
          ],
          correctAnswer: 1,
          explanation: "Food safety primarily prevents foodborne illnesses by controlling how food is handled, prepared, and stored."
        },
        {
          id: 2,
          question: "What temperature range is known as the 'danger zone' for food?",
          options: [
            "0°C to 10°C (32°F to 50°F)",
            "5°C to 60°C (41°F to 140°F)",
            "20°C to 30°C (68°F to 86°F)",
            "100°C to 200°C (212°F to 392°F)"
          ],
          correctAnswer: 1,
          explanation: "The danger zone is 5°C to 60°C (41°F to 140°F) where bacteria grow most rapidly."
        },
        {
          id: 3,
          question: "Which of these is a biological food safety hazard?",
          options: [
            "Broken glass in food",
            "Bleach on food surfaces",
            "Bacteria in undercooked meat",
            "Plastic wrapping in food"
          ],
          correctAnswer: 2,
          explanation: "Bacteria are biological hazards. Broken glass is physical, bleach is chemical, and plastic is physical."
        },
        {
          id: 4,
          question: "How does food safety protect others' health?",
          options: [
            "By making food more nutritious",
            "By preventing sickness when you cook for others",
            "By reducing food costs",
            "By improving cooking skills"
          ],
          correctAnswer: 1,
          explanation: "When you practice food safety while cooking for family, friends, or customers, you prevent them from getting foodborne illnesses."
        },
        {
          id: 5,
          question: "What should you do if you're unsure whether food is safe to eat?",
          options: [
            "Taste a small amount first",
            "Cook it again to be safe",
            "When in doubt, throw it out",
            "Serve it with strong spices"
          ],
          correctAnswer: 2,
          explanation: "The golden rule of food safety is: When in doubt, throw it out. It's better to waste food than risk illness."
        },
        {
          id: 6,
          question: "Which group benefits from food safety practices?",
          options: [
            "Only restaurant customers",
            "Only professional chefs",
            "Anyone who eats food",
            "Only government inspectors"
          ],
          correctAnswer: 2,
          explanation: "Everyone who eats food benefits from food safety practices, whether at home, in restaurants, or anywhere food is served."
        },
        {
          id: 7,
          question: "What is NOT a main category of food safety hazards?",
          options: [
            "Biological hazards",
            "Chemical hazards",
            "Physical hazards",
            "Electrical hazards"
          ],
          correctAnswer: 3,
          explanation: "The three main categories are biological, chemical, and physical. Electrical hazards are not typically a food safety concern."
        },
        {
          id: 8,
          question: "Why should you keep food out of the temperature danger zone?",
          options: [
            "To save energy",
            "To maintain food color",
            "To prevent bacteria growth",
            "To improve food texture"
          ],
          correctAnswer: 2,
          explanation: "Bacteria grow most rapidly in the temperature danger zone, so keeping food out of this range prevents bacterial growth."
        },
        {
          id: 9,
          question: "What does food safety help protect besides health?",
          options: [
            "Only food cost",
            "Only cooking time",
            "Food quality and reputation",
            "Only kitchen cleanliness"
          ],
          correctAnswer: 2,
          explanation: "Food safety protects health, food quality (keeps food fresh), and reputation (especially important for food businesses)."
        },
        {
          id: 10,
          question: "Which practice is a basic food safety rule?",
          options: [
            "Use the same knife for all foods",
            "Leave food out to cool completely",
            "Wash hands before handling food",
            "Store all foods at room temperature"
          ],
          correctAnswer: 2,
          explanation: "Washing hands before handling food is a fundamental food safety practice that prevents contamination."
        },
        {
          id: 11,
          question: "What grows fastest in the temperature danger zone?",
          options: [
            "Vegetables",
            "Fruits",
            "Bacteria",
            "Mold on bread"
          ],
          correctAnswer: 2,
          explanation: "Bacteria grow most rapidly between 5°C and 60°C (41°F and 140°F), which is why this is called the danger zone."
        },
        {
          id: 12,
          question: "Who needs to know about food safety?",
          options: [
            "Only restaurant owners",
            "Only food inspectors",
            "Anyone who handles food",
            "Only professional cooks"
          ],
          correctAnswer: 2,
          explanation: "Anyone who handles, prepares, or stores food should know basic food safety practices."
        },
        {
          id: 13,
          question: "What type of hazard is a cleaning chemical in food?",
          options: [
            "Biological hazard",
            "Chemical hazard",
            "Physical hazard",
            "Temperature hazard"
          ],
          correctAnswer: 1,
          explanation: "Cleaning chemicals are chemical hazards that can contaminate food and make people sick."
        },
        {
          id: 14,
          question: "What should you do with raw and cooked foods?",
          options: [
            "Store them together to save space",
            "Keep them separate",
            "Mix them for better flavor",
            "Cook them at the same time"
          ],
          correctAnswer: 1,
          explanation: "Keeping raw and cooked foods separate prevents cross-contamination, where bacteria from raw food spreads to cooked food."
        },
        {
          id: 15,
          question: "Why is food safety knowledge essential?",
          options: [
            "It's only required by law",
            "It prevents most foodborne illnesses",
            "It makes cooking more fun",
            "It's only for professional kitchens"
          ],
          correctAnswer: 1,
          explanation: "Most foodborne illnesses can be prevented with proper food safety knowledge and practices."
        },
        {
          id: 16,
          question: "What happens to bacteria in the danger zone?",
          options: [
            "They die immediately",
            "They grow slowly",
            "They grow most rapidly",
            "They become harmless"
          ],
          correctAnswer: 2,
          explanation: "Bacteria multiply fastest in the temperature danger zone of 5°C to 60°C (41°F to 140°F)."
        },
        {
          id: 17,
          question: "Which is a physical food hazard?",
          options: [
            "Salmonella bacteria",
            "Pesticide residue",
            "Piece of glass in food",
            "Undercooked chicken"
          ],
          correctAnswer: 2,
          explanation: "Glass in food is a physical hazard. Salmonella is biological, pesticide is chemical, and undercooked chicken can contain biological hazards."
        },
        {
          id: 18,
          question: "What does proper food storage help maintain?",
          options: [
            "Only food temperature",
            "Food safety and quality",
            "Only food appearance",
            "Only kitchen organization"
          ],
          correctAnswer: 1,
          explanation: "Proper food storage maintains both safety (prevents bacterial growth) and quality (keeps food fresh and tasty)."
        },
        {
          id: 19,
          question: "When should you refrigerate foods?",
          options: [
            "The next day",
            "Within 2 hours",
            "When they're completely cool",
            "Only in summer"
          ],
          correctAnswer: 1,
          explanation: "Refrigerate perishable foods within 2 hours (1 hour if the temperature is above 32°C/90°F) to prevent bacterial growth."
        },
        {
          id: 20,
          question: "What is the foundation of all food safety practices?",
          options: [
            "Expensive equipment",
            "Professional training",
            "Basic food safety knowledge",
            "Government regulations"
          ],
          correctAnswer: 2,
          explanation: "Basic food safety knowledge forms the foundation for all other food safety practices and procedures."
        }
      ]
    },

    // MODULE 2: PERSONAL HYGIENE AND CLEANLINESS
    {
      id: 2,
      title: "Personal Hygiene and Cleanliness in the Kitchen",
      content: `
# Personal Hygiene and Cleanliness in the Kitchen

Good personal hygiene and cleanliness are your first defense against food contamination. This module covers essential practices for keeping yourself and your kitchen clean.

## Hand Washing: The Most Important Practice
Proper hand washing removes dirt and bacteria that can contaminate food. Wash hands:
- Before handling any food
- After using the toilet
- After handling raw meat, poultry, or fish
- After touching your face, hair, or body
- After handling garbage
- After cleaning or using chemicals

**Proper hand washing technique:**
1. Wet hands with warm water
2. Apply soap
3. Rub hands together for 20 seconds (sing "Happy Birthday" twice)
4. Scrub between fingers, under nails, and backs of hands
5. Rinse thoroughly
6. Dry with clean towel or air dryer

## Kitchen Clothing and Appearance
- Wear clean clothes when cooking
- Tie back long hair or wear a hairnet
- Remove jewelry that could fall into food
- Keep fingernails short and clean
- Cover cuts or wounds with waterproof bandages
- Avoid cooking when sick with diarrhea, vomiting, or fever

## Cleaning vs. Sanitizing
**Cleaning** removes visible dirt and food particles. **Sanitizing** reduces bacteria to safe levels. You must clean before you sanitize.

**Three-step cleaning process:**
1. **Wash** with hot soapy water
2. **Rinse** with clean water
3. **Sanitize** with approved sanitizer

## Kitchen Surface Cleaning
Clean and sanitize all food contact surfaces:
- Cutting boards (use separate ones for raw meat and vegetables)
- Countertops
- Utensils and equipment
- Sinks and faucets

**When to clean and sanitize:**
- Before starting food preparation
- Between preparing different foods
- After preparing raw meat, poultry, or fish
- After spills or contamination
- At least every 4 hours during continuous use

## Dishwashing Methods
**Manual dishwashing:**
1. Scrape off food particles
2. Wash in hot soapy water (first glasses, then plates, then utensils, then pots)
3. Rinse in clean hot water
4. Air dry or dry with clean towel

**Dishwasher use:**
- Scrape food off first
- Check dishwasher is at correct temperature (minimum 60°C/140°F for sanitizing)
- Let dishes air dry completely

## Preventing Cross-Contamination
Cross-contamination happens when bacteria spread from one food or surface to another. Prevent it by:
- Using separate cutting boards for raw meat and ready-to-eat foods
- Washing hands after handling raw foods
- Cleaning and sanitizing surfaces between tasks
- Storing raw foods below cooked foods in refrigerator
- Using separate utensils for different foods

Remember: Clean hands, clean surfaces, and proper separation keep food safe.
`,
      completed: false,
      quiz: [
        {
          id: 1,
          question: "What is the most important personal hygiene practice in food safety?",
          options: [
            "Wearing clean clothes",
            "Proper hand washing",
            "Keeping hair tied back",
            "Wearing gloves"
          ],
          correctAnswer: 1,
          explanation: "Proper hand washing is the single most important personal hygiene practice to prevent food contamination."
        },
        {
          id: 2,
          question: "How long should you wash your hands with soap?",
          options: [
            "5 seconds",
            "10 seconds",
            "20 seconds",
            "30 seconds"
          ],
          correctAnswer: 2,
          explanation: "Wash hands with soap for at least 20 seconds - about the time it takes to sing 'Happy Birthday' twice."
        },
        {
          id: 3,
          question: "When should you NOT handle food?",
          options: [
            "When you're tired",
            "When you have a cold",
            "When you have diarrhea, vomiting, or fever",
            "When you're in a hurry"
          ],
          correctAnswer: 2,
          explanation: "Do not handle food if you have diarrhea, vomiting, or fever, as you could contaminate the food with illness-causing germs."
        },
        {
          id: 4,
          question: "What is the difference between cleaning and sanitizing?",
          options: [
            "Cleaning uses water, sanitizing uses soap",
            "Cleaning removes dirt, sanitizing reduces bacteria",
            "Cleaning is for floors, sanitizing is for counters",
            "There is no difference"
          ],
          correctAnswer: 1,
          explanation: "Cleaning removes visible dirt and food particles. Sanitizing reduces bacteria to safe levels. You must clean before sanitizing."
        },
        {
          id: 5,
          question: "What should you do with cuts or wounds on your hands?",
          options: [
            "Wash them with soap",
            "Cover them with waterproof bandages",
            "Wear gloves over them",
            "Both B and C are correct"
          ],
          correctAnswer: 3,
          explanation: "Cover cuts or wounds with waterproof bandages and wear gloves if handling food to prevent contamination."
        },
        {
          id: 6,
          question: "How often should food contact surfaces be cleaned during continuous use?",
          options: [
            "Every hour",
            "Every 2 hours",
            "At least every 4 hours",
            "At the end of the day"
          ],
          correctAnswer: 2,
          explanation: "Clean and sanitize food contact surfaces at least every 4 hours during continuous use to prevent bacterial buildup."
        },
        {
          id: 7,
          question: "What is cross-contamination?",
          options: [
            "When food is cooked improperly",
            "When bacteria spread from one food to another",
            "When food is stored at wrong temperature",
            "When cleaning chemicals get in food"
          ],
          correctAnswer: 1,
          explanation: "Cross-contamination occurs when bacteria or other microorganisms are transferred from one food or surface to another."
        },
        {
          id: 8,
          question: "Which cutting board should you use for raw chicken?",
          options: [
            "The same board you use for vegetables",
            "A separate board used only for raw meat",
            "Any clean cutting board",
            "A wooden cutting board only"
          ],
          correctAnswer: 1,
          explanation: "Use separate cutting boards for raw meat and ready-to-eat foods to prevent cross-contamination."
        },
        {
          id: 9,
          question: "What should you do after handling raw meat?",
          options: [
            "Wipe hands on apron",
            "Wash hands thoroughly",
            "Rinse hands with water",
            "Use hand sanitizer only"
          ],
          correctAnswer: 1,
          explanation: "Always wash hands thoroughly with soap and water after handling raw meat, poultry, or fish."
        },
        {
          id: 10,
          question: "What is the three-step cleaning process?",
          options: [
            "Soap, water, dry",
            "Wash, rinse, sanitize",
            "Spray, wipe, air dry",
            "Scrub, rinse, disinfect"
          ],
          correctAnswer: 1,
          explanation: "The proper three-step process is: 1) Wash with hot soapy water, 2) Rinse with clean water, 3) Sanitize with approved sanitizer."
        },
        {
          id: 11,
          question: "Where should raw meat be stored in the refrigerator?",
          options: [
            "On the top shelf",
            "On the door shelves",
            "On the bottom shelf",
            "Anywhere with space"
          ],
          correctAnswer: 2,
          explanation: "Store raw meat on the bottom shelf to prevent juices from dripping onto other foods and causing cross-contamination."
        },
        {
          id: 12,
          question: "What should you do with jewelry while preparing food?",
          options: [
            "Wear it as usual",
            "Remove it or cover it",
            "Only remove rings",
            "It doesn't matter"
          ],
          correctAnswer: 1,
          explanation: "Remove jewelry or cover it with gloves, as jewelry can harbor bacteria and might fall into food."
        },
        {
          id: 13,
          question: "What temperature should dishwasher water reach for sanitizing?",
          options: [
            "40°C (104°F)",
            "60°C (140°F)",
            "80°C (176°F)",
            "100°C (212°F)"
          ],
          correctAnswer: 1,
          explanation: "Dishwasher water should reach at least 60°C (140°F) for proper sanitizing of dishes and utensils."
        },
        {
          id: 14,
          question: "When should you wash your hands?",
          options: [
            "Only before starting work",
            "Before handling food and after specific actions",
            "Only when they look dirty",
            "At the end of the day"
          ],
          correctAnswer: 1,
          explanation: "Wash hands before handling food and after using toilet, handling raw meat, touching your body, handling garbage, or cleaning."
        },
        {
          id: 15,
          question: "What is the purpose of sanitizing?",
          options: [
            "To make surfaces shiny",
            "To remove food particles",
            "To reduce bacteria to safe levels",
            "To eliminate all bacteria completely"
          ],
          correctAnswer: 2,
          explanation: "Sanitizing reduces bacteria to safe levels, as determined by public health standards."
        },
        {
          id: 16,
          question: "How should you dry your hands after washing?",
          options: [
            "On your clothes",
            "On a shared kitchen towel",
            "With a clean towel or air dryer",
            "Let them air dry naturally"
          ],
          correctAnswer: 2,
          explanation: "Dry hands with a clean, single-use towel or air dryer to prevent re-contamination."
        },
        {
          id: 17,
          question: "What should you do with long hair while cooking?",
          options: [
            "Let it hang freely",
            "Tie it back or wear hairnet",
            "Wear a hat",
            "Both B and C are correct"
          ],
          correctAnswer: 3,
          explanation: "Tie back long hair or wear a hairnet to prevent hair from falling into food."
        },
        {
          id: 18,
          question: "What is the order for manual dishwashing?",
          options: [
            "Pots first, then plates",
            "Glasses first, then plates, then utensils",
            "Whatever is dirtiest first",
            "By size from largest to smallest"
          ],
          correctAnswer: 1,
          explanation: "Wash glasses first (cleanest), then plates, then utensils, then pots (usually dirtiest) to prevent cross-contamination in wash water."
        },
        {
          id: 19,
          question: "When should you clean and sanitize surfaces?",
          options: [
            "Only at the end of the day",
            "Before starting and between tasks",
            "When they look dirty",
            "Once a week"
          ],
          correctAnswer: 1,
          explanation: "Clean and sanitize surfaces before starting food preparation and between preparing different types of foods."
        },
        {
          id: 20,
          question: "What prevents bacteria spread in the kitchen?",
          options: [
            "Only expensive equipment",
            "Only government inspections",
            "Clean hands, clean surfaces, and proper separation",
            "Only when cooking for customers"
          ],
          correctAnswer: 2,
          explanation: "Clean hands, clean surfaces, and proper separation of foods are essential to prevent bacteria spread in any kitchen."
        }
      ]
    },

    // MODULE 3: FOOD TEMPERATURE CONTROL
    {
      id: 3,
      title: "Food Temperature Control and Cooking",
      content: `
# Food Temperature Control and Cooking

Controlling food temperatures is critical for food safety. This module covers proper cooking temperatures, cooling methods, and temperature monitoring.

## Why Temperature Control Matters
Bacteria multiply rapidly between 5°C and 60°C (41°F and 140°F). Proper temperature control:
- Kills harmful bacteria during cooking
- Slows bacterial growth during storage
- Prevents food spoilage
- Maintains food quality

## Safe Cooking Temperatures
Different foods require different minimum internal temperatures to ensure safety:

**Poultry (chicken, turkey, duck):** 74°C (165°F)
- Check the thickest part of the meat
- Juices should run clear, not pink

**Ground meats (beef, pork, lamb):** 71°C (160°F)
- Includes burgers, meatballs, meatloaf

**Pork, veal, lamb (whole cuts):** 63°C (145°F)
- Let rest for 3 minutes after cooking

**Fish and seafood:** 63°C (145°F)
- Fish should flake easily with fork

**Eggs and egg dishes:** 71°C (160°F)
- Eggs should be firm, not runny

**Leftovers and casseroles:** 74°C (165°F)
- Reheat thoroughly

## Using Food Thermometers
A food thermometer is essential for food safety. Types include:
- **Digital instant-read** - Quick readings, most common
- **Dial instant-read** - No battery needed
- **Oven-safe** - Can stay in food while cooking
- **Pop-up** - Built into some poultry

**How to use a food thermometer:**
1. Insert into thickest part of food
2. Avoid bone, fat, or gristle
3. Wait for reading to stabilize
4. Clean thermometer between uses

## The Two-Hour Rule
Perishable foods should not be in the temperature danger zone for more than 2 hours (1 hour if above 32°C/90°F). This includes:
- Preparation time
- Serving time
- Cooling time

## Proper Cooling Methods
Cool foods quickly to prevent bacterial growth:

**Two-stage cooling method:**
1. **Stage 1:** Cool from 60°C to 20°C (140°F to 68°F) within 2 hours
2. **Stage 2:** Cool from 20°C to 4°C (68°F to 39°F) within 4 hours

**Cooling techniques:**
- Divide large amounts into smaller containers
- Use shallow pans (no more than 5cm/2 inches deep)
- Stir food to release heat
- Use ice baths for containers
- Leave lids off during initial cooling

## Thawing Foods Safely
Never thaw food at room temperature. Safe methods include:

**In the refrigerator:** 
- Plan ahead (allow 24 hours per 2kg/5lbs)
- Place on bottom shelf to prevent drips

**In cold water:**
- Use leak-proof packaging
- Change water every 30 minutes
- Cook immediately after thawing

**In the microwave:**
- Use "defrost" setting
- Cook immediately after thawing

**During cooking:**
- Small items can be cooked from frozen
- Allow extra cooking time

## Hot Holding Temperatures
Keep hot foods at 60°C (140°F) or above:
- Use chafing dishes, steam tables, or slow cookers
- Stir frequently to distribute heat
- Check temperatures regularly
- Discard food after 4 hours in hot holding

## Cold Holding Temperatures
Keep cold foods at 5°C (41°F) or below:
- Use refrigerators, ice baths, or refrigerated displays
- Monitor refrigerator temperature daily
- Don't overpack refrigerators (allows air circulation)

Remember: Temperature control is your most powerful tool against foodborne illness.
`,
      completed: false,
      quiz: [
        {
          id: 1,
          question: "What is the safe minimum internal temperature for chicken?",
          options: [
            "63°C (145°F)",
            "71°C (160°F)",
            "74°C (165°F)",
            "77°C (170°F)"
          ],
          correctAnswer: 2,
          explanation: "Poultry, including chicken and turkey, must reach 74°C (165°F) to ensure harmful bacteria are destroyed."
        },
        {
          id: 2,
          question: "How long can perishable food stay in the temperature danger zone?",
          options: [
            "30 minutes",
            "1 hour",
            "2 hours",
            "4 hours"
          ],
          correctAnswer: 2,
          explanation: "The two-hour rule states that perishable food should not be in the danger zone (5°C-60°C/41°F-140°F) for more than 2 hours."
        },
        {
          id: 3,
          question: "What tool is essential for checking food safety temperatures?",
          options: [
            "Kitchen timer",
            "Food thermometer",
            "Oven thermometer",
            "Meat thermometer only"
          ],
          correctAnswer: 1,
          explanation: "A food thermometer is essential for accurately checking internal food temperatures to ensure safety."
        },
        {
          id: 4,
          question: "What temperature should hot foods be held at?",
          options: [
            "50°C (122°F) or above",
            "60°C (140°F) or above",
            "70°C (158°F) or above",
            "Room temperature"
          ],
          correctAnswer: 1,
          explanation: "Hot foods must be held at 60°C (140°F) or above to prevent bacterial growth."
        },
        {
          id: 5,
          question: "What is the two-stage cooling method?",
          options: [
            "Cool to room temperature, then refrigerate",
            "Cool from 60°C to 20°C in 2 hours, then to 4°C in 4 hours",
            "Cool in freezer for 1 hour, then refrigerator",
            "Cool with ice, then refrigerate"
          ],
          correctAnswer: 1,
          explanation: "Two-stage cooling: Cool from 60°C to 20°C (140°F to 68°F) within 2 hours, then to 4°C (39°F) within 4 hours."
        },
        {
          id: 6,
          question: "What is a safe method for thawing frozen meat?",
          options: [
            "On the kitchen counter",
            "In the refrigerator",
            "In hot water",
            "In direct sunlight"
          ],
          correctAnswer: 1,
          explanation: "Thawing in the refrigerator is the safest method, though it requires planning ahead."
        },
        {
          id: 7,
          question: "What temperature should ground beef reach when cooked?",
          options: [
            "63°C (145°F)",
            "71°C (160°F)",
            "74°C (165°F)",
            "77°C (170°F)"
          ],
          correctAnswer: 1,
          explanation: "Ground meats, including beef, pork, and lamb, must reach 71°C (160°F) to ensure safety."
        },
        {
          id: 8,
          question: "How deep should food be in containers for proper cooling?",
          options: [
            "No more than 2.5cm (1 inch)",
            "No more than 5cm (2 inches)",
            "No more than 10cm (4 inches)",
            "Any depth is fine"
          ],
          correctAnswer: 1,
          explanation: "Use shallow containers no more than 5cm (2 inches) deep for proper and rapid cooling."
        },
        {
          id: 9,
          question: "What should you do with a food thermometer between uses?",
          options: [
            "Wipe it on a towel",
            "Clean it with soap and water",
            "Rinse it quickly",
            "Nothing, it's clean after use"
          ],
          correctAnswer: 1,
          explanation: "Clean food thermometers with soap and water between uses to prevent cross-contamination."
        },
        {
          id: 10,
          question: "How long can food be safely held hot before discarding?",
          options: [
            "1 hour",
            "2 hours",
            "4 hours",
            "6 hours"
          ],
          correctAnswer: 2,
          explanation: "Discard hot-held food after 4 hours to ensure safety, as bacteria can grow even at hot holding temperatures."
        },
        {
          id: 11,
          question: "What temperature should cold foods be held at?",
          options: [
            "0°C (32°F) or below",
            "5°C (41°F) or below",
            "10°C (50°F) or below",
            "Room temperature"
          ],
          correctAnswer: 1,
          explanation: "Cold foods must be held at 5°C (41°F) or below to prevent bacterial growth."
        },
        {
          id: 12,
          question: "Where should you insert a food thermometer?",
          options: [
            "In the thinnest part",
            "In the thickest part",
            "Near the bone",
            "In the fat"
          ],
          correctAnswer: 1,
          explanation: "Insert the thermometer into the thickest part of the food, away from bone, fat, or gristle."
        },
        {
          id: 13,
          question: "What should you do after thawing food in cold water?",
          options: [
            "Refrigerate it",
            "Cook it immediately",
            "Let it sit for 1 hour",
            "Freeze it again"
          ],
          correctAnswer: 1,
          explanation: "Cook food immediately after thawing in cold water to prevent bacterial growth."
        },
        {
          id: 14,
          question: "What is the temperature danger zone?",
          options: [
            "0°C to 10°C (32°F to 50°F)",
            "5°C to 60°C (41°F to 140°F)",
            "20°C to 30°C (68°F to 86°F)",
            "37°C to 40°C (98.6°F to 104°F)"
          ],
          correctAnswer: 1,
          explanation: "The temperature danger zone is 5°C to 60°C (41°F to 140°F), where bacteria grow rapidly."
        },
        {
          id: 15,
          question: "How often should you change water when thawing in cold water?",
          options: [
            "Every 15 minutes",
            "Every 30 minutes",
            "Every hour",
            "Never change it"
          ],
          correctAnswer: 1,
          explanation: "Change cold water every 30 minutes when thawing food to maintain safe temperature."
        },
        {
          id: 16,
          question: "What temperature should fish reach when cooked?",
          options: [
            "60°C (140°F)",
            "63°C (145°F)",
            "71°C (160°F)",
            "74°C (165°F)"
          ],
          correctAnswer: 1,
          explanation: "Fish and seafood should reach 63°C (145°F) and flake easily with a fork."
        },
        {
          id: 17,
          question: "Why should you stir food while cooling?",
          options: [
            "To improve flavor",
            "To release heat faster",
            "To prevent sticking",
            "To mix ingredients"
          ],
          correctAnswer: 1,
          explanation: "Stirring food helps release heat and cools it more quickly and evenly."
        },
        {
          id: 18,
          question: "What should you do with leftovers when reheating?",
          options: [
            "Heat until warm",
            "Heat to 74°C (165°F)",
            "Heat to boiling",
            "Heat for 2 minutes"
          ],
          correctAnswer: 1,
          explanation: "Reheat leftovers to 74°C (165°F) to ensure any bacteria are destroyed."
        },
        {
          id: 19,
          question: "How can you quickly cool a large pot of soup?",
          options: [
            "Put the whole pot in refrigerator",
            "Divide into smaller containers",
            "Leave it on the stove",
            "Add ice cubes to it"
          ],
          correctAnswer: 1,
          explanation: "Divide large amounts into smaller, shallow containers for faster and safer cooling."
        },
        {
          id: 20,
          question: "What is the most important reason for temperature control?",
          options: [
            "To save energy",
            "To prevent bacterial growth",
            "To improve cooking times",
            "To follow regulations"
          ],
          correctAnswer: 1,
          explanation: "Temperature control prevents bacterial growth, which is the main cause of foodborne illness."
        }
      ]
    },

    // MODULE 4: FOOD STORAGE AND PRESERVATION
    {
      id: 4,
      title: "Food Storage and Preservation",
      content: `
# Food Storage and Preservation

Proper food storage prevents spoilage, maintains quality, and ensures safety. This module covers refrigerator organization, shelf life, and preservation methods.

## Refrigerator Organization
Proper refrigerator organization prevents cross-contamination and maintains food quality:

**Top shelf:** Ready-to-eat foods (leftovers, drinks, yogurt)
**Middle shelf:** Dairy products (milk, cheese, butter)
**Bottom shelf:** Raw meat, poultry, fish (in sealed containers)
**Crisper drawers:** Fruits and vegetables (separate if possible)
**Door shelves:** Condiments, juices, butter (not dairy or eggs)

**Refrigerator temperature:** Keep at 4°C (39°F) or below
**Freezer temperature:** Keep at -18°C (0°F) or below

## Food Storage Times
Different foods have different safe storage times:

**Refrigerator (4°C/39°F or below):**
- Raw poultry: 1-2 days
- Raw ground meats: 1-2 days
- Raw steaks/chops: 3-5 days
- Eggs: 3-5 weeks
- Leftovers: 3-4 days
- Milk: 5-7 days after opening

**Freezer (-18°C/0°F or below):**
- Raw poultry: 9-12 months
- Raw ground meats: 3-4 months
- Raw steaks/chops: 4-12 months
- Cooked meats: 2-6 months
- Vegetables: 8-12 months

## The FIFO Method
FIFO stands for "First In, First Out." This inventory rotation system:
- Prevents food waste
- Ensures food is used while still fresh
- Reduces spoilage

**How to implement FIFO:**
1. Place newer items behind older items
2. Use older items first
3. Label containers with date prepared
4. Regularly check expiration dates

## Proper Food Packaging
Correct packaging maintains food quality and prevents contamination:

**For refrigeration:**
- Use airtight containers
- Cover foods with lids, plastic wrap, or foil
- Store raw meats in leak-proof containers

**For freezing:**
- Use freezer-safe containers or bags
- Remove as much air as possible
- Label with contents and date
- Use within recommended time frames

## Dry Storage Guidelines
Dry storage is for foods that don't require refrigeration:

**Ideal conditions:**
- Cool (10°C-21°C/50°F-70°F)
- Dry (low humidity)
- Dark (away from direct sunlight)
- Well-ventilated

**Dry storage foods:**
- Canned goods (before opening)
- Dry pasta, rice, grains
- Flour, sugar, baking supplies
- Unopened condiments
- Whole, uncut vegetables (potatoes, onions)

## Food Preservation Methods
Preservation extends shelf life and maintains safety:

**Canning:** 
- High heat destroys microorganisms
- Creates vacuum seal
- Use proper canning methods for safety

**Freezing:**
- Stops microbial growth
- Maintains most nutrients
- Texture changes may occur

**Drying/dehydrating:**
- Removes moisture bacteria need
- Concentrates flavors
- Store in airtight containers

**Pickling:**
- Uses acid (vinegar) to prevent growth
- Creates hostile environment for bacteria
- Refrigerate after opening

## Signs of Food Spoilage
Recognize when food is no longer safe:

**Visual signs:**
- Mold growth
- Discoloration
- Slimy texture
- Unusual spots

**Smell signs:**
- Sour or rotten odor
- Chemical smell
- "Off" smells different from normal

**Texture signs:**
- Mushy vegetables
- Sticky meat surface
- Separation in liquids

**When in doubt, throw it out!**

## Special Storage Considerations

**Egg storage:**
- Store in original carton
- Keep in main refrigerator, not door
- Don't wash before storing (removes protective coating)

**Produce storage:**
- Store fruits and vegetables separately
- Some produce gives off gases that speed spoilage
- Wash just before use, not before storage

**Leftover storage:**
- Cool quickly before refrigerating
- Use shallow containers
- Label with date
- Reheat only once

Proper storage keeps food safe, reduces waste, and saves money.
`,
      completed: false,
      quiz: [
        {
          id: 1,
          question: "Where should raw meat be stored in the refrigerator?",
          options: [
            "Top shelf",
            "Middle shelf",
            "Bottom shelf",
            "Door shelf"
          ],
          correctAnswer: 2,
          explanation: "Raw meat should be stored on the bottom shelf in leak-proof containers to prevent drips onto other foods."
        },
        {
          id: 2,
          question: "What does FIFO stand for in food storage?",
          options: [
            "Fast In, Fast Out",
            "First In, First Out",
            "Food In, Food Out",
            "Fresh In, Fresh Out"
          ],
          correctAnswer: 1,
          explanation: "FIFO means First In, First Out - using older items before newer ones to prevent waste."
        },
        {
          id: 3,
          question: "What is the ideal refrigerator temperature?",
          options: [
            "0°C (32°F) or below",
            "4°C (39°F) or below",
            "7°C (45°F) or below",
            "10°C (50°F) or below"
          ],
          correctAnswer: 1,
          explanation: "Refrigerators should be kept at 4°C (39°F) or below to slow bacterial growth."
        },
        {
          id: 4,
          question: "How long can leftovers be safely stored in the refrigerator?",
          options: [
            "1-2 days",
            "3-4 days",
            "5-7 days",
            "10-14 days"
          ],
          correctAnswer: 1,
          explanation: "Leftovers should be used within 3-4 days for safety and quality."
        },
        {
          id: 5,
          question: "What is a visual sign of meat spoilage?",
          options: [
            "Bright red color",
            "Slimy texture",
            "Firm texture",
            "Normal meat smell"
          ],
          correctAnswer: 1,
          explanation: "A slimy texture on meat surface indicates bacterial growth and spoilage."
        },
        {
          id: 6,
          question: "Where should eggs be stored in the refrigerator?",
          options: [
            "In the door",
            "In the original carton in main area",
            "In a bowl on top shelf",
            "It doesn't matter"
          ],
          correctAnswer: 1,
          explanation: "Store eggs in their original carton in the main refrigerator area, not the door, for consistent temperature."
        },
        {
          id: 7,
          question: "What temperature should a freezer be kept at?",
          options: [
            "-12°C (10°F) or below",
            "-18°C (0°F) or below",
            "-23°C (-10°F) or below",
            "-29°C (-20°F) or below"
          ],
          correctAnswer: 1,
          explanation: "Freezers should be kept at -18°C (0°F) or below to properly preserve food."
        },
        {
          id: 8,
          question: "How should you package food for freezing?",
          options: [
            "In any container",
            "In freezer-safe containers with air removed",
            "Loose in freezer bags",
            "Wrapped in paper only"
          ],
          correctAnswer: 1,
          explanation: "Use freezer-safe containers or bags with as much air removed as possible to prevent freezer burn."
        },
        {
          id: 9,
          question: "What is NOT a proper dry storage condition?",
          options: [
            "Cool temperature",
            "Low humidity",
            "Direct sunlight",
            "Good ventilation"
          ],
          correctAnswer: 2,
          explanation: "Dry storage should be away from direct sunlight, which can heat foods and cause spoilage."
        },
        {
          id: 10,
          question: "How long can raw chicken be stored in the refrigerator?",
          options: [
            "1-2 days",
            "3-5 days",
            "5-7 days",
            "8-10 days"
          ],
          correctAnswer: 0,
          explanation: "Raw poultry should be used within 1-2 days of refrigeration for safety."
        },
        {
          id: 11,
          question: "What should you do with food that has an unusual smell?",
          options: [
            "Taste a small amount",
            "Cook it thoroughly",
            "When in doubt, throw it out",
            "Add strong spices"
          ],
          correctAnswer: 2,
          explanation: "Unusual smells often indicate spoilage. When in doubt about food safety, throw it out."
        },
        {
          id: 12,
          question: "Where should ready-to-eat foods be stored?",
          options: [
            "Bottom shelf",
            "Top shelf",
            "With raw meat",
            "In the door"
          ],
          correctAnswer: 1,
          explanation: "Ready-to-eat foods should be stored on the top shelf to prevent contamination from raw foods below."
        },
        {
          id: 13,
          question: "How can you prevent freezer burn?",
          options: [
            "Remove air from packaging",
            "Freeze food uncovered",
            "Store near freezer door",
            "Freeze in large containers"
          ],
          correctAnswer: 0,
          explanation: "Removing air from freezer packaging prevents freezer burn, which causes dry spots and quality loss."
        },
        {
          id: 14,
          question: "What is a sign of vegetable spoilage?",
          options: [
            "Crisp texture",
            "Bright color",
            "Mushy texture",
            "Normal smell"
          ],
          correctAnswer: 2,
          explanation: "Mushy texture in vegetables indicates spoilage and loss of freshness."
        },
        {
          id: 15,
          question: "Why should you label stored food?",
          options: [
            "For organization only",
            "To track storage time and contents",
            "To look professional",
            "Only for commercial kitchens"
          ],
          correctAnswer: 1,
          explanation: "Labeling with contents and date helps track storage time and implement FIFO properly."
        },
        {
          id: 16,
          question: "What preservation method uses acid to prevent bacterial growth?",
          options: [
            "Freezing",
            "Canning",
            "Pickling",
            "Drying"
          ],
          correctAnswer: 2,
          explanation: "Pickling uses acid (usually vinegar) to create an environment where bacteria cannot grow."
        },
        {
          id: 17,
          question: "How should fruits and vegetables be stored?",
          options: [
            "Together in same drawer",
            "Separately if possible",
            "On the counter",
            "In plastic bags without air"
          ],
          correctAnswer: 1,
          explanation: "Store fruits and vegetables separately when possible, as some fruits give off gases that speed vegetable spoilage."
        },
        {
          id: 18,
          question: "What is the main purpose of proper food storage?",
          options: [
            "To save space",
            "To prevent spoilage and maintain safety",
            "To improve flavor",
            "To follow trends"
          ],
          correctAnswer: 1,
          explanation: "Proper storage prevents spoilage, maintains food safety, and preserves quality."
        },
        {
          id: 19,
          question: "When should you wash produce?",
          options: [
            "Before storage",
            "Just before use",
            "When you buy it",
            "After cutting"
          ],
          correctAnswer: 1,
          explanation: "Wash produce just before use to prevent moisture that can cause spoilage during storage."
        },
        {
          id: 20,
          question: "What does proper food storage help reduce?",
          options: [
            "Only food cost",
            "Food waste and safety risks",
            "Only storage space",
            "Only cooking time"
          ],
          correctAnswer: 1,
          explanation: "Proper storage reduces food waste, prevents safety risks, and saves money."
        }
      ]
    },

    // MODULE 5: PREVENTING CROSS-CONTAMINATION
    {
      id: 5,
      title: "Preventing Cross-Contamination",
      content: `
# Preventing Cross-Contamination

Cross-contamination is when harmful bacteria spread from one food, surface, or object to another. Preventing it is crucial for food safety.

## What is Cross-Contamination?
Cross-contamination occurs when:
- Bacteria from raw food touches cooked or ready-to-eat food
- Contaminated utensils touch safe food
- Dirty hands touch clean food
- Contaminated surfaces contact safe food

## Types of Cross-Contamination

**Food-to-food contamination:**
- Raw meat juices dripping onto vegetables
- Using same cutting board for meat then vegetables
- Storing raw meat above ready-to-eat foods

**Equipment-to-food contamination:**
- Using same knife for raw then cooked food
- Contaminated blender or food processor
- Dirty can opener transferring bacteria

**People-to-food contamination:**
- Not washing hands after touching raw food
- Sick food handlers preparing food
- Dirty clothing or aprons touching food

**Surface-to-food contamination:**
- Preparing food on contaminated counter
- Using dirty cleaning cloths on surfaces
- Contaminated sink or faucet handles

## Color-Coded System
Many kitchens use color-coded equipment to prevent cross-contamination:

**Red:** Raw meat
**Yellow:** Raw poultry
**Blue:** Raw fish
**Green:** Fruits and vegetables
**White:** Dairy products
**Brown:** Cooked meats
**Purple:** Allergen-free areas

This system helps staff quickly identify which equipment to use for each food type.

## Separation Strategies

**Storage separation:**
- Store raw meats on bottom shelf
- Use separate containers for different foods
- Keep allergenic foods separated

**Preparation separation:**
- Prepare raw meats at different times than ready-to-eat foods
- Use separate areas for different food types
- Clean and sanitize between tasks

**Equipment separation:**
- Dedicate specific equipment for allergenic foods
- Use separate cutting boards and utensils
- Color-code equipment for easy identification

## Handling Allergens
Food allergens require special attention to prevent cross-contact:

**Top 9 allergens:**
1. Milk
2. Eggs
3. Fish
4. Shellfish
5. Tree nuts
6. Peanuts
7. Wheat
8. Soy
9. Sesame

**Preventing allergen cross-contact:**
- Prepare allergen-free foods first
- Use dedicated equipment for allergen-free preparation
- Store allergenic foods separately
- Label allergenic foods clearly
- Train staff on allergen awareness

## Cleaning to Prevent Contamination

**Proper cleaning sequence:**
1. Clean from least contaminated to most contaminated
2. Start with ready-to-eat foods, end with raw meats
3. Change cleaning water frequently
4. Use separate cloths for different areas

**When to clean and sanitize:**
- Between preparing different foods
- After handling raw meats
- After spills or contamination
- At regular intervals during work

## Personal Practices

**Hand washing:**
- Wash hands after touching any potentially contaminated item
- Use proper hand washing technique
- Dry hands with single-use towels

**Clothing and equipment:**
- Wear clean clothing and aprons
- Change aprons after handling raw foods
- Keep personal items away from food areas

**Illness policy:**
- Do not work with food when ill
- Report symptoms immediately
- Follow exclusion guidelines

## Monitoring and Verification

**Regular checks:**
- Monitor cleaning procedures
- Check equipment color-coding
- Verify separation practices
- Review allergen procedures

**Corrective actions:**
- Retrain staff when procedures aren't followed
- Improve separation if contamination occurs
- Enhance cleaning if issues identified

Preventing cross-contamination requires constant vigilance and good practices from everyone in the kitchen.
`,
      completed: false,
      quiz: [
        {
          id: 1,
          question: "What is cross-contamination?",
          options: [
            "When food is cooked too long",
            "When bacteria spread from one food to another",
            "When food is stored at wrong temperature",
            "When food expires"
          ],
          correctAnswer: 1,
          explanation: "Cross-contamination occurs when harmful bacteria spread from one food, surface, or object to another."
        },
        {
          id: 2,
          question: "What color is often used for raw meat equipment?",
          options: [
            "Red",
            "Green",
            "Blue",
            "White"
          ],
          correctAnswer: 0,
          explanation: "Red is commonly used for raw meat equipment in color-coded kitchen systems."
        },
        {
          id: 3,
          question: "Where should raw meat be stored to prevent drips?",
          options: [
            "Top shelf",
            "Middle shelf",
            "Bottom shelf",
            "Any shelf"
          ],
          correctAnswer: 2,
          explanation: "Store raw meat on the bottom shelf to prevent juices from dripping onto other foods."
        },
        {
          id: 4,
          question: "What should you do with a knife after cutting raw chicken?",
          options: [
            "Wipe it with a cloth",
            "Wash and sanitize it",
            "Rinse it with water",
            "Use it for vegetables"
          ],
          correctAnswer: 1,
          explanation: "Wash and sanitize knives after cutting raw meat before using them for other foods."
        },
        {
          id: 5,
          question: "Which is NOT one of the top 9 food allergens?",
          options: [
            "Milk",
            "Eggs",
            "Peanuts",
            "Rice"
          ],
          correctAnswer: 3,
          explanation: "Rice is not among the top 9 allergens (milk, eggs, fish, shellfish, tree nuts, peanuts, wheat, soy, sesame)."
        },
        {
          id: 6,
          question: "What should you do between preparing different foods?",
          options: [
            "Nothing",
            "Wipe surface with cloth",
            "Clean and sanitize surfaces",
            "Rinse with water"
          ],
          correctAnswer: 2,
          explanation: "Clean and sanitize surfaces between preparing different foods to prevent cross-contamination."
        },
        {
          id: 7,
          question: "What color is typically used for vegetable equipment?",
          options: [
            "Red",
            "Green",
            "Blue",
            "Yellow"
          ],
          correctAnswer: 1,
          explanation: "Green is commonly used for fruits and vegetables in color-coded systems."
        },
        {
          id: 8,
          question: "How can people cause cross-contamination?",
          options: [
            "By wearing clean clothes",
            "By not washing hands after touching raw food",
            "By using separate cutting boards",
            "By storing food properly"
          ],
          correctAnswer: 1,
          explanation: "Not washing hands after handling raw food can transfer bacteria to other foods or surfaces."
        },
        {
          id: 9,
          question: "What should you do first when preparing allergen-free food?",
          options: [
            "Prepare allergenic foods first",
            "Prepare allergen-free foods first",
            "Clean the whole kitchen",
            "It doesn't matter"
          ],
          correctAnswer: 1,
          explanation: "Prepare allergen-free foods first to prevent cross-contact with allergenic foods."
        },
        {
          id: 10,
          question: "What is food-to-food contamination?",
          options: [
            "When dirty hands touch food",
            "When raw meat juices drip onto vegetables",
            "When dirty equipment touches food",
            "When food is undercooked"
          ],
          correctAnswer: 1,
          explanation: "Food-to-food contamination occurs when bacteria from one food transfers to another food."
        },
        {
          id: 11,
          question: "What should you change after handling raw foods?",
          options: [
            "Your shoes",
            "Your apron",
            "Your hairnet",
            "Your gloves only"
          ],
          correctAnswer: 1,
          explanation: "Change aprons after handling raw foods to prevent transferring bacteria to other areas."
        },
        {
          id: 12,
          question: "What color is typically used for raw fish equipment?",
          options: [
            "Red",
            "Green",
            "Blue",
            "Yellow"
          ],
          correctAnswer: 2,
          explanation: "Blue is commonly used for raw fish equipment in color-coded systems."
        },
        {
          id: 13,
          question: "When should you wash your hands to prevent contamination?",
          options: [
            "Only before starting work",
            "After touching any potentially contaminated item",
            "Only when they look dirty",
            "At the end of the day"
          ],
          correctAnswer: 1,
          explanation: "Wash hands after touching any potentially contaminated item, including raw foods, garbage, or your body."
        },
        {
          id: 14,
          question: "What should you use to dry hands in a kitchen?",
          options: [
            "Shared kitchen towel",
            "Your apron",
            "Single-use towels",
            "Air dry only"
          ],
          correctAnswer: 2,
          explanation: "Use single-use towels or air dryers to prevent transferring bacteria from shared towels."
        },
        {
          id: 15,
          question: "What is equipment-to-food contamination?",
          options: [
            "When food is stored improperly",
            "When using same knife for raw then cooked food",
            "When hands are dirty",
            "When food expires"
          ],
          correctAnswer: 1,
          explanation: "Equipment-to-food contamination occurs when contaminated equipment touches safe food."
        },
        {
          id: 16,
          question: "What should you do with allergenic foods?",
          options: [
            "Store them with other foods",
            "Store them separately and label clearly",
            "Prepare them anywhere",
            "No special handling needed"
          ],
          correctAnswer: 1,
          explanation: "Store allergenic foods separately and label them clearly to prevent cross-contact."
        },
        {
          id: 17,
          question: "What cleaning sequence prevents contamination?",
          options: [
            "Most to least contaminated",
            "Least to most contaminated",
            "Alphabetical order",
            "By food type"
          ],
          correctAnswer: 1,
          explanation: "Clean from least contaminated to most contaminated areas to prevent spreading bacteria."
        },
        {
          id: 18,
          question: "What should you do if you're sick with diarrhea?",
          options: [
            "Take medicine and work",
            "Work with gloves only",
            "Do not handle food",
            "Work in non-food areas only"
          ],
          correctAnswer: 2,
          explanation: "Do not handle food if you have diarrhea, vomiting, or fever to prevent contaminating food."
        },
        {
          id: 19,
          question: "What color is typically used for cooked meats?",
          options: [
            "Red",
            "Green",
            "Brown",
            "Purple"
          ],
          correctAnswer: 2,
          explanation: "Brown is commonly used for cooked meats in color-coded systems."
        },
        {
          id: 20,
          question: "What requires constant vigilance in the kitchen?",
          options: [
            "Only cooking temperatures",
            "Only cleaning schedules",
            "Preventing cross-contamination",
            "Only food ordering"
          ],
          correctAnswer: 2,
          explanation: "Preventing cross-contamination requires constant attention and good practices from everyone."
        }
      ]
    },

    // MODULE 6: FOOD SAFETY IN PRACTICE
    {
      id: 6,
      title: "Food Safety in Practice",
      content: `
# Food Safety in Practice

This module brings together all food safety principles into practical applications for home kitchens, food service, and special situations.

## Creating a Food Safety Culture
Food safety works best when everyone follows good practices consistently:

**Key elements of food safety culture:**
- Leadership commitment to safety
- Clear policies and procedures
- Regular training and updates
- Open communication about concerns
- Continuous improvement mindset

**Home kitchen practices:**
- Make food safety a family habit
- Teach children basic safety rules
- Keep kitchen clean and organized
- Regularly check refrigerator temperature
- Update knowledge periodically

## Food Safety Management Systems

**HACCP (Hazard Analysis Critical Control Points):**
A systematic approach to food safety that identifies and controls hazards:
1. Conduct hazard analysis
2. Identify critical control points (CCPs)
3. Establish critical limits
4. Monitor CCPs
5. Establish corrective actions
6. Verify system works
7. Keep records

**Simple home version:**
- Identify risks in your kitchen
- Set control measures (like cooking temperatures)
- Check that controls work
- Fix problems when found

## Special Situations and Populations

**High-risk populations need extra care:**
- Young children (under 5)
- Older adults (over 65)
- Pregnant women
- People with weakened immune systems
- People with chronic illnesses

**Special precautions:**
- Avoid raw or undercooked foods
- Use pasteurized products only
- Extra attention to cleanliness
- Careful temperature control

## Outdoor and Party Food Safety

**Picnics and barbecues:**
- Keep cold foods cold (use ice packs)
- Keep hot foods hot (use insulated containers)
- Don't leave food out more than 2 hours (1 hour if above 32°C/90°F)
- Use separate plates and utensils for raw and cooked foods

**Buffets and parties:**
- Keep hot foods at 60°C (140°F) or above
- Keep cold foods at 5°C (41°F) or below
- Use small serving dishes, refill often
- Provide serving utensils for each dish
- Discard food after 4 hours at room temperature

## Emergency Situations

**Power outages:**
- Keep refrigerator and freezer doors closed
- Refrigerator keeps food cold about 4 hours if unopened
- Full freezer keeps temperature about 48 hours
- Use a thermometer to check temperatures
- When in doubt, throw it out

**Floods and disasters:**
- Discard any food that touched flood water
- Discard food from refrigerator if power out more than 4 hours
- Discard food from freezer if still contains ice crystals
- When in doubt, throw it out

## Food Safety for Specific Foods

**Egg safety:**
- Cook until yolks and whites are firm
- Use pasteurized eggs for raw preparations
- Avoid recipes with raw eggs for high-risk groups
- Refrigerate promptly after cooking

**Seafood safety:**
- Buy from reputable sources
- Keep refrigerated until cooking
- Cook fish to 63°C (145°F)
- Discard shellfish that don't open after cooking

**Produce safety:**
- Wash under running water before eating
- Scrub firm produce with clean brush
- Dry with clean cloth or paper towel
- Remove outer leaves of leafy vegetables

## Continuous Improvement

**Regular checks:**
- Monitor refrigerator and freezer temperatures
- Check food storage dates
- Review cleaning procedures
- Update knowledge and skills

**Staying informed:**
- Follow food safety recalls
- Learn about new risks and controls
- Share knowledge with others
- Practice makes perfect

## Putting It All Together

**Daily food safety routine:**
1. Start with clean hands and surfaces
2. Separate raw and ready-to-eat foods
3. Cook to proper temperatures
4. Chill foods promptly
5. When in doubt, throw it out

**Remember:**
- Food safety is everyone's responsibility
- Good habits prevent illness
- Knowledge protects you and others
- Consistency is key to success

By applying these practices consistently, you create a safe environment for food preparation and enjoyment.
`,
      completed: false,
      quiz: [
        {
          id: 1,
          question: "Who needs extra food safety precautions?",
          options: [
            "Only restaurant workers",
            "Only professional chefs",
            "High-risk populations like young children",
            "Only people with allergies"
          ],
          correctAnswer: 2,
          explanation: "High-risk populations (young children, elderly, pregnant women, immune-compromised) need extra food safety precautions."
        },
        {
          id: 2,
          question: "What does HACCP stand for?",
          options: [
            "Health And Cooking Control Procedures",
            "Hazard Analysis Critical Control Points",
            "Handling And Cleaning Cooking Practices",
            "Home And Commercial Cooking Principles"
          ],
          correctAnswer: 1,
          explanation: "HACCP stands for Hazard Analysis Critical Control Points, a systematic food safety approach."
        },
        {
          id: 3,
          question: "How long can food stay out at a picnic on a hot day (above 32°C/90°F)?",
          options: [
            "30 minutes",
            "1 hour",
            "2 hours",
            "4 hours"
          ],
          correctAnswer: 1,
          explanation: "On hot days above 32°C (90°F), discard food left out more than 1 hour."
        },
        {
          id: 4,
          question: "What should you do during a power outage?",
          options: [
            "Open refrigerator frequently to check food",
            "Keep refrigerator and freezer doors closed",
            "Move food to a neighbor's house",
            "Eat refrigerated food first"
          ],
          correctAnswer: 1,
          explanation: "Keep refrigerator and freezer doors closed during power outages to maintain cold temperatures longer."
        },
        {
          id: 5,
          question: "How long will a full freezer keep food frozen during power outage?",
          options: [
            "12 hours",
            "24 hours",
            "48 hours",
            "72 hours"
          ],
          correctAnswer: 2,
          explanation: "A full freezer will keep food frozen for about 48 hours if the door stays closed."
        },
        {
          id: 6,
          question: "What is a critical control point in HACCP?",
          options: [
            "Any step in food preparation",
            "A point where hazard can be prevented or reduced",
            "The final cooking step only",
            "Only refrigeration steps"
          ],
          correctAnswer: 1,
          explanation: "A critical control point is where a food safety hazard can be prevented, eliminated, or reduced to safe levels."
        },
        {
          id: 7,
          question: "What should you do with flood-damaged food?",
          options: [
            "Wash it thoroughly",
            "Cook it thoroughly",
            "Discard it",
            "Freeze it first"
          ],
          correctAnswer: 2,
          explanation: "Discard any food that has come in contact with flood water due to potential contamination."
        },
        {
          id: 8,
          question: "How can you keep food cold at a picnic?",
          options: [
            "Leave it in the car",
            "Use ice packs or coolers",
            "Keep it in shade only",
            "Cover it with a towel"
          ],
          correctAnswer: 1,
          explanation: "Use ice packs, coolers, or insulated containers to keep cold foods at safe temperatures during picnics."
        },
        {
          id: 9,
          question: "What should you do with buffet food after 4 hours?",
          options: [
            "Refrigerate it",
            "Reheat it",
            "Discard it",
            "Serve it cold"
          ],
          correctAnswer: 2,
          explanation: "Discard buffet food left at room temperature for more than 4 hours (2 hours if above 32°C/90°F)."
        },
        {
          id: 10,
          question: "Who should avoid raw or undercooked foods?",
          options: [
            "Only children",
            "Only elderly",
            "High-risk populations",
            "Everyone"
          ],
          correctAnswer: 2,
          explanation: "High-risk populations should avoid raw or undercooked foods due to higher susceptibility to foodborne illness."
        },
        {
          id: 11,
          question: "What is the first step in creating a food safety culture?",
          options: [
            "Buying expensive equipment",
            "Leadership commitment to safety",
            "Hiring a food safety expert",
            "Getting government certification"
          ],
          correctAnswer: 1,
          explanation: "Leadership commitment to safety is fundamental to creating a strong food safety culture."
        },
        {
          id: 12,
          question: "How should you wash produce?",
          options: [
            "With soap and water",
            "Under running water",
            "In a bowl of water",
            "With bleach solution"
          ],
          correctAnswer: 1,
          explanation: "Wash produce under running water, scrubbing firm produce with a clean brush."
        },
        {
          id: 13,
          question: "What should you do with shellfish that don't open after cooking?",
          options: [
            "Force them open",
            "Discard them",
            "Cook them longer",
            "Eat them anyway"
          ],
          correctAnswer: 1,
          explanation: "Discard shellfish that don't open after cooking, as they may have been dead before cooking and could be unsafe."
        },
        {
          id: 14,
          question: "What temperature should buffet hot foods be kept at?",
          options: [
            "50°C (122°F) or above",
            "60°C (140°F) or above",
            "70°C (158°F) or above",
            "Room temperature"
          ],
          correctAnswer: 1,
          explanation: "Keep buffet hot foods at 60°C (140°F) or above to prevent bacterial growth."
        },
        {
          id: 15,
          question: "How long does a refrigerator keep food cold during power outage?",
          options: [
            "2 hours",
            "4 hours",
            "8 hours",
            "12 hours"
          ],
          correctAnswer: 1,
          explanation: "A refrigerator keeps food cold about 4 hours if the door stays closed during a power outage."
        },
        {
          id: 16,
          question: "What should you use for raw egg preparations for high-risk groups?",
          options: [
            "Fresh eggs only",
            "Organic eggs",
            "Pasteurized eggs",
            "Any eggs"
          ],
          correctAnswer: 2,
          explanation: "Use pasteurized eggs for raw or undercooked egg preparations for high-risk populations."
        },
        {
          id: 17,
          question: "What helps create consistent food safety practices?",
          options: [
            "Only government regulations",
            "Only expensive equipment",
            "Good habits and consistency",
            "Only professional training"
          ],
          correctAnswer: 2,
          explanation: "Good habits practiced consistently create reliable food safety practices in any setting."
        },
        {
          id: 18,
          question: "What should you check regularly in your kitchen?",
          options: [
            "Only stove operation",
            "Only oven temperature",
            "Refrigerator and freezer temperatures",
            "Only counter cleanliness"
          ],
          correctAnswer: 2,
          explanation: "Regularly check refrigerator and freezer temperatures to ensure they maintain safe levels."
        },
        {
          id: 19,
          question: "What is key to food safety success?",
          options: [
            "Only professional certification",
            "Only expensive equipment",
            "Consistent application of knowledge",
            "Only following trends"
          ],
          correctAnswer: 2,
          explanation: "Consistently applying food safety knowledge in daily practices is key to preventing foodborne illness."
        },
        {
          id: 20,
          question: "What is the final rule when unsure about food safety?",
          options: [
            "Ask someone else",
            "Look it up online",
            "When in doubt, throw it out",
            "Taste it first"
          ],
          correctAnswer: 2,
          explanation: "The golden rule of food safety: When in doubt about whether food is safe, throw it out."
        }
      ]
    }
  ],

  // FINAL EXAM (40 questions covering all modules)
  finalExam: {
    id: "food-safety-certificate-exam",
    title: "Food Safety Certificate Final Exam",
    description: "Comprehensive exam covering all modules. Pass with 80% or higher to earn your certificate.",
    passingScore: 80,
    questions: [
      {
        id: 1,
        question: "What is the temperature danger zone for food?",
        options: [
          "0°C to 10°C (32°F to 50°F)",
          "5°C to 60°C (41°F to 140°F)",
          "20°C to 30°C (68°F to 86°F)",
          "37°C to 40°C (98.6°F to 104°F)"
        ],
        correctAnswer: 1,
        explanation: "The temperature danger zone is 5°C to 60°C (41°F to 140°F), where bacteria grow most rapidly."
      },
      {
        id: 2,
        question: "How long should you wash your hands with soap?",
        options: [
          "5 seconds",
          "10 seconds",
          "20 seconds",
          "30 seconds"
        ],
        correctAnswer: 2,
        explanation: "Wash hands with soap for at least 20 seconds to effectively remove bacteria."
      },
      {
        id: 3,
        question: "What is the safe cooking temperature for chicken?",
        options: [
          "63°C (145°F)",
          "71°C (160°F)",
          "74°C (165°F)",
          "77°C (170°F)"
        ],
        correctAnswer: 2,
        explanation: "Poultry must reach 74°C (165°F) to ensure harmful bacteria are destroyed."
      },
      {
        id: 4,
        question: "Where should raw meat be stored in the refrigerator?",
        options: [
          "Top shelf",
          "Middle shelf",
          "Bottom shelf",
          "Door shelf"
        ],
        correctAnswer: 2,
        explanation: "Store raw meat on the bottom shelf to prevent drips from contaminating other foods."
      },
      {
        id: 5,
        question: "What does FIFO stand for?",
        options: [
          "Fast In, Fast Out",
          "First In, First Out",
          "Food In, Food Out",
          "Fresh In, Fresh Out"
        ],
        correctAnswer: 1,
        explanation: "FIFO means First In, First Out - using older items before newer ones."
      },
      {
        id: 6,
        question: "What color is typically used for raw meat equipment?",
        options: [
          "Red",
          "Green",
          "Blue",
          "White"
        ],
        correctAnswer: 0,
        explanation: "Red is commonly used for raw meat equipment in color-coded systems."
      },
      {
        id: 7,
        question: "How long can perishable food stay in the temperature danger zone?",
        options: [
          "30 minutes",
          "1 hour",
          "2 hours",
          "4 hours"
        ],
        correctAnswer: 2,
        explanation: "The two-hour rule: Perishable food should not be in danger zone more than 2 hours."
      },
      {
        id: 8,
        question: "What should you do between preparing different foods?",
        options: [
          "Nothing",
          "Wipe surface with cloth",
          "Clean and sanitize surfaces",
          "Rinse with water"
        ],
        correctAnswer: 2,
        explanation: "Clean and sanitize surfaces between preparing different foods to prevent cross-contamination."
      },
      {
        id: 9,
        question: "What is the ideal refrigerator temperature?",
        options: [
          "0°C (32°F) or below",
          "4°C (39°F) or below",
          "7°C (45°F) or below",
          "10°C (50°F) or below"
        ],
        correctAnswer: 1,
        explanation: "Refrigerators should be kept at 4°C (39°F) or below to slow bacterial growth."
      },
      {
        id: 10,
        question: "What should you do when in doubt about food safety?",
        options: [
          "Ask someone else",
          "Taste a small amount",
          "When in doubt, throw it out",
          "Cook it again"
        ],
        correctAnswer: 2,
        explanation: "The golden rule: When in doubt about whether food is safe, throw it out."
      },
      {
        id: 11,
        question: "What is cross-contamination?",
        options: [
          "When food is overcooked",
          "When bacteria spread from one food to another",
          "When food is stored too long",
          "When food is frozen"
        ],
        correctAnswer: 1,
        explanation: "Cross-contamination occurs when harmful bacteria spread from one food, surface, or object to another."
      },
      {
        id: 12,
        question: "How long can leftovers be stored in the refrigerator?",
        options: [
          "1-2 days",
          "3-4 days",
          "5-7 days",
          "8-10 days"
        ],
        correctAnswer: 1,
        explanation: "Leftovers should be used within 3-4 days for safety and quality."
      },
      {
        id: 13,
        question: "What temperature should hot foods be held at?",
        options: [
          "50°C (122°F) or above",
          "60°C (140°F) or above",
          "70°C (158°F) or above",
          "Room temperature"
        ],
        correctAnswer: 1,
        explanation: "Hot foods must be held at 60°C (140°F) or above to prevent bacterial growth."
      },
      {
        id: 14,
        question: "What should you do after handling raw meat?",
        options: [
          "Wipe hands on apron",
          "Wash hands thoroughly",
          "Use hand sanitizer only",
          "Rinse with water"
        ],
        correctAnswer: 1,
        explanation: "Always wash hands thoroughly with soap and water after handling raw meat."
      },
      {
        id: 15,
        question: "What is a biological food hazard?",
        options: [
          "Broken glass",
          "Cleaning chemical",
          "Bacteria",
          "Plastic wrap"
        ],
        correctAnswer: 2,
        explanation: "Bacteria are biological hazards that can cause foodborne illness."
      },
      {
        id: 16,
        question: "How should you thaw frozen meat safely?",
        options: [
          "On the counter",
          "In the refrigerator",
          "In hot water",
          "In direct sunlight"
        ],
        correctAnswer: 1,
        explanation: "Thawing in the refrigerator is the safest method, though slow."
      },
      {
        id: 17,
        question: "What does HACCP stand for?",
        options: [
          "Health And Cooking Control Procedures",
          "Hazard Analysis Critical Control Points",
          "Handling And Cleaning Cooking Practices",
          "Home And Commercial Cooking Principles"
        ],
        correctAnswer: 1,
        explanation: "HACCP stands for Hazard Analysis Critical Control Points."
      },
      {
        id: 18,
        question: "What temperature should cold foods be held at?",
        options: [
          "0°C (32°F) or below",
          "5°C (41°F) or below",
          "10°C (50°F) or below",
          "Room temperature"
        ],
        correctAnswer: 1,
        explanation: "Cold foods must be held at 5°C (41°F) or below."
      },
      {
        id: 19,
        question: "What should you do with a knife after cutting raw chicken?",
        options: [
          "Wipe it clean",
          "Wash and sanitize it",
          "Use it for vegetables",
          "Rinse with water"
        ],
        correctAnswer: 1,
        explanation: "Wash and sanitize knives after cutting raw meat before using for other foods."
      },
      {
        id: 20,
        question: "What is the two-stage cooling method?",
        options: [
          "Cool to room temperature, then refrigerate",
          "Cool from 60°C to 20°C in 2 hours, then to 4°C in 4 hours",
          "Cool in freezer first",
          "Cool with ice water bath"
        ],
        correctAnswer: 1,
        explanation: "Two-stage cooling: 60°C to 20°C in 2 hours, then to 4°C in 4 hours."
      },
      {
        id: 21,
        question: "Who needs extra food safety precautions?",
        options: [
          "Only restaurant workers",
          "High-risk populations",
          "Only professional chefs",
          "Only adults"
        ],
        correctAnswer: 1,
        explanation: "High-risk populations need extra precautions."
      },
      {
        id: 22,
        question: "What is the freezer temperature?",
        options: [
          "-12°C (10°F) or below",
          "-18°C (0°F) or below",
          "-23°C (-10°F) or below",
          "-29°C (-20°F) or below"
        ],
        correctAnswer: 1,
        explanation: "Freezers should be kept at -18°C (0°F) or below."
      },
      {
        id: 23,
        question: "What should you do if sick with diarrhea?",
        options: [
          "Take medicine and work",
          "Do not handle food",
          "Work with gloves",
          "Work in non-food areas"
        ],
        correctAnswer: 1,
        explanation: "Do not handle food if you have diarrhea, vomiting, or fever."
      },
      {
        id: 24,
        question: "How long can food be held hot before discarding?",
        options: [
          "2 hours",
          "4 hours",
          "6 hours",
          "8 hours"
        ],
        correctAnswer: 1,
        explanation: "Discard hot-held food after 4 hours."
      },
      {
        id: 25,
        question: "What is equipment-to-food contamination?",
        options: [
          "When food is stored wrong",
          "When contaminated equipment touches food",
          "When hands are dirty",
          "When food expires"
        ],
        correctAnswer: 1,
        explanation: "Equipment-to-food contamination occurs when contaminated equipment touches safe food."
      },
      {
        id: 26,
        question: "How should you wash produce?",
        options: [
          "With soap",
          "Under running water",
          "In bleach solution",
          "With vinegar"
        ],
        correctAnswer: 1,
        explanation: "Wash produce under running water."
      },
      {
        id: 27,
        question: "What color is for vegetable equipment?",
        options: [
          "Red",
          "Green",
          "Blue",
          "Yellow"
        ],
        correctAnswer: 1,
        explanation: "Green is typically used for vegetable equipment."
      },
      {
        id: 28,
        question: "What should you check regularly?",
        options: [
          "Only stove",
          "Refrigerator temperature",
          "Only oven",
          "Only counters"
        ],
        correctAnswer: 1,
        explanation: "Regularly check refrigerator and freezer temperatures."
      },
      {
        id: 29,
        question: "How long at picnic on hot day?",
        options: [
          "30 minutes",
          "1 hour",
          "2 hours",
          "3 hours"
        ],
        correctAnswer: 1,
        explanation: "On hot days above 32°C (90°F), discard food left out more than 1 hour."
      },
      {
        id: 30,
        question: "What is cleaning vs sanitizing?",
        options: [
          "Same thing",
          "Cleaning removes dirt, sanitizing reduces bacteria",
          "Cleaning uses chemicals, sanitizing uses soap",
          "Cleaning is for floors, sanitizing for counters"
        ],
        correctAnswer: 1,
        explanation: "Cleaning removes dirt, sanitizing reduces bacteria to safe levels."
      },
      {
        id: 31,
        question: "Where to store eggs?",
        options: [
          "Refrigerator door",
          "Original carton in main area",
          "Countertop",
          "Pantry"
        ],
        correctAnswer: 1,
        explanation: "Store eggs in original carton in main refrigerator area."
      },
      {
        id: 32,
        question: "What temperature for ground beef?",
        options: [
          "63°C (145°F)",
          "71°C (160°F)",
          "74°C (165°F)",
          "77°C (170°F)"
        ],
        correctAnswer: 1,
        explanation: "Ground meats must reach 71°C (160°F)."
      },
      {
        id: 33,
        question: "What is a food safety culture?",
        options: [
          "Only rules",
          "Everyone follows safety practices",
          "Only inspections",
          "Only certifications"
        ],
        correctAnswer: 1,
        explanation: "Food safety culture means everyone follows safety practices consistently."
      },
      {
        id: 34,
        question: "How to cool large pot of soup?",
        options: [
          "Whole pot in refrigerator",
          "Divide into smaller containers",
          "Leave on stove",
          "Add ice"
        ],
        correctAnswer: 1,
        explanation: "Divide into smaller containers for faster cooling."
      },
      {
        id: 35,
        question: "What is a critical control point?",
        options: [
          "Any step",
          "Where hazard can be controlled",
          "Final step only",
          "Cooking only"
        ],
        correctAnswer: 1,
        explanation: "Point where hazard can be prevented, eliminated, or reduced."
      },
      {
        id: 36,
        question: "What for allergen-free foods?",
        options: [
          "Prepare last",
          "Prepare first",
          "No special handling",
          "Store with other foods"
        ],
        correctAnswer: 1,
        explanation: "Prepare allergen-free foods first to prevent cross-contact."
      },
      {
        id: 37,
        question: "How long refrigerator during outage?",
        options: [
          "2 hours",
          "4 hours",
          "6 hours",
          "8 hours"
        ],
        correctAnswer: 1,
        explanation: "Refrigerator keeps food cold about 4 hours if door closed."
      },
      {
        id: 38,
        question: "What color for raw fish?",
        options: [
          "Red",
          "Green",
          "Blue",
          "Yellow"
        ],
        correctAnswer: 2,
        explanation: "Blue is typically used for raw fish equipment."
      },
      {
        id: 39,
        question: "What is key to success?",
        options: [
          "Only equipment",
          "Consistent practices",
          "Only training",
          "Only regulations"
        ],
        correctAnswer: 1,
        explanation: "Consistently applying food safety knowledge is key."
      },
      {
        id: 40,
        question: "What protects others' health?",
        options: [
          "Only cooking well",
          "Food safety practices",
          "Only fresh ingredients",
          "Only clean kitchen"
        ],
        correctAnswer: 1,
        explanation: "Food safety practices protect others when you prepare food for them."
      }
    ]
  }
};

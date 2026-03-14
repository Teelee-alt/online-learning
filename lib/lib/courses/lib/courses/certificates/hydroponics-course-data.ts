export const hydroponicsCertificate = {
  // 1. COURSE METADATA & IDENTIFICATION
  id: "hydroponics-certificate",
  title: "Hydroponics (Certificate)",
  description: "Learn the fundamentals of soilless gardening. Master essential hydroponic techniques for growing healthy plants indoors or in controlled environments without soil.",
  duration: "6 weeks",
  timeCommitment: "4-6 hours per week",
  price: 12,
  upgradePrice: 18,
  icon: "🌱",
  badge: "Certificate",
  
  // 2. MODULE ARCHITECTURE (6 Modules)
  modules: [
    // MODULE 1: Hydroponics Basics
    {
      id: 1,
      title: "Hydroponics Basics",
      content: `
# Introduction to Hydroponics

Hydroponics is a method of growing plants without soil, using mineral nutrient solutions in water. This ancient practice has modern applications for efficient food production.

## What is Hydroponics?

**Definition**: Hydroponics comes from Greek words "hydro" (water) and "ponos" (labor) - meaning "water working." Plants grow with their roots directly in nutrient-rich water or in an inert medium like perlite or coconut coir.

**Key Advantages**:
- Uses up to 90% less water than traditional gardening
- Plants grow 30-50% faster than in soil
- No weeding required
- Can be done anywhere, anytime
- Higher yields in smaller spaces

**Common Misconceptions**:
- Hydroponics is NOT just for illegal plants
- It CAN be affordable and simple to start
- Plants DO get all nutrients they need
- It's NOT overly complicated technology

## How Plants Grow Without Soil

Plants need three main things to grow:
1. **Nutrients** - Minerals dissolved in water
2. **Water** - For transport and cellular processes
3. **Support** - Physical structure to hold plants upright

In hydroponics, we provide:
- **Nutrient solution** - Complete mineral mix in water
- **Growing medium** - Inert material to support roots (optional)
- **Oxygen** - Delivered to roots through aeration

The growing medium (if used) serves only to support the plant and hold moisture - it contains no nutrients itself.

## Basic System Components

Every hydroponic system needs these basic parts:

**Reservoir** - Container holding nutrient solution
**Growing container** - Holds plants and medium
**Nutrient solution** - Water with dissolved minerals
**Delivery system** - Pumps, tubes, or wicks to move solution
**Light source** - Natural or artificial light
**Support structure** - For plants to grow upward

Optional but helpful:
- Air pump and stone for oxygenation
- pH testing kit
- EC/TDS meter for nutrient strength
- Timer for automated watering

## Getting Started Simply

Begin with a simple system like:
**Kratky method** - Passive, no electricity needed
**Deep Water Culture** - Simple active system with air pump
**Wick system** - Basic capillary action system

Start with easy-to-grow plants:
- Lettuce and leafy greens
- Herbs like basil and mint
- Strawberries
- Cherry tomatoes (with more experience)

Avoid starting with:
- Large plants like corn or watermelon
- Root vegetables (carrots, potatoes)
- Plants needing long growing seasons
`,
      completed: false,
      quiz: [
        {
          id: 1,
          question: "What does 'hydroponics' literally mean?",
          options: [
            "Soil gardening",
            "Water working",
            "Plant science",
            "Nutrient farming"
          ],
          correctAnswer: 1,
          explanation: "Hydroponics comes from Greek 'hydro' (water) and 'ponos' (labor) meaning 'water working'."
        },
        {
          id: 2,
          question: "How much less water does hydroponics typically use compared to soil gardening?",
          options: [
            "10-20% less",
            "30-50% less",
            "70-90% less",
            "Uses more water"
          ],
          correctAnswer: 2,
          explanation: "Hydroponics can use up to 90% less water because water is recirculated and not lost to soil evaporation."
        },
        {
          id: 3,
          question: "What is the main purpose of growing medium in hydroponics?",
          options: [
            "To provide nutrients",
            "To support roots and hold moisture",
            "To filter water",
            "To attract beneficial insects"
          ],
          correctAnswer: 1,
          explanation: "Growing medium provides physical support and moisture retention - nutrients come from the solution."
        },
        {
          id: 4,
          question: "Which component is essential in ALL hydroponic systems?",
          options: [
            "Air pump",
            "pH meter",
            "Nutrient solution",
            "Automatic timer"
          ],
          correctAnswer: 2,
          explanation: "All hydroponic systems require nutrient solution - plants cannot grow in plain water alone."
        },
        {
          id: 5,
          question: "Which plant is recommended for hydroponic beginners?",
          options: [
            "Watermelon",
            "Lettuce",
            "Carrots",
            "Corn"
          ],
          correctAnswer: 1,
          explanation: "Lettuce grows quickly and easily in hydroponic systems, making it ideal for beginners."
        },
        {
          id: 6,
          question: "What do plants get from the nutrient solution?",
          options: [
            "Only water",
            "Minerals and water",
            "Only oxygen",
            "Sunlight energy"
          ],
          correctAnswer: 1,
          explanation: "Nutrient solution provides both water and dissolved mineral nutrients that plants need."
        },
        {
          id: 7,
          question: "Which hydroponic method requires no electricity?",
          options: [
            "Deep Water Culture",
            "Kratky method",
            "NFT system",
            "Ebb and Flow"
          ],
          correctAnswer: 1,
          explanation: "The Kratky method is completely passive - no pumps, electricity, or moving parts needed."
        },
        {
          id: 8,
          question: "Why can't plants grow in plain water alone?",
          options: [
            "Water is toxic to plants",
            "They need mineral nutrients",
            "Water doesn't provide support",
            "They need soil bacteria"
          ],
          correctAnswer: 1,
          explanation: "Plants need mineral nutrients (nitrogen, phosphorus, potassium, etc.) which must be added to water."
        },
        {
          id: 9,
          question: "What is NOT a basic component of hydroponic systems?",
          options: [
            "Reservoir",
            "Light source",
            "Soil",
            "Growing container"
          ],
          correctAnswer: 2,
          explanation: "Soil is never used in hydroponics - that's the whole point of soilless gardening!"
        },
        {
          id: 10,
          question: "How much faster do plants typically grow in hydroponics?",
          options: [
            "5-10% faster",
            "10-20% faster",
            "30-50% faster",
            "100% faster"
          ],
          correctAnswer: 2,
          explanation: "Plants grow 30-50% faster because nutrients are immediately available to roots."
        },
        {
          id: 11,
          question: "What is a reservoir in hydroponics?",
          options: [
            "The plant container",
            "Container holding nutrient solution",
            "The air pump",
            "The light fixture"
          ],
          correctAnswer: 1,
          explanation: "The reservoir is the container that holds and stores the nutrient solution."
        },
        {
          id: 12,
          question: "Why is weeding not needed in hydroponics?",
          options: [
            "Weeds can't grow in water",
            "There's no soil for weed seeds",
            "Nutrients kill weeds",
            "Special filters remove weeds"
          ],
          correctAnswer: 1,
          explanation: "Without soil, weed seeds have nowhere to germinate and grow."
        },
        {
          id: 13,
          question: "What does inert growing medium mean?",
          options: [
            "It's alive with microorganisms",
            "It provides nutrients",
            "It doesn't react chemically",
            "It changes pH dramatically"
          ],
          correctAnswer: 2,
          explanation: "Inert medium doesn't chemically react or provide nutrients - it's neutral."
        },
        {
          id: 14,
          question: "Which plant should beginners avoid?",
          options: [
            "Basil",
            "Strawberries",
            "Carrots",
            "Lettuce"
          ],
          correctAnswer: 2,
          explanation: "Root vegetables like carrots are challenging in hydroponics and not recommended for beginners."
        },
        {
          id: 15,
          question: "What provides physical support in hydroponics?",
          options: [
            "Only water",
            "Growing medium or support structures",
            "Nutrient solution",
            "Air bubbles"
          ],
          correctAnswer: 1,
          explanation: "Growing medium (like clay pellets) or trellises provide the physical support plants need."
        },
        {
          id: 16,
          question: "What is the delivery system for?",
          options: [
            "Bringing nutrients to plants",
            "Shipping plants to market",
            "Delivering sunlight",
            "Transporting air"
          ],
          correctAnswer: 0,
          explanation: "Delivery systems (pumps, tubes, wicks) move nutrient solution to plant roots."
        },
        {
          id: 17,
          question: "Why can hydroponics be done anywhere?",
          options: [
            "Plants don't need light",
            "It doesn't need soil or much space",
            "Water is never needed",
            "Nutrients come from air"
          ],
          correctAnswer: 1,
          explanation: "Without need for soil and with efficient space use, hydroponics works indoors, on rooftops, etc."
        },
        {
          id: 18,
          question: "What ancient civilization used hydroponics?",
          options: [
            "Romans",
            "Egyptians",
            "Chinese",
            "Hanging Gardens of Babylon"
          ],
          correctAnswer: 3,
          explanation: "The Hanging Gardens of Babylon are considered an early example of hydroponic principles."
        },
        {
          id: 19,
          question: "What percentage yield increase is typical in hydroponics?",
          options: [
            "No increase",
            "Slight increase",
            "Significant increase",
            "Lower yields"
          ],
          correctAnswer: 2,
          explanation: "Hydroponics typically produces significantly higher yields per square foot than soil gardening."
        },
        {
          id: 20,
          question: "What is the simplest hydroponic system to start with?",
          options: [
            "Aeroponics",
            "Kratky method",
            "Complex multi-tier system",
            "Commercial-scale NFT"
          ],
          correctAnswer: 1,
          explanation: "The Kratky method is the simplest - just a container, lid, net pots, and nutrient solution."
        }
      ]
    },

    // MODULE 2: Essential Nutrients
    {
      id: 2,
      title: "Essential Nutrients",
      content: `
# Plant Nutrition in Hydroponics

Plants need specific nutrients to grow healthy and strong. In hydroponics, we must provide all these nutrients in the water solution.

## Macronutrients - The Big Three

Plants need these in large quantities:

**Nitrogen (N)** - For leaf and stem growth. Deficiency causes yellowing of older leaves. Essential for chlorophyll production.

**Phosphorus (P)** - For root development and flowering. Deficiency causes purple leaves and stunted growth. Important for energy transfer.

**Potassium (K)** - For overall plant health and disease resistance. Deficiency causes brown leaf edges and weak stems. Regulates water balance.

These are represented as N-P-K numbers on fertilizer packages (like 10-10-10 or 5-3-8).

## Secondary Nutrients

Needed in moderate amounts:

**Calcium (Ca)** - For cell wall structure. Deficiency causes blossom end rot in tomatoes and tip burn in lettuce.

**Magnesium (Mg)** - Central atom in chlorophyll molecule. Deficiency causes yellowing between leaf veins.

**Sulfur (S)** - For protein formation. Deficiency causes overall yellowing of young leaves.

## Micronutrients (Trace Elements)

Needed in very small amounts but equally essential:

**Iron (Fe)** - For chlorophyll synthesis. Deficiency causes yellowing between veins of young leaves.

**Manganese (Mn)** - For enzyme activation. Deficiency causes interveinal chlorosis.

**Zinc (Zn)** - For growth hormone production. Deficiency causes small leaves and short internodes.

**Copper (Cu)** - For reproductive growth. Deficiency causes wilting and dark leaves.

**Boron (B)** - For cell division and sugar transport. Deficiency causes brittle leaves and poor fruiting.

**Molybdenum (Mo)** - For nitrogen fixation. Deficiency causes yellowing and curling.

**Chlorine (Cl)** - For osmosis and ionic balance. Rarely deficient.

## Nutrient Solutions

**Complete formulas** - Contain all essential nutrients in balanced ratios. Available as:
- Liquid concentrates (easy to use)
- Powdered mixes (more economical)
- Single-part or multi-part solutions

**Mixing instructions** - Always add nutrients to water, not water to nutrients. Mix thoroughly. Start with half-strength for seedlings.

**pH importance** - Nutrients are only available within specific pH ranges (5.5-6.5 for most plants). Outside this range, plants can't absorb nutrients even if present.

## Reading Fertilizer Labels

**N-P-K numbers** - Represent percentage of nitrogen, phosphorus, and potassium. Example: 10-5-14 means 10% N, 5% P, 14% K.

**Guaranteed analysis** - Lists all nutrients included. Check for complete micronutrient package.

**Derived from** - Shows source materials. Different sources have different characteristics.

## Deficiency Identification

**Pattern recognition**:
- Older leaves affected first: Nitrogen, Phosphorus, Potassium, Magnesium
- Younger leaves affected first: Calcium, Iron, Sulfur, Copper, Manganese
- Whole plant affected: Most micronutrients

**Common symptoms**:
- Yellowing leaves (chlorosis)
- Purple or red discoloration
- Brown leaf edges or spots
- Stunted growth
- Poor flowering or fruiting

**Treatment** - Adjust nutrient solution. Check and correct pH first. Then adjust nutrient strength. Sometimes specific supplements are needed.
`,
      completed: false,
      quiz: [
        {
          id: 1,
          question: "What does nitrogen primarily help with?",
          options: [
            "Root growth",
            "Leaf and stem growth",
            "Flowering",
            "Disease resistance"
          ],
          correctAnswer: 1,
          explanation: "Nitrogen is essential for leaf and stem growth and chlorophyll production."
        },
        {
          id: 2,
          question: "What nutrient deficiency causes purple leaves?",
          options: [
            "Nitrogen",
            "Phosphorus",
            "Potassium",
            "Calcium"
          ],
          correctAnswer: 1,
          explanation: "Phosphorus deficiency often causes purple or reddish discoloration on leaves."
        },
        {
          id: 3,
          question: "What are the N-P-K numbers on fertilizer labels?",
          options: [
            "Nitrogen, Phosphorus, Potassium percentages",
            "Nutrient, Plant, Growth ratings",
            "Number of plants it feeds",
            "pH, EC, TDS values"
          ],
          correctAnswer: 0,
          explanation: "N-P-K represents the percentage of Nitrogen, Phosphorus, and Potassium in the fertilizer."
        },
        {
          id: 4,
          question: "What nutrient is central in chlorophyll molecules?",
          options: [
            "Nitrogen",
            "Iron",
            "Magnesium",
            "Calcium"
          ],
          correctAnswer: 2,
          explanation: "Magnesium is the central atom in chlorophyll, essential for photosynthesis."
        },
        {
          id: 5,
          question: "What pH range is ideal for nutrient absorption?",
          options: [
            "4.0-5.0",
            "5.5-6.5",
            "7.0-8.0",
            "8.5-9.5"
          ],
          correctAnswer: 1,
          explanation: "Most nutrients are best absorbed between pH 5.5 and 6.5 in hydroponics."
        },
        {
          id: 6,
          question: "What deficiency causes blossom end rot in tomatoes?",
          options: [
            "Nitrogen",
            "Calcium",
            "Potassium",
            "Iron"
          ],
          correctAnswer: 1,
          explanation: "Calcium deficiency causes blossom end rot - dark, sunken spots on tomato bottoms."
        },
        {
          id: 7,
          question: "Which leaves show deficiency symptoms first for mobile nutrients?",
          options: [
            "Young leaves",
            "Older leaves",
            "All leaves equally",
            "Only flower buds"
          ],
          correctAnswer: 1,
          explanation: "Mobile nutrients (N, P, K, Mg) show deficiency in older leaves first as plants move them to new growth."
        },
        {
          id: 8,
          question: "What does potassium help with?",
          options: [
            "Leaf growth only",
            "Disease resistance and water balance",
            "Flower color only",
            "Root development only"
          ],
          correctAnswer: 1,
          explanation: "Potassium helps with overall plant health, disease resistance, and water regulation."
        },
        {
          id: 9,
          question: "What micronutrient deficiency causes yellowing between veins?",
          options: [
            "Iron",
            "Zinc",
            "Copper",
            "Boron"
          ],
          correctAnswer: 0,
          explanation: "Iron deficiency causes interveinal chlorosis - yellowing between leaf veins while veins stay green."
        },
        {
          id: 10,
          question: "How should you mix nutrient solutions?",
          options: [
            "Add water to concentrated nutrients",
            "Add nutrients to water",
            "Mix dry powder directly with plants",
            "Any order is fine"
          ],
          correctAnswer: 1,
          explanation: "Always add nutrients to water to prevent precipitation and ensure proper mixing."
        },
        {
          id: 11,
          question: "What does 10-5-14 on fertilizer label mean?",
          options: [
            "10% Nitrogen, 5% Phosphorus, 14% Potassium",
            "10ml, 5ml, 14ml to mix",
            "Lasts 10 weeks, feeds 5 plants, costs $14",
            "pH 10, EC 5, TDS 14"
          ],
          correctAnswer: 0,
          explanation: "The numbers represent percentages of N, P, and K in that order."
        },
        {
          id: 12,
          question: "What nutrient helps with root development?",
          options: [
            "Nitrogen",
            "Phosphorus",
            "Magnesium",
            "Iron"
          ],
          correctAnswer: 1,
          explanation: "Phosphorus is particularly important for root growth and development."
        },
        {
          id: 13,
          question: "What is chlorosis?",
          options: [
            "Root rot",
            "Yellowing of leaves",
            "Purple stems",
            "White flowers"
          ],
          correctAnswer: 1,
          explanation: "Chlorosis is yellowing of leaves due to lack of chlorophyll, often from nutrient deficiency."
        },
        {
          id: 14,
          question: "What should you check first when plants show deficiency?",
          options: [
            "Add more nutrients immediately",
            "Check and adjust pH",
            "Change all the water",
            "Add extra light"
          ],
          correctAnswer: 1,
          explanation: "Always check pH first - nutrients may be present but unavailable if pH is wrong."
        },
        {
          id: 15,
          question: "What nutrient is rarely deficient?",
          options: [
            "Nitrogen",
            "Chlorine",
            "Iron",
            "Calcium"
          ],
          correctAnswer: 1,
          explanation: "Chlorine is rarely deficient as it's needed in tiny amounts and often present in water."
        },
        {
          id: 16,
          question: "What does sulfur help with?",
          options: [
            "Flower production",
            "Protein formation",
            "Root growth",
            "Leaf color only"
          ],
          correctAnswer: 1,
          explanation: "Sulfur is essential for protein synthesis and enzyme function."
        },
        {
          id: 17,
          question: "Why start seedlings with half-strength nutrients?",
          options: [
            "To save money",
            "Seedlings are sensitive to strong solutions",
            "Full strength kills all seedlings",
            "It doesn't matter"
          ],
          correctAnswer: 1,
          explanation: "Young seedlings have delicate roots that can be damaged by full-strength nutrient solutions."
        },
        {
          id: 18,
          question: "What nutrient deficiency causes brittle leaves?",
          options: [
            "Boron",
            "Nitrogen",
            "Potassium",
            "Phosphorus"
          ],
          correctAnswer: 0,
          explanation: "Boron deficiency causes brittle, thick leaves and poor fruit development."
        },
        {
          id: 19,
          question: "What is the role of molybdenum?",
          options: [
            "Flower color",
            "Nitrogen fixation",
            "Stem strength",
            "Seed production"
          ],
          correctAnswer: 1,
          explanation: "Molybdenum helps plants use nitrogen effectively and is involved in nitrogen fixation."
        },
        {
          id: 20,
          question: "What shows micronutrient deficiency first?",
          options: [
            "Older leaves",
            "Young leaves",
            "Roots only",
            "Flowers only"
          ],
          correctAnswer: 1,
          explanation: "Most micronutrients are immobile, so deficiencies appear in new growth first."
        }
      ]
    },

    // MODULE 3: Simple Systems
    {
      id: 3,
      title: "Simple Systems",
      content: `
# Building Your First Hydroponic System

Start with simple, low-cost systems that work well for beginners. These methods require minimal equipment and are easy to understand.

## Kratky Method

**Concept**: Passive system where plants sit in stationary nutrient solution. As plants drink, air space develops for roots to access oxygen.

**Materials needed**:
- Container with lid (bucket, tote, jar)
- Net pots or cups with holes
- Growing medium (clay pellets, rockwool)
- Nutrient solution
- Drill for making holes

**Setup steps**:
1. Cut holes in lid for net pots
2. Fill container with nutrient solution
3. Place plants in net pots with medium
4. Set pots in holes so roots reach solution
5. Maintain air gap between solution and lid

**Best for**: Leafy greens, herbs, lettuce
**Pros**: No electricity, pumps, or moving parts
**Cons**: Not suitable for large plants or long-term crops

## Deep Water Culture (DWC)

**Concept**: Plants float on raft or in net pots with roots submerged in aerated nutrient solution.

**Materials needed**:
- Reservoir (bucket or tote)
- Air pump and air stone
- Net pots and growing medium
- Styrofoam or similar floating platform
- Nutrient solution

**Setup steps**:
1. Fill reservoir with nutrient solution
2. Set up air pump with stone in solution
3. Cut holes in floating platform for net pots
4. Place plants in net pots with medium
5. Float platform on solution

**Best for**: Fast-growing leafy greens, herbs
**Pros**: Excellent oxygen to roots, simple setup
**Cons**: Requires electricity for air pump

## Wick System

**Concept**: Passive system using capillary action to draw nutrient solution from reservoir to growing medium.

**Materials needed**:
- Two containers (one for reservoir, one for plants)
- Wicking material (cotton rope, felt strips)
- Growing medium (coconut coir works well)
- Nutrient solution

**Setup steps**:
1. Place wicks in bottom of growing container
2. Fill with growing medium and plants
3. Place growing container above reservoir
4. Dangle wicks into nutrient solution
5. Wicks draw solution up to roots

**Best for**: Small herbs, lettuce, microgreens
**Pros**: Completely passive, low maintenance
**Cons**: Limited to small plants, can dry out if wicks fail

## Choosing Your First System

**Consider these factors**:
- **Space available**: How much room do you have?
- **Budget**: How much can you spend initially?
- **Time commitment**: How often can you check system?
- **Plants desired**: What do you want to grow?
- **Electricity access**: Do you have power available?

**Beginner recommendations**:
- **Absolute beginner**: Kratky method (no power needed)
- **Small budget**: 5-gallon bucket DWC
- **Limited space**: Window sill wick system
- **Want to learn more**: Simple DWC with air pump

## System Maintenance

**Daily checks**:
- Look at plant health
- Check water level in reservoir
- Ensure pumps are working (if used)

**Weekly tasks**:
- Check and adjust pH
- Check nutrient strength
- Top up water as needed
- Clean debris from reservoir

**Monthly tasks**:
- Change entire nutrient solution
- Clean reservoir thoroughly
- Check and clean equipment
- Trim roots if they're too long

## Troubleshooting Common Issues

**Plants wilting**:
- Check water level
- Ensure air pump working (DWC)
- Check for root rot

**Algae growth**:
- Light is reaching nutrient solution
- Cover reservoir or use opaque container
- Add hydrogen peroxide if severe

**Slow growth**:
- Check nutrient strength
- Verify pH is correct
- Ensure adequate light
- Check temperature

**System smells bad**:
- Possible root rot
- Stagnant water
- Clean system immediately
- Consider adding beneficial bacteria
`,
      completed: false,
      quiz: [
        {
          id: 1,
          question: "Which system requires no electricity?",
          options: [
            "Deep Water Culture",
            "Kratky method",
            "NFT system",
            "Aeroponics"
          ],
          correctAnswer: 1,
          explanation: "The Kratky method is completely passive - no pumps, electricity, or moving parts."
        },
        {
          id: 2,
          question: "What provides oxygen to roots in DWC?",
          options: [
            "Air pump and air stone",
            "Wicking action",
            "Special growing medium",
            "Frequent water changes"
          ],
          correctAnswer: 0,
          explanation: "An air pump and air stone bubble air through the nutrient solution in DWC systems."
        },
        {
          id: 3,
          question: "How does the wick system deliver nutrients?",
          options: [
            "Pumping action",
            "Capillary action",
            "Gravity flow",
            "Manual watering"
          ],
          correctAnswer: 1,
          explanation: "Wick systems use capillary action to draw nutrient solution up to plant roots."
        },
        {
          id: 4,
          question: "What causes algae growth in reservoirs?",
          options: [
            "Too much nutrient",
            "Light reaching the solution",
            "Wrong pH",
            "Cold water"
          ],
          correctAnswer: 1,
          explanation: "Algae needs light to grow - cover reservoirs to block light."
        },
        {
          id: 5,
          question: "What is the air gap for in Kratky method?",
          options: [
            "To save water",
            "For roots to access oxygen",
            "To prevent spills",
            "For adding nutrients"
          ],
          correctAnswer: 1,
          explanation: "The air gap allows roots to access oxygen as the water level drops."
        },
        {
          id: 6,
          question: "Which system is best for absolute beginners?",
          options: [
            "Complex aeroponics",
            "Kratky method",
            "Large commercial NFT",
            "Automated ebb and flow"
          ],
          correctAnswer: 1,
          explanation: "Kratky is simplest - no moving parts, electricity, or complex setup."
        },
        {
          id: 7,
          question: "What material makes good wicks?",
          options: [
            "Plastic tubing",
            "Cotton rope or felt",
            "Metal wire",
            "Wood chips"
          ],
          correctAnswer: 1,
          explanation: "Cotton rope or felt strips work well as wicks due to good capillary action."
        },
        {
          id: 8,
          question: "How often should you check pH?",
          options: [
            "Daily",
            "Weekly",
            "Monthly",
            "Never"
          ],
          correctAnswer: 1,
          explanation: "Check pH weekly - it can drift as plants use nutrients and water evaporates."
        },
        {
          id: 9,
          question: "What indicates root rot?",
          options: [
            "White fluffy roots",
            "Brown slimy roots and bad smell",
            "Very long roots",
            "No roots visible"
          ],
          correctAnswer: 1,
          explanation: "Root rot shows as brown, slimy roots with a foul odor."
        },
        {
          id: 10,
          question: "Why use net pots?",
          options: [
            "They look nice",
            "Allow roots to grow through into solution",
            "They're cheaper than regular pots",
            "They filter water"
          ],
          correctAnswer: 1,
          explanation: "Net pots have holes that allow roots to grow out into the nutrient solution."
        },
        {
          id: 11,
          question: "What growing medium works well in wick systems?",
          options: [
            "Clay pellets only",
            "Coconut coir",
            "Gravel",
            "Sand"
          ],
          correctAnswer: 1,
          explanation: "Coconut coir wicks well and holds moisture, making it ideal for wick systems."
        },
        {
          id: 12,
          question: "How often change entire nutrient solution?",
          options: [
            "Daily",
            "Weekly",
            "Monthly",
            "Every 6 months"
          ],
          correctAnswer: 2,
          explanation: "Change nutrient solution monthly to prevent salt buildup and maintain balance."
        },
        {
          id: 13,
          question: "What plant is NOT suitable for Kratky method?",
          options: [
            "Lettuce",
            "Large tomato plant",
            "Basil",
            "Spinach"
          ],
          correctAnswer: 1,
          explanation: "Large plants like tomatoes need more support and nutrients than simple Kratky provides."
        },
        {
          id: 14,
          question: "Why clean reservoir monthly?",
          options: [
            "For appearance",
            "To prevent disease and algae",
            "Only if it looks dirty",
            "To change plant types"
          ],
          correctAnswer: 1,
          explanation: "Regular cleaning prevents disease, algae, and salt buildup."
        },
        {
          id: 15,
          question: "What helps with algae control?",
          options: [
            "Adding more light",
            "Using opaque containers",
            "Increasing nutrients",
            "Warmer water"
          ],
          correctAnswer: 1,
          explanation: "Opaque containers block light, preventing algae growth."
        },
        {
          id: 16,
          question: "What's the simplest DWC setup?",
          options: [
            "5-gallon bucket with air pump",
            "Complex multi-bucket system",
            "Commercial raft system",
            "Automated control system"
          ],
          correctAnswer: 0,
          explanation: "A single 5-gallon bucket with air pump is the simplest DWC setup."
        },
        {
          id: 17,
          question: "What indicates pump failure in DWC?",
          options: [
            "Plants grow faster",
            "No bubbles in water",
            "Water level rises",
            "Leaves turn purple"
          ],
          correctAnswer: 1,
          explanation: "No bubbles means air pump isn't working, which can quickly suffocate roots."
        },
        {
          id: 18,
          question: "Why trim roots monthly?",
          options: [
            "To make plants shorter",
            "To prevent clogging and encourage new growth",
            "Roots don't need trimming",
            "Only for appearance"
          ],
          correctAnswer: 1,
          explanation: "Trimming prevents roots from clogging systems and encourages fresh root growth."
        },
        {
          id: 19,
          question: "What's a good first project?",
          options: [
            "Commercial lettuce farm",
            "Single lettuce plant in jar",
            "100-plant tomato system",
            "Complex automated herb garden"
          ],
          correctAnswer: 1,
          explanation: "Start with one plant in a simple jar Kratky system to learn basics."
        },
        {
          id: 20,
          question: "What causes bad smells?",
          options: [
            "Healthy roots",
            "Root rot or stagnant water",
            "Fresh nutrient solution",
            "New growing medium"
          ],
          correctAnswer: 1,
          explanation: "Foul odors usually indicate root rot or stagnant, anaerobic conditions."
        }
      ]
    },

    // MODULE 4: Growing Mediums
    {
      id: 4,
      title: "Growing Mediums",
      content: `
# Choosing and Using Growing Mediums

Growing mediums in hydroponics provide physical support for plants while allowing roots to access water, nutrients, and oxygen.

## Characteristics of Good Mediums

**Physical properties**:
- **Particle size**: Affects water retention and aeration
- **Porosity**: Space for air and water
- **Structure stability**: Doesn't break down quickly
- **Weight**: Lightweight is easier to handle

**Chemical properties**:
- **pH neutral**: Doesn't affect solution pH
- **Inert**: Doesn't release chemicals or nutrients
- **Buffer capacity**: Resists pH changes

**Biological properties**:
- **Sterile**: Free from pests and diseases
- **Non-toxic**: Safe for plants and people
- **Sustainable**: Environmentally friendly

## Common Growing Mediums

**Clay Pellets (LECA)**:
- Lightweight Expanded Clay Aggregate
- Round clay balls heated to expand
- **Pros**: Reusable, excellent drainage, neutral pH
- **Cons**: Expensive initially, can be dusty
- **Best for**: All systems, especially flood and drain

**Rockwool**:
- Melted rock spun into fibers
- **Pros**: Excellent water retention, sterile, consistent
- **Cons**: Not biodegradable, can be irritating to handle
- **Best for**: Seed starting, slab systems

**Coconut Coir**:
- Fiber from coconut husks
- **Pros**: Renewable, excellent water retention, good aeration
- **Cons**: Can hold too much water, may need buffering
- **Best for**: Wick systems, container systems

**Perlite**:
- Volcanic glass heated to expand
- **Pros**: Lightweight, excellent aeration, inexpensive
- **Cons**: Dusty, floats in water, breaks down over time
- **Best for**: Mixing with other mediums, seed starting

**Vermiculite**:
- Mica mineral heated to expand
- **Pros**: Excellent water retention, holds nutrients
- **Cons**: Can compact, holds too much water for some plants
- **Best for**: Seed starting, mixing with perlite

**Grow Stones**:
- Recycled glass expanded into porous stones
- **Pros**: Sustainable, excellent water retention and aeration
- **Cons**: Newer product, availability varies
- **Best for**: All systems, similar to clay pellets

## Preparing and Using Mediums

**Clay pellets**:
- Rinse thoroughly to remove dust
- Soak in pH-adjusted water for 24 hours
- Can be reused after sterilizing

**Rockwool**:
- Soak in pH-adjusted water (5.5) for 1-2 hours
- Never squeeze - damages structure
- Handle with gloves to avoid irritation

**Coconut coir**:
- Rehydrate with warm water
- May need calcium buffering (soak in calcium solution)
- Fluff to aerate before use

**Perlite/vermiculite**:
- Use mask when handling dry product
- Moisten to reduce dust
- Often mixed together (50/50)

## Sterilization and Reuse

**Why sterilize**:
- Kills pathogens and pests
- Removes old root material
- Prevents disease transmission

**Methods**:
- **Boiling water**: Pour over medium
- **Bleach solution**: Soak 10% bleach, rinse thoroughly
- **Hydrogen peroxide**: 3% solution soak
- **Baking**: In oven at 200°F for 30 minutes

**When to replace**:
- Medium breaks down into mush
- Salt buildup visible
- Persistent disease problems
- After 2-3 growing cycles typically

## Choosing the Right Medium

**Consider your system**:
- **DWC/NFT**: Clay pellets or net pots alone
- **Ebb and flow**: Clay pellets or grow stones
- **Wick systems**: Coconut coir or peat mixes
- **Aeroponics**: Minimal or no medium needed

**Consider your plants**:
- **Seedlings**: Rockwool cubes or peat pellets
- **Leafy greens**: Lightweight mediums
- **Fruiting plants**: More supportive mediums
- **Large plants**: Heavy, stable mediums

**Consider your budget**:
- **Economical**: Perlite, homemade compost
- **Mid-range**: Coconut coir, vermiculite
- **Premium**: Clay pellets, specialty mixes

## Medium Maintenance

**Daily**: Check moisture level
**Weekly**: Check for algae or mold
**Monthly**: Flush with clean water to remove salts
**Between crops**: Sterilize or replace

**Troubleshooting**:
- **Too wet**: Add more aerating material (perlite)
- **Too dry**: Add water-retentive material (vermiculite)
- **pH drift**: Check medium pH, pre-soak in adjusted water
- **Compaction**: Fluff or replace medium
`,
      completed: false,
      quiz: [
        {
          id: 1,
          question: "What does LECA stand for?",
          options: [
            "Lightweight Expanded Clay Aggregate",
            "Liquid Expanded Clay Alternative",
            "Long-lasting Efficient Clay Addition",
            "Light Experimental Clay Amendment"
          ],
          correctAnswer: 0,
          explanation: "LECA stands for Lightweight Expanded Clay Aggregate - clay balls used as growing medium."
        },
        {
          id: 2,
          question: "What is rockwool made from?",
          options: [
            "Cotton fibers",
            "Melted rock spun into fibers",
            "Recycled paper",
            "Plastic pellets"
          ],
          correctAnswer: 1,
          explanation: "Rockwool is made by melting rock and spinning it into fibers, similar to fiberglass."
        },
        {
          id: 3,
          question: "Why should growing medium be inert?",
          options: [
            "To provide nutrients",
            "To not affect pH or add chemicals",
            "To attract beneficial insects",
            "To change color"
          ],
          correctAnswer: 1,
          explanation: "Inert medium doesn't chemically interact with nutrient solution or affect pH."
        },
        {
          id: 4,
          question: "What medium comes from coconut husks?",
          options: [
            "Perlite",
            "Coconut coir",
            "Vermiculite",
            "Clay pellets"
          ],
          correctAnswer: 1,
          explanation: "Coconut coir is made from the fibrous husks of coconuts."
        },
        {
          id: 5,
          question: "How prepare rockwool before use?",
          options: [
            "Squeeze out water",
            "Soak in pH-adjusted water",
            "Bake in oven",
            "Mix with soil"
          ],
          correctAnswer: 1,
          explanation: "Rockwool should be soaked in pH-adjusted water (5.5) to prepare it for plants."
        },
        {
          id: 6,
          question: "What is perlite?",
          options: [
            "Expanded volcanic glass",
            "Clay balls",
            "Coconut fiber",
            "Rock fibers"
          ],
          correctAnswer: 0,
          explanation: "Perlite is volcanic glass that's heated until it expands like popcorn."
        },
        {
          id: 7,
          question: "Why rinse clay pellets before use?",
          options: [
            "To add nutrients",
            "To remove dust and debris",
            "To make them heavier",
            "To change their color"
          ],
          correctAnswer: 1,
          explanation: "Clay pellets have dust from manufacturing that should be rinsed off."
        },
        {
          id: 8,
          question: "What medium holds the most water?",
          options: [
            "Perlite",
            "Clay pellets",
            "Vermiculite",
            "Gravel"
          ],
          correctAnswer: 2,
          explanation: "Vermiculite has excellent water retention - it can hold 3-4 times its weight in water."
        },
        {
          id: 9,
          question: "How often sterilize reusable medium?",
          options: [
            "Never",
            "Between each crop",
            "Weekly",
            "Daily"
          ],
          correctAnswer: 1,
          explanation: "Sterilize medium between crops to prevent disease transmission."
        },
        {
          id: 10,
          question: "What medium is best for seed starting?",
          options: [
            "Large clay pellets",
            "Rockwool cubes",
            "Gravel",
            "Sand"
          ],
          correctAnswer: 1,
          explanation: "Rockwool cubes provide ideal moisture and support for seed germination."
        },
        {
          id: 11,
          question: "What does 'inert' mean for growing medium?",
          options: [
            "It's alive",
            "It doesn't react chemically",
            "It provides nutrients",
            "It changes pH"
          ],
          correctAnswer: 1,
          explanation: "Inert means chemically inactive - it doesn't provide nutrients or affect pH."
        },
        {
          id: 12,
          question: "Why wear gloves with rockwool?",
          options: [
            "For warmth",
            "To avoid skin irritation",
            "To keep hands clean",
            "It's not necessary"
          ],
          correctAnswer: 1,
          explanation: "Rockwool fibers can irritate skin and lungs - use gloves and mask."
        },
        {
          id: 13,
          question: "What medium is most reusable?",
          options: [
            "Rockwool",
            "Clay pellets",
            "Coconut coir",
            "Peat moss"
          ],
          correctAnswer: 1,
          explanation: "Clay pellets can be sterilized and reused many times without breaking down."
        },
        {
          id: 14,
          question: "What problem with coconut coir?",
          options: [
            "Too expensive",
            "Can hold too much water",
            "Not porous enough",
            "Changes color"
          ],
          correctAnswer: 1,
          explanation: "Coconut coir retains a lot of water, which can be too much for some plants."
        },
        {
          id: 15,
          question: "What is vermiculite?",
          options: [
            "Expanded mica mineral",
            "Volcanic glass",
            "Clay balls",
            "Coconut fiber"
          ],
          correctAnswer: 0,
          explanation: "Vermiculite is mica mineral that expands when heated, creating water-absorbent flakes."
        },
        {
          id: 16,
          question: "Why pre-soak clay pellets?",
          options: [
            "To make them sink",
            "To saturate them and adjust pH",
            "To add nutrients",
            "To clean them only"
          ],
          correctAnswer: 1,
          explanation: "Soaking saturates pellets and adjusts them to proper pH before planting."
        },
        {
          id: 17,
          question: "What indicates medium needs replacement?",
          options: [
            "Still looks good",
            "Breaks down into mush",
            "Plants growing well",
            "No signs at all"
          ],
          correctAnswer: 1,
          explanation: "When medium breaks down and loses its structure, it needs replacement."
        },
        {
          id: 18,
          question: "What medium for wick systems?",
          options: [
            "Clay pellets only",
            "Coconut coir",
            "Large gravel",
            "Perlite alone"
          ],
          correctAnswer: 1,
          explanation: "Coconut coir wicks water well and holds moisture, perfect for wick systems."
        },
        {
          id: 19,
          question: "How sterilize with hydrogen peroxide?",
          options: [
            "Pour pure peroxide",
            "Soak in 3% solution",
            "Spray lightly",
            "Mix with nutrients"
          ],
          correctAnswer: 1,
          explanation: "A 3% hydrogen peroxide solution effectively sterilizes without harsh chemicals."
        },
        {
          id: 20,
          question: "What medium is most sustainable?",
          options: [
            "Rockwool",
            "Coconut coir",
            "Perlite",
            "Vermiculite"
          ],
          correctAnswer: 1,
          explanation: "Coconut coir is a renewable byproduct of coconut industry, making it very sustainable."
        }
      ]
    },

    // MODULE 5: Plant Selection and Care
    {
      id: 5,
      title: "Plant Selection and Care",
      content: `
# Choosing and Growing Plants Successfully

Not all plants thrive equally in hydroponics. Learn which plants work best and how to care for them throughout their growth cycle.

## Best Plants for Beginners

**Leafy Greens (easiest)**:
- **Lettuce**: All types grow well, ready in 4-6 weeks
- **Spinach**: Fast-growing, loves cool conditions
- **Kale**: Hardy and productive
- **Swiss Chard**: Colorful and continuous harvest

**Herbs (very successful)**:
- **Basil**: Loves hydroponics, grows vigorously
- **Mint**: Almost too successful - can take over
- **Cilantro**: Fast-growing but bolts in heat
- **Parsley**: Slow to start but then productive

**Other easy crops**:
- **Strawberries**: Small varieties work well
- **Green onions**: Regrow from kitchen scraps
- **Peas**: Dwarf varieties for small spaces
- **Radishes**: Quick-growing root crop

## Plants to Avoid Initially

**Difficult for beginners**:
- **Large fruiting plants**: Tomatoes, peppers (need support, more nutrients)
- **Root vegetables**: Carrots, potatoes (need deep systems)
- **Vining plants**: Cucumbers, melons (need lots of space)
- **Long-season crops**: Corn, pumpkins (take months)

**Wait until you have experience with**:
- **Tomatoes**: Need pruning, support, careful nutrient management
- **Peppers**: Similar to tomatoes but slower
- **Cucumbers**: Rapid growth needs frequent attention
- **Beans**: Need vertical space and proper support

## Starting Plants

**From seeds**:
- Use rockwool cubes or peat pellets
- Keep moist but not soggy
- Provide warmth for germination (70-80°F)
- Use humidity dome to retain moisture
- Provide light as soon as sprouts appear

**From cuttings**:
- Take 4-6 inch cuttings from healthy plants
- Remove lower leaves
- Place in water or moist medium
- Roots form in 1-3 weeks
- Transplant to system when roots are 1-2 inches long

**Transplanting seedlings**:
- Handle gently by leaves, not stems
- Ensure roots reach nutrient solution
- Support with growing medium
- Protect from strong light for first few days

## Plant Lifecycle Care

**Seedling stage (0-2 weeks)**:
- Use half-strength nutrients
- Keep humidity high
- Provide 16-18 hours of light daily
- Maintain 70-75°F temperature

**Vegetative stage (2-6 weeks)**:
- Increase to full-strength nutrients
- More nitrogen for leaf growth
- 14-16 hours of light daily
- Prune as needed for shape

**Flowering/fruiting stage**:
- Switch to bloom formula (higher phosphorus)
- 12 hours light for flowering plants
- Pollinate flowers if needed (gently shake or use brush)
- Support heavy fruits with ties or nets

## Common Problems and Solutions

**Leggy seedlings**:
- **Cause**: Insufficient light
- **Solution**: Move lights closer, increase duration

**Yellow leaves**:
- **Cause**: Nutrient deficiency or pH issue
- **Solution**: Check pH, adjust nutrients

**Leaf burn**:
- **Cause**: Nutrient solution too strong
- **Solution**: Dilute solution, flush system

**Poor fruiting**:
- **Cause**: Lack of pollination or incorrect nutrients
- **Solution**: Hand pollinate, use bloom formula

**Root problems**:
- **Cause**: Poor oxygenation or disease
- **Solution**: Increase aeration, check for root rot

## Harvesting Techniques

**Leafy greens**:
- Harvest outer leaves first
- Cut about 1 inch above base
- Plants will regrow for multiple harvests
- Best harvested in morning

**Herbs**:
- Pinch off tips to encourage branching
- Never remove more than 1/3 of plant at once
- Regular harvesting promotes bushier growth

**Fruiting plants**:
- Harvest when fully colored but firm
- Use clean scissors or knife
- Check daily when ripening begins
- Harvest regularly to encourage more fruit

## Succession Planting

**Continuous harvest strategy**:
- Start new seeds every 2-4 weeks
- Have plants at different growth stages
- Always have something ready to harvest
- Rotate crops to prevent nutrient depletion

**Planning your garden**:
- Map out planting dates
- Consider growth times
- Account for seasonal changes
- Keep records of what works best
`,
      completed: false,
      quiz: [
        {
          id: 1,
          question: "Which plant is easiest for hydroponic beginners?",
          options: [
            "Tomatoes",
            "Lettuce",
            "Carrots",
            "Corn"
          ],
          correctAnswer: 1,
          explanation: "Lettuce grows quickly and easily in hydroponics with minimal problems."
        },
        {
          id: 2,
          question: "How long does lettuce typically take to harvest?",
          options: [
            "2-3 weeks",
            "4-6 weeks",
            "8-10 weeks",
            "12-16 weeks"
          ],
          correctAnswer: 1,
          explanation: "Most lettuce varieties are ready to harvest in 4-6 weeks in optimal conditions."
        },
        {
          id: 3,
          question: "What herb grows almost too well in hydroponics?",
          options: [
            "Basil",
            "Mint",
            "Cilantro",
            "Parsley"
          ],
          correctAnswer: 1,
          explanation: "Mint grows so vigorously it can take over a system if not controlled."
        },
        {
          id: 4,
          question: "What strength nutrients for seedlings?",
          options: [
            "Double strength",
            "Half strength",
            "Full strength",
            "No nutrients"
          ],
          correctAnswer: 1,
          explanation: "Seedlings have delicate roots and should start with half-strength nutrient solution."
        },
        {
          id: 5,
          question: "What causes leggy seedlings?",
          options: [
            "Too much light",
            "Insufficient light",
            "Wrong nutrients",
            "Cold temperature"
          ],
          correctAnswer: 1,
          explanation: "Leggy seedlings stretch toward light when they don't get enough."
        },
        {
          id: 6,
          question: "How harvest leafy greens for regrowth?",
          options: [
            "Pull up whole plant",
            "Cut about 1 inch above base",
            "Remove all leaves at once",
            "Only harvest once"
          ],
          correctAnswer: 1,
          explanation: "Cutting above the base allows plants to regrow for multiple harvests."
        },
        {
          id: 7,
          question: "What plant should beginners avoid?",
          options: [
            "Basil",
            "Large tomato plants",
            "Lettuce",
            "Strawberries"
          ],
          correctAnswer: 1,
          explanation: "Tomatoes need experience with support, pruning, and nutrient management."
        },
        {
          id: 8,
          question: "How much light for seedlings?",
          options: [
            "8-10 hours daily",
            "16-18 hours daily",
            "24 hours constant",
            "4-6 hours daily"
          ],
          correctAnswer: 1,
          explanation: "Seedlings need 16-18 hours of light daily for strong growth."
        },
        {
          id: 9,
          question: "What to increase for flowering plants?",
          options: [
            "Nitrogen",
            "Phosphorus",
            "Water only",
            "Light duration"
          ],
          correctAnswer: 1,
          explanation: "Flowering plants need more phosphorus for flower and fruit development."
        },
        {
          id: 10,
          question: "What is succession planting?",
          options: [
            "Planting only once a year",
            "Continuous planting for steady harvest",
            "Planting in straight rows",
            "Only planting one type"
          ],
          correctAnswer: 1,
          explanation: "Succession planting means starting new plants regularly for continuous harvest."
        },
        {
          id: 11,
          question: "How start plants from cuttings?",
          options: [
            "Plant directly in system",
            "Root in water first",
            "Only from seeds",
            "Buy established plants only"
          ],
          correctAnswer: 1,
          explanation: "Cuttings root easily in water before transplanting to hydroponic system."
        },
        {
          id: 12,
          question: "What temperature for germination?",
          options: [
            "50-60°F",
            "70-80°F",
            "90-100°F",
            "40-50°F"
          ],
          correctAnswer: 1,
          explanation: "Most seeds germinate best at 70-80°F (21-27°C)."
        },
        {
          id: 13,
          question: "How pollinate indoor plants?",
          options: [
            "Wait for bees",
            "Gently shake plants or use brush",
            "Don't need pollination",
            "Spray with water"
          ],
          correctAnswer: 1,
          explanation: "Indoor plants need help pollinating - gently shake or use small brush."
        },
        {
          id: 14,
          question: "What harvest method for herbs?",
          options: [
            "Remove all leaves",
            "Pinch tips to encourage branching",
            "Pull up whole plant",
            "Only harvest once yearly"
          ],
          correctAnswer: 1,
          explanation: "Pinching herb tips encourages bushier growth and more harvests."
        },
        {
          id: 15,
          question: "What plant regrows from kitchen scraps?",
          options: [
            "Tomatoes",
            "Green onions",
            "Carrots",
            "Potatoes"
          ],
          correctAnswer: 1,
          explanation: "Green onion bottoms regrow easily in water or hydroponic systems."
        },
        {
          id: 16,
          question: "When harvest for best flavor?",
          options: [
            "Midday",
            "Early morning",
            "Late evening",
            "Anytime"
          ],
          correctAnswer: 1,
          explanation: "Early morning harvest provides best flavor and crispness."
        },
        {
          id: 17,
          question: "What is a humidity dome for?",
          options: [
            "To block light",
            "To retain moisture for seeds",
            "To add nutrients",
            "For decoration"
          ],
          correctAnswer: 1,
          explanation: "Humidity domes keep moisture in for seed germination and seedling growth."
        },
        {
          id: 18,
          question: "How much plant remove when harvesting herbs?",
          options: [
            "Up to 90%",
            "No more than 1/3",
            "All leaves",
            "Only flowers"
          ],
          correctAnswer: 1,
          explanation: "Never remove more than 1/3 of an herb plant to allow recovery."
        },
        {
          id: 19,
          question: "What indicates plant ready to harvest?",
          options: [
            "Just planted",
            "Full color but firm",
            "Overripe and soft",
            "Still flowering"
          ],
          correctAnswer: 1,
          explanation: "Harvest when fully colored but still firm for best quality and storage."
        },
        {
          id: 20,
          question: "Why keep planting records?",
          options: [
            "For decoration",
            "To learn what works best",
            "Only for commercial growers",
            "Not necessary"
          ],
          correctAnswer: 1,
          explanation: "Records help you learn from experience and improve future crops."
        }
      ]
    },

    // MODULE 6: System Maintenance
    {
      id: 6,
      title: "System Maintenance",
      content: `
# Keeping Your System Healthy

Regular maintenance prevents problems and ensures healthy plant growth. Learn daily, weekly, and monthly tasks for hydroponic success.

## Daily Maintenance Tasks

**Visual inspection**:
- Check plant health and growth
- Look for pests or disease signs
- Ensure all plants look vibrant

**System checks**:
- Verify water level in reservoir
- Check pumps are running (if used)
- Look for leaks or drips
- Ensure lights are working properly

**Quick adjustments**:
- Top up water if needed
- Remove dead leaves or debris
- Adjust plant positions if crowding

**Time required**: 5-10 minutes daily

## Weekly Maintenance Tasks

**Water quality testing**:
- Test pH (ideal: 5.5-6.5)
- Test EC/TDS for nutrient strength
- Adjust as needed with pH up/down
- Add nutrients if strength is low

**Solution management**:
- Top up with fresh water
- Add nutrients if concentration drops
- Check solution temperature (65-75°F ideal)

**Plant care**:
- Prune as needed
- Check for and remove pests
- Train plants (tie up, spread out)
- Harvest ready crops

**System cleaning**:
- Remove algae from visible surfaces
- Clean out debris from reservoir
- Check and clean filters

**Time required**: 30-60 minutes weekly

## Monthly Maintenance Tasks

**Complete solution change**:
- Drain old nutrient solution
- Clean reservoir thoroughly
- Mix fresh nutrient solution
- Refill system

**Deep cleaning**:
- Clean all system components
- Sterilize if needed (bleach solution)
- Check and clean pumps, tubes
- Replace filters if used

**Equipment check**:
- Test all electrical components
- Check timers and controllers
- Inspect for wear or damage
- Lubricate moving parts if needed

**Plant evaluation**:
- Assess overall plant health
- Consider rotating or replacing crops
- Plan next planting cycle
- Record observations and learnings

**Time required**: 2-3 hours monthly

## Seasonal Considerations

**Summer maintenance**:
- Watch for high water temperatures
- Increase aeration if water gets warm
- Check more frequently for algae
- May need to change solution more often

**Winter maintenance**:
- Prevent cold damage to plants
- Maintain water temperature
- Watch for condensation issues
- Consider supplemental heating if needed

**Spring/fall transitions**:
- Adjust lighting schedules
- Change crops for season
- Prepare for different pest pressures
- Adjust nutrient formulas if needed

## Problem Prevention

**Algae control**:
- Use opaque containers
- Cover exposed water surfaces
- Maintain proper nutrient levels
- Add beneficial bacteria if needed

**Root health**:
- Ensure adequate oxygenation
- Maintain proper water temperature
- Watch for root discoloration
- Add hydrogen peroxide preventively

**Pest management**:
- Inspect plants regularly
- Isolate new plants before adding
- Use yellow sticky traps
- Introduce beneficial insects if needed

**Disease prevention**:
- Maintain clean system
- Don't overcrowd plants
- Ensure good air circulation
- Remove sick plants immediately

## Record Keeping

**What to record**:
- Planting dates and varieties
- Nutrient formulas and changes
- pH and EC readings
- Problems and solutions
- Harvest dates and yields
- System modifications

**Why keep records**:
- Track what works best
- Identify patterns in problems
- Improve future crops
- Share knowledge with others

**Simple record system**:
- Notebook by the system
- Digital spreadsheet
- Gardening app
- Photos with dates

## Troubleshooting Common Issues

**Problem: Plants wilting**
- Check water level and pumps
- Look for root problems
- Check temperature extremes

**Problem: Yellow leaves**
- Test and adjust pH
- Check nutrient strength
- Look for nutrient deficiencies

**Problem: Slow growth**
- Check light intensity and duration
- Verify proper temperature
- Ensure adequate nutrients

**Problem: Algae everywhere**
- Block light from reaching water
- Reduce nutrient concentration slightly
- Clean thoroughly and restart

**Problem: System smells bad**
- Check for root rot
- Clean system immediately
- Improve aeration
- Consider adding beneficial bacteria

## Long-term System Care

**Component replacement**:
- Air pumps: Replace every 1-2 years
- Air stones: Replace every 6-12 months
- Tubing: Replace when stiff or discolored
- Net pots: Replace if cracked or damaged
- Growing medium: Replace or sterilize between crops

**System upgrades**:
- Add automation (timers, controllers)
- Improve lighting
- Add monitoring (pH, EC sensors)
- Expand system size
- Add backup systems

**Continuous learning**:
- Try new plant varieties
- Experiment with different nutrients
- Attend workshops or classes
- Join hydroponic communities
- Read books and online resources
`,
      completed: false,
      quiz: [
        {
          id: 1,
          question: "How often check pH?",
          options: [
            "Daily",
            "Weekly",
            "Monthly",
            "Never"
          ],
          correctAnswer: 1,
          explanation: "Check pH weekly as it can drift with plant uptake and evaporation."
        },
        {
          id: 2,
          question: "What is ideal water temperature?",
          options: [
            "50-60°F",
            "65-75°F",
            "80-90°F",
            "95-100°F"
          ],
          correctAnswer: 1,
          explanation: "65-75°F (18-24°C) is ideal for most plants and prevents root problems."
        },
        {
          id: 3,
          question: "How often change entire nutrient solution?",
          options: [
            "Daily",
            "Weekly",
            "Monthly",
            "Every 6 months"
          ],
          correctAnswer: 2,
          explanation: "Change solution monthly to prevent salt buildup and maintain balance."
        },
        {
          id: 4,
          question: "What helps prevent algae?",
          options: [
            "More light",
            "Opaque containers",
            "Warmer water",
            "More nutrients"
          ],
          correctAnswer: 1,
          explanation: "Opaque containers block light that algae need to grow."
        },
        {
          id: 5,
          question: "What daily task is most important?",
          options: [
            "Complete cleaning",
            "Visual inspection",
            "Change solution",
            "Adjust pH dramatically"
          ],
          correctAnswer: 1,
          explanation: "Daily visual inspection catches problems early before they become serious."
        },
        {
          id: 6,
          question: "When to add hydrogen peroxide?",
          options: [
            "Daily as fertilizer",
            "For root health prevention",
            "Never use it",
            "Only for algae"
          ],
          correctAnswer: 1,
          explanation: "Small amounts of hydrogen peroxide can improve root health and prevent rot."
        },
        {
          id: 7,
          question: "How often replace air stones?",
          options: [
            "Weekly",
            "Monthly",
            "Every 6-12 months",
            "Never replace"
          ],
          correctAnswer: 2,
          explanation: "Air stones become clogged and less efficient over 6-12 months."
        },
        {
          id: 8,
          question: "What indicates root problems?",
          options: [
            "White fluffy roots",
            "Brown slimy roots",
            "Very long roots",
            "No visible roots"
          ],
          correctAnswer: 1,
          explanation: "Brown, slimy roots indicate rot or disease and need immediate attention."
        },
        {
          id: 9,
          question: "Why keep records?",
          options: [
            "For decoration",
            "To track what works",
            "Only for commercial growers",
            "Not necessary"
          ],
          correctAnswer: 1,
          explanation: "Records help you learn from experience and improve future results."
        },
        {
          id: 10,
          question: "What summer issue to watch for?",
          options: [
            "Water too cold",
            "Water too warm",
            "Too much rain",
            "Not enough snow"
          ],
          correctAnswer: 1,
          explanation: "Warm water holds less oxygen and can promote root problems in summer."
        },
        {
          id: 11,
          question: "How clean reservoir monthly?",
          options: [
            "Just rinse with water",
            "Thorough scrub with mild cleaner",
            "Don't clean - it's natural",
            "Only if looks dirty"
          ],
          correctAnswer: 1,
          explanation: "Monthly thorough cleaning prevents disease and salt buildup."
        },
        {
          id: 12,
          question: "What helps with pest management?",
          options: [
            "Ignore them",
            "Yellow sticky traps",
            "More water",
            "Less light"
          ],
          correctAnswer: 1,
          explanation: "Yellow sticky traps attract and catch many common flying pests."
        },
        {
          id: 13,
          question: "When to isolate new plants?",
          options: [
            "Never needed",
            "Before adding to system",
            "After they're sick",
            "Only if expensive"
          ],
          correctAnswer: 1,
          explanation: "Isolate new plants to ensure they don't bring pests or diseases to your system."
        },
        {
          id: 14,
          question: "What indicates need for more aeration?",
          options: [
            "Clear water",
            "Plants growing well",
            "Roots brown and slimy",
            "White healthy roots"
          ],
          correctAnswer: 2,
          explanation: "Brown slimy roots often indicate insufficient oxygen in the water."
        },
        {
          id: 15,
          question: "How often check pumps?",
          options: [
            "Daily",
            "Weekly",
            "Monthly",
            "When they break"
          ],
          correctAnswer: 0,
          explanation: "Check pumps daily to ensure they're running - failure can quickly kill plants."
        },
        {
          id: 16,
          question: "What to do with sick plants?",
          options: [
            "Leave them in system",
            "Remove immediately",
            "Give them more nutrients",
            "Ignore them"
          ],
          correctAnswer: 1,
          explanation: "Remove sick plants immediately to prevent spreading disease."
        },
        {
          id: 17,
          question: "Why top up water between changes?",
          options: [
            "To save money",
            "To maintain proper concentration",
            "Never top up - always change",
            "Doesn't matter"
          ],
          correctAnswer: 1,
          explanation: "Topping up maintains solution level without dramatically changing nutrient concentration."
        },
        {
          id: 18,
          question: "What indicates nutrient concentration dropping?",
          options: [
            "EC/TDS readings decrease",
            "pH rises dramatically",
            "Water gets cloudy",
            "Plants grow faster"
          ],
          correctAnswer: 0,
          explanation: "Decreasing EC/TDS readings show plants are using nutrients faster than water evaporates."
        },
        {
          id: 19,
          question: "How prevent disease spread?",
          options: [
            "Overcrowd plants",
            "Good air circulation",
            "Keep system dirty",
            "Never clean tools"
          ],
          correctAnswer: 1,
          explanation: "Good air circulation helps prevent fungal diseases that thrive in stagnant air."
        },
        {
          id: 20,
          question: "What is most important for system longevity?",
          options: [
            "Ignore problems",
            "Regular maintenance",
            "Never change anything",
            "Only fix when broken"
          ],
          correctAnswer: 1,
          explanation: "Regular maintenance prevents small problems from becoming big ones."
        }
      ]
    }
  ],

  // 3. FINAL EXAM (40 Questions from all modules)
  finalExam: {
    title: "Hydroponics Certificate Final Examination",
    description: "Comprehensive exam covering all 6 modules of the Hydroponics Certificate course.",
    passingScore: 70,
    questions: [
      // Questions from Module 1
      {
        id: 1,
        question: "What does 'hydroponics' literally mean?",
        options: [
          "Soil gardening",
          "Water working",
          "Plant science",
          "Nutrient farming"
        ],
        correctAnswer: 1,
        explanation: "Hydroponics comes from Greek 'hydro' (water) and 'ponos' (labor) meaning 'water working'.",
        module: 1
      },
      {
        id: 2,
        question: "How much less water does hydroponics typically use?",
        options: [
          "10-20% less",
          "30-50% less",
          "70-90% less",
          "Uses more water"
        ],
        correctAnswer: 2,
        explanation: "Hydroponics can use up to 90% less water than soil gardening.",
        module: 1
      },
      {
        id: 3,
        question: "What is the main purpose of growing medium?",
        options: [
          "To provide nutrients",
          "To support roots and hold moisture",
          "To filter water",
          "To attract beneficial insects"
        ],
        correctAnswer: 1,
        explanation: "Growing medium provides physical support and moisture retention.",
        module: 1
      },

      // Questions from Module 2
      {
        id: 4,
        question: "What does nitrogen primarily help with?",
        options: [
          "Root growth",
          "Leaf and stem growth",
          "Flowering",
          "Disease resistance"
        ],
        correctAnswer: 1,
        explanation: "Nitrogen is essential for leaf and stem growth.",
        module: 2
      },
      {
        id: 5,
        question: "What pH range is ideal for nutrient absorption?",
        options: [
          "4.0-5.0",
          "5.5-6.5",
          "7.0-8.0",
          "8.5-9.5"
        ],
        correctAnswer: 1,
        explanation: "Most nutrients are best absorbed between pH 5.5 and 6.5.",
        module: 2
      },
      {
        id: 6,
        question: "What deficiency causes blossom end rot?",
        options: [
          "Nitrogen",
          "Calcium",
          "Potassium",
          "Iron"
        ],
        correctAnswer: 1,
        explanation: "Calcium deficiency causes blossom end rot in tomatoes.",
        module: 2
      },

      // Questions from Module 3
      {
        id: 7,
        question: "Which system requires no electricity?",
        options: [
          "Deep Water Culture",
          "Kratky method",
          "NFT system",
          "Aeroponics"
        ],
        correctAnswer: 1,
        explanation: "The Kratky method is completely passive - no electricity needed.",
        module: 3
      },
      {
        id: 8,
        question: "What provides oxygen in DWC?",
        options: [
          "Air pump and air stone",
          "Wicking action",
          "Special growing medium",
          "Frequent water changes"
        ],
        correctAnswer: 0,
        explanation: "Air pump and stone bubble air through solution in DWC.",
        module: 3
      },
      {
        id: 9,
        question: "What causes algae growth?",
        options: [
          "Too much nutrient",
          "Light reaching solution",
          "Wrong pH",
          "Cold water"
        ],
        correctAnswer: 1,
        explanation: "Algae needs light to grow - block light to prevent it.",
        module: 3
      },

      // Questions from Module 4
      {
        id: 10,
        question: "What does LECA stand for?",
        options: [
          "Lightweight Expanded Clay Aggregate",
          "Liquid Expanded Clay Alternative",
          "Long-lasting Efficient Clay Addition",
          "Light Experimental Clay Amendment"
        ],
        correctAnswer: 0,
        explanation: "LECA is Lightweight Expanded Clay Aggregate.",
        module: 4
      },
      {
        id: 11,
        question: "What is rockwool made from?",
        options: [
          "Cotton fibers",
          "Melted rock spun into fibers",
          "Recycled paper",
          "Plastic pellets"
        ],
        correctAnswer: 1,
        explanation: "Rockwool is made from melted rock spun into fibers.",
        module: 4
      },
      {
        id: 12,
        question: "Why should medium be inert?",
        options: [
          "To provide nutrients",
          "To not affect pH or add chemicals",
          "To attract beneficial insects",
          "To change color"
        ],
        correctAnswer: 1,
        explanation: "Inert medium doesn't chemically interact with solution.",
        module: 4
      },

      // Questions from Module 5
      {
        id: 13,
        question: "Which plant is easiest for beginners?",
        options: [
          "Tomatoes",
          "Lettuce",
          "Carrots",
          "Corn"
        ],
        correctAnswer: 1,
        explanation: "Lettuce grows quickly and easily in hydroponics.",
        module: 5
      },
      {
        id: 14,
        question: "What strength nutrients for seedlings?",
        options: [
          "Double strength",
          "Half strength",
          "Full strength",
          "No nutrients"
        ],
        correctAnswer: 1,
        explanation: "Seedlings need half-strength nutrients initially.",
        module: 5
      },
      {
        id: 15,
        question: "What causes leggy seedlings?",
        options: [
          "Too much light",
          "Insufficient light",
          "Wrong nutrients",
          "Cold temperature"
        ],
        correctAnswer: 1,
        explanation: "Leggy seedlings stretch toward insufficient light.",
        module: 5
      },

      // Questions from Module 6
      {
        id: 16,
        question: "How often check pH?",
        options: [
          "Daily",
          "Weekly",
          "Monthly",
          "Never"
        ],
        correctAnswer: 1,
        explanation: "Check pH weekly as it can drift.",
        module: 6
      },
      {
        id: 17,
        question: "What is ideal water temperature?",
        options: [
          "50-60°F",
          "65-75°F",
          "80-90°F",
          "95-100°F"
        ],
        correctAnswer: 1,
        explanation: "65-75°F is ideal for most plants.",
        module: 6
      },
      {
        id: 18,
        question: "How often change nutrient solution?",
        options: [
          "Daily",
          "Weekly",
          "Monthly",
          "Every 6 months"
        ],
        correctAnswer: 2,
        explanation: "Change solution monthly to prevent problems.",
        module: 6
      },

      // Additional mixed questions
      {
        id: 19,
        question: "What plant grows too vigorously in hydroponics?",
        options: [
          "Basil",
          "Mint",
          "Cilantro",
          "Parsley"
        ],
        correctAnswer: 1,
        explanation: "Mint can take over if not controlled.",
        module: 5
      },
      {
        id: 20,
        question: "What medium from coconut husks?",
        options: [
          "Perlite",
          "Coconut coir",
          "Vermiculite",
          "Clay pellets"
        ],
        correctAnswer: 1,
        explanation: "Coconut coir comes from coconut husks.",
        module: 4
      },
      {
        id: 21,
        question: "How does wick system work?",
        options: [
          "Pumping action",
          "Capillary action",
          "Gravity flow",
          "Manual watering"
        ],
        correctAnswer: 1,
        explanation: "Wick systems use capillary action.",
        module: 3
      },
      {
        id: 22,
        question: "What nutrient for disease resistance?",
        options: [
          "Nitrogen",
          "Potassium",
          "Phosphorus",
          "Calcium"
        ],
        correctAnswer: 1,
        explanation: "Potassium helps with disease resistance.",
        module: 2
      },
      {
        id: 23,
        question: "What percentage faster growth in hydroponics?",
        options: [
          "5-10% faster",
          "10-20% faster",
          "30-50% faster",
          "100% faster"
        ],
        correctAnswer: 2,
        explanation: "Plants grow 30-50% faster in hydroponics.",
        module: 1
      },
      {
        id: 24,
        question: "How harvest leafy greens for regrowth?",
        options: [
          "Pull up whole plant",
          "Cut about 1 inch above base",
          "Remove all leaves at once",
          "Only harvest once"
        ],
        correctAnswer: 1,
        explanation: "Cut above base for regrowth.",
        module: 5
      },
      {
        id: 25,
        question: "What medium holds most water?",
        options: [
          "Perlite",
          "Clay pellets",
          "Vermiculite",
          "Gravel"
        ],
        correctAnswer: 2,
        explanation: "Vermiculite has excellent water retention.",
        module: 4
      },
      {
        id: 26,
        question: "What system for absolute beginners?",
        options: [
          "Complex aeroponics",
          "Kratky method",
          "Large commercial NFT",
          "Automated ebb and flow"
        ],
        correctAnswer: 1,
        explanation: "Kratky is simplest for beginners.",
        module: 3
      },
      {
        id: 27,
        question: "What deficiency causes purple leaves?",
        options: [
          "Nitrogen",
          "Phosphorus",
          "Potassium",
          "Calcium"
        ],
        correctAnswer: 1,
        explanation: "Phosphorus deficiency causes purple leaves.",
        module: 2
      },
      {
        id: 28,
        question: "What component is essential in all systems?",
        options: [
          "Air pump",
          "pH meter",
          "Nutrient solution",
          "Automatic timer"
        ],
        correctAnswer: 2,
        explanation: "All systems need nutrient solution.",
        module: 1
      },
      {
        id: 29,
        question: "How often top up water?",
        options: [
          "Daily as needed",
          "Weekly only",
          "Monthly only",
          "Never top up"
        ],
        correctAnswer: 0,
        explanation: "Top up water daily as plants use it.",
        module: 6
      },
      {
        id: 30,
        question: "What plant to avoid initially?",
        options: [
          "Basil",
          "Large tomato plants",
          "Lettuce",
          "Strawberries"
        ],
        correctAnswer: 1,
        explanation: "Tomatoes need more experience.",
        module: 5
      },
      {
        id: 31,
        question: "How prepare rockwool?",
        options: [
          "Squeeze out water",
          "Soak in pH-adjusted water",
          "Bake in oven",
          "Mix with soil"
        ],
        correctAnswer: 1,
        explanation: "Soak rockwool in pH-adjusted water.",
        module: 4
      },
      {
        id: 32,
        question: "What air gap for in Kratky?",
        options: [
          "To save water",
          "For roots to access oxygen",
          "To prevent spills",
          "For adding nutrients"
        ],
        correctAnswer: 1,
        explanation: "Air gap provides oxygen to roots.",
        module: 3
      },
      {
        id: 33,
        question: "What N-P-K numbers represent?",
        options: [
          "Nitrogen, Phosphorus, Potassium percentages",
          "Nutrient, Plant, Growth ratings",
          "Number of plants it feeds",
          "pH, EC, TDS values"
        ],
        correctAnswer: 0,
        explanation: "N-P-K are nutrient percentages.",
        module: 2
      },
      {
        id: 34,
        question: "How much faster plant growth?",
        options: [
          "5-10% faster",
          "10-20% faster",
          "30-50% faster",
          "100% faster"
        ],
        correctAnswer: 2,
        explanation: "30-50% faster growth typical.",
        module: 1
      },
      {
        id: 35,
        question: "What helps prevent algae?",
        options: [
          "More light",
          "Opaque containers",
          "Warmer water",
          "More nutrients"
        ],
        correctAnswer: 1,
        explanation: "Opaque containers block light.",
        module: 6
      },
      {
        id: 36,
        question: "How much light for seedlings?",
        options: [
          "8-10 hours daily",
          "16-18 hours daily",
          "24 hours constant",
          "4-6 hours daily"
        ],
        correctAnswer: 1,
        explanation: "Seedlings need 16-18 hours light.",
        module: 5
      },
      {
        id: 37,
        question: "Why rinse clay pellets?",
        options: [
          "To add nutrients",
          "To remove dust and debris",
          "To make them heavier",
          "To change their color"
        ],
        correctAnswer: 1,
        explanation: "Rinse to remove manufacturing dust.",
        module: 4
      },
      {
        id: 38,
        question: "What indicates pump failure?",
        options: [
          "Plants grow faster",
          "No bubbles in water",
          "Water level rises",
          "Leaves turn purple"
        ],
        correctAnswer: 1,
        explanation: "No bubbles means pump failure.",
        module: 3
      },
      {
        id: 39,
        question: "What to check first for deficiencies?",
        options: [
          "Add more nutrients",
          "Check and adjust pH",
          "Change all water",
          "Add extra light"
        ],
        correctAnswer: 1,
        explanation: "Always check pH first for deficiencies.",
        module: 2
      },
      {
        id: 40,
        question: "What beginner system recommended?",
        options: [
          "Commercial lettuce farm",
          "Single lettuce plant in jar",
          "100-plant tomato system",
          "Complex automated herb garden"
        ],
        correctAnswer: 1,
        explanation: "Start simple with one plant.",
        module: 1
      }
    ]
  }
};

export default hydroponicsCertificate;

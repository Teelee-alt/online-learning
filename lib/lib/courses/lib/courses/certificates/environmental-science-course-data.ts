// Environmental Science (Certificate) Course
// Complete course with all modules and exams

export const environmentalScienceCertificate = {
  // 1. COURSE METADATA & IDENTIFICATION
  id: "environmental-science-certificate",
  title: "Environmental Science (Certificate)",
  description: "Beginner-friendly course exploring our planet's systems, ecosystems, and human-environment interactions. Learn environmental basics through simple explanations and real-world examples.",
  duration: "6 weeks",
  timeCommitment: "4-5 hours per week",
  price: 12,
  upgradePrice: 18,
  icon: "🌍",
  badge: "Certificate",
  
  // 2. MODULES ARCHITECTURE (6 Modules)
  modules: [
    {
      // MODULE 1: EARTH'S BASIC SYSTEMS
      id: 1,
      title: "Our Living Planet: Earth's Basic Systems",
      completed: false,
      content: `# Our Living Planet: Earth's Basic Systems

Welcome to environmental science! Let's start by understanding our amazing planet. Think of Earth as a giant spaceship carrying all life through space.

## The Four Main Spheres

Our planet has four connected systems:

**1. Atmosphere** - The air blanket around Earth
- Made of different layers, like blankets on a bed
- The layer we breathe is called the troposphere
- Contains gases like oxygen, nitrogen, and carbon dioxide
- Protects us from too much sun and space rocks

**2. Hydrosphere** - All water on Earth
- Oceans cover about three-fourths of our planet
- Includes rivers, lakes, glaciers, and groundwater
- Water moves in a big circle called the water cycle
- Every living thing needs water

**3. Geosphere** - The solid Earth
- The land, rocks, and soil beneath our feet
- Made of continents and ocean floors
- Contains minerals and energy sources
- Changes slowly through erosion and earthquakes

**4. Biosphere** - All living things
- Every plant, animal, and microorganism
- Found where air, water, and land meet
- Life exists from deep oceans to mountain tops
- Includes humans and all our activities

## Simple Energy Flows

Sunlight makes everything work:
- Plants use sunlight to make food (photosynthesis)
- Animals eat plants or other animals
- Heat energy moves through the atmosphere
- Some energy gets trapped, keeping Earth warm

## Why This Matters

Understanding these systems helps us:
- Predict weather changes
- Protect water sources
- Grow healthy food
- Keep air clean to breathe
- Take care of all living things

Remember: All four spheres work together. A change in one affects all others, like ripples in a pond.`,
      
      quiz: [
        {
          id: 1,
          question: "Which sphere includes all the air around Earth?",
          options: ["Hydrosphere", "Atmosphere", "Geosphere", "Biosphere"],
          correctAnswer: 1,
          explanation: "The atmosphere is the layer of gases surrounding Earth that we breathe."
        },
        {
          id: 2,
          question: "About how much of Earth's surface is covered by oceans?",
          options: ["One-fourth", "Half", "Three-fourths", "All of it"],
          correctAnswer: 2,
          explanation: "Oceans cover approximately three-fourths of Earth's surface."
        },
        {
          id: 3,
          question: "What is the solid part of Earth called?",
          options: ["Atmosphere", "Hydrosphere", "Geosphere", "Biosphere"],
          correctAnswer: 2,
          explanation: "The geosphere includes all the land, rocks, and soil on Earth."
        },
        {
          id: 4,
          question: "Which sphere contains all living things?",
          options: ["Hydrosphere", "Atmosphere", "Geosphere", "Biosphere"],
          correctAnswer: 3,
          explanation: "The biosphere includes every plant, animal, and microorganism."
        },
        {
          id: 5,
          question: "What is the lowest layer of atmosphere where we live?",
          options: ["Stratosphere", "Troposphere", "Mesosphere", "Thermosphere"],
          correctAnswer: 1,
          explanation: "The troposphere is the lowest atmospheric layer where all weather occurs."
        },
        {
          id: 6,
          question: "What process do plants use to make food from sunlight?",
          options: ["Respiration", "Photosynthesis", "Evaporation", "Condensation"],
          correctAnswer: 1,
          explanation: "Photosynthesis is how plants convert sunlight into food energy."
        },
        {
          id: 7,
          question: "Which is NOT part of Earth's water systems?",
          options: ["Rivers", "Glaciers", "Mountains", "Groundwater"],
          correctAnswer: 2,
          explanation: "Mountains are part of the geosphere, not the hydrosphere."
        },
        {
          id: 8,
          question: "What is the continuous movement of water called?",
          options: ["Rock cycle", "Water cycle", "Carbon cycle", "Nitrogen cycle"],
          correctAnswer: 1,
          explanation: "The water cycle describes how water moves between Earth's surface and atmosphere."
        },
        {
          id: 9,
          question: "Which gas do plants use during photosynthesis?",
          options: ["Oxygen", "Nitrogen", "Carbon dioxide", "Helium"],
          correctAnswer: 2,
          explanation: "Plants take in carbon dioxide and release oxygen during photosynthesis."
        },
        {
          id: 10,
          question: "Where does most life on Earth exist?",
          options: ["Deep underground", "Atmosphere", "Where spheres meet", "Ocean trenches"],
          correctAnswer: 2,
          explanation: "Life thrives where the atmosphere, hydrosphere, and geosphere interact."
        },
        {
          id: 11,
          question: "What is the main source of Earth's energy?",
          options: ["Moon", "Sun", "Earth's core", "Ocean currents"],
          correctAnswer: 1,
          explanation: "The Sun provides virtually all energy driving Earth's systems."
        },
        {
          id: 12,
          question: "Which sphere includes soil?",
          options: ["Atmosphere", "Hydrosphere", "Geosphere", "Biosphere"],
          correctAnswer: 2,
          explanation: "Soil is part of the geosphere, though it contains living organisms."
        },
        {
          id: 13,
          question: "What protects Earth from too much solar radiation?",
          options: ["Oceans", "Atmosphere", "Mountains", "Forests"],
          correctAnswer: 1,
          explanation: "The atmosphere filters harmful solar radiation."
        },
        {
          id: 14,
          question: "Which describes all Earth's systems working together?",
          options: ["Separate systems", "Connected systems", "Independent parts", "Random events"],
          correctAnswer: 1,
          explanation: "Earth's systems are interconnected and affect each other."
        },
        {
          id: 15,
          question: "What do we call the blanket of gases around Earth?",
          options: ["Hydrosphere", "Atmosphere", "Biosphere", "Geosphere"],
          correctAnswer: 1,
          explanation: "The atmosphere is often described as Earth's protective blanket."
        },
        {
          id: 16,
          question: "Which sphere contains glaciers?",
          options: ["Atmosphere", "Hydrosphere", "Geosphere", "Biosphere"],
          correctAnswer: 1,
          explanation: "Glaciers are frozen water, part of the hydrosphere."
        },
        {
          id: 17,
          question: "Where do humans belong in Earth's systems?",
          options: ["Only biosphere", "Biosphere with geosphere effects", "Only atmosphere", "Only hydrosphere"],
          correctAnswer: 1,
          explanation: "Humans are part of the biosphere but affect all other spheres."
        },
        {
          id: 18,
          question: "What happens when one Earth system changes?",
          options: ["Only that system is affected", "Other systems remain unchanged", "All systems are affected", "Nothing happens"],
          correctAnswer: 2,
          explanation: "Changes in one sphere create ripples affecting all other spheres."
        },
        {
          id: 19,
          question: "Which is part of the water cycle?",
          options: ["Rock formation", "Evaporation", "Mountain building", "Earthquake"],
          correctAnswer: 1,
          explanation: "Evaporation is when water turns to vapor, part of the water cycle."
        },
        {
          id: 20,
          question: "What provides warmth to Earth's surface?",
          options: ["Moonlight", "Starlight", "Sunlight", "Earth's core heat"],
          correctAnswer: 2,
          explanation: "Sunlight warms Earth's surface and drives weather patterns."
        }
      ]
    },

    {
      // MODULE 2: ECOSYSTEMS MADE SIMPLE
      id: 2,
      title: "Ecosystems Made Simple: Nature's Neighborhoods",
      completed: false,
      content: `# Ecosystems Made Simple: Nature's Neighborhoods

Think of ecosystems as nature's neighborhoods. Just like your neighborhood has houses, parks, and stores, ecosystems have plants, animals, and their homes.

## What is an Ecosystem?

An ecosystem is a community of living things interacting with their non-living environment. It includes:
- **Living parts**: Plants, animals, bacteria, fungi
- **Non-living parts**: Water, air, soil, sunlight, temperature
- **Relationships**: Who eats whom, who lives where, who helps whom

## Types of Ecosystems

**1. Forests** - Nature's skyscrapers
- Tall trees create different living spaces
- Canopy (top), understory (middle), forest floor (bottom)
- Examples: Rainforests, deciduous forests, pine forests
- Home to birds, mammals, insects, and many plants

**2. Grasslands** - Sea of grass
- Mostly grasses with few trees
- Perfect for grazing animals
- Examples: Prairies, savannas, steppes
- Home to bison, antelope, prairie dogs, and birds

**3. Deserts** - Dry but alive
- Very little rainfall
- Plants and animals adapted to dryness
- Examples: Sahara, Mojave, Australian outback
- Cacti store water, animals are active at night

**4. Freshwater** - Rivers, lakes, and ponds
- Water with little salt
- Supports fish, frogs, turtles, and water plants
- Examples: Amazon River, Great Lakes, local ponds
- Important for drinking water and wildlife

**5. Marine** - Ocean worlds
- Saltwater ecosystems
- Coral reefs are "rainforests of the sea"
- Examples: Coral reefs, open ocean, kelp forests
- Home to fish, whales, sharks, and corals

## Food Chains: Who Eats Whom

Every ecosystem has feeding relationships:
1. **Producers** - Plants that make their own food
2. **Consumers** - Animals that eat plants or other animals
   - Herbivores eat plants
   - Carnivores eat animals
   - Omnivores eat both
3. **Decomposers** - Break down dead things
   - Bacteria and fungi recycle nutrients

## Ecosystem Services

Nature gives us free services:
- **Clean air**: Plants produce oxygen
- **Clean water**: Wetlands filter pollutants
- **Food production**: Pollinators help crops grow
- **Climate regulation**: Forests absorb carbon dioxide
- **Soil formation**: Decomposers create rich soil

## Simple Balance

Healthy ecosystems maintain balance through:
- Enough resources for all
- Predators keeping prey populations healthy
- Plants producing enough oxygen
- Decomposers recycling nutrients

When we protect ecosystems, we protect our life support system!`,
      
      quiz: [
        {
          id: 1,
          question: "What two main parts make up an ecosystem?",
          options: ["Plants and animals only", "Living and non-living parts", "Trees and grass only", "Water and air only"],
          correctAnswer: 1,
          explanation: "Ecosystems include both living organisms and their physical environment."
        },
        {
          id: 2,
          question: "Which ecosystem is called 'rainforests of the sea'?",
          options: ["Deserts", "Grasslands", "Coral reefs", "Freshwater lakes"],
          correctAnswer: 2,
          explanation: "Coral reefs have incredible biodiversity, similar to rainforests."
        },
        {
          id: 3,
          question: "What are plants called in a food chain?",
          options: ["Consumers", "Decomposers", "Producers", "Predators"],
          correctAnswer: 2,
          explanation: "Plants produce their own food through photosynthesis."
        },
        {
          id: 4,
          question: "Which animals eat only plants?",
          options: ["Carnivores", "Herbivores", "Omnivores", "Decomposers"],
          correctAnswer: 1,
          explanation: "Herbivores are plant-eating animals like deer and rabbits."
        },
        {
          id: 5,
          question: "What breaks down dead material in ecosystems?",
          options: ["Producers", "Herbivores", "Decomposers", "Carnivores"],
          correctAnswer: 2,
          explanation: "Decomposers like fungi and bacteria recycle nutrients from dead organisms."
        },
        {
          id: 6,
          question: "Which ecosystem has very little rainfall?",
          options: ["Forest", "Grassland", "Desert", "Freshwater"],
          correctAnswer: 2,
          explanation: "Deserts receive minimal rainfall, making water scarce."
        },
        {
          id: 7,
          question: "What do we call animals that eat both plants and animals?",
          options: ["Herbivores", "Carnivores", "Omnivores", "Decomposers"],
          correctAnswer: 2,
          explanation: "Omnivores like bears and humans eat both plant and animal matter."
        },
        {
          id: 8,
          question: "Which ecosystem service provides oxygen?",
          options: ["Water filtration", "Air purification", "Food production", "Soil formation"],
          correctAnswer: 1,
          explanation: "Plants produce oxygen through photosynthesis, cleaning our air."
        },
        {
          id: 9,
          question: "What are the three layers in a forest?",
          options: ["Root, stem, leaf", "Canopy, understory, forest floor", "Top, middle, bottom", "Surface, deep, bedrock"],
          correctAnswer: 1,
          explanation: "Forests have distinct layers creating different habitats."
        },
        {
          id: 10,
          question: "Which animals typically live in grasslands?",
          options: ["Grazing animals", "Tree-dwelling monkeys", "Deep sea fish", "Desert reptiles"],
          correctAnswer: 0,
          explanation: "Grasslands support grazing animals like bison and antelope."
        },
        {
          id: 11,
          question: "What filters pollutants in wetland ecosystems?",
          options: ["Trees", "Grasses", "Soil and plants", "Rocks"],
          correctAnswer: 2,
          explanation: "Wetlands naturally filter and clean water as it passes through."
        },
        {
          id: 12,
          question: "What is the main characteristic of freshwater ecosystems?",
          options: ["High salt content", "Low salt content", "No plants", "No animals"],
          correctAnswer: 1,
          explanation: "Freshwater has minimal salt, unlike ocean water."
        },
        {
          id: 13,
          question: "Which helps pollinate crops?",
          options: ["Decomposers", "Pollinators", "Carnivores", "Producers"],
          correctAnswer: 1,
          explanation: "Bees and other pollinators are essential for food production."
        },
        {
          id: 14,
          question: "What do carnivores eat?",
          options: ["Plants only", "Animals only", "Both plants and animals", "Dead material"],
          correctAnswer: 1,
          explanation: "Carnivores are meat-eaters like lions and wolves."
        },
        {
          id: 15,
          question: "Which ecosystem has tall trees forming different layers?",
          options: ["Desert", "Grassland", "Forest", "Marine"],
          correctAnswer: 2,
          explanation: "Forests develop vertical layers with different light conditions."
        },
        {
          id: 16,
          question: "What creates soil in ecosystems?",
          options: ["Weather only", "Decomposers only", "Combination of weathering and decomposers", "Animals digging"],
          correctAnswer: 2,
          explanation: "Soil forms from weathered rock and decomposed organic matter."
        },
        {
          id: 17,
          question: "Where would you find coral reefs?",
          options: ["Deserts", "Mountains", "Oceans", "Rivers"],
          correctAnswer: 2,
          explanation: "Coral reefs are marine ecosystems found in warm ocean waters."
        },
        {
          id: 18,
          question: "What maintains balance in healthy ecosystems?",
          options: ["One dominant species", "Limited resources", "Natural relationships", "Human control"],
          correctAnswer: 2,
          explanation: "Natural predator-prey and other relationships maintain balance."
        },
        {
          id: 19,
          question: "Which are examples of decomposers?",
          options: ["Trees and flowers", "Lions and tigers", "Bacteria and fungi", "Fish and frogs"],
          correctAnswer: 2,
          explanation: "Bacteria and fungi break down dead organic material."
        },
        {
          id: 20,
          question: "What do producers need to make food?",
          options: ["Other organisms", "Sunlight", "Dead material", "Animals"],
          correctAnswer: 1,
          explanation: "Plants (producers) use sunlight to create food through photosynthesis."
        }
      ]
    },

    {
      // MODULE 3: WATER AND AIR BASICS
      id: 3,
      title: "Water and Air Basics: Our Life Support Systems",
      completed: false,
      content: `# Water and Air Basics: Our Life Support Systems

Water and air are so common we hardly think about them, but they're essential for life. Let's explore these invisible miracles.

## The Amazing Water Cycle

Water never disappears - it just moves around in a continuous loop called the water cycle.

**Four Main Steps:**
1. **Evaporation** - Water turns to vapor
   - Sun heats water in oceans, lakes, rivers
   - Water molecules escape as invisible gas
   - Even plants "sweat" water (transpiration)

2. **Condensation** - Vapor becomes clouds
   - Water vapor rises and cools
   - Forms tiny water droplets
   - Millions of droplets make clouds

3. **Precipitation** - Water falls to Earth
   - Droplets combine and get heavy
   - Falls as rain, snow, sleet, or hail
   - Returns water to land and oceans

4. **Collection** - Water gathers again
   - In oceans, lakes, rivers, groundwater
   - Ready to evaporate again
   - Cycle continues forever

## Why Clean Water Matters

We use water for:
- **Drinking** - Every cell needs water
- **Growing food** - Crops need regular water
- **Cleaning** - Homes, clothes, ourselves
- **Industry** - Manufacturing needs water
- **Ecosystems** - Wildlife depends on clean water

**Water Sources:**
- Surface water (rivers, lakes)
- Groundwater (underground aquifers)
- Rainwater collection
- Desalination (removing salt from seawater)

## The Air We Breathe

Air seems empty, but it's a mixture of gases:

**Main Components:**
- **Nitrogen** (78%) - Most abundant, but we don't use it directly
- **Oxygen** (21%) - What we breathe in
- **Other gases** (1%) - Carbon dioxide, argon, others

**Why Air Quality Matters:**
1. **Health** - Clean air prevents lung problems
2. **Climate** - Gases trap heat (greenhouse effect)
3. **Plants** - Need carbon dioxide to grow
4. **Ozone layer** - Protects from sunburn

## Air Pollution Basics

**Common pollutants:**
- **Smoke** - From fires and factories
- **Vehicle exhaust** - Cars and trucks
- **Dust** - Construction and wind
- **Chemicals** - Industrial processes

**Effects of poor air quality:**
- Breathing difficulties
- Acid rain (damages plants and buildings)
- Climate change
- Harm to wildlife

## Simple Conservation

**Water saving tips:**
- Fix leaky faucets
- Take shorter showers
- Water plants in early morning
- Use rain barrels

**Air quality tips:**
- Use public transportation
- Plant trees (they clean air)
- Reduce energy use
- Properly dispose of chemicals

Remember: We all share the same water and air. What affects one place can affect many others.`,
      
      quiz: [
        {
          id: 1,
          question: "What is the continuous movement of water called?",
          options: ["Air cycle", "Water cycle", "Rock cycle", "Life cycle"],
          correctAnswer: 1,
          explanation: "The water cycle describes water's endless journey through evaporation, condensation, and precipitation."
        },
        {
          id: 2,
          question: "What percentage of air is oxygen?",
          options: ["78%", "21%", "50%", "1%"],
          correctAnswer: 1,
          explanation: "Oxygen makes up about 21% of Earth's atmosphere."
        },
        {
          id: 3,
          question: "What is the first step in the water cycle?",
          options: ["Condensation", "Precipitation", "Evaporation", "Collection"],
          correctAnswer: 2,
          explanation: "Evaporation starts the water cycle as water turns to vapor."
        },
        {
          id: 4,
          question: "Which gas do plants use for photosynthesis?",
          options: ["Oxygen", "Nitrogen", "Carbon dioxide", "Argon"],
          correctAnswer: 2,
          explanation: "Plants take in carbon dioxide and release oxygen."
        },
        {
          id: 5,
          question: "What forms when water vapor cools?",
          options: ["Rain", "Clouds", "Snow", "Steam"],
          correctAnswer: 1,
          explanation: "Cooling water vapor condenses into cloud droplets."
        },
        {
          id: 6,
          question: "What is the most abundant gas in air?",
          options: ["Oxygen", "Carbon dioxide", "Nitrogen", "Argon"],
          correctAnswer: 2,
          explanation: "Nitrogen makes up about 78% of our atmosphere."
        },
        {
          id: 7,
          question: "What do we call water stored underground?",
          options: ["Surface water", "Groundwater", "Rainwater", "Glacier water"],
          correctAnswer: 1,
          explanation: "Groundwater fills spaces in soil and rock layers underground."
        },
        {
          id: 8,
          question: "What causes acid rain?",
          options: ["Clean water", "Air pollution", "Natural evaporation", "Plant growth"],
          correctAnswer: 1,
          explanation: "Pollutants in air mix with rain, creating acidic precipitation."
        },
        {
          id: 9,
          question: "When is the best time to water plants?",
          options: ["Midday", "Late afternoon", "Early morning", "Night"],
          correctAnswer: 2,
          explanation: "Early morning reduces water loss through evaporation."
        },
        {
          id: 10,
          question: "What protects Earth from harmful UV radiation?",
          options: ["Clouds", "Ozone layer", "Oxygen", "Nitrogen"],
          correctAnswer: 1,
          explanation: "The ozone layer in the stratosphere blocks most UV radiation."
        },
        {
          id: 11,
          question: "What is water turning to vapor called?",
          options: ["Condensation", "Precipitation", "Evaporation", "Collection"],
          correctAnswer: 2,
          explanation: "Evaporation occurs when liquid water becomes water vapor."
        },
        {
          id: 12,
          question: "Which is NOT a common air pollutant?",
          options: ["Vehicle exhaust", "Factory smoke", "Oxygen", "Dust"],
          correctAnswer: 2,
          explanation: "Oxygen is a natural, essential component of clean air."
        },
        {
          id: 13,
          question: "What do rain barrels collect?",
          options: ["Groundwater", "Surface water", "Rainwater", "Well water"],
          correctAnswer: 2,
          explanation: "Rain barrels collect and store rainwater for later use."
        },
        {
          id: 14,
          question: "What process do plants use to release water vapor?",
          options: ["Evaporation", "Transpiration", "Condensation", "Precipitation"],
          correctAnswer: 1,
          explanation: "Transpiration is how plants release water vapor through leaves."
        },
        {
          id: 15,
          question: "What traps heat in the atmosphere?",
          options: ["Oxygen", "Nitrogen", "Greenhouse gases", "Dust"],
          correctAnswer: 2,
          explanation: "Greenhouse gases like carbon dioxide trap heat, warming Earth."
        },
        {
          id: 16,
          question: "Which saves water?",
          options: ["Long showers", "Leaky faucets", "Watering midday", "Rain barrels"],
          correctAnswer: 3,
          explanation: "Rain barrels collect free rainwater for garden use."
        },
        {
          id: 17,
          question: "What falls during precipitation?",
          options: ["Water vapor", "Clouds", "Rain or snow", "Dust"],
          correctAnswer: 2,
          explanation: "Precipitation includes rain, snow, sleet, or hail falling to Earth."
        },
        {
          id: 18,
          question: "Which improves air quality?",
          options: ["More cars", "Tree planting", "Factory emissions", "Burning trash"],
          correctAnswer: 1,
          explanation: "Trees absorb pollutants and produce oxygen."
        },
        {
          id: 19,
          question: "Where is most freshwater found?",
          options: ["Rivers", "Lakes", "Glaciers", "Groundwater"],
          correctAnswer: 2,
          explanation: "Most freshwater is stored in glaciers and ice caps."
        },
        {
          id: 20,
          question: "What shares water and air globally?",
          options: ["Countries", "Oceans", "Wind and water cycles", "Mountains"],
          correctAnswer: 2,
          explanation: "Wind and water cycles distribute air and water around the world."
        }
      ]
    },

    {
      // MODULE 4: SOIL AND PLANTS
      id: 4,
      title: "Soil and Plants: Earth's Green Carpet",
      completed: false,
      content: `# Soil and Plants: Earth's Green Carpet

Soil is more than just dirt - it's a living, breathing world beneath our feet. Plants are Earth's green carpet, covering land with life.

## What is Soil Really Made Of?

Soil is a mixture of five main ingredients:

**1. Minerals** (45%) - Tiny rock particles
   - Sand (largest, drains quickly)
   - Silt (medium, holds some water)
   - Clay (smallest, holds water well)

**2. Organic Matter** (5%) - Living and dead material
   - Decomposing plants and animals
   - Worm castings (worm waste)
   - Microorganism remains

**3. Water** (25%) - Soil moisture
   - Holds nutrients for plants
   - Too much drowns roots
   - Too little causes drought

**4. Air** (25%) - Oxygen for roots
   - Roots need to breathe
   - Air spaces between particles
   - Microbes need oxygen too

**5. Living Organisms** - Soil's workforce
   - Earthworms aerate soil
   - Bacteria and fungi decompose
   - Insects and small animals

## Soil Layers (Like a Cake)

From top to bottom:
1. **Topsoil** - Dark, rich, full of life
   - Where plants grow
   - Most organic matter
   - Worms and microbes

2. **Subsoil** - Lighter color, less life
   - Minerals washed down
   - Some plant roots
   - Less organic matter

3. **Parent Material** - Partly broken rock
   - Weathering creates soil
   - Few organisms
   - Beginning of soil formation

4. **Bedrock** - Solid rock
   - Base layer
   - Weathers very slowly
   - Source of minerals

## Why Plants are Amazing

**Three things plants need:**
1. **Sunlight** - Energy for food-making
2. **Water** - Carries nutrients
3. **Nutrients** - From soil (nitrogen, phosphorus, potassium)

**How plants help us:**
- **Food** - Fruits, vegetables, grains
- **Oxygen** - We breathe what plants exhale
- **Medicine** - Many medicines come from plants
- **Materials** - Wood, paper, cotton
- **Climate control** - Absorb carbon dioxide

## Photosynthesis Simplified

**Plant food factory:**
1. Sunlight hits leaves
2. Plant takes in carbon dioxide
3. Roots bring up water
4. Plant makes sugar (food)
5. Plant releases oxygen

**Simple formula:**
Sunlight + Water + Carbon Dioxide → Sugar + Oxygen

## Soil Conservation

**Problems:**
- **Erosion** - Wind and water remove topsoil
- **Compaction** - Heavy machinery squeezes air out
- **Pollution** - Chemicals kill soil life
- **Salinization** - Salt buildup from irrigation

**Solutions:**
- **Cover crops** - Plants protect bare soil
- **Contour plowing** - Follow land shape
- **Terracing** - Steps on hillsides
- **Composting** - Adds organic matter
- **Crop rotation** - Different plants each season

## Gardening Basics

**Good soil for gardening:**
- Dark color (means organic matter)
- Earthworm presence
- Good drainage but holds moisture
- Pleasant earthy smell
- Crumbly texture

**Simple soil test:**
1. Squeeze moist soil in hand
2. If it forms a ball that crumbles easily - good soil
3. If it won't form a ball - too sandy
4. If it stays in hard ball - too much clay

Remember: Healthy soil means healthy plants means healthy people!`,
      
      quiz: [
        {
          id: 1,
          question: "What percentage of good soil is organic matter?",
          options: ["45%", "25%", "5%", "50%"],
          correctAnswer: 2,
          explanation: "About 5% of healthy soil is decomposed organic material."
        },
        {
          id: 2,
          question: "Which soil particle is largest?",
          options: ["Clay", "Silt", "Sand", "Organic matter"],
          correctAnswer: 2,
          explanation: "Sand particles are largest and provide good drainage."
        },
        {
          id: 3,
          question: "Where do most plants grow?",
          options: ["Subsoil", "Topsoil", "Parent material", "Bedrock"],
          correctAnswer: 1,
          explanation: "Topsoil is the rich, organic upper layer where plants thrive."
        },
        {
          id: 4,
          question: "What do plants release during photosynthesis?",
          options: ["Carbon dioxide", "Oxygen", "Nitrogen", "Water vapor"],
          correctAnswer: 1,
          explanation: "Plants release oxygen as a byproduct of photosynthesis."
        },
        {
          id: 5,
          question: "What aerates soil naturally?",
          options: ["Rocks", "Earthworms", "Clay", "Sand"],
          correctAnswer: 1,
          explanation: "Earthworms create tunnels that improve soil air and water flow."
        },
        {
          id: 6,
          question: "What three things do plants need?",
          options: ["Sunlight, water, nutrients", "Air, fire, water", "Soil, wind, rain", "Heat, light, sound"],
          correctAnswer: 0,
          explanation: "Plants need sunlight for energy, water for transport, and nutrients for growth."
        },
        {
          id: 7,
          question: "What is the solid rock layer called?",
          options: ["Topsoil", "Subsoil", "Parent material", "Bedrock"],
          correctAnswer: 3,
          explanation: "Bedrock is the solid rock foundation beneath all soil layers."
        },
        {
          id: 8,
          question: "Which soil holds water best?",
          options: ["Sand", "Silt", "Clay", "Gravel"],
          correctAnswer: 2,
          explanation: "Clay's tiny particles hold water tightly but can become waterlogged."
        },
        {
          id: 9,
          question: "What do plants take in for photosynthesis?",
          options: ["Oxygen", "Carbon dioxide", "Nitrogen", "Soil"],
          correctAnswer: 1,
          explanation: "Plants absorb carbon dioxide from air for photosynthesis."
        },
        {
          id: 10,
          question: "What protects bare soil from erosion?",
          options: ["Removing plants", "Cover crops", "Compacting soil", "Adding salt"],
          correctAnswer: 1,
          explanation: "Cover crops protect soil between main crop seasons."
        },
        {
          id: 11,
          question: "What indicates healthy soil?",
          options: ["No earthworms", "Earthworm presence", "Hard surface", "Gray color"],
          correctAnswer: 1,
          explanation: "Earthworms indicate active, healthy soil ecosystems."
        },
        {
          id: 12,
          question: "What is soil erosion?",
          options: ["Soil building", "Soil removal", "Soil planting", "Soil watering"],
          correctAnswer: 1,
          explanation: "Erosion is when wind or water removes topsoil."
        },
        {
          id: 13,
          question: "What do roots need from soil air spaces?",
          options: ["Water", "Nutrients", "Oxygen", "Sunlight"],
          correctAnswer: 2,
          explanation: "Plant roots need oxygen for respiration, just like we do."
        },
        {
          id: 14,
          question: "What farming method follows land contours?",
          options: ["Straight plowing", "Contour plowing", "Vertical farming", "Random plowing"],
          correctAnswer: 1,
          explanation: "Contour plowing reduces erosion by following natural land shapes."
        },
        {
          id: 15,
          question: "What makes soil dark colored?",
          options: ["Clay", "Sand", "Organic matter", "Minerals"],
          correctAnswer: 2,
          explanation: "Decomposed organic material gives soil its dark, rich color."
        },
        {
          id: 16,
          question: "What is compost?",
          options: ["Chemical fertilizer", "Decomposed organic waste", "Rock powder", "Sand mixture"],
          correctAnswer: 1,
          explanation: "Compost is decomposed plant and food waste that enriches soil."
        },
        {
          id: 17,
          question: "What problem does crop rotation help?",
          options: ["Soil erosion", "Nutrient depletion", "Too much water", "Lack of sun"],
          correctAnswer: 1,
          explanation: "Different crops use different nutrients, preventing soil exhaustion."
        },
        {
          id: 18,
          question: "What is the plant food-making process called?",
          options: ["Respiration", "Photosynthesis", "Transpiration", "Germination"],
          correctAnswer: 1,
          explanation: "Photosynthesis converts sunlight into plant food."
        },
        {
          id: 19,
          question: "What indicates good garden soil?",
          options: ["Hard ball when squeezed", "Crumbly texture", "No smell", "Gray color"],
          correctAnswer: 1,
          explanation: "Good soil holds together lightly but crumbles easily."
        },
        {
          id: 20,
          question: "What weathers rock to create soil?",
          options: ["Only water", "Only wind", "Only plants", "Multiple factors"],
          correctAnswer: 3,
          explanation: "Water, wind, temperature changes, and plants all weather rock into soil."
        }
      ]
    },

    {
      // MODULE 5: HUMAN IMPACT
      id: 5,
      title: "Human Impact: Our Footprint on Earth",
      completed: false,
      content: `# Human Impact: Our Footprint on Earth

Every person leaves a mark on the planet. Some marks heal quickly, others last generations. Let's learn how we affect Earth and how to make better marks.

## Understanding Environmental Footprints

**Ecological Footprint** - How much nature we use
- Land for growing food
- Forests for wood and paper
- Oceans for fish
- Atmosphere for waste absorption

**Carbon Footprint** - Greenhouse gases we produce
- From driving cars
- From heating homes
- From making products
- From growing food

## Major Human Impacts

**1. Resource Use**
- We use resources faster than Earth replaces them
- Fossil fuels (coal, oil, gas) took millions of years to form
- We're using them in just centuries
- Some resources are becoming scarce

**2. Habitat Change**
- Clearing land for agriculture
- Building cities and roads
- Damming rivers
- These changes affect wildlife homes

**3. Pollution**
- Air pollution from vehicles and factories
- Water pollution from chemicals and waste
- Soil pollution from pesticides and mining
- Noise and light pollution affecting animals

**4. Climate Change**
- Burning fossil fuels increases greenhouse gases
- Earth's temperature is rising
- Weather patterns are changing
- Sea levels are rising

## The Three R's: Reduce, Reuse, Recycle

**Reduce** - Use less from the start
- Buy only what you need
- Choose products with less packaging
- Use energy-efficient appliances
- Eat more plant-based foods

**Reuse** - Use things again
- Bring reusable shopping bags
- Use refillable water bottles
- Donate clothes and furniture
- Repair instead of replace

**Recycle** - Make new from old
- Paper becomes new paper
- Plastic becomes new products
- Glass becomes new glass
- Metals save energy when recycled

## Simple Daily Actions

**At home:**
- Turn off lights when leaving rooms
- Fix leaky faucets
- Lower thermostat in winter
- Use natural light when possible

**Transportation:**
- Walk or bike for short trips
- Use public transportation
- Carpool with others
- Combine errands into one trip

**Shopping:**
- Bring your own bags
- Choose local products
- Avoid single-use plastics
- Buy durable, repairable items

**Food choices:**
- Reduce food waste
- Compost food scraps
- Choose seasonal produce
- Eat less meat

## Positive Changes Happening

**Good news:**
- Renewable energy is growing
- Electric vehicles are becoming common
- Recycling rates are improving
- More protected natural areas
- People are becoming more aware

**Technology helping:**
- Solar panels on homes
- Energy-efficient buildings
- Water-saving devices
- Apps to track footprints

## Community Action

**What groups can do:**
- Community gardens
- Clean-up events
- Tree planting days
- Educational programs
- Car-free days

**Government actions:**
- Environmental laws
- Protected parks
- Recycling programs
- Clean energy incentives

Remember: Every positive action, no matter how small, helps. When millions of people make small changes, big changes happen!`,
      
      quiz: [
        {
          id: 1,
          question: "What measures how much nature we use?",
          options: ["Carbon footprint", "Ecological footprint", "Water footprint", "Energy footprint"],
          correctAnswer: 1,
          explanation: "Ecological footprint calculates the land and resources needed to support our lifestyle."
        },
        {
          id: 2,
          question: "Which is the best first step: Reduce, Reuse, or Recycle?",
          options: ["Recycle", "Reuse", "Reduce", "All equal"],
          correctAnswer: 2,
          explanation: "Reducing consumption is most effective because it prevents waste from being created."
        },
        {
          id: 3,
          question: "What does burning fossil fuels increase?",
          options: ["Oxygen levels", "Greenhouse gases", "Soil fertility", "Water supply"],
          correctAnswer: 1,
          explanation: "Burning coal, oil, and gas releases carbon dioxide, a greenhouse gas."
        },
        {
          id: 4,
          question: "What is habitat change?",
          options: ["Changing animal behavior", "Altering wildlife homes", "Climate patterns", "Human migration"],
          correctAnswer: 1,
          explanation: "Habitat change occurs when natural areas are converted for human use."
        },
        {
          id: 5,
          question: "Which saves the most energy at home?",
          options: ["Leaving lights on", "Turning off unused lights", "Using all appliances", "Keeping windows open"],
          correctAnswer: 1,
          explanation: "Turning off lights reduces electricity use and saves energy."
        },
        {
          id: 6,
          question: "What helps reduce transportation impact?",
          options: ["Driving alone always", "Walking short distances", "Using oldest car", "Idling engine"],
          correctAnswer: 1,
          explanation: "Walking eliminates fuel use and pollution for short trips."
        },
        {
          id: 7,
          question: "What is climate change causing?",
          options: ["Colder temperatures only", "Rising sea levels", "More oxygen", "Less sunlight"],
          correctAnswer: 1,
          explanation: "Melting glaciers and ice sheets are causing sea levels to rise."
        },
        {
          id: 8,
          question: "Which reduces packaging waste?",
          options: ["Buying bulk items", "Individual packaging", "Plastic bags", "Disposable containers"],
          correctAnswer: 0,
          explanation: "Bulk purchases use less packaging per amount of product."
        },
        {
          id: 9,
          question: "What do reusable bags replace?",
          options: ["Paper bags only", "Plastic bags only", "Single-use bags", "No bags"],
          correctAnswer: 2,
          explanation: "Reusable bags replace disposable plastic and paper bags."
        },
        {
          id: 10,
          question: "What is food waste composting?",
          options: ["Throwing in trash", "Turning into soil nutrient", "Burning", "Flushing"],
          correctAnswer: 1,
          explanation: "Composting converts food scraps into nutrient-rich soil amendment."
        },
        {
          id: 11,
          question: "What increases carbon footprint?",
          options: ["Solar panels", "Biking", "Frequent flying", "Public transit"],
          correctAnswer: 2,
          explanation: "Air travel produces significant greenhouse gas emissions per passenger."
        },
        {
          id: 12,
          question: "What protects natural areas?",
          options: ["More roads", "National parks", "Shopping malls", "Parking lots"],
          correctAnswer: 1,
          explanation: "National parks and protected areas conserve wildlife habitats."
        },
        {
          id: 13,
          question: "Which is renewable energy?",
          options: ["Coal", "Solar power", "Natural gas", "Oil"],
          correctAnswer: 1,
          explanation: "Solar energy from the sun is renewable and doesn't deplete resources."
        },
        {
          id: 14,
          question: "What do community gardens provide?",
          options: ["Only food", "Food and community space", "Parking", "Waste areas"],
          correctAnswer: 1,
          explanation: "Community gardens grow food while creating green community spaces."
        },
        {
          id: 15,
          question: "What is a positive trend?",
          options: ["More deforestation", "Growing renewable energy", "Increased pollution", "More waste"],
          correctAnswer: 1,
          explanation: "Renewable energy adoption is increasing worldwide."
        },
        {
          id: 16,
          question: "What reduces water pollution?",
          options: ["Proper chemical disposal", "Pouring down drain", "Throwing in trash", "Burning"],
          correctAnswer: 0,
          explanation: "Proper disposal prevents chemicals from entering water systems."
        },
        {
          id: 17,
          question: "What makes products more sustainable?",
          options: ["More packaging", "Disposable design", "Durability and repairability", "Cheap materials"],
          correctAnswer: 2,
          explanation: "Well-made, repairable products last longer and reduce waste."
        },
        {
          id: 18,
          question: "What does carpooling achieve?",
          options: ["More cars on road", "Less fuel per person", "More pollution", "Longer commutes"],
          correctAnswer: 1,
          explanation: "Carpooling reduces fuel use and emissions by sharing rides."
        },
        {
          id: 19,
          question: "What indicates environmental awareness?",
          options: ["Ignoring footprints", "Tracking resource use", "Wasting resources", "Avoiding information"],
          correctAnswer: 1,
          explanation: "Monitoring our environmental impact shows awareness and concern."
        },
        {
          id: 20,
          question: "Why do small actions matter?",
          options: ["They don't matter", "Only big actions count", "Millions doing small creates big change", "Governments must act alone"],
          correctAnswer: 2,
          explanation: "Collective small actions create significant environmental benefits."
        }
      ]
    },

    {
      // MODULE 6: SUSTAINABLE LIVING
      id: 6,
      title: "Sustainable Living: Practical Everyday Choices",
      completed: false,
      content: `# Sustainable Living: Practical Everyday Choices

Sustainable living means meeting our needs without harming future generations. It's not about perfection - it's about better choices every day.

## What Does Sustainable Mean?

**Three pillars of sustainability:**
1. **Environmental** - Protect nature
2. **Social** - Fairness for people
3. **Economic** - Support local economies

**Think of it as balance:**
- Take only what we need
- Give back when possible
- Think long-term, not just today
- Consider all living things

## Home Sustainability

**Energy efficiency:**
- LED light bulbs use less electricity
- Programmable thermostats save heating/cooling
- Insulation keeps homes comfortable
- Energy Star appliances use less power

**Water conservation:**
- Low-flow showerheads
- Dual-flush toilets
- Rainwater collection systems
- Drip irrigation for gardens

**Waste reduction:**
- Compost food scraps
- Recycle properly
- Avoid single-use items
- Buy in bulk to reduce packaging

## Sustainable Food Choices

**The food journey matters:**
1. **Growing** - Organic methods reduce chemicals
2. **Transporting** - Local food travels less distance
3. **Packaging** - Minimal packaging creates less waste
4. **Preparing** - Cooking efficiently saves energy
5. **Disposing** - Composting returns nutrients to soil

**Simple food rules:**
- Eat more plants, less meat
- Choose seasonal produce
- Support local farmers
- Reduce food waste
- Grow something yourself

## Green Transportation

**Transportation hierarchy (best to least sustainable):**
1. **Walking** - Zero emissions, healthy
2. **Biking** - Almost zero emissions, healthy
3. **Public transit** - Efficient, shared resources
4. **Carpooling** - Shared car, reduced emissions
5. **Electric vehicle** - Cleaner than gas
6. **Efficient gas vehicle** - Better than inefficient
7. **Large gas vehicle** - Least efficient

**Travel tips:**
- Combine errands into one trip
- Maintain vehicle for better efficiency
- Consider if you really need to travel
- Use video calls when possible

## Conscious Consumption

**Before buying anything, ask:**
1. Do I really need this?
2. How long will it last?
3. Can I borrow or rent instead?
4. Is there a more sustainable option?
5. What happens when I'm done with it?

**Shopping guidelines:**
- Quality over quantity
- Repair before replace
- Buy secondhand when possible
- Choose natural materials
- Support ethical companies

## Community Connection

**Local sustainability:**
- Community gardens
- Tool libraries (share instead of own)
- Repair cafes (fix things together)
- Food cooperatives
- Car-sharing programs

**Getting involved:**
- Join local environmental groups
- Participate in clean-up events
- Attend town meetings
- Educate friends and family
- Support green policies

## Simple Starting Points

**This week, try:**
- Meatless Monday (no meat one day)
- Walk or bike to one nearby destination
- Start a small compost bin
- Fix one thing instead of replacing
- Learn one new sustainable skill

**This month, try:**
- Calculate your carbon footprint
- Audit your home energy use
- Visit a local farmers market
- Plant something edible
- Reduce one type of waste

## Mindset Matters

**Sustainable thinking:**
- See connections between choices
- Consider long-term consequences
- Appreciate what you have
- Value experiences over things
- Practice gratitude for nature

**Overcoming challenges:**
- Start small - don't try to change everything at once
- Focus on progress, not perfection
- Celebrate successes
- Learn from setbacks
- Share your journey with others

Remember: Sustainability is a journey, not a destination. Every better choice moves us forward. You don't need to do everything - just do something!`,
      
      quiz: [
        {
          id: 1,
          question: "What are the three pillars of sustainability?",
          options: ["Air, water, land", "Environmental, social, economic", "Reduce, reuse, recycle", "Home, work, community"],
          correctAnswer: 1,
          explanation: "True sustainability balances environmental protection, social equity, and economic viability."
        },
        {
          id: 2,
          question: "Which light bulbs are most energy efficient?",
          options: ["Incandescent", "Halogen", "LED", "Fluorescent"],
          correctAnswer: 2,
          explanation: "LED bulbs use significantly less energy and last much longer than other types."
        },
        {
          id: 3,
          question: "What is the most sustainable transportation?",
          options: ["Walking", "Biking", "Public transit", "Electric car"],
          correctAnswer: 0,
          explanation: "Walking produces zero emissions and requires no resources beyond food energy."
        },
        {
          id: 4,
          question: "What does 'seasonal produce' mean?",
          options: ["Food available year-round", "Food grown in season locally", "Frozen food", "Canned food"],
          correctAnswer: 1,
          explanation: "Seasonal produce is harvested at its natural peak, requiring less energy for storage and transport."
        },
        {
          id: 5,
          question: "What should you ask before buying?",
          options: ["Is it on sale?", "Do I really need it?", "Is it popular?", "Is it new?"],
          correctAnswer: 1,
          explanation: "Questioning actual need prevents unnecessary consumption and waste."
        },
        {
          id: 6,
          question: "What do community gardens provide?",
          options: ["Only food", "Food and community space", "Private plots only", "Decoration only"],
          correctAnswer: 1,
          explanation: "Community gardens grow food while creating shared green spaces for neighborhoods."
        },
        {
          id: 7,
          question: "What is 'Meatless Monday'?",
          options: ["Eating only meat", "Avoiding meat one day weekly", "Extra meat day", "Meat preparation day"],
          correctAnswer: 1,
          explanation: "This simple practice reduces meat consumption's environmental impact."
        },
        {
          id: 8,
          question: "What helps reduce food packaging?",
          options: ["Individual servings", "Buying in bulk", "More plastic wrap", "Single-use containers"],
          correctAnswer: 1,
          explanation: "Bulk purchases use less packaging per amount of product."
        },
        {
          id: 9,
          question: "What is a repair cafe?",
          options: ["Coffee shop", "Place to fix items together", "New furniture store", "Car repair shop"],
          correctAnswer: 1,
          explanation: "Repair cafes bring people together to fix items instead of discarding them."
        },
        {
          id: 10,
          question: "What mindset helps sustainability?",
          options: ["Instant gratification", "Long-term thinking", "Disposable culture", "Individualism only"],
          correctAnswer: 1,
          explanation: "Considering long-term consequences leads to more sustainable choices."
        },
        {
          id: 11,
          question: "What saves home heating energy?",
          options: ["Open windows", "Good insulation", "Higher thermostat", "More electronics"],
          correctAnswer: 1,
          explanation: "Proper insulation reduces heat loss, lowering energy needs."
        },
        {
          id: 12,
          question: "What is conscious consumption?",
          options: ["Buying everything", "Thoughtful purchasing", "Impulse buying", "Following trends"],
          correctAnswer: 1,
          explanation: "Conscious consumption means considering the full impact of purchases."
        },
        {
          id: 13,
          question: "What reduces water use in bathrooms?",
          options: ["Long showers", "Low-flow fixtures", "Running taps", "Full bathtubs"],
          correctAnswer: 1,
          explanation: "Low-flow showerheads and faucets reduce water use without sacrificing function."
        },
        {
          id: 14,
          question: "What is a tool library?",
          options: ["Book about tools", "Place to share tools", "Tool store", "Tool museum"],
          correctAnswer: 1,
          explanation: "Tool libraries allow borrowing instead of buying rarely-used tools."
        },
        {
          id: 15,
          question: "What should you focus on when starting?",
          options: ["Changing everything", "Small steps", "Others' actions", "Future only"],
          correctAnswer: 1,
          explanation: "Starting with achievable small steps builds momentum for larger changes."
        },
        {
          id: 16,
          question: "What helps food waste reduction?",
          options: ["Larger portions", "Meal planning", "Throwing away", "Buying extra"],
          correctAnswer: 1,
          explanation: "Planning meals reduces over-purchasing and food waste."
        },
        {
          id: 17,
          question: "What supports local economy?",
          options: ["Online giants only", "Local businesses", "Imported goods", "Chain stores only"],
          correctAnswer: 1,
          explanation: "Local businesses keep money circulating in the community."
        },
        {
          id: 18,
          question: "What is sustainable about biking?",
          options: ["No emissions, healthy", "Expensive, polluting", "Energy intensive", "Requires fuel"],
          correctAnswer: 0,
          explanation: "Biking produces no emissions while providing health benefits."
        },
        {
          id: 19,
          question: "What should you celebrate in sustainability?",
          options: ["Only perfection", "Progress", "Others' failures", "Not trying"],
          correctAnswer: 1,
          explanation: "Celebrating progress encourages continued sustainable practices."
        },
        {
          id: 20,
          question: "What is the sustainability journey?",
          options: ["One-time change", "Continuous improvement", "Finished state", "Government only"],
          correctAnswer: 1,
          explanation: "Sustainability involves ongoing learning and improvement, not a final destination."
        }
      ]
    }
  ],

  // 3. FINAL EXAM (40 Questions - 6-7 questions from each module)
  finalExam: {
    id: "env-sci-cert-exam",
    title: "Environmental Science Certificate Final Exam",
    passingScore: 70,
    questions: [
      // Module 1 Questions (7)
      {
        id: 1,
        module: 1,
        question: "Which sphere includes all living things?",
        options: ["Atmosphere", "Hydrosphere", "Geosphere", "Biosphere"],
        correctAnswer: 3,
        explanation: "The biosphere contains all living organisms on Earth."
      },
      {
        id: 2,
        module: 1,
        question: "About how much of Earth is covered by oceans?",
        options: ["One-fourth", "Half", "Three-fourths", "All"],
        correctAnswer: 2,
        explanation: "Oceans cover approximately 71% (about three-fourths) of Earth's surface."
      },
      {
        id: 3,
        module: 1,
        question: "What is the air blanket around Earth called?",
        options: ["Hydrosphere", "Atmosphere", "Biosphere", "Geosphere"],
        correctAnswer: 1,
        explanation: "The atmosphere is the layer of gases surrounding our planet."
      },
      {
        id: 4,
        module: 1,
        question: "What process do plants use to make food?",
        options: ["Respiration", "Photosynthesis", "Evaporation", "Condensation"],
        correctAnswer: 1,
        explanation: "Photosynthesis converts sunlight into chemical energy."
      },
      {
        id: 5,
        module: 1,
        question: "What is the solid part of Earth?",
        options: ["Atmosphere", "Hydrosphere", "Geosphere", "Biosphere"],
        correctAnswer: 2,
        explanation: "The geosphere includes rocks, minerals, and landforms."
      },
      {
        id: 6,
        module: 1,
        question: "Where does most life exist?",
        options: ["Deep underground", "High atmosphere", "Where spheres meet", "Ocean trenches only"],
        correctAnswer: 2,
        explanation: "Life thrives where atmosphere, hydrosphere, and geosphere interact."
      },
      {
        id: 7,
        module: 1,
        question: "What is Earth's main energy source?",
        options: ["Moon", "Sun", "Earth's core", "Ocean currents"],
        correctAnswer: 1,
        explanation: "The Sun provides virtually all energy driving Earth's systems."

      },
      // Module 2 Questions (7)
      {
        id: 8,
        module: 2,
        question: "What two main parts make an ecosystem?",
        options: ["Plants only", "Living and non-living", "Animals only", "Water only"],
        correctAnswer: 1,
        explanation: "Ecosystems include biotic (living) and abiotic (non-living) components."
      },
      {
        id: 9,
        module: 2,
        question: "What are plants in a food chain?",
        options: ["Consumers", "Producers", "Decomposers", "Predators"],
        correctAnswer: 1,
        explanation: "Plants produce their own food through photosynthesis."
      },
      {
        id: 10,
        module: 2,
        question: "What breaks down dead material?",
        options: ["Producers", "Consumers", "Decomposers", "Herbivores"],
        correctAnswer: 2,
        explanation: "Decomposers like fungi recycle nutrients from dead organisms."
      },
      {
        id: 11,
        module: 2,
        question: "Which ecosystem has little rainfall?",
        options: ["Forest", "Grassland", "Desert", "Freshwater"],
        correctAnswer: 2,
        explanation: "Deserts receive minimal annual precipitation."
      },
      {
        id: 12,
        module: 2,
        question: "What do herbivores eat?",
        options: ["Animals only", "Plants only", "Both", "Dead material"],
        correctAnswer: 1,
        explanation: "Herbivores are plant-eating animals."
      },
      {
        id: 13,
        module: 2,
        question: "What are coral reefs called?",
        options: ["Deserts of sea", "Rainforests of sea", "Grasslands of sea", "Tundras of sea"],
        correctAnswer: 1,
        explanation: "Coral reefs have exceptional biodiversity like rainforests."
      },
      {
        id: 14,
        module: 2,
        question: "What maintains ecosystem balance?",
        options: ["One species", "Natural relationships", "Human control", "No balance"],
        correctAnswer: 1,
        explanation: "Predator-prey and other natural relationships maintain balance."
      },
      // Module 3 Questions (7)
      {
        id: 15,
        module: 3,
        question: "What is water's continuous movement?",
        options: ["Rock cycle", "Water cycle", "Carbon cycle", "Air cycle"],
        correctAnswer: 1,
        explanation: "The water cycle describes water's path through Earth's systems."
      },
      {
        id: 16,
        module: 3,
        question: "What percentage of air is oxygen?",
        options: ["78%", "21%", "50%", "1%"],
        correctAnswer: 1,
        explanation: "Oxygen makes up about 21% of Earth's atmosphere."
      },
      {
        id: 17,
        module: 3,
        question: "What do plants use for photosynthesis?",
        options: ["Oxygen", "Carbon dioxide", "Nitrogen", "Water only"],
        correctAnswer: 1,
        explanation: "Plants absorb carbon dioxide for photosynthesis."
      },
      {
        id: 18,
        module: 3,
        question: "What forms when vapor cools?",
        options: ["Rain", "Clouds", "Steam", "Ice"],
        correctAnswer: 1,
        explanation: "Cooling water vapor condenses into cloud droplets."
      },
      {
        id: 19,
        module: 3,
        question: "What protects from UV radiation?",
        options: ["Clouds", "Ozone layer", "Oxygen", "Nitrogen"],
        correctAnswer: 1,
        explanation: "The ozone layer blocks harmful ultraviolet radiation."
      },
      {
        id: 20,
        module: 3,
        question: "What causes acid rain?",
        options: ["Clean water", "Air pollution", "Natural cycle", "Plant growth"],
        correctAnswer: 1,
        explanation: "Pollutants mixing with precipitation create acid rain."
      },
      {
        id: 21,
        module: 3,
        question: "What saves water at home?",
        options: ["Leaky faucets", "Rain barrels", "Long showers", "Running taps"],
        correctAnswer: 1,
        explanation: "Rain barrels collect free rainwater for reuse."
      },
      // Module 4 Questions (6)
      {
        id: 22,
        module: 4,
        question: "Which soil layer is richest?",
        options: ["Bedrock", "Subsoil", "Topsoil", "Parent material"],
        correctAnswer: 2,
        explanation: "Topsoil contains the most organic matter and microorganisms."
      },
      {
        id: 23,
        module: 4,
        question: "What do plants release in photosynthesis?",
        options: ["Carbon dioxide", "Oxygen", "Nitrogen", "Soil"],
        correctAnswer: 1,
        explanation: "Oxygen is a byproduct of photosynthesis."
      },
      {
        id: 24,
        module: 4,
        question: "What indicates healthy soil?",
        options: ["No life", "Earthworms", "Hard surface", "Gray color"],
        correctAnswer: 1,
        explanation: "Earthworms indicate active, nutrient-rich soil."
      },
      {
        id: 25,
        module: 4,
        question: "What is soil erosion?",
        options: ["Soil building", "Soil removal", "Planting", "Watering"],
        correctAnswer: 1,
        explanation: "Erosion is the wearing away of topsoil by wind or water."
      },
      {
        id: 26,
        module: 4,
        question: "What helps prevent erosion?",
        options: ["Bare soil", "Cover crops", "Over-watering", "Compaction"],
        correctAnswer: 1,
        explanation: "Cover crops protect soil between growing seasons."
      },
      {
        id: 27,
        module: 4,
        question: "What makes soil dark?",
        options: ["Clay", "Sand", "Organic matter", "Rocks"],
        correctAnswer: 2,
        explanation: "Decomposed organic material gives soil dark color."
      },
      // Module 5 Questions (6)
      {
        id: 28,
        module: 5,
        question: "What measures resource use?",
        options: ["Carbon footprint", "Ecological footprint", "Water only", "Air only"],
        correctAnswer: 1,
        explanation: "Ecological footprint calculates land/resources needed."
      },
      {
        id: 29,
        module: 5,
        question: "Which is most effective: Reduce, Reuse, Recycle?",
        options: ["Recycle", "Reuse", "Reduce", "All equal"],
        correctAnswer: 2,
        explanation: "Reducing consumption prevents waste creation."
      },
      {
        id: 30,
        module: 5,
        question: "What increases greenhouse gases?",
        options: ["Solar panels", "Biking", "Burning fossil fuels", "Trees"],
        correctAnswer: 2,
        explanation: "Burning coal, oil, and gas releases carbon dioxide."
      },
      {
        id: 31,
        module: 5,
        question: "What reduces packaging waste?",
        options: ["Individual packs", "Bulk buying", "More plastic", "Disposable"],
        correctAnswer: 1,
        explanation: "Bulk purchases minimize packaging per product."
      },
      {
        id: 32,
        module: 5,
        question: "What is renewable energy?",
        options: ["Coal", "Solar", "Natural gas", "Oil"],
        correctAnswer: 1,
        explanation: "Solar energy from the sun is renewable."
      },
      {
        id: 33,
        module: 5,
        question: "What do small actions create?",
        options: ["No impact", "Big collective change", "Only individual benefit", "More work"],
        correctAnswer: 1,
        explanation: "Millions making small changes creates significant impact."
      },
      // Module 6 Questions (7)
      {
        id: 34,
        module: 6,
        question: "What are sustainability's three pillars?",
        options: ["Air, water, land", "Environmental, social, economic", "Home, work, play", "Reduce, reuse, recycle"],
        correctAnswer: 1,
        explanation: "True sustainability balances these three aspects."
      },
      {
        id: 35,
        module: 6,
        question: "What is most sustainable transport?",
        options: ["Walking", "Electric car", "Gas car", "Plane"],
        correctAnswer: 0,
        explanation: "Walking produces zero emissions and is healthy."
      },
      {
        id: 36,
        module: 6,
        question: "What should you ask before buying?",
        options: ["Is it cheap?", "Do I need it?", "Is it trendy?", "Is it imported?"],
        correctAnswer: 1,
        explanation: "Questioning need prevents unnecessary consumption."
      },
      {
        id: 37,
        module: 6,
        question: "What is a repair cafe?",
        options: ["Coffee shop", "Fixing items together", "New store", "Throw-away place"],
        correctAnswer: 1,
        explanation: "Community spaces where people repair items together."
      },
      {
        id: 38,
        module: 6,
        question: "What helps start sustainably?",
        options: ["Change everything", "Small steps", "Wait for others", "Do nothing"],
        correctAnswer: 1,
        explanation: "Small, achievable steps build sustainable habits."
      },
      {
        id: 39,
        module: 6,
        question: "What saves home energy?",
        options: ["Open windows", "Good insulation", "More electronics", "Higher thermostat"],
        correctAnswer: 1,
        explanation: "Insulation reduces heating and cooling needs."
      },
      {
        id: 40,
        module: 6,
        question: "What is sustainability?",
        options: ["One-time change", "Continuous journey", "Finished state", "Government only"],
        correctAnswer: 1,
        explanation: "Sustainability involves ongoing improvement and learning."
      }
    ]
  }
};

export default environmentalScienceCertificate;

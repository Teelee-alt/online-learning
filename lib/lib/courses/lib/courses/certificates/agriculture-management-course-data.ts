export const AgricultureManagementCertificate = {
  // COURSE METADATA & IDENTIFICATION
  id: "agriculture-management-certificate",
  title: "Agriculture Management (Certificate)",
  description: "Fundamental course covering modern agricultural management practices, farm operations, sustainable practices, and business principles for agricultural enterprises. Perfect for new farmers, farm managers, and agriculture professionals.",
  duration: "8 weeks",
  timeCommitment: "5-7 hours per week",
  price: 12,
  upgradePrice: 18,
  icon: "🌾",
  badge: "Certificate",
  prerequisite: "No prior experience required",
  
  // MODULE ARCHITECTURE - 6 COMPREHENSIVE MODULES
  modules: [
    // MODULE 1: INTRODUCTION TO MODERN AGRICULTURE
    {
      id: 1,
      title: "Introduction to Modern Agriculture",
      content: `# Foundations of Modern Agriculture

Agriculture is the science, art, and business of cultivating plants and raising animals for food, fiber, medicinal plants, and other products used to sustain and enhance human life. Modern agriculture has evolved significantly from traditional practices to incorporate technology, sustainability, and business management.

## The Global Agricultural Landscape

**Global Food Production Statistics**:
- Agriculture employs **over 1 billion people** worldwide (approximately 28% of global workforce)
- **Crop production accounts for 83%** of global food energy consumption
- The top 5 agricultural producing countries are: China, India, United States, Brazil, and Russia
- **Small farms (less than 2 hectares)** operate approximately 12% of the world's agricultural land but produce about 35% of the world's food

**Major Agricultural Sectors**:
1. **Crop Production**: Grains, fruits, vegetables, oilseeds
2. **Livestock Production**: Cattle, poultry, swine, dairy
3. **Horticulture**: Specialty crops, floriculture, nursery plants
4. **Aquaculture**: Fish, shellfish, aquatic plants

## Agricultural Systems and Practices

**Conventional Agriculture**: Uses modern technology, synthetic fertilizers, pesticides, and machinery. Represents **approximately 70%** of global agricultural production.

**Sustainable Agriculture**: Focuses on environmental health, economic profitability, and social equity. Key principles include:
- Soil conservation and health
- Water management and conservation
- Biodiversity preservation
- Integrated pest management

**Organic Agriculture**: Prohibits synthetic fertilizers and pesticides. Currently represents **about 1.5%** of total agricultural land globally but is growing at **approximately 8-10% annually**.

**Precision Agriculture**: Uses technology (GPS, sensors, drones) to optimize field-level management. Adopted by **approximately 30%** of large farms in developed countries.

## Key Agricultural Concepts

**Soil Health**: The foundation of agricultural productivity. Healthy soil contains:
- **45% minerals** (sand, silt, clay)
- **25% water**
- **25% air**
- **5% organic matter** (ideal target)

**Water Management**: Agriculture accounts for **approximately 70%** of global freshwater withdrawals. Efficient irrigation methods can reduce water use by **20-60%**.

**Plant Nutrition**: Essential nutrients for plant growth include:
- **Primary nutrients**: Nitrogen (N), Phosphorus (P), Potassium (K)
- **Secondary nutrients**: Calcium, Magnesium, Sulfur
- **Micronutrients**: Iron, Zinc, Copper, etc.

**Climate and Agriculture**: Agriculture is both affected by and contributes to climate change, responsible for **approximately 24%** of global greenhouse gas emissions.

## Agricultural Economics Basics

**Farm Size Distribution**:
- **Small farms**: Less than 50 acres (25% of total farmland)
- **Medium farms**: 50-500 acres (40% of total farmland)
- **Large farms**: Over 500 acres (35% of total farmland)

**Agricultural Value Chain**: From production to consumption:
1. Input suppliers (seeds, fertilizers, equipment)
2. Producers (farmers)
3. Processors
4. Distributors
5. Retailers
6. Consumers

**Agricultural Subsidies**: Government support accounts for **approximately 20%** of farm income in developed countries.

The global agricultural market is valued at **over $3 trillion annually**, with food and beverage representing the largest sector. By 2050, global food production will need to increase by **approximately 60%** to feed a projected population of 9.7 billion people.`,
      completed: false,
      quiz: [
        {
          id: 1,
          question: "What percentage of the global workforce is employed in agriculture?",
          options: ["18%", "23%", "28%", "33%"],
          correctAnswer: 2,
          explanation: "Agriculture employs over 1 billion people worldwide, which is approximately 28% of the global workforce."
        },
        {
          id: 2,
          question: "What percentage of global food energy consumption comes from crop production?",
          options: ["73%", "78%", "83%", "88%"],
          correctAnswer: 2,
          explanation: "Crop production accounts for 83% of global food energy consumption, with the remainder from livestock and fisheries."
        },
        {
          id: 3,
          question: "What percentage of agricultural land is operated by small farms (less than 2 hectares)?",
          options: ["8%", "12%", "16%", "20%"],
          correctAnswer: 1,
          explanation: "Small farms operate approximately 12% of the world's agricultural land but produce about 35% of the world's food."
        },
        {
          id: 4,
          question: "What percentage of global agricultural production comes from conventional agriculture?",
          options: ["60%", "65%", "70%", "75%"],
          correctAnswer: 2,
          explanation: "Conventional agriculture, using modern technology and inputs, represents approximately 70% of global agricultural production."
        },
        {
          id: 5,
          question: "What is the ideal percentage of organic matter in healthy soil?",
          options: ["3%", "5%", "7%", "10%"],
          correctAnswer: 1,
          explanation: "Healthy soil ideally contains 5% organic matter, along with 45% minerals, 25% water, and 25% air."
        },
        {
          id: 6,
          question: "What percentage of global freshwater withdrawals are used for agriculture?",
          options: ["60%", "65%", "70%", "75%"],
          correctAnswer: 2,
          explanation: "Agriculture accounts for approximately 70% of global freshwater withdrawals, making efficient water management crucial."
        },
        {
          id: 7,
          question: "What is the annual growth rate of organic agriculture?",
          options: ["4-6%", "6-8%", "8-10%", "10-12%"],
          correctAnswer: 2,
          explanation: "Organic agriculture is growing at approximately 8-10% annually, though it still represents only about 1.5% of total agricultural land."
        },
        {
          id: 8,
          question: "What percentage of large farms in developed countries have adopted precision agriculture?",
          options: ["20%", "25%", "30%", "35%"],
          correctAnswer: 2,
          explanation: "Precision agriculture is adopted by approximately 30% of large farms in developed countries."
        },
        {
          id: 9,
          question: "What percentage of global greenhouse gas emissions come from agriculture?",
          options: ["18%", "22%", "24%", "28%"],
          correctAnswer: 2,
          explanation: "Agriculture is responsible for approximately 24% of global greenhouse gas emissions, both directly and indirectly."
        },
        {
          id: 10,
          question: "What is the current value of the global agricultural market annually?",
          options: ["$2 trillion", "$2.5 trillion", "$3 trillion", "$3.5 trillion"],
          correctAnswer: 2,
          explanation: "The global agricultural market is valued at over $3 trillion annually, making it one of the world's largest economic sectors."
        },
        {
          id: 11,
          question: "By what percentage must global food production increase by 2050?",
          options: ["50%", "55%", "60%", "65%"],
          correctAnswer: 2,
          explanation: "Global food production will need to increase by approximately 60% by 2050 to feed a projected population of 9.7 billion people."
        },
        {
          id: 12,
          question: "What percentage of farm income in developed countries comes from government subsidies?",
          options: ["15%", "20%", "25%", "30%"],
          correctAnswer: 1,
          explanation: "Government agricultural subsidies account for approximately 20% of farm income in developed countries."
        },
        {
          id: 13,
          question: "Which of these is NOT a primary plant nutrient?",
          options: ["Nitrogen", "Phosphorus", "Potassium", "Calcium"],
          correctAnswer: 3,
          explanation: "Calcium is a secondary nutrient, while Nitrogen, Phosphorus, and Potassium are the three primary nutrients essential for plant growth."
        },
        {
          id: 14,
          question: "What percentage of total farmland is operated by medium-sized farms (50-500 acres)?",
          options: ["35%", "40%", "45%", "50%"],
          correctAnswer: 1,
          explanation: "Medium-sized farms (50-500 acres) operate approximately 40% of total farmland in most agricultural economies."
        },
        {
          id: 15,
          question: "How much can efficient irrigation methods reduce water use?",
          options: ["10-30%", "15-40%", "20-60%", "25-70%"],
          correctAnswer: 2,
          explanation: "Efficient irrigation methods such as drip irrigation can reduce agricultural water use by 20-60% compared to traditional flood irrigation."
        },
        {
          id: 16,
          question: "What percentage of the world's food is produced by small farms?",
          options: ["25%", "30%", "35%", "40%"],
          correctAnswer: 2,
          explanation: "Small farms (less than 2 hectares) produce about 35% of the world's food, despite operating only 12% of agricultural land."
        },
        {
          id: 17,
          question: "Which country is NOT among the top 5 agricultural producers?",
          options: ["China", "India", "United States", "Canada"],
          correctAnswer: 3,
          explanation: "The top 5 agricultural producing countries are China, India, United States, Brazil, and Russia."
        },
        {
          id: 18,
          question: "What percentage of organic matter is in ideal soil composition?",
          options: ["2-4%", "4-6%", "5-7%", "6-8%"],
          correctAnswer: 1,
          explanation: "Ideal soil contains 5% organic matter, which is crucial for soil structure, water retention, and nutrient availability."
        },
        {
          id: 19,
          question: "What is the current global percentage of agricultural land under organic management?",
          options: ["0.8%", "1.2%", "1.5%", "2.0%"],
          correctAnswer: 2,
          explanation: "Organic agriculture currently represents about 1.5% of total agricultural land globally, though it's growing rapidly."
        },
        {
          id: 20,
          question: "Which sector accounts for the largest portion of the global agricultural market?",
          options: ["Livestock", "Grains", "Fruits and Vegetables", "Food and Beverage"],
          correctAnswer: 3,
          explanation: "The food and beverage sector represents the largest portion of the global agricultural market, valued at over $3 trillion annually."
        }
      ]
    },

    // MODULE 2: SOIL SCIENCE AND CROP MANAGEMENT
    {
      id: 2,
      title: "Soil Science and Crop Management",
      content: `# Soil Management and Crop Production

Soil is the foundation of agricultural productivity, providing physical support, water, air, and nutrients to plants. Understanding soil science is essential for effective crop management and sustainable agriculture.

## Soil Composition and Properties

**Soil Texture Triangle**: Classification based on percentages of sand, silt, and clay:
- **Sandy soils**: Good drainage but poor nutrient retention
- **Clay soils**: Good nutrient retention but poor drainage
- **Loam soils**: Ideal mixture (approximately 40% sand, 40% silt, 20% clay)

**Soil pH**: Measure of acidity/alkalinity on scale of 0-14:
- **Most crops prefer pH 6.0-7.5**
- **Below 6.0**: Acidic soils (common in high rainfall areas)
- **Above 7.5**: Alkaline soils (common in arid regions)
- Soil pH affects nutrient availability; **at pH 6.0-7.0, most nutrients are optimally available**

**Soil Organic Matter**: Crucial for soil health:
- Improves water retention (each 1% increase holds **20,000+ gallons more water per acre**)
- Enhances nutrient availability
- Supports beneficial microorganisms
- Target: **3-5% organic matter** for productive agricultural soils

## Essential Plant Nutrients

**Macronutrients** (required in large quantities):
1. **Nitrogen (N)**: Promotes leafy growth, protein synthesis
2. **Phosphorus (P)**: Root development, flowering, fruiting
3. **Potassium (K)**: Overall plant health, disease resistance
4. **Calcium (Ca)**: Cell wall structure
5. **Magnesium (Mg)**: Chlorophyll component
6. **Sulfur (S)**: Protein and vitamin synthesis

**Micronutrients** (required in small quantities):
- Iron, Zinc, Copper, Manganese, Boron, Molybdenum, Chlorine

**Nutrient Deficiency Symptoms**:
- **Nitrogen deficiency**: Yellowing of older leaves
- **Phosphorus deficiency**: Purple or reddish leaves
- **Potassium deficiency**: Brown leaf edges, weak stems
- **Iron deficiency**: Yellowing between leaf veins

## Crop Rotation and Planning

**Benefits of Crop Rotation**:
- Reduces pest and disease pressure by **40-60%**
- Improves soil fertility
- Breaks weed cycles
- Increases yields by **10-25%**

**Common Rotation Systems**:
- **Two-year rotation**: Corn-Soybeans (common in Midwest US)
- **Three-year rotation**: Corn-Soybeans-Wheat
- **Four-year rotation**: Corn-Soybeans-Wheat-Cover crop

**Cover Crops**: Plants grown primarily to benefit the soil:
- **Legumes**: Fix atmospheric nitrogen (e.g., clover, vetch)
- **Grasses**: Prevent erosion, add organic matter (e.g., rye, oats)
- **Brassicas**: Break up compacted soil (e.g., radish, turnip)

Cover crops can reduce soil erosion by **75-95%** and increase soil organic matter by **0.1-0.3% annually**.

## Irrigation Management

**Irrigation Methods and Efficiency**:
- **Flood irrigation**: 50-70% efficiency
- **Sprinkler irrigation**: 70-85% efficiency
- **Drip irrigation**: 85-95% efficiency (most efficient)

**Water Requirements by Crop**:
- **Corn**: 22-28 inches per growing season
- **Wheat**: 18-24 inches per growing season
- **Soybeans**: 20-25 inches per growing season
- **Alfalfa**: 36-48 inches per growing season

**Irrigation Scheduling**: Based on:
- Soil moisture monitoring
- Evapotranspiration rates
- Crop growth stage
- Weather forecasts

Proper irrigation scheduling can increase water use efficiency by **15-25%**.

## Integrated Pest Management (IPM)

**IPM Principles**:
1. **Prevention**: Cultural practices to avoid pest problems
2. **Monitoring**: Regular scouting and pest identification
3. **Thresholds**: Action levels based on economic impact
4. **Control**: Using multiple methods when needed

**IPM Control Methods**:
- **Cultural**: Crop rotation, sanitation, resistant varieties
- **Biological**: Natural predators, parasites, pathogens
- **Mechanical**: Traps, barriers, hand removal
- **Chemical**: Pesticides as last resort

IPM programs can reduce pesticide use by **30-50%** while maintaining or increasing yields.

**Economic Threshold Levels**: Examples:
- **Corn rootworm**: 1 beetle per plant
- **Soybean aphid**: 250 aphids per plant
- **Wheat stem sawfly**: 10-15% infestation

Studies show that proper soil management practices can increase crop yields by **20-40%** while reducing input costs by **15-25%**. Soil testing, conducted every **2-3 years**, is one of the most cost-effective management tools, returning **$10-100 for every $1 invested** in testing.`,
      completed: false,
      quiz: [
        {
          id: 1,
          question: "What is the ideal soil pH range for most crops?",
          options: ["5.0-6.0", "5.5-6.5", "6.0-7.5", "6.5-8.0"],
          correctAnswer: 2,
          explanation: "Most crops prefer soil pH between 6.0 and 7.5, where essential nutrients are most available to plants."
        },
        {
          id: 2,
          question: "How much additional water can each 1% increase in soil organic matter hold per acre?",
          options: ["10,000+ gallons", "15,000+ gallons", "20,000+ gallons", "25,000+ gallons"],
          correctAnswer: 2,
          explanation: "Each 1% increase in soil organic matter can hold 20,000+ gallons more water per acre, improving drought resistance."
        },
        {
          id: 3,
          question: "What percentage reduction in pest pressure can crop rotation achieve?",
          options: ["20-40%", "30-50%", "40-60%", "50-70%"],
          correctAnswer: 2,
          explanation: "Proper crop rotation can reduce pest and disease pressure by 40-60% by breaking pest life cycles."
        },
        {
          id: 4,
          question: "What is the water use efficiency of drip irrigation?",
          options: ["70-80%", "75-85%", "80-90%", "85-95%"],
          correctAnswer: 3,
          explanation: "Drip irrigation is the most efficient method with 85-95% water use efficiency, compared to 50-70% for flood irrigation."
        },
        {
          id: 5,
          question: "How much can cover crops reduce soil erosion?",
          options: ["50-70%", "60-80%", "75-95%", "85-99%"],
          correctAnswer: 2,
          explanation: "Cover crops can reduce soil erosion by 75-95% by protecting soil surface and improving soil structure."
        },
        {
          id: 6,
          question: "What is the target organic matter percentage for productive agricultural soils?",
          options: ["2-4%", "3-5%", "4-6%", "5-7%"],
          correctAnswer: 1,
          explanation: "Productive agricultural soils should maintain 3-5% organic matter for optimal soil health and productivity."
        },
        {
          id: 7,
          question: "How much can IPM programs reduce pesticide use?",
          options: ["20-40%", "30-50%", "40-60%", "50-70%"],
          correctAnswer: 1,
          explanation: "Integrated Pest Management programs can reduce pesticide use by 30-50% while maintaining crop yields."
        },
        {
          id: 8,
          question: "What is the typical water requirement for corn during a growing season?",
          options: ["18-22 inches", "20-25 inches", "22-28 inches", "25-30 inches"],
          correctAnswer: 2,
          explanation: "Corn typically requires 22-28 inches of water during a growing season, depending on climate and variety."
        },
        {
          id: 9,
          question: "How often should soil testing be conducted?",
          options: ["Every year", "Every 2-3 years", "Every 4-5 years", "Every 5-7 years"],
          correctAnswer: 1,
          explanation: "Soil testing should be conducted every 2-3 years to monitor nutrient levels and pH for optimal crop production."
        },
        {
          id: 10,
          question: "What is the return on investment for soil testing?",
          options: ["$2-10 per $1", "$5-20 per $1", "$10-100 per $1", "$20-200 per $1"],
          correctAnswer: 2,
          explanation: "Soil testing returns $10-100 for every $1 invested by optimizing fertilizer applications and improving yields."
        },
        {
          id: 11,
          question: "What nutrient deficiency causes yellowing of older leaves?",
          options: ["Nitrogen", "Phosphorus", "Potassium", "Iron"],
          correctAnswer: 0,
          explanation: "Nitrogen deficiency causes yellowing (chlorosis) of older leaves because nitrogen is mobile within the plant."
        },
        {
          id: 12,
          question: "How much can proper irrigation scheduling increase water use efficiency?",
          options: ["10-20%", "15-25%", "20-30%", "25-35%"],
          correctAnswer: 1,
          explanation: "Proper irrigation scheduling based on soil moisture and crop needs can increase water use efficiency by 15-25%."
        },
        {
          id: 13,
          question: "What is the approximate composition of ideal loam soil?",
          options: ["30% sand, 40% silt, 30% clay", "40% sand, 40% silt, 20% clay", "50% sand, 30% silt, 20% clay", "30% sand, 50% silt, 20% clay"],
          correctAnswer: 1,
          explanation: "Ideal loam soil contains approximately 40% sand, 40% silt, and 20% clay, providing good drainage and nutrient retention."
        },
        {
          id: 14,
          question: "How much can cover crops increase soil organic matter annually?",
          options: ["0.05-0.15%", "0.1-0.3%", "0.2-0.4%", "0.3-0.5%"],
          correctAnswer: 1,
          explanation: "Regular use of cover crops can increase soil organic matter by 0.1-0.3% annually, improving soil health over time."
        },
        {
          id: 15,
          question: "What is the economic threshold for soybean aphids?",
          options: ["100 aphids per plant", "250 aphids per plant", "500 aphids per plant", "750 aphids per plant"],
          correctAnswer: 1,
          explanation: "The economic threshold for soybean aphids is typically 250 aphids per plant, when treatment becomes economically justified."
        },
        {
          id: 16,
          question: "What percentage yield increase can crop rotation provide?",
          options: ["5-15%", "10-25%", "15-30%", "20-35%"],
          correctAnswer: 1,
          explanation: "Proper crop rotation can increase yields by 10-25% compared to continuous monocropping."
        },
        {
          id: 17,
          question: "Which irrigation method has the lowest efficiency?",
          options: ["Drip irrigation", "Sprinkler irrigation", "Flood irrigation", "Subsurface irrigation"],
          correctAnswer: 2,
          explanation: "Flood irrigation has the lowest efficiency at 50-70%, losing significant water to evaporation and runoff."
        },
        {
          id: 18,
          question: "What nutrient deficiency causes purple or reddish leaves?",
          options: ["Nitrogen", "Phosphorus", "Potassium", "Magnesium"],
          correctAnswer: 1,
          explanation: "Phosphorus deficiency causes purple or reddish coloration in leaves, especially in young plants."
        },
        {
          id: 19,
          question: "What is the water requirement for alfalfa per growing season?",
          options: ["24-36 inches", "30-42 inches", "36-48 inches", "42-54 inches"],
          correctAnswer: 2,
          explanation: "Alfalfa has high water requirements, needing 36-48 inches per growing season due to its deep root system and long growing period."
        },
        {
          id: 20,
          question: "How much can proper soil management increase crop yields?",
          options: ["10-30%", "15-35%", "20-40%", "25-45%"],
          correctAnswer: 2,
          explanation: "Proper soil management practices can increase crop yields by 20-40% while reducing input costs by 15-25%."
        }
      ]
    },

    // MODULE 3: LIVESTOCK MANAGEMENT
    {
      id: 3,
      title: "Livestock Production and Management",
      content: `# Principles of Livestock Management

Livestock production is a crucial component of global agriculture, providing meat, dairy, eggs, fiber, and other products. Modern livestock management combines animal science, nutrition, health care, and business principles.

## Major Livestock Species and Production Systems

**Cattle Production**:
- **Beef cattle**: Approximately **1 billion head** globally
- **Dairy cattle**: Approximately **270 million head** globally
- **Production systems**: 
  - Extensive grazing systems
  - Intensive feedlot systems
  - Mixed crop-livestock systems

**Poultry Production**:
- **Chickens**: Over **33 billion** raised annually worldwide
- **Production systems**:
  - Conventional cage systems
  - Cage-free systems
  - Free-range systems
  - Pasture-based systems

**Swine Production**:
- **Pigs**: Approximately **1 billion head** globally
- **Production systems**:
  - Confinement systems
  - Pasture-based systems
  - Farrow-to-finish operations

**Sheep and Goats**:
- **Sheep**: Approximately **1.2 billion head** globally
- **Goats**: Approximately **1 billion head** globally
- Primary products: Meat, milk, fiber, skins

## Animal Nutrition and Feeding

**Basic Nutritional Requirements**:
- **Water**: Most critical nutrient (animals consume **2-5 times more water than dry feed**)
- **Energy**: Provided by carbohydrates and fats
- **Protein**: Essential for growth, reproduction, milk production
- **Minerals and Vitamins**: Required for metabolic functions

**Feed Efficiency Measures**:
- **Feed Conversion Ratio (FCR)**: Feed required per unit of gain
  - **Broiler chickens**: 1.6-1.8:1 (best efficiency)
  - **Pigs**: 2.5-3.5:1
  - **Beef cattle**: 6-10:1
  - **Dairy cows**: 0.8-1.2:1 (milk production basis)

**Common Feed Types**:
- **Forages**: Pasture, hay, silage
- **Concentrates**: Grains, protein meals
- **By-products**: Distillers grains, beet pulp, citrus pulp

## Animal Health and Welfare

**Common Livestock Diseases**:
- **Bovine Respiratory Disease**: Costs U.S. beef industry **$1 billion annually**
- **Mastitis** (dairy cows): Most costly disease, **$2 billion annually** in U.S.
- **Avian Influenza**: Can cause **up to 100% mortality** in poultry flocks
- **Porcine Reproductive & Respiratory Syndrome (PRRS)**: Costs U.S. pork industry **$664 million annually**

**Preventive Health Management**:
- **Vaccination programs**: Core component of disease prevention
- **Biosecurity measures**: Limit disease introduction and spread
- **Parasite control**: Internal and external parasites
- **Regular monitoring**: Health checks and production records

**Animal Welfare Principles** (Five Freedoms):
1. Freedom from hunger and thirst
2. Freedom from discomfort
3. Freedom from pain, injury, or disease
4. Freedom to express normal behavior
5. Freedom from fear and distress

## Reproduction and Genetics

**Reproductive Efficiency**:
- **Cattle**: Calving interval target **365 days**, conception rate **60-65%**
- **Swine**: Farrowing rate target **85-90%**, pigs weaned per litter **10-12**
- **Poultry**: Hatchability **85-90%** for fertile eggs

**Genetic Improvement**:
- **Selection criteria**: Growth rate, feed efficiency, disease resistance, product quality
- **Artificial Insemination (AI)**: Used in **60-70%** of dairy cattle, **90%** of swine in commercial operations
- **Expected Progeny Differences (EPDs)**: Genetic predictions for selection

**Crossbreeding Benefits**:
- **Heterosis (hybrid vigor)**: 10-20% improvement in traits
- **Complementarity**: Combining strengths of different breeds
- Common in beef cattle (**up to 75%** of commercial herds use crossbreeding)

## Facilities and Equipment

**Housing Systems Design**:
- **Ventilation requirements**: 4-8 air changes per hour in winter, 30-60 in summer
- **Space requirements** per animal:
  - **Dairy cows**: 100-150 sq ft per animal
  - **Beef feedlot**: 20-30 sq ft per animal
  - **Finishing pigs**: 8-10 sq ft per animal
  - **Broilers**: 0.8-1.0 sq ft per bird

**Waste Management**:
- **Manure production rates**:
  - **Dairy cow**: 120-150 lbs/day (85% moisture)
  - **Beef feedlot**: 65-80 lbs/day
  - **Finishing pig**: 10-12 lbs/day
  - **Layer hen**: 0.25 lbs/day
- **Nutrient content**: Manure contains **approximately 75%** of nutrients consumed by animals

**Equipment Requirements**:
- Feeding systems
- Watering systems
- Ventilation systems
- Manure handling equipment
- Handling facilities for animal movement

## Production Economics

**Cost Structure in Livestock Production**:
- **Feed costs**: Typically **60-70%** of total production costs
- **Labor costs**: 10-15% of total costs
- **Capital costs**: 15-20% of total costs
- **Health/veterinary costs**: 3-5% of total costs

**Break-even Analysis**:
- **Beef cattle**: Typically need **$1.20-$1.40 per pound** live weight to break even
- **Dairy cows**: Need **$15-$18 per hundredweight** milk to break even
- **Market hogs**: Need **$50-$60 per hundredweight** to break even
- **Broilers**: Need **$0.50-$0.60 per pound** live weight to break even

**Productivity Benchmarks**:
- **Dairy**: 22,000-25,000 lbs milk per cow annually (U.S. average)
- **Beef**: 600-700 lbs weaning weight at 205 days
- **Swine**: 2.5 litters per sow annually, 25-30 pigs weaned per sow yearly
- **Poultry**: 5-6 lbs live weight at 42 days (broilers), 280-300 eggs per hen annually (layers)

The global livestock sector contributes **approximately 40%** of agricultural GDP and provides livelihoods for **1.3 billion people**. Proper management can improve feed efficiency by **10-15%**, reduce mortality by **20-30%**, and increase profitability by **15-25%**.`,
      completed: false,
      quiz: [
        {
          id: 1,
          question: "How many chickens are raised annually worldwide?",
          options: ["25 billion", "30 billion", "33 billion", "38 billion"],
          correctAnswer: 2,
          explanation: "Over 33 billion chickens are raised annually worldwide, making poultry the most numerous livestock species."
        },
        {
          id: 2,
          question: "What is the Feed Conversion Ratio for broiler chickens?",
          options: ["1.2-1.4:1", "1.4-1.6:1", "1.6-1.8:1", "1.8-2.0:1"],
          correctAnswer: 2,
          explanation: "Broiler chickens have the best feed efficiency with FCR of 1.6-1.8:1, meaning 1.6-1.8 pounds of feed per pound of gain."
        },
        {
          id: 3,
          question: "What percentage of total production costs are typically feed costs in livestock?",
          options: ["50-60%", "55-65%", "60-70%", "65-75%"],
          correctAnswer: 2,
          explanation: "Feed costs typically represent 60-70% of total production costs in livestock operations, making feed efficiency crucial."
        },
        {
          id: 4,
          question: "What is the annual cost of mastitis to the U.S. dairy industry?",
          options: ["$1 billion", "$1.5 billion", "$2 billion", "$2.5 billion"],
          correctAnswer: 2,
          explanation: "Mastitis costs the U.S. dairy industry approximately $2 billion annually, making it the most costly dairy cattle disease."
        },
        {
          id: 5,
          question: "What is the target calving interval for dairy cattle?",
          options: ["330 days", "365 days", "395 days", "425 days"],
          correctAnswer: 1,
          explanation: "The target calving interval for dairy cattle is 365 days (12 months) for optimal reproductive efficiency and milk production."
        },
        {
          id: 6,
          question: "How much manure does a dairy cow produce daily?",
          options: ["80-100 lbs", "100-120 lbs", "120-150 lbs", "150-180 lbs"],
          correctAnswer: 2,
          explanation: "A dairy cow produces 120-150 pounds of manure daily (at 85% moisture content), requiring proper management."
        },
        {
          id: 7,
          question: "What percentage of commercial swine operations use artificial insemination?",
          options: ["70%", "80%", "90%", "95%"],
          correctAnswer: 2,
          explanation: "Approximately 90% of commercial swine operations in developed countries use artificial insemination for genetic improvement."
        },
        {
          id: 8,
          question: "What is the typical space requirement per broiler chicken?",
          options: ["0.5-0.7 sq ft", "0.8-1.0 sq ft", "1.0-1.2 sq ft", "1.2-1.5 sq ft"],
          correctAnswer: 1,
          explanation: "Broiler chickens require 0.8-1.0 square feet of floor space per bird in modern production systems."
        },
        {
          id: 9,
          question: "What percentage of the agricultural GDP does the livestock sector contribute globally?",
          options: ["30%", "35%", "40%", "45%"],
          correctAnswer: 2,
          explanation: "The global livestock sector contributes approximately 40% of agricultural GDP and supports 1.3 billion livelihoods."
        },
        {
          id: 10,
          question: "What is the Feed Conversion Ratio for beef cattle?",
          options: ["4-6:1", "6-8:1", "6-10:1", "8-12:1"],
          correctAnswer: 2,
          explanation: "Beef cattle have FCR of 6-10:1, meaning 6-10 pounds of feed per pound of gain, making them less efficient than poultry."
        },
        {
          id: 11,
          question: "How many people does the livestock sector provide livelihoods for?",
          options: ["900 million", "1.1 billion", "1.3 billion", "1.5 billion"],
          correctAnswer: 2,
          explanation: "The livestock sector provides livelihoods for approximately 1.3 billion people worldwide, particularly in developing countries."
        },
        {
          id: 12,
          question: "What is the cost of PRRS to the U.S. pork industry annually?",
          options: ["$450 million", "$550 million", "$664 million", "$750 million"],
          correctAnswer: 2,
          explanation: "Porcine Reproductive & Respiratory Syndrome costs the U.S. pork industry approximately $664 million annually."
        },
        {
          id: 13,
          question: "How much water do animals typically consume compared to dry feed?",
          options: ["1-2 times more", "2-3 times more", "2-5 times more", "5-7 times more"],
          correctAnswer: 2,
          explanation: "Animals consume 2-5 times more water than dry feed by weight, making clean water availability crucial for livestock health."
        },
        {
          id: 14,
          question: "What percentage of dairy cattle use artificial insemination?",
          options: ["50-60%", "60-70%", "70-80%", "80-90%"],
          correctAnswer: 1,
          explanation: "Approximately 60-70% of dairy cattle in commercial operations use artificial insemination for genetic improvement."
        },
        {
          id: 15,
          question: "What is the typical break-even milk price for dairy cows per hundredweight?",
          options: ["$12-$15", "$15-$18", "$18-$21", "$21-$24"],
          correctAnswer: 1,
          explanation: "Dairy operations typically need $15-$18 per hundredweight (100 lbs) of milk to break even, depending on feed costs."
        },
        {
          id: 16,
          question: "What is the annual U.S. average milk production per dairy cow?",
          options: ["18,000-20,000 lbs", "20,000-22,000 lbs", "22,000-25,000 lbs", "25,000-28,000 lbs"],
          correctAnswer: 2,
          explanation: "The U.S. average milk production is 22,000-25,000 pounds per dairy cow annually, among the highest in the world."
        },
        {
          id: 17,
          question: "What percentage of commercial beef herds use crossbreeding?",
          options: ["50%", "60%", "75%", "85%"],
          correctAnswer: 2,
          explanation: "Approximately 75% of commercial beef cattle herds use crossbreeding to benefit from hybrid vigor and breed complementarity."
        },
        {
          id: 18,
          question: "What is the target farrowing rate for swine operations?",
          options: ["80-85%", "85-90%", "90-95%", "95-100%"],
          correctAnswer: 1,
          explanation: "Swine operations target farrowing rates of 85-90%, representing the percentage of bred sows that successfully farrow."
        },
        {
          id: 19,
          question: "How many air changes per hour are needed in livestock housing during summer?",
          options: ["15-30", "20-40", "30-60", "40-80"],
          correctAnswer: 2,
          explanation: "Livestock housing requires 30-60 air changes per hour during summer to remove heat, moisture, and gases."
        },
        {
          id: 20,
          question: "What percentage improvement can proper management provide in livestock profitability?",
          options: ["10-20%", "15-25%", "20-30%", "25-35%"],
          correctAnswer: 1,
          explanation: "Proper livestock management can improve profitability by 15-25% through better feed efficiency, health, and productivity."
        }
      ]
    },

    // MODULE 4: FARM BUSINESS MANAGEMENT
    {
      id: 4,
      title: "Farm Business and Financial Management",
      content: `# Agricultural Business Fundamentals

Effective farm management requires business acumen alongside agricultural knowledge. This module covers financial management, record keeping, marketing, and business planning for agricultural operations.

## Farm Financial Management

**Key Financial Statements for Farms**:
1. **Balance Sheet**: Shows assets, liabilities, and net worth
   - **Current ratio** (current assets ÷ current liabilities): Target > 1.5
   - **Debt-to-asset ratio** (total liabilities ÷ total assets): Target < 0.5
2. **Income Statement**: Shows revenues, expenses, and net income
   - **Net farm income**: Revenue minus expenses
   - **Operating profit margin**: (Net farm income ÷ Revenue) × 100
3. **Cash Flow Statement**: Tracks cash inflows and outflows
   - Essential for managing seasonal cash needs

**Financial Ratios for Farm Analysis**:
- **Rate of Return on Assets (ROA)**: Target > 5%
- **Rate of Return on Equity (ROE)**: Target > 8%
- **Operating Expense Ratio**: (Operating expenses ÷ Revenue) × 100, Target < 70%
- **Debt Service Coverage Ratio**: (Net farm income + depreciation + interest) ÷ (principal + interest payments), Target > 1.25

## Record Keeping and Analysis

**Essential Farm Records**:
- **Production records**: Yields, input usage, livestock performance
- **Financial records**: Income, expenses, asset values
- **Inventory records**: Feed, seed, supplies, livestock
- **Equipment records**: Maintenance, repairs, usage hours

**Benchmarking and Analysis**:
- Compare performance to similar farms
- Identify strengths and weaknesses
- Set realistic goals for improvement
- **Top-performing farms typically achieve 15-25% higher net income** than average farms in the same sector

**Record Keeping Software**: 
- Adoption rate: **Approximately 60%** of commercial farms use software
- Benefits: Improved accuracy, time savings, better decision support
- Return on investment: **$3-5 saved for every $1 spent** on record keeping systems

## Marketing and Risk Management

**Agricultural Marketing Channels**:
- **Direct marketing**: Farmers markets, CSA (Community Supported Agriculture)
- **Wholesale**: Processors, distributors, retailers
- **Commodity markets**: Futures and options contracts
- **Contract production**: Pre-arranged sales agreements

**Price Risk Management Tools**:
- **Forward contracts**: Lock in price before delivery
- **Futures contracts**: Standardized exchange-traded contracts
- **Options contracts**: Right but not obligation to buy/sell
- **Crop insurance**: Yield or revenue protection

**Marketing Strategies**:
- **Diversification**: Multiple crops or livestock enterprises
- **Value-added products**: Processing raw products into higher-value items
- **Niche marketing**: Organic, local, specialty products
- **Direct-to-consumer**: Higher margins but more marketing effort

## Farm Business Planning

**Components of a Farm Business Plan**:
1. **Executive Summary**: Overview of the business
2. **Business Description**: History, location, facilities
3. **Market Analysis**: Customers, competition, trends
4. **Management Plan**: Organization, personnel, responsibilities
5. **Operations Plan**: Production methods, schedules
6. **Financial Plan**: Projections, funding needs, analysis
7. **Risk Management**: Identification and mitigation strategies

**Capital Investment Analysis**:
- **Payback Period**: Time to recover initial investment
- **Net Present Value (NPV)**: Present value of future cash flows
- **Internal Rate of Return (IRR)**: Rate making NPV = zero
- **Sensitivity Analysis**: Testing assumptions and scenarios

**Break-even Analysis**:
- **Break-even yield**: (Fixed costs + variable costs) ÷ Price per unit
- **Break-even price**: (Fixed costs + variable costs) ÷ Expected yield
- **Margin of safety**: (Expected revenue - Break-even revenue) ÷ Expected revenue

## Government Programs and Regulations

**Major USDA Farm Programs**:
- **Price and Income Support**: Direct payments, loan programs
- **Crop Insurance**: Federal crop insurance program
- **Conservation Programs**: CRP, EQIP, CSP
- **Disaster Assistance**: For natural disasters and market disruptions

**Environmental Regulations**:
- **Clean Water Act**: Regulates agricultural runoff
- **Clean Air Act**: Addresses dust, odors, emissions
- **Endangered Species Act**: Protects habitats
- **Worker Protection Standards**: Pesticide safety

**Food Safety Regulations**:
- **Food Safety Modernization Act (FSMA)**: Preventive controls for food safety
- **Good Agricultural Practices (GAP)**: Voluntary food safety guidelines
- **HACCP**: Hazard Analysis Critical Control Points

**Labor Regulations**:
- **Minimum wage** and overtime requirements
- **Worker safety** (OSHA regulations)
- **Immigration compliance** for seasonal workers

## Succession Planning

**Importance of Farm Succession**:
- **Only 30% of family farms** successfully transfer to next generation
- **Average farm operator age**: 58 years (increasing)
- **Planning should begin 5-10 years** before expected transition

**Succession Planning Steps**:
1. **Family discussion**: Goals, interests, capabilities
2. **Business valuation**: Determine fair market value
3. **Legal structure**: Partnerships, corporations, trusts
4. **Transfer methods**: Sale, gift, lease, combination
5. **Tax planning**: Minimize estate and gift taxes
6. **Implementation**: Gradual transition plan

**Common Transfer Methods**:
- **Outright sale**: Immediate transfer, cash needs
- **Installment sale**: Payments over time
- **Lease with option to buy**: Gradual transition
- **Gifting**: Annual exclusion gifts, lifetime exemptions

Studies show that farms with written business plans are **20-30% more likely to succeed** and achieve **15-20% higher profitability**. Effective financial management can improve net farm income by **10-25%**, while proper marketing strategies can increase gross revenues by **15-30%**.`,
      completed: false,
      quiz: [
        {
          id: 1,
          question: "What is the target current ratio for farm financial health?",
          options: ["> 1.0", "> 1.2", "> 1.5", "> 2.0"],
          correctAnswer: 2,
          explanation: "The target current ratio (current assets ÷ current liabilities) for farm financial health is > 1.5, indicating good short-term liquidity."
        },
        {
          id: 2,
          question: "What percentage higher net income do top-performing farms achieve compared to average farms?",
          options: ["10-20%", "15-25%", "20-30%", "25-35%"],
          correctAnswer: 1,
          explanation: "Top-performing farms typically achieve 15-25% higher net income than average farms in the same sector through better management."
        },
        {
          id: 3,
          question: "What is the return on investment for farm record keeping systems?",
          options: ["$1-2 saved per $1 spent", "$2-3 saved per $1 spent", "$3-5 saved per $1 spent", "$4-6 saved per $1 spent"],
          correctAnswer: 2,
          explanation: "Farm record keeping systems typically return $3-5 saved for every $1 spent through improved efficiency and better decisions."
        },
        {
          id: 4,
          question: "What is the target debt service coverage ratio for farms?",
          options: ["> 1.0", "> 1.1", "> 1.25", "> 1.5"],
          correctAnswer: 2,
          explanation: "The target debt service coverage ratio (ability to cover debt payments) is > 1.25, indicating sufficient cash flow for debt obligations."
        },
        {
          id: 5,
          question: "What percentage of family farms successfully transfer to the next generation?",
          options: ["25%", "30%", "35%", "40%"],
          correctAnswer: 1,
          explanation: "Only 30% of family farms successfully transfer to the next generation, highlighting the importance of succession planning."
        },
        {
          id: 6,
          question: "What is the average age of farm operators?",
          options: ["54 years", "56 years", "58 years", "60 years"],
          correctAnswer: 2,
          explanation: "The average farm operator age is 58 years and increasing, making succession planning increasingly important."
        },
        {
          id: 7,
          question: "What percentage of commercial farms use record keeping software?",
          options: ["50%", "55%", "60%", "65%"],
          correctAnswer: 2,
          explanation: "Approximately 60% of commercial farms use record keeping software to improve accuracy and efficiency."
        },
        {
          id: 8,
          question: "What is the target debt-to-asset ratio for farm financial stability?",
          options: ["< 0.4", "< 0.5", "< 0.6", "< 0.7"],
          correctAnswer: 1,
          explanation: "The target debt-to-asset ratio (total liabilities ÷ total assets) for farm financial stability is < 0.5, indicating less than 50% debt financing."
        },
        {
          id: 9,
          question: "How many years before transition should farm succession planning begin?",
          options: ["2-5 years", "3-7 years", "5-10 years", "7-12 years"],
          correctAnswer: 2,
          explanation: "Farm succession planning should begin 5-10 years before the expected transition to allow for gradual transfer and skill development."
        },
        {
          id: 10,
          question: "What is the target operating expense ratio for farms?",
          options: ["< 60%", "< 65%", "< 70%", "< 75%"],
          correctAnswer: 2,
          explanation: "The target operating expense ratio (operating expenses ÷ revenue) is < 70%, indicating efficient cost management."
        },
        {
          id: 11,
          question: "How much more likely are farms with written business plans to succeed?",
          options: ["15-25%", "20-30%", "25-35%", "30-40%"],
          correctAnswer: 1,
          explanation: "Farms with written business plans are 20-30% more likely to succeed and achieve 15-20% higher profitability."
        },
        {
          id: 12,
          question: "What is the target rate of return on assets (ROA) for farms?",
          options: ["> 3%", "> 4%", "> 5%", "> 6%"],
          correctAnswer: 2,
          explanation: "The target rate of return on assets (ROA) for farms is > 5%, indicating efficient use of assets to generate profit."
        },
        {
          id: 13,
          question: "Which financial statement shows cash inflows and outflows?",
          options: ["Balance Sheet", "Income Statement", "Cash Flow Statement", "Statement of Equity"],
          correctAnswer: 2,
          explanation: "The Cash Flow Statement tracks cash inflows and outflows, essential for managing seasonal cash needs in agriculture."
        },
        {
          id: 14,
          question: "What marketing approach typically offers higher margins but requires more effort?",
          options: ["Wholesale markets", "Commodity markets", "Direct-to-consumer", "Contract production"],
          correctAnswer: 2,
          explanation: "Direct-to-consumer marketing (farmers markets, CSAs) typically offers higher margins but requires more marketing effort and customer interaction."
        },
        {
          id: 15,
          question: "What is the target rate of return on equity (ROE) for farms?",
          options: ["> 6%", "> 7%", "> 8%", "> 9%"],
          correctAnswer: 2,
          explanation: "The target rate of return on equity (ROE) for farms is > 8%, providing adequate return to farm owners for their investment."
        },
        {
          id: 16,
          question: "Which USDA program provides preventive controls for food safety?",
          options: ["Crop Insurance", "FSMA", "CRP", "EQIP"],
          correctAnswer: 1,
          explanation: "The Food Safety Modernization Act (FSMA) provides preventive controls for food safety in agricultural operations."
        },
        {
          id: 17,
          question: "What percentage improvement in net farm income can effective financial management achieve?",
          options: ["5-15%", "10-20%", "10-25%", "15-30%"],
          correctAnswer: 2,
          explanation: "Effective financial management can improve net farm income by 10-25% through better cost control and investment decisions."
        },
        {
          id: 18,
          question: "Which conservation program pays farmers to retire environmentally sensitive land?",
          options: ["EQIP", "CSP", "CRP", "WRP"],
          correctAnswer: 2,
          explanation: "The Conservation Reserve Program (CRP) pays farmers to retire environmentally sensitive land from production for 10-15 years."
        },
        {
          id: 19,
          question: "How much can proper marketing strategies increase gross farm revenues?",
          options: ["10-20%", "12-25%", "15-30%", "20-35%"],
          correctAnswer: 2,
          explanation: "Proper marketing strategies can increase gross farm revenues by 15-30% through better pricing, timing, and market selection."
        },
        {
          id: 20,
          question: "What financial ratio measures the ability to cover debt payments?",
          options: ["Current Ratio", "Debt-to-Asset Ratio", "Debt Service Coverage Ratio", "Operating Expense Ratio"],
          correctAnswer: 2,
          explanation: "The Debt Service Coverage Ratio measures the ability to cover debt payments from farm income and is crucial for loan qualification."
        }
      ]
    },

    // MODULE 5: SUSTAINABLE AGRICULTURE PRACTICES
    {
      id: 5,
      title: "Sustainable Agriculture and Conservation",
      content: `# Principles of Sustainable Agriculture

Sustainable agriculture meets current food and fiber needs while protecting environmental quality, conserving natural resources, and supporting economic viability and social equity. This module covers practices that promote long-term agricultural sustainability.

## Soil Conservation Practices

**Erosion Control Methods**:
- **Contour farming**: Planting along contours reduces erosion by **50-75%**
- **Terracing**: Reduces erosion on slopes by **70-90%**
- **Strip cropping**: Alternating strips reduce erosion by **40-60%**
- **Conservation tillage**: Reduces erosion by **60-90%** compared to conventional tillage

**Soil Health Management**:
- **Cover crops**: Improve soil structure, increase organic matter
- **Crop rotation**: Breaks pest cycles, improves soil fertility
- **Organic amendments**: Compost, manure improve soil biology
- **Reduced tillage**: Preserves soil structure, reduces erosion

**Conservation Tillage Systems**:
- **No-till**: Leaves soil undisturbed, reduces erosion by **90-95%**
- **Strip-till**: Tills only planting strips, reduces erosion by **70-80%**
- **Ridge-till**: Plants on ridges, reduces erosion by **50-70%**
- Adoption: **Approximately 35%** of U.S. cropland uses conservation tillage

## Water Conservation and Management

**Water Conservation Practices**:
- **Drip irrigation**: Saves **30-60%** water compared to flood irrigation
- **Soil moisture monitoring**: Optimizes irrigation timing
- **Mulching**: Reduces evaporation by **25-50%**
- **Rainwater harvesting**: Collects and stores rainwater for irrigation

**Drainage Management**:
- **Controlled drainage**: Manages water table levels
- **Subsurface drainage**: Removes excess water while conserving soil
- **Buffer strips**: Filter runoff, reduce nutrient loss

**Water Quality Protection**:
- **Riparian buffers**: Filter runoff, improve water quality
- **Grassed waterways**: Channel water while filtering sediments
- **Wetland restoration**: Natural filtration of agricultural runoff

## Integrated Pest Management (IPM)

**IPM Components**:
1. **Prevention**: Cultural practices to avoid pest problems
2. **Monitoring**: Regular scouting and identification
3. **Thresholds**: Economic injury levels
4. **Control**: Multiple methods when needed

**Biological Control Methods**:
- **Predators**: Ladybugs, lacewings, spiders
- **Parasitoids**: Wasps that parasitize pests
- **Pathogens**: Bacteria, fungi, viruses that attack pests
- **Conservation biological control**: Enhancing natural enemy habitats

**Cultural Control Methods**:
- **Crop rotation**: Breaks pest life cycles
- **Sanitation**: Removes pest habitats
- **Trap crops**: Attracts pests away from main crop
- **Resistant varieties**: Genetic resistance to pests

IPM can reduce pesticide use by **30-50%** while maintaining yields and increasing farm profitability by **5-15%**.

## Nutrient Management

**4R Nutrient Stewardship**:
- **Right source**: Matching fertilizer to crop needs
- **Right rate**: Applying correct amount
- **Right time**: Applying when crops need nutrients
- **Right place**: Placing nutrients where crops can use them

**Nutrient Management Planning**:
- Soil testing every **2-3 years**
- Plant tissue analysis during growing season
- Manure testing and proper application
- Crediting nutrients from previous crops

**Precision Agriculture Technologies**:
- **Variable rate technology**: Applies inputs based on field variability
- **GPS guidance**: Reduces overlap, saves **5-10%** on inputs
- **Yield monitoring**: Documents spatial yield variability
- **Remote sensing**: Identifies crop stress areas

Precision agriculture can reduce fertilizer use by **10-30%**, pesticide use by **20-40%**, and fuel use by **10-20%**.

## Biodiversity and Habitat Conservation

**On-farm Biodiversity**:
- **Field margins**: Provide habitat for beneficial insects
- **Hedgerows**: Shelter for wildlife, windbreaks
- **Pollinator habitat**: Supports bees and other pollinators
- **Agroforestry**: Integrating trees with crops or livestock

**Pollinator Conservation**:
- **Native plants**: Provide nectar and pollen sources
- **Nesting sites**: Ground nests, bee hotels
- **Pesticide management**: Reducing impacts on pollinators
- **Habitat corridors**: Connecting pollinator habitats

**Wildlife-Friendly Farming**:
- **Conservation buffers**: Protect water quality and wildlife
- **Cover crops**: Provide food and cover for wildlife
- **Integrated crop-livestock systems**: Diverse habitats
- **Reduced chemical use**: Minimizes wildlife impacts

## Energy Efficiency and Renewable Energy

**Farm Energy Use**:
- **Irrigation**: 30-40% of farm energy use
- **Tillage and field operations**: 25-35% of farm energy use
- **Grain drying**: 15-25% of farm energy use
- **Livestock facilities**: 10-20% of farm energy use

**Energy Efficiency Practices**:
- **Efficient irrigation pumps**: Save **20-30%** energy
- **Reduced tillage**: Saves **50-70%** fuel compared to conventional tillage
- **Efficient lighting**: LED lights save **50-75%** energy
- **Equipment maintenance**: Proper tuning saves **5-15%** fuel

**Renewable Energy Options**:
- **Solar photovoltaic**: For electricity generation
- **Solar thermal**: For water heating
- **Wind energy**: For electricity or mechanical power
- **Biomass energy**: From crop residues, manure
- **Anaerobic digestion**: Converts manure to biogas

## Economic and Social Sustainability

**Economic Sustainability Practices**:
- **Diversification**: Multiple enterprises reduce risk
- **Value-added products**: Increase farm income
- **Direct marketing**: Higher margins, community connections
- **Cooperative marketing**: Collective bargaining power

**Social Sustainability**:
- **Fair labor practices**: Living wages, safe working conditions
- **Community engagement**: Supporting local communities
- **Food access**: Addressing food deserts, improving nutrition
- **Farm viability**: Ensuring next generation can farm

**Triple Bottom Line Approach**:
1. **Environmental stewardship**: Protecting natural resources
2. **Economic profitability**: Ensuring farm viability
3. **Social responsibility**: Supporting communities and workers

Studies show that sustainable practices can improve soil organic matter by **0.1-0.3% annually**, reduce erosion by **50-90%**, improve water use efficiency by **20-40%**, and increase farm profitability by **10-25%** over the long term. Certified organic farms typically receive **20-30% price premiums** for their products, though yields may be **10-25% lower** than conventional systems.`,
      completed: false,
      quiz: [
        {
          id: 1,
          question: "How much does contour farming reduce soil erosion?",
          options: ["30-50%", "40-60%", "50-75%", "60-80%"],
          correctAnswer: 2,
          explanation: "Contour farming reduces soil erosion by 50-75% compared to planting up and down slopes."
        },
        {
          id: 2,
          question: "What percentage of U.S. cropland uses conservation tillage?",
          options: ["25%", "30%", "35%", "40%"],
          correctAnswer: 2,
          explanation: "Approximately 35% of U.S. cropland uses conservation tillage practices to reduce erosion and improve soil health."
        },
        {
          id: 3,
          question: "How much water can drip irrigation save compared to flood irrigation?",
          options: ["20-40%", "25-50%", "30-60%", "35-70%"],
          correctAnswer: 2,
          explanation: "Drip irrigation saves 30-60% water compared to flood irrigation by delivering water directly to plant roots with minimal evaporation."
        },
        {
          id: 4,
          question: "How much can IPM reduce pesticide use?",
          options: ["20-40%", "25-45%", "30-50%", "35-55%"],
          correctAnswer: 2,
          explanation: "Integrated Pest Management can reduce pesticide use by 30-50% while maintaining yields through multiple control methods."
        },
        {
          id: 5,
          question: "How often should soil testing be conducted for nutrient management?",
          options: ["Every year", "Every 2-3 years", "Every 3-5 years", "Every 5-7 years"],
          correctAnswer: 1,
          explanation: "Soil testing should be conducted every 2-3 years for effective nutrient management planning and fertilizer optimization."
        },
        {
          id: 6,
          question: "What percentage of farm energy use is typically for irrigation?",
          options: ["20-30%", "25-35%", "30-40%", "35-45%"],
          correctAnswer: 2,
          explanation: "Irrigation typically accounts for 30-40% of farm energy use, making efficient irrigation systems important for energy conservation."
        },
        {
          id: 7,
          question: "How much does no-till farming reduce erosion compared to conventional tillage?",
          options: ["70-80%", "80-90%", "90-95%", "95-99%"],
          correctAnswer: 2,
          explanation: "No-till farming reduces soil erosion by 90-95% compared to conventional tillage by leaving soil surface protected with crop residue."
        },
        {
          id: 8,
          question: "What price premiums do certified organic farms typically receive?",
          options: ["10-20%", "15-25%", "20-30%", "25-35%"],
          correctAnswer: 2,
          explanation: "Certified organic farms typically receive 20-30% price premiums for their products, though yields may be 10-25% lower."
        },
        {
          id: 9,
          question: "How much can precision agriculture reduce fertilizer use?",
          options: ["5-15%", "10-25%", "10-30%", "15-35%"],
          correctAnswer: 2,
          explanation: "Precision agriculture technologies can reduce fertilizer use by 10-30% by applying the right amount in the right place."
        },
        {
          id: 10,
          question: "What annual increase in soil organic matter can sustainable practices achieve?",
          options: ["0.05-0.15%", "0.1-0.3%", "0.2-0.4%", "0.3-0.5%"],
          correctAnswer: 1,
          explanation: "Sustainable practices like cover cropping and reduced tillage can increase soil organic matter by 0.1-0.3% annually."
        },
        {
          id: 11,
          question: "How much can efficient irrigation pumps save in energy use?",
          options: ["15-25%", "20-30%", "25-35%", "30-40%"],
          correctAnswer: 1,
          explanation: "Efficient irrigation pumps can save 20-30% energy compared to older, less efficient pumps."
        },
        {
          id: 12,
          question: "What percentage yield reduction is typical in organic systems compared to conventional?",
          options: ["5-15%", "8-20%", "10-25%", "15-30%"],
          correctAnswer: 2,
          explanation: "Organic systems typically have yields 10-25% lower than conventional systems, though with lower input costs and higher prices."
        },
        {
          id: 13,
          question: "How much can reduced tillage save in fuel compared to conventional tillage?",
          options: ["30-50%", "40-60%", "50-70%", "60-80%"],
          correctAnswer: 2,
          explanation: "Reduced tillage systems save 50-70% fuel compared to conventional tillage systems with multiple passes."
        },
        {
          id: 14,
          question: "What is the 'Right Rate' principle in 4R Nutrient Stewardship?",
          options: ["Applying at optimal growth stage", "Matching fertilizer to crop needs", "Applying correct amount", "Placing where crops can use it"],
          correctAnswer: 2,
          explanation: "The 'Right Rate' principle means applying the correct amount of fertilizer based on soil tests and crop nutrient needs."
        },
        {
          id: 15,
          question: "How much can GPS guidance systems save on input costs?",
          options: ["3-8%", "5-10%", "7-12%", "9-14%"],
          correctAnswer: 1,
          explanation: "GPS guidance systems can save 5-10% on input costs by reducing overlap in field operations."
        },
        {
          id: 16,
          question: "What percentage of farm energy use is for grain drying?",
          options: ["10-20%", "15-25%", "20-30%", "25-35%"],
          correctAnswer: 1,
          explanation: "Grain drying typically accounts for 15-25% of farm energy use, making efficient drying systems important."
        },
        {
          id: 17,
          question: "How much can mulching reduce evaporation?",
          options: ["20-40%", "25-50%", "30-60%", "35-70%"],
          correctAnswer: 1,
          explanation: "Mulching can reduce soil evaporation by 25-50%, conserving soil moisture and reducing irrigation needs."
        },
        {
          id: 18,
          question: "What percentage of the 'triple bottom line' addresses environmental stewardship?",
          options: ["One-third", "One-half", "All three aspects equally", "Varies by farm"],
          correctAnswer: 0,
          explanation: "The triple bottom line includes three equal aspects: environmental stewardship, economic profitability, and social responsibility."
        },
        {
          id: 19,
          question: "How much can LED lighting save in energy compared to traditional lighting?",
          options: ["40-60%", "50-70%", "50-75%", "60-80%"],
          correctAnswer: 2,
          explanation: "LED lighting can save 50-75% energy compared to traditional lighting in farm buildings and facilities."
        },
        {
          id: 20,
          question: "What long-term profitability increase can sustainable practices achieve?",
          options: ["5-15%", "8-20%", "10-25%", "15-30%"],
          correctAnswer: 2,
          explanation: "Sustainable practices can increase farm profitability by 10-25% over the long term through reduced inputs and improved efficiency."
        }
      ]
    },

    // MODULE 6: AGRICULTURAL TECHNOLOGY AND INNOVATION
    {
      id: 6,
      title: "Agricultural Technology and Future Trends",
      content: `# Emerging Technologies in Agriculture

Agricultural technology is rapidly evolving, transforming how food is produced, processed, and distributed. This module covers current and emerging technologies that are shaping the future of agriculture.

## Precision Agriculture Technologies

**Global Positioning System (GPS) Applications**:
- **Auto-steer systems**: Reduce overlap, save **5-10%** on inputs
- **Yield monitoring**: Create yield maps for management zones
- **Variable rate technology**: Apply inputs based on field variability
- Adoption: **Approximately 70%** of large farms in developed countries use GPS guidance

**Remote Sensing Technologies**:
- **Satellite imagery**: Monitor crop health, identify stress areas
- **Drone/UAV imaging**: High-resolution field monitoring
- **Aerial photography**: Regular crop scouting
- **Multispectral/hyperspectral imaging**: Detect nutrient deficiencies, diseases

**Sensor Technologies**:
- **Soil moisture sensors**: Optimize irrigation scheduling
- **Weather stations**: Microclimate monitoring
- **Canopy sensors**: Measure crop nitrogen status
- **Automated weather stations**: Real-time data collection

## Data Analytics and Farm Management Software

**Farm Management Information Systems (FMIS)**:
- **Record keeping**: Production, financial, inventory records
- **Decision support**: Analytics for planting, fertilizing, harvesting
- **Integration**: Connect equipment, sensors, weather data
- Adoption: **Approximately 60%** of commercial farms use FMIS

**Big Data in Agriculture**:
- **Yield data analysis**: Identify patterns and variability
- **Weather data integration**: Predictive analytics for crop management
- **Market data**: Price trends, demand forecasting
- **Genomic data**: Breeding and genetic selection

**Artificial Intelligence Applications**:
- **Image recognition**: Identify weeds, diseases, pests
- **Predictive analytics**: Yield forecasting, disease prediction
- **Robotics guidance**: Autonomous equipment navigation
- **Natural language processing**: Voice-activated farm records

## Automation and Robotics

**Field Robotics**:
- **Autonomous tractors**: Reduce labor needs, increase precision
- **Robotic harvesters**: Selective harvesting of fruits, vegetables
- **Weeding robots**: Identify and remove weeds mechanically
- **Drones for spraying**: Precise application of inputs

**Indoor and Controlled Environment Agriculture**:
- **Vertical farming**: Stacked growing systems in urban areas
- **Hydroponics**: Soilless plant production
- **Aquaponics**: Integrated fish and plant production
- **LED lighting**: Energy-efficient plant growth lighting

**Livestock Automation**:
- **Robotic milking systems**: **Adopted by 25-30%** of dairy farms in developed countries
- **Automated feeding systems**: Precise ration delivery
- **Health monitoring sensors**: Early disease detection
- **Environmental control systems**: Automated ventilation, heating, cooling

## Genetic Technologies

**Plant Breeding Advances**:
- **Marker-assisted selection**: Faster development of improved varieties
- **Genomic selection**: Predict performance based on DNA markers
- **Gene editing**: CRISPR/Cas9 for precise genetic modifications
- **Hybrid development**: Combining desirable traits from different parents

**Animal Genetics**:
- **Genomic testing**: Predict performance, disease resistance
- **Embryo transfer**: Rapid genetic improvement
- **Sexed semen**: Control offspring gender
- **Cloning**: Reproduce elite genetics

**Genetically Modified Organisms (GMOs)**:
- **Current adoption**: **Approximately 190 million hectares** globally
- **Major GM crops**: Soybeans (50% of global area), corn (30%), cotton (14%), canola (5%)
- **Traits**: Herbicide tolerance, insect resistance, drought tolerance
- **Yield benefits**: **5-25%** increase depending on crop and trait

## Sustainable Technology Innovations

**Renewable Energy Systems**:
- **Solar photovoltaic**: **Adopted by 10-15%** of farms in sunny regions
- **Wind turbines**: For electricity generation
- **Biogas digesters**: Convert manure to energy
- **Biofuels**: Ethanol, biodiesel from agricultural feedstocks

**Water Conservation Technologies**:
- **Smart irrigation systems**: Soil moisture-based scheduling
- **Water recycling systems**: Treat and reuse agricultural water
- **Desalination technology**: Convert brackish or seawater
- **Atmospheric water generation**: Extract water from air

**Waste-to-Value Technologies**:
- **Anaerobic digestion**: Produce biogas from organic waste
- **Composting systems**: Convert waste to soil amendments
- **Biochar production**: Carbon-rich soil amendment from biomass
- **Nutrient recovery**: Extract nutrients from waste streams

## Digital Agriculture and Connectivity

**Internet of Things (IoT) in Agriculture**:
- **Connected sensors**: Real-time monitoring of crops, livestock, equipment
- **Smart irrigation controllers**: Weather-based scheduling
- **Livestock monitoring**: Health, location, behavior tracking
- **Supply chain tracking**: From farm to consumer

**Blockchain Technology**:
- **Supply chain transparency**: Track product origin and handling
- **Food safety**: Rapid traceback in case of contamination
- **Smart contracts**: Automated payments and transactions
- **Certification verification**: Organic, fair trade, sustainability claims

**Mobile Technology**:
- **Farm management apps**: **Used by 50-60%** of farmers in developed countries
- **Market information**: Real-time prices, weather forecasts
- **Extension services**: Remote advice and diagnostics
- **Financial services**: Mobile banking, insurance, credit

## Future Trends and Challenges

**Climate-Smart Agriculture**:
- **Adaptation technologies**: Drought-tolerant varieties, water management
- **Mitigation practices**: Carbon sequestration, reduced emissions
- **Resilience building**: Diversification, insurance, early warning systems

**Urban and Peri-urban Agriculture**:
- **Rooftop farming**: Utilizing urban spaces
- **Community gardens**: Local food production
- **Food hubs**: Distribution centers for local food
- **Agritourism**: Farm visits, education, experiences

**Labor and Workforce Trends**:
- **Aging farmer population**: Average age 58 and increasing
- **Technology skills**: Increasing demand for tech-savvy workers
- **Automation impact**: Changing job requirements
- **Education and training**: Need for updated agricultural education

**Global Food System Challenges**:
- **Population growth**: 9.7 billion by 2050 requiring **60% more food**
- **Climate change**: Changing growing conditions, extreme weather
- **Resource constraints**: Limited land, water, nutrients
- **Food waste**: **Approximately 30%** of food produced is lost or wasted

Studies predict that digital agriculture could increase global agricultural productivity by **15-25%** and reduce input costs by **10-20%** by 2030. Precision agriculture adoption is growing at **15-20% annually**, while agricultural robotics market is projected to reach **$20 billion by 2025**. The agricultural biotechnology market is expected to grow to **$85 billion by 2027**, driven by increasing demand for food and sustainable production methods.`,
      completed: false,
      quiz: [
        {
          id: 1,
          question: "What percentage of large farms in developed countries use GPS guidance?",
          options: ["60%", "65%", "70%", "75%"],
          correctAnswer: 2,
          explanation: "Approximately 70% of large farms in developed countries use GPS guidance systems for field operations."
        },
        {
          id: 2,
          question: "How much can auto-steer systems save on input costs?",
          options: ["3-8%", "5-10%", "7-12%", "9-14%"],
          correctAnswer: 1,
          explanation: "Auto-steer GPS systems can save 5-10% on input costs by reducing overlap in field operations."
        },
        {
          id: 3,
          question: "What percentage of commercial farms use farm management software?",
          options: ["50%", "55%", "60%", "65%"],
          correctAnswer: 2,
          explanation: "Approximately 60% of commercial farms use farm management information systems for record keeping and decision support."
        },
        {
          id: 4,
          question: "What percentage of dairy farms in developed countries use robotic milking?",
          options: ["15-20%", "20-25%", "25-30%", "30-35%"],
          correctAnswer: 2,
          explanation: "Robotic milking systems are adopted by 25-30% of dairy farms in developed countries, reducing labor needs."
        },
        {
          id: 5,
          question: "How many hectares globally are planted with GM crops?",
          options: ["150 million", "170 million", "190 million", "210 million"],
          correctAnswer: 2,
          explanation: "Approximately 190 million hectares globally are planted with genetically modified crops, primarily soybeans, corn, cotton, and canola."
        },
        {
          id: 6,
          question: "What yield increase can GM crops provide?",
          options: ["3-15%", "5-20%", "5-25%", "10-30%"],
          correctAnswer: 2,
          explanation: "Genetically modified crops can provide yield increases of 5-25% depending on the crop, trait, and growing conditions."
        },
        {
          id: 7,
          question: "What percentage of farms in sunny regions adopt solar photovoltaic?",
          options: ["5-10%", "8-12%", "10-15%", "12-18%"],
          correctAnswer: 2,
          explanation: "Approximately 10-15% of farms in sunny regions have adopted solar photovoltaic systems for electricity generation."
        },
        {
          id: 8,
          question: "What percentage of farmers in developed countries use farm management apps?",
          options: ["40-50%", "45-55%", "50-60%", "55-65%"],
          correctAnswer: 2,
          explanation: "50-60% of farmers in developed countries use mobile apps for farm management, market information, and other services."
        },
        {
          id: 9,
          question: "What is the projected size of the agricultural robotics market by 2025?",
          options: ["$10 billion", "$15 billion", "$20 billion", "$25 billion"],
          correctAnswer: 2,
          explanation: "The agricultural robotics market is projected to reach $20 billion by 2025, driven by labor shortages and precision needs."
        },
        {
          id: 10,
          question: "How much could digital agriculture increase global productivity by 2030?",
          options: ["10-20%", "12-22%", "15-25%", "18-28%"],
          correctAnswer: 2,
          explanation: "Digital agriculture could increase global agricultural productivity by 15-25% by 2030 through improved efficiency and decision making."
        },
        {
          id: 11,
          question: "What is the annual growth rate of precision agriculture adoption?",
          options: ["10-15%", "12-18%", "15-20%", "18-25%"],
          correctAnswer: 2,
          explanation: "Precision agriculture adoption is growing at 15-20% annually as farmers adopt technologies for better management."
        },
        {
          id: 12,
          question: "What percentage of global GM crop area is soybeans?",
          options: ["40%", "45%", "50%", "55%"],
          correctAnswer: 2,
          explanation: "Soybeans account for approximately 50% of the global genetically modified crop area, followed by corn at 30%."
        },
        {
          id: 13,
          question: "What is the projected agricultural biotechnology market size by 2027?",
          options: ["$65 billion", "$75 billion", "$85 billion", "$95 billion"],
          correctAnswer: 2,
          explanation: "The agricultural biotechnology market is expected to grow to $85 billion by 2027, driven by food demand and sustainability."
        },
        {
          id: 14,
          question: "What percentage of food produced is lost or wasted globally?",
          options: ["25%", "30%", "35%", "40%"],
          correctAnswer: 1,
          explanation: "Approximately 30% of food produced globally is lost or wasted throughout the supply chain, representing a major sustainability challenge."
        },
        {
          id: 15,
          question: "How much could digital agriculture reduce input costs by 2030?",
          options: ["5-15%", "8-18%", "10-20%", "12-22%"],
          correctAnswer: 2,
          explanation: "Digital agriculture could reduce agricultural input costs by 10-20% by 2030 through precision application and optimized management."
        },
        {
          id: 16,
          question: "Which GM crop trait is most commonly adopted?",
          options: ["Drought tolerance", "Herbicide tolerance", "Insect resistance", "Disease resistance"],
          correctAnswer: 1,
          explanation: "Herbicide tolerance is the most commonly adopted GM trait, allowing farmers to control weeds more effectively."
        },
        {
          id: 17,
          question: "What technology uses CRISPR/Cas9 for precise genetic modifications?",
          options: ["Traditional breeding", "Marker-assisted selection", "Gene editing", "Hybrid development"],
          correctAnswer: 2,
          explanation: "Gene editing using CRISPR/Cas9 technology allows precise genetic modifications without introducing foreign DNA."
        },
        {
          id: 18,
          question: "What percentage of the world's population will need to be fed by 2050?",
          options: ["8.5 billion", "9.2 billion", "9.7 billion", "10.2 billion"],
          correctAnswer: 2,
          explanation: "By 2050, the global population is projected to reach 9.7 billion, requiring approximately 60% more food production."
        },
        {
          id: 19,
          question: "Which technology provides supply chain transparency through distributed ledgers?",
          options: ["IoT sensors", "Blockchain", "Artificial Intelligence", "Remote Sensing"],
          correctAnswer: 1,
          explanation: "Blockchain technology provides supply chain transparency through distributed ledgers that track products from farm to consumer."
        },
        {
          id: 20,
          question: "What is the average age of farmers in many developed countries?",
          options: ["54 years", "56 years", "58 years", "60 years"],
          correctAnswer: 2,
          explanation: "The average age of farmers in many developed countries is 58 years and increasing, highlighting needs for succession planning and technology adoption."
        }
      ]
    }
  ],

  // FINAL EXAM - 40 COMPREHENSIVE QUESTIONS
  finalExam: [
    // Questions from Module 1
    {
      id: 1,
      moduleId: 1,
      question: "What percentage of the global workforce is employed in agriculture?",
      options: ["23%", "26%", "28%", "31%"],
      correctAnswer: 2,
      explanation: "Agriculture employs over 1 billion people worldwide, approximately 28% of the global workforce."
    },
    {
      id: 2,
      moduleId: 1,
      question: "What percentage of global food energy comes from crop production?",
      options: ["78%", "81%", "83%", "86%"],
      correctAnswer: 2,
      explanation: "Crop production accounts for 83% of global food energy consumption."
    },
    {
      id: 3,
      moduleId: 1,
      question: "What is the ideal organic matter percentage in healthy soil?",
      options: ["3%", "5%", "7%", "10%"],
      correctAnswer: 1,
      explanation: "Healthy soil ideally contains 5% organic matter for optimal soil structure and fertility."
    },
    {
      id: 4,
      moduleId: 1,
      question: "By what percentage must food production increase by 2050?",
      options: ["50%", "55%", "60%", "65%"],
      correctAnswer: 2,
      explanation: "Global food production must increase by approximately 60% by 2050 to feed 9.7 billion people."
    },

    // Questions from Module 2
    {
      id: 5,
      moduleId: 2,
      question: "What is the optimal soil pH range for most crops?",
      options: ["5.5-6.5", "6.0-7.0", "6.0-7.5", "6.5-8.0"],
      correctAnswer: 2,
      explanation: "Most crops prefer soil pH between 6.0 and 7.5 for optimal nutrient availability."
    },
    {
      id: 6,
      moduleId: 2,
      question: "How much water can each 1% organic matter increase hold per acre?",
      options: ["15,000+ gallons", "18,000+ gallons", "20,000+ gallons", "22,000+ gallons"],
      correctAnswer: 2,
      explanation: "Each 1% increase in soil organic matter can hold 20,000+ gallons more water per acre."
    },
    {
      id: 7,
      moduleId: 2,
      question: "What is the water use efficiency of drip irrigation?",
      options: ["75-85%", "80-90%", "85-95%", "90-98%"],
      correctAnswer: 2,
      explanation: "Drip irrigation achieves 85-95% water use efficiency, the highest of irrigation methods."
    },
    {
      id: 8,
      moduleId: 2,
      question: "How often should soil testing be conducted?",
      options: ["Annually", "Every 2-3 years", "Every 4-5 years", "Every 5-7 years"],
      correctAnswer: 1,
      explanation: "Soil testing should be conducted every 2-3 years for effective nutrient management."
    },

    // Questions from Module 3
    {
      id: 9,
      moduleId: 3,
      question: "What is the Feed Conversion Ratio for broiler chickens?",
      options: ["1.4-1.6:1", "1.5-1.7:1", "1.6-1.8:1", "1.7-1.9:1"],
      correctAnswer: 2,
      explanation: "Broiler chickens have FCR of 1.6-1.8:1, making them the most efficient livestock for meat production."
    },
    {
      id: 10,
      moduleId: 3,
      question: "What percentage of production costs are typically feed costs?",
      options: ["55-65%", "60-70%", "65-75%", "70-80%"],
      correctAnswer: 1,
      explanation: "Feed costs typically represent 60-70% of total livestock production costs."
    },
    {
      id: 11,
      moduleId: 3,
      question: "What is the target calving interval for dairy cattle?",
      options: ["350 days", "365 days", "380 days", "395 days"],
      correctAnswer: 1,
      explanation: "The target calving interval for optimal dairy production is 365 days (12 months)."
    },
    {
      id: 12,
      moduleId: 3,
      question: "How much manure does a dairy cow produce daily?",
      options: ["100-130 lbs", "120-150 lbs", "140-170 lbs", "160-190 lbs"],
      correctAnswer: 1,
      explanation: "A dairy cow produces 120-150 pounds of manure daily at 85% moisture content."
    },

    // Questions from Module 4
    {
      id: 13,
      moduleId: 4,
      question: "What is the target current ratio for farm financial health?",
      options: ["> 1.2", "> 1.3", "> 1.5", "> 1.7"],
      correctAnswer: 2,
      explanation: "The target current ratio for farm financial health is > 1.5, indicating good liquidity."
    },
    {
      id: 14,
      moduleId: 4,
      question: "What percentage of family farms successfully transfer to next generation?",
      options: ["25%", "30%", "35%", "40%"],
      correctAnswer: 1,
      explanation: "Only 30% of family farms successfully transfer to the next generation."
    },
    {
      id: 15,
      moduleId: 4,
      question: "How many years before transition should succession planning begin?",
      options: ["3-7 years", "4-8 years", "5-10 years", "6-12 years"],
      correctAnswer: 2,
      explanation: "Farm succession planning should begin 5-10 years before expected transition."
    },
    {
      id: 16,
      moduleId: 4,
      question: "What is the target debt-to-asset ratio?",
      options: ["< 0.4", "< 0.5", "< 0.6", "< 0.7"],
      correctAnswer: 1,
      explanation: "The target debt-to-asset ratio for farm financial stability is < 0.5."
    },

    // Questions from Module 5
    {
      id: 17,
      moduleId: 5,
      question: "How much does contour farming reduce erosion?",
      options: ["40-60%", "45-65%", "50-75%", "55-80%"],
      correctAnswer: 2,
      explanation: "Contour farming reduces soil erosion by 50-75% compared to planting up and down slopes."
    },
    {
      id: 18,
      moduleId: 5,
      question: "What percentage of U.S. cropland uses conservation tillage?",
      options: ["30%", "33%", "35%", "38%"],
      correctAnswer: 2,
      explanation: "Approximately 35% of U.S. cropland uses conservation tillage practices."
    },
    {
      id: 19,
      moduleId: 5,
      question: "How much can IPM reduce pesticide use?",
      options: ["25-45%", "30-50%", "35-55%", "40-60%"],
      correctAnswer: 1,
      explanation: "Integrated Pest Management can reduce pesticide use by 30-50%."
    },
    {
      id: 20,
      moduleId: 5,
      question: "What price premiums do organic farms typically receive?",
      options: ["15-25%", "18-28%", "20-30%", "22-32%"],
      correctAnswer: 2,
      explanation: "Certified organic farms typically receive 20-30% price premiums for their products."
    },

    // Questions from Module 6
    {
      id: 21,
      moduleId: 6,
      question: "What percentage of large farms use GPS guidance?",
      options: ["65%", "68%", "70%", "73%"],
      correctAnswer: 2,
      explanation: "Approximately 70% of large farms in developed countries use GPS guidance systems."
    },
    {
      id: 22,
      moduleId: 6,
      question: "How much can auto-steer systems save on inputs?",
      options: ["4-9%", "5-10%", "6-11%", "7-12%"],
      correctAnswer: 1,
      explanation: "Auto-steer GPS systems can save 5-10% on input costs by reducing overlap."
    },
    {
      id: 23,
      moduleId: 6,
      question: "How many hectares are planted with GM crops globally?",
      options: ["170 million", "180 million", "190 million", "200 million"],
      correctAnswer: 2,
      explanation: "Approximately 190 million hectares globally are planted with genetically modified crops."
    },
    {
      id: 24,
      moduleId: 6,
      question: "What is the projected agricultural robotics market by 2025?",
      options: ["$15B", "$18B", "$20B", "$22B"],
      correctAnswer: 2,
      explanation: "The agricultural robotics market is projected to reach $20 billion by 2025."
    },

    // Additional Comprehensive Questions
    {
      id: 25,
      moduleId: 2,
      question: "What nutrient deficiency causes yellowing of older leaves?",
      options: ["Nitrogen", "Phosphorus", "Potassium", "Iron"],
      correctAnswer: 0,
      explanation: "Nitrogen deficiency causes yellowing of older leaves as nitrogen is mobile within plants."
    },
    {
      id: 26,
      moduleId: 3,
      question: "What is the Feed Conversion Ratio for beef cattle?",
      options: ["5-8:1", "6-9:1", "6-10:1", "7-11:1"],
      correctAnswer: 2,
      explanation: "Beef cattle have FCR of 6-10:1, making them less efficient than poultry or swine."
    },
    {
      id: 27,
      moduleId: 4,
      question: "What percentage higher net income do top farms achieve?",
      options: ["10-20%", "12-22%", "15-25%", "18-28%"],
      correctAnswer: 2,
      explanation: "Top-performing farms achieve 15-25% higher net income than average farms in their sector."
    },
    {
      id: 28,
      moduleId: 5,
      question: "How much does no-till reduce erosion?",
      options: ["85-90%", "88-93%", "90-95%", "92-97%"],
      correctAnswer: 2,
      explanation: "No-till farming reduces soil erosion by 90-95% compared to conventional tillage."
    },
    {
      id: 29,
      moduleId: 6,
      question: "What percentage of farmers use farm management apps?",
      options: ["45-55%", "48-58%", "50-60%", "52-62%"],
      correctAnswer: 2,
      explanation: "50-60% of farmers in developed countries use farm management mobile apps."
    },
    {
      id: 30,
      moduleId: 1,
      question: "What percentage of agricultural land is operated by small farms?",
      options: ["10%", "12%", "14%", "16%"],
      correctAnswer: 1,
      explanation: "Small farms operate approximately 12% of the world's agricultural land."
    },
    {
      id: 31,
      moduleId: 2,
      question: "What is the return on investment for soil testing?",
      options: ["$5-50 per $1", "$8-80 per $1", "$10-100 per $1", "$12-120 per $1"],
      correctAnswer: 2,
      explanation: "Soil testing returns $10-100 for every $1 invested through optimized fertilizer use."
    },
    {
      id: 32,
      moduleId: 3,
      question: "What percentage of commercial swine use artificial insemination?",
      options: ["85%", "88%", "90%", "92%"],
      correctAnswer: 2,
      explanation: "Approximately 90% of commercial swine operations use artificial insemination."
    },
    {
      id: 33,
      moduleId: 4,
      question: "What is the target debt service coverage ratio?",
      options: ["> 1.15", "> 1.20", "> 1.25", "> 1.30"],
      correctAnswer: 2,
      explanation: "The target debt service coverage ratio for farms is > 1.25."
    },
    {
      id: 34,
      moduleId: 5,
      question: "What is the 'Right Rate' in 4R Nutrient Stewardship?",
      options: ["Matching fertilizer to crop", "Applying correct amount", "Applying at right time", "Placing in right place"],
      correctAnswer: 1,
      explanation: "The 'Right Rate' principle means applying the correct amount of fertilizer based on crop needs."
    },
    {
      id: 35,
      moduleId: 6,
      question: "What is the growth rate of precision agriculture adoption?",
      options: ["12-18%", "14-20%", "15-20%", "16-22%"],
      correctAnswer: 2,
      explanation: "Precision agriculture adoption is growing at 15-20% annually."
    },
    {
      id: 36,
      moduleId: 1,
      question: "What percentage of freshwater withdrawals are for agriculture?",
      options: ["65%", "68%", "70%", "72%"],
      correctAnswer: 2,
      explanation: "Agriculture accounts for approximately 70% of global freshwater withdrawals."
    },
    {
      id: 37,
      moduleId: 2,
      question: "What is the target organic matter percentage for agricultural soils?",
      options: ["2-4%", "3-5%", "4-6%", "5-7%"],
      correctAnswer: 1,
      explanation: "Productive agricultural soils should maintain 3-5% organic matter."
    },
    {
      id: 38,
      moduleId: 3,
      question: "What is the average age of farm operators?",
      options: ["56", "57", "58", "59"],
      correctAnswer: 2,
      explanation: "The average age of farm operators is 58 years and increasing."
    },
    {
      id: 39,
      moduleId: 4,
      question: "What percentage of farms use record keeping software?",
      options: ["55%", "58%", "60%", "63%"],
      correctAnswer: 2,
      explanation: "Approximately 60% of commercial farms use record keeping software."
    },
    {
      id: 40,
      moduleId: 5,
      question: "How much can drip irrigation save compared to flood irrigation?",
      options: ["25-45%", "30-50%", "30-60%", "35-65%"],
      correctAnswer: 2,
      explanation: "Drip irrigation saves 30-60% water compared to flood irrigation."
    }
  ]
};

export type AgricultureManagementCertificateType = typeof AgricultureManagementCertificate;

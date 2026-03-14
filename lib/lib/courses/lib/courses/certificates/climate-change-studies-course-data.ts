// Climate Change Studies (Certificate) - Complete Course Data
// This is a single, continuous TypeScript object ready for implementation

export const climateChangeStudiesCertificateCourse = {
  // 1. COURSE METADATA & IDENTIFICATION
  id: "climate-change-studies-certificate",
  title: "Climate Change Studies (Certificate)",
  description: "Comprehensive understanding of climate change science, impacts, policy frameworks, and mitigation strategies. Learn the scientific basis, socioeconomic effects, and global response mechanisms to climate change.",
  duration: "6 weeks",
  timeCommitment: "5-7 hours per week",
  price: 12,
  upgradePrice: 18,
  icon: "🌍",
  badge: "Certificate",
  prerequisites: "No prior science background required",
  learningOutcomes: [
    "Understand the scientific principles and evidence for climate change",
    "Analyze climate change impacts on ecosystems and human systems",
    "Evaluate climate policy frameworks and international agreements",
    "Assess mitigation technologies and renewable energy solutions",
    "Understand adaptation strategies for climate resilience",
    "Analyze economic aspects and climate finance mechanisms"
  ],

  // 2. MODULE ARCHITECTURE (6 Modules + Final Exam)
  modules: [
    {
      id: 1,
      title: "Climate Science Fundamentals",
      content: `
# Module 1: Climate Science Fundamentals

Understanding the basic science behind climate change is essential for comprehending current challenges and solutions.

## **1.1 The Earth's Climate System**
The climate system consists of **five major components** that interact continuously:

1. **Atmosphere**
   - **Composition**: 78% nitrogen, 21% oxygen, 0.9% argon, 0.04% carbon dioxide (rising)
   - **Layers**: Troposphere (0-12 km), Stratosphere (12-50 km), Mesosphere, Thermosphere
   - **Greenhouse Effect**: Natural process warming Earth by ~33°C (from -18°C to +15°C average)
   - **Circulation Patterns**: Hadley, Ferrel, Polar cells driving weather systems

2. **Hydrosphere**
   - **Ocean Cover**: 71% of Earth's surface, contains 97% of Earth's water
   - **Ocean Circulation**: Thermohaline circulation (global conveyor belt)
   - **Heat Capacity**: Oceans absorb 93% of excess heat from global warming
   - **Sea Level**: Currently rising 3.3 mm/year (1993-2023 average)

3. **Cryosphere**
   - **Ice Sheets**: Greenland (2.85 million km³), Antarctica (26.5 million km³)
   - **Glaciers**: ~170,000 glaciers worldwide, losing 267 gigatons/year (2000-2019)
   - **Sea Ice**: Arctic summer minimum declining ~13% per decade since 1979
   - **Permafrost**: Contains ~1,700 gigatons of carbon (twice atmospheric carbon)

4. **Lithosphere**
   - **Plate Tectonics**: Continental drift over millions of years
   - **Volcanic Activity**: Releases CO₂ but also cooling aerosols
   - **Weathering**: Chemical weathering removes CO₂ from atmosphere over geological timescales

5. **Biosphere**
   - **Photosynthesis**: Removes ~123 gigatons of carbon annually
   - **Respiration/Decomposition**: Releases ~119 gigatons of carbon annually
   - **Carbon Storage**: Forests store ~45% of terrestrial carbon

## **1.2 The Greenhouse Effect**
**Natural vs. Enhanced Greenhouse Effect**:

- **Natural Greenhouse Effect**: Essential for life, maintains Earth's average temperature at 15°C
- **Enhanced Greenhouse Effect**: Human activities increasing greenhouse gas concentrations
- **Energy Balance**: Incoming solar radiation = 340 W/m², outgoing infrared radiation = 239 W/m²
- **Radiative Forcing**: Measured in watts per square meter (W/m²), currently +2.72 W/m² from human activities

**Major Greenhouse Gases**:
1. **Carbon Dioxide (CO₂)**
   - **Pre-industrial**: 280 ppm, **Current**: 420 ppm (2023), **Annual Increase**: ~2.5 ppm
   - **Atmospheric Lifetime**: 100-1000 years
   - **Sources**: Fossil fuels (65%), deforestation (11%), cement production (3%)
   - **Global Warming Potential (GWP)**: 1 (baseline)

2. **Methane (CH₄)**
   - **Pre-industrial**: 722 ppb, **Current**: 1,912 ppb (2023)
   - **Atmospheric Lifetime**: ~12 years
   - **Sources**: Agriculture (40%), fossil fuels (35%), wetlands (20%)
   - **GWP**: 28-36 over 100 years

3. **Nitrous Oxide (N₂O)**
   - **Pre-industrial**: 270 ppb, **Current**: 336 ppb (2023)
   - **Atmospheric Lifetime**: ~114 years
   - **Sources**: Agriculture (60%), industrial processes (20%), biomass burning (10%)
   - **GWP**: 265-298 over 100 years

4. **Fluorinated Gases**
   - **Types**: HFCs, PFCs, SF₆, NF₃
   - **Atmospheric Lifetime**: Varies from 1 to 50,000 years
   - **Sources**: Refrigeration, air conditioning, electronics manufacturing
   - **GWP**: Up to 23,500 times CO₂ (for SF₆ over 100 years)

## **1.3 Climate Forcings & Feedbacks**
**Climate Forcings** (external factors changing climate):
- **Positive Forcings**: Warming effects (GHG increases, black carbon)
- **Negative Forcings**: Cooling effects (aerosols, volcanic eruptions)
- **Anthropogenic Forcing**: +2.72 W/m² (human-caused since 1750)
- **Solar Forcing**: Minor contributor (+0.05 W/m² since 1750)

**Climate Feedbacks** (system responses amplifying/dampening changes):
1. **Water Vapor Feedback**: Warming → more evaporation → more water vapor (strongest positive feedback)
2. **Ice-Albedo Feedback**: Warming → less ice → lower reflectivity → more warming
3. **Cloud Feedback**: Complex - low clouds cool, high clouds warm (net slightly positive)
4. **Carbon Cycle Feedbacks**: Warming → permafrost thaw → CO₂/CH₄ release → more warming

## **1.4 Paleoclimate Evidence**
**Methods for studying past climate**:

- **Ice Cores**: Antarctic/Vostok cores provide 800,000-year climate record
  - **CO₂ Range**: 180-300 ppm over glacial-interglacial cycles
  - **Temperature Correlation**: Strong correlation with CO₂ levels
  - **Resolution**: Seasonal to annual layers in recent ice

- **Sediment Cores**: Ocean/lake sediments show million-year climate patterns
- **Tree Rings**: Annual growth rings show temperature/precipitation patterns
- **Coral Reefs**: Growth patterns and chemistry reveal past ocean conditions
- **Historical Records**: Documentary evidence from human civilizations

**Key Climate Periods**:
- **Last Glacial Maximum**: ~21,000 years ago, 4-7°C cooler than pre-industrial
- **Holocene Climate Optimum**: ~6,000 years ago, 1-2°C warmer in some regions
- **Medieval Warm Period**: 950-1250 AD, regional warming (not global)
- **Little Ice Age**: 1300-1850 AD, 0.5-1°C cooler in Northern Hemisphere

## **1.5 Current Climate Observations**
**Key indicators of contemporary climate change**:

1. **Global Temperature**
   - **Warming Trend**: +1.1°C since pre-industrial (1880-2023)
   - **Warming Rate**: 0.18°C per decade since 1981
   - **Warmest Years**: 2023, 2020, 2019, 2015, 2017 (all since 2015)
   - **Regional Variation**: Arctic warming 2-3 times global average

2. **Ocean Changes**
   - **Ocean Heat Content**: Upper 2,000 meters warming at rate of 0.68 W/m² (1993-2023)
   - **Sea Surface Temperature**: Increased 0.88°C since 1850
   - **Ocean Acidification**: pH decreased by 0.1 units (30% increase in acidity)
   - **Deoxygenation**: Loss of 1-2% of ocean oxygen since 1960

3. **Cryosphere Changes**
   - **Arctic Sea Ice**: Summer minimum declined 13% per decade (1979-2023)
   - **Antarctic Ice Loss**: Increased from 40 to 252 gigatons/year (1979-2017)
   - **Glacier Mass Loss**: 267 ± 16 gigatons/year (2000-2019)
   - **Permafrost Temperature**: Increased by up to 2°C in Arctic since 1980s

**Remember**: Climate change is not weather - weather is daily variations, climate is long-term patterns over 30+ years.
`,
      completed: false,
      quiz: [
        {
          id: 1,
          question: "What percentage of excess heat from global warming is absorbed by oceans?",
          options: ["50%", "70%", "93%", "99%"],
          correctAnswer: 2,
          explanation: "Oceans absorb approximately 93% of the excess heat trapped by greenhouse gases."
        },
        {
          id: 2,
          question: "What was the pre-industrial concentration of carbon dioxide in the atmosphere?",
          options: ["180 ppm", "280 ppm", "380 ppm", "420 ppm"],
          correctAnswer: 1,
          explanation: "Pre-industrial CO₂ concentration was approximately 280 parts per million (ppm)."
        },
        {
          id: 3,
          question: "How much has global average temperature increased since pre-industrial times?",
          options: ["0.5°C", "1.1°C", "1.5°C", "2.0°C"],
          correctAnswer: 1,
          explanation: "Global average temperature has increased by approximately 1.1°C since pre-industrial times."
        },
        {
          id: 4,
          question: "What is the current annual increase in atmospheric CO₂ concentration?",
          options: ["0.5 ppm per year", "1.0 ppm per year", "2.5 ppm per year", "5.0 ppm per year"],
          correctAnswer: 2,
          explanation: "Atmospheric CO₂ is currently increasing at approximately 2.5 parts per million per year."
        },
        {
          id: 5,
          question: "Which greenhouse gas has the shortest atmospheric lifetime?",
          options: ["Carbon dioxide", "Methane", "Nitrous oxide", "Sulfur hexafluoride"],
          correctAnswer: 1,
          explanation: "Methane has an atmospheric lifetime of approximately 12 years, much shorter than other major greenhouse gases."
        },
        {
          id: 6,
          question: "How much has Arctic sea ice declined per decade since 1979?",
          options: ["5% per decade", "13% per decade", "25% per decade", "40% per decade"],
          correctAnswer: 1,
          explanation: "Arctic summer sea ice minimum has declined by approximately 13% per decade since satellite observations began in 1979."
        },
        {
          id: 7,
          question: "What is the baseline gas for Global Warming Potential (GWP) calculations?",
          options: ["Carbon dioxide", "Methane", "Nitrous oxide", "Water vapor"],
          correctAnswer: 0,
          explanation: "Carbon dioxide has a GWP of 1, serving as the baseline for comparing other greenhouse gases."
        },
        {
          id: 8,
          question: "How much has ocean pH decreased due to acidification?",
          options: ["0.01 pH units", "0.1 pH units", "0.5 pH units", "1.0 pH units"],
          correctAnswer: 1,
          explanation: "Ocean pH has decreased by approximately 0.1 units since pre-industrial times, representing a 30% increase in acidity."
        },
        {
          id: 9,
          question: "What climate feedback involves reduced ice cover leading to more warming?",
          options: ["Ice-albedo feedback", "Water vapor feedback", "Cloud feedback", "Carbon cycle feedback"],
          correctAnswer: 0,
          explanation: "Ice-albedo feedback occurs when warming reduces ice cover, lowering Earth's reflectivity and causing further warming."
        },
        {
          id: 10,
          question: "What method provides climate records spanning 800,000 years?",
          options: ["Ice cores", "Tree rings", "Sediment cores", "Coral reefs"],
          correctAnswer: 0,
          explanation: "Antarctic ice cores, like the Vostok core, provide continuous climate records spanning 800,000 years."
        },
        {
          id: 11,
          question: "How much carbon does permafrost contain compared to the atmosphere?",
          options: ["Half as much", "About the same", "Twice as much", "Ten times as much"],
          correctAnswer: 2,
          explanation: "Permafrost contains approximately 1,700 gigatons of carbon, about twice the amount currently in the atmosphere."
        },
        {
          id: 12,
          question: "What is the approximate atmospheric lifetime of nitrous oxide?",
          options: ["12 years", "114 years", "1,000 years", "10,000 years"],
          correctAnswer: 1,
          explanation: "Nitrous oxide has an atmospheric lifetime of approximately 114 years."
        },
        {
          id: 13,
          question: "How fast is global sea level currently rising?",
          options: ["1.0 mm/year", "2.0 mm/year", "3.3 mm/year", "5.0 mm/year"],
          correctAnswer: 2,
          explanation: "Global mean sea level is currently rising at approximately 3.3 millimeters per year (1993-2023 average)."
        },
        {
          id: 14,
          question: "What percentage of Earth's surface is covered by ocean?",
          options: ["50%", "60%", "71%", "80%"],
          correctAnswer: 2,
          explanation: "Oceans cover approximately 71% of Earth's surface area."
        },
        {
          id: 15,
          question: "Which greenhouse gas has increased the most in percentage terms since pre-industrial times?",
          options: ["Carbon dioxide", "Methane", "Nitrous oxide", "CFC-12"],
          correctAnswer: 1,
          explanation: "Methane has increased by about 165% since pre-industrial times (from 722 to 1,912 ppb), the largest percentage increase among major greenhouse gases."
        },
        {
          id: 16,
          question: "What is radiative forcing measured in?",
          options: ["Watts per square meter", "Degrees Celsius", "Parts per million", "Joules per kilogram"],
          correctAnswer: 0,
          explanation: "Radiative forcing is measured in watts per square meter (W/m²), representing the imbalance in Earth's energy budget."
        },
        {
          id: 17,
          question: "How many gigatons of carbon do glaciers lose annually?",
          options: ["50 gigatons/year", "150 gigatons/year", "267 gigatons/year", "400 gigatons/year"],
          correctAnswer: 2,
          explanation: "Glaciers worldwide are losing approximately 267 gigatons of ice per year (2000-2019 average)."
        },
        {
          id: 18,
          question: "What was the approximate CO₂ concentration during the Last Glacial Maximum?",
          options: ["180 ppm", "280 ppm", "380 ppm", "420 ppm"],
          correctAnswer: 0,
          explanation: "During the Last Glacial Maximum (~21,000 years ago), atmospheric CO₂ concentration was approximately 180 ppm."
        },
        {
          id: 19,
          question: "Which component of the climate system stores the most heat?",
          options: ["Atmosphere", "Oceans", "Land surface", "Ice sheets"],
          correctAnswer: 1,
          explanation: "Oceans have the highest heat capacity and store over 90% of the excess heat from global warming."
        },
        {
          id: 20,
          question: "What is the minimum period for defining climate (as opposed to weather)?",
          options: ["10 years", "20 years", "30 years", "50 years"],
          correctAnswer: 2,
          explanation: "Climate is typically defined as average weather conditions over a period of 30 years or more, distinguishing it from day-to-day weather."
        }
      ]
    },
    {
      id: 2,
      title: "Climate Change Impacts & Vulnerabilities",
      content: `
# Module 2: Climate Change Impacts & Vulnerabilities

Understanding how climate change affects natural systems, human communities, and global economies.

## **2.1 Ecosystems & Biodiversity Impacts**
**Terrestrial ecosystem changes**:

1. **Forest Ecosystems**
   - **Range Shifts**: Species moving poleward at ~16 km per decade, upward at 11 meters per decade
   - **Phenological Changes**: Spring arriving 2-3 days earlier per decade in Northern Hemisphere
   - **Increased Wildfires**: Burned area increasing globally, especially in boreal forests
   - **Forest Dieback**: Drought-induced mortality increasing in many regions

2. **Coral Reefs**
   - **Coral Bleaching**: Mass events increasing in frequency and severity
   - **Ocean Acidification**: Reducing coral calcification rates by 15-30% since pre-industrial
   - **Thermal Stress**: 75% of world's coral reefs experienced severe heat stress (2014-2017)
   - **Projections**: 70-90% decline at 1.5°C warming, 99% loss at 2°C warming

3. **Polar Ecosystems**
   - **Arctic Amplification**: Warming 2-3 times global average
   - **Sea Ice Loss**: Threatening polar bears, walruses, ice-dependent species
   - **Permafrost Thaw**: Releasing ancient carbon, changing hydrology
   - **Tundra Greening**: Increased shrub growth, changing albedo and carbon balance

**Biodiversity Risks**:
- **Extinction Risk**: 20-30% of species at high risk with 1.5-2.5°C warming
- **Climate Velocity**: Species need to move 0.42 km/year to track climate changes
- **Protected Areas**: 8-25% of species in protected areas may experience unsuitable climate by 2070
- **Ecosystem Services**: Pollination, water purification, carbon sequestration threatened

## **2.2 Human Health Impacts**
**Direct health effects of climate change**:

1. **Heat-Related Illness & Mortality**
   - **Excess Deaths**: 37% of heat-related deaths attributable to climate change (1991-2018)
   - **Vulnerable Groups**: Elderly, children, outdoor workers, urban poor
   - **Urban Heat Island Effect**: Cities 1-3°C warmer than surrounding areas, up to 12°C at night
   - **Projections**: Heat-related deaths could increase by 250% by 2050 under high emissions

2. **Vector-Borne Diseases**
   - **Malaria**: 500 million additional people at risk by 2080
   - **Dengue**: Climate suitability increasing for Aedes mosquitoes
   - **Lyme Disease**: Tick ranges expanding northward
   - **Seasonal Changes**: Longer transmission seasons in temperate regions

3. **Water & Food-borne Diseases**
   - **Cholera**: Increased risk with flooding and water contamination
   - **Diarrheal Diseases**: 48,000 additional deaths annually by 2030 (WHO estimate)
   - **Harmful Algal Blooms**: Increasing with warmer waters and nutrient runoff

**Mental Health Impacts**:
- **Climate Anxiety**: Growing psychological distress about climate change
- **Post-Disaster Trauma**: After extreme weather events
- **Ecological Grief**: Loss of familiar landscapes and species
- **Solastalgia**: Distress from environmental change in home environments

## **2.3 Water Resources & Agriculture**
**Water cycle intensification**:

- **Precipitation Patterns**: Wet regions getting wetter, dry regions getting drier
- **Extreme Precipitation**: Intensity increasing 7% per 1°C warming (Clausius-Clapeyron relation)
- **Snowpack Reduction**: Western US snowpack declining 20% since 1950s
- **Glacier Melt**: Affecting water supplies for 1.9 billion people

**Agricultural impacts**:
1. **Crop Yields**
   - **Temperature Sensitivity**: Yield declines ~5% per 1°C warming for major crops
   - **Regional Variations**: Tropical regions more vulnerable than temperate
   - **CO₂ Fertilization**: Limited benefits, offset by heat stress and nutrient dilution
   - **Projections**: 5-30% yield reductions for major crops by 2050

2. **Livestock & Fisheries**
   - **Heat Stress**: Reduces livestock productivity, increases mortality
   - **Ocean Warming**: Shifting fish distributions, affecting catches
   - **Ocean Acidification**: Affecting shellfish and coral reef fisheries
   - **Disease Spread**: Increased livestock diseases in warmer conditions

**Food Security Dimensions**:
- **Availability**: Production changes, supply disruptions
- **Accessibility**: Price spikes, distribution challenges
- **Utilization**: Nutritional quality, food safety
- **Stability**: Climate variability affecting consistent supply

## **2.4 Infrastructure & Settlements**
**Built environment vulnerabilities**:

1. **Coastal Infrastructure**
   - **Sea Level Rise**: Threatening $1 trillion coastal assets by 2050
   - **Storm Surge**: Amplified by higher sea levels
   - **Saltwater Intrusion**: Affecting freshwater supplies and agriculture
   - **Erosion**: Accelerated coastal erosion affecting communities

2. **Urban Systems**
   - **Heat Islands**: Amplifying heat waves in cities
   - **Stormwater Systems**: Overwhelmed by intense rainfall
   - **Energy Demand**: Increased cooling needs, reduced heating needs
   - **Transportation**: Heat damage to roads, rails; flooding disruptions

3. **Energy Infrastructure**
   - **Thermal Power Plants**: Reduced efficiency in warmer temperatures
   - **Hydropower**: Affected by changing precipitation and glacier melt
   - **Transmission Lines**: Reduced capacity in heat waves
   - **Renewable Energy**: Solar (benefits from clearer skies), wind (pattern changes)

**Economic Impacts**:
- **Direct Damages**: From extreme weather events ($320 billion in 2017 globally)
- **Productivity Losses**: Heat reducing labor productivity, especially outdoor work
- **Supply Chain Disruptions**: Climate extremes affecting global trade
- **Insurance Costs**: Increasing premiums, reduced availability in high-risk areas

## **2.5 Vulnerable Populations & Regions**
**Differential vulnerability**:

1. **Geographic Vulnerabilities**
   - **Small Island States**: Sea level rise, storm intensification, freshwater scarcity
   - **Arctic Communities**: Rapid warming, cultural impacts, infrastructure damage
   - **Drylands**: Water scarcity, desertification, agricultural challenges
   - **Deltas & Coastal Zones**: Combined sea level rise, subsidence, storm impacts

2. **Social Vulnerabilities**
   - **Poverty**: Limited resources for adaptation, recovery
   - **Indigenous Communities**: Close connection to changing ecosystems
   - **Gender Differences**: Women often more vulnerable due to socioeconomic factors
   - **Age Factors**: Children and elderly particularly susceptible

3. **Economic Sectors at Risk**
   - **Agriculture**: 28% of global employment, highly climate-sensitive
   - **Tourism**: Coastal, mountain, and nature-based tourism vulnerable
   - **Fisheries**: 60 million people employed globally, stocks shifting
   - **Insurance**: Increasing losses from climate extremes

**Tipping Points & Irreversible Changes**:
- **Amazon Dieback**: Risk of shifting from rainforest to savanna
- **West Antarctic Ice Sheet**: Potential multi-meter sea level rise over centuries
- **Permafrost Carbon Feedback**: Large-scale release of stored carbon
- **Atlantic Meridional Overturning Circulation**: Slowing, with climate implications

**Remember**: Climate change impacts are not evenly distributed - they disproportionately affect the most vulnerable populations who contributed least to the problem.
`,
      completed: false,
      quiz: [
        {
          id: 1,
          question: "How fast are species moving poleward to track climate changes?",
          options: ["1 km per decade", "8 km per decade", "16 km per decade", "32 km per decade"],
          correctAnswer: 2,
          explanation: "Species are moving poleward at approximately 16 kilometers per decade on average to track suitable climate conditions."
        },
        {
          id: 2,
          question: "What percentage of coral reefs are projected to decline at 1.5°C warming?",
          options: ["30-50%", "50-70%", "70-90%", "90-99%"],
          correctAnswer: 2,
          explanation: "70-90% of coral reefs are projected to decline at 1.5°C warming, with near-complete loss at 2°C."
        },
        {
          id: 3,
          question: "How much does extreme precipitation intensity increase per 1°C warming?",
          options: ["1% per 1°C", "3% per 1°C", "7% per 1°C", "10% per 1°C"],
          correctAnswer: 2,
          explanation: "Extreme precipitation intensity increases by approximately 7% per 1°C warming due to increased atmospheric moisture holding capacity."
        },
        {
          id: 4,
          question: "What percentage of global employment is in agriculture?",
          options: ["10%", "28%", "45%", "60%"],
          correctAnswer: 1,
          explanation: "Agriculture employs approximately 28% of the global workforce, making it particularly vulnerable to climate impacts."
        },
        {
          id: 5,
          question: "How many people depend on glacier melt for water supplies?",
          options: ["190 million", "500 million", "1.9 billion", "3.8 billion"],
          correctAnswer: 2,
          explanation: "Approximately 1.9 billion people depend on glacier and snowmelt for their water supplies."
        },
        {
          id: 6,
          question: "What is the urban heat island effect temperature difference?",
          options: ["Cities 0.5-1°C warmer", "Cities 1-3°C warmer", "Cities 3-5°C warmer", "Cities 5-10°C warmer"],
          correctAnswer: 1,
          explanation: "Cities are typically 1-3°C warmer than surrounding rural areas due to the urban heat island effect."
        },
        {
          id: 7,
          question: "How many additional people are projected to be at malaria risk by 2080?",
          options: ["50 million", "150 million", "500 million", "1 billion"],
          correctAnswer: 2,
          explanation: "Climate change could put an additional 500 million people at risk of malaria by 2080."
        },
        {
          id: 8,
          question: "What percentage of heat-related deaths are attributable to climate change?",
          options: ["10%", "25%", "37%", "50%"],
          correctAnswer: 2,
          explanation: "Approximately 37% of heat-related deaths between 1991-2018 were attributable to human-caused climate change."
        },
        {
          id: 9,
          question: "How much has Western US snowpack declined since the 1950s?",
          options: ["5% decline", "10% decline", "20% decline", "40% decline"],
          correctAnswer: 2,
          explanation: "Western US snowpack has declined by approximately 20% since the 1950s due to warming temperatures."
        },
        {
          id: 10,
          question: "What is solastalgia?",
          options: ["Distress from environmental change in home environments", "Fear of future climate impacts", "Anxiety about extreme weather", "Grief over species extinction"],
          correctAnswer: 0,
          explanation: "Solastalgia is psychological distress caused by environmental change impacting one's home environment."
        },
        {
          id: 11,
          question: "How much do crop yields typically decline per 1°C warming?",
          options: ["1% per 1°C", "3% per 1°C", "5% per 1°C", "10% per 1°C"],
          correctAnswer: 2,
          explanation: "Yields of major crops typically decline by approximately 5% per 1°C of warming, with variations by crop and region."
        },
        {
          id: 12,
          question: "What is climate velocity?",
          options: ["Rate species must move to track climate changes", "Speed of atmospheric circulation", "Rate of temperature increase", "Movement of climate zones"],
          correctAnswer: 0,
          explanation: "Climate velocity is the rate at which species must move (in km/year) to track suitable climate conditions as temperatures change."
        },
        {
          id: 13,
          question: "How many people are employed in fisheries globally?",
          options: ["10 million", "30 million", "60 million", "100 million"],
          correctAnswer: 2,
          explanation: "Approximately 60 million people are employed in fisheries globally, with many more depending on fish for nutrition."
        },
        {
          id: 14,
          question: "What percentage of species in protected areas may experience unsuitable climate by 2070?",
          options: ["2-5%", "8-25%", "30-50%", "60-80%"],
          correctAnswer: 1,
          explanation: "8-25% of species in protected areas may experience unsuitable climate conditions by 2070 due to climate change."
        },
        {
          id: 15,
          question: "How much earlier is spring arriving in the Northern Hemisphere per decade?",
          options: ["1 day earlier per decade", "2-3 days earlier per decade", "5 days earlier per decade", "10 days earlier per decade"],
          correctAnswer: 1,
          explanation: "Spring is arriving 2-3 days earlier per decade in the Northern Hemisphere due to climate change."
        },
        {
          id: 16,
          question: "What is the Clausius-Clapeyron relation?",
          options: ["Atmospheric moisture increases 7% per 1°C warming", "Ocean heat capacity relationship", "Ice melt temperature dependence", "CO₂ solubility in seawater"],
          correctAnswer: 0,
          explanation: "The Clausius-Clapeyron relation describes how atmospheric moisture holding capacity increases by approximately 7% per 1°C warming."
        },
        {
          id: 17,
          question: "How many heat-related deaths are projected by 2050 under high emissions?",
          options: ["No increase", "50% increase", "150% increase", "250% increase"],
          correctAnswer: 3,
          explanation: "Heat-related deaths could increase by 250% by 2050 compared to current levels under high emissions scenarios."
        },
        {
          id: 18,
          question: "What value of coastal assets are threatened by sea level rise by 2050?",
          options: ["$100 billion", "$500 billion", "$1 trillion", "$5 trillion"],
          correctAnswer: 2,
          explanation: "Approximately $1 trillion worth of coastal assets are threatened by sea level rise by 2050."
        },
        {
          id: 19,
          question: "How much has coral calcification declined due to ocean acidification?",
          options: ["5-10% decline", "15-30% decline", "40-60% decline", "70-90% decline"],
          correctAnswer: 1,
          explanation: "Coral calcification rates have declined by 15-30% since pre-industrial times due to ocean acidification."
        },
        {
          id: 20,
          question: "Which region experiences warming 2-3 times the global average?",
          options: ["Tropics", "Temperate regions", "Antarctica", "Arctic"],
          correctAnswer: 3,
          explanation: "The Arctic is experiencing warming at 2-3 times the global average rate, a phenomenon known as Arctic amplification."
        }
      ]
    },
    {
      id: 3,
      title: "Climate Policy & International Agreements",
      content: `
# Module 3: Climate Policy & International Agreements

Understanding the policy frameworks, international agreements, and governance structures addressing climate change.

## **3.1 International Climate Governance**
**Key institutions and frameworks**:

1. **United Nations Framework Convention on Climate Change (UNFCCC)**
   - **Established**: 1992 at Earth Summit in Rio de Janeiro
   - **Objective**: Stabilize greenhouse gas concentrations to prevent dangerous anthropogenic interference
   - **Principles**: Common but differentiated responsibilities, precautionary principle
   - **Parties**: 197 countries (near-universal membership)
   - **Conference of Parties (COP)**: Annual decision-making meeting

2. **Intergovernmental Panel on Climate Change (IPCC)**
   - **Established**: 1988 by UNEP and WMO
   - **Role**: Assess climate science, impacts, and response options
   - **Assessment Reports**: Comprehensive reviews every 5-7 years (AR6 published 2021-2023)
   - **Working Groups**: WG1 (science), WG2 (impacts/adaptation), WG3 (mitigation)
   - **Nobel Peace Prize**: Awarded 2007 (shared with Al Gore)

3. **Other Key Organizations**
   - **World Meteorological Organization (WMO)**: Climate monitoring, research coordination
   - **United Nations Environment Programme (UNEP)**: Environmental policy, emissions gap reports
   - **Green Climate Fund (GCF)**: Financial mechanism under UNFCCC
   - **Global Environment Facility (GEF)**: Financing for environmental projects

## **3.2 Major International Agreements**
**Evolution of climate agreements**:

1. **Kyoto Protocol (1997)**
   - **Binding Targets**: Developed countries only (Annex I parties)
   - **Commitment Periods**: 2008-2012 (CP1), 2013-2020 (CP2)
   - **Flexibility Mechanisms**: Emissions trading, clean development mechanism, joint implementation
   - **Coverage**: At peak, covered ~18% of global emissions
   - **Withdrawals**: Canada (2011), US never ratified

2. **Paris Agreement (2015)**
   - **Adoption**: COP21 in Paris, entered force November 2016
   - **Universal Participation**: 194 parties (191 countries + EU) as of 2023
   - **Core Elements**:
     - **Nationally Determined Contributions (NDCs)**: Country-specific climate plans
     - **Global Stocktake**: Every 5 years to assess collective progress
     - **Transparency Framework**: Regular reporting and review
     - **Finance**: $100 billion/year from developed to developing countries
   - **Temperature Goal**: "Well below 2°C" and pursue 1.5°C
   - **Ratification**: 94% of global emissions covered

3. **Post-Paris Developments**
   - **Glasgow Climate Pact (2021)**: Phasing down unabated coal, loss and damage discussion
   - **Sharm el-Sheikh Implementation Plan (2022)**: Loss and damage fund established
   - **UAE Consensus (2023)**: Transition away from fossil fuels, tripling renewables by 2030

## **3.3 National Climate Policies**
**Policy approaches and instruments**:

1. **Carbon Pricing Mechanisms**
   - **Carbon Taxes**: Direct tax on CO₂ emissions
     - **Examples**: Sweden ($137/ton), Canada (CA$65/ton, rising to CA$170/ton by 2030)
     - **Coverage**: Typically covers 20-40% of national emissions
     - **Revenue Use**: Often recycled through tax cuts or climate investments
   
   - **Emissions Trading Systems (ETS)**
     - **Cap-and-Trade**: Government sets cap, companies trade allowances
     - **Examples**: EU ETS (world's largest), California, China national ETS
     - **Coverage**: EU ETS covers ~40% of EU emissions
     - **Price Range**: $10-100/ton depending on system and year

2. **Regulatory Approaches**
   - **Performance Standards**: Emissions limits for vehicles, power plants, industries
   - **Renewable Portfolio Standards**: Minimum renewable energy requirements
   - **Energy Efficiency Standards**: Buildings, appliances, industrial equipment
   - **Phase-outs**: Coal phase-out policies, ICE vehicle bans

3. **Subsidies and Investment**
   - **Fossil Fuel Subsidies**: $7 trillion globally (IMF estimate including externalities)
   - **Renewable Energy Subsidies**: $166 billion globally in 2022
   - **Research & Development**: Clean energy R&D investment trends

## **3.4 Subnational & Non-State Action**
**Climate action beyond national governments**:

1. **City and Regional Initiatives**
   - **C40 Cities**: 97 megacities committed to climate action
   - **Climate Mayors**: 470+ US mayors committed to Paris Agreement goals
   - **Under2 Coalition**: 260+ states/regions aiming for 80-95% emissions reductions by 2050
   - **Net Zero Commitments**: 1,049 cities committed to net zero (as of 2023)

2. **Corporate Climate Action**
   - **Science Based Targets initiative**: 4,000+ companies setting emission reduction targets
   - **RE100**: 400+ companies committed to 100% renewable electricity
   - **Climate Disclosure**: CDP (formerly Carbon Disclosure Project), TCFD recommendations
   - **Net Zero Commitments**: 1/3 of largest publicly traded companies have net zero targets

3. **Financial Sector Initiatives**
   - **Net-Zero Banking Alliance**: 136 banks representing 40% of global banking assets
   - **Glasgow Financial Alliance for Net Zero (GFANZ)**: $130+ trillion in assets committed
   - **Climate-Related Financial Disclosures**: Increasing regulatory requirements
   - **Divestment Movement**: $40+ trillion in assets committed to fossil fuel divestment

## **3.5 Climate Justice & Equity**
**Addressing unequal burdens and responsibilities**:

1. **Historical Responsibility**
   - **Cumulative Emissions**: Developed countries responsible for ~50% of historical CO₂
   - **Per Capita Emissions**: Vary from <1 ton to >15 tons CO₂ per person annually
   - **Consumption vs. Production**: Different accounting methods show different responsibility distributions

2. **Climate Finance**
   - **$100 Billion Goal**: Annual commitment from developed to developing countries (not yet fully met)
   - **Green Climate Fund**: $10+ billion pledged, $3+ billion disbursed for projects
   - **Adaptation Finance**: Only 20-25% of climate finance, needs are 50%+
   - **Loss and Damage**: New fund established at COP27 (2022)

3. **Just Transition**
   - **Workforce Transition**: Supporting workers in fossil fuel industries
   - **Community Impacts**: Addressing regional economic transitions
   - **Energy Poverty**: Ensuring clean energy access for all
   - **Indigenous Rights**: Respecting traditional knowledge and land rights

**Policy Effectiveness Evaluation**:
- **Emissions Reductions**: Tracking against NDCs and long-term goals
- **Co-benefits**: Health improvements, job creation, energy security
- **Cost-effectiveness**: Comparing policy options using metrics like $/ton CO₂ reduced
- **Political Feasibility**: Public support, stakeholder interests, institutional capacity

**Remember**: Effective climate policy requires multiple approaches working together - no single policy is sufficient to address the complex challenge of climate change.
`,
      completed: false,
      quiz: [
        {
          id: 1,
          question: "In what year was the Paris Agreement adopted?",
          options: ["1992", "1997", "2005", "2015"],
          correctAnswer: 3,
          explanation: "The Paris Agreement was adopted in 2015 at COP21 and entered into force in November 2016."
        },
        {
          id: 2,
          question: "How many countries are parties to the UNFCCC?",
          options: ["50 countries", "100 countries", "150 countries", "197 countries"],
          correctAnswer: 3,
          explanation: "There are 197 parties to the UNFCCC, representing near-universal international participation."
        },
        {
          id: 3,
          question: "What does NDC stand for in climate policy?",
          options: ["Nationally Determined Contribution", "National Development Commitment", "Negotiated Decarbonization Compact", "Non-binding Development Criteria"],
          correctAnswer: 0,
          explanation: "NDC stands for Nationally Determined Contribution - each country's climate action plan under the Paris Agreement."
        },
        {
          id: 4,
          question: "What year did the Kyoto Protocol's first commitment period begin?",
          options: ["1997", "2005", "2008", "2012"],
          correctAnswer: 2,
          explanation: "The Kyoto Protocol's first commitment period ran from 2008 to 2012, with binding targets for developed countries."
        },
        {
          id: 5,
          question: "What is the annual climate finance goal from developed to developing countries?",
          options: ["$50 billion", "$100 billion", "$500 billion", "$1 trillion"],
          correctAnswer: 1,
          explanation: "Developed countries committed to mobilize $100 billion annually in climate finance for developing countries."
        },
        {
          id: 6,
          question: "What percentage of global emissions does the EU ETS cover?",
          options: ["10%", "25%", "40%", "60%"],
          correctAnswer: 2,
          explanation: "The EU Emissions Trading System covers approximately 40% of the European Union's greenhouse gas emissions."
        },
        {
          id: 7,
          question: "How many companies have joined the Science Based Targets initiative?",
          options: ["500 companies", "1,000 companies", "4,000 companies", "10,000 companies"],
          correctAnswer: 2,
          explanation: "Over 4,000 companies worldwide have joined the Science Based Targets initiative to set emission reduction targets aligned with climate science."
        },
        {
          id: 8,
          question: "What Nobel Prize did the IPCC win in 2007?",
          options: ["Physics", "Chemistry", "Economics", "Peace"],
          correctAnswer: 3,
          explanation: "The IPCC was awarded the Nobel Peace Prize in 2007 (shared with Al Gore) for efforts to build knowledge about human-made climate change."
        },
        {
          id: 9,
          question: "What temperature goal is included in the Paris Agreement?",
          options: ["Below 1°C", "Well below 2°C and pursue 1.5°C", "Below 3°C", "No specific temperature goal"],
          correctAnswer: 1,
          explanation: "The Paris Agreement aims to hold temperature increase to 'well below 2°C' and pursue efforts to limit it to 1.5°C."
        },
        {
          id: 10,
          question: "What percentage of climate finance goes to adaptation?",
          options: ["5-10%", "20-25%", "40-45%", "60-65%"],
          correctAnswer: 1,
          explanation: "Only about 20-25% of climate finance currently goes to adaptation, despite needs being at least 50% according to many assessments."
        },
        {
          id: 11,
          question: "How many cities are in the C40 Cities network?",
          options: ["40 cities", "97 cities", "200 cities", "500 cities"],
          correctAnswer: 1,
          explanation: "The C40 Cities network includes 97 of the world's largest cities committed to addressing climate change."
        },
        {
          id: 12,
          question: "What is the main flexibility mechanism under the Kyoto Protocol?",
          options: ["Emissions trading", "Carbon taxation", "Subsidy reform", "Technology transfer"],
          correctAnswer: 0,
          explanation: "The Kyoto Protocol established emissions trading as a key flexibility mechanism for meeting reduction targets."
        },
        {
          id: 13,
          question: "What year was the loss and damage fund established?",
          options: ["2015", "2018", "2021", "2022"],
          correctAnswer: 3,
          explanation: "The loss and damage fund was established at COP27 in Sharm el-Sheikh in 2022."
        },
        {
          id: 14,
          question: "What does RE100 refer to?",
          options: ["Companies committed to 100% renewable electricity", "100% emission reduction target", "100 renewable energy projects", "100% fossil fuel phase-out"],
          correctAnswer: 0,
          explanation: "RE100 is a global corporate initiative bringing together businesses committed to 100% renewable electricity."
        },
        {
          id: 15,
          question: "How often does the Global Stocktake occur under the Paris Agreement?",
          options: ["Every year", "Every 2 years", "Every 5 years", "Every 10 years"],
          correctAnswer: 2,
          explanation: "The Global Stocktake assesses collective progress toward Paris Agreement goals every 5 years."
        },
        {
          id: 16,
          question: "What percentage of historical CO₂ emissions are developed countries responsible for?",
          options: ["25%", "50%", "75%", "90%"],
          correctAnswer: 1,
          explanation: "Developed countries are responsible for approximately 50% of historical CO₂ emissions, despite having smaller populations."
        },
        {
          id: 17,
          question: "How much in assets is committed through the Glasgow Financial Alliance for Net Zero?",
          options: ["$10 trillion", "$50 trillion", "$130 trillion", "$500 trillion"],
          correctAnswer: 2,
          explanation: "GFANZ represents over $130 trillion in assets committed to transitioning to net zero emissions."
        },
        {
          id: 18,
          question: "What year was the UNFCCC established?",
          options: ["1972", "1982", "1992", "2002"],
          correctAnswer: 2,
          explanation: "The UN Framework Convention on Climate Change was established in 1992 at the Earth Summit in Rio de Janeiro."
        },
        {
          id: 19,
          question: "What is the carbon tax rate in Sweden?",
          options: ["$25/ton", "$50/ton", "$100/ton", "$137/ton"],
          correctAnswer: 3,
          explanation: "Sweden has one of the world's highest carbon taxes at approximately $137 per ton of CO₂."
        },
        {
          id: 20,
          question: "How many assessment reports has the IPCC published?",
          options: ["3 reports", "6 reports", "9 reports", "12 reports"],
          correctAnswer: 1,
          explanation: "The IPCC has published six comprehensive assessment reports (AR1 through AR6), with the sixth completed in 2023."
        }
      ]
    },
    {
      id: 4,
      title: "Mitigation Technologies & Energy Systems",
      content: `
# Module 4: Mitigation Technologies & Energy Systems

Understanding the technologies, energy systems, and approaches for reducing greenhouse gas emissions.

## **4.1 Energy System Transformation**
**Current global energy system**:

- **Primary Energy**: 580 exajoules/year (2022), 80% from fossil fuels
- **Final Energy**: 420 exajoules/year, with conversion and distribution losses
- **Sectoral Consumption**:
  - **Industry**: 38% of final energy
  - **Transportation**: 27% of final energy
  - **Buildings**: 34% of final energy (residential 22%, commercial 12%)
- **Electricity Generation**: 28,000 terawatt-hours/year (2022), 61% from fossil fuels

**Decarbonization Pathways**:
1. **Energy Efficiency**: Reducing energy demand through efficiency improvements
2. **Electrification**: Switching from fossil fuels to electricity in end-use sectors
3. **Decarbonized Electricity**: Producing electricity from low-carbon sources
4. **Clean Fuels**: Using hydrogen, biofuels, and synthetic fuels where electrification difficult

## **4.2 Renewable Energy Technologies**
**Current status and potential**:

1. **Solar Photovoltaics (PV)**
   - **Current Capacity**: 1,200 GW global (2023)
   - **Cost Reduction**: 90% cost reduction since 2010
   - **Levelized Cost**: $20-40/MWh (cheapest electricity source in many regions)
   - **Technical Potential**: 100 times current global energy demand
   - **Challenges**: Intermittency, land use, materials (silver, rare earths)

2. **Wind Power**
   - **Current Capacity**: 900 GW global (2023)
   - **Onshore Cost**: $30-60/MWh
   - **Offshore Cost**: $70-120/MWh (declining rapidly)
   - **Capacity Factors**: 25-50% (onshore), 40-60% (offshore)
   - **Challenges**: Intermittency, visual impact, bird/bat impacts

3. **Hydropower**
   - **Current Capacity**: 1,360 GW global (2023)
   - **Generation**: 4,300 TWh/year (largest renewable source)
   - **Pumped Storage**: 160 GW global (key for grid flexibility)
   - **Challenges**: Environmental impacts, displacement, methane from reservoirs

4. **Other Renewables**
   - **Bioenergy**: 130 GW electricity, plus heat and transportation fuels
   - **Geothermal**: 16 GW global, high capacity factors but limited locations
   - **Ocean Energy**: <1 GW, emerging technologies (tidal, wave)

## **4.3 Energy Storage & Grid Integration**
**Managing variable renewable energy**:

1. **Battery Storage**
   - **Lithium-ion Dominance**: 90% of new grid-scale storage
   - **Cost Reduction**: 90% since 2010, now ~$150/kWh for batteries
   - **Duration**: Typically 2-4 hours, increasing to 8+ hours
   - **Applications**: Frequency regulation, peak shaving, renewable integration

2. **Other Storage Technologies**
   - **Pumped Hydro**: 95% of current global storage capacity (160 GW)
   - **Compressed Air**: Limited deployment, geological constraints
   - **Thermal Storage**: Molten salt, ice storage for heating/cooling
   - **Hydrogen Storage**: Long-duration, seasonal storage potential

3. **Grid Modernization**
   - **Smart Grids**: Digital technologies for grid management
   - **Demand Response**: Shifting demand to match renewable generation
   - **Grid Expansion**: High-voltage transmission for renewable resource areas
   - **Microgrids**: Localized grids with distributed generation and storage

## **4.4 Carbon Capture, Utilization & Storage (CCUS)**
**Technologies for fossil fuel and industrial emissions**:

1. **Capture Technologies**
   - **Post-combustion**: Chemical absorption from flue gases (most common)
   - **Pre-combustion**: Gasification with CO₂ separation (IGCC plants)
   - **Oxy-fuel combustion**: Burning fuel in oxygen, producing concentrated CO₂
   - **Direct Air Capture**: Removing CO₂ directly from atmosphere

2. **Transport & Storage**
   - **Pipeline Transport**: Most common method, similar to natural gas pipelines
   - **Shipping Transport**: For offshore storage or long distances
   - **Geological Storage**: Depleted oil/gas fields, deep saline formations
   - **Storage Capacity**: Estimated 10,000+ gigatons globally

3. **Utilization Pathways**
   - **Enhanced Oil Recovery**: Injecting CO₂ to increase oil production
   - **Building Materials**: Mineralization into concrete, aggregates
   - **Fuels & Chemicals**: Converting CO₂ to synthetic fuels, plastics
   - **Food & Beverage**: Traditional uses in carbonation, packaging

**Current Status**:
- **Operating Facilities**: 40+ commercial CCUS facilities globally
- **Capture Capacity**: 50 million tons CO₂/year (0.1% of global emissions)
- **Cost Range**: $50-100/ton for capture from power plants, $600+/ton for direct air capture
- **Scale-up Needs**: 100-1,000x increase needed for climate targets

## **4.5 Sector-Specific Mitigation**
**Decarbonization by economic sector**:

1. **Transportation**
   - **Electric Vehicles**: 30 million EVs globally (2023), 14% of new car sales
   - **Battery Costs**: $100/kWh (approaching cost parity with ICE vehicles)
   - **Charging Infrastructure**: 2.8 million public chargers globally
   - **Aviation/Shipping**: Biofuels, hydrogen, ammonia, efficiency improvements

2. **Buildings**
   - **Heat Pumps**: 190 million installed globally, 10% annual growth
   - **Building Envelopes**: Insulation, windows, air sealing
   - **Efficient Appliances**: LED lighting, efficient HVAC, smart controls
   - **District Energy**: Combined heat and power, renewable district heating

3. **Industry**
   - **Steel**: Hydrogen direct reduction, carbon capture, scrap recycling
   - **Cement**: Alternative binders, fuel switching, carbon capture
   - **Chemicals**: Feedstock changes, process electrification, circular economy
   - **Aluminum**: Inert anode technology, renewable electricity

4. **Agriculture & Land Use**
   - **Sustainable Farming**: Precision agriculture, cover crops, reduced tillage
   - **Livestock Management**: Feed additives, manure management, breed improvements
   - **Forest Management**: Afforestation, reforestation, improved forest management
   - **Soil Carbon Sequestration**: Conservation practices increasing soil organic carbon

**Mitigation Potential by 2030**:
- **Energy Efficiency**: 40% of needed emissions reductions
- **Renewable Energy**: 30% of needed emissions reductions
- **Electrification**: 20% of needed emissions reductions
- **Other Measures**: 10% (CCUS, hydrogen, behavioral changes)

**Remember**: No single technology can solve climate change - we need a portfolio of solutions deployed rapidly and at scale.
`,
      completed: false,
      quiz: [
        {
          id: 1,
          question: "What percentage of global primary energy comes from fossil fuels?",
          options: ["40%", "60%", "80%", "95%"],
          correctAnswer: 2,
          explanation: "Approximately 80% of global primary energy currently comes from fossil fuels (coal, oil, and natural gas)."
        },
        {
          id: 2,
          question: "How much has solar PV cost decreased since 2010?",
          options: ["30% reduction", "60% reduction", "90% reduction", "No significant reduction"],
          correctAnswer: 2,
          explanation: "Solar photovoltaic costs have decreased by approximately 90% since 2010, making it the cheapest electricity source in many regions."
        },
        {
          id: 3,
          question: "What is the levelized cost of solar PV electricity?",
          options: ["$20-40/MWh", "$50-70/MWh", "$80-100/MWh", "$120-150/MWh"],
          correctAnswer: 0,
          explanation: "The levelized cost of solar PV electricity is typically $20-40 per megawatt-hour, making it competitive with fossil fuels."
        },
        {
          id: 4,
          question: "How many electric vehicles are on the road globally?",
          options: ["5 million", "15 million", "30 million", "50 million"],
          correctAnswer: 2,
          explanation: "There were approximately 30 million electric vehicles on the road globally as of 2023."
        },
        {
          id: 5,
          question: "What percentage of global storage capacity is pumped hydro?",
          options: ["30%", "60%", "80%", "95%"],
          correctAnswer: 3,
          explanation: "Pumped hydro storage accounts for approximately 95% of global electricity storage capacity."
        },
        {
          id: 6,
          question: "How much CO₂ do current CCUS facilities capture annually?",
          options: ["5 million tons", "20 million tons", "50 million tons", "100 million tons"],
          correctAnswer: 2,
          explanation: "Current CCUS facilities capture approximately 50 million tons of CO₂ annually, representing about 0.1% of global emissions."
        },
        {
          id: 7,
          question: "What is the current battery cost for electric vehicles?",
          options: ["$50/kWh", "$100/kWh", "$200/kWh", "$500/kWh"],
          correctAnswer: 1,
          explanation: "Electric vehicle battery costs are approximately $100 per kilowatt-hour, approaching cost parity with internal combustion engines."
        },
        {
          id: 8,
          question: "What is the technical potential of solar energy compared to global demand?",
          options: ["Equal to demand", "10 times demand", "100 times demand", "1,000 times demand"],
          correctAnswer: 2,
          explanation: "Solar energy's technical potential is approximately 100 times current global energy demand."
        },
        {
          id: 9,
          question: "What percentage of new car sales were electric in 2023?",
          options: ["5%", "14%", "25%", "40%"],
          correctAnswer: 1,
          explanation: "Electric vehicles represented approximately 14% of new car sales globally in 2023."
        },
        {
          id: 10,
          question: "How many public EV chargers are there globally?",
          options: ["500,000", "1 million", "2.8 million", "5 million"],
          correctAnswer: 2,
          explanation: "There were approximately 2.8 million public electric vehicle charging points globally as of 2023."
        },
        {
          id: 11,
          question: "What is the global hydropower generation capacity?",
          options: ["500 GW", "1,000 GW", "1,360 GW", "2,000 GW"],
          correctAnswer: 2,
          explanation: "Global hydropower capacity is approximately 1,360 gigawatts as of 2023."
        },
        {
          id: 12,
          question: "What is the cost range for direct air capture of CO₂?",
          options: ["$50-100/ton", "$100-200/ton", "$400-600/ton", "$600+/ton"],
          correctAnswer: 3,
          explanation: "Direct air capture currently costs $600 or more per ton of CO₂, though costs are expected to decline with scale and innovation."
        },
        {
          id: 13,
          question: "How much global electricity comes from fossil fuels?",
          options: ["40%", "61%", "75%", "85%"],
          correctAnswer: 1,
          explanation: "Approximately 61% of global electricity generation comes from fossil fuels as of 2022."
        },
        {
          id: 14,
          question: "What is the annual growth rate for heat pump installations?",
          options: ["2% annual growth", "5% annual growth", "10% annual growth", "20% annual growth"],
          correctAnswer: 2,
          explanation: "Heat pump installations are growing at approximately 10% annually as they replace fossil fuel heating systems."
        },
        {
          id: 15,
          question: "What percentage of needed emissions reductions could come from energy efficiency by 2030?",
          options: ["10%", "25%", "40%", "60%"],
          correctAnswer: 2,
          explanation: "Energy efficiency improvements could provide approximately 40% of the emissions reductions needed by 2030 to meet climate targets."
        },
        {
          id: 16,
          question: "What is the estimated global geological storage capacity for CO₂?",
          options: ["100 gigatons", "1,000 gigatons", "10,000+ gigatons", "100,000 gigatons"],
          correctAnswer: 2,
          explanation: "Global geological storage capacity for CO₂ is estimated at 10,000+ gigatons, far exceeding potential storage needs."
        },
        {
          id: 17,
          question: "What is the typical duration of lithium-ion battery storage systems?",
          options: ["30 minutes", "2-4 hours", "8-12 hours", "24+ hours"],
          correctAnswer: 1,
          explanation: "Most lithium-ion battery storage systems provide 2-4 hours of discharge duration, though longer durations are emerging."
        },
        {
          id: 18,
          question: "What is the global wind power capacity?",
          options: ["500 GW", "900 GW", "1,200 GW", "1,600 GW"],
          correctAnswer: 1,
          explanation: "Global wind power capacity reached approximately 900 gigawatts as of 2023."
        },
        {
          id: 19,
          question: "What is the cost of offshore wind electricity?",
          options: ["$30-60/MWh", "$70-120/MWh", "$150-200/MWh", "$250+/MWh"],
          correctAnswer: 1,
          explanation: "Offshore wind electricity costs are typically $70-120 per megawatt-hour, though costs have been declining rapidly."
        },
        {
          id: 20,
          question: "How many commercial CCUS facilities operate globally?",
          options: ["10+ facilities", "40+ facilities", "100+ facilities", "200+ facilities"],
          correctAnswer: 1,
          explanation: "There are 40+ commercial carbon capture, utilization and storage facilities operating globally as of 2023."
        }
      ]
    },
    {
      id: 5,
      title: "Adaptation & Resilience Strategies",
      content: `
# Module 5: Adaptation & Resilience Strategies

Understanding approaches for adapting to climate change impacts and building resilience in natural and human systems.

## **5.1 Adaptation Concepts & Frameworks**
**Core adaptation principles**:

1. **Adaptation vs. Mitigation**
   - **Mitigation**: Reducing greenhouse gas emissions to limit climate change
   - **Adaptation**: Adjusting to actual or expected climate impacts
   - **Synergies**: Many actions provide both mitigation and adaptation benefits
   - **Limits to Adaptation**: Some impacts cannot be fully adapted to, especially at high warming levels

2. **Types of Adaptation**
   - **Incremental Adaptation**: Small adjustments to existing practices
   - **Transformational Adaptation**: Fundamental changes to systems
   - **Anticipatory Adaptation**: Before impacts occur (proactive)
   - **Reactive Adaptation**: After impacts occur (responsive)
   - **Autonomous Adaptation**: Spontaneous responses by individuals/organizations
   - **Planned Adaptation**: Deliberate policy decisions

3. **Adaptation Planning Cycle**
   - **Assess Risks & Vulnerabilities**: Climate impacts, exposure, sensitivity
   - **Identify Options**: Range of possible adaptation measures
   - **Prioritize & Plan**: Based on effectiveness, cost, feasibility
   - **Implement**: Put adaptation measures into practice
   - **Monitor & Evaluate**: Track effectiveness, learn, adjust

## **5.2 Ecosystem-Based Adaptation**
**Using nature to build resilience**:

1. **Coastal Protection**
   - **Mangrove Restoration**: Can reduce wave energy by 66-99%
   - **Coral Reef Protection**: Reduce 97% of wave energy, protect 200 million people
   - **Salt Marsh Restoration**: Wave attenuation, carbon sequestration, habitat
   - **Dune Restoration**: Natural barriers against storm surge

2. **Urban Green Infrastructure**
   - **Green Roofs**: Reduce urban heat island effect, manage stormwater
   - **Urban Forests**: Cool cities 2-8°C, reduce energy use 20-50%
   - **Permeable Pavements**: Reduce flooding, recharge groundwater
   - **Rain Gardens/Bioswales**: Natural stormwater management

3. **Agricultural Landscapes**
   - **Agroforestry**: Diversification, soil protection, microclimate regulation
   - **Riparian Buffers**: Protect water quality, reduce erosion
   - **Cover Crops**: Improve soil health, water retention
   - **Conservation Agriculture**: Minimum tillage, crop rotation, soil cover

**Co-benefits of Ecosystem-based Adaptation**:
- **Biodiversity**: Habitat creation and protection
- **Carbon Sequestration**: Natural climate solution
- **Livelihoods**: Economic opportunities from ecosystem services
- **Health & Wellbeing**: Recreational spaces, improved air quality

## **5.3 Infrastructure & Built Environment Adaptation**
**Engineering and design approaches**:

1. **Climate-Resilient Infrastructure**
   - **Design Standards**: Incorporating climate projections into engineering codes
   - **Safety Margins**: Extra capacity for future climate conditions
   - **Modular Design**: Components that can be upgraded or replaced
   - **Nature-based Solutions**: Combining engineered and natural approaches

2. **Water Management**
   - **Water Efficiency**: Reducing demand through conservation and reuse
   - **Diversified Supplies**: Multiple water sources (surface, groundwater, desalination, reuse)
   - **Flood Management**: Green infrastructure, floodplain restoration, early warning systems
   - **Drought Preparedness**: Water banking, drought-resistant crops, insurance

3. **Urban Planning**
   - **Climate-Responsive Design**: Building orientation, materials, ventilation
   - **Heat Action Plans**: Cooling centers, public awareness, worker protections
   - **Zoning & Land Use**: Avoiding high-risk areas, preserving natural buffers
   - **Transportation**: Resilient transit systems, emergency evacuation routes

## **5.4 Social & Institutional Adaptation**
**Human and organizational resilience**:

1. **Early Warning Systems**
   - **Coverage**: 50% of countries have multi-hazard early warning systems (2023)
   - **Lead Times**: Weather forecasts now reliable 5-7 days ahead
   - **Communication**: Reaching vulnerable populations, understandable formats
   - **Response Planning**: Clear protocols for different warning levels

2. **Social Protection**
   - **Climate-Smart Social Programs**: Conditional cash transfers, food assistance
   - **Index-Based Insurance**: Payouts triggered by weather indices
   - **Livelihood Diversification**: Reducing dependence on climate-sensitive activities
   - **Safety Nets**: Support for climate-related displacement and loss

3. **Capacity Building**
   - **Climate Literacy**: Public understanding of risks and responses
   - **Professional Training**: Climate skills for engineers, planners, farmers
   - **Institutional Strengthening**: Government agencies, community organizations
   - **Knowledge Sharing**: South-South cooperation, indigenous knowledge integration

## **5.5 Adaptation Finance & Economics**
**Financing adaptation efforts**:

1. **Adaptation Costs & Benefits**
   - **Global Needs**: $160-340 billion annually by 2030 for adaptation
   - **Current Flows**: $46 billion annually (2020), only 20-25% of climate finance
   - **Benefit-Cost Ratios**: Typically 2:1 to 10:1 for adaptation investments
   - **Economic Savings**: $1 invested in resilience saves $4-7 in future losses

2. **Financing Sources**
   - **Public Finance**: Government budgets, climate funds, development banks
   - **Private Finance**: Corporate investments, insurance, bonds
   - **Blended Finance**: Public funds catalyzing private investment
   - **Innovative Instruments**: Catastrophe bonds, resilience bonds, parametric insurance

3. **Barriers to Adaptation Finance**
   - **High Upfront Costs**: Especially for infrastructure
   - **Uncertain Returns**: Benefits often avoided losses rather than revenue
   - **Data Gaps**: Limited climate risk information for investment decisions
   - **Capacity Constraints**: Limited ability to develop bankable projects

**Adaptation Metrics & Evaluation**:
- **Reduced Losses**: Economic damages avoided
- **Increased Resilience**: System recovery capacity
- **Social Equity**: Distribution of adaptation benefits
- **Environmental Co-benefits**: Ecosystem services maintained or enhanced

**Maladaptation Risks**:
- **Short-term Solutions**: Creating long-term vulnerabilities
- **Unequal Benefits**: Adaptation helping some while harming others
- **Ecosystem Damage**: Adaptation measures degrading natural systems
- **Lock-in Effects**: Infrastructure creating path dependency

**Remember**: Adaptation is not a one-time action but an ongoing process of learning and adjustment as climate impacts evolve and our understanding improves.
`,
      completed: false,
      quiz: [
        {
          id: 1,
          question: "What is the difference between adaptation and mitigation?",
          options: ["Adaptation reduces emissions, mitigation adjusts to impacts", "Adaptation adjusts to impacts, mitigation reduces emissions", "Both mean the same thing", "Adaptation is for ecosystems, mitigation for human systems"],
          correctAnswer: 1,
          explanation: "Adaptation involves adjusting to climate impacts, while mitigation involves reducing greenhouse gas emissions to limit climate change."
        },
        {
          id: 2,
          question: "How much wave energy can mangrove forests reduce?",
          options: ["20-40%", "40-60%", "66-99%", "No significant reduction"],
          correctAnswer: 2,
          explanation: "Mangrove forests can reduce wave energy by 66-99%, providing significant coastal protection benefits."
        },
        {
          id: 3,
          question: "What percentage of countries have multi-hazard early warning systems?",
          options: ["25%", "50%", "75%", "90%"],
          correctAnswer: 1,
          explanation: "Approximately 50% of countries worldwide have multi-hazard early warning systems as of 2023."
        },
        {
          id: 4,
          question: "What is the estimated global adaptation finance need by 2030?",
          options: ["$50-100 billion annually", "$160-340 billion annually", "$500-800 billion annually", "$1 trillion+ annually"],
          correctAnswer: 1,
          explanation: "Global adaptation finance needs are estimated at $160-340 billion annually by 2030."
        },
        {
          id: 5,
          question: "What is transformational adaptation?",
          options: ["Fundamental changes to systems", "Small adjustments to existing practices", "Spontaneous individual responses", "Government policy decisions only"],
          correctAnswer: 0,
          explanation: "Transformational adaptation involves fundamental changes to systems, as opposed to incremental adjustments to existing practices."
        },
        {
          id: 6,
          question: "How many people are protected by coral reefs from coastal hazards?",
          options: ["50 million", "100 million", "200 million", "500 million"],
          correctAnswer: 2,
          explanation: "Coral reefs protect approximately 200 million people globally from coastal hazards like storms and erosion."
        },
        {
          id: 7,
          question: "What is the typical benefit-cost ratio for adaptation investments?",
          options: ["1:1 (break-even)", "2:1 to 10:1", "20:1 to 50:1", "100:1 or higher"],
          correctAnswer: 1,
          explanation: "Adaptation investments typically have benefit-cost ratios of 2:1 to 10:1, meaning $1 invested saves $2-10 in avoided losses."
        },
        {
          id: 8,
          question: "What percentage of climate finance currently goes to adaptation?",
          options: ["5-10%", "20-25%", "40-45%", "60-65%"],
          correctAnswer: 1,
          explanation: "Only about 20-25% of climate finance currently goes to adaptation, despite growing needs."
        },
        {
          id: 9,
          question: "How much can urban forests reduce temperatures in cities?",
          options: ["0.5-1°C", "2-8°C", "10-15°C", "No significant cooling"],
          correctAnswer: 1,
          explanation: "Urban forests can reduce temperatures by 2-8°C through shade and evapotranspiration, mitigating urban heat islands."
        },
        {
          id: 10,
          question: "What is 'maladaptation'?",
          options: ["Actions that increase vulnerability to climate change", "Slow adaptation process", "Expensive adaptation measures", "Adaptation focused only on infrastructure"],
          correctAnswer: 0,
          explanation: "Maladaptation refers to actions that inadvertently increase vulnerability to climate change impacts."
        },
        {
          id: 11,
          question: "How much energy use can urban trees reduce?",
          options: ["5-10%", "20-50%", "60-80%", "No significant reduction"],
          correctAnswer: 1,
          explanation: "Urban trees can reduce building energy use by 20-50% through shading and wind protection effects."
        },
        {
          id: 12,
          question: "What is ecosystem-based adaptation?",
          options: ["Using nature to build resilience", "Protecting all ecosystems equally", "Focusing only on forests", "Adaptation for wildlife only"],
          correctAnswer: 0,
          explanation: "Ecosystem-based adaptation uses biodiversity and ecosystem services to help people adapt to climate change impacts."
        },
        {
          id: 13,
          question: "What are heat action plans?",
          options: ["Comprehensive strategies to address extreme heat", "Plans to reduce urban temperatures only", "Emergency cooling during heatwaves", "Long-term climate mitigation plans"],
          correctAnswer: 0,
          explanation: "Heat action plans are comprehensive strategies that include early warning systems, public awareness, cooling centers, and worker protections for extreme heat events."
        },
        {
          id: 14,
          question: "What is the economic return on resilience investments?",
          options: ["$1 saves $1-2", "$1 saves $4-7", "$1 saves $10-15", "No economic return"],
          correctAnswer: 1,
          explanation: "Every $1 invested in climate resilience saves an average of $4-7 in future disaster losses and recovery costs."
        },
        {
          id: 15,
          question: "What is anticipatory adaptation?",
          options: ["Taking action before impacts occur", "Responding after impacts occur", "Waiting for more information", "Individual rather than government action"],
          correctAnswer: 0,
          explanation: "Anticipatory adaptation involves taking proactive measures before climate impacts occur, rather than waiting to respond afterwards."
        },
        {
          id: 16,
          question: "What percentage of wave energy do coral reefs reduce?",
          options: ["50%", "75%", "97%", "No significant reduction"],
          correctAnswer: 2,
          explanation: "Coral reefs can reduce up to 97% of wave energy, providing crucial protection for coastal communities."
        },
        {
          id: 17,
          question: "What is index-based insurance?",
          options: ["Payouts triggered by weather indices", "Traditional crop insurance", "Government disaster relief", "International climate funds"],
          correctAnswer: 0,
          explanation: "Index-based insurance provides payouts when specific weather indices (like rainfall or temperature) reach predetermined thresholds, without requiring individual loss assessments."
        },
        {
          id: 18,
          question: "How reliable are weather forecasts in terms of lead time?",
          options: ["1-2 days", "3-4 days", "5-7 days", "10+ days"],
          correctAnswer: 2,
          explanation: "Modern weather forecasts are generally reliable 5-7 days in advance, providing crucial lead time for preparedness actions."
        },
        {
          id: 19,
          question: "What is climate-smart social protection?",
          options: ["Social programs designed considering climate risks", "Cash transfers only for climate disasters", "International aid for climate impacts", "Insurance for wealthy countries"],
          correctAnswer: 0,
          explanation: "Climate-smart social protection involves designing social programs that consider climate risks and vulnerabilities, such as conditional cash transfers linked to climate resilience actions."
        },
        {
          id: 20,
          question: "What are the limits to adaptation?",
          options: ["Some impacts cannot be fully adapted to", "No limits if enough funding available", "Only technical limits, not social", "Adaptation always possible with technology"],
          correctAnswer: 0,
          explanation: "There are limits to adaptation - some climate impacts, especially at high warming levels, cannot be fully adapted to, making mitigation essential."
        }
      ]
    },
    {
      id: 6,
      title: "Climate Economics & Sustainable Development",
      content: `
# Module 6: Climate Economics & Sustainable Development

Understanding the economic dimensions of climate change and the intersection with sustainable development goals.

## **6.1 Climate Change Economics**
**Economic analysis of climate impacts and responses**:

1. **Costs of Climate Change**
   - **Direct Damages**: From extreme weather, sea level rise, temperature changes
   - **Market Impacts**: Agriculture, fisheries, forestry, tourism revenues
   - **Non-Market Impacts**: Health, ecosystems, cultural losses
   - **Distributional Effects**: Uneven impacts across regions and populations
   - **Catastrophic Risks**: Low-probability, high-impact events

2. **Economic Models & Estimates**
   - **Integrated Assessment Models**: Combine climate science with economics
   - **Social Cost of Carbon**: Estimated $51-190/ton CO₂ (US interim estimate)
   - **GDP Impacts**: 1-5% GDP loss per 2-3°C warming (varies by region)
   - **Discount Rates**: 1-5% typically used, affecting present value of future damages

3. **Co-benefits of Climate Action**
   - **Health Benefits**: Reduced air pollution saves 1-2 million lives annually by 2050
   - **Energy Security**: Reduced dependence on imported fossil fuels
   - **Employment**: Net job creation in clean energy sectors
   - **Innovation**: Technological spillovers to other sectors

## **6.2 Climate Finance & Investment**
**Financing the low-carbon transition**:

1. **Investment Needs**
   - **Annual Needs**: $4-6 trillion annually for energy system transformation
   - **Current Flows**: $1.3 trillion in clean energy investment (2022)
   - **Financing Gap**: $2-3 trillion annually needed above current levels
   - **Regional Distribution**: 70% of investment needed in emerging/developing economies

2. **Financial Instruments**
   - **Green Bonds**: $500+ billion issued annually (2022)
   - **Sustainability-linked Loans**: Growing rapidly, tied to climate performance
   - **Blended Finance**: Public funds de-risking private investment
   - **Climate Funds**: Green Climate Fund, Adaptation Fund, Climate Investment Funds

3. **Risk Assessment & Disclosure**
   - **Physical Risks**: Direct climate impacts on assets and operations
   - **Transition Risks**: Policy, technology, market changes during low-carbon transition
   - **TCFD Framework**: Task Force on Climate-related Financial Disclosures
   - **Regulatory Requirements**: Increasing mandatory climate disclosure

## **6.3 Sustainable Development Linkages**
**Climate action within broader development context**:

1. **Sustainable Development Goals (SDGs)**
   - **SDG 13**: Climate Action - explicit climate goal
   - **Interlinkages**: Climate affects all 17 SDGs (poverty, hunger, health, etc.)
   - **Synergies**: 35% of SDG targets depend on climate action
   - **Trade-offs**: Some climate actions may conflict with other development priorities

2. **Just Transition**
   - **Workforce Transition**: Supporting fossil fuel workers in clean energy jobs
   - **Community Impacts**: Economic diversification in fossil fuel-dependent regions
   - **Energy Access**: Ensuring clean energy access for 760 million without electricity
   - **Equitable Distribution**: Benefits and costs shared fairly across society

3. **Circular Economy**
   - **Material Efficiency**: Reducing primary material use through circular approaches
   - **Emissions Reduction**: Circular economy could reduce emissions 40% by 2050
   - **Resource Security**: Reduced dependence on critical material imports
   - **Business Models**: Product-as-service, sharing platforms, remanufacturing

## **6.4 Behavioral & Cultural Dimensions**
**Human behavior and social change for climate action**:

1. **Behavioral Insights**
   - **Defaults**: Making sustainable choices the easy option
   - **Social Norms**: Highlighting what others are doing
   - **Framing**: Positive messaging about benefits rather than losses
   - **Feedback**: Providing information on energy use, emissions, progress

2. **Lifestyle Changes**
   - **Diet Shifts**: Reducing meat consumption, food waste reduction
   - **Transport Choices**: Public transit, cycling, walking, electric vehicles
   - **Consumption Patterns**: Buying less, choosing durable products, sharing
   - **Energy Use**: Efficiency improvements, renewable energy adoption

3. **Cultural Values & Worldviews**
   - **Environmental Values**: Connection to nature, future orientation
   - **Social Identity**: Group affiliations affecting climate attitudes
   - **Political Ideology**: Strong predictor of climate beliefs in some countries
   - **Trust in Institutions**: Affecting acceptance of climate policies

## **6.5 Future Pathways & Scenarios**
**Exploring possible climate futures**:

1. **IPCC Scenarios**
   - **SSP1-1.9**: Very low emissions, 1.5°C pathway
   - **SSP1-2.6**: Low emissions, well below 2°C pathway
   - **SSP2-4.5**: Medium emissions, ~2.7°C pathway
   - **SSP3-7.0**: High emissions, ~3.6°C pathway
   - **SSP5-8.5**: Very high emissions, ~4.4°C pathway

2. **Key Decision Points**
   - **2030 Targets**: Need 45% emissions reduction from 2010 levels for 1.5°C
   - **2050 Targets**: Net zero CO₂ needed for 1.5°C, net zero all GHGs for 2°C
   - **Peak Emissions**: Need to peak before 2025 for 1.5°C pathway
   - **Carbon Budgets**: Remaining budget ~500 gigatons CO₂ for 1.5°C (50% probability)

3. **Uncertainties & Tipping Points**
   - **Climate Sensitivity**: Range 2.5-4°C for doubling of CO₂
   - **Carbon Cycle Feedbacks**: Additional warming from natural carbon releases
   - **Ice Sheet Stability**: Potential for rapid sea level rise
   - **Societal Response**: Speed of technological change, policy implementation

**The Role of Different Actors**:
- **Governments**: Policy frameworks, regulation, public investment
- **Businesses**: Innovation, investment, supply chain transformation
- **Civil Society**: Advocacy, community action, holding actors accountable
- **Individuals**: Lifestyle choices, voting, consumer pressure
- **International Cooperation**: Technology transfer, finance, capacity building

**Remember**: Addressing climate change is not just an environmental issue but a fundamental challenge to our economic systems, social structures, and ways of living that requires transformation across all sectors of society.
`,
      completed: false,
      quiz: [
        {
          id: 1,
          question: "What is the social cost of carbon in recent US estimates?",
          options: ["$10-30/ton CO₂", "$51-190/ton CO₂", "$200-400/ton CO₂", "$500+/ton CO₂"],
          correctAnswer: 1,
          explanation: "The US interim social cost of carbon estimate is $51-190 per ton of CO₂, representing the economic damages from each additional ton emitted."
        },
        {
          id: 2,
          question: "How much annual investment is needed for energy system transformation?",
          options: ["$1-2 trillion", "$2-3 trillion", "$4-6 trillion", "$8-10 trillion"],
          correctAnswer: 2,
          explanation: "Approximately $4-6 trillion in annual investment is needed for global energy system transformation to meet climate goals."
        },
        {
          id: 3,
          question: "Which Sustainable Development Goal explicitly addresses climate change?",
          options: ["SDG 7", "SDG 11", "SDG 13", "SDG 15"],
          correctAnswer: 2,
          explanation: "SDG 13 is 'Climate Action' - the Sustainable Development Goal explicitly focused on combating climate change."
        },
        {
          id: 4,
          question: "What percentage of people lack electricity access globally?",
          options: ["5% (400 million)", "10% (760 million)", "20% (1.5 billion)", "30% (2.3 billion)"],
          correctAnswer: 1,
          explanation: "Approximately 760 million people (10% of global population) lack access to electricity, posing challenges for clean energy transitions."
        },
        {
          id: 5,
          question: "What is the remaining carbon budget for 1.5°C with 50% probability?",
          options: ["100 gigatons CO₂", "500 gigatons CO₂", "1,000 gigatons CO₂", "2,000 gigatons CO₂"],
          correctAnswer: 1,
          explanation: "The remaining carbon budget for 1.5°C with 50% probability is approximately 500 gigatons of CO₂ from 2020 onward."
        },
        {
          id: 6,
          question: "How many lives could be saved annually by 2050 from reduced air pollution through climate action?",
          options: ["100,000-500,000", "500,000-1 million", "1-2 million", "5-10 million"],
          correctAnswer: 2,
          explanation: "Climate action that reduces fossil fuel use could save 1-2 million lives annually by 2050 through improved air quality."
        },
        {
          id: 7,
          question: "What does TCFD stand for?",
          options: ["Task Force on Climate-related Financial Disclosures", "Technical Committee on Fossil Fuel Divestment", "Transition Commission for Financial Development", "Trade Council for Forestry Development"],
          correctAnswer: 0,
          explanation: "TCFD stands for Task Force on Climate-related Financial Disclosures, which provides recommendations for climate risk reporting by companies."
        },
        {
          id: 8,
          question: "What is the IPCC scenario that represents a 1.5°C pathway?",
          options: ["SSP1-1.9", "SSP2-4.5", "SSP3-7.0", "SSP5-8.5"],
          correctAnswer: 0,
          explanation: "SSP1-1.9 is the IPCC scenario that limits warming to 1.5°C with limited overshoot."
        },
        {
          id: 9,
          question: "How much clean energy investment occurred in 2022?",
          options: ["$500 billion", "$1.3 trillion", "$2.5 trillion", "$5 trillion"],
          correctAnswer: 1,
          explanation: "Global clean energy investment reached $1.3 trillion in 2022, though needs are higher for climate goals."
        },
        {
          id: 10,
          question: "What percentage of SDG targets depend on climate action?",
          options: ["15%", "35%", "55%", "75%"],
          correctAnswer: 1,
          explanation: "Approximately 35% of Sustainable Development Goal targets depend on climate action being achieved."
        },
        {
          id: 11,
          question: "What are transition risks in climate finance?",
          options: ["Risks from moving to low-carbon economy", "Risks from physical climate impacts", "Risks in developing countries only", "Risks to renewable energy only"],
          correctAnswer: 0,
          explanation: "Transition risks refer to financial risks resulting from the process of adjustment toward a low-carbon economy, including policy, technology, and market changes."
        },
        {
          id: 12,
          question: "What year do emissions need to peak by for a 1.5°C pathway?",
          options: ["Already peaked", "Before 2025", "Before 2030", "Before 2040"],
          correctAnswer: 1,
          explanation: "For a 1.5°C pathway with limited overshoot, global greenhouse gas emissions need to peak before 2025."
        },
        {
          id: 13,
          question: "How much green bond issuance occurred in 2022?",
          options: ["$100 billion", "$250 billion", "$500+ billion", "$1 trillion"],
          correctAnswer: 2,
          explanation: "Green bond issuance exceeded $500 billion in 2022, though this represents only a fraction of total bond markets."
        },
        {
          id: 14,
          question: "What does 'just transition' refer to?",
          options: ["Ensuring fair distribution of transition costs and benefits", "Immediate phase-out of all fossil fuels", "Technology-only solutions", "International climate finance only"],
          correctAnswer: 0,
          explanation: "Just transition ensures that the costs and benefits of moving to a low-carbon economy are distributed fairly, particularly protecting vulnerable workers and communities."
        },
        {
          id: 15,
          question: "What is the estimated GDP impact of 2-3°C warming?",
          options: ["0.1-0.5% GDP loss", "1-5% GDP loss", "10-20% GDP loss", "More than 25% GDP loss"],
          correctAnswer: 1,
          explanation: "Global economic models estimate 1-5% GDP loss from 2-3°C warming, with higher losses in vulnerable regions."
        },
        {
          id: 16,
          question: "What percentage of needed climate investment is required in emerging/developing economies?",
          options: ["30%", "50%", "70%", "90%"],
          correctAnswer: 2,
          explanation: "Approximately 70% of clean energy investment needs are in emerging markets and developing economies."
        },
        {
          id: 17,
          question: "What is climate sensitivity?",
          options: ["Temperature increase from doubling CO₂", "Social awareness of climate issues", "Economic cost of climate damages", "Speed of climate policy adoption"],
          correctAnswer: 0,
          explanation: "Climate sensitivity refers to the long-term temperature increase expected from a doubling of atmospheric CO₂ concentrations, estimated at 2.5-4°C."
        },
        {
          id: 18,
          question: "What behavioral approach makes sustainable choices the easy option?",
          options: ["Defaults", "Social norms", "Framing", "Feedback"],
          correctAnswer: 0,
          explanation: "Setting sustainable options as defaults (like renewable energy as default choice) makes them the easy option, increasing adoption rates."
        },
        {
          id: 19,
          question: "What emissions reduction is needed by 2030 for 1.5°C?",
          options: ["10% below 2010 levels", "25% below 2010 levels", "45% below 2010 levels", "60% below 2010 levels"],
          correctAnswer: 2,
          explanation: "Global emissions need to be reduced by 45% below 2010 levels by 2030 to be on track for 1.5°C."
        },
        {
          id: 20,
          question: "What does SSP stand for in climate scenarios?",
          options: ["Shared Socioeconomic Pathway", "Sustainable System Protocol", "Social Stability Projection", "Systemic Scenario Planning"],
          correctAnswer: 0,
          explanation: "SSP stands for Shared Socioeconomic Pathway - scenarios describing alternative socioeconomic development futures used in climate modeling."
        }
      ]
    }
  ],

  // 3. FINAL EXAM (40 Questions - Comprehensive)
  finalExam: {
    title: "Climate Change Studies Certificate Final Examination",
    description: "Comprehensive exam covering all 6 modules. Score 70% or higher to earn your certificate.",
    passingScore: 70,
    questions: [
      {
        id: 1,
        question: "What percentage of excess heat from global warming is absorbed by oceans?",
        options: ["50%", "70%", "93%", "99%"],
        correctAnswer: 2,
        explanation: "Oceans absorb approximately 93% of the excess heat trapped by greenhouse gases.",
        module: 1
      },
      {
        id: 2,
        question: "How fast are species moving poleward to track climate changes?",
        options: ["1 km per decade", "8 km per decade", "16 km per decade", "32 km per decade"],
        correctAnswer: 2,
        explanation: "Species are moving poleward at approximately 16 kilometers per decade on average to track suitable climate conditions.",
        module: 2
      },
      {
        id: 3,
        question: "In what year was the Paris Agreement adopted?",
        options: ["1992", "1997", "2005", "2015"],
        correctAnswer: 3,
        explanation: "The Paris Agreement was adopted in 2015 at COP21 and entered into force in November 2016.",
        module: 3
      },
      {
        id: 4,
        question: "What percentage of global primary energy comes from fossil fuels?",
        options: ["40%", "60%", "80%", "95%"],
        correctAnswer: 2,
        explanation: "Approximately 80% of global primary energy currently comes from fossil fuels (coal, oil, and natural gas).",
        module: 4
      },
      {
        id: 5,
        question: "What is the difference between adaptation and mitigation?",
        options: ["Adaptation reduces emissions, mitigation adjusts to impacts", "Adaptation adjusts to impacts, mitigation reduces emissions", "Both mean the same thing", "Adaptation is for ecosystems, mitigation for human systems"],
        correctAnswer: 1,
        explanation: "Adaptation involves adjusting to climate impacts, while mitigation involves reducing greenhouse gas emissions to limit climate change.",
        module: 5
      },
      {
        id: 6,
        question: "What is the social cost of carbon in recent US estimates?",
        options: ["$10-30/ton CO₂", "$51-190/ton CO₂", "$200-400/ton CO₂", "$500+/ton CO₂"],
        correctAnswer: 1,
        explanation: "The US interim social cost of carbon estimate is $51-190 per ton of CO₂, representing the economic damages from each additional ton emitted.",
        module: 6
      },
      {
        id: 7,
        question: "What was the pre-industrial concentration of carbon dioxide in the atmosphere?",
        options: ["180 ppm", "280 ppm", "380 ppm", "420 ppm"],
        correctAnswer: 1,
        explanation: "Pre-industrial CO₂ concentration was approximately 280 parts per million (ppm).",
        module: 1
      },
      {
        id: 8,
        question: "What percentage of coral reefs are projected to decline at 1.5°C warming?",
        options: ["30-50%", "50-70%", "70-90%", "90-99%"],
        correctAnswer: 2,
        explanation: "70-90% of coral reefs are projected to decline at 1.5°C warming, with near-complete loss at 2°C.",
        module: 2
      },
      {
        id: 9,
        question: "How many countries are parties to the UNFCCC?",
        options: ["50 countries", "100 countries", "150 countries", "197 countries"],
        correctAnswer: 3,
        explanation: "There are 197 parties to the UNFCCC, representing near-universal international participation.",
        module: 3
      },
      {
        id: 10,
        question: "How much has solar PV cost decreased since 2010?",
        options: ["30% reduction", "60% reduction", "90% reduction", "No significant reduction"],
        correctAnswer: 2,
        explanation: "Solar photovoltaic costs have decreased by approximately 90% since 2010, making it the cheapest electricity source in many regions.",
        module: 4
      },
      {
        id: 11,
        question: "How much wave energy can mangrove forests reduce?",
        options: ["20-40%", "40-60%", "66-99%", "No significant reduction"],
        correctAnswer: 2,
        explanation: "Mangrove forests can reduce wave energy by 66-99%, providing significant coastal protection benefits.",
        module: 5
      },
      {
        id: 12,
        question: "How much annual investment is needed for energy system transformation?",
        options: ["$1-2 trillion", "$2-3 trillion", "$4-6 trillion", "$8-10 trillion"],
        correctAnswer: 2,
        explanation: "Approximately $4-6 trillion in annual investment is needed for global energy system transformation to meet climate goals.",
        module: 6
      },
      {
        id: 13,
        question: "How much has global average temperature increased since pre-industrial times?",
        options: ["0.5°C", "1.1°C", "1.5°C", "2.0°C"],
        correctAnswer: 1,
        explanation: "Global average temperature has increased by approximately 1.1°C since pre-industrial times.",
        module: 1
      },
      {
        id: 14,
        question: "How much does extreme precipitation intensity increase per 1°C warming?",
        options: ["1% per 1°C", "3% per 1°C", "7% per 1°C", "10% per 1°C"],
        correctAnswer: 2,
        explanation: "Extreme precipitation intensity increases by approximately 7% per 1°C warming due to increased atmospheric moisture holding capacity.",
        module: 2
      },
      {
        id: 15,
        question: "What does NDC stand for in climate policy?",
        options: ["Nationally Determined Contribution", "National Development Commitment", "Negotiated Decarbonization Compact", "Non-binding Development Criteria"],
        correctAnswer: 0,
        explanation: "NDC stands for Nationally Determined Contribution - each country's climate action plan under the Paris Agreement.",
        module: 3
      },
      {
        id: 16,
        question: "What is the levelized cost of solar PV electricity?",
        options: ["$20-40/MWh", "$50-70/MWh", "$80-100/MWh", "$120-150/MWh"],
        correctAnswer: 0,
        explanation: "The levelized cost of solar PV electricity is typically $20-40 per megawatt-hour, making it competitive with fossil fuels.",
        module: 4
      },
      {
        id: 17,
        question: "What percentage of countries have multi-hazard early warning systems?",
        options: ["25%", "50%", "75%", "90%"],
        correctAnswer: 1,
        explanation: "Approximately 50% of countries worldwide have multi-hazard early warning systems as of 2023.",
        module: 5
      },
      {
        id: 18,
        question: "Which Sustainable Development Goal explicitly addresses climate change?",
        options: ["SDG 7", "SDG 11", "SDG 13", "SDG 15"],
        correctAnswer: 2,
        explanation: "SDG 13 is 'Climate Action' - the Sustainable Development Goal explicitly focused on combating climate change.",
        module: 6
      },
      {
        id: 19,
        question: "What is the current annual increase in atmospheric CO₂ concentration?",
        options: ["0.5 ppm per year", "1.0 ppm per year", "2.5 ppm per year", "5.0 ppm per year"],
        correctAnswer: 2,
        explanation: "Atmospheric CO₂ is currently increasing at approximately 2.5 parts per million per year.",
        module: 1
      },
      {
        id: 20,
        question: "What percentage of global employment is in agriculture?",
        options: ["10%", "28%", "45%", "60%"],
        correctAnswer: 1,
        explanation: "Agriculture employs approximately 28% of the global workforce, making it particularly vulnerable to climate impacts.",
        module: 2
      },
      {
        id: 21,
        question: "What year did the Kyoto Protocol's first commitment period begin?",
        options: ["1997", "2005", "2008", "2012"],
        correctAnswer: 2,
        explanation: "The Kyoto Protocol's first commitment period ran from 2008 to 2012, with binding targets for developed countries.",
        module: 3
      },
      {
        id: 22,
        question: "How many electric vehicles are on the road globally?",
        options: ["5 million", "15 million", "30 million", "50 million"],
        correctAnswer: 2,
        explanation: "There were approximately 30 million electric vehicles on the road globally as of 2023.",
        module: 4
      },
      {
        id: 23,
        question: "What is the estimated global adaptation finance need by 2030?",
        options: ["$50-100 billion annually", "$160-340 billion annually", "$500-800 billion annually", "$1 trillion+ annually"],
        correctAnswer: 1,
        explanation: "Global adaptation finance needs are estimated at $160-340 billion annually by 2030.",
        module: 5
      },
      {
        id: 24,
        question: "What percentage of people lack electricity access globally?",
        options: ["5% (400 million)", "10% (760 million)", "20% (1.5 billion)", "30% (2.3 billion)"],
        correctAnswer: 1,
        explanation: "Approximately 760 million people (10% of global population) lack access to electricity, posing challenges for clean energy transitions.",
        module: 6
      },
      {
        id: 25,
        question: "Which greenhouse gas has the shortest atmospheric lifetime?",
        options: ["Carbon dioxide", "Methane", "Nitrous oxide", "Sulfur hexafluoride"],
        correctAnswer: 1,
        explanation: "Methane has an atmospheric lifetime of approximately 12 years, much shorter than other major greenhouse gases.",
        module: 1
      },
      {
        id: 26,
        question: "How many people depend on glacier melt for water supplies?",
        options: ["190 million", "500 million", "1.9 billion", "3.8 billion"],
        correctAnswer: 2,
        explanation: "Approximately 1.9 billion people depend on glacier and snowmelt for their water supplies.",
        module: 2
      },
      {
        id: 27,
        question: "What is the annual climate finance goal from developed to developing countries?",
        options: ["$50 billion", "$100 billion", "$500 billion", "$1 trillion"],
        correctAnswer: 1,
        explanation: "Developed countries committed to mobilize $100 billion annually in climate finance for developing countries.",
        module: 3
      },
      {
        id: 28,
        question: "What percentage of global storage capacity is pumped hydro?",
        options: ["30%", "60%", "80%", "95%"],
        correctAnswer: 3,
        explanation: "Pumped hydro storage accounts for approximately 95% of global electricity storage capacity.",
        module: 4
      },
      {
        id: 29,
        question: "What is transformational adaptation?",
        options: ["Fundamental changes to systems", "Small adjustments to existing practices", "Spontaneous individual responses", "Government policy decisions only"],
        correctAnswer: 0,
        explanation: "Transformational adaptation involves fundamental changes to systems, as opposed to incremental adjustments to existing practices.",
        module: 5
      },
      {
        id: 30,
        question: "What is the remaining carbon budget for 1.5°C with 50% probability?",
        options: ["100 gigatons CO₂", "500 gigatons CO₂", "1,000 gigatons CO₂", "2,000 gigatons CO₂"],
        correctAnswer: 1,
        explanation: "The remaining carbon budget for 1.5°C with 50% probability is approximately 500 gigatons of CO₂ from 2020 onward.",
        module: 6
      },
      {
        id: 31,
        question: "How much has Arctic sea ice declined per decade since 1979?",
        options: ["5% per decade", "13% per decade", "25% per decade", "40% per decade"],
        correctAnswer: 1,
        explanation: "Arctic summer sea ice minimum has declined by approximately 13% per decade since satellite observations began in 1979.",
        module: 1
      },
      {
        id: 32,
        question: "What is the urban heat island effect temperature difference?",
        options: ["Cities 0.5-1°C warmer", "Cities 1-3°C warmer", "Cities 3-5°C warmer", "Cities 5-10°C warmer"],
        correctAnswer: 1,
        explanation: "Cities are typically 1-3°C warmer than surrounding rural areas due to the urban heat island effect.",
        module: 2
      },
      {
        id: 33,
        question: "What percentage of global emissions does the EU ETS cover?",
        options: ["10%", "25%", "40%", "60%"],
        correctAnswer: 2,
        explanation: "The EU Emissions Trading System covers approximately 40% of the European Union's greenhouse gas emissions.",
        module: 3
      },
      {
        id: 34,
        question: "How much CO₂ do current CCUS facilities capture annually?",
        options: ["5 million tons", "20 million tons", "50 million tons", "100 million tons"],
        correctAnswer: 2,
        explanation: "Current CCUS facilities capture approximately 50 million tons of CO₂ annually, representing about 0.1% of global emissions.",
        module: 4
      },
      {
        id: 35,
        question: "How many people are protected by coral reefs from coastal hazards?",
        options: ["50 million", "100 million", "200 million", "500 million"],
        correctAnswer: 2,
        explanation: "Coral reefs protect approximately 200 million people globally from coastal hazards like storms and erosion.",
        module: 5
      },
      {
        id: 36,
        question: "How many lives could be saved annually by 2050 from reduced air pollution through climate action?",
        options: ["100,000-500,000", "500,000-1 million", "1-2 million", "5-10 million"],
        correctAnswer: 2,
        explanation: "Climate action that reduces fossil fuel use could save 1-2 million lives annually by 2050 through improved air quality.",
        module: 6
      },
      {
        id: 37,
        question: "What is the baseline gas for Global Warming Potential (GWP) calculations?",
        options: ["Carbon dioxide", "Methane", "Nitrous oxide", "Water vapor"],
        correctAnswer: 0,
        explanation: "Carbon dioxide has a GWP of 1, serving as the baseline for comparing other greenhouse gases.",
        module: 1
      },
      {
        id: 38,
        question: "How many additional people are projected to be at malaria risk by 2080?",
        options: ["50 million", "150 million", "500 million", "1 billion"],
        correctAnswer: 2,
        explanation: "Climate change could put an additional 500 million people at risk of malaria by 2080.",
        module: 2
      },
      {
        id: 39,
        question: "How many companies have joined the Science Based Targets initiative?",
        options: ["500 companies", "1,000 companies", "4,000 companies", "10,000 companies"],
        correctAnswer: 2,
        explanation: "Over 4,000 companies worldwide have joined the Science Based Targets initiative to set emission reduction targets aligned with climate science.",
        module: 3
      },
      {
        id: 40,
        question: "What is the current battery cost for electric vehicles?",
        options: ["$50/kWh", "$100/kWh", "$200/kWh", "$500/kWh"],
        correctAnswer: 1,
        explanation: "Electric vehicle battery costs are approximately $100 per kilowatt-hour, approaching cost parity with internal combustion engines.",
        module: 4
      }
    ]
  },

  // 4. ADDITIONAL COURSE METADATA
  certificateDetails: {
    issuer: "Edusanna Climate Studies Institute",
    verificationUrl: "https://edusanna.com/verify",
    issuedDate: null,
    credentialId: null,
    competencies: [
      "Understanding climate science fundamentals and evidence",
      "Analyzing climate change impacts across natural and human systems",
      "Evaluating international climate policy frameworks and agreements",
      "Assessing mitigation technologies and renewable energy solutions",
      "Developing adaptation and resilience strategies",
      "Analyzing climate economics and sustainable development linkages"
    ]
  },

  // 5. UPGRADE PATH TO DIPLOMA
  upgradePath: {
    targetCourse: "environmental-policy-diploma",
    title: "Environmental Policy & Climate Leadership (Diploma)",
    description: "Advanced climate policy analysis, environmental governance, sustainability leadership, and climate diplomacy for professional environmental careers.",
    fastTrackModules: [1, 2, 3, 4, 5, 6],
    additionalModules: 4,
    price: 18,
    prerequisites: ["climate-change-studies-certificate"]
  }
};

export type ClimateChangeStudiesCertificateCourse = typeof climateChangeStudiesCertificateCourse;
export default climateChangeStudiesCertificateCourse;

// Aquaculture Certificate Course Data
export const aquacultureCertificateCourse = {
  // 1. COURSE METADATA & IDENTIFICATION
  id: "aquaculture-certificate",
  title: "Aquaculture (Certificate)",
  description: "Fundamental training in fish farming and aquatic species cultivation. Learn essential techniques for raising fish, shellfish, and aquatic plants in controlled environments for food production and conservation.",
  duration: "8 weeks",
  timeCommitment: "4-6 hours per week",
  price: 12,
  upgradePrice: 18,
  icon: "🐟",
  badge: "Certificate",
  prerequisites: [],
  category: "Agriculture & Fisheries",
  difficulty: "Beginner",
  
  // 2. MODULE ARCHITECTURE - 6 Comprehensive Modules
  modules: [
    // MODULE 1: Introduction to Aquaculture
    {
      id: 1,
      title: "Introduction to Aquaculture",
      content: `# Introduction to Aquaculture

## What is Aquaculture?
Aquaculture, also known as aquafarming, is the controlled cultivation of aquatic organisms such as fish, crustaceans, mollusks, and aquatic plants. Unlike fishing, which involves harvesting wild populations, aquaculture involves raising these species in controlled environments.

## Basic History and Development
- **Ancient Origins**: Fish farming dates back to 2000 BC in China with carp cultivation
- **Roman Era**: Romans farmed oysters and fish in coastal ponds
- **Middle Ages**: European monasteries maintained fish ponds
- **20th Century**: Modern aquaculture developed with technological advances
- **21st Century**: Aquaculture supplies over 50% of global fish consumption

## Why Aquaculture Matters
1. **Food Security**: Provides protein for growing global population
2. **Conservation**: Reduces pressure on wild fish stocks
3. **Economic Development**: Creates jobs in rural and coastal areas
4. **Efficiency**: Converts feed to protein more efficiently than land animals
5. **Year-Round Production**: Not limited by fishing seasons

## Types of Aquaculture Systems
**Based on Environment:**
- **Freshwater aquaculture**: Rivers, lakes, ponds (60% of global aquaculture)
- **Mariculture**: Saltwater environments (coastal and offshore)
- **Brackish water**: Estuaries and mangrove areas

**Based on Intensity:**
- **Extensive**: Low density, natural feeding (minimal human intervention)
- **Semi-intensive**: Moderate density, supplemental feeding
- **Intensive**: High density, complete feeding and management
- **Super-intensive**: Very high density with advanced technology

## Major Aquaculture Species Groups
1. **Finfish**: Salmon, tilapia, carp, catfish, trout (largest production group)
2. **Shellfish**: Shrimp, prawns, crabs
3. **Mollusks**: Oysters, mussels, clams, scallops
4. **Seaweeds**: Kelp, nori, wakame
5. **Other**: Ornamental fish, pearls, pharmaceuticals

## Global Aquaculture Statistics
- **Total production**: 82 million metric tons annually
- **Economic value**: $250 billion global industry
- **Growth rate**: 5-7% per year (fastest growing food sector)
- **Employment**: 20 million people employed worldwide
- **Leading producers**: China (60%), India, Indonesia, Vietnam, Bangladesh

## Basic Components of Aquaculture Systems
1. **Water source**: Rivers, lakes, wells, or seawater
2. **Containment**: Ponds, cages, tanks, or raceways
3. **Water quality management**: Aeration, filtration, monitoring
4. **Feeding systems**: Manual or automatic feeders
5. **Health management**: Disease prevention and treatment
6. **Harvesting**: Nets, pumps, or draining systems

## Benefits of Aquaculture
**Environmental Benefits:**
- Reduces overfishing of wild stocks
- Can be more sustainable than some land-based farming
- Some systems improve water quality (filter feeders)
- Carbon sequestration (seaweed farming)

**Social Benefits:**
- Improves food security
- Creates rural employment
- Provides affordable protein
- Supports coastal communities

**Economic Benefits:**
- Export earnings for developing countries
- Value-added processing opportunities
- Year-round income for farmers
- Supports related industries (feed, equipment)

## Challenges in Aquaculture
1. **Environmental concerns**: Pollution, habitat destruction, escapes
2. **Disease outbreaks**: High density increases disease risk
3. **Feed sustainability**: Fish meal and oil from wild fish
4. **Water usage**: Large amounts of freshwater required
5. **Social issues**: Land use conflicts, labor conditions

## Future Trends
- **Integrated systems**: Combining fish with plants (aquaponics)
- **Offshore aquaculture**: Moving further from coastlines
- **Alternative feeds**: Plant-based and insect-based feeds
- **Genetic improvement**: Selective breeding and biotechnology
- **Automation**: Sensors, robotics, and AI monitoring

## Getting Started in Aquaculture
**Basic Requirements:**
1. Suitable land or water access
2. Reliable water source
3. Basic infrastructure
4. Knowledge of species requirements
5. Market access
6. Regulatory compliance

**Starting Small:**
- Begin with low-investment species
- Start small and expand gradually
- Learn basic husbandry skills
- Connect with local extension services
- Join farmer associations

## Key Terms to Know
- **Aquaculture**: Farming of aquatic organisms
- **Hatchery**: Facility for breeding and hatching
- **Fry**: Newly hatched fish
- **Fingerling**: Young fish about finger size
- **Broodstock**: Breeding animals
- **Feed Conversion Ratio (FCR)**: Feed needed per weight gain
- **Stocking density**: Number of animals per unit area
- **Grow-out**: Final production phase`,
      completed: false,
      quiz: [
        {
          id: 1,
          question: "What percentage of global fish consumption comes from aquaculture?",
          options: ["25%", "Over 50%", "75%", "90%"],
          correctAnswer: 1,
          explanation: "Aquaculture supplies over 50% of global fish consumption, making it a crucial food source."
        },
        {
          id: 2,
          question: "Which country produces approximately 60% of global aquaculture?",
          options: ["India", "China", "Vietnam", "Indonesia"],
          correctAnswer: 1,
          explanation: "China produces about 60% of global aquaculture output, leading world production."
        },
        {
          id: 3,
          question: "What is the main difference between aquaculture and fishing?",
          options: ["Water temperature", "Controlled cultivation vs wild harvest", "Types of species", "Equipment used"],
          correctAnswer: 1,
          explanation: "Aquaculture involves controlled cultivation, while fishing involves harvesting wild populations."
        },
        {
          id: 4,
          question: "Which type of aquaculture uses natural feeding with minimal intervention?",
          options: ["Intensive", "Semi-intensive", "Extensive", "Super-intensive"],
          correctAnswer: 2,
          explanation: "Extensive aquaculture uses low density and relies on natural feeding with minimal human input."
        },
        {
          id: 5,
          question: "What does FCR stand for in aquaculture?",
          options: ["Fish Conversion Rate", "Feed Conversion Ratio", "Farming Cost Ratio", "Fish Culture Requirement"],
          correctAnswer: 1,
          explanation: "FCR stands for Feed Conversion Ratio - the amount of feed needed to produce one unit of fish weight."
        },
        {
          id: 6,
          question: "Approximately how many people are employed in aquaculture worldwide?",
          options: ["5 million", "10 million", "20 million", "50 million"],
          correctAnswer: 2,
          explanation: "About 20 million people are employed in aquaculture globally, mostly in developing countries."
        },
        {
          id: 7,
          question: "What are newly hatched fish called?",
          options: ["Fingerlings", "Fry", "Broodstock", "Juveniles"],
          correctAnswer: 1,
          explanation: "Newly hatched fish are called fry, which then grow into fingerlings and later market-sized fish."
        },
        {
          id: 8,
          question: "Which aquaculture system combines fish farming with plant cultivation?",
          options: ["Mariculture", "Aquaponics", "Integrated farming", "Polyculture"],
          correctAnswer: 1,
          explanation: "Aquaponics combines aquaculture (fish farming) with hydroponics (plant cultivation in water)."
        },
        {
          id: 9,
          question: "What percentage of aquaculture is freshwater production?",
          options: ["30%", "60%", "80%", "90%"],
          correctAnswer: 1,
          explanation: "Approximately 60% of global aquaculture production comes from freshwater systems."
        },
        {
          id: 10,
          question: "Which of these is NOT a major aquaculture species group?",
          options: ["Finfish", "Shellfish", "Seaweeds", "Marine mammals"],
          correctAnswer: 3,
          explanation: "Marine mammals are not farmed in aquaculture; the main groups are finfish, shellfish, mollusks, and seaweeds."
        },
        {
          id: 11,
          question: "What is the annual growth rate of aquaculture?",
          options: ["1-2%", "5-7%", "10-12%", "15-20%"],
          correctAnswer: 1,
          explanation: "Aquaculture grows at 5-7% annually, making it the fastest growing food production sector."
        },
        {
          id: 12,
          question: "What does 'broodstock' refer to?",
          options: ["Young fish", "Breeding animals", "Fish feed", "Harvest equipment"],
          correctAnswer: 1,
          explanation: "Broodstock refers to mature animals used for breeding purposes in aquaculture."
        },
        {
          id: 13,
          question: "Which ancient civilization first practiced fish farming?",
          options: ["Egypt", "China", "Rome", "Greece"],
          correctAnswer: 1,
          explanation: "China practiced fish farming as early as 2000 BC, making it the oldest known aquaculture civilization."
        },
        {
          id: 14,
          question: "What is the economic value of global aquaculture?",
          options: ["$50 billion", "$100 billion", "$250 billion", "$500 billion"],
          correctAnswer: 2,
          explanation: "Global aquaculture has an economic value of approximately $250 billion annually."
        },
        {
          id: 15,
          question: "What does 'stocking density' measure?",
          options: ["Water depth", "Number of fish per unit area", "Feed amount", "Oxygen levels"],
          correctAnswer: 1,
          explanation: "Stocking density measures the number of animals kept in a given area or volume of water."
        },
        {
          id: 16,
          question: "Which environmental benefit can aquaculture provide?",
          options: ["Reduces overfishing", "Increases ocean acidity", "Decreases biodiversity", "Uses more land"],
          correctAnswer: 0,
          explanation: "Aquaculture reduces pressure on wild fish stocks, helping to prevent overfishing."
        },
        {
          id: 17,
          question: "What is mariculture?",
          options: ["Freshwater farming", "Saltwater farming", "Indoor farming", "River farming"],
          correctAnswer: 1,
          explanation: "Mariculture refers to aquaculture practiced in saltwater or marine environments."
        },
        {
          id: 18,
          question: "What are young fish about finger size called?",
          options: ["Fry", "Fingerlings", "Broodstock", "Adults"],
          correctAnswer: 1,
          explanation: "Fingerlings are young fish that have reached about the size of a human finger."
        },
        {
          id: 19,
          question: "Which is a major challenge in aquaculture?",
          options: ["Too much wild fish", "Disease outbreaks", "Low food conversion", "Small market"],
          correctAnswer: 1,
          explanation: "Disease outbreaks are a major challenge due to high stocking densities in aquaculture systems."
        },
        {
          id: 20,
          question: "What is the final production phase called?",
          options: ["Hatchery", "Nursery", "Grow-out", "Processing"],
          correctAnswer: 2,
          explanation: "Grow-out is the final production phase where fish reach market size before harvesting."
        }
      ]
    },

    // MODULE 2: Aquaculture Systems and Infrastructure
    {
      id: 2,
      title: "Aquaculture Systems and Infrastructure",
      content: `# Aquaculture Systems and Infrastructure

## Basic System Types
**Pond Systems**
- **Earthen ponds**: Most common, low-cost option
- **Lined ponds**: Plastic or clay liners prevent seepage
- **Pond sizes**: Typically 0.1 to 10 hectares
- **Water management**: Inlet/outlet structures, aeration
- **Advantages**: Natural ecosystem, lower operating costs
- **Disadvantages**: Land intensive, water quality challenges

**Tank and Raceway Systems**
- **Circular tanks**: 2-10 meter diameter, good water circulation
- **Rectangular tanks**: Easy to arrange in series
- **Raceways**: Long, narrow channels with flowing water
- **Materials**: Concrete, fiberglass, plastic, or metal
- **Advantages**: High control, easy monitoring, efficient feeding
- **Disadvantages**: Higher construction costs, energy needs

**Cage and Net Pen Systems**
- **Freshwater cages**: Lakes, reservoirs, rivers
- **Marine cages**: Coastal and offshore locations
- **Net materials**: Nylon, polyethylene, anti-fouling coatings
- **Cage types**: Fixed, floating, submersible
- **Advantages**: Uses existing water bodies, lower infrastructure cost
- **Disadvantages**: Environmental impacts, storm damage risk

**Recirculating Aquaculture Systems (RAS)**
- **Closed systems**: Water continuously filtered and reused
- **Components**: Tanks, mechanical filters, biofilters, oxygenation
- **Water exchange**: 5-10% daily (vs 100% in flow-through)
- **Advantages**: Water conservation, location flexibility, disease control
- **Disadvantages**: High capital and operating costs, technical complexity

**Integrated Systems**
- **Aquaponics**: Fish waste fertilizes plants, plants filter water
- **Integrated Multi-Trophic Aquaculture (IMTA)**: Multiple species at different trophic levels
- **Rice-fish systems**: Fish grown in rice paddies
- **Polyculture**: Multiple fish species in same system

## Site Selection Factors
**Water Requirements**
- **Quantity**: Sufficient flow or volume for stock needs
- **Quality**: Suitable temperature, pH, oxygen, purity
- **Source reliability**: Year-round availability
- **Water rights**: Legal access and usage rights

**Land and Location**
- **Topography**: Gentle slopes (1-3%) for pond construction
- **Soil type**: Clay soils (20-30% clay) for pond sealing
- **Access**: Roads for supplies and product transport
- **Proximity**: To markets, suppliers, and services

**Environmental Considerations**
- **Climate**: Temperature ranges suitable for species
- **Natural hazards**: Flood, storm, or drought risks
- **Ecosystem impacts**: On local habitats and species
- **Carrying capacity**: Environmental limits of area

**Infrastructure Needs**
1. **Water supply**: Pumps, pipes, wells, or gravity feed
2. **Electricity**: For aeration, feeding, lighting, equipment
3. **Buildings**: Office, storage, processing facilities
4. **Waste management**: Solids removal, water treatment
5. **Security**: Fencing, lighting, monitoring

## Pond Construction Basics
**Planning Phase**
- Site survey and soil testing
- Design based on species requirements
- Cost estimation and budgeting
- Permits and regulatory compliance

**Construction Steps**
1. **Clearing**: Remove vegetation and obstacles
2. **Excavation**: Dig to designed depth and shape
3. **Shaping**: Create banks, slopes, and bottoms
4. **Compaction**: Compact soil to prevent leaks
5. **Structures**: Install inlet, outlet, and drainage
6. **Lining**: Apply clay or synthetic liners if needed
7. **Filling**: Add water slowly, monitor for leaks

**Pond Design Elements**
- **Depth**: 1-2 meters for most species
- **Slopes**: 2:1 or 3:1 (horizontal:vertical)
- **Bottom slope**: 0.5-1% toward drain
- **Freeboard**: 0.5-1 meter above water level
- **Surface area**: Based on stocking density and aeration

## Water Management Systems
**Water Supply Systems**
- **Gravity flow**: From springs or higher elevation sources
- **Pumping**: From wells, rivers, or lakes
- **Rainwater harvesting**: Collection and storage
- **Municipal supply**: Treated water (expensive)

**Aeration Systems**
- **Purpose**: Increase dissolved oxygen, mix water
- **Types**: Paddlewheels, aerators, diffusers, waterfalls
- **Placement**: Based on pond shape and depth
- **Operation**: Daily, especially at night and dawn

**Filtration Systems**
- **Mechanical**: Remove solids (sand filters, screens)
- **Biological**: Convert ammonia to nitrate (biofilters)
- **Chemical**: Remove dissolved wastes (activated carbon)
- **UV sterilization**: Kill pathogens in water

## Equipment and Tools
**Essential Equipment**
1. **Water testing kits**: pH, ammonia, nitrite, oxygen
2. **Nets and seines**: For handling and harvesting
3. **Feeders**: Automatic, demand, or manual
4. **Pumps**: Water movement and exchange
5. **Aerators**: Oxygen supply during critical periods
6. **Generators**: Backup power supply
7. **Weighing scales**: Monitor growth and feed amounts

**Safety Equipment**
- **Personal protective equipment**: Boots, gloves, eyewear
- **First aid kits**: For minor injuries
- **Rescue equipment**: Life rings, ropes
- **Chemical storage**: Safe containers and locations

**Monitoring Equipment**
- **Water quality meters**: Continuous or spot measurements
- **Cameras**: Remote monitoring of fish behavior
- **Weather stations**: Local climate data
- **Feed monitoring**: Consumption tracking

## Energy Considerations
**Energy Requirements**
- **Pumping**: 30-50% of total energy use
- **Aeration**: 20-40% of total energy use
- **Heating/cooling**: Climate-dependent
- **Lighting and buildings**: 10-20%

**Energy Efficiency Tips**
- Use gravity flow where possible
- Install energy-efficient pumps and motors
- Optimize aeration timing and placement
- Consider renewable energy (solar, wind)
- Regular maintenance of equipment

## Maintenance Requirements
**Daily Tasks**
- Check water quality parameters
- Monitor fish behavior and feeding
- Inspect equipment operation
- Remove dead fish and debris

**Weekly Tasks**
- Clean filters and screens
- Check and repair nets/structures
- Test backup systems
- Record growth and health data

**Seasonal Tasks**
- Pond draining and drying
- Major repairs and renovations
- Equipment servicing
- Stock inventory and planning

## Cost Considerations
**Capital Costs**
- Land acquisition or lease
- Construction and earthworks
- Buildings and infrastructure
- Equipment purchase
- Initial stock and feed

**Operating Costs**
- Feed (40-60% of operating costs)
- Labor and management
- Energy and utilities
- Chemicals and treatments
- Maintenance and repairs

**Revenue Sources**
- Sale of live or processed fish
- Value-added products
- Stock sales to other farmers
- Breeding stock sales
- By-products (fertilizer, etc.)

## Scaling and Expansion
**Starting Small**
- Begin with 1-2 ponds or tanks
- Focus on mastering basics
- Build experience gradually
- Establish market connections

**Expansion Considerations**
- Market demand and prices
- Available capital and financing
- Management capacity
- Regulatory limits
- Environmental carrying capacity

**Integration Opportunities**
- Processing facilities
- Feed production
- Hatchery operations
- Direct marketing
- Tourism and education

## System Selection Guide
**For Beginners**
- Start with pond systems
- Choose hardy species
- Begin with extensive or semi-intensive
- Keep initial investment low

**For Commercial Scale**
- Consider intensive systems
- Evaluate RAS for water-limited areas
- Choose based on market requirements
- Calculate return on investment

**For Specialty Products**
- Use tanks for high-value species
- Consider aquaponics for dual production
- Use cages for specific environments
- Tailor system to product requirements`,
      completed: false,
      quiz: [
        {
          id: 1,
          question: "What is the most common and low-cost aquaculture system?",
          options: ["Cage systems", "Tank systems", "Pond systems", "RAS systems"],
          correctAnswer: 2,
          explanation: "Pond systems are the most common and generally lowest-cost option for aquaculture."
        },
        {
          id: 2,
          question: "What percentage of water is typically exchanged daily in RAS systems?",
          options: ["1-2%", "5-10%", "25-50%", "100%"],
          correctAnswer: 1,
          explanation: "RAS systems exchange only 5-10% of water daily, compared to 100% in flow-through systems."
        },
        {
          id: 3,
          question: "Which soil type is best for pond construction?",
          options: ["Sandy soil", "Clay soil (20-30% clay)", "Gravel soil", "Loamy soil"],
          correctAnswer: 1,
          explanation: "Clay soils with 20-30% clay content are best for pond construction as they prevent water leakage."
        },
        {
          id: 4,
          question: "What is the ideal pond depth for most aquaculture species?",
          options: ["0.5 meters", "1-2 meters", "3-4 meters", "5-6 meters"],
          correctAnswer: 1,
          explanation: "Most aquaculture species do best in ponds 1-2 meters deep, allowing proper temperature and oxygen levels."
        },
        {
          id: 5,
          question: "What percentage of operating costs is typically spent on feed?",
          options: ["10-20%", "40-60%", "70-80%", "90-100%"],
          correctAnswer: 1,
          explanation: "Feed typically accounts for 40-60% of operating costs in aquaculture operations."
        },
        {
          id: 6,
          question: "Which system combines fish farming with plant cultivation?",
          options: ["Cage culture", "Aquaponics", "Mariculture", "Raceway"],
          correctAnswer: 1,
          explanation: "Aquaponics combines aquaculture with hydroponic plant cultivation in an integrated system."
        },
        {
          id: 7,
          question: "What does RAS stand for?",
          options: ["Rapid Aquaculture System", "Recirculating Aquaculture System", "River Aquaculture System", "Regional Aquaculture Standard"],
          correctAnswer: 1,
          explanation: "RAS stands for Recirculating Aquaculture System - closed systems that filter and reuse water."
        },
        {
          id: 8,
          question: "Which energy use typically accounts for 30-50% of total energy in aquaculture?",
          options: ["Lighting", "Heating", "Pumping", "Feeding"],
          correctAnswer: 2,
          explanation: "Pumping water typically accounts for 30-50% of total energy use in aquaculture operations."
        },
        {
          id: 9,
          question: "What is the recommended slope for pond banks?",
          options: ["1:1", "2:1 or 3:1", "5:1", "10:1"],
          correctAnswer: 1,
          explanation: "Pond banks should have slopes of 2:1 or 3:1 (horizontal:vertical) for stability and safety."
        },
        {
          id: 10,
          question: "Which aquaculture system uses existing water bodies with floating structures?",
          options: ["Pond systems", "Tank systems", "Cage systems", "RAS systems"],
          correctAnswer: 2,
          explanation: "Cage systems use existing water bodies like lakes or oceans with floating or fixed cage structures."
        },
        {
          id: 11,
          question: "What is freeboard in pond design?",
          options: ["Extra depth", "Distance from water surface to top of bank", "Bottom slope", "Surface area"],
          correctAnswer: 1,
          explanation: "Freeboard is the distance from the water surface to the top of the pond bank, typically 0.5-1 meter."
        },
        {
          id: 12,
          question: "Which system is best for water-limited areas?",
          options: ["Flow-through ponds", "Cage culture", "RAS", "Rice-fish systems"],
          correctAnswer: 2,
          explanation: "RAS systems are best for water-limited areas as they reuse 90-95% of their water."
        },
        {
          id: 13,
          question: "What percentage of energy is typically used for aeration?",
          options: ["5-10%", "20-40%", "50-60%", "70-80%"],
          correctAnswer: 1,
          explanation: "Aeration typically accounts for 20-40% of total energy use in aquaculture operations."
        },
        {
          id: 14,
          question: "What does IMTA stand for?",
          options: ["Intensive Marine Trophic Aquaculture", "Integrated Multi-Trophic Aquaculture", "International Marine Trade Association", "Indoor Marine Tank Aquaculture"],
          correctAnswer: 1,
          explanation: "IMTA stands for Integrated Multi-Trophic Aquaculture - farming multiple species at different trophic levels."
        },
        {
          id: 15,
          question: "Which is NOT a component of RAS systems?",
          options: ["Biofilter", "Mechanical filter", "Aeration system", "Natural pond bottom"],
          correctAnswer: 3,
          explanation: "RAS systems use tanks with artificial filtration, not natural pond bottoms like traditional systems."
        },
        {
          id: 16,
          question: "What is the main advantage of cage systems?",
          options: ["High control", "Low infrastructure cost", "Water conservation", "Easy harvesting"],
          correctAnswer: 1,
          explanation: "Cage systems have lower infrastructure costs as they use existing water bodies instead of constructed ponds."
        },
        {
          id: 17,
          question: "What should pond bottoms slope toward?",
          options: ["The center", "The drain", "The inlet", "The deepest point"],
          correctAnswer: 1,
          explanation: "Pond bottoms should slope 0.5-1% toward the drain for complete drainage during harvest."
        },
        {
          id: 18,
          question: "Which is a daily maintenance task?",
          options: ["Check water quality", "Clean all filters", "Drain ponds", "Major repairs"],
          correctAnswer: 0,
          explanation: "Checking water quality parameters is a daily task to monitor fish health and system performance."
        },
        {
          id: 19,
          question: "What is polyculture?",
          options: ["Multiple fish species in same system", "Fish with plants", "Fish in cages", "Indoor fish farming"],
          correctAnswer: 0,
          explanation: "Polyculture refers to raising multiple fish species together in the same production system."
        },
        {
          id: 20,
          question: "Which factor is NOT important in site selection?",
          options: ["Water quality", "Soil type", "Proximity to ocean for freshwater fish", "Market access"],
          correctAnswer: 2,
          explanation: "Proximity to ocean is not important for freshwater fish farming; it's more relevant for marine species."
        }
      ]
    },

    // MODULE 3: Fish Biology and Husbandry
    {
      id: 3,
      title: "Fish Biology and Husbandry",
      content: `# Fish Biology and Husbandry

## Basic Fish Anatomy
**External Features**
- **Fins**: Dorsal, pectoral, pelvic, anal, caudal (tail)
- **Scales**: Protection and reducing water resistance
- **Gills**: Breathing organs for extracting oxygen from water
- **Lateral line**: Sensory system detecting water movement
- **Operculum**: Gill cover for protection

**Internal Systems**
- **Digestive system**: Mouth, esophagus, stomach, intestines
- **Respiratory system**: Gills for gas exchange
- **Circulatory system**: Two-chambered heart, blood vessels
- **Nervous system**: Brain, spinal cord, sensory organs
- **Reproductive system**: Ovaries (female) or testes (male)

## Fish Physiology Basics
**Oxygen Requirements**
- **Dissolved oxygen (DO)**: Critical for survival (minimum 3-5 mg/L)
- **Factors affecting oxygen**: Temperature, salinity, biomass
- **Signs of low oxygen**: Gulping at surface, lethargy, death
- **Critical times**: Early morning, after feeding, hot weather

**Temperature Effects**
- **Cold-blooded**: Body temperature matches environment
- **Optimal ranges**: Species-specific (e.g., tilapia 25-30°C)
- **Temperature shock**: Sudden changes can kill fish
- **Thermal tolerance**: Varies by species and acclimation

**Water Quality Parameters**
- **pH**: 6.5-9.0 optimal for most species
- **Ammonia**: Toxic above 0.02 mg/L (unionized)
- **Nitrite**: Toxic above 0.1 mg/L
- **Alkalinity**: 50-200 mg/L as CaCO3
- **Hardness**: 50-200 mg/L as CaCO3

## Common Aquaculture Species
**Tilapia**
- **Origin**: Africa, now farmed worldwide
- **Temperature**: 25-30°C optimal
- **Growth rate**: 4-6 months to market size
- **Reproduction**: Mouth-brooding, prolific breeders
- **Feeding**: Omnivorous, accept various feeds
- **Advantages**: Hardy, fast-growing, disease-resistant

**Catfish**
- **Types**: Channel, African, Asian catfish
- **Temperature**: 25-30°C optimal
- **Growth rate**: 6-9 months to market size
- **Feeding**: Carnivorous/omnivorous, prefer pellets
- **Advantages**: Tolerant of poor water quality, high demand

**Carp**
- **Types**: Common, grass, silver, bighead
- **Temperature**: 20-25°C optimal
- **Growth rate**: 1-2 years to market size
- **Feeding**: Various - plankton, plants, pellets
- **Advantages**: Hardy, good for polyculture

**Salmon**
- **Types**: Atlantic, Chinook, Coho
- **Temperature**: 10-15°C optimal
- **Growth rate**: 18-24 months to market size
- **Feeding**: Carnivorous, high-protein feeds
- **Special needs**: Cold water, high oxygen

**Shrimp**
- **Types**: Whiteleg, black tiger, giant freshwater
- **Temperature**: 25-30°C optimal
- **Growth rate**: 3-4 months to market size
- **Feeding**: Omnivorous, specialized feeds
- **Special needs**: Specific salinity, careful handling

## Life Cycle Management
**Broodstock Management**
- **Selection**: Choose healthy, fast-growing individuals
- **Conditioning**: Special feeding before breeding
- **Sex ratio**: Typically 2-3 females per male
- **Spawning induction**: Natural or hormone-induced

**Hatchery Operations**
- **Egg collection**: From natural spawning or stripping
- **Incubation**: In jars, trays, or tanks with flowing water
- **Hatching**: Time varies by species and temperature
- **Larval rearing**: Critical phase with high mortality

**Nursery Phase**
- **Duration**: 3-8 weeks depending on species
- **Feeding**: Start with live food, transition to formulated
- **Grading**: Separate by size to reduce cannibalism
- **Density**: Higher than grow-out but with careful monitoring

**Grow-out Phase**
- **Duration**: Species and system dependent
- **Stocking density**: Based on system and management
- **Feeding**: Regular, appropriate-sized pellets
- **Monitoring**: Growth, health, water quality

## Feeding and Nutrition
**Nutritional Requirements**
- **Protein**: 25-50% depending on species and life stage
- **Lipids**: 10-20% for energy and essential fatty acids
- **Carbohydrates**: Limited ability to digest (10-30%)
- **Vitamins and minerals**: Essential for health and growth

**Feed Types**
- **Live feeds**: Artemia, rotifers, Daphnia (for larvae)
- **Formulated feeds**: Pellets, crumbles, powders
- **Supplemental feeds**: Agricultural by-products
- **Medicated feeds**: For disease treatment

**Feeding Strategies**
- **Frequency**: 2-4 times daily for optimal growth
- **Rate**: 2-5% of body weight daily (adjust by temperature)
- **Method**: Hand feeding, automatic feeders, demand feeders
- **Monitoring**: Adjust based on consumption and water quality

**Feed Conversion Ratio (FCR)**
- **Calculation**: Feed given / weight gained
- **Good FCR**: 1.2-1.8 for fish, 1.5-2.0 for shrimp
- **Factors affecting FCR**: Feed quality, water quality, species
- **Improving FCR**: Proper feeding, good genetics, optimal conditions

## Growth Monitoring
**Measuring Growth**
- **Sampling**: Regular (weekly or monthly) measurements
- **Methods**: Netting sample, anesthetizing, measuring
- **Parameters**: Length, weight, condition factor
- **Records**: Maintain growth charts and feeding records

**Growth Rate Calculations**
- **Specific Growth Rate (SGR)**: % weight gain per day
- **Daily Weight Gain**: Grams gained per day
- **Biomass estimation**: Average weight × number of fish
- **Yield prediction**: Based on current growth rates

## Health Management
**Common Diseases**
- **Bacterial**: Columnaris, furunculosis, vibriosis
- **Viral**: Koi herpesvirus, viral hemorrhagic septicemia
- **Parasitic**: Ich, gill flukes, anchor worms
- **Fungal**: Saprolegnia (cotton wool disease)
- **Nutritional**: Vitamin deficiencies, fatty liver

**Prevention Strategies**
- **Biosecurity**: Limit introduction of pathogens
- **Water quality**: Maintain optimal conditions
- **Stock management**: Avoid stress, proper handling
- **Vaccination**: Available for some diseases
- **Quarantine**: New stock before introduction

**Treatment Options**
- **Medicated baths**: For external parasites
- **Medicated feeds**: For internal infections
- **Water treatments**: Salt, formalin, potassium permanganate
- **Antibiotics**: Use only when necessary and properly

**Stress Management**
- **Causes**: Handling, poor water quality, crowding
- **Effects**: Reduced growth, disease susceptibility
- **Reduction**: Gentle handling, stable conditions, hiding places
- **Recovery**: Optimal conditions, reduced feeding if needed

## Reproduction Control
**Natural Spawning**
- **Seasonal triggers**: Temperature, photoperiod, rainfall
- **Spawning substrates**: Plants, nets, containers
- **Nest building**: Some species create nests
- **Parental care**: Mouth-brooding, nest guarding

**Induced Spawning**
- **Hormone types**: HCG, LHRH, pituitary extracts
- **Injection methods**: Intraperitoneal or intramuscular
- **Timing**: Based on egg development stage
- **Stripping**: Manual egg and milt collection

**Egg and Fry Management**
- **Egg quality**: Fertilization rate, size, color
- **Incubation systems**: jars, trays, upwelling systems
- **Water flow**: Gentle but sufficient for oxygen
- **Fungus control**: Methylene blue or salt treatments

## Genetic Improvement
**Selective Breeding**
- **Traits selected**: Growth rate, disease resistance, feed conversion
- **Broodstock records**: Pedigree and performance tracking
- **Generation interval**: 1-3 years depending on species
- **Genetic gain**: 10-15% per generation possible

**Hybridization**
- **Interspecific crosses**: Between different species
- **Heterosis**: Hybrid vigor (improved performance)
- **Examples**: Hybrid tilapia, hybrid catfish
- **Considerations**: May produce sterile offspring

**Modern Techniques**
- **DNA markers**: For parentage and trait selection
- **Gyrogenesis**: All-female production
- **Triploidy**: Sterile fish (faster growth, no reproduction)
- **Gene editing**: Future potential for specific traits

## Handling and Transport
**Live Fish Handling**
- **Anesthetics**: MS-222, clove oil for reduced stress
- **Grading equipment**: Sort by size manually or mechanically
- **Health checks**: Before and after handling
- **Recovery**: In clean, oxygenated water after handling

**Transport Methods**
- **Closed systems**: Bags with oxygen (small quantities)
- **Open systems**: Tanks with aeration (larger quantities)
- **Temperature control**: Ice or heaters as needed
- **Duration limits**: Based on species and conditions

**Stress Reduction**
- **Fasting before transport**: 12-24 hours
- **Gradual temperature adjustment**: Acclimation
- **Water quality maintenance**: Oxygen, ammonia control
- **Minimal handling**: Reduce physical damage`,
      completed: false,
      quiz: [
        {
          id: 1,
          question: "What is the minimum dissolved oxygen level needed for most fish?",
          options: ["1-2 mg/L", "3-5 mg/L", "7-9 mg/L", "10-12 mg/L"],
          correctAnswer: 1,
          explanation: "Most fish require at least 3-5 mg/L of dissolved oxygen for normal activity and growth."
        },
        {
          id: 2,
          question: "What is the optimal temperature range for tilapia?",
          options: ["10-15°C", "15-20°C", "25-30°C", "35-40°C"],
          correctAnswer: 2,
          explanation: "Tilapia thrive in warm water with optimal temperatures between 25-30°C."
        },
        {
          id: 3,
          question: "What does FCR stand for?",
          options: ["Fish Conversion Rate", "Feed Conversion Ratio", "Farming Cost Ratio", "Fish Culture Requirement"],
          correctAnswer: 1,
          explanation: "FCR stands for Feed Conversion Ratio - the amount of feed needed to produce one unit of fish weight."
        },
        {
          id: 4,
          question: "What is a good FCR range for most fish species?",
          options: ["0.5-1.0", "1.2-1.8", "2.0-3.0", "3.5-4.5"],
          correctAnswer: 1,
          explanation: "A good FCR for most fish species is 1.2-1.8, meaning 1.2-1.8 kg of feed produces 1 kg of fish."
        },
        {
          id: 5,
          question: "Which species is known for mouth-brooding reproduction?",
          options: ["Catfish", "Salmon", "Tilapia", "Carp"],
          correctAnswer: 2,
          explanation: "Tilapia are mouth-brooders where females carry fertilized eggs in their mouths for protection."
        },
        {
          id: 6,
          question: "What percentage of protein do most aquaculture feeds contain?",
          options: ["10-15%", "25-50%", "60-70%", "80-90%"],
          correctAnswer: 1,
          explanation: "Most aquaculture feeds contain 25-50% protein, depending on the species and life stage."
        },
        {
          id: 7,
          question: "What is the toxic level of ammonia (unionized) for most fish?",
          options: ["0.02 mg/L", "0.5 mg/L", "2.0 mg/L", "5.0 mg/L"],
          correctAnswer: 0,
          explanation: "Unionized ammonia becomes toxic to most fish at levels above 0.02 mg/L."
        },
        {
          id: 8,
          question: "How often should fish typically be fed for optimal growth?",
          options: ["Once weekly", "2-4 times daily", "Once monthly", "Continuous 24/7"],
          correctAnswer: 1,
          explanation: "Feeding 2-4 times daily is optimal for most species to maximize growth and feed efficiency."
        },
        {
          id: 9,
          question: "What is the typical grow-out period for tilapia?",
          options: ["1-2 months", "4-6 months", "12-18 months", "2-3 years"],
          correctAnswer: 1,
          explanation: "Tilapia typically reach market size in 4-6 months under optimal conditions."
        },
        {
          id: 10,
          question: "Which organ do fish use for breathing?",
          options: ["Lungs", "Gills", "Skin", "Swim bladder"],
          correctAnswer: 1,
          explanation: "Fish use gills to extract oxygen from water and remove carbon dioxide."
        },
        {
          id: 11,
          question: "What is the optimal pH range for most aquaculture species?",
          options: ["4.0-5.0", "6.5-9.0", "9.5-10.5", "11.0-12.0"],
          correctAnswer: 1,
          explanation: "Most aquaculture species thrive in pH ranges between 6.5 and 9.0."
        },
        {
          id: 12,
          question: "What percentage of body weight should fish typically be fed daily?",
          options: ["0.1-0.5%", "2-5%", "10-15%", "20-25%"],
          correctAnswer: 1,
          explanation: "Most fish are fed 2-5% of their body weight daily, adjusted for temperature and growth stage."
        },
        {
          id: 13,
          question: "What is SGR an abbreviation for?",
          options: ["Specific Growth Rate", "Standard Growth Ratio", "Seasonal Growth Rate", "System Growth Requirement"],
          correctAnswer: 0,
          explanation: "SGR stands for Specific Growth Rate - the percentage of weight gained per day."
        },
        {
          id: 14,
          question: "Which disease appears as white cotton-like growth on fish?",
          options: ["Ich", "Columnaris", "Saprolegnia", "Vibriosis"],
          correctAnswer: 2,
          explanation: "Saprolegnia is a fungal disease that appears as cotton-like growth on fish skin and fins."
        },
        {
          id: 15,
          question: "How long should fish be fasted before transport?",
          options: ["1-2 hours", "12-24 hours", "3-4 days", "1 week"],
          correctAnswer: 1,
          explanation: "Fish should be fasted 12-24 hours before transport to reduce metabolic waste in transport water."
        },
        {
          id: 16,
          question: "What is heterosis?",
          options: ["Disease resistance", "Hybrid vigor", "Feed efficiency", "Growth hormone"],
          correctAnswer: 1,
          explanation: "Heterosis, or hybrid vigor, refers to improved performance in hybrid offspring compared to parents."
        },
        {
          id: 17,
          question: "Which species requires cold water temperatures?",
          options: ["Tilapia", "Catfish", "Salmon", "Shrimp"],
          correctAnswer: 2,
          explanation: "Salmon require cold water temperatures, typically between 10-15°C for optimal growth."
        },
        {
          id: 18,
          question: "What is the lateral line in fish?",
          options: ["Digestive organ", "Sensory system", "Reproductive organ", "Swimming muscle"],
          correctAnswer: 1,
          explanation: "The lateral line is a sensory system that detects water movement and vibrations."
        },
        {
          id: 19,
          question: "What does triploidy produce in fish?",
          options: ["All females", "Sterile fish", "All males", "Fast-growing fish"],
          correctAnswer: 1,
          explanation: "Triploidy produces sterile fish with three sets of chromosomes instead of the normal two."
        },
        {
          id: 20,
          question: "Which is a common anesthetic used for fish handling?",
          options: ["MS-222", "Penicillin", "Formalin", "Salt"],
          correctAnswer: 0,
          explanation: "MS-222 is a common fish anesthetic used to reduce stress during handling procedures."
        }
      ]
    },

    // MODULE 4: Water Quality Management
    {
      id: 4,
      title: "Water Quality Management",
      content: `# Water Quality Management

## Importance of Water Quality
Water quality is the most critical factor in aquaculture success. Poor water quality causes stress, reduces growth, increases disease susceptibility, and can cause mass mortality. Maintaining optimal conditions is essential for profitable operations.

## Key Water Quality Parameters
**Dissolved Oxygen (DO)**
- **Optimal range**: 5-8 mg/L for most species
- **Critical level**: Below 3 mg/L causes stress, below 2 mg/L can be lethal
- **Daily fluctuations**: Lowest at dawn, highest in afternoon
- **Factors affecting DO**: Temperature, salinity, biomass, photosynthesis

**Temperature**
- **Species-specific requirements**: Each species has optimal range
- **Effects on metabolism**: 10°C increase doubles metabolic rate
- **Thermal stratification**: Layers form in deep ponds
- **Temperature shock**: Changes >3°C/hour can be harmful

**pH**
- **Optimal range**: 6.5-9.0 for most species
- **Daily cycle**: Increases during day (photosynthesis), decreases at night (respiration)
- **pH stress**: Below 6.0 or above 9.5 harmful to most fish
- **Buffer capacity**: Alkalinity maintains stable pH

**Ammonia**
- **Forms**: Unionized (NH3) toxic, ionized (NH4+) less toxic
- **Toxic levels**: NH3 > 0.02 mg/L harmful, >0.2 mg/L lethal
- **Sources**: Fish waste, uneaten feed, decomposition
- **Conversion**: Bacteria convert to nitrite then nitrate

**Nitrite**
- **Toxic mechanism**: Binds hemoglobin (brown blood disease)
- **Toxic levels**: Above 0.1 mg/L harmful, species vary in sensitivity
- **Treatment**: Salt (chloride) competes for absorption
- **Control**: Maintain healthy biofilter, reduce feeding

**Nitrate**
- **Less toxic**: Can tolerate 50-100 mg/L
- **Problems at high levels**: >200 mg/L can be harmful
- **Removal**: Water exchange, plant uptake, denitrification
- **Indicator**: High nitrate suggests system maturity

**Alkalinity**
- **Definition**: Capacity to neutralize acid (buffering)
- **Optimal range**: 50-200 mg/L as CaCO3
- **Importance**: Stabilizes pH, supports biofiltration
- **Increasing**: Add limestone, sodium bicarbonate

**Hardness**
- **Definition**: Calcium and magnesium concentration
- **Optimal range**: 50-200 mg/L as CaCO3
- **Importance**: Reduces metal toxicity, supports osmoregulation
- **Relationship**: Often correlated with alkalinity

**Salinity**
- **Measurement**: Parts per thousand (ppt) or specific gravity
- **Freshwater**: <0.5 ppt
- **Brackish**: 0.5-30 ppt
- **Marine**: 30-40 ppt
- **Importance**: Affects osmoregulation, disease susceptibility

## Monitoring Techniques
**Manual Testing**
- **Test kits**: Chemical reagents for specific parameters
- **Frequency**: Daily for critical parameters (DO, ammonia)
- **Accuracy**: Good for routine monitoring, moderate precision
- **Cost**: Low initial investment, ongoing reagent costs

**Electronic Meters**
- **Types**: DO meters, pH meters, conductivity/salinity meters
- **Advantages**: Fast, accurate, continuous monitoring possible
- **Calibration**: Required regularly for accuracy
- **Cost**: Higher initial investment, low operating cost

**Continuous Monitoring Systems**
- **Sensors**: Multiple parameter sensors with data logging
- **Alarms**: Alert systems for critical levels
- **Remote access**: Cloud-based monitoring via mobile devices
- **Cost**: High investment, valuable for intensive systems

**Visual Indicators**
- **Fish behavior**: Gulping at surface (low oxygen), flashing (parasites)
- **Water appearance**: Color, clarity, foam, odor
- **Algae blooms**: Indicate nutrient levels and productivity
- **Weather effects**: Rain, wind, temperature changes

## Oxygen Management
**Sources of Oxygen**
- **Photosynthesis**: Primary source in pond systems (60-80%)
- **Atmospheric diffusion**: Wind and surface agitation
- **Mechanical aeration**: Paddlewheels, aerators, oxygen cones
- **Pure oxygen**: Liquid or gaseous for intensive systems

**Aeration Equipment**
- **Paddlewheels**: Most common, good for large ponds
- **Aspirators**: Propeller or venturi types
- **Diffusers**: Bottom-mounted, fine bubble
- **Emergency aerators**: Backup for power failures

**Aeration Strategies**
- **Nighttime aeration**: Critical when photosynthesis stops
- **Dawn checking**: Most critical time for oxygen monitoring
- **Pre-feeding aeration**: Before morning feeding
- **Emergency protocols**: For oxygen crashes

**Oxygen Transfer Efficiency**
- **Factors**: Temperature, salinity, water depth, bubble size
- **Improving efficiency**: Proper placement, maintenance
- **Energy considerations**: Balance aeration needs with costs
- **Sizing**: Based on biomass, feeding rates, temperature

## Waste Management
**Nitrogen Cycle**
1. **Ammonia production**: From fish waste and decomposition
2. **Nitrification**: Ammonia → nitrite → nitrate by bacteria
3. **Denitrification**: Nitrate → nitrogen gas (anaerobic)
4. **Plant uptake**: Nitrate used by plants/algae

**Solids Removal**
- **Settling ponds**: Allow solids to settle before water reuse
- **Mechanical filters**: Screens, drum filters, sand filters
- **Centrifuges**: For intensive systems with high solids
- **Natural systems**: Wetlands, vegetation filters

**Biological Filtration**
- **Biofilter media**: Plastic beads, sand, gravel, moving bed
- **Surface area**: More area supports more bacteria
- **Maintenance**: Backwashing, cleaning, flow regulation
- **Start-up**: Takes 4-6 weeks to establish mature biofilter

**Chemical Treatments**
- **Flocculants**: Aluminum sulfate, chitosan for clearing water
- **Disinfectants**: Chlorine, ozone, UV for pathogen control
- **pH adjusters**: Lime, soda ash, acids
- **Therapeutics**: Salt, formalin, potassium permanganate

## Water Exchange Strategies
**Flow-through Systems**
- **Constant exchange**: Continuous inflow/outflow
- **Advantages**: Dilutes wastes, maintains quality
- **Disadvantages**: High water use, temperature control difficult
- **Management**: Match flow to feeding rates

**Recirculating Systems**
- **Minimal exchange**: 5-10% daily water replacement
- **Treatment train**: Multiple treatment steps in sequence
- **Water savings**: 90-95% less water than flow-through
- **Complexity**: Requires careful monitoring and management

**Batch Exchange**
- **Periodic draining**: Complete or partial water changes
- **Timing**: Based on water quality deterioration
- **Labor intensive**: Requires planning and preparation
- **Common in**: Small-scale, seasonal operations

## Problem Solving
**Low Oxygen Emergencies**
1. **Stop feeding**: Reduces oxygen demand immediately
2. **Increase aeration**: All available equipment
3. **Water exchange**: Add oxygenated water if available
4. **Chemical oxygen**: Hydrogen peroxide (emergency only)
5. **Reduce biomass**: Partial harvest if severe

**Ammonia Spikes**
1. **Reduce feeding**: Temporary reduction
2. **Water exchange**: Dilute ammonia concentration
3. **pH adjustment**: Lower pH reduces toxic NH3 form
4. **Biofilter enhancement**: Add established filter media
5. **Chemical binders**: Zeolite, activated carbon

**Algae Blooms**
- **Causes**: Excess nutrients, sunlight, warm temperatures
- **Problems**: Oxygen swings, pH fluctuations, off-flavors
- **Control**: Reduce nutrients, shade, algicides (carefully)
- **Prevention**: Proper feeding, water exchange, aeration

**pH Problems**
- **Low pH**: Add agricultural lime or sodium bicarbonate
- **High pH**: Add acids (carefully), increase aeration, reduce algae
- **Daily swings**: Increase alkalinity, reduce algal blooms
- **Monitoring**: Test at same time daily for consistency

## Seasonal Management
**Summer Challenges**
- **High temperatures**: Increased metabolism, lower oxygen solubility
- **Algae blooms**: More common with warmth and light
- **Disease outbreaks**: Warmer water favors pathogens
- **Management**: Increased aeration, feeding adjustment, monitoring

**Winter Challenges**
- **Low temperatures**: Reduced feeding and growth
- **Ice cover**: Blocks oxygen exchange, traps gases
- **Temperature stratification**: Can cause turnover events
- **Management**: Reduce stocking, prevent ice, monitor closely

**Rainy Season**
- **Dilution**: Freshwater influx changes salinity and chemistry
- **Runoff**: Can bring contaminants, sediments
- **Overflow**: Pond banks at risk
- **Management**: Drainage systems, water testing, bank maintenance

**Dry Season**
- **Water shortage**: Limited supply for exchange
- **Concentration**: Evaporation increases salinity and nutrients
- **Temperature extremes**: Wider daily fluctuations
- **Management**: Water conservation, shade, careful feeding

## Record Keeping
**Essential Records**
1. **Water quality log**: Daily parameters, trends, issues
2. **Feeding records**: Amounts, types, consumption rates
3. **Growth data**: Regular sampling results
4. **Health observations**: Disease signs, treatments, mortality
5. **Maintenance records**: Equipment servicing, repairs

**Data Analysis**
- **Trend identification**: Spot problems before they become critical
- **Performance tracking**: Relate water quality to growth rates
- **Cost analysis**: Relate inputs to outputs
- **Regulatory compliance**: Required reporting for permits

**Digital Tools**
- **Spreadsheets**: For data entry and basic analysis
- **Specialized software**: Aquaculture management systems
- **Mobile apps**: For field data collection
- **Cloud storage**: Secure backup and remote access

## Best Practices
**Preventive Management**
- **Regular monitoring**: Don't wait for problems to appear
- **Proactive maintenance**: Equipment before failure
- **Gradual changes**: Avoid sudden parameter shifts
- **Stocking density**: Match to system capacity

**Emergency Preparedness**
- **Backup power**: Generators for aeration and pumps
- **Emergency supplies**: Oxygen test kits, treatments, nets
- **Action plans**: Written procedures for common problems
- **Training**: Staff know how to respond to emergencies

**Continuous Improvement**
- **Benchmarking**: Compare to industry standards
- **Experimentation**: Try new methods on small scale
- **Learning**: Attend training, read research, network
- **Adaptation**: Adjust practices based on results and conditions`,
      completed: false,
      quiz: [
        {
          id: 1,
          question: "What is the optimal dissolved oxygen range for most fish?",
          options: ["1-2 mg/L", "3-4 mg/L", "5-8 mg/L", "10-12 mg/L"],
          correctAnswer: 2,
          explanation: "Most fish thrive in dissolved oxygen levels between 5-8 mg/L."
        },
        {
          id: 2,
          question: "When is dissolved oxygen typically lowest in ponds?",
          options: ["Noon", "Afternoon", "Evening", "Dawn"],
          correctAnswer: 3,
          explanation: "Dissolved oxygen is typically lowest at dawn after nighttime respiration without photosynthesis."
        },
        {
          id: 3,
          question: "What is the toxic level of unionized ammonia (NH3) for most fish?",
          options: ["0.02 mg/L", "0.5 mg/L", "2.0 mg/L", "5.0 mg/L"],
          correctAnswer: 0,
          explanation: "Unionized ammonia becomes toxic to most fish at levels above 0.02 mg/L."
        },
        {
          id: 4,
          question: "What does nitrite cause in fish blood?",
          options: ["Increased oxygen", "Brown blood disease", "Clotting", "Thinning"],
          correctAnswer: 1,
          explanation: "Nitrite binds to hemoglobin creating methemoglobin, causing 'brown blood disease'."
        },
        {
          id: 5,
          question: "What is the optimal alkalinity range for aquaculture?",
          options: ["10-20 mg/L", "50-200 mg/L", "300-400 mg/L", "500-600 mg/L"],
          correctAnswer: 1,
          explanation: "Optimal alkalinity for aquaculture is 50-200 mg/L as CaCO3 for pH stability."
        },
        {
          id: 6,
          question: "Which parameter shows daily cycles due to photosynthesis?",
          options: ["Temperature", "pH", "Salinity", "Hardness"],
          correctAnswer: 1,
          explanation: "pH increases during daylight from photosynthesis and decreases at night from respiration."
        },
        {
          id: 7,
          question: "What percentage of oxygen in ponds typically comes from photosynthesis?",
          options: ["10-20%", "30-40%", "60-80%", "90-100%"],
          correctAnswer: 2,
          explanation: "Photosynthesis typically provides 60-80% of oxygen in productive aquaculture ponds."
        },
        {
          id: 8,
          question: "How long does it typically take to establish a mature biofilter?",
          options: ["1-2 days", "1-2 weeks", "4-6 weeks", "3-4 months"],
          correctAnswer: 2,
          explanation: "Establishing a mature biofilter with nitrifying bacteria typically takes 4-6 weeks."
        },
        {
          id: 9,
          question: "What is the first action during a low oxygen emergency?",
          options: ["Add chemicals", "Stop feeding", "Harvest fish", "Call for help"],
          correctAnswer: 1,
          explanation: "Stop feeding immediately to reduce oxygen demand from digestion during low oxygen emergencies."
        },
        {
          id: 10,
          question: "What water exchange rate is typical for RAS systems?",
          options: ["1-2% daily", "5-10% daily", "25-50% daily", "100% daily"],
          correctAnswer: 1,
          explanation: "RAS systems typically exchange 5-10% of their water daily, compared to 100% in flow-through."
        },
        {
          id: 11,
          question: "Which treatment competes with nitrite absorption in fish?",
          options: ["Salt (chloride)", "Lime", "Formalin", "Antibiotics"],
          correctAnswer: 0,
          explanation: "Salt (sodium chloride) provides chloride ions that compete with nitrite for absorption in fish."
        },
        {
          id: 12,
          question: "What is the optimal pH range for most aquaculture species?",
          options: ["4.0-5.0", "6.5-9.0", "9.5-10.5", "11.0-12.0"],
          correctAnswer: 1,
          explanation: "Most aquaculture species thrive in pH ranges between 6.5 and 9.0."
        },
        {
          id: 13,
          question: "What temperature change per hour can cause temperature shock?",
          options: ["0.5°C", "1°C", "3°C", "5°C"],
          correctAnswer: 2,
          explanation: "Temperature changes greater than 3°C per hour can cause temperature shock in fish."
        },
        {
          id: 14,
          question: "What does alkalinity measure in water?",
          options: ["Acid neutralizing capacity", "Calcium content", "Oxygen level", "Salt concentration"],
          correctAnswer: 0,
          explanation: "Alkalinity measures the water's capacity to neutralize acids (buffering capacity)."
        },
        {
          id: 15,
          question: "Which is NOT a common aeration equipment type?",
          options: ["Paddlewheel", "Aspirator", "Biofilter", "Diffuser"],
          correctAnswer: 2,
          explanation: "Biofilters treat ammonia but don't directly aerate water; they're part of water treatment systems."
        },
        {
          id: 16,
          question: "What nitrate level becomes problematic for most fish?",
          options: ["5-10 mg/L", "50-100 mg/L", "200+ mg/L", "500+ mg/L"],
          correctAnswer: 2,
          explanation: "Nitrate levels above 200 mg/L can become problematic for fish health and growth."
        },
        {
          id: 17,
          question: "What is brackish water salinity range?",
          options: ["0-0.5 ppt", "0.5-30 ppt", "30-40 ppt", "40+ ppt"],
          correctAnswer: 1,
          explanation: "Brackish water has salinity between 0.5 and 30 parts per thousand (ppt)."
        },
        {
          id: 18,
          question: "Which weather condition most affects pond oxygen levels?",
          options: ["Rain", "Wind", "Cloudy days", "All of the above"],
          correctAnswer: 3,
          explanation: "Rain dilutes oxygen, wind increases aeration, and cloudy days reduce photosynthesis - all affect oxygen."
        },
        {
          id: 19,
          question: "What does zeolite help control in aquaculture water?",
          options: ["Ammonia", "Oxygen", "pH", "Temperature"],
          correctAnswer: 0,
          explanation: "Zeolite is a mineral that can adsorb ammonia from water, helping control ammonia levels."
        },
        {
          id: 20,
          question: "When should water quality parameters be tested for consistency?",
          options: ["Random times", "Same time daily", "Only when problems appear", "Weekly only"],
          correctAnswer: 1,
          explanation: "Testing at the same time daily provides consistent data for tracking trends and patterns."
        }
      ]
    },

    // MODULE 5: Health and Disease Management
    {
      id: 5,
      title: "Health and Disease Management",
      content: `# Health and Disease Management

## Principles of Fish Health
Healthy fish are essential for profitable aquaculture. Disease prevention is always better and cheaper than treatment. Understanding the balance between pathogen, environment, and host is key to maintaining healthy stocks.

## Disease Triangle Concept
**Three Components of Disease:**
1. **Pathogen**: Disease-causing organism (bacteria, virus, parasite, fungus)
2. **Host**: The fish being farmed
3. **Environment**: Water quality, temperature, stress factors

**Disease Occurs When:**
- Pathogen is present AND
- Host is susceptible AND
- Environment favors pathogen over host

**Prevention Strategies:**
- Reduce pathogen introduction and spread
- Maintain host health and resistance
- Optimize environmental conditions

## Common Diseases by Type
**Bacterial Diseases**
- **Columnaris**: Cotton-like mouth lesions, gill damage
- **Aeromonas**: Ulcers, hemorrhages, pop-eye
- **Vibriosis**: Skin lesions, lethargy, mortality in marine species
- **Edwardsiella**: Internal abscesses, "hole in the head"
- **Streptococcus**: Erratic swimming, eye opacity

**Viral Diseases**
- **Koi Herpesvirus**: Gill necrosis, high mortality in carp
- **Spring Viremia of Carp**: Hemorrhages, swelling, pop-eye
- **Infectious Pancreatic Necrosis**: Spinning, darkening in young salmonids
- **White Spot Syndrome**: Rapid mortality in shrimp
- **Taura Syndrome**: Red discoloration in shrimp

**Parasitic Diseases**
- **Ichthyophthirius (Ich)**: White spots on skin and gills
- **Trichodina**: Slime coat irritation, flashing
- **Gyrodactylus**: Skin and gill flukes, excessive mucus
- **Argulus**: Fish lice, visible parasites
- **Lernaea**: Anchor worms, embedded in skin

**Fungal Diseases**
- **Saprolegnia**: Cotton-like growth on skin, eggs
- **Branchiomyces**: Gill rot, respiratory distress
- **Ichthyophonus**: Internal nodules, wasting

**Nutritional Diseases**
- **Vitamin deficiencies**: Various symptoms based on vitamin
- **Fatty liver**: From excessive carbohydrates or poor feed
- **Goiter**: Iodine deficiency, swelling near gills

## Disease Prevention Strategies
**Biosecurity Measures**
- **Quarantine**: Isolate new stock for 2-4 weeks
- **Disinfection**: Equipment, footwear, vehicles between units
- **Barrier systems**: Physical separation of production units
- **Visitor control**: Limit access, provide disinfectant stations
- **Wildlife control**: Nets, fences to exclude birds and mammals

**Stock Management**
- **Source quality**: Purchase from certified disease-free hatcheries
- **Handling care**: Minimize stress during transport and handling
- **Stocking density**: Avoid overcrowding
- **Grading**: Remove weak and diseased individuals
- **Record keeping**: Track sources, movements, health history

**Environmental Management**
- **Water quality**: Maintain optimal parameters
- **Temperature stability**: Avoid sudden changes
- **Oxygen management**: Prevent low oxygen stress
- **Waste removal**: Regular cleaning of tanks and ponds
- **Aeration**: Ensure adequate oxygen, especially at critical times

**Nutrition and Feeding**
- **Quality feed**: Fresh, properly stored, appropriate formulation
- **Feeding practices**: Avoid overfeeding, remove uneaten feed
- **Immune enhancers**: Beta-glucans, vitamins, probiotics
- **Feed storage**: Cool, dry, pest-free conditions
- **Feeding frequency**: Regular, appropriate amounts

## Disease Detection and Diagnosis
**Behavioral Signs**
- **Reduced feeding**: First sign of many problems
- **Abnormal swimming**: Spinning, flashing, lethargy
- **Gasping**: At surface indicates respiratory problems
- **Isolation**: Sick fish often separate from group
- **Clamped fins**: Fins held close to body

**Physical Signs**
- **Lesions**: Ulcers, sores, red spots
- **Color changes**: Darkening, paling, unusual patterns
- **Eye abnormalities**: Cloudiness, pop-eye, hemorrhage
- **Fin damage**: Erosion, redness, splitting
- **Body shape**: Swelling, emaciation, deformities

**Diagnostic Methods**
- **Gross examination**: Visual inspection of external and internal organs
- **Microscopy**: Skin scrapes, gill clips, tissue samples
- **Culture**: Bacterial isolation and identification
- **PCR testing**: DNA-based pathogen detection
- **Histopathology**: Tissue examination for cellular changes

**When to Seek Help:**
- Unusual mortality patterns
- Rapid spread of symptoms
- Multiple symptoms appearing
- No response to initial treatments
- Unknown cause of problems

## Treatment Options
**Chemical Treatments**
- **Antibiotics**: For bacterial infections (use judiciously)
- **Antiparasitics**: Formalin, copper, organophosphates
- **Antifungals**: Salt, malachite green, hydrogen peroxide
- **Disinfectants**: Chlorine, iodine, ozone for equipment/water

**Administration Methods**
- **Bath treatments**: Fish immersed in medicated water
- **Dip treatments**: Brief exposure to high concentration
- **Flush treatments**: Add medication to flowing water
- **Injection**: For valuable broodstock or show fish
- **Medicated feed**: For systemic internal infections

**Natural Treatments**
- **Salt**: For parasites, osmoregulatory support
- **Garlic**: Natural antiparasitic, appetite stimulant
- **Herbal extracts**: Various plants with medicinal properties
- **Probiotics**: Competitive exclusion of pathogens
- **Water changes**: Dilution of pathogens and wastes

**Treatment Considerations**
- **Correct diagnosis**: Essential for effective treatment
- **Dosage accuracy**: Under-dosing ineffective, over-dosing toxic
- **Water quality effects**: Some treatments affect water parameters
- **Withdrawal periods**: For food fish before harvest
- **Resistance development**: Rotate treatments when possible

## Stress Management
**Common Stressors**
- **Handling**: Netting, weighing, transporting
- **Water quality**: Poor parameters or rapid changes
- **Crowding**: High stocking density
- **Predators**: Birds, mammals, other fish
- **Social stress**: Aggression, hierarchy establishment

**Stress Effects**
- **Reduced growth**: Energy diverted to stress response
- **Suppressed immunity**: Increased disease susceptibility
- **Reproductive failure**: Reduced spawning success
- **Behavior changes**: Reduced feeding, abnormal activity
- **Mortality**: In severe or prolonged stress

**Stress Reduction Techniques**
- **Gentle handling**: Use appropriate equipment, minimize time
- **Gradual changes**: Acclimate to new conditions slowly
- **Environmental enrichment**: Hiding places, appropriate substrates
- **Proper stocking**: Avoid overcrowding, mix compatible species
- **Routine**: Consistent feeding and management schedules

## Vaccination
**Available Vaccines**
- **Furunculosis**: For salmonids
- **Vibriosis**: For marine species
- **Streptococcosis**: For tilapia and other species
- **Koi herpesvirus**: For carp
- **Enteric septicemia**: For catfish

**Vaccination Methods**
- **Injection**: Most effective, labor intensive
- **Immersion**: Bath in vaccine solution
- **Oral**: Mixed with feed, variable effectiveness
- **Spray**: Applied to skin and gills

**Vaccination Programs**
- **Timing**: Before disease risk periods
- **Booster shots**: For some vaccines
- **Record keeping**: Track vaccination history
- **Cost-benefit**: Evaluate for specific operations

## Quarantine Procedures
**Quarantine Facility Requirements**
- **Separate system**: Independent water and equipment
- **Observation capability**: Easy monitoring of new stock
- **Treatment capability**: Ability to treat if diseases found
- **Biosecurity**: Prevent cross-contamination

**Quarantine Period**
- **Duration**: Minimum 2-4 weeks
- **Monitoring**: Daily observation for disease signs
- **Testing**: For specific diseases if suspected
- **Treatment**: If diseases detected

**Release Criteria**
- No disease signs during quarantine
- Normal feeding and behavior
- Negative test results if required
- Acclimated to main system conditions

## Mortality Management
**Daily Monitoring**
- **Record keeping**: Count and document all mortalities
- **Removal**: Remove dead fish promptly
- **Examination**: Note location, symptoms, patterns
- **Disposal**: Proper methods to prevent disease spread

**Mortality Analysis**
- **Patterns**: Sudden vs. gradual, species affected, size groups
- **Location**: Specific tanks or areas affected
- **Timing**: Related to feeding, handling, weather changes
- **Rate calculation**: Percent mortality per day or week

**Proper Disposal Methods**
- **Burial**: Deep enough to prevent scavenging
- **Incineration**: High temperature destruction
- **Composting**: Controlled decomposition
- **Rendering**: Professional processing
- **Regulations**: Follow local environmental guidelines

## Emergency Response
**Disease Outbreak Protocol**
1. **Confirm diagnosis**: Identify pathogen if possible
2. **Isolate affected stock**: Prevent spread to other units
3. **Implement treatment**: Based on diagnosis
4. **Enhance biosecurity**: Prevent further introduction
5. **Monitor closely**: Track response to treatment
6. **Adjust management**: Based on outbreak cause

**Mass Mortality Events**
- **Immediate actions**: Remove dead fish, increase aeration
- **Water quality emergency**: Major water exchange if possible
- **Harvest decisions**: Early harvest if feasible
- **Communication**: Inform staff, authorities if required
- **Investigation**: Determine cause to prevent recurrence

## Health Records and Documentation
**Essential Records**
- **Stock history**: Source, arrival date, quarantine results
- **Health observations**: Daily monitoring notes
- **Treatment records**: Dates, medications, dosages, results
- **Mortality logs**: Numbers, causes, patterns
- **Water quality data**: Parameters affecting health

**Regulatory Requirements**
- **Medication logs**: For food safety compliance
- **Movement records**: For disease traceability
- **Mortality reporting**: For notifiable diseases
- **Inspection records**: For certification programs

**Data Analysis for Prevention**
- **Trend identification**: Spot problems before they escalate
- **Cost analysis**: Compare prevention vs. treatment costs
- **Performance tracking**: Relate health to production outcomes
- **Continuous improvement**: Adjust practices based on results

## Building Disease Resistance
**Genetic Selection**
- **Breeding programs**: For disease-resistant strains
- **Family selection**: Based on disease challenge tests
- **Marker-assisted selection**: Using genetic markers
- **Hybrid vigor**: Some crosses show improved resistance

**Nutritional Enhancement**
- **Immune stimulants**: Beta-glucans, nucleotides
- **Antioxidants**: Vitamins C and E, selenium
- **Prebiotics**: Feed components supporting gut health
- **Functional feeds**: Specifically formulated for health

**Environmental Optimization**
- **Stocking density**: Appropriate for system and species
- **Water quality**: All parameters in optimal ranges
- **Stress reduction**: Minimize handling and disturbances
- **System design**: Facilities that support fish welfare`,
      completed: false,
      quiz: [
        {
          id: 1,
          question: "What are the three components of the disease triangle?",
          options: ["Water, feed, oxygen", "Pathogen, host, environment", "Temperature, pH, ammonia", "Bacteria, virus, parasite"],
          correctAnswer: 1,
          explanation: "The disease triangle includes pathogen (disease cause), host (fish), and environment (conditions)."
        },
        {
          id: 2,
          question: "What is the first sign of many fish health problems?",
          options: ["Color change", "Reduced feeding", "Lesions", "Mortality"],
          correctAnswer: 1,
          explanation: "Reduced feeding or appetite loss is often the first observable sign of health problems in fish."
        },
        {
          id: 3,
          question: "How long should new fish be quarantined?",
          options: ["1-2 days", "1 week", "2-4 weeks", "2-3 months"],
          correctAnswer: 2,
          explanation: "New fish should be quarantined for 2-4 weeks to observe for disease signs before introduction."
        },
        {
          id: 4,
          question: "Which disease causes white spots on fish skin and gills?",
          options: ["Columnaris", "Ich", "Vibriosis", "Saprolegnia"],
          correctAnswer: 1,
          explanation: "Ichthyophthirius (Ich) causes characteristic white spots on fish skin and gills."
        },
        {
          id: 5,
          question: "What does 'flashing' behavior indicate in fish?",
          options: ["Happiness", "Skin irritation", "Hunger", "Mating behavior"],
          correctAnswer: 1,
          explanation: "Flashing (rubbing against objects) indicates skin irritation, often from parasites."
        },
        {
          id: 6,
          question: "Which is a natural treatment for some parasites?",
          options: ["Salt", "Antibiotics", "Formalin", "Copper"],
          correctAnswer: 0,
          explanation: "Salt (sodium chloride) is a natural treatment effective against some external parasites."
        },
        {
          id: 7,
          question: "What is the cotton-like fungal disease called?",
          options: ["Ich", "Columnaris", "Saprolegnia", "Vibriosis"],
          correctAnswer: 2,
          explanation: "Saprolegnia appears as cotton-like growth on fish skin, fins, or eggs."
        },
        {
          id: 8,
          question: "Which vaccination method is most effective but labor intensive?",
          options: ["Oral", "Immersion", "Injection", "Spray"],
          correctAnswer: 2,
          explanation: "Injection vaccination is most effective but requires handling each fish individually."
        },
        {
          id: 9,
          question: "What should be done with dead fish promptly?",
          options: ["Leave for natural decomposition", "Remove and dispose properly", "Feed to other fish", "Freeze for later examination"],
          correctAnswer: 1,
          explanation: "Dead fish should be removed promptly to prevent disease spread and water quality problems."
        },
        {
          id: 10,
          question: "What does PCR testing detect?",
          options: ["Water quality", "Pathogen DNA", "Nutritional deficiencies", "Stress levels"],
          correctAnswer: 1,
          explanation: "PCR (Polymerase Chain Reaction) testing detects specific pathogen DNA for diagnosis."
        },
        {
          id: 11,
          question: "Which is NOT a common stressor for fish?",
          options: ["Handling", "Optimal water quality", "Crowding", "Predators"],
          correctAnswer: 1,
          explanation: "Optimal water quality reduces stress, while poor quality or rapid changes cause stress."
        },
        {
          id: 12,
          question: "What is brown blood disease caused by?",
          options: ["Low oxygen", "High nitrite", "Ammonia toxicity", "Parasites"],
          correctAnswer: 1,
          explanation: "Brown blood disease is caused by nitrite binding to hemoglobin in fish blood."
        },
        {
          id: 13,
          question: "How does stress affect disease susceptibility?",
          options: ["Reduces susceptibility", "Increases susceptibility", "No effect", "Only affects growth"],
          correctAnswer: 1,
          explanation: "Stress suppresses the immune system, making fish more susceptible to diseases."
        },
        {
          id: 14,
          question: "Which bacterial disease causes cotton-like mouth lesions?",
          options: ["Vibriosis", "Columnaris", "Streptococcus", "Aeromonas"],
          correctAnswer: 1,
          explanation: "Columnaris causes cotton-like lesions around the mouth and on gills."
        },
        {
          id: 15,
          question: "What should be done first during a disease outbreak?",
          options: ["Treat all fish", "Confirm diagnosis", "Change all water", "Stop all feeding"],
          correctAnswer: 1,
          explanation: "Confirming the diagnosis is essential before implementing appropriate treatment."
        },
        {
          id: 16,
          question: "What are beta-glucans used for in aquaculture?",
          options: ["Water treatment", "Immune enhancement", "Parasite control", "pH adjustment"],
          correctAnswer: 1,
          explanation: "Beta-glucans are immune stimulants added to feed to enhance disease resistance."
        },
        {
          id: 17,
          question: "Which is a proper disposal method for dead fish?",
          options: ["Throw in regular trash", "Leave by water edge", "Deep burial", "Feed to pets"],
          correctAnswer: 2,
          explanation: "Deep burial prevents scavenging and disease spread from dead fish."
        },
        {
          id: 18,
          question: "What does 'clamped fins' indicate?",
          options: ["Good health", "Stress or illness", "Mating readiness", "Aggression"],
          correctAnswer: 1,
          explanation: "Clamped fins (held close to body) often indicate stress or illness in fish."
        },
        {
          id: 19,
          question: "Which is an advantage of vaccination?",
          options: ["100% effective always", "Reduces antibiotic use", "No cost", "Works for all diseases"],
          correctAnswer: 1,
          explanation: "Vaccination can reduce the need for antibiotics by preventing specific diseases."
        },
        {
          id: 20,
          question: "What should be included in health records?",
          options: ["Only mortality counts", "All health observations and treatments", "Only medication records", "Only water quality"],
          correctAnswer: 1,
          explanation: "Complete health records should include all observations, treatments, mortality, and related data."
        }
      ]
    },

    // MODULE 6: Business and Marketing
    {
      id: 6,
      title: "Business and Marketing",
      content: `# Business and Marketing

## Aquaculture as a Business
Successful aquaculture requires both technical skills and business acumen. Understanding markets, costs, and business planning is essential for profitability and sustainability.

## Business Planning
**Components of a Business Plan**
1. **Executive Summary**: Overview of the business
2. **Business Description**: Type, location, legal structure
3. **Market Analysis**: Demand, competition, pricing
4. **Operations Plan**: Production methods, facilities, schedule
5. **Marketing Plan**: Sales strategy, distribution, promotion
6. **Management Team**: Experience, roles, organization
7. **Financial Plan**: Costs, revenues, projections, funding

**Feasibility Study**
- **Market feasibility**: Is there demand for the product?
- **Technical feasibility**: Can you produce it successfully?
- **Financial feasibility**: Will it be profitable?
- **Management feasibility**: Do you have necessary skills?
- **Environmental feasibility**: Is it sustainable and permitted?

**Start-up Considerations**
- **Scale**: Start small, learn, then expand
- **Species selection**: Based on market, climate, experience
- **Location**: Access to resources and markets
- **Capital**: Initial investment requirements
- **Timeframe**: When will production and revenue begin?

## Market Analysis
**Understanding Demand**
- **Local markets**: Restaurants, fish markets, direct consumers
- **Regional/national**: Processors, distributors, supermarkets
- **Export markets**: International buyers, specialty products
- **Seasonal variations**: Demand changes through year
- **Trends**: Consumer preferences, health concerns, sustainability

**Competition Analysis**
- **Direct competitors**: Other aquaculture operations
- **Indirect competitors**: Wild-caught fish, imported products
- **Substitutes**: Other protein sources (meat, poultry)
- **Competitive advantages**: Quality, price, location, sustainability

**Pricing Strategies**
- **Cost-plus pricing**: Costs plus profit margin
- **Market-based pricing**: Based on what market will bear
- **Value-based pricing**: Based on perceived value to customer
- **Premium pricing**: For specialty or certified products
- **Discount strategies**: Volume, seasonal, promotional

**Market Research Methods**
- **Surveys**: Of potential customers or buyers
- **Interviews**: With chefs, retailers, distributors
- **Observation**: At markets, restaurants, competitors
- **Data analysis**: Price trends, consumption statistics
- **Test marketing**: Small-scale product introduction

## Production Planning
**Capacity Planning**
- **System capacity**: Based on infrastructure and water
- **Stocking plans**: Numbers, timing, size targets
- **Production cycles**: Overlapping batches for continuous supply
- **Seasonal adjustments**: For temperature or market changes

**Input Planning**
- **Fingerling supply**: Reliable sources, quality, timing
- **Feed requirements**: Quantities, types, suppliers
- **Equipment needs**: Maintenance, replacement, upgrades
- **Labor requirements**: Skilled and unskilled needs

**Risk Management**
- **Production risks**: Disease, water quality, weather
- **Market risks**: Price fluctuations, demand changes
- **Financial risks**: Cost increases, cash flow problems
- **Mitigation strategies**: Insurance, diversification, contracts

## Cost Analysis
**Capital Costs**
- **Land and water rights**: Purchase or lease costs
- **Construction**: Ponds, tanks, buildings, infrastructure
- **Equipment**: Pumps, aerators, vehicles, tools
- **Initial stock**: Broodstock or fingerlings
- **Working capital**: Operating funds until revenue

**Operating Costs**
- **Feed**: 40-60% of operating costs typically
- **Labor**: Wages, benefits, management
- **Energy**: Electricity, fuel for pumps and aeration
- **Fingerlings**: Regular stocking purchases
- **Chemicals and medications**: Health management
- **Maintenance**: Repairs, equipment servicing
- **Marketing and sales**: Promotion, transport, commissions
- **Administration**: Office, insurance, permits, professional fees

**Cost Calculation Methods**
- **Fixed costs**: Don't change with production level (rent, salaries)
- **Variable costs**: Change with production level (feed, fingerlings)
- **Total cost**: Fixed + variable costs
- **Average cost**: Total cost ÷ production quantity
- **Marginal cost**: Cost to produce one more unit

**Break-even Analysis**
- **Break-even point**: Where total revenue = total costs
- **Calculation**: Fixed costs ÷ (price per unit - variable cost per unit)
- **Time to break-even**: When cumulative profit reaches zero
- **Sensitivity analysis**: How changes affect break-even

## Revenue Streams
**Primary Products**
- **Live fish**: To markets, restaurants, other farmers
- **Processed fish**: Fillets, whole dressed, value-added
- **Specialty products**: Organic, certified, specific sizes
- **By-products**: Fertilizer, fish meal, ornamental uses

**Secondary Revenue**
- **Fingerling sales**: To other farmers
- **Broodstock sales**: Breeding animals
- **Consulting services**: Based on experience
- **Training programs**: Workshops, internships
- **Tourism and education**: Farm tours, fishing experiences

**Value-Added Opportunities**
- **Processing**: Cleaning, filleting, packaging
- **Branding**: Private label, local identity
- **Certification**: Organic, sustainable, quality marks
- **Direct marketing**: Farm gate sales, subscriptions
- **Online sales**: E-commerce, social media marketing

## Marketing Strategies
**Target Markets**
- **Retail consumers**: Through markets, stores, online
- **Food service**: Restaurants, hotels, institutions
- **Wholesale**: Distributors, processors
- **Specialty markets**: Ethnic, health-conscious, gourmet
- **Export markets**: For specific products or prices

**Distribution Channels**
- **Direct sales**: Farm gate, farmers markets, online
- **Wholesale distributors**: To retailers and restaurants
- **Processors**: For further processing and distribution
- **Cooperatives**: Farmer-owned marketing organizations
- **Export agents**: For international sales

**Promotion Methods**
- **Personal selling**: Direct contact with buyers
- **Advertising**: Local media, trade publications
- **Public relations**: Media coverage, events, sponsorships
- **Digital marketing**: Website, social media, email
- **Sampling**: Product tasting at events or stores

**Brand Development**
- **Brand identity**: Name, logo, packaging design
- **Brand story**: History, values, production methods
- **Quality assurance**: Consistent product standards
- **Customer service**: Responsive, reliable, helpful
- **Reputation management**: Address issues proactively

## Financial Management
**Record Keeping Systems**
- **Production records**: Stocking, growth, mortality, feed
- **Financial records**: Income, expenses, assets, liabilities
- **Inventory records**: Fish stocks, supplies, equipment
- **Sales records**: Customers, volumes, prices, terms

**Financial Statements**
- **Income statement**: Revenue, expenses, profit/loss
- **Balance sheet**: Assets, liabilities, equity
- **Cash flow statement**: Cash inflows and outflows
- **Production cost analysis**: Cost per unit, efficiency measures

**Budgeting**
- **Operating budget**: Planned income and expenses
- **Capital budget**: Planned investments in assets
- **Cash flow budget**: Timing of cash inflows and outflows
- **Flexible budgeting**: Adjusting for actual performance

**Financial Ratios**
- **Profitability ratios**: Return on investment, profit margin
- **Liquidity ratios**: Current ratio, quick ratio
- **Efficiency ratios**: Feed conversion, growth rates
- **Solvency ratios**: Debt to equity, interest coverage

## Legal and Regulatory Considerations
**Business Structure**
- **Sole proprietorship**: Simple, personal liability
- **Partnership**: Shared ownership and responsibility
- **Corporation**: Separate legal entity, limited liability
- **Cooperative**: Member-owned, shared benefits
- **Choosing structure**: Based on size, risk, tax, goals

**Permits and Licenses**
- **Aquaculture permits**: Water use, discharge, operations
- **Business licenses**: Local, state/provincial, federal
- **Food safety regulations**: Processing, handling, labeling
- **Environmental regulations**: Water quality, waste management
- **Import/export permits**: For international trade

**Insurance Needs**
- **Property insurance**: Buildings, equipment, stock
- **Liability insurance**: Public, product, environmental
- **Business interruption**: For production losses
- **Key person insurance**: For essential management
- **Workers compensation**: For employee injuries

**Contracts and Agreements**
- **Sales contracts**: With buyers, specifying terms
- **Supply contracts**: With feed, fingerling suppliers
- **Land/water leases**: Terms, duration, conditions
- **Employment agreements**: Roles, compensation, terms
- **Partnership agreements**: Roles, contributions, profit sharing

## Scaling and Growth
**Expansion Planning**
- **Market capacity**: Can you sell more product?
- **Production capacity**: Can you produce more efficiently?
- **Financial capacity**: Do you have capital for expansion?
- **Management capacity**: Can you manage larger operation?

**Growth Strategies**
- **Organic growth**: Expand existing operations gradually
- **Diversification**: Add new species or products
- **Vertical integration**: Control more of supply chain
- **Horizontal integration**: Acquire similar operations
- **Strategic alliances**: Partnerships for mutual benefit

**Financing Growth**
- **Reinvestment**: Profits used for expansion
- **Debt financing**: Loans from banks or lenders
- **Equity financing**: Selling ownership shares
- **Grants and subsidies**: Government or development programs
- **Crowdfunding**: Many small investments from public

## Success Factors
**Key Performance Indicators**
- **Production metrics**: Survival rate, growth rate, FCR
- **Financial metrics**: Profit margin, return on investment
- **Market metrics**: Customer satisfaction, market share
- **Sustainability metrics**: Water use, feed efficiency, waste

**Continuous Improvement**
- **Benchmarking**: Compare to industry standards
- **Technology adoption**: New methods and equipment
- **Training and development**: Improve skills and knowledge
- **Networking**: Learn from other farmers and experts
- **Innovation**: Try new approaches on small scale first

**Risk Management Strategies**
- **Diversification**: Multiple species, markets, products
- **Insurance**: Transfer certain risks
- **Contracts**: Secure prices and markets
- **Savings reserves**: For emergencies and opportunities
- **Scenario planning**: Prepare for different possibilities

## Exit Strategies
**Business Valuation**
- **Asset-based**: Value of physical assets
- **Income-based**: Based on earning potential
- **Market-based**: Comparable business sales
- **Going concern value**: As operating business

**Succession Planning**
- **Family succession**: Transfer to next generation
- **Management buyout**: Sale to employees
- **External sale**: To another business or investor
- **Cooperative conversion**: To farmer-owned cooperative

**Retirement Planning**
- **Timing**: Based on personal and business readiness
- **Financial preparation**: Savings, investments, sale proceeds
- **Transition period**: Gradual transfer of responsibilities
- **Legacy considerations**: Maintaining business reputation and relationships`,
      completed: false,
      quiz: [
        {
          id: 1,
          question: "What percentage of operating costs is typically spent on feed?",
          options: ["10-20%", "40-60%", "70-80%", "90-100%"],
          correctAnswer: 1,
          explanation: "Feed typically accounts for 40-60% of operating costs in aquaculture operations."
        },
        {
          id: 2,
          question: "What is the break-even point?",
          options: ["Maximum profit", "Where revenue equals costs", "Minimum production", "Best market price"],
          correctAnswer: 1,
          explanation: "The break-even point is where total revenue equals total costs - no profit or loss."
        },
        {
          id: 3,
          question: "Which business structure provides limited liability?",
          options: ["Sole proprietorship", "Partnership", "Corporation", "All of the above"],
          correctAnswer: 2,
          explanation: "Corporations provide limited liability, separating business and personal assets."
        },
        {
          id: 4,
          question: "What is cost-plus pricing?",
          options: ["Based on competitor prices", "Costs plus profit margin", "What customers will pay", "Below cost to gain market"],
          correctAnswer: 1,
          explanation: "Cost-plus pricing adds a profit margin to the cost of production."
        },
        {
          id: 5,
          question: "How long should new fish be quarantined in business operations?",
          options: ["1-2 days", "1 week", "2-4 weeks", "Not necessary"],
          correctAnswer: 2,
          explanation: "New fish should be quarantined 2-4 weeks to prevent disease introduction to main stock."
        },
        {
          id: 6,
          question: "What is vertical integration?",
          options: ["Buying competitors", "Controlling more of supply chain", "Adding unrelated businesses", "Selling online"],
          correctAnswer: 1,
          explanation: "Vertical integration involves controlling more stages of the supply chain, like hatchery and processing."
        },
        {
          id: 7,
          question: "Which is NOT a primary revenue stream for aquaculture?",
          options: ["Live fish sales", "Processed fish", "Feed manufacturing", "Fingerling sales"],
          correctAnswer: 2,
          explanation: "Feed manufacturing is typically an input cost, not a primary revenue stream for most fish farmers."
        },
        {
          id: 8,
          question: "What does FCR measure in financial analysis?",
          options: ["Feed cost ratio", "Feed conversion efficiency", "Financial cost return", "Fixed cost ratio"],
          correctAnswer: 1,
          explanation: "FCR (Feed Conversion Ratio) measures feed efficiency - lower is better financially."
        },
        {
          id: 9,
          question: "What is market-based pricing?",
          options: ["Based on production costs", "Based on what market will bear", "Always the highest price", "Below competitor prices"],
          correctAnswer: 1,
          explanation: "Market-based pricing sets prices based on what customers are willing to pay in the market."
        },
        {
          id: 10,
          question: "Which insurance covers business interruption from disease outbreaks?",
          options: ["Property insurance", "Liability insurance", "Business interruption insurance", "Workers compensation"],
          correctAnswer: 2,
          explanation: "Business interruption insurance covers lost income from events like disease outbreaks that halt production."
        },
        {
          id: 11,
          question: "What is a feasibility study?",
          options: ["Market research only", "Assessment of business viability", "Financial statement", "Business plan"],
          correctAnswer: 1,
          explanation: "A feasibility study assesses whether a business idea is viable technically, financially, and commercially."
        },
        {
          id: 12,
          question: "What are fixed costs?",
          options: ["Costs that change with production", "Costs that don't change with production", "Only feed costs", "Only labor costs"],
          correctAnswer: 1,
          explanation: "Fixed costs (like rent, salaries) don't change with production level, unlike variable costs (like feed)."
        },
        {
          id: 13,
          question: "Which promotion method involves product tasting?",
          options: ["Advertising", "Sampling", "Personal selling", "Public relations"],
          correctAnswer: 1,
          explanation: "Sampling allows potential customers to taste products, often effective for food products."
        },
        {
          id: 14,
          question: "What does ROI stand for?",
          options: ["Return on investment", "Rate of interest", "Revenue on inventory", "Risk of investment"],
          correctAnswer: 0,
          explanation: "ROI stands for Return on Investment - a key profitability measure."
        },
        {
          id: 15,
          question: "Which is a risk management strategy?",
          options: ["Diversification", "Maximum debt", "Single market focus", "No insurance"],
          correctAnswer: 0,
          explanation: "Diversification (multiple species or markets) reduces risk compared to single focus."
        },
        {
          id: 16,
          question: "What is value-added processing?",
          options: ["Selling live fish only", "Processing for higher value", "Reducing product quality", "Increasing production costs"],
          correctAnswer: 1,
          explanation: "Value-added processing (like filleting, smoking) increases product value and potential profit."
        },
        {
          id: 17,
          question: "What should be included in a business plan?",
          options: ["Only financial projections", "All aspects of the business", "Only marketing ideas", "Only production methods"],
          correctAnswer: 1,
          explanation: "A complete business plan should cover all aspects: market, operations, management, and finances."
        },
        {
          id: 18,
          question: "Which financial statement shows assets and liabilities?",
          options: ["Income statement", "Balance sheet", "Cash flow statement", "Production report"],
          correctAnswer: 1,
          explanation: "The balance sheet shows assets, liabilities, and equity at a specific point in time."
        },
        {
          id: 19,
          question: "What is organic growth?",
          options: ["Using organic feed", "Expanding existing operations", "Selling organic products", "Natural production methods"],
          correctAnswer: 1,
          explanation: "Organic growth means expanding existing business operations gradually using profits."
        },
        {
          id: 20,
          question: "What is succession planning?",
          options: ["Planning production cycles", "Planning business transfer", "Planning market entry", "Planning employee training"],
          correctAnswer: 1,
          explanation: "Succession planning involves preparing for transfer of business ownership and management."
        }
      ]
    }
  ],

  // 3. FINAL EXAM (40 questions covering all modules)
  finalExam: {
    title: "Aquaculture Certificate Final Examination",
    description: "Comprehensive exam covering all 6 modules of the Aquaculture Certificate course",
    passingScore: 70,
    timeLimit: 90, // minutes
    questions: [
      // Questions from Module 1 (7 questions)
      {
        id: 1,
        question: "What percentage of global fish consumption comes from aquaculture?",
        options: ["25%", "Over 50%", "75%", "90%"],
        correctAnswer: 1,
        explanation: "Aquaculture supplies over 50% of global fish consumption today.",
        module: 1
      },
      {
        id: 2,
        question: "Which country produces approximately 60% of global aquaculture?",
        options: ["India", "China", "Vietnam", "Indonesia"],
        correctAnswer: 1,
        explanation: "China produces about 60% of global aquaculture output.",
        module: 1
      },
      {
        id: 3,
        question: "What does FCR stand for?",
        options: ["Fish Conversion Rate", "Feed Conversion Ratio", "Farming Cost Ratio", "Fish Culture Requirement"],
        correctAnswer: 1,
        explanation: "FCR stands for Feed Conversion Ratio - feed needed per weight gain.",
        module: 1
      },
      {
        id: 4,
        question: "Approximately how many people are employed in aquaculture worldwide?",
        options: ["5 million", "10 million", "20 million", "50 million"],
        correctAnswer: 2,
        explanation: "About 20 million people are employed in aquaculture globally.",
        module: 1
      },
      {
        id: 5,
        question: "What are newly hatched fish called?",
        options: ["Fingerlings", "Fry", "Broodstock", "Juveniles"],
        correctAnswer: 1,
        explanation: "Newly hatched fish are called fry.",
        module: 1
      },
      {
        id: 6,
        question: "What percentage of aquaculture is freshwater production?",
        options: ["30%", "60%", "80%", "90%"],
        correctAnswer: 1,
        explanation: "Approximately 60% of global aquaculture is freshwater production.",
        module: 1
      },
      {
        id: 7,
        question: "What is the annual growth rate of aquaculture?",
        options: ["1-2%", "5-7%", "10-12%", "15-20%"],
        correctAnswer: 1,
        explanation: "Aquaculture grows at 5-7% annually, fastest among food sectors.",
        module: 1
      },

      // Questions from Module 2 (7 questions)
      {
        id: 8,
        question: "What is the most common and low-cost aquaculture system?",
        options: ["Cage systems", "Tank systems", "Pond systems", "RAS systems"],
        correctAnswer: 2,
        explanation: "Pond systems are the most common and generally lowest-cost option.",
        module: 2
      },
      {
        id: 9,
        question: "What percentage of water is typically exchanged daily in RAS systems?",
        options: ["1-2%", "5-10%", "25-50%", "100%"],
        correctAnswer: 1,
        explanation: "RAS systems exchange only 5-10% of water daily.",
        module: 2
      },
      {
        id: 10,
        question: "Which soil type is best for pond construction?",
        options: ["Sandy soil", "Clay soil (20-30% clay)", "Gravel soil", "Loamy soil"],
        correctAnswer: 1,
        explanation: "Clay soils with 20-30% clay content prevent water leakage.",
        module: 2
      },
      {
        id: 11,
        question: "What is the ideal pond depth for most aquaculture species?",
        options: ["0.5 meters", "1-2 meters", "3-4 meters", "5-6 meters"],
        correctAnswer: 1,
        explanation: "Most species do best in ponds 1-2 meters deep.",
        module: 2
      },
      {
        id: 12,
        question: "What percentage of operating costs is typically spent on feed?",
        options: ["10-20%", "40-60%", "70-80%", "90-100%"],
        correctAnswer: 1,
        explanation: "Feed typically accounts for 40-60% of operating costs.",
        module: 2
      },
      {
        id: 13,
        question: "Which system combines fish farming with plant cultivation?",
        options: ["Cage culture", "Aquaponics", "Mariculture", "Raceway"],
        correctAnswer: 1,
        explanation: "Aquaponics combines aquaculture with hydroponic plant cultivation.",
        module: 2
      },
      {
        id: 14,
        question: "What does RAS stand for?",
        options: ["Rapid Aquaculture System", "Recirculating Aquaculture System", "River Aquaculture System", "Regional Aquaculture Standard"],
        correctAnswer: 1,
        explanation: "RAS stands for Recirculating Aquaculture System.",
        module: 2
      },

      // Questions from Module 3 (7 questions)
      {
        id: 15,
        question: "What is the minimum dissolved oxygen level needed for most fish?",
        options: ["1-2 mg/L", "3-5 mg/L", "7-9 mg/L", "10-12 mg/L"],
        correctAnswer: 1,
        explanation: "Most fish require at least 3-5 mg/L of dissolved oxygen.",
        module: 3
      },
      {
        id: 16,
        question: "What is the optimal temperature range for tilapia?",
        options: ["10-15°C", "15-20°C", "25-30°C", "35-40°C"],
        correctAnswer: 2,
        explanation: "Tilapia thrive in warm water between 25-30°C.",
        module: 3
      },
      {
        id: 17,
        question: "What is a good FCR range for most fish species?",
        options: ["0.5-1.0", "1.2-1.8", "2.0-3.0", "3.5-4.5"],
        correctAnswer: 1,
        explanation: "A good FCR for most fish is 1.2-1.8.",
        module: 3
      },
      {
        id: 18,
        question: "Which species is known for mouth-brooding reproduction?",
        options: ["Catfish", "Salmon", "Tilapia", "Carp"],
        correctAnswer: 2,
        explanation: "Tilapia are mouth-brooders where females carry eggs in mouths.",
        module: 3
      },
      {
        id: 19,
        question: "What percentage of protein do most aquaculture feeds contain?",
        options: ["10-15%", "25-50%", "60-70%", "80-90%"],
        correctAnswer: 1,
        explanation: "Most feeds contain 25-50% protein depending on species.",
        module: 3
      },
      {
        id: 20,
        question: "What is the toxic level of ammonia (unionized) for most fish?",
        options: ["0.02 mg/L", "0.5 mg/L", "2.0 mg/L", "5.0 mg/L"],
        correctAnswer: 0,
        explanation: "Unionized ammonia becomes toxic above 0.02 mg/L.",
        module: 3
      },
      {
        id: 21,
        question: "How often should fish typically be fed for optimal growth?",
        options: ["Once weekly", "2-4 times daily", "Once monthly", "Continuous 24/7"],
        correctAnswer: 1,
        explanation: "Feeding 2-4 times daily is optimal for most species.",
        module: 3
      },

      // Questions from Module 4 (6 questions)
      {
        id: 22,
        question: "What is the optimal dissolved oxygen range for most fish?",
        options: ["1-2 mg/L", "3-4 mg/L", "5-8 mg/L", "10-12 mg/L"],
        correctAnswer: 2,
        explanation: "Most fish thrive in dissolved oxygen levels between 5-8 mg/L.",
        module: 4
      },
      {
        id: 23,
        question: "When is dissolved oxygen typically lowest in ponds?",
        options: ["Noon", "Afternoon", "Evening", "Dawn"],
        correctAnswer: 3,
        explanation: "Dissolved oxygen is typically lowest at dawn.",
        module: 4
      },
      {
        id: 24,
        question: "What is the toxic level of unionized ammonia (NH3) for most fish?",
        options: ["0.02 mg/L", "0.5 mg/L", "2.0 mg/L", "5.0 mg/L"],
        correctAnswer: 0,
        explanation: "Unionized ammonia becomes toxic above 0.02 mg/L.",
        module: 4
      },
      {
        id: 25,
        question: "What does nitrite cause in fish blood?",
        options: ["Increased oxygen", "Brown blood disease", "Clotting", "Thinning"],
        correctAnswer: 1,
        explanation: "Nitrite causes brown blood disease by binding to hemoglobin.",
        module: 4
      },
      {
        id: 26,
        question: "What is the optimal alkalinity range for aquaculture?",
        options: ["10-20 mg/L", "50-200 mg/L", "300-400 mg/L", "500-600 mg/L"],
        correctAnswer: 1,
        explanation: "Optimal alkalinity is 50-200 mg/L as CaCO3.",
        module: 4
      },
      {
        id: 27,
        question: "What percentage of oxygen in ponds typically comes from photosynthesis?",
        options: ["10-20%", "30-40%", "60-80%", "90-100%"],
        correctAnswer: 2,
        explanation: "Photosynthesis typically provides 60-80% of oxygen in ponds.",
        module: 4
      },

      // Questions from Module 5 (6 questions)
      {
        id: 28,
        question: "What are the three components of the disease triangle?",
        options: ["Water, feed, oxygen", "Pathogen, host, environment", "Temperature, pH, ammonia", "Bacteria, virus, parasite"],
        correctAnswer: 1,
        explanation: "The disease triangle includes pathogen, host, and environment.",
        module: 5
      },
      {
        id: 29,
        question: "What is the first sign of many fish health problems?",
        options: ["Color change", "Reduced feeding", "Lesions", "Mortality"],
        correctAnswer: 1,
        explanation: "Reduced feeding is often the first sign of health problems.",
        module: 5
      },
      {
        id: 30,
        question: "How long should new fish be quarantined?",
        options: ["1-2 days", "1 week", "2-4 weeks", "2-3 months"],
        correctAnswer: 2,
        explanation: "New fish should be quarantined for 2-4 weeks.",
        module: 5
      },
      {
        id: 31,
        question: "Which disease causes white spots on fish skin and gills?",
        options: ["Columnaris", "Ich", "Vibriosis", "Saprolegnia"],
        correctAnswer: 1,
        explanation: "Ichthyophthirius (Ich) causes white spots.",
        module: 5
      },
      {
        id: 32,
        question: "What does 'flashing' behavior indicate in fish?",
        options: ["Happiness", "Skin irritation", "Hunger", "Mating behavior"],
        correctAnswer: 1,
        explanation: "Flashing indicates skin irritation, often from parasites.",
        module: 5
      },
      {
        id: 33,
        question: "Which is a natural treatment for some parasites?",
        options: ["Salt", "Antibiotics", "Formalin", "Copper"],
        correctAnswer: 0,
        explanation: "Salt is a natural treatment effective against some parasites.",
        module: 5
      },

      // Questions from Module 6 (7 questions)
      {
        id: 34,
        question: "What percentage of operating costs is typically spent on feed?",
        options: ["10-20%", "40-60%", "70-80%", "90-100%"],
        correctAnswer: 1,
        explanation: "Feed typically accounts for 40-60% of operating costs.",
        module: 6
      },
      {
        id: 35,
        question: "What is the break-even point?",
        options: ["Maximum profit", "Where revenue equals costs", "Minimum production", "Best market price"],
        correctAnswer: 1,
        explanation: "Break-even is where total revenue equals total costs.",
        module: 6
      },
      {
        id: 36,
        question: "Which business structure provides limited liability?",
        options: ["Sole proprietorship", "Partnership", "Corporation", "All of the above"],
        correctAnswer: 2,
        explanation: "Corporations provide limited liability protection.",
        module: 6
      },
      {
        id: 37,
        question: "What is cost-plus pricing?",
        options: ["Based on competitor prices", "Costs plus profit margin", "What customers will pay", "Below cost to gain market"],
        correctAnswer: 1,
        explanation: "Cost-plus pricing adds profit margin to production costs.",
        module: 6
      },
      {
        id: 38,
        question: "How long should new fish be quarantined in business operations?",
        options: ["1-2 days", "1 week", "2-4 weeks", "Not necessary"],
        correctAnswer: 2,
        explanation: "New fish should be quarantined 2-4 weeks to prevent disease.",
        module: 6
      },
      {
        id: 39,
        question: "What is vertical integration?",
        options: ["Buying competitors", "Controlling more of supply chain", "Adding unrelated businesses", "Selling online"],
        correctAnswer: 1,
        explanation: "Vertical integration involves controlling more supply chain stages.",
        module: 6
      },
      {
        id: 40,
        question: "What does FCR measure in financial analysis?",
        options: ["Feed cost ratio", "Feed conversion efficiency", "Financial cost return", "Fixed cost ratio"],
        correctAnswer: 1,
        explanation: "FCR measures feed efficiency - crucial for financial success.",
        module: 6
      }
    ]
  }
};

export default aquacultureCertificateCourse;

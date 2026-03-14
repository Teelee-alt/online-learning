export const greenEnergyCertificateCourse = {
  id: "green-energy-certificate",
  title: "Green Energy (Certificate)",
  description: "Master the fundamentals of renewable energy technologies, sustainability principles, and clean energy systems through practical, easy-to-understand modules designed for beginners.",
  duration: "6 weeks",
  timeCommitment: "4-6 hours per week",
  price: 12,
  upgradePrice: 18,
  icon: "🌱",
  badge: "Certificate",
  
  modules: [
    {
      id: 1,
      title: "Energy Basics and Sustainability",
      content: `
## Understanding Energy Fundamentals

**Energy** is the ability to do work. Everything around us requires energy to function - from your phone charging to cars moving on the road. Energy comes in different forms that can change from one type to another.

**Renewable energy** comes from natural sources that are constantly replenished. Think of sunlight that keeps shining, wind that keeps blowing, and water that keeps flowing in rivers. These sources won't run out in our lifetime.

**Non-renewable energy** comes from sources that take millions of years to form and will eventually disappear. These include coal, oil, and natural gas. Once we use them up, they're gone forever.

### Why Green Energy Matters

Traditional energy sources create pollution when burned. This pollution affects our air quality, contributes to climate change, and can harm our health. Green energy provides cleaner alternatives that protect our environment.

**Sustainability** means meeting our current needs without compromising the ability of future generations to meet their own needs. Using green energy helps create a sustainable future where everyone has access to clean power.

### Basic Energy Principles

Energy follows some simple rules in nature:
- Energy cannot be created or destroyed, only changed from one form to another
- When energy changes form, some always becomes less useful (like heat escaping)
- The sun is our primary energy source - it powers wind, water cycles, and plant growth

**Energy efficiency** means using less energy to perform the same task. An energy-efficient light bulb gives the same brightness as a regular bulb but uses less electricity. This is often the simplest way to reduce energy use.

**Conservation** means reducing energy use by changing behaviors. Turning off lights when leaving a room or unplugging devices not in use are conservation habits. These small actions add up to big energy savings.
`,
      completed: false,
      quiz: [
        {
          id: 1,
          question: "What is the definition of renewable energy?",
          options: [
            "Energy from sources that won't run out in our lifetime",
            "Energy that costs nothing to produce",
            "Energy that doesn't need storage",
            "Energy only from solar panels"
          ],
          correctAnswer: 0,
          explanation: "Renewable energy comes from natural sources that are constantly replenished, like sunlight, wind, and flowing water."
        },
        {
          id: 2,
          question: "Which of these is a non-renewable energy source?",
          options: [
            "Coal",
            "Sunlight",
            "Wind",
            "Flowing water"
          ],
          correctAnswer: 0,
          explanation: "Coal is a non-renewable energy source because it takes millions of years to form and will eventually run out."
        },
        {
          id: 3,
          question: "What does sustainability mean in energy terms?",
          options: [
            "Meeting current needs without compromising future generations",
            "Using only the cheapest energy available",
            "Producing maximum energy regardless of cost",
            "Using energy only during daylight hours"
          ],
          correctAnswer: 0,
          explanation: "Sustainability means meeting our current energy needs while ensuring future generations can also meet their energy needs."
        },
        {
          id: 4,
          question: "What is the primary source of energy for our planet?",
          options: [
            "The sun",
            "Wind",
            "Coal reserves",
            "Ocean currents"
          ],
          correctAnswer: 0,
          explanation: "The sun is our primary energy source, powering wind patterns, water cycles, and plant growth through photosynthesis."
        },
        {
          id: 5,
          question: "What is the difference between energy efficiency and conservation?",
          options: [
            "Efficiency uses technology, conservation changes behavior",
            "Efficiency costs more, conservation costs less",
            "Efficiency is for homes, conservation is for businesses",
            "They mean exactly the same thing"
          ],
          correctAnswer: 0,
          explanation: "Energy efficiency uses technology to do the same work with less energy, while conservation involves changing behaviors to use less energy."
        },
        {
          id: 6,
          question: "What happens to energy according to basic energy principles?",
          options: [
            "It changes form but isn't created or destroyed",
            "It disappears when not used",
            "It only comes from power plants",
            "It can be created from nothing"
          ],
          correctAnswer: 0,
          explanation: "Energy follows the principle that it cannot be created or destroyed, only changed from one form to another."
        },
        {
          id: 7,
          question: "Why is green energy important for our health?",
          options: [
            "It reduces air pollution from burning fuels",
            "It makes electricity cheaper for everyone",
            "It requires less maintenance",
            "It works only during the day"
          ],
          correctAnswer: 0,
          explanation: "Green energy reduces air pollution that can cause breathing problems and other health issues associated with burning fossil fuels."
        },
        {
          id: 8,
          question: "Which action demonstrates energy conservation?",
          options: [
            "Turning off lights when leaving a room",
            "Installing solar panels",
            "Buying a new refrigerator",
            "Driving an electric car"
          ],
          correctAnswer: 0,
          explanation: "Turning off lights when leaving a room is an example of energy conservation through behavior change."
        },
        {
          id: 9,
          question: "What makes an energy source sustainable?",
          options: [
            "It can be used indefinitely without running out",
            "It is available everywhere in the world",
            "It requires no technology to harvest",
            "It produces no waste at all"
          ],
          correctAnswer: 0,
          explanation: "A sustainable energy source can be used indefinitely because it is constantly replenished by natural processes."
        },
        {
          id: 10,
          question: "What is a simple example of energy efficiency?",
          options: [
            "LED bulb using less power than incandescent",
            "Using a bicycle instead of a car",
            "Turning down the thermostat",
            "Taking shorter showers"
          ],
          correctAnswer: 0,
          explanation: "An LED bulb producing the same light while using less electricity is a clear example of energy efficiency through technology."
        },
        {
          id: 11,
          question: "What type of pollution do green energy sources typically avoid?",
          options: [
            "Air pollution from burning fuels",
            "Noise pollution from generators",
            "Light pollution from street lights",
            "Water pollution from factories"
          ],
          correctAnswer: 0,
          explanation: "Green energy sources typically avoid air pollution because they don't involve burning fossil fuels that release harmful gases."
        },
        {
          id: 12,
          question: "How does the sun contribute to renewable energy?",
          options: [
            "It powers multiple renewable sources indirectly",
            "It directly heats all buildings",
            "It stores energy in batteries",
            "It only works for solar panels"
          ],
          correctAnswer: 0,
          explanation: "The sun contributes to renewable energy by powering wind patterns, water cycles, and plant growth, in addition to direct solar energy."
        },
        {
          id: 13,
          question: "What characteristic do wind and sunlight share as energy sources?",
          options: [
            "They are constantly replenished naturally",
            "They work best at night",
            "They require expensive storage",
            "They produce constant power output"
          ],
          correctAnswer: 0,
          explanation: "Both wind and sunlight are constantly replenished by natural processes, making them renewable energy sources."
        },
        {
          id: 14,
          question: "What is the main advantage of renewable over non-renewable energy?",
          options: [
            "Won't run out in human timescales",
            "Always cheaper to produce",
            "Requires no maintenance",
            "Works in all locations equally"
          ],
          correctAnswer: 0,
          explanation: "The main advantage is that renewable energy sources won't run out in human timescales, unlike finite fossil fuels."
        },
        {
          id: 15,
          question: "Which statement about energy transformation is correct?",
          options: [
            "Energy changes form but total amount stays constant",
            "Energy disappears when converted to heat",
            "New energy is created during conversion",
            "Energy forms cannot change at all"
          ],
          correctAnswer: 0,
          explanation: "During energy transformation, the total amount of energy stays constant, though it changes from one form to another."
        },
        {
          id: 16,
          question: "What does 'future generations' refer to in sustainability?",
          options: [
            "People who will live after us",
            "People in other countries",
            "Only our children",
            "People in cities only"
          ],
          correctAnswer: 0,
          explanation: "In sustainability, 'future generations' refers to all people who will live after us and need access to resources."
        },
        {
          id: 17,
          question: "How can individuals contribute to green energy adoption?",
          options: [
            "Through conservation and efficient choices",
            "By building power plants",
            "Through international treaties",
            "By inventing new technologies"
          ],
          correctAnswer: 0,
          explanation: "Individuals can contribute through daily conservation habits and choosing energy-efficient appliances and options."
        },
        {
          id: 18,
          question: "What is the relationship between sun and wind energy?",
          options: [
            "Sun heats air to create wind",
            "Wind creates sunlight",
            "They work independently",
            "Sun stores wind energy"
          ],
          correctAnswer: 0,
          explanation: "The sun heats air unevenly, creating temperature differences that cause air movement, which we harness as wind energy."
        },
        {
          id: 19,
          question: "Why are non-renewable sources called 'non-renewable'?",
          options: [
            "They take millions of years to form",
            "They cannot be used in renewable systems",
            "They are difficult to find",
            "They produce less energy"
          ],
          correctAnswer: 0,
          explanation: "They're called non-renewable because they take millions of years to form naturally, so we use them much faster than they can be replaced."
        },
        {
          id: 20,
          question: "What simple principle guides energy use improvement?",
          options: [
            "Do the same with less energy",
            "Use energy only when necessary",
            "Store all energy before use",
            "Generate energy locally only"
          ],
          correctAnswer: 0,
          explanation: "The guiding principle is to accomplish the same tasks or get the same benefits while using less energy overall."
        }
      ]
    },
    {
      id: 2,
      title: "Solar Energy Systems",
      content: `
## How Solar Energy Works

**Solar energy** comes directly from the sun's rays. When sunlight reaches the Earth, it brings energy that we can capture and convert into useful forms like electricity and heat.

**Photovoltaic (PV) cells** are the building blocks of solar panels. These special cells convert sunlight directly into electricity. When sunlight hits these cells, it knocks electrons loose, creating an electrical current. Many cells connected together make a solar panel.

**Solar thermal systems** work differently. Instead of making electricity, they capture the sun's heat directly. These systems use mirrors or collectors to concentrate sunlight, heating water or other fluids. The heated fluid can then be used for warm water, heating buildings, or even generating electricity through steam turbines.

### Types of Solar Systems

**Rooftop solar systems** are installed on building roofs. These are common for homes and businesses. They generate electricity right where it's needed, reducing the amount of power needed from the grid.

**Solar farms** are large installations with many solar panels spread over big areas of land. These feed electricity directly into the power grid, supplying energy to many homes and businesses from a central location.

**Off-grid solar systems** operate independently from the main electricity grid. These systems include batteries to store energy for use when the sun isn't shining. They're useful in remote areas where connecting to the grid is difficult or expensive.

### Solar Energy Advantages

Solar energy has several clear benefits. It produces no pollution while generating electricity. Once installed, sunlight is free, so operating costs are low. Solar systems require minimal maintenance - mostly just keeping panels clean. They can be installed at various scales, from small home systems to large power plants.

**Net metering** is a system where solar panel owners can send excess electricity they generate back to the grid. The electric meter runs backward when this happens, giving credit for the power supplied. This makes solar systems more economical for homeowners.

**Solar potential** varies by location. Areas with more sunshine hours naturally get more solar energy. However, even cloudy regions can use solar power effectively - modern panels can capture diffuse sunlight through clouds, though with reduced efficiency.
`,
      completed: false,
      quiz: [
        {
          id: 1,
          question: "What do photovoltaic cells convert sunlight into?",
          options: [
            "Electricity",
            "Heat",
            "Steam",
            "Mechanical energy"
          ],
          correctAnswer: 0,
          explanation: "Photovoltaic cells convert sunlight directly into electricity through the photovoltaic effect."
        },
        {
          id: 2,
          question: "How do solar thermal systems differ from photovoltaic systems?",
          options: [
            "They capture heat instead of making electricity directly",
            "They work only at night",
            "They don't use sunlight",
            "They are less efficient"
          ],
          correctAnswer: 0,
          explanation: "Solar thermal systems capture the sun's heat to warm fluids, while photovoltaic systems convert sunlight directly to electricity."
        },
        {
          id: 3,
          question: "Where are rooftop solar systems typically installed?",
          options: [
            "On building roofs",
            "In underground bunkers",
            "Floating on water",
            "Inside attics"
          ],
          correctAnswer: 0,
          explanation: "Rooftop solar systems are installed on building roofs to capture maximum sunlight."
        },
        {
          id: 4,
          question: "What is the purpose of batteries in off-grid solar systems?",
          options: [
            "Store energy for use when sun isn't shining",
            "Increase electricity production",
            "Reduce system cost",
            "Convert DC to AC power"
          ],
          correctAnswer: 0,
          explanation: "Batteries store solar energy for use during nighttime or cloudy days when solar panels aren't producing electricity."
        },
        {
          id: 5,
          question: "What major advantage does solar energy have over fossil fuels?",
          options: [
            "Produces no pollution during operation",
            "Works better at night",
            "Requires no maintenance",
            "Is always cheaper"
          ],
          correctAnswer: 0,
          explanation: "Solar energy produces no air pollution or greenhouse gases during operation, unlike fossil fuels."
        },
        {
          id: 6,
          question: "What does net metering allow solar panel owners to do?",
          options: [
            "Send excess electricity back to the grid",
            "Get free installation",
            "Use more electricity at night",
            "Share power with neighbors"
          ],
          correctAnswer: 0,
          explanation: "Net metering allows solar panel owners to send excess electricity they generate back to the grid for credit."
        },
        {
          id: 7,
          question: "What are solar farms primarily used for?",
          options: [
            "Feeding electricity into the power grid",
            "Heating single homes",
            "Powering small devices",
            "Storing solar energy"
          ],
          correctAnswer: 0,
          explanation: "Solar farms are large installations designed to feed electricity directly into the main power grid."
        },
        {
          id: 8,
          question: "What is the main operating cost for solar systems after installation?",
          options: [
            "Minimal maintenance",
            "Fuel costs",
            "Water usage",
            "Professional operators"
          ],
          correctAnswer: 0,
          explanation: "After installation, solar systems have minimal operating costs since sunlight is free and maintenance requirements are low."
        },
        {
          id: 9,
          question: "How can solar panels work in cloudy regions?",
          options: [
            "Capture diffuse sunlight through clouds",
            "Only work during brief sunny periods",
            "Require artificial light",
            "Don't work at all in clouds"
          ],
          correctAnswer: 0,
          explanation: "Modern solar panels can capture diffuse sunlight that penetrates clouds, though with reduced efficiency compared to direct sunlight."
        },
        {
          id: 10,
          question: "What happens in the photovoltaic effect?",
          options: [
            "Sunlight knocks electrons loose to create current",
            "Panels absorb heat from sun",
            "Sunlight is reflected away",
            "Cells store sunlight chemically"
          ],
          correctAnswer: 0,
          explanation: "In the photovoltaic effect, sunlight knocks electrons loose in semiconductor materials, creating an electrical current."
        },
        {
          id: 11,
          question: "What do many photovoltaic cells connected together create?",
          options: [
            "A solar panel",
            "A solar farm",
            "A battery system",
            "A thermal collector"
          ],
          correctAnswer: 0,
          explanation: "Many photovoltaic cells connected together electrically create a solar panel."
        },
        {
          id: 12,
          question: "What is heated in solar thermal systems?",
          options: [
            "Water or other fluids",
            "The solar panels themselves",
            "Batteries for storage",
            "Nearby air only"
          ],
          correctAnswer: 0,
          explanation: "Solar thermal systems use sunlight to heat water or other fluids that can then be used for various purposes."
        },
        {
          id: 13,
          question: "Where are off-grid solar systems particularly useful?",
          options: [
            "Remote areas without grid access",
            "Large city centers",
            "Industrial zones only",
            "Government buildings"
          ],
          correctAnswer: 0,
          explanation: "Off-grid systems are especially useful in remote areas where connecting to the main electricity grid is difficult or expensive."
        },
        {
          id: 14,
          question: "What does solar potential refer to?",
          options: [
            "Amount of solar energy available in a location",
            "Future solar technology",
            "Cost of solar panels",
            "Size of solar farms"
          ],
          correctAnswer: 0,
          explanation: "Solar potential refers to the amount of solar energy available in a specific location based on sunlight hours and intensity."
        },
        {
          id: 15,
          question: "What is a key maintenance task for solar panels?",
          options: [
            "Keeping panels clean",
            "Replacing cells monthly",
            "Adding special fluids",
            "Repositioning daily"
          ],
          correctAnswer: 0,
          explanation: "Keeping solar panels clean is important maintenance to ensure maximum sunlight absorption."
        },
        {
          id: 16,
          question: "How does net metering affect electric meters?",
          options: [
            "They can run backward when sending power to grid",
            "They measure only solar production",
            "They stop working with solar",
            "They must be replaced entirely"
          ],
          correctAnswer: 0,
          explanation: "With net metering, electric meters can run backward when solar systems send excess electricity to the grid."
        },
        {
          id: 17,
          question: "What scale can solar systems be installed at?",
          options: [
            "From small homes to large power plants",
            "Only for single homes",
            "Only for large businesses",
            "Only in designated solar zones"
          ],
          correctAnswer: 0,
          explanation: "Solar systems can be installed at various scales, from small residential systems to utility-scale power plants."
        },
        {
          id: 18,
          question: "What happens to solar energy production at night?",
          options: [
            "It stops without sunlight",
            "It increases using stored heat",
            "It continues using moonlight",
            "It switches to wind power"
          ],
          correctAnswer: 0,
          explanation: "Solar energy production stops at night when there's no sunlight, which is why storage or grid connection is important."
        },
        {
          id: 19,
          question: "What makes sunlight 'free' for solar systems?",
          options: [
            "No ongoing cost to access sunlight",
            "Panels don't need sunlight",
            "Government pays for sunlight",
            "Sunlight is always available"
          ],
          correctAnswer: 0,
          explanation: "Sunlight is 'free' because there's no ongoing cost to access it once solar equipment is installed."
        },
        {
          id: 20,
          question: "What do mirrors do in concentrated solar thermal systems?",
          options: [
            "Focus sunlight onto a small area",
            "Cool the solar collectors",
            "Store solar energy",
            "Generate electricity directly"
          ],
          correctAnswer: 0,
          explanation: "Mirrors in concentrated solar thermal systems focus sunlight onto a small area to create intense heat."
        }
      ]
    },
    {
      id: 3,
      title: "Wind Power Technology",
      content: `
## Capturing the Wind's Energy

**Wind energy** comes from the natural movement of air across the Earth's surface. When wind blows, it contains kinetic energy - energy of motion - that we can capture and convert into electricity.

**Wind turbines** are the machines that capture wind energy. They work on a simple principle: wind turns the blades, which spin a shaft connected to a generator that produces electricity. The faster the wind blows, the more electricity a turbine can generate.

**Wind farms** are collections of many wind turbines working together. These can be located on land (onshore) or in bodies of water (offshore). Offshore wind farms often capture stronger, more consistent winds but cost more to build and maintain.

### How Wind Turbines Work

A typical wind turbine has three main parts: the tower, the blades, and the nacelle. The **tower** raises the turbine high above the ground where winds are stronger and more consistent. The **blades** capture the wind's energy - most modern turbines have three blades for balance and efficiency. The **nacelle** sits atop the tower and contains the generator and other machinery.

When wind hits the blades, they turn like an airplane propeller. This rotation spins a shaft inside the nacelle. The spinning shaft turns magnets inside copper coils in the generator, creating electricity through electromagnetic induction.

**Wind speed** greatly affects energy production. Most turbines need wind speeds around 10-15 mph to start generating electricity. They reach maximum output around 30-35 mph. If winds get too strong (usually above 55 mph), turbines automatically shut down to prevent damage.

### Advantages of Wind Power

Wind energy offers several benefits. It produces no air or water pollution during operation. Wind is a free fuel source once turbines are installed. Modern turbines have become much more efficient and reliable. Wind farms can share land with farming or grazing, allowing dual use of the land.

**Capacity factor** measures how much energy a turbine actually produces compared to its maximum possible output. Wind turbines typically have capacity factors between 30-50%, meaning they produce electricity 30-50% of the time at full capacity. This is because wind speeds vary.

**Grid integration** helps manage wind's variability. When many wind farms are connected over a large area, the wind is always blowing somewhere. Energy storage systems and backup power plants help ensure reliable electricity even when local wind conditions change.
`,
      completed: false,
      quiz: [
        {
          id: 1,
          question: "What type of energy in wind do turbines capture?",
          options: [
            "Kinetic energy (energy of motion)",
            "Heat energy",
            "Chemical energy",
            "Nuclear energy"
          ],
          correctAnswer: 0,
          explanation: "Wind turbines capture the kinetic energy of moving air and convert it into electrical energy."
        },
        {
          id: 2,
          question: "What are collections of wind turbines called?",
          options: [
            "Wind farms",
            "Wind parks",
            "Turbine clusters",
            "Wind stations"
          ],
          correctAnswer: 0,
          explanation: "Collections of wind turbines working together are called wind farms."
        },
        {
          id: 3,
          question: "What is the nacelle in a wind turbine?",
          options: [
            "The housing containing generator and machinery",
            "The base of the tower",
            "The blade support structure",
            "The underground foundation"
          ],
          correctAnswer: 0,
          explanation: "The nacelle is the housing at the top of the tower that contains the generator, gearbox, and other machinery."
        },
        {
          id: 4,
          question: "Why are wind turbines placed on tall towers?",
          options: [
            "To reach stronger, more consistent winds",
            "To be more visible",
            "To avoid animal interference",
            "To store more energy"
          ],
          correctAnswer: 0,
          explanation: "Tall towers place turbines higher above ground where winds are stronger and more consistent due to less surface friction."
        },
        {
          id: 5,
          question: "How do most modern wind turbine generators create electricity?",
          options: [
            "Spinning magnets inside copper coils",
            "Burning wind to create steam",
            "Chemical reactions with air",
            "Solar panels on blades"
          ],
          correctAnswer: 0,
          explanation: "Generators create electricity through electromagnetic induction - spinning magnets inside copper coils generates electrical current."
        },
        {
          id: 6,
          question: "What wind speed do most turbines need to start generating?",
          options: [
            "10-15 mph",
            "5-8 mph",
            "20-25 mph",
            "35-40 mph"
          ],
          correctAnswer: 0,
          explanation: "Most wind turbines need wind speeds of about 10-15 mph to start generating electricity efficiently."
        },
        {
          id: 7,
          question: "What advantage do offshore wind farms have?",
          options: [
            "Stronger, more consistent winds",
            "Lower installation costs",
            "Easier maintenance access",
            "Smaller turbine size"
          ],
          correctAnswer: 0,
          explanation: "Offshore wind farms typically access stronger and more consistent winds than onshore locations."
        },
        {
          id: 8,
          question: "What is a capacity factor in wind energy?",
          options: [
            "Actual output compared to maximum possible",
            "Maximum wind speed handled",
            "Number of turbines in a farm",
            "Height of turbine towers"
          ],
          correctAnswer: 0,
          explanation: "Capacity factor measures actual energy production compared to maximum possible output if the turbine ran at full capacity all the time."
        },
        {
          id: 9,
          question: "What do wind turbines do in very high winds?",
          options: [
            "Automatically shut down for safety",
            "Generate more electricity",
            "Change blade direction",
            "Lower their height"
          ],
          correctAnswer: 0,
          explanation: "Wind turbines automatically shut down in very high winds (usually above 55 mph) to prevent damage to the equipment."
        },
        {
          id: 10,
          question: "How can wind farms share land with other uses?",
          options: [
            "Farming or grazing between turbines",
            "Building houses under turbines",
            "Placing roads on turbine towers",
            "Storing crops inside turbines"
          ],
          correctAnswer: 0,
          explanation: "Wind farms can share land with agriculture - crops can be grown or animals can graze between and around the turbines."
        },
        {
          id: 11,
          question: "What is the typical blade count on modern wind turbines?",
          options: [
            "Three blades",
            "Two blades",
            "Four blades",
            "Five blades"
          ],
          correctAnswer: 0,
          explanation: "Most modern wind turbines have three blades, which provides good balance between efficiency, cost, and stability."
        },
        {
          id: 12,
          question: "What helps manage wind energy's variability?",
          options: [
            "Grid integration over large areas",
            "Building taller towers only",
            "Using fewer turbines",
            "Operating only at night"
          ],
          correctAnswer: 0,
          explanation: "Connecting wind farms over large geographic areas through the electrical grid helps manage variability since wind is always blowing somewhere."
        },
        {
          id: 13,
          question: "What type of pollution does wind energy avoid?",
          options: [
            "Air and water pollution during operation",
            "Noise pollution completely",
            "All forms of pollution",
            "Visual pollution only"
          ],
          correctAnswer: 0,
          explanation: "Wind energy produces no air or water pollution during operation, unlike fossil fuel power plants."
        },
        {
          id: 14,
          question: "What spins inside a wind turbine generator?",
          options: [
            "Magnets inside copper coils",
            "Turbine blades themselves",
            "Water through pipes",
            "Solar panels"
          ],
          correctAnswer: 0,
          explanation: "Inside the generator, magnets spin inside copper coils to create electricity through electromagnetic induction."
        },
        {
          id: 15,
          question: "What is the 'fuel' for wind turbines?",
          options: [
            "Wind - which is free",
            "Natural gas backup",
            "Diesel for startup",
            "Solar assistance"
          ],
          correctAnswer: 0,
          explanation: "Wind is the 'fuel' for wind turbines, and it's free once the turbine is installed and operating."
        },
        {
          id: 16,
          question: "What happens when wind turns turbine blades?",
          options: [
            "They spin a shaft connected to generator",
            "They store wind in batteries",
            "They create heat directly",
            "They pump water uphill"
          ],
          correctAnswer: 0,
          explanation: "When wind turns the blades, they spin a shaft that connects to the generator to produce electricity."
        },
        {
          id: 17,
          question: "What range is typical for wind turbine capacity factors?",
          options: [
            "30-50%",
            "10-20%",
            "60-80%",
            "90-100%"
          ],
          correctAnswer: 0,
          explanation: "Wind turbines typically have capacity factors between 30-50%, meaning they produce at full capacity 30-50% of the time."
        },
        {
          id: 18,
          question: "Why do offshore wind farms cost more?",
          options: [
            "Installation and maintenance in water",
            "Larger turbine size required",
            "More expensive materials",
            "Shorter lifespan"
          ],
          correctAnswer: 0,
          explanation: "Offshore wind farms cost more due to the challenges of installing and maintaining equipment in marine environments."
        },
        {
          id: 19,
          question: "What principle allows generators to make electricity?",
          options: [
            "Electromagnetic induction",
            "Photovoltaic effect",
            "Thermal expansion",
            "Chemical combustion"
          ],
          correctAnswer: 0,
          explanation: "Generators use electromagnetic induction - moving magnets near copper coils creates electrical current."
        },
        {
          id: 20,
          question: "What helps ensure reliable electricity from variable wind?",
          options: [
            "Energy storage and backup plants",
            "Only using wind at night",
            "Constant blade adjustments",
            "Building near cities only"
          ],
          correctAnswer: 0,
          explanation: "Energy storage systems and backup power plants help ensure reliable electricity supply despite wind variability."
        }
      ]
    },
    {
      id: 4,
      title: "Hydropower and Water Energy",
      content: `
## Harnessing Water's Power

**Hydropower** uses flowing water to generate electricity. It's one of the oldest and most established forms of renewable energy. People have used water power for centuries - from ancient water wheels grinding grain to modern hydroelectric dams powering cities.

The basic principle is simple: flowing water has kinetic energy. When we capture this energy and use it to turn turbines, we can generate electricity. The amount of energy depends on both the water's flow rate (how much water is moving) and its head (how far it falls).

**Hydroelectric dams** are the most common type of large hydropower. They work by storing river water in reservoirs behind dams. When electricity is needed, gates open to release water. The falling water spins turbines connected to generators. After passing through turbines, water continues downstream.

### Types of Hydropower Systems

**Run-of-river systems** don't use large dams or reservoirs. Instead, they divert a portion of a river's flow through a channel or pipe to a turbine, then return the water to the river downstream. These have less environmental impact than large dams but provide less consistent power.

**Pumped storage** acts like a giant battery for the electrical grid. During times of low electricity demand (like at night), excess power is used to pump water uphill to a higher reservoir. When demand is high, the water is released back down through turbines to generate electricity. This helps balance supply and demand on the grid.

**Tidal energy** captures energy from ocean tides. Special turbines are placed in areas with strong tidal currents. As tides rise and fall twice daily, water flows through these turbines. Tidal power is very predictable since tide schedules are known years in advance.

### Advantages and Considerations

Hydropower provides several benefits. It can generate electricity constantly (base load power), unlike solar and wind which vary with weather. Hydro plants can quickly adjust output to match changing electricity demand. Once built, operating costs are relatively low, and the 'fuel' (flowing water) is free.

**Environmental considerations** are important with hydropower. Large dams can disrupt river ecosystems, affect fish migration, and displace communities. Modern approaches try to minimize these impacts through better design and fish ladders that help migrating fish pass dams safely.

**Small-scale hydropower** systems can provide electricity for individual homes, farms, or small communities, especially in remote areas with suitable water resources. These systems are much simpler than large dams and have minimal environmental impact.
`,
      completed: false,
      quiz: [
        {
          id: 1,
          question: "What two factors determine hydropower energy amount?",
          options: [
            "Flow rate and water head (fall distance)",
            "Water temperature and color",
            "River width and depth",
            "Time of day and season"
          ],
          correctAnswer: 0,
          explanation: "Hydropower energy depends on both the flow rate (volume of water) and the head (vertical distance the water falls)."
        },
        {
          id: 2,
          question: "How do hydroelectric dams generate electricity?",
          options: [
            "Falling water spins turbines connected to generators",
            "Heating water to create steam",
            "Chemical reactions with water",
            "Solar panels on dam surfaces"
          ],
          correctAnswer: 0,
          explanation: "Hydroelectric dams release stored water that falls and spins turbines, which are connected to generators that produce electricity."
        },
        {
          id: 3,
          question: "What is a run-of-river hydropower system?",
          options: [
            "Diverts portion of river flow without large dam",
            "Uses only rainwater collection",
            "Requires ocean water only",
            "Pumps water uphill constantly"
          ],
          correctAnswer: 0,
          explanation: "Run-of-river systems divert a portion of a river's flow through turbines without requiring large dams or reservoirs."
        },
        {
          id: 4,
          question: "How does pumped storage work?",
          options: [
            "Pumps water uphill at night, releases it for power when needed",
            "Stores electricity in batteries",
            "Pumps water out of rivers constantly",
            "Creates artificial rivers for power"
          ],
          correctAnswer: 0,
          explanation: "Pumped storage pumps water to a higher reservoir during low demand, then releases it to generate power during high demand periods."
        },
        {
          id: 5,
          question: "What makes tidal energy predictable?",
          options: [
            "Tide schedules are known years in advance",
            "Ocean temperature is constant",
            "Moon phases don't change",
            "Wind patterns are regular"
          ],
          correctAnswer: 0,
          explanation: "Tidal energy is predictable because tide schedules, driven by moon and sun positions, can be calculated years in advance."
        },
        {
          id: 6,
          question: "What is a key advantage of hydropower over solar/wind?",
          options: [
            "Can provide constant base load power",
            "Works better in deserts",
            "Requires less maintenance",
            "Is always cheaper to build"
          ],
          correctAnswer: 0,
          explanation: "Hydropower can provide constant, reliable base load power, while solar and wind are intermittent depending on weather."
        },
        {
          id: 7,
          question: "What environmental issue can large dams cause?",
          options: [
            "Disrupt river ecosystems and fish migration",
            "Increase air pollution",
            "Create radioactive waste",
            "Reduce sunlight to areas"
          ],
          correctAnswer: 0,
          explanation: "Large dams can disrupt river ecosystems, affect fish migration patterns, and sometimes displace communities."
        },
        {
          id: 8,
          question: "What are fish ladders designed to do?",
          options: [
            "Help migrating fish pass dams safely",
            "Attract fish to turbines",
            "Measure fish populations",
            "Clean fish before migration"
          ],
          correctAnswer: 0,
          explanation: "Fish ladders are structures that help migrating fish navigate around dams to reach their spawning grounds."
        },
        {
          id: 9,
          question: "How can hydropower help balance electricity grids?",
          options: [
            "Quickly adjust output to match demand",
            "Store electricity in water",
            "Generate only at peak times",
            "Replace all other power sources"
          ],
          correctAnswer: 0,
          explanation: "Hydropower plants can quickly increase or decrease electricity generation to match changing grid demand."
        },
        {
          id: 10,
          question: "Where is small-scale hydropower particularly useful?",
          options: [
            "Remote areas with suitable water resources",
            "Large city centers",
            "Desert regions",
            "Coastal cities only"
          ],
          correctAnswer: 0,
          explanation: "Small-scale hydropower is useful in remote areas with flowing water where grid connection is difficult or expensive."
        },
        {
          id: 11,
          question: "What is the 'head' in hydropower?",
          options: [
            "Vertical distance water falls",
            "Width of the dam",
            "Depth of reservoir",
            "Size of turbine"
          ],
          correctAnswer: 0,
          explanation: "Head refers to the vertical distance that water falls from the reservoir to the turbine - greater head means more energy."
        },
        {
          id: 12,
          question: "What happens to water after passing through turbines?",
          options: [
            "Continues downstream in river",
            "Is stored in separate reservoir",
            "Evaporates immediately",
            "Becomes drinking water"
          ],
          correctAnswer: 0,
          explanation: "After passing through turbines, water continues downstream in the river - it's not consumed in the process."
        },
        {
          id: 13,
          question: "What is a reservoir's purpose in hydropower?",
          options: [
            "Store water for controlled release",
            "Provide recreational fishing",
            "Cool the turbines",
            "Collect rainwater only"
          ],
          correctAnswer: 0,
          explanation: "Reservoirs store water so it can be released through turbines when electricity is needed, not just when nature provides flow."
        },
        {
          id: 14,
          question: "Why is hydropower considered renewable?",
          options: [
            "Water cycle constantly replenishes sources",
            "Dams last forever",
            "Rivers never change course",
            "Ocean provides infinite water"
          ],
          correctAnswer: 0,
          explanation: "Hydropower is renewable because the water cycle (evaporation, precipitation, flow) constantly replenishes the water sources."
        },
        {
          id: 15,
          question: "What type of power can hydropower provide to grids?",
          options: [
            "Base load and peaking power",
            "Only emergency backup",
            "Nighttime power only",
            "Summer cooling only"
          ],
          correctAnswer: 0,
          explanation: "Hydropower can provide both constant base load power and peaking power during times of high electricity demand."
        },
        {
          id: 16,
          question: "How do tidal turbines capture energy?",
          options: [
            "From water movement during tide changes",
            "From wave height differences",
            "From ocean temperature changes",
            "From salt concentration"
          ],
          correctAnswer: 0,
          explanation: "Tidal turbines capture energy from the movement of water as tides rise and fall twice daily."
        },
        {
          id: 17,
          question: "What is a benefit of pumped storage for grids?",
          options: [
            "Acts like battery to store excess energy",
            "Generates more than conventional hydro",
            "Requires no water source",
            "Works without turbines"
          ],
          correctAnswer: 0,
          explanation: "Pumped storage acts like a giant battery, storing energy by pumping water uphill and releasing it when needed."
        },
        {
          id: 18,
          question: "What historical use preceded modern hydropower?",
          options: [
            "Water wheels for grinding grain",
            "Steam engines using water",
            "Windmills near rivers",
            "Solar water heaters"
          ],
          correctAnswer: 0,
          explanation: "Water wheels used for grinding grain and other mechanical work were historical predecessors to modern hydropower."
        },
        {
          id: 19,
          question: "What makes hydropower operating costs relatively low?",
          options: [
            "Water fuel is free once system built",
            "No maintenance ever needed",
            "Automatic operation only",
            "Government covers all costs"
          ],
          correctAnswer: 0,
          explanation: "Operating costs are relatively low because the 'fuel' (flowing water) is free once the hydroelectric facility is built."
        },
        {
          id: 20,
          question: "How can hydropower environmental impacts be reduced?",
          options: [
            "Better design and fish passage systems",
            "Building only small dams",
            "Using ocean water only",
            "Operating only seasonally"
          ],
          correctAnswer: 0,
          explanation: "Modern designs, fish ladders, and better planning can reduce hydropower's environmental impacts."
        }
      ]
    },
    {
      id: 5,
      title: "Geothermal and Biomass Energy",
      content: `
## Earth's Heat and Organic Energy

**Geothermal energy** comes from heat within the Earth. Our planet contains tremendous heat from both its original formation and ongoing radioactive decay of minerals deep underground. This heat naturally flows outward, and we can capture it for practical use.

**Geothermal power plants** work by tapping into underground reservoirs of hot water or steam. Wells are drilled into these reservoirs, bringing the hot fluid to the surface. The heat energy is used to generate electricity, often by turning it into steam that spins turbines. After use, the cooled water is typically returned underground to be reheated.

**Direct geothermal use** involves using Earth's heat directly without making electricity. This includes heating buildings through geothermal heat pumps, heating greenhouses for agriculture, drying crops, and heating water for swimming pools or district heating systems.

### Biomass Energy Sources

**Biomass energy** comes from organic materials - recently living plants and animals or their byproducts. Unlike fossil fuels that took millions of years to form, biomass uses materials that are part of the current carbon cycle. When burned or processed, biomass releases energy that originally came from the sun through photosynthesis.

**Wood and agricultural waste** are common biomass fuels. Firewood has heated homes for millennia. Modern biomass systems also use agricultural residues like corn stalks, rice husks, and nut shells. These materials would often be waste products, so using them for energy provides additional value.

**Biogas** is produced when organic matter breaks down without oxygen (anaerobic digestion). This process happens naturally in landfills and can be controlled in special digesters. Biogas is mostly methane, similar to natural gas, and can be burned for heat or electricity. The remaining material makes excellent fertilizer.

### Advantages and Applications

Geothermal energy offers constant, reliable power regardless of weather or time of day. Geothermal plants have small land footprints compared to other power sources. They produce minimal air emissions when properly managed.

Biomass can provide base load power like fossil fuels but with renewable materials. It can use waste products that might otherwise create disposal problems. Modern biomass systems include pollution controls to minimize emissions.

**Combined systems** can be particularly effective. Some facilities use geothermal heat for industrial processes while generating electricity. Others combine biomass with other renewables - like using solar to grow biomass crops more efficiently.
`,
      completed: false,
      quiz: [
        {
          id: 1,
          question: "Where does geothermal energy come from?",
          options: [
            "Heat within the Earth",
            "Sunlight hitting ground",
            "Burning underground fuels",
            "Ocean temperature differences"
          ],
          correctAnswer: 0,
          explanation: "Geothermal energy comes from heat within the Earth, from both original formation and ongoing radioactive decay."
        },
        {
          id: 2,
          question: "What do geothermal power plants tap into?",
          options: [
            "Underground reservoirs of hot water/steam",
            "Surface hot springs only",
            "Volcano lava directly",
            "Underground coal seams"
          ],
          correctAnswer: 0,
          explanation: "Geothermal power plants tap into underground reservoirs of hot water or steam through drilled wells."
        },
        {
          id: 3,
          question: "What is direct geothermal use?",
          options: [
            "Using Earth's heat directly without making electricity",
            "Burning geothermal fuels",
            "Converting heat to light",
            "Storing geothermal energy"
          ],
          correctAnswer: 0,
          explanation: "Direct geothermal use involves using Earth's heat directly for purposes like building heating without first converting to electricity."
        },
        {
          id: 4,
          question: "What materials provide biomass energy?",
          options: [
            "Recently living plants and animals",
            "Ancient fossilized plants",
            "Rocks and minerals",
            "Synthetic materials"
          ],
          correctAnswer: 0,
          explanation: "Biomass energy comes from recently living organic materials - plants, animals, and their byproducts."
        },
        {
          id: 5,
          question: "How is biogas produced?",
          options: [
            "Organic matter breaking down without oxygen",
            "Burning wood efficiently",
            "Heating biomass under pressure",
            "Mixing biomass with chemicals"
          ],
          correctAnswer: 0,
          explanation: "Biogas is produced through anaerobic digestion - organic matter breaking down without oxygen, producing methane gas."
        },
        {
          id: 6,
          question: "What is a geothermal heat pump?",
          options: [
            "System using ground temperature to heat/cool buildings",
            "Pump that moves geothermal water",
            "Device measuring Earth's heat",
            "Tool for drilling geothermal wells"
          ],
          correctAnswer: 0,
          explanation: "Geothermal heat pumps use the relatively constant temperature of the ground to efficiently heat and cool buildings."
        },
        {
          id: 7,
          question: "What common biomass fuel has been used for millennia?",
          options: [
            "Firewood",
            "Corn ethanol",
            "Animal fats",
            "Agricultural waste"
          ],
          correctAnswer: 0,
          explanation: "Firewood has been used as a biomass fuel for heating and cooking for thousands of years."
        },
        {
          id: 8,
          question: "What happens to water after geothermal electricity generation?",
          options: [
            "Often returned underground to be reheated",
            "Released into rivers",
            "Used for drinking water",
            "Evaporated into air"
          ],
          correctAnswer: 0,
          explanation: "After use in geothermal plants, water is typically returned underground where Earth's heat reheats it naturally."
        },
        {
          id: 9,
          question: "What is a key advantage of geothermal power?",
          options: [
            "Provides constant, reliable power",
            "Works everywhere equally",
            "Requires no technology",
            "Is always the cheapest"
          ],
          correctAnswer: 0,
          explanation: "Geothermal provides constant, reliable power regardless of weather or time of day, unlike solar and wind."
        },
        {
          id: 10,
          question: "What agricultural products can be biomass fuel?",
          options: [
            "Crop residues like stalks and husks",
            "Only food crops themselves",
            "Fertilizers and pesticides",
            "Farm machinery parts"
          ],
          correctAnswer: 0,
          explanation: "Agricultural residues like corn stalks, rice husks, and nut shells can be used as biomass fuel."
        },
        {
          id: 11,
          question: "What two sources create Earth's internal heat?",
          options: [
            "Original formation and radioactive decay",
            "Sunlight absorption and wind friction",
            "Ocean currents and tidal forces",
            "Volcanic eruptions only"
          ],
          correctAnswer: 0,
          explanation: "Earth's internal heat comes from both its original formation billions of years ago and ongoing radioactive decay of minerals."
        },
        {
          id: 12,
          question: "How is biomass part of the carbon cycle?",
          options: [
            "Uses recently captured carbon from atmosphere",
            "Stores carbon permanently",
            "Creates new carbon atoms",
            "Destroys carbon through use"
          ],
          correctAnswer: 0,
          explanation: "Biomass uses carbon that plants recently captured from the atmosphere through photosynthesis, part of the natural carbon cycle."
        },
        {
          id: 13,
          question: "What is a common direct use of geothermal energy?",
          options: [
            "Heating buildings and greenhouses",
            "Powering vehicles directly",
            "Charging phones",
            "Lighting streets"
          ],
          correctAnswer: 0,
          explanation: "Direct geothermal uses include heating buildings, greenhouses, and water for various purposes without electricity generation."
        },
        {
          id: 14,
          question: "Where does biogas naturally form?",
          options: [
            "Landfills and wetlands",
            "Desert areas",
            "Mountain tops",
            "Ocean surfaces"
          ],
          correctAnswer: 0,
          explanation: "Biogas naturally forms in landfills and wetlands where organic matter decomposes without oxygen."
        },
        {
          id: 15,
          question: "What remains after biogas production?",
          options: [
            "Nutrient-rich fertilizer",
            "Toxic waste material",
            "Pure water only",
            "Nothing remains"
          ],
          correctAnswer: 0,
          explanation: "After biogas production through anaerobic digestion, the remaining material makes excellent, nutrient-rich fertilizer."
        },
        {
          id: 16,
          question: "Why do geothermal plants have small land footprints?",
          options: [
            "Most infrastructure is underground",
            "They don't need access roads",
            "Buildings are very small",
            "They share land with farms"
          ],
          correctAnswer: 0,
          explanation: "Geothermal plants have small surface footprints because wells and much infrastructure are underground."
        },
        {
          id: 17,
          question: "What can biomass help manage?",
          options: [
            "Waste products from agriculture/forestry",
            "Excess solar energy",
            "Wind variability",
            "Geothermal water disposal"
          ],
          correctAnswer: 0,
          explanation: "Biomass can use waste products from agriculture and forestry that might otherwise create disposal challenges."
        },
        {
          id: 18,
          question: "How do geothermal heat pumps work in summer?",
          options: [
            "Move heat from building to cooler ground",
            "Pump cold water from wells",
            "Generate electricity for cooling",
            "Reflect sunlight away"
          ],
          correctAnswer: 0,
          explanation: "In summer, geothermal heat pumps move heat from buildings into the cooler ground for efficient cooling."
        },
        {
          id: 19,
          question: "What makes biomass renewable?",
          options: [
            "Can be regrown in short time periods",
            "Exists in unlimited amounts",
            "Comes from ancient sources",
            "Never runs out anywhere"
          ],
          correctAnswer: 0,
          explanation: "Biomass is renewable because the plants and materials can be regrown in relatively short time periods."
        },
        {
          id: 20,
          question: "What is a combined renewable energy approach?",
          options: [
            "Using multiple renewables together",
            "Mixing renewables with fossil fuels",
            "Converting all energy to electricity",
            "Using only one perfect source"
          ],
          correctAnswer: 0,
          explanation: "Combined approaches use multiple renewable sources together for more reliable and efficient energy systems."
        }
      ]
    },
    {
      id: 6,
      title: "Energy Storage and Smart Grids",
      content: `
## Storing and Managing Clean Energy

**Energy storage** solves a key challenge with renewable energy: the sun doesn't always shine, and the wind doesn't always blow when we need electricity. Storage systems capture energy when it's available and release it when needed, making renewables more reliable and useful.

**Battery storage** is becoming increasingly important. Modern batteries, like lithium-ion batteries in electric cars and homes, can store electricity from solar panels during the day for use at night. Grid-scale battery installations help balance supply and demand across entire electricity systems.

**Pumped hydro storage** (covered in Module 4) is currently the largest form of energy storage worldwide. It works like a giant battery by moving water between two reservoirs at different heights. When electricity is needed, water flows downhill through turbines. When there's excess electricity, it pumps water back uphill.

### Smart Grid Technology

**Smart grids** are modern electricity networks that use digital technology to monitor and manage the flow of electricity more efficiently. Traditional grids simply deliver electricity from power plants to users. Smart grids allow two-way communication between utilities and consumers, enabling better coordination.

**Smart meters** replace traditional electricity meters. They provide real-time information about energy use and can communicate this data to both consumers and utilities. This helps people understand their energy patterns and make smarter choices about when to use electricity.

**Demand response** programs encourage consumers to reduce or shift their electricity use during peak demand periods. For example, a utility might offer lower rates for running appliances at night when overall demand is lower. Smart appliances can automatically respond to these signals.

### Integrating Renewables

**Microgrids** are smaller, localized grids that can operate independently from the main grid. They often combine renewable generation (like solar panels) with storage (like batteries) to power homes, businesses, or communities. During grid outages, microgrids can continue providing power.

**Vehicle-to-grid (V2G)** technology allows electric vehicles to send power back to the grid when needed. Electric cars have large batteries that sit parked most of the day. With V2G, these batteries could help stabilize the grid during peak demand, then recharge when electricity is plentiful.

**Energy management systems** use software to optimize energy use in buildings and industries. They can automatically adjust heating, cooling, and lighting based on occupancy, weather, and electricity prices. This reduces waste and saves money while supporting grid stability.
`,
      completed: false,
      quiz: [
        {
          id: 1,
          question: "What problem does energy storage solve for renewables?",
          options: [
            "Mismatch between production and use times",
            "High cost of renewable energy",
            "Limited locations for installation",
            "Technical complexity of systems"
          ],
          correctAnswer: 0,
          explanation: "Energy storage solves the timing mismatch - storing energy when renewables produce it for use when needed."
        },
        {
          id: 2,
          question: "What is a common battery application for home solar?",
          options: [
            "Store daytime solar energy for night use",
            "Increase solar panel efficiency",
            "Convert AC to DC power",
            "Cool solar panels in heat"
          ],
          correctAnswer: 0,
          explanation: "Home battery systems store excess solar energy generated during the day for use at night when panels aren't producing."
        },
        {
          id: 3,
          question: "How do smart grids differ from traditional grids?",
          options: [
            "Two-way communication and digital monitoring",
            "Higher voltage transmission only",
            "More power plants needed",
            "Longer transmission lines"
          ],
          correctAnswer: 0,
          explanation: "Smart grids feature two-way communication and digital monitoring, unlike traditional one-way electricity delivery."
        },
        {
          id: 4,
          question: "What information do smart meters provide?",
          options: [
            "Real-time energy use data",
            "Only monthly total usage",
            "Future energy predictions",
            "Neighbor's energy use"
          ],
          correctAnswer: 0,
          explanation: "Smart meters provide real-time or frequent energy use data to help consumers and utilities manage electricity better."
        },
        {
          id: 5,
          question: "What do demand response programs encourage?",
          options: [
            "Shifting electricity use to off-peak times",
            "Using maximum power always",
            "Installing more appliances",
            "Keeping lights on constantly"
          ],
          correctAnswer: 0,
          explanation: "Demand response encourages shifting electricity use to off-peak times to reduce strain on the grid during high demand."
        },
        {
          id: 6,
          question: "What can microgrids do during main grid outages?",
          options: [
            "Continue operating independently",
            "Automatically repair main grid",
            "Increase their power output",
            "Switch to fossil fuels only"
          ],
          correctAnswer: 0,
          explanation: "Microgrids can disconnect from the main grid and continue operating independently during outages."
        },
        {
          id: 7,
          question: "What is vehicle-to-grid (V2G) technology?",
          options: [
            "Electric vehicles sending power back to grid",
            "Grid charging vehicles only",
            "Gas vehicles using electricity",
            "Roads generating electricity"
          ],
          correctAnswer: 0,
          explanation: "V2G allows electric vehicles to send stored battery power back to the electrical grid when needed."
        },
        {
          id: 8,
          question: "What is pumped hydro storage's main advantage?",
          options: [
            "Large-scale energy storage capacity",
            "Working without water source",
            "No land requirement",
            "Instant power delivery"
          ],
          correctAnswer: 0,
          explanation: "Pumped hydro provides very large-scale energy storage capacity, currently the largest form worldwide."
        },
        {
          id: 9,
          question: "What do energy management systems optimize?",
          options: [
            "Building energy use based on various factors",
            "Only heating system efficiency",
            "Electricity generation only",
            "Energy trading between countries"
          ],
          correctAnswer: 0,
          explanation: "Energy management systems optimize building energy use based on occupancy, weather, prices, and other factors."
        },
        {
          id: 10,
          question: "Why are electric vehicles good for grid storage?",
          options: [
            "Large batteries sit parked most of day",
            "They generate electricity while driving",
            "Their motors work as generators",
            "They require less charging"
          ],
          correctAnswer: 0,
          explanation: "Electric vehicles have large batteries that are typically parked 90% of the time, available for grid services."
        },
        {
          id: 11,
          question: "What makes smart grids 'smart'?",
          options: [
            "Digital communication and control capabilities",
            "Higher intelligence of operators",
            "More advanced power plants",
            "Faster electricity flow"
          ],
          correctAnswer: 0,
          explanation: "Smart grids are 'smart' because of their digital communication, monitoring, and control capabilities."
        },
        {
          id: 12,
          question: "How can consumers benefit from smart meters?",
          options: [
            "Understand and reduce energy waste",
            "Get free electricity",
            "Control neighbor's usage",
            "Generate their own power"
          ],
          correctAnswer: 0,
          explanation: "Smart meters help consumers understand their energy patterns and identify opportunities to reduce waste and save money."
        },
        {
          id: 13,
          question: "What might a smart appliance do during peak demand?",
          options: [
            "Delay start or reduce power temporarily",
            "Increase power consumption",
            "Turn off permanently",
            "Notify neighbors of usage"
          ],
          correctAnswer: 0,
          explanation: "Smart appliances might delay their start or reduce power temporarily during peak demand to help the grid."
        },
        {
          id: 14,
          question: "What typically powers microgrids?",
          options: [
            "Combination of local generation and storage",
            "Only connection to main grid",
            "Emergency generators only",
            "Batteries without generation"
          ],
          correctAnswer: 0,
          explanation: "Microgrids typically combine local generation (like solar) with storage (like batteries) for independent operation."
        },
        {
          id: 15,
          question: "When might V2G send power from cars to grid?",
          options: [
            "During peak electricity demand periods",
            "Only during vehicle charging",
            "When cars are in accidents",
            "During vehicle manufacturing"
          ],
          correctAnswer: 0,
          explanation: "V2G would send power from car batteries to the grid during peak demand when electricity is most needed."
        },
        {
          id: 16,
          question: "What is grid-scale battery storage?",
          options: [
            "Large battery installations supporting entire grid",
            "Small home battery systems",
            "Car batteries only",
            "Watch and phone batteries"
          ],
          correctAnswer: 0,
          explanation: "Grid-scale battery storage involves large battery installations that support stability of the entire electricity grid."
        },
        {
          id: 17,
          question: "How do smart grids help integrate renewables?",
          options: [
            "Better manage variable renewable output",
            "Increase fossil fuel backup",
            "Reduce renewable installation",
            "Store renewables as fuel"
          ],
          correctAnswer: 0,
          explanation: "Smart grids help manage the variable output from renewables through better monitoring, control, and storage integration."
        },
        {
          id: 18,
          question: "What is time-of-use pricing?",
          options: [
            "Different electricity rates at different times",
            "Same rate always for simplicity",
            "Higher rates for renewable energy",
            "Free electricity at certain times"
          ],
          correctAnswer: 0,
          explanation: "Time-of-use pricing charges different rates for electricity based on time of day, encouraging off-peak use."
        },
        {
          id: 19,
          question: "Why might a community choose a microgrid?",
          options: [
            "Energy independence and resilience",
            "Higher electricity costs",
            "Less reliable power",
            "Simpler technology"
          ],
          correctAnswer: 0,
          explanation: "Communities choose microgrids for energy independence, resilience during outages, and local control."
        },
        {
          id: 20,
          question: "What is the ultimate goal of smart energy systems?",
          options: [
            "Efficient, reliable, clean energy for all",
            "Maximum profit for utilities",
            "Complete energy independence",
            "Elimination of all grids"
          ],
          correctAnswer: 0,
          explanation: "Smart energy systems aim to provide efficient, reliable, and clean energy through advanced technology and management."
        }
      ]
    }
  ],
  
  finalExam: [
    {
      id: 1,
      question: "What makes an energy source renewable?",
      options: [
        "Naturally replenished faster than consumed",
        "Available everywhere in world",
        "Free to use with no cost",
        "Produces no waste at all"
      ],
      correctAnswer: 0,
      explanation: "Renewable energy sources are naturally replenished faster than we consume them."
    },
    {
      id: 2,
      question: "How do photovoltaic solar panels work?",
      options: [
        "Convert sunlight directly to electricity",
        "Heat water to create steam",
        "Store sunlight for night use",
        "Reflect sunlight to other panels"
      ],
      correctAnswer: 0,
      explanation: "Photovoltaic panels convert sunlight directly into electricity through the photovoltaic effect."
    },
    {
      id: 3,
      question: "What energy does wind contain that turbines capture?",
      options: [
        "Kinetic energy from moving air",
        "Heat energy from air friction",
        "Chemical energy from atmosphere",
        "Solar energy reflected by air"
      ],
      correctAnswer: 0,
      explanation: "Wind turbines capture kinetic energy from moving air and convert it to electrical energy."
    },
    {
      id: 4,
      question: "What two factors determine hydropower potential?",
      options: [
        "Water flow rate and fall distance",
        "Water temperature and clarity",
        "River width and depth",
        "Season and time of day"
      ],
      correctAnswer: 0,
      explanation: "Hydropower depends on both water flow rate and the vertical distance it falls (head)."
    },
    {
      id: 5,
      question: "Where does geothermal energy originate?",
      options: [
        "Heat within the Earth",
        "Sunlight absorbed by ground",
        "Burning underground materials",
        "Ocean temperature differences"
      ],
      correctAnswer: 0,
      explanation: "Geothermal energy comes from heat within the Earth from formation and radioactive decay."
    },
    {
      id: 6,
      question: "What materials provide biomass energy?",
      options: [
        "Recently living organic materials",
        "Ancient fossilized plants",
        "Rocks and minerals",
        "Synthetic compounds"
      ],
      correctAnswer: 0,
      explanation: "Biomass energy comes from recently living plants, animals, and their byproducts."
    },
    {
      id: 7,
      question: "Why is energy storage important for renewables?",
      options: [
        "Aligns production timing with use timing",
        "Makes renewable energy cheaper",
        "Increases energy production",
        "Reduces installation space needed"
      ],
      correctAnswer: 0,
      explanation: "Storage aligns renewable energy production (when available) with when we need to use it."
    },
    {
      id: 8,
      question: "What distinguishes smart grids from traditional grids?",
      options: [
        "Two-way communication and digital control",
        "Higher voltage electricity",
        "More power generation plants",
        "Longer transmission lines"
      ],
      correctAnswer: 0,
      explanation: "Smart grids feature two-way communication and digital control for better management."
    },
    {
      id: 9,
      question: "What is net metering for solar systems?",
      options: [
        "Crediting excess power sent to grid",
        "Measuring net energy consumption",
        "Networking solar panels together",
        "Calculating net installation cost"
      ],
      correctAnswer: 0,
      explanation: "Net metering credits solar system owners for excess electricity they send to the grid."
    },
    {
      id: 10,
      question: "How do wind turbines generate electricity?",
      options: [
        "Spinning shaft turns generator magnets",
        "Burning wind to create heat",
        "Chemical reactions with air",
        "Storing wind in batteries"
      ],
      correctAnswer: 0,
      explanation: "Wind turns blades that spin a shaft connected to a generator, creating electricity."
    },
    {
      id: 11,
      question: "What is pumped hydro storage's main function?",
      options: [
        "Store energy by moving water uphill",
        "Generate constant hydro power",
        "Provide drinking water storage",
        "Cool power plant equipment"
      ],
      correctAnswer: 0,
      explanation: "Pumped hydro stores energy by pumping water to a higher reservoir, then releasing it to generate power when needed."
    },
    {
      id: 12,
      question: "What makes tidal energy predictable?",
      options: [
        "Tide schedules known years ahead",
        "Constant ocean temperatures",
        "Regular wave patterns",
        "Steady wind over oceans"
      ],
      correctAnswer: 0,
      explanation: "Tidal energy is predictable because tide schedules based on moon/sun positions are known years in advance."
    },
    {
      id: 13,
      question: "How is biogas produced?",
      options: [
        "Anaerobic digestion of organic matter",
        "Burning biomass efficiently",
        "Heating biomass under pressure",
        "Mixing biomass with chemicals"
      ],
      correctAnswer: 0,
      explanation: "Biogas is produced when organic matter breaks down without oxygen (anaerobic digestion)."
    },
    {
      id: 14,
      question: "What do smart meters enable?",
      options: [
        "Real-time energy use monitoring",
        "Free electricity periods",
        "Automatic bill payment",
        "Neighbor energy sharing"
      ],
      correctAnswer: 0,
      explanation: "Smart meters enable real-time or frequent monitoring of energy use for better management."
    },
    {
      id: 15,
      question: "What can microgrids do during main grid failures?",
      options: [
        "Operate independently",
        "Repair the main grid",
        "Increase power exports",
        "Switch to fossil fuels"
      ],
      correctAnswer: 0,
      explanation: "Microgrids can disconnect and operate independently during main grid failures for local power continuity."
    },
    {
      id: 16,
      question: "What is vehicle-to-grid (V2G) technology?",
      options: [
        "Electric vehicles supplying grid power",
        "Grid-only vehicle charging",
        "Gas vehicles using electricity",
        "Roads generating power"
      ],
      correctAnswer: 0,
      explanation: "V2G allows electric vehicles to supply power from their batteries back to the electrical grid."
    },
    {
      id: 17,
      question: "What is a geothermal heat pump?",
      options: [
        "Uses ground temperature for heating/cooling",
        "Pumps geothermal water to surface",
        "Measures underground heat",
        "Drills geothermal wells"
      ],
      correctAnswer: 0,
      explanation: "Geothermal heat pumps use relatively constant ground temperatures for efficient building heating and cooling."
    },
    {
      id: 18,
      question: "What do demand response programs encourage?",
      options: [
        "Shifting electricity use to off-peak times",
        "Maximum electricity consumption",
        "Installing more appliances",
        "Constant energy use patterns"
      ],
      correctAnswer: 0,
      explanation: "Demand response encourages shifting electricity use to off-peak times to reduce grid strain."
    },
    {
      id: 19,
      question: "What is a run-of-river hydro system?",
      options: [
        "Diverts river flow without large dam",
        "Runs only during river floods",
        "Uses ocean river water only",
        "Requires pumped storage"
      ],
      correctAnswer: 0,
      explanation: "Run-of-river systems divert a portion of river flow through turbines without needing large dams."
    },
    {
      id: 20,
      question: "How can biomass use help waste management?",
      options: [
        "Uses agricultural/forestry residues",
        "Burns all waste completely",
        "Stores waste underground",
        "Exports waste to other countries"
      ],
      correctAnswer: 0,
      explanation: "Biomass can use agricultural and forestry residues that might otherwise be waste disposal challenges."
    },
    {
      id: 21,
      question: "What advantage does geothermal offer over solar/wind?",
      options: [
        "Constant power regardless of weather",
        "Lower installation cost everywhere",
        "Works in all locations equally",
        "Requires less technology"
      ],
      correctAnswer: 0,
      explanation: "Geothermal provides constant power regardless of weather or time of day, unlike variable solar/wind."
    },
    {
      id: 22,
      question: "What is a smart appliance capability?",
      options: [
        "Adjust operation based on grid signals",
        "Generate its own electricity",
        "Control other appliances",
        "Predict future energy needs"
      ],
      correctAnswer: 0,
      explanation: "Smart appliances can adjust operation based on grid signals, like delaying starts during peak demand."
    },
    {
      id: 23,
      question: "How does the water cycle support hydropower?",
      options: [
        "Constantly replenishes water sources",
        "Purifies water for drinking",
        "Cools hydroelectric equipment",
        "Creates evaporation energy"
      ],
      correctAnswer: 0,
      explanation: "The water cycle constantly replenishes water sources through evaporation and precipitation, making hydropower renewable."
    },
    {
      id: 24,
      question: "What is time-of-use electricity pricing?",
      options: [
        "Different rates at different times of day",
        "Same rate always for consistency",
        "Higher rates for green energy",
        "Free power at specific hours"
      ],
      correctAnswer: 0,
      explanation: "Time-of-use pricing charges different rates based on time of day to encourage off-peak electricity use."
    },
    {
      id: 25,
      question: "Why place wind turbines on tall towers?",
      options: [
        "Access stronger, steadier winds",
        "Increase visibility for safety",
        "Store more energy higher up",
        "Avoid ground interference"
      ],
      correctAnswer: 0,
      explanation: "Tall towers place turbines in stronger, steadier winds found higher above ground turbulence."
    },
    {
      id: 26,
      question: "How do solar thermal systems differ from PV?",
      options: [
        "Capture heat instead of making electricity directly",
        "Work only at nighttime",
            "Don't use sunlight at all",
            "Are less efficient always"
          ],
          correctAnswer: 0,
          explanation: "Solar thermal systems capture the sun's heat, while photovoltaic systems convert sunlight directly to electricity."
        },
        {
          id: 27,
          question: "What environmental issue can large hydro dams cause?",
          options: [
            "Disrupt river ecosystems and fish migration",
            "Increase air pollution significantly",
            "Create radioactive waste",
            "Reduce regional rainfall"
          ],
          correctAnswer: 0,
          explanation: "Large dams can disrupt river ecosystems and block fish migration routes if not properly designed."
        },
        {
          id: 28,
          question: "What is biomass's relationship to the carbon cycle?",
          options: [
            "Uses recently captured atmospheric carbon",
            "Adds new carbon to atmosphere",
            "Stores carbon permanently",
            "Destroys carbon through use"
          ],
          correctAnswer: 0,
          explanation: "Biomass uses carbon that plants recently captured from the atmosphere through photosynthesis."
        },
        {
          id: 29,
          question: "How can energy management systems reduce waste?",
          options: [
            "Automatically adjust based on occupancy/conditions",
            "Turn off all systems completely",
            "Use only renewable energy",
            "Store all excess energy"
          ],
          correctAnswer: 0,
          explanation: "Energy management systems automatically adjust building systems based on occupancy, weather, and other conditions to reduce waste."
        },
        {
          id: 30,
          question: "What is a community microgrid benefit?",
          options: [
            "Local energy independence and resilience",
            "Lower electricity costs always",
            "Simpler technology requirements",
            "No maintenance needed"
          ],
          correctAnswer: 0,
          explanation: "Microgrids provide communities with energy independence and resilience during wider grid outages."
        },
        {
          id: 31,
          question: "What happens in the photovoltaic effect?",
          options: [
            "Sunlight knocks electrons loose in materials",
            "Solar panels absorb and store heat",
            "Sunlight is converted to chemical energy",
            "Panels reflect sunlight to collectors"
          ],
          correctAnswer: 0,
          explanation: "In the photovoltaic effect, sunlight knocks electrons loose in semiconductor materials, creating electrical current."
        },
        {
          id: 32,
          question: "How do offshore wind farms compare to onshore?",
          options: [
            "Access stronger, more consistent winds",
            "Cost less to install and maintain",
            "Have smaller environmental impact",
            "Use smaller turbine designs"
          ],
          correctAnswer: 0,
          explanation: "Offshore wind farms typically access stronger, more consistent winds but cost more to install and maintain."
        },
        {
          id: 33,
          question: "What is pumped storage's grid role?",
          options: [
            "Store excess energy for later peak use",
            "Generate constant base load power",
            "Provide emergency power only",
            "Replace all other storage"
          ],
          correctAnswer: 0,
          explanation: "Pumped storage stores excess energy (often from renewables) for use during peak demand periods."
        },
        {
          id: 34,
          question: "How is geothermal water typically handled after use?",
          options: [
            "Returned underground to be reheated",
            "Released into surface water",
            "Used for drinking water",
            "Evaporated into atmosphere"
          ],
          correctAnswer: 0,
          explanation: "Geothermal water is typically returned underground where Earth's heat naturally reheats it."
        },
        {
          id: 35,
          question: "What do anaerobic digesters produce?",
          options: [
            "Biogas and nutrient-rich fertilizer",
            "Only electricity directly",
            "Pure water and ash",
            "Fossil fuel substitutes"
          ],
          correctAnswer: 0,
          explanation: "Anaerobic digesters produce biogas (for energy) and nutrient-rich digestate (for fertilizer)."
        },
        {
          id: 36,
          question: "What enables two-way grid communication?",
          options: [
            "Smart grid digital technology",
            "Traditional power lines",
            "Human meter readers",
            "Paper billing systems"
          ],
          correctAnswer: 0,
          explanation: "Smart grid digital technology enables two-way communication between utilities and consumers."
        },
        {
          id: 37,
          question: "When might electric vehicles supply grid power?",
          options: [
            "During peak electricity demand",
            "Only while driving",
            "During battery manufacturing",
            "When completely discharged"
          ],
          correctAnswer: 0,
          explanation: "Electric vehicles might supply grid power during peak demand when electricity is most valuable."
        },
        {
          id: 38,
          question: "What is a fish ladder's purpose?",
          options: [
            "Help fish migrate past dams",
            "Attract fish to turbines",
            "Measure fish populations",
            "Provide fishing access"
          ],
          correctAnswer: 0,
          explanation: "Fish ladders help migrating fish navigate around dams to reach spawning grounds."
        },
        {
          id: 39,
          question: "How do solar panels work on cloudy days?",
          options: [
            "Capture diffuse sunlight through clouds",
            "Stop working completely",
            "Switch to wind power",
            "Use stored energy only"
          ],
          correctAnswer: 0,
          explanation: "Solar panels can capture diffuse sunlight that penetrates clouds, though with reduced efficiency."
        },
        {
          id: 40,
          question: "What is the ultimate goal of green energy systems?",
          options: [
            "Sustainable, clean energy for all",
            "Complete energy independence",
            "Lowest possible cost only",
            "Elimination of all grids"
          ],
          correctAnswer: 0,
          explanation: "The goal is sustainable, clean energy systems that meet everyone's needs while protecting the environment."
        }
      ]
    };

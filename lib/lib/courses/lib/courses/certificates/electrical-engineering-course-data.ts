export const electricalEngineeringCertificateCourse = {
  id: "electrical-engineering-certificate",
  title: "Electrical Engineering (Certificate)",
  description: "Foundational course covering basic electrical concepts, circuits, and safety principles for beginners in electrical engineering.",
  duration: "8 weeks",
  timeCommitment: "5-7 hours per week",
  price: 12,
  upgradePrice: 18,
  icon: "⚡",
  badge: "Certificate",
  
  modules: [
    {
      id: 1,
      title: "Introduction to Electricity",
      completed: false,
      content: `# Introduction to Electricity

## What is Electricity?

Electricity is the flow of electrical power or charge. It is a form of energy that we use every day for lighting, heating, cooling, and powering devices. Understanding electricity starts with knowing its basic nature.

Electricity comes from the movement of tiny particles called electrons. These electrons move through materials that allow them to flow easily. This flow is what we call electric current.

## Basic Electrical Concepts

Three fundamental concepts form the foundation of electrical engineering:

**Voltage** is the force that pushes electrons through a conductor. Think of it like water pressure in a pipe. More voltage means more pushing force. Voltage is measured in volts (V).

**Current** is the flow of electrons through a conductor. This is like the amount of water flowing through a pipe. Current is measured in amperes or amps (A).

**Resistance** is how much a material opposes the flow of electrons. Different materials have different resistance levels. Resistance is measured in ohms (Ω).

These three concepts are connected through a simple but important relationship known as Ohm's Law.

## Conductors and Insulators

Materials behave differently with electricity:

**Conductors** allow electricity to flow easily through them. Metals like copper, aluminum, and silver are good conductors. Copper is commonly used in electrical wires because it conducts well and is affordable.

**Insulators** resist the flow of electricity. They protect us from electric shocks. Common insulators include rubber, plastic, glass, and dry wood. Electrical wires are coated with insulating materials to make them safe to handle.

Some materials are called **semiconductors**. These have properties between conductors and insulators. Silicon is a common semiconductor used in electronics like computers and phones.

## Direct and Alternating Current

There are two main types of electrical current:

**Direct Current (DC)** flows in one direction only. Batteries produce DC current. Flashlights, mobile phones, and most electronic devices use DC power.

**Alternating Current (AC)** changes direction back and forth many times per second. The electricity in our homes and buildings is AC. In most countries, AC changes direction 50 or 60 times per second.

AC has advantages for sending electricity over long distances. It can be easily transformed to different voltage levels using transformers. This makes AC practical for power distribution systems.

## Electrical Safety Basics

Safety is the most important part of working with electricity. Even small amounts of electricity can be dangerous.

Basic safety rules include:
- Always assume wires are live until tested
- Use insulated tools when working with electricity
- Never work on electrical systems when wet or standing on wet surfaces
- Turn off power at the main switch before working on circuits
- Use proper personal protective equipment

Electrical shocks can cause serious injury or death. Understanding safety principles protects you and others when working with electrical systems.`,
      quiz: [
        {
          id: 1,
          question: "What is electricity?",
          options: [
            "The flow of electrical power or charge",
            "A type of magnet",
            "Heat energy moving through wires",
            "Light produced by bulbs"
          ],
          correctAnswer: 0,
          explanation: "Electricity is the flow of electrical charge through conductors."
        },
        {
          id: 2,
          question: "What are the tiny particles that move to create electricity?",
          options: [
            "Electrons",
            "Protons",
            "Neutrons",
            "Atoms"
          ],
          correctAnswer: 0,
          explanation: "Electrons moving through conductors create electric current."
        },
        {
          id: 3,
          question: "What is voltage?",
          options: [
            "The force that pushes electrons",
            "The speed of electron flow",
            "The amount of electron flow",
            "The resistance to electron flow"
          ],
          correctAnswer: 0,
          explanation: "Voltage is the electrical pressure that pushes electrons through a circuit."
        },
        {
          id: 4,
          question: "What is current?",
          options: [
            "The flow of electrons through a conductor",
            "The pushing force behind electrons",
            "The opposition to electron flow",
            "The storage of electrical energy"
          ],
          correctAnswer: 0,
          explanation: "Current measures how many electrons are flowing through a conductor."
        },
        {
          id: 5,
          question: "What is resistance?",
          options: [
            "How much a material opposes electron flow",
            "How fast electrons move",
            "How much voltage is present",
            "How much current is flowing"
          ],
          correctAnswer: 0,
          explanation: "Resistance is a material's opposition to the flow of electric current."
        },
        {
          id: 6,
          question: "What are conductors?",
          options: [
            "Materials that allow electricity to flow easily",
            "Materials that block electricity completely",
            "Materials that store electricity",
            "Materials that create electricity"
          ],
          correctAnswer: 0,
          explanation: "Conductors like metals allow electrons to move through them easily."
        },
        {
          id: 7,
          question: "What are insulators?",
          options: [
            "Materials that resist electricity flow",
            "Materials that conduct electricity well",
            "Materials that generate electricity",
            "Materials that measure electricity"
          ],
          correctAnswer: 0,
          explanation: "Insulators protect us by resisting the flow of electric current."
        },
        {
          id: 8,
          question: "What is a common conductor used in electrical wires?",
          options: [
            "Copper",
            "Rubber",
            "Plastic",
            "Glass"
          ],
          correctAnswer: 0,
          explanation: "Copper is widely used because it conducts well and is affordable."
        },
        {
          id: 9,
          question: "What does DC stand for?",
          options: [
            "Direct Current",
            "Dual Current",
            "Dynamic Current",
            "Digital Current"
          ],
          correctAnswer: 0,
          explanation: "DC means Direct Current, which flows in one direction only."
        },
        {
          id: 10,
          question: "What does AC stand for?",
          options: [
            "Alternating Current",
            "Active Current",
            "Amplified Current",
            "Atomic Current"
          ],
          correctAnswer: 0,
          explanation: "AC means Alternating Current, which changes direction regularly."
        },
        {
          id: 11,
          question: "What type of current do batteries produce?",
          options: [
            "Direct Current (DC)",
            "Alternating Current (AC)",
            "Both AC and DC",
            "Neither AC nor DC"
          ],
          correctAnswer: 0,
          explanation: "Batteries produce DC because chemical reactions create one-direction flow."
        },
        {
          id: 12,
          question: "What type of current is in home electrical outlets?",
          options: [
            "Alternating Current (AC)",
            "Direct Current (DC)",
            "Mixed current",
            "Static current"
          ],
          correctAnswer: 0,
          explanation: "Homes use AC because it can be transmitted efficiently over distances."
        },
        {
          id: 13,
          question: "Why is AC good for power distribution?",
          options: [
            "It can be easily transformed to different voltages",
            "It doesn't need wires",
            "It's always safer than DC",
            "It doesn't need generators"
          ],
          correctAnswer: 0,
          explanation: "Transformers can change AC voltage levels easily for efficient distribution."
        },
        {
          id: 14,
          question: "What is the most important part of working with electricity?",
          options: [
            "Safety",
            "Speed",
            "Cost",
            "Appearance"
          ],
          correctAnswer: 0,
          explanation: "Safety must always come first when working with electricity."
        },
        {
          id: 15,
          question: "What should you always assume about wires?",
          options: [
            "They are live until tested",
            "They are safe to touch",
            "They are not connected",
            "They are low voltage"
          ],
          correctAnswer: 0,
          explanation: "Assuming wires are live prevents accidental shocks from unexpected power."
        },
        {
          id: 16,
          question: "What should you use when working with electrical systems?",
          options: [
            "Insulated tools",
            "Metal tools only",
            "Wooden tools",
            "Any available tools"
          ],
          correctAnswer: 0,
          explanation: "Insulated tools protect against accidental contact with live parts."
        },
        {
          id: 17,
          question: "What should you do before working on circuits?",
          options: [
            "Turn off power at the main switch",
            "Check if neighbors have power",
            "Tell family members",
            "Clean the work area"
          ],
          correctAnswer: 0,
          explanation: "Disconnecting power prevents electric shock while working."
        },
        {
          id: 18,
          question: "What is silicon?",
          options: [
            "A semiconductor material",
            "A conductor material",
            "An insulator material",
            "A power source"
          ],
          correctAnswer: 0,
          explanation: "Silicon has properties between conductors and insulators, making it useful for electronics."
        },
        {
          id: 19,
          question: "What do we call materials with properties between conductors and insulators?",
          options: [
            "Semiconductors",
            "Superconductors",
            "Resistors",
            "Transformers"
          ],
          correctAnswer: 0,
          explanation: "Semiconductors conduct better than insulators but worse than conductors."
        },
        {
          id: 20,
          question: "What protects wires to make them safe to handle?",
          options: [
            "Insulating coating",
            "Metal coating",
            "Wooden casing",
            "Glass covering"
          ],
          correctAnswer: 0,
          explanation: "Insulation around wires prevents accidental contact with live conductors."
        }
      ]
    },
    {
      id: 2,
      title: "Basic Circuits and Components",
      completed: false,
      content: `# Basic Circuits and Components

## What is an Electrical Circuit?

An electrical circuit is a complete path that allows electricity to flow from a power source, through components, and back to the source. A circuit must be complete for current to flow. If there's any break in the path, the circuit is open and no current flows.

Every circuit needs three basic elements:
- **Power source** (like a battery or outlet)
- **Conducting path** (wires that connect everything)
- **Load** (device that uses the electricity, like a light bulb)

Circuits can be simple with just a few components or complex with many interconnected parts.

## Series Circuits

In a series circuit, components are connected one after another in a single path. The same current flows through all components. If one component fails or is removed, the entire circuit stops working.

Characteristics of series circuits:
- Current is the same at all points
- Voltage is divided among components
- Total resistance is the sum of all resistances
- One break stops the entire circuit

Christmas tree lights often use series circuits. If one bulb burns out, all lights go off because the circuit is broken.

## Parallel Circuits

In a parallel circuit, components are connected across the same voltage source but on separate paths. Each component has its own path back to the power source.

Characteristics of parallel circuits:
- Voltage is the same across all components
- Current divides among the different paths
- Components work independently of each other
- If one path breaks, others continue working

Home lighting uses parallel circuits. If one light bulb burns out, other lights stay on because each has its own path.

## Basic Electronic Components

Several basic components are used in almost all electrical circuits:

**Resistors** limit or control the flow of current. They're used to set proper current levels, divide voltages, and protect sensitive components. Resistors come in different values measured in ohms.

**Capacitors** store electrical energy temporarily. They can charge up and then release energy when needed. Capacitors smooth out voltage fluctuations and filter signals. They're measured in farads.

**Inductors** store energy in a magnetic field when current flows through them. They resist changes in current and are used in filters and transformers. Inductors are measured in henries.

**Diodes** allow current to flow in one direction only. They're like one-way valves for electricity. Light Emitting Diodes (LEDs) are special diodes that produce light when current flows through them.

## Switches and Controls

Switches control whether a circuit is open or closed. Different types of switches serve different purposes:

**Toggle switches** are simple on/off switches like light switches. They have two positions: open (off) and closed (on).

**Pushbutton switches** make contact only while being pressed. Doorbells use pushbutton switches.

**Rocker switches** pivot in the middle and are common in household appliances.

**Rotary switches** select between multiple positions, like fan speed controls.

**Dimmer switches** vary the amount of power to a load, allowing control of light brightness or motor speed.

Switches are essential for controlling when and how electrical devices operate. They make circuits usable in practical applications.`,
      quiz: [
        {
          id: 1,
          question: "What is an electrical circuit?",
          options: [
            "A complete path for electricity to flow",
            "A broken connection in wires",
            "A type of battery",
            "A measuring device"
          ],
          correctAnswer: 0,
          explanation: "A circuit provides a continuous path for current from source back to source."
        },
        {
          id: 2,
          question: "What three elements does every circuit need?",
          options: [
            "Power source, conducting path, load",
            "Battery, switch, meter",
            "Wire, bulb, resistor",
            "Generator, transformer, outlet"
          ],
          correctAnswer: 0,
          explanation: "These three elements are essential for any working circuit."
        },
        {
          id: 3,
          question: "What happens if a circuit has a break?",
          options: [
            "No current flows",
            "Current increases",
            "Voltage doubles",
            "Resistance decreases"
          ],
          correctAnswer: 0,
          explanation: "A break creates an open circuit where current cannot flow."
        },
        {
          id: 4,
          question: "How are components connected in a series circuit?",
          options: [
            "One after another in a single path",
            "Side by side in multiple paths",
            "In a circle pattern",
            "In random order"
          ],
          correctAnswer: 0,
          explanation: "Series connections create a single continuous path for current."
        },
        {
          id: 5,
          question: "What is true about current in a series circuit?",
          options: [
            "It is the same at all points",
            "It divides at each component",
            "It increases along the path",
            "It decreases at each resistor"
          ],
          correctAnswer: 0,
          explanation: "The same current flows through all components in series."
        },
        {
          id: 6,
          question: "What happens if one component fails in a series circuit?",
          options: [
            "The entire circuit stops working",
            "Only that component stops",
            "Current increases elsewhere",
            "Voltage doubles"
          ],
          correctAnswer: 0,
          explanation: "A break anywhere in a series circuit stops all current flow."
        },
        {
          id: 7,
          question: "How are components connected in a parallel circuit?",
          options: [
            "Across the same voltage on separate paths",
            "In a single line one after another",
            "In a spiral pattern",
            "Without any connection points"
          ],
          correctAnswer: 0,
          explanation: "Parallel components each have their own path to the power source."
        },
        {
          id: 8,
          question: "What is true about voltage in a parallel circuit?",
          options: [
            "It is the same across all components",
            "It divides among components",
            "It increases along each path",
            "It decreases with each branch"
          ],
          correctAnswer: 0,
          explanation: "All parallel branches experience the same voltage from the source."
        },
        {
          id: 9,
          question: "What happens if one path breaks in a parallel circuit?",
          options: [
            "Other paths continue working",
            "All paths stop working",
            "Current doubles in remaining paths",
            "Voltage drops to zero"
          ],
          correctAnswer: 0,
          explanation: "Parallel paths work independently, so one break doesn't affect others."
        },
        {
          id: 10,
          question: "What type of circuit do Christmas tree lights often use?",
          options: [
            "Series circuit",
            "Parallel circuit",
            "Mixed circuit",
            "No circuit"
          ],
          correctAnswer: 0,
          explanation: "Series connection in Christmas lights means one failed bulb affects all."
        },
        {
          id: 11,
          question: "What type of circuit does home lighting use?",
          options: [
            "Parallel circuit",
            "Series circuit",
            "Simple circuit",
            "Complex circuit"
          ],
          correctAnswer: 0,
          explanation: "Parallel wiring allows lights to work independently in homes."
        },
        {
          id: 12,
          question: "What do resistors do in a circuit?",
          options: [
            "Limit or control current flow",
            "Store electrical energy",
            "Generate electricity",
            "Change AC to DC"
          ],
          correctAnswer: 0,
          explanation: "Resistors oppose current flow to control circuit behavior."
        },
        {
          id: 13,
          question: "What do capacitors do?",
          options: [
            "Store electrical energy temporarily",
            "Limit current flow",
            "Generate magnetic fields",
            "Produce light"
          ],
          correctAnswer: 0,
          explanation: "Capacitors charge and discharge electrical energy."
        },
        {
          id: 14,
          question: "What do inductors store energy in?",
          options: [
            "Magnetic field",
            "Electric field",
            "Chemical form",
            "Heat form"
          ],
          correctAnswer: 0,
          explanation: "Inductors create magnetic fields that store energy when current flows."
        },
        {
          id: 15,
          question: "What do diodes allow?",
          options: [
            "Current flow in one direction only",
            "Current flow in both directions",
            "Voltage increase",
            "Current reversal"
          ],
          correctAnswer: 0,
          explanation: "Diodes act like one-way valves for electrical current."
        },
        {
          id: 16,
          question: "What are LEDs?",
          options: [
            "Diodes that produce light",
            "Resistors that get hot",
            "Capacitors that flash",
            "Inductors that hum"
          ],
          correctAnswer: 0,
          explanation: "LEDs are Light Emitting Diodes that glow when current flows."
        },
        {
          id: 17,
          question: "What do switches control?",
          options: [
            "Whether a circuit is open or closed",
            "The amount of voltage",
            "The type of current",
            "The wire color"
          ],
          correctAnswer: 0,
          explanation: "Switches make or break connections to control circuit operation."
        },
        {
          id: 18,
          question: "What type of switch is a light switch?",
          options: [
            "Toggle switch",
            "Pushbutton switch",
            "Rocker switch",
            "Rotary switch"
          ],
          correctAnswer: 0,
          explanation: "Standard light switches are toggle switches with on/off positions."
        },
        {
          id: 19,
          question: "What does a pushbutton switch do?",
          options: [
            "Makes contact only while pressed",
            "Stays on after pressing",
            "Rotates to select options",
            "Slides between positions"
          ],
          correctAnswer: 0,
          explanation: "Pushbuttons complete the circuit only while being held down."
        },
        {
          id: 20,
          question: "What do dimmer switches control?",
          options: [
            "Amount of power to a load",
            "Type of current",
            "Circuit resistance only",
            "Wire temperature"
          ],
          correctAnswer: 0,
          explanation: "Dimmers vary power delivery to control brightness or speed."
        }
      ]
    },
    {
      id: 3,
      title: "Ohm's Law and Power",
      completed: false,
      content: `# Ohm's Law and Power

## Understanding Ohm's Law

Ohm's Law is one of the most important relationships in electrical engineering. It shows how voltage, current, and resistance are connected. The law states that current through a conductor between two points is directly proportional to the voltage across the two points.

The mathematical formula for Ohm's Law is:
**V = I × R**
Where:
- V is voltage in volts (V)
- I is current in amperes (A)
- R is resistance in ohms (Ω)

This simple formula allows you to calculate any one of these values if you know the other two.

## Using Ohm's Law

Ohm's Law can be rearranged to solve for different values:

To find voltage: **V = I × R**
To find current: **I = V ÷ R**
To find resistance: **R = V ÷ I**

These equations work for any part of a circuit where the relationship between voltage, current, and resistance is linear (follows Ohm's Law).

Examples of using Ohm's Law:
- If you know a resistor's value and the current through it, you can calculate the voltage across it
- If you know the voltage across a device and its resistance, you can calculate the current through it
- If you measure voltage and current, you can calculate the resistance

## Electrical Power

Electrical power is the rate at which electrical energy is used or produced. Power tells us how much work electricity can do or how much energy it consumes.

The formula for electrical power is:
**P = V × I**
Where:
- P is power in watts (W)
- V is voltage in volts (V)
- I is current in amperes (A)

This means power equals voltage multiplied by current. A device using more voltage or more current uses more power.

## Power Calculations

Power calculations help determine:
- How much electricity a device uses
- What size wires and components are needed
- How much a device will cost to operate
- Whether a power source can handle the load

Another useful power formula combines Ohm's Law with the power formula:
**P = I² × R** (power equals current squared times resistance)
**P = V² ÷ R** (power equals voltage squared divided by resistance)

These formulas are helpful when you know different combinations of values.

## Energy Consumption

Energy is power used over time. While power is the rate of energy use, energy is the total amount used.

The formula for electrical energy is:
**E = P × t**
Where:
- E is energy in watt-hours (Wh)
- P is power in watts (W)
- t is time in hours (h)

Utility companies charge for energy used, not power. A 100-watt light bulb running for 10 hours uses 1000 watt-hours (1 kilowatt-hour) of energy.

Understanding energy consumption helps:
- Calculate electricity bills
- Size backup power systems
- Plan for generator needs
- Compare efficiency of different devices

## Practical Applications

Ohm's Law and power calculations have many practical uses:

**Circuit Design:** Determine proper resistor values to limit current to safe levels for LEDs or other components.

**Troubleshooting:** Calculate expected voltages and currents to identify problems in circuits.

**Safety Analysis:** Ensure wires and components can handle expected currents without overheating.

**Energy Efficiency:** Compare how much energy different devices use to make informed choices.

**Power Supply Sizing:** Select appropriate batteries or power supplies for electronic projects.

These calculations form the foundation for all electrical work, from simple repairs to complex system design.`,
      quiz: [
        {
          id: 1,
          question: "What does Ohm's Law describe?",
          options: [
            "Relationship between voltage, current, and resistance",
            "How magnets affect electricity",
            "How batteries produce voltage",
            "Why wires get warm"
          ],
          correctAnswer: 0,
          explanation: "Ohm's Law shows how voltage, current, and resistance are mathematically related."
        },
        {
          id: 2,
          question: "What is the Ohm's Law formula?",
          options: [
            "V = I × R",
            "I = V + R",
            "R = V - I",
            "V = I ÷ R"
          ],
          correctAnswer: 0,
          explanation: "Voltage equals current multiplied by resistance."
        },
        {
          id: 3,
          question: "If voltage is 12V and resistance is 4Ω, what is the current?",
          options: [
            "3A",
            "48A",
            "0.33A",
            "8A"
          ],
          correctAnswer: 0,
          explanation: "I = V ÷ R = 12 ÷ 4 = 3 amperes."
        },
        {
          id: 4,
          question: "If current is 2A and resistance is 10Ω, what is the voltage?",
          options: [
            "20V",
            "5V",
            "12V",
            "0.2V"
          ],
          correctAnswer: 0,
          explanation: "V = I × R = 2 × 10 = 20 volts."
        },
        {
          id: 5,
          question: "If voltage is 9V and current is 3A, what is the resistance?",
          options: [
            "3Ω",
            "27Ω",
            "0.33Ω",
            "12Ω"
          ],
          correctAnswer: 0,
          explanation: "R = V ÷ I = 9 ÷ 3 = 3 ohms."
        },
        {
          id: 6,
          question: "What is electrical power?",
          options: [
            "Rate at which electrical energy is used",
            "Amount of voltage available",
            "Speed of electron flow",
            "Type of current"
          ],
          correctAnswer: 0,
          explanation: "Power measures how fast energy is being used or produced."
        },
        {
          id: 7,
          question: "What is the power formula?",
          options: [
            "P = V × I",
            "P = V ÷ I",
            "P = V + I",
            "P = V - I"
          ],
          correctAnswer: 0,
          explanation: "Power equals voltage multiplied by current."
        },
        {
          id: 8,
          question: "If a device uses 120V and 0.5A, what is its power?",
          options: [
            "60W",
            "240W",
            "0.004W",
            "120.5W"
          ],
          correctAnswer: 0,
          explanation: "P = V × I = 120 × 0.5 = 60 watts."
        },
        {
          id: 9,
          question: "What is another power formula using current and resistance?",
          options: [
            "P = I² × R",
            "P = I ÷ R",
            "P = I × R²",
            "P = I + R"
          ],
          correctAnswer: 0,
          explanation: "Power equals current squared multiplied by resistance."
        },
        {
          id: 10,
          question: "What is another power formula using voltage and resistance?",
          options: [
            "P = V² ÷ R",
            "P = V ÷ R²",
            "P = V × R²",
            "P = V² × R"
          ],
          correctAnswer: 0,
          explanation: "Power equals voltage squared divided by resistance."
        },
        {
          id: 11,
          question: "What is electrical energy?",
          options: [
            "Power used over time",
            "Instantaneous power",
            "Maximum power",
            "Minimum power"
          ],
          correctAnswer: 0,
          explanation: "Energy is the total amount of power consumed over a period."
        },
        {
          id: 12,
          question: "What is the energy formula?",
          options: [
            "E = P × t",
            "E = P ÷ t",
            "E = P + t",
            "E = P - t"
          ],
          correctAnswer: 0,
          explanation: "Energy equals power multiplied by time."
        },
        {
          id: 13,
          question: "If a 100W device runs for 5 hours, how much energy does it use?",
          options: [
            "500Wh",
            "20Wh",
            "105Wh",
            "95Wh"
          ],
          correctAnswer: 0,
          explanation: "E = P × t = 100 × 5 = 500 watt-hours."
        },
        {
          id: 14,
          question: "What do utility companies charge for?",
          options: [
            "Energy used",
            "Power available",
            "Voltage supplied",
            "Current maximum"
          ],
          correctAnswer: 0,
          explanation: "Electricity bills are based on total energy consumption over time."
        },
        {
          id: 15,
          question: "What is 1000 watt-hours called?",
          options: [
            "Kilowatt-hour",
            "Megawatt-hour",
            "Gigawatt-hour",
            "Terawatt-hour"
          ],
          correctAnswer: 0,
          explanation: "1000 watt-hours equals 1 kilowatt-hour (kWh)."
        },
        {
          id: 16,
          question: "How can Ohm's Law help in circuit design?",
          options: [
            "Determine proper resistor values",
            "Choose wire colors",
            "Select switch types",
            "Pick battery brands"
          ],
          correctAnswer: 0,
          explanation: "Ohm's Law calculates resistor values needed for specific currents."
        },
        {
          id: 17,
          question: "How can power calculations help with safety?",
          options: [
            "Ensure components can handle currents",
            "Make circuits look neat",
            "Choose attractive enclosures",
            "Select cheap components"
          ],
          correctAnswer: 0,
          explanation: "Power calculations prevent overheating by ensuring proper component ratings."
        },
        {
          id: 18,
          question: "What does P = I² × R help calculate?",
          options: [
            "Power dissipated in a resistor",
            "Voltage across a capacitor",
            "Current through a diode",
            "Resistance of a wire"
          ],
          correctAnswer: 0,
          explanation: "This formula calculates power loss as heat in resistive components."
        },
        {
          id: 19,
          question: "What unit measures power?",
          options: [
            "Watts",
            "Volts",
            "Amps",
            "Ohms"
          ],
          correctAnswer: 0,
          explanation: "Watts (W) are the standard unit for measuring power."
        },
        {
          id: 20,
          question: "What unit measures energy?",
          options: [
            "Watt-hours",
            "Volt-amps",
            "Ohm-seconds",
            "Amp-minutes"
          ],
          correctAnswer: 0,
          explanation: "Watt-hours measure energy consumption over time."
        }
      ]
    },
    {
      id: 4,
      title: "Wiring and Connections",
      completed: false,
      content: `# Wiring and Connections

## Types of Electrical Wires

Electrical wires come in different types for different purposes. Understanding wire types helps choose the right one for each application.

**Solid wire** has a single solid metal core. It's rigid and holds its shape well. Solid wire is commonly used in permanent installations like house wiring and circuit boards.

**Stranded wire** has multiple thin wires twisted together. It's flexible and resists breaking from repeated bending. Stranded wire is used in extension cords, appliance cords, and applications requiring movement.

**Copper wire** is the most common conductor. Copper conducts electricity well, is relatively affordable, and resists corrosion. Most electrical wiring uses copper.

**Aluminum wire** is lighter and cheaper than copper but doesn't conduct as well. It was used in some home wiring but requires special connections to prevent problems.

## Wire Sizing and Color Coding

Wire size is critical for safety and performance. Wires that are too small for the current they carry can overheat and cause fires.

Wire size is measured by gauge number. The American Wire Gauge (AWG) system is commonly used. Important things to know about wire gauge:
- Smaller gauge numbers mean thicker wires
- Thicker wires carry more current safely
- Common household wiring uses 12 or 14 AWG
- Extension cords often use 16 AWG for light duty

Wire color coding helps identify wire functions:
- **Black or Red** - Hot wires (carry current from source)
- **White or Gray** - Neutral wires (return path to source)
- **Green or Bare** - Ground wires (safety path to earth)
- **Blue, Yellow, etc.** - Additional hot wires in complex systems

Color coding makes wiring safer and easier to understand, especially during repairs or modifications.

## Basic Wiring Techniques

Proper wiring techniques ensure safe, reliable connections:

**Stripping wire** removes insulation without damaging the conductor. Use proper wire strippers that cut only the insulation, not the wire inside. Strip only enough insulation to make the connection - usually about 3/4 inch.

**Making connections** securely joins wires together. Common connection methods include:
- **Wire nuts** twist wires together and insulate the connection
- **Terminal blocks** screw connections that are easy to inspect and modify
- **Crimp connectors** use pressure to secure wires, common in automotive applications
- **Soldering** melts metal to join wires permanently

**Securing wires** prevents strain on connections. Use cable clamps, strain relief devices, or proper routing to keep wires from pulling on their connections.

## Common Wiring Devices

Several devices help connect and protect electrical systems:

**Outlets** provide access points for plugging in devices. Standard outlets have two or three holes for plugs. GFCI outlets include ground fault protection for safety in wet areas.

**Switches** control power to lights and devices. Single-pole switches control from one location. Three-way switches allow control from two locations. Dimmer switches vary light brightness.

**Junction boxes** contain and protect wire connections. All wire connections must be inside approved boxes. Boxes prevent accidental contact and contain any sparks.

**Circuit breakers** protect circuits from overload. They automatically trip (shut off) when current exceeds safe levels. Breakers can be reset after correcting the problem.

**Fuses** also protect circuits but must be replaced after they blow. They contain a metal link that melts when current is too high.

## Electrical Boxes and Enclosures

Electrical boxes serve several important functions:
- Protect wire connections from damage
- Prevent accidental contact with live wires
- Contain sparks or heat from faulty connections
- Provide mounting points for devices like switches and outlets

Box types include:
- **Device boxes** for switches and outlets
- **Junction boxes** for wire connections only
- **Panel boxes** for circuit breakers
- **Weatherproof boxes** for outdoor use

Boxes must be properly sized for the number of wires and devices they contain. Overfilled boxes can overheat and create fire hazards.

## Grounding and Bonding

Grounding provides a safe path for electricity in case of faults. It protects people from electric shock and prevents fire hazards.

**Equipment grounding** connects metal parts of electrical equipment to ground. If a live wire touches the metal casing, grounding provides a low-resistance path that trips the breaker.

**System grounding** connects one conductor of the electrical system to ground. This stabilizes voltage levels and provides a reference point.

**Bonding** connects all metal parts together to ensure they're at the same electrical potential. This prevents dangerous voltage differences between objects.

Proper grounding is essential for electrical safety in all installations.`,
      quiz: [
        {
          id: 1,
          question: "What is solid wire?",
          options: [
            "Wire with a single solid metal core",
            "Wire with multiple thin strands",
            "Wire with thick insulation",
            "Wire that cannot bend"
          ],
          correctAnswer: 0,
          explanation: "Solid wire has one continuous conductor, making it rigid."
        },
        {
          id: 2,
          question: "What is stranded wire?",
          options: [
            "Wire with multiple thin wires twisted together",
            "Wire that is always coated in plastic",
            "Wire that cannot conduct well",
            "Wire used only outdoors"
          ],
          correctAnswer: 0,
          explanation: "Stranded wire is flexible due to its many small conductors."
        },
        {
          id: 3,
          question: "Where is solid wire commonly used?",
          options: [
            "Permanent installations like house wiring",
            "Extension cords",
            "Appliance cords",
            "Portable equipment"
          ],
          correctAnswer: 0,
          explanation: "Solid wire works well in fixed installations where flexibility isn't needed."
        },
        {
          id: 4,
          question: "Where is stranded wire commonly used?",
          options: [
            "Extension cords and appliance cords",
            "House wiring in walls",
            "Circuit board traces",
            "Underground cables"
          ],
          correctAnswer: 0,
          explanation: "Stranded wire's flexibility suits applications with movement."
        },
        {
          id: 5,
          question: "What is the most common conductor material?",
          options: [
            "Copper",
            "Aluminum",
            "Steel",
            "Silver"
          ],
          correctAnswer: 0,
          explanation: "Copper offers good conductivity at reasonable cost."
        },
        {
          id: 6,
          question: "What does wire gauge measure?",
          options: [
            "Wire thickness",
            "Wire color",
            "Wire length",
            "Wire temperature"
          ],
          correctAnswer: 0,
          explanation: "Gauge number indicates wire diameter or cross-sectional area."
        },
        {
          id: 7,
          question: "What does smaller gauge number mean?",
          options: [
            "Thicker wire",
            "Thinner wire",
            "Longer wire",
            "Shorter wire"
          ],
          correctAnswer: 0,
          explanation: "Smaller AWG numbers indicate larger diameter wires."
        },
        {
          id: 8,
          question: "What color are hot wires typically?",
          options: [
            "Black or Red",
            "White or Gray",
            "Green or Bare",
            "Blue or Yellow"
          ],
          correctAnswer: 0,
          explanation: "Black and red identify wires carrying current from the source."
        },
        {
          id: 9,
          question: "What color are neutral wires typically?",
          options: [
            "White or Gray",
            "Black or Red",
            "Green or Bare",
            "Blue or Yellow"
          ],
          correctAnswer: 0,
          explanation: "White or gray indicates the return path to complete the circuit."
        },
        {
          id: 10,
          question: "What color are ground wires typically?",
          options: [
            "Green or Bare",
            "Black or Red",
            "White or Gray",
            "Blue or Yellow"
          ],
          correctAnswer: 0,
          explanation: "Green or bare copper indicates safety grounding conductors."
        },
        {
          id: 11,
          question: "What do wire strippers do?",
          options: [
            "Remove insulation without damaging wire",
            "Cut wires to length",
            "Twist wires together",
            "Measure wire size"
          ],
          correctAnswer: 0,
          explanation: "Proper strippers cut only insulation, leaving conductor undamaged."
        },
        {
          id: 12,
          question: "What are wire nuts used for?",
          options: [
            "Twisting wires together and insulating",
            "Measuring wire gauge",
            "Cutting wire insulation",
            "Bending wire into shape"
          ],
          correctAnswer: 0,
          explanation: "Wire nuts secure multiple wires and insulate the connection."
        },
        {
          id: 13,
          question: "What do outlets provide?",
          options: [
            "Access points for plugging in devices",
            "Circuit protection",
            "Voltage regulation",
            "Current measurement"
          ],
          correctAnswer: 0,
          explanation: "Outlets allow connection of portable devices to power."
        },
        {
          id: 14,
          question: "What do junction boxes contain?",
          options: [
            "Wire connections",
            "Only switches",
            "Only outlets",
            "Circuit breakers"
          ],
          correctAnswer: 0,
          explanation: "Junction boxes protect and contain wire splices and connections."
        },
        {
          id: 15,
          question: "What do circuit breakers do?",
          options: [
            "Protect circuits from overload",
            "Generate electricity",
            "Store electrical energy",
            "Change voltage levels"
          ],
          correctAnswer: 0,
          explanation: "Breakers automatically shut off when current exceeds safe levels."
        },
        {
          id: 16,
          question: "What must be replaced after blowing?",
          options: [
            "Fuses",
            "Circuit breakers",
            "Wire nuts",
            "Outlets"
          ],
          correctAnswer: 0,
          explanation: "Fuses contain a link that melts and must be replaced."
        },
        {
          id: 17,
          question: "What is one function of electrical boxes?",
          options: [
            "Protect wire connections from damage",
            "Make wiring more expensive",
            "Hide wiring completely",
            "Increase wire resistance"
          ],
          correctAnswer: 0,
          explanation: "Boxes prevent physical damage to connections and contain hazards."
        },
        {
          id: 18,
          question: "What does equipment grounding do?",
          options: [
            "Connects metal parts to ground for safety",
            "Increases equipment speed",
            "Reduces power consumption",
            "Changes equipment color"
          ],
          correctAnswer: 0,
          explanation: "Grounding provides safe path for fault currents to trip protection."
        },
        {
          id: 19,
          question: "What does bonding ensure?",
          options: [
            "All metal parts are at same electrical potential",
            "Wires are the same color",
            "All devices work simultaneously",
            "Power is always available"
          ],
          correctAnswer: 0,
          explanation: "Bonding prevents dangerous voltage between nearby metal objects."
        },
        {
          id: 20,
          question: "What type of box is used outdoors?",
          options: [
            "Weatherproof box",
            "Device box",
            "Junction box",
            "Panel box"
          ],
          correctAnswer: 0,
          explanation: "Weatherproof boxes protect connections from moisture and elements."
        }
      ]
    },
    {
      id: 5,
      title: "Basic Measurements and Tools",
      completed: false,
      content: `# Basic Measurements and Tools

## Essential Measurement Tools

Electrical work requires specific tools for measuring different properties. Using the right tool for each measurement ensures accuracy and safety.

**Multimeters** are the most versatile electrical measuring tools. They combine several measurement functions in one device. Basic multimeters measure voltage, current, and resistance. Digital multimeters show readings on a digital display, while analog multimeters use a moving needle.

**Voltage testers** quickly check if voltage is present. They're simpler than multimeters and are used for basic safety checks. Non-contact voltage testers can detect voltage without touching conductors directly.

**Clamp meters** measure current without breaking the circuit. They clamp around a conductor and measure the magnetic field created by current flow. This is useful for measuring high currents safely.

**Insulation testers** check the quality of insulation on wires and equipment. They apply high voltage to measure insulation resistance, identifying potential problems before they cause failures.

## Using a Multimeter

Multimeters have several settings and functions:

**Voltage measurement** checks electrical pressure. To measure voltage:
1. Set the meter to voltage mode (V)
2. Select AC or DC as appropriate
3. Connect leads in parallel with the circuit
4. Read the display

**Current measurement** checks electron flow. To measure current:
1. Set the meter to current mode (A)
2. Select appropriate range
3. Connect leads in series with the circuit
4. Read the display

**Resistance measurement** checks opposition to current. To measure resistance:
1. Set the meter to resistance mode (Ω)
2. Ensure circuit power is OFF
3. Connect leads across the component
4. Read the display

**Continuity testing** checks if a path exists. Most multimeters beep when they detect a complete circuit. This is useful for checking fuses, switches, and wire connections.

## Safety with Measurement Tools

Electrical measurement tools must be used safely:

**Before measuring:**
- Inspect tools for damage
- Ensure proper settings for what you're measuring
- Use appropriate personal protective equipment
- Know the circuit you're working on

**During measurement:**
- Keep fingers behind safety barriers on probes
- Don't touch metal probe tips
- Work on de-energized circuits when possible
- Use one hand when measuring live circuits

**After measuring:**
- Turn off the meter when not in use
- Store probes properly
- Return to voltage setting to prevent damage
- Replace batteries when needed

Using tools correctly prevents accidents and ensures accurate measurements.

## Basic Hand Tools

Several hand tools are essential for electrical work:

**Screwdrivers** come in various types and sizes. Flat-head and Phillips are most common. Insulated screwdrivers protect against accidental contact with live parts.

**Pliers** grip, bend, and cut wires. Needle-nose pliers reach into tight spaces. Linesman pliers cut and twist wires. Side-cutting pliers trim wires close.

**Wire strippers** remove insulation without damaging conductors. They have notches for different wire sizes. Some include cutting blades and crimping features.

**Cable cutters** cut thicker cables cleanly. Diagonal cutters (dikes) cut smaller wires. Proper cutting tools prevent damaged conductors.

**Nut drivers** tighten and loosen nuts on electrical connections. They're faster than wrenches for hex-head screws and nuts.

## Specialty Electrical Tools

Some tools are specifically for electrical work:

**Circuit tracer** identifies which breaker controls a circuit. It injects a signal that can be detected at the panel.

**Voltage detector** senses presence of voltage without contact. It lights up or beeps near live conductors.

**Cable fish tape** pulls wires through walls and conduits. Flexible steel tape navigates through difficult paths.

**Conduit bender** shapes metal conduit for wiring installations. Proper bending maintains wire capacity and appearance.

**Torque screwdriver** applies precise tightening force. Critical connections like panel buses require specific torque.

**Megohmmeter** measures high resistance values for insulation testing. It applies high voltage to detect insulation weaknesses.

## Reading Electrical Diagrams

Electrical diagrams show how circuits are connected. Understanding common symbols helps read these diagrams:

**Power sources** are shown as batteries (DC) or circles with sine waves (AC). Long and short lines indicate battery polarity.

**Wires** are shown as straight lines. Crossing wires may be shown with a dot (connected) or without (not connected).

**Resistors** are shown as zigzag lines. Variable resistors have an arrow through the symbol.

**Capacitors** are shown as two parallel lines. Polarized capacitors have one curved line.

**Switches** are shown as break in a line with mechanism symbol. Different switch types have different symbols.

**Ground** is shown as three horizontal lines decreasing in length or a triangle pointing down.

Learning to read diagrams helps understand, design, and troubleshoot electrical systems.`,
      quiz: [
        {
          id: 1,
          question: "What is the most versatile electrical measuring tool?",
          options: [
            "Multimeter",
            "Screwdriver",
            "Hammer",
            "Pliers"
          ],
          correctAnswer: 0,
          explanation: "Multimeters measure voltage, current, resistance, and often other values."
        },
        {
          id: 2,
          question: "What do digital multimeters show readings on?",
          options: [
            "Digital display",
            "Moving needle",
            "Paper tape",
            "Light bulbs"
          ],
          correctAnswer: 0,
          explanation: "Digital meters show numbers on an electronic display."
        },
        {
          id: 3,
          question: "What do analog multimeters use?",
          options: [
            "Moving needle",
            "Digital display",
            "Sound signals",
            "Light patterns"
          ],
          correctAnswer: 0,
          explanation: "Analog meters have a needle that moves across a scale."
        },
        {
          id: 4,
          question: "What do voltage testers check?",
          options: [
            "If voltage is present",
            "Wire color",
            "Insulation thickness",
            "Current direction"
          ],
          correctAnswer: 0,
          explanation: "Voltage testers quickly verify presence of electrical potential."
        },
        {
          id: 5,
          question: "How do clamp meters measure current?",
          options: [
            "By measuring magnetic field around conductor",
            "By touching wire ends",
            "By measuring wire temperature",
            "By counting electrons"
          ],
          correctAnswer: 0,
          explanation: "Clamp meters use the magnetic field created by current flow."
        },
        {
          id: 6,
          question: "What do insulation testers check?",
          options: [
            "Quality of wire insulation",
            "Wire conductivity",
            "Current flow",
            "Voltage level"
          ],
          correctAnswer: 0,
          explanation: "Insulation testers detect weaknesses in insulation before failure."
        },
        {
          id: 7,
          question: "How are multimeter leads connected for voltage measurement?",
          options: [
            "In parallel with the circuit",
            "In series with the circuit",
            "Across a switch only",
            "To ground only"
          ],
          correctAnswer: 0,
          explanation: "Voltage is measured across components, so leads connect in parallel."
        },
        {
          id: 8,
          question: "How are multimeter leads connected for current measurement?",
          options: [
            "In series with the circuit",
            "In parallel with the circuit",
            "To any two points",
            "To ground points"
          ],
          correctAnswer: 0,
          explanation: "Current meters must be in the current path, so they connect in series."
        },
        {
          id: 9,
          question: "What must be OFF when measuring resistance?",
          options: [
            "Circuit power",
            "Multimeter display",
            "Room lights",
            "All other devices"
          ],
          correctAnswer: 0,
          explanation: "External power interferes with resistance measurements and can damage meters."
        },
        {
          id: 10,
          question: "What does continuity testing check?",
          options: [
            "If a complete path exists",
            "Voltage level",
            "Current amount",
            "Resistance value"
          ],
          correctAnswer: 0,
          explanation: "Continuity tests verify unbroken connections in circuits."
        },
        {
          id: 11,
          question: "What should you do before measuring?",
          options: [
            "Inspect tools for damage",
            "Close your eyes",
            "Stand on one foot",
            "Tell someone your plans"
          ],
          correctAnswer: 0,
          explanation: "Tool inspection prevents accidents from damaged equipment."
        },
        {
          id: 12,
          question: "Why use one hand when measuring live circuits?",
          options: [
            "To prevent current through heart",
            "To hold meter steady",
            "To write notes",
            "To point at components"
          ],
          correctAnswer: 0,
          explanation: "One-hand technique reduces risk of current passing through chest."
        },
        {
          id: 13,
          question: "What are insulated screwdrivers for?",
          options: [
            "Protection against accidental contact",
            "Better grip on screws",
            "Faster turning",
            "Lighter weight"
          ],
          correctAnswer: 0,
          explanation: "Insulation prevents shock if screwdriver contacts live parts."
        },
        {
          id: 14,
          question: "What do needle-nose pliers do well?",
          options: [
            "Reach into tight spaces",
            "Cut thick cables",
            "Bend conduit",
            "Measure voltage"
          ],
          correctAnswer: 0,
          explanation: "Long, thin jaws access confined areas for gripping and bending."
        },
        {
          id: 15,
          question: "What do wire strippers remove?",
          options: [
            "Insulation without damaging wire",
            "Wire color coating",
            "Wire length",
            "Wire memory"
          ],
          correctAnswer: 0,
          explanation: "Proper strippers cut only insulation, leaving conductor intact."
        },
        {
          id: 16,
          question: "What does a circuit tracer identify?",
          options: [
            "Which breaker controls a circuit",
            "Wire material",
            "Current amount",
            "Voltage type"
          ],
          correctAnswer: 0,
          explanation: "Circuit tracers help identify connections at electrical panels."
        },
        {
          id: 17,
          question: "What does a voltage detector do?",
          options: [
            "Senses voltage without contact",
            "Measures exact voltage",
            "Changes voltage level",
            "Generates voltage"
          ],
          correctAnswer: 0,
          explanation: "Non-contact detectors indicate presence of voltage for safety checks."
        },
        {
          id: 18,
          question: "What does cable fish tape do?",
          options: [
            "Pulls wires through walls",
            "Cuts wires to length",
            "Measures wire size",
            "Colors wire insulation"
          ],
          correctAnswer: 0,
          explanation: "Fish tape helps route wires through confined spaces."
        },
        {
          id: 19,
          question: "What does a megohmmeter measure?",
          options: [
            "High resistance for insulation testing",
            "Low resistance for conductors",
            "Voltage levels",
            "Current flow"
          ],
          correctAnswer: 0,
          explanation: "Megohmmeters test insulation quality with high voltage."
        },
        {
          id: 20,
          question: "How are batteries shown in diagrams?",
          options: [
            "Long and short lines",
            "Circles with sine waves",
            "Zigzag lines",
            "Parallel lines"
          ],
          correctAnswer: 0,
          explanation: "Battery symbols show polarity with different line lengths."
        }
      ]
    },
    {
      id: 6,
      title: "Electrical Safety and Codes",
      completed: false,
      content: `# Electrical Safety and Codes

## Personal Protective Equipment (PPE)

Working with electricity requires proper protective equipment. PPE reduces the risk of injury from electrical hazards.

**Insulated gloves** protect hands from electric shock. They're rated for specific voltage levels and must be tested regularly. Leather protectors go over insulated gloves to prevent physical damage.

**Safety glasses** protect eyes from sparks, flashes, and debris. Electrical work can create arcs that emit intense light and hot particles. Side shields provide additional protection.

**Flame-resistant clothing** protects against burns from electrical arcs. Natural fibers like cotton are better than synthetics, which can melt. Special arc-rated clothing is required for high-risk work.

**Insulated tools** prevent conduction through tools to the user. They have insulated handles that cover metal parts. Regularly inspect insulated tools for damage.

**Voltage-rated equipment** is tested for specific voltage levels. Using equipment beyond its rating is dangerous. Always check equipment ratings before use.

## Working Safely with Electricity

Safe work practices prevent accidents and injuries:

**Lockout/Tagout** procedures ensure equipment stays de-energized during work. This involves:
- Turning off power at the source
- Placing a lock on the disconnect
- Tagging with warning information
- Testing to verify de-energization
- Keeping the key with the worker

**Maintain safe distances** from energized equipment. Minimum approach distances increase with voltage. Never assume you know the voltage level - always verify.

**Use proper ladder safety** when working at height. Fiberglass ladders are non-conductive. Metal ladders conduct electricity and should never be used for electrical work.

**Keep work areas dry** to prevent shock hazards. Water greatly increases conductivity. Use rubber mats in damp areas and avoid working in wet conditions.

**Work with a partner** when possible. A second person can assist in emergencies and provide help if needed.

## Electrical Codes and Standards

Electrical codes establish minimum safety requirements. They're based on years of experience and accident prevention.

**National Electrical Code (NEC)** is the primary electrical code in the United States. It's updated every three years to incorporate new safety knowledge and technology. The NEC covers installation requirements for safety.

**Local codes** may add additional requirements. Always check local regulations, as they can be more restrictive than national codes.

**Occupational Safety and Health Administration (OSHA)** sets workplace safety standards. OSHA regulations protect workers from electrical hazards on the job.

**National Fire Protection Association (NFPA)** publishes the NEC and other safety standards. NFPA codes are widely adopted and recognized.

**International standards** like IEC (International Electrotechnical Commission) provide guidelines used in many countries.

## Common Electrical Hazards

Understanding hazards helps prevent accidents:

**Electric shock** occurs when current passes through the body. Effects range from tingling to cardiac arrest. Current as low as 50 milliamps can be fatal.

**Electrical burns** result from heat generated by current flow. Arc flashes can cause severe burns even without direct contact.

**Falls** may occur when shocked while working at height. The muscle contraction from shock can cause loss of balance.

**Fires** can start from overheated wires, faulty connections, or equipment failures. Electrical fires often start inside walls where they're not immediately visible.

**Explosions** may occur in areas with flammable gases or dust. Electrical sparks can ignite explosive atmospheres.

## Ground Fault Protection

Ground fault protection prevents shock hazards:

**Ground Fault Circuit Interrupters (GFCIs)** detect small differences between hot and neutral currents. If current leaks to ground (through a person), the GFCI trips quickly to prevent shock. GFCIs are required in bathrooms, kitchens, garages, and outdoor areas.

**Arc Fault Circuit Interrupters (AFCIs)** detect dangerous arc patterns that can cause fires. They're required in bedroom circuits and other living areas.

**Equipment Grounding** provides a safe path for fault currents. Proper grounding trips breakers quickly during faults.

**Double insulation** provides two layers of protection on tools and appliances. This eliminates the need for grounding on certain equipment.

## Emergency Response

Knowing what to do in electrical emergencies saves lives:

**If someone is being shocked:**
- Don't touch them directly
- Turn off power if possible
- Use non-conductive material to separate them from source
- Call for emergency help immediately
- Begin CPR if trained and needed

**Electrical fires:**
- Turn off power if safe to do so
- Use Class C fire extinguisher (for electrical fires)
- Never use water on electrical fires
- Evacuate and call fire department

**Downed power lines:**
- Assume they are energized
- Stay at least 30 feet away
- Warn others to stay away
- Call utility company immediately

**Equipment malfunctions:**
- Turn off and unplug equipment
- Don't use damaged equipment
- Tag equipment "Do Not Use"
- Have qualified person repair

Safety knowledge and proper procedures protect everyone involved with electrical systems.`,
      quiz: [
        {
          id: 1,
          question: "What do insulated gloves protect against?",
          options: [
            "Electric shock",
            "Chemical burns",
            "Heat only",
            "Cuts only"
          ],
          correctAnswer: 0,
          explanation: "Insulated gloves prevent current from passing through hands."
        },
        {
          id: 2,
          question: "What protects eyes from sparks and flashes?",
          options: [
            "Safety glasses",
            "Regular glasses",
            "Sunglasses",
            "No protection needed"
          ],
          correctAnswer: 0,
          explanation: "Safety glasses shield eyes from electrical arc hazards."
        },
        {
          id: 3,
          question: "What type of clothing is better for electrical work?",
          options: [
            "Natural fibers like cotton",
            "Synthetic materials",
            "Silk fabrics",
            "Wool blends"
          ],
          correctAnswer: 0,
          explanation: "Natural fibers don't melt like synthetics if exposed to heat."
        },
        {
          id: 4,
          question: "What do insulated tools prevent?",
          options: [
            "Conduction through tools to user",
            "Tools from getting dirty",
            "Tools from rusting",
            "Tools from breaking"
          ],
          correctAnswer: 0,
          explanation: "Insulation on tools prevents shock if they contact live parts."
        },
        {
          id: 5,
          question: "What should you check before using equipment?",
          options: [
            "Voltage ratings",
            "Color",
            "Weight",
            "Brand name"
          ],
          correctAnswer: 0,
          explanation: "Equipment must be rated for the voltage present."
        },
        {
          id: 6,
          question: "What does lockout/tagout ensure?",
          options: [
            "Equipment stays de-energized during work",
            "Equipment works faster",
            "Equipment looks neat",
            "Equipment costs less"
          ],
          correctAnswer: 0,
          explanation: "Lockout/tagout prevents accidental re-energization during maintenance."
        },
        {
          id: 7,
          question: "What type of ladder should be used for electrical work?",
          options: [
            "Fiberglass",
            "Aluminum",
            "Steel",
            "Wooden"
          ],
          correctAnswer: 0,
          explanation: "Fiberglass ladders are non-conductive for electrical safety."
        },
        {
          id: 8,
          question: "Why keep work areas dry?",
          options: [
            "To prevent shock hazards",
            "To see better",
            "To work faster",
            "To save money"
          ],
          correctAnswer: 0,
          explanation: "Water increases conductivity and shock risk dramatically."
        },
        {
          id: 9,
          question: "What is the primary electrical code in the United States?",
          options: [
            "National Electrical Code (NEC)",
            "International Building Code",
            "Local city code",
            "OSHA manual"
          ],
          correctAnswer: 0,
          explanation: "The NEC sets minimum safety standards for electrical installations."
        },
        {
          id: 10,
          question: "How often is the NEC updated?",
          options: [
            "Every three years",
            "Every year",
            "Every five years",
            "Every ten years"
          ],
          correctAnswer: 0,
          explanation: "Three-year cycles incorporate new safety knowledge and technology."
        },
        {
          id: 11,
          question: "What does OSHA set?",
          options: [
            "Workplace safety standards",
            "Electrical product prices",
            "Wire color codes",
            "Tool designs"
          ],
          correctAnswer: 0,
          explanation: "OSHA protects workers through safety regulations and standards."
        },
        {
          id: 12,
          question: "What can current as low as 50 milliamps cause?",
          options: [
            "Fatal heart disruption",
            "Mild tingling only",
            "No effect at all",
            "Temporary numbness"
          ],
          correctAnswer: 0,
          explanation: "Very small currents through the chest can be lethal."
        },
        {
          id: 13,
          question: "What can cause falls during electrical work?",
          options: [
            "Muscle contraction from shock",
            "Slippery floors",
            "Poor lighting",
            "Heavy tools"
          ],
          correctAnswer: 0,
          explanation: "Electrical shock causes muscles to contract violently."
        },
        {
          id: 14,
          question: "What do GFCIs detect?",
          options: [
            "Difference between hot and neutral currents",
            "Voltage levels",
            "Wire temperature",
            "Current direction"
          ],
          correctAnswer: 0,
          explanation: "GFCIs trip when current leaks outside the normal path."
        },
        {
          id: 15,
          question: "Where are GFCIs required?",
          options: [
            "Bathrooms, kitchens, outdoor areas",
            "Only industrial sites",
            "Only commercial buildings",
            "Nowhere specifically"
          ],
          correctAnswer: 0,
          explanation: "GFCIs are required in areas with water exposure risk."
        },
        {
          id: 16,
          question: "What do AFCIs detect?",
          options: [
            "Dangerous arc patterns",
            "Ground faults",
            "Overcurrent conditions",
            "Voltage spikes"
          ],
          correctAnswer: 0,
          explanation: "AFCIs prevent fires by detecting dangerous electrical arcs."
        },
        {
          id: 17,
          question: "What should you do if someone is being shocked?",
          options: [
            "Don't touch them directly, turn off power",
            "Pull them away immediately",
            "Pour water on them",
            "Shout for help only"
          ],
          correctAnswer: 0,
          explanation: "Direct contact can make you part of the circuit."
        },
        {
          id: 18,
          question: "What type of fire extinguisher for electrical fires?",
          options: [
            "Class C",
            "Class A",
            "Class B",
            "Class D"
          ],
          correctAnswer: 0,
          explanation: "Class C extinguishers are for electrical equipment fires."
        },
        {
          id: 19,
          question: "How far should you stay from downed power lines?",
          options: [
            "At least 30 feet",
            "10 feet",
            "5 feet",
            "As close as needed"
          ],
          correctAnswer: 0,
          explanation: "30 feet is minimum safe distance from downed lines."
        },
        {
          id: 20,
          question: "What should you do with damaged equipment?",
          options: [
            "Tag it 'Do Not Use'",
            "Use it carefully",
            "Hide it",
            "Throw it away immediately"
          ],
          correctAnswer: 0,
          explanation: "Proper tagging prevents others from using unsafe equipment."
        }
      ]
    }
  ],
  
  finalExam: {
    title: "Electrical Engineering Certificate Final Examination",
    description: "Comprehensive exam covering all six modules of the Electrical Engineering Certificate course",
    passingScore: 70,
    questions: [
      {
        id: 1,
        question: "What is electricity?",
        options: [
          "The flow of electrical power or charge",
          "A type of magnet",
          "Heat energy moving through wires",
          "Light produced by bulbs"
        ],
        correctAnswer: 0,
        explanation: "Electricity is the flow of electrical charge through conductors.",
        module: 1
      },
      {
        id: 2,
        question: "What are the tiny particles that move to create electricity?",
        options: [
          "Electrons",
          "Protons",
          "Neutrons",
          "Atoms"
        ],
        correctAnswer: 0,
        explanation: "Electrons moving through conductors create electric current.",
        module: 1
      },
      {
        id: 3,
        question: "What is voltage?",
        options: [
          "The force that pushes electrons",
          "The speed of electron flow",
          "The amount of electron flow",
          "The resistance to electron flow"
        ],
        correctAnswer: 0,
        explanation: "Voltage is the electrical pressure that pushes electrons.",
        module: 1
      },
      {
        id: 4,
        question: "What is an electrical circuit?",
        options: [
          "A complete path for electricity to flow",
          "A broken connection in wires",
          "A type of battery",
          "A measuring device"
        ],
        correctAnswer: 0,
        explanation: "A circuit provides a continuous path for current flow.",
        module: 2
      },
      {
        id: 5,
        question: "How are components connected in a series circuit?",
        options: [
          "One after another in a single path",
          "Side by side in multiple paths",
          "In a circle pattern",
          "In random order"
        ],
        correctAnswer: 0,
        explanation: "Series connections create a single continuous path.",
        module: 2
      },
      {
        id: 6,
        question: "What happens if one component fails in a series circuit?",
        options: [
          "The entire circuit stops working",
          "Only that component stops",
          "Current increases elsewhere",
          "Voltage doubles"
        ],
        correctAnswer: 0,
        explanation: "A break anywhere in series stops all current flow.",
        module: 2
      },
      {
        id: 7,
        question: "What does Ohm's Law describe?",
        options: [
          "Relationship between voltage, current, and resistance",
          "How magnets affect electricity",
          "How batteries produce voltage",
          "Why wires get warm"
        ],
        correctAnswer: 0,
        explanation: "Ohm's Law shows the mathematical relationship between V, I, and R.",
        module: 3
      },
      {
        id: 8,
        question: "What is the Ohm's Law formula?",
        options: [
          "V = I × R",
          "I = V + R",
          "R = V - I",
          "V = I ÷ R"
        ],
        correctAnswer: 0,
        explanation: "Voltage equals current multiplied by resistance.",
        module: 3
      },
      {
        id: 9,
        question: "What is electrical power?",
        options: [
          "Rate at which electrical energy is used",
          "Amount of voltage available",
          "Speed of electron flow",
          "Type of current"
        ],
        correctAnswer: 0,
        explanation: "Power measures how fast energy is being used.",
        module: 3
      },
      {
        id: 10,
        question: "What is solid wire?",
        options: [
          "Wire with a single solid metal core",
          "Wire with multiple thin strands",
          "Wire with thick insulation",
          "Wire that cannot bend"
        ],
        correctAnswer: 0,
        explanation: "Solid wire has one continuous conductor, making it rigid.",
        module: 4
      },
      {
        id: 11,
        question: "What is stranded wire?",
        options: [
          "Wire with multiple thin wires twisted together",
          "Wire that is always coated in plastic",
          "Wire that cannot conduct well",
          "Wire used only outdoors"
        ],
        correctAnswer: 0,
        explanation: "Stranded wire is flexible due to many small conductors.",
        module: 4
      },
      {
        id: 12,
        question: "What color are hot wires typically?",
        options: [
          "Black or Red",
          "White or Gray",
          "Green or Bare",
          "Blue or Yellow"
        ],
        correctAnswer: 0,
        explanation: "Black and red identify wires carrying current from source.",
        module: 4
      },
      {
        id: 13,
        question: "What is the most versatile electrical measuring tool?",
        options: [
          "Multimeter",
          "Screwdriver",
          "Hammer",
          "Pliers"
        ],
        correctAnswer: 0,
        explanation: "Multimeters measure voltage, current, resistance, and more.",
        module: 5
      },
      {
        id: 14,
        question: "How are multimeter leads connected for voltage measurement?",
        options: [
          "In parallel with the circuit",
          "In series with the circuit",
          "Across a switch only",
          "To ground only"
        ],
        correctAnswer: 0,
        explanation: "Voltage is measured across components, so parallel connection.",
        module: 5
      },
      {
        id: 15,
        question: "How are multimeter leads connected for current measurement?",
        options: [
          "In series with the circuit",
          "In parallel with the circuit",
          "To any two points",
          "To ground points"
        ],
        correctAnswer: 0,
        explanation: "Current meters must be in the current path, so series connection.",
        module: 5
      },
      {
        id: 16,
        question: "What do insulated gloves protect against?",
        options: [
          "Electric shock",
          "Chemical burns",
          "Heat only",
          "Cuts only"
        ],
        correctAnswer: 0,
        explanation: "Insulated gloves prevent current from passing through hands.",
        module: 6
      },
      {
        id: 17,
        question: "What protects eyes from sparks and flashes?",
        options: [
          "Safety glasses",
          "Regular glasses",
          "Sunglasses",
          "No protection needed"
        ],
        correctAnswer: 0,
        explanation: "Safety glasses shield eyes from electrical arc hazards.",
        module: 6
      },
      {
        id: 18,
        question: "What does lockout/tagout ensure?",
        options: [
          "Equipment stays de-energized during work",
          "Equipment works faster",
          "Equipment looks neat",
          "Equipment costs less"
        ],
        correctAnswer: 0,
        explanation: "Lockout/tagout prevents accidental re-energization.",
        module: 6
      },
      {
        id: 19,
        question: "What does DC stand for?",
        options: [
          "Direct Current",
          "Dual Current",
          "Dynamic Current",
          "Digital Current"
        ],
        correctAnswer: 0,
        explanation: "DC means Direct Current, flowing in one direction only.",
        module: 1
      },
      {
        id: 20,
        question: "What does AC stand for?",
        options: [
          "Alternating Current",
          "Active Current",
          "Amplified Current",
          "Atomic Current"
        ],
        correctAnswer: 0,
        explanation: "AC means Alternating Current, changing direction regularly.",
        module: 1
      },
      {
        id: 21,
        question: "What type of circuit do Christmas tree lights often use?",
        options: [
          "Series circuit",
          "Parallel circuit",
          "Mixed circuit",
          "No circuit"
        ],
        correctAnswer: 0,
        explanation: "Series connection means one failed bulb affects all.",
        module: 2
      },
      {
        id: 22,
        question: "What type of circuit does home lighting use?",
        options: [
          "Parallel circuit",
          "Series circuit",
          "Simple circuit",
          "Complex circuit"
        ],
        correctAnswer: 0,
        explanation: "Parallel wiring allows lights to work independently.",
        module: 2
      },
      {
        id: 23,
        question: "If voltage is 12V and resistance is 4Ω, what is the current?",
        options: [
          "3A",
          "48A",
          "0.33A",
          "8A"
        ],
        correctAnswer: 0,
        explanation: "I = V ÷ R = 12 ÷ 4 = 3 amperes.",
        module: 3
      },
      {
        id: 24,
        question: "What is the power formula?",
        options: [
          "P = V × I",
          "P = V ÷ I",
          "P = V + I",
          "P = V - I"
        ],
        correctAnswer: 0,
        explanation: "Power equals voltage multiplied by current.",
        module: 3
      },
      {
        id: 25,
        question: "Where is solid wire commonly used?",
        options: [
          "Permanent installations like house wiring",
          "Extension cords",
          "Appliance cords",
          "Portable equipment"
        ],
        correctAnswer: 0,
        explanation: "Solid wire works well in fixed installations.",
        module: 4
      },
      {
        id: 26,
        question: "Where is stranded wire commonly used?",
        options: [
          "Extension cords and appliance cords",
          "House wiring in walls",
          "Circuit board traces",
          "Underground cables"
        ],
        correctAnswer: 0,
        explanation: "Stranded wire's flexibility suits applications with movement.",
        module: 4
      },
      {
        id: 27,
        question: "What do digital multimeters show readings on?",
        options: [
          "Digital display",
          "Moving needle",
          "Paper tape",
          "Light bulbs"
        ],
        correctAnswer: 0,
        explanation: "Digital meters show numbers on an electronic display.",
        module: 5
      },
      {
        id: 28,
        question: "What do analog multimeters use?",
        options: [
          "Moving needle",
          "Digital display",
          "Sound signals",
          "Light patterns"
        ],
        correctAnswer: 0,
        explanation: "Analog meters have a needle that moves across a scale.",
        module: 5
      },
      {
        id: 29,
        question: "What type of ladder should be used for electrical work?",
        options: [
          "Fiberglass",
          "Aluminum",
          "Steel",
          "Wooden"
        ],
        correctAnswer: 0,
        explanation: "Fiberglass ladders are non-conductive for electrical safety.",
        module: 6
      },
      {
        id: 30,
        question: "Why keep work areas dry?",
        options: [
          "To prevent shock hazards",
          "To see better",
          "To work faster",
          "To save money"
        ],
        correctAnswer: 0,
        explanation: "Water increases conductivity and shock risk dramatically.",
        module: 6
      },
      {
        id: 31,
        question: "What is a common conductor used in electrical wires?",
        options: [
          "Copper",
          "Rubber",
          "Plastic",
          "Glass"
        ],
        correctAnswer: 0,
        explanation: "Copper is widely used because it conducts well and is affordable.",
        module: 1
      },
      {
        id: 32,
        question: "What do resistors do in a circuit?",
        options: [
          "Limit or control current flow",
          "Store electrical energy",
          "Generate electricity",
          "Change AC to DC"
        ],
        correctAnswer: 0,
        explanation: "Resistors oppose current flow to control circuit behavior.",
        module: 2
      },
      {
        id: 33,
        question: "If a device uses 120V and 0.5A, what is its power?",
        options: [
          "60W",
          "240W",
          "0.004W",
          "120.5W"
        ],
        correctAnswer: 0,
        explanation: "P = V × I = 120 × 0.5 = 60 watts.",
        module: 3
      },
      {
        id: 34,
        question: "What is the most common conductor material?",
        options: [
          "Copper",
          "Aluminum",
          "Steel",
          "Silver"
        ],
        correctAnswer: 0,
        explanation: "Copper offers good conductivity at reasonable cost.",
        module: 4
      },
      {
        id: 35,
        question: "What do wire strippers remove?",
        options: [
          "Insulation without damaging wire",
          "Wire color coating",
          "Wire length",
          "Wire memory"
        ],
        correctAnswer: 0,
        explanation: "Proper strippers cut only insulation, leaving conductor intact.",
        module: 5
      },
      {
        id: 36,
        question: "What is the primary electrical code in the United States?",
        options: [
          "National Electrical Code (NEC)",
          "International Building Code",
          "Local city code",
          "OSHA manual"
        ],
        correctAnswer: 0,
        explanation: "The NEC sets minimum safety standards for electrical installations.",
        module: 6
      },
      {
        id: 37,
        question: "What type of current do batteries produce?",
        options: [
          "Direct Current (DC)",
          "Alternating Current (AC)",
          "Both AC and DC",
          "Neither AC nor DC"
        ],
        correctAnswer: 0,
        explanation: "Batteries produce DC from chemical reactions.",
        module: 1
      },
      {
        id: 38,
        question: "What do diodes allow?",
        options: [
          "Current flow in one direction only",
          "Current flow in both directions",
          "Voltage increase",
          "Current reversal"
        ],
        correctAnswer: 0,
        explanation: "Diodes act like one-way valves for electrical current.",
        module: 2
      },
      {
        id: 39,
        question: "What unit measures power?",
        options: [
          "Watts",
          "Volts",
          "Amps",
          "Ohms"
        ],
        correctAnswer: 0,
        explanation: "Watts (W) are the standard unit for measuring power.",
        module: 3
      },
      {
        id: 40,
        question: "What do circuit breakers do?",
        options: [
          "Protect circuits from overload",
          "Generate electricity",
          "Store electrical energy",
          "Change voltage levels"
        ],
        correctAnswer: 0,
        explanation: "Breakers automatically shut off when current exceeds safe levels.",
        module: 4
      }
    ]
  }
};

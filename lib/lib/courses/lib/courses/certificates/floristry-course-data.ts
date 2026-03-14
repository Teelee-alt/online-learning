export const floristryCertificate = {
  // COURSE METADATA & IDENTIFICATION
  id: "floristry-certificate",
  title: "Floristry (Certificate)",
  description: "Master the art of flower arranging, learn floral design fundamentals, care techniques, and create beautiful arrangements for various occasions.",
  duration: "6 weeks",
  timeCommitment: "4-6 hours per week",
  price: 12,
  upgradePrice: 18,
  icon: "💐",
  badge: "Certificate",
  
  // MODULE ARCHITECTURE - 6 MODULES + FINAL EXAM
  modules: [
    {
      id: 1,
      title: "Introduction to Floristry & Flower Care",
      content: `# Welcome to Floristry

## What is Floristry?
Floristry is the art of creating beautiful arrangements using flowers, foliage, and decorative materials. It combines creativity with technical skills to produce arrangements for various occasions. Professional florists understand both artistic design and practical flower care.

## Basic Flower Types
Flowers are categorized by their characteristics:
1. **Line Flowers**: Tall, slender flowers that create structure (like snapdragons)
2. **Mass Flowers**: Round, full flowers that add volume (like roses)
3. **Filler Flowers**: Small flowers that fill spaces (like baby's breath)
4. **Form Flowers**: Unique shaped flowers that add interest (like orchids)

## Essential Tools for Florists
Every florist needs these basic tools:
- **Floral Shears**: Sharp scissors for cutting stems
- **Floral Knife**: For precise cutting and shaping
- **Wire Cutters**: For cutting floral wire
- **Tape**: Floral tape for securing arrangements
- **Ribbon**: For decorative finishing touches
- **Vases/Containers**: Various sizes and shapes

## Flower Care Basics
Proper care extends flower life:
1. **Clean Vessels**: Always use clean containers
2. **Fresh Cuts**: Cut stems at an angle before arranging
3. **Clean Water**: Change water every two days
4. **Proper Temperature**: Keep flowers cool but not cold
5. **Remove Foliage**: Remove leaves below water line

## Common Flower Problems
Recognize and address these issues:
- **Wilting**: Usually means stems need fresh cuts
- **Drooping Heads**: Could indicate air in stems or bacterial growth
- **Yellow Leaves**: Often too much water or poor drainage
- **Brown Edges**: Usually dehydration or heat exposure

## Basic Flower Anatomy
Understanding flower structure helps with arrangement:
- **Stem**: Supports flower and transports water
- **Leaves**: Photosynthesis and visual appeal
- **Petals**: Attractive part that attracts pollinators
- **Stamen**: Male reproductive parts
- **Pistil**: Female reproductive parts
- **Sepals**: Protective leaf-like structures at base

## Choosing Quality Flowers
Select flowers with these characteristics:
- Firm, upright stems
- Bright, vibrant colors
- Petals that feel fresh and firm
- No brown edges or spots
- Healthy green leaves

## Safety in Floristry
Important safety practices:
- Keep tools clean and sharp
- Wash hands after handling flowers
- Be aware of toxic plants
- Handle sharp tools carefully
- Store chemicals properly`,
      completed: false,
      quiz: [
        {
          id: 1,
          question: "What type of flowers create structure in arrangements?",
          options: ["Mass flowers", "Line flowers", "Filler flowers", "Form flowers"],
          correctAnswer: 1,
          explanation: "Line flowers are tall and slender, creating the framework."
        },
        {
          id: 2,
          question: "What tool is used for precise cutting and shaping?",
          options: ["Wire cutters", "Floral knife", "Regular scissors", "Pliers"],
          correctAnswer: 1,
          explanation: "Floral knives allow precise control for professional cuts."
        },
        {
          id: 3,
          question: "How often should water be changed in arrangements?",
          options: ["Daily", "Every two days", "Weekly", "When it looks dirty"],
          correctAnswer: 1,
          explanation: "Changing water every two days prevents bacterial growth."
        },
        {
          id: 4,
          question: "What indicates stems need fresh cuts?",
          options: ["Yellow leaves", "Wilting", "Brown edges", "All of these"],
          correctAnswer: 1,
          explanation: "Wilting often means stems can't take up water effectively."
        },
        {
          id: 5,
          question: "What are the attractive parts that attract pollinators?",
          options: ["Stems", "Leaves", "Petals", "Sepals"],
          correctAnswer: 2,
          explanation: "Petals are colorful and attractive to pollinators."
        },
        {
          id: 6,
          question: "What type of flowers add volume to arrangements?",
          options: ["Line flowers", "Mass flowers", "Filler flowers", "Form flowers"],
          correctAnswer: 1,
          explanation: "Mass flowers are round and full, adding visual weight."
        },
        {
          id: 7,
          question: "What should be removed below the water line?",
          options: ["Petals", "Leaves", "Stems", "All foliage"],
          correctAnswer: 1,
          explanation: "Leaves below water decay and cause bacterial growth."
        },
        {
          id: 8,
          question: "What indicates dehydration in flowers?",
          options: ["Yellow leaves", "Brown edges", "Drooping heads", "Firm stems"],
          correctAnswer: 1,
          explanation: "Brown edges often mean the flower is dehydrated."
        },
        {
          id: 9,
          question: "How should stems be cut for arrangements?",
          options: ["Straight across", "At an angle", "Crushed", "Not cut"],
          correctAnswer: 1,
          explanation: "Angled cuts create more surface area for water uptake."
        },
        {
          id: 10,
          question: "What are small flowers that fill spaces called?",
          options: ["Line flowers", "Mass flowers", "Filler flowers", "Form flowers"],
          correctAnswer: 2,
          explanation: "Filler flowers complete arrangements by filling gaps."
        },
        {
          id: 11,
          question: "What should containers always be before use?",
          options: ["Decorated", "Clean", "Colorful", "Large"],
          correctAnswer: 1,
          explanation: "Clean containers prevent bacterial contamination."
        },
        {
          id: 12,
          question: "What are unique shaped flowers called?",
          options: ["Mass flowers", "Line flowers", "Form flowers", "Filler flowers"],
          correctAnswer: 2,
          explanation: "Form flowers have distinctive shapes that add interest."
        },
        {
          id: 13,
          question: "What transports water in flowers?",
          options: ["Petals", "Stems", "Leaves", "Sepals"],
          correctAnswer: 1,
          explanation: "Stems contain vessels that transport water and nutrients."
        },
        {
          id: 14,
          question: "What indicates healthy flower selection?",
          options: ["Brown spots", "Firm stems", "Drooping heads", "Yellow leaves"],
          correctAnswer: 1,
          explanation: "Firm stems indicate fresh, healthy flowers."
        },
        {
          id: 15,
          question: "What tool cuts floral wire?",
          options: ["Floral shears", "Wire cutters", "Knife", "Scissors"],
          correctAnswer: 1,
          explanation: "Wire cutters are designed for cutting metal wire safely."
        },
        {
          id: 16,
          question: "What might cause drooping flower heads?",
          options: ["Too much water", "Air in stems", "Clean water", "Cool temperature"],
          correctAnswer: 1,
          explanation: "Air bubbles in stems can block water uptake."
        },
        {
          id: 17,
          question: "What are the protective structures at flower bases?",
          options: ["Petals", "Sepals", "Leaves", "Stems"],
          correctAnswer: 1,
          explanation: "Sepals protect the developing flower bud."
        },
        {
          id: 18,
          question: "What should you wash after handling flowers?",
          options: ["Tools only", "Hands", "Containers", "Everything"],
          correctAnswer: 1,
          explanation: "Always wash hands after handling plant materials."
        },
        {
          id: 19,
          question: "How many basic flower categories are there?",
          options: ["Two", "Three", "Four", "Five"],
          correctAnswer: 2,
          explanation: "Four categories: line, mass, filler, and form flowers."
        },
        {
          id: 20,
          question: "What temperature is best for flowers?",
          options: ["Warm", "Cold", "Cool but not cold", "Hot"],
          correctAnswer: 2,
          explanation: "Cool temperatures extend flower life without freezing damage."
        }
      ]
    },
    {
      id: 2,
      title: "Basic Floral Design Principles",
      content: `# Design Fundamentals

## The Elements of Design
Understanding these elements creates beautiful arrangements:
1. **Line**: Creates movement and guides the eye
2. **Form**: The shape and structure of the arrangement
3. **Space**: Both positive (filled) and negative (empty) areas
4. **Texture**: Surface quality that adds visual interest
5. **Color**: The most noticeable element that creates mood

## Principles of Floral Design
These principles guide arrangement creation:
- **Balance**: Visual stability in the design
- **Proportion**: Size relationships between elements
- **Rhythm**: Creating visual movement through repetition
- **Harmony**: All elements working together pleasingly
- **Unity**: The arrangement feels complete and whole

## Color Theory Basics
Understanding color relationships:
- **Primary Colors**: Red, blue, yellow
- **Secondary Colors**: Green, orange, purple (mixing primaries)
- **Complementary Colors**: Opposite on color wheel (red/green)
- **Analogous Colors**: Next to each other on wheel (blue, blue-green, green)
- **Monochromatic**: Different shades of one color

## Creating Focal Points
Every arrangement needs a focal area:
- **Placement**: Usually near center or at visual weight point
- **Creation**: Use larger flowers, unique forms, or bright colors
- **Support**: Surround with complementary materials
- **Balance**: Don't make too dominant or too weak

## Basic Arrangement Shapes
Common shapes for beginners:
1. **Round/Mound**: Symmetrical, all-around viewing
2. **Horizontal**: Low and wide, for table centers
3. **Vertical**: Tall and narrow, for dramatic effect
4. **Triangular**: Classic shape with clear lines
5. **Crescent**: Curved, elegant shape

## Working with Different Viewing Angles
Consider how arrangements will be seen:
- **All-Around**: Viewed from all sides (table centers)
- **One-Sided**: Viewed primarily from front (against wall)
- **Two-Sided**: Viewed from front and back (entryway)
- **Top-Down**: Viewed from above (low arrangements)

## Scale and Proportion Guidelines
Important size relationships:
- Arrangement height = 1.5 times container height
- Width should balance with height
- Flowers should be proportional to container
- Consider where arrangement will be displayed

## Creating Visual Balance
Two types of balance in arrangements:
- **Symmetrical Balance**: Equal on both sides (formal)
- **Asymmetrical Balance**: Different but balanced (informal)
- **Visual Weight**: Dark colors appear heavier than light
- **Texture Weight**: Rough textures appear heavier than smooth

## Working with Different Materials
Combine various elements effectively:
- **Flowers**: Primary focus elements
- **Foliage**: Green materials that support flowers
- **Berries/Fruits**: Add texture and interest
- **Decorative Elements**: Ribbons, beads, or other accents

## Design Process Steps
Systematic approach to arranging:
1. Select container and materials
2. Establish framework with line flowers
3. Add focal flowers
4. Fill with secondary flowers
5. Add foliage and fillers
6. Final adjustments and finishing`,
      completed: false,
      quiz: [
        {
          id: 1,
          question: "What element creates movement in arrangements?",
          options: ["Color", "Line", "Texture", "Form"],
          correctAnswer: 1,
          explanation: "Line guides the viewer's eye through the arrangement."
        },
        {
          id: 2,
          question: "What principle creates visual stability?",
          options: ["Rhythm", "Balance", "Harmony", "Unity"],
          correctAnswer: 1,
          explanation: "Balance gives the arrangement visual stability."
        },
        {
          id: 3,
          question: "What are red, blue, and yellow?",
          options: ["Secondary colors", "Primary colors", "Complementary colors", "Analogous colors"],
          correctAnswer: 1,
          explanation: "Primary colors are the basis for all other colors."
        },
        {
          id: 4,
          question: "Where should focal points usually be placed?",
          options: ["At bottom", "At edges", "Near center", "Randomly"],
          correctAnswer: 2,
          explanation: "Focal points are typically near the visual center."
        },
        {
          id: 5,
          question: "What shape is symmetrical for all-around viewing?",
          options: ["Triangular", "Vertical", "Round/Mound", "Crescent"],
          correctAnswer: 2,
          explanation: "Round arrangements look good from all sides."
        },
        {
          id: 6,
          question: "What type of balance is equal on both sides?",
          options: ["Asymmetrical", "Symmetrical", "Visual", "Textural"],
          correctAnswer: 1,
          explanation: "Symmetrical balance creates formal, equal designs."
        },
        {
          id: 7,
          question: "What colors are opposite on the color wheel?",
          options: ["Analogous", "Monochromatic", "Complementary", "Primary"],
          correctAnswer: 2,
          explanation: "Complementary colors create high contrast."
        },
        {
          id: 8,
          question: "What is the relationship between sizes called?",
          options: ["Balance", "Proportion", "Rhythm", "Harmony"],
          correctAnswer: 1,
          explanation: "Proportion deals with size relationships."
        },
        {
          id: 9,
          question: "What type of arrangement is low and wide?",
          options: ["Vertical", "Horizontal", "Triangular", "Crescent"],
          correctAnswer: 1,
          explanation: "Horizontal arrangements work well as table centers."
        },
        {
          id: 10,
          question: "What creates visual movement through repetition?",
          options: ["Unity", "Rhythm", "Harmony", "Balance"],
          correctAnswer: 1,
          explanation: "Rhythm uses repetition to guide the eye."
        },
        {
          id: 11,
          question: "What colors are next to each other on the wheel?",
          options: ["Complementary", "Analogous", "Monochromatic", "Primary"],
          correctAnswer: 1,
          explanation: "Analogous colors create harmonious combinations."
        },
        {
          id: 12,
          question: "What appears heavier visually?",
          options: ["Light colors", "Dark colors", "Smooth textures", "Small flowers"],
          correctAnswer: 1,
          explanation: "Dark colors have more visual weight than light colors."
        },
        {
          id: 13,
          question: "What is different shades of one color?",
          options: ["Complementary", "Analogous", "Monochromatic", "Primary"],
          correctAnswer: 2,
          explanation: "Monochromatic designs use variations of one color."
        },
        {
          id: 14,
          question: "What principle makes elements work together?",
          options: ["Rhythm", "Balance", "Harmony", "Proportion"],
          correctAnswer: 2,
          explanation: "Harmony ensures all elements complement each other."
        },
        {
          id: 15,
          question: "What shape is tall and narrow?",
          options: ["Horizontal", "Vertical", "Round", "Crescent"],
          correctAnswer: 1,
          explanation: "Vertical arrangements create dramatic height."
        },
        {
          id: 16,
          question: "What is the first step in the design process?",
          options: ["Add foliage", "Select container", "Establish framework", "Add focal flowers"],
          correctAnswer: 1,
          explanation: "Always start by choosing your container and materials."
        },
        {
          id: 17,
          question: "What adds surface quality interest?",
          options: ["Color", "Texture", "Line", "Form"],
          correctAnswer: 1,
          explanation: "Texture refers to surface qualities of materials."
        },
        {
          id: 18,
          question: "What type of balance is different but balanced?",
          options: ["Symmetrical", "Asymmetrical", "Visual", "Physical"],
          correctAnswer: 1,
          explanation: "Asymmetrical balance creates informal, dynamic designs."
        },
        {
          id: 19,
          question: "How many design elements were discussed?",
          options: ["Three", "Four", "Five", "Six"],
          correctAnswer: 2,
          explanation: "Five elements: line, form, space, texture, color."
        },
        {
          id: 20,
          question: "What supports flowers in arrangements?",
          options: ["Only other flowers", "Foliage", "Containers", "Water"],
          correctAnswer: 1,
          explanation: "Foliage provides green support and fills space."
        }
      ]
    },
    {
      id: 3,
      title: "Hand-Tied Bouquets & Basic Arrangements",
      content: `# Creating Beautiful Bouquets

## What is a Hand-Tied Bouquet?
A hand-tied bouquet is assembled in your hand rather than in a container. The stems form a spiral pattern that creates a natural, flowing look. This technique is essential for wedding bouquets and gift arrangements.

## The Spiral Technique
Mastering the spiral method:
1. **Start with Center Flower**: Hold your first flower at desired angle
2. **Add at Angle**: Add each new stem at same angle, turning bouquet
3. **Maintain Spiral**: Stems should cross at same point
4. **Even Distribution**: Place flowers evenly around center
5. **Secure Properly**: Tie firmly at crossing point

## Choosing Flowers for Bouquets
Select flowers that work well together:
- **Primary Flowers**: 3-5 types for visual interest
- **Secondary Flowers**: 2-3 types to complement primaries
- **Filler Materials**: Greenery and small flowers
- **Consider Longevity**: Choose flowers with similar vase life

## Basic Bouquet Shapes
Common bouquet styles:
1. **Round Bouquet**: Symmetrical, dome-shaped
2. **Cascade Bouquet**: Flowers flow downward
3. **Nosegay**: Small, tightly packed bouquet
4. **Presentation Bouquet**: Long-stemmed, formal
5. **Biedermeier**: Concentric circles of different flowers

## Wiring and Taping Techniques
For more complex designs:
- **Wiring Methods**: Straight wire, hook wire, cross-pierce
- **Taping Techniques**: Start tight, stretch tape slightly
- **Combination Work**: Wiring delicate flowers for support
- **Tool Use**: Proper handling of floral wire and tape

## Ribbon Work and Finishing
Professional finishing touches:
- **Ribbon Selection**: Choose appropriate width and material
- **Wrapping Techniques**: Even, tight wrapping
- **Bow Making**: Various styles and sizes
- **Securing Methods**: Glue, pins, or tied finishes
- **Streamers**: Adding flowing ribbon ends

## Basic Vase Arrangements
Creating simple yet elegant vase designs:
1. **Prepare Container**: Clean and add fresh water
2. **Create Framework**: Start with greenery base
3. **Add Line Flowers**: Establish height and width
4. **Place Focal Flowers**: Most prominent flowers
5. **Fill Gaps**: Add smaller flowers and fillers
6. **Final Adjustments**: Step back and adjust as needed

## Conditioning Flowers for Arranging
Proper preparation extends arrangement life:
1. **Recut Stems**: Fresh angled cuts before arranging
2. **Remove Foliage**: Leaves below water line
3. **Harden Off**: Place in deep water for several hours
4. **Use Preservative**: Commercial or homemade flower food
5. **Handle Gently**: Avoid bruising petals and stems

## Working with Different Stem Types
Techniques for various stem characteristics:
- **Woody Stems** (roses, lilac): Crush or split ends
- **Hollow Stems** (delphinium, amaryllis): Fill with water then plug
- **Milky Stems** (poppy, euphorbia): Sear ends with flame
- **Fragile Stems** (tulips, freesia): Handle minimally

## Common Bouquet Problems and Solutions
Troubleshooting issues:
- **Uneven Shape**: Remove and re-spiral problem areas
- **Drooping Heads**: Check water uptake, recut stems
- **Gaps**: Add more filler materials
- **Too Heavy**: Remove some materials or use lighter flowers
- **Wilt During Assembly**: Work quickly, keep flowers in water until needed`,
      completed: false,
      quiz: [
        {
          id: 1,
          question: "How are hand-tied bouquet stems arranged?",
          options: ["Straight", "Random", "Spiral pattern", "Crossed"],
          correctAnswer: 2,
          explanation: "Spiral pattern allows natural, flowing appearance."
        },
        {
          id: 2,
          question: "What should you start with in spiral technique?",
          options: ["Greenery", "Center flower", "Ribbon", "Filler"],
          correctAnswer: 1,
          explanation: "Begin with your central or focal flower."
        },
        {
          id: 3,
          question: "What type of bouquet flows downward?",
          options: ["Round", "Cascade", "Nosegay", "Presentation"],
          correctAnswer: 1,
          explanation: "Cascade bouquets have flowers flowing downward."
        },
        {
          id: 4,
          question: "What method supports delicate flowers?",
          options: ["Taping only", "Wiring", "Gluing", "Tying"],
          correctAnswer: 1,
          explanation: "Wiring provides support for delicate stems."
        },
        {
          id: 5,
          question: "What should be done before arranging?",
          options: ["Recut stems", "Add ribbon", "Choose vase", "Make bow"],
          correctAnswer: 0,
          explanation: "Always make fresh cuts before arranging."
        },
        {
          id: 6,
          question: "What are small, tightly packed bouquets called?",
          options: ["Cascade", "Nosegay", "Presentation", "Biedermeier"],
          correctAnswer: 1,
          explanation: "Nosegays are compact, hand-held bouquets."
        },
        {
          id: 7,
          question: "What should be stretched slightly when using?",
          options: ["Wire", "Ribbon", "Floral tape", "String"],
          correctAnswer: 2,
          explanation: "Stretching floral tape makes it stickier."
        },
        {
          id: 8,
          question: "What should you start with in vase arrangements?",
          options: ["Focal flowers", "Greenery base", "Line flowers", "Filler"],
          correctAnswer: 1,
          explanation: "Greenery creates the framework for arrangement."
        },
        {
          id: 9,
          question: "What should be done with milky stems?",
          options: ["Crush ends", "Sear with flame", "Split ends", "Leave as is"],
          correctAnswer: 1,
          explanation: "Searing seals milky sap to prevent clogging."
        },
        {
          id: 10,
          question: "How many primary flower types for bouquets?",
          options: ["1-2", "3-5", "6-8", "As many as possible"],
          correctAnswer: 1,
          explanation: "3-5 types create interest without chaos."
        },
        {
          id: 11,
          question: "What bouquet has concentric flower circles?",
          options: ["Round", "Cascade", "Biedermeier", "Nosegay"],
          correctAnswer: 2,
          explanation: "Biedermeier style uses concentric rings."
        },
        {
          id: 12,
          question: "What should be removed below water line?",
          options: ["Petals", "Leaves", "Thorns", "All of these"],
          correctAnswer: 1,
          explanation: "Leaves decay underwater and cause bacteria."
        },
        {
          id: 13,
          question: "What is placing in deep water called?",
          options: ["Conditioning", "Hardening off", "Preserving", "Hydrating"],
          correctAnswer: 1,
          explanation: "Hardening off prepares flowers for arranging."
        },
        {
          id: 14,
          question: "What should you do with woody stems?",
          options: ["Sear", "Crush or split", "Leave alone", "Shorten"],
          correctAnswer: 1,
          explanation: "Crushing or splitting helps woody stems take water."
        },
        {
          id: 15,
          question: "What fixes uneven bouquet shape?",
          options: ["Add more flowers", "Remove and re-spiral", "Tie tighter", "Cut shorter"],
          correctAnswer: 1,
          explanation: "Re-spiraling problem areas corrects shape."
        },
        {
          id: 16,
          question: "What establishes height in vase arrangements?",
          options: ["Focal flowers", "Line flowers", "Greenery", "Filler"],
          correctAnswer: 1,
          explanation: "Line flowers set the arrangement's height and width."
        },
        {
          id: 17,
          question: "What should flowers have before arranging?",
          options: ["Similar vase life", "Same color", "Equal size", "Identical stems"],
          correctAnswer: 0,
          explanation: "Similar longevity keeps arrangement looking good."
        },
        {
          id: 18,
          question: "What is the final arrangement step?",
          options: ["Add water", "Final adjustments", "Add preservative", "Place in vase"],
          correctAnswer: 1,
          explanation: "Always step back and make final adjustments."
        },
        {
          id: 19,
          question: "How many bouquet shapes were discussed?",
          options: ["Three", "Four", "Five", "Six"],
          correctAnswer: 2,
          explanation: "Five shapes: round, cascade, nosegay, presentation, Biedermeier."
        },
        {
          id: 20,
          question: "What prevents flowers wilting during assembly?",
          options: ["Work slowly", "Work quickly", "Use warm water", "Add sugar"],
          correctAnswer: 1,
          explanation: "Work efficiently to minimize time out of water."
        }
      ]
    },
    {
      id: 4,
      title: "Seasonal Flowers & Color Schemes",
      content: `# Working with Seasons and Colors

## Understanding Flower Seasons
Flowers have natural growing seasons:
- **Spring**: Tulips, daffodils, hyacinths, peonies
- **Summer**: Roses, lilies, sunflowers, dahlias
- **Autumn**: Chrysanthemums, asters, zinnias, carnations
- **Winter**: Amaryllis, poinsettias, holly, paperwhites

## Year-Round Availability
Some flowers are available year-round:
- **Roses**: Available but quality varies by season
- **Carnations**: Consistently available
- **Chrysanthemums**: Widely available
- **Alstroemeria**: Good year-round option
- **Baby's Breath**: Always available

## Seasonal Color Palettes
Colors that reflect each season:
- **Spring**: Pastels - soft pinks, yellows, lavenders
- **Summer**: Brights - vibrant reds, oranges, purples
- **Autumn**: Warm tones - golds, oranges, deep reds
- **Winter**: Cool tones - whites, blues, silvers, deep greens

## Creating Seasonal Arrangements
Design ideas for each season:
- **Spring**: Light, airy arrangements with budding branches
- **Summer**: Lush, full arrangements with bold colors
- **Autumn**: Rich textures with berries and seed pods
- **Winter**: Elegant arrangements with evergreens and berries

## Working with Limited Seasonal Availability
When certain flowers aren't available:
- Use similar colored alternatives
- Focus on texture and form
- Use more foliage creatively
- Consider imported options (more expensive)
- Highlight what is seasonally special

## Color Scheme Planning
Creating harmonious color combinations:
1. **Monochromatic**: Different shades of one color
2. **Analogous**: Colors next to each other on wheel
3. **Complementary**: Opposite colors for contrast
4. **Triadic**: Three equally spaced colors
5. **Tetradic**: Four colors in rectangular pattern

## Psychological Impact of Colors
How colors affect mood and perception:
- **Red**: Passion, energy, love
- **Yellow**: Happiness, warmth, friendship
- **Blue**: Calm, serenity, trust
- **Green**: Nature, growth, harmony
- **Purple**: Royalty, luxury, creativity
- **White**: Purity, simplicity, elegance

## Cultural Color Meanings
Colors have different meanings across cultures:
- **White**: Wedding color in West, funeral color in East
- **Red**: Luck in China, danger in West
- **Yellow**: Happiness in West, mourning in Egypt
- **Purple**: Royalty in West, death in Brazil

## Working with Challenging Colors
Tips for difficult-to-use colors:
- **Orange**: Balance with greens or neutrals
- **Brown**: Use as accent, not dominant color
- **Black**: Use sparingly for dramatic effect
- **Neon Colors**: Pair with plenty of greenery

## Creating Theme-Based Arrangements
Designing for specific themes:
- **Romantic**: Soft pinks, reds, flowing lines
- **Modern**: Clean lines, limited color palette
- **Rustic**: Natural materials, loose arrangements
- **Tropical**: Bright colors, exotic flowers
- **Classic**: Traditional flowers, symmetrical designs

## Color Balance in Arrangements
Achieving pleasing color distribution:
- **60-30-10 Rule**: 60% dominant color, 30% secondary, 10% accent
- **Color Placement**: Distribute colors throughout arrangement
- **Visual Weight**: Dark colors lower, light colors higher
- **Transition Colors**: Use intermediate colors to blend

## Working with Variegated Flowers
Flowers with multiple colors:
- Treat as belonging to both colors
- Use to transition between color areas
- Don't overwhelm with too many variegated types
- Consider the dominant color when pairing`,
      completed: false,
      quiz: [
        {
          id: 1,
          question: "What flowers are typically spring blooms?",
          options: ["Sunflowers", "Tulips", "Chrysanthemums", "Amaryllis"],
          correctAnswer: 1,
          explanation: "Tulips are classic spring flowers."
        },
        {
          id: 2,
          question: "What season features warm golds and oranges?",
          options: ["Spring", "Summer", "Autumn", "Winter"],
          correctAnswer: 2,
          explanation: "Autumn colors are warm golds, oranges, and reds."
        },
        {
          id: 3,
          question: "What color scheme uses different shades of one color?",
          options: ["Analogous", "Monochromatic", "Complementary", "Triadic"],
          correctAnswer: 1,
          explanation: "Monochromatic uses variations of a single color."
        },
        {
          id: 4,
          question: "What emotion does blue typically represent?",
          options: ["Energy", "Calm", "Happiness", "Passion"],
          correctAnswer: 1,
          explanation: "Blue creates calm, serene feelings."
        },
        {
          id: 5,
          question: "What is available year-round?",
          options: ["Tulips", "Carnations", "Peonies", "Sunflowers"],
          correctAnswer: 1,
          explanation: "Carnations are consistently available."
        },
        {
          id: 6,
          question: "What are summer color characteristics?",
          options: ["Pastels", "Brights", "Warm tones", "Cool tones"],
          correctAnswer: 1,
          explanation: "Summer features bright, vibrant colors."
        },
        {
          id: 7,
          question: "What colors are opposite on the color wheel?",
          options: ["Analogous", "Complementary", "Monochromatic", "Triadic"],
          correctAnswer: 1,
          explanation: "Complementary colors create strong contrast."
        },
        {
          id: 8,
          question: "What does red symbolize in China?",
          options: ["Danger", "Luck", "Love", "Anger"],
          correctAnswer: 1,
          explanation: "Red represents good luck in Chinese culture."
        },
        {
          id: 9,
          question: "What percentage should be dominant color?",
          options: ["30%", "60%", "10%", "50%"],
          correctAnswer: 1,
          explanation: "60-30-10 rule: 60% dominant color."
        },
        {
          id: 10,
          question: "What flowers are winter blooms?",
          options: ["Daffodils", "Amaryllis", "Lilies", "Dahlias"],
          correctAnswer: 1,
          explanation: "Amaryllis blooms in winter."
        },
        {
          id: 11,
          question: "What season has pastel colors?",
          options: ["Spring", "Summer", "Autumn", "Winter"],
          correctAnswer: 0,
          explanation: "Spring features soft pastel colors."
        },
        {
          id: 12,
          question: "What are colors next to each other called?",
          options: ["Complementary", "Analogous", "Triadic", "Monochromatic"],
          correctAnswer: 1,
          explanation: "Analogous colors create harmonious combinations."
        },
        {
          id: 13,
          question: "What does yellow represent in Western cultures?",
          options: ["Mourning", "Happiness", "Royalty", "Death"],
          correctAnswer: 1,
          explanation: "Yellow represents happiness and warmth."
        },
        {
          id: 14,
          question: "What should be used with neon colors?",
          options: ["More neon", "Plenty of greenery", "Dark colors", "No other colors"],
          correctAnswer: 1,
          explanation: "Greenery balances bright neon colors."
        },
        {
          id: 15,
          question: "What theme uses natural, loose arrangements?",
          options: ["Modern", "Romantic", "Rustic", "Tropical"],
          correctAnswer: 2,
          explanation: "Rustic themes feature natural, informal designs."
        },
        {
          id: 16,
          question: "What are autumn arrangement elements?",
          options: ["Berries and seed pods", "Budding branches", "Exotic flowers", "Evergreens"],
          correctAnswer: 0,
          explanation: "Autumn arrangements include berries and natural elements."
        },
        {
          id: 17,
          question: "How many colors in a triadic scheme?",
          options: ["Two", "Three", "Four", "Five"],
          correctAnswer: 1,
          explanation: "Triadic uses three equally spaced colors."
        },
        {
          id: 18,
          question: "Where should dark colors typically be placed?",
          options: ["Higher", "Lower", "Center only", "Edges only"],
          correctAnswer: 1,
          explanation: "Dark colors have visual weight, so place lower."
        },
        {
          id: 19,
          question: "How many seasonal categories were discussed?",
          options: ["Two", "Three", "Four", "Five"],
          correctAnswer: 2,
          explanation: "Four seasons: spring, summer, autumn, winter."
        },
        {
          id: 20,
          question: "What should variegated flowers be treated as?",
          options: ["One color only", "Both colors", "Neutral", "Accent only"],
          correctAnswer: 1,
          explanation: "Consider both colors when pairing variegated flowers."
        }
      ]
    },
    {
      id: 5,
      title: "Special Occasion Floristry",
      content: `# Flowers for Celebrations

## Wedding Floristry Basics
Essential wedding flower elements:
- **Bridal Bouquet**: Most important arrangement
- **Bridesmaid Bouquets**: Complementary but simpler
- **Boutonnieres**: Small arrangements for groom and groomsmen
- **Corsages**: Wrist or pin-on for special women
- **Ceremony Decor**: Altar flowers, pew markers
- **Reception Decor**: Centerpieces, cake flowers

## Wedding Bouquet Styles
Popular styles for different wedding themes:
1. **Cascade**: Traditional, flowing style
2. **Round**: Classic, symmetrical
3. **Nosegay**: Compact, hand-tied
4. **Composite**: Made from individual petals
5. **Presentation**: Long-stemmed, elegant
6. **Biedermeier**: Concentric circles

## Funeral and Sympathy Flowers
Appropriate arrangements for condolences:
- **Casket Sprays**: Large arrangements on casket
- **Standing Sprays**: On easels near casket
- **Wreaths**: Circular symbol of eternal life
- **Crosses**: Religious significance
- **Baskets**: Living plants or mixed arrangements
- **Sympathy Bouquets**: For family homes

## Birthday Flowers
Age-appropriate flower choices:
- **Children**: Bright, cheerful flowers
- **Teens**: Trendy colors and styles
- **Adults**: Personal preference based colors
- **Seniors**: Fragrant, traditional flowers
- **Milestone Birthdays**: Extra special arrangements

## Anniversary Flowers
Traditional flowers by year:
- **1st (Paper)**: Carnations or chrysanthemums
- **5th (Wood)**: Daisies
- **10th (Tin/Aluminum)**: Daffodils
- **25th (Silver)**: Irises
- **50th (Gold)**: Yellow roses or violets

## Holiday Flowers
Traditional flowers for holidays:
- **Valentine's Day**: Red roses, tulips, carnations
- **Mother's Day**: Pink and pastel arrangements
- **Easter**: Lilies, tulips, daffodils
- **Christmas**: Poinsettias, amaryllis, evergreens
- **Thanksgiving**: Autumn colors, chrysanthemums

## Corporate and Business Flowers
Appropriate arrangements for business:
- **Reception Areas**: Large, impressive arrangements
- **Desk Arrangements**: Small, neat designs
- **Event Decor**: Consistent theme throughout
- **Gift Arrangements**: For clients or employees
- **Opening/Closing**: Special occasion arrangements

## Get Well Flowers
Considerations for hospital arrangements:
- **Size Restrictions**: Check hospital policies
- **Fragrance**: Avoid strong scents
- **Allergies**: Consider common allergies
- **Maintenance**: Easy-care arrangements
- **Safety**: No sharp elements or toxic plants

## Baby Flowers
Celebrating new arrivals:
- **Pink/Blue Themes**: Traditional gender colors
- **Yellow/Green**: Gender-neutral options
- **Baby Breath**: Literal and figurative use
- **Soft Textures**: Gentle, delicate flowers
- **Living Plants**: Long-lasting gifts

## Graduation Flowers
Celebrating academic achievements:
- **School Colors**: Incorporate graduate's colors
- **Diploma-Style**: Long, narrow arrangements
- **Celebratory**: Bright, happy colors
- **Practical**: Arrangements that travel well
- **Personalized**: Include graduate's interests

## Romantic Occasions
Flowers for love and romance:
- **First Date**: Simple, elegant single flowers
- **Anniversary**: Meaningful, personalized arrangements
- **Apology**: Sincere, thoughtful selections
- **Just Because**: Unexpected, cheerful arrangements
- **Proposal**: Dramatic, memorable displays

## Working with Client Requests
Understanding and fulfilling client needs:
- **Listen Carefully**: Note specific requests
- **Ask Questions**: Clarify preferences and budget
- **Show Options**: Provide visual references
- **Manage Expectations**: Be realistic about possibilities
- **Follow Up**: Ensure satisfaction after delivery`,
      completed: false,
      quiz: [
        {
          id: 1,
          question: "What is the most important wedding arrangement?",
          options: ["Centerpieces", "Bridal bouquet", "Boutonnieres", "Altar flowers"],
          correctAnswer: 1,
          explanation: "The bridal bouquet is the focal wedding arrangement."
        },
        {
          id: 2,
          question: "What wedding style has concentric circles?",
          options: ["Cascade", "Round", "Biedermeier", "Composite"],
          correctAnswer: 2,
          explanation: "Biedermeier bouquets feature concentric flower rings."
        },
        {
          id: 3,
          question: "What symbolizes eternal life in funeral flowers?",
          options: ["Crosses", "Wreaths", "Sprays", "Baskets"],
          correctAnswer: 1,
          explanation: "Wreaths' circular shape represents eternal life."
        },
        {
          id: 4,
          question: "What anniversary is paper?",
          options: ["1st", "5th", "10th", "25th"],
          correctAnswer: 0,
          explanation: "First anniversary traditionally is paper."
        },
        {
          id: 5,
          question: "What are traditional Valentine's Day flowers?",
          options: ["Tulips", "Red roses", "Lilies", "Carnations"],
          correctAnswer: 1,
          explanation: "Red roses are the classic Valentine's choice."
        },
        {
          id: 6,
          question: "What should be avoided in hospital arrangements?",
          options: ["Bright colors", "Strong fragrances", "Small size", "Ribbons"],
          correctAnswer: 1,
          explanation: "Strong scents can bother patients and staff."
        },
        {
          id: 7,
          question: "What are small arrangements for groomsmen called?",
          options: ["Corsages", "Boutonnieres", "Nosegays", "Sprays"],
          correctAnswer: 1,
          explanation: "Boutonnieres are worn on lapels."
        },
        {
          id: 8,
          question: "What anniversary flower is yellow roses?",
          options: ["25th", "50th", "10th", "1st"],
          correctAnswer: 1,
          explanation: "Yellow roses or violets for 50th (gold) anniversary."
        },
        {
          id: 9,
          question: "What holiday features lilies prominently?",
          options: ["Christmas", "Easter", "Thanksgiving", "Mother's Day"],
          correctAnswer: 1,
          explanation: "Easter lilies are traditional for Easter."
        },
        {
          id: 10,
          question: "What are gender-neutral baby colors?",
          options: ["Pink/Blue", "Yellow/Green", "Red/White", "Purple/Orange"],
          correctAnswer: 1,
          explanation: "Yellow and green work for any baby."
        },
        {
          id: 11,
          question: "What should corporate reception areas have?",
          options: ["Small arrangements", "Large impressive displays", "No flowers", "Only plants"],
          correctAnswer: 1,
          explanation: "Reception areas need impressive arrangements."
        },
        {
          id: 12,
          question: "What is a composite bouquet made from?",
          options: ["Whole flowers", "Individual petals", "Silk flowers", "Dried flowers"],
          correctAnswer: 1,
          explanation: "Composite bouquets use individual petals to create larger flowers."
        },
        {
          id: 13,
          question: "What anniversary is daisies?",
          options: ["1st", "5th", "10th", "25th"],
          correctAnswer: 1,
          explanation: "Daisies for 5th (wood) anniversary."
        },
        {
          id: 14,
          question: "What are traditional Christmas flowers?",
          options: ["Tulips", "Poinsettias", "Sunflowers", "Daffodils"],
          correctAnswer: 1,
          explanation: "Poinsettias are classic Christmas plants."
        },
        {
          id: 15,
          question: "What should be checked for hospital flowers?",
          options: ["Color only", "Size restrictions", "Price only", "Delivery time"],
          correctAnswer: 1,
          explanation: "Hospitals often have size limits for arrangements."
        },
        {
          id: 16,
          question: "What graduation arrangement is long and narrow?",
          options: ["Round bouquet", "Diploma-style", "Cascade", "Composite"],
          correctAnswer: 1,
          explanation: "Diploma-style arrangements resemble rolled diplomas."
        },
        {
          id: 17,
          question: "What is worn on wrists for weddings?",
          options: ["Boutonnieres", "Corsages", "Nosegays", "Sprays"],
          correctAnswer: 1,
          explanation: "Corsages can be wrist-worn or pinned."
        },
        {
          id: 18,
          question: "How many wedding bouquet styles were discussed?",
          options: ["Three", "Four", "Five", "Six"],
          correctAnswer: 3,
          explanation: "Six styles: cascade, round, nosegay, composite, presentation, Biedermeier."
        },
        {
          id: 19,
          question: "What should you do with client requests?",
          options: ["Listen carefully", "Ignore preferences", "Decide for them", "Only follow budget"],
          correctAnswer: 0,
          explanation: "Careful listening ensures client satisfaction."
        },
        {
          id: 20,
          question: "What anniversary flower is irises?",
          options: ["1st", "10th", "25th", "50th"],
          correctAnswer: 2,
          explanation: "Irises for 25th (silver) anniversary."
        }
      ]
    },
    {
      id: 6,
      title: "Business Basics for Florists",
      content: `# Starting Your Floristry Business

## Setting Up Your Work Space
Essential areas for a floristry business:
- **Design Area**: Clean, well-lit space for arranging
- **Storage Area**: Refrigerated and dry storage
- **Receiving Area**: For incoming flower deliveries
- **Retail Display**: Attractive customer viewing area
- **Office Space**: For administration and client meetings

## Essential Equipment and Supplies
What you need to start:
- **Cooler/Refrigerator**: Temperature-controlled flower storage
- **Work Tables**: Durable, waterproof surfaces
- **Water System**: Clean water supply and drainage
- **Tool Storage**: Organized tool and supply storage
- **Delivery Vehicle**: Reliable transportation for deliveries
- **Point of Sale System**: For transactions and records

## Sourcing Flowers and Supplies
Finding reliable suppliers:
- **Wholesale Markets**: Local flower markets
- **Growers**: Direct from flower farms
- **Importers**: For exotic or out-of-season flowers
- **Supply Companies**: For tools, containers, and accessories
- **Local Growers**: Supporting local agriculture

## Pricing Your Work
Creating profitable pricing structures:
- **Cost of Goods**: Flowers, containers, supplies
- **Labor Costs**: Time spent designing
- **Overhead**: Rent, utilities, insurance
- **Profit Margin**: Desired business profit
- **Market Rates**: What competitors charge
- **Value Pricing**: Charging for expertise and quality

## Customer Service Skills
Building a successful client base:
- **Listening Skills**: Understanding client needs
- **Communication**: Clear explanations and updates
- **Problem Solving**: Handling issues professionally
- **Follow-up**: Checking satisfaction after delivery
- **Relationship Building**: Creating loyal customers

## Marketing Your Floristry Business
Getting the word out:
- **Business Cards**: Professional contact information
- **Portfolio**: Photos of your best work
- **Social Media**: Instagram, Facebook, Pinterest
- **Website**: Online presence and ordering
- **Networking**: With wedding planners, event venues
- **Local Advertising**: In community publications

## Managing Orders and Deliveries
Efficient order processing:
- **Order Forms**: Clear documentation of requests
- **Calendar System**: Tracking delivery dates
- **Delivery Scheduling**: Efficient route planning
- **Quality Control**: Checking arrangements before delivery
- **Delivery Instructions**: Clear addresses and timing

## Basic Bookkeeping
Keeping financial records:
- **Income Tracking**: All sales and payments
- **Expense Recording**: All business costs
- **Tax Documentation**: Records for tax preparation
- **Profit/Loss Statements**: Understanding business performance
- **Budgeting**: Planning for expenses and growth

## Health and Safety Considerations
Maintaining a safe work environment:
- **Tool Safety**: Proper use and storage
- **Chemical Safety**: Handling floral preservatives
- **Cleanliness**: Preventing bacterial growth
- **Ergonomics**: Proper setup to prevent strain
- **First Aid**: Basic supplies and knowledge

## Building Your Portfolio
Showcasing your best work:
- **Photography**: High-quality photos of arrangements
- **Variety**: Showing range of styles and occasions
- **Before/After**: Transformations and special requests
- **Testimonials**: Client quotes and reviews
- **Continual Updates**: Adding new work regularly

## Working with Other Professionals
Building business relationships:
- **Wedding Planners**: Key partners for wedding flowers
- **Event Venues**: Preferred vendor relationships
- **Funeral Homes**: Regular sympathy flower needs
- **Interior Designers**: Ongoing decorative arrangements
- **Corporate Clients**: Regular business accounts

## Continuing Education
Staying current in your field:
- **Workshops**: Learning new techniques
- **Trade Shows**: Seeing new products and trends
- **Industry Publications**: Staying informed
- **Networking Groups**: Connecting with other florists
- **Online Courses**: Convenient skill development`,
      completed: false,
      quiz: [
        {
          id: 1,
          question: "What is essential for flower storage?",
          options: ["Warm area", "Cooler/refrigerator", "Dark room", "Dry shelf"],
          correctAnswer: 1,
          explanation: "Temperature-controlled storage extends flower life."
        },
        {
          id: 2,
          question: "What should work tables be?",
          options: ["Decorative", "Durable and waterproof", "Movable only", "Wooden"],
          correctAnswer: 1,
          explanation: "Waterproof surfaces handle water and plant materials."
        },
        {
          id: 3,
          question: "Where can you source flowers directly?",
          options: ["Only supermarkets", "Growers", "Clients", "Competitors"],
          correctAnswer: 1,
          explanation: "Direct from growers ensures freshness and better pricing."
        },
        {
          id: 4,
          question: "What should pricing include?",
          options: ["Only flower cost", "Cost, labor, overhead, profit", "Guesswork", "Competitor prices only"],
          correctAnswer: 1,
          explanation: "Complete pricing covers all costs and desired profit."
        },
        {
          id: 5,
          question: "What is key for customer service?",
          options: ["Fast talking", "Listening skills", "Low prices", "Large inventory"],
          correctAnswer: 1,
          explanation: "Listening ensures you understand client needs."
        },
        {
          id: 6,
          question: "What is important for marketing?",
          options: ["Hiding your work", "Portfolio of best work", "No photos", "Only word of mouth"],
          correctAnswer: 1,
          explanation: "A portfolio shows potential clients your capabilities."
        },
        {
          id: 7,
          question: "What tracks delivery dates?",
          options: ["Memory", "Calendar system", "Guesswork", "Client reminders"],
          correctAnswer: 1,
          explanation: "Calendar systems prevent missed deliveries."
        },
        {
          id: 8,
          question: "What financial records are needed?",
          options: ["Income tracking", "Only receipts", "No records", "Client names only"],
          correctAnswer: 0,
          explanation: "Tracking all income is essential for business."
        },
        {
          id: 9,
          question: "What prevents bacterial growth?",
          options: ["Warmth", "Cleanliness", "Darkness", "Dryness"],
          correctAnswer: 1,
          explanation: "Clean work areas prevent bacterial contamination."
        },
        {
          id: 10,
          question: "What showcases your work?",
          options: ["Memory", "Portfolio", "Business cards only", "Price lists"],
          correctAnswer: 1,
          explanation: "A portfolio displays your skills and style."
        },
        {
          id: 11,
          question: "Who are key partners for wedding business?",
          options: ["Competitors", "Wedding planners", "Only brides", "Family members"],
          correctAnswer: 1,
          explanation: "Wedding planners regularly need florists."
        },
        {
          id: 12,
          question: "What helps prevent work strain?",
          options: ["Working longer", "Ergonomics", "Ignoring pain", "Sitting only"],
          correctAnswer: 1,
          explanation: "Proper ergonomics prevents physical strain."
        },
        {
          id: 13,
          question: "What should a delivery vehicle be?",
          options: ["Decorative", "Reliable", "Large only", "New only"],
          correctAnswer: 1,
          explanation: "Reliable transportation ensures on-time deliveries."
        },
        {
          id: 14,
          question: "What is part of overhead costs?",
          options: ["Only flowers", "Rent and utilities", "Client gifts", "Personal items"],
          correctAnswer: 1,
          explanation: "Overhead includes business operation costs."
        },
        {
          id: 15,
          question: "What checks arrangements before delivery?",
          options: ["Quality control", "Price checking", "Client approval", "Random selection"],
          correctAnswer: 0,
          explanation: "Quality control ensures client satisfaction."
        },
        {
          id: 16,
          question: "What helps stay current in floristry?",
          options: ["Ignoring trends", "Continuing education", "Working alone", "Only old methods"],
          correctAnswer: 1,
          explanation: "Continuing education keeps skills current."
        },
        {
          id: 17,
          question: "What documents order details?",
          options: ["Memory", "Order forms", "Text messages", "Verbal agreements"],
          correctAnswer: 1,
          explanation: "Written order forms prevent misunderstandings."
        },
        {
          id: 18,
          question: "What should you have for safety?",
          options: ["No safety measures", "Basic first aid", "Only bandaids", "Ignore injuries"],
          correctAnswer: 1,
          explanation: "Basic first aid supplies handle minor injuries."
        },
        {
          id: 19,
          question: "How many business areas were discussed for setup?",
          options: ["Three", "Four", "Five", "Six"],
          correctAnswer: 2,
          explanation: "Five areas: design, storage, receiving, retail, office."
        },
        {
          id: 20,
          question: "What shows business performance?",
          options: ["Guesses", "Profit/loss statements", "Client smiles", "Delivery speed"],
          correctAnswer: 1,
          explanation: "Profit/loss statements show financial performance."
        }
      ]
    }
  ],
  
  // FINAL EXAM - 40 QUESTIONS FROM ALL MODULES
  finalExam: {
    title: "Floristry Certificate Final Examination",
    description: "Comprehensive exam covering all 6 modules. Score 70% or higher to earn your certificate.",
    passingScore: 70,
    questions: [
      {
        id: 1,
        question: "What type of flowers create structure?",
        options: ["Mass flowers", "Line flowers", "Filler flowers", "Form flowers"],
        correctAnswer: 1,
        explanation: "Line flowers create the arrangement framework.",
        module: 1
      },
      {
        id: 2,
        question: "What principle creates visual stability?",
        options: ["Rhythm", "Balance", "Harmony", "Unity"],
        correctAnswer: 1,
        explanation: "Balance gives arrangements visual stability.",
        module: 2
      },
      {
        id: 3,
        question: "How are hand-tied bouquet stems arranged?",
        options: ["Straight", "Random", "Spiral", "Crossed"],
        correctAnswer: 2,
        explanation: "Spiral pattern creates natural flow.",
        module: 3
      },
      {
        id: 4,
        question: "What are spring flower colors?",
        options: ["Brights", "Pastels", "Warm tones", "Cool tones"],
        correctAnswer: 1,
        explanation: "Spring features soft pastel colors.",
        module: 4
      },
      {
        id: 5,
        question: "What is the most important wedding arrangement?",
        options: ["Centerpieces", "Bridal bouquet", "Boutonnieres", "Altar flowers"],
        correctAnswer: 1,
        explanation: "Bridal bouquet is the wedding focal point.",
        module: 5
      },
      {
        id: 6,
        question: "What is essential for flower storage?",
        options: ["Warm area", "Cooler", "Dark room", "Dry shelf"],
        correctAnswer: 1,
        explanation: "Temperature control extends flower life.",
        module: 6
      },
      {
        id: 7,
        question: "What tool is for precise cutting?",
        options: ["Wire cutters", "Floral knife", "Scissors", "Pliers"],
        correctAnswer: 1,
        explanation: "Floral knives allow precise control.",
        module: 1
      },
      {
        id: 8,
        question: "What are primary colors?",
        options: ["Green, orange, purple", "Red, blue, yellow", "Black, white, gray", "Pink, teal, burgundy"],
        correctAnswer: 1,
        explanation: "Primary colors are red, blue, yellow.",
        module: 2
      },
      {
        id: 9,
        question: "What bouquet style flows downward?",
        options: ["Round", "Cascade", "Nosegay", "Presentation"],
        correctAnswer: 1,
        explanation: "Cascade bouquets have flowing downward lines.",
        module: 3
      },
      {
        id: 10,
        question: "What flowers bloom in winter?",
        options: ["Tulips", "Amaryllis", "Sunflowers", "Peonies"],
        correctAnswer: 1,
        explanation: "Amaryllis are winter-blooming flowers.",
        module: 4
      },
      {
        id: 11,
        question: "What anniversary is paper?",
        options: ["1st", "5th", "10th", "25th"],
        correctAnswer: 0,
        explanation: "First anniversary traditionally is paper.",
        module: 5
      },
      {
        id: 12,
        question: "What should work tables be?",
        options: ["Decorative", "Durable and waterproof", "Movable only", "Wooden"],
        correctAnswer: 1,
        explanation: "Waterproof surfaces handle water and materials.",
        module: 6
      },
      {
        id: 13,
        question: "How often change arrangement water?",
        options: ["Daily", "Every two days", "Weekly", "Monthly"],
        correctAnswer: 1,
        explanation: "Change water every two days to prevent bacteria.",
        module: 1
      },
      {
        id: 14,
        question: "What colors are opposite on wheel?",
        options: ["Analogous", "Complementary", "Monochromatic", "Primary"],
        correctAnswer: 1,
        explanation: "Complementary colors create strong contrast.",
        module: 2
      },
      {
        id: 15,
        question: "What supports delicate flowers?",
        options: ["Taping only", "Wiring", "Gluing", "Tying"],
        correctAnswer: 1,
        explanation: "Wiring provides support for delicate stems.",
        module: 3
      },
      {
        id: 16,
        question: "What uses one color shades?",
        options: ["Complementary", "Analogous", "Monochromatic", "Triadic"],
        correctAnswer: 2,
        explanation: "Monochromatic uses variations of one color.",
        module: 4
      },
      {
        id: 17,
        question: "What are traditional Valentine's flowers?",
        options: ["Tulips", "Red roses", "Lilies", "Carnations"],
        correctAnswer: 1,
        explanation: "Red roses are classic Valentine's flowers.",
        module: 5
      },
      {
        id: 18,
        question: "Where source flowers directly?",
        options: ["Supermarkets", "Growers", "Clients", "Competitors"],
        correctAnswer: 1,
        explanation: "Direct from growers ensures freshness.",
        module: 6
      },
      {
        id: 19,
        question: "What indicates dehydration?",
        options: ["Yellow leaves", "Brown edges", "Drooping heads", "Firm stems"],
        correctAnswer: 1,
        explanation: "Brown edges often mean dehydration.",
        module: 1
      },
      {
        id: 20,
        question: "What creates visual movement?",
        options: ["Unity", "Rhythm", "Harmony", "Balance"],
        correctAnswer: 1,
        explanation: "Rhythm uses repetition to guide the eye.",
        module: 2
      },
      {
        id: 21,
        question: "What are small, tight bouquets?",
        options: ["Cascade", "Nosegay", "Presentation", "Biedermeier"],
        correctAnswer: 1,
        explanation: "Nosegays are compact hand-held bouquets.",
        module: 3
      },
      {
        id: 22,
        question: "What season has bright colors?",
        options: ["Spring", "Summer", "Autumn", "Winter"],
        correctAnswer: 1,
        explanation: "Summer features bright, vibrant colors.",
        module: 4
      },
      {
        id: 23,
        question: "What should avoid strong scents?",
        options: ["Wedding flowers", "Hospital arrangements", "Funeral flowers", "Birthday flowers"],
        correctAnswer: 1,
        explanation: "Hospital patients may be sensitive to scents.",
        module: 5
      },
      {
        id: 24,
        question: "What should pricing include?",
        options: ["Only flowers", "All costs and profit", "Guesswork", "Competitor prices"],
        correctAnswer: 1,
        explanation: "Complete pricing covers all business costs.",
        module: 6
      },
      {
        id: 25,
        question: "How cut stems for arrangements?",
        options: ["Straight", "At angle", "Crushed", "Not cut"],
        correctAnswer: 1,
        explanation: "Angled cuts create more water uptake area.",
        module: 1
      },
      {
        id: 26,
        question: "What are small filling flowers?",
        options: ["Line flowers", "Mass flowers", "Filler flowers", "Form flowers"],
        correctAnswer: 2,
        explanation: "Filler flowers complete arrangements.",
        module: 2
      },
      {
        id: 27,
        question: "What is hardening off?",
        options: ["Drying flowers", "Deep water preparation", "Freezing", "Heating"],
        correctAnswer: 1,
        explanation: "Hardening off prepares flowers in deep water.",
        module: 3
      },
      {
        id: 28,
        question: "What percentage dominant color?",
        options: ["30%", "60%", "10%", "50%"],
        correctAnswer: 1,
        explanation: "60-30-10 rule: 60% dominant color.",
        module: 4
      },
      {
        id: 29,
        question: "What wedding style concentric circles?",
        options: ["Cascade", "Round", "Biedermeier", "Composite"],
        correctAnswer: 2,
        explanation: "Biedermeier has concentric flower rings.",
        module: 5
      },
      {
        id: 30,
        question: "What is key customer service?",
        options: ["Fast talking", "Listening", "Low prices", "Large inventory"],
        correctAnswer: 1,
        explanation: "Listening ensures understanding client needs.",
        module: 6
      },
      {
        id: 31,
        question: "What removes below water line?",
        options: ["Petals", "Leaves", "Stems", "All"],
        correctAnswer: 1,
        explanation: "Leaves decay underwater causing bacteria.",
        module: 1
      },
      {
        id: 32,
        question: "What balance is equal sides?",
        options: ["Asymmetrical", "Symmetrical", "Visual", "Textural"],
        correctAnswer: 1,
        explanation: "Symmetrical balance creates formal designs.",
        module: 2
      },
      {
        id: 33,
        question: "What do with milky stems?",
        options: ["Crush", "Sear", "Split", "Leave"],
        correctAnswer: 1,
        explanation: "Searing seals milky sap to prevent clogging.",
        module: 3
      },
      {
        id: 34,
        question: "What colors represent calm?",
        options: ["Red", "Blue", "Yellow", "Orange"],
        correctAnswer: 1,
        explanation: "Blue creates calm, serene feelings.",
        module: 4
      },
      {
        id: 35,
        question: "What anniversary flower daisies?",
        options: ["1st", "5th", "10th", "25th"],
        correctAnswer: 1,
        explanation: "Daisies for 5th (wood) anniversary.",
        module: 5
      },
      {
        id: 36,
        question: "What tracks delivery dates?",
        options: ["Memory", "Calendar", "Guesswork", "Client reminders"],
        correctAnswer: 1,
        explanation: "Calendar systems prevent missed deliveries.",
        module: 6
      },
      {
        id: 37,
        question: "How many flower categories?",
        options: ["Two", "Three", "Four", "Five"],
        correctAnswer: 2,
        explanation: "Four categories: line, mass, filler, form.",
        module: 1
      },
      {
        id: 38,
        question: "How many design principles?",
        options: ["Three", "Four", "Five", "Six"],
        correctAnswer: 2,
        explanation: "Five principles: balance, proportion, rhythm, harmony, unity.",
        module: 2
      },
      {
        id: 39,
        question: "How many bouquet styles discussed?",
        options: ["Three", "Four", "Five", "Six"],
        correctAnswer: 3,
        explanation: "Six wedding bouquet styles.",
        module: 5
      },
      {
        id: 40,
        question: "What shows business performance?",
        options: ["Guesses", "Profit/loss statements", "Client smiles", "Delivery speed"],
        correctAnswer: 1,
        explanation: "Profit/loss statements show financial performance.",
        module: 6
      }
    ]
  }
};

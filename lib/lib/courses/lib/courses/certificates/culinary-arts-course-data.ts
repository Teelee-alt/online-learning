export const culinaryArtsCertificate = {
  id: "culinary-arts-certificate",
  title: "Culinary Arts (Certificate)",
  description: "Master foundational cooking techniques, kitchen safety, and basic food preparation skills. Learn essential culinary methods used in professional kitchens worldwide.",
  duration: "6 weeks",
  timeCommitment: "4-6 hours per week",
  price: 12,
  upgradePrice: 18,
  icon: "👨‍🍳",
  badge: "Certificate",
  
  modules: [
    {
      id: 1,
      title: "Kitchen Fundamentals & Safety",
      content: `# Module 1: Kitchen Fundamentals & Safety

## Introduction to Professional Kitchen Environment

Professional kitchens operate with precision and strict safety standards. This module covers the essential foundations every culinary professional must master.

### **1. Kitchen Organization and Workflow**
Every professional kitchen follows the **brigade de cuisine** system, established by Auguste Escoffier. This organizational structure divides kitchen tasks into specific stations:
- **Executive Chef** (Chef de Cuisine) oversees all kitchen operations
- **Sous Chef** (Second in Command) manages daily kitchen activities
- **Line Cooks** work at specific stations: sauté, grill, pantry, etc.
- **Prep Cooks** prepare ingredients for service

**Mise en Place** (French for "everything in its place") is the most important principle in professional cooking. This means having all ingredients prepared, measured, and ready before cooking begins. Proper mise en place reduces cooking time by 30% and prevents mistakes during service.

### **2. Essential Kitchen Safety Protocols**
Food safety begins with proper hygiene and handling. The **FDA Food Code** requires these minimum temperatures:
- **165°F (74°C)** for poultry and reheated foods
- **155°F (68°C)** for ground meats
- **145°F (63°C)** for whole cuts of beef, pork, and fish

**Cross-contamination prevention** involves:
1. Using separate cutting boards for raw meats and vegetables
2. Storing raw meats on bottom shelves to prevent drips
3. Washing hands for at least 20 seconds before and after handling food
4. Sanitizing surfaces with a solution of 1 tablespoon bleach per gallon of water

### **3. Knife Skills and Basic Cuts**
Professional chefs use **eight basic knife cuts** that form the foundation of culinary preparation:
1. **Julienne** (matchstick cut): 1/8" × 1/8" × 2"
2. **Brunoise** (tiny dice): 1/8" × 1/8" × 1/8"
3. **Small Dice**: 1/4" × 1/4" × 1/4"
4. **Medium Dice**: 1/2" × 1/2" × 1/2"
5. **Large Dice**: 3/4" × 3/4" × 3/4"
6. **Paysanne** (thin square): 1/2" × 1/2" × 1/8"
7. **Chiffonade** (rolled leaf cut): for herbs and leafy greens
8. **Tourne** (football shape): seven-sided football shape for vegetables

**Proper knife grip** uses the **"pinch grip"** where the thumb and index finger pinch the blade just above the handle, while the remaining fingers wrap around the handle. This provides maximum control and reduces fatigue.

### **4. Kitchen Equipment Fundamentals**
Essential equipment every cook must master:
- **Pots and pans**: Different metals conduct heat at varying rates (copper: best conduction, aluminum: good, stainless steel: poor but durable)
- **Kitchen scales**: Professional recipes measure by weight, not volume, for accuracy
- **Thermometers**: Digital instant-read thermometers provide accurate temperature readings within 2-3 seconds
- **Cutting boards**: End-grain wooden boards are gentlest on knife edges but require more maintenance

**Temperature zones in refrigeration**:
- **Upper shelves** (38-40°F): Ready-to-eat foods, dairy
- **Middle shelves** (36-38°F): Eggs, deli meats
- **Lower shelves** (32-36°F): Raw meats, poultry, fish
- **Drawers** (high humidity): Vegetables and fruits
- **Door** (warmest area): Condiments, juices

Remember: **Safety first, quality second, speed third**. A safe kitchen produces consistent, high-quality food without accidents.`,
      
      completed: false,
      quiz: [
        {
          id: 1,
          question: "What is the French term meaning 'everything in its place' that describes preparing ingredients before cooking?",
          options: [
            "Brigade de Cuisine",
            "Mise en Place",
            "Tourne",
            "Chiffonade"
          ],
          correctAnswer: 1,
          explanation: "Mise en Place is the essential culinary principle of preparing and organizing all ingredients before beginning to cook. This practice reduces cooking time by approximately 30%."
        },
        {
          id: 2,
          question: "According to FDA guidelines, what is the minimum internal temperature for cooking poultry?",
          options: [
            "145°F (63°C)",
            "155°F (68°C)",
            "165°F (74°C)",
            "175°F (79°C)"
          ],
          correctAnswer: 2,
          explanation: "Poultry must reach 165°F (74°C) to ensure food safety and eliminate harmful bacteria like salmonella."
        },
        {
          id: 3,
          question: "What is the correct temperature range for storing raw meats in a commercial refrigerator?",
          options: [
            "38-40°F on upper shelves",
            "36-38°F on middle shelves",
            "32-36°F on lower shelves",
            "40-42°F in drawers"
          ],
          correctAnswer: 2,
          explanation: "Raw meats should be stored on the lower shelves at 32-36°F to prevent drips from contaminating other foods and to maintain proper temperature control."
        },
        {
          id: 4,
          question: "How many basic knife cuts form the foundation of professional culinary preparation?",
          options: [
            "5 basic cuts",
            "6 basic cuts",
            "7 basic cuts",
            "8 basic cuts"
          ],
          correctAnswer: 3,
          explanation: "Professional chefs master eight basic knife cuts: Julienne, Brunoise, Small Dice, Medium Dice, Large Dice, Paysanne, Chiffonade, and Tourne."
        },
        {
          id: 5,
          question: "What percentage reduction in cooking time can proper mise en place achieve?",
          options: [
            "15% reduction",
            "20% reduction",
            "30% reduction",
            "40% reduction"
          ],
          correctAnswer: 2,
          explanation: "Proper mise en place organization can reduce cooking time by approximately 30% by eliminating preparation delays during the cooking process."
        },
        {
          id: 6,
          question: "Which kitchen organizational system was established by Auguste Escoffier?",
          options: [
            "Mise en Place System",
            "Brigade de Cuisine",
            "French Station Method",
            "Professional Kitchen Hierarchy"
          ],
          correctAnswer: 1,
          explanation: "The Brigade de Cuisine system, developed by Auguste Escoffier, organizes kitchen staff into specific roles and stations for efficient operation."
        },
        {
          id: 7,
          question: "What is the correct bleach-to-water ratio for sanitizing kitchen surfaces?",
          options: [
            "1 teaspoon bleach per gallon of water",
            "1 tablespoon bleach per gallon of water",
            "2 tablespoons bleach per gallon of water",
            "1/4 cup bleach per gallon of water"
          ],
          correctAnswer: 1,
          explanation: "The FDA recommends 1 tablespoon of bleach per gallon of water as an effective sanitizing solution for food contact surfaces."
        },
        {
          id: 8,
          question: "Which knife grip provides maximum control and reduces fatigue during extended use?",
          options: [
            "Hammer grip",
            "Pinch grip",
            "Finger grip",
            "Palm grip"
          ],
          correctAnswer: 1,
          explanation: "The pinch grip, where thumb and index finger pinch the blade above the handle, provides superior control and reduces hand fatigue."
        },
        {
          id: 9,
          question: "What is the proper hand washing duration recommended before handling food?",
          options: [
            "10 seconds",
            "15 seconds",
            "20 seconds",
            "30 seconds"
          ],
          correctAnswer: 2,
          explanation: "Food handlers should wash hands for at least 20 seconds with soap and warm water to effectively remove contaminants."
        },
        {
          id: 10,
          question: "Which position in the kitchen brigade is second in command?",
          options: [
            "Executive Chef",
            "Sous Chef",
            "Line Cook",
            "Prep Cook"
          ],
          correctAnswer: 1,
          explanation: "The Sous Chef (under-chef) is second in command and manages daily kitchen operations under the Executive Chef."
        },
        {
          id: 11,
          question: "What type of cutting board is gentlest on knife edges?",
          options: [
            "Plastic boards",
            "Glass boards",
            "End-grain wooden boards",
            "Bamboo boards"
          ],
          correctAnswer: 2,
          explanation: "End-grain wooden boards are gentlest on knife edges because the wood fibers separate as the knife cuts, but they require more maintenance than other types."
        },
        {
          id: 12,
          question: "What is the temperature requirement for cooking ground meats?",
          options: [
            "145°F (63°C)",
            "155°F (68°C)",
            "165°F (74°C)",
            "170°F (77°C)"
          ],
          correctAnswer: 1,
          explanation: "Ground meats must reach 155°F (68°C) because grinding distributes bacteria throughout the meat, requiring higher temperatures than whole cuts."
        },
        {
          id: 13,
          question: "What are the dimensions of a julienne cut?",
          options: [
            "1/4\" × 1/4\" × 2\"",
            "1/8\" × 1/8\" × 2\"",
            "1/2\" × 1/2\" × 2\"",
            "1/8\" × 1/8\" × 1\""
          ],
          correctAnswer: 1,
          explanation: "Julienne cut produces matchstick shapes measuring 1/8\" × 1/8\" × 2\" and is commonly used for vegetables in stir-fries and salads."
        },
        {
          id: 14,
          question: "Which metal provides the best heat conduction for cookware?",
          options: [
            "Aluminum",
            "Stainless Steel",
            "Copper",
            "Cast Iron"
          ],
          correctAnswer: 2,
          explanation: "Copper provides the best heat conduction but is often lined with stainless steel or tin because copper can react with acidic foods."
        },
        {
          id: 15,
          question: "What should be stored in the high-humidity drawers of a refrigerator?",
          options: [
            "Raw meats",
            "Dairy products",
            "Vegetables and fruits",
            "Condiments"
          ],
          correctAnswer: 2,
          explanation: "High-humidity drawers are designed for vegetables and fruits to help maintain their moisture content and freshness."
        },
        {
          id: 16,
          question: "What is the primary advantage of measuring ingredients by weight instead of volume?",
          options: [
            "Faster measuring",
            "Better flavor",
            "Greater accuracy",
            "Lower cost"
          ],
          correctAnswer: 2,
          explanation: "Measuring by weight provides greater accuracy because ingredient density can vary, affecting volume measurements."
        },
        {
          id: 17,
          question: "How many sides does a properly executed tourne cut have?",
          options: [
            "5 sides",
            "6 sides",
            "7 sides",
            "8 sides"
          ],
          correctAnswer: 2,
          explanation: "A tourne cut produces a seven-sided football shape, typically used for root vegetables like potatoes and carrots."
        },
        {
          id: 18,
          question: "What is the warmest area of a typical refrigerator?",
          options: [
            "Upper shelves",
            "Middle shelves",
            "Lower shelves",
            "Door compartments"
          ],
          correctAnswer: 3,
          explanation: "The door is the warmest area due to frequent opening and should only be used for items with preservatives like condiments."
        },
        {
          id: 19,
          question: "What cut produces 1/8\" × 1/8\" × 1/8\" cubes?",
          options: [
            "Small dice",
            "Medium dice",
            "Brunoise",
            "Paysanne"
          ],
          correctAnswer: 2,
          explanation: "Brunoise is the finest dice cut at 1/8\" × 1/8\" × 1/8\", used for garnishes and fine preparations."
        },
        {
          id: 20,
          question: "What is the correct priority order in professional kitchen operations?",
          options: [
            "Speed first, quality second, safety third",
            "Quality first, speed second, safety third",
            "Safety first, quality second, speed third",
            "Safety first, speed second, quality third"
          ],
          correctAnswer: 2,
          explanation: "The professional priority is safety first (prevent accidents), quality second (maintain standards), speed third (efficient service)."
        }
      ]
    },
    {
      id: 2,
      title: "Basic Cooking Methods",
      content: `# Module 2: Basic Cooking Methods

## Mastering Heat Transfer and Cooking Techniques

Understanding how heat affects food is the foundation of cooking. This module explores the five primary cooking methods and their applications.

### **1. Dry Heat Cooking Methods**
Dry heat methods cook food without added moisture, relying on hot air, metal, or fat.

**Roasting and Baking** use heated air to cook food evenly. The key difference: roasting typically refers to meats and vegetables, while baking refers to breads and pastries. **Proper roasting** requires:
- Preheating the oven to the correct temperature
- Using a roasting rack to allow air circulation
- Basting meats every 20-30 minutes to prevent drying
- Resting meat for 10-15% of cooking time before carving

**Grilling and Broiling** use direct radiant heat. **Grilling** cooks from below, **broiling** from above. Both methods create the **Maillard reaction** - the chemical process that creates browning and complex flavors at temperatures above 310°F (154°C). For perfect grilling:
- Preheat grill for 10-15 minutes
- Clean grates with a brass brush
- Oil food, not grates (to prevent flare-ups)
- Create grill marks at 45-degree angles for presentation

**Sautéing** (French for "jump") cooks food quickly in a small amount of fat over high heat. The **three stages of sautéing**:
1. Preheat pan until water droplets sizzle and evaporate
2. Add oil and heat until shimmering but not smoking
3. Add food in a single layer, don't overcrowd

### **2. Moist Heat Cooking Methods**
Moist heat methods use water, steam, or other liquids to transfer heat.

**Boiling and Simmering**:
- **Rolling boil**: 212°F (100°C) with vigorous bubbles - for pasta and blanching
- **Simmer**: 185-205°F (85-96°C) with gentle bubbles - for stocks and stews
- **Poach**: 160-180°F (71-82°C) with no visible bubbles - for delicate proteins

**Steaming** cooks food with vaporized water, preserving nutrients better than boiling. Vegetables retain 50% more vitamins when steamed versus boiled. **Three steaming techniques**:
1. **Direct steaming**: Food placed above boiling water
2. **En papillote**: Food wrapped in parchment and steamed in its own juices
3. **Bamboo steaming**: Traditional Asian method using tiered bamboo baskets

**Braising and Stewing** combine dry and moist heat:
- **Braising**: Large pieces seared then cooked partially submerged
- **Stewing**: Small pieces completely submerged in liquid
Both methods break down tough connective tissues through slow, moist cooking.

### **3. Fat-Based Cooking Methods**
**Pan-frying** uses moderate heat with enough fat to come halfway up the food. **Proper pan-frying**:
- Use oil with high smoke point (canola: 400°F, peanut: 450°F, avocado: 520°F)
- Maintain oil temperature between 325-375°F (163-191°C)
- Don't overcrowd the pan (lowers temperature by 50-75°F)

**Deep-frying** completely submerges food in hot oil. The **ideal frying temperature** is 350-375°F (177-191°C). Below 350°F, food absorbs excess oil; above 375°F, food burns outside before cooking inside. **Double-fry technique** for extra crispiness:
1. First fry at 325°F (163°C) to cook through
2. Drain and rest 2-3 minutes
3. Second fry at 375°F (191°C) to crisp exterior

### **4. Combination Cooking Methods**
**Sous vide** (French for "under vacuum") cooks food in vacuum-sealed bags at precise temperatures in a water bath. This method:
- Cooks food evenly throughout
- Preserves moisture and flavor
- Allows precise doneness control
- Requires finishing with searing for texture

**Stir-frying** combines high heat with constant motion. The **wok hei** ("breath of the wok") is the characteristic smoky flavor achieved when:
1. Wok is heated until smoking
2. Small amounts of food are cooked quickly
3. Food is tossed continuously for even cooking
4. Sauce is added at the last moment`,
      
      completed: false,
      quiz: [
        {
          id: 1,
          question: "What is the key chemical process that creates browning and complex flavors during grilling?",
          options: [
            "Caramelization",
            "Maillard reaction",
            "Gelatinization",
            "Denaturation"
          ],
          correctAnswer: 1,
          explanation: "The Maillard reaction occurs at temperatures above 310°F (154°C) and creates the characteristic browning and complex flavors in grilled and roasted foods."
        },
        {
          id: 2,
          question: "What temperature range defines simmering (gentle bubbles)?",
          options: [
            "160-180°F (71-82°C)",
            "185-205°F (85-96°C)",
            "212°F (100°C) exactly",
            "250-275°F (121-135°C)"
          ],
          correctAnswer: 1,
          explanation: "Simmering occurs at 185-205°F (85-96°C) with gentle bubbles, ideal for stocks and stews where vigorous boiling would cloud the liquid."
        },
        {
          id: 3,
          question: "How much more vitamins do vegetables retain when steamed versus boiled?",
          options: [
            "20% more vitamins",
            "35% more vitamins",
            "50% more vitamins",
            "65% more vitamins"
          ],
          correctAnswer: 2,
          explanation: "Steaming preserves approximately 50% more water-soluble vitamins than boiling because nutrients don't leach into cooking water."
        },
        {
          id: 4,
          question: "What is the ideal temperature range for deep-frying?",
          options: [
            "300-325°F (149-163°C)",
            "325-350°F (163-177°C)",
            "350-375°F (177-191°C)",
            "375-400°F (191-204°C)"
          ],
          correctAnswer: 2,
          explanation: "350-375°F (177-191°C) is ideal for deep-frying. Below this range, food absorbs excess oil; above, it burns before cooking through."
        },
        {
          id: 5,
          question: "What does 'sous vide' literally mean in French?",
          options: [
            "Under pressure",
            "Under vacuum",
            "Slow cooking",
            "Water bath"
          ],
          correctAnswer: 1,
          explanation: "Sous vide translates to 'under vacuum,' referring to the vacuum-sealed bags used in this precise cooking method."
        },
        {
          id: 6,
          question: "What is the primary difference between braising and stewing?",
          options: [
            "Braising uses dry heat, stewing uses moist heat",
            "Braising for large pieces, stewing for small pieces",
            "Braising is faster than stewing",
            "Stewing requires searing first"
          ],
          correctAnswer: 1,
          explanation: "Braising cooks large pieces partially submerged in liquid, while stewing cooks small pieces completely submerged. Both use combination cooking."
        },
        {
          id: 7,
          question: "What temperature does water boil at sea level?",
          options: [
            "200°F (93°C)",
            "212°F (100°C)",
            "225°F (107°C)",
            "250°F (121°C)"
          ],
          correctAnswer: 1,
          explanation: "Water boils at 212°F (100°C) at sea level. This decreases approximately 1°F for every 500 feet increase in altitude."
        },
        {
          id: 8,
          question: "Which oil has the highest smoke point?",
          options: [
            "Canola oil (400°F)",
            "Peanut oil (450°F)",
            "Avocado oil (520°F)",
            "Olive oil (375°F)"
          ],
          correctAnswer: 2,
          explanation: "Avocado oil has the highest smoke point at 520°F (271°C), making it excellent for high-heat cooking methods."
        },
        {
          id: 9,
          question: "What is 'wok hei' in stir-frying?",
          options: [
            "The wok's temperature",
            "The tossing technique",
            "The breath of the wok (smoky flavor)",
            "The type of oil used"
          ],
          correctAnswer: 2,
          explanation: "Wok hei translates to 'breath of the wok' - the characteristic smoky flavor achieved through extremely high heat and quick cooking."
        },
        {
          id: 10,
          question: "How long should meat rest after roasting before carving?",
          options: [
            "5% of cooking time",
            "10-15% of cooking time",
            "20-25% of cooking time",
            "30% of cooking time"
          ],
          correctAnswer: 1,
          explanation: "Meat should rest for 10-15% of its cooking time. This allows juices to redistribute, resulting in moister meat when carved."
        },
        {
          id: 11,
          question: "What is the key visual indicator that a pan is properly preheated for sautéing?",
          options: [
            "Oil starts to bubble",
            "Water droplets sizzle and evaporate",
            "Pan changes color",
            "Smoke appears"
          ],
          correctAnswer: 1,
          explanation: "When water droplets sizzle and evaporate immediately upon contact, the pan is properly preheated for sautéing."
        },
        {
          id: 12,
          question: "What temperature range defines poaching?",
          options: [
            "140-160°F (60-71°C)",
            "160-180°F (71-82°C)",
            "185-205°F (85-96°C)",
            "212°F (100°C)"
          ],
          correctAnswer: 1,
          explanation: "Poaching occurs at 160-180°F (71-82°C) with no visible bubbles, ideal for delicate proteins like fish and eggs."
        },
        {
          id: 13,
          question: "What happens if you overcrowd a pan when pan-frying?",
          options: [
            "Food cooks faster",
            "Temperature drops 50-75°F",
            "Oil absorbs better",
            "Creates better crust"
          ],
          correctAnswer: 1,
          explanation: "Overcrowding lowers oil temperature by 50-75°F, causing food to steam rather than fry and resulting in soggy, greasy food."
        },
        {
          id: 14,
          question: "What is en papillote cooking method?",
          options: [
            "Steaming in bamboo baskets",
            "Cooking in vacuum bags",
            "Wrapping in parchment and steaming",
            "Cooking in clay pots"
          ],
          correctAnswer: 2,
          explanation: "En papillote (in parchment) involves wrapping food in parchment paper and steaming it in its own juices, creating flavorful, moist results."
        },
        {
          id: 15,
          question: "What is the purpose of the double-fry technique?",
          options: [
            "To cook food faster",
            "To use less oil",
            "To create extra crispiness",
            "To add more flavor"
          ],
          correctAnswer: 2,
          explanation: "Double-frying creates extra crispiness: first fry cooks through at lower temperature, second fry at higher temperature creates crispy exterior."
        },
        {
          id: 16,
          question: "What should you oil when preparing to grill?",
          options: [
            "The grill grates",
            "The food",
            "Both grates and food",
            "Neither, grilling is dry heat"
          ],
          correctAnswer: 1,
          explanation: "Oil the food, not the grates, to prevent flare-ups. Oiling grates causes flames when drippings hit the hot oil."
        },
        {
          id: 17,
          question: "What does sauté literally mean in French?",
          options: [
            "To fry",
            "To jump",
            "To toss",
            "To cook quickly"
          ],
          correctAnswer: 1,
          explanation: "Sauté comes from the French verb 'sauter' meaning 'to jump,' referring to the tossing motion used when sautéing."
        },
        {
          id: 18,
          question: "How often should you baste meat when roasting?",
          options: [
            "Every 10-15 minutes",
            "Every 20-30 minutes",
            "Every 45-60 minutes",
            "Only at the beginning and end"
          ],
          correctAnswer: 1,
          explanation: "Basting every 20-30 minutes keeps meat moist and promotes even browning during roasting."
        },
        {
          id: 19,
          question: "What is the minimum temperature for the Maillard reaction to occur?",
          options: [
            "250°F (121°C)",
            "285°F (141°C)",
            "310°F (154°C)",
            "350°F (177°C)"
          ],
          correctAnswer: 2,
          explanation: "The Maillard reaction requires temperatures above 310°F (154°C) to create browning and complex flavor compounds."
        },
        {
          id: 20,
          question: "What cooking method preserves food's shape and texture best?",
          options: [
            "Boiling",
            "Steaming",
            "Stewing",
            "Braising"
          ],
          correctAnswer: 1,
          explanation: "Steaming preserves food's shape and texture best because there's no agitation from boiling water to break delicate items."
        }
      ]
    },
    {
      id: 3,
      title: "Stocks, Sauces & Soups",
      content: `# Module 3: Stocks, Sauces & Soups

## Foundation of Flavor: The Building Blocks of Cuisine

Stocks, sauces, and soups form the foundation of most culinary preparations. Master these, and you master flavor.

### **1. The Five Mother Sauces**
French chef Auguste Escoffier codified the **five mother sauces** from which hundreds of derivative sauces are made:

**1. Béchamel** - White sauce made from white roux and milk
- **Roux ratio**: Equal parts butter and flour by weight
- **Cooking time**: Cook roux 2-3 minutes to remove raw flour taste
- **Uses**: Macaroni and cheese, creamy soups, vegetable gratins

**2. Velouté** - Blond sauce made from white roux and white stock
- **Stock types**: Chicken, fish, or veal stock
- **Key characteristic**: Light color and delicate flavor
- **Derivatives**: Supreme sauce (chicken velouté + cream), Allemande (veal velouté + egg yolk)

**3. Espagnole** - Brown sauce made from brown roux and brown stock
- **Roux cooking**: Cook until peanut butter color (15-20 minutes)
- **Tomato product**: Tomato paste added for color and acidity
- **Derivative**: Demi-glace (espagnole + brown stock reduced by half)

**4. Tomato Sauce** - Made from tomatoes, aromatics, and pork
- **Traditional method**: 4-6 hour simmer for depth of flavor
- **Modern method**: 30-45 minutes for fresher tomato flavor
- **Key ingredient**: Tomato paste cooked until brick red ("pincé")

**5. Hollandaise** - Emulsified sauce of egg yolks, butter, and lemon
- **Temperature critical**: 145-150°F (63-66°C) - too hot curdles, too thin if cold
- **Emulsification**: Add melted butter slowly while whisking constantly
- **Derivative**: Béarnaise (hollandaise + tarragon and shallot reduction)

### **2. Stock Fundamentals**
**White stock** uses raw bones, **brown stock** uses roasted bones. **Proper stock making**:
1. **Bones**: 2-3 pounds per gallon of water
2. **Mirepoix**: 50% onions, 25% carrots, 25% celery by weight
3. **Sachet d'épices**: Parsley stems, thyme, bay leaf, peppercorns tied in cheesecloth
4. **Simmering time**: 4-6 hours for chicken, 8-12 hours for beef, 1-2 hours for fish

**The golden rule**: Never boil stock - it becomes cloudy. Maintain a bare simmer (185°F/85°C) with occasional bubbles.

**Clarification techniques**:
- **Egg white clarification**: Egg whites coagulate and trap impurities
- **Ice clarification**: Fat rises and solidifies for easy removal
- **Consommé**: Clarified stock with intense flavor

### **3. Roux Mastery**
Roux is the thickening agent for three mother sauces. **Three types of roux**:
1. **White roux**: Cooked 2-3 minutes, used for béchamel
2. **Blond roux**: Cooked 5-6 minutes, used for velouté
3. **Brown roux**: Cooked 15-20 minutes, used for espagnole

**Roux to liquid ratios** (by weight):
- **Thin sauce**: 1 part roux to 8 parts liquid
- **Medium sauce**: 1 part roux to 6 parts liquid
- **Thick sauce**: 1 part roux to 4 parts liquid

**Alternative thickeners**:
- **Cornstarch slurry**: 1 tablespoon cornstarch + 2 tablespoons cold water
- **Beurre manié**: Equal parts softened butter and flour kneaded together
- **Arrowroot**: Clear thickening, good for fruit sauces
- **Tapioca**: For pies and desserts that need to be clear when cool

### **4. Soup Classification**
**Clear soups**:
- **Broth**: Flavorful liquid, may contain small pieces
- **Consommé**: Crystal clear, intensely flavored clarified stock
- **Vegetable soup**: Clear broth with vegetables

**Thick soups**:
- **Purée**: Vegetables puréed to thicken (no roux)
- **Cream**: Roux-thickened with cream added
- **Bisque**: Shellfish-based, traditionally thickened with rice
- **Chowder**: Chunky, often contains potatoes and cream

**Cold soups**:
- **Gazpacho**: Spanish raw vegetable soup
- **Vichyssoise**: Leek and potato soup served cold
- **Fruit soups**: Sweet soups served as dessert or starter

### **5. Modern Sauce Techniques**
**Emulsified sauces**:
- **Vinaigrette**: 3 parts oil to 1 part acid
- **Mayonnaise**: Egg yolk emulsion that can hold up to 8 times its volume in oil
- **Aioli**: Garlic mayonnaise

**Reduction sauces**:
- **Jus**: Natural meat juices reduced slightly
- **Glaze**: Stock reduced until syrupy (1/10 original volume)
- **Gastrique**: Caramelized sugar deglazed with vinegar

**Compound butters**:
- **Beurre blanc**: Reduction of shallots and vinegar with cold butter whisked in
- **Beurre noisette**: Browned butter with nutty aroma
- **Flavored butters**: Butter mixed with herbs, spices, or citrus`,
      
      completed: false,
      quiz: [
        {
          id: 1,
          question: "Who codified the five mother sauces of classical French cuisine?",
          options: [
            "Julia Child",
            "Auguste Escoffier",
            "Marie-Antoine Carême",
            "Paul Bocuse"
          ],
          correctAnswer: 1,
          explanation: "Auguste Escoffier, the 'king of chefs,' codified the five mother sauces in the late 19th and early 20th centuries."
        },
        {
          id: 2,
          question: "Which mother sauce is made from white roux and milk?",
          options: [
            "Velouté",
            "Béchamel",
            "Espagnole",
            "Hollandaise"
          ],
          correctAnswer: 1,
          explanation: "Béchamel is the white sauce made from white roux (equal parts butter and flour) and milk, used as a base for creamy dishes."
        },
        {
          id: 3,
          question: "What is the correct ratio for making a roux?",
          options: [
            "2 parts butter to 1 part flour",
            "1 part butter to 2 parts flour",
            "Equal parts butter and flour by weight",
            "1 part butter to 3 parts flour"
          ],
          correctAnswer: 2,
          explanation: "A proper roux uses equal parts butter and flour by weight, not volume, for consistent thickening power."
        },
        {
          id: 4,
          question: "How long should you cook a brown roux for espagnole sauce?",
          options: [
            "2-3 minutes",
            "5-6 minutes",
            "15-20 minutes",
            "30-45 minutes"
          ],
          correctAnswer: 2,
          explanation: "Brown roux for espagnole sauce cooks for 15-20 minutes until it reaches a peanut butter color and develops nutty flavors."
        },
        {
          id: 5,
          question: "What temperature range is critical for making hollandaise sauce?",
          options: [
            "130-140°F (54-60°C)",
            "145-150°F (63-66°C)",
            "155-165°F (68-74°C)",
            "170-180°F (77-82°C)"
          ],
          correctAnswer: 1,
          explanation: "Hollandaise must be kept at 145-150°F (63-66°C). Too hot causes curdling, too cold prevents proper emulsification."
        },
        {
          id: 6,
          question: "What is the golden rule when making stock?",
          options: [
            "Use only fresh bones",
            "Never boil stock",
            "Always skim fat",
            "Cook for exactly 4 hours"
          ],
          correctAnswer: 1,
          explanation: "Never boil stock - boiling makes it cloudy. Maintain a bare simmer (185°F/85°C) for clear, flavorful stock."
        },
        {
          id: 7,
          question: "What is the standard mirepoix ratio for stocks?",
          options: [
            "Equal parts onions, carrots, celery",
            "50% onions, 25% carrots, 25% celery",
            "40% onions, 40% carrots, 20% celery",
            "60% onions, 20% carrots, 20% celery"
          ],
          correctAnswer: 1,
          explanation: "Classic mirepoix uses 50% onions, 25% carrots, and 25% celery by weight to create balanced flavor in stocks."
        },
        {
          id: 8,
          question: "How much bone should you use per gallon of water for stock?",
          options: [
            "1 pound per gallon",
            "2-3 pounds per gallon",
            "4-5 pounds per gallon",
            "6-7 pounds per gallon"
          ],
          correctAnswer: 1,
          explanation: "Use 2-3 pounds of bones per gallon of water for properly concentrated stock with good body from gelatin."
        },
        {
          id: 9,
          question: "What is a sachet d'épices?",
          options: [
            "A spice mix for grilling",
            "Herbs and spices tied in cheesecloth",
            "A French spice rack",
            "Ground spices for rubs"
          ],
          correctAnswer: 1,
          explanation: "Sachet d'épices (spice bag) contains parsley stems, thyme, bay leaf, and peppercorns tied in cheesecloth for easy removal from stock."
        },
        {
          id: 10,
          question: "Which mother sauce uses brown roux and brown stock?",
          options: [
            "Béchamel",
            "Velouté",
            "Espagnole",
            "Tomato"
          ],
          correctAnswer: 2,
          explanation: "Espagnole (brown sauce) uses brown roux (cooked 15-20 minutes) and brown stock made from roasted bones."
        },
        {
          id: 11,
          question: "What is the derivative sauce made from hollandaise with tarragon?",
          options: [
            "Béarnaise",
            "Choron",
            "Maltaise",
            "Mousseline"
          ],
          correctAnswer: 0,
          explanation: "Béarnaise sauce is hollandaise flavored with a reduction of tarragon, shallots, and white wine vinegar."
        },
        {
          id: 12,
          question: "What is demi-glace?",
          options: [
            "Espagnole sauce reduced by half",
            "Brown stock reduced by half",
            "Velouté with cream",
            "Tomato sauce with stock"
          ],
          correctAnswer: 0,
          explanation: "Demi-glace is espagnole sauce mixed with brown stock and reduced by half, creating an intensely flavorful sauce base."
        },
        {
          id: 13,
          question: "What thickener is best for sauces that need to remain clear when cool?",
          options: [
            "Roux",
            "Cornstarch",
            "Arrowroot",
            "Beurre manié"
          ],
          correctAnswer: 2,
          explanation: "Arrowroot creates clear thickening without cloudiness, making it ideal for fruit sauces and glazes that should be transparent."
        },
        {
          id: 14,
          question: "What is the standard ratio for a medium-thick sauce using roux?",
          options: [
            "1 part roux to 8 parts liquid",
            "1 part roux to 6 parts liquid",
            "1 part roux to 4 parts liquid",
            "1 part roux to 2 parts liquid"
          ],
          correctAnswer: 1,
          explanation: "For medium thickness, use 1 part roux to 6 parts liquid by weight. Thin sauce uses 1:8, thick sauce uses 1:4."
        },
        {
          id: 15,
          question: "What type of soup is traditionally thickened with rice?",
          options: [
            "Chowder",
            "Bisque",
            "Consommé",
            "Gazpacho"
          ],
          correctAnswer: 1,
          explanation: "Traditional bisque (shellfish soup) uses rice as a thickener, though modern versions often use roux or cream instead."
        },
        {
          id: 16,
          question: "How long should you simmer chicken stock?",
          options: [
            "1-2 hours",
            "4-6 hours",
            "8-12 hours",
            "24 hours"
          ],
          correctAnswer: 1,
          explanation: "Chicken stock requires 4-6 hours of simmering to extract maximum flavor and gelatin from the bones."
        },
        {
          id: 17,
          question: "What is beurre manié?",
          options: [
            "Brown butter",
            "Equal parts butter and flour kneaded together",
            "Clarified butter",
            "Butter with herbs"
          ],
          correctAnswer: 1,
          explanation: "Beurre manié (kneaded butter) is equal parts softened butter and flour kneaded together, used to thicken sauces at the end of cooking."
        },
        {
          id: 18,
          question: "What is the standard vinaigrette ratio?",
          options: [
            "1 part oil to 1 part acid",
            "2 parts oil to 1 part acid",
            "3 parts oil to 1 part acid",
            "4 parts oil to 1 part acid"
          ],
          correctAnswer: 2,
          explanation: "Classic vinaigrette uses 3 parts oil to 1 part acid, though this can be adjusted based on the acidity of the vinegar or citrus."
        },
        {
          id: 19,
          question: "What makes consommé different from regular broth?",
          options: [
            "It has more vegetables",
            "It's clarified and crystal clear",
            "It's always served cold",
            "It contains cream"
          ],
          correctAnswer: 1,
          explanation: "Consommé is clarified stock that's crystal clear with intense flavor, achieved through the clarification process using egg whites."
        },
        {
          id: 20,
          question: "What derivative sauce is made from chicken velouté and cream?",
          options: [
            "Supreme sauce",
            "Allemande",
            "Aurora",
            "Hungarian"
          ],
          correctAnswer: 0,
          explanation: "Supreme sauce is made from chicken velouté enriched with cream, creating a delicate, creamy white sauce."
        }
      ]
    },
    {
      id: 4,
      title: "Vegetable & Starch Preparation",
      content: `# Module 4: Vegetable & Starch Preparation

## Maximizing Flavor and Nutrition from Plants and Grains

Vegetables and starches form the foundation of balanced meals. Proper preparation preserves nutrients and enhances natural flavors.

### **1. Vegetable Cooking Methods**
**Blanching and shocking** is the most important technique for preserving color, texture, and nutrients:
1. **Blanch** in generously salted boiling water (1 tablespoon salt per gallon)
2. **Cook time**: 30 seconds to 3 minutes depending on vegetable density
3. **Shock** immediately in ice water to stop cooking
4. **Benefits**: Sets color, preserves crunch, makes peeling easier

**Steaming vegetables** preserves 90-95% of nutrients versus 40-50% with boiling. **Steaming times**:
- **Leafy greens**: 1-3 minutes
- **Green beans, broccoli**: 3-5 minutes
- **Root vegetables**: 8-15 minutes
- **Winter squash**: 15-25 minutes

**Roasting vegetables** caramelizes natural sugars. **Key principles**:
- **Temperature**: 400-425°F (204-218°C) for caramelization
- **Oil coating**: Enough to coat but not pool (1-2 tablespoons per pound)
- **Spacing**: Single layer with space between pieces
- **Seasoning**: Salt after roasting to prevent drawing out moisture

### **2. Starch Science and Preparation**
**Rice varieties and cooking**:
- **Long-grain** (Basmati, Jasmine): 1.5-2 times volume increase, separate grains
- **Medium-grain** (Arborio, Valencia): 2-3 times volume increase, creamy texture
- **Short-grain** (Sushi rice): Sticky when cooked, high amylopectin content
- **Wild rice**: Actually a grass, requires 45-60 minutes cooking

**Perfect rice ratio**: 1 part rice to 1.5 parts water for white rice, 1:2 for brown rice. **Resting time**: 10 minutes covered after cooking for even moisture distribution.

**Potato varieties and uses**:
- **High starch** (Russet, Idaho): Best for baking, frying, mashing
- **Medium starch** (Yukon Gold): All-purpose, good for roasting, mashing
- **Low starch** (Red, Fingerling): Hold shape well, ideal for salads, roasting
- **Sweet potatoes**: High in vitamin A, cook similarly to medium-starch potatoes

### **3. Pasta and Grain Cooking**
**Pasta cooking fundamentals**:
- **Water volume**: 4-6 quarts per pound of pasta
- **Salt**: 1-2 tablespoons per gallon (should taste like seawater)
- **Oil myth**: Don't add oil to cooking water - prevents sauce adherence
- **Al dente**: "To the tooth" - firm but not hard, usually 1-2 minutes less than package

**Grain cooking ratios** (grain to water):
- **Quinoa**: 1:2, rinse thoroughly to remove saponins
- **Couscous**: 1:1.5, steep rather than boil
- **Bulgur**: 1:2, soak in hot water 20-30 minutes
- **Farro**: 1:3, cook 25-40 minutes depending on pearled or whole
- **Polenta**: 1:4, constant stirring prevents lumps

### **4. Legume Preparation**
**Dried bean preparation**:
1. **Sorting**: Remove stones and debris
2. **Soaking**: Overnight cold soak or 1-hour hot soak
3. **Cooking**: Simmer gently, never boil
4. **Salting**: Add salt at end to prevent toughening

**Soaking methods**:
- **Traditional soak**: Cover with 3 inches water, soak 8-12 hours
- **Quick soak**: Boil 2 minutes, cover, soak 1 hour
- **No soak**: Cook 50% longer, may result in uneven cooking

**Cooking times** (after soaking):
- **Lentils**: 20-30 minutes (no soaking needed)
- **Black beans**: 60-90 minutes
- **Chickpeas**: 90-120 minutes
- **Kidney beans**: 90-120 minutes (must boil to destroy toxins)

### **5. Advanced Vegetable Techniques**
**Vegetable caramelization** happens at 320°F (160°C) when natural sugars brown. **Three methods**:
1. **Sautéing**: High heat, constant motion
2. **Roasting**: Dry heat, single layer
3. **Grilling**: Direct heat, char marks

**Vegetable stock** differs from meat stock:
- **Shorter cooking**: 45-60 minutes maximum
- **No bones**: Uses vegetable trimmings and aromatics
- **Clear flavors**: Lighter than meat stocks
- **Additions**: Mushrooms for umami, tomatoes for acidity

**Fermented vegetables**:
- **Sauerkraut**: 2% salt by weight of cabbage
- **Kimchi**: Korean fermented vegetables with chili and fish sauce
- **Pickles**: Quick pickle in vinegar or lacto-fermented`,
      
      completed: false,
      quiz: [
        {
          id: 1,
          question: "What is the purpose of shocking vegetables after blanching?",
          options: [
            "To add flavor",
            "To stop cooking and preserve color",
            "To make them softer",
            "To remove pesticides"
          ],
          correctAnswer: 1,
          explanation: "Shocking in ice water immediately stops the cooking process, preserving bright color, crisp texture, and nutrients."
        },
        {
          id: 2,
          question: "What percentage of nutrients do vegetables retain when steamed versus boiled?",
          options: [
            "60-70% steamed vs 40-50% boiled",
            "70-80% steamed vs 40-50% boiled",
            "80-90% steamed vs 40-50% boiled",
            "90-95% steamed vs 40-50% boiled"
          ],
          correctAnswer: 3,
          explanation: "Steaming preserves 90-95% of nutrients while boiling preserves only 40-50% because nutrients leach into cooking water."
        },
        {
          id: 3,
          question: "What is the perfect rice-to-water ratio for white rice?",
          options: [
            "1:1 (equal parts)",
            "1:1.5 (rice to water)",
            "1:2 (rice to water)",
            "1:2.5 (rice to water)"
          ],
          correctAnswer: 1,
          explanation: "White rice typically uses a 1:1.5 ratio (1 cup rice to 1.5 cups water), while brown rice uses 1:2."
        },
        {
          id: 4,
          question: "How much salt should you add per gallon of pasta water?",
          options: [
            "1 teaspoon",
            "1 tablespoon",
            "1-2 tablespoons",
            "1/4 cup"
          ],
          correctAnswer: 2,
          explanation: "Pasta water should taste like seawater, which requires 1-2 tablespoons of salt per gallon (4 quarts) of water."
        },
        {
          id: 5,
          question: "What does 'al dente' mean when cooking pasta?",
          options: [
            "Soft and fully cooked",
            "To the tooth (firm but not hard)",
            "Overcooked and mushy",
            "Undercooked and crunchy"
          ],
          correctAnswer: 1,
          explanation: "Al dente means 'to the tooth' in Italian - pasta should be firm when bitten but not hard or crunchy in the center."
        },
        {
          id: 6,
          question: "Which potato variety is best for baking and frying?",
          options: [
            "Red potatoes (low starch)",
            "Yukon Gold (medium starch)",
            "Russet (high starch)",
            "Fingerling (low starch)"
          ],
          correctAnswer: 2,
          explanation: "Russet (Idaho) potatoes are high in starch, making them ideal for baking (fluffy interior) and frying (crispy exterior)."
        },
        {
          id: 7,
          question: "What temperature does vegetable caramelization occur?",
          options: [
            "250°F (121°C)",
            "280°F (138°C)",
            "320°F (160°C)",
            "350°F (177°C)"
          ],
          correctAnswer: 2,
          explanation: "Vegetable caramelization occurs around 320°F (160°C) when natural sugars begin to brown and develop complex flavors."
        },
        {
          id: 8,
          question: "How long should you cook vegetable stock?",
          options: [
            "15-30 minutes",
            "45-60 minutes",
            "2-3 hours",
            "4-6 hours"
          ],
          correctAnswer: 1,
          explanation: "Vegetable stock only needs 45-60 minutes of simmering. Longer cooking makes it bitter as vegetables break down too much."
        },
        {
          id: 9,
          question: "What is the traditional soaking method for dried beans?",
          options: [
            "Soak 1 hour in hot water",
            "Soak 2-3 hours in warm water",
            "Soak 8-12 hours in cold water",
            "No soaking needed"
          ],
          correctAnswer: 2,
          explanation: "Traditional soaking covers beans with 3 inches of cold water for 8-12 hours, which reduces cooking time and improves texture."
        },
        {
          id: 10,
          question: "What rice variety is known for its sticky texture when cooked?",
          options: [
            "Basmati (long-grain)",
            "Jasmine (long-grain)",
            "Arborio (medium-grain)",
            "Sushi rice (short-grain)"
          ],
          correctAnswer: 3,
          explanation: "Short-grain rice like sushi rice has high amylopectin content, making it sticky when cooked - perfect for sushi and rice balls."
        },
        {
          id: 11,
          question: "Why shouldn't you add oil to pasta cooking water?",
          options: [
            "It makes pasta greasy",
            "It prevents sauce from adhering",
            "It lowers boiling temperature",
            "It changes pasta color"
          ],
          correctAnswer: 1,
          explanation: "Oil coats pasta, preventing sauce from adhering properly. Salted water and proper cooking technique prevent sticking."
        },
        {
          id: 12,
          question: "How much salt should you use for blanching vegetables?",
          options: [
            "1 teaspoon per gallon",
            "1 tablespoon per gallon",
            "2 tablespoons per gallon",
            "No salt needed"
          ],
          correctAnswer: 1,
          explanation: "Use 1 tablespoon salt per gallon of water for blanching. This seasons vegetables and helps maintain color."
        },
        {
          id: 13,
          question: "What is the grain-to-water ratio for cooking quinoa?",
          options: [
            "1:1",
            "1:1.5",
            "1:2",
            "1:2.5"
          ],
          correctAnswer: 2,
          explanation: "Quinoa uses a 1:2 ratio (1 cup quinoa to 2 cups water) and should be rinsed thoroughly to remove bitter saponins."
        },
        {
          id: 14,
          question: "When should you salt potatoes for roasting?",
          options: [
            "Before roasting to draw out moisture",
            "During roasting for even distribution",
            "After roasting to prevent sogginess",
            "Potatoes don't need salt for roasting"
          ],
          correctAnswer: 2,
          explanation: "Salt roasted potatoes after cooking to prevent drawing out moisture during roasting, which would prevent proper browning."
        },
        {
          id: 15,
          question: "How long do lentils typically cook (without soaking)?",
          options: [
            "10-15 minutes",
            "20-30 minutes",
            "40-50 minutes",
            "60-90 minutes"
          ],
          correctAnswer: 1,
          explanation: "Lentils cook in 20-30 minutes without soaking. They're one of the few legumes that don't require pre-soaking."
        },
        {
          id: 16,
          question: "What is the ideal roasting temperature for vegetables?",
          options: [
            "350°F (177°C)",
            "375°F (191°C)",
            "400-425°F (204-218°C)",
            "450°F (232°C)"
          ],
          correctAnswer: 2,
          explanation: "400-425°F (204-218°C) is ideal for roasting vegetables - hot enough to caramelize sugars but not burn them."
        },
        {
          id: 17,
          question: "What type of bean must be boiled (not just simmered) to destroy toxins?",
          options: [
            "Black beans",
            "Kidney beans",
            "Chickpeas",
            "Lentils"
          ],
          correctAnswer: 1,
          explanation: "Kidney beans contain phytohaemagglutinin toxin that must be destroyed by boiling for at least 10 minutes."
        },
        {
          id: 18,
          question: "How long should cooked rice rest before serving?",
          options: [
            "No rest needed",
            "5 minutes",
            "10 minutes",
            "20 minutes"
          ],
          correctAnswer: 2,
          explanation: "Let rice rest 10 minutes covered after cooking. This allows moisture to redistribute evenly throughout the grains."
        },
        {
          id: 19,
          question: "What percentage salt by weight is used for sauerkraut fermentation?",
          options: [
            "1%",
            "2%",
            "3%",
            "5%"
          ],
          correctAnswer: 1,
          explanation: "Sauerkraut uses 2% salt by weight of cabbage. This controls fermentation and prevents harmful bacteria growth."
        },
        {
          id: 20,
          question: "What vegetable addition adds umami flavor to vegetable stock?",
          options: [
            "Carrots",
            "Celery",
            "Mushrooms",
            "Onions"
          ],
          correctAnswer: 2,
          explanation: "Mushrooms, especially dried mushrooms, add umami (savory) depth to vegetable stock, mimicking meaty flavors."
        }
      ]
    },
    {
      id: 5,
      title: "Protein Preparation",
      content: `# Module 5: Protein Preparation

## Mastering Meat, Poultry, Fish, and Plant Proteins

Proper protein preparation transforms ordinary ingredients into extraordinary meals. Understanding proteins ensures perfect results every time.

### **1. Meat Science and Cooking**
**Muscle composition** affects cooking:
- **Muscle fibers**: Long protein strands that contract
- **Connective tissue**: Collagen that breaks down into gelatin with slow cooking
- **Fat**: Intramuscular fat (marbling) adds flavor and moisture
- **Myoglobin**: Protein that gives meat its red color

**Tender vs. tough cuts**:
- **Tender cuts**: From less-used muscles (rib, loin, tenderloin)
- **Tough cuts**: From well-exercised muscles (chuck, round, brisket)
- **Cooking methods**: Tender cuts use dry heat (grill, roast); tough cuts use moist heat (braise, stew)

**Resting meat** is critical:
- **Why rest**: Allows juices to redistribute (15-30% weight loss during cooking is juice, not fat)
- **Resting time**: 5 minutes for steaks, 10-20 minutes for roasts
- **Temperature rise**: Meat continues cooking 5-10°F during rest

### **2. Poultry Preparation**
**Safe handling guidelines**:
- **Separate**: Use different cutting boards for raw poultry
- **Wash**: Don't wash raw poultry (spreads bacteria)
- **Cook**: To 165°F (74°C) internal temperature
- **Check**: Thickest part of breast and thigh

**Brining techniques**:
- **Wet brine**: 1 cup salt + 1 cup sugar per gallon of water, 1 hour per pound
- **Dry brine**: Salt rubbed on skin 12-24 hours before cooking
- **Benefits**: Adds moisture, seasons throughout, promotes browning

**Roasting whole birds**:
- **Trussing**: Ties legs and wings close to body for even cooking
- **Temperature**: Start at 450°F (232°C) for 20 minutes, then reduce to 350°F (177°C)
- **Basting**: Every 20-30 minutes with pan juices
- **Testing**: Juices run clear, leg moves freely in socket

### **3. Fish and Seafood**
**Freshness indicators**:
- **Eyes**: Clear, not cloudy
- **Gills**: Bright red, not brown
- **Smell**: Fresh ocean breeze, not fishy
- **Texture**: Firm flesh that springs back
- **Scales**: Shiny and adherent

**Cooking methods by fat content**:
- **Lean fish** (cod, halibut, snapper): Moist heat methods (poach, steam)
- **Moderate fat** (salmon, tuna, swordfish): Dry heat methods (grill, roast)
- **High fat** (mackerel, sardines): Best for grilling and smoking

**The 10-minute rule**: Cook fish 10 minutes per inch of thickness at the thickest part. This applies to baking, broiling, grilling, and steaming.

**Shellfish cooking**:
- **Shrimp**: Cook just until opaque and curled (2-3 minutes)
- **Scallops**: Sear 1-2 minutes per side for caramelization
- **Mussels/clams**: Cook just until shells open (5-7 minutes)
- **Lobster**: 7-8 minutes per pound for boiling

### **4. Plant-Based Proteins**
**Tofu preparation**:
- **Pressing**: Remove excess water (30 minutes to 2 hours)
- **Types**: Silken (soups, desserts), Soft (scrambles), Firm (stir-fry), Extra firm (grilling)
- **Marinating**: At least 30 minutes, up to 24 hours
- **Cooking**: Pan-fry, bake, or grill until golden brown

**Tempeh** (fermented soybeans):
- **Steaming**: 10 minutes before marinating to remove bitterness
- **Marinating**: Absorbs flavors well due to porous texture
- **Cooking**: Pan-fry until crispy on both sides

**Legume-based proteins**:
- **Lentils**: Cook 20-30 minutes, no soaking needed
- **Chickpeas**: Soak overnight, cook 60-90 minutes
- **Black beans**: Soak overnight, cook 60-75 minutes
- **Texture**: Mash for burgers, leave whole for salads

### **5. Cooking Temperatures and Doneness**
**Beef doneness temperatures**:
- **Rare**: 120-125°F (49-52°C) - cool red center
- **Medium rare**: 130-135°F (54-57°C) - warm red center
- **Medium**: 140-145°F (60-63°C) - warm pink center
- **Medium well**: 150-155°F (66-68°C) - slightly pink center
- **Well done**: 160°F+ (71°C+) - little or no pink

**Pork safety**: Cook to 145°F (63°C) with 3-minute rest (new FDA guideline, was 160°F)

**Carryover cooking**: Meat continues cooking 5-10°F after removal from heat. Remove from heat 5°F below target temperature.

**Resting times**:
- **Steaks/chops**: 5-10 minutes
- **Roasts**: 15-30 minutes
- **Whole birds**: 20-30 minutes
- **Fish**: 2-5 minutes`,
      
      completed: false,
      quiz: [
        {
          id: 1,
          question: "What is the safe internal temperature for cooking poultry?",
          options: [
            "145°F (63°C)",
            "155°F (68°C)",
            "165°F (74°C)",
            "175°F (79°C)"
          ],
          correctAnswer: 2,
          explanation: "Poultry must reach 165°F (74°C) to ensure destruction of salmonella and other harmful bacteria."
        },
        {
          id: 2,
          question: "What percentage of weight loss during meat cooking is actually juice, not fat?",
          options: [
            "5-10%",
            "15-30%",
            "35-50%",
            "50-65%"
          ],
          correctAnswer: 1,
          explanation: "15-30% of meat's weight loss during cooking is juice (water and dissolved proteins), not fat. Resting helps retain these juices."
        },
        {
          id: 3,
          question: "What is the '10-minute rule' for cooking fish?",
          options: [
            "Cook fish for exactly 10 minutes",
            "Cook fish 10 minutes per inch of thickness",
            "Rest fish for 10 minutes after cooking",
            "Marinate fish for 10 minutes before cooking"
          ],
          correctAnswer: 1,
          explanation: "The 10-minute rule: Cook fish 10 minutes per inch of thickness at the thickest part for perfect doneness."
        },
        {
          id: 4,
          question: "What is the current FDA guideline for cooking pork?",
          options: [
            "135°F (57°C) with rest",
            "145°F (63°C) with 3-minute rest",
            "155°F (68°C)",
            "160°F (71°C)"
          ],
          correctAnswer: 1,
          explanation: "Pork should be cooked to 145°F (63°C) with a 3-minute rest. This changed from 160°F due to improved pork safety."
        },
        {
          id: 5,
          question: "How long should you rest a steak after cooking?",
          options: [
            "1-2 minutes",
            "5-10 minutes",
            "15-20 minutes",
            "30 minutes"
          ],
          correctAnswer: 1,
          explanation: "Steaks should rest 5-10 minutes after cooking. This allows juices to redistribute throughout the meat."
        },
        {
          id: 6,
          question: "What is the purpose of brining poultry?",
          options: [
            "To kill bacteria",
            "To add moisture and season throughout",
            "To make skin crispier",
            "To reduce cooking time"
          ],
          correctAnswer: 1,
          explanation: "Brining adds moisture, seasons meat throughout, and promotes better browning through the Maillard reaction."
        },
        {
          id: 7,
          question: "Which fish has high fat content and is best for grilling?",
          options: [
            "Cod (lean)",
            "Halibut (lean)",
            "Salmon (moderate fat)",
            "Mackerel (high fat)"
          ],
          correctAnswer: 3,
          explanation: "Mackerel has high fat content, making it ideal for grilling. The fat keeps it moist and adds flavor during high-heat cooking."
        },
        {
          id: 8,
          question: "What is carryover cooking in meat?",
          options: [
            "Cooking meat in leftover sauces",
            "Meat continues cooking 5-10°F after removal from heat",
            "Using meat scraps for stock",
            "Cooking meat twice for safety"
          ],
          correctAnswer: 1,
          explanation: "Carryover cooking means meat continues to cook 5-10°F after removal from heat due to residual heat in the meat."
        },
        {
          id: 9,
          question: "What should you do with tofu before cooking to improve texture?",
          options: [
            "Freeze it first",
            "Press out excess water",
            "Soak in milk",
            "Boil for 5 minutes"
          ],
          correctAnswer: 1,
          explanation: "Pressing tofu removes excess water, allowing it to absorb marinades better and develop better texture when cooked."
        },
        {
          id: 10,
          question: "What are the freshness indicators for whole fish?",
          options: [
            "Cloudy eyes and brown gills",
            "Clear eyes and bright red gills",
            "Soft flesh and strong odor",
            "Loose scales and dull skin"
          ],
          correctAnswer: 1,
          explanation: "Fresh whole fish have clear (not cloudy) eyes and bright red (not brown) gills, and smell like ocean breeze, not fishy."
        },
        {
          id: 11,
          question: "What temperature is medium rare for beef?",
          options: [
            "120-125°F (49-52°C)",
            "130-135°F (54-57°C)",
            "140-145°F (60-63°C)",
            "150-155°F (66-68°C)"
          ],
          correctAnswer: 1,
          explanation: "Medium rare beef is 130-135°F (54-57°C) with a warm red center - considered ideal for flavor and tenderness by many chefs."
        },
        {
          id: 12,
          question: "How long do you typically cook shrimp?",
          options: [
            "Just until opaque and curled (2-3 minutes)",
            "5-7 minutes until bright pink",
            "10 minutes per pound",
            "15 minutes to ensure safety"
          ],
          correctAnswer: 0,
          explanation: "Shrimp cook quickly - just until they turn opaque and curl into a C-shape (2-3 minutes). Overcooking makes them rubbery."
        },
        {
          id: 13,
          question: "What is dry brining?",
          options: [
            "Soaking in salty water",
            "Rubbing salt on skin 12-24 hours before cooking",
            "Marinating in soy sauce",
            "Brining without water"
          ],
          correctAnswer: 1,
          explanation: "Dry brining involves rubbing salt on poultry skin 12-24 hours before cooking. It seasons meat and promotes crisp skin."
        },
        {
          id: 14,
          question: "What type of tofu is best for grilling?",
          options: [
            "Silken tofu",
            "Soft tofu",
            "Firm tofu",
            "Extra firm tofu"
          ],
          correctAnswer: 3,
          explanation: "Extra firm tofu holds its shape best for grilling. Press it first to remove water, then marinate and grill until golden."
        },
        {
          id: 15,
          question: "How long should a whole bird rest after roasting?",
          options: [
            "5-10 minutes",
            "10-15 minutes",
            "20-30 minutes",
            "45-60 minutes"
          ],
          correctAnswer: 2,
          explanation: "A whole roasted bird should rest 20-30 minutes before carving. This allows juices to redistribute for moister meat."
        },
        {
          id: 16,
          question: "What cooking method is best for tough cuts of meat?",
          options: [
            "Grilling",
            "Roasting",
            "Braising (moist heat)",
            "Sautéing"
          ],
          correctAnswer: 2,
          explanation: "Tough cuts (chuck, brisket, round) benefit from moist heat methods like braising that break down connective tissue."
        },
        {
          id: 17,
          question: "What should you do to tempeh before marinating to reduce bitterness?",
          options: [
            "Press it",
            "Freeze it",
            "Steam it for 10 minutes",
            "Boil it"
          ],
          correctAnswer: 2,
          explanation: "Steaming tempeh for 10 minutes before marinating helps reduce bitterness and allows better flavor absorption."
        },
        {
          id: 18,
          question: "When checking poultry doneness, where should you measure temperature?",
          options: [
            "Only in the breast",
            "Only in the thigh",
            "Thickest part of breast and thigh",
            "Wing joint"
          ],
          correctAnswer: 2,
          explanation: "Check both the thickest part of the breast and the thickest part of the thigh to ensure all parts reach 165°F (74°C)."
        },
        {
          id: 19,
          question: "How long do mussels and clams typically take to cook?",
          options: [
            "1-2 minutes",
            "3-4 minutes",
            "5-7 minutes until shells open",
            "10-12 minutes"
          ],
          correctAnswer: 2,
          explanation: "Mussels and clams cook in 5-7 minutes, just until shells open. Discard any that don't open as they may be dead."
        },
        {
          id: 20,
          question: "What is the purpose of trussing a whole bird?",
          options: [
            "To add flavor",
            "For even cooking by keeping legs/wings close",
            "To make carving easier",
            "To reduce cooking time"
          ],
          correctAnswer: 1,
          explanation: "Trussing ties legs and wings close to the body for more even cooking and better presentation."
        }
      ]
    },
    {
      id: 6,
      title: "Menu Planning & Food Presentation",
      content: `# Module 6: Menu Planning & Food Presentation

## Creating Memorable Dining Experiences

The final module combines all skills into complete meals. Presentation transforms food into dining experiences.

### **1. Menu Planning Principles**
**Balanced menu creation** considers:
1. **Flavor balance**: Sweet, salty, sour, bitter, umami across courses
2. **Texture contrast**: Crispy, creamy, chewy, tender elements
3. **Color variety**: Natural colors from different ingredients
4. **Temperature variation**: Hot and cold elements
5. **Preparation timing**: Mise en place for smooth service

**Classic menu structure**:
- **Appetizer**: 3-5 bites, stimulates appetite
- **Soup/Salad**: Light, cleanses palate
- **Main course**: Protein + starch + vegetable
- **Dessert**: Sweet finish, 2-3 components
- **Beverage**: Complements or contrasts flavors

**Portion sizing guidelines**:
- **Protein**: 4-6 oz (113-170g) per person
- **Starch**: 1/2 - 3/4 cup cooked
- **Vegetables**: 1/2 - 1 cup cooked
- **Appetizers**: 2-3 pieces per person for passed, 1 plate for seated
- **Dessert**: 4-6 oz (113-170g) per person

### **2. Plate Composition Techniques**
**The rule of thirds** divides plate visually:
- **Protein**: Usually placed at 6 o'clock position
- **Starch**: 10 o'clock position
- **Vegetable**: 2 o'clock position
- **Sauce**: Under or around, never over (except gravy)

**Height and dimension**:
- **Stacking**: Creates vertical interest
- **Leaning**: Proteins against starch mounds
- **Draping**: Vegetables over components
- **Nesting**: Items within each other

**Negative space** is as important as food:
- **Plate size**: Food should cover 2/3 of plate
- **Border**: 1/2 to 1 inch clean space around edge
- **Focal point**: One main item draws eye first

### **3. Garnishing Fundamentals**
**Functional garnishes**:
- **Fresh herbs**: Parsley, cilantro, chives, basil
- **Citrus**: Zest, twists, supremes
- **Edible flowers**: Nasturtiums, pansies, violas
- **Crunch elements**: Toasted nuts, seeds, croutons
- **Sauces**: Dots, drizzles, swooshes, pools

**Garnish rules**:
1. **Edible**: Everything on plate should be edible
2. **Relevant**: Garnish should relate to dish flavors
3. **Fresh**: Last-minute addition to maintain appearance
4. **Simple**: Less is more - one or two garnishes maximum

**Sauce application techniques**:
- **Under**: Protein placed on sauce
- **Around**: Sauce encircles main items
- **Drizzle**: Random or patterned lines
- **Dot**: Small dots around plate
- **Brush**: Light coating on protein

### **4. Color Theory in Food**
**Natural color sources**:
- **Red/Pink**: Beets, tomatoes, red peppers, berries
- **Orange/Yellow**: Carrots, squash, corn, citrus
- **Green**: Leafy greens, herbs, asparagus, peas
- **White**: Cauliflower, potatoes, onions, daikon
- **Purple**: Purple cabbage, eggplant, purple potatoes
- **Brown**: Mushrooms, roasted items, sauces

**Color psychology**:
- **Red**: Stimulates appetite, excitement
- **Green**: Fresh, healthy, calming
- **Yellow**: Happiness, energy
- **Orange**: Warmth, comfort
- **White**: Clean, pure, simple
- **Brown**: Earthy, rich, comforting

**Avoiding color mistakes**:
- Don't plate all brown foods together
- Use fresh herbs to add green accents
- Consider plate color as part of composition
- Blanch green vegetables to set bright color

### **5. Practical Service Considerations**
**Timing and temperature**:
- **Hot foods**: Serve at 140°F (60°C) or above
- **Cold foods**: Serve at 40°F (4°C) or below
- **Room temperature danger zone**: 40-140°F (4-60°C) for no more than 2 hours
- **Reheating**: Only once, to 165°F (74°C)

**Batch cooking for parties**:
- **Calculate amounts**: Number of guests × portion size × 1.1 (10% extra)
- **Prep timeline**: Day 3: Shopping, Day 2: Prep non-perishables, Day 1: Prep perishables, Day of: Final cooking
- **Holding temperatures**: Use chafing dishes, ice baths, warming drawers

**Family style vs. plated service**:
- **Family style**: Large platters passed, casual, interactive
- **Plated service**: Individual plates, formal, controlled presentation
- **Buffet**: Guests serve themselves, requires traffic flow planning

**Special dietary considerations**:
- **Allergies**: The big 9 account for 90% of reactions (milk, eggs, peanuts, tree nuts, fish, shellfish, soy, wheat, sesame)
- **Vegetarian**: No meat, may include dairy/eggs
- **Vegan**: No animal products
- **Gluten-free**: No wheat, barley, rye
- **Dairy-free**: No milk products

Remember: People eat with their eyes first. Beautiful presentation enhances perceived flavor and creates memorable dining experiences.`,
      
      completed: false,
      quiz: [
        {
          id: 1,
          question: "What are the five basic tastes that should be balanced across a menu?",
          options: [
            "Spicy, sweet, tangy, rich, fresh",
            "Hot, cold, crunchy, soft, creamy",
            "Sweet, salty, sour, bitter, umami",
            "Savory, acidic, herbal, earthy, smoky"
          ],
          correctAnswer: 2,
          explanation: "The five basic tastes are sweet, salty, sour, bitter, and umami (savory). A balanced menu considers these across courses."
        },
        {
          id: 2,
          question: "What is the standard portion size for protein per person?",
          options: [
            "2-3 oz (57-85g)",
            "4-6 oz (113-170g)",
            "8-10 oz (227-283g)",
            "12 oz (340g)"
          ],
          correctAnswer: 1,
          explanation: "Standard protein portion is 4-6 oz (113-170g) per person, though this can vary based on the number of courses and occasion."
        },
        {
          id: 3,
          question: "How much of the plate should food cover for optimal presentation?",
          options: [
            "1/2 of the plate",
            "2/3 of the plate",
            "3/4 of the plate",
            "The entire plate"
          ],
          correctAnswer: 1,
          explanation: "Food should cover approximately 2/3 of the plate, leaving 1/3 as negative space for visual appeal and easy handling."
        },
        {
          id: 4,
          question: "What is the rule for garnishes?",
          options: [
            "As many as possible for visual interest",
            "Only one garnish per plate",
            "Everything on plate should be edible",
            "Garnishes should be placed under food"
          ],
          correctAnswer: 2,
          explanation: "The golden rule: Everything on the plate should be edible. Garnishes should relate to the dish and enhance, not just decorate."
        },
        {
          id: 5,
          question: "What temperature should hot foods be served at?",
          options: [
            "120°F (49°C) or above",
            "140°F (60°C) or above",
            "160°F (71°C) or above",
            "180°F (82°C) or above"
          ],
          correctAnswer: 1,
          explanation: "Hot foods should be served at 140°F (60°C) or above to ensure food safety and optimal eating temperature."
        },
        {
          id: 6,
          question: "What color is known to stimulate appetite?",
          options: [
            "Blue",
            "Green",
            "Red",
            "White"
          ],
          correctAnswer: 2,
          explanation: "Red stimulates appetite and creates excitement. This is why many fast-food restaurants use red in their branding."
        },
        {
          id: 7,
          question: "How many appetizer pieces per person for passed hors d'oeuvres?",
          options: [
            "1-2 pieces",
            "2-3 pieces",
            "4-6 pieces",
            "8-10 pieces"
          ],
          correctAnswer: 1,
          explanation: "For passed hors d'oeuvres, plan 2-3 pieces per person per hour. For seated appetizers, one plate per person."
        },
        {
          id: 8,
          question: "What is the classic menu structure?",
          options: [
            "Appetizer, Main, Dessert",
            "Soup, Salad, Main, Dessert",
            "Appetizer, Soup/Salad, Main, Dessert, Beverage",
            "Starter, Fish course, Meat course, Cheese, Dessert"
          ],
          correctAnswer: 2,
          explanation: "Classic menu structure: Appetizer, Soup/Salad, Main course, Dessert, Beverage. This provides balanced progression."
        },
        {
          id: 9,
          question: "What percentage extra should you prepare for parties to account for variations?",
          options: [
            "5% extra",
            "10% extra",
            "15% extra",
            "20% extra"
          ],
          correctAnswer: 1,
          explanation: "Prepare 10% extra (multiply by 1.1) to account for variations in appetite and to ensure you don't run out."
        },
        {
          id: 10,
          question: "What are the 'big 9' food allergens?",
          options: [
            "Dairy, eggs, peanuts, tree nuts, fish, shellfish, soy, wheat, sesame",
            "Dairy, eggs, peanuts, shellfish, gluten, citrus, nightshades, soy, corn",
            "Nuts, dairy, eggs, seafood, gluten, soy, corn, strawberries, chocolate",
            "Peanuts, tree nuts, shellfish, dairy, eggs, wheat, soy, fish, mustard"
          ],
          correctAnswer: 0,
          explanation: "The big 9 allergens account for 90% of reactions: milk, eggs, peanuts, tree nuts, fish, shellfish, soy, wheat, and sesame."
        },
        {
          id: 11,
          question: "Where should the protein typically be placed on a plate?",
          options: [
            "12 o'clock position",
            "6 o'clock position",
            "Center of plate",
            "Left side of plate"
          ],
          correctAnswer: 1,
          explanation: "Protein is often placed at the 6 o'clock position (bottom center), with starch at 10 o'clock and vegetables at 2 o'clock."
        },
        {
          id: 12,
          question: "What is the danger zone for food temperatures?",
          options: [
            "32-40°F (0-4°C)",
            "40-140°F (4-60°C)",
            "140-165°F (60-74°C)",
            "165-212°F (74-100°C)"
          ],
          correctAnswer: 1,
          explanation: "The danger zone is 40-140°F (4-60°C) where bacteria grow rapidly. Food shouldn't be in this zone for more than 2 hours."
        },
        {
          id: 13,
          question: "What does negative space refer to in plate presentation?",
          options: [
            "Empty space on the plate",
            "Space between courses",
            "Area under the food",
            "Space for garnishes"
          ],
          correctAnswer: 0,
          explanation: "Negative space is the empty area on the plate (usually 1/2 to 1 inch border) that frames the food and makes it visually appealing."
        },
        {
          id: 14,
          question: "How many garnishes should typically be used on a plate?",
          options: [
            "One garnish maximum",
            "One or two garnishes maximum",
            "Three to four garnishes",
            "As many as fit without crowding"
          ],
          correctAnswer: 1,
          explanation: "Less is more - typically one or two garnishes maximum. They should enhance, not overwhelm, the dish."
        },
        {
          id: 15,
          question: "What should you consider first when planning a menu?",
          options: [
            "What looks most impressive",
            "What's most expensive",
            "Flavor balance across courses",
            "Cooking time for each dish"
          ],
          correctAnswer: 2,
          explanation: "Start with flavor balance - ensure sweet, salty, sour, bitter, and umami are represented appropriately across the meal."
        },
        {
          id: 16,
          question: "What is the purpose of stacking food on a plate?",
          options: [
            "To save space",
            "To create vertical interest",
            "To keep food warm",
            "To hide imperfections"
          ],
          correctAnswer: 1,
          explanation: "Stacking creates vertical interest and dimension, making the plate more visually appealing and professional."
        },
        {
          id: 17,
          question: "How long can food safely stay in the temperature danger zone?",
          options: [
            "30 minutes",
            "1 hour",
            "2 hours",
            "4 hours"
          ],
          correctAnswer: 2,
          explanation: "Food should not be in the 40-140°F (4-60°C) danger zone for more than 2 hours total (1 hour if over 90°F/32°C ambient)."
        },
        {
          id: 18,
          question: "What color represents freshness and health in food presentation?",
          options: [
            "Red",
            "Green",
            "Brown",
            "White"
          ],
          correctAnswer: 1,
          explanation: "Green represents freshness, health, and natural qualities. It's calming and suggests vegetables and herbs."
        },
        {
          id: 19,
          question: "What is the difference between family style and plated service?",
          options: [
            "Family style is more formal",
            "Plated service has larger portions",
            "Family style uses large platters passed around",
            "Plated service is less expensive"
          ],
          correctAnswer: 2,
          explanation: "Family style uses large platters passed around the table (casual), while plated service presents individual plates (formal)."
        },
        {
          id: 20,
          question: "Why should you avoid plating all brown foods together?",
          options: [
            "Brown food is unhealthy",
            "It lacks visual appeal and contrast",
            "Brown food cools faster",
            "It indicates overcooking"
          ],
          correctAnswer: 1,
          explanation: "All-brown plates lack visual appeal. Adding colorful elements (greens, reds, oranges) creates contrast and stimulates appetite."
        }
      ]
    }
  ],
  
  finalExam: {
    title: "Culinary Arts Certificate Final Examination",
    description: "Comprehensive exam covering all 6 modules. 40 questions testing your mastery of culinary fundamentals.",
    passingScore: 70,
    
    questions: [
      {
        id: 1,
        question: "What is the French term for preparing all ingredients before cooking begins?",
        options: [
          "Brigade de Cuisine",
          "Mise en Place",
          "Tourne",
          "Chiffonade"
        ],
        correctAnswer: 1,
        explanation: "Mise en Place (everything in its place) is the essential practice of preparing and organizing ingredients before cooking."
      },
      {
        id: 2,
        question: "What is the minimum internal temperature for cooking poultry according to FDA guidelines?",
        options: [
          "145°F (63°C)",
          "155°F (68°C)",
          "165°F (74°C)",
          "175°F (79°C)"
        ],
        correctAnswer: 2,
        explanation: "Poultry must reach 165°F (74°C) to ensure food safety and eliminate harmful bacteria like salmonella."
      },
      {
        id: 3,
        question: "Which cooking method preserves the most nutrients in vegetables?",
        options: [
          "Boiling",
          "Steaming",
          "Roasting",
          "Sautéing"
        ],
        correctAnswer: 1,
        explanation: "Steaming preserves 90-95% of nutrients versus 40-50% with boiling, as nutrients don't leach into water."
      },
      {
        id: 4,
        question: "Who codified the five mother sauces of classical French cuisine?",
        options: [
          "Julia Child",
          "Auguste Escoffier",
          "Marie-Antoine Carême",
          "Paul Bocuse"
        ],
        correctAnswer: 1,
        explanation: "Auguste Escoffier, the 'king of chefs,' established the five mother sauces in the late 19th/early 20th centuries."
      },
      {
        id: 5,
        question: "What is the purpose of shocking vegetables after blanching?",
        options: [
          "To add flavor",
          "To stop cooking and preserve color",
          "To make them softer",
          "To remove pesticides"
        ],
        correctAnswer: 1,
        explanation: "Shocking in ice water immediately stops cooking, preserving bright color, crisp texture, and nutrients."
      },
      {
        id: 6,
        question: "What chemical reaction creates browning and complex flavors during grilling?",
        options: [
          "Caramelization",
          "Maillard reaction",
          "Gelatinization",
          "Denaturation"
        ],
        correctAnswer: 1,
        explanation: "The Maillard reaction occurs above 310°F (154°C), creating characteristic browning and flavor compounds."
      },
      {
        id: 7,
        question: "What is the standard ratio for making a roux?",
        options: [
          "2 parts butter to 1 part flour",
          "1 part butter to 2 parts flour",
          "Equal parts butter and flour by weight",
          "1 part butter to 3 parts flour"
        ],
        correctAnswer: 2,
        explanation: "Proper roux uses equal parts butter and flour by weight for consistent thickening power."
      },
      {
        id: 8,
        question: "What is the ideal temperature range for deep-frying?",
        options: [
          "300-325°F (149-163°C)",
          "325-350°F (163-177°C)",
          "350-375°F (177-191°C)",
          "375-400°F (191-204°C)"
        ],
        correctAnswer: 2,
        explanation: "350-375°F (177-191°C) is ideal. Below this, food absorbs excess oil; above, it burns before cooking through."
      },
      {
        id: 9,
        question: "Which mother sauce is made from white roux and milk?",
        options: [
          "Velouté",
          "Béchamel",
          "Espagnole",
          "Hollandaise"
        ],
        correctAnswer: 1,
        explanation: "Béchamel is the white sauce made from white roux and milk, used as a base for creamy dishes."
      },
      {
        id: 10,
        question: "What is the golden rule when making stock?",
        options: [
          "Use only fresh bones",
          "Never boil stock",
          "Always skim fat",
          "Cook for exactly 4 hours"
        ],
        correctAnswer: 1,
        explanation: "Never boil stock - boiling makes it cloudy. Maintain a bare simmer (185°F/85°C) for clear, flavorful stock."
      },
      {
        id: 11,
        question: "What is the perfect rice-to-water ratio for white rice?",
        options: [
          "1:1 (equal parts)",
          "1:1.5 (rice to water)",
          "1:2 (rice to water)",
          "1:2.5 (rice to water)"
        ],
        correctAnswer: 1,
        explanation: "White rice typically uses 1:1.5 ratio (1 cup rice to 1.5 cups water), while brown rice uses 1:2."
      },
      {
        id: 12,
        question: "How much salt should you add per gallon of pasta water?",
        options: [
          "1 teaspoon",
          "1 tablespoon",
          "1-2 tablespoons",
          "1/4 cup"
        ],
        correctAnswer: 2,
        explanation: "Pasta water should taste like seawater, requiring 1-2 tablespoons salt per gallon (4 quarts) of water."
      },
      {
        id: 13,
        question: "What does 'al dente' mean when cooking pasta?",
        options: [
          "Soft and fully cooked",
          "To the tooth (firm but not hard)",
          "Overcooked and mushy",
          "Undercooked and crunchy"
        ],
        correctAnswer: 1,
        explanation: "Al dente means 'to the tooth' - pasta should be firm when bitten but not hard or crunchy in the center."
      },
      {
        id: 14,
        question: "What is the '10-minute rule' for cooking fish?",
        options: [
          "Cook fish for exactly 10 minutes",
          "Cook fish 10 minutes per inch of thickness",
          "Rest fish for 10 minutes after cooking",
          "Marinate fish for 10 minutes before cooking"
        ],
        correctAnswer: 1,
        explanation: "The 10-minute rule: Cook fish 10 minutes per inch of thickness at the thickest part for perfect doneness."
      },
      {
        id: 15,
        question: "How long should you rest a steak after cooking?",
        options: [
          "1-2 minutes",
          "5-10 minutes",
          "15-20 minutes",
          "30 minutes"
        ],
        correctAnswer: 1,
        explanation: "Steaks should rest 5-10 minutes after cooking to allow juices to redistribute throughout the meat."
      },
      {
        id: 16,
        question: "What is the current FDA guideline for cooking pork?",
        options: [
          "135°F (57°C) with rest",
          "145°F (63°C) with 3-minute rest",
          "155°F (68°C)",
          "160°F (71°C)"
        ],
        correctAnswer: 1,
        explanation: "Pork should be cooked to 145°F (63°C) with a 3-minute rest. This changed from 160°F due to improved pork safety."
      },
      {
        id: 17,
        question: "What are the five basic tastes that should be balanced across a menu?",
        options: [
          "Spicy, sweet, tangy, rich, fresh",
          "Hot, cold, crunchy, soft, creamy",
          "Sweet, salty, sour, bitter, umami",
          "Savory, acidic, herbal, earthy, smoky"
        ],
        correctAnswer: 2,
        explanation: "The five basic tastes are sweet, salty, sour, bitter, and umami (savory). Balanced menus consider these across courses."
      },
      {
        id: 18,
        question: "What is the standard portion size for protein per person?",
        options: [
          "2-3 oz (57-85g)",
          "4-6 oz (113-170g)",
          "8-10 oz (227-283g)",
          "12 oz (340g)"
        ],
        correctAnswer: 1,
        explanation: "Standard protein portion is 4-6 oz (113-170g) per person, varying based on number of courses and occasion."
      },
      {
        id: 19,
        question: "How much of the plate should food cover for optimal presentation?",
        options: [
          "1/2 of the plate",
          "2/3 of the plate",
          "3/4 of the plate",
          "The entire plate"
        ],
        correctAnswer: 1,
        explanation: "Food should cover approximately 2/3 of the plate, leaving 1/3 as negative space for visual appeal."
      },
      {
        id: 20,
        question: "What temperature should hot foods be served at?",
        options: [
          "120°F (49°C) or above",
          "140°F (60°C) or above",
          "160°F (71°C) or above",
          "180°F (82°C) or above"
        ],
        correctAnswer: 1,
        explanation: "Hot foods should be served at 140°F (60°C) or above to ensure food safety and optimal eating temperature."
      },
      {
        id: 21,
        question: "What is the purpose of brining poultry?",
        options: [
          "To kill bacteria",
          "To add moisture and season throughout",
          "To make skin crispier",
          "To reduce cooking time"
        ],
        correctAnswer: 1,
        explanation: "Brining adds moisture, seasons meat throughout, and promotes better browning through the Maillard reaction."
      },
      {
        id: 22,
        question: "What are the freshness indicators for whole fish?",
        options: [
          "Cloudy eyes and brown gills",
          "Clear eyes and bright red gills",
          "Soft flesh and strong odor",
          "Loose scales and dull skin"
        ],
        correctAnswer: 1,
        explanation: "Fresh whole fish have clear eyes, bright red gills, firm flesh, and smell like ocean breeze, not fishy."
      },
      {
        id: 23,
        question: "What temperature is medium rare for beef?",
        options: [
          "120-125°F (49-52°C)",
          "130-135°F (54-57°C)",
          "140-145°F (60-63°C)",
          "150-155°F (66-68°C)"
        ],
        correctAnswer: 1,
        explanation: "Medium rare beef is 130-135°F (54-57°C) with a warm red center - ideal for flavor and tenderness."
      },
      {
        id: 24,
        question: "What is the rule for garnishes?",
        options: [
          "As many as possible for visual interest",
          "Only one garnish per plate",
          "Everything on plate should be edible",
          "Garnishes should be placed under food"
        ],
        correctAnswer: 2,
        explanation: "The golden rule: Everything on the plate should be edible. Garnishes should relate to and enhance the dish."
      },
      {
        id: 25,
        question: "What color is known to stimulate appetite?",
        options: [
          "Blue",
          "Green",
          "Red",
          "White"
        ],
        correctAnswer: 2,
        explanation: "Red stimulates appetite and creates excitement, which is why many restaurants use it in branding."
      },
      {
        id: 26,
        question: "How many basic knife cuts form professional culinary foundation?",
        options: [
          "5 basic cuts",
          "6 basic cuts",
          "7 basic cuts",
          "8 basic cuts"
        ],
        correctAnswer: 3,
        explanation: "Professional chefs master eight basic knife cuts: Julienne, Brunoise, Small Dice, Medium Dice, Large Dice, Paysanne, Chiffonade, and Tourne."
      },
      {
        id: 27,
        question: "What is carryover cooking in meat?",
        options: [
          "Cooking meat in leftover sauces",
          "Meat continues cooking 5-10°F after removal from heat",
          "Using meat scraps for stock",
          "Cooking meat twice for safety"
        ],
        correctAnswer: 1,
        explanation: "Carryover cooking means meat continues to cook 5-10°F after removal from heat due to residual heat."
      },
      {
        id: 28,
        question: "What is the danger zone for food temperatures?",
        options: [
          "32-40°F (0-4°C)",
          "40-140°F (4-60°C)",
          "140-165°F (60-74°C)",
          "165-212°F (74-100°C)"
        ],
        correctAnswer: 1,
        explanation: "The danger zone is 40-140°F (4-60°C) where bacteria grow rapidly. Limit to 2 hours maximum."
      },
      {
        id: 29,
        question: "What are the 'big 9' food allergens?",
        options: [
          "Dairy, eggs, peanuts, tree nuts, fish, shellfish, soy, wheat, sesame",
          "Dairy, eggs, peanuts, shellfish, gluten, citrus, nightshades, soy, corn",
          "Nuts, dairy, eggs, seafood, gluten, soy, corn, strawberries, chocolate",
          "Peanuts, tree nuts, shellfish, dairy, eggs, wheat, soy, fish, mustard"
        ],
        correctAnswer: 0,
        explanation: "The big 9 allergens account for 90% of reactions: milk, eggs, peanuts, tree nuts, fish, shellfish, soy, wheat, and sesame."
      },
      {
        id: 30,
        question: "What cooking method is best for tough cuts of meat?",
        options: [
          "Grilling",
          "Roasting",
          "Braising (moist heat)",
          "Sautéing"
        ],
        correctAnswer: 2,
        explanation: "Tough cuts (chuck, brisket, round) benefit from moist heat methods like braising that break down connective tissue."
      },
      {
        id: 31,
        question: "What is the classic menu structure?",
        options: [
          "Appetizer, Main, Dessert",
          "Soup, Salad, Main, Dessert",
          "Appetizer, Soup/Salad, Main, Dessert, Beverage",
          "Starter, Fish course, Meat course, Cheese, Dessert"
        ],
        correctAnswer: 2,
        explanation: "Classic menu: Appetizer, Soup/Salad, Main course, Dessert, Beverage. This provides balanced progression."
      },
      {
        id: 32,
        question: "What should you do with tofu before cooking to improve texture?",
        options: [
          "Freeze it first",
          "Press out excess water",
          "Soak in milk",
          "Boil for 5 minutes"
        ],
        correctAnswer: 1,
        explanation: "Pressing tofu removes excess water, allowing better marinade absorption and improved texture when cooked."
      },
      {
        id: 33,
        question: "What percentage of nutrients do vegetables retain when steamed versus boiled?",
        options: [
          "60-70% steamed vs 40-50% boiled",
          "70-80% steamed vs 40-50% boiled",
          "80-90% steamed vs 40-50% boiled",
          "90-95% steamed vs 40-50% boiled"
        ],
        correctAnswer: 3,
        explanation: "Steaming preserves 90-95% of nutrients while boiling preserves only 40-50% due to nutrient leaching."
      },
      {
        id: 34,
        question: "What is the purpose of negative space in plate presentation?",
        options: [
          "To make portions look larger",
          "To frame the food and create visual appeal",
          "To allow room for sauces",
          "To prevent different foods from touching"
        ],
        correctAnswer: 1,
        explanation: "Negative space (empty area) frames the food, creates visual appeal, and makes the plate easier to handle."
      },
      {
        id: 35,
        question: "How long do mussels and clams typically take to cook?",
        options: [
          "1-2 minutes",
          "3-4 minutes",
          "5-7 minutes until shells open",
          "10-12 minutes"
        ],
        correctAnswer: 2,
        explanation: "Mussels and clams cook in 5-7 minutes, just until shells open. Discard any that don't open."
      },
      {
        id: 36,
        question: "What is the purpose of trussing a whole bird?",
        options: [
          "To add flavor",
          "For even cooking by keeping legs/wings close",
          "To make carving easier",
          "To reduce cooking time"
        ],
        correctAnswer: 1,
        explanation: "Trussing ties legs and wings close to the body for more even cooking and better presentation."
      },
      {
        id: 37,
        question: "What should you consider first when planning a menu?",
        options: [
          "What looks most impressive",
          "What's most expensive",
          "Flavor balance across courses",
          "Cooking time for each dish"
        ],
        correctAnswer: 2,
        explanation: "Start with flavor balance - ensure the five basic tastes are represented appropriately across the meal."
      },
      {
        id: 38,
        question: "How long can food safely stay in the temperature danger zone?",
        options: [
          "30 minutes",
          "1 hour",
          "2 hours",
          "4 hours"
        ],
        correctAnswer: 2,
        explanation: "Food should not be in the 40-140°F (4-60°C) danger zone for more than 2 hours total."
      },
      {
        id: 39,
        question: "What color represents freshness and health in food presentation?",
        options: [
          "Red",
          "Green",
          "Brown",
          "White"
        ],
        correctAnswer: 1,
        explanation: "Green represents freshness, health, and natural qualities. It's calming and suggests vegetables and herbs."
      },
      {
        id: 40,
        question: "Why is it important to rest meat after cooking?",
        options: [
          "To make it easier to carve",
          "To allow juices to redistribute",
          "To continue cooking to proper temperature",
          "To develop more flavor"
        ],
        correctAnswer: 1,
        explanation: "Resting allows juices that have been driven to the center by heat to redistribute throughout the meat, resulting in juicier slices."
      }
    ]
  }
};

// Brand Management (Certificate) - Complete Course Data
export const brandManagementCertificate = {
  // 1. COURSE METADATA & IDENTIFICATION
  id: "brand-management-certificate",
  title: "Brand Management (Certificate)",
  description: "Fundamental course covering brand strategy, positioning, identity development, and basic brand management principles for marketing professionals and business owners.",
  duration: "6 weeks",
  timeCommitment: "4-6 hours per week",
  price: 12,
  upgradePrice: 18,
  icon: "🏷️",
  badge: "Certificate",
  prerequisites: [],
  
  // 2. MODULE ARCHITECTURE - 6 Modules for Certificate
  modules: [
    {
      id: 1,
      title: "Introduction to Brand Management",
      content: `
# Module 1: Introduction to Brand Management

## Understanding What Brands Are and Why They Matter
This module introduces the fundamental concepts of branding and explains why brands are valuable business assets.

## 1.1 What is a Brand?
**A brand** is more than just a logo or name. It is the sum total of all experiences and perceptions that people have about a product, service, or company.

**Key components of a brand**:
- **Brand Identity**: Visual elements (logo, colors, typography)
- **Brand Promise**: What customers can expect
- **Brand Personality**: Human characteristics attributed to brand
- **Brand Values**: Core principles and beliefs
- **Brand Experience**: Customer interactions at all touchpoints

**Difference between brand and product**:
- **Product**: What you sell (tangible features, specifications)
- **Brand**: What people buy (emotional connection, perceived value)
- Example: iPhone (product) vs. Apple (brand experience)

## 1.2 Why Brands Matter
**Business value of strong brands**:

**Customer benefits**:
- **Risk reduction**: Familiar brands feel safer
- **Decision simplification**: Easier choice among options
- **Quality promise**: Consistent experience expected
- **Self-expression**: Brands help express identity

**Business benefits**:
- **Price premium**: Strong brands can charge more (Apple charges 20-30% premium)
- **Customer loyalty**: Repeat purchases (75% of revenue from existing customers for strong brands)
- **Competitive advantage**: Harder for competitors to copy
- **Talent attraction**: People want to work for strong brands

**Financial impact**:
- Brands can represent 20-80% of company value
- Strong brands grow 2-3 times faster than weak brands
- Brand leaders earn 3-5 times higher profits

## 1.3 Brand Evolution & History
**Historical development of branding**:

**Ancient origins** (3000 BC - 1800s):
- **Potter's marks**: Identify makers of pottery
- **Guild marks**: Quality assurance in medieval Europe
- **Cattle branding**: Identify livestock ownership

**Industrial revolution** (1800s - 1900s):
- **Mass production**: Need to differentiate similar products
- **Trademark laws**: Legal protection begins (1870 first US trademark law)
- **Packaged goods**: Brands like Coca-Cola (1886), Kellogg's (1906)

**Modern branding** (1950s - present):
- **Television advertising**: Mass brand building
- **Brand positioning**: Focus on unique selling propositions
- **Global brands**: Worldwide recognition and consistency
- **Digital branding**: Online presence and social media
      `,
      completed: false,
      quiz: [
        {
          id: 1,
          question: "What is a brand more than just?",
          options: ["Only a logo", "Only a name", "Only a product", "All of the above"],
          correctAnswer: 3,
          explanation: "A brand is more than just a logo, name, or product - it's the total experience and perception."
        },
        {
          id: 2,
          question: "What component includes visual elements like logo and colors?",
          options: ["Brand Promise", "Brand Identity", "Brand Personality", "Brand Values"],
          correctAnswer: 1,
          explanation: "Brand Identity includes visual elements: logo, colors, typography."
        },
        {
          id: 3,
          question: "What is the brand promise?",
          options: ["What customers can expect", "Legal contract", "Only about price", "Product specifications"],
          correctAnswer: 0,
          explanation: "Brand Promise is what customers can expect from the brand consistently."
        },
        {
          id: 4,
          question: "What customer benefit reduces risk?",
          options: ["Familiar brands feel safer", "More expensive", "Complex choices", "Unknown brands"],
          correctAnswer: 0,
          explanation: "Familiar brands reduce perceived risk for customers."
        },
        {
          id: 5,
          question: "What business benefit allows charging more?",
          options: ["Price premium", "Higher costs", "Lower quality", "No benefit"],
          correctAnswer: 0,
          explanation: "Strong brands can charge price premiums (Apple charges 20-30% more)."
        },
        {
          id: 6,
          question: "What percentage of revenue comes from existing customers for strong brands?",
          options: ["25%", "50%", "75%", "90%"],
          correctAnswer: 2,
          explanation: "75% of revenue typically comes from existing customers for strong brands."
        },
        {
          id: 7,
          question: "What percentage of company value can brands represent?",
          options: ["5-15%", "20-80%", "90-100%", "None"],
          correctAnswer: 1,
          explanation: "Brands can represent 20-80% of total company value."
        },
        {
          id: 8,
          question: "How much faster do strong brands grow compared to weak brands?",
          options: ["Same rate", "2-3 times faster", "10 times faster", "Slower"],
          correctAnswer: 1,
          explanation: "Strong brands typically grow 2-3 times faster than weak brands."
        },
        {
          id: 9,
          question: "What ancient branding identified pottery makers?",
          options: ["Cattle brands", "Potter's marks", "Guild marks", "Digital marks"],
          correctAnswer: 1,
          explanation: "Potter's marks were early branding identifying makers of pottery."
        },
        {
          id: 10,
          question: "When was first US trademark law?",
          options: ["1776", "1870", "1920", "1950"],
          correctAnswer: 1,
          explanation: "First US trademark law passed in 1870."
        },
        {
          id: 11,
          question: "What is brand personality?",
          options: ["Human characteristics attributed to brand", "CEO personality", "Product features", "Company size"],
          correctAnswer: 0,
          explanation: "Brand Personality: human characteristics people attribute to brand."
        },
        {
          id: 12,
          question: "What helps customers express identity?",
          options: ["Self-expression through brands", "Only price", "Only function", "No expression"],
          correctAnswer: 0,
          explanation: "Brands help customers express their identity and values."
        },
        {
          id: 13,
          question: "What is brand experience?",
          options: ["Only advertising", "Customer interactions at all touchpoints", "Only product use", "Only website"],
          correctAnswer: 1,
          explanation: "Brand Experience includes all customer interactions at every touchpoint."
        },
        {
          id: 14,
          question: "How much higher profits do brand leaders earn?",
          options: ["Same", "3-5 times higher", "10 times higher", "Lower profits"],
          correctAnswer: 1,
          explanation: "Brand leaders typically earn 3-5 times higher profits."
        },
        {
          id: 15,
          question: "What medieval branding provided quality assurance?",
          options: ["Potter's marks", "Guild marks", "Cattle brands", "Digital marks"],
          correctAnswer: 1,
          explanation: "Guild marks in medieval Europe provided quality assurance."
        },
        {
          id: 16,
          question: "When was Coca-Cola founded?",
          options: ["1776", "1886", "1920", "1950"],
          correctAnswer: 1,
          explanation: "Coca-Cola was founded in 1886."
        },
        {
          id: 17,
          question: "What modern development enabled mass brand building?",
          options: ["Radio", "Television advertising", "Newspapers", "Word of mouth"],
          correctAnswer: 1,
          explanation: "Television advertising enabled mass brand building from 1950s onward."
        },
        {
          id: 18,
          question: "What is brand values?",
          options: ["Core principles and beliefs", "Stock price", "Number of products", "Employee count"],
          correctAnswer: 0,
          explanation: "Brand Values are core principles and beliefs guiding the brand."
        },
        {
          id: 19,
          question: "What business benefit attracts talent?",
          options: ["People want to work for strong brands", "Only high salary", "Only location", "No attraction"],
          correctAnswer: 0,
          explanation: "Strong brands attract talented employees who want to work for them."
        },
        {
          id: 20,
          question: "What digital branding includes?",
          options: ["Online presence and social media", "Only print ads", "Only TV ads", "Only store presence"],
          correctAnswer: 0,
          explanation: "Digital branding includes online presence, websites, and social media."
        }
      ]
    },
    {
      id: 2,
      title: "Brand Strategy & Positioning",
      content: `
# Module 2: Brand Strategy & Positioning

## Creating Distinctive Market Positions
This module covers how to develop a brand strategy and position your brand effectively in the marketplace.

## 2.1 Brand Strategy Framework
**Brand strategy** is a long-term plan for developing a successful brand to achieve specific goals.

**Key elements of brand strategy**:
1. **Brand Vision**: Where the brand wants to be in future
2. **Brand Mission**: What the brand does and for whom
3. **Brand Values**: Core principles guiding behavior
4. **Brand Promise**: What customers can always expect
5. **Brand Personality**: Human characteristics of brand
6. **Brand Voice**: How brand communicates (tone, style)

**Strategic brand decisions**:
- **Target audience**: Who you serve
- **Competitive frame**: Who you compete with
- **Point of difference**: What makes you unique
- **Reason to believe**: Why customers should believe you

## 2.2 Brand Positioning
**Brand positioning** is how a brand is perceived in the minds of customers relative to competitors.

**Positioning statement formula**:
For [target audience], [brand name] is the [category] that [point of difference] because [reason to believe].

**Example** (Volvo):
"For safety-conscious families, Volvo is the automobile brand that provides superior protection because of our legendary safety engineering and crash test results."

**Positioning approaches**:
- **Benefit positioning**: Focus on key benefit (Volvo = safety)
- **Attribute positioning**: Focus on specific feature (Dyson = cyclone technology)
- **Use/application**: When product is used (Gatorade = during sports)
- **User positioning**: Type of person using (Harley-Davidson = rebels)
- **Competitor positioning**: Against specific competitor (Avis = "We try harder" vs. Hertz)
- **Quality/price**: Position on value spectrum (Walmart = low price, Tiffany = high quality)

## 2.3 Brand Architecture
**How brands are organized within a company**:

**Branded house** (single master brand):
- All products under one brand name
- Example: Virgin (Virgin Airlines, Virgin Mobile, Virgin Media)
- Advantages: Efficiency, clear identity
- Disadvantages: Risk to entire portfolio if one fails

**House of brands** (multiple independent brands):
- Each product has its own brand
- Example: Procter & Gamble (Tide, Pampers, Gillette)
- Advantages: Targeted positioning, risk containment
- Disadvantages: High cost, brand building for each

**Endorsed brands** (hybrid approach):
- Sub-brands with master brand endorsement
- Example: Marriott Bonvoy (Marriott endorses Bonvoy loyalty program)
- Balance between consistency and flexibility

**Sub-brands**:
- Related to master brand but distinct
- Example: Apple iPhone, Apple iPad, Apple Watch
      `,
      completed: false,
      quiz: [
        {
          id: 1,
          question: "What is brand strategy?",
          options: ["Short-term tactic", "Long-term plan for brand development", "Only advertising plan", "Product design"],
          correctAnswer: 1,
          explanation: "Brand strategy is long-term plan for developing successful brand."
        },
        {
          id: 2,
          question: "What element describes where brand wants to be?",
          options: ["Brand Vision", "Brand Mission", "Brand Values", "Brand Promise"],
          correctAnswer: 0,
          explanation: "Brand Vision: where brand wants to be in future."
        },
        {
          id: 3,
          question: "What is brand positioning?",
          options: ["Product packaging", "How brand is perceived vs competitors", "Employee positions", "Store locations"],
          correctAnswer: 1,
          explanation: "Brand positioning: how brand is perceived in customers' minds relative to competitors."
        },
        {
          id: 4,
          question: "What positioning focuses on safety?",
          options: ["Volvo", "Ferrari", "Toyota", "All cars"],
          correctAnswer: 0,
          explanation: "Volvo positions on safety benefit."
        },
        {
          id: 5,
          question: "What is branded house example?",
          options: ["Virgin", "Procter & Gamble", "Unilever", "General Motors"],
          correctAnswer: 0,
          explanation: "Virgin uses branded house (all under Virgin master brand)."
        },
        {
          id: 6,
          question: "What is house of brands example?",
          options: ["Virgin", "Procter & Gamble", "Apple", "Samsung"],
          correctAnswer: 1,
          explanation: "Procter & Gamble uses house of brands (separate brands for each product)."
        },
        {
          id: 7,
          question: "What positioning statement part: 'For safety-conscious families'?",
          options: ["Target audience", "Brand name", "Point of difference", "Reason to believe"],
          correctAnswer: 0,
          explanation: "'For safety-conscious families' = target audience in positioning statement."
        },
        {
          id: 8,
          question: "What element: what brand does and for whom?",
          options: ["Vision", "Mission", "Values", "Personality"],
          correctAnswer: 1,
          explanation: "Brand Mission: what brand does and for whom."
        },
        {
          id: 9,
          question: "What positioning focuses on cyclone technology?",
          options: ["Dyson", "Hoover", "Samsung", "LG"],
          correctAnswer: 0,
          explanation: "Dyson positions on cyclone technology attribute."
        },
        {
          id: 10,
          question: "What endorsed brands example?",
          options: ["Marriott Bonvoy", "Tide alone", "Virgin everything", "Apple only"],
          correctAnswer: 0,
          explanation: "Marriott Bonvoy: master brand endorses sub-brand."
        },
        {
          id: 11,
          question: "What positioning against specific competitor?",
          options: ["Avis vs Hertz", "Volvo alone", "Generic", "No competition"],
          correctAnswer: 0,
          explanation: "Avis positioned against Hertz: 'We try harder'."
        },
        {
          id: 12,
          question: "What element: core principles guiding behavior?",
          options: ["Vision", "Mission", "Values", "Promise"],
          correctAnswer: 2,
          explanation: "Brand Values: core principles guiding behavior."
        },
        {
          id: 13,
          question: "What positioning: when product is used?",
          options: ["Gatorade during sports", "Volvo safety", "Dyson technology", "Walmart price"],
          correctAnswer: 0,
          explanation: "Gatorade positions on use/application: during sports."
        },
        {
          id: 14,
          question: "What sub-brands example?",
          options: ["Apple iPhone", "Tide alone", "Virgin brand only", "P&G corporate"],
          correctAnswer: 0,
          explanation: "Apple iPhone: sub-brand under Apple master brand."
        },
        {
          id: 15,
          question: "What positioning: type of person using?",
          options: ["Harley-Davidson for rebels", "Volvo safety", "Walmart price", "Dyson tech"],
          correctAnswer: 0,
          explanation: "Harley-Davidson positions on user: rebels."
        },
        {
          id: 16,
          question: "What element: how brand communicates?",
          options: ["Brand Voice", "Brand Vision", "Brand Values", "Brand Mission"],
          correctAnswer: 0,
          explanation: "Brand Voice: how brand communicates (tone, style)."
        },
        {
          id: 17,
          question: "What positioning on value spectrum?",
          options: ["Walmart low price", "Volvo safety", "Gatorade sports", "Avis vs Hertz"],
          correctAnswer: 0,
          explanation: "Walmart positions on quality/price: low price."
        },
        {
          id: 18,
          question: "What branded house disadvantage?",
          options: ["Risk to entire portfolio", "High cost for each", "Confusing", "No consistency"],
          correctAnswer: 0,
          explanation: "Branded house: risk to entire portfolio if one product fails."
        },
        {
          id: 19,
          question: "What house of brands advantage?",
          options: ["Targeted positioning", "Efficiency", "Clear single identity", "Lower marketing cost"],
          correctAnswer: 0,
          explanation: "House of brands allows targeted positioning for each product."
        },
        {
          id: 20,
          question: "What strategic decision: who you serve?",
          options: ["Target audience", "Competitive frame", "Point of difference", "Reason to believe"],
          correctAnswer: 0,
          explanation: "Target audience: who the brand serves."
        }
      ]
    },
    {
      id: 3,
      title: "Brand Identity Development",
      content: `
# Module 3: Brand Identity Development

## Creating Visual and Verbal Brand Elements
This module covers how to develop the visual and verbal elements that make up a brand's identity.

## 3.1 Visual Identity Elements
**Logo** (primary visual identifier):
- **Wordmark**: Text only (Google, Coca-Cola)
- **Symbol/Icon**: Graphic only (Apple, Nike swoosh)
- **Combination mark**: Text + symbol (Burger King, Adidas)
- **Emblem**: Text inside symbol (Starbucks, BMW)

**Logo design principles**:
- **Simple**: Easy to recognize and remember
- **Memorable**: Distinctive and unique
- **Timeless**: Shouldn't look dated quickly
- **Versatile**: Works at different sizes and applications
- **Appropriate**: Fits brand personality and industry

**Color psychology** in branding:
- **Red**: Energy, excitement, urgency (Coca-Cola, Netflix)
- **Blue**: Trust, security, professionalism (Facebook, IBM)
- **Green**: Nature, health, growth (Starbucks, Whole Foods)
- **Yellow**: Optimism, warmth, caution (McDonald's, IKEA)
- **Black**: Luxury, sophistication, power (Chanel, Mercedes)
- **White**: Simplicity, purity, cleanliness (Apple, Tesla)

**Typography** (font choices):
- **Serif fonts**: Traditional, reliable, respectable (Times New Roman, Georgia)
- **Sans-serif fonts**: Modern, clean, approachable (Helvetica, Arial)
- **Script fonts**: Elegant, creative, personal (Coca-Cola script)
- **Display fonts**: Attention-grabbing, thematic (used sparingly)

## 3.2 Verbal Identity Elements
**Brand name development**:
- **Descriptive**: Describes what brand does (General Motors, American Airlines)
- **Suggestive**: Suggests benefits or qualities (Amazon, Uber)
- **Abstract**: Meaning created through marketing (Kodak, Exxon)
- **Acronym**: Initials or abbreviations (IBM, BMW)
- **Founder names**: Personal names (Ford, Disney)

**Naming criteria**:
- **Memorable**: Easy to remember and recall
- **Meaningful**: Communicates something about brand
- **Likable**: Positive associations
- **Protectable**: Can be trademarked
- **Future-proof**: Works as brand expands

**Tagline development** (slogan):
- Short phrase that captures brand essence
- Should be memorable and meaningful
- Examples: Nike "Just Do It", Apple "Think Different", McDonald's "I'm Lovin' It"

**Brand voice and tone**:
- **Voice**: Consistent personality in communication (funny, serious, expert, friendly)
- **Tone**: Variations based on context (website vs. social media vs. customer service)
- **Style guide**: Document defining voice, tone, and writing guidelines

## 3.3 Brand Guidelines
**Brand style guide** (brand bible):
- Comprehensive document defining all brand elements
- Ensures consistency across all applications

**Typical contents**:
1. **Brand story**: History, mission, values
2. **Logo usage**: Clear space, minimum size, incorrect usage
3. **Color palette**: Primary and secondary colors with exact values (RGB, CMYK, HEX)
4. **Typography**: Primary and secondary fonts with hierarchy
5. **Imagery style**: Photo style, illustration style
6. **Voice and tone**: Writing guidelines and examples
7. **Application examples**: Business cards, website, packaging

**Implementation importance**:
- Consistency builds recognition (brands with consistent presentation are 3-4 times more likely to have good brand visibility)
- Reduces internal confusion
- Makes external partnerships easier
- Protects brand equity over time
      `,
      completed: false,
      quiz: [
        {
          id: 1,
          question: "What logo type is text only?",
          options: ["Wordmark", "Symbol", "Combination mark", "Emblem"],
          correctAnswer: 0,
          explanation: "Wordmark: text only logo (Google, Coca-Cola)."
        },
        {
          id: 2,
          question: "What logo type is graphic only?",
          options: ["Wordmark", "Symbol/Icon", "Combination mark", "Emblem"],
          correctAnswer: 1,
          explanation: "Symbol/Icon: graphic only logo (Apple, Nike swoosh)."
        },
        {
          id: 3,
          question: "What color represents trust and security?",
          options: ["Red", "Blue", "Green", "Yellow"],
          correctAnswer: 1,
          explanation: "Blue represents trust, security, professionalism (Facebook, IBM)."
        },
        {
          id: 4,
          question: "What font type is traditional and reliable?",
          options: ["Serif", "Sans-serif", "Script", "Display"],
          correctAnswer: 0,
          explanation: "Serif fonts: traditional, reliable, respectable."
        },
        {
          id: 5,
          question: "What naming type describes what brand does?",
          options: ["Descriptive", "Suggestive", "Abstract", "Acronym"],
          correctAnswer: 0,
          explanation: "Descriptive names describe what brand does (General Motors)."
        },
        {
          id: 6,
          question: "What naming type suggests benefits?",
          options: ["Descriptive", "Suggestive", "Abstract", "Acronym"],
          correctAnswer: 1,
          explanation: "Suggestive names suggest benefits or qualities (Amazon, Uber)."
        },
        {
          id: 7,
          question: "What is tagline?",
          options: ["Long description", "Short phrase capturing brand essence", "Legal document", "Product name"],
          correctAnswer: 1,
          explanation: "Tagline: short phrase capturing brand essence (Nike 'Just Do It')."
        },
        {
          id: 8,
          question: "What logo type has text inside symbol?",
          options: ["Wordmark", "Symbol", "Combination mark", "Emblem"],
          correctAnswer: 3,
          explanation: "Emblem: text inside symbol (Starbucks, BMW)."
        },
        {
          id: 9,
          question: "What color represents luxury and sophistication?",
          options: ["Red", "Blue", "Green", "Black"],
          correctAnswer: 3,
          explanation: "Black represents luxury, sophistication, power (Chanel, Mercedes)."
        },
        {
          id: 10,
          question: "What font type is modern and clean?",
          options: ["Serif", "Sans-serif", "Script", "Display"],
          correctAnswer: 1,
          explanation: "Sans-serif fonts: modern, clean, approachable."
        },
        {
          id: 11,
          question: "What naming type uses initials?",
          options: ["Descriptive", "Suggestive", "Abstract", "Acronym"],
          correctAnswer: 3,
          explanation: "Acronym names use initials (IBM, BMW)."
        },
        {
          id: 12,
          question: "What is brand voice?",
          options: ["CEO's voice", "Consistent personality in communication", "Only advertising tone", "Product sound"],
          correctAnswer: 1,
          explanation: "Brand Voice: consistent personality in all communication."
        },
        {
          id: 13,
          question: "What logo design principle: easy to recognize?",
          options: ["Simple", "Memorable", "Timeless", "Versatile"],
          correctAnswer: 0,
          explanation: "Simple: easy to recognize and remember."
        },
        {
          id: 14,
          question: "What color represents energy and excitement?",
          options: ["Red", "Blue", "Green", "Yellow"],
          correctAnswer: 0,
          explanation: "Red represents energy, excitement, urgency (Coca-Cola, Netflix)."
        },
        {
          id: 15,
          question: "What naming criteria: can be trademarked?",
          options: ["Memorable", "Meaningful", "Protectable", "Future-proof"],
          correctAnswer: 2,
          explanation: "Protectable: name can be trademarked legally."
        },
        {
          id: 16,
          question: "What is brand style guide?",
          options: ["Only logo file", "Comprehensive document defining all brand elements", "Only color palette", "Employee manual"],
          correctAnswer: 1,
          explanation: "Brand style guide: comprehensive document defining all brand elements."
        },
        {
          id: 17,
          question: "How much more likely are consistent brands to have good visibility?",
          options: ["Same", "3-4 times more likely", "10 times", "Less likely"],
          correctAnswer: 1,
          explanation: "Brands with consistent presentation are 3-4 times more likely to have good visibility."
        },
        {
          id: 18,
          question: "What logo type combines text and symbol?",
          options: ["Wordmark", "Symbol", "Combination mark", "Emblem"],
          correctAnswer: 2,
          explanation: "Combination mark: text + symbol (Burger King, Adidas)."
        },
        {
          id: 19,
          question: "What naming type: meaning created through marketing?",
          options: ["Descriptive", "Suggestive", "Abstract", "Acronym"],
          correctAnswer: 2,
          explanation: "Abstract names: meaning created through marketing (Kodak, Exxon)."
        },
        {
          id: 20,
          question: "What is tone in branding?",
          options: ["Variations based on context", "Only one style", "Product sound", "Logo color"],
          correctAnswer: 0,
          explanation: "Tone: variations in communication based on context."
        }
      ]
    },
    {
      id: 4,
      title: "Brand Communication Basics",
      content: `
# Module 4: Brand Communication Basics

## How Brands Connect with Customers
This module covers the fundamentals of brand communication across different channels and touchpoints.

## 4.1 Integrated Marketing Communications
**IMC** ensures all brand communications deliver consistent messages across all channels.

**Communication mix elements**:
- **Advertising**: Paid media (TV, radio, print, digital)
- **Public Relations**: Earned media (press releases, media relations)
- **Sales Promotion**: Short-term incentives (coupons, discounts)
- **Direct Marketing**: Direct communication (email, mail, SMS)
- **Digital Marketing**: Online channels (social media, websites, SEO)
- **Personal Selling**: One-on-one communication (sales force)
- **Events/Experiential**: Live brand experiences

**The 5 W's of brand communication**:
1. **Who**: Target audience
2. **What**: Key message
3. **When**: Timing and frequency
4. **Where**: Channels and touchpoints
5. **Why**: Communication objective

**Communication objectives** (using AIDA model):
- **Awareness**: Make target aware of brand
- **Interest**: Generate interest in brand
- **Desire**: Create desire for brand
- **Action**: Drive purchase or engagement

## 4.2 Advertising Fundamentals
**Advertising** is paid, non-personal communication through mass media.

**Media types**:
- **Traditional media**: TV, radio, print, outdoor
- **Digital media**: Social media, display ads, search ads
- **Emerging media**: Influencer marketing, podcasts, streaming

**Creative strategy elements**:
- **Big idea**: Central creative concept
- **Headline**: Attention-grabbing text
- **Body copy**: Detailed message
- **Visuals**: Images or video supporting message
- **Call to action**: What audience should do next

**Advertising effectiveness metrics**:
- **Reach**: Number of people exposed
- **Frequency**: How often people see ad
- **Impressions**: Total number of ad views
- **Click-through rate**: Percentage who click on ad
- **Conversion rate**: Percentage who take desired action
- **Return on ad spend**: Revenue generated per advertising dollar

## 4.3 Digital Brand Communication
**Website as brand hub**:
- **Homepage**: Brand introduction and navigation
- **About page**: Brand story and values
- **Product/services pages**: What brand offers
- **Contact page**: How to connect
- **Blog/content**: Valuable information for audience

**Social media strategy**:
- **Platform selection**: Choose based on target audience
  - Facebook: Broad demographic, community building
  - Instagram: Visual content, younger audience
  - LinkedIn: Professional, B2B focus
  - Twitter: Real-time updates, news
  - TikTok: Short video, Gen Z
- **Content calendar**: Planned posting schedule
- **Engagement**: Responding to comments and messages
- **Analytics**: Tracking performance and adjusting strategy

**Email marketing**:
- **Newsletters**: Regular updates and valuable content
- **Promotional emails**: Sales and special offers
- **Welcome series**: Introducing new subscribers to brand
- **Segmentation**: Sending relevant messages to different groups
      `,
      completed: false,
      quiz: [
        {
          id: 1,
          question: "What does IMC stand for?",
          options: ["Individual Marketing Campaign", "Integrated Marketing Communications", "Internal Marketing Committee", "International Marketing Council"],
          correctAnswer: 1,
          explanation: "IMC = Integrated Marketing Communications."
        },
        {
          id: 2,
          question: "What IMC ensures?",
          options: ["Only one channel", "Inconsistent messages", "Consistent messages across channels", "Only digital"],
          correctAnswer: 2,
          explanation: "IMC ensures consistent messages across all communication channels."
        },
        {
          id: 3,
          question: "What communication element: paid media?",
          options: ["Advertising", "Public Relations", "Sales Promotion", "Direct Marketing"],
          correctAnswer: 0,
          explanation: "Advertising: paid media communication."
        },
        {
          id: 4,
          question: "What communication element: earned media?",
          options: ["Advertising", "Public Relations", "Sales Promotion", "Direct Marketing"],
          correctAnswer: 1,
          explanation: "Public Relations: earned media (press coverage)."
        },
        {
          id: 5,
          question: "What AIDA first step?",
          options: ["Awareness", "Interest", "Desire", "Action"],
          correctAnswer: 0,
          explanation: "AIDA: Awareness, Interest, Desire, Action."
        },
        {
          id: 6,
          question: "What advertising metric: number of people exposed?",
          options: ["Reach", "Frequency", "Impressions", "CTR"],
          correctAnswer: 0,
          explanation: "Reach: number of unique people exposed to ad."
        },
        {
          id: 7,
          question: "What advertising metric: how often people see ad?",
          options: ["Reach", "Frequency", "Impressions", "CTR"],
          correctAnswer: 1,
          explanation: "Frequency: how often people see the ad."
        },
        {
          id: 8,
          question: "What digital platform for visual content?",
          options: ["Facebook", "Instagram", "LinkedIn", "Twitter"],
          correctAnswer: 1,
          explanation: "Instagram: visual content platform."
        },
        {
          id: 9,
          question: "What digital platform for professionals?",
          options: ["Facebook", "Instagram", "LinkedIn", "Twitter"],
          correctAnswer: 2,
          explanation: "LinkedIn: professional networking platform."
        },
        {
          id: 10,
          question: "What email type: regular updates?",
          options: ["Newsletters", "Promotional emails", "Welcome series", "Transactional"],
          correctAnswer: 0,
          explanation: "Newsletters: regular updates with valuable content."
        },
        {
          id: 11,
          question: "What communication element: short-term incentives?",
          options: ["Advertising", "PR", "Sales Promotion", "Direct Marketing"],
          correctAnswer: 2,
          explanation: "Sales Promotion: short-term incentives (coupons, discounts)."
        },
        {
          id: 12,
          question: "What 5 W's: target audience?",
          options: ["Who", "What", "When", "Where"],
          correctAnswer: 0,
          explanation: "Who: target audience for communication."
        },
        {
          id: 13,
          question: "What advertising metric: percentage who click?",
          options: ["Reach", "Frequency", "CTR", "ROAS"],
          correctAnswer: 2,
          explanation: "CTR = Click-through rate: percentage who click on ad."
        },
        {
          id: 14,
          question: "What digital platform for real-time updates?",
          options: ["Facebook", "Instagram", "LinkedIn", "Twitter"],
          correctAnswer: 3,
          explanation: "Twitter: real-time updates and news."
        },
        {
          id: 15,
          question: "What email type: introducing new subscribers?",
          options: ["Newsletters", "Promotional", "Welcome series", "Transactional"],
          correctAnswer: 2,
          explanation: "Welcome series: introduces new subscribers to brand."
        },
        {
          id: 16,
          question: "What communication element: one-on-one?",
          options: ["Advertising", "Personal Selling", "PR", "Events"],
          correctAnswer: 1,
          explanation: "Personal Selling: one-on-one communication."
        },
        {
          id: 17,
          question: "What 5 W's: key message?",
          options: ["Who", "What", "When", "Where"],
          correctAnswer: 1,
          explanation: "What: key message to communicate."
        },
        {
          id: 18,
          question: "What advertising metric: revenue per ad dollar?",
          options: ["CTR", "Conversion", "ROAS", "Impressions"],
          correctAnswer: 2,
          explanation: "ROAS = Return on ad spend: revenue per advertising dollar."
        },
        {
          id: 19,
          question: "What digital platform for Gen Z short video?",
          options: ["Facebook", "Instagram", "TikTok", "LinkedIn"],
          correctAnswer: 2,
          explanation: "TikTok: short video platform popular with Gen Z."
        },
        {
          id: 20,
          question: "What email strategy: relevant messages to groups?",
          options: ["Segmentation", "Blasting", "Ignoring", "Random"],
          correctAnswer: 0,
          explanation: "Segmentation: sending relevant messages to different audience groups."
        }
      ]
    },
    {
      id: 5,
      title: "Brand Experience & Touchpoints",
      content: `
# Module 5: Brand Experience & Touchpoints

## Managing Customer Interactions
This module covers how brands create and manage experiences across all customer touchpoints.

## 5.1 Understanding Brand Experience
**Brand experience** is the sum of all interactions a customer has with a brand across all touchpoints.

**Three levels of brand experience**:
1. **Functional**: Does it work? (product performance, service delivery)
2. **Emotional**: How does it feel? (customer feelings during interaction)
3. **Identity**: Who does it make me? (self-expression through brand)

**Experience dimensions**:
- **Sensory**: Sight, sound, touch, taste, smell
- **Affective**: Emotions and feelings
- **Intellectual**: Thinking and problem-solving
- **Behavioral**: Actions and interactions
- **Relational**: Social connections through brand

**Customer journey mapping**:
- Visual representation of customer experience
- Identifies all touchpoints
- Highlights pain points and opportunities
- Covers pre-purchase, purchase, post-purchase stages

## 5.2 Key Brand Touchpoints
**Pre-purchase touchpoints**:
- **Advertising**: Creates awareness and interest
- **Website**: Information gathering and research
- **Social media**: Social proof and engagement
- **Word of mouth**: Recommendations from others
- **Reviews/ratings**: Third-party validation

**Purchase touchpoints**:
- **Store/website**: Transaction environment
- **Sales staff**: Personal interaction
- **Packaging**: Physical presentation
- **Checkout process**: Payment experience
- **Receipt/confirmation**: Purchase verification

**Post-purchase touchpoints**:
- **Product usage**: Actual experience with product
- **Customer service**: Support and assistance
- **Warranty/returns**: Post-purchase assurances
- **Follow-up communication**: Thank you, surveys
- **Loyalty programs**: Rewards for repeat business

**Physical vs. digital touchpoints**:
- **Physical**: Stores, packaging, printed materials, events
- **Digital**: Website, app, social media, email, chatbots
- **Integrated**: Omnichannel experiences combining both

## 5.3 Service Brand Management
**Service brands** vs. product brands:
- **Intangible**: Cannot be touched or seen before purchase
- **Inseparable**: Produced and consumed simultaneously
- **Variable**: Quality can vary by provider, time, location
- **Perishable**: Cannot be stored for later use

**Service quality dimensions** (SERVQUAL model):
1. **Tangibles**: Physical facilities, equipment, appearance
2. **Reliability**: Dependable, accurate service
3. **Responsiveness**: Willingness to help, prompt service
4. **Assurance**: Knowledge, courtesy, trustworthiness
5. **Empathy**: Caring, individualized attention

**Moment of truth** concept:
- Any interaction where customer forms impression
- **First moment**: Initial contact with brand
- **Critical moments**: Key decision points
- **Last moment**: Final interaction (often most remembered)

**Service recovery**:
- Handling service failures effectively
- Apologize sincerely
- Fix the problem quickly
- Compensate appropriately
- Follow up to ensure satisfaction
      `,
      completed: false,
      quiz: [
        {
          id: 1,
          question: "What is brand experience?",
          options: ["Only advertising", "Sum of all customer interactions", "Only product quality", "Only price"],
          correctAnswer: 1,
          explanation: "Brand experience: sum of all customer interactions across touchpoints."
        },
        {
          id: 2,
          question: "What experience level: does it work?",
          options: ["Functional", "Emotional", "Identity", "Social"],
          correctAnswer: 0,
          explanation: "Functional level: does the product/service work?"
        },
        {
          id: 3,
          question: "What experience level: how does it feel?",
          options: ["Functional", "Emotional", "Identity", "Social"],
          correctAnswer: 1,
          explanation: "Emotional level: how does customer feel during interaction?"
        },
        {
          id: 4,
          question: "What is customer journey mapping?",
          options: ["Only sales process", "Visual representation of customer experience", "Employee training", "Product design"],
          correctAnswer: 1,
          explanation: "Customer journey mapping: visual representation of customer experience across touchpoints."
        },
        {
          id: 5,
          question: "What pre-purchase touchpoint: social proof?",
          options: ["Advertising", "Social media", "Packaging", "Customer service"],
          correctAnswer: 1,
          explanation: "Social media provides social proof and engagement pre-purchase."
        },
        {
          id: 6,
          question: "What purchase touchpoint: transaction environment?",
          options: ["Store/website", "Advertising", "Reviews", "Follow-up"],
          correctAnswer: 0,
          explanation: "Store/website: transaction environment during purchase."
        },
        {
          id: 7,
          question: "What post-purchase touchpoint: product usage?",
          options: ["Actual experience with product", "Advertising", "Store visit", "Social media"],
          correctAnswer: 0,
          explanation: "Product usage: actual experience with product after purchase."
        },
        {
          id: 8,
          question: "What service brand characteristic: cannot be stored?",
          options: ["Intangible", "Inseparable", "Variable", "Perishable"],
          correctAnswer: 3,
          explanation: "Perishable: services cannot be stored for later use."
        },
        {
          id: 9,
          question: "What SERVQUAL dimension: physical facilities?",
          options: ["Tangibles", "Reliability", "Responsiveness", "Assurance"],
          correctAnswer: 0,
          explanation: "Tangibles: physical facilities, equipment, appearance."
        },
        {
          id: 10,
          question: "What is moment of truth?",
          options: ["Only advertising", "Any interaction forming customer impression", "Only purchase", "Only complaint"],
          correctAnswer: 1,
          explanation: "Moment of truth: any interaction where customer forms impression."
        },
        {
          id: 11,
          question: "What experience level: self-expression?",
          options: ["Functional", "Emotional", "Identity", "Practical"],
          correctAnswer: 2,
          explanation: "Identity level: who does brand make customer be (self-expression)."
        },
        {
          id: 12,
          question: "What pre-purchase touchpoint: third-party validation?",
          options: ["Reviews/ratings", "Store visit", "Packaging", "Usage"],
          correctAnswer: 0,
          explanation: "Reviews/ratings: third-party validation pre-purchase."
        },
        {
          id: 13,
          question: "What purchase touchpoint: physical presentation?",
          options: ["Packaging", "Advertising", "Social media", "Customer service"],
          correctAnswer: 0,
          explanation: "Packaging: physical presentation during purchase."
        },
        {
          id: 14,
          question: "What service brand characteristic: cannot be touched?",
          options: ["Intangible", "Inseparable", "Variable", "Perishable"],
          correctAnswer: 0,
          explanation: "Intangible: services cannot be touched or seen before purchase."
        },
        {
          id: 15,
          question: "What SERVQUAL dimension: dependable service?",
          options: ["Tangibles", "Reliability", "Responsiveness", "Empathy"],
          correctAnswer: 1,
          explanation: "Reliability: dependable, accurate service delivery."
        },
        {
          id: 16,
          question: "What service recovery step: apologize sincerely?",
          options: ["First step", "Ignore", "Blame customer", "No apology"],
          correctAnswer: 0,
          explanation: "Service recovery first step: apologize sincerely for failure."
        },
        {
          id: 17,
          question: "What experience dimension: emotions?",
          options: ["Sensory", "Affective", "Intellectual", "Behavioral"],
          correctAnswer: 1,
          explanation: "Affective dimension: emotions and feelings during experience."
        },
        {
          id: 18,
          question: "What digital touchpoint example?",
          options: ["Website", "Store", "Packaging", "Print ad"],
          correctAnswer: 0,
          explanation: "Website is digital touchpoint."
        },
        {
          id: 19,
          question: "What service brand characteristic: quality varies?",
          options: ["Intangible", "Inseparable", "Variable", "Perishable"],
          correctAnswer: 2,
          explanation: "Variable: service quality can vary by provider, time, location."
        },
        {
          id: 20,
          question: "What SERVQUAL dimension: willingness to help?",
          options: ["Reliability", "Responsiveness", "Assurance", "Empathy"],
          correctAnswer: 1,
          explanation: "Responsiveness: willingness to help, prompt service."
        }
      ]
    },
    {
      id: 6,
      title: "Brand Measurement & Basics",
      content: `
# Module 6: Brand Measurement & Basics

## Tracking Brand Performance
This module covers basic methods for measuring brand strength, tracking performance, and understanding brand equity.

## 6.1 Brand Equity Fundamentals
**Brand equity** is the commercial value derived from consumer perception of the brand name.

**Three perspectives on brand equity**:
1. **Financial perspective**: Brand valuation for accounting/mergers
2. **Customer perspective**: Customer mindset and relationships
3. **Brand extension perspective**: Ability to launch new products under brand

**Customer-based brand equity (CBBE) model** (Keller's pyramid):
1. **Brand Salience**: Awareness - does customer know brand?
2. **Brand Performance**: Does product meet needs?
3. **Brand Imagery**: What brand represents psychologically
4. **Brand Judgments**: Customer opinions about brand
5. **Brand Feelings**: Emotional responses to brand
6. **Brand Resonance**: Ultimate relationship - loyal, engaged

**Brand valuation methods**:
- **Cost approach**: What it cost to build brand
- **Market approach**: What similar brands sold for
- **Income approach**: Future earnings attributable to brand
- **Royalty relief**: What would be paid to license brand

## 6.2 Brand Tracking Metrics
**Awareness metrics**:
- **Aided awareness**: Recognize brand when prompted
- **Unaided awareness**: Spontaneously mention brand
- **Top of mind**: First brand mentioned in category

**Usage metrics**:
- **Trial rate**: Percentage who have tried brand
- **Repeat rate**: Percentage who buy again
- **Usage frequency**: How often customers use brand
- **Share of requirements**: Percentage of category needs met by brand

**Attitude metrics**:
- **Brand perception**: Attributes associated with brand
- **Brand preference**: Which brand customers prefer
- **Purchase intent**: Likelihood to buy in future
- **Recommendation likelihood**: Net Promoter Score (NPS)

**Loyalty metrics**:
- **Customer retention rate**: Percentage who continue buying
- **Customer lifetime value**: Total value of customer over relationship
- **Churn rate**: Percentage who stop buying

## 6.3 Basic Brand Health Dashboards
**Key Performance Indicators (KPIs)** for brand health:

**Awareness KPIs**:
- Brand awareness levels (aided/unaided)
- Brand recall and recognition
- Search volume for brand terms

**Consideration KPIs**:
- Brand preference scores
- Purchase consideration
- Competitive consideration sets

**Usage KPIs**:
- Market share (value and volume)
- Penetration (percentage buying)
- Frequency of purchase

**Loyalty KPIs**:
- Customer satisfaction scores
- Net Promoter Score (NPS)
- Retention and churn rates

**Social KPIs**:
- Social media followers and engagement
- Share of voice (brand mentions vs. competitors)
- Sentiment analysis (positive/negative mentions)

**Regular tracking schedule**:
- **Monthly**: Social media metrics, web analytics
- **Quarterly**: Brand tracking surveys
- **Annually**: Comprehensive brand audit
- **Continuous**: Online monitoring and social listening
      `,
      completed: false,
      quiz: [
        {
          id: 1,
          question: "What is brand equity?",
          options: ["Only logo value", "Commercial value from consumer perception", "Only product price", "Advertising budget"],
          correctAnswer: 1,
          explanation: "Brand equity: commercial value from consumer perception of brand."
        },
        {
          id: 2,
          question: "What CBBE pyramid base level?",
          options: ["Brand Salience", "Brand Performance", "Brand Resonance", "Brand Judgments"],
          correctAnswer: 0,
          explanation: "Brand Salience (awareness) is base of Keller's CBBE pyramid."
        },
        {
          id: 3,
          question: "What CBBE pyramid top level?",
          options: ["Brand Salience", "Brand Performance", "Brand Resonance", "Brand Imagery"],
          correctAnswer: 2,
          explanation: "Brand Resonance (loyal relationship) is top of pyramid."
        },
        {
          id: 4,
          question: "What awareness: recognize when prompted?",
          options: ["Aided awareness", "Unaided awareness", "Top of mind", "No awareness"],
          correctAnswer: 0,
          explanation: "Aided awareness: recognize brand when name is mentioned."
        },
        {
          id: 5,
          question: "What awareness: first brand mentioned?",
          options: ["Aided", "Unaided", "Top of mind", "No awareness"],
          correctAnswer: 2,
          explanation: "Top of mind: first brand mentioned spontaneously."
        },
        {
          id: 6,
          question: "What metric: percentage who have tried?",
          options: ["Trial rate", "Repeat rate", "Usage frequency", "Market share"],
          correctAnswer: 0,
          explanation: "Trial rate: percentage who have tried brand."
        },
        {
          id: 7,
          question: "What metric: likelihood to recommend?",
          options: ["Purchase intent", "NPS", "Awareness", "Trial rate"],
          correctAnswer: 1,
          explanation: "NPS = Net Promoter Score measures likelihood to recommend."
        },
        {
          id: 8,
          question: "What loyalty metric: percentage who continue?",
          options: ["Retention rate", "Churn rate", "CLV", "Satisfaction"],
          correctAnswer: 0,
          explanation: "Customer retention rate: percentage who continue buying."
        },
        {
          id: 9,
          question: "What brand valuation: future earnings?",
          options: ["Cost approach", "Market approach", "Income approach", "Royalty relief"],
          correctAnswer: 2,
          explanation: "Income approach values brand based on future earnings attributable to brand."
        },
        {
          id: 10,
          question: "What KPI: brand mentions vs competitors?",
          options: ["Share of voice", "Awareness", "NPS", "Market share"],
          correctAnswer: 0,
          explanation: "Share of voice: brand mentions compared to competitors."
        },
        {
          id: 11,
          question: "What CBBE level: product meets needs?",
          options: ["Brand Performance", "Brand Salience", "Brand Imagery", "Brand Feelings"],
          correctAnswer: 0,
          explanation: "Brand Performance: does product meet functional needs?"
        },
        {
          id: 12,
          question: "What awareness: spontaneously mention?",
          options: ["Aided", "Unaided", "Top of mind", "Forced"],
          correctAnswer: 1,
          explanation: "Unaided awareness: spontaneously mention brand without prompting."
        },
        {
          id: 13,
          question: "What metric: percentage who buy again?",
          options: ["Trial rate", "Repeat rate", "Penetration", "Awareness"],
          correctAnswer: 1,
          explanation: "Repeat rate: percentage who purchase brand again."
        },
        {
          id: 14,
          question: "What metric: customer opinions?",
          options: ["Brand judgments", "Brand salience", "Brand resonance", "Brand performance"],
          correctAnswer: 0,
          explanation: "Brand judgments: customer opinions and evaluations of brand."
        },
        {
          id: 15,
          question: "What loyalty metric: total customer value?",
          options: ["CLV", "Retention", "Churn", "Satisfaction"],
          correctAnswer: 0,
          explanation: "CLV = Customer Lifetime Value: total value over relationship."
        },
        {
          id: 16,
          question: "What brand valuation: licensing equivalent?",
          options: ["Cost", "Market", "Income", "Royalty relief"],
          correctAnswer: 3,
          explanation: "Royalty relief: what would be paid to license the brand."
        },
        {
          id: 17,
          question: "What KPI: positive/negative mentions?",
          options: ["Sentiment analysis", "Share of voice", "Awareness", "Market share"],
          correctAnswer: 0,
          explanation: "Sentiment analysis: measures positive/negative brand mentions."
        },
        {
          id: 18,
          question: "What CBBE level: emotional responses?",
          options: ["Brand Feelings", "Brand Performance", "Brand Judgments", "Brand Salience"],
          correctAnswer: 0,
          explanation: "Brand Feelings: emotional responses to brand."
        },
        {
          id: 19,
          question: "What metric: how often customers use?",
          options: ["Usage frequency", "Trial rate", "Repeat rate", "Penetration"],
          correctAnswer: 0,
          explanation: "Usage frequency: how often customers use brand."
        },
        {
          id: 20,
          question: "What tracking schedule for surveys?",
          options: ["Monthly", "Quarterly", "Daily", "Never"],
          correctAnswer: 1,
          explanation: "Brand tracking surveys typically conducted quarterly."
        }
      ]
    }
  ],

  // 3. FINAL EXAM STRUCTURE
  finalExam: {
    title: "Brand Management Certificate Final Examination",
    description: "Comprehensive 40-question exam covering all 6 modules of the Brand Management Certificate program.",
    passingScore: 70,
    questions: [
      {
        id: 1,
        module: 1,
        question: "What is a brand more than just?",
        options: ["Only a logo", "Only a name", "Only a product", "All of the above"],
        correctAnswer: 3,
        explanation: "A brand is more than just a logo, name, or product - it's the total experience."
      },
      {
        id: 2,
        module: 1,
        question: "What component includes visual elements like logo?",
        options: ["Brand Promise", "Brand Identity", "Brand Personality", "Brand Values"],
        correctAnswer: 1,
        explanation: "Brand Identity includes visual elements: logo, colors, typography."
      },
      {
        id: 3,
        module: 2,
        question: "What is brand strategy?",
        options: ["Short-term tactic", "Long-term plan for brand development", "Only advertising", "Product design"],
        correctAnswer: 1,
        explanation: "Brand strategy is long-term plan for developing successful brand."
      },
      {
        id: 4,
        module: 2,
        question: "What is brand positioning?",
        options: ["Product packaging", "How brand is perceived vs competitors", "Employee positions", "Store locations"],
        correctAnswer: 1,
        explanation: "Brand positioning: how brand is perceived relative to competitors."
      },
      {
        id: 5,
        module: 3,
        question: "What logo type is text only?",
        options: ["Wordmark", "Symbol", "Combination mark", "Emblem"],
        correctAnswer: 0,
        explanation: "Wordmark: text only logo (Google, Coca-Cola)."
      },
      {
        id: 6,
        module: 3,
        question: "What color represents trust and security?",
        options: ["Red", "Blue", "Green", "Yellow"],
        correctAnswer: 1,
        explanation: "Blue represents trust, security, professionalism."
      },
      {
        id: 7,
        module: 4,
        question: "What does IMC stand for?",
        options: ["Individual Marketing", "Integrated Marketing Communications", "Internal Marketing", "International Marketing"],
        correctAnswer: 1,
        explanation: "IMC = Integrated Marketing Communications."
      },
      {
        id: 8,
        module: 4,
        question: "What communication element: paid media?",
        options: ["Advertising", "Public Relations", "Sales Promotion", "Direct Marketing"],
        correctAnswer: 0,
        explanation: "Advertising: paid media communication."
      },
      {
        id: 9,
        module: 5,
        question: "What is brand experience?",
        options: ["Only advertising", "Sum of all customer interactions", "Only product", "Only price"],
        correctAnswer: 1,
        explanation: "Brand experience: sum of all customer interactions."
      },
      {
        id: 10,
        module: 5,
        question: "What experience level: does it work?",
        options: ["Functional", "Emotional", "Identity", "Social"],
        correctAnswer: 0,
        explanation: "Functional level: does product/service work?"
      },
      {
        id: 11,
        module: 6,
        question: "What is brand equity?",
        options: ["Only logo value", "Commercial value from perception", "Only price", "Advertising budget"],
        correctAnswer: 1,
        explanation: "Brand equity: commercial value from consumer perception."
      },
      {
        id: 12,
        module: 6,
        question: "What CBBE pyramid base level?",
        options: ["Brand Salience", "Brand Performance", "Brand Resonance", "Brand Judgments"],
        correctAnswer: 0,
        explanation: "Brand Salience (awareness) is base of CBBE pyramid."
      },
      {
        id: 13,
        module: 1,
        question: "What business benefit allows charging more?",
        options: ["Price premium", "Higher costs", "Lower quality", "No benefit"],
        correctAnswer: 0,
        explanation: "Strong brands can charge price premiums."
      },
      {
        id: 14,
        module: 1,
        question: "How much faster do strong brands grow?",
        options: ["Same", "2-3 times faster", "10 times", "Slower"],
        correctAnswer: 1,
        explanation: "Strong brands grow 2-3 times faster than weak brands."
      },
      {
        id: 15,
        module: 2,
        question: "What element: where brand wants to be?",
        options: ["Brand Vision", "Brand Mission", "Brand Values", "Brand Promise"],
        correctAnswer: 0,
        explanation: "Brand Vision: where brand wants to be in future."
      },
      {
        id: 16,
        module: 2,
        question: "What positioning focuses on safety?",
        options: ["Volvo", "Ferrari", "Toyota", "All cars"],
        correctAnswer: 0,
        explanation: "Volvo positions on safety benefit."
      },
      {
        id: 17,
        module: 3,
        question: "What font type is traditional?",
        options: ["Serif", "Sans-serif", "Script", "Display"],
        correctAnswer: 0,
        explanation: "Serif fonts: traditional, reliable."
      },
      {
        id: 18,
        module: 3,
        question: "What naming type describes what brand does?",
        options: ["Descriptive", "Suggestive", "Abstract", "Acronym"],
        correctAnswer: 0,
        explanation: "Descriptive names describe what brand does."
      },
      {
        id: 19,
        module: 4,
        question: "What AIDA first step?",
        options: ["Awareness", "Interest", "Desire", "Action"],
        correctAnswer: 0,
        explanation: "AIDA: Awareness, Interest, Desire, Action."
      },
      {
        id: 20,
        module: 4,
        question: "What advertising metric: number exposed?",
        options: ["Reach", "Frequency", "Impressions", "CTR"],
        correctAnswer: 0,
        explanation: "Reach: number of unique people exposed."
      },
      {
        id: 21,
        module: 5,
        question: "What experience level: self-expression?",
        options: ["Functional", "Emotional", "Identity", "Practical"],
        correctAnswer: 2,
        explanation: "Identity level: self-expression through brand."
      },
      {
        id: 22,
        module: 5,
        question: "What service characteristic: cannot be stored?",
        options: ["Intangible", "Inseparable", "Variable", "Perishable"],
        correctAnswer: 3,
        explanation: "Perishable: services cannot be stored."
      },
      {
        id: 23,
        module: 6,
        question: "What CBBE pyramid top level?",
        options: ["Brand Salience", "Brand Performance", "Brand Resonance", "Brand Imagery"],
        correctAnswer: 2,
        explanation: "Brand Resonance is top of pyramid."
      },
      {
        id: 24,
        module: 6,
        question: "What awareness: recognize when prompted?",
        options: ["Aided", "Unaided", "Top of mind", "No awareness"],
        correctAnswer: 0,
        explanation: "Aided awareness: recognize when prompted."
      },
      {
        id: 25,
        module: 1,
        question: "What percentage revenue from existing customers?",
        options: ["25%", "50%", "75%", "90%"],
        correctAnswer: 2,
        explanation: "75% revenue from existing customers for strong brands."
      },
      {
        id: 26,
        module: 1,
        question: "What is brand personality?",
        options: ["Human characteristics", "CEO personality", "Product features", "Company size"],
        correctAnswer: 0,
        explanation: "Brand Personality: human characteristics attributed to brand."
      },
      {
        id: 27,
        module: 2,
        question: "What branded house example?",
        options: ["Virgin", "Procter & Gamble", "Unilever", "General Motors"],
        correctAnswer: 0,
        explanation: "Virgin uses branded house architecture."
      },
      {
        id: 28,
        module: 2,
        question: "What element: core principles?",
        options: ["Vision", "Mission", "Values", "Promise"],
        correctAnswer: 2,
        explanation: "Brand Values: core principles guiding behavior."
      },
      {
        id: 29,
        module: 3,
        question: "What logo design principle: easy to recognize?",
        options: ["Simple", "Memorable", "Timeless", "Versatile"],
        correctAnswer: 0,
        explanation: "Simple: easy to recognize and remember."
      },
      {
        id: 30,
        module: 3,
        question: "What naming criteria: can be trademarked?",
        options: ["Memorable", "Meaningful", "Protectable", "Future-proof"],
        correctAnswer: 2,
        explanation: "Protectable: name can be trademarked."
      },
      {
        id: 31,
        module: 4,
        question: "What digital platform for visual content?",
        options: ["Facebook", "Instagram", "LinkedIn", "Twitter"],
        correctAnswer: 1,
        explanation: "Instagram: visual content platform."
      },
      {
        id: 32,
        module: 4,
        question: "What communication element: earned media?",
        options: ["Advertising", "Public Relations", "Sales Promotion", "Direct Marketing"],
        correctAnswer: 1,
        explanation: "Public Relations: earned media."
      },
      {
        id: 33,
        module: 5,
        question: "What is customer journey mapping?",
        options: ["Only sales", "Visual representation of experience", "Employee training", "Product design"],
        correctAnswer: 1,
        explanation: "Customer journey mapping visualizes customer experience."
      },
      {
        id: 34,
        module: 5,
        question: "What SERVQUAL dimension: physical facilities?",
        options: ["Tangibles", "Reliability", "Responsiveness", "Assurance"],
        correctAnswer: 0,
        explanation: "Tangibles: physical facilities, equipment."
      },
      {
        id: 35,
        module: 6,
        question: "What metric: percentage who have tried?",
        options: ["Trial rate", "Repeat rate", "Usage frequency", "Market share"],
        correctAnswer: 0,
        explanation: "Trial rate: percentage who have tried brand."
      },
      {
        id: 36,
        module: 6,
        question: "What metric: likelihood to recommend?",
        options: ["Purchase intent", "NPS", "Awareness", "Trial rate"],
        correctAnswer: 1,
        explanation: "NPS measures likelihood to recommend."
      },
      {
        id: 37,
        module: 1,
        question: "What business benefit attracts talent?",
        options: ["People want to work for strong brands", "Only salary", "Only location", "No attraction"],
        correctAnswer: 0,
        explanation: "Strong brands attract talented employees."
      },
      {
        id: 38,
        module: 2,
        question: "What positioning: against competitor?",
        options: ["Avis vs Hertz", "Volvo alone", "Generic", "No competition"],
        correctAnswer: 0,
        explanation: "Avis positioned against Hertz."
      },
      {
        id: 39,
        module: 3,
        question: "What color represents energy?",
        options: ["Red", "Blue", "Green", "Black"],
        correctAnswer: 0,
        explanation: "Red represents energy, excitement."
      },
      {
        id: 40,
        module: 4,
        question: "What advertising metric: revenue per ad dollar?",
        options: ["CTR", "Conversion", "ROAS", "Impressions"],
        correctAnswer: 2,
        explanation: "ROAS = Return on ad spend."
      }
    ]
  }
};

export default brandManagementCertificate;

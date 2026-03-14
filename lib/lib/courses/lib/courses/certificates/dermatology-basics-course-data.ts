// Dermatology Basics (Certificate) - Complete Course Data
export const dermatologyBasicsCertificate = {
  // 1. COURSE METADATA & IDENTIFICATION
  id: "dermatology-basics-certificate",
  title: "Dermatology Basics (Certificate)",
  description: "Comprehensive introduction to skin science, common conditions, diagnostic techniques, and basic treatments. Learn foundational dermatology knowledge for healthcare professionals, aestheticians, or personal care.",
  duration: "6 weeks",
  timeCommitment: "4-6 hours per week",
  price: 12,
  upgradePrice: 18,
  icon: "🔬",
  badge: "Certificate",
  level: "Beginner",
  category: "Healthcare & Wellness",
  
  // 2. MODULE ARCHITECTURE
  modules: [
    // MODULE 1: Foundations of Skin Science
    {
      id: 1,
      title: "Foundations of Skin Science",
      completed: false,
      content: `# Module 1: Foundations of Skin Science

## Introduction
Welcome to dermatology basics! This module covers the fundamental structure and functions of human skin. Understanding skin anatomy is essential for diagnosing and treating skin conditions.

## Learning Objectives
By the end of this module, you will be able to:
- Identify the three main layers of the skin
- Describe the functions of each skin component
- Explain basic skin physiology
- Recognize normal vs. abnormal skin characteristics

## The Skin's Structure

### 1. The Epidermis (Outer Layer)
The epidermis is the outermost layer of skin, approximately 0.1mm thick on most body parts. It consists of five sublayers:
- **Stratum Corneum**: The protective barrier (15-20 cell layers thick)
- **Stratum Lucidum**: Only in thick skin like palms and soles
- **Stratum Granulosum**: Where keratinization begins
- **Stratum Spinosum**: Provides skin strength
- **Stratum Basale**: Where new skin cells are produced

**Key Facts**:
- Complete skin cell renewal takes about 28 days
- The epidermis contains no blood vessels
- Melanocytes in the basal layer produce melanin

### 2. The Dermis (Middle Layer)
The dermis is 1-4mm thick and contains:
- **Collagen fibers** (provides strength, 70-80% of dermis)
- **Elastin fibers** (provides elasticity)
- **Blood vessels** (nourish the skin)
- **Nerve endings** (detect sensations)
- **Hair follicles** and **sweat glands**

**Important Functions**:
- Temperature regulation through blood flow
- Sensation reception (touch, pain, temperature)
- Structural support for the epidermis

### 3. The Hypodermis (Subcutaneous Layer)
Also called subcutaneous tissue, this layer contains:
- **Fat cells** (adipose tissue for insulation)
- **Connective tissue** for structural support
- **Larger blood vessels** and **nerves**

**Key Roles**:
- Insulation and energy storage
- Shock absorption
- Anchors skin to underlying muscles

## Skin Functions

### 1. Protection Barrier
The skin provides multiple protective functions:
- **Physical barrier** against microorganisms
- **Chemical barrier** with acidic pH (4.5-5.5)
- **UV radiation protection** through melanin
- **Water barrier** preventing dehydration

### 2. Regulation Functions
Skin helps maintain body homeostasis:
- **Thermoregulation** through sweat and blood flow
- **Fluid balance** prevention of excessive water loss
- **Vitamin D synthesis** when exposed to sunlight

### 3. Sensory Functions
Skin contains numerous sensory receptors:
- **Meissner's corpuscles** for light touch
- **Pacinian corpuscles** for deep pressure
- **Free nerve endings** for pain and temperature
- **Ruffini endings** for stretch detection

## Basic Skin Types
Understanding skin types helps in proper care:

### 1. Normal Skin
- Balanced oil production
- Small, barely visible pores
- Even texture and tone
- Approximately 15% of population

### 2. Oily Skin
- Excess sebum production
- Enlarged, visible pores
- Prone to acne and shine
- Approximately 40% of population

### 3. Dry Skin
- Reduced sebum production
- Tight, flaky feeling
- Visible fine lines
- Approximately 20% of population

### 4. Combination Skin
- Oily in T-zone (forehead, nose, chin)
- Normal or dry elsewhere
- Most common type (approximately 45% of population)

## Skin Indicators of Health
The skin often reflects overall health:
- **Color changes** may indicate systemic issues
- **Texture changes** can signal nutritional deficiencies
- **Temperature variations** may indicate circulatory problems
- **Moisture levels** reflect hydration status

## Summary
The skin is our largest organ, covering approximately 1.5-2 square meters in adults. Understanding its basic structure and functions provides the foundation for all dermatological knowledge. Remember the three key layers (epidermis, dermis, hypodermis) and their primary functions as we progress to more complex topics.

**Key Takeaway**: Healthy skin requires balanced attention to all layers – protection for the epidermis, nourishment for the dermis, and support from the hypodermis.`,

      quiz: [
        {
          id: 1,
          question: "How many main layers does the skin have?",
          options: ["Two layers", "Three layers", "Four layers", "Five layers"],
          correctAnswer: 1,
          explanation: "The skin has three main layers: epidermis (outer), dermis (middle), and hypodermis (inner/subcutaneous)."
        },
        {
          id: 2,
          question: "Which skin layer contains blood vessels and nerves?",
          options: ["Epidermis only", "Dermis only", "Hypodermis only", "Both dermis and hypodermis"],
          correctAnswer: 3,
          explanation: "The dermis contains blood vessels, nerve endings, hair follicles and sweat glands. The hypodermis contains larger blood vessels and nerves."
        },
        {
          id: 3,
          question: "How long does complete skin cell renewal typically take?",
          options: ["7 days", "14 days", "28 days", "42 days"],
          correctAnswer: 2,
          explanation: "Complete skin cell renewal takes approximately 28 days in healthy adult skin."
        },
        {
          id: 4,
          question: "What percentage of collagen makes up the dermis?",
          options: ["30-40%", "50-60%", "70-80%", "90-100%"],
          correctAnswer: 2,
          explanation: "Collagen fibers make up 70-80% of the dermis, providing structural strength to the skin."
        },
        {
          id: 5,
          question: "What is the normal pH range of healthy skin?",
          options: ["3.0-4.0", "4.5-5.5", "6.0-7.0", "7.5-8.5"],
          correctAnswer: 1,
          explanation: "Healthy skin maintains an acidic pH between 4.5 and 5.5, which helps protect against microorganisms."
        },
        {
          id: 6,
          question: "Which skin type is characterized by excess sebum production?",
          options: ["Normal skin", "Dry skin", "Oily skin", "Combination skin"],
          correctAnswer: 2,
          explanation: "Oily skin produces excess sebum, leading to enlarged pores and shiny appearance, affecting about 40% of people."
        },
        {
          id: 7,
          question: "Where are new skin cells produced?",
          options: ["Stratum corneum", "Stratum granulosum", "Stratum basale", "Stratum lucidum"],
          correctAnswer: 2,
          explanation: "The stratum basale (basal layer) is where new skin cells (keratinocytes) are continuously produced."
        },
        {
          id: 8,
          question: "Which layer is only found in thick skin like palms and soles?",
          options: ["Stratum corneum", "Stratum lucidum", "Stratum spinosum", "Stratum basale"],
          correctAnswer: 1,
          explanation: "Stratum lucidum is a clear layer found only in thick skin areas like palms and soles."
        },
        {
          id: 9,
          question: "What is the primary function of melanocytes?",
          options: ["Produce sweat", "Produce oil", "Produce melanin", "Produce collagen"],
          correctAnswer: 2,
          explanation: "Melanocytes in the basal layer produce melanin, the pigment that gives skin its color and protects against UV radiation."
        },
        {
          id: 10,
          question: "Which sensory receptor detects light touch?",
          options: ["Pacinian corpuscles", "Meissner's corpuscles", "Ruffini endings", "Free nerve endings"],
          correctAnswer: 1,
          explanation: "Meissner's corpuscles are sensory receptors in the skin that detect light touch and texture."
        },
        {
          id: 11,
          question: "What percentage of people have combination skin?",
          options: ["15%", "25%", "45%", "65%"],
          correctAnswer: 2,
          explanation: "Combination skin is the most common type, affecting approximately 45% of the population."
        },
        {
          id: 12,
          question: "Which skin function involves vitamin D synthesis?",
          options: ["Protection", "Regulation", "Sensation", "Excretion"],
          correctAnswer: 1,
          explanation: "Regulation functions include vitamin D synthesis when skin is exposed to sunlight."
        },
        {
          id: 13,
          question: "What is the main component of the hypodermis?",
          options: ["Muscle tissue", "Fat cells", "Bone tissue", "Cartilage"],
          correctAnswer: 1,
          explanation: "The hypodermis primarily contains fat cells (adipose tissue) for insulation and energy storage."
        },
        {
          id: 14,
          question: "Which layer provides the skin's waterproof barrier?",
          options: ["Stratum corneum", "Stratum granulosum", "Entire epidermis", "Dermis"],
          correctAnswer: 0,
          explanation: "The stratum corneum, with its layers of dead keratinocytes and lipids, provides the waterproof barrier."
        },
        {
          id: 15,
          question: "How thick is the epidermis on most body parts?",
          options: ["0.1mm", "1.0mm", "2.0mm", "3.0mm"],
          correctAnswer: 0,
          explanation: "The epidermis is approximately 0.1mm thick on most body parts, though thicker on palms and soles."
        },
        {
          id: 16,
          question: "Which skin type affects about 20% of the population?",
          options: ["Normal skin", "Oily skin", "Dry skin", "Combination skin"],
          correctAnswer: 2,
          explanation: "Dry skin affects approximately 20% of the population, characterized by reduced sebum production."
        },
        {
          id: 17,
          question: "What do Pacinian corpuscles detect?",
          options: ["Light touch", "Deep pressure", "Temperature", "Pain"],
          correctAnswer: 1,
          explanation: "Pacinian corpuscles are sensory receptors that detect deep pressure and vibration."
        },
        {
          id: 18,
          question: "Which skin function helps prevent dehydration?",
          options: ["UV protection", "Water barrier", "Temperature regulation", "Vitamin synthesis"],
          correctAnswer: 1,
          explanation: "The skin's water barrier function in the stratum corneum prevents excessive water loss and dehydration."
        },
        {
          id: 19,
          question: "What provides skin with elasticity?",
          options: ["Collagen only", "Elastin only", "Both collagen and elastin", "Keratin only"],
          correctAnswer: 2,
          explanation: "Collagen provides strength while elastin provides elasticity. Both are essential for skin flexibility."
        },
        {
          id: 20,
          question: "Where are sweat glands located?",
          options: ["Epidermis", "Dermis", "Hypodermis", "All three layers"],
          correctAnswer: 1,
          explanation: "Sweat glands are located in the dermis, with ducts extending through the epidermis to the surface."
        }
      ]
    },

    // MODULE 2: Common Skin Conditions
    {
      id: 2,
      title: "Common Skin Conditions",
      completed: false,
      content: `# Module 2: Common Skin Conditions

## Introduction
This module covers the most frequently encountered skin conditions in clinical practice. Understanding these conditions is fundamental for proper identification and basic management.

## Learning Objectives
By the end of this module, you will be able to:
- Identify common inflammatory skin conditions
- Recognize infectious skin diseases
- Distinguish between different types of skin lesions
- Understand basic treatment approaches

## Inflammatory Skin Conditions

### 1. Acne Vulgaris
**Prevalence**: Affects 85% of people aged 12-24 years
**Key Features**:
- **Comedones** (blackheads and whiteheads)
- **Papules** (small red bumps)
- **Pustules** (pus-filled lesions)
- **Nodules** (deep, painful lumps)
- **Cysts** (large, pus-filled lesions)

**Pathophysiology**:
- Excess sebum production
- Follicular hyperkeratinization
- Bacterial colonization (C. acnes)
- Inflammation

**Treatment Approaches**:
- Topical retinoids (first-line treatment)
- Benzoyl peroxide (antibacterial)
- Topical antibiotics
- Oral medications for moderate-severe cases

### 2. Eczema (Atopic Dermatitis)
**Prevalence**: Affects 15-20% of children, 2-10% of adults
**Characteristics**:
- **Itchy**, inflamed skin
- **Redness** and **dryness**
- **Lichenification** (thickened skin)
- Common in flexural areas (elbows, knees)

**Triggers**:
- Environmental allergens
- Irritants (soaps, detergents)
- Stress
- Temperature changes

**Management**:
- Moisturizers (emollients)
- Topical corticosteroids
- Avoidance of triggers
- Antihistamines for itching

### 3. Psoriasis
**Prevalence**: Affects 2-3% of population worldwide
**Types**:
- **Plaque psoriasis** (most common, 80-90% of cases)
- **Guttate psoriasis** (small, drop-like lesions)
- **Inverse psoriasis** (flexural areas)
- **Pustular psoriasis** (pus-filled bumps)

**Clinical Features**:
- **Well-demarcated** red plaques
- **Silver-white scales**
- **Auspitz sign** (pinpoint bleeding when scale removed)
- **Koebner phenomenon** (lesions at trauma sites)

**Treatment**:
- Topical treatments (corticosteroids, vitamin D analogs)
- Phototherapy
- Systemic medications for severe cases

## Infectious Skin Conditions

### 1. Bacterial Infections
**Impetigo**:
- Highly contagious superficial infection
- **Honey-colored crusts**
- Caused by Staphylococcus or Streptococcus
- Common in children

**Cellulitis**:
- Deep skin and subcutaneous tissue infection
- **Red, warm, swollen**, painful area
- **Fever** often present
- Requires systemic antibiotics

**Folliculitis**:
- Inflammation of hair follicles
- **Pustules** around hair follicles
- Often caused by Staphylococcus aureus
- Common in areas of friction

### 2. Fungal Infections
**Dermatophytosis (Ringworm)**:
- **Tinea corporis** (body ringworm)
- **Tinea pedis** (athlete's foot, affects 15-25% of population)
- **Tinea cruris** (jock itch)
- **Tinea capitis** (scalp ringworm)

**Clinical Features**:
- **Circular** or **annular** lesions
- **Raised borders** with central clearing
- **Itchy** or scaling

**Treatment**:
- Topical antifungals (clotrimazole, terbinafine)
- Oral antifungals for extensive or resistant cases

**Candidiasis**:
- Yeast infection
- **Red, moist** areas with satellite lesions
- Common in skin folds (under breasts, groin)
- Often in immunocompromised individuals

### 3. Viral Infections
**Herpes Simplex**:
- **HSV-1** (oral, 67% of population under 50)
- **HSV-2** (genital)
- **Clustered vesicles** on red base
- Recurrent episodes

**Varicella-Zoster (Chickenpox/Shingles)**:
- **Chickenpox**: widespread vesicles, affects 90% of unvaccinated
- **Shingles**: dermatomal distribution, affects 1 in 3 people lifetime
- **Painful** vesicles along nerve distribution

**Warts (HPV)**:
- **Common warts** (hands, fingers)
- **Plantar warts** (soles of feet)
- **Flat warts** (face, legs)
- **Genital warts** (sexually transmitted)

## Other Common Conditions

### 1. Rosacea
**Prevalence**: Affects 5-10% of adults, more common in fair-skinned
**Subtypes**:
- **Erythematotelangiectatic** (flushing and redness)
- **Papulopustular** (acne-like bumps)
- **Phymatous** (skin thickening, especially nose)
- **Ocular** (eye involvement)

**Triggers**:
- Sun exposure
- Spicy foods
- Alcohol
- Temperature extremes

**Treatment**:
- Topical metronidazole or azelaic acid
- Oral antibiotics for moderate cases
- Laser therapy for visible blood vessels

### 2. Seborrheic Dermatitis
**Prevalence**: Affects 3-5% of adults
**Common Locations**:
- Scalp (dandruff)
- Face (eyebrows, nasolabial folds)
- Chest
- Ears

**Characteristics**:
- **Greasy**, yellow scales
- **Redness** in affected areas
- Mild **itching**

**Treatment**:
- Antifungal shampoos (ketoconazole)
- Topical corticosteroids
- Topical calcineurin inhibitors

### 3. Contact Dermatitis
**Two Types**:
- **Irritant** (80% of cases) - direct damage to skin
- **Allergic** (20% of cases) - immune-mediated reaction

**Common Allergens**:
- Nickel (most common metal allergen)
- Fragrances
- Preservatives
- Rubber chemicals

**Management**:
- Identification and avoidance of triggers
- Topical corticosteroids
- Oral antihistamines for itching

## Summary
Recognizing common skin conditions requires understanding their characteristic features, typical locations, and common triggers. While many conditions share similar symptoms (redness, itching, scaling), careful observation of specific patterns and characteristics allows for accurate identification.

**Key Takeaway**: Most common skin conditions can be managed with proper identification, appropriate topical treatments, and lifestyle modifications. When in doubt, or when conditions worsen despite treatment, professional medical consultation is essential.`,

      quiz: [
        {
          id: 1,
          question: "What percentage of adolescents are affected by acne?",
          options: ["50%", "65%", "85%", "95%"],
          correctAnswer: 2,
          explanation: "Acne vulgaris affects approximately 85% of people between the ages of 12 and 24 years."
        },
        {
          id: 2,
          question: "Which bacteria is primarily involved in acne pathogenesis?",
          options: ["E. coli", "C. acnes", "S. aureus", "S. epidermidis"],
          correctAnswer: 1,
          explanation: "Cutibacterium acnes (formerly Propionibacterium acnes) is the primary bacteria involved in acne development."
        },
        {
          id: 3,
          question: "What is the most common type of psoriasis?",
          options: ["Guttate psoriasis", "Plaque psoriasis", "Inverse psoriasis", "Pustular psoriasis"],
          correctAnswer: 1,
          explanation: "Plaque psoriasis is the most common type, accounting for 80-90% of all psoriasis cases."
        },
        {
          id: 4,
          question: "Which sign involves pinpoint bleeding when scale is removed in psoriasis?",
          options: ["Koebner phenomenon", "Auspitz sign", "Nikolsky sign", "Darier's sign"],
          correctAnswer: 1,
          explanation: "Auspitz sign refers to pinpoint bleeding that occurs when scales are removed from psoriatic plaques."
        },
        {
          id: 5,
          question: "What percentage of children are affected by atopic dermatitis?",
          options: ["5-10%", "15-20%", "25-30%", "35-40%"],
          correctAnswer: 1,
          explanation: "Atopic dermatitis (eczema) affects approximately 15-20% of children worldwide."
        },
        {
          id: 6,
          question: "What characterizes impetigo lesions?",
          options: ["Silver scales", "Honey-colored crusts", "Target lesions", "Annular rings"],
          correctAnswer: 1,
          explanation: "Impetigo is characterized by honey-colored crusts that form over superficial skin infections."
        },
        {
          id: 7,
          question: "Which fungal infection is also known as athlete's foot?",
          options: ["Tinea corporis", "Tinea pedis", "Tinea cruris", "Tinea capitis"],
          correctAnswer: 1,
          explanation: "Tinea pedis is the medical term for athlete's foot, a fungal infection of the feet."
        },
        {
          id: 8,
          question: "What percentage of adults are affected by rosacea?",
          options: ["1-2%", "5-10%", "15-20%", "25-30%"],
          correctAnswer: 1,
          explanation: "Rosacea affects approximately 5-10% of adults, with higher prevalence in fair-skinned individuals."
        },
        {
          id: 9,
          question: "Which is the most common metal allergen causing contact dermatitis?",
          options: ["Gold", "Nickel", "Chromium", "Cobalt"],
          correctAnswer: 1,
          explanation: "Nickel is the most common metal allergen, frequently causing allergic contact dermatitis."
        },
        {
          id: 10,
          question: "What percentage of contact dermatitis cases are irritant type?",
          options: ["20%", "40%", "60%", "80%"],
          correctAnswer: 3,
          explanation: "Approximately 80% of contact dermatitis cases are irritant type, while 20% are allergic type."
        },
        {
          id: 11,
          question: "Which herpes virus causes oral herpes in most cases?",
          options: ["HSV-1", "HSV-2", "HSV-3", "HSV-4"],
          correctAnswer: 0,
          explanation: "HSV-1 typically causes oral herpes, affecting approximately 67% of the global population under age 50."
        },
        {
          id: 12,
          question: "What lifetime risk does shingles affect?",
          options: ["1 in 10 people", "1 in 5 people", "1 in 3 people", "1 in 2 people"],
          correctAnswer: 2,
          explanation: "Shingles affects approximately 1 in 3 people during their lifetime, usually after age 50."
        },
        {
          id: 13,
          question: "What is the prevalence of seborrheic dermatitis in adults?",
          options: ["1-2%", "3-5%", "10-15%", "20-25%"],
          correctAnswer: 1,
          explanation: "Seborrheic dermatitis affects approximately 3-5% of adults, causing dandruff and facial redness."
        },
        {
          id: 14,
          question: "Which rosacea subtype involves skin thickening, especially of the nose?",
          options: ["Erythematotelangiectatic", "Papulopustular", "Phymatous", "Ocular"],
          correctAnswer: 2,
          explanation: "Phymatous rosacea involves skin thickening and irregular surface nodularities, most commonly affecting the nose (rhinophyma)."
        },
        {
          id: 15,
          question: "What percentage of the global population has psoriasis?",
          options: ["0.5-1%", "2-3%", "5-7%", "8-10%"],
          correctAnswer: 1,
          explanation: "Psoriasis affects approximately 2-3% of the global population across all age groups."
        },
        {
          id: 16,
          question: "Which condition features lesions that appear at sites of skin trauma?",
          options: ["Koebner phenomenon", "Auspitz sign", "Nikolsky sign", "Herald patch"],
          correctAnswer: 0,
          explanation: "Koebner phenomenon describes the appearance of lesions at sites of skin trauma, commonly seen in psoriasis."
        },
        {
          id: 17,
          question: "What is the most common location for seborrheic dermatitis?",
          options: ["Palms", "Scalp", "Soles", "Back"],
          correctAnswer: 1,
          explanation: "The scalp is the most common location for seborrheic dermatitis, manifesting as dandruff."
        },
        {
          id: 18,
          question: "Which type of wart appears on the soles of feet?",
          options: ["Common warts", "Plantar warts", "Flat warts", "Genital warts"],
          correctAnswer: 1,
          explanation: "Plantar warts appear on the soles of the feet and can be painful due to pressure when walking."
        },
        {
          id: 19,
          question: "What characterizes cellulitis?",
          options: ["Honey crusts", "Circular lesions", "Red, warm, swollen skin", "Silver scales"],
          correctAnswer: 2,
          explanation: "Cellulitis is characterized by red, warm, swollen, and painful skin, often with systemic symptoms like fever."
        },
        {
          id: 20,
          question: "Which treatment is first-line for mild to moderate acne?",
          options: ["Oral antibiotics", "Topical retinoids", "Isotretinoin", "Laser therapy"],
          correctAnswer: 1,
          explanation: "Topical retinoids are first-line treatment for mild to moderate acne due to their effects on follicular keratinization and inflammation."
        }
      ]
    },

    // MODULE 3: Skin Lesions and Terminology
    {
      id: 3,
      title: "Skin Lesions and Terminology",
      completed: false,
      content: `# Module 3: Skin Lesions and Dermatology Terminology

## Introduction
Accurate description of skin findings is essential in dermatology. This module covers the standardized terminology used to describe skin lesions, their characteristics, and how to document skin examinations properly.

## Learning Objectives
By the end of this module, you will be able to:
- Correctly identify primary and secondary skin lesions
- Use proper dermatology terminology
- Describe lesion characteristics accurately
- Document skin findings systematically

## Primary Skin Lesions

### 1. Macule and Patch
**Macule**:
- **Flat**, non-palpable lesion
- **Color change** only
- **Less than 1 cm** in diameter
- Examples: freckles, flat moles

**Patch**:
- Same as macule but **larger than 1 cm**
- Flat, non-palpable
- Examples: vitiligo, port-wine stain

### 2. Papule and Plaque
**Papule**:
- **Elevated**, solid lesion
- **Less than 1 cm** in diameter
- Palpable above skin surface
- Examples: warts, acne papules

**Plaque**:
- **Elevated**, flat-topped lesion
- **Greater than 1 cm** in diameter
- May be formed by coalesced papules
- Examples: psoriasis plaques, lichen planus

### 3. Nodule and Tumor
**Nodule**:
- **Palpable**, solid lesion
- **1-2 cm** in diameter
- Deeper and firmer than papule
- Examples: dermatofibroma, erythema nodosum

**Tumor**:
- Larger, solid mass
- **Greater than 2 cm** in diameter
- May be benign or malignant
- Examples: basal cell carcinoma, lipoma

### 4. Vesicle and Bulla
**Vesicle**:
- **Small fluid-filled** blister
- **Less than 0.5 cm** in diameter
- Clear fluid contents
- Examples: herpes simplex, chickenpox

**Bulla**:
- **Large fluid-filled** blister
- **Greater than 0.5 cm** in diameter
- Clear or hemorrhagic fluid
- Examples: bullous pemphigoid, burns

### 5. Pustule
- **Elevated lesion containing pus**
- White or yellow center
- May be sterile or infectious
- Examples: acne pustules, folliculitis

### 6. Wheal
- **Transient**, elevated lesion
- **Edematous** (fluid-filled)
- Often **pruritic** (itchy)
- Examples: urticaria (hives), insect bites

## Secondary Skin Lesions

### 1. Scale
- **Accumulation of stratum corneum**
- Flaky, dry skin surface
- Varies from fine to thick
- Examples: psoriasis, ichthyosis

### 2. Crust
- **Dried serum, blood, or pus**
- On skin surface
- May be yellow, brown, or red
- Examples: impetigo, weeping eczema

### 3. Erosion
- **Loss of epidermis only**
- **Moist**, but not bleeding
- Heals without scarring
- Examples: ruptured blister, candidiasis

### 4. Ulcer
- **Loss of epidermis and dermis**
- May extend to subcutaneous tissue
- **Bleeding** possible
- Heals with scarring
- Examples: venous stasis ulcer, pressure sore

### 5. Fissure
- **Linear crack** in skin
- Extends into dermis
- Often painful
- Examples: angular cheilitis, athlete's foot

### 6. Excoriation
- **Linear erosion** from scratching
- Self-induced
- May have blood crusts
- Examples: neurodermatitis, prurigo

### 7. Lichenification
- **Thickened skin** with accentuated markings
- From chronic rubbing/scratching
- Leathery appearance
- Examples: chronic eczema, lichen simplex chronicus

### 8. Atrophy
- **Thinning of skin layers**
- Epidermal atrophy: thin, wrinkled
- Dermal atrophy: depressed areas
- Examples: striae, aged skin, steroid damage

## Lesion Characteristics

### 1. Color Description
**Standard Colors**:
- **Erythematous**: red (inflammation)
- **Violaceous**: purple (vascular issues)
- **Hyperpigmented**: darker than surrounding
- **Hypopigmented**: lighter than surrounding
- **Depigmented**: complete loss of pigment

### 2. Shape and Pattern
**Common Shapes**:
- **Round/circular**: nummular eczema
- **Oval**: pityriasis rosea
- **Linear**: contact dermatitis, koebnerization
- **Annular**: ringworm, granuloma annulare
- **Serpiginous**: creeping eruption
- **Reticular**: net-like pattern

### 3. Distribution Patterns
**Body Distribution**:
- **Localized**: confined to one area
- **Generalized**: widespread
- **Symmetrical**: both sides equally
- **Asymmetrical**: one side affected
- **Acral**: hands and feet
- **Flexural**: elbow/knee folds
- **Extensor**: outer aspects of joints

### 4. Arrangement
**Common Arrangements**:
- **Solitary**: single lesion
- **Grouped/clustered**: herpes simplex
- **Linear**: contact dermatitis
- **Dermatomal**: shingles
- **Diffuse**: widespread without pattern

## Special Dermatology Terms

### 1. Morphological Terms
**Keratotic**: horny, scaly
**Verrucous**: wart-like
**Papillomatous**: nipple-like projections
**Vegetating**: cauliflower-like growth
**Morbilliform**: measles-like rash
**Target lesions**: concentric rings (erythema multiforme)
**Herald patch**: initial larger lesion (pityriasis rosea)

### 2. Descriptive Terms
**Pruritic**: itchy
**Painful/tender**: painful to touch
**Burning**: burning sensation
**Anesthetic**: loss of sensation
**Indurated**: hardened
**Mobile/fixed**: moves or doesn't move with skin
**Fluctuant**: fluid wave sensation

## Documentation System

### 1. The 8-Point Description
A systematic approach to documenting skin findings:

1. **Number**: single, multiple, few, many
2. **Size**: measure in centimeters
3. **Color**: describe precisely
4. **Morphology**: primary and secondary lesions
5. **Shape**: geometric description
6. **Arrangement**: pattern of distribution
7. **Distribution**: body areas affected
8. **Symptoms**: itching, pain, burning

### 2. Example Documentation
"Multiple (approximately 15) erythematous papules, 2-4mm in diameter, with central pustules, distributed symmetrically on forehead, cheeks, and chin. Patient reports mild pruritus."

### 3. Photography Guidelines
- Include scale/ruler in photos
- Good lighting, multiple angles
- Document location and date
- Follow patient privacy protocols

## Common Diagnostic Clues

### 1. Color Clues
- **Yellow**: xanthomas, jaundice
- **Blue**: Mongolian spots, venous malformations
- **Brown**: nevi, melanoma, café-au-lait spots
- **White**: vitiligo, tinea versicolor
- **Black**: melanoma, necrosis

### 2. Pattern Recognition
- **Christmas tree pattern**: pityriasis rosea
- **Butterfly distribution**: lupus erythematosus
- **Glove and stocking**: some viral exanthems
- **Shawl sign**: dermatomyositis
- **Napkin area**: diaper dermatitis

## Summary
Mastering dermatology terminology allows for precise communication, accurate diagnosis, and proper documentation. Remember that most skin conditions can be described using a combination of primary and secondary lesions with specific characteristics.

**Key Takeaway**: Always document skin findings systematically using standardized terminology. This ensures clear communication between healthcare providers and creates accurate medical records for ongoing patient care.`,

      quiz: [
        {
          id: 1,
          question: "What is the size criterion distinguishing a macule from a patch?",
          options: ["Color intensity", "Texture difference", "1 cm diameter", "2 cm diameter"],
          correctAnswer: 2,
          explanation: "A macule is flat and less than 1 cm, while a patch is flat and greater than 1 cm in diameter."
        },
        {
          id: 2,
          question: "Which lesion is defined as a small fluid-filled blister less than 0.5 cm?",
          options: ["Bulla", "Vesicle", "Pustule", "Papule"],
          correctAnswer: 1,
          explanation: "A vesicle is a small fluid-filled blister less than 0.5 cm in diameter."
        },
        {
          id: 3,
          question: "What distinguishes a plaque from a papule?",
          options: ["Color difference", "Fluid content", "Size greater than 1 cm", "Depth of involvement"],
          correctAnswer: 2,
          explanation: "A plaque is elevated and greater than 1 cm, while a papule is elevated and less than 1 cm."
        },
        {
          id: 4,
          question: "Which secondary lesion results from dried serum, blood, or pus?",
          options: ["Scale", "Crust", "Erosion", "Ulcer"],
          correctAnswer: 1,
          explanation: "Crust forms when serum, blood, or pus dries on the skin surface."
        },
        {
          id: 5,
          question: "What is the term for a linear crack in the skin extending into the dermis?",
          options: ["Erosion", "Fissure", "Excoriation", "Ulcer"],
          correctAnswer: 1,
          explanation: "A fissure is a linear crack in the skin that extends into the dermis, often painful."
        },
        {
          id: 6,
          question: "Which term describes thickened skin with accentuated skin markings?",
          options: ["Atrophy", "Lichenification", "Induration", "Verrucous"],
          correctAnswer: 1,
          explanation: "Lichenification describes thickened skin with accentuated skin markings from chronic rubbing."
        },
        {
          id: 7,
          question: "What is the medical term for itching?",
          options: ["Pruritic", "Painful", "Burning", "Anesthetic"],
          correctAnswer: 0,
          explanation: "Pruritic is the medical term used to describe itching sensations."
        },
        {
          id: 8,
          question: "Which pattern describes lesions in a ring shape?",
          options: ["Linear", "Annular", "Reticular", "Serpiginous"],
          correctAnswer: 1,
          explanation: "Annular describes a ring-shaped pattern, commonly seen in ringworm infections."
        },
        {
          id: 9,
          question: "What is the term for a blister larger than 0.5 cm?",
          options: ["Vesicle", "Bulla", "Pustule", "Wheal"],
          correctAnswer: 1,
          explanation: "A bulla is a fluid-filled blister larger than 0.5 cm in diameter."
        },
        {
          id: 10,
          question: "Which lesion involves loss of both epidermis and dermis?",
          options: ["Erosion", "Ulcer", "Fissure", "Excoriation"],
          correctAnswer: 1,
          explanation: "An ulcer involves loss of both epidermis and dermis, and may extend to subcutaneous tissue."
        },
        {
          id: 11,
          question: "What does the term 'erythematous' describe?",
          options: ["Purple color", "Red color", "Yellow color", "White color"],
          correctAnswer: 1,
          explanation: "Erythematous describes red coloration of the skin, typically due to inflammation or increased blood flow."
        },
        {
          id: 12,
          question: "Which arrangement describes lesions following a nerve distribution?",
          options: ["Linear", "Dermatomal", "Grouped", "Diffuse"],
          correctAnswer: 1,
          explanation: "Dermatomal arrangement follows nerve distributions, characteristic of shingles (herpes zoster)."
        },
        {
          id: 13,
          question: "What is the term for thinning of skin layers?",
          options: ["Lichenification", "Atrophy", "Induration", "Vegetating"],
          correctAnswer: 1,
          explanation: "Atrophy refers to thinning of skin layers, which can affect epidermis, dermis, or subcutaneous tissue."
        },
        {
          id: 14,
          question: "Which descriptive term means 'hardened'?",
          options: ["Fluctuant", "Indurated", "Mobile", "Verrucous"],
          correctAnswer: 1,
          explanation: "Indurated describes hardened skin or tissue, often palpated in deeper lesions or inflammation."
        },
        {
          id: 15,
          question: "What pattern is described as 'net-like'?",
          options: ["Annular", "Reticular", "Serpiginous", "Morbilliform"],
          correctAnswer: 1,
          explanation: "Reticular describes a net-like or lace-like pattern seen in some vascular disorders."
        },
        {
          id: 16,
          question: "Which term describes wart-like growths?",
          options: ["Papillomatous", "Verrucous", "Vegetating", "Keratotic"],
          correctAnswer: 1,
          explanation: "Verrucous describes wart-like appearances with rough, irregular surfaces."
        },
        {
          id: 17,
          question: "What is the initial larger lesion called in pityriasis rosea?",
          options: ["Target lesion", "Herald patch", "Primary plaque", "Mother lesion"],
          correctAnswer: 1,
          explanation: "The herald patch is the initial larger lesion that appears before the generalized rash in pityriasis rosea."
        },
        {
          id: 18,
          question: "Which distribution affects hands and feet primarily?",
          options: ["Flexural", "Extensor", "Acral", "Generalized"],
          correctAnswer: 2,
          explanation: "Acral distribution refers to involvement of distal extremities - hands and feet."
        },
        {
          id: 19,
          question: "What does 'violaceous' color indicate?",
          options: ["Red inflammation", "Purple vascular issues", "Yellow lipid deposits", "White depigmentation"],
          correctAnswer: 1,
          explanation: "Violaceous describes a purple color often seen in vascular disorders or some inflammatory conditions."
        },
        {
          id: 20,
          question: "Which term describes lesions that are fixed and don't move with skin?",
          options: ["Mobile", "Fixed", "Fluctuant", "Indurated"],
          correctAnswer: 1,
          explanation: "Fixed lesions do not move with the skin when palpated, which can be concerning for deeper involvement."
        }
      ]
    },

    // MODULE 4: Diagnostic Techniques
    {
      id: 4,
      title: "Basic Diagnostic Techniques",
      completed: false,
      content: `# Module 4: Basic Diagnostic Techniques in Dermatology

## Introduction
This module covers fundamental diagnostic methods used in dermatology. Proper technique selection and application are crucial for accurate diagnosis and treatment planning.

## Learning Objectives
By the end of this module, you will be able to:
- Perform basic skin examinations
- Understand common diagnostic tests
- Recognize indications for different procedures
- Interpret basic diagnostic findings

## The Skin Examination

### 1. Visual Inspection Principles
**Lighting Requirements**:
- **Natural daylight** is ideal
- **Bright, uniform** artificial light if needed
- Avoid **shadows** and **glare**
- Use **magnification** for small lesions

**Systematic Approach**:
1. **General inspection** from a distance
2. **Close examination** of individual lesions
3. **Full body check** when indicated
4. **Special attention** to sun-exposed areas

**What to Observe**:
- **Color** changes and variations
- **Texture** and surface characteristics
- **Pattern** of distribution
- **Symmetry** or asymmetry
- **Border** characteristics

### 2. Palpation Techniques
**Basic Palpation**:
- Use **gloved hands**
- Assess **temperature** differences
- Check for **tenderness**
- Evaluate **texture** and **moisture**
- Test **mobility** of lesions

**Specific Findings**:
- **Induration**: hardness suggesting deeper involvement
- **Fluctuation**: fluid presence in cysts/abscesses
- **Crepitus**: crackling sensation with air in tissue
- **Tethering**: fixation to deeper structures

### 3. Special Examination Techniques

**Diascopy**:
- Pressing **glass slide** against skin
- Blanches vascular lesions
- Helps assess **vascular vs. non-vascular**
- Differentiates **purpura** from erythema

**Dermatoscopy**:
- **10x magnification** with polarized light
- Visualizes **subsurface structures**
- Essential for **pigmented lesion** evaluation
- Improves diagnostic accuracy by 20-30%

**Wood's Lamp Examination**:
- **Ultraviolet light** (365nm wavelength)
- Detects **fluorescence** patterns
- Common uses:
  - **Fungal infections** (tinea capitis: green)
  - **Pigment disorders** (vitiligo: bright white)
  - **Bacterial infections** (erythrasma: coral red)
  - **Porphyria** (pink-orange)

## Common Diagnostic Tests

### 1. Potassium Hydroxide (KOH) Preparation
**Purpose**: Diagnose fungal infections
**Procedure**:
1. Scrape scale from lesion edge
2. Place on slide with **10-20% KOH**
3. Gently heat (optional)
4. Examine under microscope

**Findings**:
- **Hyphae**: branching filaments (dermatophytes)
- **Spores**: round yeast forms (candida)
- **Pseudohyphae**: elongated yeast cells

**Accuracy**: 60-80% sensitivity for fungal detection

### 2. Mineral Oil Preparation
**Purpose**: Identify scabies mites or lice
**Procedure**:
1. Apply mineral oil to suspected burrow
2. Scrape vigorously with blade
3. Transfer to slide with oil
4. Examine under microscope

**Findings**:
- **Sarcoptes scabiei**: mites, eggs, feces
- **Lice**: nits, nymphs, adult insects

### 3. Tzanck Smear
**Purpose**: Diagnose herpes virus infections
**Procedure**:
1. Unroof fresh vesicle
2. Scrape base of lesion
3. Smear on slide, air dry
4. Stain with Wright-Giemsa

**Findings**:
- **Multinucleated giant cells**
- **Molded nuclei**
- **Cowdry type A inclusions**
- Sensitivity: 60-70% for HSV/VZV

### 4. Skin Biopsy Techniques
**Indications**:
- Diagnosis of suspicious lesions
- Monitoring treatment response
- Unresponsive or worsening conditions
- Atypical presentations

**Types of Biopsies**:
1. **Shave biopsy**: superficial lesions
2. **Punch biopsy**: full-thickness sample
3. **Excisional biopsy**: complete removal
4. **Incisional biopsy**: partial sampling

**Punch Biopsy Procedure**:
1. Clean and anesthetize area
2. Select appropriate size (2-8mm)
3. Rotate punch tool through full thickness
4. Lift and snip base
5. Place in formalin for pathology

## Allergy Testing Methods

### 1. Patch Testing
**Purpose**: Identify contact allergens
**Procedure**:
1. Apply allergen patches to back
2. Remove after **48 hours**
3. Read results at **48, 72, 96 hours**
4. Positive: erythema, papules, vesicles

**Common Allergens Tested**:
- Nickel sulfate (most common positive)
- Fragrance mix
- Preservatives
- Rubber chemicals
- Accuracy: 70-80% for relevant allergens

### 2. Prick Testing
**Purpose**: Diagnose immediate hypersensitivity
**Procedure**:
1. Apply allergen extracts to skin
2. Prick through drop with lancet
3. Read after **15-20 minutes**
4. Positive: wheal and flare reaction

**Interpretation**:
- **Wheal diameter >3mm** = positive
- Compare to **histamine control**
- Compare to **negative control**

## Culture Techniques

### 1. Bacterial Culture
**Indications**:
- Suspected antibiotic-resistant infection
- Recurrent infections
- Immunocompromised patients
- Systemic symptoms present

**Collection Method**:
- Clean with alcohol, allow to dry
- Collect from advancing edge
- Use sterile swab with transport media
- Process within 2 hours

### 2. Fungal Culture
**Purpose**: Identify specific fungal species
**Media Types**:
- **Sabouraud dextrose agar**: general fungi
- **Dermatophyte test medium**: color change indicator
- **Mycosel agar**: inhibits contaminant growth

**Incubation Time**: 2-4 weeks for dermatophytes

## Non-Invasive Diagnostic Tools

### 1. pH Measurement
**Normal skin pH**: 4.5-5.5
**Clinical Uses**:
- Assess skin barrier function
- Monitor treatment effects
- Evaluate skin disorders
- Guide product recommendations

### 2. Transepidermal Water Loss (TEWL)
**Measures**: Water evaporation through skin
**Indications**:
- Evaluate skin barrier integrity
- Assess product efficacy
- Monitor skin disease severity
- Research applications

### 3. Sebum Measurement
**Methods**:
- **Sebumeter**: photometric assessment
- **Sebum absorption tapes**
- **Visual grading scales**

**Clinical Relevance**:
- Diagnose seborrheic conditions
- Monitor acne treatments
- Assess cosmetic product effects

## Documentation and Interpretation

### 1. Standardized Reporting
**Essential Elements**:
- Patient demographics
- Clinical history
- Examination findings
- Test procedures used
- Results and interpretation
- Recommendations

### 2. Common Pitfalls
**Avoid These Errors**:
- Insufficient sample collection
- Improper test timing
- Contamination issues
- Incorrect interpretation
- Failure to correlate with clinical picture

### 3. Integration with Clinical Findings
**Remember**: Diagnostic tests should:
- Support clinical suspicion
- Explain unusual presentations
- Guide treatment decisions
- Monitor disease progression
- Never replace clinical judgment

## Safety Considerations

### 1. Infection Control
**Standard Precautions**:
- Hand hygiene before and after
- Use of personal protective equipment
- Proper disposal of sharps
- Surface disinfection

### 2. Patient Preparation
**Informed Consent**: Explain:
- Purpose of test
- Procedure details
- Possible discomfort
- Result interpretation time
- Any follow-up needed

### 3. Specimen Handling
**Critical Steps**:
- Proper labeling immediately
- Appropriate transport conditions
- Timely delivery to lab
- Documentation of chain of custody

## Summary
Mastering basic diagnostic techniques requires understanding both the procedures and their appropriate applications. Always consider the clinical context when selecting and interpreting tests.

**Key Takeaway**: Diagnostic tests should complement, not replace, thorough clinical examination. The most accurate diagnoses come from integrating patient history, physical findings, and appropriate test results.`,

      quiz: [
        {
          id: 1,
          question: "What is the ideal lighting for skin examination?",
          options: ["Dim lighting", "Fluorescent office light", "Natural daylight", "Blue light"],
          correctAnswer: 2,
          explanation: "Natural daylight provides the most accurate color representation for skin examination."
        },
        {
          id: 2,
          question: "Which diagnostic tool uses ultraviolet light at 365nm wavelength?",
          options: ["Dermatoscope", "Wood's lamp", "Diascopy glass", "KOH preparation"],
          correctAnswer: 1,
          explanation: "Wood's lamp examination uses ultraviolet light at 365nm to detect fluorescence patterns."
        },
        {
          id: 3,
          question: "What does a positive KOH preparation typically show for fungal infections?",
          options: ["Bacteria clusters", "Hyphae or spores", "Cancer cells", "Viral particles"],
          correctAnswer: 1,
          explanation: "KOH preparation shows fungal hyphae (branching filaments) or spores under microscopy."
        },
        {
          id: 4,
          question: "How long are patch test allergens usually left on the skin before removal?",
          options: ["24 hours", "48 hours", "72 hours", "1 week"],
          correctAnswer: 1,
          explanation: "Patch test allergens are typically applied and removed after 48 hours, with readings at multiple time points."
        },
        {
          id: 5,
          question: "What is the normal pH range of healthy human skin?",
          options: ["3.0-4.0", "4.5-5.5", "6.0-7.0", "7.5-8.5"],
          correctAnswer: 1,
          explanation: "Healthy skin maintains an acidic pH between 4.5 and 5.5, which helps protect against microorganisms."
        },
        {
          id: 6,
          question: "Which biopsy type removes a full-thickness cylindrical sample of skin?",
          options: ["Shave biopsy", "Punch biopsy", "Excisional biopsy", "Incisional biopsy"],
          correctAnswer: 1,
          explanation: "Punch biopsy uses a circular blade to remove a full-thickness cylindrical sample of skin."
        },
        {
          id: 7,
          question: "What does diascopy help differentiate?",
          options: ["Fungal vs bacterial", "Vascular vs non-vascular lesions", "Benign vs malignant", "Acute vs chronic"],
          correctAnswer: 1,
          explanation: "Diascopy (pressing glass on skin) blanches vascular lesions, helping differentiate vascular from non-vascular conditions."
        },
        {
          id: 8,
          question: "What is the typical incubation time for fungal cultures?",
          options: ["24-48 hours", "3-5 days", "1-2 weeks", "2-4 weeks"],
          correctAnswer: 3,
          explanation: "Fungal cultures, especially for dermatophytes, typically require 2-4 weeks of incubation for growth."
        },
        {
          id: 9,
          question: "Which finding on Tzanck smear suggests herpes virus infection?",
          options: ["Gram-positive cocci", "Multinucleated giant cells", "Hyphal elements", "Acid-fast bacilli"],
          correctAnswer: 1,
          explanation: "Multinucleated giant cells with molded nuclei are characteristic of herpes virus infections on Tzanck smear."
        },
        {
          id: 10,
          question: "What does TEWL measure?",
          options: ["Skin thickness", "Water evaporation through skin", "Sebum production", "Skin elasticity"],
          correctAnswer: 1,
          explanation: "TEWL (Transepidermal Water Loss) measures the amount of water that evaporates through the skin surface."
        },
        {
          id: 11,
          question: "Which magnification is typically used in dermatoscopy?",
          options: ["5x", "10x", "40x", "100x"],
          correctAnswer: 1,
          explanation: "Dermatoscopy typically uses 10x magnification to visualize subsurface skin structures."
        },
        {
          id: 12,
          question: "What color fluorescence does tinea capitis show under Wood's lamp?",
          options: ["Coral red", "Bright white", "Green", "Blue-white"],
          correctAnswer: 2,
          explanation: "Some tinea capitis infections caused by Microsporum species show green fluorescence under Wood's lamp."
        },
        {
          id: 13,
          question: "How soon are prick test results typically read?",
          options: ["Immediately", "15-20 minutes", "48 hours", "1 week"],
          correctAnswer: 1,
          explanation: "Prick test results for immediate hypersensitivity are typically read 15-20 minutes after application."
        },
        {
          id: 14,
          question: "What is the most common allergen identified by patch testing?",
          options: ["Fragrance mix", "Nickel sulfate", "Rubber chemicals", "Preservatives"],
          correctAnswer: 1,
          explanation: "Nickel sulfate is the most common positive allergen identified through patch testing worldwide."
        },
        {
          id: 15,
          question: "What does mineral oil preparation help identify?",
          options: ["Fungal infections", "Scabies mites", "Bacterial infections", "Viral infections"],
          correctAnswer: 1,
          explanation: "Mineral oil preparations are used to identify scabies mites, eggs, and feces from skin scrapings."
        },
        {
          id: 16,
          question: "Which biopsy method is best for superficial lesions?",
          options: ["Punch biopsy", "Shave biopsy", "Excisional biopsy", "Incisional biopsy"],
          correctAnswer: 1,
          explanation: "Shave biopsy is appropriate for superficial lesions as it removes tissue above the dermal layer."
        },
        {
          id: 17,
          question: "What is the sensitivity range of KOH preparation for fungal detection?",
          options: ["20-30%", "40-50%", "60-80%", "90-100%"],
          correctAnswer: 2,
          explanation: "KOH preparation has approximately 60-80% sensitivity for detecting fungal elements in skin scrapings."
        },
        {
          id: 18,
          question: "What does a positive prick test reaction include?",
          options: ["Scale and crust", "Wheal and flare", "Erosion and ulcer", "Papule and pustule"],
          correctAnswer: 1,
          explanation: "A positive prick test shows a wheal (raised area) and flare (surrounding redness) reaction."
        },
        {
          id: 19,
          question: "Which diagnostic technique improves melanoma diagnostic accuracy by 20-30%?",
          options: ["Wood's lamp", "Dermatoscopy", "Diascopy", "KOH preparation"],
          correctAnswer: 1,
          explanation: "Dermatoscopy improves diagnostic accuracy for melanoma by approximately 20-30% compared to visual inspection alone."
        },
        {
          id: 20,
          question: "What should be compared to when interpreting prick test results?",
          options: ["Patient's symptoms only", "Histamine and negative controls", "Blood test results", "Patch test results"],
          correctAnswer: 1,
          explanation: "Prick test results should be compared to both histamine (positive) and saline (negative) controls for accurate interpretation."
        }
      ]
    },

    // MODULE 5: Basic Treatment Approaches
    {
      id: 5,
      title: "Basic Treatment Approaches",
      completed: false,
      content: `# Module 5: Basic Treatment Approaches in Dermatology

## Introduction
This module covers fundamental treatment principles and common therapeutic approaches in dermatology. Understanding when and how to use different treatments is essential for effective patient care.

## Learning Objectives
By the end of this module, you will be able to:
- Understand basic treatment principles
- Recognize common topical medications
- Know when to refer for specialist care
- Implement basic skincare recommendations

## Treatment Principles

### 1. General Principles
**Key Concepts**:
- **Treat the cause** when possible
- **Relieve symptoms** while treating
- **Prevent complications**
- **Minimize side effects**
- **Educate the patient**

**Treatment Goals**:
- **Clearance** of active disease
- **Maintenance** of remission
- **Prevention** of recurrence
- **Improvement** in quality of life

### 2. Treatment Selection Factors
**Consider**:
- **Disease severity** and extent
- **Patient age** and general health
- **Previous treatments** and responses
- **Patient preferences** and lifestyle
- **Cost** and accessibility

## Topical Treatments

### 1. Emollients and Moisturizers
**Types**:
- **Ointments**: greasy, best for very dry skin (petrolatum)
- **Creams**: mixture of oil and water, general purpose
- **Lotions**: higher water content, for hairy areas
- **Gels**: clear, water-based, for oily skin

**Key Ingredients**:
- **Occlusives**: prevent water loss (petrolatum, dimethicone)
- **Humectants**: attract water (glycerin, hyaluronic acid)
- **Emollients**: smooth skin (ceramides, fatty acids)

**Application Tips**:
- Apply to **damp skin** after bathing
- Use **liberal amounts**
- Apply **twice daily** minimum
- Continue during **remission periods**

### 2. Topical Corticosteroids
**Potency Classes**:
1. **Super potent** (Class I): clobetasol propionate
2. **High potent** (Class II): betamethasone dipropionate
3. **Medium potent** (Class III-V): triamcinolone acetonide
4. **Low potent** (Class VI-VII): hydrocortisone

**Selection Guidelines**:
- **Location**: thinner skin needs lower potency
- **Severity**: more severe needs higher potency
- **Age**: children and elderly need caution
- **Duration**: limit use to avoid side effects

**Side Effects**:
- **Local**: skin thinning, striae, telangiectasia
- **Systemic**: adrenal suppression (with extensive use)
- **Special areas**: face, groin, axillae more sensitive

**Fingertip Unit Rule**:
- One fingertip unit = 0.5g
- Covers **two hand areas**
- Helps with **consistent dosing**
- Prevents **overuse**

### 3. Topical Antibiotics
**Common Agents**:
- **Clindamycin**: for inflammatory acne
- **Erythromycin**: less used due to resistance
- **Mupirocin**: for impetigo, MRSA
- **Metronidazole**: for rosacea

**Combination Products**:
- **Benzoyl peroxide + antibiotic**: reduces resistance
- **Retinoid + antibiotic**: addresses multiple acne factors
- Use for **limited periods** (usually 3 months)

### 4. Topical Antifungals
**Classes**:
- **Azoles**: clotrimazole, miconazole, ketoconazole
- **Allylamines**: terbinafine (most effective for dermatophytes)
- **Other**: ciclopirox, tolnaftate

**Application Duration**:
- Continue for **1-2 weeks** after clearance
- **Nail infections**: require months of treatment
- **Prevention**: may need ongoing treatment in prone individuals

### 5. Topical Retinoids
**Types**:
- **Tretinoin**: first generation, for acne and photoaging
- **Adapalene**: third generation, less irritation
- **Tazarotene**: most potent, for psoriasis

**Mechanisms**:
- Normalize **keratinization**
- Reduce **inflammation**
- Increase **collagen production**

**Usage Tips**:
- Start **low concentration**
- Apply to **dry skin**
- Use **nightly** (photosensitivity)
- Expect **initial worsening** (retinization)

## Systemic Treatments

### 1. Oral Antibiotics
**Common Uses**:
- **Moderate-severe acne**
- **Cellulitis** and other infections
- **Rosacea** (low-dose long-term)

**Selection Factors**:
- **Spectrum** of activity
- **Resistance** patterns
- **Side effect** profile
- **Cost** and availability

**Duration Guidelines**:
- **Acne**: 3-6 months typically
- **Rosacea**: may be long-term low dose
- **Infections**: 7-14 days typically

### 2. Oral Antifungals
**Common Agents**:
- **Terbinafine**: best for dermatophytes
- **Itraconazole**: broader spectrum
- **Fluconazole**: good for candida

**Monitoring Requirements**:
- **Liver function tests** (baseline and during)
- **Complete blood count**
- **Drug interactions** check

### 3. Oral Retinoids
**Isotretinoin (Accutane)**:
- **Severe recalcitrant acne**
- **Multiple cysts and nodules**
- **Significant scarring risk**

**Requirements**:
- **Pregnancy prevention** program (iPLEDGE)
- **Monthly monitoring**
- **Lipid profile** and **LFTs**
- **Avoid vitamin A supplements**

## Physical Modalities

### 1. Phototherapy
**Types**:
- **UVB**: narrowband (311nm) most common
- **PUVA**: psoralen + UVA
- **Excimer laser**: targeted UVB

**Indications**:
- **Psoriasis** (80-90% clearance rate)
- **Vitiligo** (repigmentation)
- **Eczema** (severe cases)
- **Cutaneous T-cell lymphoma**

**Treatment Course**:
- Typically **2-3 times weekly**
- **15-30 treatments** for course
- **Maintenance** may be needed

### 2. Cryotherapy
**Uses**:
- **Warts** (70-80% clearance with 3-4 treatments)
- **Actinic keratoses**
- **Seborrheic keratoses**
- Some **superficial skin cancers**

**Technique**:
- Liquid nitrogen application
- **Freeze time**: 5-30 seconds
- **Freeze-thaw-freeze** for thicker lesions
- **Avoid** overfreezing on face

### 3. Surgical Procedures
**Basic Office Procedures**:
- **Curettage**: scraping off lesions
- **Electrosurgery**: burning lesions
- **Excision**: cutting out lesions
- **Punch biopsy**: diagnostic sampling

## Complementary Approaches

### 1. Lifestyle Modifications
**Sun Protection**:
- **Sunscreen** daily (SPF 30+)
- **Protective clothing**
- **Avoid peak sun** (10am-4pm)
- **Regular skin checks**

**Diet Considerations**:
- **Acne**: may relate to high glycemic foods
- **Rosacea**: avoid triggers (spicy, alcohol, hot)
- **Eczema**: identify food triggers in some cases

**Stress Management**:
- Many skin conditions **worsen with stress**
- **Relaxation techniques** helpful
- **Adequate sleep** important

### 2. Skincare Basics
**Cleansing**:
- **Gentle**, pH-balanced cleansers
- **Avoid** harsh soaps
- **Lukewarm water**, not hot
- **Pat dry**, don't rub

**Moisturizing**:
- **Apply immediately** after bathing
- **Choose type** for skin condition
- **Reapply** as needed
- **Barrier repair** for compromised skin

**Special Care**:
- **Sensitive skin**: fragrance-free, minimal ingredients
- **Aging skin**: antioxidants, retinoids, sunscreen
- **Problem skin**: targeted treatments

## Treatment Monitoring

### 1. Response Assessment
**Timeline Expectations**:
- **Acute conditions**: improvement in days
- **Chronic conditions**: weeks to months
- **Maintenance**: ongoing evaluation

**Documentation**:
- **Baseline** photos
- **Regular** progress notes
- **Standardized** severity scales
- **Patient-reported** outcomes

### 2. Side Effect Monitoring
**Common Issues**:
- **Topical steroids**: skin thinning, striae
- **Oral medications**: GI upset, photosensitivity
- **Physical treatments**: pain, pigmentation changes

**Management**:
- **Prevent** when possible
- **Monitor** regularly
- **Address** promptly
- **Document** thoroughly

## Referral Guidelines

### 1. When to Refer
**Red Flags**:
- **Uncertain diagnosis**
- **Treatment failure** after adequate trial
- **Rapid progression**
- **Systemic symptoms**
- **Suspected malignancy**

**Specific Conditions**:
- **Severe psoriasis** (>10% BSA)
- **Suspected melanoma**
- **Complex autoimmune** diseases
- **Severe drug reactions**

### 2. Specialist Roles
**Dermatologist**:
- Complex diagnosis
- Advanced treatments
- Surgical procedures
- Phototherapy

**Other Specialists**:
- **Allergist**: complex contact dermatitis
- **Rheumatologist**: connective tissue diseases
- **Oncologist**: skin cancers
- **Plastic surgeon**: reconstruction

## Patient Education

### 1. Communication Strategies
**Essential Information**:
- **Diagnosis** in understandable terms
- **Treatment plan** clearly explained
- **Expectations** realistic
- **Follow-up** requirements

**Verification**:
- **Ask-back** technique
- **Written instructions**
- **Contact information**
- **Emergency guidance**

### 2. Adherence Improvement
**Barriers to Address**:
- **Cost** concerns
- **Complex regimens**
- **Side effects**
- **Misunderstanding**

**Solutions**:
- **Simplify** regimens
- **Address** concerns
- **Provide** written plans
- **Schedule** follow-up

## Summary
Effective dermatology treatment requires matching the right therapy to the specific condition and patient. Always consider the balance between efficacy and side effects, and involve patients in treatment decisions.

**Key Takeaway**: The most successful treatments combine appropriate medical therapy with patient education and lifestyle modifications. Regular follow-up and adjustment of treatment plans are essential for optimal outcomes.`,

      quiz: [
        {
          id: 1,
          question: "What is the primary purpose of emollients in skincare?",
          options: ["Kill bacteria", "Reduce inflammation", "Prevent water loss", "Exfoliate skin"],
          correctAnswer: 2,
          explanation: "Emollients primarily work by preventing water loss from the skin, helping to maintain hydration."
        },
        {
          id: 2,
          question: "Which corticosteroid potency class is considered super potent?",
          options: ["Class I", "Class III", "Class V", "Class VII"],
          correctAnswer: 0,
          explanation: "Class I corticosteroids (like clobetasol) are considered super potent and should be used with caution."
        },
        {
          id: 3,
          question: "How much medication does one fingertip unit typically provide?",
          options: ["0.1g", "0.5g", "1.0g", "2.0g"],
          correctAnswer: 1,
          explanation: "One fingertip unit equals approximately 0.5g of medication, enough to cover two hand areas."
        },
        {
          id: 4,
          question: "Which topical antifungal class is most effective against dermatophytes?",
          options: ["Azoles", "Allylamines", "Polyenes", "Echinocandins"],
          correctAnswer: 1,
          explanation: "Allylamines like terbinafine are generally most effective against dermatophyte fungal infections."
        },
        {
          id: 5,
          question: "What is the typical treatment duration for oral antibiotics in acne?",
          options: ["2-4 weeks", "3-6 months", "1 year", "Indefinitely"],
          correctAnswer: 1,
          explanation: "Oral antibiotics for acne are typically used for 3-6 months to control inflammation while other treatments take effect."
        },
        {
          id: 6,
          question: "Which program is required for isotretinoin prescriptions in many countries?",
          options: ["iPLEDGE", "REMS", "FDA Watch", "MedGuide"],
          correctAnswer: 0,
          explanation: "The iPLEDGE program is required for isotretinoin prescriptions to prevent fetal exposure through strict pregnancy prevention measures."
        },
        {
          id: 7,
          question: "What clearance rate can be expected with phototherapy for psoriasis?",
          options: ["20-30%", "40-60%", "80-90%", "100%"],
          correctAnswer: 2,
          explanation: "Phototherapy typically achieves 80-90% clearance rates for psoriasis with appropriate treatment courses."
        },
        {
          id: 8,
          question: "How many cryotherapy treatments are typically needed for wart clearance?",
          options: ["1 treatment", "3-4 treatments", "10 treatments", "Monthly for 1 year"],
          correctAnswer: 1,
          explanation: "Warts typically require 3-4 cryotherapy treatments spaced 2-4 weeks apart for optimal clearance rates."
        },
        {
          id: 9,
          question: "What SPF is recommended for daily sunscreen use?",
          options: ["SPF 15+", "SPF 30+", "SPF 50+", "SPF 100+"],
          correctAnswer: 1,
          explanation: "SPF 30 or higher is recommended for daily sun protection to block approximately 97% of UVB radiation."
        },
        {
          id: 10,
          question: "Which topical retinoid is considered third generation?",
          options: ["Tretinoin", "Adapalene", "Tazarotene", "Isotretinoin"],
          correctAnswer: 1,
          explanation: "Adapalene is a third-generation retinoid with receptor selectivity that reduces irritation compared to earlier generations."
        },
        {
          id: 11,
          question: "What should patients apply topical medications to for best absorption?",
          options: ["Oily skin", "Damp skin", "Completely dry skin", "Exfoliated skin"],
          correctAnswer: 2,
          explanation: "Topical medications, especially retinoids, should be applied to completely dry skin to reduce irritation."
        },
        {
          id: 12,
          question: "Which body areas require extra caution with topical corticosteroids?",
          options: ["Palms and soles", "Face, groin, and axillae", "Back and chest", "Arms and legs"],
          correctAnswer: 1,
          explanation: "The face, groin, and axillae have thinner skin and are more susceptible to corticosteroid side effects."
        },
        {
          id: 13,
          question: "How often should phototherapy typically be administered?",
          options: ["Daily", "2-3 times weekly", "Once weekly", "Once monthly"],
          correctAnswer: 1,
          explanation: "Phototherapy is typically administered 2-3 times weekly for optimal results while minimizing side effects."
        },
        {
          id: 14,
          question: "What is the recommended freeze time for most cryotherapy treatments?",
          options: ["1-2 seconds", "5-30 seconds", "1-2 minutes", "5 minutes"],
          correctAnswer: 1,
          explanation: "Most cryotherapy treatments use freeze times of 5-30 seconds depending on lesion type and thickness."
        },
        {
          id: 15,
          question: "Which monitoring is required for oral antifungal therapy?",
          options: ["Blood pressure only", "Liver function tests", "Kidney ultrasound", "Cardiac echo"],
          correctAnswer: 1,
          explanation: "Liver function tests are typically monitored during oral antifungal therapy due to potential hepatotoxicity."
        },
        {
          id: 16,
          question: "What technique helps verify patient understanding of instructions?",
          options: ["Ask-back technique", "Written consent", "Video demonstration", "Family member confirmation"],
          correctAnswer: 0,
          explanation: "The ask-back technique, where patients repeat instructions in their own words, helps verify understanding."
        },
        {
          id: 17,
          question: "When should moisturizers ideally be applied?",
          options: ["Before bathing", "On dry skin anytime", "Immediately after bathing", "Only at bedtime"],
          correctAnswer: 2,
          explanation: "Moisturizers should be applied immediately after bathing to lock in moisture from damp skin."
        },
        {
          id: 18,
          question: "What percentage of body surface area indicates severe psoriasis requiring referral?",
          options: [">1% BSA", ">5% BSA", ">10% BSA", ">20% BSA"],
          correctAnswer: 2,
          explanation: "Psoriasis affecting >10% of body surface area is considered severe and may require specialist referral."
        },
        {
          id: 19,
          question: "Which topical antibiotic combination helps prevent bacterial resistance?",
          options: ["With corticosteroids", "With benzoyl peroxide", "With retinoids", "With antifungals"],
          correctAnswer: 1,
          explanation: "Combining topical antibiotics with benzoyl peroxide helps prevent development of bacterial resistance."
        },
        {
          id: 20,
          question: "What initial reaction is common when starting topical retinoids?",
          options: ["Immediate improvement", "No change", "Initial worsening", "Allergic reaction"],
          correctAnswer: 2,
          explanation: "Initial worsening or 'retinization' (redness, peeling, irritation) is common when starting topical retinoids."
        }
      ]
    },

    // MODULE 6: Preventive Care and Referrals
    {
      id: 6,
      title: "Preventive Care and Referrals",
      completed: false,
      content: `# Module 6: Preventive Care and Professional Referrals

## Introduction
This module focuses on preventive dermatology and understanding when and how to refer patients to specialists. Prevention and early intervention are key to maintaining skin health and preventing serious conditions.

## Learning Objectives
By the end of this module, you will be able to:
- Implement preventive skin care strategies
- Recognize signs requiring specialist referral
- Understand referral processes and documentation
- Educate patients on skin cancer prevention
- Coordinate care with other healthcare providers

## Preventive Dermatology

### 1. Sun Protection Strategies
**Daily Sunscreen Use**:
- **SPF 30 or higher** for daily use
- **Broad spectrum** (UVA and UVB protection)
- **Water resistant** if swimming/sweating
- **Amount**: 1 ounce (shot glass) for full body
- **Reapplication**: every 2 hours, after swimming/sweating

**Additional Protection Measures**:
- **Protective clothing**: long sleeves, pants, wide-brimmed hats
- **Sunglasses** with UV protection
- **Seek shade** especially 10am-4pm
- **Avoid tanning beds** completely

**Special Populations**:
- **Children**: higher risk, more sensitive skin
- **Outdoor workers**: need occupational protection
- **Immunocompromised**: higher skin cancer risk
- **Fair skin types**: highest risk category

### 2. Skin Cancer Prevention
**Primary Prevention**:
- **Sun avoidance** and protection
- **Regular self-examinations**
- **Professional skin checks**
- **Avoidance of tanning beds**

**Secondary Prevention (Early Detection)**:
- **ABCDE Rule** for melanoma detection
- **Regular screening** for high-risk individuals
- **Prompt biopsy** of suspicious lesions
- **Education** on warning signs

**High-Risk Groups**:
- **Personal history** of skin cancer
- **Family history** of melanoma
- **Multiple moles** (>50)
- **Atypical mole** syndrome
- **Immunosuppressed** patients
- **History** of significant sun exposure

### 3. Routine Skin Examinations
**Self-Examination Guidelines**:
- **Monthly** self-checks
- **Full-body** mirror examination
- **Use hand mirror** for hard-to-see areas
- **Document** changes with photos
- **Partner assistance** for back examination

**Professional Examination Frequency**:
- **Average risk**: every 1-3 years
- **High risk**: every 6-12 months
- **History of melanoma**: every 3-6 months initially

**Examination Technique**:
- **Systematic** head-to-toe approach
- **Good lighting** and magnification
- **Documentation** of findings
- **Patient education** during examination

## The ABCDE Rule for Melanoma

### Detailed Criteria:
**A - Asymmetry**:
- One half doesn't match the other
- **Asymmetric** shape or color distribution
- **Irregular** borders

**B - Border**:
- **Irregular**, notched, or scalloped edges
- Poorly defined margins
- **Blurred** or ragged borders

**C - Color**:
- Multiple colors within one lesion
- **Varied shades** of brown, black, red, white, blue
- **Uneven** color distribution

**D - Diameter**:
- **Greater than 6mm** (pencil eraser size)
- **Growing** lesion
- Note: melanomas can be smaller

**E - Evolution**:
- **Changing** in size, shape, or color
- **New symptoms**: itching, bleeding, pain
- **Rapid change** over weeks/months

### Additional Warning Signs (EFG):
**E - Elevated**:
- Recently raised or thickened
- **Palpable** above skin surface

**F - Firm**:
- **Hard** to touch
- **Doesn't flatten** with pressure

**G - Growing**:
- Documented increase in size
- **Progressive change**

## Skin Care Maintenance

### 1. Daily Skin Care Routine
**Basic Steps**:
1. **Gentle cleansing** twice daily
2. **Moisturizing** after cleansing
3. **Sunscreen** application every morning
4. **Nighttime repair** products as needed

**Product Selection**:
- **Non-comedogenic** for acne-prone skin
- **Fragrance-free** for sensitive skin
- **pH-balanced** cleansers
- **Ceramide-containing** moisturizers for barrier repair

### 2. Special Considerations
**Aging Skin**:
- **Increased moisturization**
- **Antioxidant** products
- **Retinoids** for collagen stimulation
- **Sun protection** paramount

**Acne-Prone Skin**:
- **Oil-free** products
- **Regular exfoliation** (gentle)
- **Non-comedogenic** labels
- **Consistent treatment** adherence

**Sensitive Skin**:
- **Minimal ingredient** products
- **Patch test** new products
- **Avoid** common irritants
- **Gradual introduction** of actives

### 3. Professional Treatments Maintenance
**After Procedures**:
- **Sun protection** critical
- **Gentle care** during healing
- **Follow-up** appointments
- **Maintenance treatments** as needed

**Long-term Management**:
- **Regular evaluations**
- **Treatment adjustments**
- **Lifestyle modifications**
- **Patient education**

## Referral Guidelines

### 1. When to Refer
**Urgent Referrals (Within 24-48 Hours)**:
- **Suspected melanoma**
- **Severe drug reactions**
- **Rapidly spreading infections**
- **Necrotizing fasciitis** suspicion

**Routine Referrals (Within 2-4 Weeks)**:
- **Uncertain diagnosis**
- **Treatment failure**
- **Chronic conditions** requiring specialist care
- **Cosmetic concerns**

**Specific Conditions Requiring Referral**:
1. **Suspected skin cancers**
2. **Severe inflammatory diseases** (>10% BSA psoriasis)
3. **Complex autoimmune conditions** (lupus, dermatomyositis)
4. **Severe blistering disorders**
5. **Hair loss** with scarring
6. **Severe acne** unresponsive to treatment
7. **Complex contact dermatitis**
8. **Vascular malformations**
9. **Severe scarring disorders**
10. **Genetic skin disorders**

### 2. Referral Documentation
**Essential Information to Include**:
1. **Patient demographics** and contact information
2. **Relevant medical history**
3. **Current medications** and allergies
4. **Detailed description** of skin condition
5. **Previous treatments** and responses
6. **Photographs** of lesions (with consent)
7. **Specific questions** for consultant
8. **Urgency level** of referral

**Communication Methods**:
- **Electronic referrals** (preferred)
- **Secure messaging**
- **Telemedicine consultations**
- **Traditional mail** (with confidentiality)

### 3. Coordinating Care
**Primary Care Role**:
- **Initial assessment** and management
- **Basic treatment** implementation
- **Monitoring** treatment response
- **Coordinating** specialist care

**Specialist Follow-up**:
- **Confirm diagnosis**
- **Specialized treatments**
- **Procedure performance**
- **Long-term management** planning

**Shared Care Models**:
- **Clear role definitions**
- **Regular communication**
- **Shared records** access
- **Agreed protocols**

## Patient Education Resources

### 1. Reliable Information Sources
**Recommended Organizations**:
- **American Academy of Dermatology**
- **Skin Cancer Foundation**
- **National Eczema Association**
- **National Psoriasis Foundation**
- **Lupus Foundation of America**

**Quality Criteria for Online Resources**:
- **Credible organization** sponsorship
- **Current information** (within 3 years)
- **Evidence-based** recommendations
- **Clear authorship** and credentials
- **No commercial bias**

### 2. Educational Materials
**Types to Provide**:
- **Written handouts**
- **Visual aids** (diagrams, photos)
- **Website recommendations**
- **Support group information**
- **Mobile applications** (reputable)

**Topics to Cover**:
- **Condition-specific** information
- **Treatment instructions**
- **Warning signs**
- **Prevention strategies**
- **When to seek help**

## Community Resources

### 1. Support Services
**Available Resources**:
- **Patient support groups**
- **Counseling services**
- **Financial assistance programs**
- **Transportation services**
- **Home care services**

**How to Access**:
- **Social work** referrals
- **Community health centers**
- **Disease-specific organizations**
- **Hospital resource centers**

### 2. Screening Programs
**Community Screening**:
- **Skin cancer screening days**
- **Health fair participation**
- **School-based programs**
- **Workplace wellness programs**

**Mobile Screening Units**:
- **Reach underserved populations**
- **Early detection** opportunities
- **Education** dissemination
- **Referral** to ongoing care

## Quality Improvement

### 1. Monitoring Outcomes
**Key Metrics**:
- **Early detection** rates for skin cancer
- **Treatment adherence** rates
- **Patient satisfaction** scores
- **Referral appropriateness**
- **Follow-up completion** rates

**Data Collection**:
- **Standardized forms**
- **Electronic health records**
- **Patient surveys**
- **Audit processes**

### 2. Continuing Education
**Professional Development**:
- **Regular updates** on guidelines
- **Skills workshops**
- **Conference attendance**
- **Online learning** modules

**Staying Current**:
- **Journal reading**
- **Professional organization membership**
- **Networking** with specialists
- **Protocol review** and updates

## Ethical Considerations

### 1. Patient Autonomy
**Informed Decision Making**:
- **Clear explanation** of options
- **Risk-benefit discussion**
- **Respect for patient preferences**
- **Cultural sensitivity**

**Consent Issues**:
- **Procedures** requiring consent
- **Photography** consent
- **Information sharing** consent
- **Treatment refusal** documentation

### 2. Resource Allocation
**Fair Access**:
- **Equitable referral** practices
- **Consideration of barriers**
- **Advocacy** for needed services
- **Efficient use** of resources

**Cost Considerations**:
- **Treatment affordability**
- **Insurance coverage** assistance
- **Generic medication** options
- **Patient assistance programs**

## Summary
Preventive dermatology and appropriate referrals are essential components of comprehensive skin care. By focusing on prevention, early detection, and timely specialist involvement, we can improve patient outcomes and reduce the burden of skin disease.

**Key Takeaway**: The most effective approach combines patient education, preventive strategies, early intervention, and coordinated care with specialists when needed. Regular follow-up and ongoing patient engagement are crucial for long-term skin health.`,

      quiz: [
        {
          id: 1,
          question: "What SPF is recommended for daily sunscreen use?",
          options: ["SPF 15", "SPF 30", "SPF 50", "SPF 100"],
          correctAnswer: 1,
          explanation: "SPF 30 or higher is recommended for daily use to block approximately 97% of UVB radiation."
        },
        {
          id: 2,
          question: "How often should high-risk individuals have professional skin examinations?",
          options: ["Every 6-12 months", "Every 2-3 years", "Every 5 years", "Only when concerned"],
          correctAnswer: 0,
          explanation: "High-risk individuals should have professional skin examinations every 6-12 months for early detection."
        },
        {
          id: 3,
          question: "What does the 'A' in ABCDE rule stand for?",
          options: ["Area", "Asymmetry", "Attachment", "Appearance"],
          correctAnswer: 1,
          explanation: "The 'A' in ABCDE stands for Asymmetry - one half doesn't match the other half."
        },
        {
          id: 4,
          question: "What diameter typically raises concern in the ABCDE rule?",
          options: [">2mm", ">4mm", ">6mm", ">10mm"],
          correctAnswer: 2,
          explanation: "The 'D' in ABCDE stands for Diameter greater than 6mm (about the size of a pencil eraser)."
        },
        {
          id: 5,
          question: "How much sunscreen is needed for full body coverage?",
          options: ["1 teaspoon", "1 tablespoon", "1 ounce", "2 ounces"],
          correctAnswer: 2,
          explanation: "Approximately 1 ounce (a shot glass full) of sunscreen is needed for full body coverage."
        },
        {
          id: 6,
          question: "Which group has the highest risk for skin cancer?",
          options: ["Dark-skinned individuals", "Fair-skinned individuals", "All skin types equally", "Only elderly"],
          correctAnswer: 1,
          explanation: "Fair-skinned individuals with light eyes and hair have the highest risk for skin cancer."
        },
        {
          id: 7,
          question: "What does the 'E' in ABCDE rule stand for?",
          options: ["Elevation", "Evolution", "Extension", "Exudate"],
          correctAnswer: 1,
          explanation: "The 'E' in ABCDE stands for Evolution - changing in size, shape, or color over time."
        },
        {
          id: 8,
          question: "How often should sunscreen be reapplied?",
          options: ["Every hour", "Every 2 hours", "Every 4 hours", "Once daily"],
          correctAnswer: 1,
          explanation: "Sunscreen should be reapplied every 2 hours, and immediately after swimming or sweating."
        },
        {
          id: 9,
          question: "What percentage of body surface area indicates severe psoriasis requiring referral?",
          options: [">1% BSA", ">5% BSA", ">10% BSA", ">20% BSA"],
          correctAnswer: 2,
          explanation: "Psoriasis affecting >10% of body surface area is considered severe and may require specialist referral."
        },
        {
          id: 10,
          question: "Which is NOT part of the ABCDE rule?",
          options: ["Asymmetry", "Border", "Color", "Elevation"],
          correctAnswer: 3,
          explanation: "Elevation is part of the extended EFG rule, not the standard ABCDE rule for melanoma detection."
        },
        {
          id: 11,
          question: "What should be avoided in products for sensitive skin?",
          options: ["Fragrances", "Ceramides", "Hyaluronic acid", "Glycerin"],
          correctAnswer: 0,
          explanation: "Fragrances are common irritants and should be avoided in products for sensitive skin."
        },
        {
          id: 12,
          question: "How often should self-skin examinations be performed?",
          options: ["Weekly", "Monthly", "Quarterly", "Yearly"],
          correctAnswer: 1,
          explanation: "Monthly self-skin examinations are recommended for early detection of skin changes."
        },
        {
          id: 13,
          question: "What does the 'B' in ABCDE rule refer to?",
          options: ["Bleeding", "Border irregularity", "Brightness", "Bumpiness"],
          correctAnswer: 1,
          explanation: "The 'B' in ABCDE stands for Border irregularity - ragged, notched, or blurred edges."
        },
        {
          id: 14,
          question: "Which time should sun be avoided for maximum protection?",
          options: ["6am-10am", "10am-4pm", "4pm-8pm", "After dark"],
          correctAnswer: 1,
          explanation: "The sun's rays are strongest between 10am and 4pm, so extra protection or avoidance is recommended."
        },
        {
          id: 15,
          question: "What does 'non-comedogenic' mean on product labels?",
          options: ["Fragrance-free", "Won't clog pores", "Water-resistant", "Hypoallergenic"],
          correctAnswer: 1,
          explanation: "Non-comedogenic means the product is formulated not to clog pores, important for acne-prone skin."
        },
        {
          id: 16,
          question: "Which referral urgency applies to suspected melanoma?",
          options: ["Routine (2-4 weeks)", "Urgent (24-48 hours)", "Emergency (immediate)", "Elective (months)"],
          correctAnswer: 1,
          explanation: "Suspected melanoma requires urgent referral within 24-48 hours for prompt evaluation."
        },
        {
          id: 17,
          question: "What does the 'C' in ABCDE rule indicate?",
          options: ["Consistency", "Color variation", "Circumference", "Contour"],
          correctAnswer: 1,
          explanation: "The 'C' in ABCDE stands for Color variation - multiple colors within one lesion."
        },
        {
          id: 18,
          question: "What should be included in referral documentation?",
          options: ["Only diagnosis", "Photos with consent", "Insurance information only", "Lab results only"],
          correctAnswer: 1,
          explanation: "Photographs of lesions (with patient consent) should be included in referral documentation when possible."
        },
        {
          id: 19,
          question: "Which organization provides reliable skin cancer information?",
          options: ["Skin Cancer Foundation", "Commercial skincare companies", "Social media influencers", "Tanning bed associations"],
          correctAnswer: 0,
          explanation: "The Skin Cancer Foundation is a reputable organization providing evidence-based skin cancer information."
        },
        {
          id: 20,
          question: "What is a key component of patient education?",
          options: ["Complex medical terminology", "Ask-back technique verification", "Minimal information", "Only verbal instructions"],
          correctAnswer: 1,
          explanation: "The ask-back technique, where patients repeat instructions, helps verify understanding and improve adherence."
        }
      ]
    }
  ],

  // FINAL EXAM (40 Questions - Mixed from all modules)
  finalExam: {
    title: "Dermatology Basics Certificate Final Examination",
    description: "Comprehensive examination covering all 6 modules of the Dermatology Basics Certificate course.",
    passingScore: 70,
    timeLimit: 90, // minutes
    questions: [
      // Module 1 Questions (7 questions)
      {
        id: 1,
        module: 1,
        question: "Which layer of skin contains blood vessels and nerve endings?",
        options: ["Epidermis only", "Dermis only", "Hypodermis only", "Both dermis and hypodermis"],
        correctAnswer: 3,
        explanation: "The dermis contains blood vessels, nerve endings, hair follicles and sweat glands. The hypodermis contains larger blood vessels and nerves."
      },
      {
        id: 2,
        module: 1,
        question: "How long does complete skin cell renewal typically take?",
        options: ["7 days", "14 days", "28 days", "42 days"],
        correctAnswer: 2,
        explanation: "Complete skin cell renewal takes approximately 28 days in healthy adult skin."
      },
      {
        id: 3,
        module: 1,
        question: "What is the normal pH range of healthy skin?",
        options: ["3.0-4.0", "4.5-5.5", "6.0-7.0", "7.5-8.5"],
        correctAnswer: 1,
        explanation: "Healthy skin maintains an acidic pH between 4.5 and 5.5, which helps protect against microorganisms."
      },
      {
        id: 4,
        module: 1,
        question: "What percentage of collagen makes up the dermis?",
        options: ["30-40%", "50-60%", "70-80%", "90-100%"],
        correctAnswer: 2,
        explanation: "Collagen fibers make up 70-80% of the dermis, providing structural strength to the skin."
      },
      {
        id: 5,
        module: 1,
        question: "Which sensory receptor detects light touch?",
        options: ["Pacinian corpuscles", "Meissner's corpuscles", "Ruffini endings", "Free nerve endings"],
        correctAnswer: 1,
        explanation: "Meissner's corpuscles are sensory receptors in the skin that detect light touch and texture."
      },
      {
        id: 6,
        module: 1,
        question: "Which skin type affects about 20% of the population?",
        options: ["Normal skin", "Oily skin", "Dry skin", "Combination skin"],
        correctAnswer: 2,
        explanation: "Dry skin affects approximately 20% of the population, characterized by reduced sebum production."
      },
      {
        id: 7,
        module: 1,
        question: "Where are new skin cells produced?",
        options: ["Stratum corneum", "Stratum granulosum", "Stratum basale", "Stratum lucidum"],
        correctAnswer: 2,
        explanation: "The stratum basale (basal layer) is where new skin cells (keratinocytes) are continuously produced."
      },

      // Module 2 Questions (7 questions)
      {
        id: 8,
        module: 2,
        question: "What percentage of adolescents are affected by acne?",
        options: ["50%", "65%", "85%", "95%"],
        correctAnswer: 2,
        explanation: "Acne vulgaris affects approximately 85% of people between the ages of 12 and 24 years."
      },
      {
        id: 9,
        module: 2,
        question: "What is the most common type of psoriasis?",
        options: ["Guttate psoriasis", "Plaque psoriasis", "Inverse psoriasis", "Pustular psoriasis"],
        correctAnswer: 1,
        explanation: "Plaque psoriasis is the most common type, accounting for 80-90% of all psoriasis cases."
      },
      {
        id: 10,
        module: 2,
        question: "Which herpes virus causes oral herpes in most cases?",
        options: ["HSV-1", "HSV-2", "HSV-3", "HSV-4"],
        correctAnswer: 0,
        explanation: "HSV-1 typically causes oral herpes, affecting approximately 67% of the global population under age 50."
      },
      {
        id: 11,
        module: 2,
        question: "What percentage of adults are affected by rosacea?",
        options: ["1-2%", "5-10%", "15-20%", "25-30%"],
        correctAnswer: 1,
        explanation: "Rosacea affects approximately 5-10% of adults, with higher prevalence in fair-skinned individuals."
      },
      {
        id: 12,
        module: 2,
        question: "Which bacteria is primarily involved in acne pathogenesis?",
        options: ["E. coli", "C. acnes", "S. aureus", "S. epidermidis"],
        correctAnswer: 1,
        explanation: "Cutibacterium acnes (formerly Propionibacterium acnes) is the primary bacteria involved in acne development."
      },
      {
        id: 13,
        module: 2,
        question: "What characterizes impetigo lesions?",
        options: ["Silver scales", "Honey-colored crusts", "Target lesions", "Annular rings"],
        correctAnswer: 1,
        explanation: "Impetigo is characterized by honey-colored crusts that form over superficial skin infections."
      },
      {
        id: 14,
        module: 2,
        question: "What percentage of the global population has psoriasis?",
        options: ["0.5-1%", "2-3%", "5-7%", "8-10%"],
        correctAnswer: 1,
        explanation: "Psoriasis affects approximately 2-3% of the global population across all age groups."
      },

      // Module 3 Questions (7 questions)
      {
        id: 15,
        module: 3,
        question: "What is the size criterion distinguishing a macule from a patch?",
        options: ["Color intensity", "Texture difference", "1 cm diameter", "2 cm diameter"],
        correctAnswer: 2,
        explanation: "A macule is flat and less than 1 cm, while a patch is flat and greater than 1 cm in diameter."
      },
      {
        id: 16,
        module: 3,
        question: "Which lesion is defined as a small fluid-filled blister less than 0.5 cm?",
        options: ["Bulla", "Vesicle", "Pustule", "Papule"],
        correctAnswer: 1,
        explanation: "A vesicle is a small fluid-filled blister less than 0.5 cm in diameter."
      },
      {
        id: 17,
        module: 3,
        question: "Which secondary lesion results from dried serum, blood, or pus?",
        options: ["Scale", "Crust", "Erosion", "Ulcer"],
        correctAnswer: 1,
        explanation: "Crust forms when serum, blood, or pus dries on the skin surface."
      },
      {
        id: 18,
        module: 3,
        question: "What is the medical term for itching?",
        options: ["Pruritic", "Painful", "Burning", "Anesthetic"],
        correctAnswer: 0,
        explanation: "Pruritic is the medical term used to describe itching sensations."
      },
      {
        id: 19,
        module: 3,
        question: "Which pattern describes lesions in a ring shape?",
        options: ["Linear", "Annular", "Reticular", "Serpiginous"],
        correctAnswer: 1,
        explanation: "Annular describes a ring-shaped pattern, commonly seen in ringworm infections."
      },
      {
        id: 20,
        module: 3,
        question: "What does the term 'erythematous' describe?",
        options: ["Purple color", "Red color", "Yellow color", "White color"],
        correctAnswer: 1,
        explanation: "Erythematous describes red coloration of the skin, typically due to inflammation or increased blood flow."
      },
      {
        id: 21,
        module: 3,
        question: "Which lesion involves loss of both epidermis and dermis?",
        options: ["Erosion", "Ulcer", "Fissure", "Excoriation"],
        correctAnswer: 1,
        explanation: "An ulcer involves loss of both epidermis and dermis, and may extend to subcutaneous tissue."
      },

      // Module 4 Questions (6 questions)
      {
        id: 22,
        module: 4,
        question: "Which diagnostic tool uses ultraviolet light at 365nm wavelength?",
        options: ["Dermatoscope", "Wood's lamp", "Diascopy glass", "KOH preparation"],
        correctAnswer: 1,
        explanation: "Wood's lamp examination uses ultraviolet light at 365nm to detect fluorescence patterns."
      },
      {
        id: 23,
        module: 4,
        question: "What does a positive KOH preparation typically show for fungal infections?",
        options: ["Bacteria clusters", "Hyphae or spores", "Cancer cells", "Viral particles"],
        correctAnswer: 1,
        explanation: "KOH preparation shows fungal hyphae (branching filaments) or spores under microscopy."
      },
      {
        id: 24,
        module: 4,
        question: "How long are patch test allergens usually left on the skin before removal?",
        options: ["24 hours", "48 hours", "72 hours", "1 week"],
        correctAnswer: 1,
        explanation: "Patch test allergens are typically applied and removed after 48 hours, with readings at multiple time points."
      },
      {
        id: 25,
        module: 4,
        question: "Which biopsy type removes a full-thickness cylindrical sample of skin?",
        options: ["Shave biopsy", "Punch biopsy", "Excisional biopsy", "Incisional biopsy"],
        correctAnswer: 1,
        explanation: "Punch biopsy uses a circular blade to remove a full-thickness cylindrical sample of skin."
      },
      {
        id: 26,
        module: 4,
        question: "What is the typical incubation time for fungal cultures?",
        options: ["24-48 hours", "3-5 days", "1-2 weeks", "2-4 weeks"],
        correctAnswer: 3,
        explanation: "Fungal cultures, especially for dermatophytes, typically require 2-4 weeks of incubation for growth."
      },
      {
        id: 27,
        module: 4,
        question: "What does diascopy help differentiate?",
        options: ["Fungal vs bacterial", "Vascular vs non-vascular lesions", "Benign vs malignant", "Acute vs chronic"],
        correctAnswer: 1,
        explanation: "Diascopy (pressing glass on skin) blanches vascular lesions, helping differentiate vascular from non-vascular conditions."
      },

      // Module 5 Questions (6 questions)
      {
        id: 28,
        module: 5,
        question: "Which corticosteroid potency class is considered super potent?",
        options: ["Class I", "Class III", "Class V", "Class VII"],
        correctAnswer: 0,
        explanation: "Class I corticosteroids (like clobetasol) are considered super potent and should be used with caution."
      },
      {
        id: 29,
        module: 5,
        question: "How much medication does one fingertip unit typically provide?",
        options: ["0.1g", "0.5g", "1.0g", "2.0g"],
        correctAnswer: 1,
        explanation: "One fingertip unit equals approximately 0.5g of medication, enough to cover two hand areas."
      },
      {
        id: 30,
        module: 5,
        question: "What is the typical treatment duration for oral antibiotics in acne?",
        options: ["2-4 weeks", "3-6 months", "1 year", "Indefinitely"],
        correctAnswer: 1,
        explanation: "Oral antibiotics for acne are typically used for 3-6 months to control inflammation while other treatments take effect."
      },
      {
        id: 31,
        module: 5,
        question: "What clearance rate can be expected with phototherapy for psoriasis?",
        options: ["20-30%", "40-60%", "80-90%", "100%"],
        correctAnswer: 2,
        explanation: "Phototherapy typically achieves 80-90% clearance rates for psoriasis with appropriate treatment courses."
      },
      {
        id: 32,
        module: 5,
        question: "How many cryotherapy treatments are typically needed for wart clearance?",
        options: ["1 treatment", "3-4 treatments", "10 treatments", "Monthly for 1 year"],
        correctAnswer: 1,
        explanation: "Warts typically require 3-4 cryotherapy treatments spaced 2-4 weeks apart for optimal clearance rates."
      },
      {
        id: 33,
        module: 5,
        question: "Which body areas require extra caution with topical corticosteroids?",
        options: ["Palms and soles", "Face, groin, and axillae", "Back and chest", "Arms and legs"],
        correctAnswer: 1,
        explanation: "The face, groin, and axillae have thinner skin and are more susceptible to corticosteroid side effects."
      },

      // Module 6 Questions (7 questions)
      {
        id: 34,
        module: 6,
        question: "What SPF is recommended for daily sunscreen use?",
        options: ["SPF 15", "SPF 30", "SPF 50", "SPF 100"],
        correctAnswer: 1,
        explanation: "SPF 30 or higher is recommended for daily use to block approximately 97% of UVB radiation."
      },
      {
        id: 35,
        module: 6,
        question: "How often should high-risk individuals have professional skin examinations?",
        options: ["Every 6-12 months", "Every 2-3 years", "Every 5 years", "Only when concerned"],
        correctAnswer: 0,
        explanation: "High-risk individuals should have professional skin examinations every 6-12 months for early detection."
      },
      {
        id: 36,
        module: 6,
        question: "What does the 'A' in ABCDE rule stand for?",
        options: ["Area", "Asymmetry", "Attachment", "Appearance"],
        correctAnswer: 1,
        explanation: "The 'A' in ABCDE stands for Asymmetry - one half doesn't match the other half."
      },
      {
        id: 37,
        module: 6,
        question: "What diameter typically raises concern in the ABCDE rule?",
        options: [">2mm", ">4mm", ">6mm", ">10mm"],
        correctAnswer: 2,
        explanation: "The 'D' in ABCDE stands for Diameter greater than 6mm (about the size of a pencil eraser)."
      },
      {
        id: 38,
        module: 6,
        question: "How often should sunscreen be reapplied?",
        options: ["Every hour", "Every 2 hours", "Every 4 hours", "Once daily"],
        correctAnswer: 1,
        explanation: "Sunscreen should be reapplied every 2 hours, and immediately after swimming or sweating."
      },
      {
        id: 39,
        module: 6,
        question: "What does the 'E' in ABCDE rule stand for?",
        options: ["Elevation", "Evolution", "Extension", "Exudate"],
        correctAnswer: 1,
        explanation: "The 'E' in ABCDE stands for Evolution - changing in size, shape, or color over time."
      },
      {
        id: 40,
        module: 6,
        question: "Which referral urgency applies to suspected melanoma?",
        options: ["Routine (2-4 weeks)", "Urgent (24-48 hours)", "Emergency (immediate)", "Elective (months)"],
        correctAnswer: 1,
        explanation: "Suspected melanoma requires urgent referral within 24-48 hours for prompt evaluation."
      }
    ]
  }
};

export default dermatologyBasicsCertificate;

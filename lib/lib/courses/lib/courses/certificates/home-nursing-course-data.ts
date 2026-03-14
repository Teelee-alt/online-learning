export const homeNursingCertificate = {
  // 1. COURSE METADATA & IDENTIFICATION
  id: "home-nursing-certificate",
  title: "Home Nursing (Certificate)",
  description: "Learn essential home nursing skills to provide safe, compassionate care for patients in their homes. This course covers basic patient care, vital signs monitoring, hygiene assistance, and emergency response.",
  duration: "6 weeks",
  timeCommitment: "4-6 hours per week",
  price: 12,
  upgradePrice: 18,
  icon: "🏠",
  badge: "Certificate",
  
  // 2. MODULE ARCHITECTURE (6 Modules)
  modules: [
    // MODULE 1: Foundations of Home Nursing
    {
      id: 1,
      title: "Foundations of Home Nursing",
      content: `
# Introduction to Home Nursing

Home nursing provides care for people who need medical support but prefer to stay in their own homes. This approach helps patients maintain independence while receiving professional care.

## Understanding the Home Nurse's Role

A home nurse serves as a compassionate caregiver who:
- Provides basic medical care in the home setting
- Monitors patient health and reports changes
- Assists with daily living activities
- Educates family members about care needs
- Creates a safe environment for recovery

Home nurses work with patients of all ages, from children to elderly individuals. They adapt their care to each person's unique needs and home environment.

## Key Responsibilities

The main responsibilities include:
**Personal Care Assistance** - Helping with bathing, dressing, and grooming
**Medication Reminders** - Ensuring patients take prescribed medicines
**Vital Signs Monitoring** - Checking temperature, pulse, and breathing
**Mobility Support** - Assisting with walking and position changes
**Nutrition Support** - Helping with meal preparation and feeding

## Setting Up a Safe Home Environment

Safety is the most important concern in home nursing. You must:
- Remove tripping hazards like loose rugs
- Ensure good lighting throughout the home
- Install grab bars in bathrooms
- Keep emergency numbers visible
- Create clear pathways for movement

Remember that each home presents unique challenges. You'll learn to assess and adapt to different environments while maintaining high standards of care.
`,
      completed: false,
      quiz: [
        {
          id: 1,
          question: "What is the primary goal of home nursing?",
          options: [
            "To provide hospital-level care at home",
            "To help patients maintain independence while receiving care",
            "To replace all family caregiving responsibilities",
            "To only care for elderly patients"
          ],
          correctAnswer: 1,
          explanation: "Home nursing helps patients stay in their familiar home environment while receiving professional care, maintaining their independence whenever possible."
        },
        {
          id: 2,
          question: "Which of these is NOT a key responsibility of a home nurse?",
          options: [
            "Personal care assistance",
            "Performing complex surgeries",
            "Medication reminders",
            "Vital signs monitoring"
          ],
          correctAnswer: 1,
          explanation: "Home nurses provide basic medical care and assistance with daily activities, but they do not perform complex surgical procedures."
        },
        {
          id: 3,
          question: "What is the most important concern when setting up a home nursing environment?",
          options: [
            "Making the home look beautiful",
            "Ensuring patient safety",
            "Reducing care costs",
            "Limiting family involvement"
          ],
          correctAnswer: 1,
          explanation: "Patient safety is always the top priority in home nursing. All other considerations come after ensuring a safe environment."
        },
        {
          id: 4,
          question: "Who do home nurses typically work with?",
          options: [
            "Only elderly patients",
            "Only children",
            "Patients of all ages",
            "Only post-surgery patients"
          ],
          correctAnswer: 2,
          explanation: "Home nurses care for patients of all ages, adapting their approach to meet the specific needs of each individual."
        },
        {
          id: 5,
          question: "What should be kept visible in the home for emergency situations?",
          options: [
            "Family photographs",
            "Emergency phone numbers",
            "Medical textbooks",
            "Insurance documents"
          ],
          correctAnswer: 1,
          explanation: "Emergency phone numbers should always be visible and accessible to ensure quick response in urgent situations."
        },
        {
          id: 6,
          question: "Which activity falls under personal care assistance?",
          options: [
            "Cooking gourmet meals",
            "Helping with bathing and dressing",
            "Doing household repairs",
            "Managing family finances"
          ],
          correctAnswer: 1,
          explanation: "Personal care assistance includes helping with basic daily activities like bathing, dressing, and grooming."
        },
        {
          id: 7,
          question: "Why is adapting to different home environments important?",
          options: [
            "Because every home has the same layout",
            "Because each home presents unique safety challenges",
            "Because nurses prefer certain home types",
            "Because insurance requires specific home setups"
          ],
          correctAnswer: 1,
          explanation: "Each home has different layouts, obstacles, and safety considerations that require assessment and adaptation."
        },
        {
          id: 8,
          question: "What does mobility support involve?",
          options: [
            "Driving patients to appointments",
            "Assisting with walking and position changes",
            "Exercising for the patient",
            "Installing elevators in homes"
          ],
          correctAnswer: 1,
          explanation: "Mobility support involves helping patients move safely, including walking assistance and changing positions to prevent complications."
        },
        {
          id: 9,
          question: "What role does a home nurse play with family members?",
          options: [
            "Replacing them completely",
            "Educating them about care needs",
            "Managing their personal lives",
            "Criticizing their caregiving"
          ],
          correctAnswer: 1,
          explanation: "Home nurses educate and support family members, helping them understand and participate in the patient's care when appropriate."
        },
        {
          id: 10,
          question: "Which safety measure helps prevent bathroom accidents?",
          options: [
            "Installing grab bars",
            "Using scented candles",
            "Adding decorative rugs",
            "Keeping doors locked"
          ],
          correctAnswer: 0,
          explanation: "Grab bars in bathrooms provide support and stability, helping prevent slips and falls in wet environments."
        },
        {
          id: 11,
          question: "What does nutrition support include?",
          options: [
            "Preparing special diet meals only",
            "Helping with meal preparation and feeding",
            "Forcing patients to eat",
            "Buying groceries for the family"
          ],
          correctAnswer: 1,
          explanation: "Nutrition support involves helping with appropriate meal preparation and assisting with feeding when necessary."
        },
        {
          id: 12,
          question: "Why is good lighting important in home nursing?",
          options: [
            "It makes the home look larger",
            "It helps prevent trips and falls",
            "It reduces electricity costs",
            "It improves patient mood only"
          ],
          correctAnswer: 1,
          explanation: "Good lighting helps patients and caregivers see clearly, reducing the risk of accidents and falls."
        },
        {
          id: 13,
          question: "What should be removed to prevent tripping hazards?",
          options: [
            "All furniture",
            "Loose rugs and clutter",
            "Wall decorations",
            "Window treatments"
          ],
          correctAnswer: 1,
          explanation: "Loose rugs, electrical cords, and clutter create tripping hazards and should be removed or secured."
        },
        {
          id: 14,
          question: "How does home nursing help patients psychologically?",
          options: [
            "By keeping them isolated",
            "By maintaining their home environment and independence",
            "By reducing social interactions",
            "By focusing only on physical health"
          ],
          correctAnswer: 1,
          explanation: "Staying in familiar surroundings helps patients feel more comfortable and independent, which supports their mental well-being."
        },
        {
          id: 15,
          question: "What is the purpose of medication reminders?",
          options: [
            "To increase medication costs",
            "To ensure patients take prescribed medicines correctly",
            "To reduce doctor visits",
            "To replace pharmacist instructions"
          ],
          correctAnswer: 1,
          explanation: "Medication reminders help patients follow their prescribed treatment plans accurately and consistently."
        },
        {
          id: 16,
          question: "Which activity is part of creating clear pathways?",
          options: [
            "Adding more furniture",
            "Removing obstacles from walking areas",
            "Closing off rooms",
            "Installing carpet everywhere"
          ],
          correctAnswer: 1,
          explanation: "Clear pathways are created by removing obstacles and ensuring there's enough space for safe movement with assistive devices if needed."
        },
        {
          id: 17,
          question: "What does adapting care to unique needs mean?",
          options: [
            "Using the same approach for everyone",
            "Tailoring care to each patient's specific situation",
            "Following only doctor's orders exactly",
            "Ignoring patient preferences"
          ],
          correctAnswer: 1,
          explanation: "Each patient has unique needs, preferences, and home environments that require customized care approaches."
        },
        {
          id: 18,
          question: "Why is family education important in home nursing?",
          options: [
            "To make family members become nurses",
            "To help family participate effectively in care",
            "To reduce nurse workload completely",
            "To criticize current care methods"
          ],
          correctAnswer: 1,
          explanation: "Educated family members can provide better support and understand how to assist safely between nurse visits."
        },
        {
          id: 19,
          question: "What should a home nurse report immediately?",
          options: [
            "Minor schedule changes",
            "Significant changes in patient health",
            "Family disagreements",
            "Weather conditions"
          ],
          correctAnswer: 1,
          explanation: "Significant changes in health status must be reported promptly to ensure appropriate medical response."
        },
        {
          id: 20,
          question: "Which characteristic is most important for a home nurse?",
          options: [
            "Having expensive equipment",
            "Being compassionate and observant",
            "Working only daytime hours",
            "Having nursing home experience only"
          ],
          correctAnswer: 1,
          explanation: "Compassion and careful observation are essential qualities for providing effective home nursing care."
        }
      ]
    },

    // MODULE 2: Basic Patient Care Skills
    {
      id: 2,
      title: "Basic Patient Care Skills",
      content: `
# Essential Patient Care Techniques

Mastering basic care skills forms the foundation of effective home nursing. These skills ensure patient comfort, dignity, and wellbeing.

## Personal Hygiene Assistance

Helping patients maintain personal hygiene prevents infections and promotes dignity. Key areas include:

**Oral Care** - Assist with brushing teeth or using mouthwash. For bedridden patients, use moist swabs to clean the mouth. Check for sores or unusual conditions.

**Bathing Assistance** - Help with baths or showers based on patient ability. Ensure water temperature is comfortable and safe. Use non-slip mats and support bars. For bed baths, work systematically from face to feet.

**Hair Care** - Help wash and comb hair regularly. Keep hair away from the face to prevent irritation. For patients who cannot shampoo often, use dry shampoo alternatives.

**Skin Care** - Check skin daily for redness, dryness, or breakdown. Keep skin clean and dry, especially in skin folds. Use moisturizers as needed and change positions regularly to prevent pressure sores.

## Dressing and Grooming Support

Choose clothing that is comfortable, easy to put on, and appropriate for the weather. Look for adaptive clothing with Velcro or front openings if needed.

Assist with basic grooming like nail care, shaving, and applying lotion. Always maintain the patient's preferred appearance when possible to support their self-esteem.

## Toileting Assistance

Help patients use the toilet, bedpan, or urinal as needed. Maintain privacy and dignity throughout the process. For patients with limited mobility, establish a regular schedule to prevent accidents.

Keep the bathroom clean and odor-free. Wash hands thoroughly after each assistance session. Use gloves when handling bodily fluids.

## Comfort Measures

Learn positioning techniques to prevent discomfort and complications. Use pillows for support when sitting or lying down. Change positions every two hours for bedridden patients.

Provide gentle massage to relieve muscle tension when appropriate. Ensure the room temperature is comfortable and adjust bedding as needed.
`,
      completed: false,
      quiz: [
        {
          id: 1,
          question: "Why is personal hygiene assistance important?",
          options: [
            "It prevents infections and promotes dignity",
            "It saves money on medical supplies",
            "It replaces all medical treatments",
            "It is only for cosmetic purposes"
          ],
          correctAnswer: 0,
          explanation: "Proper hygiene prevents infections, maintains skin health, and helps patients feel clean and dignified."
        },
        {
          id: 2,
          question: "What should you check during oral care?",
          options: [
            "Only tooth color",
            "For sores or unusual conditions",
            "How expensive their toothpaste is",
            "If they brush themselves perfectly"
          ],
          correctAnswer: 1,
          explanation: "Checking for sores, inflammation, or unusual conditions helps detect potential health issues early."
        },
        {
          id: 3,
          question: "What safety measure is essential during bathing?",
          options: [
            "Using the hottest water possible",
            "Ensuring non-slip mats are in place",
            "Bathing quickly to save time",
            "Using strong soaps only"
          ],
          correctAnswer: 1,
          explanation: "Non-slip mats prevent dangerous falls in wet bathroom environments."
        },
        {
          id: 4,
          question: "How often should bedridden patients change positions?",
          options: [
            "Once a day",
            "Every two hours",
            "Only when they complain",
            "Every 30 minutes"
          ],
          correctAnswer: 1,
          explanation: "Changing positions every two hours helps prevent pressure sores and improves circulation."
        },
        {
          id: 5,
          question: "What type of clothing is best for patients with limited mobility?",
          options: [
            "Tight, fashionable clothing",
            "Adaptive clothing with Velcro or front openings",
            "Multiple layers of heavy clothing",
            "Clothes that require assistance to remove"
          ],
          correctAnswer: 1,
          explanation: "Adaptive clothing is easier to put on and take off, reducing frustration and maintaining independence."
        },
        {
          id: 6,
          question: "What should you do after toileting assistance?",
          options: [
            "Wash hands thoroughly",
            "Continue with other tasks immediately",
            "Report to the doctor immediately",
            "Document in detail only"
          ],
          correctAnswer: 0,
          explanation: "Handwashing prevents the spread of germs and maintains hygiene standards."
        },
        {
          id: 7,
          question: "Why is skin care monitoring important?",
          options: [
            "To prevent pressure sores and infections",
            "Only for cosmetic appearance",
            "To reduce lotion costs",
            "To satisfy insurance requirements"
          ],
          correctAnswer: 0,
          explanation: "Regular skin checks help prevent pressure sores, infections, and other skin complications."
        },
        {
          id: 8,
          question: "What should you use for bed baths?",
          options: [
            "Cold water only",
            "A systematic approach from face to feet",
            "Strong disinfectants",
            "As little water as possible"
          ],
          correctAnswer: 1,
          explanation: "Working systematically ensures thorough cleaning while maintaining patient comfort and dignity."
        },
        {
          id: 9,
          question: "How can you help with hair care for patients who cannot shampoo often?",
          options: [
            "Ignore hair care completely",
            "Use dry shampoo alternatives",
            "Cut all hair short",
            "Wash with cold water only"
          ],
          correctAnswer: 1,
          explanation: "Dry shampoo alternatives help maintain hair cleanliness between full washes."
        },
        {
          id: 10,
          question: "What is important about maintaining grooming habits?",
          options: [
            "It supports patient self-esteem",
            "It impresses family members",
            "It follows strict fashion rules",
            "It reduces care time"
          ],
          correctAnswer: 0,
          explanation: "Maintaining preferred grooming habits helps patients feel like themselves and supports psychological wellbeing."
        },
        {
          id: 11,
          question: "When should you use gloves during patient care?",
          options: [
            "Only during medication administration",
            "When handling bodily fluids",
            "For all patient interactions",
            "Only when family is watching"
          ],
          correctAnswer: 1,
          explanation: "Gloves protect both the patient and caregiver when there's potential contact with bodily fluids."
        },
        {
          id: 12,
          question: "What helps prevent pressure sores?",
          options: [
            "Keeping patients in one position",
            "Regular position changes and skin checks",
            "Using only soft bedding",
            "Avoiding all movement"
          ],
          correctAnswer: 1,
          explanation: "Regular position changes relieve pressure on specific body areas, preventing sore development."
        },
        {
          id: 13,
          question: "Why establish a regular toileting schedule?",
          options: [
            "To prevent accidents",
            "To save on supplies",
            "To make documentation easier",
            "To follow strict routines only"
          ],
          correctAnswer: 0,
          explanation: "Regular schedules help patients maintain continence and prevent uncomfortable accidents."
        },
        {
          id: 14,
          question: "What should you check skin for daily?",
          options: [
            "Only for cleanliness",
            "Redness, dryness, or breakdown",
            "Tattoos or birthmarks",
            "Sun tan levels"
          ],
          correctAnswer: 1,
          explanation: "Daily skin checks detect early signs of problems that need intervention."
        },
        {
          id: 15,
          question: "How can you provide comfort during positioning?",
          options: [
            "Using pillows for support",
            "Ignoring patient complaints",
            "Keeping positions for long periods",
            "Using only medical equipment"
          ],
          correctAnswer: 0,
          explanation: "Pillows provide comfortable support and help maintain proper alignment."
        },
        {
          id: 16,
          question: "What is important about water temperature during bathing?",
          options: [
            "It should be extremely hot",
            "It should be comfortable and safe",
            "It doesn't matter as long as clean",
            "It should vary dramatically"
          ],
          correctAnswer: 1,
          explanation: "Comfortable, safe water temperature prevents burns and makes bathing pleasant."
        },
        {
          id: 17,
          question: "Why keep hair away from the face?",
          options: [
            "To prevent irritation and improve visibility",
            "For fashion purposes only",
            "To make face washing easier",
            "To reduce shampoo use"
          ],
          correctAnswer: 0,
          explanation: "Keeping hair away prevents skin irritation and helps patients see clearly."
        },
        {
          id: 18,
          question: "What should you do with skin folds during care?",
          options: [
            "Ignore them completely",
            "Keep them clean and dry",
            "Apply powder heavily",
            "Cover them completely"
          ],
          correctAnswer: 1,
          explanation: "Skin folds can harbor moisture and bacteria, so keeping them clean and dry prevents problems."
        },
        {
          id: 19,
          question: "When assisting with dressing, what should you consider first?",
          options: [
            "Latest fashion trends",
            "Patient comfort and ease of use",
            "Matching colors perfectly",
            "Using the fewest pieces possible"
          ],
          correctAnswer: 1,
          explanation: "Patient comfort and the ability to dress independently or with minimal help are top priorities."
        },
        {
          id: 20,
          question: "What does gentle massage help with?",
          options: [
            "Only relaxation",
            "Relieving muscle tension and improving circulation",
            "Reducing need for medication",
            "Entertaining the patient"
          ],
          correctAnswer: 1,
          explanation: "Gentle massage can relieve muscle tension, improve circulation, and provide comfort when done appropriately."
        }
      ]
    },

    // MODULE 3: Vital Signs Monitoring
    {
      id: 3,
      title: "Vital Signs Monitoring",
      content: `
# Understanding and Measuring Vital Signs

Vital signs are basic measurements that show how the body is functioning. Monitoring these helps detect health changes early.

## Temperature Measurement

Body temperature indicates if a person has fever or hypothermia. Normal range is 97.8°F to 99.1°F (36.5°C to 37.3°C).

**Oral Temperature** - Place thermometer under the tongue. Wait until it beeps. Do not take orally if patient recently had hot/cold drinks.

**Armpit Temperature** - Place thermometer in dry armpit, arm pressed to side. Add 1°F to reading for accurate body temperature.

**Ear Temperature** - Use tympanic thermometer in ear canal. Pull ear gently back and up for adults to straighten canal.

**Forehead Temperature** - Temporal artery thermometers swipe across forehead. Quick and comfortable for most patients.

Record temperature accurately with time and method used. Report temperatures above 100.4°F (38°C) or below 96.8°F (36°C).

## Pulse Measurement

Pulse shows heart rate and rhythm. Normal adult resting pulse is 60-100 beats per minute.

**Finding the Pulse** - Use fingertips (not thumb) on wrist (radial artery) or neck (carotid artery). Press gently.

**Counting the Pulse** - Count for 30 seconds and multiply by 2, or count full minute for irregular pulses. Note strength and regularity.

**Factors Affecting Pulse** - Exercise, emotions, medications, and health conditions affect pulse rate. Always note the context.

## Breathing Rate

Respirations are how many breaths taken per minute. Normal adult rate is 12-20 breaths per minute.

**Counting Respirations** - Watch chest rise and fall. Count for 30 seconds, multiply by 2. Do this without the patient knowing, as awareness may change breathing.

**Observing Breathing** - Note if breathing is easy or labored, quiet or noisy, regular or irregular. Report difficulty breathing immediately.

## Blood Pressure Basics

Blood pressure measures force of blood against artery walls. Record as two numbers: systolic (pressure when heart beats) over diastolic (pressure when heart rests).

**Normal Ranges** - Normal is around 120/80 mmHg. Hypertension is 140/90 or higher. Hypotension is 90/60 or lower.

**Measuring Technique** - Use correct cuff size. Position arm at heart level. Apply cuff snugly. Inflate until pulse disappears, then slowly deflate while listening.

**When to Measure** - Best when patient is rested, not after eating or exercise. Use same arm each time for consistency.

## Recording and Reporting

Document all vital signs clearly with date, time, and any relevant notes. Report significant changes or abnormal readings to supervisor or healthcare provider.

Establish a baseline for each patient when they are well, so changes are more noticeable.
`,
      completed: false,
      quiz: [
        {
          id: 1,
          question: "What is the normal body temperature range?",
          options: [
            "95°F to 97°F",
            "97.8°F to 99.1°F",
            "100°F to 102°F",
            "It varies too much to say"
          ],
          correctAnswer: 1,
          explanation: "Normal body temperature typically ranges from 97.8°F to 99.1°F (36.5°C to 37.3°C)."
        },
        {
          id: 2,
          question: "Where should you NOT take an oral temperature?",
          options: [
            "After patient had hot/cold drinks",
            "When patient is sleeping",
            "In the morning only",
            "Without doctor's permission"
          ],
          correctAnswer: 0,
          explanation: "Hot or cold drinks in the mouth can affect oral temperature accuracy."
        },
        {
          id: 3,
          question: "What is normal adult resting pulse rate?",
          options: [
            "40-60 beats per minute",
            "60-100 beats per minute",
            "100-120 beats per minute",
            "120-140 beats per minute"
          ],
          correctAnswer: 1,
          explanation: "Normal resting pulse for adults ranges from 60 to 100 beats per minute."
        },
        {
          id: 4,
          question: "How do you count respirations accurately?",
          options: [
            "Ask patient to count their own breaths",
            "Count without patient knowing",
            "Only count when patient is asleep",
            "Estimate based on pulse rate"
          ],
          correctAnswer: 1,
          explanation: "Patients may change their breathing if they know you're counting, so observe discreetly."
        },
        {
          id: 5,
          question: "What is considered normal blood pressure?",
          options: [
            "90/60 mmHg",
            "120/80 mmHg",
            "140/90 mmHg",
            "160/100 mmHg"
          ],
          correctAnswer: 1,
          explanation: "Around 120/80 mmHg is considered normal blood pressure for adults."
        },
        {
          id: 6,
          question: "When should you report a temperature reading?",
          options: [
            "Only if above 104°F",
            "Above 100.4°F or below 96.8°F",
            "Every temperature reading",
            "Only if patient complains"
          ],
          correctAnswer: 1,
          explanation: "Temperatures outside the normal range (above 100.4°F or below 96.8°F) should be reported."
        },
        {
          id: 7,
          question: "Which finger should you NOT use to feel a pulse?",
          options: [
            "Index finger",
            "Middle finger",
            "Ring finger",
            "Thumb"
          ],
          correctAnswer: 3,
          explanation: "The thumb has its own pulse which might be confused with the patient's pulse."
        },
        {
          id: 8,
          question: "What is normal breathing rate for adults?",
          options: [
            "8-10 breaths per minute",
            "12-20 breaths per minute",
            "22-30 breaths per minute",
            "Over 30 breaths per minute"
          ],
          correctAnswer: 1,
          explanation: "Adults normally breathe 12-20 times per minute at rest."
        },
        {
          id: 9,
          question: "How should you adjust an armpit temperature reading?",
          options: [
            "Subtract 1°F",
            "Add 1°F",
            "No adjustment needed",
            "Multiply by 1.1"
          ],
          correctAnswer: 1,
          explanation: "Armpit temperatures are about 1°F lower than core body temperature, so add 1°F to the reading."
        },
        {
          id: 10,
          question: "What does the systolic blood pressure number represent?",
          options: [
            "Pressure when heart rests",
            "Pressure when heart beats",
            "Average pressure all day",
            "Pressure in veins only"
          ],
          correctAnswer: 1,
          explanation: "Systolic pressure is the pressure when the heart contracts and pumps blood."
        },
        {
          id: 11,
          question: "Why establish baseline vital signs?",
          options: [
            "To compare against future measurements",
            "For insurance documentation only",
            "To set strict normal ranges",
            "To impress the doctor"
          ],
          correctAnswer: 0,
          explanation: "Knowing a patient's normal baseline helps identify meaningful changes in their condition."
        },
        {
          id: 12,
          question: "What should you note about pulse besides rate?",
          options: [
            "Only the speed",
            "Strength and regularity",
            "Comparison to others",
            "Time of day only"
          ],
          correctAnswer: 1,
          explanation: "Pulse strength (weak or strong) and regularity (steady or irregular) provide important information."
        },
        {
          id: 13,
          question: "When is the best time to measure blood pressure?",
          options: [
            "After heavy exercise",
            "When patient is rested",
            "Right after eating",
            "During stressful events"
          ],
          correctAnswer: 1,
          explanation: "Resting blood pressure gives the most accurate baseline measurement."
        },
        {
          id: 14,
          question: "How do you count pulse for irregular heartbeats?",
          options: [
            "Count for 15 seconds only",
            "Count for full minute",
            "Estimate quickly",
            "Use electronic device only"
          ],
          correctAnswer: 1,
          explanation: "For irregular pulses, counting for a full minute provides a more accurate rate."
        },
        {
          id: 15,
          question: "What should you document with vital signs?",
          options: [
            "Only the numbers",
            "Date, time, and relevant notes",
            "Patient's mood only",
            "Family member's comments"
          ],
          correctAnswer: 1,
          explanation: "Accurate documentation includes date, time, measurements, and any relevant observations."
        },
        {
          id: 16,
          question: "What temperature method is quick and comfortable?",
          options: [
            "Rectal temperature",
            "Forehead temporal artery",
            "Oral after ice water",
            "Armpit with heavy clothing"
          ],
          correctAnswer: 1,
          explanation: "Temporal artery (forehead) thermometers are quick, non-invasive, and comfortable for most patients."
        },
        {
          id: 17,
          question: "What indicates hypertension?",
          options: [
            "90/60 mmHg",
            "120/80 mmHg",
            "140/90 mmHg or higher",
            "Any reading that varies"
          ],
          correctAnswer: 2,
          explanation: "Blood pressure of 140/90 mmHg or higher is generally considered hypertensive."
        },
        {
          id: 18,
          question: "Why use same arm for blood pressure measurements?",
          options: [
            "For consistency in readings",
            "Because one arm is always better",
            "To save time switching",
            "Medical tradition only"
          ],
          correctAnswer: 0,
          explanation: "Using the same arm each time provides consistent comparison points."
        },
        {
          id: 19,
          question: "What should you observe about breathing?",
          options: [
            "Only the rate",
            "If it's easy or labored",
            "Patient's thoughts about it",
            "Comparison to others"
          ],
          correctAnswer: 1,
          explanation: "Noting whether breathing is easy or difficult provides important clinical information."
        },
        {
          id: 20,
          question: "What is diastolic blood pressure?",
          options: [
            "Pressure when heart beats",
            "Pressure when heart rests",
            "Maximum pressure possible",
            "Pressure in lungs only"
          ],
          correctAnswer: 1,
          explanation: "Diastolic pressure is the pressure when the heart is at rest between beats."
        }
      ]
    },

    // MODULE 4: Medication Safety
    {
      id: 4,
      title: "Medication Safety",
      content: `
# Safe Medication Practices at Home

Proper medication management prevents errors and ensures treatment effectiveness. Home nurses play a crucial role in medication safety.

## Understanding Medications

Know the basics about each medication:
**Name** - Both brand and generic names
**Purpose** - What condition it treats
**Dosage** - How much to take
**Timing** - When to take it
**Route** - How to take it (oral, topical, etc.)
**Side Effects** - What to watch for

Keep a current medication list including prescriptions, over-the-counter drugs, vitamins, and supplements. Update this list whenever changes occur.

## Administration Basics

Follow the "Five Rights" of medication administration:
1. **Right Patient** - Confirm identity before giving any medication
2. **Right Medication** - Check label three times: when taking from storage, when preparing, and when administering
3. **Right Dose** - Measure accurately using proper tools
4. **Right Route** - Administer correctly (oral, topical, etc.)
5. **Right Time** - Give at prescribed intervals

Never crush or break tablets unless instructed by pharmacist. Some medications have special coatings for timed release.

## Storage and Organization

Store medications properly:
- Keep in original containers with labels intact
- Store at room temperature unless refrigeration needed
- Keep away from heat, moisture, and direct sunlight
- Store out of reach of children and pets
- Do not store in bathroom medicine cabinet (humidity affects drugs)

Use pill organizers only if patient can manage them safely. Check expiration dates monthly and dispose of expired medications properly.

## Medication Reminders and Supervision

Help patients remember to take medications:
- Establish routines linked to daily activities
- Use alarms or reminder apps
- Keep medication schedule visible
- Prepare weekly pill boxes if appropriate

When supervising medication intake:
- Watch patient take the medication
- Ensure they swallow completely
- Do not leave medications at bedside for later
- Document administration immediately

## Recognizing and Reporting Issues

Watch for potential problems:
**Side Effects** - Expected but manageable reactions
**Adverse Reactions** - Unexpected harmful reactions
**Interactions** - When medications affect each other
**Allergic Reactions** - Rash, swelling, breathing difficulty

Report immediately:
- Missed doses
- Extra doses taken
- New symptoms after starting medication
- Suspected reactions or interactions

## Documentation

Record each medication given:
- Date and time
- Medication name and dose
- Who administered it
- Patient response or refusal
- Any concerns noted

Accurate documentation creates a safety record and helps other caregivers provide consistent care.
`,
      completed: false,
      quiz: [
        {
          id: 1,
          question: "What are the Five Rights of medication administration?",
          options: [
            "Right patient, medication, dose, route, time",
            "Right color, size, shape, smell, taste",
            "Right doctor, pharmacy, insurance, cost, brand",
            "Right time of day, mood, location, assistant, documentation"
          ],
          correctAnswer: 0,
          explanation: "The Five Rights ensure medication safety: right patient, medication, dose, route, and time."
        },
        {
          id: 2,
          question: "When should you check medication labels?",
          options: [
            "Only when first opening",
            "Three times: taking, preparing, administering",
            "When patient asks",
            "At the end of the day"
          ],
          correctAnswer: 1,
          explanation: "Checking three times reduces errors: when taking from storage, when preparing, and when administering."
        },
        {
          id: 3,
          question: "Where should medications NOT be stored?",
          options: [
            "In bathroom medicine cabinet",
            "In a cool, dry place",
            "In original containers",
            "Away from sunlight"
          ],
          correctAnswer: 0,
          explanation: "Bathrooms have humidity that can damage medications, making them less effective."
        },
        {
          id: 4,
          question: "What should be included on a medication list?",
          options: [
            "Only prescription drugs",
            "Prescriptions, over-the-counter drugs, vitamins, supplements",
            "Only medications taken daily",
            "Only expensive medications"
          ],
          correctAnswer: 1,
          explanation: "A complete list includes all substances taken, as even supplements can interact with medications."
        },
        {
          id: 5,
          question: "When can you crush tablets?",
          options: [
            "Whenever it's easier for the patient",
            "Only if instructed by pharmacist",
            "For all elderly patients",
            "When patient has difficulty swallowing"
          ],
          correctAnswer: 1,
          explanation: "Some medications have special coatings or formulations that crushing would disrupt, potentially causing harm."
        },
        {
          id: 6,
          question: "What should you do when supervising medication intake?",
          options: [
            "Leave medications for later",
            "Watch patient take and swallow completely",
            "Just remind them verbally",
            "Assume they'll remember"
          ],
          correctAnswer: 1,
          explanation: "Direct observation ensures the medication is taken correctly and completely."
        },
        {
          id: 7,
          question: "How often should you check expiration dates?",
          options: [
            "Yearly",
            "Monthly",
            "Only when bottle is empty",
            "When medication looks different"
          ],
          correctAnswer: 1,
          explanation: "Monthly checks ensure medications are still effective and safe to use."
        },
        {
          id: 8,
          question: "What is an adverse reaction?",
          options: [
            "Expected side effect",
            "Unexpected harmful reaction",
            "Mild discomfort",
            "Sign medication is working"
          ],
          correctAnswer: 1,
          explanation: "Adverse reactions are unexpected and potentially harmful responses to medication."
        },
        {
          id: 9,
          question: "What should you document after medication administration?",
          options: [
            "Only the time given",
            "Date, time, medication, dose, who gave it, patient response",
            "Patient's mood only",
            "How many pills left"
          ],
          correctAnswer: 1,
          explanation: "Complete documentation creates a safety record and helps coordinate care among providers."
        },
        {
          id: 10,
          question: "Why establish medication routines?",
          options: [
            "To make life boring",
            "To help patients remember",
            "To please doctors only",
            "To reduce medication costs"
          ],
          correctAnswer: 1,
          explanation: "Routines linked to daily activities help patients remember to take medications consistently."
        },
        {
          id: 11,
          question: "What should be reported immediately?",
          options: [
            "Minor schedule changes",
            "Missed doses or extra doses taken",
            "Normal side effects",
            "Medication refill needs"
          ],
          correctAnswer: 1,
          explanation: "Missed or extra doses can affect treatment effectiveness and safety."
        },
        {
          id: 12,
          question: "What do pill organizers help with?",
          options: [
            "Making medications cheaper",
            "Organization and remembering doses",
            "Hiding medications from others",
            "Keeping medications sterile"
          ],
          correctAnswer: 1,
          explanation: "Pill organizers help patients and caregivers track what medications to take and when."
        },
        {
          id: 13,
          question: "What is a medication interaction?",
          options: [
            "When medications work better together",
            "When medications affect each other's actions",
            "When patient likes their medications",
            "When medications are the same color"
          ],
          correctAnswer: 1,
          explanation: "Interactions occur when medications affect how each other works, potentially increasing or decreasing effectiveness."
        },
        {
          id: 14,
          question: "How should medications be stored?",
          options: [
            "In direct sunlight",
            "Away from heat and moisture",
            "Mixed together to save space",
            "Where children can reach easily"
          ],
          correctAnswer: 1,
          explanation: "Proper storage away from heat, light, and moisture maintains medication effectiveness and safety."
        },
        {
          id: 15,
          question: "What is the right route?",
          options: [
            "Fastest way to give medication",
            "Correct method of administration",
            "Shortest path to pharmacy",
            "Easiest method for caregiver"
          ],
          correctAnswer: 1,
          explanation: "The right route means giving medication the way it's intended (oral, topical, etc.) for proper absorption."
        },
        {
          id: 16,
          question: "What should you do with expired medications?",
          options: [
            "Use them anyway",
            "Dispose of properly",
            "Save for emergencies",
            "Give to someone else"
          ],
          correctAnswer: 1,
          explanation: "Expired medications may be less effective or potentially harmful and should be disposed of safely."
        },
        {
          id: 17,
          question: "Why keep medications in original containers?",
          options: [
            "For pretty packaging",
            "To maintain labels and instructions",
            "To take up more space",
            "Because pharmacies require it"
          ],
          correctAnswer: 1,
          explanation: "Original containers have important information like dosage instructions, expiration dates, and warnings."
        },
        {
          id: 18,
          question: "What is an allergic reaction sign?",
          options: [
            "Mild headache",
            "Rash, swelling, breathing difficulty",
            "Sleepiness after taking",
            "Improved condition"
          ],
          correctAnswer: 1,
          explanation: "Allergic reactions can include skin reactions, swelling, or breathing problems and require immediate attention."
        },
        {
          id: 19,
          question: "Why document medication refusal?",
          options: [
            "To punish the patient",
            "To track patterns and concerns",
            "To reduce paperwork",
            "Only if doctor asks"
          ],
          correctAnswer: 1,
          explanation: "Documenting refusals helps identify patterns, concerns, or problems with medications."
        },
        {
          id: 20,
          question: "What should reminders be linked to?",
          options: [
            "Complex schedules only",
            "Daily activities and routines",
            "Weather changes",
            "TV show times"
          ],
          correctAnswer: 1,
          explanation: "Linking to daily activities (like meals or bedtime) makes reminders more natural and easier to remember."
        }
      ]
    },

    // MODULE 5: Emergency Response
    {
      id: 5,
      title: "Emergency Response",
      content: `
# Handling Emergencies in Home Settings

Being prepared for emergencies saves lives. Home nurses must know how to recognize emergencies and respond appropriately.

## Recognizing Emergency Situations

Learn to identify signs that need immediate attention:

**Breathing Emergencies** - Difficulty breathing, choking, stopped breathing
**Cardiac Emergencies** - Chest pain, irregular heartbeat, cardiac arrest
**Neurological Emergencies** - Sudden weakness, confusion, severe headache, loss of consciousness
**Traumatic Emergencies** - Falls with injury, severe bleeding, broken bones
**Medical Emergencies** - Severe allergic reactions, high fever, uncontrolled bleeding

When in doubt, treat the situation as an emergency. It's better to call for help unnecessarily than to delay needed care.

## First Response Steps

Follow these steps for any emergency:

1. **Assess Safety** - Check if scene is safe for you and patient
2. **Check Responsiveness** - Gently tap and ask "Are you okay?"
3. **Call for Help** - Dial emergency number or call supervisor
4. **Provide Care** - Give appropriate first aid while waiting for help
5. **Comfort and Monitor** - Stay with patient, keep them calm

Always prioritize your own safety. You cannot help if you become another victim.

## Common Home Emergencies

**Falls** - Do not move patient unless in immediate danger. Check for injuries. Call for help if head injury, broken bone, or inability to move.

**Choking** - For conscious adults: perform Heimlich maneuver. For unconscious: begin CPR. For infants: use back blows and chest thrusts.

**Bleeding** - Apply direct pressure with clean cloth. Elevate injured area if possible. Do not remove soaked cloths - add more on top.

**Burns** - Cool with running water for 10-20 minutes. Cover with clean, non-stick dressing. Do not apply ice, butter, or ointments.

**Seizures** - Move dangerous objects away. Place patient on side after seizure ends. Time the seizure. Do not restrain or put anything in mouth.

## Calling for Help

When calling emergency services:
- Speak clearly and calmly
- Give exact address with landmarks
- Describe the emergency
- Report number of people involved
- Mention any special circumstances
- Follow dispatcher's instructions
- Do not hang up until told to do so

Keep emergency numbers posted by every phone and programmed into mobile phones.

## Preparing an Emergency Kit

Every home should have:
- First aid supplies (bandages, gauze, tape, antiseptic)
- Flashlight with extra batteries
- Emergency blanket
- List of medications and allergies
- Copy of important documents
- Bottled water
- Whistle to signal for help

Check and replenish supplies every six months. Know where everything is located.

## After Emergency Care

Document everything that happened:
- Time emergency began
- Symptoms observed
- Actions taken
- Who was notified
- Response times
- Patient outcome

This documentation helps medical professionals continue care and improves future emergency responses.
`,
      completed: false,
      quiz: [
        {
          id: 1,
          question: "What is the first step in any emergency?",
          options: [
            "Call for help immediately",
            "Assess safety of the scene",
            "Start CPR right away",
            "Document what happened"
          ],
          correctAnswer: 1,
          explanation: "Ensuring the scene is safe protects you from becoming another victim before you can help."
        },
        {
          id: 2,
          question: "How do you check for responsiveness?",
          options: [
            "Shake violently and shout",
            "Gently tap and ask 'Are you okay?'",
            "Check pulse only",
            "Splash water on face"
          ],
          correctAnswer: 1,
          explanation: "A gentle tap and verbal check determines consciousness without causing potential injury."
        },
        {
          id: 3,
          question: "What should you do for a fall victim?",
          options: [
            "Immediately help them stand",
            "Do not move unless in immediate danger",
            "Give them water first",
            "Wait to see if they get up"
          ],
          correctAnswer: 1,
          explanation: "Moving someone with potential spinal or bone injuries can cause further damage."
        },
        {
          id: 4,
          question: "How long should you cool a burn?",
          options: [
            "1-2 minutes",
            "10-20 minutes with running water",
            "Until ice melts",
            "Until pain stops"
          ],
          correctAnswer: 1,
          explanation: "Cooling for 10-20 minutes with running water helps reduce damage and pain."
        },
        {
          id: 5,
          question: "What information should you give when calling emergency services?",
          options: [
            "Only the address",
            "Exact address, emergency description, number of people",
            "Your life story",
            "Only what the dispatcher asks for"
          ],
          correctAnswer: 1,
          explanation: "Providing complete information helps dispatchers send appropriate help quickly."
        },
        {
          id: 6,
          question: "What should you do during a seizure?",
          options: [
            "Restrain the person",
            "Put something in their mouth",
            "Move dangerous objects away",
            "Pour water on them"
          ],
          correctAnswer: 2,
          explanation: "Moving objects prevents injury; restraining or putting objects in the mouth can cause harm."
        },
        {
          id: 7,
          question: "How often should you check emergency supplies?",
          options: [
            "Every six months",
            "Once a year",
            "Only when used",
            "When you remember"
          ],
          correctAnswer: 0,
          explanation: "Regular checks every six months ensure supplies are available and in good condition when needed."
        },
        {
          id: 8,
          question: "What should you do with soaked bleeding dressings?",
          options: [
            "Remove and replace them",
            "Add more dressings on top",
            "Wash and reuse them",
            "Ignore them if bleeding stopped"
          ],
          correctAnswer: 1,
          explanation: "Removing soaked dressings can disrupt clotting; adding more maintains pressure."
        },
        {
          id: 9,
          question: "Why should you not hang up when calling emergency services?",
          options: [
            "To keep the line busy",
            "The dispatcher may have instructions",
            "To complain about wait times",
            "To chat about the weather"
          ],
          correctAnswer: 1,
          explanation: "Dispatchers provide important instructions and may need additional information."
        },
        {
          id: 10,
          question: "What is included in an emergency kit?",
          options: [
            "Only bandages",
            "First aid supplies, flashlight, emergency blanket, documents",
            "Entertainment items only",
            "Expensive medical equipment"
          ],
          correctAnswer: 1,
          explanation: "A complete emergency kit has essentials for immediate care and information."
        },
        {
          id: 11,
          question: "What should you do for choking in conscious adults?",
          options: [
            "Perform Heimlich maneuver",
            "Give water to drink",
            "Pat gently on back",
            "Wait to see if it resolves"
          ],
          correctAnswer: 0,
          explanation: "The Heimlich maneuver (abdominal thrusts) can dislodge obstructions in conscious choking victims."
        },
        {
          id: 12,
          question: "What should you document after an emergency?",
          options: [
            "Only the outcome",
            "Time, symptoms, actions, notifications, outcome",
            "Your feelings about it",
            "What you wish you had done"
          ],
          correctAnswer: 1,
          explanation: "Complete documentation helps medical professionals and improves future responses."
        },
        {
          id: 13,
          question: "Why prioritize your own safety first?",
          options: [
            "Because you're more important",
            "You cannot help if you become another victim",
            "To avoid legal responsibility",
            "It's easier to stay safe"
          ],
          correctAnswer: 1,
          explanation: "A safe rescuer can provide help; an injured rescver becomes part of the problem."
        },
        {
          id: 14,
          question: "What should you NOT put on a burn?",
          options: [
            "Cool running water",
            "Clean non-stick dressing",
            "Ice, butter, or ointments",
            "Loose dry covering"
          ],
          correctAnswer: 2,
          explanation: "Ice can cause frostbite; butter and ointments can trap heat and cause infection."
        },
        {
          id: 15,
          question: "How should you position someone after a seizure?",
          options: [
            "On their back",
            "On their side",
            "Sitting upright",
            "In whatever position they fell"
          ],
          correctAnswer: 1,
          explanation: "The recovery position (on side) helps keep airway clear and prevents choking."
        },
        {
          id: 16,
          question: "What does a whistle in an emergency kit help with?",
          options: [
            "Entertainment",
            "Signaling for help",
            "Scaring animals",
            "Measuring time"
          ],
          correctAnswer: 1,
          explanation: "A whistle carries farther than voice and requires less energy when signaling for help."
        },
        {
          id: 17,
          question: "When should you treat a situation as an emergency?",
          options: [
            "Only if definitely life-threatening",
            "When in doubt",
            "Never without doctor's permission",
            "Only during business hours"
          ],
          correctAnswer: 1,
          explanation: "When uncertain, it's safer to treat as an emergency than to delay potentially life-saving care."
        },
        {
          id: 18,
          question: "What should be posted by every phone?",
          options: [
            "Family photos",
            "Emergency numbers",
            "Shopping lists",
            "Daily schedules"
          ],
          correctAnswer: 1,
          explanation: "Visible emergency numbers ensure quick access during stressful situations."
        },
        {
          id: 19,
          question: "What should you do while waiting for emergency help?",
          options: [
            "Leave to get supplies",
            "Stay with patient, provide comfort and care",
            "Clean up the area",
            "Call family members first"
          ],
          correctAnswer: 1,
          explanation: "Staying with the patient allows you to monitor changes and provide comfort and basic care."
        },
        {
          id: 20,
          question: "What is a neurological emergency sign?",
          options: [
            "Mild headache",
            "Sudden weakness or confusion",
            "Tiredness after activity",
            "Normal forgetfulness"
          ],
          correctAnswer: 1,
          explanation: "Sudden neurological changes like weakness, confusion, or severe headache need immediate attention."
        }
      ]
    },

    // MODULE 6: Communication and Documentation
    {
      id: 6,
      title: "Communication and Documentation",
      content: `
# Effective Communication in Home Nursing

Clear communication ensures quality care and patient safety. Home nurses communicate with patients, families, and healthcare teams.

## Communicating with Patients

Effective patient communication involves:
**Active Listening** - Give full attention, make eye contact, don't interrupt
**Clear Explanations** - Use simple language, check understanding
**Respectful Tone** - Speak calmly, maintain dignity
**Non-Verbal Cues** - Pay attention to body language, facial expressions
**Cultural Sensitivity** - Respect different backgrounds and beliefs

Adjust your communication style to the patient's needs. Some may need more explanation, others prefer brief instructions.

## Family Communication

Families are often involved in home care. Effective family communication includes:
**Regular Updates** - Share important information without violating privacy
**Clear Instructions** - Explain care needs they can help with
**Setting Boundaries** - Clarify your role versus family responsibilities
**Emotional Support** - Acknowledge family stress and concerns
**Education** - Teach family how to assist safely

Include family in care planning when appropriate, but maintain patient confidentiality.

## Healthcare Team Communication

Coordinate with other professionals:
**Doctors** - Report changes, clarify orders, ask questions
**Pharmacists** - Discuss medications, ask about interactions
**Therapists** - Coordinate rehabilitation efforts
**Other Nurses** - Share care information during shift changes

Use clear, professional language. Be concise but complete. Document all communications.

## Documentation Essentials

Accurate documentation is a legal requirement and care tool. Document:
**Care Provided** - What you did, when, and patient response
**Observations** - Changes in condition, concerns noted
**Communications** - Discussions with patient, family, healthcare team
**Incidents** - Any accidents, errors, or unusual events
**Refusals** - If patient refuses care or medications

Write clearly and objectively. Use facts, not opinions. Sign and date all entries.

## Reporting Changes

Know what to report and when:
**Immediate Reporting** - Emergency situations, significant condition changes
**Same-Day Reporting** - New symptoms, medication issues, family concerns
**Routine Reporting** - Progress updates, care plan reviews

Use appropriate channels: phone for urgent matters, written reports for routine updates.

## Confidentiality and Privacy

Protect patient information:
**HIPAA Compliance** - Follow privacy regulations
**Secure Storage** - Keep records in safe location
**Limited Sharing** - Only share with involved healthcare team
**Disposal** - Shred documents when no longer needed

Never discuss patients in public areas or with unauthorized people.

## Conflict Resolution

Handle disagreements professionally:
**Listen First** - Understand all perspectives
**Stay Calm** - Keep emotions controlled
**Focus on Solutions** - Work toward common goals
**Involve Supervisor** - When unable to resolve independently
**Document** - Record the issue and resolution

Most conflicts arise from misunderstandings or stress. Clear communication often resolves them.

## Cultural Competence

Work effectively with diverse patients:
**Learn About Cultures** - Understand different health beliefs and practices
**Use Interpreters** - When language barriers exist
**Respect Traditions** - Accommodate reasonable cultural requests
**Ask Questions** - Clarify preferences respectfully
**Avoid Assumptions** - Don't stereotype based on background

Cultural competence improves care quality and patient satisfaction.
`,
      completed: false,
      quiz: [
        {
          id: 1,
          question: "What is active listening?",
          options: [
            "Thinking about your response while they talk",
            "Giving full attention, making eye contact, not interrupting",
            "Correcting mistakes immediately",
            "Finishing their sentences for them"
          ],
          correctAnswer: 1,
          explanation: "Active listening involves complete focus on the speaker to understand their message fully."
        },
        {
          id: 2,
          question: "How should you explain care instructions?",
          options: [
            "Using complex medical terms",
            "Simple language, checking understanding",
            "Quickly to save time",
            "Only once without repetition"
          ],
          correctAnswer: 1,
          explanation: "Clear explanations in simple language with understanding checks ensure instructions are followed correctly."
        },
        {
          id: 3,
          question: "What should family communication include?",
          options: [
            "All patient details regardless of privacy",
            "Regular updates without violating privacy",
            "Only positive information",
            "Criticism of their caregiving"
          ],
          correctAnswer: 1,
          explanation: "Families need relevant information to participate in care while respecting patient privacy rights."
        },
        {
          id: 4,
          question: "What is essential in documentation?",
          options: [
            "Writing opinions and guesses",
            "Clear, objective facts",
            "Only positive observations",
            "What you think should have happened"
          ],
          correctAnswer: 1,
          explanation: "Documentation should record facts objectively to provide an accurate care record."
        },
        {
          id: 5,
          question: "When should you report immediately?",
          options: [
            "Minor schedule changes",
            "Emergency situations",
            "All observations",
            "Only at shift end"
          ],
          correctAnswer: 1,
          explanation: "Emergency situations and significant changes require immediate reporting for patient safety."
        },
        {
          id: 6,
          question: "What does HIPAA protect?",
          options: [
            "Only medical diagnoses",
            "Patient privacy and information",
            "Healthcare costs",
            "Hospital policies"
          ],
          correctAnswer: 1,
          explanation: "HIPAA regulations protect patient privacy and control how health information is shared."
        },
        {
          id: 7,
          question: "How handle conflicts professionally?",
          options: [
            "Ignore them hoping they resolve",
            "Listen first, stay calm, focus on solutions",
            "Argue until you win",
            "Complain to others about the person"
          ],
          correctAnswer: 1,
          explanation: "Professional conflict resolution addresses issues directly and respectfully to find solutions."
        },
        {
          id: 8,
          question: "What is cultural competence?",
          options: [
            "Speaking multiple languages",
            "Working effectively with diverse patients",
            "Knowing all world cultures",
            "Traveling to different countries"
          ],
          correctAnswer: 1,
          explanation: "Cultural competence involves understanding and respecting different backgrounds to provide appropriate care."
        },
        {
          id: 9,
          question: "What should you document about care?",
          options: [
            "Only medications given",
            "Care provided, observations, communications, incidents",
            "Your personal opinions",
            "What you plan to do tomorrow"
          ],
          correctAnswer: 1,
          explanation: "Complete documentation includes what was done, observed, discussed, and any unusual events."
        },
        {
          id: 10,
          question: "When should you use an interpreter?",
          options: [
            "Only for complex medical terms",
            "When language barriers exist",
            "To save time explaining",
            "When patient seems confused"
          ],
          correctAnswer: 1,
          explanation: "Professional interpreters ensure accurate communication when language differences exist."
        },
        {
          id: 11,
          question: "How maintain patient confidentiality?",
          options: [
            "Discuss in public but quietly",
            "Only share with involved healthcare team",
            "Tell family everything",
            "Share interesting cases with friends"
          ],
          correctAnswer: 1,
          explanation: "Patient information should only be shared with those directly involved in their care."
        },
        {
          id: 12,
          question: "What is respectful tone in communication?",
          options: [
            "Speaking loudly and clearly",
            "Calm speech maintaining dignity",
            "Using technical terms",
            "Being very formal always"
          ],
          correctAnswer: 1,
          explanation: "A respectful tone shows consideration for the patient's feelings and maintains their dignity."
        },
        {
          id: 13,
          question: "Why document patient refusals?",
          options: [
            "To punish the patient",
            "To track patterns and legal protection",
            "To complain about non-compliance",
            "Only if supervisor asks"
          ],
          correctAnswer: 1,
          explanation: "Documenting refusals creates a record of patient choices and protects legally."
        },
        {
          id: 14,
          question: "What should you do with old patient records?",
          options: [
            "Throw in regular trash",
            "Shred when no longer needed",
            "Keep forever just in case",
            "Give to patient's family"
          ],
          correctAnswer: 1,
          explanation: "Secure disposal (shredding) protects patient privacy when records are no longer needed."
        },
        {
          id: 15,
          question: "How adjust communication style?",
          options: [
            "Use same style for everyone",
            "Based on patient's needs and abilities",
            "Based on your mood",
            "How you were trained only"
          ],
          correctAnswer: 1,
          explanation: "Adapting communication to individual needs ensures better understanding and cooperation."
        },
        {
          id: 16,
          question: "What does cultural sensitivity involve?",
          options: [
            "Ignoring cultural differences",
            "Respecting different backgrounds and beliefs",
            "Converting others to your beliefs",
            "Only caring for people like you"
          ],
          correctAnswer: 1,
          explanation: "Cultural sensitivity means acknowledging and respecting differences in beliefs and practices."
        },
        {
          id: 17,
          question: "Why coordinate with other healthcare professionals?",
          options: [
            "To reduce your workload",
            "For comprehensive, consistent care",
            "To make friends at work",
            "Because regulations require it"
          ],
          correctAnswer: 1,
          explanation: "Coordination ensures all care providers work together for the patient's benefit."
        },
        {
          id: 18,
          question: "What should you avoid in documentation?",
          options: [
            "Facts and observations",
            "Opinions and guesses",
            "Dates and times",
            "Patient responses"
          ],
          correctAnswer: 1,
          explanation: "Documentation should stick to observable facts rather than personal opinions or assumptions."
        },
        {
          id: 19,
          question: "How include family in care appropriately?",
          options: [
            "Let them do everything",
            "Include in planning while maintaining patient confidentiality",
            "Exclude them completely",
            "Only during emergencies"
          ],
          correctAnswer: 1,
          explanation: "Balancing family involvement with patient privacy ensures supportive care while respecting rights."
        },
        {
          id: 20,
          question: "What is professional communication?",
          options: [
            "Using slang and abbreviations",
            "Clear, concise, complete information",
            "Only verbal communication",
            "Avoiding all difficult topics"
          ],
          correctAnswer: 1,
          explanation: "Professional communication provides necessary information clearly and respectfully to all involved parties."
        }
      ]
    }
  ],

  // 3. FINAL EXAM (40 Questions from all modules)
  finalExam: {
    title: "Home Nursing Certificate Final Examination",
    description: "Comprehensive exam covering all 6 modules of the Home Nursing Certificate course.",
    passingScore: 70,
    questions: [
      // Questions from Module 1
      {
        id: 1,
        question: "What is the primary goal of home nursing?",
        options: [
          "To replace hospital care completely",
          "To help patients maintain independence while receiving care",
          "To provide only medical treatments",
          "To reduce healthcare costs"
        ],
        correctAnswer: 1,
        explanation: "Home nursing helps patients stay in their familiar environment while receiving professional care.",
        module: 1
      },
      {
        id: 2,
        question: "What is the most important concern in home nursing?",
        options: [
          "Cost reduction",
          "Patient safety",
          "Family convenience",
          "Quick completion of tasks"
        ],
        correctAnswer: 1,
        explanation: "Patient safety is always the top priority in all nursing care settings.",
        module: 1
      },
      {
        id: 3,
        question: "Which safety measure helps prevent bathroom accidents?",
        options: [
          "Decorative rugs",
          "Scented candles",
          "Installing grab bars",
          "Keeping doors locked"
        ],
        correctAnswer: 2,
        explanation: "Grab bars provide stability and support in wet bathroom environments.",
        module: 1
      },

      // Questions from Module 2
      {
        id: 4,
        question: "How often should bedridden patients change positions?",
        options: [
          "Once per shift",
          "Every two hours",
          "When they complain",
          "Four times daily"
        ],
        correctAnswer: 1,
        explanation: "Regular position changes prevent pressure sores and improve circulation.",
        module: 2
      },
      {
        id: 5,
        question: "What should you do after toileting assistance?",
        options: [
          "Continue with next task",
          "Wash hands thoroughly",
          "Document immediately",
          "Take a break"
        ],
        correctAnswer: 1,
        explanation: "Handwashing prevents spread of infection and maintains hygiene standards.",
        module: 2
      },
      {
        id: 6,
        question: "Why is skin care monitoring important?",
        options: [
          "For cosmetic appearance",
          "To prevent pressure sores and infections",
          "To satisfy insurance requirements",
          "To reduce lotion use"
        ],
        correctAnswer: 1,
        explanation: "Regular skin checks detect early signs of problems needing intervention.",
        module: 2
      },

      // Questions from Module 3
      {
        id: 7,
        question: "What is normal adult resting pulse rate?",
        options: [
          "40-60 bpm",
          "60-100 bpm",
          "100-120 bpm",
          "120-140 bpm"
        ],
        correctAnswer: 1,
        explanation: "60-100 beats per minute is the normal range for adult resting pulse.",
        module: 3
      },
      {
        id: 8,
        question: "What temperature should be reported?",
        options: [
          "Only above 104°F",
          "Above 100.4°F or below 96.8°F",
          "Every temperature reading",
          "Only if patient feels feverish"
        ],
        correctAnswer: 1,
        explanation: "Temperatures outside normal range indicate potential health issues.",
        module: 3
      },
      {
        id: 9,
        question: "What is normal blood pressure?",
        options: [
          "90/60 mmHg",
          "120/80 mmHg",
          "140/90 mmHg",
          "160/100 mmHg"
        ],
        correctAnswer: 1,
        explanation: "Around 120/80 mmHg is considered normal blood pressure.",
        module: 3
      },

      // Questions from Module 4
      {
        id: 10,
        question: "What are the Five Rights of medication administration?",
        options: [
          "Right time, place, person, dose, medication",
          "Right patient, medication, dose, route, time",
          "Right color, shape, size, smell, taste",
          "Right doctor, pharmacy, cost, brand, instructions"
        ],
        correctAnswer: 1,
        explanation: "The Five Rights ensure medication safety and prevent errors.",
        module: 4
      },
      {
        id: 11,
        question: "When should you check medication labels?",
        options: [
          "Once when opening",
          "Three times: taking, preparing, administering",
          "Only if unfamiliar medication",
          "At the beginning of shift only"
        ],
        correctAnswer: 1,
        explanation: "Checking three times reduces medication errors significantly.",
        module: 4
      },
      {
        id: 12,
        question: "What should be included on a medication list?",
        options: [
          "Only prescription drugs",
          "All substances: prescriptions, OTC, vitamins, supplements",
          "Only medications taken daily",
          "Only controlled substances"
        ],
        correctAnswer: 1,
        explanation: "A complete medication list helps prevent interactions and ensures comprehensive care.",
        module: 4
      },

      // Questions from Module 5
      {
        id: 13,
        question: "What is the first step in any emergency?",
        options: [
          "Call for help",
          "Start CPR",
          "Assess scene safety",
          "Check responsiveness"
        ],
        correctAnswer: 2,
        explanation: "Ensuring your own safety allows you to help others effectively.",
        module: 5
      },
      {
        id: 14,
        question: "How long should you cool a burn?",
        options: [
          "1-2 minutes",
          "10-20 minutes with running water",
          "Until ice melts",
          "Until blister forms"
        ],
        correctAnswer: 1,
        explanation: "Proper cooling reduces tissue damage and pain.",
        module: 5
      },
      {
        id: 15,
        question: "What should you do during a seizure?",
        options: [
          "Restrain the person",
          "Put something in their mouth",
          "Move dangerous objects away",
          "Pour water on their face"
        ],
        correctAnswer: 2,
        explanation: "Creating a safe environment prevents injury during seizures.",
        module: 5
      },

      // Questions from Module 6
      {
        id: 16,
        question: "What is active listening?",
        options: [
          "Thinking about your response",
          "Giving full attention without interrupting",
          "Correcting mistakes immediately",
          "Finishing their sentences"
        ],
        correctAnswer: 1,
        explanation: "Active listening demonstrates respect and ensures understanding.",
        module: 6
      },
      {
        id: 17,
        question: "What should documentation include?",
        options: [
          "Opinions and guesses",
          "Clear, objective facts",
          "Only positive observations",
          "What should have happened"
        ],
        correctAnswer: 1,
        explanation: "Objective documentation provides an accurate care record.",
        module: 6
      },
      {
        id: 18,
        question: "What does HIPAA protect?",
        options: [
          "Healthcare costs",
          "Patient privacy and information",
          "Hospital policies",
          "Medical equipment"
        ],
        correctAnswer: 1,
        explanation: "HIPAA ensures patient information remains confidential.",
        module: 6
      },

      // Additional mixed questions
      {
        id: 19,
        question: "What helps prevent pressure sores?",
        options: [
          "Keeping patients in one position",
          "Regular position changes",
          "Using only soft bedding",
          "Avoiding all movement"
        ],
        correctAnswer: 1,
        explanation: "Position changes relieve pressure on specific body areas.",
        module: 2
      },
      {
        id: 20,
        question: "How count respirations accurately?",
        options: [
          "Ask patient to count",
          "Count without patient knowing",
          "Estimate from pulse",
          "Count during sleep only"
        ],
        correctAnswer: 1,
        explanation: "Patients may alter breathing if they know you're counting.",
        module: 3
      },
      {
        id: 21,
        question: "Where should medications NOT be stored?",
        options: [
          "Cool, dry place",
          "Bathroom medicine cabinet",
          "Original containers",
          "Away from sunlight"
        ],
        correctAnswer: 1,
        explanation: "Bathroom humidity can damage medication effectiveness.",
        module: 4
      },
      {
        id: 22,
        question: "How often check emergency supplies?",
        options: [
          "Every six months",
          "Once yearly",
          "Only when used",
          "When remembered"
        ],
        correctAnswer: 0,
        explanation: "Regular checks ensure supplies are ready when needed.",
        module: 5
      },
      {
        id: 23,
        question: "What is cultural competence?",
        options: [
          "Speaking multiple languages",
          "Working effectively with diverse patients",
          "Knowing all world cultures",
          "International travel experience"
        ],
        correctAnswer: 1,
        explanation: "Cultural competence involves respecting different backgrounds.",
        module: 6
      },
      {
        id: 24,
        question: "What should you do for choking conscious adults?",
        options: [
          "Give water",
          "Perform Heimlich maneuver",
          "Pat gently on back",
          "Wait and see"
        ],
        correctAnswer: 1,
        explanation: "Abdominal thrusts can dislodge obstructions in choking victims.",
        module: 5
      },
      {
        id: 25,
        question: "Why establish baseline vital signs?",
        options: [
          "For insurance only",
          "To compare against future measurements",
          "To set strict norms",
          "To impress doctors"
        ],
        correctAnswer: 1,
        explanation: "Baselines help identify meaningful changes in condition.",
        module: 3
      },
      {
        id: 26,
        question: "What should reminders be linked to?",
        options: [
          "Complex schedules",
          "Daily activities",
          "Weather changes",
          "TV schedules"
        ],
        correctAnswer: 1,
        explanation: "Daily activity links make reminders more natural.",
        module: 4
      },
      {
        id: 27,
        question: "What should you do with soaked bleeding dressings?",
        options: [
          "Remove immediately",
          "Add more on top",
          "Wash and reuse",
          "Ignore if bleeding stopped"
        ],
        correctAnswer: 1,
        explanation: "Adding dressings maintains pressure without disrupting clots.",
        module: 5
      },
      {
        id: 28,
        question: "How handle conflicts professionally?",
        options: [
          "Ignore them",
          "Listen first, stay calm, find solutions",
          "Argue until you win",
          "Complain to others"
        ],
        correctAnswer: 1,
        explanation: "Professional resolution addresses issues respectfully.",
        module: 6
      },
      {
        id: 29,
        question: "What is normal breathing rate?",
        options: [
          "8-10 per minute",
          "12-20 per minute",
          "22-30 per minute",
          "30+ per minute"
        ],
        correctAnswer: 1,
        explanation: "12-20 breaths per minute is normal for adults at rest.",
        module: 3
      },
      {
        id: 30,
        question: "When can you crush tablets?",
        options: [
          "Whenever easier",
          "Only if pharmacist instructs",
          "For all elderly",
          "When swallowing difficulty"
        ],
        correctAnswer: 1,
        explanation: "Some medications have special coatings that crushing would disrupt.",
        module: 4
      },
      {
        id: 31,
        question: "What should you NOT put on burns?",
        options: [
          "Cool water",
          "Clean dressing",
          "Ice, butter, ointments",
          "Loose covering"
        ],
        correctAnswer: 2,
        explanation: "These can cause further damage or infection.",
        module: 5
      },
      {
        id: 32,
        question: "Why use interpreters?",
        options: [
          "Only for complex terms",
          "When language barriers exist",
          "To save time",
          "When patient confused"
        ],
        correctAnswer: 1,
        explanation: "Professional interpreters ensure accurate communication.",
        module: 6
      },
      {
        id: 33,
        question: "How adjust armpit temperature reading?",
        options: [
          "Subtract 1°F",
          "Add 1°F",
          "No adjustment",
          "Multiply by 1.1"
        ],
        correctAnswer: 1,
        explanation: "Armpit temperatures run about 1°F lower than core temperature.",
        module: 3
      },
      {
        id: 34,
        question: "What is an adverse reaction?",
        options: [
          "Expected side effect",
          "Unexpected harmful reaction",
          "Mild discomfort",
          "Sign medication working"
        ],
        correctAnswer: 1,
        explanation: "Adverse reactions are unexpected and potentially harmful.",
        module: 4
      },
      {
        id: 35,
        question: "When treat as emergency?",
        options: [
          "Only if definitely life-threatening",
          "When in doubt",
          "Never without doctor permission",
          "Only during business hours"
        ],
        correctAnswer: 1,
        explanation: "When uncertain, err on side of caution for patient safety.",
        module: 5
      },
      {
        id: 36,
        question: "How dispose of old records?",
        options: [
          "Regular trash",
          "Shred securely",
          "Keep forever",
          "Give to family"
        ],
        correctAnswer: 1,
        explanation: "Secure disposal protects patient privacy.",
        module: 6
      },
      {
        id: 37,
        question: "What is systolic pressure?",
        options: [
          "Pressure when heart rests",
          "Pressure when heart beats",
          "Average pressure",
          "Venous pressure"
        ],
        correctAnswer: 1,
        explanation: "Systolic is the pressure during heart contraction.",
        module: 3
      },
      {
        id: 38,
        question: "How often check expiration dates?",
        options: [
          "Yearly",
          "Monthly",
          "When empty",
          "When looks different"
        ],
        correctAnswer: 1,
        explanation: "Monthly checks ensure medication effectiveness and safety.",
        module: 4
      },
      {
        id: 39,
        question: "What position after seizure?",
        options: [
          "On back",
          "On side",
          "Sitting up",
          "As fell"
        ],
        correctAnswer: 1,
        explanation: "Recovery position keeps airway clear.",
        module: 5
      },
      {
        id: 40,
        question: "What avoid in documentation?",
        options: [
          "Facts",
          "Opinions",
          "Dates",
          "Observations"
        ],
        correctAnswer: 1,
        explanation: "Documentation should stick to observable facts.",
        module: 6
      }
    ]
  }
};

export default homeNursingCertificate;

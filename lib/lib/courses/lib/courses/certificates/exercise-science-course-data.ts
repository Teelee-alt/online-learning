export const exerciseScienceCertificateCourse = {
  id: "exercise-science-certificate",
  title: "Exercise Science (Certificate)",
  description: "Learn the fundamentals of human movement, exercise physiology, and fitness principles. Understand how the body responds to physical activity and how to apply this knowledge to improve health and performance.",
  duration: "6 weeks",
  timeCommitment: "4-6 hours per week",
  price: 12,
  upgradePrice: 18,
  icon: "🏋️",
  badge: "Certificate",
  
  modules: [
    {
      id: 1,
      title: "Introduction to Human Movement",
      completed: false,
      content: `# Understanding Human Movement

Welcome to Exercise Science! This module introduces you to the basic principles of how our bodies move and function during physical activity.

## **The Musculoskeletal System**

Our bodies move through the coordinated effort of three main components:
- **Bones** provide structure and support
- **Muscles** generate force for movement
- **Joints** allow motion between bones

**Key Concept:** The human body has approximately 650 muscles and 206 bones that work together in what we call the kinetic chain - meaning movement in one part affects other parts.

## **Types of Body Movements**

There are several fundamental movement patterns everyone should understand:
1. **Flexion and Extension** - Bending and straightening movements
2. **Abduction and Adduction** - Moving away from and toward the body's midline
3. **Rotation** - Twisting movements around an axis
4. **Circumduction** - Circular movements combining multiple directions

**Practical Application:** Knowing these movements helps identify proper exercise form and prevents injuries during workouts.

## **Movement Planes**

The body moves in three imaginary planes:
- **Sagittal Plane** divides left and right (forward/backward movements)
- **Frontal Plane** divides front and back (side-to-side movements)
- **Transverse Plane** divides top and bottom (rotational movements)

**Everyday Example:** Walking forward occurs in the sagittal plane, while doing jumping jacks involves the frontal plane. A golf swing uses the transverse plane.`,

      quiz: [
        {
          id: 1,
          question: "What are the three main components of the musculoskeletal system?",
          options: [
            "Bones, muscles, and joints",
            "Tendons, ligaments, and cartilage",
            "Nerves, blood vessels, and organs",
            "Skin, fat, and connective tissue"
          ],
          correctAnswer: 0,
          explanation: "Correct! Bones provide structure, muscles generate force, and joints allow motion - these three work together for all human movement."
        },
        {
          id: 2,
          question: "What movement pattern involves bending and straightening?",
          options: [
            "Flexion and extension",
            "Abduction and adduction",
            "Rotation",
            "Circumduction"
          ],
          correctAnswer: 0,
          explanation: "That's right! Flexion decreases the angle between body parts (bending), while extension increases the angle (straightening)."
        },
        {
          id: 3,
          question: "In which plane does forward walking occur?",
          options: [
            "Sagittal plane",
            "Frontal plane",
            "Transverse plane",
            "Coronal plane"
          ],
          correctAnswer: 0,
          explanation: "Correct! Forward walking involves moving forward and backward, which occurs in the sagittal plane that divides the body left and right."
        },
        {
          id: 4,
          question: "How many muscles does the average human body have?",
          options: [
            "Approximately 650",
            "About 400",
            "Exactly 500",
            "Over 800"
          ],
          correctAnswer: 0,
          explanation: "Yes! The human body has approximately 650 muscles that work together to create movement."
        },
        {
          id: 5,
          question: "What term describes movement away from the body's midline?",
          options: [
            "Abduction",
            "Adduction",
            "Flexion",
            "Extension"
          ],
          correctAnswer: 0,
          explanation: "Correct! Abduction moves limbs away from the midline, like raising your arm sideways."
        },
        {
          id: 6,
          question: "What does the kinetic chain concept explain?",
          options: [
            "How movement in one body part affects others",
            "How muscles store energy",
            "How joints lock during movement",
            "How bones grow in response to exercise"
          ],
          correctAnswer: 0,
          explanation: "Exactly! The kinetic chain shows how movements are connected - trouble in one area can affect others in the chain."
        },
        {
          id: 7,
          question: "Which movement involves twisting around an axis?",
          options: [
            "Rotation",
            "Flexion",
            "Abduction",
            "Circumduction"
          ],
          correctAnswer: 0,
          explanation: "Right! Rotation occurs when a body part twists around its long axis, like turning your head."
        },
        {
          id: 8,
          question: "How many movement planes does the human body use?",
          options: [
            "Three",
            "Two",
            "Four",
            "Five"
          ],
          correctAnswer: 0,
          explanation: "Correct! The body moves in three planes: sagittal, frontal, and transverse."
        },
        {
          id: 9,
          question: "What is circumduction?",
          options: [
            "A circular movement combining multiple directions",
            "A straight-line movement",
            "A bouncing movement",
            "A vibrating movement"
          ],
          correctAnswer: 0,
          explanation: "Yes! Circumduction creates a cone shape, like arm circles or hip circles."
        },
        {
          id: 10,
          question: "Which plane divides the body front and back?",
          options: [
            "Frontal plane",
            "Sagittal plane",
            "Transverse plane",
            "Diagonal plane"
          ],
          correctAnswer: 0,
          explanation: "Correct! The frontal plane (also called coronal plane) divides front and back for side-to-side movements."
        },
        {
          id: 11,
          question: "What movement pattern occurs during jumping jacks?",
          options: [
            "Abduction and adduction",
            "Flexion and extension",
            "Rotation only",
            "Circumduction only"
          ],
          correctAnswer: 0,
          explanation: "Right! Jumping jacks involve abducting arms and legs away from midline, then adducting them back."
        },
        {
          id: 12,
          question: "How many bones are in the adult human body?",
          options: [
            "206",
            "156",
            "256",
            "306"
          ],
          correctAnswer: 0,
          explanation: "Correct! Adults have 206 bones that form the skeletal framework."
        },
        {
          id: 13,
          question: "Which movement decreases joint angle?",
          options: [
            "Flexion",
            "Extension",
            "Abduction",
            "Adduction"
          ],
          correctAnswer: 0,
          explanation: "Yes! Flexion decreases the angle between bones, like bending your elbow."
        },
        {
          id: 14,
          question: "What type of movement occurs in a golf swing?",
          options: [
            "Transverse plane rotation",
            "Sagittal plane flexion",
            "Frontal plane abduction",
            "No specific plane"
          ],
          correctAnswer: 0,
          explanation: "Correct! A golf swing involves rotational movement in the transverse plane."
        },
        {
          id: 15,
          question: "What provides structure and support in the body?",
          options: [
            "Bones",
            "Muscles",
            "Joints",
            "Tendons"
          ],
          correctAnswer: 0,
          explanation: "Right! Bones create the structural framework that supports the body."
        },
        {
          id: 16,
          question: "Which component generates force for movement?",
          options: [
            "Muscles",
            "Bones",
            "Joints",
            "Ligaments"
          ],
          correctAnswer: 0,
          explanation: "Correct! Muscles contract to generate the force needed for all movements."
        },
        {
          id: 17,
          question: "What allows motion between bones?",
          options: [
            "Joints",
            "Muscles",
            "Tendons",
            "Nerves"
          ],
          correctAnswer: 0,
          explanation: "Yes! Joints are where two or more bones meet and allow movement."
        },
        {
          id: 18,
          question: "Which plane is also called the coronal plane?",
          options: [
            "Frontal plane",
            "Sagittal plane",
            "Transverse plane",
            "Horizontal plane"
          ],
          correctAnswer: 0,
          explanation: "Correct! The frontal plane is sometimes called the coronal plane."
        },
        {
          id: 19,
          question: "What movement increases joint angle?",
          options: [
            "Extension",
            "Flexion",
            "Abduction",
            "Rotation"
          ],
          correctAnswer: 0,
          explanation: "Right! Extension increases the angle between bones, like straightening your knee."
        },
        {
          id: 20,
          question: "Why is understanding movement planes important?",
          options: [
            "It helps identify proper exercise form",
            "It makes workouts more difficult",
            "It only matters for athletes",
            "It's only theoretical knowledge"
          ],
          correctAnswer: 0,
          explanation: "Exactly! Knowing movement planes helps design balanced workouts and prevent injuries."
        }
      ]
    },
    {
      id: 2,
      title: "Basic Exercise Physiology",
      completed: false,
      content: `# How Your Body Responds to Exercise

This module explores what happens inside your body when you exercise - from breathing changes to muscle adaptations.

## **Energy Systems for Movement**

Your body uses three different energy systems depending on exercise intensity and duration:

1. **ATP-PCr System** (0-10 seconds) - Immediate energy for short bursts
2. **Glycolytic System** (10 seconds to 2 minutes) - Medium-term energy without oxygen
3. **Oxidative System** (2+ minutes) - Long-term energy using oxygen

**Simple Analogy:** Think of these like gears in a car - first gear for quick starts, second gear for moderate speed, third gear for long journeys.

## **Cardiovascular Response**

When you exercise, your heart and blood vessels respond immediately:
- **Heart rate increases** to pump more blood
- **Blood pressure changes** - systolic rises, diastolic stays stable
- **Blood flow redirects** to working muscles
- **Stroke volume increases** (more blood per heartbeat)

**Key Fact:** A trained heart can pump more blood with fewer beats - that's why athletes often have lower resting heart rates.

## **Respiratory Adaptations**

Your breathing changes to meet oxygen demands:
- **Breathing rate increases** from about 12-20 breaths per minute at rest to 40-60 during intense exercise
- **Tidal volume increases** - you take deeper breaths
- **Oxygen uptake improves** as exercise continues

**Practical Insight:** The "burn" you feel during hard exercise is often lactic acid buildup, not lack of oxygen - your body is working efficiently!`,

      quiz: [
        {
          id: 1,
          question: "Which energy system provides immediate energy for 0-10 seconds?",
          options: [
            "ATP-PCr System",
            "Glycolytic System",
            "Oxidative System",
            "Aerobic System"
          ],
          correctAnswer: 0,
          explanation: "Correct! The ATP-PCr system provides instant energy for short bursts like sprinting or jumping."
        },
        {
          id: 2,
          question: "What happens to heart rate during exercise?",
          options: [
            "It increases",
            "It decreases",
            "It stays the same",
            "It becomes irregular"
          ],
          correctAnswer: 0,
          explanation: "Right! Heart rate increases to deliver more oxygen and nutrients to working muscles."
        },
        {
          id: 3,
          question: "Which energy system uses oxygen for long-term energy?",
          options: [
            "Oxidative System",
            "ATP-PCr System",
            "Glycolytic System",
            "Immediate System"
          ],
          correctAnswer: 0,
          explanation: "Correct! The oxidative system uses oxygen to produce energy for activities lasting more than 2 minutes."
        },
        {
          id: 4,
          question: "What is stroke volume?",
          options: [
            "Amount of blood pumped per heartbeat",
            "Number of heartbeats per minute",
            "Blood pressure during exercise",
            "Oxygen in each breath"
          ],
          correctAnswer: 0,
          explanation: "Yes! Stroke volume is the amount of blood your heart pumps with each beat."
        },
        {
          id: 5,
          question: "During exercise, where does blood flow increase?",
          options: [
            "To working muscles",
            "To digestive organs",
            "To the brain only",
            "Evenly throughout body"
          ],
          correctAnswer: 0,
          explanation: "Correct! Blood redirects to muscles that need oxygen during exercise."
        },
        {
          id: 6,
          question: "What is the normal resting breathing rate?",
          options: [
            "12-20 breaths per minute",
            "5-10 breaths per minute",
            "25-35 breaths per minute",
            "40-50 breaths per minute"
          ],
          correctAnswer: 0,
          explanation: "Right! Adults typically breathe 12-20 times per minute at rest."
        },
        {
          id: 7,
          question: "Which system works for 10 seconds to 2 minutes without oxygen?",
          options: [
            "Glycolytic System",
            "ATP-PCr System",
            "Oxidative System",
            "Aerobic System"
          ],
          correctAnswer: 0,
          explanation: "Correct! The glycolytic system provides energy without oxygen for medium-duration activities."
        },
        {
          id: 8,
          question: "What often causes the 'burn' during hard exercise?",
          options: [
            "Lactic acid buildup",
            "Lack of oxygen",
            "Muscle tearing",
            "Dehydration"
          ],
          correctAnswer: 0,
          explanation: "Yes! The burning sensation often comes from lactic acid accumulation, not oxygen lack."
        },
        {
          id: 9,
          question: "What happens to breathing depth during exercise?",
          options: [
            "Tidal volume increases",
            "Tidal volume decreases",
            "It stays the same",
            "It becomes shallow"
          ],
          correctAnswer: 0,
          explanation: "Right! You take deeper breaths (increased tidal volume) to get more oxygen."
        },
        {
          id: 10,
          question: "Why might athletes have lower resting heart rates?",
          options: [
            "Their hearts pump more efficiently",
            "They have weaker hearts",
            "They breathe less",
            "They have less blood"
          ],
          correctAnswer: 0,
          explanation: "Correct! Trained hearts can pump more blood per beat, needing fewer beats at rest."
        },
        {
          id: 11,
          question: "How long does the glycolytic system provide energy?",
          options: [
            "10 seconds to 2 minutes",
            "0-10 seconds",
            "2+ minutes",
            "5+ minutes"
          ],
          correctAnswer: 0,
          explanation: "Yes! This system works for medium-duration, high-intensity activities."
        },
        {
          id: 12,
          question: "What is systolic blood pressure?",
          options: [
            "Pressure when heart contracts",
            "Pressure when heart relaxes",
            "Average blood pressure",
            "Exercise blood pressure"
          ],
          correctAnswer: 0,
          explanation: "Correct! Systolic is the higher number, measuring pressure during heart contraction."
        },
        {
          id: 13,
          question: "Which energy system is like 'first gear' for quick starts?",
          options: [
            "ATP-PCr System",
            "Glycolytic System",
            "Oxidative System",
            "All systems equally"
          ],
          correctAnswer: 0,
          explanation: "Right! The ATP-PCr system provides immediate power for quick movements."
        },
        {
          id: 14,
          question: "What improves as exercise continues?",
          options: [
            "Oxygen uptake",
            "Blood volume decreases",
            "Heart rate drops",
            "Breathing stops"
          ],
          correctAnswer: 0,
          explanation: "Correct! Your body becomes more efficient at using oxygen as you continue exercising."
        },
        {
          id: 15,
          question: "What happens to diastolic blood pressure during moderate exercise?",
          options: [
            "Stays relatively stable",
            "Increases dramatically",
            "Decreases dramatically",
            "Becomes unmeasurable"
          ],
          correctAnswer: 0,
          explanation: "Yes! Diastolic pressure (lower number) typically stays stable during moderate exercise."
        },
        {
          id: 16,
          question: "Which system is primarily used in a 400m sprint?",
          options: [
            "Glycolytic System",
            "ATP-PCr System",
            "Oxidative System",
            "All equally"
          ],
          correctAnswer: 0,
          explanation: "Correct! A 400m sprint (about 45-60 seconds) mainly uses the glycolytic system."
        },
        {
          id: 17,
          question: "What increases to pump more blood during exercise?",
          options: [
            "Both heart rate and stroke volume",
            "Only heart rate",
            "Only stroke volume",
            "Neither increases"
          ],
          correctAnswer: 0,
          explanation: "Right! Both heart rate (beats per minute) and stroke volume (blood per beat) increase."
        },
        {
          id: 18,
          question: "How does the oxidative system produce energy?",
          options: [
            "Using oxygen",
            "Without oxygen",
            "Using only fats",
            "Using only carbs"
          ],
          correctAnswer: 0,
          explanation: "Correct! The oxidative system requires oxygen, making it aerobic."
        },
        {
          id: 19,
          question: "What can reach 40-60 breaths per minute during intense exercise?",
          options: [
            "Breathing rate",
            "Heart rate",
            "Step count",
            "Calorie burn"
          ],
          correctAnswer: 0,
          explanation: "Yes! Breathing rate can more than triple during intense activity."
        },
        {
          id: 20,
          question: "Which system is like 'third gear' for long journeys?",
          options: [
            "Oxidative System",
            "ATP-PCr System",
            "Glycolytic System",
            "Anaerobic System"
          ],
          correctAnswer: 0,
          explanation: "Right! The oxidative system provides sustained energy for longer activities."
        }
      ]
    },
    {
      id: 3,
      title: "Strength Training Fundamentals",
      completed: false,
      content: `# Building Strength Safely and Effectively

Learn the principles of strength training - from how muscles grow to proper lifting techniques.

## **Types of Muscle Contractions**

Muscles can contract in different ways:
1. **Concentric** - Muscle shortens while producing force (lifting phase)
2. **Eccentric** - Muscle lengthens while controlling force (lowering phase)
3. **Isometric** - Muscle produces force without changing length (holding position)

**Key Insight:** Eccentric contractions cause the most muscle damage (good for growth) but also the most soreness.

## **Principles of Progressive Overload**

To get stronger, you must gradually increase demands on your muscles:
- **Increase weight** - Lift heavier over time
- **Increase repetitions** - Do more reps with same weight
- **Increase sets** - Add more sets of exercises
- **Decrease rest time** - Shorten rest between sets
- **Increase frequency** - Train more often

**Golden Rule:** Only increase one variable at a time to avoid injury and track progress effectively.

## **Basic Strength Exercises**

Every beginner should master these fundamental movements:
1. **Squat** - Works legs and core
2. **Push-up** (or bench press) - Works chest and arms
3. **Row** - Works back muscles
4. **Overhead Press** - Works shoulders
5. **Deadlift** - Works entire posterior chain

**Form First:** Always prioritize proper form over heavier weight - it's safer and more effective long-term.`,

      quiz: [
        {
          id: 1,
          question: "What type of contraction occurs when a muscle shortens?",
          options: [
            "Concentric",
            "Eccentric",
            "Isometric",
            "Static"
          ],
          correctAnswer: 0,
          explanation: "Correct! Concentric contractions shorten muscles while producing force, like lifting a weight."
        },
        {
          id: 2,
          question: "Which principle involves gradually increasing demands on muscles?",
          options: [
            "Progressive Overload",
            "Muscle Confusion",
            "Static Stretching",
            "Cardio Acceleration"
          ],
          correctAnswer: 0,
          explanation: "Right! Progressive overload means gradually increasing stress on muscles to drive adaptation."
        },
        {
          id: 3,
          question: "What contraction type causes the most muscle soreness?",
          options: [
            "Eccentric",
            "Concentric",
            "Isometric",
            "Ballistic"
          ],
          correctAnswer: 0,
          explanation: "Correct! Eccentric contractions (lowering phase) cause more muscle damage and soreness."
        },
        {
          id: 4,
          question: "Which exercise primarily works legs and core?",
          options: [
            "Squat",
            "Push-up",
            "Row",
            "Overhead Press"
          ],
          correctAnswer: 0,
          explanation: "Yes! Squats are fundamental for developing leg and core strength."
        },
        {
          id: 5,
          question: "What should you prioritize over heavier weight?",
          options: [
            "Proper form",
            "More sets",
            "Faster speed",
            "Shorter workouts"
          ],
          correctAnswer: 0,
          explanation: "Correct! Good form prevents injuries and ensures muscles work effectively."
        },
        {
          id: 6,
          question: "What type of contraction occurs without length change?",
          options: [
            "Isometric",
            "Concentric",
            "Eccentric",
            "Dynamic"
          ],
          correctAnswer: 0,
          explanation: "Right! Isometric contractions produce force without changing muscle length, like holding a plank."
        },
        {
          id: 7,
          question: "Which is NOT a progressive overload method?",
          options: [
            "Decrease weight",
            "Increase weight",
            "Increase reps",
            "Decrease rest time"
          ],
          correctAnswer: 0,
          explanation: "Correct! Decreasing weight reduces the demand, which is opposite of progressive overload."
        },
        {
          id: 8,
          question: "Which exercise works the chest and arms?",
          options: [
            "Push-up",
            "Squat",
            "Deadlift",
            "Row"
          ],
          correctAnswer: 0,
          explanation: "Yes! Push-ups (and bench press) target chest, shoulders, and triceps."
        },
        {
          id: 9,
          question: "How many variables should you increase at once?",
          options: [
            "One at a time",
            "Two at a time",
            "Three at a time",
            "As many as possible"
          ],
          correctAnswer: 0,
          explanation: "Right! Change only one variable to track progress and prevent overtraining."
        },
        {
          id: 10,
          question: "What type of contraction is the lowering phase of a lift?",
          options: [
            "Eccentric",
            "Concentric",
            "Isometric",
            "Explosive"
          ],
          correctAnswer: 0,
          explanation: "Correct! Lowering a weight involves eccentric contractions where muscles lengthen under tension."
        },
        {
          id: 11,
          question: "Which exercise targets back muscles?",
          options: [
            "Row",
            "Squat",
            "Push-up",
            "Overhead Press"
          ],
          correctAnswer: 0,
          explanation: "Yes! Rows strengthen the back muscles important for posture."
        },
        {
          id: 12,
          question: "What is the 'golden rule' of strength training?",
          options: [
            "Increase one variable at a time",
            "Lift maximum weight always",
            "Never take rest days",
            "Only train one body part"
          ],
          correctAnswer: 0,
          explanation: "Correct! Changing one variable at a time helps track progress and prevent injury."
        },
        {
          id: 13,
          question: "Which contraction type is holding a plank position?",
          options: [
            "Isometric",
            "Concentric",
            "Eccentric",
            "Dynamic"
          ],
          correctAnswer: 0,
          explanation: "Right! Holding a plank involves isometric contractions throughout the core."
        },
        {
          id: 14,
          question: "What does increasing repetitions achieve?",
          options: [
            "Increases muscular endurance",
            "Decreases strength",
            "Reduces muscle size",
            "Makes workouts shorter"
          ],
          correctAnswer: 0,
          explanation: "Correct! Higher reps with lighter weights build muscular endurance."
        },
        {
          id: 15,
          question: "Which exercise works the shoulders?",
          options: [
            "Overhead Press",
            "Squat",
            "Deadlift",
            "Row"
          ],
          correctAnswer: 0,
          explanation: "Yes! Overhead press strengthens shoulders and upper back."
        },
        {
          id: 16,
          question: "What should come before increasing weight?",
          options: [
            "Mastering proper form",
            "Buying new equipment",
            "Training every day",
            "Eating more protein"
          ],
          correctAnswer: 0,
          explanation: "Correct! Always establish good form before adding more weight."
        },
        {
          id: 17,
          question: "What type of contraction is lifting a weight?",
          options: [
            "Concentric",
            "Eccentric",
            "Isometric",
            "Passive"
          ],
          correctAnswer: 0,
          explanation: "Right! The lifting phase involves concentric contractions."
        },
        {
          id: 18,
          question: "Which exercise works the entire posterior chain?",
          options: [
            "Deadlift",
            "Push-up",
            "Squat",
            "Bicep Curl"
          ],
          correctAnswer: 0,
          explanation: "Correct! Deadlifts work back, glutes, and hamstrings - the posterior chain."
        },
        {
          id: 19,
          question: "What decreases rest time between sets accomplish?",
          options: [
            "Increases workout intensity",
            "Decreases muscle growth",
            "Makes workouts easier",
            "Reduces calorie burn"
          ],
          correctAnswer: 0,
          explanation: "Yes! Shorter rest increases metabolic stress and workout density."
        },
        {
          id: 20,
          question: "How many basic strength exercises were listed?",
          options: [
            "Five",
            "Three",
            "Seven",
            "Ten"
          ],
          correctAnswer: 0,
          explanation: "Right! The five fundamental movements are squat, push, row, press, and deadlift."
        }
      ]
    },
    {
      id: 4,
      title: "Cardiovascular Fitness",
      completed: false,
      content: `# Heart Health and Endurance Training

Understand how to improve your cardiovascular fitness through different types of endurance training.

## **Types of Cardiovascular Training**

There are three main approaches to cardio training:
1. **Steady-State** - Maintaining consistent moderate intensity (jogging, cycling)
2. **Interval Training** - Alternating high and low intensity periods
3. **Fartlek Training** - "Speed play" with unstructured intensity changes

**Beginner Tip:** Start with steady-state to build a base, then add intervals for variety and additional benefits.

## **Measuring Cardiovascular Fitness**

Key metrics to understand:
- **Resting Heart Rate** - Lower usually indicates better fitness
- **Maximum Heart Rate** - Estimated as 220 minus your age
- **Heart Rate Zones** - Training at different percentages of max
- **VO2 Max** - Maximum oxygen your body can use (best measure of cardio fitness)

**Simple Calculation:** Your estimated max heart rate is 220 minus your age. Moderate exercise is 50-70% of this number.

## **Benefits of Regular Cardio**

Consistent cardiovascular training provides:
- **Stronger heart muscle** - Pumps more blood with less effort
- **Improved circulation** - Better blood flow throughout body
- **Lower blood pressure** - Reduced strain on arteries
- **Better cholesterol levels** - Improved HDL/LDL ratio
- **Increased lung capacity** - More efficient breathing

**Health Fact:** Regular cardio can reduce risk of heart disease by up to 35% and help manage stress and sleep quality.`,

      quiz: [
        {
          id: 1,
          question: "What type of cardio maintains consistent moderate intensity?",
          options: [
            "Steady-State",
            "Interval Training",
            "Fartlek Training",
            "High-Intensity"
          ],
          correctAnswer: 0,
          explanation: "Correct! Steady-state cardio involves maintaining a consistent pace, like jogging."
        },
        {
          id: 2,
          question: "How do you estimate maximum heart rate?",
          options: [
            "220 minus age",
            "200 plus age",
            "180 minus age",
            "Age times 2"
          ],
          correctAnswer: 0,
          explanation: "Right! The simple formula is 220 minus your age for estimated maximum heart rate."
        },
        {
          id: 3,
          question: "What does VO2 Max measure?",
          options: [
            "Maximum oxygen usage",
            "Heart rate variability",
            "Blood pressure",
            "Breathing rate"
          ],
          correctAnswer: 0,
          explanation: "Correct! VO2 Max measures the maximum amount of oxygen your body can use during exercise."
        },
        {
          id: 4,
          question: "Which cardio type alternates high and low intensity?",
          options: [
            "Interval Training",
            "Steady-State",
            "Fartlek Training",
            "Continuous Training"
          ],
          correctAnswer: 0,
          explanation: "Yes! Interval training involves periods of high effort followed by recovery periods."
        },
        {
          id: 5,
          question: "What does a lower resting heart rate often indicate?",
          options: [
            "Better cardiovascular fitness",
            "Poor health",
            "Dehydration",
            "Overtraining"
          ],
          correctAnswer: 0,
          explanation: "Correct! A lower resting heart rate usually means your heart is more efficient."
        },
        {
          id: 6,
          question: "What is 'Fartlek' training?",
          options: [
            "Unstructured speed play",
            "Slow steady running",
            "Maximum effort sprints",
            "Hill repeats only"
          ],
          correctAnswer: 0,
          explanation: "Right! Fartlek means 'speed play' in Swedish and involves varying pace spontaneously."
        },
        {
          id: 7,
          question: "What percentage range is moderate exercise intensity?",
          options: [
            "50-70% of max heart rate",
            "30-40% of max heart rate",
            "80-90% of max heart rate",
            "100% of max heart rate"
          ],
          correctAnswer: 0,
          explanation: "Correct! Moderate exercise is typically 50-70% of your maximum heart rate."
        },
        {
          id: 8,
          question: "Which is NOT a benefit of regular cardio?",
          options: [
            "Weaker heart muscle",
            "Lower blood pressure",
            "Improved circulation",
            "Better cholesterol"
          ],
          correctAnswer: 0,
          explanation: "Right! Cardio strengthens the heart muscle, making it more efficient, not weaker."
        },
        {
          id: 9,
          question: "What should beginners start with?",
          options: [
            "Steady-state to build base",
            "Maximum intervals",
            "Two-hour sessions",
            "Competition training"
          ],
          correctAnswer: 0,
          explanation: "Yes! Beginners should establish a base with steady-state cardio before adding intensity."
        },
        {
          id: 10,
          question: "What can regular cardio reduce risk of by up to 35%?",
          options: [
            "Heart disease",
            "Common cold",
            "Broken bones",
            "Skin conditions"
          ],
          correctAnswer: 0,
          explanation: "Correct! Regular cardiovascular exercise significantly reduces heart disease risk."
        },
        {
          id: 11,
          question: "What improves with better cardiovascular fitness?",
          options: [
            "Lung capacity",
            "Bone density only",
            "Muscle size only",
            "Flexibility only"
          ],
          correctAnswer: 0,
          explanation: "Right! Cardio training improves how efficiently your lungs work."
        },
        {
          id: 12,
          question: "What is the best measure of cardio fitness?",
          options: [
            "VO2 Max",
            "Resting heart rate",
            "Blood pressure",
            "Body weight"
          ],
          correctAnswer: 0,
          explanation: "Correct! VO2 Max is considered the gold standard for cardiovascular fitness."
        },
        {
          id: 13,
          question: "What does cardio training help manage?",
          options: [
            "Stress and sleep quality",
            "Only weight loss",
            "Only muscle gain",
            "Only flexibility"
          ],
          correctAnswer: 0,
          explanation: "Yes! Regular cardio improves both stress management and sleep patterns."
        },
        {
          id: 14,
          question: "What type of training is 'speed play'?",
          options: [
            "Fartlek",
            "Interval",
            "Steady-state",
            "Tabata"
          ],
          correctAnswer: 0,
          explanation: "Correct! Fartlek is Swedish for 'speed play' and involves playful pace changes."
        },
        {
          id: 15,
          question: "What improves with better circulation?",
          options: [
            "Blood flow throughout body",
            "Only heart function",
            "Only lung function",
            "Only brain function"
          ],
          correctAnswer: 0,
          explanation: "Right! Better circulation means improved blood delivery to all tissues."
        },
        {
          id: 16,
          question: "What does a stronger heart muscle do?",
          options: [
            "Pumps more blood with less effort",
            "Beats faster at rest",
            "Gets tired more easily",
            "Needs more oxygen"
          ],
          correctAnswer: 0,
          explanation: "Correct! A stronger heart is more efficient, pumping more blood per beat."
        },
        {
          id: 17,
          question: "What is interval training good for?",
          options: [
            "Adding variety and benefits",
            "Only weight loss",
            "Only marathon training",
            "Only beginners"
          ],
          correctAnswer: 0,
          explanation: "Yes! Intervals add variety and provide unique fitness benefits."
        },
        {
          id: 18,
          question: "What improves HDL/LDL ratio?",
          options: [
            "Regular cardio",
            "Only diet changes",
            "Only medication",
            "Only genetics"
          ],
          correctAnswer: 0,
          explanation: "Correct! Cardiovascular exercise helps improve cholesterol profiles."
        },
        {
          id: 19,
          question: "What is moderate exercise intensity for a 40-year-old?",
          options: [
            "90-126 bpm (50-70% of 180)",
            "70-80 bpm",
            "150-170 bpm",
            "180-200 bpm"
          ],
          correctAnswer: 0,
          explanation: "Right! 220-40=180 max HR. 50-70% of 180 is 90-126 beats per minute."
        },
        {
          id: 20,
          question: "How many main approaches to cardio training are there?",
          options: [
            "Three",
            "Two",
            "Four",
            "Five"
          ],
          correctAnswer: 0,
          explanation: "Correct! The three main types are steady-state, interval, and fartlek training."
        }
      ]
    },
    {
      id: 5,
      title: "Flexibility and Mobility",
      completed: false,
      content: `# Moving Better with Flexibility Training

Learn why flexibility matters and how to improve your range of motion safely.

## **Types of Stretching**

Different stretching methods serve different purposes:
1. **Static Stretching** - Holding a stretch position (best after exercise)
2. **Dynamic Stretching** - Moving through range of motion (best before exercise)
3. **PNF Stretching** - Contract-relax techniques (often with partner)
4. **Ballistic Stretching** - Bouncing motions (generally not recommended)

**Safety First:** Never stretch to the point of pain - mild discomfort is okay, sharp pain means stop immediately.

## **Benefits of Good Flexibility**

Improved flexibility provides:
- **Better posture** - Reduced muscle imbalances
- **Reduced injury risk** - More resilient muscles and joints
- **Improved performance** - Greater range of motion for activities
- **Reduced muscle soreness** - Better recovery after exercise
- **Enhanced relaxation** - Relief from muscle tension

**Daily Application:** Simple stretches can be done anywhere - at your desk, watching TV, or before bed.

## **Basic Stretching Routine**

A complete routine should include:
1. **Neck stretches** - Side bends and rotations
2. **Shoulder stretches** - Across body and overhead reaches
3. **Chest opener** - Doorway stretches
4. **Back stretches** - Cat-cow and seated forward folds
5. **Hip stretches** - Pigeon pose and hip flexor stretches
6. **Leg stretches** - Hamstring, quadriceps, and calf stretches

**Timing Matters:** Hold static stretches for 15-30 seconds each, repeating 2-3 times per muscle group.`,

      quiz: [
        {
          id: 1,
          question: "What type of stretching involves holding a position?",
          options: [
            "Static Stretching",
            "Dynamic Stretching",
            "PNF Stretching",
            "Ballistic Stretching"
          ],
          correctAnswer: 0,
          explanation: "Correct! Static stretching means holding a stretch position without movement."
        },
        {
          id: 2,
          question: "When is static stretching best done?",
          options: [
            "After exercise",
            "Before exercise",
            "During exercise",
            "Instead of exercise"
          ],
          correctAnswer: 0,
          explanation: "Right! Static stretching is most effective after muscles are warm from exercise."
        },
        {
          id: 3,
          question: "What type of stretching involves moving through range of motion?",
          options: [
            "Dynamic Stretching",
            "Static Stretching",
            "PNF Stretching",
            "Passive Stretching"
          ],
          correctAnswer: 0,
          explanation: "Correct! Dynamic stretching uses controlled movements to prepare for activity."
        },
        {
          id: 4,
          question: "What does PNF stand for in stretching?",
          options: [
            "Proprioceptive Neuromuscular Facilitation",
            "Passive Neural Flexibility",
            "Progressive Natural Function",
            "Physical Neuro-Flex Training"
          ],
          correctAnswer: 0,
          explanation: "Yes! PNF involves contracting then relaxing muscles to achieve deeper stretches."
        },
        {
          id: 5,
          question: "What should you never stretch to?",
          options: [
            "The point of sharp pain",
            "Mild discomfort",
            "Feeling of tension",
            "Warm sensation"
          ],
          correctAnswer: 0,
          explanation: "Correct! Sharp pain indicates potential damage - stop immediately."
        },
        {
          id: 6,
          question: "What improves with better flexibility?",
          options: [
            "Posture",
            "Only athletic performance",
            "Only relaxation",
            "Only injury prevention"
          ],
          correctAnswer: 0,
          explanation: "Right! Flexibility benefits multiple areas including posture, performance, and recovery."
        },
        {
          id: 7,
          question: "When is dynamic stretching best done?",
          options: [
            "Before exercise",
            "After exercise",
            "During sleep",
            "After meals"
          ],
          correctAnswer: 0,
          explanation: "Correct! Dynamic stretching prepares muscles for activity by increasing blood flow."
        },
        {
          id: 8,
          question: "Which stretching type is generally not recommended?",
          options: [
            "Ballistic Stretching",
            "Static Stretching",
            "Dynamic Stretching",
            "PNF Stretching"
          ],
          correctAnswer: 0,
          explanation: "Yes! Ballistic stretching uses bouncing motions that can cause injury."
        },
        {
          id: 9,
          question: "How long should you hold static stretches?",
          options: [
            "15-30 seconds",
            "5-10 seconds",
            "1-2 minutes",
            "Until it hurts"
          ],
          correctAnswer: 0,
          explanation: "Right! 15-30 seconds allows muscles to relax and lengthen effectively."
        },
        {
          id: 10,
          question: "What can simple stretches help with?",
          options: [
            "Muscle tension relief",
            "Only sports performance",
            "Only weight loss",
            "Only muscle building"
          ],
          correctAnswer: 0,
          explanation: "Correct! Stretching helps relieve everyday muscle tension and stress."
        },
        {
          id: 11,
          question: "What type of stretching often uses a partner?",
          options: [
            "PNF Stretching",
            "Static Stretching",
            "Dynamic Stretching",
            "Ballistic Stretching"
          ],
          correctAnswer: 0,
          explanation: "Right! PNF techniques often involve partner assistance for resistance."
        },
        {
          id: 12,
          question: "What does improved flexibility reduce?",
          options: [
            "Injury risk",
            "Muscle size",
            "Bone density",
            "Cardiovascular fitness"
          ],
          correctAnswer: 0,
          explanation: "Correct! Flexible muscles and joints are less prone to strains and sprains."
        },
        {
          id: 13,
          question: "What should a complete routine include?",
          options: [
            "All major muscle groups",
            "Only legs",
            "Only upper body",
            "Only problem areas"
          ],
          correctAnswer: 0,
          explanation: "Yes! A balanced routine addresses neck, shoulders, back, hips, and legs."
        },
        {
          id: 14,
          question: "How many times should you repeat each stretch?",
          options: [
            "2-3 times",
            "Once only",
            "10-15 times",
            "Until bored"
          ],
          correctAnswer: 0,
          explanation: "Correct! Repeating stretches 2-3 times improves effectiveness."
        },
        {
          id: 15,
          question: "What is mild discomfort during stretching?",
          options: [
            "Normal and acceptable",
            "A sign to stop",
            "Indication of injury",
            "Meaningless sensation"
          ],
          correctAnswer: 0,
          explanation: "Right! Mild discomfort is normal; sharp pain is not."
        },
        {
          id: 16,
          question: "What improves with better range of motion?",
          options: [
            "Performance in activities",
            "Only flexibility tests",
            "Only sitting ability",
            "Only sleeping positions"
          ],
          correctAnswer: 0,
          explanation: "Correct! Greater range of motion enhances movement quality in daily activities."
        },
        {
          id: 17,
          question: "Where can simple stretches be done?",
          options: [
            "Anywhere",
            "Only in gyms",
            "Only with equipment",
            "Only with trainers"
          ],
          correctAnswer: 0,
          explanation: "Yes! You can stretch at your desk, at home, or while traveling."
        },
        {
          id: 18,
          question: "What helps with recovery after exercise?",
          options: [
            "Reduced muscle soreness",
            "Increased muscle damage",
            "More intense workouts",
            "Less sleep needed"
          ],
          correctAnswer: 0,
          explanation: "Correct! Stretching aids recovery by improving circulation and reducing stiffness."
        },
        {
          id: 19,
          question: "What type of stretching prepares for activity?",
          options: [
            "Dynamic",
            "Static",
            "PNF",
            "Ballistic"
          ],
          correctAnswer: 0,
          explanation: "Right! Dynamic stretching warms up muscles before exercise."
        },
        {
          id: 20,
          question: "How many main stretching types were discussed?",
          options: [
            "Four",
            "Two",
            "Three",
            "Five"
          ],
          correctAnswer: 0,
          explanation: "Correct! The four main types are static, dynamic, PNF, and ballistic."
        }
      ]
    },
    {
      id: 6,
      title: "Exercise Programming Basics",
      completed: false,
      content: `# Creating Effective Workout Plans

Learn how to design balanced exercise programs for different goals and fitness levels.

## **Components of a Complete Program**

Every well-designed program should include:
1. **Warm-up** (5-10 minutes) - Prepare body for exercise
2. **Cardiovascular training** (20-60 minutes) - Improve heart health
3. **Strength training** (20-60 minutes) - Build muscle and bone
4. **Flexibility training** (10-15 minutes) - Maintain range of motion
5. **Cool-down** (5-10 minutes) - Return body to resting state

**Balance is Key:** Most people need 2-3 days of strength training and 3-5 days of cardio per week, plus daily flexibility work.

## **Principle of Specificity**

The SAID principle: Specific Adaptation to Imposed Demands
- Your body adapts specifically to the type of training you do
- Want to run better? Practice running
- Want to lift more? Practice lifting
- Want to be more flexible? Practice stretching

**Practical Application:** Align your training with your specific goals for best results.

## **Rest and Recovery**

Why rest days are essential:
- **Muscle repair** - Actual strengthening occurs during recovery
- **Energy restoration** - Replenish fuel stores
- **Injury prevention** - Reduce overuse risks
- **Mental refreshment** - Prevent burnout

**Recovery Tips:** Active recovery (light activity) often works better than complete inactivity. Sleep is your most powerful recovery tool.`,

      quiz: [
        {
          id: 1,
          question: "What should every complete program start with?",
          options: [
            "Warm-up",
            "Maximum effort",
            "Cool-down",
            "Stretching"
          ],
          correctAnswer: 0,
          explanation: "Correct! A proper warm-up prepares your body and prevents injuries."
        },
        {
          id: 2,
          question: "What does the SAID principle stand for?",
          options: [
            "Specific Adaptation to Imposed Demands",
            "Standard Athletic Improvement Design",
            "Systematic Aerobic Intensity Development",
            "Structured Activity Integration Doctrine"
          ],
          correctAnswer: 0,
          explanation: "Right! SAID means your body adapts specifically to the type of training you do."
        },
        {
          id: 3,
          question: "How many strength training days per week for most people?",
          options: [
            "2-3 days",
            "7 days",
            "1 day only",
            "5-6 days"
          ],
          correctAnswer: 0,
          explanation: "Correct! 2-3 days allows for adequate recovery between sessions."
        },
        {
          id: 4,
          question: "When does actual muscle strengthening occur?",
          options: [
            "During recovery",
            "During exercise",
            "While eating",
            "While sleeping only"
          ],
          correctAnswer: 0,
          explanation: "Yes! Muscles repair and strengthen during recovery periods, not during workouts."
        },
        {
          id: 5,
          question: "What should a program end with?",
          options: [
            "Cool-down",
            "Maximum sprint",
            "New exercises",
            "Weight increase"
          ],
          correctAnswer: 0,
          explanation: "Correct! A cool-down helps your body return safely to resting state."
        },
        {
          id: 6,
          question: "How many cardio days per week for most people?",
          options: [
            "3-5 days",
            "1 day only",
            "7 days",
            "Every other week"
          ],
          correctAnswer: 0,
          explanation: "Right! 3-5 days provides cardiovascular benefits without overtraining."
        },
        {
          id: 7,
          question: "What principle aligns training with goals?",
          options: [
            "Specificity",
            "Randomness",
            "Intensity only",
            "Duration only"
          ],
          correctAnswer: 0,
          explanation: "Correct! The principle of specificity means training should match your goals."
        },
        {
          id: 8,
          question: "What is often better than complete inactivity on rest days?",
          options: [
            "Active recovery",
            "Maximum training",
            "Competition",
            "Fasting"
          ],
          correctAnswer: 0,
          explanation: "Yes! Light activity promotes blood flow and recovery better than total rest."
        },
        {
          id: 9,
          question: "How long should a warm-up typically last?",
          options: [
            "5-10 minutes",
            "30 minutes",
            "1-2 minutes",
            "Not needed"
          ],
          correctAnswer: 0,
          explanation: "Right! 5-10 minutes is sufficient to prepare most people for exercise."
        },
        {
          id: 10,
          question: "What is your most powerful recovery tool?",
          options: [
            "Sleep",
            "Protein shakes",
            "Massage",
            "Supplements"
          ],
          correctAnswer: 0,
          explanation: "Correct! Quality sleep is essential for physical and mental recovery."
        },
        {
          id: 11,
          question: "What does flexibility training maintain?",
          options: [
            "Range of motion",
            "Only muscle size",
            "Only strength",
            "Only endurance"
          ],
          correctAnswer: 0,
          explanation: "Yes! Flexibility work preserves and improves joint mobility."
        },
        {
          id: 12,
          question: "What prevents burnout in exercise programs?",
          options: [
            "Mental refreshment",
            "Training harder",
            "Skipping rest",
            "Adding more exercises"
          ],
          correctAnswer: 0,
          explanation: "Correct! Adequate rest prevents mental fatigue and maintains motivation."
        },
        {
          id: 13,
          question: "How many components does a complete program have?",
          options: [
            "Five",
            "Three",
            "Seven",
            "Ten"
          ],
          correctAnswer: 0,
          explanation: "Right! Warm-up, cardio, strength, flexibility, and cool-down."
        },
        {
          id: 14,
          question: "What reduces overuse injury risks?",
          options: [
            "Adequate rest",
            "Training daily",
            "Ignoring pain",
            "Same exercises always"
          ],
          correctAnswer: 0,
          explanation: "Correct! Rest days allow tissues to repair and adapt."
        },
        {
          id: 15,
          question: "What type of training builds bone density?",
          options: [
            "Strength training",
            "Only cardio",
            "Only stretching",
            "Only balance work"
          ],
          correctAnswer: 0,
          explanation: "Yes! Weight-bearing exercises stimulate bone strengthening."
        },
        {
          id: 16,
          question: "What should be done daily?",
          options: [
            "Flexibility work",
            "Maximum strength training",
            "Two-hour cardio",
            "Competition practice"
          ],
          correctAnswer: 0,
          explanation: "Correct! Gentle stretching can be done daily to maintain mobility."
        },
        {
          id: 17,
          question: "What does active recovery promote?",
          options: [
            "Blood flow",
            "Muscle breakdown",
            "Energy depletion",
            "Injury creation"
          ],
          correctAnswer: 0,
          explanation: "Right! Light movement improves circulation and nutrient delivery."
        },
        {
          id: 18,
          question: "What replenishes during recovery?",
          options: [
            "Energy stores",
            "Only muscle damage",
            "Only fatigue",
            "Only sweat loss"
          ],
          correctAnswer: 0,
          explanation: "Correct! Recovery restores glycogen and other energy sources."
        },
        {
          id: 19,
          question: "How long should flexibility training last?",
          options: [
            "10-15 minutes",
            "1-2 minutes",
            "30-45 minutes",
            "Not included"
          ],
          correctAnswer: 0,
          explanation: "Yes! 10-15 minutes is sufficient for maintaining flexibility."
        },
        {
          id: 20,
          question: "What is the key to program design?",
          options: [
            "Balance",
            "Maximum effort always",
            "Only one type of exercise",
            "Following trends only"
          ],
          correctAnswer: 0,
          explanation: "Correct! Balanced programs address all fitness components for overall health."
        }
      ]
    }
  ],
  
  finalExam: {
    title: "Exercise Science Certificate Final Exam",
    passingScore: 70,
    questions: [
      {
        id: 1,
        question: "What are the three main components of the musculoskeletal system?",
        options: [
          "Bones, muscles, and joints",
          "Tendons, ligaments, and cartilage",
          "Nerves, blood vessels, and organs",
          "Skin, fat, and connective tissue"
        ],
        correctAnswer: 0,
        explanation: "Correct! These three work together for all human movement."
      },
      {
        id: 2,
        question: "Which energy system provides immediate energy for short bursts?",
        options: [
          "ATP-PCr System",
          "Glycolytic System",
          "Oxidative System",
          "Aerobic System"
        ],
        correctAnswer: 0,
        explanation: "Right! This system works for 0-10 second efforts."
      },
      {
        id: 3,
        question: "What type of muscle contraction occurs during the lifting phase?",
        options: [
          "Concentric",
          "Eccentric",
          "Isometric",
          "Static"
        ],
        correctAnswer: 0,
        explanation: "Correct! Concentric contractions shorten muscles while producing force."
      },
      {
        id: 4,
        question: "How do you estimate maximum heart rate?",
        options: [
          "220 minus age",
          "200 plus age",
          "180 minus age",
          "Age times 2"
        ],
        correctAnswer: 0,
        explanation: "Yes! This simple formula gives an estimate for training zones."
      },
      {
        id: 5,
        question: "When is static stretching most effective?",
        options: [
          "After exercise",
          "Before exercise",
          "During exercise",
          "Instead of exercise"
        ],
        correctAnswer: 0,
        explanation: "Correct! Muscles are warm and more pliable after exercise."
      },
      {
        id: 6,
        question: "What should every complete exercise program start with?",
        options: [
          "Warm-up",
          "Maximum effort",
          "Cool-down",
          "Stretching"
        ],
        correctAnswer: 0,
        explanation: "Right! Warming up prepares the body and prevents injuries."
      },
      {
        id: 7,
        question: "In which plane does forward walking occur?",
        options: [
          "Sagittal plane",
          "Frontal plane",
          "Transverse plane",
          "Coronal plane"
        ],
        correctAnswer: 0,
        explanation: "Correct! Forward/backward movements happen in the sagittal plane."
      },
      {
        id: 8,
        question: "What happens to heart rate during exercise?",
        options: [
          "It increases",
          "It decreases",
          "It stays the same",
          "It becomes irregular"
        ],
        correctAnswer: 0,
        explanation: "Yes! Heart rate increases to deliver more oxygen to muscles."
      },
      {
        id: 9,
        question: "Which principle involves gradually increasing demands on muscles?",
        options: [
          "Progressive Overload",
          "Muscle Confusion",
          "Static Stretching",
          "Cardio Acceleration"
        ],
        correctAnswer: 0,
        explanation: "Correct! This principle drives strength improvements over time."
      },
      {
        id: 10,
        question: "What type of cardio involves alternating high and low intensity?",
        options: [
          "Interval Training",
          "Steady-State",
          "Fartlek Training",
          "Continuous Training"
        ],
        correctAnswer: 0,
        explanation: "Right! Intervals alternate work and recovery periods."
      },
      {
        id: 11,
        question: "What type of stretching involves moving through range of motion?",
        options: [
          "Dynamic Stretching",
          "Static Stretching",
          "PNF Stretching",
          "Passive Stretching"
        ],
        correctAnswer: 0,
        explanation: "Correct! Dynamic stretching prepares muscles for activity."
      },
      {
        id: 12,
        question: "What does the SAID principle emphasize?",
        options: [
          "Specificity of training",
          "Random exercise selection",
          "Maximum effort always",
          "Long duration only"
        ],
        correctAnswer: 0,
        explanation: "Yes! Your body adapts specifically to the training you do."
      },
      {
        id: 13,
        question: "How many muscles does the average human body have?",
        options: [
          "Approximately 650",
          "About 400",
          "Exactly 500",
          "Over 800"
        ],
        correctAnswer: 0,
        explanation: "Correct! The human body has about 650 muscles."
      },
      {
        id: 14,
        question: "Which energy system uses oxygen for long-term energy?",
        options: [
          "Oxidative System",
          "ATP-PCr System",
          "Glycolytic System",
          "Immediate System"
        ],
        correctAnswer: 0,
        explanation: "Right! This aerobic system fuels activities lasting 2+ minutes."
      },
      {
        id: 15,
        question: "Which contraction type causes the most muscle soreness?",
        options: [
          "Eccentric",
          "Concentric",
          "Isometric",
          "Ballistic"
        ],
        correctAnswer: 0,
        explanation: "Correct! Eccentric contractions cause more muscle damage."
      },
      {
        id: 16,
        question: "What is the best measure of cardiovascular fitness?",
        options: [
          "VO2 Max",
          "Resting heart rate",
          "Blood pressure",
          "Body weight"
        ],
        correctAnswer: 0,
        explanation: "Yes! VO2 Max measures maximum oxygen consumption."
      },
      {
        id: 17,
        question: "Which stretching type is generally not recommended?",
        options: [
          "Ballistic Stretching",
          "Static Stretching",
          "Dynamic Stretching",
          "PNF Stretching"
        ],
        correctAnswer: 0,
        explanation: "Correct! Ballistic stretching uses bouncing that can cause injury."
      },
      {
        id: 18,
        question: "How many strength training days per week for most people?",
        options: [
          "2-3 days",
          "7 days",
          "1 day only",
          "5-6 days"
        ],
        correctAnswer: 0,
        explanation: "Right! This allows adequate recovery between sessions."
      },
      {
        id: 19,
        question: "What movement decreases joint angle?",
        options: [
          "Flexion",
          "Extension",
          "Abduction",
          "Adduction"
        ],
        correctAnswer: 0,
        explanation: "Correct! Flexion bends joints, decreasing the angle."
      },
      {
        id: 20,
        question: "What often causes the 'burn' during hard exercise?",
        options: [
          "Lactic acid buildup",
          "Lack of oxygen",
          "Muscle tearing",
          "Dehydration"
        ],
        correctAnswer: 0,
        explanation: "Yes! This burning sensation comes from metabolic byproducts."
      },
      {
        id: 21,
        question: "What should you prioritize over heavier weight in strength training?",
        options: [
          "Proper form",
          "More sets",
          "Faster speed",
          "Shorter workouts"
        ],
        correctAnswer: 0,
        explanation: "Correct! Good form prevents injuries and ensures effectiveness."
      },
      {
        id: 22,
        question: "What percentage range is moderate exercise intensity?",
        options: [
          "50-70% of max heart rate",
          "30-40% of max heart rate",
          "80-90% of max heart rate",
          "100% of max heart rate"
        ],
        correctAnswer: 0,
        explanation: "Right! This zone provides cardiovascular benefits safely."
      },
      {
        id: 23,
        question: "How long should you hold static stretches?",
        options: [
          "15-30 seconds",
          "5-10 seconds",
          "1-2 minutes",
          "Until it hurts"
        ],
        correctAnswer: 0,
        explanation: "Correct! This duration allows muscles to relax and lengthen."
      },
      {
        id: 24,
        question: "What is your most powerful recovery tool?",
        options: [
          "Sleep",
          "Protein shakes",
          "Massage",
          "Supplements"
        ],
        correctAnswer: 0,
        explanation: "Yes! Quality sleep is essential for all recovery processes."
      },
      {
        id: 25,
        question: "What are the three movement planes?",
        options: [
          "Sagittal, frontal, transverse",
          "Horizontal, vertical, diagonal",
          "Linear, circular, spiral",
          "Up, down, sideways"
        ],
        correctAnswer: 0,
        explanation: "Correct! These three planes describe all human movements."
      },
      {
        id: 26,
        question: "What increases to pump more blood during exercise?",
        options: [
          "Both heart rate and stroke volume",
          "Only heart rate",
          "Only stroke volume",
          "Neither increases"
        ],
        correctAnswer: 0,
        explanation: "Right! Both contribute to increased cardiac output."
      },
      {
        id: 27,
        question: "What is the 'golden rule' of strength training?",
        options: [
          "Increase one variable at a time",
          "Lift maximum weight always",
          "Never take rest days",
          "Only train one body part"
        ],
        correctAnswer: 0,
        explanation: "Correct! This prevents overtraining and tracks progress."
      },
      {
        id: 28,
        question: "What can regular cardio reduce risk of by up to 35%?",
        options: [
          "Heart disease",
          "Common cold",
          "Broken bones",
          "Skin conditions"
        ],
        correctAnswer: 0,
        explanation: "Yes! Cardiovascular exercise significantly reduces heart disease risk."
      },
      {
        id: 29,
        question: "What should you never stretch to?",
        options: [
          "The point of sharp pain",
          "Mild discomfort",
          "Feeling of tension",
          "Warm sensation"
        ],
        correctAnswer: 0,
        explanation: "Correct! Sharp pain indicates potential tissue damage."
      },
      {
        id: 30,
        question: "What principle means training should match goals?",
        options: [
          "Specificity",
          "Randomness",
          "Intensity only",
          "Duration only"
        ],
        correctAnswer: 0,
        explanation: "Right! Specific training produces specific adaptations."
      },
      {
        id: 31,
        question: "How many bones are in the adult human body?",
        options: [
          "206",
          "156",
          "256",
          "306"
        ],
        correctAnswer: 0,
        explanation: "Correct! Adults have 206 bones forming the skeleton."
      },
      {
        id: 32,
        question: "Which system works for 10 seconds to 2 minutes without oxygen?",
        options: [
          "Glycolytic System",
          "ATP-PCr System",
          "Oxidative System",
          "Aerobic System"
        ],
        correctAnswer: 0,
        explanation: "Yes! This anaerobic system fuels medium-duration efforts."
      },
      {
        id: 33,
        question: "Which exercise primarily works legs and core?",
        options: [
          "Squat",
          "Push-up",
          "Row",
          "Overhead Press"
        ],
        correctAnswer: 0,
        explanation: "Correct! Squats are fundamental lower body exercises."
      },
      {
        id: 34,
        question: "What does a lower resting heart rate often indicate?",
        options: [
          "Better cardiovascular fitness",
          "Poor health",
          "Dehydration",
          "Overtraining"
        ],
        correctAnswer: 0,
        explanation: "Right! A more efficient heart needs fewer beats at rest."
      },
      {
        id: 35,
        question: "When is dynamic stretching best done?",
        options: [
          "Before exercise",
          "After exercise",
          "During sleep",
          "After meals"
        ],
        correctAnswer: 0,
        explanation: "Correct! It prepares muscles for upcoming activity."
      },
      {
        id: 36,
        question: "How many cardio days per week for most people?",
        options: [
          "3-5 days",
          "1 day only",
          "7 days",
          "Every other week"
        ],
        correctAnswer: 0,
        explanation: "Yes! This frequency provides optimal cardiovascular benefits."
      },
      {
        id: 37,
        question: "What movement increases joint angle?",
        options: [
          "Extension",
          "Flexion",
          "Abduction",
          "Rotation"
        ],
        correctAnswer: 0,
        explanation: "Correct! Extension straightens joints, increasing the angle."
      },
      {
        id: 38,
        question: "What improves as exercise continues?",
        options: [
          "Oxygen uptake",
          "Blood volume decreases",
          "Heart rate drops",
          "Breathing stops"
        ],
        correctAnswer: 0,
        explanation: "Right! Your body becomes more efficient at using oxygen."
      },
      {
        id: 39,
        question: "How many times should you repeat each stretch?",
        options: [
          "2-3 times",
          "Once only",
          "10-15 times",
          "Until bored"
        ],
        correctAnswer: 0,
        explanation: "Correct! Repetition improves stretching effectiveness."
      },
      {
        id: 40,
        question: "What is the key to exercise program design?",
        options: [
          "Balance",
          "Maximum effort always",
          "Only one type of exercise",
          "Following trends only"
        ],
        correctAnswer: 0,
        explanation: "Yes! Balanced programs address all fitness components."
      }
    ]
  }
};

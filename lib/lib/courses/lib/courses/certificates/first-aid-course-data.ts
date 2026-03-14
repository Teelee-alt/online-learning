// First Aid (Certificate) Course Data
export const firstAidCertificateCourse = {
  // COURSE METADATA
  id: "first-aid-certificate",
  title: "First Aid (Certificate)",
  description: "Learn essential first aid skills to respond effectively in emergencies. Covers wound care, CPR, choking response, and basic life support for adults, children, and infants.",
  duration: "6 weeks",
  timeCommitment: "4-6 hours per week",
  price: 12,
  upgradePrice: 18,
  icon: "🩹",
  badge: "Certificate",
  prerequisites: "None",
  
  // MODULE 1: FIRST AID FOUNDATIONS
  modules: [
    {
      id: 1,
      title: "Introduction to First Aid and Emergency Response",
      content: `
# Introduction to First Aid and Emergency Response

First aid is the immediate care given to someone who is injured or suddenly becomes ill. This module covers the fundamental principles of first aid and how to respond effectively in emergencies.

## What is First Aid?
First aid is the initial assistance or treatment given to a person who is injured or suddenly taken ill before professional medical help arrives. The main goals are:
- **Preserve life** - Prevent death
- **Prevent further injury** - Stop conditions from getting worse
- **Promote recovery** - Help the person heal

## The Three Cs of Emergency Response
When you encounter an emergency, remember the Three Cs:

**Check:**
- Check the scene for safety before approaching
- Check the person for consciousness
- Check for life-threatening conditions

**Call:**
- Call for professional medical help
- Call emergency services (911 or local number)
- Provide clear information to dispatcher

**Care:**
- Provide appropriate first aid care
- Continue care until help arrives
- Comfort and reassure the person

## Assessing the Situation

**Scene Safety Assessment:**
- Look for dangers like fire, traffic, electricity, or violence
- Never put yourself in danger to help others
- If scene is unsafe, call for help but do not enter
- Make the scene safe if possible before approaching

**Primary Survey (DRSABCD):**
This quick check identifies life-threatening conditions:

**D - Danger:** Check for danger to yourself and others
**R - Response:** Check if person responds to voice or touch
**S - Send for help:** Call emergency services
**A - Airway:** Check and clear airway if blocked
**B - Breathing:** Check for normal breathing
**C - CPR:** Start CPR if not breathing normally
**D - Defibrillation:** Use AED if available

## Calling Emergency Services
When calling for help, be prepared to provide:
- Your exact location (address, landmarks)
- What happened (type of emergency)
- Number of people injured
- Condition of injured person(s)
- What first aid is being given
- Your phone number
- **Do not hang up first** - let dispatcher end call

## First Aid Kit Essentials
A basic first aid kit should contain:
- Adhesive bandages (various sizes)
- Sterile gauze pads and roller bandages
- Adhesive tape
- Antiseptic wipes
- Scissors and tweezers
- Disposable gloves
- CPR face shield or mask
- Emergency blanket
- Instant cold pack
- First aid manual

## Legal Considerations

**Good Samaritan Laws:**
- Protect people who provide reasonable assistance
- Vary by location but generally provide protection
- Require you to act in good faith and within your training
- Do not require payment for your help

**Consent:**
- Ask conscious adults for permission to help
- For unconscious adults, implied consent applies
- For children, get parent/guardian consent if present
- In life-threatening situations, consent is implied

**Duty to Act:**
- No general duty to provide first aid (except in some jobs)
- Once you start helping, you must continue until help arrives
- Do not abandon the person you are helping

Remember: Your safety comes first. Never become another victim.
`,
      completed: false,
      quiz: [
        {
          id: 1,
          question: "What is the main goal of first aid?",
          options: [
            "To replace professional medical care",
            "To preserve life and prevent further injury",
            "To diagnose medical conditions",
            "To provide long-term treatment"
          ],
          correctAnswer: 1,
          explanation: "First aid aims to preserve life, prevent further injury, and promote recovery until professional help arrives."
        },
        {
          id: 2,
          question: "What are the Three Cs of emergency response?",
          options: [
            "Call, Care, Carry",
            "Check, Call, Care",
            "Check, Call, Carry",
            "Call, Check, Carry"
          ],
          correctAnswer: 1,
          explanation: "The Three Cs are Check the scene, Call for help, and Care for the injured person."
        },
        {
          id: 3,
          question: "What should you check first in an emergency?",
          options: [
            "The injured person's breathing",
            "Scene safety for yourself and others",
            "The person's pulse",
            "What caused the injury"
          ],
          correctAnswer: 1,
          explanation: "Always check scene safety first to ensure you don't become another victim."
        },
        {
          id: 4,
          question: "What does DRSABCD stand for?",
          options: [
            "Danger, Response, Send, Airway, Breathing, CPR, Defibrillation",
            "Dial, Response, Send, Airway, Breathing, CPR, Doctor",
            "Danger, Rescue, Send, Airway, Breathing, CPR, Defibrillation",
            "Dial, Rescue, Send, Airway, Breathing, CPR, Doctor"
          ],
          correctAnswer: 0,
          explanation: "DRSABCD stands for Danger, Response, Send for help, Airway, Breathing, CPR, Defibrillation."
        },
        {
          id: 5,
          question: "When should you call emergency services?",
          options: [
            "Only for life-threatening emergencies",
            "When you send someone else to call",
            "After providing all first aid",
            "Immediately after checking scene safety"
          ],
          correctAnswer: 0,
          explanation: "Call emergency services immediately for life-threatening emergencies, or send someone to call."
        },
        {
          id: 6,
          question: "What information should you give when calling emergency services?",
          options: [
            "Only your name",
            "Exact location and what happened",
            "Only the person's symptoms",
            "Your medical qualifications"
          ],
          correctAnswer: 1,
          explanation: "Provide exact location, what happened, number of injured, their condition, and what help you're giving."
        },
        {
          id: 7,
          question: "What should a basic first aid kit contain?",
          options: [
            "Only bandages and antiseptic",
            "Various supplies for different injuries",
            "Only prescription medications",
            "Only tools for major surgery"
          ],
          correctAnswer: 1,
          explanation: "A basic kit should contain bandages, gauze, antiseptic, gloves, CPR mask, scissors, and other essential items."
        },
        {
          id: 8,
          question: "What do Good Samaritan laws protect?",
          options: [
            "Only trained medical professionals",
            "People providing reasonable assistance in good faith",
            "Only people who get paid for helping",
            "Only people with first aid certification"
          ],
          correctAnswer: 1,
          explanation: "Good Samaritan laws protect people who provide reasonable assistance in good faith within their training."
        },
        {
          id: 9,
          question: "When is consent implied?",
          options: [
            "Always for all situations",
            "Only for children with parents present",
            "For unconscious adults in life-threatening situations",
            "Only for minor injuries"
          ],
          correctAnswer: 2,
          explanation: "Consent is implied for unconscious adults in life-threatening situations when they cannot give consent."
        },
        {
          id: 10,
          question: "What should you do if a scene is unsafe?",
          options: [
            "Rush in to help anyway",
            "Call for help but do not enter",
            "Wait for someone else to help",
            "Make the person come to you"
          ],
          correctAnswer: 1,
          explanation: "If a scene is unsafe, call for help but do not enter and risk becoming another victim."
        },
        {
          id: 11,
          question: "What does the 'D' in DRSABCD stand for first?",
          options: [
            "Doctor",
            "Danger",
            "Dial",
            "Defibrillation"
          ],
          correctAnswer: 1,
          explanation: "The first 'D' stands for Danger - check for danger to yourself and others."
        },
        {
          id: 12,
          question: "When checking response, what should you do?",
          options: [
            "Shake the person hard",
            "Tap and shout "Are you okay?"",
            "Pour water on their face",
            "Check pulse immediately"
          ],
          correctAnswer: 1,
          explanation: "Tap the person's shoulder and shout "Are you okay?" to check for response."
        },
        {
          id: 13,
          question: "What should you not do when calling emergency services?",
          options: [
            "Give clear information",
            "Hang up before the dispatcher",
            "Stay on the line for instructions",
            "Provide your phone number"
          ],
          correctAnswer: 1,
          explanation: "Do not hang up first - let the dispatcher end the call when they have all information."
        },
        {
          id: 14,
          question: "Why wear gloves in first aid?",
          options: [
            "Only for cleanliness",
            "To protect from bloodborne pathogens",
            "Only for major injuries",
            "Because it looks professional"
          ],
          correctAnswer: 1,
          explanation: "Gloves protect both you and the injured person from infection and bloodborne pathogens."
        },
        {
          id: 15,
          question: "What is the duty to act?",
          options: [
            "You must always help in any emergency",
            "Once you start helping, you must continue",
            "Only doctors have duty to act",
            "You must help only if paid"
          ],
          correctAnswer: 1,
          explanation: "Once you begin providing first aid, you have a duty to continue until professional help arrives."
        },
        {
          id: 16,
          question: "What should you do if alone with an unconscious adult?",
          options: [
            "Do CPR for 1 minute then call",
            "Call emergency services first, then help",
            "Try to wake them for 5 minutes",
            "Drive them to hospital"
          ],
          correctAnswer: 1,
          explanation: "For an unconscious adult, call emergency services first if alone, then provide care."
        },
        {
          id: 17,
          question: "What does checking breathing involve?",
          options: [
            "Only feeling for breath",
            "Look, listen, and feel for normal breathing",
            "Only watching chest movement",
            "Only for 5 seconds"
          ],
          correctAnswer: 1,
          explanation: "Check breathing by looking for chest movement, listening for breath sounds, and feeling for air."
        },
        {
          id: 18,
          question: "When should you move an injured person?",
          options: [
            "Always to make them comfortable",
            "Only if in immediate danger",
            "Whenever you want to help",
            "Only if they ask to be moved"
          ],
          correctAnswer: 1,
          explanation: "Only move an injured person if they are in immediate danger, as moving can worsen injuries."
        },
        {
          id: 19,
          question: "What is the most important rule in first aid?",
          options: [
            "Your safety comes first",
            "Always help everyone",
            "Call family first",
            "Treat worst injury first"
          ],
          correctAnswer: 0,
          explanation: "Your own safety is the most important rule - never become another victim."
        },
        {
          id: 20,
          question: "What should you do after providing first aid?",
          options: [
            "Leave immediately",
            "Continue care until help arrives",
            "Ask for payment",
            "Give medical advice"
          ],
          correctAnswer: 1,
          explanation: "Continue providing care and monitoring until professional medical help arrives and takes over."
        }
      ]
    },

    // MODULE 2: CPR AND AED USE
    {
      id: 2,
      title: "CPR and Automated External Defibrillator (AED)",
      content: `
# CPR and Automated External Defibrillator (AED)

Cardiopulmonary Resuscitation (CPR) and Automated External Defibrillator (AED) use can double or triple survival rates for cardiac arrest. This module teaches these life-saving skills.

## What is Cardiac Arrest?
Cardiac arrest occurs when the heart suddenly stops beating effectively. The person:
- Becomes unresponsive
- Stops breathing normally
- Has no pulse
- Can die within minutes without intervention

## Chain of Survival
The Chain of Survival outlines the steps that maximize survival chances:

**1. Early Recognition and Call for Help**
- Recognize cardiac arrest
- Call emergency services immediately
- Get an AED if available

**2. Early CPR**
- Begin chest compressions immediately
- Maintain blood flow to brain and organs
- Buy time until defibrillation

**3. Early Defibrillation**
- Use AED as soon as available
- Electric shock can restore normal rhythm
- Each minute delay reduces survival chance

**4. Early Advanced Care**
- Professional medical responders arrive
- Advanced life support provided
- Transport to hospital

## CPR for Adults

**Steps for Adult CPR:**

**1. Check Responsiveness**
- Tap shoulder and shout "Are you okay?"
- If no response, call for help and get AED

**2. Call Emergency Services**
- Send someone to call 911
- If alone, call then begin CPR

**3. Check Breathing**
- Look, listen, and feel for normal breathing
- If not breathing or only gasping, start CPR

**4. Begin Chest Compressions**
- Place heel of one hand on center of chest
- Place other hand on top, interlock fingers
- Position shoulders over hands, arms straight
- Push hard and fast: 2-2.4 inches deep
- Rate: 100-120 compressions per minute
- Allow full chest recoil between compressions
- Minimize interruptions

**5. Give Rescue Breaths (if trained)**
- After 30 compressions, give 2 breaths
- Tilt head back, lift chin to open airway
- Pinch nose, seal your mouth over theirs
- Give breath for 1 second, watch chest rise
- Repeat 30:2 ratio until help arrives or AED ready

**Compression-Only CPR:**
- If untrained or unwilling to give breaths
- Do continuous chest compressions
- Still effective for first few minutes

## CPR for Children and Infants

**Child CPR (1 year to puberty):**
- Use one or two hands as needed for depth
- Compression depth: about 2 inches
- If alone, do 5 cycles (2 minutes) then call

**Infant CPR (under 1 year):**
- Use two fingers for compressions
- Compression depth: about 1.5 inches
- Location: just below nipple line
- Support head when giving breaths
- Cover both nose and mouth with your mouth

## Automated External Defibrillator (AED)

**What is an AED?**
- Portable device that analyzes heart rhythm
- Advises shock if needed
- Guides user through process with voice prompts

**How to Use an AED:**

**1. Turn On AED**
- Open case, power on automatically or press button
- Follow voice prompts

**2. Attach Electrode Pads**
- Expose bare chest, dry if wet
- Remove medication patches if present
- Place pads as shown in diagram:
  - Right side: upper right chest below collarbone
  - Left side: lower left chest below armpit

**3. Analyze Rhythm**
- Stop CPR when AED says "analyzing"
- Ensure no one touches the person
- AED will analyze heart rhythm

**4. Deliver Shock if Advised**
- AED will say "shock advised" or "no shock advised"
- If shock advised: Ensure no one touches person
- Press shock button when AED instructs
- Shock will cause muscle contraction

**5. Resume CPR**
- Immediately resume CPR after shock
- Follow AED prompts for when to stop for analysis

## Special Considerations

**Water and AED Use:**
- Remove person from water
- Dry chest thoroughly
- AED can be used on wet surfaces if chest dry

**Hairy Chest:**
- May need to shave area for good pad contact
- Some AEDs include razor

**Medication Patches:**
- Remove any medication patches
- Wipe area clean before placing pads

**Implanted Devices:**
- Pacemakers or defibrillators may show lump under skin
- Place pads at least 1 inch away from device

**Pregnancy:**
- CPR is same for pregnant women
- Place hands slightly higher on sternum if showing
- AED use is safe during pregnancy

## Continuing Care
- Continue CPR until:
  - Professional help arrives and takes over
  - AED advises no further shocks and person starts breathing
  - You are too exhausted to continue
  - Scene becomes unsafe

Remember: Early CPR and defibrillation save lives. Don't be afraid to help.
`,
      completed: false,
      quiz: [
        {
          id: 1,
          question: "What is cardiac arrest?",
          options: [
            "Heart attack",
            "Heart suddenly stops beating effectively",
            "Difficulty breathing",
            "High blood pressure"
          ],
          correctAnswer: 1,
          explanation: "Cardiac arrest occurs when the heart suddenly stops beating effectively, requiring immediate CPR."
        },
        {
          id: 2,
          question: "What is the first step in the Chain of Survival?",
          options: [
            "Early CPR",
            "Early recognition and call for help",
            "Early defibrillation",
            "Early advanced care"
          ],
          correctAnswer: 1,
          explanation: "Early recognition of cardiac arrest and calling for help is the first step in the Chain of Survival."
        },
        {
          id: 3,
          question: "What is the correct compression depth for adult CPR?",
          options: [
            "1 inch",
            "2-2.4 inches",
            "3 inches",
            "As deep as possible"
          ],
          correctAnswer: 1,
          explanation: "Adult chest compressions should be 2-2.4 inches deep for effective CPR."
        },
        {
          id: 4,
          question: "What is the correct compression rate for CPR?",
          options: [
            "60-80 per minute",
            "80-100 per minute",
            "100-120 per minute",
            "As fast as possible"
          ],
          correctAnswer: 2,
          explanation: "CPR compressions should be at a rate of 100-120 per minute for all ages."
        },
        {
          id: 5,
          question: "What should you do if you're untrained in CPR?",
          options: [
            "Do nothing and wait for help",
            "Do compression-only CPR",
            "Try mouth-to-mouth only",
            "Only use AED"
          ],
          correctAnswer: 1,
          explanation: "If untrained, do compression-only CPR - continuous chest compressions without rescue breaths."
        },
        {
          id: 6,
          question: "Where should AED pads be placed on an adult?",
          options: [
            "Both on the front of chest",
            "One on chest, one on back",
            "Both on the back",
            "On wrists and ankles"
          ],
          correctAnswer: 0,
          explanation: "Place one pad on upper right chest below collarbone, one on lower left chest below armpit."
        },
        {
          id: 7,
          question: "What should you do when AED says "analyzing"?",
          options: [
            "Continue CPR",
            "Stop CPR and don't touch person",
            "Check breathing",
            "Move the person"
          ],
          correctAnswer: 1,
          explanation: "Stop CPR when AED says "analyzing" and ensure no one touches the person during analysis."
        },
        {
          id: 8,
          question: "How deep should infant chest compressions be?",
          options: [
            "1 inch",
            "1.5 inches",
            "2 inches",
            "Just enough to feel"
          ],
          correctAnswer: 1,
          explanation: "Infant chest compressions should be about 1.5 inches deep using two fingers."
        },
        {
          id: 9,
          question: "What is the compression to breath ratio for adult CPR?",
          options: [
            "15 compressions to 2 breaths",
            "30 compressions to 2 breaths",
            "30 compressions to 1 breath",
            "50 compressions to 2 breaths"
          ],
          correctAnswer: 1,
          explanation: "The ratio for adult CPR is 30 chest compressions to 2 rescue breaths."
        },
        {
          id: 10,
          question: "What should you do with a wet chest before using AED?",
          options: [
            "Use AED anyway",
            "Dry chest thoroughly",
            "Pour water to improve conduction",
            "Cover with clothing"
          ],
          correctAnswer: 1,
          explanation: "Dry the chest thoroughly before placing AED pads to ensure good contact."
        },
        {
          id: 11,
          question: "When should you stop CPR?",
          options: [
            "After 1 minute",
            "When professional help arrives",
            "When tired",
            "When person coughs"
          ],
          correctAnswer: 1,
          explanation: "Continue CPR until professional help arrives and takes over or you are too exhausted to continue."
        },
        {
          id: 12,
          question: "What does AED stand for?",
          options: [
            "Automated Emergency Device",
            "Automated External Defibrillator",
            "Advanced Emergency Defibrillator",
            "Automatic External Device"
          ],
          correctAnswer: 1,
          explanation: "AED stands for Automated External Defibrillator."
        },
        {
          id: 13,
          question: "How do you open an infant's airway?",
          options: [
            "Tilt head back far",
            "Head tilt-chin lift gently",
            "Turn head to side",
            "Push forehead back"
          ],
          correctAnswer: 1,
          explanation: "For infants, use head tilt-chin lift gently to avoid overextending the neck."
        },
        {
          id: 14,
          question: "What should you do with medication patches before AED use?",
          options: [
            "Leave them on",
            "Remove them and wipe area",
            "Place pads over them",
            "Cover with bandage"
          ],
          correctAnswer: 1,
          explanation: "Remove medication patches and wipe the area clean before placing AED pads."
        },
        {
          id: 15,
          question: "What is gasping during cardiac arrest?",
          options: [
            "Normal breathing",
            "Sign of recovery",
            "Agonal breathing - not normal",
            "Sign of choking"
          ],
          correctAnswer: 2,
          explanation: "Gasping or agonal breathing is not normal breathing and means CPR should be started."
        },
        {
          id: 16,
          question: "Where should hands be for child CPR?",
          options: [
            "One or two hands as needed",
            "Always two hands",
            "Only one hand",
            "Fists only"
          ],
          correctAnswer: 0,
          explanation: "For child CPR, use one or two hands as needed to achieve proper compression depth."
        },
        {
          id: 17,
          question: "What should you do if AED advises no shock?",
          options: [
            "Turn AED off",
            "Remove pads",
            "Resume CPR immediately",
            "Wait for next analysis"
          ],
          correctAnswer: 2,
          explanation: "If AED says "no shock advised," immediately resume CPR starting with chest compressions."
        },
        {
          id: 18,
          question: "How should you give breaths to an infant?",
          options: [
            "Mouth to mouth only",
            "Cover both nose and mouth",
            "Only through nose",
            "Use bag valve mask only"
          ],
          correctAnswer: 1,
          explanation: "For infants, cover both nose and mouth with your mouth to give effective rescue breaths."
        },
        {
          id: 19,
          question: "What is early defibrillation important?",
          options: [
            "It's not very important",
            "It can restore normal heart rhythm",
            "It replaces CPR",
            "It only works for heart attacks"
          ],
          correctAnswer: 1,
          explanation: "Early defibrillation with an AED can restore normal heart rhythm in cardiac arrest."
        },
        {
          id: 20,
          question: "What should you minimize during CPR?",
          options: [
            "Breaths given",
            "Interruptions in compressions",
            "Depth of compressions",
            "Calling for help"
          ],
          correctAnswer: 1,
          explanation: "Minimize interruptions in chest compressions to maintain blood flow to vital organs."
        }
      ]
    },

    // MODULE 3: BLEEDING AND WOUND CARE
    {
      id: 3,
      title: "Bleeding Control and Wound Management",
      content: `
# Bleeding Control and Wound Management

Controlling bleeding is a critical first aid skill. This module covers different types of wounds, bleeding control techniques, and proper wound care.

## Types of Bleeding

**Arterial Bleeding:**
- Bright red blood
- Spurts with heartbeat
- Most serious type
- Can lead to rapid blood loss

**Venous Bleeding:**
- Dark red blood
- Flows steadily
- Easier to control than arterial
- Still requires prompt treatment

**Capillary Bleeding:**
- Slow, oozing blood
- Most common type
- Usually stops on its own
- From minor cuts and scrapes

## Assessing Bleeding Severity

**Minor Bleeding:**
- Small amount of blood
- Stops with direct pressure
- No signs of shock
- From minor cuts or scrapes

**Serious Bleeding:**
- Large amount of blood
- Soaks through dressings quickly
- May cause signs of shock
- Requires immediate attention

**Life-Threatening Bleeding:**
- Rapid blood loss
- Spurting blood
- Person becomes pale, cold, confused
- Requires tourniquet or hemostatic dressing

## Steps to Control Bleeding

**1. Protect Yourself**
- Put on disposable gloves
- Use barrier if no gloves available
- Wash hands after care

**2. Apply Direct Pressure**
- Use clean cloth or dressing
- Apply firm pressure directly on wound
- Maintain pressure for several minutes
- Do not peek to check bleeding

**3. Elevate the Injury**
- Raise injured area above heart level
- Helps reduce blood flow to area
- Continue direct pressure while elevating

**4. Add More Dressings**
- If blood soaks through, add more on top
- Do not remove original dressing
- Maintain pressure with added layers

**5. Use Pressure Points (if needed)**
- For severe bleeding not controlled by direct pressure
- Apply pressure to artery above wound
- Temporal (head), facial (face), brachial (arm), femoral (leg)

## Tourniquet Use

**When to Use a Tourniquet:**
- Life-threatening bleeding from arm or leg
- Direct pressure not controlling bleeding
- Multiple people needing care
- Dangerous situation requiring rapid control

**How to Apply a Tourniquet:**

**1. Position**
- Place 2-3 inches above wound
- Not over joint
- If obvious fracture, place above fracture

**2. Apply and Tighten**
- Wrap around limb
- Tighten until bleeding stops
- Secure fastening mechanism

**3. Note Time**
- Write time of application on tourniquet
- Write "TK" and time on person's forehead
- Do not cover with clothing

**4. Do Not Remove**
- Only medical professionals should remove
- Once applied, leave in place
- Do not loosen periodically

## Hemostatic Dressings

**What They Are:**
- Special dressings that promote clotting
- Used for severe bleeding
- Can be used with direct pressure

**How to Use:**
- Apply directly to wound
- Apply firm direct pressure
- Follow manufacturer instructions
- Leave in place until medical help arrives

## Types of Wounds

**Abrasions (Scrapes):**
- Surface layers of skin removed
- May contain dirt or debris
- Painful but usually minor
- Clean thoroughly to prevent infection

**Lacerations (Cuts):**
- Clean or jagged edges
- May be deep or shallow
- Can cause significant bleeding
- May need medical attention for closure

**Punctures:**
- Small entry hole, may be deep
- Caused by nails, needles, teeth
- High infection risk
- May need tetanus booster

**Avulsions:**
- Flap of skin torn loose
- May be partially or completely torn
- Handle flap carefully
- May need surgical reattachment

**Amputations:**
- Complete separation of body part
- Control bleeding first
- Care for amputated part properly
- Immediate medical attention needed

## Wound Cleaning and Dressing

**Cleaning Minor Wounds:**
1. Wash your hands
2. Rinse wound with clean running water
3. Clean around wound with soap and water
4. Remove visible debris with tweezers (sterilized)
5. Pat dry with clean cloth

**Applying Dressings:**
1. Use sterile dressing or clean cloth
2. Cover entire wound
3. Secure with tape or bandage
4. Not too tight - check circulation
5. Change if wet or dirty

## Special Wound Considerations

**Embedded Objects:**
- Do not remove embedded objects
- Stabilize object with bulky dressing
- Apply pressure around object, not on it
- Seek medical attention

**Abdominal Wounds:**
- Cover with sterile dressing
- Keep person lying down with knees bent
- Do not push organs back in
- Monitor for signs of shock

**Chest Wounds:**
- May cause sucking sound
- Cover with airtight dressing
- Tape on three sides (flutter valve)
- Monitor breathing carefully

**Amputated Parts:**
1. Control bleeding on person
2. Rinse part gently if dirty
3. Wrap in clean, damp cloth
4. Place in plastic bag
5. Keep cool but do not freeze
6. Bring to hospital with person

## Infection Prevention

**Signs of Infection:**
- Increasing pain
- Redness spreading from wound
- Swelling
- Warmth around wound
- Pus or discharge
- Fever

**Tetanus Concerns:**
- Deep or dirty wounds
- Puncture wounds
- Animal bites
- Tetanus booster if unsure of vaccination status

## When to Seek Medical Help
- Bleeding doesn't stop with direct pressure
- Wound is deep or gaping
- Embedded object
- Signs of infection develop
- Animal or human bite
- Concern about tetanus
- Facial wound (cosmetic concerns)

Remember: Control bleeding first, then clean and protect the wound.
`,
      completed: false,
      quiz: [
        {
          id: 1,
          question: "What is arterial bleeding?",
          options: [
            "Dark red steady flow",
            "Bright red spurting blood",
            "Slow oozing blood",
            "Brown dried blood"
          ],
          correctAnswer: 1,
          explanation: "Arterial bleeding is bright red and spurts with the heartbeat, requiring immediate control."
        },
        {
          id: 2,
          question: "What is the first step to control bleeding?",
          options: [
            "Elevate the injury",
            "Apply direct pressure",
            "Use pressure points",
            "Apply tourniquet"
          ],
          correctAnswer: 1,
          explanation: "Apply direct pressure with a clean dressing as the first step to control bleeding."
        },
        {
          id: 3,
          question: "What should you do if blood soaks through a dressing?",
          options: [
            "Remove and replace it",
            "Add more dressings on top",
            "Loosen the pressure",
            "Use a tourniquet immediately"
          ],
          correctAnswer: 1,
          explanation: "If blood soaks through, add more dressings on top without removing the original dressing."
        },
        {
          id: 4,
          question: "When should you use a tourniquet?",
          options: [
            "For any bleeding",
            "Only for arterial bleeding",
            "Life-threatening limb bleeding not controlled by direct pressure",
            "Only for head wounds"
          ],
          correctAnswer: 2,
          explanation: "Use a tourniquet for life-threatening limb bleeding when direct pressure doesn't control it."
        },
        {
          id: 5,
          question: "Where should a tourniquet be placed?",
          options: [
            "Directly on the wound",
            "2-3 inches above the wound",
            "On a joint",
            "Below the wound"
          ],
          correctAnswer: 1,
          explanation: "Place a tourniquet 2-3 inches above the wound, not over a joint."
        },
        {
          id: 6,
          question: "What should you do with an embedded object?",
          options: [
            "Remove it carefully",
            "Stabilize it with bulky dressing",
            "Push it in further",
            "Ignore it and bandage"
          ],
          correctAnswer: 1,
          explanation: "Do not remove embedded objects; stabilize with bulky dressing and seek medical help."
        },
        {
          id: 7,
          question: "What is capillary bleeding?",
          options: [
            "Spurting bright red blood",
            "Dark red steady flow",
            "Slow oozing from minor wounds",
            "Internal bleeding only"
          ],
          correctAnswer: 2,
          explanation: "Capillary bleeding is slow, oozing blood from minor cuts and scrapes."
        },
        {
          id: 8,
          question: "How should you clean a minor wound?",
          options: [
            "With alcohol only",
            "Rinse with clean running water",
            "Use hydrogen peroxide",
            "Don't clean, just bandage"
          ],
          correctAnswer: 1,
          explanation: "Clean minor wounds by rinsing with clean running water and soap around the wound."
        },
        {
          id: 9,
          question: "What should you do with an amputated part?",
          options: [
            "Throw it away",
            "Keep it warm in your pocket",
            "Rinse, wrap, keep cool, bring to hospital",
            "Freeze it immediately"
          ],
          correctAnswer: 2,
          explanation: "Rinse if dirty, wrap in damp cloth, place in bag, keep cool, and bring to hospital with person."
        },
        {
          id: 10,
          question: "What are signs of wound infection?",
          options: [
            "Decreased pain",
            "Redness spreading, swelling, pus",
            "Wound healing quickly",
            "No bleeding"
          ],
          correctAnswer: 1,
          explanation: "Infection signs include increasing pain, spreading redness, swelling, warmth, and pus."
        },
        {
          id: 11,
          question: "What is venous bleeding?",
          options: [
            "Bright red spurting",
            "Dark red steady flow",
            "Slow oozing",
            "Brown dried blood"
          ],
          correctAnswer: 1,
          explanation: "Venous bleeding is dark red and flows steadily, easier to control than arterial bleeding."
        },
        {
          id: 12,
          question: "Why elevate an injured limb?",
          options: [
            "To stop all bleeding immediately",
            "To reduce blood flow to area",
            "To make bandaging easier",
            "To prevent infection"
          ],
          correctAnswer: 1,
          explanation: "Elevating an injured limb above heart level helps reduce blood flow to the area."
        },
        {
          id: 13,
          question: "What should you write on a tourniquet?",
          options: [
            "Person's name",
            "Time of application",
            "Your name",
            "Hospital name"
          ],
          correctAnswer: 1,
          explanation: "Write the time the tourniquet was applied on the tourniquet and person's forehead."
        },
        {
          id: 14,
          question: "What is an avulsion?",
          options: [
            "Deep puncture wound",
            "Skin scraped off",
            "Flap of skin torn loose",
            "Clean cut"
          ],
          correctAnswer: 2,
          explanation: "An avulsion is when a flap of skin is torn loose, either partially or completely."
        },
        {
          id: 15,
          question: "How to dress a chest wound with sucking sound?",
          options: [
            "Cover completely airtight",
            "Cover with flutter valve dressing",
            "Leave open to air",
            "Pack with gauze"
          ],
          correctAnswer: 1,
          explanation: "Cover chest wounds with airtight dressing taped on three sides to create a flutter valve."
        },
        {
          id: 16,
          question: "What are hemostatic dressings?",
          options: [
            "Regular bandages",
            "Dressings that promote clotting",
            "Only for minor cuts",
            "Cold compresses"
          ],
          correctAnswer: 1,
          explanation: "Hemostatic dressings are special dressings that help promote blood clotting for severe bleeding."
        },
        {
          id: 17,
          question: "When to seek medical help for a wound?",
          options: [
            "Only for major bleeding",
            "When bleeding doesn't stop or signs of infection",
            "Never, treat all at home",
            "Only for facial wounds"
          ],
          correctAnswer: 1,
          explanation: "Seek medical help if bleeding doesn't stop, wound is deep, or signs of infection develop."
        },
        {
          id: 18,
          question: "What is a pressure point?",
          options: [
            "Point to massage",
            "Artery above wound to compress",
            "Venous bleeding point",
            "Tourniquet alternative"
          ],
          correctAnswer: 1,
          explanation: "Pressure points are arteries above wounds that can be compressed to help control bleeding."
        },
        {
          id: 19,
          question: "How to check circulation after bandaging?",
          options: [
            "Ask person if it hurts",
            "Check color, warmth, sensation",
            "Only check pulse",
            "Remove bandage to check"
          ],
          correctAnswer: 1,
          explanation: "Check color, warmth, and sensation distal to bandage to ensure circulation isn't restricted."
        },
        {
          id: 20,
          question: "What is most important in bleeding control?",
          options: [
            "Using the right bandage",
            "Stopping the bleeding quickly",
            "Keeping wound sterile",
            "Making person comfortable"
          ],
          correctAnswer: 1,
          explanation: "Stopping bleeding quickly is most important to prevent significant blood loss and shock."
        }
      ]
    },

    // MODULE 4: SHOCK, BURNS, AND FRACTURES
    {
      id: 4,
      title: "Shock, Burns, and Musculoskeletal Injuries",
      content: `
# Shock, Burns, and Musculoskeletal Injuries

This module covers life-threatening shock, different types of burns, and how to manage fractures and other musculoskeletal injuries.

## Shock

**What is Shock?**
Shock occurs when the body's organs don't get enough blood flow. This can be life-threatening and requires immediate treatment.

**Causes of Shock:**
- Severe bleeding (hypovolemic shock)
- Heart problems (cardiogenic shock)
- Severe infection (septic shock)
- Severe allergic reaction (anaphylactic shock)
- Spinal injury (neurogenic shock)

**Signs and Symptoms of Shock:**
- Pale, cool, clammy skin
- Rapid, weak pulse
- Rapid, shallow breathing
- Nausea or vomiting
- Restlessness or anxiety
- Confusion or decreased consciousness
- Extreme thirst
- Fainting or dizziness

**Treating Shock:**
1. **Call emergency services** immediately
2. **Treat the cause** if possible (control bleeding, etc.)
3. **Position the person:**
   - Lay person flat on back
   - Elevate legs 8-12 inches (unless head, neck, back, or leg injuries)
   - Keep person still and calm
4. **Keep person warm** with blanket or coat
5. **Do not give anything to eat or drink**
6. **Monitor breathing** and be prepared for CPR
7. **Continue care** until help arrives

## Burns

**Types of Burns:**

**Thermal Burns:**
- Caused by heat (fire, hot liquids, steam)
- Most common type
- Vary in severity based on temperature and exposure time

**Chemical Burns:**
- Caused by corrosive substances
- Continue burning until chemical removed
- May not be immediately painful

**Electrical Burns:**
- Caused by electrical current
- May have entry and exit wounds
- Can cause internal damage not visible
- Check for possible spinal injury

**Radiation Burns:**
- Caused by sun, tanning beds, radiation therapy
- Sunburn is most common type

**Burn Depth Classification:**

**First-Degree Burns:**
- Affect only outer skin layer
- Red, painful, dry
- No blisters
- Example: mild sunburn

**Second-Degree Burns:**
- Affect outer and underlying skin layer
- Red, blistered, swollen, painful
- Blisters may break open
- Example: severe sunburn, scald

**Third-Degree Burns:**
- Affect all skin layers and possibly deeper tissues
- White, black, or charred appearance
- May be painless (nerve damage)
- Requires immediate medical attention

**Burn Size Estimation:**
Use the Rule of Nines for adults:
- Head and neck: 9%
- Each arm: 9%
- Front of torso: 18%
- Back of torso: 18%
- Each leg: 18%
- Genital area: 1%

**Burn First Aid:**

**For All Burns:**
1. **Stop the burning process**
2. **Remove jewelry and tight clothing** (unless stuck to burn)
3. **Cool the burn** with cool running water for 10-20 minutes
4. **Cover with sterile non-stick dressing**
5. **Do not apply ice, butter, or ointments**
6. **Seek medical help for serious burns**

**Chemical Burns:**
- Brush off dry chemicals first
- Flush with large amounts of water
- Remove contaminated clothing
- Continue flushing for at least 20 minutes
- Call poison control for specific advice

**Electrical Burns:**
- Ensure power is off before approaching
- Check for possible spinal injury
- Look for entry and exit wounds
- Seek medical attention (internal damage possible)

## Musculoskeletal Injuries

**Types of Injuries:**

**Fractures (Broken Bones):**
- **Closed fracture:** Bone broken but skin intact
- **Open fracture:** Bone protrudes through skin
- **Signs:** Pain, swelling, deformity, inability to move, grating sensation

**Dislocations:**
- Bone forced out of joint
- **Signs:** Deformity, swelling, pain, inability to move joint

**Sprains:**
- Ligament stretched or torn
- **Signs:** Pain, swelling, bruising, limited movement

**Strains:**
- Muscle or tendon stretched or torn
- **Signs:** Pain, muscle spasm, swelling, weakness

**RICE Treatment for Sprains and Strains:**
**R - Rest:** Stop using injured area
**I - Ice:** Apply cold pack for 20 minutes
**C - Compression:** Wrap with elastic bandage
**E - Elevation:** Raise above heart level

**Splinting Fractures:**
1. **Support injured area** in position found
2. **Check circulation** before and after splinting
3. **Splint from joint above to joint below** injury
4. **Use padding** between splint and skin
5. **Secure firmly** but not too tight
6. **Recheck circulation** frequently

**Special Considerations:**

**Head, Neck, or Back Injuries:**
- Assume spinal injury if mechanism suggests it
- Do not move person unless in immediate danger
- Stabilize head and neck
- Wait for professional help with spinal precautions

**Pelvic Fractures:**
- May cause significant internal bleeding
- Do not move person unnecessarily
- Keep person still and warm
- Monitor for signs of shock

**Open Fractures:**
- Control bleeding first
- Cover protruding bone with sterile dressing
- Do not push bone back in
- Stabilize in position found

**When to Seek Medical Help:**
- Obvious deformity or bone protruding
- Person cannot bear weight or use limb
- Injury involves head, neck, or back
- Signs of shock develop
- Numbness or tingling in limb
- Severe pain not relieved by first aid

Remember: Serious burns, shock, and fractures require professional medical attention.
`,
      completed: false,
      quiz: [
        {
          id: 1,
          question: "What is shock?",
          options: [
            "Being scared",
            "Organs not getting enough blood flow",
            "Electrical injury",
            "Type of burn"
          ],
          correctAnswer: 1,
          explanation: "Shock occurs when the body's organs don't receive enough blood flow, which can be life-threatening."
        },
        {
          id: 2,
          question: "What are signs of shock?",
          options: [
            "Red, hot skin",
            "Pale, cool, clammy skin",
            "Slow, strong pulse",
            "Deep, slow breathing"
          ],
          correctAnswer: 1,
          explanation: "Shock signs include pale, cool, clammy skin; rapid, weak pulse; and rapid, shallow breathing."
        },
        {
          id: 3,
          question: "How should you position someone in shock?",
          options: [
            "Sitting up",
            "On their side",
            "Flat with legs elevated (unless contraindicated)",
            "Standing up"
          ],
          correctAnswer: 2,
          explanation: "Position shock victim flat on back with legs elevated 8-12 inches, unless head/neck/back/leg injuries."
        },
        {
          id: 4,
          question: "What is a first-degree burn?",
          options: [
            "Affects only outer skin layer",
            "Affects all skin layers",
            "Always has blisters",
            "White or charred appearance"
          ],
          correctAnswer: 0,
          explanation: "First-degree burns affect only the outer skin layer, causing redness and pain without blisters."
        },
        {
          id: 5,
          question: "How long should you cool a burn with running water?",
          options: [
            "1-2 minutes",
            "10-20 minutes",
            "30-40 minutes",
            "Until it stops hurting"
          ],
          correctAnswer: 1,
          explanation: "Cool burns with cool running water for 10-20 minutes to stop the burning process."
        },
        {
          id: 6,
          question: "What should you NOT apply to a burn?",
          options: [
            "Cool water",
            "Ice, butter, or ointments",
            "Sterile dressing",
            "Loose bandage"
          ],
          correctAnswer: 1,
          explanation: "Do not apply ice, butter, ointments, or other home remedies to burns."
        },
        {
          id: 7,
          question: "What is an open fracture?",
          options: [
            "Bone broken but skin intact",
            "Bone protrudes through skin",
            "Hairline crack in bone",
            "Joint dislocation"
          ],
          correctAnswer: 1,
          explanation: "An open fracture occurs when the broken bone protrudes through the skin."
        },
        {
          id: 8,
          question: "What does RICE stand for?",
          options: [
            "Rest, Ice, Compression, Elevation",
            "Run, Ice, Cover, Elevate",
            "Rest, Immobilize, Cool, Exercise",
            "Relax, Ice, Compress, Extend"
          ],
          correctAnswer: 0,
          explanation: "RICE stands for Rest, Ice, Compression, Elevation for sprains and strains."
        },
        {
          id: 9,
          question: "What should you do for a chemical burn?",
          options: [
            "Apply neutralizing chemical",
            "Flush with large amounts of water",
            "Cover immediately",
            "Rub the area"
          ],
          correctAnswer: 1,
          explanation: "For chemical burns, flush with large amounts of water for at least 20 minutes."
        },
        {
          id: 10,
          question: "What is a dislocation?",
          options: [
            "Bone fracture",
            "Bone forced out of joint",
            "Muscle tear",
            "Ligament stretch"
          ],
          correctAnswer: 1,
          explanation: "A dislocation occurs when a bone is forced out of its normal position in a joint."
        },
        {
          id: 11,
          question: "What are signs of third-degree burns?",
          options: [
            "Red and painful",
            "White, black, or charred appearance",
            "Small blisters only",
            "Mild redness"
          ],
          correctAnswer: 1,
          explanation: "Third-degree burns appear white, black, or charred and may be painless due to nerve damage."
        },
        {
          id: 12,
          question: "How to splint a fracture?",
          options: [
            "From mid-bone to mid-bone",
            "From joint above to joint below injury",
            "Only on the broken part",
            "Tightly to prevent all movement"
          ],
          correctAnswer: 1,
          explanation: "Splint from the joint above to the joint below the injury to immobilize properly."
        },
        {
          id: 13,
          question: "What causes anaphylactic shock?",
          options: [
            "Severe bleeding",
            "Severe allergic reaction",
            "Heart attack",
            "Spinal injury"
          ],
          correctAnswer: 1,
          explanation: "Anaphylactic shock is caused by a severe allergic reaction, requiring immediate epinephrine."
        },
        {
          id: 14,
          question: "What is the Rule of Nines for?",
          options: [
            "Estimating burn size",
            "Counting CPR compressions",
            "Checking breathing rate",
            "Measuring blood loss"
          ],
          correctAnswer: 0,
          explanation: "The Rule of Nines helps estimate the percentage of body surface area affected by burns."
        },
        {
          id: 15,
          question: "What should you do for electrical burns?",
          options: [
            "Ensure power is off first",
            "Pull person from source with bare hands",
            "Apply water immediately",
            "Check pulse only"
          ],
          correctAnswer: 0,
          explanation: "For electrical burns, ensure power is off before approaching to avoid electrocution yourself."
        },
        {
          id: 16,
          question: "What is a sprain?",
          options: [
            "Broken bone",
            "Ligament stretch or tear",
            "Muscle tear",
            "Joint dislocation"
          ],
          correctAnswer: 1,
          explanation: "A sprain involves stretching or tearing of ligaments that connect bones at joints."
        },
        {
          id: 17,
          question: "When should you seek medical help for burns?",
          options: [
            "Only for third-degree burns",
            "For serious burns or large areas",
            "Never, treat all at home",
            "Only for chemical burns"
          ],
          correctAnswer: 1,
          explanation: "Seek medical help for serious burns, large areas, or burns on face, hands, feet, or genitals."
        },
        {
          id: 18,
          question: "What to do for head/neck/back injury?",
          options: [
            "Move to comfortable position",
            "Assume spinal injury, don't move unless necessary",
            "Have person walk around",
            "Massage the neck"
          ],
          correctAnswer: 1,
          explanation: "Assume spinal injury for head/neck/back trauma and don't move person unless in immediate danger."
        },
        {
          id: 19,
          question: "How to treat someone in shock?",
          options: [
            "Give food and water",
            "Keep warm and monitor until help arrives",
            "Have them walk around",
            "Apply heat to body"
          ],
          correctAnswer: 1,
          explanation: "Keep shock victim warm, monitor breathing, and continue care until professional help arrives."
        },
        {
          id: 20,
          question: "What is most important for serious injuries?",
          options: [
            "Immediate professional medical help",
            "Home treatment first",
            "Waiting to see if it gets better",
            "Asking neighbors for advice"
          ],
          correctAnswer: 0,
          explanation: "Serious injuries like shock, major burns, and fractures require immediate professional medical attention."
        }
      ]
    },

    // MODULE 5: MEDICAL EMERGENCIES
    {
      id: 5,
      title: "Common Medical Emergencies",
      content: `
# Common Medical Emergencies

This module covers recognition and first aid for common medical emergencies including heart attacks, strokes, diabetes, seizures, and allergic reactions.

## Heart Attack (Myocardial Infarction)

**What Happens:**
- Blood flow to heart muscle blocked
- Heart muscle begins to die
- Time is critical - "Time is muscle"

**Signs and Symptoms:**
- **Chest pain or discomfort** (pressure, squeezing, fullness)
- **Pain spreading** to arms, back, neck, jaw, stomach
- **Shortness of breath**
- **Cold sweat**
- **Nausea or vomiting**
- **Lightheadedness or dizziness**
- **Unusual fatigue** (especially in women)

**First Aid for Heart Attack:**
1. **Call emergency services** immediately
2. **Have person sit or lie down** in comfortable position
3. **Loosen tight clothing**
4. **Ask about medications:**
   - If prescribed nitroglycerin, help them take it
   - Do not give anyone else's medication
5. **Give aspirin** if available and not allergic (chew one regular aspirin)
6. **Monitor closely** and be prepared for CPR
7. **Keep person calm** and reassured

## Stroke

**What Happens:**
- Blood flow to brain interrupted
- Brain cells begin to die
- FAST recognition crucial

**FAST Stroke Recognition:**
**F - Face:** Ask person to smile. Does one side droop?
**A - Arms:** Ask person to raise both arms. Does one drift downward?
**S - Speech:** Ask person to repeat simple phrase. Is speech slurred or strange?
**T - Time:** If any signs, call emergency immediately. Note time symptoms started.

**Other Stroke Symptoms:**
- Sudden numbness or weakness (especially one side)
- Sudden confusion or trouble speaking/understanding
- Sudden trouble seeing in one or both eyes
- Sudden trouble walking, dizziness, loss of balance
- Sudden severe headache with no known cause

**First Aid for Stroke:**
1. **Call emergency services** immediately
2. **Note time** symptoms started
3. **Have person lie down** with head slightly elevated
4. **Loosen tight clothing**
5. **Do not give** food, drink, or medication
6. **If person becomes unconscious:**
   - Place in recovery position
   - Monitor breathing
   - Be prepared for CPR
7. **Keep calm** and reassure person

## Diabetes Emergencies

**Two Types of Diabetic Emergencies:**

**Hypoglycemia (Low Blood Sugar):**
- Too much insulin or not enough food
- Can develop quickly
- **Signs:** Shakiness, sweating, dizziness, hunger, confusion, irritability, rapid heartbeat
- **Can progress to:** Seizure, unconsciousness

**Hyperglycemia (High Blood Sugar):**
- Not enough insulin or too much food
- Develops over days
- **Signs:** Extreme thirst, frequent urination, dry skin, fruity breath odor, nausea
- **Can progress to:** Diabetic coma

**First Aid for Diabetic Emergencies:**

**For Conscious Person (Known Diabetic):**
1. **Ask:** "Do you have diabetes?"
2. **If low blood sugar suspected:**
   - Give sugary food or drink (juice, regular soda, candy)
   - Follow with protein snack if available
3. **If high blood sugar suspected:**
   - Do not give sugar
   - Encourage to take insulin if prescribed
4. **Monitor** until normal or help arrives

**For Unconscious Person:**
1. **Call emergency services**
2. **Place in recovery position**
3. **Do not give** anything by mouth
4. **Monitor breathing**
5. **Be prepared for CPR**

## Seizures

**Types of Seizures:**

**Generalized Tonic-Clonic (Grand Mal):**
- Loss of consciousness
- Stiffening then jerking movements
- May lose bladder/bowel control
- Usually lasts 1-3 minutes

**Focal (Partial) Seizures:**
- May remain conscious or have altered awareness
- Repetitive movements or staring
- May experience unusual sensations

**First Aid for Seizures:**
1. **Stay calm** and time the seizure
2. **Protect from injury:**
   - Move nearby objects away
   - Place something soft under head
   - Do not restrain person
3. **Do not put anything in mouth**
4. **Turn on side** after jerking stops (recovery position)
5. **Stay with person** until fully alert
6. **Call emergency services if:**
   - First known seizure
   - Seizure lasts more than 5 minutes
   - Multiple seizures occur
   - Person is injured, diabetic, or pregnant
   - Seizure occurs in water

**After Seizure Care:**
- Person may be confused or tired
- Explain what happened
- Stay until person is oriented
- Offer to call someone for them

## Allergic Reactions

**Mild Allergic Reaction:**
- Itchy, watery eyes
- Runny nose
- Skin rash or hives
- Usually not life-threatening

**Severe Allergic Reaction (Anaphylaxis):**
- **Life-threatening emergency**
- **Signs:** Difficulty breathing, swelling of face/throat, hives over body, dizziness, rapid pulse
- **Can progress to:** Shock, unconsciousness, cardiac arrest

**First Aid for Anaphylaxis:**
1. **Call emergency services** immediately
2. **Ask about epinephrine auto-injector** (EpiPen)
3. **Help administer epinephrine** if available and prescribed
4. **Have person lie down** unless breathing difficult
5. **Loosen tight clothing**
6. **Monitor breathing** and be prepared for CPR
7. **Second dose** may be needed if no improvement in 5-15 minutes

## Other Medical Emergencies

**Asthma Attack:**
- Help person use inhaler if prescribed
- Have them sit upright
- Loosen tight clothing
- Call emergency if severe or no improvement

**Fainting (Syncope):**
- Lay person flat, elevate legs
- Loosen tight clothing
- Do not give anything by mouth until fully alert
- If doesn't regain consciousness quickly, call emergency

**Heat-Related Illness:**
- **Heat exhaustion:** Move to cool place, give cool fluids, cool with wet cloths
- **Heat stroke** (medical emergency): Call 911, cool rapidly with any means available

**Hypothermia:**
- Move to warm place
- Remove wet clothing
- Warm gradually with blankets
- Do not rub or use direct heat
- Give warm fluids if conscious

## General Principles

**When to Call Emergency Services:**
- Chest pain or pressure
- Difficulty breathing
- Sudden weakness or numbness
- Severe burns
- Major trauma
- Unconsciousness
- Severe allergic reaction
- Poisoning
- Seizure (first time or prolonged)
- Suicidal or homicidal thoughts

**What to Tell Dispatcher:**
- Location (exact address if possible)
- What happened
- Number of people involved
- Condition of person(s)
- What first aid is being given
- Your phone number

**While Waiting for Help:**
- Continue appropriate first aid
- Monitor person's condition
- Gather medications and medical information
- Prepare to meet emergency personnel
- Keep person calm and comfortable

Remember: Recognizing medical emergencies early and getting professional help quickly saves lives.
`,
      completed: false,
      quiz: [
        {
          id: 1,
          question: "What does FAST stand for in stroke recognition?",
          options: [
            "Fast Action Stroke Treatment",
            "Face, Arms, Speech, Time",
            "First Aid Stroke Test",
            "Fever, Arms, Speech, Time"
          ],
          correctAnswer: 1,
          explanation: "FAST stands for Face, Arms, Speech, Time - key signs to recognize a stroke quickly."
        },
        {
          id: 2,
          question: "What is a common heart attack symptom?",
          options: [
            "Sharp, stabbing chest pain only",
            "Chest pressure, pain spreading, shortness of breath",
            "Only left arm pain",
            "Only nausea"
          ],
          correctAnswer: 1,
          explanation: "Heart attack symptoms often include chest pressure/pain, pain spreading, shortness of breath, and other signs."
        },
        {
          id: 3,
          question: "What should you give for low blood sugar if person is conscious?",
          options: [
            "Protein only",
            "Sugary food or drink",
            "Salt water",
            "Nothing by mouth"
          ],
          correctAnswer: 1,
          explanation: "For conscious person with low blood sugar, give sugary food or drink like juice or candy."
        },
        {
          id: 4,
          question: "What should you do during a seizure?",
          options: [
            "Restrain the person",
            "Put something in their mouth",
            "Protect from injury, time the seizure",
            "Pour water on their face"
          ],
          correctAnswer: 2,
          explanation: "During a seizure, protect from injury, time it, and do not restrain or put anything in mouth."
        },
        {
          id: 5,
          question: "What is anaphylaxis?",
          options: [
            "Mild allergic reaction",
            "Severe, life-threatening allergic reaction",
            "Type of seizure",
            "Heart condition"
          ],
          correctAnswer: 1,
          explanation: "Anaphylaxis is a severe, life-threatening allergic reaction requiring immediate epinephrine."
        },
        {
          id: 6,
          question: "What aspirin advice for heart attack?",
          options: [
            "Never give aspirin",
            "Give if available and not allergic (chew one)",
            "Give two with water",
            "Only give if prescribed"
          ],
          correctAnswer: 1,
          explanation: "For suspected heart attack, give one regular aspirin to chew if available and person not allergic."
        },
        {
          id: 7,
          question: "When to call emergency for seizure?",
          options: [
            "Never, all seizures are harmless",
            "First known seizure or lasting more than 5 minutes",
            "Only if person is elderly",
            "Only if injury occurs"
          ],
          correctAnswer: 1,
          explanation: "Call emergency for first known seizure, seizure lasting more than 5 minutes, or multiple seizures."
        },
        {
          id: 8,
          question: "What is hypoglycemia?",
          options: [
            "High blood sugar",
            "Low blood sugar",
            "Normal blood sugar",
            "Blood pressure issue"
          ],
          correctAnswer: 1,
          explanation: "Hypoglycemia is low blood sugar, often causing shakiness, sweating, confusion in diabetics."
        },
        {
          id: 9,
          question: "What to do for fainting?",
          options: [
            "Have person stand up",
            "Lay flat, elevate legs",
            "Give cold water",
            "Walk them around"
          ],
          correctAnswer: 1,
          explanation: "For fainting, lay person flat and elevate legs to help blood flow to brain."
        },
        {
          id: 10,
          question: "What is the recovery position?",
          options: [
            "Lying flat on back",
            "On side with head supported",
            "Sitting upright",
            "Head between knees"
          ],
          correctAnswer: 1,
          explanation: "Recovery position is on side with head supported, used for unconscious breathing persons."
        },
        {
          id: 11,
          question: "What to ask diabetic person?",
          options: [
            "Only about insulin",
            "Do you have diabetes? Can I help with medication/food?",
            "Nothing, treat all the same",
            "Only about family history"
          ],
          correctAnswer: 1,
          explanation: "Ask if they have diabetes and if you can help with medication or food appropriate for their condition."
        },
        {
          id: 12,
          question: "What does stroke time refer to?",
          options: [
            "How long to get to hospital",
            "Time symptoms started (critical for treatment)",
            "Time of day",
            "How long person was alone"
          ],
          correctAnswer: 1,
          explanation: "Note time stroke symptoms started - critical information for emergency treatment decisions."
        },
        {
          id: 13,
          question: "What for asthma attack?",
          options: [
            "Lay person flat",
            "Help use prescribed inhaler",
            "Give cough medicine",
            "Have them exercise"
          ],
          correctAnswer: 1,
          explanation: "For asthma attack, help person use their prescribed inhaler and sit them upright."
        },
        {
          id: 14,
          question: "What is heat stroke?",
          options: [
            "Mild overheating",
            "Medical emergency with high body temperature",
            "Normal reaction to heat",
            "Only happens to athletes"
          ],
          correctAnswer: 1,
          explanation: "Heat stroke is a medical emergency with dangerously high body temperature requiring immediate cooling."
        },
        {
          id: 15,
          question: "What to do for anaphylaxis?",
          options: [
            "Wait and see",
            "Call emergency, help with epinephrine if available",
            "Give antihistamine only",
            "Have person take a bath"
          ],
          correctAnswer: 1,
          explanation: "For anaphylaxis, call emergency immediately and help administer epinephrine if prescribed."
        },
        {
          id: 16,
          question: "What not to give stroke victim?",
          options: [
            "Aspirin",
            "Food, drink, or medication",
            "Water",
            "Nothing, give everything"
          ],
          correctAnswer: 1,
          explanation: "Do not give stroke victims food, drink, or medication by mouth due to possible swallowing problems."
        },
        {
          id: 17,
          question: "How to position heart attack victim?",
          options: [
            "Standing up",
            "Sitting or lying in comfortable position",
            "Head between knees",
            "On stomach"
          ],
          correctAnswer: 1,
          explanation: "Have heart attack victim sit or lie in most comfortable position, usually semi-sitting."
        },
        {
          id: 18,
          question: "What for hyperglycemia?",
          options: [
            "Give sugar immediately",
            "Do not give sugar, may need insulin",
            "Give salt water",
            "Have person exercise"
          ],
          correctAnswer: 1,
          explanation: "For hyperglycemia (high blood sugar), do not give sugar - person may need insulin."
        },
        {
          id: 19,
          question: "What to do after seizure stops?",
          options: [
            "Leave immediately",
            "Turn on side in recovery position",
            "Make person stand up",
            "Give food and water"
          ],
          correctAnswer: 1,
          explanation: "After seizure stops, turn person on side in recovery position and stay until fully alert."
        },
        {
          id: 20,
          question: "When to call emergency for medical emergency?",
          options: [
            "Only for visible injuries",
            "For chest pain, difficulty breathing, unconsciousness, etc.",
            "Never, treat all at home",
            "Only if bleeding occurs"
          ],
          correctAnswer: 1,
          explanation: "Call emergency for chest pain, difficulty breathing, unconsciousness, stroke signs, severe reactions."
        }
      ]
    },

    // MODULE 6: ENVIRONMENTAL EMERGENCIES AND SPECIAL SITUATIONS
    {
      id: 6,
      title: "Environmental Emergencies and Special Situations",
      content: `
# Environmental Emergencies and Special Situations

This module covers first aid for environmental emergencies like poisoning, bites, stings, heat and cold illnesses, and special situations involving children, elderly, and pregnant women.

## Poisoning Emergencies

**Types of Poisoning:**

**Ingested Poisons:**
- Swallowed chemicals, medications, plants, foods
- **Signs:** Nausea, vomiting, abdominal pain, burns around mouth, drowsiness, confusion

**Inhaled Poisons:**
- Gases, fumes, smoke
- **Signs:** Difficulty breathing, headache, dizziness, confusion, unconsciousness

**Absorbed Poisons:**
- Through skin contact with chemicals
- **Signs:** Skin rash, burning, itching, blisters

**Injected Poisons:**
- Insect stings, animal bites, drug injections
- **Signs:** Pain, swelling, redness at site, systemic reactions

**First Aid for Poisoning:**

**General Principles:**
1. **Ensure scene safety** - don't become poisoned yourself
2. **Call Poison Control** (1-800-222-1222 in US) or emergency services
3. **Follow their instructions** exactly
4. **Bring container or substance** to phone if safe

**Specific Poisoning First Aid:**

**For Swallowed Poison:**
- **Do not induce vomiting** unless instructed
- **Do not give anything by mouth** unless instructed
- **Have person rinse mouth** with water
- **Monitor breathing** and consciousness

**For Inhaled Poison:**
- **Move to fresh air** immediately
- **Open windows and doors**
- **Loosen tight clothing**
- **Monitor breathing** - be prepared for CPR

**For Skin Contact:**
- **Remove contaminated clothing**
- **Rinse skin with running water** for 15-20 minutes
- **Wash gently with soap and water**
- **Seek medical attention**

**For Eye Exposure:**
- **Flush eye with lukewarm water** for 15-20 minutes
- **Hold eyelid open**
- **Pour water from inner to outer corner**
- **Do not use eye drops** unless instructed
- **Seek medical attention**

## Animal and Insect Bites/Stings

**Snake Bites:**
- **Keep person calm and still**
- **Position bite below heart level**
- **Remove tight clothing/jewelry**
- **Do NOT:**
  - Cut the wound
  - Suck out venom
  - Apply ice or tourniquet
  - Give alcohol or pain medication
- **Call emergency services**
- **Note snake appearance** if safe

**Insect Stings (Bees, Wasps, Hornets):**
- **Remove stinger** by scraping (not squeezing)
- **Wash area** with soap and water
- **Apply cold pack** to reduce swelling
- **Watch for allergic reaction**
- **Seek help for multiple stings** or allergic reaction

**Spider Bites:**
- **Wash area** with soap and water
- **Apply cold pack**
- **Elevate if on limb**
- **Seek medical attention** for:
  - Black widow or brown recluse bites
  - Severe pain or reaction
  - Signs of infection

**Tick Bites:**
- **Remove tick** with tweezers:
  - Grasp close to skin
  - Pull straight out steadily
  - Do not twist or jerk
  - Clean area after removal
- **Save tick** in container for identification
- **Watch for rash or fever** (Lyme disease signs)

**Animal Bites:**
- **Control bleeding**
- **Wound thoroughly** with soap and water
- **Cover with clean dressing**
- **Seek medical attention** (risk of infection, rabies)
- **Report to animal control**

## Heat-Related Illnesses

**Heat Cramps:**
- Painful muscle cramps during/after exercise in heat
- **Treatment:** Rest in cool place, stretch gently, drink electrolyte solution

**Heat Exhaustion:**
- **Signs:** Heavy sweating, weakness, cold/pale/clammy skin, fast weak pulse, nausea, fainting
- **Treatment:**
  - Move to cool place
  - Lie down and loosen clothing
  - Apply cool, wet cloths
  - Sip water
  - Seek medical if vomiting or worse

**Heat Stroke (MEDICAL EMERGENCY):**
- **Signs:** High body temperature (104°F+), hot/red/dry or damp skin, rapid strong pulse, confusion, unconsciousness
- **Treatment:**
  - **Call emergency services**
  - Move to cool place
  - Cool rapidly with any means available
  - Do NOT give fluids if unconscious

## Cold-Related Illnesses

**Frostbite:**
- Frozen body tissues
- **Signs:** Numbness, white/waxy/grayish-yellow skin, hard or blistering skin
- **Treatment:**
  - Get to warm place
  - **Do NOT rub or use direct heat**
  - Warm gradually in warm (not hot) water
  - Loosely bandage affected areas
  - Seek medical attention

**Hypothermia:**
- Dangerously low body temperature
- **Signs:** Shivering (may stop in severe cases), confusion, slurred speech, drowsiness, weak pulse
- **Treatment:**
  - Move to warm place
  - Remove wet clothing
  - Warm center of body first (chest, neck, head, groin)
  - Use blankets, skin-to-skin contact
  - Give warm fluids if conscious
  - Seek medical attention

## Special Populations

**Children:**
- **Anatomical differences:** Smaller airways, different proportions
- **Emotional needs:** Fearful, need reassurance
- **Consent:** Get from parent/guardian if present
- **Dosages:** Medication doses based on weight
- **CPR differences:** Modified techniques for infants/children

**Elderly:**
- **Common conditions:** Heart disease, diabetes, arthritis, osteoporosis
- **Medication considerations:** Multiple medications possible
- **Skin fragility:** Handle gently, bruises easily
- **Communication:** May have hearing/vision impairments
- **Mobility:** Fall risk, assist carefully

**Pregnant Women:**
- **CPR modifications:** Place hands slightly higher on sternum if showing
- **Recovery position:** Left side preferred to improve blood flow
- **Medication caution:** Many medications unsafe during pregnancy
- **Trauma concerns:** Protect abdomen, watch for vaginal bleeding
- **AED use:** Safe during pregnancy

**People with Disabilities:**
- **Communication:** May use devices or have speech difficulties
- **Mobility:** May use wheelchairs or other aids
- **Medical devices:** Pacemakers, ventilators, feeding tubes
- **Service animals:** Do not separate from service animal
- **Respect autonomy:** Ask how you can help, don't assume

## Disaster and Multiple Casualty Situations

**Triage Basics:**
Sorting patients by severity when resources are limited:

**Immediate (Red):**
- Life-threatening but treatable
- Airway/breathing problems, severe bleeding, shock

**Delayed (Yellow):**
- Serious but not immediately life-threatening
- Stable fractures, moderate burns

**Minimal (Green):**
- Minor injuries
- Walking wounded

**Expectant (Black):**
- Unlikely to survive given available resources
- Massive injuries, no breathing after airway opened

**Psychological First Aid:**
- **Listen** without judgment
- **Protect** from further harm
- **Connect** with support systems
- **Model** calm and hopeful behavior
- **Educate** about normal stress reactions

## Preventing Disease Transmission

**Universal Precautions:**
- Treat all blood and body fluids as potentially infectious
- **Use barriers:** Gloves, face shields, CPR masks
- **Wash hands** thoroughly after care
- **Dispose of contaminated materials** properly
- **Clean surfaces** with disinfectant

**Post-Exposure Procedures:**
- **Wash exposed area** immediately with soap and water
- **Flush mucous membranes** with water
- **Report exposure** to healthcare provider
- **Follow up** as recommended

Remember: Your safety comes first in all environmental emergencies and special situations.
`,
      completed: false,
      quiz: [
        {
          id: 1,
          question: "What should you do first for poisoning?",
          options: [
            "Induce vomiting immediately",
            "Call Poison Control or emergency services",
            "Give milk to drink",
            "Have person lie down"
          ],
          correctAnswer: 1,
          explanation: "For poisoning, call Poison Control or emergency services first for specific instructions."
        },
        {
          id: 2,
          question: "What should you NOT do for snake bite?",
          options: [
            "Keep person calm and still",
            "Cut the wound or suck out venom",
            "Remove tight clothing",
            "Call emergency services"
          ],
          correctAnswer: 1,
          explanation: "Do NOT cut snake bite wounds or attempt to suck out venom - this causes more harm."
        },
        {
          id: 3,
          question: "What is heat stroke?",
          options: [
            "Mild overheating",
            "Medical emergency with high body temperature",
            "Normal reaction to exercise",
            "Only affects athletes"
          ],
          correctAnswer: 1,
          explanation: "Heat stroke is a medical emergency with dangerously high body temperature requiring rapid cooling."
        },
        {
          id: 4,
          question: "How to treat frostbite?",
          options: [
            "Rub with snow",
            "Use direct heat like heater",
            "Warm gradually in warm water",
            "Massage vigorously"
          ],
          correctAnswer: 2,
          explanation: "Warm frostbite gradually in warm (not hot) water - do not rub or use direct heat."
        },
        {
          id: 5,
          question: "What is hypothermia?",
          options: [
            "High body temperature",
            "Dangerously low body temperature",
            "Normal body temperature",
            "Fever"
          ],
          correctAnswer: 1,
          explanation: "Hypothermia is dangerously low body temperature requiring gradual rewarming."
        },
        {
          id: 6,
          question: "How to remove a tick?",
          options: [
            "Burn it off",
            "Use tweezers close to skin, pull straight out",
            "Cover with petroleum jelly",
            "Twist and jerk it out"
          ],
          correctAnswer: 1,
          explanation: "Use tweezers close to skin and pull straight out steadily to remove ticks properly."
        },
        {
          id: 7,
          question: "What is triage?",
          options: [
            "Medical treatment",
            "Sorting patients by severity when resources limited",
            "First aid kit",
            "Emergency phone number"
          ],
          correctAnswer: 1,
          explanation: "Triage is sorting patients by severity to prioritize care when resources are limited."
        },
        {
          id: 8,
          question: "What for eye chemical exposure?",
          options: [
            "Patch eye immediately",
            "Flush with water for 15-20 minutes",
            "Use eye drops",
            "Rub eye to remove chemical"
          ],
          correctAnswer: 1,
          explanation: "For eye chemical exposure, flush with lukewarm water for 15-20 minutes and seek medical help."
        },
        {
          id: 9,
          question: "What are universal precautions?",
          options: [
            "Only for hospital use",
            "Treat all blood/body fluids as potentially infectious",
            "Only for known HIV patients",
            "Optional protective measures"
          ],
          correctAnswer: 1,
          explanation: "Universal precautions mean treating all blood and body fluids as potentially infectious."
        },
        {
          id: 10,
          question: "How to position pregnant woman in recovery position?",
          options: [
            "On back",
            "On left side preferred",
            "On right side",
            "Sitting up"
          ],
          correctAnswer: 1,
          explanation: "Place pregnant women in recovery position on left side to improve blood flow to fetus."
        },
        {
          id: 11,
          question: "What for inhaled poison?",
          options: [
            "Have person drink water",
            "Move to fresh air immediately",
            "Induce vomiting",
            "Have person lie down"
          ],
          correctAnswer: 1,
          explanation: "For inhaled poison, move person to fresh air immediately and monitor breathing."
        },
        {
          id: 12,
          question: "What is heat exhaustion?",
          options: [
            "Same as heat stroke",
            "Heavy sweating, weakness, cool clammy skin",
            "No sweating, hot dry skin",
            "Only happens to children"
          ],
          correctAnswer: 1,
          explanation: "Heat exhaustion shows heavy sweating, weakness, cool/pale/clammy skin, and fast weak pulse."
        },
        {
          id: 13,
          question: "How to warm hypothermia victim?",
          options: [
            "Warm extremities first",
            "Warm center of body first",
            "Give alcohol",
            "Have person exercise"
          ],
          correctAnswer: 1,
          explanation: "Warm hypothermia victim's center of body first (chest, neck, head, groin)."
        },
        {
          id: 14,
          question: "What for bee sting?",
          options: [
            "Squeeze stinger out",
            "Scrape stinger out",
            "Leave stinger in",
            "Cut around stinger"
          ],
          correctAnswer: 1,
          explanation: "Scrape bee stinger out with fingernail or card - don't squeeze which injects more venom."
        },
        {
          id: 15,
          question: "What are immediate (red) triage patients?",
          options: [
            "Walking wounded",
            "Life-threatening but treatable",
            "Minor injuries",
            "Unlikely to survive"
          ],
          correctAnswer: 1,
          explanation: "Immediate (red) patients have life-threatening but treatable conditions like severe bleeding."
        },
        {
          id: 16,
          question: "What for swallowed poison?",
          options: [
            "Always induce vomiting",
            "Do not induce vomiting unless instructed",
            "Give milk immediately",
            "Have person exercise"
          ],
          correctAnswer: 1,
          explanation: "Do NOT induce vomiting for swallowed poison unless specifically instructed by Poison Control."
        },
        {
          id: 17,
          question: "What is psychological first aid?",
          options: [
            "Medication for stress",
            "Listen, protect, connect, model calm",
            "Only for professionals",
            "Ignoring emotional needs"
          ],
          correctAnswer: 1,
          explanation: "Psychological first aid involves listening, protecting, connecting, and modeling calm behavior."
        },
        {
          id: 18,
          question: "What for animal bite?",
          options: [
            "Suck out poison",
            "Control bleeding, wash thoroughly, seek medical help",
            "Bandage tightly",
            "Apply heat"
          ],
          correctAnswer: 1,
          explanation: "For animal bites, control bleeding, wash thoroughly, cover, and seek medical attention for infection/rabies risk."
        },
        {
          id: 19,
          question: "What are universal precautions barriers?",
          options: [
            "Only gloves",
            "Gloves, face shields, CPR masks",
            "Only for major injuries",
            "Optional equipment"
          ],
          correctAnswer: 1,
          explanation: "Universal precautions include using gloves, face shields, CPR masks as barriers against infection."
        },
        {
          id: 20,
          question: "What is most important in environmental emergencies?",
          options: [
            "Treating the person immediately",
            "Your safety first, then help",
            "Calling family first",
            "Taking pictures for evidence"
          ],
          correctAnswer: 1,
          explanation: "In environmental emergencies, your safety comes first - don't become another victim."
        }
      ]
    }
  ],

  // FINAL EXAM (40 questions covering all modules)
  finalExam: {
    id: "first-aid-certificate-exam",
    title: "First Aid Certificate Final Exam",
    description: "Comprehensive exam covering all first aid modules. Pass with 80% or higher to earn your certificate.",
    passingScore: 80,
    questions: [
      {
        id: 1,
        question: "What are the Three Cs of emergency response?",
        options: [
          "Call, Care, Carry",
          "Check, Call, Care",
          "Check, Call, Carry",
          "Call, Check, Carry"
        ],
        correctAnswer: 1,
        explanation: "The Three Cs are Check the scene, Call for help, and Care for the injured person."
      },
      {
        id: 2,
        question: "What is the correct compression depth for adult CPR?",
        options: [
          "1 inch",
          "2-2.4 inches",
          "3 inches",
          "As deep as possible"
        ],
        correctAnswer: 1,
        explanation: "Adult chest compressions should be 2-2.4 inches deep for effective CPR."
      },
      {
        id: 3,
        question: "What is the first step to control bleeding?",
        options: [
          "Elevate the injury",
          "Apply direct pressure",
          "Use pressure points",
          "Apply tourniquet"
        ],
        correctAnswer: 1,
        explanation: "Apply direct pressure with a clean dressing as the first step to control bleeding."
      },
      {
        id: 4,
        question: "What are signs of shock?",
        options: [
          "Red, hot skin",
          "Pale, cool, clammy skin",
          "Slow, strong pulse",
          "Deep, slow breathing"
        ],
        correctAnswer: 1,
        explanation: "Shock signs include pale, cool, clammy skin; rapid, weak pulse; and rapid, shallow breathing."
      },
      {
        id: 5,
        question: "What does FAST stand for in stroke recognition?",
        options: [
          "Fast Action Stroke Treatment",
          "Face, Arms, Speech, Time",
          "First Aid Stroke Test",
          "Fever, Arms, Speech, Time"
        ],
        correctAnswer: 1,
        explanation: "FAST stands for Face, Arms, Speech, Time - key signs to recognize a stroke quickly."
      },
      {
        id: 6,
        question: "What should you do first for poisoning?",
        options: [
          "Induce vomiting immediately",
          "Call Poison Control or emergency services",
          "Give milk to drink",
          "Have person lie down"
        ],
        correctAnswer: 1,
        explanation: "For poisoning, call Poison Control or emergency services first for specific instructions."
      },
      {
        id: 7,
        question: "What does DRSABCD stand for?",
        options: [
          "Danger, Response, Send, Airway, Breathing, CPR, Defibrillation",
          "Dial, Response, Send, Airway, Breathing, CPR, Doctor",
          "Danger, Rescue, Send, Airway, Breathing, CPR, Defibrillation",
          "Dial, Rescue, Send, Airway, Breathing, CPR, Doctor"
        ],
        correctAnswer: 0,
        explanation: "DRSABCD stands for Danger, Response, Send for help, Airway, Breathing, CPR, Defibrillation."
      },
      {
        id: 8,
        question: "What is the correct CPR compression rate?",
        options: [
          "60-80 per minute",
          "80-100 per minute",
          "100-120 per minute",
          "As fast as possible"
        ],
        correctAnswer: 2,
        explanation: "CPR compressions should be at a rate of 100-120 per minute for all ages."
      },
      {
        id: 9,
        question: "When should you use a tourniquet?",
        options: [
          "For any bleeding",
          "Only for arterial bleeding",
          "Life-threatening limb bleeding not controlled by direct pressure",
          "Only for head wounds"
        ],
        correctAnswer: 2,
        explanation: "Use a tourniquet for life-threatening limb bleeding when direct pressure doesn't control it."
      },
      {
        id: 10,
        question: "How long should you cool a burn with running water?",
        options: [
          "1-2 minutes",
          "10-20 minutes",
          "30-40 minutes",
          "Until it stops hurting"
        ],
        correctAnswer: 1,
        explanation: "Cool burns with cool running water for 10-20 minutes to stop the burning process."
      },
      {
        id: 11,
        question: "What is a common heart attack symptom?",
        options: [
          "Sharp, stabbing chest pain only",
          "Chest pressure, pain spreading, shortness of breath",
          "Only left arm pain",
          "Only nausea"
        ],
        correctAnswer: 1,
        explanation: "Heart attack symptoms often include chest pressure/pain, pain spreading, shortness of breath."
      },
      {
        id: 12,
        question: "What should you NOT do for snake bite?",
        options: [
          "Keep person calm and still",
          "Cut the wound or suck out venom",
          "Remove tight clothing",
          "Call emergency services"
        ],
        correctAnswer: 1,
        explanation: "Do NOT cut snake bite wounds or attempt to suck out venom - this causes more harm."
      },
      {
        id: 13,
        question: "What should you check first in an emergency?",
        options: [
          "The injured person's breathing",
          "Scene safety for yourself and others",
          "The person's pulse",
          "What caused the injury"
        ],
        correctAnswer: 1,
        explanation: "Always check scene safety first to ensure you don't become another victim."
      },
      {
        id: 14,
        question: "Where should AED pads be placed?",
        options: [
          "Both on the front of chest",
          "One on chest, one on back",
          "Both on the back",
          "On wrists and ankles"
        ],
        correctAnswer: 0,
        explanation: "Place one pad on upper right chest below collarbone, one on lower left chest below armpit."
      },
      {
        id: 15,
        question: "What should you do if blood soaks through dressing?",
        options: [
          "Remove and replace it",
          "Add more dressings on top",
          "Loosen the pressure",
          "Use tourniquet immediately"
        ],
        correctAnswer: 1,
        explanation: "If blood soaks through, add more dressings on top without removing the original dressing."
      },
      {
        id: 16,
        question: "How should you position someone in shock?",
        options: [
          "Sitting up",
          "On their side",
          "Flat with legs elevated (unless contraindicated)",
          "Standing up"
        ],
        correctAnswer: 2,
        explanation: "Position shock victim flat on back with legs elevated 8-12 inches, unless contraindicated."
      },
      {
        id: 17,
        question: "What should you give for low blood sugar if conscious?",
        options: [
          "Protein only",
          "Sugary food or drink",
          "Salt water",
          "Nothing by mouth"
        ],
        correctAnswer: 1,
        explanation: "For conscious person with low blood sugar, give sugary food or drink like juice or candy."
      },
      {
        id: 18,
        question: "What is heat stroke?",
        options: [
          "Mild overheating",
          "Medical emergency with high body temperature",
          "Normal reaction to exercise",
          "Only affects athletes"
        ],
        correctAnswer: 1,
        explanation: "Heat stroke is a medical emergency with dangerously high body temperature requiring rapid cooling."
      },
      {
        id: 19,
        question: "When should you call emergency services?",
        options: [
          "Only for life-threatening emergencies",
          "Immediately for serious situations",
          "After providing all first aid",
          "When you send someone else to call"
        ],
        correctAnswer: 1,
        explanation: "Call emergency services immediately for serious situations like cardiac arrest, severe bleeding."
      },
      {
        id: 20,
        question: "What should you do during a seizure?",
        options: [
          "Restrain the person",
          "Put something in their mouth",
          "Protect from injury, time the seizure",
          "Pour water on their face"
        ],
        correctAnswer: 2,
        explanation: "During a seizure, protect from injury, time it, and do not restrain or put anything in mouth."
      },
      {
        id: 21,
        question: "What is an open fracture?",
        options: [
          "Bone broken but skin intact",
          "Bone protrudes through skin",
          "Hairline crack in bone",
          "Joint dislocation"
        ],
        correctAnswer: 1,
        explanation: "An open fracture occurs when the broken bone protrudes through the skin."
      },
      {
        id: 22,
        question: "What is anaphylaxis?",
        options: [
          "Mild allergic reaction",
          "Severe, life-threatening allergic reaction",
          "Type of seizure",
          "Heart condition"
        ],
        correctAnswer: 1,
        explanation: "Anaphylaxis is a severe, life-threatening allergic reaction requiring immediate epinephrine."
      },
      {
        id: 23,
        question: "How to treat frostbite?",
        options: [
          "Rub with snow",
          "Use direct heat like heater",
          "Warm gradually in warm water",
          "Massage vigorously"
        ],
        correctAnswer: 2,
        explanation: "Warm frostbite gradually in warm (not hot) water - do not rub or use direct heat."
      },
      {
        id: 24,
        question: "What information should you give when calling emergency?",
        options: [
          "Only your name",
          "Exact location and what happened",
          "Only the person's symptoms",
          "Your medical qualifications"
        ],
        correctAnswer: 1,
        explanation: "Provide exact location, what happened, number of injured, their condition, and what help you're giving."
      },
      {
        id: 25,
        question: "What should you do when AED says "analyzing"?",
        options: [
          "Continue CPR",
          "Stop CPR and don't touch person",
          "Check breathing",
          "Move the person"
        ],
        correctAnswer: 1,
        explanation: "Stop CPR when AED says "analyzing" and ensure no one touches the person during analysis."
      },
      {
        id: 26,
        question: "What should you do with embedded object?",
        options: [
          "Remove it carefully",
          "Stabilize it with bulky dressing",
          "Push it in further",
          "Ignore it and bandage"
        ],
        correctAnswer: 1,
        explanation: "Do not remove embedded objects; stabilize with bulky dressing and seek medical help."
      },
      {
        id: 27,
        question: "What does RICE stand for?",
        options: [
          "Rest, Ice, Compression, Elevation",
          "Run, Ice, Cover, Elevate",
          "Rest, Immobilize, Cool, Exercise",
          "Relax, Ice, Compress, Extend"
        ],
        correctAnswer: 0,
        explanation: "RICE stands for Rest, Ice, Compression, Elevation for sprains and strains."
      },
      {
        id: 28,
        question: "What aspirin advice for heart attack?",
        options: [
          "Never give aspirin",
          "Give if available and not allergic (chew one)",
          "Give two with water",
          "Only give if prescribed"
        ],
        correctAnswer: 1,
        explanation: "For suspected heart attack, give one regular aspirin to chew if available and person not allergic."
      },
      {
        id: 29,
        question: "How to remove a tick?",
        options: [
          "Burn it off",
          "Use tweezers close to skin, pull straight out",
          "Cover with petroleum jelly",
          "Twist and jerk it out"
        ],
        correctAnswer: 1,
        explanation: "Use tweezers close to skin and pull straight out steadily to remove ticks properly."
      },
      {
        id: 30,
        question: "What is the most important rule in first aid?",
        options: [
          "Your safety comes first",
          "Always help everyone",
          "Call family first",
          "Treat worst injury first"
        ],
        correctAnswer: 0,
        explanation: "Your own safety is the most important rule - never become another victim."
      },
      {
        id: 31,
        question: "How deep infant chest compressions?",
        options: [
          "1 inch",
          "1.5 inches",
          "2 inches",
          "Just enough to feel"
        ],
        correctAnswer: 1,
        explanation: "Infant chest compressions should be about 1.5 inches deep using two fingers."
      },
      {
        id: 32,
        question: "What is venous bleeding?",
        options: [
          "Bright red spurting",
          "Dark red steady flow",
          "Slow oozing",
          "Brown dried blood"
        ],
        correctAnswer: 1,
        explanation: "Venous bleeding is dark red and flows steadily, easier to control than arterial bleeding."
      },
      {
        id: 33,
        question: "What is a first-degree burn?",
        options: [
          "Affects only outer skin layer",
          "Affects all skin layers",
          "Always has blisters",
          "White or charred appearance"
        ],
        correctAnswer: 0,
        explanation: "First-degree burns affect only the outer skin layer, causing redness and pain without blisters."
      },
      {
        id: 34,
        question: "When to call emergency for seizure?",
        options: [
          "Never, all seizures are harmless",
          "First known seizure or lasting more than 5 minutes",
          "Only if person is elderly",
          "Only if injury occurs"
        ],
        correctAnswer: 1,
        explanation: "Call emergency for first known seizure, seizure lasting more than 5 minutes, or multiple seizures."
      },
      {
        id: 35,
        question: "What for chemical burn?",
        options: [
          "Apply neutralizing chemical",
          "Flush with large amounts of water",
          "Cover immediately",
          "Rub the area"
        ],
        correctAnswer: 1,
        explanation: "For chemical burns, flush with large amounts of water for at least 20 minutes."
      },
      {
        id: 36,
        question: "What is hypothermia?",
        options: [
          "High body temperature",
          "Dangerously low body temperature",
          "Normal body temperature",
          "Fever"
        ],
        correctAnswer: 1,
        explanation: "Hypothermia is dangerously low body temperature requiring gradual rewarming."
      },
      {
        id: 37,
        question: "What should you not apply to burn?",
        options: [
          "Cool water",
          "Ice, butter, or ointments",
          "Sterile dressing",
          "Loose bandage"
        ],
        correctAnswer: 1,
        explanation: "Do not apply ice, butter, ointments, or other home remedies to burns."
      },
      {
        id: 38,
        question: "What is hypoglycemia?",
        options: [
          "High blood sugar",
          "Low blood sugar",
          "Normal blood sugar",
          "Blood pressure issue"
        ],
        correctAnswer: 1,
        explanation: "Hypoglycemia is low blood sugar, often causing shakiness, sweating, confusion in diabetics."
      },
      {
        id: 39,
        question: "What is triage?",
        options: [
          "Medical treatment",
          "Sorting patients by severity when resources limited",
          "First aid kit",
          "Emergency phone number"
        ],
        correctAnswer: 1,
        explanation: "Triage is sorting patients by severity to prioritize care when resources are limited."
      },
      {
        id: 40,
        question: "What should you continue until help arrives?",
        options: [
          "Leave immediately",
          "Continue care until professional help arrives",
          "Ask for payment",
          "Give medical advice"
        ],
        correctAnswer: 1,
        explanation: "Continue providing care and monitoring until professional medical help arrives and takes over."
      }
    ]
  }
};

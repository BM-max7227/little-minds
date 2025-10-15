import { Smile, Heart, Users, Sparkles, Shield, BookOpen } from "lucide-react";

export const challengeData = [
  {
    id: "anxiety",
    title: "Anxiety & Worry",
    description: "Feeling nervous or worried about school, friends, or new situations is common. Persistent worry may need support.",
    icon: <Smile className="h-12 w-12" />,
    color: "text-primary",
    detailedInfo: "Anxiety in children can manifest as excessive worry, fear, or nervousness that interferes with daily activities. It's normal for children to feel anxious at times, but when it becomes overwhelming or persistent, it may require additional support.",
    signs: [
      "Excessive worrying about everyday activities or future events",
      "Difficulty sleeping or frequent nightmares",
      "Physical symptoms like stomach aches or headaches",
      "Avoiding school, social activities, or new experiences",
      "Restlessness, irritability, or difficulty concentrating",
      "Constant need for reassurance from adults"
    ],
    copingStrategies: [
      {
        title: "Deep Breathing Exercises",
        description: "Teach your child simple breathing techniques like 'balloon breathing' (breathe in slowly through the nose for 4 counts, hold for 2, breathe out through the mouth for 6). Practice together daily, especially before stressful situations."
      },
      {
        title: "Create a Worry Time",
        description: "Set aside 10-15 minutes each day as 'worry time' where your child can express all their concerns. Outside this time, encourage them to save worries for later. This helps contain anxiety to a specific period."
      },
      {
        title: "Gradual Exposure",
        description: "Help your child face fears gradually in small, manageable steps. Create a fear ladder together, starting with the least scary situation and working up. Celebrate each small victory."
      },
      {
        title: "Positive Self-Talk",
        description: "Help your child replace anxious thoughts with realistic, positive ones. Practice phrases like 'I can handle this,' 'This feeling will pass,' or 'I've done hard things before.'"
      }
    ],
    activities: [
      {
        title: "Worry Jar or Box",
        description: "Have your child write or draw their worries on paper and put them in a special jar. This externalizes the anxiety and gives them a sense of control. You can review and address worries together at a set time."
      },
      {
        title: "Mindfulness Games",
        description: "Play '5-4-3-2-1' grounding game: identify 5 things you see, 4 things you can touch, 3 things you hear, 2 things you smell, and 1 thing you taste. This brings attention to the present moment."
      },
      {
        title: "Relaxation Stories",
        description: "Read or create calming stories that take your child on peaceful imaginary journeys. Use apps or books specifically designed for child relaxation and meditation."
      },
      {
        title: "Art Therapy Activities",
        description: "Encourage drawing, coloring, or painting to express feelings. Create a 'feelings chart' with different colors representing emotions, and let them color how they feel each day."
      }
    ],
    whenToSeekHelp: [
      "Anxiety interferes with school attendance or performance",
      "Your child avoids most social situations or has no friends",
      "Physical symptoms persist despite medical clearance",
      "Panic attacks or severe anxiety episodes occur",
      "Anxiety has lasted more than 6 months and is worsening"
    ],
    videos: [
      {
        title: "Anxiety in Children: What Parents Need to Know",
        url: "https://www.youtube.com/watch?v=2s5a8Y7X0Yw",
        description: "Child psychologist explains anxiety symptoms and evidence-based strategies for parents."
      },
      {
        title: "Breathing Exercises for Kids",
        url: "https://www.youtube.com/watch?v=RVA2N6tX2cg",
        description: "Fun, animated guide teaching children calming breathing techniques."
      },
      {
        title: "Cosmic Kids Yoga - Anxiety Relief",
        url: "https://www.youtube.com/watch?v=cH-7arVOYqI",
        description: "Interactive yoga and mindfulness session designed to help kids manage worry and stress."
      }
    ]
  },
  {
    id: "sadness",
    title: "Sadness & Low Mood",
    description: "Occasional sadness is normal, but prolonged low mood, loss of interest, or withdrawal may signal depression.",
    icon: <Heart className="h-12 w-12" />,
    color: "text-secondary",
    detailedInfo: "While sadness is a normal emotion, persistent low mood in children can indicate depression. Unlike adults, children may show depression through irritability, anger, or physical complaints rather than appearing sad.",
    signs: [
      "Persistent sad, empty, or irritable mood most days",
      "Loss of interest in activities they used to enjoy",
      "Changes in appetite or weight (increase or decrease)",
      "Sleeping too much or too little",
      "Low energy or fatigue",
      "Feelings of worthlessness or excessive guilt",
      "Difficulty concentrating or making decisions",
      "Talk of death, dying, or self-harm"
    ],
    copingStrategies: [
      {
        title: "Maintain Routine and Structure",
        description: "Keep consistent daily routines for meals, sleep, and activities. Predictability provides security and helps regulate mood. Include time for activities they used to enjoy, even if they resist initially."
      },
      {
        title: "Encourage Physical Activity",
        description: "Exercise releases endorphins and improves mood. Start small - even a 10-minute walk together can help. Make it fun with games, dancing, or outdoor exploration rather than formal exercise."
      },
      {
        title: "Validate Their Feelings",
        description: "Let your child know it's okay to feel sad. Avoid saying 'cheer up' or 'just be happy.' Instead, say 'I see you're feeling sad, and that's okay. I'm here with you.'"
      },
      {
        title: "Problem-Solving Together",
        description: "If specific issues are contributing to sadness, work together to brainstorm solutions. This empowers your child and shows that problems can be addressed."
      }
    ],
    activities: [
      {
        title: "Gratitude Journal",
        description: "Each evening, help your child write or draw three good things from the day, no matter how small. This shifts focus toward positive experiences and builds resilience over time."
      },
      {
        title: "Mood Tracker",
        description: "Create a simple chart where your child can mark their mood each day with colors or emoji faces. This helps them recognize patterns and communicate feelings."
      },
      {
        title: "Acts of Kindness",
        description: "Helping others can boost mood. Plan small acts of kindness together like baking for a neighbor, drawing cards for family members, or helping with a household task."
      },
      {
        title: "Light Therapy and Nature Time",
        description: "Spend time outdoors in natural light, especially in the morning. Even 15 minutes outside can improve mood. In winter, consider a light therapy lamp with your doctor's guidance."
      }
    ],
    whenToSeekHelp: [
      "Symptoms persist for more than 2 weeks",
      "Your child expresses thoughts of self-harm or suicide",
      "Severe withdrawal from friends and family",
      "Significant decline in school performance",
      "Changes in eating or sleeping that affect health",
      "You feel overwhelmed or unsure how to help"
    ],
    videos: [
      {
        title: "Understanding Depression in Children",
        url: "https://www.youtube.com/watch?v=c4_cxqP7gNQ",
        description: "Medical expert explains how depression presents differently in children and what parents should watch for."
      },
      {
        title: "Helping Your Child with Depression",
        url: "https://www.youtube.com/watch?v=2VRhfqIxZOk",
        description: "Practical strategies from a child psychologist on supporting a child with depression."
      },
      {
        title: "Kids Meditation: Boosting Happiness",
        url: "https://www.youtube.com/watch?v=VG0NVFhwcTk",
        description: "Guided meditation designed to help children cultivate positive emotions and mood."
      }
    ]
  },
  {
    id: "social",
    title: "Social Challenges",
    description: "Difficulty making friends, peer pressure, or bullying can significantly impact a child's mental wellbeing.",
    icon: <Users className="h-12 w-12" />,
    color: "text-accent",
    detailedInfo: "Social skills development is crucial for children's wellbeing. Challenges in making friends, maintaining relationships, or dealing with peer conflict can lead to loneliness, anxiety, and low self-esteem.",
    signs: [
      "Reluctance to go to school or social events",
      "Coming home with damaged belongings or unexplained injuries",
      "Few or no friends, or sudden loss of friendships",
      "Being excluded from parties or group activities",
      "Talking negatively about themselves",
      "Changes in eating, sleeping, or mood",
      "Declining grades or loss of interest in school",
      "Avoiding discussions about school or peers"
    ],
    copingStrategies: [
      {
        title: "Role-Playing Social Situations",
        description: "Practice social scenarios at home through play. Act out how to join a group, share toys, handle conflicts, or respond to teasing. Make it fun and praise their efforts."
      },
      {
        title: "Build Social Skills",
        description: "Teach specific skills like making eye contact, taking turns in conversation, reading body language, and showing interest in others. Break down complex social interactions into simple steps."
      },
      {
        title: "Address Bullying Directly",
        description: "If bullying is occurring, take it seriously. Document incidents, communicate with teachers and school, and work on a safety plan. Teach your child assertiveness techniques and when to seek help from adults."
      },
      {
        title: "Foster Outside Friendships",
        description: "Help your child find friends through activities outside school like sports, clubs, or community programs. This provides alternative social opportunities and boosts confidence."
      }
    ],
    activities: [
      {
        title: "Friendship Skills Games",
        description: "Use board games and cooperative activities to practice taking turns, handling winning/losing, and working together. Discuss what makes a good friend and practice those qualities."
      },
      {
        title: "Playdates with Structure",
        description: "Arrange short, structured playdates with one child at a time. Plan activities in advance and stay nearby to guide interactions. Keep them brief initially (1-2 hours) to prevent overwhelm."
      },
      {
        title: "Reading Social Stories",
        description: "Read books together that address friendship, bullying, and social situations. Discuss characters' feelings and choices. Ask 'What would you do?' to develop problem-solving skills."
      },
      {
        title: "Emotion Charades",
        description: "Play games where you act out different emotions and guess what they are. This helps children recognize and understand emotional expressions in themselves and others."
      }
    ],
    whenToSeekHelp: [
      "Bullying is physical, threatening, or happening repeatedly",
      "Your child shows signs of depression or anxiety due to social issues",
      "School refusal or frequent complaints of illness to avoid school",
      "Significant social skills delays compared to same-age peers",
      "Your child seems completely isolated with no peer connections"
    ],
    videos: [
      {
        title: "Teaching Kids Social Skills",
        url: "https://www.youtube.com/watch?v=DfJv3JjHVYM",
        description: "Practical guide for parents on helping children develop strong friendship skills."
      },
      {
        title: "What to Do About Bullying",
        url: "https://www.youtube.com/watch?v=Dyx9DP0DJY8",
        description: "Expert advice on recognizing bullying and taking effective action as a parent."
      },
      {
        title: "Making Friends - Social Skills for Kids",
        url: "https://www.youtube.com/watch?v=TxL-C-qlcx8",
        description: "Fun, animated video teaching children how to make and keep friends."
      }
    ]
  },
  {
    id: "emotional-regulation",
    title: "Emotional Regulation",
    description: "Learning to manage big feelings like anger, frustration, or excitement is an important developmental skill.",
    icon: <Sparkles className="h-12 w-12" />,
    color: "text-primary",
    detailedInfo: "Emotional regulation is the ability to manage and respond to emotions in healthy ways. Children are still developing this skill and may experience intense emotional reactions. Teaching them to recognize, name, and cope with emotions is crucial for lifelong wellbeing.",
    signs: [
      "Frequent tantrums or meltdowns beyond typical developmental stage",
      "Extreme reactions to minor frustrations",
      "Difficulty calming down once upset",
      "Acting impulsively without thinking",
      "Trouble transitioning between activities",
      "Becoming overwhelmed easily",
      "Physical aggression when upset (hitting, throwing)"
    ],
    copingStrategies: [
      {
        title: "Name the Emotion",
        description: "Help your child build emotional vocabulary. When they're upset, calmly name what they might be feeling: 'I see you're feeling really frustrated right now.' This validates their experience and helps them identify emotions."
      },
      {
        title: "Calm-Down Corner",
        description: "Create a special space with calming items like soft pillows, stress balls, coloring books, or calming bottles. This isn't a punishment—it's a safe place to regulate emotions. Model using it yourself."
      },
      {
        title: "Teach the 'Stop and Think' Method",
        description: "When your child feels strong emotions, teach them to STOP (pause), take deep BREATHS, and THINK about what to do next. Practice this during calm moments so it becomes automatic."
      },
      {
        title: "Use Visual Emotion Tools",
        description: "Emotion charts, feeling thermometers, or traffic light systems help children gauge their emotional intensity and choose appropriate coping strategies."
      }
    ],
    activities: [
      {
        title: "Emotion Check-ins",
        description: "Several times daily, ask 'How are you feeling?' Help them identify the emotion and its intensity. Model by sharing your own feelings: 'I'm feeling tired and a bit frustrated because of the traffic.'"
      },
      {
        title: "Feelings Faces Game",
        description: "Make funny faces showing different emotions and have your child guess the feeling. Take turns. This builds emotion recognition in a playful way."
      },
      {
        title: "Calm-Down Kit",
        description: "Create a personalized kit with items that help your child calm down: fidget toys, favorite photos, positive affirmations, breathing exercises cards, or sensory items."
      },
      {
        title: "Anger Action Plan",
        description: "Work together to create a step-by-step plan for when they feel angry: 1) Notice anger signs in body, 2) Use calm-down strategy, 3) Talk about it, 4) Problem-solve if needed."
      }
    ],
    whenToSeekHelp: [
      "Emotional outbursts are frequent, intense, and interfere with daily life",
      "Your child or others are getting hurt during meltdowns",
      "Difficulty regulating emotions persists beyond expected developmental stage",
      "Emotional dysregulation affects school performance or relationships",
      "You feel unable to help or the situation is escalating"
    ],
    videos: [
      {
        title: "Teaching Kids to Manage Big Emotions",
        url: "https://www.youtube.com/watch?v=ckPRDjRwVBM",
        description: "Psychologist explains age-appropriate strategies for emotion regulation."
      },
      {
        title: "Calm Down Breathing for Kids",
        url: "https://www.youtube.com/watch?v=RVA2N6tX2cg",
        description: "Simple breathing exercises animated for children to practice self-regulation."
      },
      {
        title: "Inside Out - Understanding Emotions",
        url: "https://www.youtube.com/watch?v=dOkyKyVFnSs",
        description: "Using the movie 'Inside Out' to teach children about emotions and feelings."
      }
    ]
  },
  {
    id: "trauma",
    title: "Trauma & Stress",
    description: "Experiencing difficult events can affect children deeply. Professional support can help them process and heal.",
    icon: <Shield className="h-12 w-12" />,
    color: "text-secondary",
    detailedInfo: "Trauma results from experiencing or witnessing events that threaten safety or wellbeing. Children may experience trauma from various sources including accidents, loss, abuse, natural disasters, or ongoing stressors. The effects can be long-lasting but are treatable with appropriate support.",
    signs: [
      "Nightmares, difficulty sleeping, or fear of being alone",
      "Flashbacks or intrusive memories of the event",
      "Avoidance of reminders of the traumatic event",
      "Heightened startle response or constant vigilance",
      "Regression to earlier behaviors (bedwetting, thumb-sucking)",
      "Clinginess or separation anxiety",
      "Angry outbursts, irritability, or aggressive behavior",
      "Physical complaints without medical cause"
    ],
    copingStrategies: [
      {
        title: "Provide Safety and Predictability",
        description: "Children need to feel safe to heal. Maintain consistent routines, clear boundaries, and a calm home environment. Reassure them that they are safe now and that adults are taking care of them."
      },
      {
        title: "Listen Without Judgment",
        description: "Allow your child to talk about the experience at their own pace. Don't force them to talk, but be available when they're ready. Validate their feelings and let them know their reactions are normal."
      },
      {
        title: "Limit Media Exposure",
        description: "Reduce or eliminate exposure to news, videos, or discussions about traumatic events, especially if similar to what your child experienced. This prevents re-traumatization."
      },
      {
        title: "Seek Trauma-Informed Professional Help",
        description: "Trauma often requires professional intervention. Therapists trained in trauma-focused cognitive behavioral therapy (TF-CBT) or EMDR can help children process traumatic experiences safely."
      }
    ],
    activities: [
      {
        title: "Create a Safety Plan",
        description: "Work together to identify safe people, safe places, and things your child can do when feeling scared. Write it down and review it regularly. This gives them a sense of control."
      },
      {
        title: "Trauma-Sensitive Storytelling",
        description: "Help younger children process trauma through play or stories. Let them act out scenarios with toys or dolls, always ensuring the stories end safely and positively."
      },
      {
        title: "Grounding Exercises",
        description: "When flashbacks or intense anxiety occur, use grounding techniques to bring your child back to the present: name objects in the room, count backward, hold something cold, or focus on their breathing."
      },
      {
        title: "Memory Box",
        description: "For children dealing with loss, create a memory box with photos, drawings, and mementos. This honors their feelings and provides a healthy way to remember while moving forward."
      }
    ],
    whenToSeekHelp: [
      "Immediately if your child has experienced or witnessed severe trauma",
      "Symptoms are severe, worsening, or lasting beyond one month",
      "Your child expresses thoughts of self-harm",
      "Trauma reactions interfere significantly with daily functioning",
      "You're unsure how to help or feel overwhelmed",
      "Your child needs to testify in court or legal proceedings"
    ],
    videos: [
      {
        title: "Helping Children Heal from Trauma",
        url: "https://www.youtube.com/watch?v=ZhSq9uGHOFk",
        description: "Expert guidance on recognizing trauma in children and supporting their recovery."
      },
      {
        title: "Trauma-Informed Care for Kids",
        url: "https://www.youtube.com/watch?v=uHM3LKOZD2w",
        description: "Understanding how trauma affects child development and what parents can do."
      },
      {
        title: "Grounding Techniques for Kids",
        url: "https://www.youtube.com/watch?v=sv5fNcmYAqo",
        description: "Practical exercises to help children manage trauma-related anxiety and flashbacks."
      }
    ]
  },
  {
    id: "learning",
    title: "Learning Difficulties",
    description: "Struggling with school can affect self-esteem. Understanding and accommodations can make a huge difference.",
    icon: <BookOpen className="h-12 w-12" />,
    color: "text-accent",
    detailedInfo: "Learning difficulties or disabilities can affect how children acquire, process, or retain information. These challenges are not a reflection of intelligence but rather differences in how the brain processes information. Early identification and appropriate support can dramatically improve outcomes.",
    signs: [
      "Persistent difficulty with reading, writing, or math despite effort",
      "Trouble following multi-step instructions",
      "Difficulty organizing thoughts or materials",
      "Avoidance of homework or school tasks",
      "Low self-esteem or negative self-talk about abilities",
      "Frustration leading to behavioral issues",
      "Takes much longer than peers to complete work",
      "Difficulty with focus, attention, or sitting still"
    ],
    copingStrategies: [
      {
        title: "Get a Comprehensive Evaluation",
        description: "Request formal testing through your school or private psychologist to identify specific learning differences. This is the first step to getting appropriate accommodations and support services."
      },
      {
        title: "Focus on Strengths",
        description: "Identify and celebrate what your child is good at. Build confidence by providing opportunities for success in their strength areas. Remember that intelligence comes in many forms."
      },
      {
        title: "Advocate for Accommodations",
        description: "Work with teachers to implement helpful accommodations: extended time on tests, preferential seating, breaking tasks into smaller steps, using assistive technology, or having instructions repeated."
      },
      {
        title: "Create a Homework-Friendly Environment",
        description: "Designate a quiet, organized space for homework. Break assignments into manageable chunks with short breaks. Use timers, checklists, and visual schedules to build structure."
      }
    ],
    activities: [
      {
        title: "Multisensory Learning",
        description: "Engage multiple senses when learning: trace letters in sand, use manipulatives for math, create songs or rhymes for memorization, or act out stories. This helps information stick."
      },
      {
        title: "Use Assistive Technology",
        description: "Explore tools like text-to-speech software, audiobooks, word prediction programs, graphic organizers, or apps designed for dyslexia or ADHD. Technology can level the playing field."
      },
      {
        title: "Build Study Skills",
        description: "Teach organization strategies: color-coding subjects, using planners, creating checklists, and setting up routines. These executive function skills must often be taught explicitly."
      },
      {
        title: "Practice Self-Advocacy",
        description: "As your child gets older, teach them to understand their learning difference and communicate their needs. Role-play asking teachers for help or explaining accommodations they need."
      }
    ],
    whenToSeekHelp: [
      "Your child is falling significantly behind peers academically",
      "Teacher expresses concerns about learning or behavior",
      "Your child shows signs of anxiety or depression related to school",
      "Homework battles are constant and affecting family relationships",
      "You suspect ADHD, dyslexia, or another learning disability",
      "Previous interventions haven't been effective"
    ],
    videos: [
      {
        title: "Understanding Learning Disabilities",
        url: "https://www.youtube.com/watch?v=2qYKcfFRHMU",
        description: "Comprehensive overview of different types of learning disabilities and how they affect children."
      },
      {
        title: "Supporting Kids with Dyslexia",
        url: "https://www.youtube.com/watch?v=zafiGBrFkRM",
        description: "Practical strategies for parents helping children who struggle with reading."
      },
      {
        title: "ADHD in Children: What You Need to Know",
        url: "https://www.youtube.com/watch?v=uU6o2_UFSEY",
        description: "Expert explains ADHD symptoms and evidence-based management strategies."
      }
    ]
  }
];
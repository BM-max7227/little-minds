export interface LearnTopic {
  id: string;
  title: string;
  description: string;
  howItFeels: {
    feelings: string[];
    behaviors: string[];
    bodySigns: string[];
  };
  whatHelps: {
    atHome: string[];
    atSchool: string[];
    whenToSeekHelp: string[];
  };
  mythsAndFacts: Array<{ myth: string; fact: string }>;
}

export const learnTopics: Record<string, LearnTopic> = {
  anxiety: {
    id: "anxiety",
    title: "Anxiety",
    description: "Anxiety is a natural response to stress or perceived danger. It becomes a concern when worries feel overwhelming, persist even when there's no clear threat, or interfere with daily activities. In children and teens, anxiety can show up differently than in adults. Young people may not always recognize or articulate that they're feeling anxious, and their symptoms may be mistaken for other issues like defiance, physical illness, or lack of motivation.",
    howItFeels: {
      feelings: [
        "Constant worry about school, friends, family, or the future",
        "Fear of making mistakes or being judged",
        "Feeling on edge or unable to relax",
        "Difficulty concentrating",
      ],
      behaviors: [
        "Avoiding certain places, people, or activities",
        "Seeking constant reassurance",
        "Irritability or anger outbursts",
        "Difficulty sleeping or nightmares",
        "Procrastination or refusing to go to school",
      ],
      bodySigns: [
        "Stomachaches or headaches with no medical cause",
        "Rapid heartbeat or shortness of breath",
        "Muscle tension",
        "Fatigue or restlessness",
      ],
    },
    whatHelps: {
      atHome: [
        "Validate their feelings without dismissing or minimizing the worry",
        "Teach and practice calming techniques like deep breathing",
        "Maintain consistent routines and prepare for transitions",
        "Limit exposure to news or social media that increases anxiety",
        "Model healthy coping strategies and talk about your own stress management",
      ],
      atSchool: [
        "Communicate with teachers about anxiety triggers",
        "Request accommodations like extra time on tests or a quiet space to regroup",
        "Encourage participation in activities that build confidence",
        "Work with school counselors on gradual exposure to feared situations",
      ],
      whenToSeekHelp: [
        "Anxiety interferes with school attendance or performance",
        "Physical symptoms persist despite medical evaluation",
        "Your child avoids activities they used to enjoy",
        "Sleep or eating patterns are significantly disrupted",
        "You see signs of panic attacks or extreme distress",
      ],
    },
    mythsAndFacts: [
      {
        myth: "Anxiety is just shyness or being dramatic",
        fact: "Anxiety is a real condition with physical and emotional symptoms that can be treated with support and strategies",
      },
      {
        myth: "Avoiding what makes them anxious will help",
        fact: "Gradual, supported exposure to fears actually helps reduce anxiety over time while avoidance makes it stronger",
      },
    ],
  },
  sleep: {
    id: "sleep",
    title: "Sleep Problems",
    description: "Sleep is when your body and brain rest, grow, and recharge. When kids don't get enough sleep, they might feel cranky, have trouble focusing, or feel tired all day.",
    howItFeels: {
      feelings: [
        "Difficulty winding down at bedtime",
        "Racing thoughts or worry at night",
        "Frustration about not being able to sleep",
        "Excessive daytime sleepiness",
      ],
      behaviors: [
        "Staying up late on devices",
        "Irregular sleep schedule on weekends vs weekdays",
        "Needing multiple alarms to wake up",
        "Falling asleep in class",
        "Increased irritability or emotional outbursts",
      ],
      bodySigns: [
        "Dark circles under eyes",
        "Difficulty concentrating",
        "Lower immune function (getting sick more often)",
        "Increased appetite or cravings for sugary foods",
      ],
    },
    whatHelps: {
      atHome: [
        "Establish a consistent bedtime and wake time, even on weekends",
        "Create a calming bedtime routine that starts 30-60 minutes before sleep",
        "Remove screens from the bedroom or enforce a device curfew 1 hour before bed",
        "Keep the bedroom cool, dark, and quiet",
        "Avoid caffeine after lunch",
      ],
      atSchool: [
        "Educate teachers about the link between sleep and performance",
        "Discuss homework load if late nights are due to academic pressure",
        "Request later start times for tests if possible",
        "Talk to school counselors about stress management",
      ],
      whenToSeekHelp: [
        "Sleep problems persist for more than a few weeks",
        "Your child snores loudly or seems to stop breathing during sleep",
        "Daytime functioning is significantly impaired",
        "You suspect underlying anxiety, depression, or other mental health concerns",
      ],
    },
    mythsAndFacts: [
      {
        myth: "If I cannot sleep, I should just stay in bed and try harder.",
        fact: "If you cannot sleep after 20 minutes, it is better to get up and do something calm like reading until you feel sleepy again.",
      },
      {
        myth: "Staying up late to finish homework is okay as long as I get it done.",
        fact: "Sleep helps your brain learn and remember. You will do better on schoolwork if you are well rested, even if that means stopping earlier.",
      },
    ],
  },
  stress: {
    id: "stress",
    title: "Stress About School",
    description: "School stress happens when schoolwork, tests, or pressure feel too big to handle. A little stress can help you focus, but too much stress can make it hard to do your best.",
    howItFeels: {
      feelings: ["Worried about grades or tests", "Overwhelmed by homework", "Scared of failing", "Pressure to be perfect"],
      behaviors: ["Procrastinating on assignments", "Studying too much without breaks", "Avoiding school or homework", "Trouble concentrating"],
      bodySigns: ["Headaches", "Tight muscles", "Stomachaches", "Feeling tired all the time"],
    },
    whatHelps: {
      atHome: [
        "Break big tasks into smaller steps",
        "Create a homework schedule with built in breaks",
        "Ask for help from parents or tutors when stuck",
        "Make sure to balance schoolwork with fun activities",
      ],
      atSchool: [
        "Talk to your teacher if you are struggling",
        "Use a planner to keep track of assignments",
        "Join study groups to learn with friends",
        "Ask for extensions if you need more time",
      ],
      whenToSeekHelp: [
        "If school stress makes you not want to go to school",
        "If you feel anxious or sad most days about school",
        "If stress is affecting your sleep or eating",
        "If you feel like you cannot keep up no matter how hard you try",
      ],
    },
    mythsAndFacts: [
      {
        myth: "I need to be perfect to succeed.",
        fact: "Making mistakes is how you learn. Doing your best is what matters, not being perfect.",
      },
      {
        myth: "Taking breaks is wasting time.",
        fact: "Breaks help your brain rest and actually make you more productive when you get back to work.",
      },
    ],
  },
  sad: {
    id: "sad",
    title: "Feeling Sad or Low",
    description: "Feeling sad sometimes is normal, but when sadness lasts for a long time or makes it hard to enjoy things, it might be more than just a bad day. It is important to talk about these feelings.",
    howItFeels: {
      feelings: ["Sad or down most of the time", "Not interested in things you used to love", "Feeling hopeless or empty", "Crying a lot or feeling numb"],
      behaviors: ["Withdrawing from friends and family", "Sleeping too much or too little", "Not wanting to do activities", "Trouble focusing on schoolwork"],
      bodySigns: ["Low energy", "Changes in appetite", "Feeling heavy or sluggish", "Physical aches with no clear cause"],
    },
    whatHelps: {
      atHome: [
        "Talk to a parent or trusted adult about how you feel",
        "Try to spend time with people who care about you",
        "Do small things that used to make you happy",
        "Be patient with yourself as you work through sadness",
      ],
      atSchool: [
        "Talk to a school counselor",
        "Let your teacher know if you are struggling",
        "Join a club or activity to stay connected",
        "Ask for support if schoolwork feels too hard right now",
      ],
      whenToSeekHelp: [
        "If sadness lasts more than two weeks",
        "If you think about hurting yourself",
        "If you cannot do daily activities like going to school",
        "If you feel completely alone or hopeless",
      ],
    },
    mythsAndFacts: [
      {
        myth: "Feeling sad means I am weak.",
        fact: "Sadness is a real emotion that everyone feels sometimes. Asking for help is a sign of strength.",
      },
      {
        myth: "If I just try harder to be happy, the sadness will go away.",
        fact: "Sometimes sadness needs more than willpower. Talking to someone and getting support really helps.",
      },
    ],
  },
  conflict: {
    id: "conflict",
    title: "Family or Friend Conflict",
    description: "Conflict means disagreeing or arguing with someone. It is a normal part of relationships, but learning how to talk through problems helps everyone feel heard and respected.",
    howItFeels: {
      feelings: ["Frustrated or upset", "Hurt or misunderstood", "Angry or defensive", "Sad about the fight"],
      behaviors: ["Yelling or shutting down", "Avoiding the person", "Saying things you do not mean", "Feeling like no one listens"],
      bodySigns: ["Tight chest", "Clenched fists", "Fast heartbeat", "Feeling tense"],
    },
    whatHelps: {
      atHome: [
        "Use I feel statements instead of blaming",
        "Take a break if you are too upset to talk calmly",
        "Listen to the other person without interrupting",
        "Apologize when you make a mistake",
      ],
      atSchool: [
        "Ask a teacher or counselor to help mediate",
        "Take deep breaths before responding",
        "Focus on solving the problem, not winning the argument",
      ],
      whenToSeekHelp: [
        "If conflicts happen often and feel out of control",
        "If someone is being mean, hurtful, or unsafe",
        "If you feel like you cannot fix things on your own",
        "If the conflict is affecting your mood or schoolwork",
      ],
    },
    mythsAndFacts: [
      {
        myth: "If I ignore the problem, it will go away.",
        fact: "Ignoring problems usually makes them worse. Talking calmly and respectfully helps fix things.",
      },
      {
        myth: "Apologizing means I lost the argument.",
        fact: "Apologizing shows strength and helps rebuild trust. It does not mean you were completely wrong.",
      },
    ],
  },
  socialmedia: {
    id: "socialmedia",
    title: "Online or Social Media Pressure",
    description: "Social media can be fun, but it can also make you feel like you need to look, act, or be a certain way. Remember that what you see online is not always real.",
    howItFeels: {
      feelings: ["Left out or not good enough", "Jealous of what others post", "Anxious about likes and comments", "Worried about what people think"],
      behaviors: ["Comparing yourself to others", "Spending too much time scrolling", "Posting things just to get likes", "Feeling bad after being online"],
      bodySigns: ["Tired eyes from screen time", "Trouble sleeping", "Feeling drained", "Headaches"],
    },
    whatHelps: {
      atHome: [
        "Set time limits for social media use",
        "Unfollow accounts that make you feel bad",
        "Take breaks from your phone every day",
        "Talk to a parent about what you see online",
      ],
      atSchool: [
        "Focus on real friendships, not online ones",
        "Do not check social media during homework time",
        "Remember that everyone posts only their best moments",
      ],
      whenToSeekHelp: [
        "If social media makes you feel sad, anxious, or angry most of the time",
        "If you feel like you cannot stop scrolling",
        "If someone online is being mean or unsafe",
        "If online pressure is affecting your self esteem",
      ],
    },
    mythsAndFacts: [
      {
        myth: "Everyone else has a perfect life except me.",
        fact: "People only post their best moments online. Real life has ups and downs for everyone.",
      },
      {
        myth: "I need lots of likes to feel good about myself.",
        fact: "Your worth is not measured by likes or followers. Real confidence comes from within.",
      },
    ],
  },
  anger: {
    id: "anger",
    title: "Feeling Angry a Lot",
    description: "Anger is a normal emotion, but when it happens often or feels too big, it can hurt you and the people around you. Learning to manage anger helps you stay in control.",
    howItFeels: {
      feelings: ["Irritated or frustrated easily", "Out of control", "Like you want to yell or hit something", "Guilty after an outburst"],
      behaviors: ["Yelling or slamming things", "Getting into fights", "Saying mean things", "Storming off"],
      bodySigns: ["Hot face", "Clenched fists", "Fast heartbeat", "Tight muscles"],
    },
    whatHelps: {
      atHome: [
        "Take deep breaths or count to ten before reacting",
        "Write down or draw what made you angry",
        "Move your body by walking, running, or stretching",
        "Talk about your feelings instead of bottling them up",
      ],
      atSchool: [
        "Ask for a break if you feel too angry to focus",
        "Use calm down strategies like breathing or counting",
        "Talk to a counselor if anger happens a lot",
      ],
      whenToSeekHelp: [
        "If anger gets you in trouble at school or home",
        "If you hurt yourself or others when angry",
        "If anger is happening every day",
        "If you feel like you cannot control it",
      ],
    },
    mythsAndFacts: [
      {
        myth: "Anger is bad and I should never feel it.",
        fact: "Anger is a normal emotion. What matters is how you express it and manage it.",
      },
      {
        myth: "Letting my anger out by yelling or hitting helps me feel better.",
        fact: "Letting anger out in harmful ways can make it worse. Calm strategies work better.",
      },
    ],
  },
  bodyimage: {
    id: "bodyimage",
    title: "Body Image Worries",
    description: "Body image is how you think and feel about your body. Everyone has different bodies, and what matters most is being healthy, kind to yourself, and proud of what your body can do.",
    howItFeels: {
      feelings: ["Unhappy with how you look", "Comparing yourself to others", "Worried about weight or appearance", "Afraid of being judged"],
      behaviors: ["Avoiding mirrors or photos", "Changing how you eat or exercise in unhealthy ways", "Spending a lot of time thinking about your body", "Hiding your body with clothes"],
      bodySigns: ["Feeling uncomfortable in your own skin", "Low energy from not eating enough", "Feeling tired or weak"],
    },
    whatHelps: {
      atHome: [
        "Talk to a trusted adult about how you feel",
        "Focus on what your body can do, not just how it looks",
        "Unfollow social media accounts that make you feel bad",
        "Practice saying kind things to yourself every day",
      ],
      atSchool: [
        "Surround yourself with friends who do not focus on appearance",
        "Talk to a counselor if body worries are affecting your mood",
        "Remember that bodies come in all shapes and sizes",
      ],
      whenToSeekHelp: [
        "If body worries are affecting your eating or exercise habits",
        "If you feel sad or anxious about your body most days",
        "If you avoid activities because of how you look",
        "If you are thinking about hurting yourself",
      ],
    },
    mythsAndFacts: [
      {
        myth: "I need to look a certain way to be happy or liked.",
        fact: "True confidence and happiness come from being kind, healthy, and comfortable with who you are.",
      },
      {
        myth: "Everyone is looking at my body and judging me.",
        fact: "Most people are focused on themselves, not on judging you. You are more than how you look.",
      },
    ],
  },
  bullying: {
    id: "bullying",
    title: "Bullying",
    description: "Bullying is when someone repeatedly hurts, scares, or excludes you on purpose. It is never your fault, and you deserve to feel safe.",
    howItFeels: {
      feelings: ["Scared or unsafe", "Alone or embarrassed", "Angry or helpless", "Like you do not want to go to school"],
      behaviors: ["Avoiding certain places or people", "Not wanting to talk about school", "Acting differently than usual", "Feeling sad or anxious"],
      bodySigns: ["Stomachaches or headaches", "Trouble sleeping", "Loss of appetite", "Feeling tired"],
    },
    whatHelps: {
      atHome: [
        "Tell a parent, guardian, or trusted adult right away",
        "Write down what happened, when, and where",
        "Spend time with people who make you feel safe",
        "Remember that it is not your fault",
      ],
      atSchool: [
        "Tell a teacher, counselor, or principal",
        "Stay near adults or friends in places where bullying happens",
        "Walk away and get help instead of fighting back",
        "Be an upstander by helping others who are bullied",
      ],
      whenToSeekHelp: [
        "If bullying happens more than once",
        "If you feel unsafe at school or online",
        "If bullying is affecting your mood, sleep, or schoolwork",
        "If someone threatens to hurt you",
      ],
    },
    mythsAndFacts: [
      {
        myth: "If I tell someone, the bullying will get worse.",
        fact: "Telling a trusted adult is the best way to stop bullying and keep you safe.",
      },
      {
        myth: "Bullying is just part of growing up.",
        fact: "Bullying is not okay and should always be taken seriously. You deserve to feel safe.",
      },
    ],
  },
  grief: {
    id: "grief",
    title: "Grief and Loss",
    description: "Grief is the sadness and pain you feel when you lose someone or something important to you. It is okay to feel sad, and everyone grieves in their own way.",
    howItFeels: {
      feelings: ["Deep sadness", "Angry or confused", "Numb or empty", "Guilty or worried"],
      behaviors: ["Crying a lot or not at all", "Not wanting to do things you used to enjoy", "Talking about the person a lot or avoiding talking about them", "Feeling like things will never be okay again"],
      bodySigns: ["Tired all the time", "Trouble sleeping or eating", "Stomachaches or headaches", "Feeling heavy or drained"],
    },
    whatHelps: {
      atHome: [
        "Talk about your feelings with family or friends",
        "Keep special items or photos that remind you of happy times",
        "Let yourself cry when you need to",
        "Remember that healing takes time and it is okay to grieve",
      ],
      atSchool: [
        "Tell a teacher or counselor if you need extra support",
        "Ask for a break if you feel overwhelmed",
        "Surround yourself with understanding friends",
      ],
      whenToSeekHelp: [
        "If sadness lasts for many weeks without getting better",
        "If you feel like hurting yourself",
        "If grief is making it hard to eat, sleep, or go to school",
        "If you feel completely alone",
      ],
    },
    mythsAndFacts: [
      {
        myth: "I should be over it by now.",
        fact: "Grief does not have a timeline. It is okay to feel sad for as long as you need to.",
      },
      {
        myth: "Talking about the person I lost will make me sadder.",
        fact: "Talking about them can help you remember the good times and feel connected to them.",
      },
    ],
  },
  other: {
    id: "other",
    title: "When You Are Not Sure What You Feel",
    description: "Sometimes feelings are confusing or do not fit into one category. That is completely okay. Every feeling matters, and you deserve support no matter what you are going through.",
    howItFeels: {
      feelings: ["Confused or mixed up", "Overwhelmed", "Like something is off but you cannot name it", "Not sure how to explain what you feel"],
      behaviors: ["Feeling stuck", "Avoiding talking about it", "Not knowing where to start", "Wondering if anyone else feels this way"],
      bodySigns: ["Feeling tired or restless", "Tension in your body", "Trouble focusing", "Feeling heavy or uneasy"],
    },
    whatHelps: {
      atHome: [
        "Write down how you feel even if it does not make sense yet",
        "Talk to someone you trust and tell them you are not sure what you feel",
        "Give yourself permission to not have all the answers",
        "Try calming activities like deep breathing or listening to music",
      ],
      atSchool: [
        "Ask a counselor for help understanding your feelings",
        "Take breaks when things feel too heavy",
        "Remember that it is okay to ask for help even when you do not know what is wrong",
      ],
      whenToSeekHelp: [
        "If you feel stuck or overwhelmed for more than a few days",
        "If not understanding your feelings is affecting school or friendships",
        "If you ever feel unsafe or think about hurting yourself",
        "If you just need someone to listen without judgment",
      ],
    },
    mythsAndFacts: [
      {
        myth: "I need to know exactly what is wrong before I can ask for help.",
        fact: "You do not need to have all the answers. Talking to someone can help you figure it out.",
      },
      {
        myth: "If I cannot name my feeling, it is not important.",
        fact: "All feelings are valid, even the confusing ones. You deserve support no matter what.",
      },
    ],
  },
};

export interface QuickAction {
  title: string;
  description: string;
  time: number;
}

export interface Skill {
  title: string;
  description: string;
  steps: string[];
  time: number;
}

export interface Video {
  title: string;
  url: string;
  summary: string;
}

export interface Topic {
  id: string;
  title: string;
  subtitle: string;
  icon: string;
  quickActions: QuickAction[];
  skills: Skill[];
  videos: Video[];
  journalPrompts: string[];
}

export const topics: Record<string, Topic> = {
  anxiety: {
    id: "anxiety",
    title: "Anxiety",
    subtitle: "Feeling worried a lot can be really hard. Here are ways to get through today and build skills over time.",
    icon: "🌊",
    quickActions: [
      {
        title: "Box Breathing",
        description: "Breathe in for 4, hold for 4, out for 4, hold for 4. Repeat 4 times.",
        time: 1,
      },
      {
        title: "Music Reset",
        description: "Pick one song that calms you. Pause your scroll and listen all the way through.",
        time: 5,
      },
      {
        title: "Square Step Walk",
        description: "Walk 4 steps slow and count in your head. Repeat for 2 minutes.",
        time: 2,
      },
    ],
    skills: [
      {
        title: "Name the Worry and Rate It",
        description: "Learn to identify and measure your worries",
        steps: [
          "Write one sentence that starts with 'I am worried that...'",
          "Rate the worry from 1 to 10",
          "Circle what is inside your control and what is not",
          "Re-rate after 2 minutes",
        ],
        time: 5,
      },
      {
        title: "Grounding with Five Senses",
        description: "Bring yourself back to the present moment",
        steps: [
          "Find 5 things you can see",
          "Find 4 things you can touch",
          "Find 3 things you can hear",
          "Find 2 things you can smell",
          "Find 1 thing you can taste",
        ],
        time: 3,
      },
    ],
    videos: [
      {
        title: "10 Anxiety Coping Skills for Kids",
        url: "https://www.youtube.com/embed/uiKtq1Q3Cwg",
        summary: "Learn powerful science backed anxiety coping skills that take 5 minutes or less",
      },
      {
        title: "Brain Basics: Anxiety for Kids",
        url: "https://www.youtube.com/embed/eD1wliuHxHI",
        summary: "Discover how anxiety works in your brain and tips to calm down",
      },
    ],
    journalPrompts: [
      "What happened?",
      "What did I try?",
      "What helped even a little?",
      "What would I tell a friend dealing with this?",
    ],
  },
  stress: {
    id: "stress",
    title: "Stress About School",
    subtitle: "School can feel like a lot sometimes. These tools can help you handle it.",
    icon: "📚",
    quickActions: [
      {
        title: "Brain Dump",
        description: "Write down everything on your mind for 2 minutes without stopping.",
        time: 2,
      },
      {
        title: "Priority Pick",
        description: "Choose just one thing you can do right now. Do that one thing.",
        time: 5,
      },
      {
        title: "Stretch Break",
        description: "Stand up and stretch your arms, neck, and back for 1 minute.",
        time: 1,
      },
    ],
    skills: [
      {
        title: "Break It Down",
        description: "Make big tasks feel smaller",
        steps: [
          "Write the big task at the top",
          "List 3-5 smaller steps",
          "Pick the easiest step to start",
          "Set a timer for 10 minutes and begin",
        ],
        time: 10,
      },
      {
        title: "Time Block Method",
        description: "Plan your time in chunks",
        steps: [
          "List what needs to get done",
          "Estimate how long each will take",
          "Block out time on your calendar",
          "Include breaks every 25-30 minutes",
        ],
        time: 15,
      },
    ],
    videos: [
      {
        title: "Stress Management Tips for Kids and Teens",
        url: "https://www.youtube.com/embed/3Nf2Pzcketg",
        summary: "Learn the definition of stress and five helpful ways of coping",
      },
      {
        title: "Managing Stress for Kids",
        url: "https://www.youtube.com/embed/VdFYeY3RkAA",
        summary: "Identify situations that may lead to stress and ways to manage it",
      },
    ],
    journalPrompts: [
      "What's stressing me out most right now?",
      "What's one small thing I can control?",
      "What would make tomorrow easier?",
    ],
  },
  sad: {
    id: "sad",
    title: "Sad or Low",
    subtitle: "Feeling down is tough. You don't have to handle it alone.",
    icon: "🌧️",
    quickActions: [
      {
        title: "Step Outside",
        description: "Go outside for 5 minutes. Even sitting on the porch counts.",
        time: 5,
      },
      {
        title: "Text a Friend",
        description: "Send one text to someone who makes you smile.",
        time: 2,
      },
      {
        title: "Comfort List",
        description: "Write 3 things that usually make you feel a little better.",
        time: 3,
      },
    ],
    skills: [
      {
        title: "Small Wins Tracker",
        description: "Notice the small things you accomplish",
        steps: [
          "Write down 3 small things you did today",
          "They can be tiny (got out of bed, ate something, texted back)",
          "Read your list",
          "Add to it tomorrow",
        ],
        time: 5,
      },
      {
        title: "Mood and Activity Log",
        description: "Find patterns in what helps",
        steps: [
          "Rate your mood from 1-10 twice a day",
          "Note what you did that day",
          "After a week, look for patterns",
          "Do more of what helped",
        ],
        time: 2,
      },
    ],
    videos: [
      {
        title: "Coping Skills for Managing Big Feelings",
        url: "https://www.youtube.com/embed/Vs-MyQgfH3A",
        summary: "Learn how to manage big emotions and feel better",
      },
      {
        title: "Circle of Control for Good Mental Health",
        url: "https://www.youtube.com/embed/L9zwduYp9G0",
        summary: "Focus on what you can control to reduce worry and stress",
      },
    ],
    journalPrompts: [
      "What does sadness feel like in my body?",
      "What's one thing that helped today, even a little?",
      "If I could tell someone how I feel, what would I say?",
    ],
  },
  sleep: {
    id: "sleep",
    title: "Trouble Sleeping",
    subtitle: "Sometimes your mind feels too busy to fall asleep. Calming your body before bed helps you rest and recharge.",
    icon: "🌙",
    quickActions: [
      {
        title: "Three Good Things",
        description: "Write or think about three good things that happened today.",
        time: 3,
      },
      {
        title: "Calm Breathing",
        description: "Breathe in slowly and count to four. Breathe out slowly and count to six.",
        time: 2,
      },
      {
        title: "Screen Break",
        description: "Turn off screens thirty minutes before bed.",
        time: 30,
      },
    ],
    skills: [
      {
        title: "Create a Bedtime Routine",
        description: "Doing the same steps each night helps your brain know it's time to rest",
        steps: [
          "Pick three simple steps like brushing teeth, stretching, and reading",
          "Do them in the same order every night",
          "Keep your routine between 15 and 30 minutes",
          "Notice how your body starts to relax as you go through each step",
        ],
        time: 15,
      },
      {
        title: "Five Senses Calm Down",
        description: "Use your senses to bring yourself back to the present moment",
        steps: [
          "Think of five things you can see in your room",
          "Notice four things you can touch like your pillow or blanket",
          "Listen for three sounds you can hear",
          "Think of two things you can smell",
          "Notice one thing you can taste",
        ],
        time: 5,
      },
    ],
    videos: [
      {
        title: "Make A Sleep Routine",
        url: "https://www.youtube.com/embed/CbXRlLk5Ihk",
        summary: "Learn about making a sleep routine you can stick to each night",
      },
      {
        title: "Calm Down Activities to Help You Sleep",
        url: "https://www.youtube.com/embed/ORRdf_nLc_I",
        summary: "Quick calming activity to help your mind and body relax before bed",
      },
    ],
    journalPrompts: [
      "What helped me feel calm today?",
      "What is one thing I am looking forward to tomorrow?",
      "What does my body need to rest well tonight?",
    ],
  },
  conflict: {
    id: "conflict",
    title: "Family or Friend Conflict",
    subtitle: "It is normal to have arguments or misunderstandings with people you care about. Learning to listen and talk kindly helps everyone feel better.",
    icon: "💬",
    quickActions: [
      {
        title: "Pause and Breathe",
        description: "Take three deep breaths before you respond to someone.",
        time: 1,
      },
      {
        title: "Write It Down First",
        description: "Write down what you want to say before you say it.",
        time: 3,
      },
      {
        title: "Find One Kind Thing",
        description: "Think of one kind or respectful thing you can tell them.",
        time: 2,
      },
    ],
    skills: [
      {
        title: "Use I Feel Statements",
        description: "Explain your feelings clearly without blaming",
        steps: [
          "Start with I feel instead of You always",
          "Say what happened like I feel hurt when you ignore me",
          "Ask what they meant or how they feel",
          "Listen without interrupting",
        ],
        time: 10,
      },
      {
        title: "Practice Active Listening",
        description: "Show the other person you hear them",
        steps: [
          "Look at the person while they talk",
          "Repeat what they said before you answer",
          "Ask a question if you do not understand",
          "Wait until they finish before you respond",
        ],
        time: 5,
      },
    ],
    videos: [
      {
        title: "Getting Along: Respect and Conflict Resolution",
        url: "https://www.youtube.com/embed/Kl8jhIU-w2g",
        summary: "Learn how to resolve conflicts and get along well with others",
      },
      {
        title: "Conflict Resolution for Kids: 5 Ways to Work Things Out",
        url: "https://www.youtube.com/embed/rpIsjkgUPsM",
        summary: "Five strategies to resolve everyday challenges without fighting",
      },
    ],
    journalPrompts: [
      "What was the conflict about?",
      "How did I feel during the conversation?",
      "What would help us understand each other better?",
    ],
  },
  socialmedia: {
    id: "socialmedia",
    title: "Online or Social Media Pressure",
    subtitle: "Social media and the internet can sometimes make you feel like you need to look or act a certain way. Remember that what you see online is not always real.",
    icon: "📱",
    quickActions: [
      {
        title: "Phone Break",
        description: "Take a short break from your phone for one hour.",
        time: 60,
      },
      {
        title: "Unfollow What Hurts",
        description: "Unfollow any accounts that make you feel bad about yourself.",
        time: 5,
      },
      {
        title: "Send Kindness",
        description: "Send a kind message to someone who makes you feel happy.",
        time: 2,
      },
    ],
    skills: [
      {
        title: "The Helping or Hurting Check",
        description: "Learn to notice how social media affects your mood",
        steps: [
          "Before you post or scroll, stop and notice how you feel",
          "Ask yourself Is this helping me or hurting me",
          "If it hurts, put your phone down and do something else",
          "Track your mood before and after using social media for one week",
        ],
        time: 5,
      },
      {
        title: "Plan Offline Time",
        description: "Build healthy habits with screen breaks",
        steps: [
          "Pick one time each day to be fully offline like during dinner",
          "Choose an activity you enjoy like drawing, reading, or playing outside",
          "Tell a friend or family member so they can join you",
          "Notice how you feel after spending time away from screens",
        ],
        time: 30,
      },
    ],
    videos: [
      {
        title: "Social Media and Mental Health for Teens",
        url: "https://www.youtube.com/embed/zuaeyV29-Cs",
        summary: "Learn how screen time affects your emotions and what you can do about it",
      },
      {
        title: "Understanding Your Digital Wellbeing",
        url: "https://www.youtube.com/embed/L9zwduYp9G0",
        summary: "Focus on what you can control to feel better about social media",
      },
    ],
    journalPrompts: [
      "How do I feel after scrolling for a while?",
      "What accounts make me feel good about myself?",
      "What do I wish I could do instead of being on my phone?",
    ],
  },
  anger: {
    id: "anger",
    title: "Feeling Angry a Lot",
    subtitle: "Feeling angry sometimes is okay, but when it happens often, learning how to cool down helps you stay in control.",
    icon: "🔥",
    quickActions: [
      {
        title: "Ten Slow Breaths",
        description: "Take ten slow breaths when you start to feel angry.",
        time: 2,
      },
      {
        title: "Draw or Write",
        description: "Draw or write what made you upset.",
        time: 5,
      },
      {
        title: "Move Your Body",
        description: "Move your body by walking or stretching for five minutes.",
        time: 5,
      },
    ],
    skills: [
      {
        title: "Make a Calm Plan",
        description: "Know what helps you relax before anger takes over",
        steps: [
          "Write down three things that help you relax",
          "Examples are listening to music, being alone, or squeezing a stress ball",
          "Keep your list somewhere easy to find",
          "Use your calm plan as soon as you start feeling angry",
        ],
        time: 10,
      },
      {
        title: "Body Scan for Anger",
        description: "Notice where you feel anger and release it",
        steps: [
          "Close your eyes and think about where anger lives in your body",
          "Is it in your chest, your fists, your stomach, or your head",
          "Take a deep breath and imagine that spot relaxing",
          "Do this three times until you feel calmer",
        ],
        time: 5,
      },
    ],
    videos: [
      {
        title: "Understanding the Anger Iceberg",
        url: "https://www.youtube.com/embed/AQIQCOY_Im0",
        summary: "Discover what causes anger and how to understand your feelings better",
      },
      {
        title: "7 Minute Activity to Help Kids Calm Down",
        url: "https://www.youtube.com/embed/ORRdf_nLc_I",
        summary: "Quick emotion regulating activity to help you shake off big feelings",
      },
    ],
    journalPrompts: [
      "What made me angry today?",
      "Where did I feel the anger in my body?",
      "What helped me calm down?",
    ],
  },
  bodyimage: {
    id: "bodyimage",
    title: "Body Image Worries",
    subtitle: "Everyone's body looks different. What matters most is being healthy, kind, and proud of what your body can do.",
    icon: "💪",
    quickActions: [
      {
        title: "Mirror Positivity",
        description: "Look in the mirror and name three things you like about yourself.",
        time: 3,
      },
      {
        title: "Body Gratitude List",
        description: "Write down five ways your body helps you every day.",
        time: 5,
      },
      {
        title: "Do What Feels Good",
        description: "Spend time doing something you enjoy that makes you feel good.",
        time: 15,
      },
    ],
    skills: [
      {
        title: "Thought Replacement",
        description: "Swap negative thoughts with kind ones",
        steps: [
          "When a bad thought about your body appears, notice it",
          "Replace it with something kind like I am thankful my legs help me run",
          "Say the kind thought out loud or write it down",
          "Practice this every day until it becomes easier",
        ],
        time: 5,
      },
      {
        title: "Follow Body Positive Accounts",
        description: "Change what you see online to change how you feel",
        steps: [
          "Look through who you follow on social media",
          "Unfollow anyone who makes you feel bad about your body",
          "Follow people who make you feel confident and positive",
          "Notice how your mood changes after one week",
        ],
        time: 10,
      },
    ],
    videos: [
      {
        title: "Building Body Confidence and Self Esteem",
        url: "https://www.youtube.com/embed/Vs-MyQgfH3A",
        summary: "Learn to manage feelings about yourself and build confidence",
      },
      {
        title: "What Your Body Can Do",
        url: "https://www.youtube.com/embed/uiKtq1Q3Cwg",
        summary: "Focus on being healthy and proud of what your body helps you do",
      },
    ],
    journalPrompts: [
      "What does my body help me do every day?",
      "When do I feel most confident?",
      "What would I tell a friend who felt bad about their body?",
    ],
  },
  bullying: {
    id: "bullying",
    title: "Bullying",
    subtitle: "Being bullied is never your fault. It is brave to speak up and tell someone you trust.",
    icon: "🛡️",
    quickActions: [
      {
        title: "Tell Someone Now",
        description: "Tell a teacher, counselor, or adult what happened.",
        time: 5,
      },
      {
        title: "Write It Down",
        description: "Write down where and when it happened so you remember.",
        time: 3,
      },
      {
        title: "Find Safe People",
        description: "Spend time with people who make you feel safe and happy.",
        time: 10,
      },
    ],
    skills: [
      {
        title: "Walk Away and Tell",
        description: "Protect yourself by leaving the situation",
        steps: [
          "Walk away calmly without saying anything back",
          "Find a teacher, counselor, or safe adult right away",
          "Tell them exactly what happened",
          "Ask them to help keep you safe",
        ],
        time: 5,
      },
      {
        title: "Be an Upstander",
        description: "Help someone else who is being bullied",
        steps: [
          "If you see someone being bullied, stand next to them",
          "Tell a teacher or adult what you saw",
          "Check in with the person after to see if they are okay",
          "Never try to fight the bully yourself",
        ],
        time: 10,
      },
    ],
    videos: [
      {
        title: "Getting Along: What to Do About Bullying",
        url: "https://www.youtube.com/embed/Kl8jhIU-w2g",
        summary: "Learn how to respond when someone is being unkind to you or others",
      },
      {
        title: "3 Conflict Resolution Strategies for Kids",
        url: "https://www.youtube.com/embed/YOwtV9Aeb2M",
        summary: "Three fun and easy ways to manage conflict and stand up for yourself",
      },
    ],
    journalPrompts: [
      "What happened and how did it make me feel?",
      "Who can I talk to about this?",
      "What would make me feel safer?",
    ],
  },
  grief: {
    id: "grief",
    title: "Grief and Loss",
    subtitle: "Losing someone or something you care about can hurt deeply. Everyone grieves in their own way and it is okay to talk about it.",
    icon: "🕊️",
    quickActions: [
      {
        title: "Remember a Happy Memory",
        description: "Draw or write about a happy memory.",
        time: 10,
      },
      {
        title: "Talk About What You Miss",
        description: "Talk to someone about what you miss.",
        time: 5,
      },
      {
        title: "Do Something Calming",
        description: "Do one small thing that makes you feel calm or close to them.",
        time: 10,
      },
    ],
    skills: [
      {
        title: "Make a Memory Box",
        description: "Keep special items that remind you of good times",
        steps: [
          "Find a small box or container",
          "Add items or photos that remind you of happy moments",
          "Write down your favorite memories on small pieces of paper",
          "Open your memory box whenever you want to feel close to them",
        ],
        time: 30,
      },
      {
        title: "Let Feelings Come and Go",
        description: "Understand that grief happens in waves",
        steps: [
          "Notice when a sad feeling comes up",
          "Let yourself feel it without pushing it away",
          "Remind yourself that feelings rise and fall like waves",
          "Be kind to yourself as you go through each wave",
        ],
        time: 5,
      },
    ],
    videos: [
      {
        title: "Coping With Grief for Kids",
        url: "https://www.youtube.com/embed/g5Rqc2IA-lE",
        summary: "Different ways to cope with grief after losing someone you love",
      },
      {
        title: "Helping Children Deal with Grief",
        url: "https://www.youtube.com/embed/8xbm3_IWthQ",
        summary: "Learn how to process grief and feel safe while healing",
      },
    ],
    journalPrompts: [
      "What is my favorite memory?",
      "How am I feeling today?",
      "What helps me feel better when I am sad?",
    ],
  },
  other: {
    id: "other",
    title: "Other",
    subtitle: "Sometimes what you feel does not fit in one topic. That is okay. Every feeling matters.",
    icon: "🌈",
    quickActions: [
      {
        title: "Name Your Feeling",
        description: "Write one word for how you feel right now.",
        time: 1,
      },
      {
        title: "Breathe and Stretch",
        description: "Take three deep breaths and stretch your arms.",
        time: 2,
      },
      {
        title: "Find a Smile",
        description: "Do something small that usually makes you smile.",
        time: 5,
      },
    ],
    skills: [
      {
        title: "Keep a Feelings Notebook",
        description: "Track your emotions to understand yourself better",
        steps: [
          "Get a notebook or open a notes app",
          "Write how you feel once a day in one or two sentences",
          "After two weeks, read back and look for patterns",
          "Notice what situations make you feel good or bad",
        ],
        time: 5,
      },
      {
        title: "Make a Support List",
        description: "Know who you can talk to when things feel heavy",
        steps: [
          "Write down five people you trust",
          "Next to each name, write when they are good to talk to",
          "Keep the list on your phone or somewhere easy to find",
          "Reach out to someone on your list whenever you need support",
        ],
        time: 10,
      },
    ],
    videos: [
      {
        title: "Emotion Management for Kids",
        url: "https://www.youtube.com/embed/s9MLn4upP50",
        summary: "Learn about emotional self regulation and expressing feelings appropriately",
      },
      {
        title: "Managing All Your Feelings",
        url: "https://www.youtube.com/embed/Vs-MyQgfH3A",
        summary: "How to notice and manage any emotion that comes up",
      },
    ],
    journalPrompts: [
      "What is on my mind right now?",
      "What do I need today?",
      "Who makes me feel heard?",
    ],
  },
};

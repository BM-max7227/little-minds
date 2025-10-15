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
        title: "Understanding Anxiety",
        url: "https://www.youtube.com/embed/placeholder1",
        summary: "Learn what anxiety is and why it happens",
      },
      {
        title: "Quick Calming Techniques",
        url: "https://www.youtube.com/embed/placeholder2",
        summary: "Three fast ways to calm down when you're feeling anxious",
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
        title: "Managing School Stress",
        url: "https://www.youtube.com/embed/placeholder3",
        summary: "How to handle homework, tests, and pressure",
      },
      {
        title: "Study Skills That Actually Work",
        url: "https://www.youtube.com/embed/placeholder4",
        summary: "Science-backed ways to study better in less time",
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
        title: "Why Do I Feel Sad?",
        url: "https://www.youtube.com/embed/placeholder5",
        summary: "Understanding sadness and depression in teens",
      },
      {
        title: "Things That Can Help",
        url: "https://www.youtube.com/embed/placeholder6",
        summary: "Practical strategies when you're feeling low",
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
        title: "How to Calm Your Mind Before Sleep",
        url: "https://www.youtube.com/embed/placeholder7",
        summary: "Simple ways to settle your thoughts at bedtime",
      },
      {
        title: "Why Bedtime Routines Help Your Brain Rest",
        url: "https://www.youtube.com/embed/placeholder8",
        summary: "Learn what happens in your brain when you sleep",
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
        title: "Talking It Out Without Yelling",
        url: "https://www.youtube.com/embed/placeholder9",
        summary: "Learn to have calm conversations even when upset",
      },
      {
        title: "How Friends Can Fix Problems Together",
        url: "https://www.youtube.com/embed/placeholder10",
        summary: "Real examples of resolving disagreements",
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
        title: "Seeing the Real World Beyond the Screen",
        url: "https://www.youtube.com/embed/placeholder11",
        summary: "Why real life is better than edited photos",
      },
      {
        title: "Healthy Ways to Use Social Media",
        url: "https://www.youtube.com/embed/placeholder12",
        summary: "Tips for staying safe and happy online",
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
        title: "Cooling Down When Angry",
        url: "https://www.youtube.com/embed/placeholder13",
        summary: "Techniques to calm down in the moment",
      },
      {
        title: "Kids Share How They Stay Calm",
        url: "https://www.youtube.com/embed/placeholder14",
        summary: "Real stories from other kids about managing anger",
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
        title: "Learning to Like Yourself",
        url: "https://www.youtube.com/embed/placeholder15",
        summary: "Building confidence from the inside out",
      },
      {
        title: "What Real Confidence Looks Like",
        url: "https://www.youtube.com/embed/placeholder16",
        summary: "Stories from kids about feeling comfortable in their own skin",
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
        title: "What to Do If You Are Bullied",
        url: "https://www.youtube.com/embed/placeholder17",
        summary: "Steps to take when bullying happens",
      },
      {
        title: "How to Support a Friend Who Is Bullied",
        url: "https://www.youtube.com/embed/placeholder18",
        summary: "Being a good friend when someone needs help",
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
        title: "Talking About Loss",
        url: "https://www.youtube.com/embed/placeholder19",
        summary: "Why it helps to share how you feel",
      },
      {
        title: "Remembering Someone with Love",
        url: "https://www.youtube.com/embed/placeholder20",
        summary: "Ways to honor someone you miss",
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
        title: "When You Cannot Name Your Feeling",
        url: "https://www.youtube.com/embed/placeholder21",
        summary: "How to understand confusing emotions",
      },
      {
        title: "Learning to Open Up",
        url: "https://www.youtube.com/embed/placeholder22",
        summary: "Why talking about feelings helps",
      },
    ],
    journalPrompts: [
      "What is on my mind right now?",
      "What do I need today?",
      "Who makes me feel heard?",
    ],
  },
};

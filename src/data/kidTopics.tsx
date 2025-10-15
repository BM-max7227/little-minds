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
};

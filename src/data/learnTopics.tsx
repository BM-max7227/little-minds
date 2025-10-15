export interface LearnTopic {
  id: string;
  title: string;
  whatItIs: string[];
  howItLooks: {
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
    whatItIs: [
      "Anxiety is a natural response to stress or perceived danger. It becomes a concern when worries feel overwhelming, persist even when there's no clear threat, or interfere with daily activities.",
      "In children and teens, anxiety can show up differently than in adults. Young people may not always recognize or articulate that they're feeling anxious, and their symptoms may be mistaken for other issues like defiance, physical illness, or lack of motivation.",
    ],
    howItLooks: {
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
    whatItIs: [
      "Sleep problems in children and teens include difficulty falling asleep, staying asleep, waking too early, or not feeling rested despite adequate time in bed. Sleep is essential for physical growth, emotional regulation, memory, and learning.",
      "Adolescents naturally experience a shift in their circadian rhythm that makes them more alert later at night, which often conflicts with early school start times. This biological shift, combined with academic pressure, screen time, and social demands, means many teens don't get the 8-10 hours they need.",
    ],
    howItLooks: {
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
        myth: "Teens are just lazy if they can't wake up early",
        fact: "Adolescent biology shifts their sleep-wake cycle later, making early mornings genuinely harder for them than for younger children or adults",
      },
      {
        myth: "You can catch up on sleep on the weekend",
        fact: "While extra weekend sleep can help, irregular sleep schedules disrupt the body's rhythm and make weekday mornings even harder",
      },
    ],
  },
};

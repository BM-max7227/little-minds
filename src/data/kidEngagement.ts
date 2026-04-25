const emotionalWords = [
  { word: "Anxious", definition: "When your body feels on alert and your mind keeps worrying, even when there's no real danger.", example: "Like before a big test when your stomach feels funny and your thoughts won't stop racing." },
  { word: "Overwhelmed", definition: "When everything feels like too much at once and you don't know where to start.", example: "Like having three projects due, a fight with a friend, and a messy room all at the same time." },
  { word: "Grateful", definition: "A warm feeling you get when you notice something good in your life.", example: "Like when a friend saves you a seat at lunch or your pet curls up next to you." },
  { word: "Frustrated", definition: "When something isn't working the way you want it to and you feel stuck.", example: "Like trying to solve a math problem over and over but not getting it right." },
  { word: "Lonely", definition: "Feeling like nobody understands you or that you're all by yourself, even in a crowd.", example: "Like sitting in a full classroom but feeling like nobody notices you." },
  { word: "Resilient", definition: "Being able to bounce back after something hard happens.", example: "Like falling off your bike, feeling upset, but getting back on and trying again." },
  { word: "Empathy", definition: "Understanding how someone else feels by imagining yourself in their shoes.", example: "Like feeling sad for a friend who lost their pet because you know how much it would hurt." },
  { word: "Confident", definition: "Believing in yourself and knowing you can handle things, even if they're hard.", example: "Like raising your hand in class even when you're not 100% sure of the answer." },
  { word: "Jealous", definition: "A tricky feeling when someone has something you want, and it makes you feel bad inside.", example: "Like when your friend gets the newest game and you wish you had it too." },
  { word: "Brave", definition: "Doing something even though you feel scared. Being brave doesn't mean you're not afraid.", example: "Like speaking up when someone is being mean to another kid, even though you're nervous." },
  { word: "Calm", definition: "A peaceful feeling when your body is relaxed and your mind feels still.", example: "Like lying in the grass on a sunny day and just listening to the birds." },
  { word: "Ashamed", definition: "A heavy feeling when you think you've done something wrong and worry about what others think.", example: "Like accidentally saying something mean and then feeling terrible about it." },
  { word: "Hopeful", definition: "Believing that things can get better, even when they feel hard right now.", example: "Like knowing that even though today was rough, tomorrow is a fresh start." },
  { word: "Stressed", definition: "When your body and mind feel tense because there's a lot going on.", example: "Like when you have too much homework, sports practice, and chores all in one day." },
  { word: "Proud", definition: "A happy feeling when you've done something good or worked really hard.", example: "Like finishing a difficult book or helping someone who needed it." },
  { word: "Vulnerable", definition: "Letting people see the real you, even the parts that feel scary to share.", example: "Like telling a friend you're feeling sad instead of pretending everything is fine." },
  { word: "Content", definition: "A quiet kind of happy. It's when you feel like things are good enough just as they are.", example: "Like sitting with your family after dinner, not doing anything special, but feeling warm inside." },
  { word: "Disappointed", definition: "When something doesn't go the way you hoped and it makes you feel let down.", example: "Like practicing really hard for a game but your team still loses." },
  { word: "Curious", definition: "When you really want to learn or understand something new.", example: "Like wondering why the sky is blue or how your friend learned to draw so well." },
  { word: "Nervous", definition: "A fluttery, uneasy feeling you get before something new or uncertain.", example: "Like the butterflies in your stomach on the first day at a new school." },
  { word: "Grief", definition: "A deep kind of sadness that comes when you lose someone or something really important to you.", example: "Like missing a pet who isn't around anymore and feeling sad whenever you think of them." },
  { word: "Mindful", definition: "Paying attention to what's happening right now, without judging it.", example: "Like really tasting your food instead of eating while scrolling on your phone." },
  { word: "Irritable", definition: "When little things bother you way more than usual and you feel snappy.", example: "Like getting annoyed at your sibling for chewing too loudly when normally it wouldn't bother you." },
  { word: "Compassion", definition: "Caring about someone's pain and wanting to help them feel better.", example: "Like seeing a kid sitting alone at recess and going over to include them." },
  { word: "Insecure", definition: "Doubting yourself or worrying that you're not good enough.", example: "Like comparing yourself to others on social media and feeling like you don't measure up." },
  { word: "Boundaries", definition: "Invisible lines that help you protect your feelings and energy.", example: "Like telling a friend 'I don't like it when you joke about that' in a calm way." },
  { word: "Exhausted", definition: "Being so tired that your body and mind both need a break.", example: "Like after a long week of school and activities when all you want to do is rest." },
  { word: "Accepted", definition: "Feeling like people like you for who you really are.", example: "Like when your friends don't make fun of you for liking something different." },
  { word: "Triggered", definition: "When something you see or hear reminds you of a tough moment, and big feelings show up quickly.", example: "Like hearing a song that reminds you of a sad day and suddenly feeling those feelings again." },
  { word: "Self-care", definition: "Doing things on purpose to take care of your mind, body, and feelings.", example: "Like taking a walk, writing in a journal, or just letting yourself rest when you need to." },
  { word: "Peer pressure", definition: "When friends or classmates try to get you to do something you're not sure about.", example: "Like when everyone wants you to make fun of someone but it doesn't feel right." },
  { word: "Homesick", definition: "Missing your home, family, or the things that feel familiar and safe.", example: "Like being at a sleepover and suddenly wishing you were in your own bed." },
  { word: "Motivated", definition: "Having energy and a reason to do something or work toward a goal.", example: "Like feeling excited to practice guitar because you want to play your favorite song." },
  { word: "Embarrassed", definition: "Feeling awkward or uncomfortable when something happens that draws attention to you.", example: "Like tripping in the hallway and feeling like everyone saw it." },
  { word: "Appreciated", definition: "Feeling valued and noticed for who you are or what you do.", example: "Like when a teacher says 'great job' on something you worked really hard on." },
  { word: "Resentful", definition: "Holding onto anger or frustration about something that felt unfair.", example: "Like when your sibling gets a treat but you don't, and you keep thinking about it." },
  { word: "Validated", definition: "When someone tells you that your feelings make sense and they matter.", example: "Like when you're upset and someone says 'I'd feel that way too' instead of 'just get over it.'" },
  { word: "Panicked", definition: "A sudden rush of worry that makes your heart speed up and your body feel jumpy. Slow breaths can help it pass.", example: "Like when you can't find your bag for a moment and everything feels really urgent before you spot it." },
  { word: "Optimistic", definition: "Looking at the bright side and expecting good things to happen.", example: "Like thinking 'I didn't do great on this test, but I'll study harder and do better next time.'" },
  { word: "Withdrawn", definition: "Pulling away from people and activities because you don't feel like being around anyone.", example: "Like wanting to stay in your room instead of hanging out, even with people you like." },
  { word: "Supportive", definition: "Being there for someone and helping them feel like they're not alone.", example: "Like listening to a friend talk about their problems without trying to fix everything." },
  { word: "Restless", definition: "Feeling like you can't sit still or settle down, and your body wants to move.", example: "Like tapping your foot during class because your energy has nowhere to go." },
  { word: "Safe", definition: "Feeling protected and free from worry, like you can just be yourself.", example: "Like being with someone who never makes fun of you and always listens." },
  { word: "Confused", definition: "Not understanding something or not knowing how you feel.", example: "Like feeling happy and sad at the same time when a friend moves away to somewhere exciting." },
  { word: "Coping", definition: "Finding ways to deal with hard feelings or tough situations.", example: "Like drawing, talking to someone, or going for a walk when you're upset." },
  { word: "Neglected", definition: "Feeling like no one is paying attention to you or your needs.", example: "Like when everyone seems too busy to listen to something important you want to share." },
  { word: "Determined", definition: "Deciding you're going to keep going no matter what gets in your way.", example: "Like studying extra hard for a test after getting a low grade the first time." },
  { word: "Numb", definition: "When your feelings feel quiet or far away, like they've been turned down low. It can happen after something hard, and talking to a trusted adult helps.", example: "Like after a really tiring day when you don't feel happy or sad, just kind of blank." },
  { word: "Inspired", definition: "Feeling a spark inside that makes you want to create, try, or do something meaningful.", example: "Like watching someone help others and thinking 'I want to do that too.'" },
  { word: "Guilty", definition: "A nagging feeling that you've done something wrong, even if it was an accident.", example: "Like accidentally hurting a friend's feelings and not being able to stop thinking about it." },
  { word: "Belonging", definition: "Feeling like you fit in and are part of something bigger.", example: "Like being on a team where everyone includes you and values what you bring." },
  { word: "Helpless", definition: "Feeling like there's nothing you can do to change a hard situation.", example: "Like watching a friend go through something tough and not knowing how to help." },
];

// Days since a fixed epoch (2024-01-01 local). Increments at local midnight,
// so the value truly changes once per calendar day and doesn't reset each year.
function getDayIndex() {
  const epoch = new Date(2024, 0, 1).getTime();
  const now = new Date();
  const today = new Date(now.getFullYear(), now.getMonth(), now.getDate()).getTime();
  return Math.floor((today - epoch) / (1000 * 60 * 60 * 24));
}

export function getWordOfTheDay() {
  const day = getDayIndex();
  // Offset prime so word + fact don't move together in lockstep
  return emotionalWords[((day % emotionalWords.length) + emotionalWords.length) % emotionalWords.length];
}

// Backwards-compatible alias (now returns word of the day)
export const getWordOfTheWeek = getWordOfTheDay;

export function getDidYouKnow() {
  const facts = [
    "Your brain is more active when you sleep than when you watch TV! 🧠",
    "Hugging someone for 20 seconds releases a chemical that makes you feel calm 🤗",
    "Writing down your worries can make them feel 23% less scary ✏️",
    "Laughing for 15 minutes burns about the same energy as a 10-minute walk 😄",
    "Taking 5 deep breaths can lower your heart rate in just 30 seconds 🌬️",
    "Your brain doesn't stop growing and changing until you're about 25 years old 🌱",
    "Spending just 20 minutes outside in nature can reduce stress hormones 🌿",
    "Listening to music you love releases the same happy chemicals as eating chocolate 🎵",
    "Smiling, even when you don't feel like it, can actually trick your brain into feeling happier 😊",
    "Kids who talk about their feelings are better at solving problems 💬",
    "Exercise doesn't just help your body. It grows new brain cells too! 🏃",
    "Writing a thank-you note can boost your mood for an entire month 💌",
    "Your brain uses 20% of all the energy your body makes, and it works hard for you! ⚡",
    "Helping someone else actually makes YOUR brain feel happier too 🤝",
    "It takes about 66 days to build a new habit, so be patient with yourself! 📅",
    "Crying is actually good for you. It releases stress chemicals from your body 💧",
    "Dogs can sense how you're feeling and will try to comfort you when you're sad 🐕",
    "Your brain has about 70,000 thoughts per day, no wonder it gets tired! 💭",
    "Drinking water can improve your mood. Even mild dehydration can make you grumpy 💧",
    "Reading for just 6 minutes can reduce stress by 68% 📚",
    "The colour blue has been shown to have a calming effect on the mind 💙",
    "Playing with pets can lower anxiety and increase feelings of calm 🐱",
    "Doing something creative (drawing, music, writing) activates your brain's reward system 🎨",
    "Kids who get enough sleep do better at remembering things and managing emotions 😴",
    "Saying kind things to yourself works just like hearing them from a friend 💛",
    "Walking in nature for 90 minutes reduces activity in the part of the brain linked to negative thoughts 🌲",
    "Your gut has its own nervous system. That's why butterflies in your stomach are real! 🦋",
    "Being grateful rewires your brain to notice more positive things over time ✨",
    "It's completely normal to have bad days. Even the happiest people do 🌦️",
    "You are the only YOU that has ever existed in the entire history of the universe 🌟",
  ];

  const dayOfYear = getDayIndex();
  return facts[((dayOfYear % facts.length) + facts.length) % facts.length];
}

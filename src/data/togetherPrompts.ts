export interface ConversationCard {
  id: number;
  prompt: string;
  category: "feelings" | "fun" | "deeper" | "gratitude";
  emoji: string;
}

export const conversationCards: ConversationCard[] = [
  // Feelings
  { id: 1, prompt: "If your feelings right now were weather, what would the forecast be?", category: "feelings", emoji: "🌦️" },
  { id: 2, prompt: "What is one thing that worried you this week?", category: "feelings", emoji: "😟" },
  { id: 3, prompt: "When was the last time you felt really proud of yourself?", category: "feelings", emoji: "🌟" },
  { id: 4, prompt: "Is there something you have been wanting to talk about but did not know how to start?", category: "feelings", emoji: "💭" },
  { id: 5, prompt: "What is something that made you feel safe recently?", category: "feelings", emoji: "🛡️" },
  { id: 6, prompt: "If you could change one thing about how your week went, what would it be?", category: "feelings", emoji: "🔄" },
  { id: 7, prompt: "What is one thing that is hard for you right now that other people might not know about?", category: "feelings", emoji: "🫂" },

  // Fun
  { id: 8, prompt: "If you could have any superpower to help your friends, what would it be?", category: "fun", emoji: "🦸" },
  { id: 9, prompt: "What is one thing that always makes you laugh, no matter what?", category: "fun", emoji: "😂" },
  { id: 10, prompt: "If we could do anything together this weekend, what would you pick?", category: "fun", emoji: "🎉" },
  { id: 11, prompt: "What is the funniest thing that happened to you recently?", category: "fun", emoji: "🤣" },
  { id: 12, prompt: "If you could teach me one thing you are really good at, what would it be?", category: "fun", emoji: "🎯" },

  // Deeper
  { id: 13, prompt: "What do you think is the hardest part about being your age?", category: "deeper", emoji: "🤔" },
  { id: 14, prompt: "Is there something you wish adults understood better about kids?", category: "deeper", emoji: "💡" },
  { id: 15, prompt: "What does being a good friend mean to you?", category: "deeper", emoji: "🤝" },
  { id: 16, prompt: "When you feel upset, what is the most helpful thing someone can do for you?", category: "deeper", emoji: "💛" },
  { id: 17, prompt: "What is one thing you wish you could tell your younger self?", category: "deeper", emoji: "📝" },
  { id: 18, prompt: "Do you ever feel pressure to act a certain way? What is that like?", category: "deeper", emoji: "🎭" },

  // Gratitude
  { id: 19, prompt: "What are three things that made today good, even if they were small?", category: "gratitude", emoji: "✨" },
  { id: 20, prompt: "Who is someone outside our family that you are grateful for? Why?", category: "gratitude", emoji: "🙏" },
  { id: 21, prompt: "What is something kind someone did for you recently?", category: "gratitude", emoji: "💐" },
  { id: 22, prompt: "What is your favourite thing about our family?", category: "gratitude", emoji: "🏠" },
  { id: 23, prompt: "What is one thing about yourself that you really like?", category: "gratitude", emoji: "💖" },
  { id: 24, prompt: "What made you smile today?", category: "gratitude", emoji: "😊" },
];

export const categoryLabels: Record<ConversationCard["category"], { label: string; emoji: string; description: string }> = {
  feelings: { label: "Feelings", emoji: "💭", description: "Talk about how you are really doing" },
  fun: { label: "Fun & Light", emoji: "🎉", description: "Keep it easy and playful" },
  deeper: { label: "Going Deeper", emoji: "🤔", description: "For when you are ready for a bigger conversation" },
  gratitude: { label: "Gratitude", emoji: "✨", description: "Notice the good stuff together" },
};

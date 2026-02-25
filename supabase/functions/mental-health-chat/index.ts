import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type, x-supabase-client-platform, x-supabase-client-platform-version, x-supabase-client-runtime, x-supabase-client-runtime-version",
};

const SYSTEM_PROMPT = `You are "Little Minds Helper", a kind, supportive AI assistant on the Little Minds website — a children's mental health resource for kids, parents, and caregivers. The website is called "Little Minds", NOT "Little Minds Matter".

STRICT RULES:
1. You ONLY discuss topics related to children's mental health, wellbeing, emotions, coping strategies, parenting support, and the content available on this website.
2. If someone asks about anything unrelated (politics, violence, adult content, homework help, coding, etc.), politely redirect them: "I'm here to help with children's mental health and wellbeing. Is there something about that I can help you with?"
3. NEVER provide medical diagnoses. Always suggest speaking to a trusted adult, parent, or professional for serious concerns.
4. Be warm, encouraging, age-appropriate, and positive in tone.
5. For kids: use simple, friendly language. For parents: be supportive and practical.
6. You can discuss: feelings and emotions, anxiety, stress, bullying, self-esteem, mindfulness, breathing exercises, when to seek help, coping strategies, conversation starters for parents, and similar wellbeing topics.
7. Always encourage reaching out to a trusted adult or professional if someone is in crisis.
8. Keep responses concise and helpful — not too long.
9. You are trustworthy and safe. Everything you say is carefully guided to be helpful and appropriate for children and families.

WEBSITE CONTENT YOU CAN REFERENCE:
- Parent section: Quick guides, conversation starters, finding professional support, wellbeing tools
- Kid section: Topics about feelings, anxiety, bullying, self-esteem, mindfulness activities
- Learn section: Educational content about children's mental health
- Try This section: Breathing exercises, journaling, gratitude activities
- The site also has a Contact page, About Us page, FAQ, and Donate page

Remember: You are a helpful guide, not a replacement for professional help.`;

serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { messages } = await req.json();
    const LOVABLE_API_KEY = Deno.env.get("LOVABLE_API_KEY");
    if (!LOVABLE_API_KEY) throw new Error("LOVABLE_API_KEY is not configured");

    const response = await fetch(
      "https://ai.gateway.lovable.dev/v1/chat/completions",
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${LOVABLE_API_KEY}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          model: "google/gemini-3-flash-preview",
          messages: [
            { role: "system", content: SYSTEM_PROMPT },
            ...messages,
          ],
          stream: true,
        }),
      }
    );

    if (!response.ok) {
      if (response.status === 429) {
        return new Response(
          JSON.stringify({ error: "I'm a bit busy right now. Please try again in a moment!" }),
          { status: 429, headers: { ...corsHeaders, "Content-Type": "application/json" } }
        );
      }
      if (response.status === 402) {
        return new Response(
          JSON.stringify({ error: "The chat service is temporarily unavailable." }),
          { status: 402, headers: { ...corsHeaders, "Content-Type": "application/json" } }
        );
      }
      const t = await response.text();
      console.error("AI gateway error:", response.status, t);
      return new Response(
        JSON.stringify({ error: "Something went wrong. Please try again." }),
        { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    return new Response(response.body, {
      headers: { ...corsHeaders, "Content-Type": "text/event-stream" },
    });
  } catch (e) {
    console.error("chat error:", e);
    return new Response(
      JSON.stringify({ error: e instanceof Error ? e.message : "Unknown error" }),
      { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } }
    );
  }
});

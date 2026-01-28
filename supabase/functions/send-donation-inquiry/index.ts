import { serve } from "https://deno.land/std@0.190.0/http/server.ts";

const RESEND_API_KEY = Deno.env.get("RESEND_API_KEY");

async function sendEmail(payload: {
  from: string;
  to: string[];
  subject: string;
  html: string;
  replyTo?: string;
}) {
  const response = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      "Authorization": `Bearer ${RESEND_API_KEY}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payload),
  });

  if (!response.ok) {
    const errorText = await response.text();
    throw new Error(`Resend API error: ${response.status} - ${errorText}`);
  }

  return await response.json();
}



const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type, x-supabase-client-platform, x-supabase-client-platform-version, x-supabase-client-runtime, x-supabase-client-runtime-version",
};

interface DonationInquiry {
  donorName: string;
  donorEmail: string;
  amount: string;
  message?: string;
}

const handler = async (req: Request): Promise<Response> => {
  // Handle CORS preflight requests
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { donorName, donorEmail, amount, message }: DonationInquiry = await req.json();

    // Validate required fields
    if (!donorName || !donorEmail || !amount) {
      return new Response(
        JSON.stringify({ error: "Missing required fields: donorName, donorEmail, and amount are required" }),
        { status: 400, headers: { "Content-Type": "application/json", ...corsHeaders } }
      );
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(donorEmail)) {
      return new Response(
        JSON.stringify({ error: "Invalid email format" }),
        { status: 400, headers: { "Content-Type": "application/json", ...corsHeaders } }
      );
    }

    console.log("Sending donation inquiry email for:", donorName, donorEmail, amount);

    const emailResponse = await sendEmail({
      from: "Little Minds <onboarding@resend.dev>",
      to: ["bodemunk2010@gmail.com"],
      subject: `New Donation Inquiry from ${donorName}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h1 style="color: #7c3aed;">New Donation Inquiry</h1>
          <p>You've received a new donation inquiry from the Little Minds website.</p>
          
          <div style="background-color: #f3f4f6; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <p><strong>Name:</strong> ${donorName}</p>
            <p><strong>Email:</strong> ${donorEmail}</p>
            <p><strong>Donation Amount:</strong> £${amount}</p>
            ${message ? `<p><strong>Message:</strong> ${message}</p>` : ''}
          </div>
          
          <p>You can reply directly to this person at: <a href="mailto:${donorEmail}">${donorEmail}</a></p>
          
          <hr style="border: none; border-top: 1px solid #e5e7eb; margin: 20px 0;" />
          <p style="color: #6b7280; font-size: 12px;">This email was sent from the Little Minds donation form.</p>
        </div>
      `,
      replyTo: donorEmail,
    });

    console.log("Donation inquiry email sent successfully:", emailResponse);

    return new Response(
      JSON.stringify({ success: true, message: "Donation inquiry sent successfully" }),
      { status: 200, headers: { "Content-Type": "application/json", ...corsHeaders } }
    );
  } catch (error: unknown) {
    console.error("Error sending donation inquiry email:", error);
    const errorMessage = error instanceof Error ? error.message : "Unknown error occurred";
    return new Response(
      JSON.stringify({ error: errorMessage }),
      { status: 500, headers: { "Content-Type": "application/json", ...corsHeaders } }
    );
  }
};

serve(handler);

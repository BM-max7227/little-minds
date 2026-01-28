import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Header } from "@/components/Header";
import { Link } from "react-router-dom";
import { Mail, Loader2, CheckCircle, Send } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";

export default function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      toast({
        title: "Missing Information",
        description: "Please fill in your name, email, and message.",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);

    try {
      const { data, error } = await supabase.functions.invoke("send-contact-message", {
        body: {
          name: formData.name.trim(),
          email: formData.email.trim(),
          subject: formData.subject.trim() || "General Inquiry",
          message: formData.message.trim(),
        },
      });

      if (error) throw error;

      setIsSubmitted(true);
      toast({
        title: "Message Sent!",
        description: "Thank you for reaching out. We'll get back to you soon.",
      });
    } catch (error) {
      console.error("Error sending contact message:", error);
      toast({
        title: "Something went wrong",
        description: "Please try again or email us directly at bodemunk2010@gmail.com",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1">
        <section className="bg-gradient-to-b from-primary/10 to-background py-20">
          <div className="container px-4">
            <div className="max-w-3xl mx-auto text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/20 mb-6">
                <Mail className="h-8 w-8 text-primary" />
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Contact Us
              </h1>
              <p className="text-xl text-muted-foreground mb-8">
                Have a question, idea, or just want to say hello? We would love to hear from you!
              </p>
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="container px-4">
            <div className="max-w-lg mx-auto">
              <Card className="border-2">
                <CardHeader className="text-center">
                  <CardTitle className="flex items-center justify-center gap-2">
                    <Send className="h-5 w-5 text-primary" />
                    Send a Message
                  </CardTitle>
                  <CardDescription>
                    Fill out the form below and we will get back to you as soon as we can
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  {isSubmitted ? (
                    <div className="text-center py-8">
                      <CheckCircle className="h-16 w-16 text-primary mx-auto mb-4" />
                      <h3 className="text-xl font-semibold mb-2">Message Sent!</h3>
                      <p className="text-muted-foreground mb-4">
                        Thank you for reaching out. We will get back to you soon.
                      </p>
                      <Button
                        variant="outline"
                        onClick={() => {
                          setIsSubmitted(false);
                          setFormData({ name: "", email: "", subject: "", message: "" });
                        }}
                      >
                        Send Another Message
                      </Button>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-4">
                      <div className="space-y-2">
                        <Label htmlFor="name">Your Name *</Label>
                        <Input
                          id="name"
                          type="text"
                          placeholder="Your name"
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          maxLength={100}
                          required
                        />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="email">Your Email *</Label>
                        <Input
                          id="email"
                          type="email"
                          placeholder="your@email.com"
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          maxLength={255}
                          required
                        />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="subject">Subject (Optional)</Label>
                        <Input
                          id="subject"
                          type="text"
                          placeholder="What is this about?"
                          value={formData.subject}
                          onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                          maxLength={200}
                        />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="message">Message *</Label>
                        <Textarea
                          id="message"
                          placeholder="Write your message here..."
                          value={formData.message}
                          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                          maxLength={2000}
                          rows={5}
                          required
                        />
                      </div>

                      <Button type="submit" className="w-full" size="lg" disabled={isSubmitting}>
                        {isSubmitting ? (
                          <>
                            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                            Sending...
                          </>
                        ) : (
                          <>
                            <Send className="mr-2 h-4 w-4" />
                            Send Message
                          </>
                        )}
                      </Button>
                    </form>
                  )}
                </CardContent>
              </Card>

              <div className="mt-8 text-center">
                <p className="text-muted-foreground mb-2">Or email us directly at:</p>
                <a 
                  href="mailto:bodemunk2010@gmail.com" 
                  className="text-primary hover:underline font-medium text-lg"
                >
                  bodemunk2010@gmail.com
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t py-4 text-center">
        <Button variant="link" asChild>
          <Link to="/">← Back to Home</Link>
        </Button>
      </footer>
    </div>
  );
}

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Header } from "@/components/Header";
import { Link } from "react-router-dom";
import { Heart, Users, BookOpen, Loader2, CheckCircle } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";

export default function Donate() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    donorName: "",
    donorEmail: "",
    amount: "",
    message: "",
  });
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.donorName.trim() || !formData.donorEmail.trim() || !formData.amount.trim()) {
      toast({
        title: "Missing Information",
        description: "Please fill in your name, email, and donation amount.",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);

    try {
      const { data, error } = await supabase.functions.invoke("send-donation-inquiry", {
        body: {
          donorName: formData.donorName.trim(),
          donorEmail: formData.donorEmail.trim(),
          amount: formData.amount.trim(),
          message: formData.message.trim() || undefined,
        },
      });

      if (error) throw error;

      setIsSubmitted(true);
      toast({
        title: "Thank You!",
        description: "Your donation inquiry has been sent. We'll be in touch soon.",
      });
    } catch (error) {
      console.error("Error submitting donation inquiry:", error);
      toast({
        title: "Something went wrong",
        description: "Please try again or contact us directly.",
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
                <Heart className="h-8 w-8 text-primary" />
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Support Little Minds
              </h1>
              <p className="text-xl text-muted-foreground mb-8">
                Your donation helps us provide free mental health resources for children and families who need them most.
              </p>
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="container px-4">
            <div className="max-w-md mx-auto">
              <Card className="border-2">
                <CardHeader className="text-center">
                  <CardTitle className="flex items-center justify-center gap-2">
                    <Heart className="h-5 w-5 text-primary" />
                    Make a Donation
                  </CardTitle>
                  <CardDescription>
                    Fill in your details and we'll get in touch about your donation
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  {isSubmitted ? (
                    <div className="text-center py-8">
                      <CheckCircle className="h-16 w-16 text-primary mx-auto mb-4" />
                      <h3 className="text-xl font-semibold mb-2">Thank You!</h3>
                      <p className="text-muted-foreground mb-4">
                        Your donation inquiry has been sent. We'll be in touch soon.
                      </p>
                      <Button
                        variant="outline"
                        onClick={() => {
                          setIsSubmitted(false);
                          setFormData({ donorName: "", donorEmail: "", amount: "", message: "" });
                        }}
                      >
                        Make Another Donation
                      </Button>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-4">
                      <div className="space-y-2">
                        <Label htmlFor="donorName">Your Name *</Label>
                        <Input
                          id="donorName"
                          type="text"
                          placeholder="John Smith"
                          value={formData.donorName}
                          onChange={(e) => setFormData({ ...formData, donorName: e.target.value })}
                          maxLength={100}
                          required
                        />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="donorEmail">Your Email *</Label>
                        <Input
                          id="donorEmail"
                          type="email"
                          placeholder="john@example.com"
                          value={formData.donorEmail}
                          onChange={(e) => setFormData({ ...formData, donorEmail: e.target.value })}
                          maxLength={255}
                          required
                        />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="amount">Donation Amount (£) *</Label>
                        <Input
                          id="amount"
                          type="text"
                          placeholder="10"
                          value={formData.amount}
                          onChange={(e) => {
                            const value = e.target.value.replace(/[^0-9.]/g, "");
                            setFormData({ ...formData, amount: value });
                          }}
                          maxLength={10}
                          required
                        />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="message">Message (Optional)</Label>
                        <Textarea
                          id="message"
                          placeholder="Any message you'd like to include..."
                          value={formData.message}
                          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                          maxLength={500}
                          rows={3}
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
                            <Heart className="mr-2 h-4 w-4" />
                            Submit Donation Inquiry
                          </>
                        )}
                      </Button>
                    </form>
                  )}
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        <section className="bg-muted/30 py-16">
          <div className="container px-4">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-2xl font-bold text-center mb-8">How Your Donation Helps</h2>
              <div className="grid sm:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/20 mb-4">
                    <BookOpen className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="font-semibold mb-2">Free Resources</h3>
                  <p className="text-sm text-muted-foreground">
                    Creates more educational materials for children and parents
                  </p>
                </div>
                <div className="text-center">
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/20 mb-4">
                    <Users className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="font-semibold mb-2">Reach More Families</h3>
                  <p className="text-sm text-muted-foreground">
                    Helps us reach more children and families in need
                  </p>
                </div>
                <div className="text-center">
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/20 mb-4">
                    <Heart className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="font-semibold mb-2">Support Services</h3>
                  <p className="text-sm text-muted-foreground">
                    Funds ongoing development of mental health support tools
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="container px-4 max-w-3xl mx-auto text-center">
            <h2 className="text-2xl font-bold mb-4">Thank You</h2>
            <p className="text-muted-foreground">
              Every donation, no matter the size, makes a difference. Thank you for supporting children's mental health.
            </p>
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

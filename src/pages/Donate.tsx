import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Header } from "@/components/Header";
import { Link } from "react-router-dom";
import { Heart, ExternalLink, Users, BookOpen } from "lucide-react";

export default function Donate() {
  // Replace these with your actual fundraising page URLs
  const JUSTGIVING_URL = "https://www.justgiving.com"; // Replace with your JustGiving campaign URL
  const GOFUNDME_URL = "https://www.gofundme.com"; // Replace with your GoFundMe campaign URL

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
            <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              <Card className="border-2 hover:border-primary/50 transition-colors">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Heart className="h-5 w-5 text-primary" />
                    JustGiving
                  </CardTitle>
                  <CardDescription>
                    Donate through JustGiving - a trusted UK charity platform
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Button className="w-full" size="lg" asChild>
                    <a href={JUSTGIVING_URL} target="_blank" rel="noopener noreferrer">
                      Donate via JustGiving
                      <ExternalLink className="ml-2 h-4 w-4" />
                    </a>
                  </Button>
                </CardContent>
              </Card>

              <Card className="border-2 hover:border-primary/50 transition-colors">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Heart className="h-5 w-5 text-primary" />
                    GoFundMe
                  </CardTitle>
                  <CardDescription>
                    Support us through GoFundMe's global fundraising platform
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Button className="w-full" size="lg" asChild>
                    <a href={GOFUNDME_URL} target="_blank" rel="noopener noreferrer">
                      Donate via GoFundMe
                      <ExternalLink className="ml-2 h-4 w-4" />
                    </a>
                  </Button>
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

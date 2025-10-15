import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Header } from "@/components/Header";
import { Link } from "react-router-dom";
import { BookOpen, Users, Wrench, MessageCircle } from "lucide-react";

export default function ParentHome() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header audience="parent" />
      
      <main className="flex-1">
        <section className="bg-muted/30 py-20">
          <div className="container px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Support Your Child with Confidence
              </h1>
              <p className="text-xl text-muted-foreground mb-8">
                Simple steps, real resources, and ways to talk about tough topics
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" asChild>
                  <Link to="/parent/quick-guide">
                    <BookOpen className="mr-2 h-5 w-5" />
                    Start with a Quick Guide
                  </Link>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <Link to="/parent/find-support">
                    <Users className="mr-2 h-5 w-5" />
                    Find Professional Support
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="container px-4">
            <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              <Card>
                <CardHeader>
                  <MessageCircle className="h-8 w-8 text-primary mb-2" />
                  <CardTitle>Conversation Starters</CardTitle>
                  <CardDescription>
                    Age-appropriate phrases to help you start difficult conversations
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Button variant="outline" asChild className="w-full">
                    <Link to="/parent/conversation-starters">Get Conversation Ideas</Link>
                  </Button>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <Wrench className="h-8 w-8 text-primary mb-2" />
                  <CardTitle>Tools for You</CardTitle>
                  <CardDescription>
                    Downloadable checklists and planning templates
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Button variant="outline" asChild className="w-full">
                    <Link to="/parent/tools">View Tools</Link>
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        <section className="bg-muted/30 py-16">
          <div className="container px-4 max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">Remember</h2>
            <p className="text-lg text-muted-foreground">
              You don't need to have all the answers. Showing up, listening, and seeking support when needed are already powerful steps.
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

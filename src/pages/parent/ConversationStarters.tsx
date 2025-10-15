import { useState } from "react";
import { Header } from "@/components/Header";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { conversationStarters } from "@/data/parentContent";

type AgeRange = "8-11" | "12-14" | "15-18";

export default function ConversationStarters() {
  const [selectedAge, setSelectedAge] = useState<AgeRange>("12-14");

  return (
    <div className="min-h-screen flex flex-col">
      <Header audience="parent" />
      
      <main className="flex-1 py-12">
        <div className="container px-4 max-w-4xl mx-auto">
          <div className="mb-8">
            <h1 className="text-4xl font-bold mb-4">Conversation Starters</h1>
            <p className="text-xl text-muted-foreground">
              Pick an age range and get phrases that feel natural
            </p>
          </div>

          <div className="flex flex-wrap gap-3 mb-8">
            <Button
              variant={selectedAge === "8-11" ? "default" : "outline"}
              onClick={() => setSelectedAge("8-11")}
            >
              Ages 8-11
            </Button>
            <Button
              variant={selectedAge === "12-14" ? "default" : "outline"}
              onClick={() => setSelectedAge("12-14")}
            >
              Ages 12-14
            </Button>
            <Button
              variant={selectedAge === "15-18" ? "default" : "outline"}
              onClick={() => setSelectedAge("15-18")}
            >
              Ages 15-18
            </Button>
          </div>

          <Card>
            <CardHeader>
              <CardTitle>Suggested Openers for Ages {selectedAge}</CardTitle>
              <CardDescription>
                Use these as starting points. Adapt them to fit your family's communication style.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-4">
                {conversationStarters[selectedAge].map((starter, index) => (
                  <li key={index} className="flex items-start">
                    <span className="font-semibold text-primary mr-3">{index + 1}.</span>
                    <p className="text-lg">{starter}</p>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>

          <Card className="mt-6">
            <CardHeader>
              <CardTitle>Tips for All Ages</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-muted-foreground">
                <li>• Choose a time when you're both calm and have privacy</li>
                <li>• Try having conversations during activities (walking, cooking, driving)</li>
                <li>• Listen more than you talk</li>
                <li>• Avoid minimizing their feelings or rushing to fix things</li>
                <li>• Let them know you're there, no matter what</li>
              </ul>
            </CardContent>
          </Card>

          <div className="mt-12 text-center">
            <Button asChild size="lg">
              <Link to="/parent">Back to Parent Home</Link>
            </Button>
          </div>
        </div>
      </main>
    </div>
  );
}

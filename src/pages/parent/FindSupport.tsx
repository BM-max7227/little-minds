import { Header } from "@/components/Header";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { professionalSupportTypes, choosingTherapist, insuranceAndCost } from "@/data/parentContent";
import { ExternalLink } from "lucide-react";
export default function FindSupport() {
  return <div className="min-h-screen flex flex-col">
      <Header audience="parent" />
      
      <main className="flex-1 py-12">
        <div className="container px-4 max-w-4xl mx-auto">
          <div className="mb-12">
            <h1 className="text-4xl font-bold mb-4">Find Professional Support</h1>
            <p className="text-xl text-muted-foreground">
              Understanding your options and how to choose the right help
            </p>
          </div>

          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-6">Types of Professional Help</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {professionalSupportTypes.map(type => <Card key={type.title}>
                  <CardHeader>
                    <CardTitle>{type.title}</CardTitle>
                    <CardDescription>{type.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">
                      <span className="font-semibold">When to use:</span> {type.when}
                    </p>
                  </CardContent>
                </Card>)}
            </div>
          </section>

          <section className="mb-12">
            <Card>
              <CardHeader>
                <CardTitle>How to Choose a Therapist</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <h3 className="font-semibold mb-3">Check Credentials and Training</h3>
                  <ul className="space-y-2 text-muted-foreground">
                    {choosingTherapist.credentials.map((item, index) => <li key={index}>• {item}</li>)}
                  </ul>
                </div>

                <div>
                  <h3 className="font-semibold mb-3">Consider Fit and Comfort</h3>
                  <ul className="space-y-2 text-muted-foreground">
                    {choosingTherapist.fitAndComfort.map((item, index) => <li key={index}>• {item}</li>)}
                  </ul>
                </div>

                <div>
                  <h3 className="font-semibold mb-3">Questions for the First Meeting</h3>
                  <ul className="space-y-2 text-muted-foreground">
                    {choosingTherapist.firstMeetingQuestions.map((item, index) => <li key={index}>• {item}</li>)}
                  </ul>
                </div>
              </CardContent>
            </Card>
          </section>

          <section className="mb-12">
            <Card>
              <CardHeader>
                <CardTitle>{insuranceAndCost.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-muted-foreground">
                  {insuranceAndCost.tips.map((tip, index) => <li key={index}>• {tip}</li>)}
                </ul>
              </CardContent>
            </Card>
          </section>

          <section className="mb-12">
            <Card>
              <CardHeader>
                <CardTitle>External Resources</CardTitle>
                <CardDescription>
                  Find therapists and mental health services in your area
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-3">
                <Button variant="outline" className="w-full justify-between" asChild>
                  <a href="https://www.counselling-directory.org.uk/city/london" target="_blank" rel="noopener noreferrer">
                    Counselling Directory - London
                    <ExternalLink className="h-4 w-4" />
                  </a>
                </Button>
                <Button variant="outline" className="w-full justify-between" asChild>
                  <a href="https://www.nhs.uk/mental-health/children-and-young-adults/mental-health-support/" target="_blank" rel="noopener noreferrer">
                    NHS Mental Health Support for Children & Young Adults
                    <ExternalLink className="h-4 w-4" />
                  </a>
                </Button>
                
              </CardContent>
            </Card>
          </section>

          <div className="text-center">
            <Button asChild size="lg">
              <Link to="/parent">Back to Parent Home</Link>
            </Button>
          </div>
        </div>
      </main>
    </div>;
}
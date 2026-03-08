import { useState } from "react";
import { Header } from "@/components/Header";
import { SiteFooter } from "@/components/SiteFooter";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { professionalSupportTypes, choosingTherapist, insuranceAndCost } from "@/data/parentContent";
import { ExternalLink } from "lucide-react";
import { CountryPicker } from "@/components/CountryPicker";
import { HelplineDisplay } from "@/components/HelplineDisplay";
import { getHelplinesForCountry, getSavedCountry } from "@/data/crisisHelplines";

export default function FindSupport() {
  const [countryCode, setCountryCode] = useState<string>(getSavedCountry() || "");
  const countryData = countryCode ? getHelplinesForCountry(countryCode) : null;

  return (
    <div className="min-h-screen flex flex-col">
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
              {professionalSupportTypes.map((type) => (
                <Card key={type.title}>
                  <CardHeader>
                    <CardTitle>{type.title}</CardTitle>
                    <CardDescription>{type.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">
                      <span className="font-semibold">When to use:</span> {type.when}
                    </p>
                  </CardContent>
                </Card>
              ))}
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
                    {choosingTherapist.credentials.map((item, index) => (
                      <li key={index}>• {item}</li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold mb-3">Consider Fit and Comfort</h3>
                  <ul className="space-y-2 text-muted-foreground">
                    {choosingTherapist.fitAndComfort.map((item, index) => (
                      <li key={index}>• {item}</li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold mb-3">Questions for the First Meeting</h3>
                  <ul className="space-y-2 text-muted-foreground">
                    {choosingTherapist.firstMeetingQuestions.map((item, index) => (
                      <li key={index}>• {item}</li>
                    ))}
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
                  {insuranceAndCost.tips.map((tip, index) => (
                    <li key={index}>• {tip}</li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </section>

          <section className="mb-12">
            <Card>
              <CardHeader>
                <CardTitle>Find Help in Your Area</CardTitle>
                <CardDescription>
                  Select your country to find therapists, mental health services, and helplines near you
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <CountryPicker selectedCode={countryCode || null} onSelect={setCountryCode} />

                {countryData && (
                  <HelplineDisplay data={countryData} showDirectories />
                )}

                {!countryData && (
                  <p className="text-sm text-muted-foreground">
                    Select a country above to see local resources. You can also visit{" "}
                    <a href="https://findahelpline.com" target="_blank" rel="noopener noreferrer" className="text-primary underline">
                      findahelpline.com
                    </a>{" "}
                    for worldwide support.
                  </p>
                )}

                <p className="text-xs text-muted-foreground pt-2">
                  This information is provided for guidance only. Always verify details directly with the service provider. Little Minds is not affiliated with these organisations.
                </p>
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
    </div>
  );
}

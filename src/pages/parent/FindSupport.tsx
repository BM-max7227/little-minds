import { useState } from "react";
import { SEO } from "@/components/SEO";
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
  // Only honour a saved country here if it actually has therapist directories,
  // so this page never lands on a country with no confirmed directories.
  const savedCountry = getSavedCountry();
  const savedHasDirectories = savedCountry && (getHelplinesForCountry(savedCountry)?.directories.length ?? 0) > 0;
  const [countryCode, setCountryCode] = useState<string>(savedHasDirectories ? savedCountry : "");
  const countryData = countryCode ? getHelplinesForCountry(countryCode) : null;

  return (
    <div className="min-h-screen flex flex-col">
      <SEO title={"Find Professional Support — Little Minds"} description={"Find therapists, helplines, and crisis resources in 30+ countries to support your child's mental health."} path="/parent/find-support" />
      <Header audience="parent" />

      <main className="flex-1 py-12">
        <div className="container px-4 max-w-4xl mx-auto">
          <div className="mb-8">
            <h1 className="text-4xl font-bold mb-4">Find Professional Support</h1>
            <p className="text-xl text-muted-foreground mb-6">
              Whether you already know you want a therapist or you're just starting to look into help, here's how to find the right support for your child.
            </p>
            <nav aria-label="Jump to a section" className="flex flex-wrap gap-2">
              {[
                { id: "types", label: "Types of help" },
                { id: "find-therapist", label: "Find a therapist" },
                { id: "choose", label: "How to choose" },
                { id: "cost", label: "Costs & insurance" },
              ].map((item) => (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  className="rounded-full border border-primary/30 bg-primary/5 px-4 py-1.5 text-sm font-medium text-primary transition hover:bg-primary hover:text-primary-foreground"
                >
                  {item.label}
                </a>
              ))}
            </nav>
          </div>

          <section id="types" className="mb-12 scroll-mt-24">
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

          <section id="find-therapist" className="mb-12 scroll-mt-24">
            <Card className="border-2 border-primary/30 bg-primary/5 rounded-3xl shadow-sm">
              <CardHeader>
                <CardTitle className="text-2xl">Find a Therapist Near You</CardTitle>
                <CardDescription>
                  Choose your country to see trusted directories where you can search for a therapist or counsellor.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <CountryPicker selectedCode={countryCode || null} onSelect={setCountryCode} onlyWithDirectories />

                {countryData && <HelplineDisplay data={countryData} directoriesOnly />}

                {!countryData && (
                  <p className="text-sm text-muted-foreground">
                    Only countries with a confirmed therapist directory are listed. Don't see yours? Try the{" "}
                    <a href="https://www.psychologytoday.com/country-selector" target="_blank" rel="noopener noreferrer" className="text-primary underline">
                      Psychology Today directory
                    </a>{" "}
                    or ask your child's school or doctor for a referral.
                  </p>
                )}

                <div className="rounded-lg bg-destructive/5 border border-destructive/20 p-3">
                  <p className="text-sm">
                    <span className="font-semibold text-destructive">Need urgent help?</span>{" "}
                    For emergency numbers and crisis helplines, use the{" "}
                    <span className="font-semibold">Help Now</span> button at the top of any page.
                  </p>
                </div>

                <p className="text-xs text-muted-foreground pt-1">
                  This information is provided for guidance only. Always verify details directly with the service provider. Little Minds is not affiliated with these organisations.
                </p>
              </CardContent>
            </Card>
          </section>

          <section id="choose" className="mb-12 scroll-mt-24">
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
                <p className="text-xs text-muted-foreground pt-4">
                  These are general pointers, not financial advice. Coverage, costs, and what is free vary a lot by country and provider, so always check the details directly with your insurer, school, or the service you are looking into.
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
      <SiteFooter />
    </div>
  );
}

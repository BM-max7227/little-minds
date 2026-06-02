import { Header } from "@/components/Header";
import { SEO } from "@/components/SEO";
import { SiteFooter } from "@/components/SiteFooter";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { Mail, Sprout, HeartHandshake, BookOpen } from "lucide-react";

export default function AboutUs() {
  return (
    <div className="min-h-screen flex flex-col">
      <SEO title={"About Little Minds — Free Kids Mental Health Resource"} description={"Little Minds is a free, non-profit mental health website made by Bode Munk to help kids, teens, and parents understand and support young mental health."} path="/about" />
      <Header audience="learn" />
      
      <main className="flex-1 py-12">
        <div className="container px-4 max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">About Us</h1>
            <p className="text-xl text-muted-foreground">
              Created by a kid, for kids, parents, and anyone who cares
            </p>
          </div>

          <div className="prose prose-lg max-w-none mb-12 space-y-6">
            <p>
              This website was created by <strong>Bode Munk</strong>, a kid who wanted to make a difference by helping other kids, parents, and people understand mental health in a simple and caring way.
            </p>

            <p>
              Bode started Little Minds because he saw how different mental health looks in kids compared to grown-ups. The way a child experiences worry, sadness, or stress isn't the same as it is for an adult — and it often shows up in ways that are easy to miss or misunderstand. He wanted a place dedicated just to that: a space that explains what mental health really looks like in kids and teens, in words that actually make sense.
            </p>

            <p>
              He also believes that parents deserve real help, not guesswork. Supporting a child through a hard time isn't about screaming or trying to fix everything at once — there are specific, gentle ways to notice what's going on, start a conversation, and respond with care. <em>How</em> you approach a child matters just as much as what you say.
            </p>

            <p>
              And just as importantly, the kids going through these feelings deserve resources of their own — tools and explanations made for them, so they can learn about what they're feeling and know they're not alone.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <Card>
              <CardHeader>
                <Sprout className="h-10 w-10 text-primary mb-3" />
                <CardTitle>Kids are different</CardTitle>
                <CardDescription>
                  Mental health shows up differently in children and teens than in adults. We explain what it really looks like in young minds.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card>
              <CardHeader>
                <HeartHandshake className="h-10 w-10 text-primary mb-3" />
                <CardTitle>Approach matters</CardTitle>
                <CardDescription>
                  We help parents respond with calm and care instead of frustration — because how you show up makes all the difference.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card>
              <CardHeader>
                <BookOpen className="h-10 w-10 text-primary mb-3" />
                <CardTitle>Tools for kids</CardTitle>
                <CardDescription>
                  Kids facing these feelings get resources made just for them, so they can learn, cope, and feel understood.
                </CardDescription>
              </CardHeader>
            </Card>
          </div>

          <div className="prose prose-lg max-w-none mb-12 space-y-6">
            <p>
              This is a free personal project. It is not a registered charity or government entity, and no profit is made from this website. It was made only to share knowledge, tools, and hope. Everything here is free to use and designed with kindness first.
            </p>

            <p>Our mission is to make learning about mental health easy and safe. Whether you are a parent, a kid, or someone who wants to help, you are part of the change just by being here.</p>

            <div className="flex flex-col sm:flex-row items-center gap-4 p-6 bg-primary/5 rounded-lg border not-prose">
              <Mail className="h-8 w-8 text-primary flex-shrink-0" />
              <div className="text-center sm:text-left">
                <p className="font-medium">Want to get in touch?</p>
                <p className="text-muted-foreground">
                  Visit our <Link to="/contact" className="text-primary hover:underline font-medium">Contact page</Link> to send us a message
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>

      <SiteFooter />
    </div>
  );
}

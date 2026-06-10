import { Button } from "@/components/ui/button";
import { SEO } from "@/components/SEO";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Header } from "@/components/Header";
import { SiteFooter } from "@/components/SiteFooter";
import { Link } from "react-router-dom";
import { BookOpen, Users, Wrench, MessageCircle, Eye, FileText, ArrowRight, LayoutDashboard, Heart } from "lucide-react";
import { SuggestIdeasBanner } from "@/components/SuggestIdeasBanner";
import { AskHelperPrompt } from "@/components/AskHelperPrompt";

export default function ParentHome() {
  return (
    <div className="min-h-screen flex flex-col">
      <SEO title={"For Parents — Little Minds"} description={"Tools, guides, and conversation starters to help parents support their child's mental health and wellbeing."} path="/parent" />
      <Header audience="parent" />
      
      <main className="flex-1">
        <section className="bg-muted/30 py-10">
          <div className="container px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-3">
                Support Your Child with Confidence
              </h1>
              <p className="text-xl text-muted-foreground mb-5">
                Simple steps, real resources, and ways to talk about tough topics
              </p>
              <Button size="lg" variant="outline" onClick={() => document.getElementById('toolkit')?.scrollIntoView({ behavior: 'smooth' })}>
                Explore Your Toolkit ↓
              </Button>
            </div>
          </div>
        </section>

        {/* Dashboard CTA */}
        <section className="py-5 bg-primary/5 border-b">
          <div className="container px-4">
            <div className="max-w-3xl mx-auto">
              <Link to="/parent/dashboard" className="group flex items-center gap-4 rounded-xl border border-primary/20 bg-card p-5 hover:shadow-lg hover:border-primary/40 transition-all">
                <div className="h-12 w-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <LayoutDashboard className="h-6 w-6 text-primary" />
                </div>
                <div className="flex-1">
                  <p className="font-semibold text-base">Your Weekly Dashboard</p>
                  <p className="text-sm text-muted-foreground">Fresh tips, conversation starters, and topics, updated every week</p>
                </div>
                <ArrowRight className="h-5 w-5 text-primary group-hover:translate-x-1 transition-transform flex-shrink-0" />
              </Link>
            </div>
          </div>
        </section>

        {/* Quick Access Guides Section */}
        <section id="toolkit" className="py-10">
          <div className="container px-4">
            <div className="max-w-5xl mx-auto">
              <h2 className="text-3xl font-bold mb-2 text-center">Your Toolkit</h2>
              <p className="text-muted-foreground text-center mb-6">
                Everything you need, one tap away
              </p>

              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
                <Link to="/parent/quick-guide" className="group">
                  <Card className="h-full rounded-3xl border-2 border-transparent shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-sky-200/50">
                    <CardHeader className="pb-3">
                      <div className="h-12 w-12 rounded-2xl bg-sky-100 flex items-center justify-center mb-3">
                        <Eye className="h-6 w-6 text-sky-600" />
                      </div>
                      <CardTitle className="text-lg">Quick Guide</CardTitle>
                      <CardDescription>
                        4 key steps to support your child
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="pt-0">
                      <span className="text-sm font-medium text-primary inline-flex items-center gap-1 group-hover:gap-2 transition-all">
                        Read guide <ArrowRight className="h-3.5 w-3.5" />
                      </span>
                    </CardContent>
                  </Card>
                </Link>

                <Link to="/parent/conversation-starters" className="group">
                  <Card className="h-full rounded-3xl border-2 border-transparent shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-amber-200/50">
                    <CardHeader className="pb-3">
                      <div className="h-12 w-12 rounded-2xl bg-amber-100 flex items-center justify-center mb-3">
                        <MessageCircle className="h-6 w-6 text-amber-600" />
                      </div>
                      <CardTitle className="text-lg">Conversation Starters</CardTitle>
                      <CardDescription>
                        Age-appropriate phrases to open up
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="pt-0">
                      <span className="text-sm font-medium text-primary inline-flex items-center gap-1 group-hover:gap-2 transition-all">
                        Get ideas <ArrowRight className="h-3.5 w-3.5" />
                      </span>
                    </CardContent>
                  </Card>
                </Link>

                <Link to="/parent/find-support" className="group">
                  <Card className="h-full rounded-3xl border-2 border-transparent shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-teal-200/50">
                    <CardHeader className="pb-3">
                      <div className="h-12 w-12 rounded-2xl bg-teal-100 flex items-center justify-center mb-3">
                        <Users className="h-6 w-6 text-teal-600" />
                      </div>
                      <CardTitle className="text-lg">Find Support</CardTitle>
                      <CardDescription>
                        Professional help & how to choose
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="pt-0">
                      <span className="text-sm font-medium text-primary inline-flex items-center gap-1 group-hover:gap-2 transition-all">
                        Explore options <ArrowRight className="h-3.5 w-3.5" />
                      </span>
                    </CardContent>
                  </Card>
                </Link>

                <Link to="/parent/tools" className="group">
                  <Card className="h-full rounded-3xl border-2 border-transparent shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-rose-200/50">
                    <CardHeader className="pb-3">
                      <div className="h-12 w-12 rounded-2xl bg-rose-100 flex items-center justify-center mb-3">
                        <Wrench className="h-6 w-6 text-rose-600" />
                      </div>
                      <CardTitle className="text-lg">Tools & Templates</CardTitle>
                      <CardDescription>
                        Checklists & planning downloads
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="pt-0">
                      <span className="text-sm font-medium text-primary inline-flex items-center gap-1 group-hover:gap-2 transition-all">
                        View tools <ArrowRight className="h-3.5 w-3.5" />
                      </span>
                    </CardContent>
                  </Card>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Ask the Helper */}
        <section className="py-4">
          <div className="container px-4">
            <div className="max-w-5xl mx-auto">
              <AskHelperPrompt
                title="Have a parenting question on your mind?"
                description="Chat with our AI helper for gentle, general guidance and to find the right resource on the site."
              />
            </div>
          </div>
        </section>

        {/* Learn About the Issues CTA */}
        <section className="py-8">
          <div className="container px-4">
            <div className="max-w-5xl mx-auto">
              <Link to="/learn" className="group flex flex-col sm:flex-row items-start sm:items-center gap-4 rounded-3xl border-2 border-primary/20 bg-primary/5 p-6 sm:p-8 hover:shadow-xl hover:border-primary/40 transition-all">
                <div className="h-14 w-14 rounded-2xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <BookOpen className="h-7 w-7 text-primary" />
                </div>
                <div className="flex-1">
                  <p className="font-bold text-xl mb-1">Learn About the Issues</p>
                  <p className="text-muted-foreground">
                    Clear, detailed guides to anxiety, sleep, stress, and so much more — so you can understand exactly what your child is going through.
                  </p>
                </div>
                <span className="text-sm font-semibold text-primary inline-flex items-center gap-1 group-hover:gap-2 transition-all flex-shrink-0">
                  Start learning <ArrowRight className="h-4 w-4" />
                </span>
              </Link>
            </div>
          </div>
        </section>

        <section className="bg-muted/30 py-10">
          <div className="container px-4 max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-3">Remember</h2>
            <p className="text-lg text-muted-foreground mb-5">
              You don't need to have all the answers. Showing up, listening, and seeking support when needed are already powerful steps.
            </p>
            <SuggestIdeasBanner message="Have a suggestion for a resource or topic we should add? We'd love to hear from you!" />
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}

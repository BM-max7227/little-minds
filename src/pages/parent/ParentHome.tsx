import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Header } from "@/components/Header";
import { Link } from "react-router-dom";
import { BookOpen, Users, Wrench, MessageCircle, Eye, FileText, ArrowRight, LayoutDashboard } from "lucide-react";

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
              <Button size="lg" variant="outline" onClick={() => document.getElementById('toolkit')?.scrollIntoView({ behavior: 'smooth' })}>
                Explore Your Toolkit ↓
              </Button>
            </div>
          </div>
        </section>

        {/* Dashboard CTA */}
        <section className="py-8 bg-primary/5 border-b">
          <div className="container px-4">
            <div className="max-w-3xl mx-auto">
              <Link to="/parent/dashboard" className="group flex items-center gap-4 rounded-xl border border-primary/20 bg-card p-5 hover:shadow-lg hover:border-primary/40 transition-all">
                <div className="h-12 w-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <LayoutDashboard className="h-6 w-6 text-primary" />
                </div>
                <div className="flex-1">
                  <p className="font-semibold text-base">Your Weekly Dashboard</p>
                  <p className="text-sm text-muted-foreground">Fresh tips, conversation starters, and topics — updated every week</p>
                </div>
                <ArrowRight className="h-5 w-5 text-primary group-hover:translate-x-1 transition-transform flex-shrink-0" />
              </Link>
            </div>
          </div>
        </section>

        {/* Quick Access Guides Section */}
        <section id="toolkit" className="py-16">
          <div className="container px-4">
            <div className="max-w-5xl mx-auto">
              <h2 className="text-3xl font-bold mb-2 text-center">Your Toolkit</h2>
              <p className="text-muted-foreground text-center mb-10">
                Everything you need, one tap away
              </p>

              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
                <Link to="/parent/quick-guide" className="group">
                  <Card className="h-full transition-all duration-200 hover:shadow-lg hover:border-primary/40 group-hover:-translate-y-1">
                    <CardHeader className="pb-3">
                      <div className="h-12 w-12 rounded-xl bg-primary/10 flex items-center justify-center mb-3">
                        <Eye className="h-6 w-6 text-primary" />
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
                  <Card className="h-full transition-all duration-200 hover:shadow-lg hover:border-primary/40 group-hover:-translate-y-1">
                    <CardHeader className="pb-3">
                      <div className="h-12 w-12 rounded-xl bg-primary/10 flex items-center justify-center mb-3">
                        <MessageCircle className="h-6 w-6 text-primary" />
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
                  <Card className="h-full transition-all duration-200 hover:shadow-lg hover:border-primary/40 group-hover:-translate-y-1">
                    <CardHeader className="pb-3">
                      <div className="h-12 w-12 rounded-xl bg-primary/10 flex items-center justify-center mb-3">
                        <Users className="h-6 w-6 text-primary" />
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
                  <Card className="h-full transition-all duration-200 hover:shadow-lg hover:border-primary/40 group-hover:-translate-y-1">
                    <CardHeader className="pb-3">
                      <div className="h-12 w-12 rounded-xl bg-primary/10 flex items-center justify-center mb-3">
                        <Wrench className="h-6 w-6 text-primary" />
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

        <section className="bg-muted/30 py-16">
          <div className="container px-4 max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">Remember</h2>
            <p className="text-lg text-muted-foreground">
              You don't need to have all the answers. Showing up, listening, and seeking support when needed are already powerful steps.
            </p>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}

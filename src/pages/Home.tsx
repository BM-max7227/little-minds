import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Header } from "@/components/Header";
import { Heart, Sparkles, BookOpen } from "lucide-react";
import { Link } from "react-router-dom";
export default function Home() {
  return <div className="min-h-screen flex flex-col bg-background">
      <Header />
      
      <main className="flex-1 flex items-center justify-center p-4">
        <div className="container max-w-6xl">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Welcome to Little Minds
            </h1>
            <p className="text-xl text-muted-foreground">
              Choose your path to get the support you need
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 md:gap-8">
            <Link to="/parent" className="block group">
              <Card className="h-full transition-all hover:shadow-lg hover:border-primary cursor-pointer">
                <CardHeader className="space-y-4">
                  <div className="h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto group-hover:bg-primary/20 transition-colors">
                    <Heart className="h-8 w-8 text-primary" />
                  </div>
                  <CardTitle className="text-2xl text-center">I am a parent</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-center text-base">
                    Get steps to support your child and find professional help
                  </CardDescription>
                </CardContent>
              </Card>
            </Link>

            <Link to="/kid" className="block group">
              <Card className="h-full transition-all hover:shadow-lg hover:border-primary cursor-pointer">
                <CardHeader className="space-y-4">
                  <div className="h-16 w-16 rounded-full bg-secondary/20 flex items-center justify-center mx-auto group-hover:bg-secondary/30 transition-colors">
                    <Sparkles className="h-8 w-8 text-secondary-foreground" />
                  </div>
                  <CardTitle className="text-2xl text-center">I am a kid or teen</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-center text-base">
                    Pick what you're dealing with and get ideas, videos, and tools
                  </CardDescription>
                </CardContent>
              </Card>
            </Link>

            <Link to="/learn" className="block group">
              <Card className="h-full transition-all hover:shadow-lg hover:border-primary cursor-pointer">
                <CardHeader className="space-y-4">
                  <div className="h-16 w-16 rounded-full bg-accent/20 flex items-center justify-center mx-auto group-hover:bg-accent/30 transition-colors">
                    <BookOpen className="h-8 w-8 text-accent-foreground" />
                  </div>
                  <CardTitle className="text-2xl text-center">I want to learn more</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-center text-base">
                    Understand the topics and how they can look different for kids
                  </CardDescription>
                </CardContent>
              </Card>
            </Link>
          </div>
        </div>
      </main>

      <footer className="border-t py-6 text-center text-sm text-muted-foreground">
        <div className="container">
          <p className="mb-2">
            This site is for information only and is not a substitute for medical advice.
          </p>
          <p>If you are in danger or thinking about harming yourselfget help now.</p>
        </div>
      </footer>
    </div>;
}
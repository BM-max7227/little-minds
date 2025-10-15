import { Header } from "@/components/Header";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { Heart, Users, Award } from "lucide-react";

export default function AboutUs() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
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
              Bode built this project because he saw how important it is to talk about how we feel and to make sure no one feels alone. He wanted to create a space that makes it easier for parents to help their kids, for kids to find help when things get tough, and for anyone who just wants to learn more about mental health and how it affects young people.
            </p>

            <p>
              This is a non-profit project, made only to share knowledge, tools, and hope. Everything here is free to use and designed with kindness first.
            </p>

            <p>
              Our mission is to make learning about mental health easy, safe, and real. Whether you are a parent, a kid, or someone who wants to help, you are part of the change just by being here.
            </p>

            <p className="text-muted-foreground italic">
              If you would like to support, share ideas, or help make the site better, there will soon be a contact link so you can reach out safely.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <Card>
              <CardHeader>
                <div className="flex items-center gap-3 mb-2">
                  <Heart className="h-6 w-6 text-primary" />
                  <CardTitle>Bode Munk</CardTitle>
                </div>
                <CardDescription>Founder and Creator</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm">
                  Started this project to help others understand and care about mental health.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div className="flex items-center gap-3 mb-2">
                  <Award className="h-6 w-6 text-primary" />
                  <CardTitle>Advisors</CardTitle>
                </div>
                <CardDescription>Placeholder for Professionals</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm">
                  Help review information to make sure it's safe and accurate.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div className="flex items-center gap-3 mb-2">
                  <Users className="h-6 w-6 text-primary" />
                  <CardTitle>Volunteers</CardTitle>
                </div>
                <CardDescription>Placeholder for Contributors</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm">
                  Students, parents, and educators who help keep the site growing.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>

      <footer className="border-t py-8 text-center">
        <p className="text-sm text-muted-foreground mb-4">
          Made with care by Bode Munk — a non-profit project for awareness and support
        </p>
        <div className="flex justify-center gap-4">
          <Button variant="link" asChild>
            <Link to="/">Home</Link>
          </Button>
          <Button variant="link" asChild>
            <Link to="/faq">FAQ</Link>
          </Button>
        </div>
      </footer>
    </div>
  );
}

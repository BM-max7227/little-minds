import { Header } from "@/components/Header";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { Heart, Mail } from "lucide-react";
export default function AboutUs() {
  return <div className="min-h-screen flex flex-col">
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

            <p>Our mission is to make learning about mental health easy and safe. Whether you are a parent, a kid, or someone who wants to help, you are part of the change just by being here.</p>

            <div className="flex flex-col sm:flex-row items-center gap-4 p-6 bg-primary/5 rounded-lg border">
              <Mail className="h-8 w-8 text-primary flex-shrink-0" />
              <div className="text-center sm:text-left">
                <p className="font-medium">Want to get in touch?</p>
                <p className="text-muted-foreground">
                  Email us at <a href="mailto:bodemunk2010@gmail.com" className="text-primary hover:underline font-medium">bodemunk2010@gmail.com</a> or visit our{" "}
                  <Link to="/contact" className="text-primary hover:underline font-medium">Contact page</Link>
                </p>
              </div>
            </div>
          </div>

          
        </div>
      </main>

      <footer className="border-t py-8 text-center">
        <p className="text-sm text-muted-foreground mb-4">Made with care by Bode Munk </p>
        <div className="flex justify-center gap-4">
          <Button variant="link" asChild>
            <Link to="/">Home</Link>
          </Button>
          <Button variant="link" asChild>
            <Link to="/faq">FAQ</Link>
          </Button>
        </div>
      </footer>
    </div>;
}
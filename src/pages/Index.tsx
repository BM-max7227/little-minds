import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import heroImage from "@/assets/hero-kids-mental-health.jpg";
import { Heart } from "lucide-react";
import { ChallengeDetailDialog } from "@/components/ChallengeDetailDialog";
import { challengeData } from "@/data/challengeData";
import { useState } from "react";

const Index = () => {
  const [selectedChallenge, setSelectedChallenge] = useState<typeof challengeData[0] | null>(null);
  const [dialogOpen, setDialogOpen] = useState(false);

  const handleChallengeClick = (challenge: typeof challengeData[0]) => {
    setSelectedChallenge(challenge);
    setDialogOpen(true);
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-primary/10 via-secondary/10 to-accent/10">
        <div className="container mx-auto px-4 py-16 md:py-24">
          <div className="grid gap-12 md:grid-cols-2 items-center">
            <div className="space-y-6">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight">
                Supporting Children's Mental Health
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground">
                Every child deserves to feel safe, understood, and supported. Learn practical ways to help young minds thrive.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button size="lg" className="rounded-full">
                  <Heart className="mr-2 h-5 w-5" />
                  Get Started
                </Button>
                <Button size="lg" variant="outline" className="rounded-full">
                  Learn More
                </Button>
              </div>
            </div>
            <div className="relative">
              <img 
                src={heroImage} 
                alt="Children in supportive environment" 
                className="rounded-3xl shadow-2xl w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Understanding Section */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Understanding Children's Mental Health
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Mental health is just as important as physical health. Children can experience a range of emotions and challenges.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {challengeData.map((challenge) => (
              <Card 
                key={challenge.id}
                className="border-2 hover:shadow-lg transition-all cursor-pointer hover:scale-105"
                onClick={() => handleChallengeClick(challenge)}
              >
                <CardHeader>
                  <div className={challenge.color}>
                    {challenge.icon}
                  </div>
                  <CardTitle className="mt-4">{challenge.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">
                    {challenge.description}
                  </p>
                  <Button variant="outline" size="sm" className="w-full">
                    Learn More & Get Help
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          <ChallengeDetailDialog
            challenge={selectedChallenge}
            open={dialogOpen}
            onOpenChange={setDialogOpen}
          />
        </div>
      </section>

      {/* Strategies Section */}
      <section className="py-16 md:py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Practical Ways to Help
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Simple, effective strategies you can use at home to support your child's mental health.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 max-w-5xl mx-auto">
            <div className="bg-card p-6 rounded-2xl border-2 hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-semibold text-foreground mb-3">🎨 Creative Expression</h3>
              <p className="text-muted-foreground">
                Encourage drawing, painting, music, or writing. Creative activities help children process emotions and express what they can't yet put into words.
              </p>
            </div>

            <div className="bg-card p-6 rounded-2xl border-2 hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-semibold text-foreground mb-3">💬 Open Communication</h3>
              <p className="text-muted-foreground">
                Create a safe space for talking. Listen without judgment, validate their feelings, and let them know it's okay to share worries.
              </p>
            </div>

            <div className="bg-card p-6 rounded-2xl border-2 hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-semibold text-foreground mb-3">🧘 Mindfulness & Breathing</h3>
              <p className="text-muted-foreground">
                Simple breathing exercises and mindfulness activities can help children calm their minds and bodies during stressful moments.
              </p>
            </div>

            <div className="bg-card p-6 rounded-2xl border-2 hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-semibold text-foreground mb-3">🏃 Physical Activity</h3>
              <p className="text-muted-foreground">
                Regular exercise releases endorphins and reduces stress. Play, sports, dancing, or even a walk can boost mood significantly.
              </p>
            </div>

            <div className="bg-card p-6 rounded-2xl border-2 hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-semibold text-foreground mb-3">📅 Routine & Structure</h3>
              <p className="text-muted-foreground">
                Consistent routines provide security. Regular sleep, meals, and activities help children feel safe and grounded.
              </p>
            </div>

            <div className="bg-card p-6 rounded-2xl border-2 hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-semibold text-foreground mb-3">👨‍👩‍👧‍👦 Quality Time</h3>
              <p className="text-muted-foreground">
                Dedicate one-on-one time without distractions. Play games, read together, or simply be present to strengthen your bond.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Resources Section */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Resources for Parents & Caregivers
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              You don't have to navigate this alone. Professional support and resources are available.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-3 max-w-5xl mx-auto">
            <Card className="text-center border-2">
              <CardHeader>
                <CardTitle className="text-2xl">When to Seek Help</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3 text-left">
                <p className="text-muted-foreground">Consider professional support if you notice:</p>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Persistent sadness or anxiety</li>
                  <li>• Changes in sleep or appetite</li>
                  <li>• Withdrawal from activities</li>
                  <li>• Difficulty concentrating</li>
                  <li>• Physical complaints</li>
                  <li>• Behavioral changes</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="text-center border-2">
              <CardHeader>
                <CardTitle className="text-2xl">Professional Support</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3 text-left">
                <p className="text-muted-foreground">Types of professionals who can help:</p>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Child psychologists</li>
                  <li>• School counselors</li>
                  <li>• Pediatricians</li>
                  <li>• Child therapists</li>
                  <li>• Family counselors</li>
                  <li>• Psychiatrists (when needed)</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="text-center border-2">
              <CardHeader>
                <CardTitle className="text-2xl">Crisis Resources</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3 text-left">
                <p className="text-muted-foreground">Immediate help is available 24/7:</p>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• National Crisis Hotline: 988</li>
                  <li>• Crisis Text Line: Text HOME to 741741</li>
                  <li>• Emergency: 911</li>
                  <li>• Child Help: 1-800-422-4453</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-primary/20 via-secondary/20 to-accent/20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            Every Child Deserves Support
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
            Taking the first step to understand and support your child's mental health is a sign of strength and love. You're doing great.
          </p>
          <Button size="lg" className="rounded-full">
            <Heart className="mr-2 h-5 w-5" />
            Find Support Near You
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 bg-muted/50 border-t">
        <div className="container mx-auto px-4 text-center text-muted-foreground">
          <p>This website provides general information and is not a substitute for professional medical advice.</p>
          <p className="mt-2">Always consult with a qualified healthcare provider for diagnosis and treatment.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
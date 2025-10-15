import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Header } from "@/components/Header";
import { Link } from "react-router-dom";
import { Eye, MessageSquare, FileText, Phone } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function QuickGuide() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header audience="parent" />
      
      <main className="flex-1 py-12">
        <div className="container px-4 max-w-4xl mx-auto">
          <div className="mb-12">
            <h1 className="text-4xl font-bold mb-4">Quick Guide for Parents</h1>
            <p className="text-xl text-muted-foreground">
              Four key steps to support your child through mental health challenges
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <Eye className="h-10 w-10 text-primary mb-3" />
                <CardTitle>Notice</CardTitle>
                <CardDescription>
                  Common signs to watch for in mood, sleep, school, friends, and online time
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Accordion type="single" collapsible className="w-full">
                  <AccordionItem value="signs">
                    <AccordionTrigger>See Signs to Watch For</AccordionTrigger>
                    <AccordionContent>
                      <ul className="space-y-2 text-sm">
                        <li>• Changes in mood: more irritable, sad, or withdrawn</li>
                        <li>• Sleep changes: trouble falling asleep, sleeping too much, or nightmares</li>
                        <li>• School struggles: grades dropping, avoiding school, or losing interest</li>
                        <li>• Social changes: withdrawing from friends or family activities</li>
                        <li>• Physical complaints: frequent headaches or stomachaches</li>
                        <li>• Eating changes: eating much more or less than usual</li>
                        <li>• Increased anxiety or worry about everyday things</li>
                        <li>• Changes in online behavior: excessive use or complete withdrawal</li>
                      </ul>
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <MessageSquare className="h-10 w-10 text-primary mb-3" />
                <CardTitle>Talk</CardTitle>
                <CardDescription>
                  How to start the conversation and keep it going
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Accordion type="single" collapsible className="w-full">
                  <AccordionItem value="talk">
                    <AccordionTrigger>How to Talk</AccordionTrigger>
                    <AccordionContent>
                      <div className="space-y-4 text-sm">
                        <div>
                          <p className="font-semibold mb-2">Choose the right time and place:</p>
                          <ul className="space-y-1 ml-4">
                            <li>• During a shared activity (cooking, driving, walking)</li>
                            <li>• When you both have time and aren't rushed</li>
                            <li>• In a comfortable, private setting</li>
                          </ul>
                        </div>
                        <div>
                          <p className="font-semibold mb-2">Start gently:</p>
                          <ul className="space-y-1 ml-4">
                            <li>• "I've noticed..." (describe what you see without judgment)</li>
                            <li>• "I'm wondering..." (show curiosity, not interrogation)</li>
                            <li>• "I'm here to listen..." (emphasize support, not fixing)</li>
                          </ul>
                        </div>
                        <div>
                          <p className="font-semibold mb-2">Listen more than you talk:</p>
                          <ul className="space-y-1 ml-4">
                            <li>• Avoid immediately offering solutions</li>
                            <li>• Don't dismiss their feelings ("You'll be fine")</li>
                            <li>• Ask follow-up questions to understand better</li>
                          </ul>
                        </div>
                        <Button variant="outline" asChild className="w-full mt-4">
                          <Link to="/parent/conversation-starters">Get Conversation Starters</Link>
                        </Button>
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <FileText className="h-10 w-10 text-primary mb-3" />
                <CardTitle>Plan</CardTitle>
                <CardDescription>
                  Create a simple support plan at home
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Accordion type="single" collapsible className="w-full">
                  <AccordionItem value="plan">
                    <AccordionTrigger>Make a Plan</AccordionTrigger>
                    <AccordionContent>
                      <div className="space-y-4 text-sm">
                        <div>
                          <p className="font-semibold mb-2">Daily structure:</p>
                          <ul className="space-y-1 ml-4">
                            <li>• Consistent bedtime and wake time</li>
                            <li>• Regular mealtimes together when possible</li>
                            <li>• Scheduled downtime and outdoor time</li>
                          </ul>
                        </div>
                        <div>
                          <p className="font-semibold mb-2">Check-ins:</p>
                          <ul className="space-y-1 ml-4">
                            <li>• Brief daily "how are you" moments</li>
                            <li>• Weekly longer conversations</li>
                            <li>• Notice and acknowledge small improvements</li>
                          </ul>
                        </div>
                        <div>
                          <p className="font-semibold mb-2">Tools and strategies:</p>
                          <ul className="space-y-1 ml-4">
                            <li>• Try calming techniques together (breathing, grounding)</li>
                            <li>• Create a "calm down" space at home</li>
                            <li>• Identify activities that help them feel better</li>
                          </ul>
                        </div>
                        <Button variant="outline" asChild className="w-full mt-4">
                          <Link to="/parent/tools">Download Planning Templates</Link>
                        </Button>
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <Phone className="h-10 w-10 text-primary mb-3" />
                <CardTitle>Get Help</CardTitle>
                <CardDescription>
                  When and how to contact a therapist or counselor
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Accordion type="single" collapsible className="w-full">
                  <AccordionItem value="help">
                    <AccordionTrigger>Find Help</AccordionTrigger>
                    <AccordionContent>
                      <div className="space-y-4 text-sm">
                        <div>
                          <p className="font-semibold mb-2">When to seek professional help:</p>
                          <ul className="space-y-1 ml-4">
                            <li>• Symptoms persist for more than 2-3 weeks</li>
                            <li>• Daily activities are significantly impacted</li>
                            <li>• School performance or attendance declines</li>
                            <li>• Your child withdraws from all social activities</li>
                            <li>• You see signs of self-harm or suicidal thoughts</li>
                            <li>• Your instincts tell you something is seriously wrong</li>
                          </ul>
                        </div>
                        <div>
                          <p className="font-semibold mb-2">Where to start:</p>
                          <ul className="space-y-1 ml-4">
                            <li>• School counselor (free, convenient, knows your child)</li>
                            <li>• Pediatrician (can rule out medical causes, refer to specialists)</li>
                            <li>• Therapist or counselor (ongoing support and skill-building)</li>
                            <li>• Community mental health center (often sliding scale fees)</li>
                          </ul>
                        </div>
                        <Button variant="outline" asChild className="w-full mt-4">
                          <Link to="/parent/find-support">Learn How to Find Support</Link>
                        </Button>
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </CardContent>
            </Card>
          </div>

          <div className="mt-12 text-center">
            <Button asChild size="lg">
              <Link to="/parent">Back to Parent Home</Link>
            </Button>
          </div>
        </div>
      </main>
    </div>
  );
}

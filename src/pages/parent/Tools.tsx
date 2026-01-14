import { Header } from "@/components/Header";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { Download, FileText } from "lucide-react";
import logo from "@/assets/logo.png";

export default function Tools() {
  const handlePrint = (content: string) => {
    const printWindow = window.open('', '', 'width=800,height=600');
    if (printWindow) {
      printWindow.document.write(`
        <html>
          <head>
            <title>Little Minds</title>
            <style>
              body { font-family: system-ui, sans-serif; padding: 40px; line-height: 1.6; }
              .logo-header { display: flex; align-items: center; margin-bottom: 30px; padding-bottom: 20px; border-bottom: 2px solid #e5e7eb; }
              .logo-header img { height: 80px; width: auto; }
              h1 { color: #333; margin-bottom: 20px; }
              h2 { color: #555; margin-top: 30px; margin-bottom: 15px; }
              ul { margin-left: 20px; }
              li { margin-bottom: 10px; }
              .checkbox { display: inline-block; width: 20px; height: 20px; border: 2px solid #333; margin-right: 10px; }
              .footer { margin-top: 40px; padding-top: 20px; border-top: 1px solid #e5e7eb; text-align: center; color: #666; font-size: 12px; }
            </style>
          </head>
          <body>
            <div class="logo-header">
              <img src="${logo}" alt="Little Minds Logo" />
            </div>
            ${content}
            <div class="footer">
              <p>Little Minds - Supporting Children's Mental Health</p>
            </div>
          </body>
        </html>
      `);
      printWindow.document.close();
      printWindow.print();
    }
  };
  const observationChecklistContent = `
    <h1>Observation Checklist</h1>
    <p>Use this checklist to track changes in your child's behavior and wellbeing over time.</p>
    
    <h2>Mood and Emotions</h2>
    <ul>
      <li><span class="checkbox"></span> Increased irritability or anger</li>
      <li><span class="checkbox"></span> Persistent sadness or crying</li>
      <li><span class="checkbox"></span> Excessive worry or anxiety</li>
      <li><span class="checkbox"></span> Loss of interest in activities they used to enjoy</li>
      <li><span class="checkbox"></span> Expressing feelings of hopelessness</li>
    </ul>

    <h2>Sleep and Energy</h2>
    <ul>
      <li><span class="checkbox"></span> Difficulty falling or staying asleep</li>
      <li><span class="checkbox"></span> Sleeping much more than usual</li>
      <li><span class="checkbox"></span> Frequent nightmares</li>
      <li><span class="checkbox"></span> Always tired or low energy</li>
    </ul>

    <h2>School and Activities</h2>
    <ul>
      <li><span class="checkbox"></span> Declining grades</li>
      <li><span class="checkbox"></span> Not completing homework</li>
      <li><span class="checkbox"></span> Avoiding or refusing to go to school</li>
      <li><span class="checkbox"></span> Withdrawing from extracurricular activities</li>
    </ul>

    <h2>Social Connections</h2>
    <ul>
      <li><span class="checkbox"></span> Withdrawing from family time</li>
      <li><span class="checkbox"></span> Avoiding friends</li>
      <li><span class="checkbox"></span> Increased conflict with peers</li>
      <li><span class="checkbox"></span> Excessive online or screen time</li>
    </ul>

    <h2>Physical Signs</h2>
    <ul>
      <li><span class="checkbox"></span> Frequent headaches or stomachaches</li>
      <li><span class="checkbox"></span> Changes in appetite</li>
      <li><span class="checkbox"></span> Unexplained aches and pains</li>
      <li><span class="checkbox"></span> Signs of self-harm</li>
    </ul>

    <h2>Notes</h2>
    <p>When did you first notice these changes? _______________________________</p>
    <p>How long have they persisted? _______________________________</p>
    <p>Additional observations: _______________________________</p>
  `;
  const conversationPlanContent = `
    <h1>Conversation Plan</h1>
    <p>Use this template to prepare for an important conversation with your child.</p>
    
    <h2>Before the Conversation</h2>
    <ul>
      <li><span class="checkbox"></span> Choose a time when we're both calm and not rushed</li>
      <li><span class="checkbox"></span> Pick a comfortable, private place</li>
      <li><span class="checkbox"></span> Turn off distractions (phones, TV)</li>
      <li><span class="checkbox"></span> Prepare what I want to say</li>
    </ul>

    <h2>Opening the Conversation</h2>
    <p>I will start by saying: _______________________________</p>
    <p>_______________________________</p>

    <h2>Things I Want to Communicate</h2>
    <ul>
      <li>1. _______________________________</li>
      <li>2. _______________________________</li>
      <li>3. _______________________________</li>
    </ul>

    <h2>Questions I Want to Ask</h2>
    <ul>
      <li>1. _______________________________</li>
      <li>2. _______________________________</li>
      <li>3. _______________________________</li>
    </ul>

    <h2>Listening Goals</h2>
    <ul>
      <li><span class="checkbox"></span> Listen without interrupting</li>
      <li><span class="checkbox"></span> Avoid jumping to solutions</li>
      <li><span class="checkbox"></span> Validate their feelings</li>
      <li><span class="checkbox"></span> Ask follow-up questions to understand better</li>
    </ul>

    <h2>After the Conversation</h2>
    <p>Next steps we agreed on: _______________________________</p>
    <p>Follow-up conversation scheduled for: _______________________________</p>
  `;
  const supportPlanContent = `
    <h1>Weekly Support Plan</h1>
    <p>Create a simple plan to support your child this week.</p>
    
    <h2>This Week's Goals</h2>
    <ul>
      <li>1. _______________________________</li>
      <li>2. _______________________________</li>
      <li>3. _______________________________</li>
    </ul>

    <h2>Daily Structure</h2>
    <p>Bedtime: _______ Wake time: _______</p>
    <p>Meal times: Breakfast _______ Lunch _______ Dinner _______</p>
    <p>Outdoor time: _______________________________</p>

    <h2>Check-Ins</h2>
    <ul>
      <li><span class="checkbox"></span> Monday: Quick check-in</li>
      <li><span class="checkbox"></span> Tuesday: Quick check-in</li>
      <li><span class="checkbox"></span> Wednesday: Longer conversation</li>
      <li><span class="checkbox"></span> Thursday: Quick check-in</li>
      <li><span class="checkbox"></span> Friday: Quick check-in</li>
      <li><span class="checkbox"></span> Weekend: Family activity</li>
    </ul>

    <h2>Coping Strategies to Try This Week</h2>
    <ul>
      <li>1. _______________________________</li>
      <li>2. _______________________________</li>
      <li>3. _______________________________</li>
    </ul>

    <h2>Activities They Enjoy</h2>
    <ul>
      <li>_______________________________</li>
      <li>_______________________________</li>
      <li>_______________________________</li>
    </ul>

    <h2>Support Team</h2>
    <p>Who else is involved in supporting them?</p>
    <ul>
      <li>School counselor: _______________________________</li>
      <li>Therapist: _______________________________</li>
      <li>Other family/friends: _______________________________</li>
    </ul>

    <h2>End of Week Review</h2>
    <p>What worked well: _______________________________</p>
    <p>What to adjust next week: _______________________________</p>
  `;
  return <div className="min-h-screen flex flex-col">
      <Header audience="parent" />
      
      <main className="flex-1 py-12">
        <div className="container px-4 max-w-4xl mx-auto">
          <div className="mb-12">
            <h1 className="text-4xl font-bold mb-4">Tools for Parents</h1>
            <p className="text-xl text-muted-foreground">
              Downloadable checklists and planning templates to help you support your child
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <Card>
              <CardHeader>
                <FileText className="h-10 w-10 text-primary mb-3" />
                <CardTitle>Observation Checklist</CardTitle>
                <CardDescription>
                  Track signs and symptoms you're noticing in your child
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button className="w-full" onClick={() => handlePrint(observationChecklistContent)}>
                  <Download className="mr-2 h-4 w-4" />
                  Download / Print
                </Button>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <FileText className="h-10 w-10 text-primary mb-3" />
                <CardTitle>Conversation Plan</CardTitle>
                <CardDescription>
                  Prepare for difficult conversations with structure and intention
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button className="w-full" onClick={() => handlePrint(conversationPlanContent)}>
                  <Download className="mr-2 h-4 w-4" />
                  Download / Print
                </Button>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <FileText className="h-10 w-10 text-primary mb-3" />
                <CardTitle>Weekly Support Plan</CardTitle>
                <CardDescription>
                  Create a simple plan for daily structure and check-ins
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button className="w-full" onClick={() => handlePrint(supportPlanContent)}>
                  <Download className="mr-2 h-4 w-4" />
                  Download / Print
                </Button>
              </CardContent>
            </Card>
          </div>

          <Card className="mt-8">
            <CardHeader>
              <CardTitle>How to Use These Tools</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-muted-foreground">
                <li>• Download and print the tools that feel most helpful</li>
                <li>• Use them as starting points</li>
                <li>• Share with your child's therapist or school counselor if appropriate</li>
                <li>• Review and update regularly as situations change</li>
              </ul>
            </CardContent>
          </Card>

          <div className="mt-12 text-center">
            <Button asChild size="lg">
              <Link to="/parent">Back to Parent Home</Link>
            </Button>
          </div>
        </div>
      </main>
    </div>;
}
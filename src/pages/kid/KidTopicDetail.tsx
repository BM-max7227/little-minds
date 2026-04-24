import { useParams, useNavigate, Link } from "react-router-dom";
import { Header } from "@/components/Header";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Textarea } from "@/components/ui/textarea";
import { Timer } from "@/components/Timer";
import { topics } from "@/data/kidTopics";
import { topicConversationStarters } from "@/data/topicConversationStarters";
import { useState, useEffect } from "react";
import { ArrowLeft, Heart, MessageCircle } from "lucide-react";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
export default function KidTopicDetail() {
  const {
    topicId
  } = useParams<{
    topicId: string;
  }>();
  const navigate = useNavigate();
  const topic = topicId ? topics[topicId] : null;
  const [journalEntry, setJournalEntry] = useState("");
  useEffect(() => {
    if (topicId) {
      const saved = localStorage.getItem(`journal-${topicId}`);
      if (saved) setJournalEntry(saved);
    }
  }, [topicId]);
  const saveJournal = (value: string) => {
    setJournalEntry(value);
    if (topicId) {
      localStorage.setItem(`journal-${topicId}`, value);
    }
  };
  if (!topic) {
    return <div className="min-h-screen bg-background">
        <Header audience="kid" />
        <main className="container mx-auto px-4 py-8">
          <p>Topic not found</p>
          <Button onClick={() => navigate("/kid")} className="mt-4">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Topics
          </Button>
        </main>
      </div>;
  }
  return <div className="min-h-screen bg-background">
      <Header audience="kid" />
      <main className="container mx-auto px-4 py-8 max-w-4xl">
        <Button variant="ghost" onClick={() => navigate("/kid")} className="mb-4">
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Topics
        </Button>

        <div className="mb-8">
          <div className="flex items-center gap-3 mb-2">
            <span className="text-4xl">{topic.icon}</span>
            <h1 className="text-3xl font-bold">{topic.title}</h1>
          </div>
          <p className="text-lg text-muted-foreground">{topic.subtitle}</p>
        </div>

        <Tabs defaultValue="quick" className="w-full">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="quick" className="text-xs sm:text-sm">Try This Today</TabsTrigger>
            <TabsTrigger value="skills" className="text-xs sm:text-sm">Learn a Skill</TabsTrigger>
            <TabsTrigger value="videos" className="text-xs sm:text-sm">Watch</TabsTrigger>
            <TabsTrigger value="journal" className="text-xs sm:text-sm">Journal</TabsTrigger>
          </TabsList>

          <TabsContent value="quick" className="space-y-4 mt-6">
            <p className="text-muted-foreground mb-4">
              Quick actions you can do right now to feel better
            </p>
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {topic.quickActions.map((action, index) => <Card key={index}>
                  <CardHeader>
                    <CardTitle className="text-lg">{action.title}</CardTitle>
                    <CardDescription>{action.time} min</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm">{action.description}</p>
                  </CardContent>
                </Card>)}
            </div>
          </TabsContent>

          <TabsContent value="skills" className="space-y-6 mt-6">
            <p className="text-muted-foreground mb-4">
              Practice these skills to build long-term coping strategies
            </p>
            {topic.skills.map((skill, index) => <Card key={index}>
                <CardHeader>
                  <CardTitle>{skill.title}</CardTitle>
                  <CardDescription>{skill.description} • {skill.time} min</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <ol className="list-decimal list-inside space-y-2">
                    {skill.steps.map((step, stepIndex) => <li key={stepIndex} className="text-sm">{step}</li>)}
                  </ol>
                  <Timer presetMinutes={skill.time} />
                </CardContent>
              </Card>)}
          </TabsContent>

          <TabsContent value="videos" className="space-y-6 mt-6">
            <p className="text-muted-foreground mb-4">
              Short videos to help you understand and cope
            </p>
            {topic.videos.map((video, index) => <Card key={index}>
                <CardHeader>
                  <CardTitle>{video.title}</CardTitle>
                  <CardDescription>{video.summary}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="aspect-video w-full bg-muted rounded-md flex items-center justify-center">
                    <iframe className="w-full h-full rounded-md" src={video.url} title={video.title} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen />
                  </div>
                  <p className="text-sm text-muted-foreground mt-2">
                    All videos include captions
                  </p>
                </CardContent>
              </Card>)}
          </TabsContent>

          <TabsContent value="journal" className="space-y-4 mt-6">
            <Card>
              <CardHeader>
                <CardTitle>Your Private Journal</CardTitle>
                <CardDescription>
                  This is saved only on your device. No one else can see it.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <h3 className="font-medium">Prompts to help you reflect:</h3>
                  <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground">
                    {topic.journalPrompts.map((prompt, index) => <li key={index}>{prompt}</li>)}
                  </ul>
                </div>
                <div className="rounded-md border border-primary/30 bg-primary/10 px-3 py-2.5 text-sm text-foreground flex items-start gap-2">
                  <span aria-hidden="true">🔒</span>
                  <span><strong>Please don't type</strong> passwords, your address, phone number, or other private information here.</span>
                </div>
                <Textarea placeholder="Start writing here..." value={journalEntry} onChange={e => saveJournal(e.target.value)} className="min-h-[200px]" aria-label="Journal entry" />
                <div className="flex justify-between items-center">
                  <p className="text-xs text-muted-foreground">
                    Auto-saved to your device only
                  </p>
                  <AlertDialog>
                    <AlertDialogTrigger asChild>
                      <Button variant="outline" size="sm">
                        Clear Entry
                      </Button>
                    </AlertDialogTrigger>
                    <AlertDialogContent>
                      <AlertDialogHeader>
                        <AlertDialogTitle>Clear your journal entry?</AlertDialogTitle>
                        <AlertDialogDescription>
                          This will erase what you've written here. You can't undo this.
                        </AlertDialogDescription>
                      </AlertDialogHeader>
                      <AlertDialogFooter>
                        <AlertDialogCancel>Keep writing</AlertDialogCancel>
                        <AlertDialogAction onClick={() => saveJournal("")}>
                          Yes, clear it
                        </AlertDialogAction>
                      </AlertDialogFooter>
                    </AlertDialogContent>
                  </AlertDialog>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>

        <div className="mt-12 space-y-6">
          {/* Talk About It prompt */}
          {topicId && topicConversationStarters[topicId] && (
            <Card className="border-primary/20 bg-primary/5">
              <CardContent className="pt-6">
                <div className="flex items-start gap-3">
                  <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <MessageCircle className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-semibold mb-1">Want to talk to a parent or trusted adult about this?</p>
                    <p className="text-sm text-muted-foreground mb-3">Here's something you could say to start the conversation:</p>
                    <blockquote className="border-l-2 border-primary/40 pl-3 italic text-sm">
                      "{topicConversationStarters[topicId]}"
                    </blockquote>
                    <p className="text-xs text-muted-foreground mt-3">
                      It's brave to speak up — you could say this out loud, or show them this page 💛
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          )}

          <Card className="bg-primary/5 border-primary/20">
            <CardContent className="pt-6">
              <p className="text-center text-lg font-medium italic">
                {topicId === "anxiety" && "Asking for help is not a sign of weakness, it is a sign of strength"}
                {topicId === "stress" && "Taking breaks is part of working hard"}
                {topicId === "sad" && "It is okay to not be okay sometimes"}
                {topicId === "sleep" && "You deserve good rest every night"}
                {topicId === "conflict" && "Every problem can be talked through"}
                {topicId === "socialmedia" && "You are good enough just as you are"}
                {topicId === "anger" && "Calming down takes strength and practice"}
                {topicId === "bodyimage" && "You are more than how you look"}
                {topicId === "bullying" && "You do not have to face this alone"}
                {topicId === "grief" && "You can heal while keeping their memory close"}
                {topicId === "other" && "Every feeling is worth listening to"}
              </p>
            </CardContent>
          </Card>

          <div className="flex justify-center">
            <Button onClick={() => navigate(`/learn/${topicId}`)} variant="outline" size="lg">
              Learn more about this topic
            </Button>
          </div>

          <div className="text-center text-sm text-muted-foreground pt-8 border-t">
            <p>If you are in crisis, please tell a trusted adult or contact your local emergency services.</p>
          </div>
        </div>
      </main>
    </div>;
}
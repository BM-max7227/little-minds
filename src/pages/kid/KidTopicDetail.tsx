import { useParams, useNavigate } from "react-router-dom";
import { Header } from "@/components/Header";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Textarea } from "@/components/ui/textarea";
import { Timer } from "@/components/Timer";
import { topics } from "@/data/kidTopics";
import { useState, useEffect } from "react";
import { ArrowLeft } from "lucide-react";
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
            <TabsTrigger value="quick">Try This Today</TabsTrigger>
            <TabsTrigger value="skills">Learn a Skill</TabsTrigger>
            <TabsTrigger value="videos">Watch</TabsTrigger>
            <TabsTrigger value="journal">Journal</TabsTrigger>
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
                <Textarea placeholder="Start writing here..." value={journalEntry} onChange={e => saveJournal(e.target.value)} className="min-h-[200px]" aria-label="Journal entry" />
                <div className="flex justify-between items-center">
                  <p className="text-xs text-muted-foreground">
                    Auto-saved to your device only
                  </p>
                  <Button variant="outline" size="sm" onClick={() => {
                  if (confirm("Are you sure you want to clear this journal entry?")) {
                    saveJournal("");
                  }
                }}>
                    Clear Entry
                  </Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>

        <div className="mt-12 space-y-6">
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
            <p>Made with care by Bode Munk</p>
            <p>This is a non profit project to help kids parents and people learn about mental health and ways to help</p>
          </div>
        </div>
      </main>
    </div>;
}
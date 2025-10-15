import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ExternalLink } from "lucide-react";

interface ChallengeDetail {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  color: string;
  detailedInfo: string;
  signs: string[];
  copingStrategies: {
    title: string;
    description: string;
  }[];
  activities: {
    title: string;
    description: string;
  }[];
  whenToSeekHelp: string[];
  videos: {
    title: string;
    url: string;
    description: string;
  }[];
}

interface ChallengeDetailDialogProps {
  challenge: ChallengeDetail | null;
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export const ChallengeDetailDialog = ({ challenge, open, onOpenChange }: ChallengeDetailDialogProps) => {
  if (!challenge) return null;

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <div className="flex items-center gap-3 mb-2">
            <div className={challenge.color}>
              {challenge.icon}
            </div>
            <DialogTitle className="text-2xl">{challenge.title}</DialogTitle>
          </div>
          <DialogDescription className="text-base">
            {challenge.detailedInfo}
          </DialogDescription>
        </DialogHeader>

        <Tabs defaultValue="signs" className="mt-4">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="signs">Warning Signs</TabsTrigger>
            <TabsTrigger value="strategies">Coping Strategies</TabsTrigger>
            <TabsTrigger value="activities">Activities</TabsTrigger>
            <TabsTrigger value="resources">Resources</TabsTrigger>
          </TabsList>

          <TabsContent value="signs" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Signs to Watch For</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {challenge.signs.map((sign, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <span className="text-primary mt-1">•</span>
                      <span className="text-muted-foreground">{sign}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-secondary/20">
              <CardHeader>
                <CardTitle>When to Seek Professional Help</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {challenge.whenToSeekHelp.map((item, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <span className="text-destructive mt-1">⚠</span>
                      <span className="text-muted-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="strategies" className="space-y-4">
            {challenge.copingStrategies.map((strategy, index) => (
              <Card key={index}>
                <CardHeader>
                  <CardTitle className="text-lg">{strategy.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{strategy.description}</p>
                </CardContent>
              </Card>
            ))}
          </TabsContent>

          <TabsContent value="activities" className="space-y-4">
            {challenge.activities.map((activity, index) => (
              <Card key={index}>
                <CardHeader>
                  <CardTitle className="text-lg">{activity.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{activity.description}</p>
                </CardContent>
              </Card>
            ))}
          </TabsContent>

          <TabsContent value="resources" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Helpful Videos & Resources</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {challenge.videos.map((video, index) => (
                  <div key={index} className="flex items-start justify-between gap-4 p-3 rounded-lg border">
                    <div className="flex-1">
                      <h4 className="font-semibold mb-1">{video.title}</h4>
                      <p className="text-sm text-muted-foreground">{video.description}</p>
                    </div>
                    <Button
                      size="sm"
                      variant="outline"
                      onClick={() => window.open(video.url, '_blank')}
                    >
                      <ExternalLink className="h-4 w-4 mr-2" />
                      Watch
                    </Button>
                  </div>
                ))}
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </DialogContent>
    </Dialog>
  );
};
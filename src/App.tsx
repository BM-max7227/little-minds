import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import Home from "./pages/Home";
import ParentHome from "./pages/parent/ParentHome";
import QuickGuide from "./pages/parent/QuickGuide";
import ConversationStarters from "./pages/parent/ConversationStarters";
import FindSupport from "./pages/parent/FindSupport";
import Tools from "./pages/parent/Tools";
import KidHome from "./pages/kid/KidHome";
import KidTopicDetail from "./pages/kid/KidTopicDetail";
import TryThis from "./pages/kid/TryThis";
import LearnHome from "./pages/learn/LearnHome";
import LearnTopic from "./pages/learn/LearnTopic";
import FAQ from "./pages/FAQ";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/parent" element={<ParentHome />} />
          <Route path="/parent/quick-guide" element={<QuickGuide />} />
          <Route path="/parent/conversation-starters" element={<ConversationStarters />} />
          <Route path="/parent/find-support" element={<FindSupport />} />
          <Route path="/parent/tools" element={<Tools />} />
          <Route path="/kid" element={<KidHome />} />
          <Route path="/kid/:topicId" element={<KidTopicDetail />} />
          <Route path="/kid/try-this" element={<TryThis />} />
          <Route path="/learn" element={<LearnHome />} />
          <Route path="/learn/:topicId" element={<LearnTopic />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;

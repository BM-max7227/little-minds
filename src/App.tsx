import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { AIChatWidget } from "@/components/AIChatWidget";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import Home from "./pages/Home";
import ParentHome from "./pages/parent/ParentHome";
import QuickGuide from "./pages/parent/QuickGuide";
import ConversationStarters from "./pages/parent/ConversationStarters";
import FindSupport from "./pages/parent/FindSupport";
import Tools from "./pages/parent/Tools";
import Dashboard from "./pages/parent/Dashboard";
import KidHome from "./pages/kid/KidHome";
import KidTopicDetail from "./pages/kid/KidTopicDetail";
import TryThis from "./pages/kid/TryThis";
import Breathe from "./pages/kid/Breathe";
import Together from "./pages/Together";
import LearnHome from "./pages/learn/LearnHome";
import LearnTopic from "./pages/learn/LearnTopic";
import FAQ from "./pages/FAQ";
import AboutUs from "./pages/AboutUs";
import Donate from "./pages/Donate";
import Contact from "./pages/Contact";
import Disclaimer from "./pages/Disclaimer";
import Terms from "./pages/Terms";
const queryClient = new QueryClient();

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/parent" element={<ParentHome />} />
          <Route path="/parent/quick-guide" element={<QuickGuide />} />
          <Route path="/parent/conversation-starters" element={<ConversationStarters />} />
          <Route path="/parent/find-support" element={<FindSupport />} />
          <Route path="/parent/tools" element={<Tools />} />
          <Route path="/parent/dashboard" element={<Dashboard />} />
          <Route path="/kid" element={<KidHome />} />
          <Route path="/kid/:topicId" element={<KidTopicDetail />} />
          <Route path="/kid/try-this" element={<TryThis />} />
          <Route path="/learn" element={<LearnHome />} />
          <Route path="/learn/:topicId" element={<LearnTopic />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/donate" element={<Donate />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/disclaimer" element={<Disclaimer />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <AIChatWidget />
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;

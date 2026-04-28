import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { LazyAIChatWidget } from "@/components/LazyAIChatWidget";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { useEffect, lazy, Suspense } from "react";
import Home from "./pages/Home";
import ParentHome from "./pages/parent/ParentHome";
import KidHome from "./pages/kid/KidHome";
import LearnHome from "./pages/learn/LearnHome";

// Lazy load all secondary pages
const NotFound = lazy(() => import("./pages/NotFound"));
const QuickGuide = lazy(() => import("./pages/parent/QuickGuide"));
const ConversationStarters = lazy(() => import("./pages/parent/ConversationStarters"));
const FindSupport = lazy(() => import("./pages/parent/FindSupport"));
const Tools = lazy(() => import("./pages/parent/Tools"));
const Dashboard = lazy(() => import("./pages/parent/Dashboard"));
const KidTopicDetail = lazy(() => import("./pages/kid/KidTopicDetail"));
const TryThis = lazy(() => import("./pages/kid/TryThis"));
const Breathe = lazy(() => import("./pages/kid/Breathe"));

const LearnTopic = lazy(() => import("./pages/learn/LearnTopic"));
const FAQ = lazy(() => import("./pages/FAQ"));
const AboutUs = lazy(() => import("./pages/AboutUs"));
const Donate = lazy(() => import("./pages/Donate"));
const Contact = lazy(() => import("./pages/Contact"));
const Disclaimer = lazy(() => import("./pages/Disclaimer"));
const Terms = lazy(() => import("./pages/Terms"));
const PrivacyPolicy = lazy(() => import("./pages/PrivacyPolicy"));

const queryClient = new QueryClient();

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

function PageLoader() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-background">
      <div className="animate-pulse text-muted-foreground text-lg">Loading…</div>
    </div>
  );
}

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <ScrollToTop />
        <Suspense fallback={<PageLoader />}>
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
            <Route path="/kid/breathe" element={<Breathe />} />
            <Route path="/learn" element={<LearnHome />} />
            <Route path="/learn/:topicId" element={<LearnTopic />} />
            <Route path="/faq" element={<FAQ />} />
            <Route path="/about" element={<AboutUs />} />
            <Route path="/donate" element={<Donate />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/disclaimer" element={<Disclaimer />} />
            <Route path="/terms" element={<Terms />} />
            <Route path="/privacy" element={<PrivacyPolicy />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
        <LazyAIChatWidget />
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;

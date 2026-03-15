import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { Header } from "@/components/Header";
import { SiteFooter } from "@/components/SiteFooter";
import { Button } from "@/components/ui/button";
import { Home, ArrowLeft, Search } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />

      <main className="flex-1 flex items-center justify-center p-4">
        <div className="text-center max-w-md mx-auto space-y-6">
          <div className="text-8xl font-bold text-primary/20">404</div>
          <h1 className="text-3xl font-bold text-foreground">
            Oops! This page wandered off
          </h1>
          <p className="text-muted-foreground text-lg">
            The page you're looking for doesn't exist or may have moved. Let's get you back on track.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center pt-4">
            <Button asChild size="lg">
              <Link to="/">
                <Home className="mr-2 h-4 w-4" />
                Go Home
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link to="/parent">
                <ArrowLeft className="mr-2 h-4 w-4" />
                For Parents
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link to="/kid">
                <Search className="mr-2 h-4 w-4" />
                For Kids
              </Link>
            </Button>
          </div>
        </div>
      </main>

      <SiteFooter />
    </div>
  );
};

export default NotFound;

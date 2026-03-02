import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import { topics } from "@/data/kidTopics";
import { learnTopics } from "@/data/learnTopics";
import { faqData } from "@/data/faqData";

interface SearchResult {
  id: string;
  title: string;
  description: string;
  path: string;
  category: string;
}

export function GlobalSearch() {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();

  // Build search index
  const searchResults: SearchResult[] = [];

  // Kid topics
  Object.entries(topics).forEach(([id, topic]) => {
    searchResults.push({
      id: `kid-${id}`,
      title: topic.title,
      description: topic.subtitle,
      path: `/kid/${id}`,
      category: "Kids Topics",
    });
  });

  // Learn topics
  Object.entries(learnTopics).forEach(([id, topic]) => {
    searchResults.push({
      id: `learn-${id}`,
      title: topic.title,
      description: topic.description.slice(0, 100) + "...",
      path: `/learn/${id}`,
      category: "Learn Topics",
    });
  });

  // FAQ items
  faqData.forEach((faq, index) => {
    searchResults.push({
      id: `faq-${index}`,
      title: faq.question,
      description: faq.answer.slice(0, 100) + "...",
      path: "/faq",
      category: "FAQ",
    });
  });

  // Static pages
  const staticPages: SearchResult[] = [
    { id: "home", title: "Home", description: "Welcome to Little Minds", path: "/", category: "Pages" },
    { id: "parent-home", title: "Parent Home", description: "Resources and guides for parents", path: "/parent", category: "Pages" },
    { id: "kid-home", title: "Kid Home", description: "Resources and activities for kids", path: "/kid", category: "Pages" },
    { id: "learn-home", title: "Learn Home", description: "Educational mental health resources", path: "/learn", category: "Pages" },
    { id: "try-this", title: "Try This", description: "Quick activities and coping skills", path: "/kid/try-this", category: "Pages" },
    { id: "find-support", title: "Find Support", description: "Find professional help and support services", path: "/parent/find-support", category: "Pages" },
    { id: "quick-guide", title: "Quick Guides", description: "Parenting guides for mental health", path: "/parent/quick-guide", category: "Pages" },
    { id: "conversation-starters", title: "Conversation Starters", description: "How to talk to your child about mental health", path: "/parent/conversation-starters", category: "Pages" },
    { id: "tools", title: "Tools", description: "Helpful tools and resources for parents", path: "/parent/tools", category: "Pages" },
    { id: "about", title: "About Us", description: "Learn about Little Minds and our mission", path: "/about", category: "Pages" },
    { id: "faq-page", title: "FAQ", description: "Frequently asked questions about mental health", path: "/faq", category: "Pages" },
    { id: "donate", title: "Donate", description: "Support Little Minds with a donation — we are a nonprofit", path: "/donate", category: "Pages" },
    { id: "contact", title: "Contact", description: "Get in touch with the Little Minds team", path: "/contact", category: "Pages" },
  ];

  searchResults.push(...staticPages);

  // Keyboard shortcut
  useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setOpen((open) => !open);
      }
    };

    document.addEventListener("keydown", down);
    return () => document.removeEventListener("keydown", down);
  }, []);

  const handleSelect = (path: string) => {
    setOpen(false);
    navigate(path);
  };

  // Group results by category
  const groupedResults = searchResults.reduce((acc, result) => {
    if (!acc[result.category]) {
      acc[result.category] = [];
    }
    acc[result.category].push(result);
    return acc;
  }, {} as Record<string, SearchResult[]>);

  return (
    <>
      <Button
        variant="outline"
        size="sm"
        onClick={() => setOpen(true)}
        className="relative h-9 w-9 p-0 xl:h-9 xl:w-60 xl:justify-start xl:px-3 xl:py-2"
      >
        <Search className="h-4 w-4 xl:mr-2" />
        <span className="hidden xl:inline-flex">Search...</span>
        <kbd className="pointer-events-none absolute right-1.5 top-1.5 hidden h-6 select-none items-center gap-1 rounded border bg-muted px-1.5 font-mono text-[10px] font-medium opacity-100 xl:flex">
          <span className="text-xs">⌘</span>K
        </kbd>
      </Button>

      <CommandDialog open={open} onOpenChange={setOpen}>
        <CommandInput placeholder="Search topics, pages, FAQs..." />
        <CommandList>
          <CommandEmpty>No results found.</CommandEmpty>
          {Object.entries(groupedResults).map(([category, results]) => (
            <CommandGroup key={category} heading={category}>
              {results.map((result) => (
                <CommandItem
                  key={result.id}
                  value={`${result.title} ${result.description}`}
                  onSelect={() => handleSelect(result.path)}
                >
                  <div className="flex flex-col">
                    <span className="font-medium">{result.title}</span>
                    <span className="text-xs text-muted-foreground line-clamp-1">
                      {result.description}
                    </span>
                  </div>
                </CommandItem>
              ))}
            </CommandGroup>
          ))}
        </CommandList>
      </CommandDialog>
    </>
  );
}

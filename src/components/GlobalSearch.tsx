import { useEffect, useMemo, useState } from "react";
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
  keywords?: string[];
}

const normalize = (text: string) => text.toLowerCase().trim();

const scoreResult = (result: SearchResult, query: string) => {
  if (!query) return 1;

  const q = normalize(query);
  const title = normalize(result.title);
  const description = normalize(result.description);
  const category = normalize(result.category);
  const path = normalize(result.path);
  const keywords = (result.keywords ?? []).map(normalize);

  const searchable = [title, description, category, path, ...keywords].join(" ");
  if (!searchable.includes(q)) return 0;

  let score = 10;

  if (title === q) score += 120;
  if (title.startsWith(q)) score += 80;
  if (title.split(" ").some((word) => word.startsWith(q))) score += 40;
  if (path.includes(`/${q}`)) score += 30;
  if (description.includes(q)) score += 20;
  if (keywords.some((keyword) => keyword === q)) score += 40;
  if (keywords.some((keyword) => keyword.includes(q))) score += 20;

  return score;
};

export function GlobalSearch() {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");
  const navigate = useNavigate();

  const searchResults = useMemo(() => {
    const results: SearchResult[] = [];

    Object.entries(topics).forEach(([id, topic]) => {
      results.push({
        id: `kid-${id}`,
        title: topic.title,
        description: topic.subtitle,
        path: `/kid/${id}`,
        category: "Kids Topics",
        keywords: ["kids", "children", "feelings", id],
      });
    });

    Object.entries(learnTopics).forEach(([id, topic]) => {
      results.push({
        id: `learn-${id}`,
        title: topic.title,
        description: topic.description.slice(0, 120) + "...",
        path: `/learn/${id}`,
        category: "Learn Topics",
        keywords: ["learn", "education", "mental health", id],
      });
    });

    faqData.forEach((faq, index) => {
      results.push({
        id: `faq-${index}`,
        title: faq.question,
        description: faq.answer.slice(0, 120) + "...",
        path: "/faq",
        category: "FAQ",
        keywords: ["faq", "questions", "help"],
      });
    });

    const staticPages: SearchResult[] = [
      { id: "home", title: "Home", description: "Welcome to Little Minds", path: "/", category: "Pages", keywords: ["landing", "start"] },
      { id: "parent-home", title: "Parent Home", description: "Resources and guides for parents", path: "/parent", category: "Pages", keywords: ["parent", "caregiver", "family"] },
      { id: "kid-home", title: "Kid Home", description: "Resources and activities for kids", path: "/kid", category: "Pages", keywords: ["kid", "child", "children"] },
      { id: "learn-home", title: "Learn Home", description: "Educational mental health resources", path: "/learn", category: "Pages", keywords: ["learn", "education", "articles"] },
      { id: "try-this", title: "Try This", description: "Quick activities and coping skills", path: "/kid/try-this", category: "Pages", keywords: ["activities", "skills", "coping"] },
      { id: "find-support", title: "Find Support", description: "Find professional help and support services", path: "/parent/find-support", category: "Pages", keywords: ["support", "help", "therapy", "counselor"] },
      { id: "quick-guide", title: "Quick Guides", description: "Parenting guides for mental health", path: "/parent/quick-guide", category: "Pages", keywords: ["guide", "tips", "parenting"] },
      { id: "conversation-starters", title: "Conversation Starters", description: "How to talk to your child about mental health", path: "/parent/conversation-starters", category: "Pages", keywords: ["talk", "conversation", "communication"] },
      { id: "tools", title: "Tools", description: "Helpful tools and resources for parents", path: "/parent/tools", category: "Pages", keywords: ["tools", "resources", "parent help"] },
      { id: "about", title: "About Us", description: "Learn about Little Minds and our mission", path: "/about", category: "Pages", keywords: ["about", "mission", "team", "nonprofit"] },
      { id: "faq-page", title: "FAQ", description: "Frequently asked questions about mental health", path: "/faq", category: "Pages", keywords: ["faq", "questions", "answers"] },
      { id: "donate", title: "Donate", description: "Support Little Minds with a donation", path: "/donate", category: "Pages", keywords: ["donation", "give", "support", "fund"] },
      { id: "contact", title: "Contact", description: "Get in touch with the Little Minds team", path: "/contact", category: "Pages", keywords: ["contact", "email", "message", "reach out"] },
    ];

    results.push(...staticPages);
    return results;
  }, []);

  useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setOpen((prev) => !prev);
      }
    };

    document.addEventListener("keydown", down);
    return () => document.removeEventListener("keydown", down);
  }, []);

  const rankedResults = useMemo(() => {
    const q = normalize(query);

    return searchResults
      .map((result) => ({ result, score: scoreResult(result, q) }))
      .filter((item) => item.score > 0)
      .sort((a, b) => b.score - a.score || a.result.title.localeCompare(b.result.title))
      .slice(0, 50)
      .map((item) => item.result);
  }, [searchResults, query]);

  const groupedResults = useMemo(
    () =>
      rankedResults.reduce((acc, result) => {
        if (!acc[result.category]) {
          acc[result.category] = [];
        }
        acc[result.category].push(result);
        return acc;
      }, {} as Record<string, SearchResult[]>),
    [rankedResults],
  );

  const handleSelect = (path: string) => {
    setOpen(false);
    setQuery("");
    navigate(path);
  };

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

      <CommandDialog
        open={open}
        onOpenChange={(nextOpen) => {
          setOpen(nextOpen);
          if (!nextOpen) setQuery("");
        }}
      >
        <CommandInput
          value={query}
          onValueChange={setQuery}
          placeholder="Search the whole site (pages, topics, FAQs)..."
        />
        <CommandList>
          <CommandEmpty>No results found.</CommandEmpty>
          {Object.entries(groupedResults).map(([category, results]) => (
            <CommandGroup key={category} heading={category}>
              {results.map((result) => (
                <CommandItem
                  key={result.id}
                  value={result.title}
                  onSelect={() => handleSelect(result.path)}
                >
                  <div className="flex flex-col">
                    <span className="font-medium">{result.title}</span>
                    <span className="line-clamp-1 text-xs text-muted-foreground">
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


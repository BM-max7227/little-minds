import { Header } from "@/components/Header";
import { Button } from "@/components/ui/button";
import { Link, useLocation } from "react-router-dom";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { faqData } from "@/data/faqData";

export default function FAQ() {
  const location = useLocation();
  const audience = location.pathname.includes('/parent') ? 'parent' : location.pathname.includes('/kid') ? 'kid' : 'learn';

  return (
    <div className="min-h-screen flex flex-col">
      <Header audience={audience as any} />
      
      <main className="flex-1 py-12">
        <div className="container px-4 max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold mb-8">Frequently Asked Questions</h1>
          
          <Accordion type="single" collapsible className="w-full">
            {faqData.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-left">{faq.question}</AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>

          <div className="mt-12 text-center">
            <Button asChild size="lg">
              <Link to="/">Back to Home</Link>
            </Button>
          </div>
        </div>
      </main>
    </div>
  );
}

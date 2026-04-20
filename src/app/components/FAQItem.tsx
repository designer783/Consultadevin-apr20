import { useState } from 'react';
import { Plus, Minus } from 'lucide-react';

interface FAQItemProps {
  question: string;
  answer: string;
}

export default function FAQItem({ question, answer }: FAQItemProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border border-border/60 rounded-lg overflow-hidden bg-white hover:shadow-md transition-all">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full px-5 py-4 flex items-center justify-between text-left hover:bg-muted/30 transition-colors"
      >
        <span className="font-semibold text-foreground pr-4 text-base">{question}</span>
        <div className={`flex-shrink-0 w-7 h-7 flex items-center justify-center rounded-full transition-all ${
          isOpen ? 'bg-primary text-white' : 'bg-primary/10 text-primary'
        }`}>
          {isOpen ? <Minus size={16} /> : <Plus size={16} />}
        </div>
      </button>

      {isOpen && (
        <div className="px-5 pb-4 text-muted-foreground leading-relaxed border-t border-border/40 pt-3 bg-muted/20 text-sm">
          {answer}
        </div>
      )}
    </div>
  );
}

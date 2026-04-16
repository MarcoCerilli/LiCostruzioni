"use client";

import { useState, useRef, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { MessageSquare, X, Send, Bot, HardHat, Sparkles } from "lucide-react";
import { chatWithDigitalGeometer } from "@/ai/flows/chat-with-digital-geometer";
import { cn } from "@/lib/utils";
import { useToast } from "@/hooks/use-toast";

type Message = {
  role: "user" | "model";
  content: string;
};

export function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      role: "model",
      content:
        "Buongiorno! Sono il Consulente Tecnico di L.I-Costruzioni SRL. Come posso aiutarti oggi?",
    },
  ]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const { toast } = useToast();

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;
    const userMessage = input.trim();
    setInput("");
    setMessages((prev) => [...prev, { role: "user", content: userMessage }]);
    setIsLoading(true);

    try {
      const result = await chatWithDigitalGeometer({
        message: userMessage,
        chatHistory: messages,
      });

      setMessages((prev) => [
        ...prev,
        { role: "model", content: result.response },
      ]);

      if (result.leadCollected) {
        toast({
          title: "Richiesta Ricevuta",
          description: "Ti contatteremo presto per il sopralluogo.",
        });
      }
    } catch (error) {
      setMessages((prev) => [
        ...prev,
        { role: "model", content: "Errore tecnico. Riprova più tardi." },
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-[60] flex flex-col items-end gap-3 font-sans">


      {isOpen && (
        <Card className="w-[310px] sm:w-[350px] h-[480px] mb-2 flex flex-col shadow-2xl border-amber-200 animate-in fade-in zoom-in-95 slide-in-from-bottom-4 duration-300 overflow-hidden rounded-2xl bg-white">
          <div className="bg-white border-b border-amber-100 p-4 flex justify-between items-center shrink-0">
            <div className="flex items-center gap-2">
              <div className="bg-amber-500 p-1.5 rounded-lg" aria-hidden="true">
                <Bot className="h-4 w-4 text-white" />
              </div>
              <div className="leading-tight">
                <h3 className="font-bold text-xs tracking-tight uppercase text-slate-800">
                  Consulente Tecnico
                </h3>
                <p className="text-[8px] text-amber-600 font-bold tracking-[0.2em]">
                  L.I-Costruzioni
                </p>
              </div>
            </div>
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsOpen(false)}
              className="h-7 w-7 hover:bg-slate-100 text-slate-400"
              aria-label="Chiudi chat assistenza tecnica"
            >
              <X className="h-4 w-4" aria-hidden="true" />
            </Button>
          </div>

          <div className="flex-grow overflow-y-auto p-4 space-y-4 bg-slate-50/50">
            {messages.map((msg, i) => (
              <div
                key={i}
                className={cn(
                  "flex items-start gap-2 animate-in fade-in duration-300",
                  msg.role === "user" ? "flex-row-reverse" : "flex-row",
                )}
              >
                <div
                  className={cn(
                    "p-3 text-[11px] leading-snug shadow-sm max-w-[85%] font-medium",
                    msg.role === "user"
                      ? "bg-amber-500 text-white rounded-2xl rounded-tr-none"
                      : "bg-white border border-slate-200 text-slate-700 rounded-2xl rounded-tl-none",
                  )}
                >
                  {msg.content}
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex gap-2">
                <div className="bg-amber-50 p-2 rounded-xl text-[9px] text-amber-600 font-bold uppercase tracking-widest animate-pulse">
                  Sto elaborando...
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          <div className="p-3 bg-white border-t border-slate-100">
            <div className="flex items-center gap-2 bg-slate-100 rounded-lg px-3 py-1 border border-transparent focus-within:border-amber-400 transition-all">
              <Input
                placeholder="Scrivi un messaggio..."
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && handleSend()}
                aria-label="Messaggio per il consulente tecnico"
                className="bg-transparent border-none focus-visible:ring-0 h-8 text-[11px] text-slate-700 p-0"
              />
              <Button
                size="icon"
                onClick={handleSend}
                disabled={isLoading || !input.trim()}
                aria-label="Invia messaggio"
                className="h-7 w-7 bg-amber-500 hover:bg-slate-800 transition-colors"
              >
                <Send className="h-3 w-3 text-white" aria-hidden="true" />
              </Button>
            </div>
          </div>
        </Card>
      )}

      {/* BOTTONE CHAT PRINCIPALE - Aggiunto aria-label dinamico */}
      <Button
        variant="ghost"
        onClick={() => setIsOpen(!isOpen)}
        aria-label={isOpen ? "Chiudi Geometra AI" : "Parla con Geometra AI"}
        className={cn(
          // POSIZIONAMENTO: Alziamo il Geometra a bottom-28 per lasciare WhatsApp a bottom-6
          "fixed bottom-24 right-6 z-50",
          "flex items-center justify-center p-0",
          "rounded-2xl h-16 w-16 shadow-2xl transition-all duration-500 border-2",
          isOpen
            ? "bg-slate-900 border-slate-800 rotate-90 scale-90 !hover:bg-slate-900"
            : "bg-amber-500 border-amber-400 !hover:bg-amber-500"
        )}
      >
        {isOpen ? (
          <X className="h-7 w-7 text-white" aria-hidden="true" />
        ) : (
          <div className="relative h-7 w-7 flex items-center justify-center">
            {/* Icona Sparkles: Linguaggio universale per l'AI */}
            <Sparkles className="h-7 w-7 text-slate-900" aria-hidden="true" />

            {/* Badge LIVE: posizionato strategicamente */}
            <span className="absolute -top-5 -right-5 bg-slate-900 text-white text-[8px] font-black px-1.5 py-0.5 rounded-md border border-white/20 shadow-lg">
              AI LIVE
            </span>

            {/* Effetto radar */}
            <span className="absolute inset-0 rounded-full bg-white animate-ping opacity-30" />
          </div>
        )}
      </Button>
      {/* BOTTONE WHATSAPP - Aggiunto aria-label per accessibilità */}
      <a
        href="https://wa.me/393248643886"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Contattaci su WhatsApp"
        className="flex items-center justify-center rounded-full h-14 w-14 bg-[#25D366] shadow-lg hover:scale-110 transition-all duration-300"
      >
        <svg
          viewBox="0 0 24 24"
          className="h-8 w-8 text-white fill-current"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
        >
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.72.94 3.659 1.437 5.63 1.438h.004c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
        </svg>
      </a>
    </div>
  );
}
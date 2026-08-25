"use client";

import { useState, useRef, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { X, Send, Bot, Sparkles } from "lucide-react";
import { WhatsAppIcon } from "@/components/ui/whatsapp-icon";
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
        "Buongiorno! Sono il Consulente Tecnico di L.I-Costruzioni SRL. Come posso aiutarti oggi per il tuo progetto?",
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
    if (isOpen) {
      scrollToBottom();
    }
  }, [messages, isOpen]);

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
          description: "Ti contatteremo presto per il sopralluogo tecnico.",
        });
      }
    } catch {
      setMessages((prev) => [
        ...prev,
        { role: "model", content: "Si è verificato un errore tecnico. Riprova tra poco." },
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="fixed bottom-20 sm:bottom-6 right-4 sm:right-6 z-[70] flex flex-col items-end gap-2.5 font-sans pointer-events-none">
      {/* FINESTRA DIALOGO CHAT */}
      {isOpen && (
        <Card className="pointer-events-auto w-[310px] sm:w-[360px] h-[460px] flex flex-col shadow-2xl border border-amber-200/80 animate-in fade-in zoom-in-95 slide-in-from-bottom-4 duration-300 overflow-hidden rounded-2xl bg-white mb-1">
          {/* Header Chat */}
          <div className="bg-slate-950 p-3.5 flex justify-between items-center shrink-0 border-b border-amber-500/20 text-white">
            <div className="flex items-center gap-2.5">
              <div className="bg-amber-500 p-1.5 rounded-lg text-slate-950" aria-hidden="true">
                <Bot className="h-4 w-4" />
              </div>
              <div className="leading-tight">
                <h3 className="font-bold text-xs tracking-tight uppercase text-white flex items-center gap-1.5">
                  Consulente Tecnico AI
                </h3>
                <p className="text-[8px] text-amber-400 font-bold tracking-[0.2em] uppercase">
                  L.I-Costruzioni SRL
                </p>
              </div>
            </div>
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsOpen(false)}
              className="h-7 w-7 hover:bg-white/10 text-slate-300 hover:text-white rounded-lg"
              aria-label="Chiudi chat assistenza tecnica"
            >
              <X className="h-4 w-4" aria-hidden="true" />
            </Button>
          </div>

          {/* Area Messaggi */}
          <div className="flex-grow overflow-y-auto p-4 space-y-3 bg-slate-50/70">
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
                    "p-3 text-[11px] leading-relaxed shadow-sm max-w-[85%] font-medium",
                    msg.role === "user"
                      ? "bg-amber-500 text-slate-950 font-semibold rounded-2xl rounded-tr-none"
                      : "bg-white border border-slate-200 text-slate-800 rounded-2xl rounded-tl-none",
                  )}
                >
                  {msg.content}
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex gap-2">
                <div className="bg-amber-500/10 border border-amber-500/20 p-2 rounded-xl text-[9px] text-amber-700 font-bold uppercase tracking-widest animate-pulse flex items-center gap-1.5">
                  <Sparkles size={11} className="text-amber-500" />
                  Sto elaborando la risposta tecnica...
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Area Input (Senza alcun bottone sovrapposto) */}
          <div className="p-3 bg-white border-t border-slate-100 shrink-0">
            <div className="flex items-center gap-2 bg-slate-100 rounded-xl px-3 py-1.5 border border-slate-200/80 focus-within:border-amber-500 focus-within:bg-white transition-all">
              <Input
                placeholder="Scrivi una domanda o richiedi info..."
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && handleSend()}
                aria-label="Messaggio per il consulente tecnico"
                className="bg-transparent border-none focus-visible:ring-0 h-8 text-xs text-slate-800 p-0 placeholder:text-slate-400"
              />
              <Button
                size="icon"
                onClick={handleSend}
                disabled={isLoading || !input.trim()}
                aria-label="Invia messaggio"
                className="h-7 w-7 bg-amber-500 hover:bg-amber-400 text-slate-950 rounded-lg transition-colors shrink-0"
              >
                <Send className="h-3 w-3" aria-hidden="true" />
              </Button>
            </div>
          </div>
        </Card>
      )}

      {/* PULSANTI FLOTTANTI DI AZIONE */}
      <div className="flex items-center gap-2.5 pointer-events-auto">
        {/* BOTTONE GEOMETRA AI (Visibile solo quando la finestra è chiusa) */}
        {!isOpen && (
          <button
            type="button"
            onClick={() => setIsOpen(true)}
            aria-label="Parla con il Consulente Tecnico AI"
            className="flex items-center gap-2 px-4 h-12 rounded-full bg-slate-950 text-white border-2 border-amber-500 shadow-xl hover:scale-105 transition-all duration-300 group"
          >
            <div className="relative flex items-center justify-center">
              <Sparkles className="h-5 w-5 text-amber-400 group-hover:rotate-12 transition-transform" />
              <span className="absolute -top-1 -right-1 h-2 w-2 rounded-full bg-amber-400 animate-ping" />
            </div>
            <span className="text-xs font-bold uppercase tracking-wider hidden sm:inline">
              Assistente AI
            </span>
          </button>
        )}

        {/* BOTTONE WHATSAPP */}
        <a
          href="https://wa.me/393248643886"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Contattaci su WhatsApp"
          className="flex items-center justify-center rounded-full h-12 w-12 bg-[#25D366] text-white shadow-xl hover:scale-110 transition-all duration-300"
        >
          <WhatsAppIcon className="h-6 w-6 fill-current" />
        </a>
      </div>
    </div>
  );
}
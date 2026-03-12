"use client";

import { useState, useRef, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { MessageSquare, X, Send, User, Bot, Hammer } from 'lucide-react';
import { chatWithDigitalGeometer } from '@/ai/flows/chat-with-digital-geometer';
import { cn } from '@/lib/utils';
import { useToast } from '@/hooks/use-toast';

type Message = {
  role: 'user' | 'model';
  content: string;
};

export function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    { role: 'model', content: 'Buongiorno! Sono il Geometra Digitale di LI-COSTRUZIONI. Come posso aiutarti oggi con i tuoi progetti tecnici?' }
  ]);
  const [input, setInput] = useState('');
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
    setInput('');
    setMessages(prev => [...prev, { role: 'user', content: userMessage }]);
    setIsLoading(true);

    try {
      const result = await chatWithDigitalGeometer({
        message: userMessage,
        chatHistory: messages
      });

      setMessages(prev => [...prev, { role: 'model', content: result.response }]);
      
      if (result.leadCollected) {
        toast({
          title: "Lead Registrato",
          description: "Abbiamo ricevuto i tuoi dati. Ti contatteremo presto per il sopralluogo.",
        });
      }
    } catch (error) {
      console.error(error);
      setMessages(prev => [...prev, { role: 'model', content: "Mi dispiace, si è verificato un errore tecnico. Riprova più tardi o contattaci telefonicamente." }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-[60] flex flex-col items-end">
      {isOpen && (
        <Card className="w-[350px] sm:w-[400px] h-[500px] mb-4 flex flex-col shadow-2xl border-primary/20 animate-in fade-in slide-in-from-bottom-4 duration-300 overflow-hidden">
          <div className="bg-primary p-4 text-primary-foreground flex justify-between items-center shrink-0">
            <div className="flex items-center gap-2">
              <div className="bg-white/20 p-1.5 rounded-lg">
                <Hammer className="h-5 w-5" />
              </div>
              <div>
                <h3 className="font-bold text-sm">Geometra Digitale</h3>
                <p className="text-[10px] opacity-80 uppercase tracking-widest font-bold">AI Assistant</p>
              </div>
            </div>
            <Button variant="ghost" size="icon" onClick={() => setIsOpen(false)} className="hover:bg-white/20 text-white">
              <X className="h-4 w-4" />
            </Button>
          </div>

          <div className="flex-grow overflow-y-auto p-4 space-y-4 bg-background">
            {messages.map((msg, i) => (
              <div key={i} className={cn(
                "flex items-start gap-2",
                msg.role === 'user' ? "flex-row-reverse" : ""
              )}>
                <div className={cn(
                  "p-2 rounded-lg shrink-0",
                  msg.role === 'user' ? "bg-accent" : "bg-primary/20"
                )}>
                  {msg.role === 'user' ? <User className="h-4 w-4" /> : <Bot className="h-4 w-4 text-primary" />}
                </div>
                <div className={cn(
                  "p-3 rounded-2xl text-sm max-w-[80%]",
                  msg.role === 'user' ? "bg-accent/10 border-r-4 border-accent text-right" : "bg-card border-l-4 border-primary"
                )}>
                  {msg.content}
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex items-center gap-2">
                <div className="bg-primary/20 p-2 rounded-lg"><Bot className="h-4 w-4 text-primary animate-pulse" /></div>
                <div className="bg-card p-3 rounded-2xl text-sm italic opacity-50">Il Geometra sta elaborando...</div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          <div className="p-4 border-t bg-card/50">
            <div className="flex gap-2">
              <Input
                placeholder="Scrivi qui la tua domanda tecnica..."
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                className="bg-background border-border"
              />
              <Button size="icon" onClick={handleSend} disabled={isLoading || !input.trim()}>
                <Send className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </Card>
      )}

      <Button
        size="lg"
        onClick={() => setIsOpen(!isOpen)}
        className={cn(
          "rounded-full h-14 w-14 shadow-2xl transition-all duration-300",
          isOpen ? "bg-accent rotate-90" : "bg-primary"
        )}
      >
        {isOpen ? <X /> : <MessageSquare className="h-6 w-6" />}
      </Button>
    </div>
  );
}

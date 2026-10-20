"use client";

import { useState } from "react";
import { Send, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Input, Textarea } from "@/components/ui/Input";
import { Vehicle } from "@/types";

interface LeadFormProps {
  vehicle?: Vehicle;
  onSuccess?: () => void;
  title?: string;
  subtitle?: string;
}

export function LeadForm({ vehicle, onSuccess, title, subtitle }: LeadFormProps) {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState(
    vehicle
      ? `Olá, tenho interesse no ${vehicle.brand} ${vehicle.model} (${vehicle.yearModel}) anunciado por R$ ${Number(vehicle.price).toLocaleString("pt-BR")}. Poderiam me enviar mais detalhes e o laudo cautelar?`
      : "Olá! Gostaria de consultar oportunidades de repasse e veículos em estoque na Velloce."
  );
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !phone.trim()) {
      setError("Por favor, preencha nome e telefone.");
      return;
    }

    setLoading(true);
    setError(null);

    try {
      const res = await fetch("/api/leads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name,
          phone,
          email: email.trim() || undefined,
          message,
          vehicleId: vehicle?.id,
          source: vehicle ? `VEICULO_${vehicle.slug}` : "LANDING_PAGE",
        }),
      });

      const data = await res.json();
      if (!res.ok) {
        throw new Error(data.error || "Erro ao enviar mensagem.");
      }

      setSubmitted(true);
      if (data.data?.whatsappUrl) {
        // Open WhatsApp in new tab for direct frictionless contact
        window.open(data.data.whatsappUrl, "_blank");
      }
      onSuccess?.();
    } catch (err: unknown) {
      const msg = err instanceof Error ? err.message : "Falha ao enviar. Tente novamente via WhatsApp.";
      setError(msg);
    } finally {
      setLoading(false);
    }
  };

  if (submitted) {
    return (
      <div className="p-8 text-center bg-bg-card border border-border-subtle rounded-2xl">
        <div className="w-16 h-16 rounded-full bg-tricolore-green/20 text-tricolore-green mx-auto flex items-center justify-center mb-4">
          <CheckCircle2 className="w-8 h-8" />
        </div>
        <h3 className="font-display font-bold text-2xl text-text-primary mb-2">
          Mensagem Enviada!
        </h3>
        <p className="text-text-secondary text-sm max-w-sm mx-auto mb-6">
          Nossa equipe de consultoria entrará em contato em instantes com laudo pericial e condições exclusivas.
        </p>
        <Button
          variant="outline"
          onClick={() => {
            setSubmitted(false);
            setName("");
            setPhone("");
            setEmail("");
          }}
        >
          Enviar Outra Mensagem
        </Button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      {title && (
        <div className="mb-4">
          <h3 className="font-display font-bold text-xl text-text-primary">{title}</h3>
          {subtitle && <p className="text-text-secondary text-sm mt-1">{subtitle}</p>}
        </div>
      )}

      {error && (
        <div className="p-3 bg-tricolore-red/10 border border-tricolore-red/30 rounded-lg text-tricolore-red text-sm">
          {error}
        </div>
      )}

      <Input
        label="Seu Nome Completo *"
        placeholder="Ex: Roberto Silva"
        autoComplete="name"
        enterKeyHint="next"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
      />

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <Input
          label="WhatsApp / Telefone *"
          type="tel"
          inputMode="tel"
          autoComplete="tel"
          enterKeyHint="next"
          placeholder="(00) 00000-0000"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          required
        />
        <Input
          label="E-mail (opcional)"
          type="email"
          inputMode="email"
          autoComplete="email"
          autoCapitalize="none"
          autoCorrect="off"
          enterKeyHint="next"
          placeholder="roberto@email.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>

      <Textarea
        label="Mensagem *"
        rows={3}
        enterKeyHint="send"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        required
      />

      <Button
        type="submit"
        variant="primary"
        size="lg"
        className="w-full justify-center group"
        isLoading={loading}
      >
        <span>Falar com Consultor Agora</span>
        <Send className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
      </Button>

      <p className="text-center text-xs text-text-muted mt-2">
        🔒 Seus dados estão seguros. Atendimento direto e sem burocracia via WhatsApp.
      </p>
    </form>
  );
}

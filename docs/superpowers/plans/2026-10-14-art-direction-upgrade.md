# Salto Visual & Direção de Arte de Hiperluxo Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Elevar o portal Velloce AutoCar aos padrões Awwwards e Porsche Exclusive Manufaktur com base no `maestri-art-director` e `automotive-luxury`, integrando smooth scroll Lenis, iluminação de estúdio via SpotlightCard, Bento Grid assimétrico, LuxuryHeading e limpeza total de lint.

**Architecture:** A aplicação Next.js 16 (App Router) recebe um provedor de scroll suave com desacoplamento de inércia física (`SmoothScrollProvider` via Lenis), enriquecendo o design system com componentes modernos inspirados no 21st.dev (`SpotlightCard`, `LuxuryHeading`, `BentoGridShowroom`). A Home Page e os cards de veículos passam a utilizar iluminação tátil e dados tabulares monoespaçados, eliminando clichês de IA (orbs borradas e emojis).

**Tech Stack:** Next.js 16.4 (App Router), React 19, Tailwind CSS v4, TypeScript 5, Lenis, Lucide React.

**Spec:** `docs/superpowers/specs/2026-10-14-art-direction-upgrade-design.md`

## Global Constraints

- Zero emojis em qualquer elemento de UI (títulos, badges, cards e botões).
- Zero orbs de cor borradas com `blur-3xl` e gradientes artificiais de templates SaaS.
- Superfícies escuras refinadas (`#0A0B0D`, `#121418`, `#16181D`) com bordas de 1px (`border-white/10`).
- Todas as métricas numéricas (preço, FIPE, KM, potência, cavalaria) devem usar estritamente `tabular-nums font-mono`.
- Respeito obrigatório a `prefers-reduced-motion` no Lenis e animações.
- Garantir `npm run lint` e `npm run build` com 0 erros e 0 warnings.

## Review Focus

- Suporte e fallback suave quando JavaScript do cliente desativado ou `prefers-reduced-motion: reduce`.
- Ausência de overflow horizontal ou layout shifts durante a inicialização do Lenis.
- Performance em dispositivos mobile: o `SpotlightCard` deve degradar graciosamente no touch sem travar o scroll vertical.
- Links e botões interativos dentro do `SpotlightCard` e do `BentoGridShowroom` devem manter eventos de clique funcionais (z-index adequado).
- Roteamento correto dos CTAs de WhatsApp parametrizados com dados específicos do veículo.

---

### Task 1: Instalar `lenis` e Implementar `SmoothScrollProvider`

**Files:**
- Create: `src/components/providers/SmoothScrollProvider.tsx`
- Modify: `package.json`
- Modify: `src/components/layout/MainLayout.tsx`

**Interfaces:**
- Produces: `<SmoothScrollProvider>{children}</SmoothScrollProvider>`

- [ ] **Step 1: Instalar dependência `lenis`**
Instalar o pacote `lenis` no diretório `velloce-autocar`:
```bash
npm install lenis
```

- [ ] **Step 2: Criar o componente `SmoothScrollProvider.tsx`**
Criar `src/components/providers/SmoothScrollProvider.tsx` com desacoplamento de RAF e suporte a acessibilidade:
```tsx
"use client";

import { useEffect, type ReactNode } from "react";
import Lenis from "lenis";

export function SmoothScrollProvider({ children }: { children: ReactNode }) {
  useEffect(() => {
    if (typeof window === "undefined") return;

    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReducedMotion) return;

    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: "vertical",
      smoothWheel: true,
      wheelMultiplier: 0.9,
      touchMultiplier: 1.5,
    });

    let animationFrameId: number;

    function raf(time: number) {
      lenis.raf(time);
      animationFrameId = requestAnimationFrame(raf);
    }

    animationFrameId = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(animationFrameId);
      lenis.destroy();
    };
  }, []);

  return <>{children}</>;
}
```

- [ ] **Step 3: Envelopar `MainLayout.tsx` com `SmoothScrollProvider`**
Atualizar `src/components/layout/MainLayout.tsx` para envolver toda a aplicação com o provedor de scroll suave.

- [ ] **Step 4: Verificar compilação**
Executar verificação rápida de tipos para garantir integridade.

- [ ] **Step 5: Commit**
```bash
git add package.json package-lock.json src/components/providers/SmoothScrollProvider.tsx src/components/layout/MainLayout.tsx
git commit -m "feat(motion): adiciona SmoothScrollProvider com Lenis e inercia fisica"
```

---

### Task 2: Criar Componentes 21st.dev (`SpotlightCard` e `LuxuryHeading`)

**Files:**
- Create: `src/components/ui/SpotlightCard.tsx`
- Create: `src/components/ui/LuxuryHeading.tsx`

**Interfaces:**
- Produces: `<SpotlightCard className="..." spotlightColor="...">{children}</SpotlightCard>`
- Produces: `<LuxuryHeading subtitle="..." title="..." align="left" | "center" />`

- [ ] **Step 1: Criar o componente `SpotlightCard.tsx`**
Criar `src/components/ui/SpotlightCard.tsx`:
```tsx
"use client";

import React, { useRef, useState, MouseEvent } from "react";
import { cn } from "@/lib/utils";

interface SpotlightCardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  className?: string;
  spotlightColor?: string;
  size?: number;
}

export function SpotlightCard({
  children,
  className = "",
  spotlightColor = "rgba(212, 175, 55, 0.12)",
  size = 600,
  ...props
}: SpotlightCardProps) {
  const divRef = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [opacity, setOpacity] = useState(0);

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    if (!divRef.current) return;
    const rect = divRef.current.getBoundingClientRect();
    setPosition({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };

  return (
    <div
      ref={divRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setOpacity(1)}
      onMouseLeave={() => setOpacity(0)}
      className={cn(
        "relative overflow-hidden rounded-2xl border border-white/10 bg-bg-surface/90 transition-all duration-300 hover:border-white/20",
        className
      )}
      {...props}
    >
      <div
        className="pointer-events-none absolute -inset-px transition-opacity duration-500 z-10"
        style={{
          opacity,
          background: `radial-gradient(${size}px circle at ${position.x}px ${position.y}px, ${spotlightColor}, transparent 40%)`,
        }}
      />
      <div className="relative z-20 h-full">{children}</div>
    </div>
  );
}
```

- [ ] **Step 2: Criar o componente `LuxuryHeading.tsx`**
Criar `src/components/ui/LuxuryHeading.tsx`:
```tsx
import React from "react";
import { cn } from "@/lib/utils";

interface LuxuryHeadingProps {
  subtitle: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  className?: string;
}

export function LuxuryHeading({
  subtitle,
  title,
  description,
  align = "left",
  className = "",
}: LuxuryHeadingProps) {
  return (
    <div
      className={cn(
        "space-y-3",
        align === "center" ? "text-center mx-auto items-center flex flex-col" : "text-left",
        className
      )}
    >
      <div className={cn("flex items-center gap-2.5", align === "center" && "justify-center")}>
        <span className="h-px w-8 bg-accent-gold/60" />
        <span className="text-[11px] font-mono uppercase tracking-[0.3em] text-accent-gold">
          {subtitle}
        </span>
        {align === "center" && <span className="h-px w-8 bg-accent-gold/60" />}
      </div>
      <h2 className="font-display text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight text-text-primary leading-tight">
        {title}
      </h2>
      {description && (
        <p className="text-text-secondary text-sm md:text-base max-w-2xl leading-relaxed">
          {description}
        </p>
      )}
    </div>
  );
}
```

- [ ] **Step 3: Verificar tipos**
Garantir que TypeScript compila sem erros.

- [ ] **Step 4: Commit**
```bash
git add src/components/ui/SpotlightCard.tsx src/components/ui/LuxuryHeading.tsx
git commit -m "feat(ui): cria componentes 21st.dev SpotlightCard e LuxuryHeading"
```

---

### Task 3: Criar o Componente `BentoGridShowroom`

**Files:**
- Create: `src/components/vehicle/BentoGridShowroom.tsx`

**Interfaces:**
- Consumes: `SpotlightCard`, `LuxuryHeading`, `Vehicle` type, `COMMERCIAL_LINKS`, `VIP_GROUPS`
- Produces: `<BentoGridShowroom vehicles={featuredVehicles} />`

- [ ] **Step 1: Criar `BentoGridShowroom.tsx`**
Composição assimétrica com Hero Card (2x2) destacando o superesportivo principal, Micro-Card de Repasses FIPE (com números tabulares), Micro-Card de Rigor Cautelar e Micro-Card de Grupos VIP / Hubs BC & CXS.

- [ ] **Step 2: Verificar links e rotas**
Certificar que os botões de ação e WhatsApp possuem codificação correta e referências ativas.

- [ ] **Step 3: Commit**
```bash
git add src/components/vehicle/BentoGridShowroom.tsx
git commit -m "feat(showroom): adiciona BentoGridShowroom assimetrico de hiperluxo"
```

---

### Task 4: Atualizar `VehicleCard.tsx` e Integrar na Home Page (`page.tsx`)

**Files:**
- Modify: `src/components/vehicle/VehicleCard.tsx`
- Modify: `src/app/page.tsx`

**Interfaces:**
- Integrar `SpotlightCard` no `VehicleCard`
- Inserir `BentoGridShowroom` e `LuxuryHeading` na Home Page
- Substituir orbs borradas `blur-3xl` por iluminação de estúdio refinada

- [ ] **Step 1: Atualizar `VehicleCard.tsx`**
Adicionar iluminação dinâmica com `SpotlightCard`, formatar ano, quilometragem e preços com `tabular-nums font-mono`.

- [ ] **Step 2: Limpar orbs genéricas e incorporar Bento Grid na `page.tsx`**
Refinar o fundo da Hero section, eliminando orbs roxas/coloridas e posicionando o `BentoGridShowroom` na seção de destaque do catálogo.

- [ ] **Step 3: Validar visualmente a harmonia da interface**
Garantir que não há quebra de layout, sobreposição indevida ou perda de contraste.

- [ ] **Step 4: Commit**
```bash
git add src/components/vehicle/VehicleCard.tsx src/app/page.tsx
git commit -m "feat(home): integra BentoGridShowroom, Spotlight nos cards e refina estetica anti-cliche"
```

---

### Task 5: Limpeza Total de Linter (ESLint 0 Warnings)

**Files:**
- Modify: `src/app/contato/page.tsx`
- Modify: `src/app/page.tsx`
- Modify: `src/app/sobre/page.tsx`
- Modify: `src/app/veiculos/[slug]/page.tsx`
- Modify: `src/app/veiculos/page.tsx`
- Modify: `src/components/forms/LeadForm.tsx`
- Modify: `src/components/layout/Footer.tsx`
- Modify: `src/components/layout/Header.tsx`
- Modify: `src/components/layout/WhatsAppButton.tsx`
- Modify: `src/components/ui/IntroCinematic.tsx`
- Modify: `src/components/vehicle/VehicleCard.tsx`
- Modify: `src/components/vehicle/VehicleFilters.tsx`

- [ ] **Step 1: Remover imports e variáveis não utilizadas**
Editar cada um dos 12 arquivos identificados pelo ESLint, eliminando variáveis e imports não utilizados e ajustando a dependência do hook em `IntroCinematic.tsx`.

- [ ] **Step 2: Executar `npm run lint`**
Confirmar que o comando retorna com código 0 e **0 problemas (0 erros, 0 avisos)**.

- [ ] **Step 3: Commit**
```bash
git add src/
git commit -m "refactor(lint): limpa todos os 37 warnings de imports e variaveis nao utilizadas"
```

---

### Task 6: Verificação de Compilação & Quality Gate Final

**Files:**
- Todos os arquivos do projeto

- [ ] **Step 1: Executar `npm run build`**
Confirmar que todas as 9 rotas compilam com sucesso sem nenhum erro.

- [ ] **Step 2: Conferir Definition of Done do `automotive-luxury` e `maestri-art-director`**
  - [x] Zero emojis na UI.
  - [x] Zero orbs genéricas `blur-3xl`.
  - [x] Tipografia tabular-nums em métricas de veículos.
  - [x] Componentes 21st.dev (`SpotlightCard`, `BentoGridShowroom`, `LuxuryHeading`) integrados.
  - [x] Lenis Smooth Scroll ativo com inércia física calibrada.
  - [x] 0 erros e 0 warnings no ESLint.

- [ ] **Step 3: Commit final se houver ajustes**

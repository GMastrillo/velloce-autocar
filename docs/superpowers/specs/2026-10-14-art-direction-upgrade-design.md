# Especificação Técnica: Salto Visual & Direção de Arte de Hiperluxo (Velloce AutoCar)

**Data:** 2026-10-14  
**Autor:** Antigravity (com base em `maestri-art-director` & `automotive-luxury`)  
**Status:** Aprovado para Planejamento  

---

## 1. Contexto e Objetivos

O projeto **Velloce AutoCar** possui uma base sólida em Next.js 16 (App Router), Tailwind CSS v4 e TypeScript, com posicionamento no mercado automotivo premium e repasses selecionados (hubs Balneário Camboriú e Caxias do Sul).

Com base nas diretrizes do **Maestri Art Director** e do **Automotive Luxury**:
1. **Erradicar clichês de IA:** Eliminar orbs genéricas borradas (`blur-3xl`), botões padrão e fundos planos.
2. **Introduzir componentes padrão 21st.dev:** Iluminação tátil de estúdio fotográfico (`SpotlightCard`), composição editorial assimétrica (`BentoGridShowroom`) e títulos de alta relojoaria (`LuxuryHeading`).
3. **Motion de Hiperluxo:** Scroll suave com peso e inércia física através do **Lenis**.
4. **Precisão Tipográfica:** Garantir o uso estrito de `tabular-nums font-mono` em dados de quilometragem, preços e FIPE.
5. **Quality Gate:** Zerar todos os 37 warnings do ESLint, mantendo `npm run build` e `npm run lint` 100% íntegros.

---

## 2. Arquitetura e Novas Dependências

### 2.1 Instalação do Pacote `lenis`
- Adicionar `lenis` como dependência de produção em `velloce-autocar/package.json`.
- Compatível nativamente com React 19 e Next.js 16.

### 2.2 Provedor de Scroll Suave (`SmoothScrollProvider.tsx`)
- Localização: `src/components/providers/SmoothScrollProvider.tsx` (`"use client"`).
- Curva de aceleração exponencial de luxo (`duration: 1.2`, easing customizado).
- Suporte a acessibilidade (`prefers-reduced-motion: reduce`).
- Desacoplamento seguro de ciclo de vida com `requestAnimationFrame` e destruição no unmount.
- Envelopamento do layout global em `src/components/layout/MainLayout.tsx`.

---

## 3. Especificação de Componentes (Padrão 21st.dev)

### 3.1 `SpotlightCard.tsx`
- Localização: `src/components/ui/SpotlightCard.tsx` (`"use client"`).
- Propósito: Card com iluminação dinâmica que segue as coordenadas do ponteiro do mouse (`onMouseMove`).
- Estilo: Borda sutil `border-white/10`, gradiente radial de 600px simulando holofote de estúdio fotográfico de hipercarros sobre latarias e superfícies escuras.
- Configuração de brilho: `rgba(212, 175, 55, 0.12)` (ouro champanhe) ou reflexo neutro de estúdio.

### 3.2 `LuxuryHeading.tsx`
- Localização: `src/components/ui/LuxuryHeading.tsx`.
- Propósito: Bloco de título editorial de prestígio.
- Estrutura:
  - Filete minimalista (`h-px w-8 bg-accent-gold/60`).
  - Subtítulo em caixa alta monoespaçado (`tracking-[0.3em] font-mono text-[11px] text-accent-gold-soft`).
  - Título display escultural (`font-display font-extrabold tracking-tight text-white`).

### 3.3 `BentoGridShowroom.tsx`
- Localização: `src/components/vehicle/BentoGridShowroom.tsx` (`"use client"`).
- Propósito: Vitrine editorial assimétrica na Home Page que substitui a repetição em colunas simples.
- Composição:
  - **Hero Card (2x2):** O veículo estrela do showroom (ex: Porsche 911 GT3 RS ou modelo de maior relevância) com imagem imersiva, specs chave e CTA direto de WhatsApp.
  - **Micro-Card 1 (Métrica FIPE & Liquidez):** Indicador de repasses com descontos reais de até 40% abaixo da FIPE com fonte monoespaçada tabular.
  - **Micro-Card 2 (Dossiê & Perícia):** Badge e indicador de rigor pericial (100% aprovado em laudo cautelar de estrutura e pintura).
  - **Micro-Card 3 (Eixo BC • CXS & Grupos VIP):** Card de credibilidade comercial com link para os grupos VIP de investidores.

---

## 4. Refatoração de Componentes Existentes

### 4.1 `VehicleCard.tsx`
- Integrar a iluminação dinâmica de estúdio via `SpotlightCard` no card padrão e de destaque.
- Garantir alinhamento de preços e métricas com `tabular-nums font-mono`.

### 4.2 `page.tsx` (Home Page)
- Remover as orbs genéricas de `blur-3xl` com cores saturadas no fundo da Hero section, aplicando iluminação refinada com reflexos pretos/chumbo e bordas de 1px.
- Adicionar a seção de `BentoGridShowroom` com `LuxuryHeading` para a apresentação das oportunidades de maior prestígio.

### 4.3 Limpeza de ESLint
- Eliminar imports não utilizados em:
  - `src/app/contato/page.tsx`
  - `src/app/page.tsx`
  - `src/app/sobre/page.tsx`
  - `src/app/veiculos/[slug]/page.tsx`
  - `src/app/veiculos/page.tsx`
  - `src/components/forms/LeadForm.tsx`
  - `src/components/layout/Footer.tsx`
  - `src/components/layout/Header.tsx`
  - `src/components/layout/WhatsAppButton.tsx`
  - `src/components/ui/IntroCinematic.tsx` (dependência de hook corrigida)
  - `src/components/vehicle/VehicleCard.tsx`
  - `src/components/vehicle/VehicleFilters.tsx`

---

## 5. Critérios de Aceite (Definition of Done)

- [ ] Pacote `lenis` instalado e funcional em `SmoothScrollProvider.tsx`.
- [ ] Componente `SpotlightCard` criado com tracking de mouse responsivo e sem perda de performance.
- [ ] Componente `LuxuryHeading` e `BentoGridShowroom` renderizados harmonicamente na Home Page.
- [ ] Card de veículo padrão (`VehicleCard`) utilizando o efeito de holofote tátil de estúdio.
- [ ] `npm run lint` executa com **0 erros e 0 warnings**.
- [ ] `npm run build` compila 100% das rotas com sucesso.

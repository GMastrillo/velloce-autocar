export interface VipGroup {
  id: string;
  name: string;
  description: string;
  range: string;
  inviteUrl: string;
  category: "LEVE" | "PREMIUM" | "MOTOS" | "PESADA" | "NAUTICA" | "AVIACAO";
  tag: string;
}

export const COMMERCIAL_LINKS = {
  // Atendimento Direto
  comprarCarroUrl: "https://wa.me/message/V6G4XTOKH7DJG1", // Marcos - o Neni
  comprarCarroLabel: "Comprar Veículo (Marcos - o Neni)",
  venderCarroUrl: "https://wa.me/message/5MUGZIEHYNKSJ1", // Central de Compras
  venderCarroLabel: "Vender Meu Veículo (Central de Compras)",
  
  // Instagram
  instagramVelloce: "https://www.instagram.com/veloceimportsofc/",
  instagramNeni: "https://www.instagram.com/omarcospaniz/",
  instagramVelloceAutoCar: "https://www.instagram.com/velloceautocar/",

  // Telefones / Contato
  whatsappDisplay: "+55 (54) 99682-7149",
  emailDisplay: "velloceautocar@gmail.com",
  cidades: "Balneário Camboriú (SC) • Caxias do Sul (RS)",
};

export const VIP_GROUPS: VipGroup[] = [
  {
    id: "grupo-linha-leve",
    name: "Linha Leve (Até R$ 180k)",
    description: "Carros populares, hatches, sedans e SUVs selecionados de concessionárias parceiras.",
    range: "Até R$ 180.000",
    inviteUrl: "https://chat.whatsapp.com/HLF95JSQOSBE7tYARM6pA7",
    category: "LEVE",
    tag: "Até 40% abaixo FIPE",
  },
  {
    id: "grupo-linha-premium",
    name: "Linha Premium (+R$ 180k)",
    description: "Superesportivos, importados de luxo, blindados e modelos de alta performance.",
    range: "Acima de R$ 180.000",
    inviteUrl: "https://chat.whatsapp.com/FaDzCJ2bOvn2z75aq3dGyK",
    category: "PREMIUM",
    tag: "Exclusivos & Blindados",
  },
  {
    id: "grupo-linha-motos",
    name: "Linha de Motos",
    description: "Motos de alta cilindrada, big trails, esportivas e seminovas de procedência.",
    range: "Todas as Faixas",
    inviteUrl: "https://chat.whatsapp.com/BDvpeRSPZ0N8GxSaItNojF",
    category: "MOTOS",
    tag: "Alta Cilindrada & Urbanas",
  },
  {
    id: "grupo-linha-pesada",
    name: "Linha Pesada",
    description: "Caminhões, cavalos mecânicos, vans e veículos comerciais de carga.",
    range: "Caminhões & Frotas",
    inviteUrl: "https://chat.whatsapp.com/KJ8ZMOGRukhBIPUHE8u9MU",
    category: "PESADA",
    tag: "Utilitários & Carga",
  },
  {
    id: "grupo-linha-nautica",
    name: "Linha Náutica",
    description: "Lanchas, barcos de passeio, iates e jet skis revisados e periciados.",
    range: "Embarcações & Jets",
    inviteUrl: "https://chat.whatsapp.com/K99To102GKpFTJo5VEjTo8",
    category: "NAUTICA",
    tag: "Lazer Marítimo",
  },
  {
    id: "grupo-linha-aviacao",
    name: "Linha Aviação",
    description: "Helicópteros executivos, monomotores e jatos com plano de manutenção em dia.",
    range: "Helicópteros & Jatos",
    inviteUrl: "https://chat.whatsapp.com/C0w12BfaFBIIDmKFuSHI5?mode=hqctcli",
    category: "AVIACAO",
    tag: "Executiva & Asas Rotativas",
  },
];

import { Vehicle, VehicleFilters, PaginatedResult } from "@/types";

export const MOCK_VEHICLES: Vehicle[] = [
  {
    id: "veh-porsche-911-gts",
    slug: "porsche-911-carrera-gts-2023",
    title: "Porsche 911 Carrera GTS Coupe (992)",
    brand: "Porsche",
    model: "911 Carrera GTS",
    year: 2023,
    yearModel: 2023,
    price: 1180000,
    fipePrice: 1250000,
    mileage: 4800,
    fuelType: "GASOLINE",
    transmission: "PDK",
    color: "Giz (Crayon)",
    doors: 2,
    description: "Configuração impecável com cor especial Giz (Crayon). Pacote interior GTS em Race-Tex com costuras contrastantes em Vermelho Carmim. Sistema de elevação do eixo dianteiro (Front Lift), Pacote Sport Chrono, escapamento esportivo com ponteiras em preto brilhante e faróis em LED Matrix com PDLS Plus. Veículo com proteção PPF frontal e laudo cautelar Dekra 100% aprovado sem retoques.",
    images: [
      "https://images.unsplash.com/photo-1614162692292-7ac56d7f7f1e?auto=format&fit=crop&w=1600&q=80",
      "https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=1600&q=80",
      "https://images.unsplash.com/photo-1580273916550-e323be2ae537?auto=format&fit=crop&w=1600&q=80"
    ],
    features: [
      "Pacote GTS Interior",
      "Front Lift Eixo Dianteiro",
      "Sport Chrono Package",
      "Escapamento Esportivo Ativo",
      "Faróis Matrix LED PDLS+",
      "PPF Frontal Completo",
      "Laudo Cautelar 100% Aprovado"
    ],
    category: "PREMIUM",
    status: "AVAILABLE",
    location: "BALNEÁRIO CAMBORIÚ, SC",
    isFeatured: true,
    createdAt: new Date("2026-03-15"),
    updatedAt: new Date("2026-03-15"),
  },
  {
    id: "veh-bmw-m3-comp",
    slug: "bmw-m3-competition-m-xdrive-2024",
    title: "BMW M3 Competition M xDrive",
    brand: "BMW",
    model: "M3 Competition",
    year: 2024,
    yearModel: 2024,
    price: 789000,
    fipePrice: 835000,
    mileage: 6200,
    fuelType: "GASOLINE",
    transmission: "AUTOMATIC",
    color: "Isle of Man Green",
    doors: 4,
    description: "Exemplar em condição de 0km na emblemática cor Verde Isle of Man com interior em couro Merino Silverstone/Preto. Tração integral inteligente M xDrive selecionável (4WD, 4WD Sport e 2WD puro). Equipado com bancos esportivos em concha com acabamento em fibra de carbono, teto em carbono, som Harman Kardon e Pacote M Driver's.",
    images: [
      "https://images.unsplash.com/photo-1555215695-3004980ad54e?auto=format&fit=crop&w=1600&q=80",
      "https://images.unsplash.com/photo-1580274455191-1c62238fa333?auto=format&fit=crop&w=1600&q=80"
    ],
    features: [
      "Tração M xDrive Selecionável",
      "Bancos Concha Carbono",
      "Teto em Fibra de Carbono",
      "Freios M Sport de Alta Performance",
      "Head-Up Display",
      "Laudo Cautelar 100% Aprovado"
    ],
    category: "PREMIUM",
    status: "AVAILABLE",
    location: "BALNEÁRIO CAMBORIÚ, SC",
    isFeatured: true,
    createdAt: new Date("2026-03-20"),
    updatedAt: new Date("2026-03-20"),
  },
  {
    id: "veh-mercedes-g63-amg",
    slug: "mercedes-amg-g-63-v8-biturbo-2023",
    title: "Mercedes-AMG G 63 V8 Biturbo",
    brand: "Mercedes-Benz",
    model: "G 63 AMG",
    year: 2022,
    yearModel: 2023,
    price: 1690000,
    fipePrice: 1780000,
    mileage: 14500,
    fuelType: "GASOLINE",
    transmission: "AUTOMATIC",
    color: "Preto Fosco Night Black Magno",
    doors: 5,
    description: "Ícone off-road de alto luxo em pintura original especial fosca Night Black Magno. Motor 4.0 V8 Biturbo com 585 cv montado à mão em Affalterbach. Rodas forjadas de 22 polegadas AMG em preto acetinado, escapamento esportivo lateral com seletor sonoro, blindagem Nível III-A de prestígio certificada e vidros AGP.",
    images: [
      "https://images.unsplash.com/photo-1520031441872-265e4ff70366?auto=format&fit=crop&w=1600&q=80",
      "https://images.unsplash.com/photo-1508974239320-0a029497e820?auto=format&fit=crop&w=1600&q=80"
    ],
    features: [
      "Blindado Nível III-A AGP",
      "Pintura Original Magno Fosca",
      "Escapamento Lateral AMG Ativo",
      "Rodas 22 Forjadas AMG",
      "Sistema de Som Burmester",
      "Laudo Cautelar 100% Aprovado"
    ],
    category: "PREMIUM",
    status: "AVAILABLE",
    location: "BALNEÁRIO CAMBORIÚ, SC",
    isFeatured: true,
    createdAt: new Date("2026-03-25"),
    updatedAt: new Date("2026-03-25"),
  },
  {
    id: "veh-audi-rs6-avant",
    slug: "audi-rs6-avant-40-tfsi-v8-2022",
    title: "Audi RS6 Avant 4.0 TFSI V8",
    brand: "Audi",
    model: "RS6 Avant",
    year: 2022,
    yearModel: 2022,
    price: 890000,
    fipePrice: 945000,
    mileage: 19300,
    fuelType: "HYBRID",
    transmission: "AUTOMATIC",
    color: "Cinza Nardo",
    doors: 5,
    description: "A super perua definitiva. 600 cv de potência, tração integral permanente Quattro, eixo traseiro dinâmico esterçante e suspensão pneumática adaptativa RS. Pneus novos Michelin Pilot Sport, histórico integral em concessionária autorizada e garantia estendida.",
    images: [
      "https://images.unsplash.com/photo-1603584173870-7f23fdae1b7a?auto=format&fit=crop&w=1600&q=80",
      "https://images.unsplash.com/photo-1542282088-72c9c27ed0cd?auto=format&fit=crop&w=1600&q=80"
    ],
    features: [
      "Eixo Traseiro Esterçante",
      "Suspensão Pneumática RS",
      "Freios Cerâmicos RS",
      "Som Bang & Olufsen 3D",
      "Faróis HD Matrix Laser",
      "Laudo Cautelar 100% Aprovado"
    ],
    category: "PREMIUM",
    status: "AVAILABLE",
    location: "CAXIAS DO SUL, RS",
    isFeatured: false,
    createdAt: new Date("2026-03-28"),
    updatedAt: new Date("2026-03-28"),
  },
  {
    id: "veh-toyota-hilux-gr",
    slug: "toyota-hilux-gr-sport-28-diesel-2024",
    title: "Toyota Hilux GR-Sport 2.8 Turbo 4x4",
    brand: "Toyota",
    model: "Hilux GR-Sport",
    year: 2024,
    yearModel: 2024,
    price: 325000,
    fipePrice: 348000,
    mileage: 8900,
    fuelType: "DIESEL",
    transmission: "AUTOMATIC",
    color: "Branco Pérola c/ Teto Preto",
    doors: 4,
    description: "A mais desejada picape esportiva com DNA Gazoo Racing. Bitola alargada, amortecedores monotubo de alta performance, 224 cv e 55 kgfm de torque. Único dono, revisão dos 10.000 km antecipada por tempo, estado rigoroso de zero quilômetro.",
    images: [
      "https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?auto=format&fit=crop&w=1600&q=80",
      "https://images.unsplash.com/photo-1559416523-140ddc3d238c?auto=format&fit=crop&w=1600&q=80"
    ],
    features: [
      "Amortecedores Monotubo GR",
      "Bitola Dianteira/Traseira Alargada",
      "Câmera 360 Graus c/ Visão Off-Road",
      "Alerta de Colisão Frontal c/ Frenagem",
      "Interior em Couro e Suede GR",
      "Laudo Cautelar 100% Aprovado"
    ],
    category: "LEVE",
    status: "AVAILABLE",
    location: "CAXIAS DO SUL, RS",
    isFeatured: true,
    createdAt: new Date("2026-03-30"),
    updatedAt: new Date("2026-03-30"),
  },
  {
    id: "veh-bmw-320i-msport",
    slug: "bmw-320i-m-sport-20-turbo-flex-2024",
    title: "BMW 320i M Sport 2.0 Turbo ActiveFlex",
    brand: "BMW",
    model: "320i M Sport",
    year: 2023,
    yearModel: 2024,
    price: 289000,
    fipePrice: 312000,
    mileage: 18000,
    fuelType: "FLEX",
    transmission: "AUTOMATIC",
    color: "Azul Portimão",
    doors: 4,
    description: "Configuração mais valorizada do sedã premium. Pacote visual e dinâmico M Sport de fábrica, BMW Curved Display integrada com sistema iDrive 8, teto solar elétrico, piloto automático adaptativo e acabamento interior em alumínio escovado.",
    images: [
      "https://images.unsplash.com/photo-1556189250-72ba954cfc2b?auto=format&fit=crop&w=1600&q=80"
    ],
    features: [
      "BMW Curved Display",
      "Pacote Aerodinâmico M Sport",
      "Teto Solar Elétrico",
      "Faróis Full LED Adaptativos",
      "Margem de R$ 23.000 abaixo FIPE",
      "Laudo Cautelar 100% Aprovado"
    ],
    category: "LEVE",
    status: "AVAILABLE",
    location: "BALNEÁRIO CAMBORIÚ, SC",
    isFeatured: false,
    createdAt: new Date("2026-04-01"),
    updatedAt: new Date("2026-04-01"),
  },
  {
    id: "veh-jeep-commander-overland",
    slug: "jeep-commander-overland-20-diesel-4x4-2023",
    title: "Jeep Commander Overland 2.0 Diesel 4x4",
    brand: "Jeep",
    model: "Commander Overland",
    year: 2023,
    yearModel: 2023,
    price: 215000,
    fipePrice: 235000,
    mileage: 26000,
    fuelType: "DIESEL",
    transmission: "AUTOMATIC",
    color: "Cinza Granite",
    doors: 5,
    description: "SUV de 7 lugares completo em sua versão topo de linha Overland. Teto solar panorâmico Command View, som assinado Harman Kardon de 450W, bancos em couro e suede marrom com ajuste elétrico e memória, tração 4x4 com seletor de terrenos e frenagem autônoma de emergência.",
    images: [
      "https://images.unsplash.com/photo-1549399542-7e3f8b79c341?auto=format&fit=crop&w=1600&q=80"
    ],
    features: [
      "Capacidade para 7 Lugares",
      "Teto Solar Panorâmico",
      "Som Harman Kardon Premium",
      "Tração 4x4 Selec-Terrain",
      "Laudo Cautelar 100% Aprovado"
    ],
    category: "LEVE",
    status: "AVAILABLE",
    location: "CAXIAS DO SUL, RS",
    isFeatured: false,
    createdAt: new Date("2026-04-02"),
    updatedAt: new Date("2026-04-02"),
  },
  {
    id: "veh-vw-golf-gti",
    slug: "volkswagen-golf-gti-20-tsi-dsg-2019",
    title: "Volkswagen Golf GTI 2.0 TSI DSG (Mk7.5)",
    brand: "Volkswagen",
    model: "Golf GTI",
    year: 2019,
    yearModel: 2019,
    price: 189000,
    fipePrice: 202000,
    mileage: 42000,
    fuelType: "GASOLINE",
    transmission: "DSG",
    color: "Branco Puro",
    doors: 4,
    description: "Última safra oficial do Golf GTI no Brasil. Câmbio DSG de dupla embreagem banhado a óleo, painel Active Info Display de 12.3 polegadas, teto solar elétrico panorâmico, sistema de som Fender e rodas Austin aro 18 sem ralados. Veículo sem reprogramações de motor, original de fábrica.",
    images: [
      "https://images.unsplash.com/photo-1541899481282-d53bffe3c35d?auto=format&fit=crop&w=1600&q=80"
    ],
    features: [
      "Câmbio DSG Banhado a Óleo",
      "Painel Digital Active Info Display",
      "Teto Solar Panorâmico",
      "Faróis Full LED Dinâmicos",
      "100% Original Sem Remap",
      "Laudo Cautelar 100% Aprovado"
    ],
    category: "LEVE",
    status: "AVAILABLE",
    location: "BALNEÁRIO CAMBORIÚ, SC",
    isFeatured: false,
    createdAt: new Date("2026-04-03"),
    updatedAt: new Date("2026-04-03"),
  },
  {
    id: "veh-ducati-panigale-v4s",
    slug: "ducati-panigale-v4-s-2023",
    title: "Ducati Panigale V4 S",
    brand: "Ducati",
    model: "Panigale V4 S",
    year: 2023,
    yearModel: 2023,
    price: 138000,
    fipePrice: 152000,
    mileage: 3400,
    fuelType: "GASOLINE",
    transmission: "SEQUENTIAL",
    color: "Rosso Ducati (Vermelho)",
    doors: 0,
    description: "Superbike pura com 215,5 cv de fábrica. Versão S equipada com suspensão eletrônica Öhlins Smart EC 2.0, rodas forjadas Marchesini em alumínio, asas aerodinâmicas biplano, Ducati Quick Shift EVO 2 bidirecional e freios Brembo Stylema. Moto de garagem, nunca andou em pista.",
    images: [
      "https://images.unsplash.com/photo-1568772585407-9361f9bf3a87?auto=format&fit=crop&w=1600&q=80"
    ],
    features: [
      "Suspensão Öhlins Eletrônica",
      "Rodas Forjadas Marchesini",
      "Quickshifter Up/Down EVO 2",
      "Freios Brembo Stylema",
      "Asas Aerodinâmicas Biplano",
      "Laudo Cautelar 100% Aprovado"
    ],
    category: "MOTOS",
    status: "AVAILABLE",
    location: "BALNEÁRIO CAMBORIÚ, SC",
    isFeatured: true,
    createdAt: new Date("2026-04-04"),
    updatedAt: new Date("2026-04-04"),
  },
  {
    id: "veh-bmw-r1250gs-adv",
    slug: "bmw-r-1250-gs-adventure-triple-black-2024",
    title: "BMW R 1250 GS Adventure Triple Black",
    brand: "BMW",
    model: "R 1250 GS Adventure",
    year: 2024,
    yearModel: 2024,
    price: 115000,
    fipePrice: 126000,
    mileage: 5100,
    fuelType: "GASOLINE",
    transmission: "SEQUENTIAL",
    color: "Triple Black Metallic",
    doors: 0,
    description: "Edição topo de linha Triple Black. Motor Boxer ShiftCam de 136 cv, tanque de 30 litros para autonomia estendida, suspensão Dynamic ESA, modos de pilotagem Pro, farol adaptativo full LED e conjunto completo de malas originais em alumínio anodizado preto.",
    images: [
      "https://images.unsplash.com/photo-1558981806-ec527fa84c39?auto=format&fit=crop&w=1600&q=80"
    ],
    features: [
      "Edição Triple Black",
      "Suspensão Dynamic ESA",
      "Farol Adaptativo LED",
      "Trio de Malas em Alumínio",
      "Tanque de 30 Litros",
      "Laudo Cautelar 100% Aprovado"
    ],
    category: "MOTOS",
    status: "AVAILABLE",
    location: "CAXIAS DO SUL, RS",
    isFeatured: false,
    createdAt: new Date("2026-04-05"),
    updatedAt: new Date("2026-04-05"),
  }
];

export function getFilteredVehicles(filters: VehicleFilters = {}): PaginatedResult<Vehicle> {
  let list = [...MOCK_VEHICLES];

  if (filters.category) {
    list = list.filter((v) => v.category === filters.category);
  }

  if (filters.brand) {
    list = list.filter((v) => v.brand.toLowerCase() === filters.brand?.toLowerCase());
  }

  if (filters.search) {
    const term = filters.search.toLowerCase();
    list = list.filter(
      (v) =>
        v.title.toLowerCase().includes(term) ||
        v.brand.toLowerCase().includes(term) ||
        v.model.toLowerCase().includes(term) ||
        v.color.toLowerCase().includes(term)
    );
  }

  if (filters.minPrice) {
    list = list.filter((v) => Number(v.price) >= Number(filters.minPrice));
  }

  if (filters.maxPrice) {
    list = list.filter((v) => Number(v.price) <= Number(filters.maxPrice));
  }

  if (filters.minYear) {
    list = list.filter((v) => v.year >= Number(filters.minYear));
  }

  if (filters.maxYear) {
    list = list.filter((v) => v.year <= Number(filters.maxYear));
  }

  if (filters.maxMileage) {
    list = list.filter((v) => v.mileage <= Number(filters.maxMileage));
  }

  if (filters.fuelType) {
    list = list.filter((v) => v.fuelType === filters.fuelType);
  }

  if (filters.transmission) {
    list = list.filter((v) => v.transmission === filters.transmission);
  }

  if (filters.isFeatured !== undefined) {
    list = list.filter((v) => v.isFeatured === filters.isFeatured);
  }

  // Sorting
  const sortBy = filters.sortBy || "createdAt";
  const sortOrder = filters.sortOrder || "desc";

  list.sort((a, b) => {
    let comp = 0;
    if (sortBy === "price") {
      comp = Number(a.price) - Number(b.price);
    } else if (sortBy === "year") {
      comp = a.year - b.year;
    } else if (sortBy === "mileage") {
      comp = a.mileage - b.mileage;
    } else {
      comp = new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime();
    }
    return sortOrder === "asc" ? comp : -comp;
  });

  const page = Number(filters.page) || 1;
  const limit = Number(filters.limit) || 12;
  const total = list.length;
  const totalPages = Math.ceil(total / limit) || 1;
  const startIndex = (page - 1) * limit;
  const paginatedData = list.slice(startIndex, startIndex + limit);

  return {
    data: paginatedData,
    total,
    page,
    limit,
    totalPages,
  };
}

export function getVehicleBySlug(slug: string): Vehicle | null {
  return MOCK_VEHICLES.find((v) => v.slug === slug) || null;
}

export function getFeaturedVehicles(): Vehicle[] {
  return MOCK_VEHICLES.filter((v) => v.isFeatured);
}

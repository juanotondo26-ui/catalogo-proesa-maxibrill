import { Category, Product } from "../types";

export const CATEGORIES: Category[] = [
  {
    id: "desinfectantes",
    name: "AROMATIZANTES",
    titleWithAccent: "AROMATIZANTES",
    countLabel: "6 Prod.",
    referenceCount: 6,
    badgeColor: "red",
    imageUrl: "/4.png",
    description: "Aromatizantes concentrados y desodorantes ambientales con diversas fragancias",
    subcategories: ["Todos", "Frutilla", "Lavanda", "Pino"]
  },
  {
    id: "detergentes-lavanderia",
    name: "SUAVIZANTES",
    titleWithAccent: "SUAVIZANTES",
    countLabel: "2 Prod.",
    referenceCount: 2,
    badgeColor: "gray",
    imageUrl: "/11.png",
    description: "Suavizantes para ropa con microcápsulas de perfume para máxima suavidad y aroma prolongado.",
    subcategories: ["Todos", "Suavidad & Perfume", "Concentrado", "Textil"]
  },
  {
    id: "lavavajillas-cocina",
    name: "SACAGRASAS",
    titleWithAccent: "SACAGRASAS",
    countLabel: "3 Prod.",
    referenceCount: 3,
    badgeColor: "red",
    imageUrl: "/15.png",
    description: "Antigrasas y desengrasantes de máxima acción para hornos, cocinas industriales y parrillas.",
    subcategories: ["Todos", "Hornos & Parrillas", "Cocinas Industriales", "Cítrico"]
  },
  {
    id: "cuidado-pisos",
    name: "LIMPIA BAÑOS",
    titleWithAccent: "LIMPIA BAÑOS",
    countLabel: "3 Prod.",
    referenceCount: 3,
    badgeColor: "gray",
    imageUrl: "/16.png",
    description: "Fórmula antisarro y desinfectante que elimina 99.9% de virus y bacterias en sanitarios y azulejos.",
    subcategories: ["Todos", "Antisarro", "Desinfección 99.9%", "Brillo Máximo"]
  },
  {
    id: "cuidado-institucional-manos",
    name: "LIMPIA VIDRIOS",
    titleWithAccent: "LIMPIA VIDRIOS",
    countLabel: "3 Prod.",
    referenceCount: 3,
    badgeColor: "red",
    imageUrl: "/19.png",
    description: "Limpiador de vidrios y cristales con tecnología anti-rayas, anti-empañado y brillo intenso.",
    subcategories: ["Todos", "Anti-Rayas", "Anti-Empaño", "Cristales & Espejos"]
  },
  {
    id: "limpiavidrios-superficies",
    name: "LIMPIA PISOS",
    titleWithAccent: "LIMPIA PISOS",
    countLabel: "10 Prod.",
    referenceCount: 10,
    badgeColor: "gray",
    imageUrl: "/22.png",
    description: "Limpiadores desinfectantes de pisos ultra concentrados con aromas de larga duración y brillo instantáneo.",
    subcategories: ["Todos", "Cremoso", "Flores de Primavera", "Despertar de Energía", "Espíritu Joven", "Brisas del Bosque", "Serenidad de Lavanda", "Alegra tu Día"]
  },
  {
    id: "lavavajillas",
    name: "LAVA VAJILLAS",
    titleWithAccent: "LAVA VAJILLAS",
    countLabel: "1 Prod.",
    referenceCount: 1,
    badgeColor: "red",
    imageUrl: "/28.png",
    description: "Detergente lavavajillas líquido concentrado con alto poder desengrasante y aroma a limón.",
    subcategories: ["Todos", "Limón Activo", "Espuma Densa", "Ultra Desengrasante"]
  },
  {
    id: "lavandinas",
    name: "LAVANDINAS",
    titleWithAccent: "LAVANDINAS",
    countLabel: "3 Prod.",
    referenceCount: 3,
    badgeColor: "gray",
    imageUrl: "/29.png",
    description: "Agua lavandina concentrada 25 g Cl/L para desinfección en cocinas, baños y utensilios.",
    subcategories: ["Todos", "Concentrada 25g", "Blanqueo Textil", "Desinfección Integral"]
  }
];

export const PRODUCTS: Product[] = [
  // 1. AROMATIZANTES (6 Productos)
  {
    id: "max-aro-10241",
    sku: "CODIGO 10241",
    name: "MAXIBRILL Desodorante Frutilla",
    shortDescription: "Aromatizante concentrado y desodorante ambiental con fragancia dulce a frutilla silvestre",
    categoryId: "desinfectantes",
    brand: "MAXI BRILL",
    imageUrl: "/6.png",
    defaultPresentation: "5 L",
    price: 40,
    packUnits: 2,
    packPrice: 80,
    inStock: true,
    stockCount: 2,
    featured: true,
    presentations: [
      { name: "5 L", volume: "5L", price: 40, packUnits: 2, packPrice: 80 }
    ],
    technicalSheet: {
      activePrinciple: "Tensoactivos biodegradables + Fragancia Frutal Dulce Frutilla Silvestre",
      concentration: "Bidón 5 Litros ahorro institucional con fragancia envolvente",
      ph: "7.0 Neutro",
      dilution: "1:50 para mantenimiento continuo de pisos y espacios cerrados.",
      applications: [
        "Restaurantes, heladerías, cines y áreas comerciales",
        "Pisos de alto tránsito y zonas recreativas",
        "Aromatización continua"
      ],
      precautions: ["Mantener alejado de alimentos"],
      certifications: ["Registro Sanitario Oficial", "Línea Maxi Brill"]
    }
  },
  {
    id: "max-aro-10240",
    sku: "CODIGO 10240",
    name: "MAXIBRILL Desodorante Frutilla",
    shortDescription: "Aromatizante ambiental concentrado líquido con fragancia frutal a frutilla silvestre",
    categoryId: "desinfectantes",
    brand: "MAXI BRILL",
    imageUrl: "/5.png",
    defaultPresentation: "900 ml",
    price: 9,
    packUnits: 12,
    packPrice: 108,
    inStock: true,
    stockCount: 12,
    featured: true,
    presentations: [
      { name: "900 ml", volume: "900ml", price: 9, packUnits: 12, packPrice: 108 }
    ],
    technicalSheet: {
      activePrinciple: "Tensoactivos biodegradables + Fragancia Frutal Dulce Frutilla Silvestre",
      concentration: "Desodorante ambiental líquido concentrado color rojo rubí 900 ml",
      ph: "7.0 Neutro",
      dilution: "1:40 en agua para trapeado perfumado con aroma frutal vibrante.",
      applications: [
        "Guarderías, salas de juego, salones infantiles y comercios",
        "Pisos vinílicos, cerámicos y flotantes",
        "Eliminación de malos olores y ambientación dulce"
      ],
      precautions: ["No apto para consumo humano"],
      certifications: ["Registro Sanitario Oficial", "Línea Maxi Brill"]
    }
  },
  {
    id: "max-aro-10243",
    sku: "CODIGO 10243",
    name: "MAXIBRILL Desodorante Lavanda",
    shortDescription: "Aromatizante ambiental concentrado con esencia relajante de lavanda silvestre",
    categoryId: "desinfectantes",
    brand: "MAXI BRILL",
    imageUrl: "/8.png",
    defaultPresentation: "5 L",
    price: 40,
    packUnits: 2,
    packPrice: 80,
    inStock: true,
    stockCount: 2,
    featured: true,
    presentations: [
      { name: "5 L", volume: "5L", price: 40, packUnits: 2, packPrice: 80 }
    ],
    technicalSheet: {
      activePrinciple: "Cloruro de Benzalconio + Esencia Concentrada de Lavanda Silvestre",
      concentration: "Bidón 5 Litros desodorante ambiental de duración prolongada",
      ph: "7.0 Neutro",
      dilution: "1:50 en agua tibia o fría para pisos impecables con aroma a lavanda.",
      applications: [
        "Hoteles, clínicas, spas y centros terapéuticos",
        "Áreas comunes, pasillos y baños públicos",
        "Tratamiento de pisos lavables"
      ],
      precautions: ["Almacenar protegido de la luz solar directa"],
      certifications: ["Registro Sanitario Oficial", "Línea Maxi Brill"]
    }
  },
  {
    id: "max-aro-10242",
    sku: "CODIGO 10242",
    name: "MAXIBRILL Desodorante Lavanda",
    shortDescription: "Aromatizante y desodorante ambiental líquido translúcido violeta con aroma a lavanda",
    categoryId: "desinfectantes",
    brand: "MAXI BRILL",
    imageUrl: "/7.png",
    defaultPresentation: "900 ml",
    price: 9,
    packUnits: 12,
    packPrice: 108,
    inStock: true,
    stockCount: 12,
    featured: true,
    presentations: [
      { name: "900 ml", volume: "900ml", price: 9, packUnits: 12, packPrice: 108 }
    ],
    technicalSheet: {
      activePrinciple: "Cloruro de Benzalconio + Esencia Concentrada de Lavanda Silvestre",
      concentration: "Desodorante ambiental líquido translúcido violeta intenso 900 ml",
      ph: "7.0 Neutro",
      dilution: "1:50 para limpieza desinfectante y perfumada de pisos y paredes.",
      applications: [
        "Dormitorios, residencias, oficinas y salas de espera",
        "Pisos cerámicos, terrazos y azulejos",
        "Acción relajante y desodorizante continua"
      ],
      precautions: ["En caso de salpicadura en ojos enjuagar con agua"],
      certifications: ["Registro Sanitario Oficial", "Línea Maxi Brill"]
    }
  },
  {
    id: "max-aro-10245",
    sku: "CODIGO 10245",
    name: "MAXIBRILL Desodorante Pino",
    shortDescription: "Aromatizante y desodorante ambiental concentrado con esencia pura de pino",
    categoryId: "desinfectantes",
    brand: "MAXI BRILL",
    imageUrl: "/10.png",
    defaultPresentation: "5 L",
    price: 40,
    packUnits: 2,
    packPrice: 80,
    inStock: true,
    stockCount: 2,
    featured: true,
    presentations: [
      { name: "5 L", volume: "5L", price: 40, packUnits: 2, packPrice: 80 }
    ],
    technicalSheet: {
      activePrinciple: "Aceite Esencial de Pino Virgen + Agentes Emulsionantes Biodegradables",
      concentration: "Bidón 5 Litros fórmula concentrada para alto rendimiento desodorizante",
      ph: "6.8 Neutro",
      dilution: "1:50 para trapeado general de grandes extensiones.",
      applications: [
        "Plantas industriales, talleres, terminales y edificios públicos",
        "Superficies lavables resistentes",
        "Desodorización profunda"
      ],
      precautions: ["Conservar bien cerrado"],
      certifications: ["Registro Sanitario Oficial", "Línea Maxi Brill"]
    }
  },
  {
    id: "max-aro-10244",
    sku: "CODIGO 10244",
    name: "MAXIBRILL Desodorante Pino",
    shortDescription: "Desodorante ambiental concentrado color verde esmeralda con fragancia a bosque de pino",
    categoryId: "desinfectantes",
    brand: "MAXI BRILL",
    imageUrl: "/9.png",
    defaultPresentation: "900 ml",
    price: 9,
    packUnits: 12,
    packPrice: 108,
    inStock: true,
    stockCount: 12,
    featured: true,
    presentations: [
      { name: "900 ml", volume: "900ml", price: 9, packUnits: 12, packPrice: 108 }
    ],
    technicalSheet: {
      activePrinciple: "Aceite Esencial de Pino Virgen + Agentes Emulsionantes Biodegradables",
      concentration: "Desodorante ambiental líquido concentrado verde esmeralda 900 ml",
      ph: "6.8 Neutro",
      dilution: "1:50 para trapeado diario. 1:20 para baños y neutralización de olores fuertes.",
      applications: [
        "Baños, gimnasios, vestuarios y estacionamientos",
        "Pisos de granito, mosaico, cemento y cerámica",
        "Frescura campestre duradera"
      ],
      precautions: ["No mezclar con lavandina"],
      certifications: ["Registro Sanitario Oficial", "Línea Maxi Brill"]
    }
  },

  // 2. LIMPIA PISOS (10 Productos)
  {
    id: "max-pis-10238",
    sku: "CODIGO 10238",
    name: "MAXIBRILL Limpiapisos Lavanda Cremoso",
    shortDescription: "Limpiapisos concentrado y limpiador cremoso lechoso 4en1 con fragancia a lavanda",
    categoryId: "limpiavidrios-superficies",
    brand: "MAXI BRILL",
    imageUrl: "/3.png",
    defaultPresentation: "5 L",
    price: 40,
    packUnits: 2,
    packPrice: 80,
    inStock: true,
    stockCount: 2,
    featured: true,
    presentations: [
      { name: "5 L", volume: "5L", price: 40, packUnits: 2, packPrice: 80 }
    ],
    technicalSheet: {
      activePrinciple: "Amonio Cuaternario + Fragancia Francesa de Lavanda + Tensioactivos Biodegradables",
      concentration: "Presentación Bidón Económico 5 Litros fórmula concentrada lechosa",
      ph: "7.0 Neutro",
      dilution: "1:50 para pisos de alto tránsito. Rinde hasta 250 litros de solución.",
      applications: [
        "Instituciones educativas, sanatorios y salones comunitarios",
        "Pisos cerámicos, baldosas y azulejos",
        "Desinfección y aromatización integral"
      ],
      precautions: ["Conservar en lugar fresco y seco"],
      certifications: ["Registro Sanitario Oficial", "Línea Maxi Brill"]
    }
  },
  {
    id: "max-pis-10235",
    sku: "CODIGO 10235",
    name: "MAXIBRILL Limpiapisos Lavanda Cremoso",
    shortDescription: "Limpiapisos concentrado y limpiador cremoso lechoso 4en1 con fragancia a lavanda",
    categoryId: "limpiavidrios-superficies",
    brand: "MAXI BRILL",
    imageUrl: "/1.png",
    defaultPresentation: "900 ml",
    price: 9,
    packUnits: 12,
    packPrice: 108,
    inStock: true,
    stockCount: 12,
    featured: true,
    presentations: [
      { name: "900 ml", volume: "900ml", price: 9, packUnits: 12, packPrice: 108 }
    ],
    technicalSheet: {
      activePrinciple: "Amonio Cuaternario + Fragancia Francesa de Lavanda + Tensioactivos Biodegradables",
      concentration: "Fórmula Cremosa Lechosa 4en1: Limpia, desinfecta, abrillanta y perfuma",
      ph: "7.0 Neutro (no daña superficies ni manos)",
      dilution: "1:50 para pisos de alto tránsito. Puro en atomizador para baños y desengrase rápido.",
      applications: [
        "Pisos cerámicos, porcelanatos, mosaicos y pisos flotantes",
        "Oficinas, clínicas, colegios y salones de eventos",
        "Inodoros, lavamanos y áreas comunes"
      ],
      precautions: ["Mantener en envase original cerrado al resguardo de luz directa"],
      certifications: ["Registro Sanitario Oficial", "Línea Maxi Brill"]
    }
  },
  {
    id: "max-pis-10239",
    sku: "CODIGO 10239",
    name: "MAXIBRILL Limpiapisos Arpege Cremoso",
    shortDescription: "Limpiapisos concentrado y limpiador cremoso lechoso con fragancia fina tipo Arpège",
    categoryId: "limpiavidrios-superficies",
    brand: "MAXI BRILL",
    imageUrl: "/4.png",
    defaultPresentation: "5 L",
    price: 40,
    packUnits: 2,
    packPrice: 80,
    inStock: true,
    stockCount: 2,
    featured: true,
    presentations: [
      { name: "5 L", volume: "5L", price: 40, packUnits: 2, packPrice: 80 }
    ],
    technicalSheet: {
      activePrinciple: "Amonio Cuaternario + Esencia Fina Tipo Arpège + Emulsión Lechosa",
      concentration: "Fórmula Profesional 5 Litros de alto rendimiento aromatizante",
      ph: "7.0 Neutro",
      dilution: "1:50 para pisos de gran superficie y áreas comunes.",
      applications: [
        "Empresas de limpieza, edificios y condominios residenciales",
        "Vestíbulos, pasillos y áreas recreativas",
        "Superficies lavables en general"
      ],
      precautions: ["Uso industrial y doméstico seguro"],
      certifications: ["Registro Sanitario Oficial", "Línea Maxi Brill"]
    }
  },
  {
    id: "max-pis-10237",
    sku: "CODIGO 10237",
    name: "MAXIBRILL Limpiapisos Arpege Cremoso",
    shortDescription: "Limpiapisos concentrado y limpiador cremoso lechoso con fragancia fina tipo Arpège",
    categoryId: "limpiavidrios-superficies",
    brand: "MAXI BRILL",
    imageUrl: "/2.png",
    defaultPresentation: "900 ml",
    price: 9,
    packUnits: 12,
    packPrice: 108,
    inStock: true,
    stockCount: 12,
    featured: true,
    presentations: [
      { name: "900 ml", volume: "900ml", price: 9, packUnits: 12, packPrice: 108 }
    ],
    technicalSheet: {
      activePrinciple: "Amonio Cuaternario + Esencia Fina Tipo Arpège + Emulsión Lechosa",
      concentration: "Fórmula Concentrada Cremosa Lechosa con fijador de aroma prolongado",
      ph: "7.0 Neutro",
      dilution: "1:50 para trapeado diario. Puro para aromatización instantánea de ambientes.",
      applications: [
        "Hoteles, recepciones, oficinas corporativas y centros comerciales",
        "Pisos de madera tratada, porcelanatos y mármol",
        "Sanitarios y pasillos de alto tránsito"
      ],
      precautions: ["Mantener fuera del alcance de los niños"],
      certifications: ["Registro Sanitario Oficial", "Línea Maxi Brill Aromaty"]
    }
  },
  {
    id: "max-pis-10444",
    sku: "CODIGO 10444",
    name: "MAXIBRILL Limpiapisos Ultra Flores de Primavera",
    shortDescription: "Limpiador desinfectante concentrado con fragancia intensa a flores de primavera y brillo prolongado",
    categoryId: "limpiavidrios-superficies",
    brand: "MAXI BRILL",
    imageUrl: "/22.png",
    defaultPresentation: "6 L",
    price: 65,
    packUnits: 2,
    packPrice: 130,
    inStock: true,
    stockCount: 2,
    featured: true,
    presentations: [
      { name: "6 L", volume: "6L", price: 65, packUnits: 2, packPrice: 130 }
    ],
    technicalSheet: {
      activePrinciple: "Tensoactivos catiónicos + Perfume microencapsulado Flores de Primavera",
      concentration: "Bidón 6 Litros fórmula ultra concentrada desinfectante",
      ph: "7.0 Neutro",
      dilution: "1/2 taza (100 ml) en balde con agua para trapeado perfumado.",
      applications: [
        "Pisos cerámicos, porcelanatos, flotantes, granito y multisuperficie"
      ],
      precautions: ["Mantener fuera del alcance de los niños"],
      certifications: ["Registro Sanitario Oficial", "Línea Maxi Brill"]
    }
  },
  {
    id: "max-pis-10448",
    sku: "CODIGO 10448",
    name: "MAXIBRILL Limpiapisos Ultra Espiritu Joven",
    shortDescription: "Limpiador desinfectante concentrado con vibrante aroma juvenil de máxima frescura y brillo reluciente",
    categoryId: "limpiavidrios-superficies",
    brand: "MAXI BRILL",
    imageUrl: "/24.png",
    defaultPresentation: "6 L",
    price: 65,
    packUnits: 2,
    packPrice: 130,
    inStock: true,
    stockCount: 2,
    featured: true,
    presentations: [
      { name: "6 L", volume: "6L", price: 65, packUnits: 2, packPrice: 130 }
    ],
    technicalSheet: {
      activePrinciple: "Tensoactivos catiónicos + Perfume microencapsulado Frutal Fresco",
      concentration: "Bidón 6 Litros fórmula ultra concentrada desinfectante",
      ph: "7.0 Neutro",
      dilution: "1/2 taza (100 ml) en balde con agua para trapeado perfumado.",
      applications: [
        "Pisos cerámicos, porcelanatos, flotantes, granito y multisuperficie"
      ],
      precautions: ["Mantener fuera del alcance de los niños"],
      certifications: ["Registro Sanitario Oficial", "Línea Maxi Brill"]
    }
  },
  {
    id: "max-pis-10447",
    sku: "CODIGO 10447",
    name: "MAXIBRILL Limpiapisos Ultra Despertar de Energia",
    shortDescription: "Limpiador desinfectante concentrado con fragancia energizante cítrica y acción multisuperficie",
    categoryId: "limpiavidrios-superficies",
    brand: "MAXI BRILL",
    imageUrl: "/23.png",
    defaultPresentation: "6 L",
    price: 65,
    packUnits: 2,
    packPrice: 130,
    inStock: true,
    stockCount: 2,
    featured: true,
    presentations: [
      { name: "6 L", volume: "6L", price: 65, packUnits: 2, packPrice: 130 }
    ],
    technicalSheet: {
      activePrinciple: "Tensoactivos catiónicos + Perfume microencapsulado Cítrico Energizante",
      concentration: "Bidón 6 Litros fórmula ultra concentrada desinfectante",
      ph: "7.0 Neutro",
      dilution: "1/2 taza (100 ml) en balde con agua para trapeado perfumado.",
      applications: [
        "Pisos cerámicos, porcelanatos, flotantes, granito y multisuperficie"
      ],
      precautions: ["Mantener fuera del alcance de los niños"],
      certifications: ["Registro Sanitario Oficial", "Línea Maxi Brill"]
    }
  },
  {
    id: "max-pis-10453",
    sku: "CODIGO 10453",
    name: "MAXIBRILL Limpiapisos Ultra Brisas del Bosque",
    shortDescription: "Limpiador desinfectante concentrado con notas frescas herbales de pino y bosque para ambientes puros",
    categoryId: "limpiavidrios-superficies",
    brand: "MAXI BRILL",
    imageUrl: "/25.png",
    defaultPresentation: "6 L",
    price: 65,
    packUnits: 2,
    packPrice: 130,
    inStock: true,
    stockCount: 2,
    featured: true,
    presentations: [
      { name: "6 L", volume: "6L", price: 65, packUnits: 2, packPrice: 130 }
    ],
    technicalSheet: {
      activePrinciple: "Tensoactivos catiónicos + Esencia Herbal Silvestre Pino y Eucalipto",
      concentration: "Bidón 6 Litros fórmula ultra concentrada desinfectante",
      ph: "7.0 Neutro",
      dilution: "1/2 taza (100 ml) en balde con agua para trapeado perfumado.",
      applications: [
        "Pisos cerámicos, porcelanatos, flotantes, granito y multisuperficie"
      ],
      precautions: ["Mantener fuera del alcance de los niños"],
      certifications: ["Registro Sanitario Oficial", "Línea Maxi Brill"]
    }
  },
  {
    id: "max-pis-10456",
    sku: "CODIGO 10456",
    name: "MAXIBRILL Limpiapisos Ultra Serenidad de Lavanda",
    shortDescription: "Limpiador desinfectante concentrado con aroma relajante a lavanda silvestre y secado rápido sin rayas",
    categoryId: "limpiavidrios-superficies",
    brand: "MAXI BRILL",
    imageUrl: "/26.png",
    defaultPresentation: "6 L",
    price: 65,
    packUnits: 2,
    packPrice: 130,
    inStock: true,
    stockCount: 2,
    featured: true,
    presentations: [
      { name: "6 L", volume: "6L", price: 65, packUnits: 2, packPrice: 130 }
    ],
    technicalSheet: {
      activePrinciple: "Tensoactivos catiónicos + Extracto aromático de Lavanda Francesa",
      concentration: "Bidón 6 Litros fórmula ultra concentrada desinfectante",
      ph: "7.0 Neutro",
      dilution: "1/2 taza (100 ml) en balde con agua para trapeado perfumado.",
      applications: [
        "Pisos cerámicos, porcelanatos, flotantes, granito y multisuperficie"
      ],
      precautions: ["Mantener fuera del alcance de los niños"],
      certifications: ["Registro Sanitario Oficial", "Línea Maxi Brill"]
    }
  },
  {
    id: "max-pis-10459",
    sku: "CODIGO 10459",
    name: "MAXIBRILL Limpiapisos Ultra Alegra tu Dia",
    shortDescription: "Limpiador desinfectante concentrado con fragancia fresca y alegre para pisos relucientes y perfumados",
    categoryId: "limpiavidrios-superficies",
    brand: "MAXI BRILL",
    imageUrl: "/27.png",
    defaultPresentation: "6 L",
    price: 65,
    packUnits: 2,
    packPrice: 130,
    inStock: true,
    stockCount: 2,
    featured: true,
    presentations: [
      { name: "6 L", volume: "6L", price: 65, packUnits: 2, packPrice: 130 }
    ],
    technicalSheet: {
      activePrinciple: "Tensoactivos catiónicos + Complejo Aromático Energizante Floral-Frutal",
      concentration: "Bidón 6 Litros fórmula ultra concentrada desinfectante",
      ph: "7.0 Neutro",
      dilution: "1/2 taza (100 ml) en balde con agua para trapeado perfumado.",
      applications: [
        "Pisos cerámicos, porcelanatos, flotantes, granito y multisuperficie"
      ],
      precautions: ["Mantener fuera del alcance de los niños"],
      certifications: ["Registro Sanitario Oficial", "Línea Maxi Brill"]
    }
  },

  // 3. LAVA VAJILLAS
  {
    id: "max-vaj-10109",
    sku: "CODIGO 10109",
    name: "MAXIBRILL Lavavajillas limon",
    shortDescription: "Detergente lavavajillas líquido concentrado con alto poder desengrasante cítrico, espuma densa y rendimiento superior",
    categoryId: "lavavajillas",
    brand: "MAXI BRILL",
    imageUrl: "/28.png",
    defaultPresentation: "5 L",
    price: 60,
    packUnits: 2,
    packPrice: 120,
    inStock: true,
    stockCount: 2,
    featured: true,
    presentations: [
      { name: "5 L", volume: "5L", price: 60, packUnits: 2, packPrice: 120 }
    ],
    technicalSheet: {
      activePrinciple: "Lauril éter sulfato + Tensoactivos cítricos biodegradables",
      concentration: "Fórmula desengrasante concentrada con extracto natural de limón",
      ph: "7.0 Neutro para cuidado de manos",
      dilution: "Unas gotas en esponja o 10 ml por bacha de agua.",
      applications: ["Vajilla, platos, ollas, cubiertos y cristalería gastronómica"],
      precautions: ["Enjuagar con agua potable"],
      certifications: ["Registro Sanitario Oficial", "Línea Maxi Brill"]
    }
  },

  // 4. LAVANDINAS
  {
    id: "max-lav-10919",
    sku: "CODIGO 10919",
    name: "MAXIBRILL Lavandina",
    shortDescription: "Agua lavandina concentrada 25 g Cl/L para desinfección profunda 99.9%, blanqueo y sanitización",
    categoryId: "lavandinas",
    brand: "MAXI BRILL",
    imageUrl: "/29.png",
    defaultPresentation: "5 L",
    price: 36,
    packUnits: 2,
    packPrice: 72,
    inStock: true,
    stockCount: 2,
    featured: true,
    presentations: [
      { name: "5 L", volume: "5L", price: 36, packUnits: 2, packPrice: 72 }
    ],
    technicalSheet: {
      activePrinciple: "Hipoclorito de sodio estabilizado",
      concentration: "Bidón 5 Litros - 25 g de Cloro Activo por Litro al envasar",
      ph: "11.5",
      dilution: "Cocinas y baños: 1 taza en 5L de agua. Utensilios: 1/2 taza en 5L.",
      applications: ["Desinfección de pisos, inodoros, mesones y blanqueo de ropa blanca"],
      precautions: ["No mezclar con amoníaco ni ácidos"],
      certifications: ["Registro Sanitario Oficial", "Línea Maxi Brill"]
    }
  },
  {
    id: "max-lav-10932",
    sku: "CODIGO 10932",
    name: "MAXIBRILL Lavandina",
    shortDescription: "Lavandina concentrada desinfectante con 5X más poder, desinfecta, blanquea y limpia",
    categoryId: "lavandinas",
    brand: "MAXI BRILL",
    imageUrl: "/31.png",
    defaultPresentation: "2 L",
    price: 16,
    packUnits: 6,
    packPrice: 96,
    inStock: true,
    stockCount: 6,
    featured: true,
    presentations: [
      { name: "2 L", volume: "2L", price: 16, packUnits: 6, packPrice: 96 }
    ],
    technicalSheet: {
      activePrinciple: "Hipoclorito de sodio 30 g/L con fórmula 5X Más Poder",
      concentration: "Botella familiar 2 Litros con agarre anatómico",
      ph: "11.5",
      dilution: "Desinfección profunda: 1/2 taza en un balde de agua.",
      applications: ["Sanitarios, baldosas, lavado de ropa blanca y desinfección"],
      precautions: ["Usar en ambientes ventilados"],
      certifications: ["Registro Sanitario Oficial", "Línea Maxi Brill"]
    }
  },
  {
    id: "max-lav-10931",
    sku: "CODIGO 10931",
    name: "MAXIBRILL Lavandina",
    shortDescription: "Lavandina concentrada desinfectante con 5X más poder, desinfecta, blanquea y limpia",
    categoryId: "lavandinas",
    brand: "MAXI BRILL",
    imageUrl: "/30.png",
    defaultPresentation: "1 L",
    price: 9,
    packUnits: 12,
    packPrice: 108,
    inStock: true,
    stockCount: 12,
    featured: true,
    presentations: [
      { name: "1 L", volume: "1L", price: 9, packUnits: 12, packPrice: 108 }
    ],
    technicalSheet: {
      activePrinciple: "Hipoclorito de sodio 30 g/L con fórmula 5X Más Poder",
      concentration: "Botella 1 Litro con tapa de seguridad",
      ph: "11.5",
      dilution: "Desinfección general: 2 cucharadas soperas por litro de agua.",
      applications: ["Sanitarios, mesadas de cocina, lavado de verduras y blanqueo"],
      precautions: ["Mantener fuera del alcance de niños y mascotas"],
      certifications: ["Registro Sanitario Oficial", "Línea Maxi Brill"]
    }
  },

  // 5. LIMPIA VIDRIOS
  {
    id: "max-vid-10425",
    sku: "CODIGO 10425",
    name: "MAXIBRILL Limpia vidrios",
    shortDescription: "Brilla más, limpia mejor con tecnología anti-rayas y anti-empañante para cristales y ventanas",
    categoryId: "cuidado-institucional-manos",
    brand: "MAXI BRILL",
    imageUrl: "/19.png",
    defaultPresentation: "5 L",
    price: 45,
    packUnits: 2,
    packPrice: 90,
    inStock: true,
    stockCount: 2,
    featured: true,
    presentations: [
      { name: "5 L", volume: "5L", price: 45, packUnits: 2, packPrice: 90 }
    ],
    technicalSheet: {
      activePrinciple: "Alcohol isopropílico de alta pureza + tensioactivos volátiles anti-rayas",
      concentration: "Bidón 5 Litros fórmula profesional de secado rápido sin marcas",
      ph: "7.5",
      dilution: "Uso directo en pulverizador con paño de microfibra.",
      applications: ["Ventanas, vidrieras comerciales, espejos, vitrinas y parabrisas"],
      precautions: ["Mantener alejado de fuego directo"],
      certifications: ["Registro Sanitario Oficial", "Línea Maxi Brill"]
    }
  },
  {
    id: "max-vid-10442",
    sku: "CODIGO 10442",
    name: "MAXIBRILL Limpia vidrios (Gatillo)",
    shortDescription: "Tecnología anti-rayas y anti-empañados con gatillo pulverizador direccionable de alta precisión",
    categoryId: "cuidado-institucional-manos",
    brand: "MAXI BRILL",
    imageUrl: "/20.png",
    defaultPresentation: "900 ml",
    price: 16,
    packUnits: 12,
    packPrice: 192,
    inStock: true,
    stockCount: 12,
    featured: true,
    presentations: [
      { name: "900 ml", volume: "900ml", price: 16, packUnits: 12, packPrice: 192 }
    ],
    technicalSheet: {
      activePrinciple: "Tecnología anti-rayas y anti-empañados con pulverización microfina",
      concentration: "Botella ergonómica de 900 ml con gatillo pulverizador de alta precisión",
      ph: "7.5",
      dilution: "Aplicación directa sobre el cristal y secado con paño limpio o papel absorbente.",
      applications: ["Vidrios, cristales, espejos, vitrinas, mamparas y pantallas"],
      precautions: ["No aplicar bajo los rayos directos del sol para evitar evaporación prematura"],
      certifications: ["Registro Sanitario Oficial", "Línea Maxi Brill"]
    }
  },
  {
    id: "max-vid-10443",
    sku: "CODIGO 10443",
    name: "MAXIBRILL Limpia vidrios (Recarga)",
    shortDescription: "Envase económico de recarga para trasvasar al atomizador con fórmula anti-rayas",
    categoryId: "cuidado-institucional-manos",
    brand: "MAXI BRILL",
    imageUrl: "/21.png",
    defaultPresentation: "900 ml",
    price: 13,
    packUnits: 12,
    packPrice: 156,
    inStock: true,
    stockCount: 12,
    featured: true,
    presentations: [
      { name: "900 ml", volume: "900ml", price: 13, packUnits: 12, packPrice: 156 }
    ],
    technicalSheet: {
      activePrinciple: "Alcohol isopropílico de alta pureza + tensioactivos volátiles anti-rayas",
      concentration: "Envase económico de recarga 900 ml para trasvasar al atomizador",
      ph: "7.5",
      dilution: "Uso directo sin diluir para recargar el envase con gatillo pulverizador.",
      applications: ["Recarga económica para espejos, vidrieras, mostradores y cristalería"],
      precautions: ["Conservar bien cerrado en lugar fresco"],
      certifications: ["Registro Sanitario Oficial", "Línea Maxi Brill"]
    }
  },

  // 6. SACAGRASAS
  {
    id: "max-sac-10417",
    sku: "CODIGO 10417",
    name: "MAXIBRILL Sacagrasa",
    shortDescription: "Antigrasa y desengrasante de máxima acción para hornos, cocinas industriales y parrillas",
    categoryId: "lavavajillas-cocina",
    brand: "MAXI BRILL",
    imageUrl: "/15.png",
    defaultPresentation: "5 L",
    price: 55,
    packUnits: 2,
    packPrice: 110,
    inStock: true,
    stockCount: 2,
    featured: true,
    presentations: [
      { name: "5 L", volume: "5L", price: 55, packUnits: 2, packPrice: 110 }
    ],
    technicalSheet: {
      activePrinciple: "Hidróxido potásico estabilizado + Solventes de grasa polimerizada y carbonilla",
      concentration: "Bidón institucional 5 Litros de alto rendimiento desengrasante",
      ph: "12.5",
      dilution: "Grasa pesada: puro. Mantenimiento general: 1:3 con agua caliente.",
      applications: ["Restaurantes, confiterías, catering, hornos rotativos y asadores"],
      precautions: ["Usar guantes de goma reforzada y protección ocular"],
      certifications: ["Registro Sanitario Oficial", "Línea Maxi Brill"]
    }
  },
  {
    id: "max-sac-10415",
    sku: "CODIGO 10415",
    name: "MAXIBRILL Sacagrasa (Gatillo)",
    shortDescription: "Antigrasa y desengrasante con gatillo pulverizador ergonómico de amplio abanico",
    categoryId: "lavavajillas-cocina",
    brand: "MAXI BRILL",
    imageUrl: "/14.png",
    defaultPresentation: "900 ml",
    price: 16,
    packUnits: 12,
    packPrice: 192,
    inStock: true,
    stockCount: 12,
    featured: true,
    presentations: [
      { name: "900 ml", volume: "900ml", price: 16, packUnits: 12, packPrice: 192 }
    ],
    technicalSheet: {
      activePrinciple: "Solventes desengrasantes penetrantes con pulverización en espuma activa",
      concentration: "Envase ergonómico de 900 ml con gatillo pulverizador de amplio abanico",
      ph: "12.0",
      dilution: "Aplicación directa con gatillo. Dejar actuar 3 a 5 minutos y retirar con paño.",
      applications: ["Mesones de acero inoxidable, azulejos de cocina, campanas y quemadores"],
      precautions: ["No aplicar sobre superficies calientes mayores a 60°C"],
      certifications: ["Registro Sanitario Oficial", "Línea Maxi Brill"]
    }
  },
  {
    id: "max-sac-10113",
    sku: "CODIGO 10113",
    name: "MAXIBRILL Sacagrasa (Recarga)",
    shortDescription: "Fórmula de recarga económica 900 ml para disolver grasa pesada al contacto",
    categoryId: "lavavajillas-cocina",
    brand: "MAXI BRILL",
    imageUrl: "/13.png",
    defaultPresentation: "900 ml",
    price: 8,
    packUnits: 12,
    packPrice: 96,
    inStock: true,
    stockCount: 12,
    featured: true,
    presentations: [
      { name: "900 ml", volume: "900ml", price: 8, packUnits: 12, packPrice: 96 }
    ],
    technicalSheet: {
      activePrinciple: "Solventes orgánicos desengrasantes + Tensoactivos aniónicos alcalinos",
      concentration: "Fórmula de recarga económica 900 ml para disolver grasa pesada al contacto",
      ph: "12.0",
      dilution: "Uso directo sin diluir en envase con atomizador.",
      applications: ["Hornos, campanas, freidoras, cocinas industriales y parrillas"],
      precautions: ["Usar guantes de limpieza. Evitar contacto con ojos"],
      certifications: ["Registro Sanitario Oficial", "Línea Maxi Brill"]
    }
  },

  // 7. SUAVIZANTES
  {
    id: "max-sua-10410",
    sku: "CODIGO 10410",
    name: "MAXIBRILL Suavizante Clasic",
    shortDescription: "Suavizante para ropa con microcápsulas de perfume Classic para máxima suavidad",
    categoryId: "detergentes-lavanderia",
    brand: "MAXI BRILL",
    imageUrl: "/11.png",
    defaultPresentation: "5 L",
    price: 55,
    packUnits: 2,
    packPrice: 110,
    inStock: true,
    stockCount: 2,
    featured: true,
    presentations: [
      { name: "5 L", volume: "5L", price: 55, packUnits: 2, packPrice: 110 }
    ],
    technicalSheet: {
      activePrinciple: "Sales de amonio cuaternario catiónicas suavizantes + Microcápsulas de perfume Classic",
      concentration: "Fórmula Concentrada Textil con agentes antiestáticos para máxima suavidad",
      ph: "4.5 - 5.5",
      dilution: "50 ml por ciclo de enjuague en lavadora o tina.",
      applications: ["Prendas de vestir, sábanas, toallas y mantelería institucional"],
      precautions: ["No aplicar directamente concentrado sobre la tela"],
      certifications: ["Registro Sanitario Oficial", "Línea Maxi Brill"]
    }
  },
  {
    id: "max-sua-10412",
    sku: "CODIGO 10412",
    name: "MAXIBRILL Suavizante Floral",
    shortDescription: "Suavizante para ropa con microcápsulas de perfume Floral de aroma prolongado",
    categoryId: "detergentes-lavanderia",
    brand: "MAXI BRILL",
    imageUrl: "/12.png",
    defaultPresentation: "5 L",
    price: 55,
    packUnits: 2,
    packPrice: 110,
    inStock: true,
    stockCount: 2,
    featured: true,
    presentations: [
      { name: "5 L", volume: "5L", price: 55, packUnits: 2, packPrice: 110 }
    ],
    technicalSheet: {
      activePrinciple: "Sales de amonio cuaternario catiónicas suavizantes + Microcápsulas de fragancia Floral",
      concentration: "Acondicionador de fibras para ropa con aroma floral prolongado",
      ph: "4.5 - 5.5",
      dilution: "50 ml por ciclo de enjuague en lavadora o tina.",
      applications: ["Prendas de vestir, sábanas, toallas y mantelería institucional"],
      precautions: ["No aplicar directamente concentrado sobre la tela"],
      certifications: ["Registro Sanitario Oficial", "Línea Maxi Brill"]
    }
  },

  // 8. LIMPIA BAÑOS
  {
    id: "max-ban-10421",
    sku: "CODIGO 10421",
    name: "MAXIBRILL Limpia Baños",
    shortDescription: "Fórmula antisarro y desinfectante que elimina 99.9% de virus y bacterias en sanitarios y azulejos",
    categoryId: "cuidado-pisos",
    brand: "MAXI BRILL",
    imageUrl: "/16.png",
    defaultPresentation: "5 L",
    price: 75,
    packUnits: 2,
    packPrice: 150,
    inStock: true,
    stockCount: 2,
    featured: true,
    presentations: [
      { name: "5 L", volume: "5L", price: 75, packUnits: 2, packPrice: 150 }
    ],
    technicalSheet: {
      activePrinciple: "Ácido orgánico desincrustante + Amonio Cuaternario",
      concentration: "Bidón 5 Litros fórmula concentrada antisarro y antibacterial 99.9%",
      ph: "2.5",
      dilution: "Puro en inodoros y juntas con sarro. 1:10 para pisos de baño y azulejos.",
      applications: ["Inodoros, lavamanos, griferías, cerámicas y mamparas de ducha"],
      precautions: ["Usar guantes. No mezclar con lavandina ni amoníaco"],
      certifications: ["Registro Sanitario Oficial", "Línea Maxi Brill"]
    }
  },
  {
    id: "max-ban-10436",
    sku: "CODIGO 10436",
    name: "MAXIBRILL Limpia Baños (Gatillo)",
    shortDescription: "Botella ergonómica de 920 ml con gatillo pulverizador y espuma desincrustante antisarro",
    categoryId: "cuidado-pisos",
    brand: "MAXI BRILL",
    imageUrl: "/17.png",
    defaultPresentation: "920 ml",
    price: 22,
    packUnits: 12,
    packPrice: 264,
    inStock: true,
    stockCount: 12,
    featured: true,
    presentations: [
      { name: "920 ml", volume: "920ml", price: 22, packUnits: 12, packPrice: 264 }
    ],
    technicalSheet: {
      activePrinciple: "Fórmula en pulverizador con espuma desincrustante de sarro + Bactericida 99.9%",
      concentration: "Botella ergonómica de 920 ml con gatillo pulverizador direccionable",
      ph: "2.5",
      dilution: "Aplicación directa con gatillo. Dejar actuar de 3 a 5 minutos y frotar suavemente.",
      applications: ["Inodoros, bachas, grifería cromada, azulejos y mamparas"],
      precautions: ["Evitar contacto con ojos y piel sensible. Usar guantes"],
      certifications: ["Registro Sanitario Oficial", "Línea Maxi Brill"]
    }
  },
  {
    id: "max-ban-10437",
    sku: "CODIGO 10437",
    name: "MAXIBRILL Limpia Baños (Recarga)",
    shortDescription: "Envase económico de recarga 920 ml para trasvasar al pulverizador con gatillo",
    categoryId: "cuidado-pisos",
    brand: "MAXI BRILL",
    imageUrl: "/18.png",
    defaultPresentation: "920 ml",
    price: 18,
    packUnits: 12,
    packPrice: 216,
    inStock: true,
    stockCount: 12,
    featured: true,
    presentations: [
      { name: "920 ml", volume: "920ml", price: 18, packUnits: 12, packPrice: 216 }
    ],
    technicalSheet: {
      activePrinciple: "Ácido orgánico desincrustante + Amonio Cuaternario",
      concentration: "Envase económico de recarga 920 ml para trasvasar a atomizador",
      ph: "2.5",
      dilution: "Uso directo sin diluir para recargar el pulverizador con gatillo.",
      applications: ["Recarga directa para limpieza profunda y remoción de manchas de óxido y sarro"],
      precautions: ["Mantener alejado de los niños. Usar protección en manos"],
      certifications: ["Registro Sanitario Oficial", "Línea Maxi Brill"]
    }
  }
];

export const COMPANY_INFO = {
  name: "PROESA Distribuidora",
  address: "calle Ostria Reyes 432",
  city: "Sucre, Bolivia",
  phones: ["72853351", "72873510"],
  primaryPhone: "72853351",
  whatsappUrl: (msg: string) => `https://wa.me/59172853351?text=${encodeURIComponent(msg)}`
};

import { Category, Product } from '../types';

export const CATEGORIES: Category[] = [
  {
    id: 'desinfectantes',
    name: 'AROMATIZANTES',
    titleWithAccent: 'AROMATIZANTES',
    countLabel: '10 Prod.',
    referenceCount: 10,
    badgeColor: 'red',
    imageUrl: '/1.webp',
    description: 'Aromatizantes concentrados y limpiadores cremosos con diversas fragancias',
    subcategories: ['Todos', 'Lavanda', 'Floral', 'Pino', 'Cítrico', 'Multiuso']
  },
  {
    id: 'detergentes-lavanderia',
    name: 'SUAVISANTES',
    titleWithAccent: 'SUAVISANTES',
    countLabel: '2 Prod.',
    referenceCount: 2,
    badgeColor: 'gray',
    imageUrl: '/2.webp',
    description: 'Suavizantes para ropa con microcápsulas de perfume para máxima suavidad y aroma prolongado.',
    subcategories: ['Todos', 'Suavidad & Perfume', 'Concentrado', 'Textil']
  },
  {
    id: 'lavavajillas-cocina',
    name: 'SACAGRASAS',
    titleWithAccent: 'SACAGRASAS',
    countLabel: '3 Prod.',
    referenceCount: 3,
    badgeColor: 'red',
    imageUrl: '/3.webp',
    description: 'Antigrasas y desengrasantes de máxima acción para hornos, cocinas industriales y parrillas.',
    subcategories: ['Todos', 'Hornos & Parrillas', 'Cocinas Industriales', 'Cítrico']
  },
  {
    id: 'cuidado-pisos',
    name: 'LIMPIA BAÑOS',
    titleWithAccent: 'LIMPIA BAÑOS',
    countLabel: '3 Prod.',
    referenceCount: 3,
    badgeColor: 'gray',
    imageUrl: '/4.webp',
    description: 'Fórmula antisarro y desinfectante que elimina 99.9% de virus y bacterias en sanitarios y azulejos.',
    subcategories: ['Todos', 'Antisarro', 'Desinfección 99.9%', 'Brillo Máximo']
  },
  {
    id: 'cuidado-institucional-manos',
    name: 'LIMPIA VIDRIOS',
    titleWithAccent: 'LIMPIA VIDRIOS',
    countLabel: '3 Prod.',
    referenceCount: 3,
    badgeColor: 'red',
    imageUrl: '/5.webp',
    description: 'Limpiador de vidrios y cristales con tecnología anti-rayas, anti-empañado y brillo intenso.',
    subcategories: ['Todos', 'Anti-Rayas', 'Anti-Empaño', 'Cristales & Espejos']
  },
  {
    id: 'limpiavidrios-superficies',
    name: 'LIMPIAPISOS',
    titleWithAccent: 'LIMPIAPISOS',
    countLabel: '6 Prod.',
    referenceCount: 6,
    badgeColor: 'gray',
    imageUrl: '/22.webp',
    description: 'Limpiadores desinfectantes de pisos ultra concentrados con aromas de larga duración y brillo instantáneo.',
    subcategories: ['Todos', 'Flores de Primavera', 'Despertar de Energía', 'Espíritu Joven', 'Brisas del Bosque', 'Frescura de Lavanda', 'Alegra tu Día']
  },
  {
    id: 'lavavajillas',
    name: 'LAVAVAJILLAS',
    titleWithAccent: 'LAVAVAJILLAS',
    countLabel: '1 Prod.',
    referenceCount: 1,
    badgeColor: 'red',
    imageUrl: '/7.webp',
    description: 'Detergente lavavajillas líquido concentrado con alto poder desengrasante y aroma a limón.',
    subcategories: ['Todos', 'Limón Activo', 'Espuma Densa', 'Ultra Desengrasante']
  },
  {
    id: 'lavandinas',
    name: 'LAVANDINAS',
    titleWithAccent: 'LAVANDINAS',
    countLabel: '3 Prod.',
    referenceCount: 3,
    badgeColor: 'gray',
    imageUrl: '/8.webp',
    description: 'Agua lavandina concentrada 25 g Cl/L para desinfección en cocinas, baños y utensilios.',
    subcategories: ['Todos', 'Concentrada 25g', 'Blanqueo Textil', 'Desinfección Integral']
  }
];

export const PRODUCTS: Product[] = [
  // AROMATIZANTES (10 Productos oficiales Maxi Brill)
  {
    id: 'max-aro-10235',
    sku: 'CODIGO 10235',
    name: 'MAXIBRILL DESODORANTE LAVANDA LECHOSO',
    shortDescription: 'aromatizante concentrado y limpiador cremoso con fragancia a lavanda',
    categoryId: 'desinfectantes',
    brand: 'MAXI BRILL',
    imageUrl: '/1.webp',
    defaultPresentation: '900 ml.',
    presentations: [
      { name: '900 ml.', volume: '900ml', price: 14, wholesalePrice: 11 },
      { name: '5 litros.', volume: '5L', price: 38, wholesalePrice: 32 }
    ],
    price: 14,
    inStock: true,
    stockCount: 180,
    featured: true,
    technicalSheet: {
      activePrinciple: 'Amonio Cuaternario + Fragancia Francesa de Lavanda + Tensioactivos Biodegradables',
      concentration: 'Fórmula Cremosa Lechosa 4en1: Limpia, desinfecta, abrillanta y perfuma',
      ph: '7.0 Neutro (no daña superficies ni manos)',
      dilution: '1:50 para pisos de alto tránsito. Puro en atomizador para baños y desengrase rápido.',
      applications: [
        'Pisos cerámicos, porcelanatos, mosaicos y pisos flotantes',
        'Oficinas, clínicas, colegios y salones de eventos',
        'Inodoros, lavamanos y áreas comunes'
      ],
      precautions: ['Mantener en envase original cerrado al resguardo de luz directa'],
      certifications: ['Registro Sanitario Oficial', 'Línea Maxi Brill']
    }
  },
  {
    id: 'max-aro-10237',
    sku: 'CODIGO 10237',
    name: 'MAXIBRILL DESODORANTE ARPEGE LECHOSO',
    shortDescription: 'aromatizante concentrado y limpiador cremoso con fragancia a arpege',
    categoryId: 'desinfectantes',
    brand: 'MAXI BRILL',
    imageUrl: '/12.webp',
    defaultPresentation: '900 ml.',
    presentations: [
      { name: '900 ml.', volume: '900ml', price: 14, wholesalePrice: 11 },
      { name: '5 litros.', volume: '5L', price: 38, wholesalePrice: 32 }
    ],
    price: 14,
    inStock: true,
    stockCount: 160,
    featured: true,
    technicalSheet: {
      activePrinciple: 'Amonio Cuaternario + Esencia Fina Tipo Arpège + Emulsión Lechosa',
      concentration: 'Fórmula Concentrada Cremosa Lechosa con fijador de aroma prolongado',
      ph: '7.0 Neutro',
      dilution: '1:50 para trapeado diario. Puro para aromatización instantánea de ambientes.',
      applications: [
        'Hoteles, recepciones, oficinas corporativas y centros comerciales',
        'Pisos de madera tratada, porcelanatos y mármol',
        'Sanitarios y pasillos de alto tránsito'
      ],
      precautions: ['Mantener fuera del alcance de los niños'],
      certifications: ['Registro Sanitario Oficial', 'Línea Maxi Brill Aromaty']
    }
  },
  {
    id: 'max-aro-10238',
    sku: 'CODIGO 10238',
    name: 'MAXIBRILL DESODORANTE LAVANDA LECHOSO',
    shortDescription: 'aromatizante concentrado y limpiador cremoso con fragancia a lavanda',
    categoryId: 'desinfectantes',
    brand: 'MAXI BRILL',
    imageUrl: '/1.webp',
    defaultPresentation: '5 litros.',
    presentations: [
      { name: '5 litros.', volume: '5L', price: 38, wholesalePrice: 32 },
      { name: '900 ml.', volume: '900ml', price: 14, wholesalePrice: 11 }
    ],
    price: 38,
    inStock: true,
    stockCount: 220,
    featured: true,
    technicalSheet: {
      activePrinciple: 'Amonio Cuaternario + Fragancia Francesa de Lavanda + Tensioactivos Biodegradables',
      concentration: 'Presentación Bidón Económico 5 Litros fórmula concentrada lechosa',
      ph: '7.0 Neutro',
      dilution: '1:50 para pisos de alto tránsito. Rinde hasta 250 litros de solución.',
      applications: [
        'Instituciones educativas, sanatorios y salones comunitarios',
        'Pisos cerámicos, baldosas y azulejos',
        'Desinfección y aromatización integral'
      ],
      precautions: ['Conservar en lugar fresco y seco'],
      certifications: ['Registro Sanitario Oficial', 'Línea Maxi Brill']
    }
  },
  {
    id: 'max-aro-10239',
    sku: 'CODIGO 10239',
    name: 'MAXIBRILL DESODORANTE ARPEGE LECHOSO',
    shortDescription: 'aromatizante concentrado y limpiador cremoso con fragancia a arpege',
    categoryId: 'desinfectantes',
    brand: 'MAXI BRILL',
    imageUrl: '/1.webp',
    defaultPresentation: '5 litros.',
    presentations: [
      { name: '5 litros.', volume: '5L', price: 38, wholesalePrice: 32 },
      { name: '900 ml.', volume: '900ml', price: 14, wholesalePrice: 11 }
    ],
    price: 38,
    inStock: true,
    stockCount: 190,
    featured: true,
    technicalSheet: {
      activePrinciple: 'Amonio Cuaternario + Esencia Fina Tipo Arpège + Emulsión Lechosa',
      concentration: 'Fórmula Profesional 5 Litros de alto rendimiento aromatizante',
      ph: '7.0 Neutro',
      dilution: '1:50 para pisos de gran superficie y áreas comunes.',
      applications: [
        'Empresas de limpieza, edificios y condominios residenciales',
        'Vestíbulos, pasillos y áreas recreativas',
        'Superficies lavables en general'
      ],
      precautions: ['Uso industrial y doméstico seguro'],
      certifications: ['Registro Sanitario Oficial', 'Línea Maxi Brill']
    }
  },
  {
    id: 'max-aro-10240',
    sku: 'CODIGO 10240',
    name: 'MAXIBRILL DESODORANTE FRUTILLA',
    shortDescription: 'aromatizante concentrado y limpiador cremoso con fragancia a frutilla',
    categoryId: 'desinfectantes',
    brand: 'MAXI BRILL',
    imageUrl: '/15.webp',
    defaultPresentation: '900 ml.',
    presentations: [
      { name: '900 ml.', volume: '900ml', price: 14, wholesalePrice: 11 },
      { name: '5 litros.', volume: '5L', price: 38, wholesalePrice: 32 }
    ],
    price: 14,
    inStock: true,
    stockCount: 175,
    featured: true,
    technicalSheet: {
      activePrinciple: 'Tensoactivos biodegradables + Fragancia Frutal Dulce Frutilla Silvestre',
      concentration: 'Desodorante ambiental líquido concentrado color rojo rubí',
      ph: '7.0 Neutro',
      dilution: '1:40 en agua para trapeado perfumado con aroma frutal vibrante.',
      applications: [
        'Guarderías, salas de juego, salones infantiles y comercios',
        'Pisos vinílicos, cerámicos y flotantes',
        'Eliminación de malos olores y ambientación dulce'
      ],
      precautions: ['No apto para consumo humano'],
      certifications: ['Registro Sanitario Oficial', 'Línea Maxi Brill']
    }
  },
  {
    id: 'max-aro-10241',
    sku: 'CODIGO 10241',
    name: 'MAXIBRILL DESODORANTE FRUTILLA',
    shortDescription: 'aromatizante concentrado y limpiador cremoso con fragancia a frutilla',
    categoryId: 'desinfectantes',
    brand: 'MAXI BRILL',
    imageUrl: '/15.webp',
    defaultPresentation: '5 litros.',
    presentations: [
      { name: '5 litros.', volume: '5L', price: 38, wholesalePrice: 32 },
      { name: '900 ml.', volume: '900ml', price: 14, wholesalePrice: 11 }
    ],
    price: 38,
    inStock: true,
    stockCount: 185,
    featured: true,
    technicalSheet: {
      activePrinciple: 'Tensoactivos biodegradables + Fragancia Frutal Dulce Frutilla Silvestre',
      concentration: 'Bidón 5 Litros ahorro institucional con fragancia envolvente',
      ph: '7.0 Neutro',
      dilution: '1:50 para mantenimiento continuo de pisos y espacios cerrados.',
      applications: [
        'Restaurantes, heladerías, cines y áreas comerciales',
        'Pisos de alto tránsito y zonas recreativas',
        'Aromatización continua'
      ],
      precautions: ['Mantener alejado de alimentos'],
      certifications: ['Registro Sanitario Oficial', 'Línea Maxi Brill']
    }
  },
  {
    id: 'max-aro-10242',
    sku: 'CODIGO 10242',
    name: 'MAXIBRILL DESODORANTE LAVANDA',
    shortDescription: 'aromatizante concentrado y limpiador cremoso con fragancia a lavanda',
    categoryId: 'desinfectantes',
    brand: 'MAXI BRILL',
    imageUrl: '/17.webp',
    defaultPresentation: '900 ml.',
    presentations: [
      { name: '900 ml.', volume: '900ml', price: 14, wholesalePrice: 11 },
      { name: '5 litros.', volume: '5L', price: 38, wholesalePrice: 32 }
    ],
    price: 14,
    inStock: true,
    stockCount: 200,
    featured: true,
    technicalSheet: {
      activePrinciple: 'Cloruro de Benzalconio + Esencia Concentrada de Lavanda Silvestre',
      concentration: 'Desodorante ambiental líquido translúcido violeta intenso',
      ph: '7.0 Neutro',
      dilution: '1:50 para limpieza desinfectante y perfumada de pisos y paredes.',
      applications: [
        'Dormitorios, residencias, oficinas y salas de espera',
        'Pisos cerámicos, terrazos y azulejos',
        'Acción relajante y desodorizante continua'
      ],
      precautions: ['En caso de salpicadura en ojos enjuagar con agua'],
      certifications: ['Registro Sanitario Oficial', 'Línea Maxi Brill']
    }
  },
  {
    id: 'max-aro-10243',
    sku: 'CODIGO 10243',
    name: 'MAXIBRILL DESODORANTE LAVANDA',
    shortDescription: 'aromatizante concentrado y limpiador cremoso con fragancia a lavanda',
    categoryId: 'desinfectantes',
    brand: 'MAXI BRILL',
    imageUrl: '/17.webp',
    defaultPresentation: '5 litros.',
    presentations: [
      { name: '5 litros.', volume: '5L', price: 38, wholesalePrice: 32 },
      { name: '900 ml.', volume: '900ml', price: 14, wholesalePrice: 11 }
    ],
    price: 38,
    inStock: true,
    stockCount: 210,
    featured: true,
    technicalSheet: {
      activePrinciple: 'Cloruro de Benzalconio + Esencia Concentrada de Lavanda Silvestre',
      concentration: 'Bidón 5 Litros desodorante ambiental de duración prolongada',
      ph: '7.0 Neutro',
      dilution: '1:50 en agua tibia o fría para pisos impecables con aroma a lavanda.',
      applications: [
        'Hoteles, clínicas, spas y centros terapéuticos',
        'Áreas comunes, pasillos y baños públicos',
        'Tratamiento de pisos lavables'
      ],
      precautions: ['Almacenar protegido de la luz solar directa'],
      certifications: ['Registro Sanitario Oficial', 'Línea Maxi Brill']
    }
  },
  {
    id: 'max-aro-10244',
    sku: 'CODIGO 10244',
    name: 'MAXIBRILL DESODORANTE PINO',
    shortDescription: 'aromatizante concentrado y limpiador cremoso con fragancia a pino',
    categoryId: 'desinfectantes',
    brand: 'MAXI BRILL',
    imageUrl: '/19.webp',
    defaultPresentation: '900 ml.',
    presentations: [
      { name: '900 ml.', volume: '900ml', price: 14, wholesalePrice: 11 },
      { name: '5 litros.', volume: '5L', price: 38, wholesalePrice: 32 }
    ],
    price: 14,
    inStock: true,
    stockCount: 190,
    featured: true,
    technicalSheet: {
      activePrinciple: 'Aceite Esencial de Pino Virgen + Agentes Emulsionantes Biodegradables',
      concentration: 'Desodorante ambiental líquido concentrado verde esmeralda',
      ph: '6.8 Neutro',
      dilution: '1:50 para trapeado diario. 1:20 para baños y neutralización de olores fuertes.',
      applications: [
        'Baños, gimnasios, vestuarios y estacionamientos',
        'Pisos de granito, mosaico, cemento y cerámica',
        'Frescura campestre duradera'
      ],
      precautions: ['No mezclar con lavandina'],
      certifications: ['Registro Sanitario Oficial', 'Línea Maxi Brill']
    }
  },
  {
    id: 'max-aro-10245',
    sku: 'CODIGO 10245',
    name: 'MAXIBRILL DESODORANTE PINO',
    shortDescription: 'aromatizante concentrado y limpiador cremoso con fragancia a pino',
    categoryId: 'desinfectantes',
    brand: 'MAXI BRILL',
    imageUrl: '/19.webp',
    defaultPresentation: '5 litros.',
    presentations: [
      { name: '5 litros.', volume: '5L', price: 38, wholesalePrice: 32 },
      { name: '900 ml.', volume: '900ml', price: 14, wholesalePrice: 11 }
    ],
    price: 38,
    inStock: true,
    stockCount: 230,
    featured: true,
    technicalSheet: {
      activePrinciple: 'Aceite Esencial de Pino Virgen + Agentes Emulsionantes Biodegradables',
      concentration: 'Bidón 5 Litros fórmula concentrada para alto rendimiento',
      ph: '6.8 Neutro',
      dilution: '1:50 para trapeado general de grandes extensiones.',
      applications: [
        'Plantas industriales, talleres, terminales y edificios públicos',
        'Superficies lavables resistentes',
        'Desodorización profunda'
      ],
      precautions: ['Conservar bien cerrado'],
      certifications: ['Registro Sanitario Oficial', 'Línea Maxi Brill']
    }
  },

  // SUAVISANTES
  {
    id: 'max-sua-10410',
    sku: 'CODIGO 10410',
    name: 'MAXIBRILL SUAVIZANTE CLASSIC',
    shortDescription: 'Suavizante para ropa con microcápsulas de perfume para máxima suavidad y aroma prolongado',
    categoryId: 'detergentes-lavanderia',
    brand: 'MAXI BRILL',
    imageUrl: '/21.webp',
    defaultPresentation: '5 litros.',
    presentations: [
      { name: '5 litros.', volume: '5L', price: 38, wholesalePrice: 32 }
    ],
    price: 38,
    inStock: true,
    stockCount: 140,
    featured: true,
    technicalSheet: {
      activePrinciple: 'Sales de amonio cuaternario catiónicas suavizantes + Microcápsulas de perfume Classic',
      concentration: 'Fórmula Concentrada Textil con agentes antiestáticos para máxima suavidad',
      ph: '4.5 - 5.5',
      dilution: '50 ml por ciclo de enjuague en lavadora o tina.',
      applications: ['Prendas de vestir, sábanas, toallas y mantelería institucional'],
      precautions: ['No aplicar directamente concentrado sobre la tela'],
      certifications: ['Registro Sanitario Oficial', 'Línea Maxi Brill']
    }
  },
  {
    id: 'max-sua-10412',
    sku: 'CODIGO 10412',
    name: 'MAXIBRILL SUAVIZANTE FLORAL',
    shortDescription: 'Suavizante para ropa con microcápsulas de perfume para máxima suavidad y aroma prolongado',
    categoryId: 'detergentes-lavanderia',
    brand: 'MAXI BRILL',
    imageUrl: '/21.webp',
    defaultPresentation: '5 litros.',
    presentations: [
      { name: '5 litros.', volume: '5L', price: 38, wholesalePrice: 32 }
    ],
    price: 38,
    inStock: true,
    stockCount: 135,
    featured: true,
    technicalSheet: {
      activePrinciple: 'Sales de amonio cuaternario catiónicas suavizantes + Microcápsulas de fragancia Floral',
      concentration: 'Acondicionador de fibras para ropa con aroma floral prolongado',
      ph: '4.5 - 5.5',
      dilution: '50 ml por ciclo de enjuague en lavadora o tina.',
      applications: ['Prendas de vestir, sábanas, toallas y mantelería institucional'],
      precautions: ['No aplicar directamente concentrado sobre la tela'],
      certifications: ['Registro Sanitario Oficial', 'Línea Maxi Brill']
    }
  },

  // SACAGRASAS
  {
    id: 'max-sac-10113',
    sku: 'CODIGO 10113',
    name: 'MAXIBRILL SACAGRASA (RECARGA)',
    shortDescription: 'Antigrasa y desengrasante de máxima acción para hornos, cocinas industriales y parrillas',
    categoryId: 'lavavajillas-cocina',
    brand: 'MAXI BRILL',
    imageUrl: '/3.webp',
    defaultPresentation: '500 ml.',
    presentations: [
      { name: '500 ml.', volume: '500ml', price: 12, wholesalePrice: 9 }
    ],
    price: 12,
    inStock: true,
    stockCount: 150,
    featured: true,
    technicalSheet: {
      activePrinciple: 'Solventes orgánicos desengrasantes + Tensoactivos aniónicos alcalinos',
      concentration: 'Fórmula de recarga económica para disolver grasa pesada al contacto',
      ph: '12.0',
      dilution: 'Uso directo sin diluir en envase con atomizador.',
      applications: ['Hornos, campanas, freidoras, cocinas industriales y parrillas'],
      precautions: ['Usar guantes de limpieza. Evitar contacto con ojos'],
      certifications: ['Registro Sanitario Oficial', 'Línea Maxi Brill']
    }
  },
  {
    id: 'max-sac-10415',
    sku: 'CODIGO 10415',
    name: 'MAXIBRILL SACAGRASA (GATILLO)',
    shortDescription: 'Antigrasa y desengrasante de máxima acción para hornos, cocinas industriales y parrillas',
    categoryId: 'lavavajillas-cocina',
    brand: 'MAXI BRILL',
    imageUrl: '/3.webp',
    defaultPresentation: '900 ml.',
    presentations: [
      { name: '900 ml.', volume: '900ml', price: 18, wholesalePrice: 15 }
    ],
    price: 18,
    inStock: true,
    stockCount: 160,
    featured: true,
    technicalSheet: {
      activePrinciple: 'Solventes desengrasantes penetrantes con pulverización en espuma activa',
      concentration: 'Envase ergonómico con gatillo pulverizador de amplio abanico',
      ph: '12.0',
      dilution: 'Aplicación directa con gatillo. Dejar actuar 3 a 5 minutos y retirar con paño.',
      applications: ['Mesones de acero inoxidable, azulejos de cocina, campanas y quemadores'],
      precautions: ['No aplicar sobre superficies calientes mayores a 60°C'],
      certifications: ['Registro Sanitario Oficial', 'Línea Maxi Brill']
    }
  },
  {
    id: 'max-sac-10417',
    sku: 'CODIGO 10417',
    name: 'MAXIBRILL SACAGRASA',
    shortDescription: 'Antigrasa y desengrasante de máxima acción para hornos, cocinas industriales y parrillas',
    categoryId: 'lavavajillas-cocina',
    brand: 'MAXI BRILL',
    imageUrl: '/3.webp',
    defaultPresentation: '5 litros.',
    presentations: [
      { name: '5 litros.', volume: '5L', price: 44, wholesalePrice: 38 }
    ],
    price: 44,
    inStock: true,
    stockCount: 140,
    featured: true,
    technicalSheet: {
      activePrinciple: 'Hidróxido potásico estabilizado + Solventes de grasa polimerizada y carbonilla',
      concentration: 'Bidón institucional 5 Litros de alto rendimiento desengrasante',
      ph: '12.5',
      dilution: 'Grasa pesada: puro. Mantenimiento general: 1:3 con agua caliente.',
      applications: ['Restaurantes, confiterías, catering, hornos rotativos y asadores'],
      precautions: ['Usar guantes de goma reforzada y protección ocular'],
      certifications: ['Registro Sanitario Oficial', 'Línea Maxi Brill']
    }
  },

  // LIMPIA BAÑOS
  {
    id: 'max-ban-10421',
    sku: 'CODIGO 10421',
    name: 'MAXIBRILL LIMPIA BAÑOS',
    shortDescription: 'Fórmula antisarro y desinfectante que elimina 99.9% de virus y bacterias en sanitarios y azulejos',
    categoryId: 'cuidado-pisos',
    brand: 'MAXI BRILL',
    imageUrl: '/4.webp',
    defaultPresentation: '5 litros.',
    presentations: [
      { name: '5 litros.', volume: '5L', price: 42, wholesalePrice: 35 }
    ],
    price: 42,
    inStock: true,
    stockCount: 140,
    featured: true,
    technicalSheet: {
      activePrinciple: 'Ácido orgánico desincrustante + Amonio Cuaternario',
      concentration: 'Bidón 5 Litros fórmula concentrada antisarro y antibacterial 99.9%',
      ph: '2.5',
      dilution: 'Puro en inodoros y juntas con sarro. 1:10 para pisos de baño y azulejos.',
      applications: ['Inodoros, lavamanos, griferías, cerámicas y mamparas de ducha'],
      precautions: ['Usar guantes. No mezclar con lavandina ni amoníaco'],
      certifications: ['Registro Sanitario Oficial', 'Línea Maxi Brill']
    }
  },
  {
    id: 'max-ban-10436',
    sku: 'CODIGO 10436',
    name: 'MAXIBRILL LIMPIA BAÑOS (GATILLO)',
    shortDescription: 'Fórmula antisarro y desinfectante que elimina 99.9% de virus y bacterias en sanitarios y azulejos',
    categoryId: 'cuidado-pisos',
    brand: 'MAXI BRILL',
    imageUrl: '/32.webp',
    defaultPresentation: '940 ml.',
    presentations: [
      { name: '940 ml.', volume: '940ml', price: 18, wholesalePrice: 15 }
    ],
    price: 18,
    inStock: true,
    stockCount: 170,
    featured: true,
    technicalSheet: {
      activePrinciple: 'Fórmula en pulverizador con espuma desincrustante de sarro + Bactericida 99.9%',
      concentration: 'Botella ergonómica de 940 ml con gatillo pulverizador direccionable',
      ph: '2.5',
      dilution: 'Aplicación directa con gatillo. Dejar actuar de 3 a 5 minutos y frotar suavemente.',
      applications: ['Inodoros, bachas, grifería cromada, azulejos y mamparas'],
      precautions: ['Evitar contacto con ojos y piel sensible. Usar guantes'],
      certifications: ['Registro Sanitario Oficial', 'Línea Maxi Brill']
    }
  },
  {
    id: 'max-ban-10437',
    sku: 'CODIGO 10437',
    name: 'MAXIBRILL LIMPIA BAÑOS (RECARGA)',
    shortDescription: 'Fórmula antisarro y desinfectante que elimina 99.9% de virus y bacterias en sanitarios y azulejos',
    categoryId: 'cuidado-pisos',
    brand: 'MAXI BRILL',
    imageUrl: '/33.webp',
    defaultPresentation: '940 ml.',
    presentations: [
      { name: '940 ml.', volume: '940ml', price: 14, wholesalePrice: 11 }
    ],
    price: 14,
    inStock: true,
    stockCount: 160,
    featured: true,
    technicalSheet: {
      activePrinciple: 'Ácido orgánico desincrustante + Amonio Cuaternario',
      concentration: 'Envase económico de recarga 940 ml para trasvasar a atomizador',
      ph: '2.5',
      dilution: 'Uso directo sin diluir para recargar el pulverizador con gatillo.',
      applications: ['Recarga directa para limpieza profunda y remoción de manchas de óxido y sarro'],
      precautions: ['Mantener alejado de los niños. Usar protección en manos'],
      certifications: ['Registro Sanitario Oficial', 'Línea Maxi Brill']
    }
  },

  // LIMPIA VIDRIOS
  {
    id: 'max-vid-10425',
    sku: 'CODIGO 10425',
    name: 'MAXIBRILL LIMPIA VIDRIOS',
    shortDescription: 'Brilla más, limpia mejor con tecnología anti-rayas y anti-empañante para cristales y ventanas',
    categoryId: 'cuidado-institucional-manos',
    brand: 'MAXI BRILL',
    imageUrl: '/5.webp',
    defaultPresentation: '5 litros.',
    presentations: [
      { name: '5 litros.', volume: '5L', price: 36, wholesalePrice: 30 }
    ],
    price: 36,
    inStock: true,
    stockCount: 150,
    featured: true,
    technicalSheet: {
      activePrinciple: 'Alcohol isopropílico de alta pureza + tensioactivos volátiles anti-rayas',
      concentration: 'Bidón 5 Litros fórmula profesional de secado rápido sin marcas',
      ph: '7.5',
      dilution: 'Uso directo en pulverizador con paño de microfibra.',
      applications: ['Ventanas, vidrieras comerciales, espejos, vitrinas y parabrisas'],
      precautions: ['Mantener alejado de fuego directo'],
      certifications: ['Registro Sanitario Oficial', 'Línea Maxi Brill']
    }
  },
  {
    id: 'max-vid-10442',
    sku: 'CODIGO 10442',
    name: 'MAXIBRILL LIMPIA VIDRIOS (GATILLO)',
    shortDescription: 'Brilla más, limpia mejor con tecnología anti-rayas y anti-empañante para cristales y ventanas',
    categoryId: 'cuidado-institucional-manos',
    brand: 'MAXI BRILL',
    imageUrl: '/52.webp',
    defaultPresentation: '940 ml.',
    presentations: [
      { name: '940 ml.', volume: '940ml', price: 18, wholesalePrice: 15 }
    ],
    price: 18,
    inStock: true,
    stockCount: 160,
    featured: true,
    technicalSheet: {
      activePrinciple: 'Tecnología anti-rayas y anti-empañados con pulverización microfina',
      concentration: 'Botella ergonómica de 940 ml con gatillo pulverizador de alta precisión',
      ph: '7.5',
      dilution: 'Aplicación directa sobre el cristal y secado con paño limpio o papel absorbente.',
      applications: ['Vidrios, cristales, espejos, vitrinas, mamparas y pantallas'],
      precautions: ['No aplicar bajo los rayos directos del sol para evitar evaporación prematura'],
      certifications: ['Registro Sanitario Oficial', 'Línea Maxi Brill']
    }
  },
  {
    id: 'max-vid-10443',
    sku: 'CODIGO 10443',
    name: 'MAXIBRILL LIMPIA VIDRIOS (RECARGA)',
    shortDescription: 'Brilla más, limpia mejor con tecnología anti-rayas y anti-empañante para cristales y ventanas',
    categoryId: 'cuidado-institucional-manos',
    brand: 'MAXI BRILL',
    imageUrl: '/53.webp',
    defaultPresentation: '940 ml.',
    presentations: [
      { name: '940 ml.', volume: '940ml', price: 14, wholesalePrice: 11 }
    ],
    price: 14,
    inStock: true,
    stockCount: 170,
    featured: true,
    technicalSheet: {
      activePrinciple: 'Alcohol isopropílico de alta pureza + tensioactivos volátiles anti-rayas',
      concentration: 'Envase económico de recarga 940 ml para trasvasar al atomizador',
      ph: '7.5',
      dilution: 'Uso directo sin diluir para recargar el envase con gatillo pulverizador.',
      applications: ['Recarga económica para espejos, vidrieras, mostradores y cristalería'],
      precautions: ['Conservar bien cerrado en lugar fresco'],
      certifications: ['Registro Sanitario Oficial', 'Línea Maxi Brill']
    }
  },

  // LIMPIAPISOS (22.webp)
  {
    id: 'max-pis-10444',
    sku: 'CODIGO 10444',
    name: 'MAXIBRILL LIMPIAPISOS ULTRA FLORES DE PRIMAVERA',
    shortDescription: 'Limpiador desinfectante concentrado con fragancia intensa a flores de primavera y brillo prolongado.',
    categoryId: 'limpiavidrios-superficies',
    brand: 'MAXI BRILL',
    imageUrl: '/22.webp',
    defaultPresentation: '6 litros.',
    presentations: [
      { name: '6 litros.', volume: '6L', price: 42, wholesalePrice: 35 }
    ],
    price: 42,
    inStock: true,
    stockCount: 190,
    featured: true,
    technicalSheet: {
      activePrinciple: 'Tensoactivos catiónicos + Perfume microencapsulado Flores de Primavera',
      concentration: 'Bidón 6 Litros fórmula ultra concentrada desinfectante',
      ph: '7.0 Neutro',
      dilution: '1/2 taza (100 ml) en balde con agua para trapeado perfumado.',
      applications: ['Pisos cerámicos, porcelanatos, flotantes, granito y multisuperficie'],
      precautions: ['Mantener fuera del alcance de los niños'],
      certifications: ['Registro Sanitario Oficial', 'Línea Maxi Brill']
    }
  },
  {
    id: 'max-pis-10447',
    sku: 'CODIGO 10447',
    name: 'MAXIBRILL LIMPIAPISOS ULTRA DESPERTAR DE ENERGIA',
    shortDescription: 'Limpiador desinfectante concentrado con fragancia energizante cítrica y acción multisuperficie.',
    categoryId: 'limpiavidrios-superficies',
    brand: 'MAXI BRILL',
    imageUrl: '/22.webp',
    defaultPresentation: '6 litros.',
    presentations: [
      { name: '6 litros.', volume: '6L', price: 42, wholesalePrice: 35 }
    ],
    price: 42,
    inStock: true,
    stockCount: 180,
    featured: true,
    technicalSheet: {
      activePrinciple: 'Tensoactivos catiónicos + Perfume microencapsulado Cítrico Energizante',
      concentration: 'Bidón 6 Litros fórmula ultra concentrada desinfectante',
      ph: '7.0 Neutro',
      dilution: '1/2 taza (100 ml) en balde con agua para trapeado perfumado.',
      applications: ['Pisos cerámicos, porcelanatos, flotantes, granito y multisuperficie'],
      precautions: ['Mantener fuera del alcance de los niños'],
      certifications: ['Registro Sanitario Oficial', 'Línea Maxi Brill']
    }
  },
  {
    id: 'max-pis-10448',
    sku: 'CODIGO 10448',
    name: 'MAXIBRILL LIMPIAPISOS ULTRA ESPIRITU JOVEN',
    shortDescription: 'Limpiador desinfectante concentrado con vibrante aroma juvenil de máxima frescura y brillo reluciente.',
    categoryId: 'limpiavidrios-superficies',
    brand: 'MAXI BRILL',
    imageUrl: '/22.webp',
    defaultPresentation: '6 litros.',
    presentations: [
      { name: '6 litros.', volume: '6L', price: 42, wholesalePrice: 35 }
    ],
    price: 42,
    inStock: true,
    stockCount: 175,
    featured: true,
    technicalSheet: {
      activePrinciple: 'Tensoactivos catiónicos + Perfume microencapsulado Frutal Fresco',
      concentration: 'Bidón 6 Litros fórmula ultra concentrada desinfectante',
      ph: '7.0 Neutro',
      dilution: '1/2 taza (100 ml) en balde con agua para trapeado perfumado.',
      applications: ['Pisos cerámicos, porcelanatos, flotantes, granito y multisuperficie'],
      precautions: ['Mantener fuera del alcance de los niños'],
      certifications: ['Registro Sanitario Oficial', 'Línea Maxi Brill']
    }
  },
  {
    id: 'max-pis-10453',
    sku: 'CODIGO 10453',
    name: 'MAXIBRILL LIMPIAPISOS ULTRA BRISAS DEL BOSQUE',
    shortDescription: 'Limpiador desinfectante concentrado con notas frescas herbales de pino y bosque para ambientes puros.',
    categoryId: 'limpiavidrios-superficies',
    brand: 'MAXI BRILL',
    imageUrl: '/22.webp',
    defaultPresentation: '6 litros.',
    presentations: [
      { name: '6 litros.', volume: '6L', price: 42, wholesalePrice: 35 }
    ],
    price: 42,
    inStock: true,
    stockCount: 185,
    featured: true,
    technicalSheet: {
      activePrinciple: 'Tensoactivos catiónicos + Esencia Herbal Silvestre Pino y Eucalipto',
      concentration: 'Bidón 6 Litros fórmula ultra concentrada desinfectante',
      ph: '7.0 Neutro',
      dilution: '1/2 taza (100 ml) en balde con agua para trapeado perfumado.',
      applications: ['Pisos cerámicos, porcelanatos, flotantes, granito y multisuperficie'],
      precautions: ['Mantener fuera del alcance de los niños'],
      certifications: ['Registro Sanitario Oficial', 'Línea Maxi Brill']
    }
  },
  {
    id: 'max-pis-10456',
    sku: 'CODIGO 10456',
    name: 'MAXIBRILL LIMPIAPISOS ULTRA FRESCURA DE LAVANDA',
    shortDescription: 'Limpiador desinfectante concentrado con aroma relajante a lavanda silvestre y secado rápido sin rayas.',
    categoryId: 'limpiavidrios-superficies',
    brand: 'MAXI BRILL',
    imageUrl: '/22.webp',
    defaultPresentation: '6 litros.',
    presentations: [
      { name: '6 litros.', volume: '6L', price: 42, wholesalePrice: 35 }
    ],
    price: 42,
    inStock: true,
    stockCount: 195,
    featured: true,
    technicalSheet: {
      activePrinciple: 'Tensoactivos catiónicos + Extracto aromático de Lavanda Francesa',
      concentration: 'Bidón 6 Litros fórmula ultra concentrada desinfectante',
      ph: '7.0 Neutro',
      dilution: '1/2 taza (100 ml) en balde con agua para trapeado perfumado.',
      applications: ['Pisos cerámicos, porcelanatos, flotantes, granito y multisuperficie'],
      precautions: ['Mantener fuera del alcance de los niños'],
      certifications: ['Registro Sanitario Oficial', 'Línea Maxi Brill']
    }
  },
  {
    id: 'max-pis-10459',
    sku: 'CODIGO 10459',
    name: 'MAXIBRILL LIMPIAPISOS ULTRA ALEGRA TU DIA',
    shortDescription: 'Limpiador desinfectante concentrado con fragancia fresca y alegre para pisos relucientes y perfumados.',
    categoryId: 'limpiavidrios-superficies',
    brand: 'MAXI BRILL',
    imageUrl: '/22.webp',
    defaultPresentation: '6 litros.',
    presentations: [
      { name: '6 litros.', volume: '6L', price: 42, wholesalePrice: 35 }
    ],
    price: 42,
    inStock: true,
    stockCount: 180,
    featured: true,
    technicalSheet: {
      activePrinciple: 'Tensoactivos catiónicos + Complejo Aromático Energizante Floral-Frutal',
      concentration: 'Bidón 6 Litros fórmula ultra concentrada desinfectante',
      ph: '7.0 Neutro',
      dilution: '1/2 taza (100 ml) en balde con agua para trapeado perfumado.',
      applications: ['Pisos cerámicos, porcelanatos, flotantes, granito y multisuperficie'],
      precautions: ['Mantener fuera del alcance de los niños'],
      certifications: ['Registro Sanitario Oficial', 'Línea Maxi Brill']
    }
  },

  // LAVAVAJILLAS (7.webp)
  {
    id: 'max-vaj-10462',
    sku: 'CODIGO 10462',
    name: 'MAXIBRILL LAVAVAJILLAS LIMON ULTRA',
    shortDescription: 'Detergente lavavajillas líquido concentrado con alto poder desengrasante cítrico, espuma densa y rendimiento superior.',
    categoryId: 'lavavajillas',
    brand: 'MAXI BRILL',
    imageUrl: '/7.webp',
    defaultPresentation: '5 litros.',
    presentations: [
      { name: '5 litros.', volume: '5L', price: 35, wholesalePrice: 29 }
    ],
    price: 35,
    inStock: true,
    stockCount: 190,
    featured: true,
    technicalSheet: {
      activePrinciple: 'Lauril éter sulfato + Tensoactivos cítricos biodegradables',
      concentration: 'Fórmula desengrasante concentrada con extracto natural de limón',
      ph: '7.0 Neutro para cuidado de manos',
      dilution: 'Unas gotas en esponja o 10 ml por bacha de agua.',
      applications: ['Vajilla, platos, ollas, cubiertos y cristalería gastronómica'],
      precautions: ['Enjuagar con agua potable'],
      certifications: ['Registro Sanitario Oficial', 'Línea Maxi Brill']
    }
  },

  // LAVANDINAS (8.webp, 82.webp)
  {
    id: 'max-lav-10919',
    sku: 'CODIGO 10919',
    name: 'MAXIBRILL LAVANDINA',
    shortDescription: 'Agua lavandina concentrada 25 g Cl/L para desinfección profunda 99.9%, blanqueo y sanitización.',
    categoryId: 'lavandinas',
    brand: 'MAXI BRILL',
    imageUrl: '/8.webp',
    defaultPresentation: '5 litros.',
    presentations: [
      { name: '5 litros.', volume: '5L', price: 28, wholesalePrice: 22 }
    ],
    price: 28,
    inStock: true,
    stockCount: 260,
    featured: true,
    technicalSheet: {
      activePrinciple: 'Hipoclorito de sodio estabilizado',
      concentration: 'Bidón 5 Litros - 25 g de Cloro Activo por Litro al envasar',
      ph: '11.5',
      dilution: 'Cocinas y baños: 1 taza en 5L de agua. Utensilios: 1/2 taza en 5L.',
      applications: ['Desinfección de pisos, inodoros, mesones y blanqueo de ropa blanca'],
      precautions: ['No mezclar con amoníaco ni ácidos'],
      certifications: ['Registro Sanitario Oficial', 'Línea Maxi Brill']
    }
  },
  {
    id: 'max-lav-10931',
    sku: 'CODIGO 10931',
    name: 'MAXIBRILL LAVANDINA',
    shortDescription: 'Lavandina concentrada desinfectante con 5X más poder, desinfecta, blanquea y limpia.',
    categoryId: 'lavandinas',
    brand: 'MAXI BRILL',
    imageUrl: '/82.webp',
    defaultPresentation: '1 litros.',
    presentations: [
      { name: '1 litros.', volume: '1L', price: 9, wholesalePrice: 7 }
    ],
    price: 9,
    inStock: true,
    stockCount: 280,
    featured: true,
    technicalSheet: {
      activePrinciple: 'Hipoclorito de sodio 30 g/L con fórmula 5X Más Poder',
      concentration: 'Botella 1 Litro con tapa de seguridad',
      ph: '11.5',
      dilution: 'Desinfección general: 2 cucharadas soperas por litro de agua.',
      applications: ['Sanitarios, mesadas de cocina, lavado de verduras y blanqueo'],
      precautions: ['Mantener fuera del alcance de niños y mascotas'],
      certifications: ['Registro Sanitario Oficial', 'Línea Maxi Brill']
    }
  },
  {
    id: 'max-lav-10932',
    sku: 'CODIGO 10932',
    name: 'MAXIBRILL LAVANDINA',
    shortDescription: 'Lavandina concentrada desinfectante con 5X más poder, desinfecta, blanquea y limpia.',
    categoryId: 'lavandinas',
    brand: 'MAXI BRILL',
    imageUrl: '/82.webp',
    defaultPresentation: '2 litros.',
    presentations: [
      { name: '2 litros.', volume: '2L', price: 16, wholesalePrice: 13 }
    ],
    price: 16,
    inStock: true,
    stockCount: 240,
    featured: true,
    technicalSheet: {
      activePrinciple: 'Hipoclorito de sodio 30 g/L con fórmula 5X Más Poder',
      concentration: 'Botella familiar 2 Litros con agarre anatómico',
      ph: '11.5',
      dilution: 'Desinfección profunda: 1/2 taza en un balde de agua.',
      applications: ['Sanitarios, baldosas, lavado de ropa blanca y desinfección'],
      precautions: ['Usar en ambientes ventilados'],
      certifications: ['Registro Sanitario Oficial', 'Línea Maxi Brill']
    }
  }
];

export const COMPANY_INFO = {
  name: 'PROESA Distribuidora',
  address: 'calle Ostria Reyes 432',
  city: 'Sucre, Bolivia',
  phones: ['72853351', '72873510'],
  primaryPhone: '72853351',
  whatsappUrl: (msg: string) => `https://wa.me/59172853351?text=${encodeURIComponent(msg)}`
};

export type PresentationOption = {
  name: string; // e.g. "1 Litro", "5 L", "900 ml"
  price: number; // in Bs. (precio por unidad)
  packUnits?: number; // unidades por pack
  packPrice?: number; // precio del pack en Bs.
  wholesalePrice?: number; // wholesale price for bulk
  skuModifier?: string;
  volume: string;
};

export type TechnicalSheet = {
  activePrinciple: string;
  concentration: string;
  ph: string;
  dilution: string;
  applications: string[];
  precautions: string[];
  certifications?: string[];
};

export type Product = {
  id: string;
  sku: string; // e.g. "CODIGO 10241"
  name: string;
  shortDescription: string;
  categoryId: string;
  brand: 'PROESA' | 'MAXI BRILL';
  imageUrl: string;
  defaultPresentation: string;
  presentations: PresentationOption[];
  price: number; // precio por unidad en Bs.
  packUnits?: number; // unidades por pack
  packPrice?: number; // precio de pack en Bs.
  inStock: boolean;
  stockCount: number;
  featured?: boolean;
  technicalSheet: TechnicalSheet;
};

export type Category = {
  id: string;
  name: string;
  titleWithAccent: string; // e.g. "Desinfectantes & Sanitizantes"
  countLabel: string; // e.g. "42 Prod." or "42 referencias"
  referenceCount: number;
  imageUrl: string;
  description: string;
  badgeColor?: 'red' | 'gray';
  subcategories: string[];
};

export type CartItem = {
  product: Product;
  presentation: PresentationOption;
  quantity: number;
};

export type AppBranding = {
  logoPrincipal: string; // Square image URL or base64 data URI
  logoSecundario: string; // Rectangular image URL or base64 data URI
  brandName?: string;
};

export type Solicitante = {
  nombre: string;
  direccion: string;
  celular: string;
};

export type Order = {
  id: string;
  orderNumber: string;
  date: string;
  customerName: string;
  phone: string;
  deliveryAddress: string;
  items: CartItem[];
  totalQuantity: number;
  total?: number;
  status: 'Pendiente' | 'Confirmado' | 'En Ruta' | 'Entregado';
  notes?: string;
};


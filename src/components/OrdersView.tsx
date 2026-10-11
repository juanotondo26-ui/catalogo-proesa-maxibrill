import React, { useState } from 'react';
import { Order, CartItem, Solicitante, Product } from '../types';
import { 
  User, 
  MapPin, 
  Phone, 
  Send, 
  ShoppingBag, 
  CheckCircle2, 
  Receipt, 
  AlertCircle
} from 'lucide-react';
import { COMPANY_INFO } from '../data/catalog';

interface OrdersViewProps {
  orders?: Order[];
  cartItems: CartItem[];
  catalogProducts?: Product[];
  onReorder?: (items: CartItem[]) => void;
  onExploreCatalog: () => void;
  onClearCart?: () => void;
  onOrderPlaced?: (order: Order) => void;
  onClearOrders?: () => void;
  onDeleteOrder?: (orderId: string) => void;
}

// Obtener el precio unitario exacto del catálogo
export const getCatalogUnitPrice = (item: CartItem, catalog?: Product[]): number => {
  if (typeof item.presentation?.price === 'number' && item.presentation.price > 0) {
    return item.presentation.price;
  }
  if (typeof item.product?.price === 'number' && item.product.price > 0) {
    return item.product.price;
  }
  if (catalog && catalog.length > 0) {
    const found = catalog.find((p) => p.id === item.product?.id || p.sku === item.product?.sku);
    if (found) {
      const matchPres = found.presentations.find((pr) => pr.name === item.presentation?.name);
      if (typeof matchPres?.price === 'number' && matchPres.price > 0) return matchPres.price;
      if (typeof found.price === 'number' && found.price > 0) return found.price;
    }
  }
  return 0;
};

// Calcular el precio parcial a cancelar por ítem de forma exacta
export const calculatePartialPrice = (item: CartItem, catalog?: Product[]): number => {
  const unitPrice = getCatalogUnitPrice(item, catalog);
  const qty = Number(item.quantity) || 0;
  return Math.round(unitPrice * qty * 100) / 100;
};

// Calcular el precio total a cancelar de un pedido de forma exacta
export const calculateTotalOrderPrice = (items: CartItem[], catalog?: Product[]): number => {
  return items.reduce((acc, item) => acc + calculatePartialPrice(item, catalog), 0);
};

// Formatear precios en Bs. con exactitud
export const formatBsPrice = (val: number): string => {
  return Number.isInteger(val) ? `${val} Bs.` : `${val.toFixed(2)} Bs.`;
};

export const OrdersView: React.FC<OrdersViewProps> = ({
  orders,
  cartItems,
  catalogProducts,
  onReorder,
  onExploreCatalog,
  onClearCart,
  onOrderPlaced,
  onClearOrders,
  onDeleteOrder
}) => {
  const [solicitante, setSolicitante] = useState<Solicitante>(() => {
    try {
      const saved = localStorage.getItem('proesa_solicitante');
      if (saved) return JSON.parse(saved);
    } catch (e) {
      console.error(e);
    }
    return {
      nombre: '',
      direccion: 'Sucre, ',
      celular: ''
    };
  });

  const [orderSent, setOrderSent] = useState(false);

  // Cantidad total y precio total de la solicitud actual
  const totalCantidadActual = cartItems.reduce((acc, item) => acc + (Number(item.quantity) || 0), 0);
  const totalBsActual = calculateTotalOrderPrice(cartItems, catalogProducts);

  const handleSendDirectWhatsApp = (e: React.FormEvent) => {
    e.preventDefault();

    if (!solicitante.nombre.trim()) {
      alert('Por favor introduce el Nombre del solicitante.');
      return;
    }
    if (!solicitante.direccion.trim()) {
      alert('Por favor introduce la Dirección del solicitante.');
      return;
    }
    if (!solicitante.celular.trim()) {
      alert('Por favor introduce el Número de Celular del solicitante.');
      return;
    }
    if (cartItems.length === 0) {
      alert('No tienes productos agregados a tu pedido. Explora el catálogo para agregar productos.');
      return;
    }

    try {
      localStorage.setItem('proesa_solicitante', JSON.stringify(solicitante));
    } catch (err) {
      console.error(err);
    }

    const orderNumber = `PRO-${Date.now().toString().slice(-6)}`;
    const newOrder: Order = {
      id: `ord-${Date.now()}`,
      orderNumber,
      date: new Date().toLocaleDateString('es-BO', {
        year: 'numeric',
        month: 'short',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit'
      }),
      customerName: solicitante.nombre,
      phone: solicitante.celular,
      deliveryAddress: solicitante.direccion,
      items: [...cartItems],
      totalQuantity: totalCantidadActual,
      total: totalBsActual,
      status: 'Pendiente'
    };

    if (onOrderPlaced) onOrderPlaced(newOrder);

    // Formatear mensaje detallado para WhatsApp con precios parciales y precio total en Bs.
    let msg = `🛒 *SOLICITUD DE PEDIDO - PROESA DISTRIBUIDORA*\n`;
    msg += `📋 *Pedido N°:* ${orderNumber}\n\n`;
    msg += `👤 *DATOS DEL SOLICITANTE:*\n`;
    msg += `• *Nombre:* ${solicitante.nombre}\n`;
    msg += `• *Dirección:* ${solicitante.direccion}\n`;
    msg += `• *Celular:* ${solicitante.celular}\n\n`;
    msg += `📦 *DETALLE DE PRODUCTOS Y PRECIOS A CANCELAR:*\n`;

    cartItems.forEach((item, index) => {
      const unitPrice = getCatalogUnitPrice(item, catalogProducts);
      const subtotal = calculatePartialPrice(item, catalogProducts);
      msg += `${index + 1}. *${item.product.name}* (${item.product.sku})\n`;
      msg += `   └ Presentación: ${item.presentation.name}\n`;
      msg += `   └ Cantidad: ${item.quantity} ${item.quantity === 1 ? 'unidad' : 'unidades'}\n`;
      msg += `   └ Precio Unitario: ${formatBsPrice(unitPrice)}\n`;
      msg += `   └ *Precio Parcial a Cancelar: ${formatBsPrice(subtotal)}*\n`;
      if (item.product.packPrice && item.product.packUnits) {
        msg += `      (Ref. PACK: ${item.product.packPrice} Bs. x ${item.product.packUnits} unid.)\n`;
      }
    });

    msg += `\n📊 *RESUMEN TOTAL DEL PEDIDO:*\n`;
    msg += `• *Cantidad Total de Productos:* ${totalCantidadActual} unidades\n`;
    msg += `• *PRECIO TOTAL A CANCELAR:* *${formatBsPrice(totalBsActual)}*\n`;
    msg += `\n_Mensaje enviado al +591 72853351 desde el Catálogo PROESA Distribuidora (calle Ostria Reyes 432, Sucre)_`;

    const whatsappUrl = `https://wa.me/59172853351?text=${encodeURIComponent(msg)}`;
    window.open(whatsappUrl, '_blank');

    setOrderSent(true);
    if (onClearCart) {
      setTimeout(() => {
        onClearCart();
        setOrderSent(false);
      }, 1500);
    }
  };

  return (
    <div className="space-y-6 pb-12">
      {/* Header section */}
      <div className="flex items-center justify-between border-b border-[#E5E5E5] pb-3">
        <div>
          <h1 className="font-display font-black text-2xl text-[#1A1C1C] tracking-tight">
            Mis Pedidos
          </h1>
          <p className="text-xs sm:text-sm text-[#555555]">
            Revisa los precios parciales y el precio total de tus pedidos en Bs., con base en el catálogo oficial.
          </p>
        </div>

        <div className="flex items-center gap-1.5 bg-[#FFF0F0] text-[#C4272B] px-3 py-1 rounded-full border border-[#FFD0D0] text-xs font-bold">
          <Receipt className="w-4 h-4" />
          <span>Precios en Bs.</span>
        </div>
      </div>

      {/* ======================================================== */}
      {/* SECCIÓN 1: SOLICITUD DE PEDIDO ACTUAL */}
      {/* ======================================================== */}
      <div className="bg-[#F3F4F6] text-[#1A1C1C] border-2 border-[#000000] rounded-xl p-4 sm:p-5 shadow-[4px_4px_0px_#000000] space-y-4">
        <div className="flex items-center justify-between border-b border-[#D1D5DB] pb-3">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-[#C4272B] text-white flex items-center justify-center font-bold">
              <ShoppingBag className="w-4 h-4" />
            </div>
            <div>
              <h2 className="font-display font-black text-sm sm:text-base text-[#1A1C1C] uppercase tracking-wide">
                Solicitud de Pedido Actual
              </h2>
              <p className="text-xs text-[#555555]">
                {cartItems.length > 0 
                  ? `${cartItems.length} producto${cartItems.length > 1 ? 's' : ''} listo${cartItems.length > 1 ? 's' : ''} para cotizar y enviar`
                  : 'Agrega productos desde el catálogo para generar tu pedido'}
              </p>
            </div>
          </div>

          {cartItems.length > 0 && (
            <span className="bg-[#1A1C1C] text-white text-xs font-bold px-2.5 py-1 rounded-md">
              {totalCantidadActual} unid.
            </span>
          )}
        </div>

        {/* LISTA DETALLADA DE PRODUCTOS CON PRECIOS PARCIALES */}
        {cartItems.length > 0 ? (
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-[11px] font-bold uppercase text-[#444444] tracking-wider">
                Desglose de Productos Solicitados:
              </span>
              <span className="text-[11px] font-semibold text-[#737373]">
                Precios calculados del Catálogo Oficial
              </span>
            </div>

            <div className="space-y-2 max-h-72 overflow-y-auto pr-1">
              {cartItems.map((item, idx) => {
                const unitPrice = getCatalogUnitPrice(item, catalogProducts);
                const partialPrice = calculatePartialPrice(item, catalogProducts);

                return (
                  <div
                    key={`${item.product.id}-${item.presentation.name}-${idx}`}
                    className="p-3 bg-white rounded-xl border-2 border-[#000000] shadow-[2px_2px_0px_#000000] flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs"
                  >
                    {/* Producto Info e Imagen */}
                    <div className="flex items-center gap-3 min-w-0">
                      <div className="w-12 h-12 bg-[#F9F9F9] rounded-lg border border-[#E5E5E5] p-1 shrink-0 flex items-center justify-center">
                        <img
                          src={item.product.imageUrl}
                          alt={item.product.name}
                          className="w-full h-full object-contain"
                        />
                      </div>
                      <div className="min-w-0">
                        <div className="flex items-center gap-1.5">
                          <span className="text-[10px] font-bold text-[#C4272B] tnum bg-[#FFF0F0] px-1.5 py-0.2 rounded-xs">
                            {item.product.sku}
                          </span>
                          <span className="text-[10px] font-semibold text-gray-500 uppercase">
                            {item.product.brand}
                          </span>
                        </div>
                        <h4 className="font-display font-bold text-xs sm:text-sm text-[#1A1C1C] truncate">
                          {item.product.name}
                        </h4>
                        <div className="text-[11px] text-[#555555] flex flex-wrap items-center gap-2 mt-0.5">
                          <span>
                            Presentación: <strong className="text-[#1A1C1C]">{item.presentation.name}</strong>
                          </span>
                          <span className="text-gray-300">•</span>
                          <span>
                            Precio Unitario: <strong className="text-[#1A1C1C]">{formatBsPrice(unitPrice)}</strong>
                          </span>
                          {item.product.packPrice && item.product.packUnits && (
                            <>
                              <span className="text-gray-300">•</span>
                              <span className="text-amber-800 bg-amber-50 px-1 rounded-xs">
                                Ref. Pack ({item.product.packUnits} u.): {formatBsPrice(item.product.packPrice)}
                              </span>
                            </>
                          )}
                        </div>
                      </div>
                    </div>

                    {/* Cantidad y Precio Parcial a Cancelar */}
                    <div className="flex sm:flex-col items-center sm:items-end justify-between border-t sm:border-t-0 pt-2 sm:pt-0 border-gray-100 shrink-0">
                      <div className="text-[11px] text-[#444444]">
                        Cantidad: <strong className="text-[#1A1C1C] font-black">{item.quantity} {item.quantity === 1 ? 'unid.' : 'unid.'}</strong>
                      </div>
                      <div className="text-right">
                        <span className="text-[10px] uppercase font-bold text-[#737373] block">
                          Precio Parcial:
                        </span>
                        <span className="font-display font-black text-sm sm:text-base text-[#C4272B] bg-[#FFF0F0] px-2 py-0.5 rounded-md border border-[#FFD0D0] inline-block shadow-2xs tnum">
                          {formatBsPrice(partialPrice)}
                        </span>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* CUADRO RESUMEN DE TOTALES DEL PEDIDO ACTUAL */}
            <div className="bg-[#1A1C1C] text-white p-3.5 sm:p-4 rounded-xl border-2 border-[#000000] shadow-[3px_3px_0px_#C4272B] space-y-2 mt-3">
              <div className="flex items-center justify-between text-xs text-gray-300">
                <span>Subtotal de ítems:</span>
                <span className="font-semibold text-white tnum">{formatBsPrice(totalBsActual)}</span>
              </div>
              <div className="flex items-center justify-between text-xs text-gray-300">
                <span>Total de productos solicitados:</span>
                <span className="font-semibold text-white tnum">{totalCantidadActual} unidades</span>
              </div>
              <div className="border-t border-white/20 pt-2 flex items-center justify-between">
                <div>
                  <span className="text-xs uppercase tracking-wider text-[#FF9E9E] font-black block">
                    PRECIO TOTAL DEL PEDIDO A CANCELAR:
                  </span>
                  <span className="text-[10px] text-gray-300">
                    Monto final exacto según el catálogo oficial
                  </span>
                </div>
                <div className="text-right">
                  <span className="font-display font-black text-xl sm:text-2xl text-amber-300 bg-black/40 px-3 py-1 rounded-lg border border-white/20 tnum shadow-inner">
                    {formatBsPrice(totalBsActual)}
                  </span>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div className="p-6 bg-white rounded-xl border border-dashed border-[#CCCCCC] text-center space-y-3">
            <div className="w-12 h-12 bg-[#F3F4F6] text-[#737373] rounded-full flex items-center justify-center mx-auto">
              <ShoppingBag className="w-6 h-6" />
            </div>
            <div>
              <h3 className="font-display font-bold text-sm text-[#1A1C1C]">
                No tienes productos seleccionados actualmente
              </h3>
              <p className="text-xs text-[#737373] max-w-sm mx-auto mt-0.5">
                Selecciona productos desde el catálogo de distribución para calcular los precios parciales y el total a cancelar.
              </p>
            </div>
            <button
              type="button"
              onClick={onExploreCatalog}
              className="px-4 py-2 bg-[#C4272B] text-white rounded-lg text-xs font-bold hover:bg-[#A9171E] transition-colors cursor-pointer shadow-[2px_2px_0px_#000000]"
            >
              Explorar Catálogo de Distribución
            </button>
          </div>
        )}

        {/* FORMULARIO DE DATOS DEL SOLICITANTE */}
        <form onSubmit={handleSendDirectWhatsApp} className="space-y-3 pt-2 border-t border-[#D1D5DB]">
          <div className="flex items-center gap-2 mb-1">
            <User className="w-4 h-4 text-[#C4272B]" />
            <h3 className="font-display font-bold text-xs sm:text-sm text-[#1A1C1C] uppercase tracking-wide">
              Datos del Solicitante para Entrega y Pago
            </h3>
          </div>

          {/* Nombre */}
          <div>
            <label className="text-xs font-bold uppercase text-[#222222] block mb-1">
              Nombre del Solicitante o Institución *
            </label>
            <div className="relative">
              <User className="w-4 h-4 text-[#737373] absolute left-3 top-2.5" />
              <input
                type="text"
                required
                value={solicitante.nombre}
                onChange={(e) => setSolicitante({ ...solicitante, nombre: e.target.value })}
                placeholder="Ej. Clínica Los Ángeles / Juan Pérez"
                className="w-full pl-9 pr-3 py-2 text-xs sm:text-sm bg-white text-[#1A1C1C] border border-[#000000] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#25D366] placeholder:text-[#888888] shadow-2xs font-medium"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {/* Dirección */}
            <div>
              <label className="text-xs font-bold uppercase text-[#222222] block mb-1">
                Dirección de Entrega en Sucre *
              </label>
              <div className="relative">
                <MapPin className="w-4 h-4 text-[#737373] absolute left-3 top-2.5" />
                <input
                  type="text"
                  required
                  value={solicitante.direccion}
                  onChange={(e) => setSolicitante({ ...solicitante, direccion: e.target.value })}
                  placeholder="Calle, número, zona o referencia"
                  className="w-full pl-9 pr-3 py-2 text-xs sm:text-sm bg-white text-[#1A1C1C] border border-[#000000] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#25D366] placeholder:text-[#888888] shadow-2xs font-medium"
                />
              </div>
            </div>

            {/* Número de celular */}
            <div>
              <label className="text-xs font-bold uppercase text-[#222222] block mb-1">
                Número de Celular *
              </label>
              <div className="relative">
                <Phone className="w-4 h-4 text-[#737373] absolute left-3 top-2.5" />
                <input
                  type="tel"
                  required
                  value={solicitante.celular}
                  onChange={(e) => setSolicitante({ ...solicitante, celular: e.target.value })}
                  placeholder="Ej. 72853351"
                  className="w-full pl-9 pr-3 py-2 text-xs sm:text-sm bg-white text-[#1A1C1C] border border-[#000000] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#25D366] placeholder:text-[#888888] shadow-2xs font-medium"
                />
              </div>
            </div>
          </div>

          {/* Botón de Enviar Pedido */}
          {cartItems.length > 0 && (
            <div className="pt-2">
              <button
                type="submit"
                className="w-full py-3.5 bg-[#25D366] hover:bg-[#20bd5a] active:scale-98 text-white font-bold text-sm sm:text-base rounded-xl flex items-center justify-center gap-2 shadow-[3px_3px_0px_#000000] cursor-pointer transition-all"
              >
                <Send className="w-5 h-5 text-white" />
                <span>
                  Enviar Pedido por WhatsApp ({formatBsPrice(totalBsActual)})
                </span>
              </button>
              <p className="text-center text-[11px] text-[#555555] mt-1.5 font-medium">
                Se enviará el desglose con los precios parciales y el precio total de {formatBsPrice(totalBsActual)} al +591 72853351.
              </p>
            </div>
          )}

          {orderSent && (
            <div className="p-3 bg-emerald-50 border border-emerald-300 rounded-lg flex items-center gap-2 text-emerald-800 text-xs font-bold">
              <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
              <span>✓ ¡Solicitud generada con éxito y enviada a WhatsApp con los precios calculados!</span>
            </div>
          )}
        </form>
      </div>
    </div>
  );
};

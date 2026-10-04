import React, { useState } from 'react';
import { Order, CartItem, Solicitante } from '../types';
import { User, MapPin, Phone, Send } from 'lucide-react';

interface OrdersViewProps {
  orders: Order[];
  cartItems: CartItem[];
  onReorder: (items: CartItem[]) => void;
  onExploreCatalog: () => void;
  onClearCart?: () => void;
  onOrderPlaced?: (order: Order) => void;
}

export const OrdersView: React.FC<OrdersViewProps> = ({
  orders,
  cartItems,
  onReorder,
  onExploreCatalog,
  onClearCart,
  onOrderPlaced
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

  const totalCantidadActual = cartItems.reduce((acc, item) => acc + item.quantity, 0);

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
      status: 'Pendiente'
    };

    if (onOrderPlaced) onOrderPlaced(newOrder);

    // Format WhatsApp message as requested to +591 72853351
    let msg = `🛒 *SOLICITUD DE PEDIDO - PROESA DISTRIBUIDORA*\n`;
    msg += `📋 *Pedido N°:* ${orderNumber}\n\n`;
    msg += `👤 *DATOS DEL SOLICITANTE:*\n`;
    msg += `• *Nombre:* ${solicitante.nombre}\n`;
    msg += `• *Dirección:* ${solicitante.direccion}\n`;
    msg += `• *Celular:* ${solicitante.celular}\n\n`;
    msg += `📦 *PRODUCTOS Y CANTIDADES SOLICITADAS:*\n`;

    cartItems.forEach((item, index) => {
      msg += `${index + 1}. *${item.product.name}*\n`;
      msg += `   └ Presentación: ${item.presentation.name} | *Cantidad: ${item.quantity} unidades*\n`;
    });

    msg += `\n📊 *CANTIDAD TOTAL DE PRODUCTOS:* ${totalCantidadActual} unidades\n`;
    msg += `\n_Mensaje enviado al +591 72853351 desde PROESA Distribuidora_`;

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
    <div className="space-y-5 pb-12">
      {/* Header section */}
      <div className="flex items-center justify-between border-b border-[#E5E5E5] pb-2.5">
        <div>
          <h1 className="font-display font-black text-xl text-[#1A1C1C]">
            Mis Pedidos
          </h1>
          <p className="text-[13px] sm:text-sm text-[#444444]">
            Enviar tu solicitud de productos directamente por WhatsApp.
          </p>
        </div>
      </div>

      {/* FORM: DATOS DEL SOLICITANTE CON FONDO GRIS CLARO & ESPACIOS DE LLENADO EN BLANCO */}
      <div className="bg-[#F3F4F6] text-[#1A1C1C] border-2 border-[#000000] rounded-xl p-4 sm:p-5 shadow-[3px_3px_0px_#000000] space-y-3.5">
        <div className="flex items-center gap-2 border-b border-[#D1D5DB] pb-2">
          <User className="w-5 h-5 text-[#C4272B]" />
          <div>
            <h2 className="font-display font-extrabold text-sm sm:text-base text-[#1A1C1C] uppercase tracking-wide">
              Datos del Solicitante
            </h2>
            <p className="text-xs text-[#555555]">
              Información de contacto para la entrega y confirmación del pedido.
            </p>
          </div>
        </div>

        <form onSubmit={handleSendDirectWhatsApp} className="space-y-3">
          {/* Nombre */}
          <div>
            <label className="text-xs sm:text-[12.5px] font-bold uppercase text-[#222222] block mb-1">
              Nombre del Solicitante *
            </label>
            <div className="relative">
              <User className="w-4 h-4 text-[#737373] absolute left-3 top-2.5" />
              <input
                type="text"
                required
                value={solicitante.nombre}
                onChange={(e) => setSolicitante({ ...solicitante, nombre: e.target.value })}
                placeholder="Nombre y apellido / Razón social"
                className="w-full pl-9 pr-3 py-2 text-xs sm:text-sm bg-white text-[#1A1C1C] border border-[#000000] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#25D366] placeholder:text-[#888888] shadow-2xs"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {/* Dirección */}
            <div>
              <label className="text-xs sm:text-[12.5px] font-bold uppercase text-[#222222] block mb-1">
                Dirección de Entrega *
              </label>
              <div className="relative">
                <MapPin className="w-4 h-4 text-[#737373] absolute left-3 top-2.5" />
                <input
                  type="text"
                  required
                  value={solicitante.direccion}
                  onChange={(e) => setSolicitante({ ...solicitante, direccion: e.target.value })}
                  placeholder="Calle, número, zona o referencia en Sucre"
                  className="w-full pl-9 pr-3 py-2 text-xs sm:text-sm bg-white text-[#1A1C1C] border border-[#000000] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#25D366] placeholder:text-[#888888] shadow-2xs"
                />
              </div>
            </div>

            {/* Número de celular */}
            <div>
              <label className="text-xs sm:text-[12.5px] font-bold uppercase text-[#222222] block mb-1">
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
                  className="w-full pl-9 pr-3 py-2 text-xs sm:text-sm bg-white text-[#1A1C1C] border border-[#000000] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#25D366] placeholder:text-[#888888] shadow-2xs"
                />
              </div>
            </div>
          </div>

          {/* Current cart items or explore prompt */}
          <div className="pt-2 border-t border-[#D1D5DB]">
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs font-bold text-[#1A1C1C]">
                Cantidad de Productos en Pedido Actual:
              </span>
              <span className="font-display font-bold text-xs sm:text-sm text-[#C4272B] tnum">
                {totalCantidadActual} unidades
              </span>
            </div>

            {cartItems.length > 0 ? (
              <div className="space-y-1.5 max-h-48 overflow-y-auto pr-1">
                {cartItems.map((item, idx) => (
                  <div
                    key={idx}
                    className="p-2 bg-white rounded-lg border border-[#D1D5DB] flex justify-between items-center text-xs shadow-2xs"
                  >
                    <span className="truncate pr-2 font-medium text-[#1A1C1C]">
                      {item.product.name} ({item.presentation.name})
                    </span>
                    <span className="font-bold text-[#C4272B] shrink-0 tnum">
                      Cantidad: {item.quantity} unid.
                    </span>
                  </div>
                ))}
              </div>
            ) : (
              <div className="p-3 bg-white rounded-lg border border-dashed border-[#CCCCCC] text-center shadow-2xs">
                <p className="text-xs text-[#737373] mb-2">
                  No has añadido productos todavía.
                </p>
                <button
                  type="button"
                  onClick={onExploreCatalog}
                  className="px-3.5 py-1.5 bg-black text-white rounded-md text-xs font-bold hover:bg-neutral-800 transition-colors cursor-pointer shadow-xs"
                >
                  Ir al Catálogo de Distribución
                </button>
              </div>
            )}
          </div>

          {/* Botón de Enviar Pedido con fondo verde WhatsApp y leyenda "Enviar Pedido" */}
          {cartItems.length > 0 && (
            <button
              type="submit"
              className="w-full py-3 bg-[#25D366] hover:bg-[#20bd5a] active:scale-98 text-white font-bold text-xs sm:text-sm rounded-lg flex items-center justify-center gap-2 shadow-[2px_2px_0px_#000000] cursor-pointer transition-all mt-2"
            >
              <Send className="w-4 h-4 text-white" />
              <span>Enviar Pedido</span>
            </button>
          )}

          {orderSent && (
            <p className="text-center text-xs font-bold text-emerald-400 pt-1">
              ✓ ¡Solicitud generada y enviada a WhatsApp (+591 72853351)!
            </p>
          )}
        </form>
      </div>
    </div>
  );
};

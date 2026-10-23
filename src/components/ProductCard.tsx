import React, { useState } from 'react';
import { Product, PresentationOption } from '../types';
import { ShoppingCart, FileText, Plus, Minus, Check } from 'lucide-react';

interface ProductCardProps {
  product: Product;
  quantityInCart: number;
  onAddToCart: (product: Product, presentation: PresentationOption, qty: number) => void;
  onUpdateCartQty: (product: Product, presentation: PresentationOption, qty: number) => void;
  onOpenFicha: (product: Product) => void;
}

export const ProductCard: React.FC<ProductCardProps> = ({
  product,
  quantityInCart,
  onAddToCart,
  onUpdateCartQty,
  onOpenFicha
}) => {
  // Use product.defaultPresentation or first presentation
  const currentPresentation: PresentationOption = product.presentations[0] || {
    name: product.defaultPresentation || '1 Litro',
    volume: product.defaultPresentation || '1L',
    price: product.price || 0,
    packUnits: product.packUnits,
    packPrice: product.packPrice
  };

  const [justAdded, setJustAdded] = useState(false);

  const handleAdd = () => {
    onAddToCart(product, currentPresentation, 1);
    setJustAdded(true);
    setTimeout(() => setJustAdded(false), 1200);
  };

  return (
    <div className="bg-[#C4272B] text-white border-2 border-[#A9171E] rounded-xl p-3.5 sm:p-4 shadow-[3px_3px_0px_#000000] hover:shadow-[4px_4px_0px_#000000] transition-all flex flex-col gap-3">
      {/* Top section: Large vertical product photo & details */}
      <div className="flex gap-3 sm:gap-4 items-stretch">
        {/* Foto del producto en formato vertical grande sobre fondo blanco */}
        <div 
          onClick={() => onOpenFicha(product)}
          className="relative w-32 sm:w-40 min-h-[170px] sm:min-h-[210px] bg-white rounded-xl border border-white/30 p-2 shrink-0 flex items-center justify-center cursor-pointer group/img overflow-hidden shadow-2xs"
          title="Ver detalles del producto"
        >
          <img
            src={product.imageUrl}
            alt={product.name}
            loading="lazy"
            className="w-full h-full object-contain mix-blend-multiply group-hover/img:scale-105 transition-transform duration-200"
          />
          {product.brand === 'MAXI BRILL' && (
            <span className="absolute top-2 left-2 bg-[#A9171E] text-white text-[10.5px] font-black px-1.5 py-0.5 rounded-xs tracking-tighter shadow-2xs">
              MAXI BRILL
            </span>
          )}
          {product.brand === 'UNIKO' && (
            <span className="absolute top-2 left-2 bg-[#4338CA] text-white text-[10.5px] font-black px-1.5 py-0.5 rounded-xs tracking-tighter shadow-2xs">
              UNIKO
            </span>
          )}
        </div>

        {/* Text information */}
        <div className="flex-1 min-w-0 flex flex-col justify-between py-0.5">
          <div>
            {/* SKU / Código sobre un rectángulo blanco */}
            <div className="mb-1 inline-block">
              <span className="inline-flex items-center px-2 py-0.5 bg-white text-[#1A1C1C] font-display font-black text-[11px] sm:text-xs tracking-tight tnum uppercase rounded-md border border-black/30 shadow-[1px_1px_0px_#000000]">
                {product.sku}
              </span>
            </div>

            {/* Product Title */}
            <h3 
              onClick={() => onOpenFicha(product)}
              className="font-display font-black text-sm sm:text-base text-white leading-snug cursor-pointer hover:text-white/80 transition-colors mt-0.5 line-clamp-2"
            >
              {product.name}
            </h3>

            {/* Short description */}
            <p className="text-xs text-white/90 line-clamp-2 mt-1 leading-relaxed font-normal">
              {product.shortDescription}
            </p>
          </div>

          {/* Presentación y Precios en Bs. */}
          <div className="mt-2 space-y-1.5">
            <div className="flex items-center gap-1.5">
              <span className="text-[10.5px] font-bold text-white/90 uppercase tracking-wider">
                PRESENTACIÓN:
              </span>
              <span className="px-2 py-0.5 bg-white text-[#C4272B] text-xs font-black rounded-md shadow-[1px_1px_0px_#000000] select-none inline-flex items-center">
                {product.defaultPresentation || '1 Litro'}
              </span>
            </div>

            {/* Cuadro de Precios Oficiales (Unidad y Pack en Bs.) */}
            <div className="bg-black/25 border border-white/20 rounded-lg p-2 flex flex-col gap-1">
              <div className="flex items-center justify-between text-xs">
                <span className="text-white/90 font-medium">Precio Unidad:</span>
                <span className="bg-white text-[#C4272B] px-1.5 py-0.5 rounded-xs font-display font-black text-xs sm:text-sm shadow-2xs">
                  {product.price} Bs.
                </span>
              </div>
              {product.packPrice && product.packUnits ? (
                <div className="flex items-center justify-between text-xs border-t border-white/15 pt-1">
                  <span className="text-white/90 font-medium">
                    Precio PACK ({product.packUnits} unid.):
                  </span>
                  <span className="bg-amber-300 text-[#1A1C1C] px-1.5 py-0.5 rounded-xs font-display font-black text-xs sm:text-sm shadow-2xs">
                    {product.packPrice} Bs.
                  </span>
                </div>
              ) : null}
            </div>
          </div>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="flex items-center gap-2 pt-1 border-t border-white/20">
        {quantityInCart === 0 ? (
          <button
            onClick={handleAdd}
            className={`flex-1 py-2.5 px-3 rounded-lg font-bold text-xs sm:text-sm flex items-center justify-center gap-2 transition-all cursor-pointer ${
              justAdded
                ? 'bg-emerald-600 text-white shadow-[2px_2px_0px_#000000]'
                : 'bg-white hover:bg-neutral-100 active:scale-98 text-[#1A1C1C] shadow-[2px_2px_0px_#000000]'
            }`}
          >
            {justAdded ? (
              <>
                <Check className="w-4 h-4 text-white" />
                <span>¡Agregado al Pedido!</span>
              </>
            ) : (
              <>
                <ShoppingCart className="w-4 h-4 text-[#C4272B]" />
                <span>Añadir Pedido</span>
              </>
            )}
          </button>
        ) : (
          <div className="flex-1 flex items-center justify-between border-2 border-[#000000] rounded-lg bg-white px-2 py-1 shadow-[2px_2px_0px_#000000]">
            <button
              onClick={() => onUpdateCartQty(product, currentPresentation, quantityInCart - 1)}
              className="w-8 h-8 flex items-center justify-center text-[#1A1C1C] hover:bg-gray-100 rounded-md transition-colors cursor-pointer"
              aria-label="Disminuir cantidad"
            >
              <Minus className="w-4 h-4" />
            </button>
            <div className="text-center px-1">
              <span className="block font-display font-black text-xs sm:text-sm text-[#C4272B] tnum">
                {quantityInCart} unid.
              </span>
              <span className="block text-[10px] font-bold text-[#555555]">
                Total: {quantityInCart * product.price} Bs.
              </span>
            </div>
            <button
              onClick={() => onUpdateCartQty(product, currentPresentation, quantityInCart + 1)}
              className="w-8 h-8 flex items-center justify-center bg-black text-white hover:bg-neutral-800 rounded-md transition-colors cursor-pointer"
              aria-label="Aumentar cantidad"
            >
              <Plus className="w-4 h-4" />
            </button>
          </div>
        )}

        {/* Ficha Técnica button con fondo blanco */}
        <button
          onClick={() => onOpenFicha(product)}
          title="Ver Ficha Técnica"
          aria-label="Ver Ficha Técnica"
          className="p-2.5 bg-white hover:bg-neutral-100 rounded-lg text-[#1A1C1C] transition-all cursor-pointer shadow-[2px_2px_0px_#000000]"
        >
          <FileText className="w-5 h-5 text-[#1A1C1C]" />
        </button>
      </div>
    </div>
  );
};

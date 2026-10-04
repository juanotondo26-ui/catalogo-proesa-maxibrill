import React from 'react';
import { Category } from '../types';
import { ChevronRight } from 'lucide-react';

interface CategoryGridProps {
  categories: Category[];
  onSelectCategory: (categoryId: string) => void;
}

export const CategoryGrid: React.FC<CategoryGridProps> = ({ categories, onSelectCategory }) => {
  return (
    <div id="catalogo-distribucion" className="w-full scroll-mt-20">
      {/* Section Header matching Image 4.jpeg */}
      <div className="mb-3.5">
        <div className="flex items-center justify-between gap-2">
          <div className="flex items-center gap-2">
            {/* Stacked geometric shapes icon (triangle, square, circle) */}
            <div className="flex items-center gap-0.5 text-[#C4272B] shrink-0">
              <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                <path d="M12 2L6 12h12L12 2zM6 14h6v6H6v-6zm8 0a3 3 0 100 6 3 3 0 000-6z" />
              </svg>
            </div>
            <h2 className="font-display font-extrabold text-[#1A1C1C] text-sm sm:text-base tracking-tight uppercase">
              CATÁLOGO DE DISTRIBUCIÓN
            </h2>
          </div>
          <span className="text-[13px] sm:text-sm text-[#666666] hidden xs:inline font-medium">
            Selecciona una categoría.
          </span>
        </div>
        <p className="text-[13px] sm:text-sm text-[#555555] mt-0.5 ml-7">
          Selecciona una categoría para explorar productos.
        </p>
      </div>

      {/* 2-column Grid matching Image 4.jpeg */}
      <div className="grid grid-cols-2 gap-3 sm:gap-4">
        {categories.map((cat) => {
          const isRedBadge = cat.badgeColor === 'red';

          return (
            <div
              key={cat.id}
              onClick={() => onSelectCategory(cat.id)}
              className="group relative bg-[#C4272B] text-white border-2 border-[#A9171E] rounded-xl p-3 flex flex-col justify-between transition-all duration-150 hover:-translate-y-0.5 hover:shadow-[3px_3px_0px_#000000] cursor-pointer"
            >
              {/* Top product count badge con fondo de rectángulo blanco */}
              <div className="flex items-center justify-between w-full mb-2">
                <span className="text-xs sm:text-[12.5px] font-black px-2.5 py-0.5 rounded-md tnum bg-white text-[#1A1C1C] border border-black/30 shadow-[1px_1px_0px_#000000]">
                  {cat.countLabel}
                </span>
              </div>

              {/* Product Image preview container with clean white background */}
              <div className="relative w-full h-28 sm:h-36 bg-white rounded-lg overflow-hidden flex items-center justify-center p-2 mb-2.5 border border-white/20 shadow-2xs group-hover:border-white transition-colors">
                <img
                  src={cat.imageUrl}
                  alt={cat.name}
                  loading="lazy"
                  className="w-full h-full object-contain mix-blend-multiply group-hover:scale-105 transition-transform duration-200"
                />
              </div>

              {/* Card Footer */}
              <div className="flex flex-col">
                <h3 className="font-display font-black text-sm sm:text-base text-white line-clamp-2 leading-tight drop-shadow-xs">
                  {cat.name}
                </h3>
                <div className="mt-2 flex items-center justify-between px-2.5 py-1.5 bg-white text-[#1A1C1C] rounded-lg text-xs sm:text-[13px] font-bold group-hover:bg-neutral-100 transition-colors shadow-[1.5px_1.5px_0px_#000000]">
                  <span>Ver productos</span>
                  <ChevronRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

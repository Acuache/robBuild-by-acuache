import { Icon } from "@iconify/react";

interface CardFounderProps {
  name: string;
  job: string;
  img: string;
}

export default function CardFounder({ name, job, img }: CardFounderProps) {
  return (
    <article className="relative h-110 py-10 rounded-2xl px-5 max-w-80 w-full group cursor-pointer transition-all duration-500 ease-out hover:scale-105 hover:shadow-2xl transform" style={{ background: 'var(--gradient-st)' }}>
      {/* Efecto de brillo en hover */}
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

      {/* Imagen con animación */}
      <img
        className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-105"
        src={img}
        alt={name}
      />

      {/* Tarjeta de información con animación mejorada */}
      <div className="absolute flex items-center justify-between bg-white/95 backdrop-blur-sm w-[80%] bottom-6 left-1/2 -translate-x-1/2 rounded-xl px-3 py-2 transition-all duration-500 group-hover:bg-white group-hover:shadow-lg group-hover:-translate-y-1">
        <div className="transition-all duration-300 group-hover:scale-105">
          <h3 className="font-semibold text-gray-800 group-hover:text-gray-900 transition-colors duration-300">{name}</h3>
          <p className="text-gray800 text-sm group-hover:text-gray-700 transition-colors duration-300">{job}</p>
        </div>
        <div className="transition-all duration-300 group-hover:scale-110">
          <Icon
            icon="devicon:linkedin"
            width="32"
            height="32"
            className="text-blue-600 group-hover:text-blue-700 transition-colors duration-300"
          />
        </div>
      </div>

      {/* Efecto de borde brillante en hover */}
      <div className="absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-white/30 transition-all duration-500"></div>
    </article>
  )
} 
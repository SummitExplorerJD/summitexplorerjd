import { motion, AnimatePresence } from "framer-motion";
import { FC, useState, useEffect, useRef } from "react";

export interface Card {
  id: number;
  titulo: string;
  descripcion: string;
  imagen?: string;
}

interface CardCarouselProps {
  tarjetas: Card[];
  intervaloAutomatico?: number; // en milisegundos
  mostrarPorPagina?: number;
}

export const CardCarousel: FC<CardCarouselProps> = ({
  tarjetas = [],
  intervaloAutomatico = 5000,
  mostrarPorPagina = 3
}) => {
  const [paginaActual, setPaginaActual] = useState(0);
  const [pausado, setPausado] = useState(false);
  const totalPaginas = Math.ceil(tarjetas.length / mostrarPorPagina);
  const carouselRef = useRef<HTMLDivElement>(null);

  // Control de desplazamiento automático
  useEffect(() => {
    if (pausado || totalPaginas <= 1) return;

    const intervalo = setInterval(() => {
      siguiente();
    }, intervaloAutomatico);

    return () => clearInterval(intervalo);
  }, [pausado, paginaActual, totalPaginas]);

  // Navegar a la página anterior
  const anterior = () => {
    setPaginaActual((prevPagina) =>
      prevPagina === 0 ? totalPaginas - 1 : prevPagina - 1
    );
  };

  // Navegar a la página siguiente
  const siguiente = () => {
    setPaginaActual((prevPagina) =>
      prevPagina === totalPaginas - 1 ? 0 : prevPagina + 1
    );
  };

  // Obtener las tarjetas actuales a mostrar
  const tarjetasActuales = () => {
    const inicio = paginaActual * mostrarPorPagina;
    return tarjetas.slice(inicio, inicio + mostrarPorPagina);
  };

  return (
    <div
      className="w-full max-w-7xl mx-auto px-2 sm:px-4 py-4 md:py-8 overflow-hidden"
      onMouseEnter={() => setPausado(true)}
      onMouseLeave={() => setPausado(false)}
      ref={carouselRef}
    >
      <div className="flex items-center justify-between mb-4 md:mb-8">
        <button
          className="group bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white rounded-full w-10 h-10 md:w-12 md:h-12 flex items-center justify-center text-lg md:text-xl transition-all duration-300 border border-white/30 hover:border-white/50 hover:scale-110 flex-shrink-0"
          onClick={anterior}
          aria-label="Anterior"
        >
          <svg className="w-5 h-5 md:w-6 md:h-6 transform group-hover:-translate-x-0.5 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>

        <div className="flex-1 overflow-hidden px-2 md:px-6">
          <AnimatePresence mode="wait">
            <motion.div
              key={paginaActual}
              className="flex gap-3 md:gap-6"
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.6, ease: "easeInOut" }}
            >
              {tarjetasActuales().map((tarjeta, index) => (
                <motion.div
                  key={tarjeta.id}
                  className="flex-1 min-w-[280px] sm:min-w-[320px] md:min-w-[300px] lg:min-w-[350px] bg-white/95 backdrop-blur-sm rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 group relative border border-white/20"
                  whileHover={{
                    scale: [1, 1.02],
                    y: [-8, -8],
                    rotateY: [0, 5]
                  }}
                  initial={{ opacity: 0, y: 50, scale: 0.9 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  transition={{ 
                    delay: index * 0.15,
                    duration: 0.6,
                    ease: "easeOut"
                  }}
                >
                  {/* Gradient overlay for hover effect */}
                  <div className="absolute inset-0 bg-gradient-to-br from-[var(--accent-1-smjd)]/0 via-transparent to-[var(--accent-2-smjd)]/0 group-hover:from-[var(--accent-1-smjd)]/10 group-hover:to-[var(--accent-2-smjd)]/10 transition-all duration-500 z-10 rounded-2xl"></div>
                  
                  {tarjeta.imagen && (
                    <div className="w-full h-40 sm:h-48 md:h-52 lg:h-56 overflow-hidden relative">
                      <img
                        loading={index === 0 ? "eager" : "lazy"}
                        src={tarjeta.imagen}
                        alt={tarjeta.titulo}
                        className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110 group-hover:brightness-110"
                      />
                      {/* Image gradient overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>
                      
                      {/* Floating service type badge */}
                      <div className="absolute top-2 left-2 md:top-4 md:left-4 z-20">
                        <div className={`inline-flex items-center px-2 py-1 md:px-3 md:py-1.5 rounded-full text-xs font-semibold backdrop-blur-sm border ${
                          tarjeta.id <= 4 
                            ? 'bg-blue-500/20 text-blue-100 border-blue-300/30' 
                            : 'bg-green-500/20 text-green-100 border-green-300/30'
                        }`}>
                          <div className={`w-1.5 h-1.5 md:w-2 md:h-2 rounded-full mr-1 md:mr-2 ${
                            tarjeta.id <= 4 ? 'bg-blue-400' : 'bg-green-400'
                          }`}></div>
                          <span className="hidden sm:inline">{tarjeta.id <= 4 ? 'Tecnología' : 'Aventura'}</span>
                          <span className="sm:hidden">{tarjeta.id <= 4 ? 'Tech' : 'Adv'}</span>
                        </div>
                      </div>
                    </div>
                  )}
                  
                  <div className="p-4 md:p-6 relative z-20">
                    <h3 className="text-lg md:text-xl font-bold text-[var(--accent-2-smjd)] group-hover:text-[var(--accent-1-smjd)] transition-colors duration-300 mb-2 md:mb-3 line-clamp-2 leading-tight">
                      {tarjeta.titulo}
                    </h3>
                    
                    <p className="text-gray-600 leading-relaxed mb-4 md:mb-6 line-clamp-3 text-xs md:text-sm">
                      {tarjeta.descripcion}
                    </p>
                    
                    {/* Enhanced action section */}
                    <div className="flex items-center justify-between">
                      <button className="inline-flex items-center text-[var(--accent-1-smjd)] hover:text-[var(--accent-2-smjd)] font-semibold transition-all duration-300 group/btn">
                        <span className="mr-1 md:mr-2 text-xs md:text-sm">Conocer más</span>
                        <div className="w-5 h-5 md:w-6 md:h-6 bg-[var(--accent-1-smjd)]/10 rounded-full flex items-center justify-center group-hover/btn:bg-[var(--accent-1-smjd)]/20 transition-all duration-300">
                          <svg className="w-2.5 h-2.5 md:w-3 md:h-3 transition-transform duration-300 group-hover/btn:translate-x-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                          </svg>
                        </div>
                      </button>
                      
                      {/* Enhanced service icon */}
                      <div className="w-10 h-10 md:w-12 md:h-12 bg-gradient-to-br from-[var(--accent-1-smjd)]/10 to-[var(--accent-2-smjd)]/10 rounded-xl flex items-center justify-center group-hover:from-[var(--accent-1-smjd)]/20 group-hover:to-[var(--accent-2-smjd)]/20 transition-all duration-300 transform group-hover:scale-110">
                        {tarjeta.id <= 4 ? (
                          <svg className="w-5 h-5 md:w-6 md:h-6 text-[var(--accent-1-smjd)]" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M20.5 11H19V7c0-1.1-.9-2-2-2h-4V3.5C13 2.12 11.88 1 10.5 1S8 2.12 8 3.5V5H4c-1.1 0-2 .9-2 2v3.8h1.5c1.93 0 3.5 1.57 3.5 3.5s-1.57 3.5-3.5 3.5H2V20c0 1.1.9 2 2 2h3.8v-1.5c0-1.93 1.57-3.5 3.5-3.5 1.93 0 3.5 1.57 3.5 3.5V22H17c1.1 0 2-.9 2-2v-4h1.5c1.38 0 2.5-1.12 2.5-2.5S21.88 11 20.5 11z"/>
                          </svg>
                        ) : (
                          <svg className="w-5 h-5 md:w-6 md:h-6 text-[var(--accent-1-smjd)]" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M14,6L10.25,11L13.1,14.8L11.5,16C9.81,13.75 7,10 7,10L1,18H23L14,6Z"/>
                          </svg>
                        )}
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>

        <button
          className="group bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white rounded-full w-10 h-10 md:w-12 md:h-12 flex items-center justify-center text-lg md:text-xl transition-all duration-300 border border-white/30 hover:border-white/50 hover:scale-110 flex-shrink-0"
          onClick={siguiente}
          aria-label="Siguiente"
        >
          <svg className="w-5 h-5 md:w-6 md:h-6 transform group-hover:translate-x-0.5 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>

      {/* Enhanced pagination dots */}
      <div className="flex justify-center gap-2 md:gap-3 mt-4 md:mt-8">
        {Array.from({ length: totalPaginas }).map((_, index) => (
          <button
            key={index * 1}
            className={`relative overflow-hidden rounded-full border-0 cursor-pointer transition-all duration-300 ${
              index === paginaActual 
                ? 'w-6 md:w-8 h-2.5 md:h-3 bg-white' 
                : 'w-2.5 md:w-3 h-2.5 md:h-3 bg-white/40 hover:bg-white/60'
            }`}
            onClick={() => setPaginaActual(index)}
            aria-label={`Ir a página ${index + 1}`}
          >
            {index === paginaActual && (
              <motion.div
                className="absolute inset-0 bg-white rounded-full"
                layoutId="activeDot"
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
              />
            )}
          </button>
        ))}
      </div>
    </div>
  );
};

export default CardCarousel;
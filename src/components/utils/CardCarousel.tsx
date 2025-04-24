import { motion, AnimatePresence } from "framer-motion";
import { FC, useState, useEffect, useRef } from "react";

export interface Card {
  id: number;
  titulo: string;
  descripcion: string;
  imagen?: any;
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
      className="w-full max-w-7xl mx-auto px-4 py-8 overflow-hidden"
      onMouseEnter={() => setPausado(true)}
      onMouseLeave={() => setPausado(false)}
      ref={carouselRef}
    >
      <div className="flex items-center justify-between mb-6">
        <button
          className="bg-[var(--accent-2-smjd,#555)] text-white rounded-full w-10 h-10 flex items-center justify-center text-xl transition-colors duration-300 hover:bg-[var(--accent-1-smjd,#333)]"
          onClick={anterior}
          aria-label="Anterior"
        >
          &lt;
        </button>

        <div className="flex-1 overflow-hidden px-4">
          <AnimatePresence mode="wait">
            <motion.div
              key={paginaActual}
              className="flex gap-5"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.5 }}
            >
              {tarjetasActuales().map((tarjeta, index) => (
                <motion.div
                  key={tarjeta.id}
                  className="flex-1 min-w-[250px] bg-white rounded-lg overflow-hidden shadow-md transition-all duration-300"
                  whileHover={{
                    scale: 1.05,
                    boxShadow: "0 8px 16px rgba(0,0,0,0.2)"
                  }}
                >
                  {tarjeta.imagen && (
                    <div className="w-full h-40 overflow-hidden">
                      <img
                        loading={index === 0 ? "eager" : "lazy"}
                        src={tarjeta.imagen}
                        alt={tarjeta.titulo}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  )}
                  <div className="p-4">
                    <h3 className="text-xl mb-2 font-semibold text-[var(--accent-2-smjd,#333)]">
                      {tarjeta.titulo}
                    </h3>
                    <p className="text-sm text-gray-600 leading-relaxed">
                      {tarjeta.descripcion}
                    </p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>

        <button
          className="bg-[var(--accent-2-smjd,#555)] text-white rounded-full w-10 h-10 flex items-center justify-center text-xl transition-colors duration-300 hover:bg-[var(--accent-1-smjd,#333)]"
          onClick={siguiente}
          aria-label="Siguiente"
        >
          &gt;
        </button>
      </div>

      <div className="flex justify-center gap-2 mt-6">
        {Array.from({ length: totalPaginas }).map((_, index) => (
          <button
            key={index}
            className={`w-3 h-3 rounded-full border-0 cursor-pointer p-0 ${index === paginaActual ? 'bg-[var(--accent-2-smjd,#555)]' : 'bg-gray-300'
              }`}
            onClick={() => setPaginaActual(index)}
            aria-label={`Ir a página ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default CardCarousel;
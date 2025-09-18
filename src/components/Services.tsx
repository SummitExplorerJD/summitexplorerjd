import { FC } from "react";
import CardCarousel from "./utils/CardCarousel";
import img1 from '~/assets/1742845512657.avif';
import img2 from '~/assets/1742845512666.avif';
import img3 from '~/assets/1742845512680.avif';
import img4 from '~/assets/1742845512621.avif';
import img5 from '~/assets/Screenshot 2025-03-24 204041.avif';

const Services: FC = () => {
    // Reformateamos los datos para CardCarousel
    const servicios = [
        {
            id: 1,
            titulo: "Desarrollo Web Completo",
            descripcion: "Sitios web modernos, responsivos y escalables con las últimas tecnologías",
            imagen: img5
        },
        {
            id: 2,
            titulo: "Aplicaciones Móviles",
            descripcion: "Apps nativas y multiplataforma de alto rendimiento para iOS y Android",
            imagen: "/img/apps-moviles.jpg"
        },
        {
            id: 3,
            titulo: "Consultoría Tecnológica",
            descripcion: "Asesoría especializada en arquitectura de software y transformación digital",
            imagen: "/img/consultoria.jpg"
        },
        {
            id: 4,
            titulo: "Sistemas Enterprise",
            descripcion: "Soluciones empresariales robustas, seguras y escalables para grandes organizaciones",
            imagen: "/img/ui-ux.jpg"
        },
        {
            id: 5,
            titulo: "Expediciones Guiadas",
            descripcion: "Rutas de senderismo personalizadas y seguras con guías certificados",
            imagen: img2
        },
        {
            id: 6,
            titulo: "Escalada Profesional",
            descripcion: "Cursos y aventuras de escalada supervisadas para todos los niveles de experiencia",
            imagen: img1
        },
        {
            id: 7,
            titulo: "Alpinismo de Altura",
            descripcion: "Expediciones alpinas especializadas con equipos profesionales de montaña",
            imagen: img3
        },
        {
            id: 8,
            titulo: "Formación Montañera",
            descripcion: "Cursos certificados de técnicas de montaña, seguridad y supervivencia",
            imagen: "/img/cursos.jpg"
        },
        {
            id: 9,
            titulo: "Eventos Corporativos",
            descripcion: "Team building y experiencias empresariales únicas en entornos naturales",
            imagen: img4
        }
    ];

    return (
        <section id='Servicios' className="py-20 bg-gradient-to-br from-[var(--accent-1o-smjd)] via-[var(--accent-1-smjd)] to-[var(--accent-2-smjd)] relative overflow-hidden">
            {/* Background decoration */}
            <div className="absolute inset-0 opacity-10">
                <svg className="w-full h-full" viewBox="0 0 100 100" fill="none">
                    <defs>
                        <pattern id="services-grid" width="20" height="20" patternUnits="userSpaceOnUse">
                            <circle cx="10" cy="10" r="1" fill="white" opacity="0.3"/>
                        </pattern>
                    </defs>
                    <rect width="100" height="100" fill="url(#services-grid)" />
                </svg>
            </div>
            
            <div className="relative z-10">
                <div className="text-center mb-16">
                    <div className="inline-flex items-center justify-center w-16 h-16 bg-white/20 rounded-full mb-6">
                        <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                        </svg>
                    </div>
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Nuestros Servicios</h2>
                    <div className="w-24 h-1 bg-white/50 mx-auto rounded-full mb-6"></div>
                    <p className="text-xl text-white/90 max-w-2xl mx-auto leading-relaxed">
                        Combinamos expertise tecnológico con aventura al aire libre para ofrecer experiencias únicas
                    </p>
                </div>
                
                <div className="w-full max-w-7xl mx-auto px-4">
                    <CardCarousel
                        tarjetas={servicios}
                        intervaloAutomatico={5000}
                        mostrarPorPagina={window.innerWidth < 768 ? 1 : window.innerWidth < 1024 ? 2 : 3}
                    />
                </div>
            </div>
        </section>
    );
}

export default Services;
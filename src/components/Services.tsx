import { FC } from "react";
import CardCarousel from "./utils/CardCarousel";

const Services: FC = () => {
    // Reformateamos los datos para CardCarousel
    const servicios = [
        {
            id: 1,
            titulo: "Desarrollo Web",
            descripcion: "Sitios web modernos y responsivos",
            imagen: "/img/desarrollo-web.jpg"
        },
        {
            id: 2,
            titulo: "Aplicaciones Móviles",
            descripcion: "Apps nativas y multiplataforma",
            imagen: "/img/apps-moviles.jpg"
        },
        {
            id: 3,
            titulo: "Diseño UI/UX",
            descripcion: "Interfaces intuitivas y atractivas",
            imagen: "/img/ui-ux.jpg"
        },
        {
            id: 4,
            titulo: "Consultoría",
            descripcion: "Asesoría técnica especializada",
            imagen: "/img/consultoria.jpg"
        },
        {
            id: 5,
            titulo: "Senderismo Guiado",
            descripcion: "Rutas personalizadas y seguras",
            imagen: "/img/senderismo.jpg"
        },
        {
            id: 6,
            titulo: "Escalada en Roca",
            descripcion: "Aventuras supervisadas para todos los niveles",
            imagen: "/img/escalada.jpg"
        },
        {
            id: 7,
            titulo: "Expediciones Alpinas",
            descripcion: "Ascensos seguros a alta montaña",
            imagen: "/img/expediciones.jpg"
        },
        {
            id: 8,
            titulo: "Cursos de Montañismo",
            descripcion: "Aprende técnicas y seguridad",
            imagen: "/img/cursos.jpg"
        },
        {
            id: 9,
            titulo: "Campamentos Base",
            descripcion: "Experiencias inmersivas en la naturaleza",
            imagen: "/img/campamentos.jpg"
        }
    ];

    return (
        <section id='Servicios' className="py-16 flex flex-col items-center justify-center bg-[var(--accent-1o-smjd)]">
            <h1 className="text-4xl font-bold mb-12 text-white">Servicios</h1>
            <div className="w-full max-w-7xl">
                <CardCarousel 
                    tarjetas={servicios} 
                    intervaloAutomatico={4000} 
                    mostrarPorPagina={window.innerWidth < 768 ? 1 : 3} 
                />
            </div>
        </section>
    );
}

export default Services;
import { FC } from "react";
import CardCarousel from "./utils/CardCarousel";
import img1 from '~/assets/1742845512657.png';
import img2 from '~/assets/1742845512666.png';
import img3 from '~/assets/1742845512680.png';
import img4 from '~/assets/1742845512621.png';
import img5 from '~/assets/Screenshot 2025-03-24 204041.png';

const Services: FC = () => {
    // Reformateamos los datos para CardCarousel
    const servicios = [
        {
            id: 1,
            titulo: "Desarrollo Web",
            descripcion: "Sitios web modernos y responsivos",
            imagen: img5
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
            imagen: img2
        },
        {
            id: 6,
            titulo: "Escalada en Roca",
            descripcion: "Aventuras supervisadas para todos los niveles",
            imagen: img1
        },
        {
            id: 7,
            titulo: "Expediciones Alpinas",
            descripcion: "Ascensos seguros a alta montaña",
            imagen: img3
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
            imagen: img4
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
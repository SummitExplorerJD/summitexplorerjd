import { FC, useState } from "react";
import Carousel from "./utils/Carousel";
import './AboutMe.css';
import Accordion from "./utils/Accordion";
import img1 from '../assets/1742845512621.avif';
import img2 from '../assets/1742845512633.avif';
import img3 from '../assets/1742845512642.avif';
import img4 from '../assets/1742845512649.avif';

const AboutMe: FC = () => {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    const handleToggle = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    // Imágenes reales en lugar de placeholders
    const slideImgLst = [
        img1, img2, img3, img4
    ];

    // Contenido para los acordeones
    const slideContentLst: { title: string, content: JSX.Element }[] = [
        {
            title: 'Nuestra Organización',
            content: <p className="m-4">SummitExplorer JD es una organización innovadora que fusiona el desarrollo de software de última generación con servicios de aventura y montañismo. Nuestro equipo está compuesto por profesionales apasionados por la tecnología y la naturaleza, comprometidos con la excelencia en cada proyecto que emprendemos.</p>
        },
        {
            title: 'Nuestros Servicios y Logros',
            content: <ul className="m-4">
                <li>Desarrollamos soluciones tecnológicas personalizadas que impulsan el crecimiento de nuestros clientes en diversos sectores industriales.</li>
                <li>Ofrecemos experiencias de aventura únicas, desde expediciones de montañismo hasta cursos especializados de escalada y senderismo.</li>
                <li>Mantenemos los más altos estándares de seguridad y calidad tanto en nuestros desarrollos de software como en nuestras actividades de montaña.</li>
                <li>Hemos creado una comunidad sólida que conecta tecnología, ciencia y aventura al aire libre.</li>
            </ul>
        },
        {
            title: 'Nuestra Filosofía',
            content: <p className="m-4">En SummitExplorer JD creemos que cada desafío, ya sea en el desarrollo de una aplicación compleja o en la conquista de una cumbre, es una oportunidad para innovar, aprender y crecer. Nuestra filosofía se basa en la superación constante, la colaboración y el respeto por la naturaleza.</p>
        },
        {
            title: 'Misión y Visión',
            content: <ul className="m-4">
                <li><strong>Misión:</strong> Proporcionar soluciones tecnológicas innovadoras y experiencias de aventura excepcionales que inspiren a nuestros clientes a alcanzar sus objetivos más ambiciosos.</li>
                <li><strong>Visión:</strong> Ser la organización líder que demuestra cómo la tecnología y la aventura pueden coexistir, creando un impacto positivo en la vida de las personas y el respeto por el medio ambiente.</li>
            </ul>
        },
        {
            title: 'Innovación y Sostenibilidad',
            content: <p className="m-4">En SummitExplorer JD integramos prácticas sostenibles en todos nuestros servicios. Utilizamos tecnologías limpias en nuestros desarrollos y promovemos el turismo responsable en nuestras actividades de montaña, educando sobre la conservación del medio ambiente.</p>
        }
    ];

    // Contenido adicional para el carousel
    const additionalContent = (
        <div className="bg-gradient-to-br from-[var(--neutral-1-smjd)]/95 via-white/90 to-[var(--neutral-1-smjd)]/95 backdrop-blur-sm rounded-2xl shadow-xl p-8 text-center border border-white/30">
            <div className="flex items-center justify-center mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-[var(--accent-1-smjd)] to-[var(--accent-2-smjd)] rounded-full flex items-center justify-center mr-4">
                    <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                    </svg>
                </div>
                <h3 className="text-2xl font-bold text-[var(--accent-2-smjd)]">Nuestra Historia Visual</h3>
            </div>
            <div className="w-20 h-1 bg-gradient-to-r from-[var(--accent-1-smjd)] to-[var(--accent-2-smjd)] mx-auto rounded-full mb-4"></div>
            <p className="mb-4 text-[var(--accent-2-smjd)] leading-relaxed">
                Estas imágenes representan los pilares fundamentales de SummitExplorer JD: innovación tecnológica, aventura al aire libre y compromiso con la excelencia.
            </p>
            <div className="flex items-center justify-center space-x-6 text-sm text-[var(--accent-1-smjd)]">
                <div className="flex items-center">
                    <div className="w-2 h-2 bg-[var(--accent-1-smjd)] rounded-full mr-2"></div>
                    <span>Tecnología</span>
                </div>
                <div className="flex items-center">
                    <div className="w-2 h-2 bg-[var(--accent-2-smjd)] rounded-full mr-2"></div>
                    <span>Aventura</span>
                </div>
                <div className="flex items-center">
                    <div className="w-2 h-2 bg-[var(--complement-2-smjd)] rounded-full mr-2"></div>
                    <span>Excelencia</span>
                </div>
            </div>
        </div>
    );

    return (
        <section id='SobreMi' className="flex flex-col bg-[var(--neutral-1o40-smjd)] text-justify items-center p-5 mt-0 md:mt-20 text-[var(--primary-smjd)]">
            <article className="mb-8">
                <h2 className="text-[var(--primary-smjd)] text-2xl font-bold text-center">Acerca de SummitExplorer JD</h2>
            </article>

            <article className="flex flex-row flex-wrap justify-center mb-12 w-full">
                {slideContentLst.map((content, index) => (
                    <section key={index * 1} className="basis-full md:basis-1/2">
                        <Accordion
                            key={index * 1}
                            title={content.title}
                            isOpen={openIndex === index}
                            onToggle={() => handleToggle(index)}
                            classNames={{
                                header: 'w-full',
                                content: 'flex flex-row flex-wrap justify-center'
                            }}
                        >
                            {content.content}
                        </Accordion>
                    </section>
                ))}
            </article>

            <article className="w-full max-w-6xl mb-16 flex flex-row justify-center items-center">
                <section className="w-full">
                    <div className="relative bg-gradient-to-br from-[var(--accent-1-smjd)]/10 via-transparent to-[var(--accent-2-smjd)]/10 rounded-3xl p-8 shadow-2xl border border-white/20">
                        {/* Background decoration */}
                        <div className="absolute inset-0 overflow-hidden rounded-3xl">
                            <div className="absolute -top-10 -right-10 w-40 h-40 bg-gradient-to-br from-[var(--accent-1-smjd)]/20 to-transparent rounded-full blur-3xl"></div>
                            <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-gradient-to-tr from-[var(--accent-2-smjd)]/20 to-transparent rounded-full blur-3xl"></div>
                        </div>
                        
                        <Carousel
                            timeInterval={3500}
                            slideImgLst={slideImgLst}
                            content={additionalContent}
                            contentPosition="bottom"
                            adaptToImages={true}
                            showIndicators={true}
                            pauseOnHover={true}
                            classNames={{
                                carousel: "rounded-2xl shadow-2xl overflow-hidden h-[400px] md:h-[500px] lg:h-[600px] w-full mx-auto relative",
                                content: "bg-opacity-90 backdrop-blur-sm",
                                contentWrapper: "space-y-6",
                                buttonL: "bg-white/90 backdrop-blur-sm hover:bg-white border-2 border-white/50 hover:border-white shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-110 w-12 h-12",
                                buttonR: "bg-white/90 backdrop-blur-sm hover:bg-white border-2 border-white/50 hover:border-white shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-110 w-12 h-12",
                                indicators: "bg-black/20 backdrop-blur-sm rounded-full px-4 py-2",
                                indicator: "hover:bg-white/80 transition-all duration-300",
                                activeIndicator: "bg-white shadow-lg scale-125"
                            }}
                            loadingIndicator={
                                <div className="flex flex-col items-center justify-center h-96">
                                    <div className="relative">
                                        <div className="w-16 h-16 border-4 border-[var(--accent-1-smjd)]/30 border-t-[var(--accent-1-smjd)] rounded-full animate-spin"></div>
                                        <div className="absolute inset-0 w-16 h-16 border-4 border-transparent border-r-[var(--accent-2-smjd)] rounded-full animate-spin animation-delay-150"></div>
                                    </div>
                                    <p className="mt-4 text-[var(--accent-2-smjd)] font-semibold">Cargando galería...</p>
                                    <div className="flex space-x-1 mt-2">
                                        <div className="w-2 h-2 bg-[var(--accent-1-smjd)] rounded-full animate-bounce"></div>
                                        <div className="w-2 h-2 bg-[var(--accent-1-smjd)] rounded-full animate-bounce animation-delay-100"></div>
                                        <div className="w-2 h-2 bg-[var(--accent-1-smjd)] rounded-full animate-bounce animation-delay-200"></div>
                                    </div>
                                </div>
                            }
                        />
                    </div>
                </section>
            </article>

            <article className="flex flex-row flex-wrap justify-center text-center">
                <p className="m-4 md:w-2/3 w-full text-lg">
                    Cada proyecto es una nueva expedición, cada cliente es un compañero de aventura.
                    Te invitamos a formar parte de nuestro equipo, donde juntos podemos alcanzar cumbres extraordinarias.
                </p>
            </article>
        </section>
    );
}

export default AboutMe;
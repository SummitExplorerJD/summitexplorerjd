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
    /*
        // Contenido para cada slide del carousel
        const carouselContentLst = [
            <div className="text-center">
                <h3 className="text-xl font-bold mb-2">Desarrollo e Innovación</h3>
                <p>Creando soluciones tecnológicas que transforman vidas</p>
            </div>,
            <div className="text-center">
                <h3 className="text-xl font-bold mb-2">Explorando Alturas</h3>
                <p>La montaña como escuela de vida y superación</p>
            </div>,
            <div className="text-center">
                <h3 className="text-xl font-bold mb-2">Pasión por la Ciencia</h3>
                <p>Combinando curiosidad científica y aprendizaje constante</p>
            </div>,
            <div className="text-center">
                <h3 className="text-xl font-bold mb-2">Misión y Visión</h3>
                <p>Inspirando a otros a alcanzar sus propias cumbres</p>
            </div>,
            <div className="text-center">
                <h3 className="text-xl font-bold mb-2">Naturaleza y Tecnología</h3>
                <p>Construyendo puentes entre mundos aparentemente distantes</p>
            </div>
        ];
    */
    // Contenido para los acordeones
    const slideContentLst: { title: string, content: JSX.Element }[] = [
        {
            title: 'Conoceme',
            content: <p className="m-4">¡Hola! Soy Julio Castro, un ingeniero de software con una profunda pasión por la escalada, el alpinismo y la ciencia. Mi vida se define por el equilibrio entre la innovación tecnológica y la conexión con la naturaleza. Cada línea de código que escribo y cada montaña que escalo son reflejo de mi compromiso con la superación personal y profesional.</p>
        },
        {
            title: 'Mi Trayectoria y Logros',
            content: <ul className="m-4">
                <li>He trabajado en el desarrollo de soluciones tecnológicas innovadoras, creando herramientas que facilitan la vida de las personas y empoderan a comunidades.</li>
                <li>Mi pasión por la montaña me ha llevado a explorar paisajes increíbles, conquistar cimas desafiantes y adquirir lecciones invaluables sobre resiliencia y trabajo en equipo.</li>
                <li>Persigo el sueño de obtener un doctorado en física teórica, combinando mi curiosidad científica con mi amor por el aprendizaje constante.</li>
            </ul>
        },
        {
            title: 'Mi Filosofía de Vida',
            content: <p className="m-4">Creo firmemente que cada desafío, ya sea en el mundo digital o en la inmensidad de las montañas, es una oportunidad para aprender, crecer y transformar. La clave está en no detenerse nunca, en buscar siempre esa "cima" que nos motiva a ser mejores.</p>
        },
        {
            title: 'Misión y Visión',
            content: <ul className="m-4">
                <li>Mi misión es inspirar a otros a alcanzar sus metas más altas, ya sea mediante tecnología innovadora, aventuras únicas o compartiendo conocimientos que conecten a las personas con la ciencia y la naturaleza.</li>
                <li>Mi visión es ser un referente en la unión entre tecnología, ciencia y aventura, demostrando que la curiosidad y la creatividad no tienen límites.</li>
            </ul>
        },
        {
            title: 'Un Puente entre Naturaleza y Tecnología',
            content: <p className="m-4">En SummitExplorer JD combino lo mejor de dos mundos: las alturas de las montañas con la profundidad del conocimiento digital. Mi objetivo es crear una comunidad donde la tecnología y el amor por la naturaleza se complementen, inspirando a más personas a superar sus propios límites.</p>
        }
    ];

    // Contenido adicional para el carousel
    const additionalContent = (
        <div className="p-4 bg-[var(--neutral-1o20-smjd)] rounded-lg shadow-md text-center">
            <h3 className="text-xl font-bold mb-3">Mi Historia Visual</h3>
            <p className="mb-3">Estas imágenes representan los pilares fundamentales de mi vida profesional y personal: tecnología, aventura y ciencia.</p>
            <p className="text-sm italic">Desliza o usa los botones para explorar más...</p>
        </div>
    );

    return (
        <section id='SobreMi' className="flex flex-col bg-[var(--neutral-1o40-smjd)] text-justify items-center p-5 mt-0 md:mt-20 text-[var(--primary-smjd)]">
            <article className="mb-8">
                <h2 className="text-[var(--primary-smjd)] text-2xl font-bold text-center">Acerca de Mi</h2>
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

            <article className="w-full max-w-4xl mb-12 flex flex-row justify-center items-center">
                <section>
                    <Carousel
                        timeInterval={2500}
                        slideImgLst={slideImgLst}
                        /*slideContentLst={carouselContentLst}*/
                        content={additionalContent}
                        contentPosition="bottom"
                        adaptToImages={true}
                        showIndicators={true}
                        pauseOnHover={true}
                        classNames={{
                            carousel: "rounded-lg shadow-xl overflow-hidden h-[500px] md:w-2/5 w-full mx-auto",
                            content: "bg-opacity-70",
                            contentWrapper: "bg-[var(--neutral-1o10-smjd)] p-4 rounded-lg"
                        }}
                    />
                </section>
            </article>

            <article className="flex flex-row flex-wrap justify-center text-center">
                <p className="m-4 md:w-2/3 w-full text-lg">
                    Cada proyecto es una nueva expedición, cada interacción es una oportunidad de conectar.
                    Te invito a formar parte de este viaje, donde juntos podemos alcanzar cumbres extraordinarias.
                </p>
            </article>
        </section>
    );
}

export default AboutMe;
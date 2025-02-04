import { FC } from "react";
import Carousel from "./utils/Carousel";
import './AboutMe.css';
import Accordion from "./utils/Accordion";

const AboutMe: FC = () => {

    const slideImgLst: string[] = ['https://via.placeholder.com/800x400', 'https://via.placeholder.com/800x400', 'https://via.placeholder.com/800x400'];

    const slideContentLst: JSX.Element[] = [
        <Accordion key={0} title="Conoceme" classNames={{ header: 'w-full', content: 'flex flex-row flex-wrap justify-center' }}>
            <p className="m-4">¡Hola! Soy Julio Castro, un ingeniero de software con una profunda pasión por la escalada, el alpinismo y la ciencia. Mi vida se define por el equilibrio entre la innovación tecnológica y la conexión con la naturaleza. Cada línea de código que escribo y cada montaña que escalo son reflejo de mi compromiso con la superación personal y profesional.</p>
        </Accordion>,
        <Accordion key={1} title="Mi Trayectoria y Logros" classNames={{ header: 'w-full', content: 'flex flex-row flex-wrap justify-center' }}>
            <ul className="m-4">
                <li>He trabajado en el desarrollo de soluciones tecnológicas innovadoras, creando herramientas que facilitan la vida de las personas y empoderan a comunidades.</li>
                <li>Mi pasión por la montaña me ha llevado a explorar paisajes increíbles, conquistar cimas desafiantes y adquirir lecciones invaluables sobre resiliencia y trabajo en equipo.</li>
                <li>Persigo el sueño de obtener un doctorado en física teórica, combinando mi curiosidad científica con mi amor por el aprendizaje constante.</li>
            </ul>
        </Accordion>,
        <Accordion key={2} title="Mi Filosofía de Vida" classNames={{ header: 'w-full', content: 'flex flex-row flex-wrap justify-center' }}>
            <p className="m-4">Creo firmemente que cada desafío, ya sea en el mundo digital o en la inmensidad de las montañas, es una oportunidad para aprender, crecer y transformar. La clave está en no detenerse nunca, en buscar siempre esa "cima" que nos motiva a ser mejores.</p>
        </Accordion>,
        <Accordion key={3} title="Misión y Visión" classNames={{ header: 'w-full', content: 'flex flex-row flex-wrap justify-center' }}>
            <ul className="m-4">
                <li>Mi misión es inspirar a otros a alcanzar sus metas más altas, ya sea mediante tecnología innovadora, aventuras únicas o compartiendo conocimientos que conecten a las personas con la ciencia y la naturaleza.</li>
                <li>Mi visión es ser un referente en la unión entre tecnología, ciencia y aventura, demostrando que la curiosidad y la creatividad no tienen límites.</li>
            </ul>
        </Accordion>,
        <Accordion key={4} title="Un Puente entre Naturaleza y Tecnología" classNames={{ header: 'w-full', content: 'flex flex-row flex-wrap justify-center' }}>
            <p className="m-4">En SummitExplorer JD combino lo mejor de dos mundos: las alturas de las montañas con la profundidad del conocimiento digital. Mi objetivo es crear una comunidad donde la tecnología y el amor por la naturaleza se complementen, inspirando a más personas a superar sus propios límites.</p>
        </Accordion>
    ];

    return (
        <section id='SobreMi' className="flex flex-col bg-[var(--neutral-1o40-smjd)] text-justify items-center p-5 mt-0 md:mt-20 text-[var(--primary-smjd)]">
            <article>
                <h2 className="text-[var(--primary-smjd)] text-xl">Acerca de Mi</h2>
            </article>
            <article className="flex flex-row flex-wrap justify-center">
                {slideContentLst.map((content, index) => (<section key={index * 1} className="basis-1/1 md:basis-1/2">{content}</section>))}
            </article>
            <article className="h-[70vh]">
                <Carousel timeInterval={3000} slideImgLst={slideImgLst} classNames={{ content: 'hidden' }}></Carousel>
            </article>
            <article className="flex flex-row flex-wrap justify-center text-center">
                <p className="m-4 md:w-2/3 w-full">Cada proyecto es una nueva expedición, cada interacción es una oportunidad de conectar. Te invito a formar parte de este viaje, donde juntos podemos alcanzar cumbres extraordinarias.</p>
            </article>
        </section>
    );
}

export default AboutMe;
import { FC } from "react";

const Home: FC = () => {
    return (
        <section id='Inicio' className="md:mx-25 mx-0 flex flex-col">
            <article className="h-[70vh]"></article>
            <article className="bg-[var(--accent-2o85-smjd)] p-5 sm:p-10 shadow-lg md:rounded-2xl rounded-none text-white">
                <div className="text-center">
                    <h2 className="text-xl">Summit Explorer JD</h2>
                    <p className="text-md font-bold">Julio Castro: <span className="text-sm font-normal">Desarrollador de software y Alpinista</span></p>
                </div>
                <div className="pt-5 text-justify">
                    <p>
                        Soy Julio David Castro Martín, un ingeniero de software apasionado por la escalada, el alpinismo y la ciencia. Me destaco por mi habilidad para resolver problemas complejos en el mundo digital, mientras busco constantemente nuevos retos en las montañas más desafiantes. Con aspiraciones de alcanzar un doctorado, soy un eterno buscador de conocimiento y superación personal. Mi marca personal se define por mi versatilidad, determinación y búsqueda constante de la excelencia en todos los aspectos de mi vida.
                    </p>
                </div>
            </article>
        </section>
    );
}

export default Home;
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
                        Soy <strong><a href="https://julyo.summitexplorerjd.ec">Julio Castro</a></strong>, ingeniero de software, escalador y apasionado por la ciencia. Cada proyecto, cada montaña y cada desafío son una oportunidad para ir más allá.<br />En SummitExplorer JD combinamos tecnología y aventura, inspirando a otros a alcanzar nuevas alturas. Únete a esta expedición y descubre tu verdadero potencial.
                    </p>
                </div>
            </article>
        </section>
    );
}

export default Home;
import { FC } from "react";

const Home: FC = () => {
    return (
        <section id='Inicio' className="md:mx-25 mx-0 flex flex-col relative">
            <article className="h-[70vh] relative flex items-center justify-center">
                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-b from-black/20 to-black/40 z-10"></div>
                
                {/* Floating elements */}
                <div className="absolute top-1/4 left-1/4 w-3 h-3 bg-white/30 rounded-full animate-pulse z-20"></div>
                <div className="absolute top-1/3 right-1/3 w-2 h-2 bg-white/20 rounded-full animate-pulse delay-1000 z-20"></div>
                <div className="absolute bottom-1/3 left-1/3 w-4 h-4 bg-white/25 rounded-full animate-pulse delay-500 z-20"></div>
                
                {/* Hero content */}
                <div className="relative z-30 text-center text-white px-4">
                    <h1 className="text-4xl md:text-6xl font-bold mb-4 animate-fade-in-up">
                        SummitExplorer JD
                    </h1>
                    <p className="text-xl md:text-2xl mb-6 animate-fade-in-up delay-300">
                        Donde la Tecnología Encuentra la Aventura
                    </p>
                    <div className="flex flex-col md:flex-row gap-4 justify-center animate-fade-in-up delay-600">
                        <a href="#SobreMi" className="px-8 py-3 bg-[var(--accent-2-smjd)] text-white rounded-full hover:bg-[var(--primary-smjd)] transition-all duration-300 transform hover:scale-105 shadow-lg">
                            Conoce Más
                        </a>
                        <a href="#Servicios" className="px-8 py-3 border-2 border-white text-white rounded-full hover:bg-white hover:text-[var(--accent-2-smjd)] transition-all duration-300 transform hover:scale-105">
                            Nuestros Servicios
                        </a>
                    </div>
                </div>
            </article>
            
            <article className="bg-gradient-to-r from-[var(--accent-2o85-smjd)] to-[var(--accent-2-smjd)] p-8 sm:p-12 shadow-2xl md:rounded-2xl rounded-none text-white relative overflow-hidden">
                {/* Background pattern */}
                <div className="absolute inset-0 opacity-10">
                    <svg className="w-full h-full" viewBox="0 0 100 100" fill="none">
                        <defs>
                            <pattern id="grid" width="10" height="10" patternUnits="userSpaceOnUse">
                                <path d="M 10 0 L 0 0 0 10" fill="none" stroke="white" strokeWidth="0.5"/>
                            </pattern>
                        </defs>
                        <rect width="100" height="100" fill="url(#grid)" />
                    </svg>
                </div>
                
                <div className="relative z-10">
                    <div className="text-center mb-6">
                        <div className="inline-flex items-center justify-center w-16 h-16 bg-white/20 rounded-full mb-4">
                            <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M14,6L10.25,11L13.1,14.8L11.5,16C9.81,13.75 7,10 7,10L1,18H23L14,6Z"/>
                            </svg>
                        </div>
                        <h2 className="text-2xl md:text-3xl font-bold mb-2">Summit Explorer JD</h2>
                        <div className="w-24 h-1 bg-white/50 mx-auto rounded-full"></div>
                    </div>
                    
                    <div className="text-justify leading-relaxed text-lg">
                        <p>
                            <strong>SummitExplorer JD</strong> es una organización especializada que combina desarrollo de software de vanguardia con servicios de aventura y montañismo. Ofrecemos soluciones tecnológicas innovadoras mientras proporcionamos experiencias únicas en la naturaleza.
                        </p>
                        <br />
                        <p>
                            Cada proyecto de desarrollo y cada expedición a la montaña representan una oportunidad para superar límites y alcanzar nuevas alturas. Únete a nuestra comunidad y descubre cómo la tecnología y la aventura pueden transformar tu perspectiva.
                        </p>
                    </div>
                    
                    <div className="flex flex-wrap justify-center gap-6 mt-8">
                        <div className="text-center">
                            <div className="text-3xl font-bold">50+</div>
                            <div className="text-sm opacity-90">Proyectos Completados</div>
                        </div>
                        <div className="text-center">
                            <div className="text-3xl font-bold">100+</div>
                            <div className="text-sm opacity-90">Expediciones Realizadas</div>
                        </div>
                        <div className="text-center">
                            <div className="text-3xl font-bold">5+</div>
                            <div className="text-sm opacity-90">Años de Experiencia</div>
                        </div>
                    </div>
                </div>
            </article>
        </section>
    );
}

export default Home;
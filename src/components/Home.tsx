import { FC } from "react";

const Home: FC = () => {
    return (
        <section id='Inicio' className="md:mx-25 mx-0 flex flex-col relative">
            <article className="h-[80vh] relative flex items-center justify-center overflow-hidden">
                {/* Animated gradient background */}
                <div className="absolute inset-0 bg-gradient-to-br from-[var(--accent-2-smjd)] via-[var(--primary-smjd)] to-[var(--accent-1-smjd)] animate-gradient-shift"></div>
                
                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/20 to-black/40 z-10"></div>
                
                {/* Animated particles */}
                <div className="absolute inset-0 z-10">
                    <div className="absolute top-1/4 left-1/4 w-4 h-4 bg-white/40 rounded-full animate-float shadow-lg"></div>
                    <div className="absolute top-1/3 right-1/3 w-3 h-3 bg-white/30 rounded-full animate-float-delayed shadow-lg"></div>
                    <div className="absolute bottom-1/3 left-1/3 w-5 h-5 bg-white/35 rounded-full animate-float-slow shadow-lg"></div>
                    <div className="absolute top-2/3 right-1/4 w-2 h-2 bg-white/25 rounded-full animate-float shadow-lg"></div>
                    <div className="absolute bottom-1/4 left-2/3 w-3 h-3 bg-white/30 rounded-full animate-float-delayed shadow-lg"></div>
                </div>
                
                {/* Hero content */}
                <div className="relative z-30 text-center text-white px-4 max-w-5xl">
                    <div className="mb-6 inline-block">
                        <div className="w-20 h-20 bg-white/20 backdrop-blur-sm rounded-3xl flex items-center justify-center mx-auto shadow-2xl animate-bounce-slow">
                            <svg className="w-12 h-12 text-white" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M14,6L10.25,11L13.1,14.8L11.5,16C9.81,13.75 7,10 7,10L1,18H23L14,6Z"/>
                            </svg>
                        </div>
                    </div>
                    <h1 className="text-5xl md:text-7xl font-black mb-6 animate-fade-in-up drop-shadow-2xl tracking-tight">
                        SummitExplorer JD
                    </h1>
                    <p className="text-2xl md:text-3xl mb-8 animate-fade-in-up delay-300 font-light tracking-wide drop-shadow-lg">
                        Donde la Tecnología Encuentra la Aventura
                    </p>
                    <div className="flex flex-col md:flex-row gap-4 justify-center animate-fade-in-up delay-600">
                        <a href="#SobreMi" className="group px-10 py-4 bg-white text-[var(--accent-2-smjd)] rounded-2xl hover:bg-[var(--accent-smjd)] hover:text-white transition-all duration-300 transform hover:scale-110 hover:-translate-y-1 shadow-2xl font-bold text-lg">
                            <span className="flex items-center justify-center">
                                Conoce Más
                                <svg className="w-5 h-5 ml-2 transform group-hover:translate-x-2 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                                </svg>
                            </span>
                        </a>
                        <a href="#Servicios" className="px-10 py-4 border-3 border-white text-white rounded-2xl hover:bg-white hover:text-[var(--accent-2-smjd)] transition-all duration-300 transform hover:scale-110 hover:-translate-y-1 backdrop-blur-sm bg-white/10 shadow-2xl font-bold text-lg">
                            Nuestros Servicios
                        </a>
                    </div>
                </div>
                
                {/* Scroll indicator */}
                <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-30 animate-bounce">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                    </svg>
                </div>
            </article>
            
            <article className="bg-gradient-to-br from-[var(--accent-2-smjd)] via-[var(--accent-1-smjd)] to-[var(--accent-2-smjd)] p-10 sm:p-16 shadow-2xl md:rounded-3xl rounded-none text-white relative overflow-hidden transform md:-mt-12 z-20">
                {/* Background pattern with animation */}
                <div className="absolute inset-0 opacity-10">
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent animate-shimmer"></div>
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
                    <div className="text-center mb-8">
                        <div className="inline-flex items-center justify-center w-20 h-20 bg-white/20 backdrop-blur-sm rounded-3xl mb-6 shadow-2xl transform hover:rotate-12 transition-transform duration-300">
                            <svg className="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M14,6L10.25,11L13.1,14.8L11.5,16C9.81,13.75 7,10 7,10L1,18H23L14,6Z"/>
                            </svg>
                        </div>
                        <h2 className="text-3xl md:text-4xl font-black mb-3 tracking-tight">Summit Explorer JD</h2>
                        <div className="w-32 h-1.5 bg-white/60 mx-auto rounded-full shadow-lg"></div>
                    </div>
                    
                    <div className="max-w-4xl mx-auto text-center space-y-6 text-lg md:text-xl leading-relaxed">
                        <p className="backdrop-blur-sm bg-white/10 p-6 rounded-2xl shadow-xl border border-white/20">
                            <strong className="text-2xl">SummitExplorer JD</strong> es una organización especializada que combina desarrollo de software de vanguardia con servicios de aventura y montañismo. Ofrecemos soluciones tecnológicas innovadoras mientras proporcionamos experiencias únicas en la naturaleza.
                        </p>
                        <p className="backdrop-blur-sm bg-white/10 p-6 rounded-2xl shadow-xl border border-white/20">
                            Cada proyecto de desarrollo y cada expedición a la montaña representan una oportunidad para superar límites y alcanzar nuevas alturas. Únete a nuestra comunidad y descubre cómo la tecnología y la aventura pueden transformar tu perspectiva.
                        </p>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12 max-w-4xl mx-auto">
                        <div className="text-center p-6 backdrop-blur-sm bg-white/10 rounded-2xl border border-white/20 shadow-xl transform hover:scale-105 transition-all duration-300 hover:bg-white/20">
                            <div className="text-5xl font-black mb-2 bg-gradient-to-r from-white to-[var(--accent-smjd)] bg-clip-text text-transparent">50+</div>
                            <div className="text-sm uppercase tracking-widest font-semibold opacity-95">Proyectos Completados</div>
                        </div>
                        <div className="text-center p-6 backdrop-blur-sm bg-white/10 rounded-2xl border border-white/20 shadow-xl transform hover:scale-105 transition-all duration-300 hover:bg-white/20">
                            <div className="text-5xl font-black mb-2 bg-gradient-to-r from-white to-[var(--accent-smjd)] bg-clip-text text-transparent">100+</div>
                            <div className="text-sm uppercase tracking-widest font-semibold opacity-95">Expediciones Realizadas</div>
                        </div>
                        <div className="text-center p-6 backdrop-blur-sm bg-white/10 rounded-2xl border border-white/20 shadow-xl transform hover:scale-105 transition-all duration-300 hover:bg-white/20">
                            <div className="text-5xl font-black mb-2 bg-gradient-to-r from-white to-[var(--accent-smjd)] bg-clip-text text-transparent">5+</div>
                            <div className="text-sm uppercase tracking-widest font-semibold opacity-95">Años de Experiencia</div>
                        </div>
                    </div>
                </div>
            </article>
        </section>
    );
}

export default Home;
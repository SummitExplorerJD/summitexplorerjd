import { FC, memo } from 'react';
import { Link } from 'react-router-dom';

const Footer: FC = () => {

    return (
        <footer className="bg-gradient-to-br from-[#0A0F16] via-[var(--accent-2-smjd)] to-[#0A0F16] text-white relative overflow-hidden">
            {/* Background pattern */}
            <div className="absolute inset-0 opacity-5">
                <svg className="w-full h-full" viewBox="0 0 100 100" fill="none">
                    <defs>
                        <pattern id="footer-grid" width="20" height="20" patternUnits="userSpaceOnUse">
                            <circle cx="10" cy="10" r="1" fill="white" />
                        </pattern>
                    </defs>
                    <rect width="100" height="100" fill="url(#footer-grid)" />
                </svg>
            </div>
            
            <div className="relative z-10 px-6 py-12">
                <div className='flex flex-col md:flex-row md:mx-10 mx-4 items-start md:items-center justify-around gap-12'>
                    {/* Brand section */}
                    <div className='text-center md:text-left flex flex-col max-w-sm'>
                        <div className="flex items-center justify-center md:justify-start mb-4">
                            <div className="w-12 h-12 bg-gradient-to-br from-white/20 to-white/10 backdrop-blur-sm rounded-2xl flex items-center justify-center mr-3 shadow-lg">
                                <svg className="w-7 h-7 text-white" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M14,6L10.25,11L13.1,14.8L11.5,16C9.81,13.75 7,10 7,10L1,18H23L14,6Z"/>
                                </svg>
                            </div>
                            <h2 className='text-2xl font-black tracking-tight'>SummitExplorer JD</h2>
                        </div>
                        <p className="text-white/80 text-lg leading-relaxed">Explora el mundo con nosotros. Tecnología y aventura en perfecta armonía.</p>
                    </div>
                    
                    {/* Contact section */}
                    <div className='text-center md:text-left flex flex-col'>
                        <h3 className='text-xl font-bold mb-6 text-white flex items-center justify-center md:justify-start'>
                            <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                            </svg>
                            Contáctanos
                        </h3>
                        <div className="space-y-4">
                            <a href="mailto:info@summitexplorerjd.ec" className='group flex items-center justify-center md:justify-start hover:text-[var(--accent-smjd)] transition-all duration-300'>
                                <div className="w-10 h-10 bg-white/10 backdrop-blur-sm rounded-xl flex items-center justify-center mr-3 group-hover:bg-white/20 group-hover:scale-110 transition-all duration-300 shadow-lg">
                                    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                                        <polyline points="22,6 12,13 2,6" />
                                    </svg>
                                </div>
                                <p className='font-medium'>info@summitexplorerjd.ec</p>
                            </a>
                            <a href="https://www.instagram.com/summitexplorer_jd/" target='_blank' className='group flex items-center justify-center md:justify-start hover:text-[var(--accent-smjd)] transition-all duration-300' rel='noopener'>
                                <div className="w-10 h-10 bg-white/10 backdrop-blur-sm rounded-xl flex items-center justify-center mr-3 group-hover:bg-white/20 group-hover:scale-110 transition-all duration-300 shadow-lg">
                                    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                        <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                                        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                                        <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                                    </svg>
                                </div>
                                <p className='font-medium'>Instagram</p>
                            </a>
                            <a href="https://github.com/SummitExplorerJD" target='_blank' className='group flex items-center justify-center md:justify-start hover:text-[var(--accent-smjd)] transition-all duration-300' rel='noopener'>
                                <div className="w-10 h-10 bg-white/10 backdrop-blur-sm rounded-xl flex items-center justify-center mr-3 group-hover:bg-white/20 group-hover:scale-110 transition-all duration-300 shadow-lg">
                                    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                        <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
                                    </svg>
                                </div>
                                <p className='font-medium'>GitHub</p>
                            </a>
                        </div>
                    </div>
                    
                    {/* Navigation section */}
                    <div className='text-center md:text-left flex flex-col'>
                        <h3 className='text-xl font-bold mb-6 text-white flex items-center justify-center md:justify-start'>
                            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
                            </svg>
                            Explora
                        </h3>
                        <div className="space-y-3">
                            <a href="#Inicio" className="block hover:text-[var(--accent-smjd)] hover:translate-x-2 transition-all duration-300 font-medium">Inicio</a>
                            <a href="#SobreMi" className="block hover:text-[var(--accent-smjd)] hover:translate-x-2 transition-all duration-300 font-medium">Acerca de</a>
                            <a href="#Proyectos" className="block hover:text-[var(--accent-smjd)] hover:translate-x-2 transition-all duration-300 font-medium">Proyectos</a>
                            <a href="#Contacto" className="block hover:text-[var(--accent-smjd)] hover:translate-x-2 transition-all duration-300 font-medium">Contacto</a>
                        </div>
                    </div>
                </div>
                
                {/* Divider */}
                <div className='md:mx-10 mx-4 my-10'>
                    <div className="h-px bg-gradient-to-r from-transparent via-white/30 to-transparent"></div>
                </div>
                
                {/* Bottom section */}
                <div className="md:mx-10 mx-4 flex flex-col md:flex-row items-center justify-between gap-6">
                    <p className="text-white/80 text-center md:text-left font-medium">&copy; 2025, SummitExplorer JD. Todos los derechos reservados.</p>
                    <div className='flex flex-wrap items-center justify-center gap-4 text-sm'>
                        <Link to="/privacy&terms/POLITICASDEPRIVACIDAD" className="text-white/70 hover:text-white hover:underline transition-all duration-300 font-medium">Política de Privacidad</Link>
                        <span className="text-white/40">|</span>
                        <Link to="/privacy&terms/TERMINOSDELSERVICIO" className="text-white/70 hover:text-white hover:underline transition-all duration-300 font-medium">Términos de Servicio</Link>
                        <span className="text-white/40">|</span>
                        <Link to='privacy&terms' className="text-white/70 hover:text-white hover:underline transition-all duration-300 font-medium">Privacy & Terms</Link>
                    </div>
                </div>
            </div>
        </footer>
    )
};

export default memo(Footer);
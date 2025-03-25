import { FC, useEffect, useState } from 'react';
import Modal from './utils/Modal';
import PrivacyPolicy from './PrivacyPolicy';
import TermsOfService from './TermsOfService';
import { Link } from 'react-router-dom';

type IdType = 'privacy-policy' | 'terms-of-service' | string;

const Footer: FC = () => {

    const [isModalOpenPrivacy, setIsModalOpenPrivacy] = useState(false);

    const openModalPrivacy = () => setIsModalOpenPrivacy(true);
    const closeModalPrivacy = () => setIsModalOpenPrivacy(false);

    const [isModalOpenTerms, setIsModalOpenTerms] = useState(false);

    const openModalTerms = () => setIsModalOpenTerms(true);
    const closeModalTerms = () => setIsModalOpenTerms(false);

    useEffect(() => {
        const url = new URL(window.location.href);
        const id = url.hash.slice(1) as IdType;
        if (id === 'privacy-policy') {
            openModalPrivacy();
        } else if (id === 'terms-of-service') {
            openModalTerms();
        }
    }, []);


    return (
        <>
            <footer className="bg-[var(--accent-2-smjd)] p-5 text-center text-white flex flex-col">
                <div className='flex flex-col md:flex-row md:mx-10 mx-4 items-center justify-around'>
                    <div className='text-center md:text-left flex flex-col'>
                        <h4>SummitExplorer JD</h4>
                        <p>Explora el mundo con nosotros.</p>
                    </div>
                    <div className='text-center md:text-left flex flex-col'>
                        <h4>Contáctanos</h4>
                        <a href="mailto:info@summitexplorerjd.ec" className='flex items-center justify-center md:justify-start'>
                            <svg className="h-8 w-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                                <polyline points="22,6 12,13 2,6" />
                            </svg>
                            <p className='p-1'>info@summitexplorerjd.ec</p>
                        </a>
                        <a href="https://www.instagram.com/summitexplorer_jd/" target='_blank' className='flex items-center justify-center md:justify-start' rel='noopener'>
                            <svg className="h-8 w-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                            </svg>
                            <p className='p-1'>Instagram</p>
                        </a>
                        <a href="https://github.com/SummitExplorerJD" target='_blank' className='flex items-center justify-center md:justify-start' rel='noopener'>
                            <svg className="h-8 w-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
                            </svg>
                            <p className='p-1'>Github</p>
                        </a>
                    </div>
                    <div className='text-center md:text-left flex flex-col'>
                        <h4>Explora</h4>
                        <a href="# ">Inicio</a>
                        <a href="#SobreMi">Acerca de</a>
                        <a href="#Proyectos">Proyectos</a>
                        <a href="#Contacto">Contacto</a>
                    </div>
                </div>
                <div className='md:mx-10 mx-4 my-2'>
                    <hr className='border-2' />
                </div>
                <p>&copy; 2025, SummitExplorer JD. Todos los derechos reservados.</p>
                <p className='text-[var(--neutral-2-smjd)]'>
                    {/*<a href="#privacy-policy" onClick={openModalPrivacy} className="hover:underline">Política de Privacidad</a> | <a href="#terms-of-service" onClick={openModalTerms} className="hover:underline"> Términos de Servicio</a>*/}
                    <Link to="/privacy&terms/POLITICASDEPRIVACIDAD" className="hover:underline">Política de Privacidad</Link> | <Link to="/privacy&terms/TERMINOSDELSERVICIO" className="hover:underline"> Términos de Servicio</Link>
                    <hr />
                    <Link to='privacy&terms' className="hover:underline">privacy&terms</Link>
                </p>
            </footer>
            <Modal isOpen={isModalOpenPrivacy} onClose={closeModalPrivacy} id='privacy-policy'>
                <PrivacyPolicy></PrivacyPolicy>
            </Modal>
            <Modal isOpen={isModalOpenTerms} onClose={closeModalTerms} id='terms-of-service'>
                <TermsOfService></TermsOfService>
            </Modal>
        </>
    )
};

export default Footer;
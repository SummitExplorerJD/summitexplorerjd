import { FC, useState, useEffect, useRef, ReactNode } from 'react';
import './AsideMenu.css';

type itemType = 'Inicio' | 'Acerca de' | 'Servicios' | 'Habilidades' | 'Proyectos' | 'Contacto';

const AsideMenu: FC = () => {
    const [disableMenu, setDisableMenu] = useState<boolean>(false);
    const [deviceType, setDeviceType] = useState<string>('');
    const [itemSelected, setItemSelected] = useState<itemType>('Inicio');
    const asideRef = useRef<HTMLElement>(null);
    const toggleButtonRef = useRef<HTMLDivElement>(null);

    const menuItemsNames: itemType[] = ['Inicio', 'Acerca de', 'Servicios', 'Habilidades', 'Proyectos', 'Contacto'];

    // Icons mapping for menu items
    const menuIcons: Record<itemType, ReactNode> = {
        'Inicio': (
            <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
            </svg>

        ),
        'Acerca de': (
            <svg className="h-8 w-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                <circle cx="8.5" cy="7" r="4" />
                <polyline points="17 11 19 13 23 9" />
            </svg>
        ),
        'Servicios': (
            <svg className="h-8 w-8" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                <path stroke="none" d="M0 0h24v24H0z" />
                <path d="M3.5 5.5l1.5 1.5l2.5 -2.5" />
                <path d="M3.5 11.5l1.5 1.5l2.5 -2.5" />
                <path d="M3.5 17.5l1.5 1.5l2.5 -2.5" />
                <line x1="11" y1="6" x2="20" y2="6" />
                <line x1="11" y1="12" x2="20" y2="12" />
                <line x1="11" y1="18" x2="20" y2="18" />
            </svg>
        ),
        'Habilidades': (
            <svg className="h-8 w-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <polyline points="9 11 12 14 22 4" />
                <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11" />
            </svg>
        ),
        'Proyectos': (
            <svg className="h-8 w-8" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                <path stroke="none" d="M0 0h24v24H0z" />
                <path d="M9 4h3l2 2h5a2 2 0 0 1 2 2v7a2 2 0 0 1 -2 2h-10a2 2 0 0 1 -2 -2v-9a2 2 0 0 1 2 -2" />
                <path d="M17 17v2a2 2 0 0 1 -2 2h-10a2 2 0 0 1 -2 -2v-9a2 2 0 0 1 2 -2h2" />
            </svg>
        ),
        'Contacto': (
            <svg className="h-8 w-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                <polyline points="22,6 12,13 2,6" />
            </svg>
        ),
    };

    useEffect(() => {
        // Detect device type
        const userAgent = window.navigator.userAgent.toLowerCase();
        let newDeviceType = '';

        if (/mobile|android|iphone/.test(userAgent)) {
            newDeviceType = 'mobile';
        } else if (/ipad|tablet/.test(userAgent)) {
            newDeviceType = 'tablet';
        } else {
            newDeviceType = 'desktop';
        }

        // Comprobar si el dispositivo ha cambiado desde la última carga
        const previousDeviceType = localStorage.getItem('deviceType');

        if (previousDeviceType && previousDeviceType !== newDeviceType) {
            // El tipo de dispositivo ha cambiado, guardar el nuevo y recargar
            localStorage.setItem('deviceType', newDeviceType);
            window.location.reload();
        } else {
            // Primera carga o mismo dispositivo, solo guardar el tipo
            localStorage.setItem('deviceType', newDeviceType);
            setDeviceType(newDeviceType);
            setDisableMenu(newDeviceType === 'mobile');
        }

        // Añadir detector de cambio de tamaño de ventana
        const handleResize = () => {
            const width = window.innerWidth;
            let resizedDeviceType = '';

            // Determinar tipo de dispositivo basado en ancho
            if (width < 768) {
                resizedDeviceType = 'mobile';
            } else if (width < 1024) {
                resizedDeviceType = 'tablet';
            } else {
                resizedDeviceType = 'desktop';
            }

            if (resizedDeviceType !== newDeviceType) {
                localStorage.setItem('deviceType', resizedDeviceType);
                window.location.reload();
            }
        };

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    // Add click outside handler to close menu
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            // Only close menu if it's open and we're on mobile/tablet
            if (!/desktop/.test(deviceType) && !disableMenu) {
                // Check if click is outside both the menu and toggle button
                if (
                    asideRef.current &&
                    toggleButtonRef.current &&
                    !asideRef.current.contains(event.target as Node) &&
                    !toggleButtonRef.current.contains(event.target as Node)
                ) {
                    setDisableMenu(true);
                }
            }
        };

        document.addEventListener('mousedown', handleClickOutside);

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [deviceType, disableMenu]);

    const updateBodyWidth = () => {
        const asideWidth = document.querySelector('aside')?.clientWidth as number || 0;
        const windowWidth = window.innerWidth;
        const bodyWidth = windowWidth - asideWidth - 15;
        document.querySelector('main')?.setAttribute('style', `position: relative; top: 0; left: ${asideWidth}px; width: ${bodyWidth}px;`);
        document.querySelector('header')?.setAttribute('style', `position: relative; top: 0; left: ${asideWidth}px; width: ${bodyWidth}px;`);
        document.querySelector('footer')?.setAttribute('style', `position: relative; top: 0; left: ${asideWidth}px; width: ${bodyWidth}px;`);
    };

    useEffect(() => {
        if (deviceType === 'desktop') {
            updateBodyWidth();
            window.addEventListener('resize', updateBodyWidth);
            return () => window.removeEventListener('resize', updateBodyWidth);
        }
    }, [deviceType]);

    return (
        <>
            <aside ref={asideRef} className={(/desktop/.test(deviceType) ? "fixed top-0 left-0" : disableMenu ? "aside-menu-inverse fixed top-0" : "aside-menu fixed top-0 left-0") + " text-[var(--neutral-1-smjd)] pr-5 font-bold bg-gradient-to-b from-[#0A0F16] via-[#0F1924] to-[#0A0F16] z-100 shadow-2xl border-r border-[#7DD1E4]/20"}>
                <nav className="h-screen text-left pl-5 flex flex-col justify-center relative">
                    {/* Línea vertical central mejorada */}
                    <div className="absolute left-10 top-0 w-1 bg-gradient-to-b from-transparent via-[#7DD1E4] to-transparent h-full z-0 shadow-lg"></div>

                    <ul className="flex flex-col justify-center h-full space-y-12">
                        {menuItemsNames.map((item, index) => (
                            <li key={index * 1} className="relative group">
                                <a
                                    href={`#${item === 'Acerca de' ? 'SobreMi' : item.replace(' ', '')}`}
                                    onClick={() => { setItemSelected(item); setDisableMenu(true) }}
                                    className={`flex items-center transition-all duration-300 ${item === itemSelected ? "text-white" : "text-[#7DD1E4]/70 hover:text-[#7DD1E4]"}`}
                                >
                                    {/* Ícono mejorado con efectos */}
                                    <div className={`relative z-10 rounded-2xl p-2 border-2 transition-all duration-300 ${
                                        item === itemSelected 
                                            ? "bg-gradient-to-br from-[#7DD1E4] to-[#5BB8CC] border-[#7DD1E4] shadow-lg shadow-[#7DD1E4]/50 scale-110" 
                                            : "bg-[#0F1924] border-[#0F1924] group-hover:border-[#7DD1E4]/50 group-hover:bg-[#7DD1E4]/10"
                                    }`}>
                                        <div className={`w-8 h-8 flex items-center justify-center ${item === itemSelected ? "text-[#0F1924]" : "text-[#7DD1E4]"}`}>
                                            {menuIcons[item]}
                                        </div>
                                    </div>
                                    {/* Texto mejorado */}
                                    <span className={`ml-4 uppercase tracking-wider font-bold text-lg transition-all duration-300 ${
                                        item === itemSelected ? "translate-x-2" : "group-hover:translate-x-1"
                                    }`}>
                                        {item}
                                    </span>
                                    
                                    {/* Indicador de selección */}
                                    {item === itemSelected && (
                                        <span className="ml-auto mr-2 w-2 h-2 bg-white rounded-full shadow-lg shadow-white/50 animate-pulse"></span>
                                    )}
                                </a>
                            </li>
                        ))}
                    </ul>
                </nav>
            </aside>

            <div
                id='toggle-button'
                aria-label="Toggle menu"
                ref={toggleButtonRef}
                className={/mobile|tablet/.test(deviceType) ? "fixed bottom-7 z-50 right-7 p-4 rounded-2xl bg-gradient-to-br from-[var(--accent-1-smjd)] to-[var(--accent-2-smjd)] text-white cursor-pointer shadow-2xl border-2 border-white/20 hover:scale-110 hover:rotate-12 transition-all duration-300 backdrop-blur-sm" : "hidden"}
                onClick={() => setDisableMenu(!disableMenu)}
            >
                <svg className={`h-10 w-10 transition-transform duration-300 ${disableMenu ? 'rotate-0' : 'rotate-90'}`} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="3" y1="12" x2="21" y2="12" />
                    <line x1="3" y1="6" x2="21" y2="6" />
                    <line x1="3" y1="18" x2="21" y2="18" />
                </svg>
            </div>
        </>
    );
};

export default AsideMenu;
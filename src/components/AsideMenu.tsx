import { FC, useState, useEffect } from 'react';
import './AsideMenu.css';

type itemType = 'Inicio' | 'Sobre Mi' | 'Servicios' | 'Habilidades' | 'Proyectos' | 'Contacto';

const AsideMenu: FC = () => {
    const [segmentLine, setSegmentLine] = useState<JSX.Element[]>([]);
    const [menuItems, setMenuItems] = useState<JSX.Element[]>([]);
    const [disableMenu, setDisableMenu] = useState<boolean>(false);
    const [deviceType, setDeviceType] = useState<string>('');
    const [itemSelected, setItemSelected] = useState<itemType>('Inicio');
    
    const menuItemsNames: itemType[] = ['Inicio', 'Sobre Mi', 'Servicios', 'Habilidades', 'Proyectos', 'Contacto'];

    useEffect(() => {
        const segmentNumbers = 30;
        const segmentHeight: number = window.innerWidth / segmentNumbers;
        const segments: JSX.Element[] = [];
        for (let i = 0; i < segmentNumbers; i++) {
            segments.push(<div key={i} className={`w-1 bg-${i % 2 == 0 ? "[var(--primary-smjd)]" : "transparent"} rounded-full`} style={{ height: segmentHeight }}></div>);
        }
        setSegmentLine(segments);
        const menuItemsArr: JSX.Element[] = [];
        menuItemsNames.forEach((item, index) => {
            menuItemsArr.push(<li key={index * 1}><a href={`#${item}`} onClick={() => setItemSelected(item)} className={`flex flex-row items-center uppercase text-lg`}><div className=' w-8 h-8 rounded-full bg-[var(--primary-smjd)] mr-3'></div>{item}</a></li>)
        });
        setMenuItems(menuItemsArr);
        // Detect device type
        const userAgent = window.navigator.userAgent.toLowerCase();
        if (/mobile|android|iphone/.test(userAgent)) {
            setDeviceType('mobile');
            setDisableMenu(true);
        } else if (/ipad|tablet/.test(userAgent)) {
            setDeviceType('tablet');
            setDisableMenu(false);
        } else {
            setDeviceType('desktop');
            setDisableMenu(false);
        }
    }, []);

    useEffect(() => {
        if (/desktop/.test(deviceType)) {
            setTimeout(() => {
                const asideWidth = document.querySelector('aside')?.clientWidth as number;
                const windowWidth = window.innerWidth;
                const bodyWidth = windowWidth - asideWidth - 20;
                document.querySelector('main')?.setAttribute('style', `position: relative; top: 0; left: ${asideWidth}px; width: ${bodyWidth}px;`);
                document.querySelector('header')?.setAttribute('style', `position: relative; top: 0; left: ${asideWidth}px; width: ${bodyWidth}px;`);
                document.querySelector('footer')?.setAttribute('style', `position: relative; top: 0; left: ${asideWidth}px; width: ${bodyWidth}px;`);
            }, 500);
        }
    }, [deviceType]);

    useEffect(() => {
        const menuItemsArr: JSX.Element[] = [];
        menuItemsNames.forEach((item, index) => {
            menuItemsArr.push(<li key={index * 1}><a href={`#${item.replace(' ', '')}`} onClick={() => {setItemSelected(item); setDisableMenu(true)}} className={`flex flex-row items-center uppercase text-lg ${item === itemSelected ? "text-[var(--accent-2-smjd)]" : ""}`}><div className={`w-8 h-8 rounded-full ${item === itemSelected ? "bg-[var(--accent-2-smjd)]" : "bg-[var(--primary-smjd)]"} mr-3`}></div>{item}</a></li>)
        });
        setMenuItems(menuItemsArr);
    }, [itemSelected]);

    return (
        <>
            <aside className={(/desktop/.test(deviceType) ? "fixed top-0 left-0" : disableMenu ? "aside-menu-inverse fixed top-0" : "aside-menu fixed top-0 left-0") + " text-[var(--primary-smjd)] pr-5 font-bold bg-[var(--neutral-1-smjd)]"}>
                <nav className="h-screen text-left pl-5 flex flex-row">
                    <div className='w-1 h-full mx-3 flex flex-col justify-around'>
                        {segmentLine}
                    </div>
                    <ul className='flex flex-col justify-around h-full'>
                        {menuItems}
                    </ul>
                </nav>
            </aside>
            <div className={/mobile|tablet/.test(deviceType) ? "fixed bottom-7 z-50 right-7 p-3 rounded-full bg-[var(--primary-smjd)] text-white cursor-pointer" : "hidden"} onClick={() => setDisableMenu(!disableMenu)}>
                <svg className={`h-10 w-10 ${disableMenu ? 'rotate-90' : 'rotate-90-inverse'}`} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="3" y1="12" x2="21" y2="12" />
                    <line x1="3" y1="6" x2="21" y2="6" />
                    <line x1="3" y1="18" x2="21" y2="18" />
                </svg>
            </div>
        </>
    );
};

export default AsideMenu;
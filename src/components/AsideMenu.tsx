import { FC, useState, useEffect } from 'react';

const AsideMenu: FC = () => {
    const [segmentLine, setSegmentLine] = useState<JSX.Element[]>([]);

    useEffect(() => {
        const segmentNumbers = 25;
        const segmentHeight: number = window.screen.height / segmentNumbers;
        const segments: JSX.Element[] = [];
        for (let i = 0; i < segmentNumbers; i++) {
            if (i % 2 === 0) {
                segments.push(<div key={i} className={`w-1 bg-[#005873] rounded-full`} style={{ height: segmentHeight }}></div>);
            } else {
                segments.push(<div key={i} className={`w-1 bg-transparent rounded-full`} style={{ height: segmentHeight }}></div>);
            }
        }
        setSegmentLine(segments);
    }, []);

    return (
        <>
            <aside className="fixed top-0 left-0 text-[#005873] font-bold">
                <nav className="h-screen text-left pl-5 flex flex-row">
                    <div className='w-1 h-full mx-3 flex flex-col justify-around'>
                        {segmentLine}
                    </div>
                    <ul className='flex flex-col justify-around h-full'>
                        <li className='flex flex-row items-center'>
                            <div className=' w-8 h-8 rounded-full bg-[#005873] mr-3'></div>
                            <a href="#Inicio" className='uppercase text-lg'>Inicio</a>
                        </li>
                        <li className='flex flex-row items-center'>
                            <div className='w-8 h-8 rounded-full bg-[#005873] mr-3'></div>
                            <a href="#SobreMi" className='uppercase text-lg'>Sobre Mi</a>
                        </li>
                        <li className='flex flex-row items-center'>
                            <div className='w-8 h-8 rounded-full bg-[#005873] mr-3'></div>
                            <a href="#Servicios" className='uppercase text-lg'>Servicios</a>
                        </li>
                        <li className='flex flex-row items-center'>
                            <div className='w-8 h-8 rounded-full bg-[#005873] mr-3'></div>
                            <a href="#Habilidades" className='uppercase text-lg'>Habilidades</a>
                        </li>
                    </ul>
                </nav>
            </aside>
            <div className="fixed bottom-5 z-50 right-5 p-2 rounded-full bg-[#005873] text-white">
                <svg className="h-8 w-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="3" y1="12" x2="21" y2="12" />
                    <line x1="3" y1="6" x2="21" y2="6" />
                    <line x1="3" y1="18" x2="21" y2="18" />
                </svg>
            </div>
        </>
    );
};

export default AsideMenu;
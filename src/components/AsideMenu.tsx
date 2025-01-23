import { Component } from 'react';

class AsideMenu extends Component {
    render() {
        return (
            <aside className="aside-menu">
                <nav className="aside-menu-nav">
                    <ul>
                        <li>
                            <a href="#Inicio" className='uppercase'>Inicio</a>
                        </li>
                        <li>
                            <a href="#SobreMi" className='uppercase'>Sobre Mi</a>
                        </li>
                        <li>
                            <a href="#Servicios" className='uppercase'>Servicios</a>
                        </li>
                        <li>
                            <a href="#Habilidades" className='uppercase'>Habilidades</a>
                        </li>
                    </ul>
                </nav>
            </aside>
        );
    }
}

export default AsideMenu;
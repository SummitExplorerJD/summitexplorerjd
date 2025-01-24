import { PureComponent } from 'react';

class Footer extends PureComponent {
    render() {
        return (
            <footer className="bg-[var(--neutral-2-smjd)] p-5 text-center text-white flex flex-col">
                <div className='flex flex-col md:flex-row md:mx-10 mx-4 items-center justify-around'>
                    <div className='text-left flex flex-col'>
                        <h4>SummitExplorer JD</h4>
                        <p>Explora el mundo con nosotros.</p>
                    </div>
                    <div className='text-left flex flex-col'>
                        <h4>Contáctanos</h4>
                        <a href="mailto:julito.1998@hotmail..es">mail</a>
                        <a href="#">instagram</a>
                        <a href="#">github</a>
                    </div>
                    <div className='text-left flex flex-col'>
                        <h4>Explora</h4>
                        <a href="#">Inicio</a>
                        <a href="#">Acerca de</a>
                    </div>
                </div>
                <div className='md:mx-10 mx-4'>
                    <hr className='border-2'/>
                </div>
                <p>&copy; 2021 SummitExplorer JD. Todos los derechos reservados.</p>
                <p>
                    <a href="#privacy-policy" className="text-[var(--primary-smjd)] hover:underline">Política de Privacidad</a> | <a href="#terms-of-service" className="text-[var(--primary-smjd)] hover:underline"> Términos de Servicio</a>
                </p>
            </footer>
        );
    }
}

export default Footer;
import { PureComponent } from 'react';

class Footer extends PureComponent {
    render() {
        return (
            <footer className="bg-[var(--neutral-2-smjd)] p-5 text-center text-white">
                <p>&copy; 2021 SummitExplorer JD. Todos los derechos reservados.</p>
                <p>
                    <a href="#privacy-policy" className="text-[var(--primary-smjd)] hover:underline">Política de Privacidad</a> | <a href="#terms-of-service" className="text-[var(--primary-smjd)] hover:underline"> Términos de Servicio</a>
                </p>
            </footer>
        );
    }
}

export default Footer;
import { FC } from "react";
import Wheel from "./utils/Wheel";

const Services: FC = () => {
    const serviceItems = [
        <div className="flex flex-col items-center justify-center p-6 bg-white/80 backdrop-blur-sm rounded-xl border border-gray-200 shadow-lg hover:shadow-xl transition-all duration-300 w-64">
            <h3 className="text-xl font-bold text-gray-800 mb-2">Desarrollo Web</h3>
            <p className="text-center text-gray-600">Sitios web modernos y responsivos</p>
        </div>,
        <div className="flex flex-col items-center justify-center p-6 bg-white/80 backdrop-blur-sm rounded-xl border border-gray-200 shadow-lg hover:shadow-xl transition-all duration-300 w-64">
            <h3 className="text-xl font-bold text-gray-800 mb-2">Aplicaciones Móviles</h3>
            <p className="text-center text-gray-600">Apps nativas y multiplataforma</p>
        </div>,
        <div className="flex flex-col items-center justify-center p-6 bg-white/80 backdrop-blur-sm rounded-xl border border-gray-200 shadow-lg hover:shadow-xl transition-all duration-300 w-64">
            <h3 className="text-xl font-bold text-gray-800 mb-2">Diseño UI/UX</h3>
            <p className="text-center text-gray-600">Interfaces intuitivas y atractivas</p>
        </div>,
        <div className="flex flex-col items-center justify-center p-6 bg-white/80 backdrop-blur-sm rounded-xl border border-gray-200 shadow-lg hover:shadow-xl transition-all duration-300 w-64">
            <h3 className="text-xl font-bold text-gray-800 mb-2">Consultoría</h3>
            <p className="text-center text-gray-600">Asesoría técnica especializada</p>
        </div>,
        <div className="flex flex-col items-center justify-center p-6 bg-white/80 backdrop-blur-sm rounded-xl border border-gray-200 shadow-lg hover:shadow-xl transition-all duration-300 w-64">
            <h3 className="text-xl font-bold text-gray-800 mb-2">Senderismo Guiado</h3>
            <p className="text-center text-gray-600">Rutas personalizadas y seguras</p>
        </div>,
        <div className="flex flex-col items-center justify-center p-6 bg-white/80 backdrop-blur-sm rounded-xl border border-gray-200 shadow-lg hover:shadow-xl transition-all duration-300 w-64">
            <h3 className="text-xl font-bold text-gray-800 mb-2">Escalada en Roca</h3>
            <p className="text-center text-gray-600">Aventuras supervisadas para todos los niveles</p>
        </div>,
        <div className="flex flex-col items-center justify-center p-6 bg-white/80 backdrop-blur-sm rounded-xl border border-gray-200 shadow-lg hover:shadow-xl transition-all duration-300 w-64">
            <h3 className="text-xl font-bold text-gray-800 mb-2">Expediciones Alpinas</h3>
            <p className="text-center text-gray-600">Ascensos seguros a alta montaña</p>
        </div>,
        <div className="flex flex-col items-center justify-center p-6 bg-white/80 backdrop-blur-sm rounded-xl border border-gray-200 shadow-lg hover:shadow-xl transition-all duration-300 w-64">
            <h3 className="text-xl font-bold text-gray-800 mb-2">Cursos de Montañismo</h3>
            <p className="text-center text-gray-600">Aprende técnicas y seguridad</p>
        </div>,
        <div className="flex flex-col items-center justify-center p-6 bg-white/80 backdrop-blur-sm rounded-xl border border-gray-200 shadow-lg hover:shadow-xl transition-all duration-300 w-64">
            <h3 className="text-xl font-bold text-gray-800 mb-2">Campamentos Base</h3>
            <p className="text-center text-gray-600">Experiencias inmersivas en la naturaleza</p>
        </div>
    ];

    return (
        <section id='Servicios' className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-blue-50 to-white">
            <h1 className="text-4xl font-bold mb-8 text-gray-800">Servicios</h1>
            <div className="relative w-full h-[80vh]">
                <div className="absolute left-[-50%]">
                    <Wheel items={serviceItems} />
                </div>
            </div>
        </section>
    );
}

export default Services;
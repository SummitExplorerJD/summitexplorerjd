import { FC } from "react";
import { Link } from 'react-router-dom';
import { privAndTermsLst } from "~/utils/privacytermsLs";

const Index: FC = () => {
    return (
        <div className="max-w-4xl mx-auto py-4 px-4">
            <header className="mb-8 text-center">
                <h1 className="text-3xl font-bold text-gray-800 mb-3">Privacidad y Términos</h1>
                <p className="text-gray-600">
                    Por favor, revisa nuestras políticas y términos para comprender mejor cómo funciona nuestro servicio.
                </p>
            </header>
            
            <div className="bg-white rounded-lg shadow-md p-6">
                <ul className="divide-y divide-gray-200">
                    {privAndTermsLst.map((item, index) => (
                        <li key={index} className="py-3 first:pt-0 last:pb-0">
                            <Link 
                                to={"/privacy&terms".concat(item.route)}
                                className="flex items-center text-blue-600 hover:text-blue-800 transition-colors group"
                            >
                                <span className="mr-2">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                                    </svg>
                                </span>
                                <span className="font-medium group-hover:underline">{item.title}</span>
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
            
            <div className="mt-8 text-center">
                <Link 
                    to="/" 
                    className="inline-flex items-center px-4 py-2 bg-gray-100 hover:bg-gray-200 text-gray-800 rounded-md transition-colors"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                    </svg>
                    Volver al Inicio
                </Link>
            </div>
        </div>
    );
};

export default Index;
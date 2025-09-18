import { FC } from "react";
import { motion } from "framer-motion";
import { Masonry, MasonryItem } from "./utils/Masonry";
import Popover from "./utils/Popover";
import CSharp from '~/assets/c-sharp-c-seeklogo.svg';
import DotNetCore from '~/assets/net-core-seeklogo.svg';
import NodeJS from '~/assets/node-js-seeklogo.svg';
import ReactJS from '~/assets/react.svg';
import Python from '~/assets/python-seeklogo.svg';
import Rust from '~/assets/rust-seeklogo.svg';
import './utils/Masonry.css';

const Skills: FC = () => {
    const technologies = [
        {
            name: "C#",
            icon: CSharp,
            description: "Lenguaje de programación robusto y versátil",
            color: "from-purple-500 to-purple-600"
        },
        {
            name: ".NET Core",
            icon: DotNetCore,
            description: "Framework multiplataforma de alto rendimiento",
            color: "from-blue-500 to-blue-600"
        },
        {
            name: "Node.js",
            icon: NodeJS,
            description: "Runtime de JavaScript para el backend",
            color: "from-green-500 to-green-600"
        },
        {
            name: "React",
            icon: ReactJS,
            description: "Librería para interfaces de usuario modernas",
            color: "from-cyan-500 to-cyan-600"
        },
        {
            name: "Python",
            icon: Python,
            description: "Lenguaje versátil para múltiples aplicaciones",
            color: "from-yellow-500 to-yellow-600"
        },
        {
            name: "Rust",
            icon: Rust,
            description: "Lenguaje de sistemas seguro y eficiente",
            color: "from-orange-500 to-orange-600"
        }
    ];

    return (
        <section id='Habilidades' className="py-20 relative overflow-hidden">
            {/* Background with gradient */}
            <div className="absolute inset-0 bg-gradient-to-br from-gray-50 via-white to-gray-100"></div>
            
            {/* Decorative elements */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
                <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-r from-[var(--primary-smjd)] to-transparent rounded-full opacity-10 blur-3xl"></div>
                <div className="absolute bottom-20 right-10 w-48 h-48 bg-gradient-to-r from-[var(--secondary-smjd)] to-transparent rounded-full opacity-10 blur-3xl"></div>
            </div>

            <div className="container mx-auto px-4 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl lg:text-5xl font-bold mb-6">
                        <span className="bg-gradient-to-r from-[var(--primary-smjd)] via-[var(--secondary-smjd)] to-[var(--accent-smjd)] bg-clip-text text-transparent">
                            Nuestro Stack Tecnológico
                        </span>
                    </h2>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                        Tecnologías de vanguardia que utilizamos en SummitExplorer JD para crear soluciones innovadoras y escalables
                    </p>
                </motion.div>

                <article className="max-w-6xl mx-auto">
                    <Masonry gap={32} className="skills-masonry">
                        {technologies.map((tech, index) => (
                            <MasonryItem key={tech.name} delay={index * 0.1}>
                                <div className="tech-card group">
                                    <div className="relative">
                                        <Popover message={tech.description}>
                                            <motion.img 
                                                loading="lazy" 
                                                src={tech.icon} 
                                                alt={tech.name}
                                                className="h-16 w-auto object-contain"
                                                whileHover={{ rotate: [0, -5, 5, 0], scale: 1.1 }}
                                                transition={{ duration: 0.3 }}
                                            />
                                        </Popover>
                                    </div>
                                    
                                    <div className="text-center">
                                        <h3 className="font-bold text-lg text-gray-800 mb-2">
                                            {tech.name}
                                        </h3>
                                        <p className="text-sm text-gray-600 line-clamp-2">
                                            {tech.description}
                                        </p>
                                    </div>

                                    {/* Animated gradient bar */}
                                    <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                                         style={{
                                             background: `linear-gradient(90deg, var(--primary-smjd), var(--secondary-smjd), var(--accent-smjd))`
                                         }}>
                                    </div>
                                </div>
                            </MasonryItem>
                        ))}
                    </Masonry>
                </article>

                {/* Additional info section */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    viewport={{ once: true }}
                    className="mt-16 text-center"
                >
                    <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 border border-white/20 shadow-xl max-w-4xl mx-auto">
                        <h3 className="text-2xl font-bold text-gray-800 mb-4">
                            ¿Por qué estas tecnologías?
                        </h3>
                        <p className="text-gray-600 leading-relaxed">
                            Cada tecnología en nuestro stack ha sido cuidadosamente seleccionada por su capacidad de 
                            crear soluciones robustas, escalables y modernas. Desde el backend con C# y .NET Core, 
                            hasta interfaces dinámicas con React, nos aseguramos de usar las mejores herramientas 
                            para cada proyecto.
                        </p>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Skills;
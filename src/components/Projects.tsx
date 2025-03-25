import { FC } from "react";
import { motion } from "framer-motion";

interface Project {
    title: string;
    description: string;
    image: string;
    technologies: string[];
    link: string;
    onDev: boolean;
}

const Projects: FC = () => {
    const projects: Project[] = [
        {
            title: "SummitExplorer App",
            description: "Aplicación móvil para rastrear rutas de montañismo y compartir experiencias.",
            image: "/1000192510.jpg", // Using your existing image
            technologies: ["React Native", "Node.js", "MongoDB"],
            link: "https://github.com/SummitExplorerJD",
            onDev: true
        },
        {
            title: "Summit Restaurant Manager",
            description: "Plataforma web y móvil para la administración de restaurantes.",
            image: "/1000192628.jpg", // Using your existing image
            technologies: [".Net", "Maui", "Sql"],
            link: "https://github.com/SummitExplorerJD",
            onDev: true
        },
        // Add more projects as needed
    ];

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.3
            }
        }
    };

    const itemVariants = {
        hidden: { y: 20, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1
        }
    };

    return (
        <section id="Proyectos" className="py-20 bg-[var(--neutral-1o40-smjd)]">
            <div className="container mx-auto px-4">
                <h1 className="text-4xl font-bold text-center mb-12">Proyectos</h1>

                <motion.div
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                >
                    {projects.map((project, index) => (
                        <motion.div
                            key={index * 1}
                            className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 relative"
                            variants={itemVariants}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            {/* Badge "En desarrollo" */}
                            {project.onDev &&
                                <div className="absolute top-4 right-4 bg-yellow-500 text-white text-xs font-bold px-3 py-1 rounded-full shadow-md z-10 flex items-center gap-1">
                                    <svg
                                        className="w-4 h-4"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
                                        />
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                                        />
                                    </svg>
                                    En Desarrollo
                                </div>
                            }

                            <img
                                src={project.image}
                                alt={project.title}
                                className="w-full h-48 object-cover"
                            />
                            <div className="p-6">
                                <h3 className="text-xl font-bold text-[var(--primary-smjd)] mb-2">
                                    {project.title}
                                </h3>
                                <p className="text-gray-600 mb-4">
                                    {project.description}
                                </p>
                                <div className="flex flex-wrap gap-2 mb-4">
                                    {project.technologies.map((tech, i) => (
                                        <span
                                            key={i * 1}
                                            className="px-3 py-1 bg-[var(--accent-1o-smjd)] text-white text-sm rounded-full"
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                                <a
                                    href={project.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-block bg-[var(--accent-2-smjd)] text-white px-6 py-2 rounded-lg hover:bg-[var(--primary-smjd)] transition-colors duration-300"
                                >
                                    Ver Proyecto
                                </a>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default Projects;
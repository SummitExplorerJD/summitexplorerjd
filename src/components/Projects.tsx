import { FC } from "react";
import { motion } from "framer-motion";

interface Project {
    title: string;
    description: string;
    image: string;
    technologies: string[];
    link: string;
}

const Projects: FC = () => {
    const projects: Project[] = [
        {
            title: "SummitExplorer App",
            description: "Aplicación móvil para rastrear rutas de montañismo y compartir experiencias.",
            image: "/1000192510.jpg", // Using your existing image
            technologies: ["React Native", "Node.js", "MongoDB"],
            link: "https://github.com/SummitExplorerJD"
        },
        {
            title: "Climbing Route Finder",
            description: "Plataforma web para descubrir y compartir rutas de escalada.",
            image: "/1000192628.jpg", // Using your existing image
            technologies: ["React", "TypeScript", "Express"],
            link: "https://github.com/SummitExplorerJD"
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
                            key={index}
                            className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
                            variants={itemVariants}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
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
                                            key={i}
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
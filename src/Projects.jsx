import {projects} from "./assets/projectsData";
import ProjectsCard from "./ProjectsCard";
import { motion } from "motion/react";

export const Projects = () => {
    return (
        <motion.div id="projects" className="p-10 m-10 bg-base border-2 border-border rounded-2xl"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 2 }}
        >
            <h2 className="text-4xl font-bold  text-text-main ml-2 mb-8">My Projects</h2>
            <motion.div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
            >
                {projects.map((project) => (
                    <ProjectsCard key={project.id} project={project} />
                ))}
            </motion.div>
        </motion.div>
    );
};
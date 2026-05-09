import { FaLinkedin } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import { motion } from "motion/react";
export const Contacts = () =>{
    return (
        <motion.div id="contact" className="flex flex-col gap-8 items-start p-8 m-4 bg-surface border-2 border-border rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 hover:scale-1.5"
             initial={{ opacity: 0, y: 40 }}
             whileInView={{ opacity: 1, y: 0 }}
             transition={{ duration: 2 }}
        >
            <h1 className="text-3xl font-bold text-text-main font-display">Contacts</h1>
            
            <div className="flex  gap-3 w-full items-center">
                <h3 className="text-lg font-semibold text-text-main rounded-3xl bg-surface-light px-4 py-2 border-2 border-border">Email</h3>
                <a 
                    href="mailto:saqlainmustaque532@gmail.com" 
                    className="text-primary hover:text-primary-hover transition-colors duration-200 break-all hover:underline decoration-2 underline-offset-2"
                >
                    saqlainmustaque532@gmail.com
                </a>
            </div>
            
            <div className="flex  gap-3 w-full items-center">
                <h3 className="text-lg font-semibold text-text-main rounded-3xl bg-surface-light px-4 py-2 border-2 border-border">Phone</h3>
                <a 
                    href="tel:9236806109" 
                    className="text-primary hover:text-primary-hover transition-colors duration-200 hover:underline decoration-2 underline-offset-2"
                >
                    +91 9236806109
                </a>
            </div>
            
            <div className="flex flex-col gap-4 w-full pt-4 border-t border-border">
                <h2 className="text-xl font-bold text-text-main font-display">Social Media</h2>
                <div className="flex gap-6">
                    <a 
                        href="https://www.linkedin.com/in/saqlain-mustaque-790029330/" 
                        className="text-3xl text-primary hover:text-primary-hover hover:scale-110 transition-all duration-200 transform"
                        aria-label="LinkedIn"
                    >
                        <FaLinkedin />
                    </a>
                    <a 
                        href="https://github.com/Saqlain532" 
                        className="text-3xl text-primary hover:text-primary-hover hover:scale-110 transition-all duration-200 transform"
                        aria-label="GitHub"
                    >
                        <FaGithub />
                    </a>
                </div>
            </div>
        </motion.div>
    )
}
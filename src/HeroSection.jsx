import picture from './assets/saqlain.jpg'
import { TypeAnimation } from 'react-type-animation';
import { motion } from "motion/react"
import { projects } from './assets/projectsData';
export const HeroSection = () => {
  return (
    <>
      {/* MOBILE LAYOUT */}
      <motion.div id="home" className="lg:hidden h-auto bg-base font-display text-text-main flex flex-col items-center border-2 border-border rounded-2xl p-6 m-4"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 2, ease: [0.22, 1, 0.36, 1] }}>
        
        {/* Mobile Image */}
        <div className="h-40 w-40 mb-6">
          <motion.img src={picture} 
            alt="Saqlain Mustaque" 
            className="rounded-full w-full h-full object-cover"
            whileHover={{ rotateY: 180 }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
          />
        </div>

        {/* Mobile Text */}
        <span className='text-xl'>Hi, I'm</span>
        <TypeAnimation
          sequence={[
            " Saqlain Mustaque Ansari",
            1500,
            " a Full Stack Developer",
            1000,
            " a Problem Solver",
            1000,
          ]}
          wrapper="h1"
          speed={50}
          className="text-xl text-cyan-400 text-center"
          repeat={Infinity}
        />

        {/* Mobile About */}
        <h2 className="text-2xl font-bold mb-4 mt-6">About Me</h2>
        <motion.div id="about"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 2 }}
          className="font-sans text-sm text-text-muted mb-6">
          I am an aspiring Software Engineer with a strong interest in full-stack web development and problem-solving. I have completed my MERN Stack development journey and built full-stack projects, including BazaarX.
        </motion.div>
        
        <button onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })} className="bg-primary text-white font-sans px-6 py-3 rounded-3xl hover:scale-105 text-sm">
          View My Work
        </button>
      </motion.div>

      {/* DESKTOP LAYOUT */}
      <motion.div id="home" className="hidden lg:flex h-auto bg-base font-display text-text-main items-center border-2 border-border rounded-2xl p-10 m-10"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 2, ease: [0.22, 1, 0.36, 1] }}>
        
        {/* Desktop Left - Image */}
        <div className="mt-4 w-1/2 flex flex-col items-center justify-center">
          <div className="h-60 w-80 mb-20">
            <motion.img src={picture} 
              alt="Saqlain Mustaque" 
              className="rounded-full  object-cover"
              whileHover={{ rotateY: 180 }}
              transition={{ duration: 0.8, ease: "easeInOut" }}
            />
          </div>
          <span className='text-3xl'>Hi, I'm</span>
          <TypeAnimation
            sequence={[
              " Saqlain Mustaque Ansari",
              1500,
              " a Full Stack Developer",
              1000,
              " a Problem Solver",
              1000,
            ]}
            wrapper="h1"
            speed={50}
            className="text-3xl text-cyan-400"
            repeat={Infinity}
          />
        </div>

        {/* Desktop Right - About */}
        <div className='w-1/2 ml-10'>
          <h2 className="text-3xl font-bold mb-4">About Me</h2>
          <motion.div id="about"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 2 }}
            className="font-sans text-text-muted mb-8">
            I am an aspiring Software Engineer with a strong interest in full-stack web development and problem-solving. I have completed my MERN Stack development journey and built full-stack projects, including BazaarX, where I applied modern web technologies to create scalable and user-focused applications. Alongside web development, I actively practice Data Structures and Algorithms using C++ to strengthen my analytical and problem-solving skills. I am passionate about continuous learning and currently focused on expanding my knowledge in DevOps and System Design to become a well-rounded software engineer. I enjoy building impactful projects, exploring new technologies, and continuously improving my technical skills to prepare for opportunities in top product-based companies.
          </motion.div>
          
          <button onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })} className="bg-primary text-white font-sans px-6 py-3 rounded-3xl hover:scale-105">
            View My Work
          </button>
        </div>
      </motion.div>
    </>
  )
}

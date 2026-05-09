import React from 'react';
import { skills } from './assets/skillsData';
import { motion } from "motion/react";

const Skills = () => {
  const {
    languages,
    frameworksAndLibraries,
    databases,
    toolsAndPlatforms,
    concepts,
  } = skills;

  const SkillCategory = ({ title, items }) => (
    <motion.div 
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 2 }}
      whileHover={{ y: -5 }}
      transition={{ duration: 0.3 }}
      className="bg-surface border border-border rounded-2xl p-6 shadow-lg"
    >
      <h3 className="text-2xl font-bold text-text-main mb-5">
        {title}
      </h3>

      <div className="flex flex-wrap gap-3">
        {items.map((item, index) => (
          <span
            key={index}
            className="
              px-4 py-2 rounded-full
              bg-primary/10
              border border-primary/20
              text-text-main
              font-sans
              text-sm
              hover:scale-105
              transition-transform duration-300
              cursor-default
            "
          >
            {item}
          </span>
        ))}
      </div>
    </motion.div>
  );

  return (
    <section id="skills" className="px-6 md:px-12 py-16 bg-base border-2 border-border rounded-2xl m-10">
      <div className="max-w-7xl mx-auto" >

        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="
            text-5xl font-bold text-text-main
            mb-14  border-b-2 border-border rounded-3xl py-4 px-4
          "
        >
          My Skills
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-8">

          <SkillCategory
            title="Languages"
            items={languages}
          />

          <SkillCategory
            title="Frameworks & Libraries"
            items={frameworksAndLibraries}
          />

          <SkillCategory
            title="Databases"
            items={databases}
          />

          <SkillCategory
            title="Tools & Platforms"
            items={toolsAndPlatforms}
          />

          <div className="md:col-span-2">
            <SkillCategory
              title="Concepts"
              items={concepts}
            />
          </div>

        </div>
      </div>
    </section>
  );
};

export default Skills;
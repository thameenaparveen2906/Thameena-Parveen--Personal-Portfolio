import React from 'react';
import { motion } from 'framer-motion';
import { FaPython, FaReact, FaJs, FaHtml5, FaCss3, FaNodeJs, FaDatabase, FaRobot, FaMobileAlt, FaServer, FaGithub } from 'react-icons/fa';
import { SiDjango, SiTypescript, SiTailwindcss, SiFlutter, SiPostgresql, SiMongodb } from 'react-icons/si';

const SkillCard = ({ name, icon: Icon, color }) => (
    <motion.div
        whileHover={{ y: -5 }}
        className="p-4 bg-white rounded-xl shadow-sm border border-gray-100 flex flex-col items-center justify-center gap-3 hover:shadow-md transition-shadow"
    >
        <Icon className="text-4xl" style={{ color }} />
        <span className="font-medium text-gray-700">{name}</span>
    </motion.div>
);

const Skills = () => {
    const skills = [
        { name: 'Python', icon: FaPython, color: '#3776AB' },
        { name: 'Django', icon: SiDjango, color: '#092E20' },
        { name: 'React.js', icon: FaReact, color: '#61DAFB' },
        { name: 'JavaScript', icon: FaJs, color: '#F7DF1E' },
        { name: 'PostgreSQL', icon: SiPostgresql, color: '#336791' },
        { name: 'MySQL', icon: FaDatabase, color: '#4479A1' },
        { name: 'HTML5', icon: FaHtml5, color: '#E34F26' },
        { name: 'CSS3', icon: FaCss3, color: '#1572B6' },
        { name: 'Bootstrap', icon: FaCss3, color: '#7952B3' },
        { name: 'Docker', icon: FaServer, color: '#2496ED' },
        { name: 'AI/LLM', icon: FaRobot, color: '#2D5A27' },
        { name: 'Git', icon: FaGithub, color: '#F05032' },
    ];

    return (
        <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8 bg-primary">
            <div className="max-w-7xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl font-bold mb-4">Skills & Expertise</h2>
                    <div className="w-20 h-1 bg-accent mx-auto rounded-full"></div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6"
                >
                    {skills.map((skill, index) => (
                        <SkillCard key={index} {...skill} />
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default Skills;

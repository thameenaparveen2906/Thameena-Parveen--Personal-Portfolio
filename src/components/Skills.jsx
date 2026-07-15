import React from 'react';
import { motion } from 'framer-motion';
import { FaPython, FaReact, FaJs, FaHtml5, FaCss3, FaDatabase, FaRobot, FaServer, FaGitAlt, FaGithub, FaSlack, FaFileAlt, FaBug, FaSyncAlt, FaTasks } from 'react-icons/fa';
import { SiDjango, SiPostgresql, SiSqlite, SiGooglegemini, SiJira, SiOpenai, SiPostman, SiVercel, SiRender, SiNotion } from 'react-icons/si';
import { TbApi, TbBulb, TbBrandAws, TbBrandVscode } from 'react-icons/tb';

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
        { name: 'REST APIs', icon: TbApi, color: '#009688' },
        { name: 'PostgreSQL', icon: SiPostgresql, color: '#336791' },
        { name: 'MySQL', icon: FaDatabase, color: '#4479A1' },
        { name: 'SQLite', icon: SiSqlite, color: '#003B57' },
        { name: 'HTML5', icon: FaHtml5, color: '#E34F26' },
        { name: 'CSS3', icon: FaCss3, color: '#1572B6' },
        { name: 'Bootstrap', icon: FaCss3, color: '#7952B3' },
        { name: 'OpenAI API', icon: SiOpenai, color: '#412991' },
        { name: 'Google Gemini AI', icon: SiGooglegemini, color: '#8E75B2' },
        { name: 'AI/LLM', icon: FaRobot, color: '#2D5A27' },
        { name: 'Prompt Engineering', icon: TbBulb, color: '#F5A623' },
        { name: 'Git', icon: FaGitAlt, color: '#F05032' },
        { name: 'GitHub', icon: FaGithub, color: '#181717' },
        { name: 'Jira', icon: SiJira, color: '#0052CC' },
        { name: 'Postman', icon: SiPostman, color: '#FF6C37' },
        { name: 'Docker', icon: FaServer, color: '#2496ED' },
        { name: 'Vercel', icon: SiVercel, color: '#000000' },
        { name: 'Render', icon: SiRender, color: '#46E3B7' },
        { name: 'AWS', icon: TbBrandAws, color: '#FF9900' },
        { name: 'VS Code', icon: TbBrandVscode, color: '#007ACC' },
        { name: 'Slack', icon: FaSlack, color: '#4A154B' },
        { name: 'Notion', icon: SiNotion, color: '#000000' },
        { name: 'Technical Documentation', icon: FaFileAlt, color: '#4A5568' },
        { name: 'QA Testing', icon: FaBug, color: '#D53F8C' },
        { name: 'Agile/Scrum', icon: FaSyncAlt, color: '#3182CE' },
        { name: 'Project Coordination', icon: FaTasks, color: '#38A169' },

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

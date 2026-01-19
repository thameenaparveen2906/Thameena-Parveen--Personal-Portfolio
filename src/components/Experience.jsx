import React from 'react';
import { motion } from 'framer-motion';

const ExperienceItem = ({ role, company, duration, descriptions }) => (
    <div className="relative pl-8 pb-12 border-l-2 border-gray-200 last:border-0 last:pb-0">
        <div className="absolute top-0 -left-[9px] w-4 h-4 bg-accent rounded-full border-4 border-white shadow-sm"></div>
        <div className="mb-2">
            <h3 className="text-xl font-bold text-secondary">{role}</h3>
            <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-4 text-sm text-gray-500 mb-2">
                <span className="font-semibold text-accent">{company}</span>
                <span className="hidden sm:inline">•</span>
                <span>{duration}</span>
            </div>
        </div>
        <ul className="space-y-2">
            {descriptions.map((desc, index) => (
                <li key={index} className="text-gray-600 text-sm leading-relaxed flex items-start gap-2">
                    <span className="mt-1.5 w-1.5 h-1.5 bg-gray-400 rounded-full flex-shrink-0"></span>
                    <span>{desc}</span>
                </li>
            ))}
        </ul>
    </div>
);

const Experience = () => {
    const experiences = [
        {
            role: 'Jr Python Intern',
            company: 'Knovista Technologies',
            duration: 'October 2025 - January 2026',
            descriptions: [
                'Developed full-stack web solutions with Python, React.js, and Django REST APIs.',
                'Implemented database integrations, authentication, and backend services to streamline operations.',
                'Improved coding proficiency through real-world feature development and collaborative projects.'
            ]
        },
        {
            role: 'Associate Program Executive',
            company: 'Talrop',
            duration: 'June 2025 - September 2025',
            descriptions: [
                'Managed backend operations for 5+ startup teams, coordinating 100+ tasks in operations and development.',
                'Collaborated cross-functionally using Jira and Slack to ensure timely project delivery.',
                'Created workflows, weekly sprints, and progress reports, improving task completion and team efficiency.'
            ]
        },
        {
            role: 'Program Executive Intern',
            company: 'Talrop',
            duration: 'February 2025 - May 2025',
            descriptions: [
                'Led requirement flows and follow-ups for 5+ startups, ensuring proactive execution of deliverables.',
                'Supported 300+ students in Junior Innovators Program through structured operations and research.',
                'Conducted weekly scrums, reports, and competitor analyses to enhance decision-making.'
            ]
        }
    ];

    return (
        <section id="experience" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
            <div className="max-w-4xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <span className="text-accent font-semibold tracking-wider uppercase mb-2 block">Career Path</span>
                    <h2 className="text-4xl font-bold mb-4">Work Experience</h2>
                    <div className="w-20 h-1 bg-accent mx-auto rounded-full"></div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                >
                    {experiences.map((exp, index) => (
                        <ExperienceItem key={index} {...exp} />
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default Experience;

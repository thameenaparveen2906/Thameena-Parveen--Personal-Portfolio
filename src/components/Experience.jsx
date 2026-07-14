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
            role: 'Operations Executive',
            company: 'AImploy',
            duration: 'May 2026 - Present',
            descriptions: [
                'Contributed to technical documentation and performed QA testing on platform workflows for an AI-powered HR tech platform, identifying assessment flow issues that improved the overall candidate experience',
                'Sourced 50+ candidates across HR, Finance, Marketing, Tech, and Design roles; screened and shortlisted profiles achieving a 30–40% conversion rate to interview stage',
                'Built a centralized hiring dashboard with role-wise, client-wise, and status-based tracking and  implemented a bi-daily reporting system that gave leadership real-time visibility into pipeline progress and blockers'
            ]
        },
        {
            role: 'AI Data Associate',
            company: 'SoftAge Information Technology Ltd.',
            duration: 'May 2026 - July 2026',
            descriptions: [
                'Collected and submitted structured image datasets for AI and computer vision model training projects',
                'Maintained data quality, consistency, and accuracy across large-scale annotation workflows following strict project guidelines',
                'Contributed to dataset preparation and validation pipelines, supporting timely delivery of training data to model teams'
            ]
        },
        {
            role: 'Freelance Full Stack Developer',
            company: 'Self-Employed',
            duration: 'February 2026 - Present',
            descriptions: [
                'Currently building an online jewellery store — product catalogue, cart, secure checkout, and admin dashboard — using Django and React.js',
                'Developing a psychology consultation platform with appointment booking, therapist profiles, session management, and secure client communication',
                'Handling end-to-end delivery for both projects: requirements, UI/UX, backend APIs, database design, authentication, and deployment',
                'Working directly with clients to translate business needs into functional products, managing timelines and feedback independently'
            ]
        },
        {
            role: 'Jr Python Intern',
            company: 'Knovista Technologies',
            duration: 'October 2025 - January 2026',
            descriptions: [
                'Developed full-stack web solutions with Python, React.js, and Django REST APIs',
                'Implemented database integrations, authentication, and backend services to streamline operations',
                'Improved coding proficiency through real-world feature development and collaborative projects'
            ]
        },
        {
            role: 'Associate Program Executive',
            company: 'Talrop',
            duration: 'June 2025 - September 2025',
            descriptions: [
                'Managed backend operations for 5+ startup teams, coordinating 100+ tasks in operations and development',
                'Collaborated cross-functionally using Jira and Slack to ensure timely project delivery',
                'Created workflows, weekly sprints, and progress reports, improving task completion and team efficiency'
            ]
        },
        {
            role: 'Program Executive Intern',
            company: 'Talrop',
            duration: 'February 2025 - May 2025',
            descriptions: [
                'Led requirement flows and follow-ups for 5+ startups, ensuring proactive execution of deliverables',
                'Supported 300+ students in Junior Innovators Program through structured operations and research',
                'Conducted weekly scrums, reports, and competitor analyses to enhance decision-making'
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

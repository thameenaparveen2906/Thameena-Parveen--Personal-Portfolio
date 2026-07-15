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
            role: 'IT Operations Executive',
            company: 'AImploy',
            duration: 'May 2026 - Present',
            descriptions: [
                'Wrote technical documentation (user flows, feature specs, system architecture) for a University Admissions Intelligence Platform, turning business requirements into build-ready specs.',
                'Set up and tested the company's internal HRMS platform, finding and fixing workflow issues.',
                'Built a hiring dashboard to track candidates by role, client, and status for real-time pipeline visibility.',
                'Tested core workflows on the AI-powered HR platform, documenting bugs to improve stability and user experience.'
            ]
        },
        {
            role: 'AI Data Associate',
            company: 'SoftAge Information Technology Ltd.',
            duration: 'May 2026 - July 2026',
            descriptions: [
                'Supported AI/computer vision model training through structured data collection, annotation, and validation.',
                'Applied prompt engineering to test and refine model outputs, improving accuracy and consistency.',
                'Maintained data quality standards across large-scale annotation pipelines, ensuring datasets met project specs.'
            ]
        },
        {
            role: 'Freelance Full Stack Developer',
            company: 'Self-Employed',
            duration: 'February 2026 - Present',
            descriptions: [
                'Building an online jewellery e-commerce platform with Django and React.js — completed the landing page, currently working on product catalogue, cart, and secure checkout.',
                'Designing a psychology consultation platform (appointment booking, therapist profiles, secure session management) — currently in requirements and technical documentation phase.',
                'Built and deployed personal portfolio websites for students and fresh graduates, turning academic and project work into live sites.',
                'Managed end-to-end technical delivery for client projects — requirements gathering, UI/UX, backend APIs, database design, authentication, and deployment.'
            ]
        },
        {
            role: 'Jr Python Intern',
            company: 'Knovista Technologies',
            duration: 'October 2025 - January 2026',
            descriptions: [
                'Built the AI Interview Platform end-to-end — automated question generation, candidate evaluation, and scoring using OpenAI and Google Gemini AI.',
                'Developed full-stack features with Python, React.js, and Django REST APIs, including database integrations and authentication.',
                'Debugged backend services and resolved workflow issues to improve platform reliability ahead of release.',
                'Collaborated in a live product environment, shipping features into production within a 4-month internship.'
            ]
        },
        {
            role: 'Associate Program Executive',
            company: 'Talrop',
            duration: 'February 2025 - September 2025',
            descriptions: [
                'Handled technical operations and project coordination for 5+ startups, managing documentation, progress tracking, and delivery timelines in Jira.',
                'Tested and debugged a corporate travel SaaS platform, logging and tracking bugs through resolution.',
                'Wrote technical documentation and bug reports for each startup platforms, keeping engineering and stakeholders aligned.',
                'Researched and built pitch decks for assigned startups; ran weekly scrums and authored reports to flag blockers and progress.'
            ]
        },
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

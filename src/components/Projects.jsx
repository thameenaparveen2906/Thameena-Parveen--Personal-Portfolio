import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

const ProjectCard = ({ title, description, tags, link }) => (
    <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        whileHover={{ y: -10 }}
        className="bg-white rounded-2xl overflow-hidden shadow-lg border border-gray-100 flex flex-col h-full"
    >
        <div className="p-8 flex-1 flex flex-col">
            <div className="flex justify-between items-start mb-4">
                <h3 className="text-2xl font-bold text-secondary group-hover:text-accent transition-colors">
                    {title}
                </h3>
                <a
                    href={link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-accent transition-colors"
                >
                    <FaGithub size={24} />
                </a>
            </div>

            <p className="text-gray-600 mb-6 flex-1 leading-relaxed">
                {description}
            </p>

            <div className="flex flex-wrap gap-2 mt-auto">
                {tags.map((tag, index) => (
                    <span
                        key={index}
                        className="px-3 py-1 bg-primary text-secondary text-sm font-medium rounded-full border border-gray-200"
                    >
                        {tag}
                    </span>
                ))}
            </div>
        </div>
    </motion.div>
);

const Projects = () => {
    // Data derived from Resume
    const projects = [
        {
            title: 'RecruitMate - AI Interview Platform',
            description: 'A modern AI-powered interview automation system built with Django, Gemini AI, and OpenAI. It enables recruiters to generate interview questions, parse resumes, evaluate candidates, and manage interview sessions — all automatically.',
            tags: ['Django', 'HTML/CSS', 'OpenAI API', 'Gemini AI', 'SQLite'],
            link: 'https://github.com/thameenaparveen2906/RecruitMate--AI-Interview-Platform'
        },
        {
            title: 'FreshBuy - AI Assisted Farmer Marketplace',
            description: 'A modern AI-assisted marketplace connecting farmers with buyers for fresh produce. It integrates Google Gemini AI, simplifies product management for farmers, and provides a smooth buying experience with a clean React frontend and secure payment integration.',
            tags: ['Django', 'React.js', 'Tailwind CSS', 'Gemini AI', 'PostgreSQL'],
            link: 'https://github.com/thameenaparveen2906/FreshBuy--AI-Assisted-Farmer-Marketplace'
        },
        {
            title: 'Prompt.ai - AI Chat Application',
            description: 'A full-stack AI-powered chat application built using Django, Django REST Framework, React, and OpenAI’s GPT-4 API. This project demonstrates how to build, integrate, and deploy a modern AI assistant web application with a clean frontend and a secure backend.',
            tags: ['Django', 'React.js', 'Tailwind CSS', 'OpenAI API', 'SQLite'],
            link: 'https://github.com/thameenaparveen2906/Prompt.ai--AI-Chat-App'
        },
        {
            title: 'ProjectFlow - Project Management System',
            description: 'A modern web-based project and task management platform built with Django and PostgreSQL. It enables users to manage teams, projects, and tasks efficiently while maintaining structured workflows and role-based collaboration.',
            tags: ['Django', 'HTML/CSS', 'PostgreSQL'],
            link: 'https://github.com/thameenaparveen2906/ProjectFlow--Project-Management-System'
        },
        {
            title: 'CuisineCritivVDA - Food Review Website',
            description: 'A full-stack food review website built with Flask (Python) for the backend and HTML, CSS, and JavaScript for the frontend. Users can create accounts, submit reviews, rate restaurants and dishes, and explore cafes ranked by user ratings.',
            tags: ['Flask', 'HTML/CSS', 'JavaScript', 'SQLite'],
            link: 'https://github.com/thameenaparveen2906/CuisineCriticVDA--Food-Review-Website'
        },
        {
            title: 'Nexar - AR Classifieds and Marketplace Flutter App',
            description: 'A modern Augmented Reality (AR) classifieds and marketplace app built with Flutter, allowing users to list, explore, and visualize products in AR before purchasing. This project includes a Flutter frontend and a Node.js/MongoDB backend.',
            tags: ['Node.js', 'Flutter', 'MongoDB'],
            link: 'https://github.com/thameenaparveen2906/Nexar--AR-Classifieds-and-Marketplace-Flutter-App'
        },

    ];

    return (
        <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
            <div className="max-w-7xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <span className="text-accent font-semibold tracking-wider uppercase mb-2 block">Portfolio</span>
                    <h2 className="text-4xl font-bold mb-4">Featured Projects</h2>
                    <div className="w-20 h-1 bg-accent mx-auto rounded-full"></div>
                </motion.div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, index) => (
                        <ProjectCard key={index} {...project} />
                    ))}
                </div>

                <div className="text-center mt-12">
                    <a
                        href="https://github.com/thameenaparveen2906?tab=repositories"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-accent font-medium hover:underline underline-offset-4"
                    >
                        View all repositories <FaExternalLinkAlt size={14} />
                    </a>
                </div>
            </div>
        </section>
    );
};

export default Projects;

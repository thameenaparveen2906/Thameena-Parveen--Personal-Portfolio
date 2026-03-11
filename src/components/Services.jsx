import React from 'react';
import { motion } from 'framer-motion';
import { FaCode, FaBrain, FaServer } from 'react-icons/fa';

const ServiceCard = ({ icon: Icon, title, description }) => (
    <motion.div
        whileHover={{ y: -10 }}
        className="p-8 bg-primary rounded-2xl border border-gray-100 transition-all hover:bg-accent hover:text-white group"
    >
        <div className="w-14 h-14 bg-white rounded-xl flex items-center justify-center mb-6 shadow-sm group-hover:bg-white/10">
            <Icon className="text-3xl text-accent group-hover:text-white transition-colors" />
        </div>
        <h3 className="text-2xl font-bold mb-4">{title}</h3>
        <p className="text-gray-600 group-hover:text-gray-100 leading-relaxed">
            {description}
        </p>
    </motion.div>
);

const Services = () => {
    const services = [
        {
            icon: FaCode,
            title: 'Full Stack Development',
            description: 'Building end-to-end web applications with modern frontend frameworks (React) and robust backends (Django/REST API).'
        },
        {
            icon: FaBrain,
            title: 'AI Integration',
            description: 'Leveraging Large Language Models (LLMs) like GPT-4 and Gemini to add intelligent automation and features to your websites.'
        },
        {
            icon: FaServer,
            title: 'API Development',
            description: 'Designing and implementing secure, scalable RESTful APIs to power mobile apps and web platforms.'
        }
    ];

    return (
        <section id="services" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
            <div className="max-w-7xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl font-bold mb-4">What I Do</h2>
                    <p className="text-gray-600 max-w-2xl mx-auto">
                        Combining technical depth with creative problem solving to deliver high-quality software solutions.
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-3 gap-8">
                    {services.map((service, index) => (
                        <ServiceCard key={index} {...service} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Services;

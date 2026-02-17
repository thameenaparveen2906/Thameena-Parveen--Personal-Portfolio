import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
    return (
        <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
            <div className="max-w-7xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl font-bold mb-4">About Me</h2>
                    <div className="w-20 h-1 bg-accent mx-auto rounded-full"></div>
                </motion.div>

                <div className="grid md:grid-cols-2 gap-12 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    >
                        <div className="prose prose-lg text-gray-600">
                            <p className="mb-6">
                                I am a passionate <strong>Software Engineer</strong> with strong expertise in <strong>Python Full Stack Development</strong>.
                                My journey involves building scalable web applications using <strong>Django, REST APIs and React.js</strong>, and integrating cutting-edge <strong>AI & Automation</strong> solutions.
                            </p>
                            <p className="mb-6">
                                I love exploring new technologies and solving complex problems.
                                With a background in both backend architecture and frontend interactivity,
                                I strive to create seamless user experiences that are powered by robust intelligent systems.
                            </p>
                            <p>
                                When I'm not coding, I'm researching the latest in GenAI, exploring GitHub for inspiration (check out my contributions!),
                                or working on unique projects like AI-assisted Marketplaces and AR apps.
                            </p>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                        className="space-y-8"
                    >
                        {/* Education */}
                        <div className="bg-primary p-6 rounded-xl shadow-sm">
                            <h3 className="font-bold text-2xl mb-4 text-secondary">Education</h3>
                            <div className="mb-4">
                                <div className="flex justify-between items-start">
                                    <h4 className="font-semibold text-lg">B.Tech in Computer Science and Engineering</h4>
                                    <span className="text-sm text-accent font-medium">2021-2025</span>
                                </div>
                                <p className="text-gray-600">College of Engineering Vadakara</p>
                                <p className="text-sm text-gray-500">CGPA: 8.28</p>
                            </div>
                        </div>

                        {/* Volunteering/Leadership */}
                        <div className="bg-primary p-6 rounded-xl shadow-sm">
                            <h3 className="font-bold text-2xl mb-4 text-secondary">Leadership</h3>
                            <div className="space-y-4">
                                <div>
                                    <h4 className="font-semibold">Chairperson, IEEE WiE AG CEV</h4>
                                    <span className="text-sm text-gray-500 block mb-1">2023 - 2024</span>
                                    <p className="text-sm text-gray-600">Organized tech workshops for 30+ women, promoting skill development.</p>
                                </div>
                                <div>
                                    <h4 className="font-semibold">Vice Chairperson, IEEE WiE AG CEV</h4>
                                    <span className="text-sm text-gray-500 block mb-1">2022 - 2023</span>
                                    <p className="text-sm text-gray-600">Led menstrual hygiene awareness programs benefiting 50+ students.</p>
                                </div>
                            </div>
                        </div>
                       {/* Professional Certificate */}
<div className="bg-primary p-6 rounded-xl shadow-sm">
    <h3 className="font-bold text-2xl mb-4 text-secondary">
        Professional Certificate
    </h3>

    <div className="mb-4">
        <div className="flex justify-between items-start">
            <h4 className="font-semibold text-lg">
                Microsoft Back-End Developer Specialization
            </h4>
            <a 
                href="https://www.coursera.org/account/accomplishments/specialization/Y46GMYAEDDIY"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-accent font-medium"
            >
                Credential
            </a>
        </div>
    </div>

    <div className="mb-4">
        <div className="flex justify-between items-start">
            <h4 className="font-semibold text-lg">
                Generative AI for Software Development Specialization
            </h4>
            <a 
                href="https://www.coursera.org/account/accomplishments/specialization/2T8YNZEB0UPT"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-accent font-medium"
            >
                Credential
            </a>
        </div>
    </div>
</div>

                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default About;

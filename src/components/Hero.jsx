import React from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
    return (
        <section id="home" className="min-h-screen flex items-center justify-center pt-20 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl w-full grid md:grid-cols-2 gap-12 items-center">
                {/* Text Content */}
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <span className="inline-flex items-center text-accent font-semibold tracking-wider uppercase text-sm mb-4 rounded-full px-4 py-2 bg-accent/10 backdrop-blur-sm border border-accent/20">
                        Open for Opportunities
                    </span>

                    <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
                        Hi, I'm <br />
                        <span className="text-accent">Thameena Parveen</span>
                    </h1>
                    <p className="text-xl text-gray-600 mb-8 max-w-lg leading-relaxed">
                        Full-Stack Developer skilled in Python, Django, and AI Automation.
                        I build robust backend systems, scalable web applications, and efficient software solutions.
                    </p>

                     <div className="flex flex-wrap gap-4">
                        <a
                            href="https://drive.google.com/file/d/1TOmPEWmYFN6I-6raZkke0ye8t2-BzQuX/view?usp=sharing"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="px-8 py-3 bg-accent text-white font-medium rounded-full hover:bg-accent-light transition-all shadow-lg hover:shadow-xl hover:-translate-y-1"
                        >
                            View Resume
                        </a>
                        <a
                            href="#projects"
                            className="px-8 py-3 border-2 border-accent text-accent font-medium rounded-full hover:bg-accent hover:text-white transition-all"
                        >
                            View Projects
                        </a>
                        <a
                            href="#contact"
                            className="px-8 py-3 border-2 border-accent text-accent font-medium rounded-full hover:bg-accent hover:text-white transition-all"
                        >
                            Contact Me
                        </a>
                    </div>
                </motion.div>

                {/* Image/Visual */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="relative flex justify-center"
                >
                    <div className="relative w-80 h-80 md:w-96 md:h-96">
                        {/* Abstract decorative blobs */}
                        <div className="absolute top-0 right-0 w-full h-full bg-accent/10 rounded-full blur-3xl -z-10 animate-pulse"></div>
                        <div className="absolute -bottom-10 -left-10 w-full h-full bg-orange-100/50 rounded-full blur-3xl -z-10"></div>

                        {/* Photo Container */}
                        {/* 
                 NOTE: In a real scenario, we would use the user's uploaded photo. 
                 Since I cannot easily move the uploaded file to 'public' without knowing its name or using a move command (which I can do), 
                 I'll use a placeholder or assume I will move it. 
                 Wait, I have the path: /Users/macbookair/.gemini/antigravity/brain/33cf42b0-f34a-4edd-aced-d70535cabd13/uploaded_image_1768807825248.jpg
                 I should copy this to public/profile.jpg.
               */}
                        <img
                            src="./profile.jpg"
                            alt="Thameena Parveen"
                            className="w-full h-full object-cover rounded-[2rem] shadow-2xl border-4 border-white rotate-3 hover:rotate-0 transition-transform duration-500"
                        />
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;

import React, { useState } from 'react';
import { FaBars, FaTimes, FaGithub, FaLinkedin } from 'react-icons/fa';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const links = [
        { name: 'About', href: '#about' },
        { name: 'Skills', href: '#skills' },
        { name: 'Projects', href: '#projects' },
        { name: 'Services', href: '#services' },
        { name: 'Contact', href: '#contact' },
    ];

    return (
        <nav className="fixed w-full h-20 bg-primary/90 backdrop-blur-sm z-50 border-b border-gray-200">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center justify-between">
                {/* Logo */}
                <div className="flex-shrink-0">
                    <a href="#" className="font-bold text-2xl tracking-tighter text-secondary">
                        Thameena<span className="text-accent">.</span>
                    </a>
                </div>

                {/* Desktop Menu */}
                <div className="hidden md:flex items-center space-x-8">
                    {links.map((link) => (
                        <a
                            key={link.name}
                            href={link.href}
                            className="text-secondary hover:text-accent font-medium transition-colors duration-300"
                        >
                            {link.name}
                        </a>
                    ))}
                    <a
                        href="https://github.com/thameenaparveen2906"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-secondary hover:text-accent text-xl transition-colors"
                    >
                        <FaGithub />
                    </a>
                    <a
                        href="https://linkedin.com/in/thameenaparveen"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-secondary hover:text-accent text-xl transition-colors"
                    >
                        <FaLinkedin />
                    </a>
                </div>

                {/* Mobile Menu Button */}
                <div className="md:hidden">
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="text-secondary hover:text-accent focus:outline-none"
                    >
                        {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <div className="md:hidden bg-primary/95 backdrop-blur-md absolute top-20 left-0 w-full shadow-lg">
                    <div className="px-4 pt-2 pb-6 space-y-2">
                        {links.map((link) => (
                            <a
                                key={link.name}
                                href={link.href}
                                onClick={() => setIsOpen(false)}
                                className="block px-3 py-2 text-base font-medium text-secondary hover:text-accent hover:bg-gray-100 rounded-md transition-colors"
                            >
                                {link.name}
                            </a>
                        ))}
                        <div className="flex space-x-4 px-3 pt-2">
                            <a
                                href="https://github.com/thameenaparveen2906"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-secondary hover:text-accent text-xl transition-colors"
                            >
                                <FaGithub />
                            </a>
                            <a
                                href="https://linkedin.com/in/thameenaparveen2906"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-secondary hover:text-accent text-xl transition-colors"
                            >
                                <FaLinkedin />
                            </a>
                        </div>
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navbar;

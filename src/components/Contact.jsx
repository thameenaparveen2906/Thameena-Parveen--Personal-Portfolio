import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaEnvelope, FaMapMarkerAlt, FaPhoneAlt, FaCheckCircle } from 'react-icons/fa';

const Contact = () => {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSubmitted, setIsSubmitted] = useState(false);
    const formRef = useRef();

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);

        const formData = new FormData(formRef.current);
        const GOOGLE_FORM_URL = "https://docs.google.com/forms/u/0/d/e/1FAIpQLScxoTKF9JJfc9CTz9DuPGuxoJ1u9Wkvani5Yob6JObYTyVITA/formResponse";

        try {
            await fetch(GOOGLE_FORM_URL, {
                method: "POST",
                mode: "no-cors",
                body: formData,
            });
            setIsSubmitted(true);
            formRef.current.reset();
        } catch (error) {
            console.error("Error submitting form:", error);
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-primary relative">
            <div className="max-w-4xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl font-bold mb-4">Get In Touch</h2>
                    <p className="text-gray-600">
                        Have a project in mind or want to discuss the latest in AI? I'd love to hear from you.
                    </p>
                </motion.div>

                <div className="bg-white rounded-2xl shadow-xl overflow-hidden flex flex-col md:flex-row">
                    {/* Contact Info */}
                    <div className="bg-secondary text-white p-10 md:w-4/5 flex flex-col justify-between relative overflow-hidden">
                        <div className="relative z-10">
                            <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
                            <div className="space-y-6">
                                <div className="flex items-center gap-4">
                                    <div className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center">
                                        <FaEnvelope className="text-accent" />
                                    </div>
                                    <span>thameenaparveenofficial@gmail.com</span>
                                </div>
                                <div className="flex items-center gap-4">
                                    <div className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center">
                                        <FaMapMarkerAlt className="text-accent" />
                                    </div>
                                    <span>Kerala, India</span>
                                </div>
                                <div className="flex items-center gap-4">
                                    <div className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center">
                                        <FaPhoneAlt className="text-accent" />
                                    </div>
                                    <span>+91-8848977250</span>
                                </div>
                            </div>
                        </div>

                    </div>

                    {/* Form */}
                    <div className="p-10 md:w-5/5">
                        <form
                            ref={formRef}
                            className="space-y-6"
                            onSubmit={handleSubmit}
                        >
                            <div className="grid grid-cols-2 gap-6">
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">Name</label>
                                    <input
                                        type="text"
                                        name="entry.319996879"
                                        className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-accent focus:ring-1 focus:ring-accent outline-none transition-colors bg-primary"
                                        placeholder="Your Name"
                                        required
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                                    <input
                                        type="email"
                                        name="entry.1546445575"
                                        className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-accent focus:ring-1 focus:ring-accent outline-none transition-colors bg-primary"
                                        placeholder="Your Email"
                                        required
                                    />
                                </div>
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">Subject</label>
                                <input
                                    type="text"
                                    name="entry.2127769204"
                                    className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-accent focus:ring-1 focus:ring-accent outline-none transition-colors bg-primary"
                                    placeholder="Subject Line"
                                    required
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">Message</label>
                                <textarea
                                    rows="4"
                                    name="entry.711495481"
                                    className="w-full px-4 py-3 rounded-lg border border-gray-200 resize-none focus:border-accent focus:ring-1 focus:ring-accent outline-none transition-colors bg-primary"
                                    placeholder="Your Message"
                                    required
                                ></textarea>
                            </div>

                            <button
                                type="submit"
                                disabled={isSubmitting}
                                className="w-full py-3 bg-accent text-white font-medium rounded-lg hover:bg-accent-light transition-colors flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
                            >
                                {isSubmitting ? 'Sending...' : 'Send Message'}
                            </button>
                        </form>
                    </div>
                </div>
            </div>

            {/* Success Modal */}
            <AnimatePresence>
                {isSubmitted && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 px-4"
                        onClick={() => setIsSubmitted(false)}
                    >
                        <motion.div
                            initial={{ scale: 0.8, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.8, opacity: 0 }}
                            className="bg-white rounded-2xl p-8 max-w-md w-full text-center relative shadow-2xl"
                            onClick={(e) => e.stopPropagation()}
                        >
                            
                            <h3 className="text-2xl font-bold mb-4 text-gray-800">Thank you!</h3>
                            <p className="text-gray-600 mb-8">
                                Your message has been sent successfully. I'll get back to you as soon as possible.
                            </p>
                            <button
                                onClick={() => setIsSubmitted(false)}
                                className=" bg-accent text-white px-8 py-3 rounded-lg font-medium hover:bg-accent-light transition-colors"
                            >
                                Close
                            </button>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    );
};

export default Contact;

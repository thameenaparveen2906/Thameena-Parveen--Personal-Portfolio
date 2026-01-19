import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-secondary text-white py-8 text-center">
            <p className="text-gray-400">
                © {new Date().getFullYear()} Thameena Parveen. All rights reserved.
            </p>
        </footer>
    );
};

export default Footer;

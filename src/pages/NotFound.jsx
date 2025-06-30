import React from 'react';
import { motion } from 'framer-motion';

const NotFound = () => {
    return (
        <div className="flex items-center justify-center h-screen bg-gray-900 text-white p-5">
            <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.5 }}
                className="text-center"
            >
                <h1 className="text-6xl font-bold mb-4">404</h1>
                <p className="text-xl mb-6">Oops! The page you're looking for doesn't exist or has been moved.</p>
                <motion.div
                    initial={{ y: -20 }}
                    animate={{ y: 0 }}
                    transition={{ repeat: Infinity, repeatType: 'reverse', duration: 0.8 }}
                >
                    <div className="w-24 h-24 bg-red-500 rounded-full flex items-center justify-center mb-4 animate-bounce">
                        <span className="text-2xl font-semibold">🏃‍♂️</span>
                    </div>
                </motion.div>
                <button onClick={() => window.location.href = '/'} className="bg-red-500 hover:bg-red-600 text-white font-semibold py-2 px-6 rounded-full transition duration-300 ease-in-out">
                    Go Home !
                </button>
            </motion.div>
        </div>
    );
};

export default NotFound;

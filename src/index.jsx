import React from 'react';
import ReactDOM from 'react-dom/client';
import { FaInstagram, FaTiktok, FaUsers, FaHandHoldingHeart, FaBookOpen } from 'react-icons/fa';
import { MdAttractions } from 'react-icons/md';
import { FaBluesky } from "react-icons/fa6";


export default function App() {
    return (
        <>
            {/* Styles from the original HTML file */}
            <style>{`
                body {
                    font-family: 'Inter', sans-serif;
                }
                .gradient-text {
                    background: linear-gradient(90deg, #F87171, #FBBF24, #34D399, #60A5FA, #A78BFA);
                    -webkit-background-clip: text;
                    -webkit-text-fill-color: transparent;
                }
                .btn-discord {
                    transition: all 0.3s ease-in-out;
                }
                .btn-discord:hover {
                    transform: scale(1.05);
                    box-shadow: 0 10px 20px -5px rgba(99, 102, 241, 0.4);
                }
            `}</style>

            <div className="bg-gray-50 text-gray-800 font-sans">
                {/* Container */}
                <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8">

                    {/* Header */}
                    <header className="flex flex-col md:flex-row justify-between items-center py-6 gap-6">
                        {/* Logo Placeholder */}
                        <div className="flex items-center">
                            <img src="logo.png" alt="Scream Queens Logo" className="h-24" />
                        </div>
                        {/* Social Icons */}
                        <div className="flex items-center space-x-4">
                            <span className="text-gray-500">Find us on:</span>
                            <a href="https://www.instagram.com/screamqueens.cc/" className="text-pink-500 hover:text-pink-700 transition-colors">
                                <FaInstagram className="w-6 h-6" />
                            </a>
                            <a href="https://bsky.app/profile/screamqueenscc.bsky.social" className="text-blue-500 hover:text-blue-700 transition-colors">
                                <FaBluesky className="w-6 h-6" />
                            </a>
                            <a href="https://www.tiktok.com/@scream.queens.cc" className="text-gray-800 hover:text-black transition-colors">
                                <FaTiktok className="w-6 h-6" />
                            </a>
                        </div>
                    </header>

                    {/* Main Content */}
                    <main>
                        {/* Hero Section */}
                        <section className="text-center py-16 md:py-24">
                            <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-4">
                                Good Vibes, Great Rides, and <span className="gradient-text">You</span>.
                            </h1>
                            <p className="max-w-3xl mx-auto text-lg md:text-xl text-gray-600 mb-8">
                                We're a nonprofit for LGBTQIA+ folks and allies who love coasters. We're all about creating a safe and inclusive space to share our passion for thrills, make new friends, and support each other.
                            </p>
                            <a href="https://discord.gg/nQT8dYXamR" className="btn-discord inline-block bg-indigo-600 text-white font-bold text-lg py-4 px-10 rounded-lg shadow-lg hover:bg-indigo-700">
                                Join our Discord Community
                            </a>
                        </section>

                        {/* Our Work Section */}
                        <section className="py-16 md:py-24 bg-white rounded-2xl shadow-sm">
                            <div className="max-w-4xl mx-auto px-6">
                                <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">How We Accomplish Our Mission</h2>
                                <div className="grid md:grid-cols-3 gap-10 text-center">
                                    {/* Item 1 */}
                                    <div className="flex flex-col items-center">
                                        <div className="bg-red-100 text-red-600 p-4 rounded-full mb-4">
                                            <FaBookOpen className="w-8 h-8" />
                                        </div>
                                        <h3 className="text-xl font-bold mb-2">Developing Educational Programming</h3>
                                        <p className="text-gray-600">
                                            Providing educational opportunities on the history and engineering of amusement rides, and topics of importance to the LGBTQIA+ community to promote personal growth and social understanding.
                                        </p>
                                    </div>
                                    {/* Item 2 */}
                                    <div className="flex flex-col items-center">
                                        <div className="bg-green-100 text-green-600 p-4 rounded-full mb-4">
                                            <FaUsers className="w-8 h-8" />
                                        </div>
                                        <h3 className="text-xl font-bold mb-2">Combating Community Deterioration</h3>
                                        <p className="text-gray-600">
                                            Creating safe, inclusive, and highly visible public events and online forums that serve to relieve social isolation and mental distress experienced by members of the LGBTQIA+ community.
                                        </p>
                                    </div>
                                    {/* Item 3 */}
                                    <div className="flex flex-col items-center">
                                        <div className="bg-blue-100 text-blue-600 p-4 rounded-full mb-4">
                                           <FaHandHoldingHeart className="w-8 h-8" />
                                        </div>
                                        <h3 className="text-xl font-bold mb-2">Promoting Social Welfare</h3>
                                        <p className="text-gray-600">
                                            Fostering a positive, affirming network that provides mutual support and promotes the emotional and mental well-being of the LGBTQIA+ community through our shared interest in coaster enthusiasm.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </section>

                        {/* Donation Section */}
                        <section className="text-center py-16 md:py-24">
                            <h2 className="text-3xl md:text-4xl font-bold mb-4">Support Our Mission</h2>
                            <p className="max-w-3xl mx-auto text-lg md:text-xl text-gray-600 mb-8">
                                Your generous donations help us continue our work in creating a more inclusive and accepting world for the LGBTQIA+ community.
                            </p>
                            <a href="https://www.zeffy.com/embed/donation-form/keep-our-community-going" className="btn-discord inline-block bg-pink-500 text-white font-bold text-lg py-4 px-10 rounded-lg shadow-lg hover:bg-pink-600">
                                Donate Now
                            </a>
                        </section>
                    </main>

                    {/* Footer */}
                    <footer className="text-center py-12 mt-16">
                        <p className="max-w-3xl mx-auto text-sm text-gray-500">
                            The Corporation is organized exclusively for charitable, educational, and recreational purposes within the meaning of Section 501(c)(3) of the Internal Revenue Code. The Corporation shall not participate in, or intervene in (including the publishing or distributing of statements), any political campaign on behalf of (or in opposition to) any candidate for public office.
                        </p>
                        <p className="mt-6 text-sm text-gray-500">&copy; {new Date().getFullYear()} Scream Queens. All rights reserved.</p>
                        <p className="mt-4 text-sm text-gray-500">
                            1207 Delaware Ave, Unit 3338, Wilmington, DE 19806 | EIN: 39-2529875
                        </p>
                    </footer>
                </div>
            </div>
        </>
    );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);

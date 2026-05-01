import React from 'react';
import { Icon } from '@iconify/react';
import { Link } from 'react-router-dom';

const Footer = () => {
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    const handlePlaceholderClick = (e) => {
        e.preventDefault();
        console.log('Link not implemented yet');
    };

    return (
        <footer className="relative overflow-hidden text-white mt-12">

            <div className="absolute inset-0 opacity-25 pointer-events-none">
                <svg width="100%" height="100%" preserveAspectRatio="none" viewBox="0 0 100 100">
                    <path d="M0,100 L60,0 L120,100" stroke="#199C16" strokeWidth="0.5" fill="none" />
                    <path d="M30,100 L70,30 L110,100" stroke="#199C16" strokeWidth="0.5" fill="none" />
                </svg>
            </div>

            <div className="mx-auto px-8 md:px-12 py-16 relative z-10 grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8">

                {/* Brand Section */}
                <div className="flex flex-col gap-6 md:col-span-2 pr-0 md:pr-12">
                    <div className="flex items-center gap-3">
                        <div className="text-[#199C16]">
                            <Icon icon="mdi:triangle" width="36" />
                        </div>
                        <h1 className="text">BeeC00des</h1>
                    </div>

                    <p className="text-sm font-light text-gray-300 leading-relaxed">
                        Empowering digital experiences with advanced multi-modal tools to improve user interaction and performance outcomes.
                    </p>

                    {/* Socials */}
                    <div className="flex gap-5 items-center mt-2">
                        <a href="https://github.com/BeeC00des" target="_blank" rel="noopener noreferrer" className="hover:text-[#199C16]">
                            <Icon icon="mdi:github" width="24" />
                        </a>
                        <a href="https://www.linkedin.com/in/beec00des" target="_blank" rel="noopener noreferrer" className="hover:text-[#199C16]">
                            <Icon icon="mdi:linkedin" width="24" />
                        </a>
                        <a href="https://x.com/BeeC00des" target="_blank" rel="noopener noreferrer" className="hover:text-[#199C16]">
                            <Icon icon="ri:twitter-x-line" width="22" />
                        </a>
                        <a href="https://www.instagram.com/beec00des" target="_blank" rel="noopener noreferrer" className="hover:text-[#199C16]">
                            <Icon icon="mdi:instagram" width="24" />
                        </a>
                    </div>

                    {/* Back to top */}
                    <button
                        onClick={scrollToTop}
                        className="mt-6 flex items-center gap-2 border border-[#199C16] px-5 py-2 w-fit text-xs font-semibold tracking-wider hover:bg-[#199C16] hover:text-white transition-all"
                    >
                        <Icon icon="mdi:chevron-double-up" width="18" /> BACK TO TOP
                    </button>
                </div>

                {/* Site Map */}
                <div className="flex flex-col gap-5">
                    <h3 className="font-bold text-base mb-1">Site Map</h3>
                    <ul className="flex flex-col gap-4 text-sm font-light text-gray-300">

                        {/* Placeholder links */}
                        <li>
                            <button onClick={handlePlaceholderClick} className="hover:text-white text-left">
                                Project
                            </button>
                        </li>
                        <li>
                            <button onClick={handlePlaceholderClick} className="hover:text-white text-left">
                                Skill
                            </button>
                        </li>
                        <li>
                            <button onClick={handlePlaceholderClick} className="hover:text-white text-left">
                                Resume
                            </button>
                        </li>

                        <li>
                               <Link to="services">
                               <button className="hover:text-white text-left">
                                Services
                            </button>
                               </Link>
                            
                        </li>

                        <li>
                            <Link to="https://calendly.com/bolarinwaajayi/new-meeting">
                            <button className="hover:text-white text-left bg-[#199C16] py-1 px-4  text-white">
                                Book Me
                            </button>
                            </Link>
                        </li>
                    </ul>
                </div>

                {/* Legal */}
                <div className="flex flex-col gap-5">
                    <h3 className="font-bold text-base mb-1">Get In Touch</h3>
                    <ul className="flex flex-col gap-4 text-sm font-light text-gray-300">
                        <li>
                            <button onClick={handlePlaceholderClick} className="hover:text-white text-left">
                                I'm Avaliable for collaboration
                            </button>
                        </li>
                        <li>
                        </li>
                        <li>
                            <div className="flex items-center gap-2">
                                <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
                                <p className="smallText">Lagos, Nigeria West Africa Time (WAT)</p>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>

            {/* Bottom bar */ }
    <div className="bg-[#199C16] py-4 text-center text-white text-xs font-semibold">
        Copyright © {new Date().getFullYear()}, Beec00des, All Rights Reserved.
    </div>
        </footer >
    );
};

export default Footer;
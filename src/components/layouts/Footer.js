import React from 'react';
import { Icon } from '@iconify/react';

const Footer = () => {
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <footer className="relative overflow-hidden bg-[#14171c] text-white mt-12">
            {/* Geometric background lines matching the design */}
            <div className="absolute inset-0 opacity-10 pointer-events-none">
                <svg width="100%" height="100%" preserveAspectRatio="none" viewBox="0 0 100 100">
                    <path d="M0,100 L60,0 L120,100" stroke="#199C16" strokeWidth="0.5" fill="none" />
                    <path d="M30,100 L70,30 L110,100" stroke="#199C16" strokeWidth="0.5" fill="none" />
                </svg>
            </div>

            <div className=" mx-auto px-8 md:px-12 py-16 relative z-10 grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8">
                {/* Brand & Description (Takes up 2 columns on desktop) */}
                <div className="flex flex-col gap-6 md:col-span-2 pr-0 md:pr-12">
                    <div className="flex items-center gap-3">
                        <div className="text-[#199C16]">
                            <Icon icon="mdi:triangle" width="36" />
                        </div>
                        <h2 className="text-2xl font-bold tracking-widest uppercase">BeeC00des</h2>
                    </div>
                    <p className="text-sm font-light text-gray-300 leading-relaxed">
                        Empowering digital experiences with advanced multi-modal tools to improve user interaction and performance outcomes.
                    </p>
                    
                    {/* Socials */}
                    <div className="flex gap-5 items-center mt-2">
                        <a href="#" className="hover:text-[#199C16] transition-colors"><Icon icon="ri:twitter-x-line" width="22" /></a>
                        <a href="#" className="hover:text-[#199C16] transition-colors"><Icon icon="mdi:linkedin" width="24" /></a>
                        <a href="#" className="hover:text-[#199C16] transition-colors"><Icon icon="mdi:instagram" width="24" /></a>
                        <a href="#" className="hover:text-[#199C16] transition-colors"><Icon icon="mdi:facebook" width="24" /></a>
                    </div>

                    {/* Back to Top */}
                    <button 
                        onClick={scrollToTop} 
                        className="mt-6 flex items-center gap-2 border border-white px-5 py-2 w-fit text-xs font-semibold tracking-wider hover:bg-white hover:text-[#14171c] transition-all"
                    >
                        <Icon icon="mdi:chevron-double-up" width="18" /> BACK TO TOP
                    </button>
                </div>

                {/* Site Map */}
                <div className="flex flex-col gap-5">
                    <h3 className="font-bold text-base mb-1">Site Map</h3>
                    <ul className="flex flex-col gap-4 text-sm font-light text-gray-300">
                        <li><a href="#" className="text-white underline decoration-gray-400 underline-offset-4">Homepage</a></li>
                        <li><a href="#skill-section" className="hover:text-white transition-colors">Technology</a></li>
                        <li><a href="#project-section" className="hover:text-white transition-colors">Portfolio Works</a></li>
                        <li><a href="#gallery-section" className="hover:text-white transition-colors">Resources & news</a></li>
                        <li><a href="#" className="hover:text-white transition-colors">Careers</a></li>
                        <li><a href="#" className="hover:text-white transition-colors">Contact Us</a></li>
                        <li><a href="#" className="hover:text-white transition-colors">Portal</a></li>
                    </ul>
                </div>

                {/* Legal */}
                <div className="flex flex-col gap-5">
                    <h3 className="font-bold text-base mb-1">Legal</h3>
                    <ul className="flex flex-col gap-4 text-sm font-light text-gray-300">
                        <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
                        <li><a href="#" className="hover:text-white transition-colors">Terms of Services</a></li>
                        <li><a href="#" className="hover:text-white transition-colors">Lawyer's Corners</a></li>
                    </ul>
                </div>
            </div>

            {/* Bottom Bar */}
            <div className="bg-[#199C16] py-4 text-center text-white text-xs font-semibold">
                Copyright © {new Date().getFullYear()}, Beec00des, All Rights Reserved.
            </div>
        </footer>
    );
};

export default Footer;
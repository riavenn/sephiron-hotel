"use client";

import Link from "next/link";
import React, { useState, useEffect } from "react";
import { Menu, X } from 'lucide-react';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 10) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const handleScrollToSection = (e: React.MouseEvent<HTMLAnchorElement | HTMLButtonElement>, targetId: string) => {
        e.preventDefault();
        setIsOpen(false);
        if (targetId === 'home') {
            window.scrollTo({
                top: 0,
                behavior: 'smooth',
            });
            return;
        }
        const targetElement = document.getElementById(targetId);
        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop,
                behavior: 'smooth',
            });
        }
    };

    return (
        <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-stone-900 shadow-md' : 'bg-transparent'}`}>
            <div className="container mx-auto px-4">
                <div className="flex justify-between items-center py-4 px-8">
                    <div className="text-2xl font-bold text-stone-300 ">
                        <Link href="/">SEPHIRON</Link>
                    </div>
                    <div className="hidden md:flex items-center space-x-8">
                        <a href="#home" onClick={(e) => handleScrollToSection(e, 'home')} className="text-white cursor-pointer">Home</a>
                        <a href="#rooms" onClick={(e) => handleScrollToSection(e, 'rooms')} className="text-white cursor-pointer">Rooms</a>
                        <a href="#about" onClick={(e) => handleScrollToSection(e, 'about')} className="text-white cursor-pointer">About</a>
                        <a href="#contact" onClick={(e) => handleScrollToSection(e, 'contact')} className="text-white cursor-pointer">Contact</a>
                        <button onClick={(e) => handleScrollToSection(e, 'contact')} className="bg-stone-700 text-white px-4 py-2 rounded-md cursor-pointer">Reservation</button>
                    </div>
                    <div className="md:hidden">
                        <button onClick={() => setIsOpen(!isOpen)} className="text-white">
                            {isOpen ? <X size={24} /> : <Menu size={24} />}
                        </button>
                    </div>
                </div>
            </div>
            {isOpen && (
                <div className="md:hidden bg-stone-800 bg-opacity-90">
                    <div className="flex flex-col items-center space-y-4 py-4">
                        <a href="#home" onClick={(e) => handleScrollToSection(e, 'home')} className="text-white cursor-pointer">Home</a>
                        <a href="#rooms" onClick={(e) => handleScrollToSection(e, 'rooms')} className="text-white cursor-pointer">Rooms</a>
                        <a href="#about" onClick={(e) => handleScrollToSection(e, 'about')} className="text-white cursor-pointer">About</a>
                        <a href="#contact" onClick={(e) => handleScrollToSection(e, 'contact')} className="text-white cursor-pointer">Contact</a>
                        <button onClick={(e) => handleScrollToSection(e, 'contact')} className="bg-stone-700 text-white px-4 py-2 rounded-md cursor-pointer">Reservation</button>
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
"use client";

import { useState } from "react";
import Link from "next/link";

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="bg-azul-rd shadow-lg fixed w-full z-50 top-0 text-white">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">
                    {/* Logo / Title */}
                    <div className="flex-shrink-0 flex items-center">
                        <span className="text-2xl font-bold font-serif">Reforma Estructural RD</span>
                    </div>

                    {/* Desktop Menu */}
                    <div className="hidden sm:block sm:ml-6">
                        <div className="flex space-x-4">
                            <Link href="#pilares" className="text-gray-200 hover:bg-white hover:text-azul-rd px-3 py-2 rounded-md text-sm font-medium transition-colors">
                                Pilares
                            </Link>
                            <Link href="#proyectos" className="text-gray-200 hover:bg-white hover:text-azul-rd px-3 py-2 rounded-md text-sm font-medium transition-colors">
                                Proyectos Tácticos
                            </Link>
                            <Link href="#compartir" className="bg-white text-azul-rd px-3 py-2 rounded-md text-sm font-medium hover:bg-gray-200 transition-colors">
                                Compartir
                            </Link>
                        </div>
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="sm:hidden flex items-center">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="inline-flex items-center justify-center p-2 rounded-md text-gray-200 hover:text-white hover:bg-azul-rd focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                            aria-expanded={isOpen}
                        >
                            <span className="sr-only">Abrir menú principal</span>
                            {/* Hamburger Icon */}
                            {!isOpen ? (
                                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
                                </svg>
                            ) : (
                                /* Close Icon */
                                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            )}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu Panel */}
            {isOpen && (
                <div className="sm:hidden text-center bg-azul-rd border-t border-blue-900">
                    <div className="px-2 pt-2 pb-3 space-y-1">
                        <Link href="#pilares" onClick={() => setIsOpen(false)} className="text-gray-200 hover:bg-white hover:text-azul-rd block px-3 py-2 rounded-md text-base font-medium transition-colors">
                            Pilares
                        </Link>
                        <Link href="#proyectos" onClick={() => setIsOpen(false)} className="text-gray-200 hover:bg-white hover:text-azul-rd block px-3 py-2 rounded-md text-base font-medium transition-colors">
                            Proyectos Tácticos
                        </Link>
                        <Link href="#compartir" onClick={() => setIsOpen(false)} className="bg-white text-azul-rd block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-200 transition-colors">
                            Compartir
                        </Link>
                    </div>
                </div>
            )}
        </nav>
    );
}

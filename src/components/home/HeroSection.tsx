"use client";

import Link from "next/link";
import NexusWeave from "@/components/NexusWeave";

export default function HeroSection() {
    return (
        <header id="hero-header" className="bg-azul-rd pt-24 pb-16 sm:pt-32 sm:pb-24 relative overflow-hidden">
            {/* Canvas for "The Nexus Weave" */}
            <NexusWeave />

            {/* Text Content */}
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="text-center">
                    <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-tight font-serif">
                        Propuesta de Reforma Estructural
                    </h1>
                    <p className="mt-6 text-lg sm:text-xl text-gray-200 max-w-3xl mx-auto">
                        Un plan integral para desmantelar la burocracia, activar 10 misiones estratégicas y ejecutar proyectos tácticos de "shock" en áreas clave.
                    </p>
                    <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
                        <Link
                            href="#pilares"
                            className="bg-white text-azul-rd px-6 py-3 rounded-lg font-semibold shadow-lg hover:bg-gray-200 transition duration-300 flex items-center justify-center space-x-2"
                        >
                            <span>🏛️</span>
                            <span>Ver los 2 Pilares</span>
                        </Link>
                        <Link
                            href="#proyectos"
                            className="bg-rojo-rd text-white px-6 py-3 rounded-lg font-semibold shadow-lg hover:opacity-90 transition duration-300 flex items-center justify-center space-x-2"
                        >
                            <span>🎯</span>
                            <span>Ver 5 Proyectos Tácticos</span>
                        </Link>
                    </div>
                </div>
            </div>
        </header>
    );
}

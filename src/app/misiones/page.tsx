"use client";

import Link from "next/link";
import Image from "next/image";
import {
    BarChart, Bar, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Cell, Legend
} from 'recharts';
import PSMLayout from "@/components/layout/PSMLayout";
import DataVizContainer from "@/components/viz/DataVizContainer";
import Accordion from "@/components/ui/Accordion";
import HolographicBlueprint from "@/components/art/HolographicBlueprint";
import { misionesObjectives } from "@/data/misiones";

// Mock Data
const remittanceData = [
    { year: '2020', ny: 400, madrid: 120, miami: 150 },
    { year: '2021', ny: 450, madrid: 130, miami: 170 },
    { year: '2022', ny: 480, madrid: 140, miami: 190 },
    { year: '2023', ny: 520, madrid: 160, miami: 210 },
    { year: '2024', ny: 580, madrid: 190, miami: 240 },
];

const consularServiceData = [
    { name: 'NY', renewals: 1200, visas: 150 },
    { name: 'Madrid', renewals: 900, visas: 300 },
    { name: 'Miami', renewals: 800, visas: 100 },
    { name: 'Roma', renewals: 300, visas: 80 },
    { name: 'Panamá', renewals: 200, visas: 400 },
];

export default function MisionesPage() {

    // 1. Hero Section
    const Hero = (
        <header id="hero-header" className="bg-azul-rd pt-24 pb-16 sm:pt-32 sm:pb-24 relative overflow-hidden min-h-[80vh] flex items-center">
            {/* 3D Art */}
            <HolographicBlueprint />

            {/* Text Content */}
            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-12 items-center">
                <div className="text-left">
                    <div className="inline-block bg-growth-green text-gray-900 px-3 py-1 rounded-full text-sm font-bold mb-6 animate-pulse">
                        🌎 RED GLOBAL ACTIVA
                    </div>
                    <h1 className="text-5xl lg:text-7xl font-extrabold text-white leading-tight font-serif shadow-black drop-shadow-md">
                        Misiones Estratégicas
                    </h1>
                    <p className="mt-6 text-lg sm:text-xl text-gray-200 max-w-xl drop-shadow-sm leading-relaxed">
                        Del patronazgo a la productividad. Convirtiendo cada embajada en un nodo de inteligencia comercial y atracción de inversiones.
                    </p>
                    <div className="mt-10 flex flex-col sm:flex-row gap-4">
                        <Link href="#roadmap" className="bg-white text-azul-rd px-8 py-4 rounded-lg font-bold shadow-lg hover:bg-gray-200 transition duration-300">
                            Ver Hoja de Ruta
                        </Link>
                    </div>
                </div>

                {/* Abstract Art Area - Replaces Nano Banana */}
                <div className="hidden lg:flex justify-center relative">
                    <div className="relative w-[500px] h-[500px]">
                        <div className="absolute inset-0 bg-green-400 rounded-full blur-3xl opacity-20 animate-pulse"></div>
                        <Image
                            src="/images/art-misiones.png"
                            alt="The Global Node Art"
                            width={600}
                            height={600}
                            className="object-contain relative z-10 drop-shadow-2xl"
                        />
                    </div>
                </div>
            </div>
        </header>
    );

    // 2. Sections
    const sections = [
        {
            id: "impact",
            label: "📈 Impacto Económico",
            content: (
                <div className="space-y-8">
                    <h2 className="text-3xl font-bold text-azul-rd font-serif border-l-8 border-rojo-rd pl-4">Impacto de la Diáspora</h2>

                    <div className="grid md:grid-cols-2 gap-8">
                        {/* Chart 1: Remittances */}
                        <DataVizContainer
                            title="Correlación de Remesas (Millones USD)"
                            description="Crecimiento sostenido del aporte económico desde los principales nodos de la diáspora. NY sigue siendo el motor principal."
                            source="Banco Central RD"
                        >
                            <ResponsiveContainer width="100%" height="100%">
                                <LineChart data={remittanceData}>
                                    <CartesianGrid strokeDasharray="3 3" />
                                    <XAxis dataKey="year" />
                                    <YAxis />
                                    <Tooltip />
                                    <Legend />
                                    <Line type="monotone" dataKey="ny" stroke="#002D62" strokeWidth={3} name="Nueva York" />
                                    <Line type="monotone" dataKey="madrid" stroke="#CE1126" strokeWidth={3} name="Madrid" />
                                    <Line type="monotone" dataKey="miami" stroke="#25D366" strokeWidth={3} name="Miami" />
                                </LineChart>
                            </ResponsiveContainer>
                        </DataVizContainer>

                        {/* Chart 2: Consular Services */}
                        <DataVizContainer
                            title="Tablero de Servicios Consulares"
                            description="Volumen mensual de trámites por consulado. Panamá destaca por alto volumen de visados comerciales."
                            source="MIREX Data Hub"
                        >
                            <ResponsiveContainer width="100%" height="100%">
                                <BarChart data={consularServiceData}>
                                    <CartesianGrid strokeDasharray="3 3" />
                                    <XAxis dataKey="name" />
                                    <YAxis />
                                    <Tooltip />
                                    <Legend />
                                    <Bar dataKey="renewals" fill="#002D62" name="Renovaciones" />
                                    <Bar dataKey="visas" fill="#CE1126" name="Visas Emitidas" />
                                </BarChart>
                            </ResponsiveContainer>
                        </DataVizContainer>
                    </div>
                </div>
            )
        },
        {
            id: "roadmap",
            label: "🗺️ Hoja de Ruta Técnica",
            content: (
                <div className="space-y-8">
                    <div className="flex items-center gap-4 mb-8">
                        <h2 className="text-3xl font-bold text-azul-rd font-serif border-l-8 border-growth-green pl-4">Protocolo de Reforma</h2>
                        <span className="bg-blue-100 text-azul-rd text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide">Fase: Implementación</span>
                    </div>
                    <p className="text-lg text-gray-700 max-w-4xl">
                        Estas 10 misiones son proyectos fundacionales, no intenciones. Su ejecución es paralela y radical.
                    </p>
                    <Accordion items={misionesObjectives} />
                </div>
            )
        }
    ];

    return <PSMLayout hero={Hero} sections={sections} />;
}


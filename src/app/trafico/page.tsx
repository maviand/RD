"use client";

import Link from "next/link";
import Image from "next/image";
import {
    AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer,
    BarChart, Bar, Legend, Cell
} from 'recharts';
import PSMLayout from "@/components/layout/PSMLayout";
import DataVizContainer from "@/components/viz/DataVizContainer";
import Accordion from "@/components/ui/Accordion";
import UntanglingKnot from "@/components/art/UntanglingKnot";
import { traficoObjectives } from "@/data/trafico";

// Mock Data
const congestionData = [
    { time: '06:00', flow: 20 },
    { time: '07:00', flow: 80 },
    { time: '08:00', flow: 100 },
    { time: '09:00', flow: 60 },
    { time: '12:00', flow: 50 },
    { time: '17:00', flow: 95 },
    { time: '18:00', flow: 100 },
    { time: '19:00', flow: 85 },
    { time: '21:00', flow: 30 },
];

const accidentData = [
    { cause: 'Imprudencia', value: 45, color: '#CE1126' },
    { cause: 'Exceso Velocidad', value: 30, color: '#F59E0B' },
    { cause: 'Alcohol', value: 15, color: '#002D62' },
    { cause: 'Fallo Mecánico', value: 10, color: '#25D366' },
];

export default function TraficoPage() {

    // 1. Hero
    const Hero = (
        <header id="hero-header" className="bg-gray-900 pt-24 pb-16 sm:pt-32 sm:pb-24 relative overflow-hidden min-h-[80vh] flex items-center">
            <div className="absolute inset-0 opacity-20">
                <UntanglingKnot />
            </div>

            {/* Neon/Cyberpunk overlay vibe */}
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-gray-900 opacity-80"></div>

            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-12 items-center">
                <div className="text-left">
                    <div className="inline-block bg-pink-500 text-white px-3 py-1 rounded-full text-sm font-bold mb-6 animate-pulse">
                        🛑 COLAPSO VIAL
                    </div>
                    <h1 className="text-5xl lg:text-7xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-purple-500 leading-tight font-serif drop-shadow-sm">
                        Movilidad Inteligente
                    </h1>
                    <p className="mt-6 text-lg sm:text-xl text-gray-300 max-w-xl leading-relaxed">
                        Del caos analógico a la sincronización digital. Recuperando las 3 horas diarias de vida que el tapón le roba al ciudadano.
                    </p>
                    <div className="mt-10 flex flex-col sm:flex-row gap-4">
                        <Link href="#roadmap" className="bg-pink-600 text-white px-8 py-4 rounded-lg font-bold shadow-lg hover:bg-pink-700 transition duration-300">
                            Ver Hoja de Ruta
                        </Link>
                    </div>
                </div>

                {/* Abstract Art Area - Replaces Nano Banana */}
                <div className="hidden lg:flex justify-center relative">
                    <div className="relative w-[500px] h-[500px]">
                        <div className="absolute inset-0 bg-purple-600 rounded-full blur-3xl opacity-30 animate-pulse"></div>
                        <Image
                            src="/images/art-trafico.png"
                            alt="The Synapse City Art"
                            width={600}
                            height={600}
                            className="object-contain relative z-10 drop-shadow-2xl"
                            onError={(e) => { e.currentTarget.style.display = 'none'; }}
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
            label: "📊 Diagnóstico Vial",
            content: (
                <div className="space-y-8">
                    <h2 className="text-3xl font-bold text-azul-rd font-serif border-l-8 border-rojo-rd pl-4">Flujo y Seguridad</h2>

                    <div className="grid md:grid-cols-2 gap-8">
                        {/* Chart 1: Congestion Flow */}
                        <DataVizContainer
                            title="Ciclos de Congestión"
                            description="Saturación vial por hora (% de capacidad máxima). El modelo actual colapsa dos veces al día, sin capacidad de absorción."
                            source="Waze Cities Data / INTRANT"
                        >
                            <ResponsiveContainer width="100%" height="100%">
                                <AreaChart data={congestionData}>
                                    <CartesianGrid strokeDasharray="3 3" />
                                    <XAxis dataKey="time" />
                                    <YAxis />
                                    <Tooltip />
                                    <Area type="monotone" dataKey="flow" stroke="#F59E0B" fill="#F59E0B" fillOpacity={0.3} name="% Saturación" />
                                </AreaChart>
                            </ResponsiveContainer>
                        </DataVizContainer>

                        {/* Chart 2: Accident Causes */}
                        <DataVizContainer
                            title="Causas de Siniestralidad"
                            description="RD es líder mundial en muertes de tránsito. El 75% se debe a comportamiento humano corregible mediante tecnología (fotomultas)."
                            source="Observatorio de Seguridad Vial"
                        >
                            <ResponsiveContainer width="100%" height="100%">
                                <BarChart data={accidentData} layout="vertical" margin={{ top: 5, right: 30, left: 40, bottom: 5 }}>
                                    <CartesianGrid strokeDasharray="3 3" horizontal={false} />
                                    <XAxis type="number" />
                                    <YAxis dataKey="cause" type="category" width={100} tick={{ fontSize: 12 }} />
                                    <Tooltip />
                                    <Bar dataKey="value" name="% Incidentes" radius={[0, 4, 4, 0]}>
                                        {accidentData.map((entry, index) => (
                                            <Cell key={`cell-${index}`} fill={entry.color} />
                                        ))}
                                    </Bar>
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
                        <h2 className="text-3xl font-bold text-azul-rd font-serif border-l-8 border-growth-green pl-4">Reingeniería de Tránsito</h2>
                        <span className="bg-blue-100 text-azul-rd text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide">Fase: Ejecución Piloto</span>
                    </div>
                    <p className="text-lg text-gray-700 max-w-4xl">
                        La solución no es más asfalto, es más inteligencia.
                    </p>
                    <Accordion items={traficoObjectives} />
                </div>
            )
        }
    ];

    return <PSMLayout hero={Hero} sections={sections} />;
}

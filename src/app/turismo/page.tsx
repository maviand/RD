"use client";

import Link from "next/link";
import Image from "next/image";
import {
    RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar, Legend,
    BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Cell
} from 'recharts';
import PSMLayout from "@/components/layout/PSMLayout";
import DataVizContainer from "@/components/viz/DataVizContainer";
import Accordion from "@/components/ui/Accordion";
import UntanglingKnot from "@/components/art/UntanglingKnot";
import { turismoObjectives } from "@/data/turismo";

// Mock Data
const sustainabilityData = [
    { subject: 'Agua', A: 120, B: 110, fullMark: 150 },
    { subject: 'Energía', A: 98, B: 130, fullMark: 150 },
    { subject: 'Residuos', A: 86, B: 130, fullMark: 150 },
    { subject: 'Biodiversidad', A: 99, B: 100, fullMark: 150 },
    { subject: 'Comunidad', A: 85, B: 90, fullMark: 150 },
    { subject: 'Economía', A: 65, B: 85, fullMark: 150 },
];

const visitorData = [
    { type: 'Todo Incluido', value: 70, color: '#F59E0B' }, // Yellow/Sun
    { type: 'Airbnb/Local', value: 20, color: '#CE1126' }, // Red
    { type: 'Ecoturismo', value: 5, color: '#25D366' }, // Green
    { type: 'Negocios', value: 5, color: '#002D62' }, // Blue
];

export default function TurismoPage() {

    // 1. Hero
    const Hero = (
        <header id="hero-header" className="bg-white pt-24 pb-16 sm:pt-32 sm:pb-24 relative overflow-hidden min-h-[80vh] flex items-center">
            <div className="absolute inset-0 opacity-10 bg-blue-50">
                <UntanglingKnot />
            </div>

            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-12 items-center">
                <div className="text-left">
                    <div className="inline-block bg-orange-500 text-white px-3 py-1 rounded-full text-sm font-bold mb-6 animate-pulse">
                        🌴 MODELO AGOTADO
                    </div>
                    <h1 className="text-5xl lg:text-7xl font-extrabold text-azul-rd leading-tight font-serif drop-shadow-sm">
                        Turismo Regenerativo
                    </h1>
                    <p className="mt-6 text-lg sm:text-xl text-gray-600 max-w-xl leading-relaxed">
                        Más allá del "Todo Incluido". Un modelo que integra a la comunidad, protege los ecosistemas y maximiza el gasto por visitante.
                    </p>
                    <div className="mt-10 flex flex-col sm:flex-row gap-4">
                        <Link href="#roadmap" className="bg-azul-rd text-white px-8 py-4 rounded-lg font-bold shadow-lg hover:bg-blue-900 transition duration-300">
                            Ver Hoja de Ruta
                        </Link>
                    </div>
                </div>

                {/* Abstract Art Area - Replaces Nano Banana */}
                <div className="hidden lg:flex justify-center relative">
                    <div className="relative w-[500px] h-[500px]">
                        <div className="absolute inset-0 bg-yellow-400 rounded-full blur-3xl opacity-20 animate-pulse"></div>
                        <Image
                            src="/images/art-turismo.png"
                            alt="The Sustainable Prism Art"
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
            label: "📊 Impacto Sostenible",
            content: (
                <div className="space-y-8">
                    <h2 className="text-3xl font-bold text-azul-rd font-serif border-l-8 border-rojo-rd pl-4">Sostenibilidad y Diversificación</h2>

                    <div className="grid md:grid-cols-2 gap-8">
                        {/* Chart 1: Sustainability Radar */}
                        <DataVizContainer
                            title="Índice de Sostenibilidad"
                            description="Comparativa del desempeño actual (A) vs Objetivo 2030 (B) en métricas clave. El manejo de residuos y agua son los puntos críticos."
                            source="Ministerio de Medio Ambiente"
                        >
                            <ResponsiveContainer width="100%" height="100%">
                                <RadarChart outerRadius={90} data={sustainabilityData}>
                                    <PolarGrid />
                                    <PolarAngleAxis dataKey="subject" />
                                    <PolarRadiusAxis angle={30} domain={[0, 150]} />
                                    <Radar name="Actual" dataKey="A" stroke="#CE1126" fill="#CE1126" fillOpacity={0.6} />
                                    <Radar name="Objetivo 2030" dataKey="B" stroke="#25D366" fill="#25D366" fillOpacity={0.6} />
                                    <Legend />
                                    <Tooltip />
                                </RadarChart>
                            </ResponsiveContainer>
                        </DataVizContainer>

                        {/* Chart 2: Visitor Type */}
                        <DataVizContainer
                            title="Perfil del Visitante"
                            description="La dependencia del 'Todo Incluido' (70%) limita el derrame económico en las comunidades locales. Necesitamos diversificar."
                            source="MITUR / Banco Central"
                        >
                            <ResponsiveContainer width="100%" height="100%">
                                <BarChart data={visitorData} layout="vertical" margin={{ top: 5, right: 30, left: 40, bottom: 5 }}>
                                    <CartesianGrid strokeDasharray="3 3" horizontal={false} />
                                    <XAxis type="number" />
                                    <YAxis dataKey="type" type="category" width={100} tick={{ fontSize: 12 }} />
                                    <Tooltip />
                                    <Bar dataKey="value" name="% de Visitantes" radius={[0, 4, 4, 0]}>
                                        {visitorData.map((entry, index) => (
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
                        <h2 className="text-3xl font-bold text-azul-rd font-serif border-l-8 border-growth-green pl-4">Plan Maestro</h2>
                        <span className="bg-blue-100 text-azul-rd text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide">Fase: Planificación</span>
                    </div>
                    <p className="text-lg text-gray-700 max-w-4xl">
                        De la cantidad a la calidad. Un turismo que enriquece al país, no solo a los operadores.
                    </p>
                    <Accordion items={turismoObjectives} />
                </div>
            )
        }
    ];

    return <PSMLayout hero={Hero} sections={sections} />;
}

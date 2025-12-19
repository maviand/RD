"use client";

import Link from "next/link";
import Image from "next/image";
import {
    RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar, Legend,
    LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer,
    ComposedChart, Bar
} from 'recharts';
import PSMLayout from "@/components/layout/PSMLayout";
import DataVizContainer from "@/components/viz/DataVizContainer";
import Accordion from "@/components/ui/Accordion";
import UntanglingKnot from "@/components/art/UntanglingKnot";
import { miscelaneousObjectives } from "@/data/miscelaneous";

// Mock Data
const happinessData = [
    { subject: 'Ingresos', A: 80, fullMark: 100 },
    { subject: 'Salud', A: 60, fullMark: 100 },
    { subject: 'Libertad', A: 90, fullMark: 100 },
    { subject: 'Generosidad', A: 85, fullMark: 100 },
    { subject: 'Corrupción', A: 40, fullMark: 100 }, // Low score = high corruption perception
    { subject: 'Apoyo Social', A: 70, fullMark: 100 },
];

const cpiData = [
    { year: '2019', cpi: 100, wage: 100 },
    { year: '2020', cpi: 105, wage: 101 },
    { year: '2021', cpi: 115, wage: 102 },
    { year: '2022', cpi: 125, wage: 105 },
    { year: '2023', cpi: 132, wage: 110 },
    { year: '2024', cpi: 140, wage: 112 },
];

export default function MiscelaneousPage() {

    // 1. Hero
    const Hero = (
        <header id="hero-header" className="bg-white pt-24 pb-16 sm:pt-32 sm:pb-24 relative overflow-hidden min-h-[80vh] flex items-center">
            <div className="absolute inset-0 opacity-10 bg-purple-50">
                <UntanglingKnot />
            </div>

            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-12 items-center">
                <div className="text-left">
                    <div className="inline-block bg-purple-600 text-white px-3 py-1 rounded-full text-sm font-bold mb-6 animate-pulse">
                        ✨ BIENESTAR INTEGRAL
                    </div>
                    <h1 className="text-5xl lg:text-7xl font-extrabold text-azul-rd leading-tight font-serif drop-shadow-sm">
                        Calidad de Vida
                    </h1>
                    <p className="mt-6 text-lg sm:text-xl text-gray-600 max-w-xl leading-relaxed">
                        Porque el progreso no se come, se siente. Midiendo lo que realmente importa: tu tiempo, tu tranquilidad y tu bolsillo.
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
                        <div className="absolute inset-0 bg-pink-300 rounded-full blur-3xl opacity-30 animate-pulse"></div>
                        <Image
                            src="/images/art-miscelaneous.png"
                            alt="The Balanced Scale Art"
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
            label: "📊 Métricas de Vida",
            content: (
                <div className="space-y-8">
                    <h2 className="text-3xl font-bold text-azul-rd font-serif border-l-8 border-rojo-rd pl-4">Más Allá del PIB</h2>

                    <div className="grid md:grid-cols-2 gap-8">
                        {/* Chart 1: Happiness Radar */}
                        <DataVizContainer
                            title="Radar de Felicidad"
                            description="Percepción ciudadana sobre 6 ejes clave. La corrupción y la falta de ingresos reales son los principales detractores del bienestar."
                            source="Encuesta Nacional de Hogares"
                        >
                            <ResponsiveContainer width="100%" height="100%">
                                <RadarChart outerRadius={90} data={happinessData}>
                                    <PolarGrid />
                                    <PolarAngleAxis dataKey="subject" />
                                    <PolarRadiusAxis angle={30} domain={[0, 100]} />
                                    <Radar name="Índice Actual" dataKey="A" stroke="#8884d8" fill="#8884d8" fillOpacity={0.6} />
                                    <Legend />
                                    <Tooltip />
                                </RadarChart>
                            </ResponsiveContainer>
                        </DataVizContainer>

                        {/* Chart 2: CPI vs Wages */}
                        <DataVizContainer
                            title="Inflación vs. Salarios"
                            description="Pérdida del poder adquisitivo. Mientras el costo de la canasta básica (IPC - Línea Azul) se dispara, los salarios (Barra Verde) se estancan."
                            source="Banco Central"
                        >
                            <ResponsiveContainer width="100%" height="100%">
                                <ComposedChart data={cpiData}>
                                    <CartesianGrid strokeDasharray="3 3" />
                                    <XAxis dataKey="year" />
                                    <YAxis />
                                    <Tooltip />
                                    <Legend />
                                    <Bar dataKey="wage" barSize={20} fill="#25D366" name="Salario Real" />
                                    <Line type="monotone" dataKey="cpi" stroke="#CE1126" strokeWidth={3} name="Costo Vida (IPC)" />
                                </ComposedChart>
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
                        <h2 className="text-3xl font-bold text-azul-rd font-serif border-l-8 border-growth-green pl-4">Agenda Ciudadana</h2>
                        <span className="bg-blue-100 text-azul-rd text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide">Fase: Consulta</span>
                    </div>
                    <p className="text-lg text-gray-700 max-w-4xl">
                        Políticas diseñadas para la gente, no para las estadísticas.
                    </p>
                    <Accordion items={miscelaneousObjectives} />
                </div>
            )
        }
    ];

    return <PSMLayout hero={Hero} sections={sections} />;
}

"use client";

import Link from "next/link";
import Image from "next/image";
import {
    LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend,
    PieChart, Pie, Cell
} from 'recharts';
import PSMLayout from "@/components/layout/PSMLayout";
import DataVizContainer from "@/components/viz/DataVizContainer";
import Accordion from "@/components/ui/Accordion";
import UntanglingKnot from "@/components/art/UntanglingKnot"; // Reusing art for now, or could use a new one
import { educacionObjectives } from "@/data/educacion";

// Mock Data
const pisaData = [
    { year: '2015', rd: 332, latam: 400, oecd: 490 },
    { year: '2018', rd: 340, latam: 405, oecd: 488 },
    { year: '2022', rd: 350, latam: 410, oecd: 485 },
];

const teacherData = [
    { name: 'Certificados', value: 45, color: '#25D366' },
    { name: 'En Proceso', value: 30, color: '#F59E0B' },
    { name: 'No Aptos', value: 25, color: '#CE1126' },
];

export default function EducacionPage() {

    // 1. Hero
    const Hero = (
        <header id="hero-header" className="bg-azul-rd pt-24 pb-16 sm:pt-32 sm:pb-24 relative overflow-hidden min-h-[80vh] flex items-center">
            {/* Reuse the knot/weave or a new one? Let's use UntanglingKnot for consistency or just static bg */}
            <div className="absolute inset-0 opacity-20">
                <UntanglingKnot />
            </div>

            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-12 items-center">
                <div className="text-left">
                    <div className="inline-block bg-yellow-400 text-gray-900 px-3 py-1 rounded-full text-sm font-bold mb-6 animate-pulse">
                        ⚠️ EMERGENCIA EDUCATIVA
                    </div>
                    <h1 className="text-5xl lg:text-7xl font-extrabold text-white leading-tight font-serif shadow-black drop-shadow-md">
                        Revolución Educativa
                    </h1>
                    <p className="mt-6 text-lg sm:text-xl text-gray-200 max-w-xl drop-shadow-sm leading-relaxed">
                        Del diploma de papel a la habilidad de mercado. Un sistema diseñado para la empleabilidad, el pensamiento crítico y la soberanía tecnológica.
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
                        <div className="absolute inset-0 bg-yellow-400 rounded-full blur-3xl opacity-20 animate-pulse"></div>
                        <Image
                            src="/images/art-educacion.png"
                            alt="The Neural Network Art"
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
            label: "📊 Crisis & Oportunidad",
            content: (
                <div className="space-y-8">
                    <h2 className="text-3xl font-bold text-azul-rd font-serif border-l-8 border-rojo-rd pl-4">La Realidad en Datos</h2>

                    <div className="grid md:grid-cols-2 gap-8">
                        {/* Chart 1: PISA */}
                        <DataVizContainer
                            title="Brecha de Aprendizaje (PISA)"
                            description="Comparativo de Lectura. Aunque hay mejora leve, RD sigue ~50 puntos por debajo del promedio Latam y ~140 de la OCDE."
                            source="OCDE - PISA Reports"
                        >
                            <ResponsiveContainer width="100%" height="100%">
                                <LineChart data={pisaData}>
                                    <CartesianGrid strokeDasharray="3 3" />
                                    <XAxis dataKey="year" />
                                    <YAxis domain={[300, 500]} />
                                    <Tooltip />
                                    <Legend />
                                    <Line type="monotone" dataKey="rd" stroke="#CE1126" strokeWidth={3} name="Rep. Dom." />
                                    <Line type="monotone" dataKey="latam" stroke="#F59E0B" strokeWidth={2} name="Promedio Latam" />
                                    <Line type="monotone" dataKey="oecd" stroke="#25D366" strokeWidth={2} name="Promedio OCDE" />
                                </LineChart>
                            </ResponsiveContainer>
                        </DataVizContainer>

                        {/* Chart 2: Teachers */}
                        <DataVizContainer
                            title="Calidad Docente"
                            description="Resultados de evaluaciones de desempeño. Un cuarto del magisterio no posee las competencias mínimas requeridas."
                            source="Evaluación del Desempeño Docente"
                        >
                            <ResponsiveContainer width="100%" height="100%">
                                <PieChart>
                                    <Pie
                                        data={teacherData}
                                        cx="50%"
                                        cy="50%"
                                        innerRadius={60}
                                        outerRadius={100}
                                        fill="#8884d8"
                                        dataKey="value"
                                        label
                                    >
                                        {teacherData.map((entry, index) => (
                                            <Cell key={`cell-${index}`} fill={entry.color} />
                                        ))}
                                    </Pie>
                                    <Tooltip />
                                    <Legend />
                                </PieChart>
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
                        <h2 className="text-3xl font-bold text-azul-rd font-serif border-l-8 border-growth-green pl-4">Reforma Estructural</h2>
                        <span className="bg-blue-100 text-azul-rd text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide">Fase: Diseño</span>
                    </div>
                    <p className="text-lg text-gray-700 max-w-4xl">
                        Desmantelar la fábrica de diplomas. Construir una fábrica de conocimiento.
                    </p>
                    <Accordion items={educacionObjectives} />
                </div>
            )
        }
    ];

    return <PSMLayout hero={Hero} sections={sections} />;
}

"use client";

import Link from "next/link";
import Image from "next/image";
import {
    BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Cell, ScatterChart, Scatter, ZAxis, Legend
} from 'recharts';
import PSMLayout from "@/components/layout/PSMLayout";
import DataVizContainer from "@/components/viz/DataVizContainer";
import Accordion from "@/components/ui/Accordion";
import UntanglingKnot from "@/components/art/UntanglingKnot";
import { saludObjectives } from "@/data/salud";

// Mock Data
const bedData = [
    { region: 'Ozama', total: 5000, occupied: 4500 },
    { region: 'Cibao Norte', total: 3000, occupied: 2800 },
    { region: 'Valdesia', total: 1200, occupied: 1100 },
    { region: 'Enriquillo', total: 800, occupied: 300 },
    { region: 'El Valle', total: 600, occupied: 550 },
];

const efficiencyData = [
    { country: 'Costa Rica', spend: 1200, lifeExp: 80 },
    { country: 'Chile', spend: 1400, lifeExp: 81 },
    { country: 'Rep. Dom.', spend: 600, lifeExp: 74 }, // Low spend, mid result
    { country: 'USA', spend: 4000, lifeExp: 77 }, // High spend, mid result
    { country: 'Cuba', spend: 900, lifeExp: 78 },
];

export default function SaludPage() {

    // 1. Hero
    const Hero = (
        <header id="hero-header" className="bg-white pt-24 pb-16 sm:pt-32 sm:pb-24 relative overflow-hidden min-h-[80vh] flex items-center">
            {/* Medical / Clean white aesthetic with subtle blue weaving */}
            <div className="absolute inset-0 opacity-10">
                <UntanglingKnot />
            </div>

            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-12 items-center">
                <div className="text-left">
                    <div className="inline-block bg-rojo-rd text-white px-3 py-1 rounded-full text-sm font-bold mb-6 animate-pulse">
                        💊 DIAGNÓSTICO: CRÍTICO
                    </div>
                    <h1 className="text-5xl lg:text-7xl font-extrabold text-azul-rd leading-tight font-serif drop-shadow-sm">
                        Salud Inteligente
                    </h1>
                    <p className="mt-6 text-lg sm:text-xl text-gray-600 max-w-xl leading-relaxed">
                        Un sistema proactivo, no reactivo. Donde los datos predicen brotes y la cobertura es un derecho matemático, no un privilegio geográfico.
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
                        <div className="absolute inset-0 bg-blue-200 rounded-full blur-3xl opacity-30 animate-pulse"></div>
                        {/* Placeholder or real image if ready */}
                        <Image
                            src="/images/art-salud.png"
                            alt="The Digital DNA Art"
                            width={600}
                            height={600}
                            className="object-contain relative z-10 drop-shadow-2xl"
                            onError={(e) => {
                                // Fallback if image not ready
                                e.currentTarget.style.display = 'none';
                            }}
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
            label: "📊 Signos Vitales",
            content: (
                <div className="space-y-8">
                    <h2 className="text-3xl font-bold text-azul-rd font-serif border-l-8 border-rojo-rd pl-4">Infraestructura y Eficiencia</h2>

                    <div className="grid md:grid-cols-2 gap-8">
                        {/* Chart 1: Bed Saturation */}
                        <DataVizContainer
                            title="Saturación Hospitalaria (Camas)"
                            description="Regiones Ozama y Cibao Norte operan cerca del colapso (>90%). El desequilibrio regional fuerza traslados costosos y riesgosos."
                            source="Servicio Nacional de Salud (SNS)"
                        >
                            <ResponsiveContainer width="100%" height="100%">
                                <BarChart data={bedData} layout="vertical" margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
                                    <CartesianGrid strokeDasharray="3 3" horizontal={false} />
                                    <XAxis type="number" />
                                    <YAxis dataKey="region" type="category" width={100} tick={{ fontSize: 12 }} />
                                    <Tooltip />
                                    <Legend />
                                    <Bar dataKey="occupied" name="Ocupadas" stackId="a" fill="#CE1126" />
                                    <Bar dataKey="total" name="Libres (Teórico)" stackId="a" fill="#25D366" />
                                </BarChart>
                            </ResponsiveContainer>
                        </DataVizContainer>

                        {/* Chart 2: Efficiency Scatter */}
                        <DataVizContainer
                            title="Gasto vs. Resultado (Latam)"
                            description="Relación entre Gasto Per Cápita (Eje X) y Esperanza de Vida (Eje Y). RD gasta poco, pero obtiene resultados sub-óptimos comparado con pares como Costa Rica."
                            source="Banco Mundial / OMS"
                        >
                            <ResponsiveContainer width="100%" height="100%">
                                <ScatterChart margin={{ top: 20, right: 20, bottom: 20, left: 20 }}>
                                    <CartesianGrid />
                                    <XAxis type="number" dataKey="spend" name="Gasto ($)" unit="USD" />
                                    <YAxis type="number" dataKey="lifeExp" name="Vida (Años)" domain={[70, 85]} />
                                    <ZAxis dataKey="country" name="País" />
                                    <Tooltip cursor={{ strokeDasharray: '3 3' }} />
                                    <Scatter name="Países" data={efficiencyData} fill="#002D62">
                                        {efficiencyData.map((entry, index) => (
                                            <Cell key={`cell - ${index} `} fill={entry.country === 'Rep. Dom.' ? '#CE1126' : '#002D62'} />
                                        ))}
                                    </Scatter>
                                </ScatterChart>
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
                        <h2 className="text-3xl font-bold text-azul-rd font-serif border-l-8 border-growth-green pl-4">Intervención Sanitaria</h2>
                        <span className="bg-blue-100 text-azul-rd text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide">Fase: Implementación</span>
                    </div>
                    <p className="text-lg text-gray-700 max-w-4xl">
                        Salud preventiva basada en datos, no medicina curativa basada en crisis.
                    </p>
                    <Accordion items={saludObjectives} />
                </div>
            )
        }
    ];

    return <PSMLayout hero={Hero} sections={sections} />;
}

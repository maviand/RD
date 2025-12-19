"use client";

import Link from "next/link";
import Image from "next/image";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Cell } from 'recharts';
import PSMLayout from "@/components/layout/PSMLayout";
import DataVizContainer from "@/components/viz/DataVizContainer";
import Accordion from "@/components/ui/Accordion";
import UntanglingKnot from "@/components/art/UntanglingKnot";
import { admPublicaObjectives } from "@/data/adm-publica";

// Mock Data for Visualizations
const bureaucracyData = [
    { name: 'Pasaportes', days: 25, efficiency: 40 },
    { name: 'Titulación', days: 120, efficiency: 10 },
    { name: 'Lic. Conducir', days: 5, efficiency: 85 },
    { name: 'Permisos Const.', days: 90, efficiency: 20 },
    { name: 'Aduanas (DGA)', days: 12, efficiency: 50 },
];

const budgetData = [
    { name: 'Nómina', value: 30, color: '#CE1126' }, // Rojo
    { name: 'Deuda', value: 25, color: '#002D62' },   // Azul
    { name: 'Inversión', value: 15, color: '#25D366' }, // Verde
    { name: 'Gasto Corriente', value: 30, color: '#F59E0B' }, // Amarillo
];

export default function AdmPublicaPage() {

    // 1. Hero Section (Health Check)
    const Hero = (
        <header id="hero-header" className="bg-azul-rd pt-24 pb-16 sm:pt-32 sm:pb-24 relative overflow-hidden min-h-[80vh] flex items-center">
            <UntanglingKnot />

            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-12 items-center">
                <div>
                    <div className="inline-block bg-rojo-rd text-white px-3 py-1 rounded-full text-sm font-bold mb-6 animate-pulse">
                        ⚠️ ALERTA: SISTEMA CRÍTICO
                    </div>
                    <h1 className="text-5xl lg:text-7xl font-extrabold text-white leading-tight font-serif drop-shadow-lg">
                        Reingeniería del Estado
                    </h1>
                    <p className="mt-6 text-xl text-blue-100 max-w-xl leading-relaxed">
                        Diagnóstico: La administración pública opera como un mecanismo de captura de rentas, no de servicio.
                        <br /><br />
                        <strong className="text-white">Solución:</strong> Transición a "Estado como Software".
                    </p>
                    <div className="mt-10 flex flex-wrap gap-4">
                        <Link href="#roadmap" className="bg-white text-azul-rd px-8 py-4 rounded-lg font-bold shadow-xl hover:bg-gray-100 transition duration-300">
                            Ver Hoja de Ruta
                        </Link>
                    </div>
                </div>

                {/* Abstract Art Area - Replaces Nano Banana */}
                <div className="hidden lg:flex justify-center relative">
                    <div className="relative w-[500px] h-[500px]">
                        <div className="absolute inset-0 bg-blue-500 rounded-full blur-3xl opacity-20 animate-pulse"></div>
                        <Image
                            src="/images/art-adm-publica.png"
                            alt="The Mechanical State Art"
                            width={600}
                            height={600}
                            className="object-contain relative z-10 drop-shadow-2xl"
                        />
                    </div>
                </div>
            </div>
        </header>
    );

    // 2. Define Layout Sections
    const sections = [
        {
            id: "diagnosis",
            label: "📊 Diagnóstico de Datos",
            content: (
                <div className="space-y-8">
                    <h2 className="text-3xl font-bold text-azul-rd font-serif border-l-8 border-rojo-rd pl-4">Diagnóstico Basado en Datos</h2>
                    <div className="grid md:grid-cols-2 gap-8">
                        {/* Chart 1: Bureaucracy Heatmap (Wait Times) */}
                        <DataVizContainer
                            title="Mapa de Calor Burocrático"
                            description="Días promedio para completar trámites esenciales. La 'zona roja' (>30 días) indica fricción intencional para corrupción."
                            source="Encuesta de Satisfacción Ciudadana 2024 (Simulada)"
                        >
                            <ResponsiveContainer width="100%" height="100%">
                                <BarChart data={bureaucracyData} layout="vertical" margin={{ top: 5, right: 30, left: 40, bottom: 5 }}>
                                    <CartesianGrid strokeDasharray="3 3" horizontal={false} />
                                    <XAxis type="number" />
                                    <YAxis dataKey="name" type="category" width={100} tick={{ fontSize: 12 }} />
                                    <Tooltip />
                                    <Bar dataKey="days" fill="#CE1126" radius={[0, 4, 4, 0]}>
                                        {bureaucracyData.map((entry, index) => (
                                            <Cell key={`cell-${index}`} fill={entry.days > 30 ? '#CE1126' : '#25D366'} />
                                        ))}
                                    </Bar>
                                </BarChart>
                            </ResponsiveContainer>
                        </DataVizContainer>

                        {/* Chart 2: Budget Execution (Where the money goes) */}
                        <DataVizContainer
                            title="Ejecución Presupuestaria Real"
                            description="Distribución del gasto público. El 55% se consume en nómina y deuda, dejando poco margen para inversión real."
                            source="Dirección General de Presupuesto (DIGEPRES)"
                        >
                            <ResponsiveContainer width="100%" height="100%">
                                <BarChart data={budgetData}>
                                    <CartesianGrid strokeDasharray="3 3" vertical={false} />
                                    <XAxis dataKey="name" tick={{ fontSize: 12 }} />
                                    <YAxis />
                                    <Tooltip />
                                    <Bar dataKey="value" name="% del Presupuesto">
                                        {budgetData.map((entry, index) => (
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
                        <h2 className="text-3xl font-bold text-azul-rd font-serif border-l-8 border-growth-green pl-4">Intervención Técnica</h2>
                        <span className="bg-blue-100 text-azul-rd text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide">Fase: Ejecución</span>
                    </div>
                    <p className="text-lg text-gray-700 max-w-4xl">
                        No se requieren más leyes; se requiere código. La siguiente hoja de ruta detalla la sustitución de procesos burocráticos por protocolos automatizados.
                    </p>
                    <Accordion items={admPublicaObjectives} />
                </div>
            )
        }
    ];

    return <PSMLayout hero={Hero} sections={sections} />;
}


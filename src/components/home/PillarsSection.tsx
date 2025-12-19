import Link from "next/link";

export default function PillarsSection() {
    return (
        <section id="pilares" className="py-16 sm:py-24 bg-gray-50">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center">
                    <h2 className="text-3xl sm:text-4xl font-bold text-azul-rd font-serif">
                        🏛️ Los 2 Pilares de la Reforma
                    </h2>
                    <p className="mt-4 text-lg text-gray-700">
                        El diagnóstico y el plan maestro para la reingeniería fundamental del Estado.
                    </p>
                </div>

                <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
                    {/* Card 1: Análisis ADM Pública */}
                    <div className="bg-white rounded-lg shadow-lg overflow-hidden flex flex-col transition duration-300 ease-in-out hover:shadow-2xl hover:scale-[1.03]">
                        <div className="p-8 flex-grow">
                            <h3 className="text-2xl font-bold text-azul-rd font-serif">
                                🔍 Análisis de Problemas Políticos
                            </h3>
                            <p className="mt-4 text-gray-700">
                                El diagnóstico: una autopsia estructural del fallo operativo crónico, la captura de rentas y la burocracia como un fin en sí mismo.
                            </p>
                        </div>
                        <div className="p-6 bg-gray-50">
                            <Link
                                href="/adm-publica"
                                className="inline-block bg-azul-rd text-white px-5 py-2 rounded-lg font-semibold hover:opacity-90 transition-colors"
                            >
                                Ver Análisis
                            </Link>
                        </div>
                    </div>

                    {/* Card 2: Misiones Estratégicas */}
                    <div className="bg-white rounded-lg shadow-lg overflow-hidden flex flex-col transition duration-300 ease-in-out hover:shadow-2xl hover:scale-[1.03]">
                        <div className="p-8 flex-grow">
                            <h3 className="text-2xl font-bold text-azul-rd font-serif">
                                🚀 Misiones Estratégicas
                            </h3>
                            <p className="mt-4 text-gray-700">
                                El plan: 10 misiones fundacionales e indivisibles para la transición acelerada del país al siglo XXI, desde energía y agua hasta el "Estado como Software".
                            </p>
                        </div>
                        <div className="p-6 bg-gray-50">
                            <Link
                                href="/misiones"
                                className="inline-block bg-azul-rd text-white px-5 py-2 rounded-lg font-semibold hover:opacity-90 transition-colors"
                            >
                                Ver 10 Misiones
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

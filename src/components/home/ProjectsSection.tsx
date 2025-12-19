import Link from "next/link";

export default function ProjectsSection() {
    const projects = [
        {
            title: "🎓 Educación",
            emoji: "🎓",
            description: 'Directivas de "shock" para rescatar el sistema educativo del último lugar en las pruebas PISA, implementando vouchers y habilidades técnicas.',
            link: "/educacion",
        },
        {
            title: "🌴 Turismo",
            emoji: "🌴",
            description: 'Transformar el modelo para retener la riqueza (evitar la fuga del 70%) y diversificar la oferta más allá del "all-inclusive" en Punta Cana.',
            link: "/turismo",
        },
        {
            title: "🩺 Salud",
            emoji: "🩺",
            description: "Un plan de 10 puntos para pasar de un sistema en crisis epidemiológica (influenza, cáncer, dengue) a uno enfocado en la excelencia preventiva y la digitalización.",
            link: "/salud",
        },
        {
            title: "🚗 Tránsito",
            emoji: "🚗",
            description: 'Directivas de "shock" para desmantelar el caos del "concho" y reemplazarlo con un sistema de movilidad moderno, digital y ordenado.',
            link: "/trafico",
        },
        {
            title: "⛓️ Directivas Críticas",
            emoji: "⛓️",
            description: '10 directivas para romper los "grilletes ocultos": las fallas estructurales ignoradas (laboral, prisiones, etc.) que frenan todo el desarrollo.',
            link: "/directivas-criticas",
        },
    ];

    return (
        <section id="proyectos" className="py-16 sm:py-24 bg-white">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center">
                    <h2 className="text-3xl sm:text-4xl font-bold text-rojo-rd font-serif">
                        🎯 Los 5 Proyectos Tácticos (Acción Inmediata)
                    </h2>
                    <p className="mt-4 text-lg text-gray-700">
                        Propuestas de "shock" quirúrgico para reformar las áreas más críticas y urgentes.
                    </p>
                </div>

                <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, index) => (
                        <div
                            key={index}
                            className="bg-white rounded-lg shadow-lg overflow-hidden flex flex-col border-t-4 border-rojo-rd transition duration-300 ease-in-out hover:shadow-2xl hover:scale-[1.03]"
                        >
                            <div className="p-8 flex-grow">
                                <h3 className="text-2xl font-bold text-azul-rd font-serif">
                                    {project.title}
                                </h3>
                                <p className="mt-4 text-gray-700">{project.description}</p>
                            </div>
                            <div className="p-6 bg-gray-50">
                                <Link
                                    href={project.link}
                                    className="inline-block bg-azul-rd text-white px-5 py-2 rounded-lg font-semibold hover:opacity-90 transition-colors"
                                >
                                    Ver Proyecto
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

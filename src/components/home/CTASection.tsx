"use client";

import { useEffect, useState } from "react";

export default function CTASection() {
    const [shareUrl, setShareUrl] = useState("");

    useEffect(() => {
        if (typeof window !== "undefined") {
            setShareUrl(window.location.href);
        }
    }, []);

    const whatsappLink = `https://api.whatsapp.com/send?text=Mira%20esta%20propuesta%20integral%20de%20Reforma%20Estructural%20para%20RD%20(An%C3%A1lisis,%20Misiones%20y%20Proyectos):%20${encodeURIComponent(
        shareUrl
    )}`;

    return (
        <section id="compartir" className="bg-azul-rd text-white py-16 sm:py-24">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <h2 className="text-3xl sm:text-4xl font-bold font-serif">
                    📢 El tiempo del ajuste iterativo pasó.
                </h2>
                <p className="mt-4 text-lg text-blue-200 max-w-2xl mx-auto">
                    La elección es entre una demolición controlada y un colapso incontrolado. Comparte este protocolo.
                </p>

                <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
                    <a
                        href={whatsappLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-whatsapp text-white px-6 py-3 rounded-lg font-semibold shadow-lg hover:bg-whatsapp-hover transition duration-300 flex items-center justify-center space-x-2"
                    >
                        <span className="text-xl">📲</span>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                        >
                            <path d="M10.001 2C5.58 2 2 5.58 2 10.001c0 1.503.414 2.914 1.14 4.142l-.998 3.648 3.72-1.02c1.17.65 2.502 1.003 3.88 1.003 4.42 0 8-3.58 8-8.001 0-4.421-3.58-8-8-8.001zM10 3.668c3.504 0 6.332 2.83 6.332 6.333 0 3.504-2.828 6.333-6.332 6.333-1.234 0-2.38-.35-3.357-.96l-.234-.14-.24.067-2.31 1.01.9-2.22.13-.31-.15-.24c-.65-1.02-.99-2.21-.99-3.48 0-3.504 2.828-6.333 6.332-6.333zm-2.36 3.19c-.103 0-.43.22-.53.38-.11.16-.43.51-.43.51-.11.16-.23.23-.35.23-.11 0-.28-.05-.41-.11-.3-.15-.8-.34-1.2-.55-.7-.35-1.1-1-1.1-1-.1-.1-.1-.1-.1-.2 0-.1.1-.1.2-.2.1-.1.2-.2.3-.2.1 0 .2 0 .3.1.1.1.3.3.3.3.1.1.1.2.2.2.1.1.1.1.2.1.1 0 .2-.1.3-.2.1-.1.1-.1.2-.2.1-.1.1-.2.2-.2.1-.1.3-.3.3-.3.1-.1.2-.2.3-.3.1-.1.2-.1.3-.1h.3c.1 0 .3.1.4.2.1.1.4.4.4.4.1.1.1.1.1.2s0 .2 0 .3c0 .1-.1.2-.2.3-.1.1-.2.2-.3.3-.1.1-.2.2-.2.2s-.1.1-.2.2c-.1.1-.2.2-.3.3-.1.1-.3.3-.3.3s-.1.1-.1.2c0 .1 0 .2.1.3.1.1.2.1.3.1.1 0 .2 0 .3-.1.1 0 .2-.1.3-.1.1 0 .2-.1.3-.1.4 0 1.1.5 1.1.5.1.1.2.1.3.2.1.1.1.2.1.3s0 .2 0 .3c-.1.1-.2.2-.3.3-.1.1-.4.3-.6.3-.2.1-.4.1-.6.1s-.4 0-.6-.1c-.2-.1-.4-.1-.5-.2z" />
                        </svg>
                        <span>Compartir en WhatsApp</span>
                    </a>
                </div>
            </div>
        </section>
    );
}

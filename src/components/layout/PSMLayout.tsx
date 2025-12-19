"use client";

import StickySidebar from "@/components/ui/StickySidebar";

interface Section {
    id: string;
    label: string;
    content: React.ReactNode;
}

interface PSMLayoutProps {
    hero: React.ReactNode;
    sections: Section[];
}

export default function PSMLayout({ hero, sections }: PSMLayoutProps) {
    const sidebarItems = sections.map((s) => ({ id: s.id, label: s.label }));

    return (
        <div className="min-h-screen bg-gray-50">
            {/* 1. Health Check Hero */}
            {hero}

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="lg:flex lg:gap-12">
                    {/* Sticky Sidebar */}
                    <StickySidebar items={sidebarItems} />

                    {/* Main Content */}
                    <main className="flex-1 min-w-0 space-y-16">
                        {sections.map((section) => (
                            <section key={section.id} id={section.id} className="scroll-mt-28">
                                {/* Section Header (Optional, if not included in content) */}
                                {/* <div className="mb-6 border-l-4 border-rojo-rd pl-4">
                    <h2 className="text-3xl font-bold text-gray-900 font-serif">{section.label}</h2>
                 </div> */}

                                {section.content}
                            </section>
                        ))}
                    </main>
                </div>
            </div>
        </div>
    );
}

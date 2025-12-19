"use client";

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { ChevronRight } from 'lucide-react';

interface SidebarItem {
    id: string;
    label: string;
}

interface StickySidebarProps {
    items: SidebarItem[];
    title?: string;
}

export default function StickySidebar({ items, title = "Navegación" }: StickySidebarProps) {
    const [activeId, setActiveId] = useState<string>("");

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setActiveId(entry.target.id);
                    }
                });
            },
            { rootMargin: "-20% 0px -35% 0px" } // Adjust to trigger when section is in middle of viewport
        );

        items.forEach((item) => {
            const element = document.getElementById(item.id);
            if (element) observer.observe(element);
        });

        return () => observer.disconnect();
    }, [items]);

    return (
        <aside className="hidden lg:block w-64 shrink-0">
            <div className="sticky top-24 space-y-2">
                <h3 className="font-serif font-bold text-azul-rd text-lg mb-4 px-3 border-b-2 border-rojo-rd pb-2 inline-block">
                    {title}
                </h3>
                <nav>
                    <ul className="space-y-1">
                        {items.map((item) => (
                            <li key={item.id}>
                                <Link
                                    href={`#${item.id}`}
                                    className={`flex items-center group px-3 py-2 text-sm font-medium rounded-md transition-all duration-200 ${activeId === item.id
                                            ? "bg-blue-50 text-azul-rd translate-x-1"
                                            : "text-gray-600 hover:bg-gray-50 hover:text-gray-900"
                                        }`}
                                >
                                    <ChevronRight
                                        className={`mr-2 h-4 w-4 transition-transform ${activeId === item.id ? "text-rojo-rd" : "text-gray-400 group-hover:text-gray-500"
                                            }`}
                                    />
                                    {item.label}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </nav>
            </div>
        </aside>
    );
}

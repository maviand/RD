"use client";

import { useState } from "react";

interface AccordionItem {
    title: string;
    content: React.ReactNode;
    icon?: React.ReactNode;
}

interface AccordionProps {
    items: AccordionItem[];
    titleColor?: string; // class name for text color e.g. "text-azul-rd"
    borderColor?: string; // class name for border e.g. "border-gray-200"
}

export default function Accordion({ items, titleColor = "text-azul-rd", borderColor = "border-gray-200" }: AccordionProps) {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    const toggle = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <div className="space-y-4">
            {items.map((item, index) => (
                <div
                    key={index}
                    className={`bg-white rounded-lg shadow-lg border ${borderColor} overflow-hidden`}
                >
                    <button
                        onClick={() => toggle(index)}
                        className="w-full flex justify-between items-center p-6 text-left focus:outline-none"
                    >
                        <div className="flex items-center gap-3">
                            {item.icon && <span className="text-xl">{item.icon}</span>}
                            <h3 className={`text-xl font-bold ${titleColor}`}>{item.title}</h3>
                        </div>
                        <svg
                            className={`h-6 w-6 transform transition-transform duration-300 ${openIndex === index ? "rotate-180" : ""} ${titleColor}`}
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                        </svg>
                    </button>
                    <div
                        className={`transition-all duration-500 ease-in-out overflow-hidden ${openIndex === index ? "max-h-[1500px] opacity-100" : "max-h-0 opacity-0"
                            }`}
                    >
                        <div className="px-6 pb-6 text-gray-700">
                            {item.content}
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
}

"use client";

interface DataVizContainerProps {
    title: string;
    description: string;
    source?: string;
    children: React.ReactNode;
}

export default function DataVizContainer({ title, description, source, children }: DataVizContainerProps) {
    return (
        <div className="bg-white rounded-xl shadow-lg border border-gray-200 overflow-hidden mb-8">
            <div className="bg-gray-50 px-6 py-4 border-b border-gray-200">
                <h3 className="text-xl font-bold text-azul-rd font-serif">{title}</h3>
                <p className="mt-1 text-sm text-gray-600">{description}</p>
            </div>
            <div className="p-6">
                <div className="w-full h-[300px] sm:h-[400px]">
                    {children}
                </div>
            </div>
            {source && (
                <div className="bg-gray-50 px-6 py-2 text-xs text-gray-500 border-t border-gray-200 text-right">
                    Fuente: <span className="italic">{source}</span>
                </div>
            )}
        </div>
    );
}

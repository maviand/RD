/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Header } from "./components/Header";
import { ComparisonSection } from "./components/ComparisonSection";
import { CostVisualizer } from "./components/CostVisualizer";
import { UnofficialEconomy } from "./components/UnofficialEconomy";

export default function App() {
  return (
    <div className="min-h-screen bg-gray-100 font-sans text-gray-900">
      <Header />
      <main className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 -mt-16 pb-24 relative z-10">
        <div className="bg-white rounded-xl shadow-xl border-t-4 border-red-600 overflow-hidden">
          <div className="p-8 sm:p-12">
            <h2 className="text-sm font-bold tracking-widest text-[#0B1B3D] uppercase mb-6">
              Estructura Militar Actual
            </h2>
            <h3 className="text-xl font-bold text-[#0B1B3D] mb-4">
              Resumen Ejecutivo
            </h3>
            <p className="text-gray-600 mb-12 leading-relaxed">
              El Estado dominicano enfrenta un desafío crítico de diseño institucional en sus Fuerzas Armadas: una estructura de mando invertida o "macrocefalia militar". Mientras los estándares internacionales (OTAN) recomiendan una base amplia de tropas operativas y una cúpula reducida, la República Dominicana presenta un exceso burocrático masivo en posiciones de escritorio, drenando recursos que podrían destinarse a equipamiento táctico y seguridad fronteriza real.
            </p>

            <ComparisonSection />
            
            <div className="my-16 border-t border-gray-200"></div>
            
            <CostVisualizer />

            <UnofficialEconomy />
          </div>
        </div>
      </main>
    </div>
  );
}

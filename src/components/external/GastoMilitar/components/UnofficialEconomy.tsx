import { motion } from 'motion/react';
import { FileWarning, Scale, Briefcase, Landmark, AlertCircle } from 'lucide-react';

export function UnofficialEconomy() {
  return (
    <section className="mt-16 pt-16 border-t border-gray-200">
      <div className="flex items-center gap-3 mb-6">
        <div className="p-2 bg-red-100 rounded-lg text-red-700">
          <FileWarning size={24} />
        </div>
        <h3 className="text-2xl font-bold text-[#0B1B3D]">
          El Salario "No Oficial": La Economía Sumergida
        </h3>
      </div>
      
      <p className="text-gray-600 mb-8 text-lg leading-relaxed">
        Estimar un salario "no oficial" es inherentemente especulativo, ya que depende de la posición del general y su disposición a explotarla. Sin embargo, no dependemos de rumores. Gracias a las masivas investigaciones anticorrupción del Ministerio Público (<strong>Operación Coral</strong> y <strong>Operación Coral 5G</strong>), existe matemática documentada sobre la acumulación de riqueza ilícita en los altos mandos.
      </p>

      <div className="grid lg:grid-cols-2 gap-8 mb-8">
        {/* Tier 1 */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-gray-50 border border-gray-200 rounded-2xl p-8 relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 w-32 h-32 bg-gray-200 rounded-full mix-blend-multiply filter blur-2xl opacity-50" />
          <div className="relative z-10">
            <div className="flex items-center gap-3 mb-4">
              <Briefcase className="text-gray-500" size={28} />
              <h4 className="text-xl font-bold text-gray-900">Nivel 1: El "Área Gris"</h4>
            </div>
            <p className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-6">Beneficios Estructurales</p>
            
            <div className="space-y-4 mb-8">
              <p className="text-gray-700 text-sm leading-relaxed">
                Para un general típico en posición de mando que no dirige un sindicato criminal masivo, el valor económico proviene de apalancar recursos militares para beneficio privado.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start gap-2 text-sm text-gray-700">
                  <div className="w-1.5 h-1.5 rounded-full bg-gray-400 mt-2 shrink-0" />
                  <span>Desvío de asignaciones de combustible.</span>
                </li>
                <li className="flex items-start gap-2 text-sm text-gray-700">
                  <div className="w-1.5 h-1.5 rounded-full bg-gray-400 mt-2 shrink-0" />
                  <span>Asignación de soldados como seguridad privada para empresarios o políticos (quienes pagan al general directamente).</span>
                </li>
                <li className="flex items-start gap-2 text-sm text-gray-700">
                  <div className="w-1.5 h-1.5 rounded-full bg-gray-400 mt-2 shrink-0" />
                  <span>"Regalos" o comisiones de contratistas militares (alimentos, uniformes, construcción).</span>
                </li>
              </ul>
            </div>

            <div className="bg-white border border-gray-200 p-5 rounded-xl">
              <div className="text-xs text-gray-500 uppercase tracking-wider font-bold mb-1">Ingreso Mensual Estimado</div>
              <div className="text-2xl font-black text-gray-900">RD$ 1.0M - 3.0M</div>
              <div className="text-sm text-gray-500 mt-1">($16,000 - $50,000 USD)</div>
            </div>
          </div>
        </motion.div>

        {/* Tier 2 */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="bg-red-50 border border-red-100 rounded-2xl p-8 relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 w-32 h-32 bg-red-200 rounded-full mix-blend-multiply filter blur-2xl opacity-50" />
          <div className="relative z-10">
            <div className="flex items-center gap-3 mb-4">
              <Landmark className="text-red-600" size={28} />
              <h4 className="text-xl font-bold text-red-900">Nivel 2: Corrupción Sistémica</h4>
            </div>
            <p className="text-sm font-semibold text-red-600 uppercase tracking-wider mb-6">El Nivel "Coral"</p>
            
            <div className="space-y-4 mb-8">
              <p className="text-red-800 text-sm leading-relaxed">
                Para generales en direcciones de alto presupuesto (CUSEP, CESTUR), el ingreso escala a niveles asombrosos. La acusación de la Operación Coral señala el desvío de más de <strong>RD$4.5 mil millones</strong> entre 2012 y 2020.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start gap-2 text-sm text-red-800">
                  <div className="w-1.5 h-1.5 rounded-full bg-red-400 mt-2 shrink-0" />
                  <span>Creación de miles de soldados "fantasma" en nómina (el Estado paga, el general se queda con el 80%).</span>
                </li>
                <li className="flex items-start gap-2 text-sm text-red-800">
                  <div className="w-1.5 h-1.5 rounded-full bg-red-400 mt-2 shrink-0" />
                  <span>Fraude masivo en compras y contrataciones.</span>
                </li>
                <li className="flex items-start gap-2 text-sm text-red-800">
                  <div className="w-1.5 h-1.5 rounded-full bg-red-400 mt-2 shrink-0" />
                  <span>Extorsión sistémica.</span>
                </li>
              </ul>
            </div>

            <div className="bg-white border border-red-200 p-5 rounded-xl shadow-sm">
              <div className="text-xs text-red-600 uppercase tracking-wider font-bold mb-1">Ingreso Mensual Estimado</div>
              <div className="text-2xl font-black text-red-700">RD$ 8.0M - 15.0M+</div>
              <div className="text-sm text-red-500 mt-1">($135,000 - $250,000+ USD)</div>
            </div>
          </div>
        </motion.div>
      </div>

      <div className="bg-[#0B1B3D] text-white rounded-2xl p-8 flex flex-col md:flex-row items-center gap-8 shadow-xl">
        <div className="shrink-0 p-4 bg-blue-900/50 rounded-full">
          <Scale size={48} className="text-blue-400" />
        </div>
        <div>
          <h4 className="text-xl font-bold mb-3 text-[#FBBF24]">La Realidad del Sistema</h4>
          <p className="text-gray-300 leading-relaxed mb-4">
            Para poner esto en perspectiva, el Ministerio Público señaló recientemente que solo las propiedades y bienes de lujo incautados a los generales en el caso Coral generaron más de <strong>RD$86 millones puramente en ingresos por alquiler y rendimientos agrícolas</strong> mientras estaban bajo custodia del Estado.
          </p>
          <div className="flex items-start gap-3 text-sm font-medium text-blue-300 bg-blue-900/30 p-4 rounded-lg border border-blue-800/50">
            <AlertCircle size={20} className="shrink-0 mt-0.5" />
            <p>Mientras el libro mayor del gobierno dice que un general tiene un tope salarial de ~RD$300,000 al mes, la realidad para aquellos con acceso a las palancas del poder es fácilmente de <strong>multimillones de pesos mensuales</strong>.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

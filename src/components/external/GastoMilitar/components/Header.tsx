export function Header() {
  return (
    <header className="bg-[#0B1B3D] pt-20 pb-32 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-4xl sm:text-5xl font-extrabold text-white leading-tight mb-6">
          Análisis del Gasto Militar y la <br className="hidden sm:block" />
          <span className="text-[#FBBF24]">Estructura de Mando</span>
        </h1>
        <p className="text-lg text-gray-300 max-w-3xl leading-relaxed">
          Un análisis de la redundancia estructural y la propuesta de consolidación para unas 
          Fuerzas Armadas más eficientes, eliminando la duplicidad de funciones y optimizando 
          los recursos públicos en la República Dominicana.
        </p>
      </div>
    </header>
  );
}

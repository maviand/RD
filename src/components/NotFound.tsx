import { useNavigate } from 'react-router-dom';
import { motion } from 'motion/react';
import { Home, Search } from 'lucide-react';

export default function NotFound() {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center justify-center h-full min-h-[70vh] px-4 text-center">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-9xl font-extrabold text-gray-200 tracking-tighter mb-4">404</h1>
        <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6 font-heading">
          Página no encontrada
        </h2>
        <p className="text-gray-600 mb-8 max-w-md mx-auto">
          La propuesta o sección que estás buscando no existe, ha sido movida o está en desarrollo.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <button
            onClick={() => navigate('/')}
            className="flex items-center justify-center gap-2 px-6 py-3 bg-[var(--color-gov-blue)] text-white rounded-full font-semibold hover:bg-[#003680] transition-colors shadow-md hover:shadow-lg w-full sm:w-auto"
          >
            <Home className="w-5 h-5" />
            Volver al Inicio
          </button>
          <button
            onClick={() => navigate('/glosario')}
            className="flex items-center justify-center gap-2 px-6 py-3 bg-white text-[var(--color-gov-blue)] border border-gray-200 rounded-full font-semibold hover:bg-gray-50 transition-colors shadow-sm hover:shadow-md w-full sm:w-auto"
          >
            <Search className="w-5 h-5" />
            Ver Glosario
          </button>
        </div>
      </motion.div>
    </div>
  );
}

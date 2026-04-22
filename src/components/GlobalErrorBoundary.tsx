import { ErrorBoundary } from 'react-error-boundary';
import { AlertTriangle, RefreshCcw, Home } from 'lucide-react';
import { ReactNode } from 'react';

function ErrorFallback({ error, resetErrorBoundary }: { error: any, resetErrorBoundary: () => void }) {
  return (
    <div className="flex flex-col items-center justify-center min-h-[70vh] p-4 text-center">
      <div className="bg-red-50 p-6 rounded-xl border border-red-200 max-w-lg w-full shadow-sm">
        <div className="flex justify-center mb-4">
          <AlertTriangle className="w-12 h-12 text-red-500" />
        </div>
        <h2 className="text-xl font-bold text-red-700 mb-2 font-heading uppercase tracking-wider">
          Algo salió mal
        </h2>
        <p className="text-sm text-red-600 mb-6 font-sans">
          Ha ocurrido un error inesperado. Nuestro equipo técnico ha sido notificado.
        </p>
        
        <div className="bg-white p-4 rounded-md border border-red-100 text-left mb-6 overflow-auto max-h-32">
          <p className="text-xs text-gray-500 font-mono break-words">
            {error.message}
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <button
            onClick={resetErrorBoundary}
            className="flex items-center justify-center gap-2 px-6 py-2 bg-red-600 hover:bg-red-700 text-white font-bold text-sm rounded-full transition-colors shadow-sm"
          >
            <RefreshCcw className="w-4 h-4" />
            Intentar de nuevo
          </button>
          <a
            href="/"
            className="flex items-center justify-center gap-2 px-6 py-2 bg-white hover:bg-gray-50 text-red-700 border border-red-200 font-bold text-sm rounded-full transition-colors shadow-sm"
          >
            <Home className="w-4 h-4" />
            Volver al inicio
          </a>
        </div>
      </div>
    </div>
  );
}

export function GlobalErrorBoundary({ children }: { children: ReactNode }) {
  return (
    <ErrorBoundary
      FallbackComponent={ErrorFallback}
      onReset={() => {
        // Reset the state of your app so the error doesn't happen again
        window.location.href = '/';
      }}
    >
      {children}
    </ErrorBoundary>
  );
}

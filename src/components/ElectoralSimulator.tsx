import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Fingerprint, Smartphone, AlertTriangle, ShieldCheck } from 'lucide-react';

export default function ElectoralSimulator() {
  const [step, setStep] = useState<'intro' | 'scanning' | 'verified' | 'voted'>('intro');
  const [isFraud, setIsFraud] = useState(false);

  const simulateScan = (fraudAttempt: boolean) => {
    setIsFraud(fraudAttempt);
    setStep('scanning');
    setTimeout(() => {
      setStep(fraudAttempt ? 'intro' : 'verified');
      if (fraudAttempt) {
        alert("¡Alerta de Fraude! El sistema blockchain ha detectado que esta biometría ya emitió un voto o es inválida. Intento bloqueado y registrado en el ledged público.");
      }
    }, 1500);
  };

  const castVote = () => {
    setStep('voted');
    setTimeout(() => {
      setStep('intro');
    }, 3000);
  };

  return (
    <div className="bg-white rounded-md border border-gray-200 shadow-sm overflow-hidden mt-8">
      <div className="bg-gradient-to-r from-gray-900 to-gray-800 p-6 text-white flex justify-between items-center flex-wrap gap-4">
        <div>
          <h3 className="text-xl font-heading font-bold uppercase tracking-wider flex items-center gap-2">
            <ShieldCheck className="w-6 h-6 text-green-400" />
            Simulador de Voto Blockchain (Cero Fraude)
          </h3>
          <p className="text-sm text-gray-300 font-sans mt-1">Sustitución de colegios físicos vulnerables por Sufragio Biométrico Criptográfico</p>
        </div>
      </div>

      <div className="p-6 md:p-8 flex flex-col md:flex-row gap-8 items-center bg-gray-50">
        
        {/* Device Simulator */}
        <div className="relative w-[280px] h-[550px] bg-black rounded-[2.5rem] border-[8px] border-gray-800 shadow-2xl p-4 flex flex-col items-center overflow-hidden shrink-0">
          <div className="absolute top-0 w-32 h-6 bg-gray-800 rounded-b-2xl z-20"></div>
          
          {/* Screen Content */}
          <div className="bg-white w-full h-full rounded-2xl overflow-hidden relative flex flex-col items-center pt-8">
            <h4 className="text-xl font-bold font-heading text-[var(--color-gov-blue)] uppercase tracking-wider mb-2">JCE Digital</h4>
            
            <AnimatePresence mode="wait">
              {step === 'intro' && (
                <motion.div 
                  key="intro"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="flex flex-col items-center w-full px-4 text-center mt-10"
                >
                  <Fingerprint className="w-16 h-16 text-gray-300 mb-4" />
                  <p className="text-sm font-sans text-gray-600 mb-8">
                    Coloque su huella dactilar para validar su identidad en el Ledger Nacional.
                  </p>
                  <button 
                    onClick={() => simulateScan(false)}
                    className="w-full py-3 bg-[var(--color-gov-blue)] text-white font-bold rounded-lg mb-3 shadow-md active:scale-95 transition-transform"
                  >
                    Votante Legítimo
                  </button>
                  <button 
                    onClick={() => simulateScan(true)}
                    className="w-full py-3 bg-red-100 text-red-600 font-bold rounded-lg border border-red-200 shadow-sm active:scale-95 transition-transform"
                  >
                    Simular Fraude (Compra Cédula)
                  </button>
                </motion.div>
              )}

              {step === 'scanning' && (
                <motion.div 
                  key="scanning"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="flex flex-col items-center justify-center w-full h-full"
                >
                  <div className="relative">
                    <Fingerprint className="w-20 h-20 text-[var(--color-gov-blue)]" />
                    <motion.div 
                      animate={{ top: ['0%', '100%', '0%'] }}
                      transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
                      className="absolute left-0 w-full h-1 bg-[var(--color-gov-red)] shadow-[0_0_8px_var(--color-gov-red)]"
                    />
                  </div>
                  <p className="mt-4 text-sm font-bold text-[var(--color-gov-blue)] animate-pulse">Validando Hash...</p>
                </motion.div>
              )}

              {step === 'verified' && (
                <motion.div 
                  key="verified"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, x: -50 }}
                  className="flex flex-col items-center w-full px-4 text-center mt-6"
                >
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mb-4">
                    <ShieldCheck className="w-6 h-6 text-green-600" />
                  </div>
                  <p className="text-xs font-bold text-green-600 uppercase mb-6 tracking-widest">Identidad Verificada</p>
                  
                  <div className="w-full space-y-3">
                    {['Candidato A', 'Candidato B'].map(cand => (
                      <button 
                        key={cand}
                        onClick={castVote}
                        className="w-full py-4 border-2 border-gray-200 rounded-lg font-bold text-gray-700 hover:border-[var(--color-gov-blue)] hover:bg-blue-50 transition-colors"
                      >
                        {cand}
                      </button>
                    ))}
                  </div>
                </motion.div>
              )}

              {step === 'voted' && (
                <motion.div 
                  key="voted"
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  className="flex flex-col items-center justify-center w-full h-full pb-10"
                >
                  <div className="w-20 h-20 bg-green-500 rounded-full flex items-center justify-center shadow-lg mb-4">
                    <svg className="w-10 h-10 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h4 className="font-bold text-lg text-gray-800">¡Voto Encriptado!</h4>
                  <p className="text-xs text-gray-500 mt-2 px-6 text-center">Registrado inmutablemente en el nodo central. Cero intervención humana.</p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>

        {/* Explanation */}
        <div className="flex-1 space-y-6">
          <div className="flex items-start gap-4">
            <div className="p-3 bg-red-50 text-red-600 rounded-lg shrink-0">
              <AlertTriangle className="w-6 h-6" />
            </div>
            <div>
              <h4 className="font-bold text-gray-900 uppercase">El Problema: Clientelismo Físico</h4>
              <p className="text-sm text-gray-600 leading-relaxed font-sans mt-1">
                La aglomeración en colegios electorales fomenta la "compra de cédulas" (retención de voto) y el soborno a las puertas de las escuelas. Los conteos manuales son vulnerables a cortes de luz y manipulación de actas, restando legitimidad a la democracia.
              </p>
            </div>
          </div>
          
          <div className="flex items-start gap-4">
            <div className="p-3 bg-blue-50 text-[var(--color-gov-blue)] rounded-lg shrink-0">
              <Smartphone className="w-6 h-6" />
            </div>
            <div>
              <h4 className="font-bold text-gray-900 uppercase">La Solución: Descentralización Criptográfica</h4>
              <p className="text-sm text-gray-600 leading-relaxed font-sans mt-1">
                Absorber el padrón en una App Oficial atada a la biometría nativa del celular (FaceID, TouchID). Si intentas vender la cédula, el sistema rechaza el escaneo si no coincide la cara. Los votos se totalizan instantáneamente a las 5:00 PM sin intervención humana, ahorrando billones en logística física.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { MessageSquare, ThumbsUp, X, ChevronUp, Share2 } from 'lucide-react';

export default function FloatingActionButton() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed bottom-6 left-6 z-50 flex flex-col-reverse items-start gap-4 shadow-xl">
      <motion.button
        className="w-14 h-14 bg-[var(--color-gov-blue)] text-white rounded-full flex items-center justify-center shadow-lg hover:bg-[#002f6c] hover:scale-105 transition-all focus:outline-none focus:ring-4 focus:ring-blue-300"
        onClick={() => setIsOpen(!isOpen)}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        <AnimatePresence mode="wait">
          {isOpen ? (
            <motion.div
              key="close"
              initial={{ rotate: -90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: 90, opacity: 0 }}
            >
              <X className="w-6 h-6" />
            </motion.div>
          ) : (
            <motion.div
              key="open"
              initial={{ rotate: 90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: -90, opacity: 0 }}
            >
              <ChevronUp className="w-6 h-6" />
            </motion.div>
          )}
        </AnimatePresence>
      </motion.button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="flex flex-col gap-3 mb-2"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
          >
            <motion.button
              className="flex items-center gap-3 bg-white text-[var(--color-gov-blue)] px-4 py-2 rounded-full shadow-md font-bold text-sm tracking-wide border border-gray-100 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-[var(--color-gov-blue)]"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => alert('Debate feature coming soon!')}
            >
              <MessageSquare className="w-4 h-4" />
              <span>Debatir</span>
            </motion.button>

            <motion.button
              className="flex items-center gap-3 bg-[var(--color-gov-gold)] text-white px-4 py-2 rounded-full shadow-md font-bold text-sm tracking-wide border border-transparent hover:brightness-110 focus:outline-none focus:ring-2 focus:ring-[var(--color-gov-gold)]"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => {
                window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
                setIsOpen(false);
              }}
            >
              <ThumbsUp className="w-4 h-4" />
              <span>Votar Propuestas</span>
            </motion.button>

            <motion.button
              className="flex items-center gap-3 bg-[var(--color-gov-red)] text-white px-4 py-2 rounded-full shadow-md font-bold text-sm tracking-wide border border-transparent hover:bg-[#a00d1d] focus:outline-none focus:ring-2 focus:ring-[var(--color-gov-red)]"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => {
                if (navigator.share) {
                  navigator.share({ title: 'Reforma Total RD', url: window.location.href });
                } else {
                  alert('URL de la página copiada al portapapeles!');
                }
              }}
            >
              <Share2 className="w-4 h-4" />
              <span>Compartir</span>
            </motion.button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

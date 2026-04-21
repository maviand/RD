import { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { Globe } from 'lucide-react';

export default function LanguageSlider() {
  const [isEnglish, setIsEnglish] = useState(false);

  useEffect(() => {
    // Check if googtrans cookie is set to English
    const isEn = document.cookie.includes('googtrans=/es/en') || document.cookie.includes('googtrans=/auto/en');
    setIsEnglish(isEn);
    
    // Inject Google Translate script if it doesn't exist
    if (!document.getElementById('google-translate-script')) {
      const gTranslateEl = document.createElement('div');
      gTranslateEl.id = 'google_translate_element';
      gTranslateEl.style.display = 'none'; // Map hide
      document.body.appendChild(gTranslateEl);

      const script = document.createElement('script');
      script.id = 'google-translate-script';
      script.src = "//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit";
      script.async = true;
      document.body.appendChild(script);

      // Define callback
      (window as any).googleTranslateElementInit = () => {
        new (window as any).google.translate.TranslateElement({
          pageLanguage: 'es',
          includedLanguages: 'es,en',
          autoDisplay: false
        }, 'google_translate_element');
      };
    }
  }, []);

  const toggleLanguage = () => {
    const newLang = isEnglish ? 'es' : 'en';
    // Set google translate cookie for all subdomains and paths
    document.cookie = `googtrans=/es/${newLang}; path=/; domain=${window.location.hostname}`;
    document.cookie = `googtrans=/es/${newLang}; path=/;`; // Also set for current path
    
    // Sometimes Google Translate requires a page reload to apply the cookie
    window.location.reload();
  };

  return (
    <div className="flex items-center gap-3 px-4 mt-4">
      <Globe className="w-5 h-5 text-white/70" />
      <span className="text-sm font-semibold text-white/70 uppercase tracking-widest">
        ES
      </span>
      <div 
        className="w-12 h-6 bg-white/20 rounded-full flex items-center p-1 cursor-pointer transition-colors"
        onClick={toggleLanguage}
      >
        <motion.div 
          className="w-4 h-4 bg-white rounded-full shadow-md"
          initial={false}
          animate={{ x: isEnglish ? 24 : 0 }}
          transition={{ type: "spring", stiffness: 500, damping: 30 }}
        />
      </div>
      <span className="text-sm font-semibold text-white/70 uppercase tracking-widest">
        EN
      </span>
    </div>
  );
}

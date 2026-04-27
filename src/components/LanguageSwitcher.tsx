import React from 'react';
import { useTranslation } from 'react-i18next';
import { Globe } from 'lucide-react';

export default function LanguageSwitcher() {
  const { i18n } = useTranslation();

  const changeLanguage = (e: React.ChangeEvent<HTMLSelectElement>) => {
    i18n.changeLanguage(e.target.value);
  };

  return (
    <div className="flex items-center gap-2 text-gray-400 focus-within:text-[var(--color-gov-gold)] transition-colors">
      <Globe className="w-5 h-5" />
      <select 
        value={i18n.resolvedLanguage || 'es'}
        onChange={changeLanguage}
        className="bg-transparent border-none outline-none text-sm font-bold uppercase tracking-wider cursor-pointer focus:ring-0 focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-gov-gold)] rounded-sm"
        aria-label="Seleccionar idioma"
      >
        <option value="es" className="bg-gray-800 text-white">ES</option>
        <option value="en" className="bg-gray-800 text-white">EN</option>
      </select>
    </div>
  );
}

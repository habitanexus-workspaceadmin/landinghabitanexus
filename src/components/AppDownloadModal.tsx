import React from 'react';
import { ThemeMode } from '../types';

interface AppDownloadModalProps {
  theme: ThemeMode;
  onClose: () => void;
}

export const AppDownloadModal: React.FC<AppDownloadModalProps> = ({
  theme,
  onClose,
}) => {
  const isDark = theme === 'dark';

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-md animate-fadeIn">
      <div
        className={`max-w-md w-full rounded-3xl p-6 sm:p-8 relative shadow-2xl text-center ${
          isDark
            ? 'bg-[#0B132B] hairline-border-dark text-white'
            : 'bg-white border border-slate-200 text-slate-900'
        }`}
      >
        <button
          onClick={onClose}
          className="absolute top-5 right-5 w-8 h-8 rounded-full flex items-center justify-center hover:bg-slate-500/10 cursor-pointer"
        >
          <span className="material-symbols-outlined text-sm">close</span>
        </button>

        <div className="w-14 h-14 rounded-2xl bg-teal-400/20 text-teal-400 flex items-center justify-center mx-auto mb-4">
          <span className="material-symbols-outlined text-3xl">android</span>
        </div>

        <h3 className="font-display font-semibold text-xl mb-1">
          HabitaNexus Mobile &amp; PWA
        </h3>
        <p className="text-xs text-slate-400 font-mono mb-6">
          Disponible para Android 11+, iOS (PWA Web) y Navegadores Modernos
        </p>

        {/* QR Code Graphic Container */}
        <div className="p-4 bg-white rounded-2xl inline-block shadow-md mb-6">
          <img
            src="https://api.qrserver.com/v1/create-qr-code/?size=160x160&data=https://habitanexus.com/app"
            alt="Código QR de Descarga"
            className="w-40 h-40"
          />
          <span className="text-[10px] font-mono text-slate-700 block mt-2 font-bold">
            ESCANEA CON TU MÓVIL
          </span>
        </div>

        <div className="space-y-2 text-xs font-mono">
          <div
            className={`p-3 rounded-xl border flex items-center gap-2 text-left ${
              isDark ? 'border-teal-500/20 bg-teal-500/5' : 'border-emerald-200 bg-emerald-50'
            }`}
          >
            <span className="material-symbols-outlined text-teal-400 text-base">security</span>
            <span>Instalación directa con certificado SSL y biometría local.</span>
          </div>
        </div>

        <div className="mt-6 flex justify-center">
          <button
            onClick={() => {
              alert('Descargando archivo HabitaNexus-2025.apk para Android.');
              onClose();
            }}
            className={`w-full py-3 rounded-full text-xs font-mono font-bold uppercase tracking-wider cursor-pointer ${
              isDark ? 'bg-teal-400 text-slate-950 hover:bg-teal-300' : 'bg-emerald-600 text-white hover:bg-emerald-700'
            }`}
          >
            Descargar APK Directo
          </button>
        </div>
      </div>
    </div>
  );
};

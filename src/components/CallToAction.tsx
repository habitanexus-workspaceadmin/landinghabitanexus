import React from 'react';
import { ThemeMode } from '../types';

interface CallToActionProps {
  theme: ThemeMode;
  onOpenAppModal: () => void;
  onOpenOwnerPortal: () => void;
}

export const CallToAction: React.FC<CallToActionProps> = ({
  theme,
  onOpenAppModal,
  onOpenOwnerPortal,
}) => {
  const isDark = theme === 'dark';

  return (
    <section className="py-24 relative overflow-hidden transition-colors duration-500">
      <div className="max-w-7xl mx-auto px-6 sm:px-10">
        <div
          className={`rounded-3xl p-10 sm:p-20 text-center relative overflow-hidden shadow-2xl transition-colors duration-500 ${
            isDark
              ? 'hairline-border-dark bg-gradient-to-tr from-[#0B132B] via-[#111C36] to-[#1c183d]'
              : 'border border-slate-200 bg-white shadow-xl'
          }`}
        >
          {/* Ambient glow effects */}
          <div
            className={`absolute -top-32 -left-32 w-80 h-80 rounded-full blur-3xl pointer-events-none ${
              isDark ? 'bg-teal-400/15' : 'bg-emerald-100/60'
            }`}
          />
          <div
            className={`absolute -bottom-32 -right-32 w-80 h-80 rounded-full blur-3xl pointer-events-none ${
              isDark ? 'bg-purple-600/25' : 'bg-purple-100/60'
            }`}
          />

          <div className="relative z-10 max-w-3xl mx-auto">
            <span
              className={`text-xs font-mono uppercase tracking-widest mb-4 block font-bold ${
                isDark ? 'text-teal-400' : 'text-emerald-700'
              }`}
            >
              Comienza hoy sin fricción
            </span>

            <h2
              className={`font-display text-4xl sm:text-6xl font-light tracking-tighter leading-tight mb-6 ${
                isDark ? 'text-white' : 'text-[#0B132B]'
              }`}
            >
              Eleva el estándar de tus contratos residenciales.
            </h2>

            <p
              className={`text-base sm:text-lg font-light leading-relaxed mb-10 ${
                isDark ? 'text-[#94A3B8]' : 'text-[#475569]'
              }`}
            >
              Disponible para inquilinos, arrendadores individuales y administradores de
              condominios en todo Costa Rica y Latinoamérica.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <button
                type="button"
                onClick={onOpenAppModal}
                className={`w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full font-mono text-xs uppercase tracking-widest font-bold transition-all shadow-xl cursor-pointer ${
                  isDark
                    ? 'bg-white text-[#0B132B] hover:bg-slate-100 hover:scale-105'
                    : 'bg-[#0B132B] text-white hover:bg-slate-800 hover:scale-105'
                }`}
              >
                <span className="material-symbols-outlined text-lg">android</span>
                <span>Descargar App Android &amp; Web</span>
              </button>

              <button
                type="button"
                onClick={onOpenOwnerPortal}
                className={`w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full font-mono text-xs uppercase tracking-widest transition-all cursor-pointer ${
                  isDark
                    ? 'hairline-border-dark text-white hover:bg-white/5'
                    : 'border border-slate-300 text-[#0B132B] hover:bg-slate-50 font-semibold'
                }`}
              >
                <span
                  className={`material-symbols-outlined text-lg ${
                    isDark ? 'text-teal-400' : 'text-emerald-700'
                  }`}
                >
                  apartment
                </span>
                <span>Portal Propietarios</span>
              </button>
            </div>

            <div
              className={`mt-12 flex flex-wrap items-center justify-center gap-6 text-[11px] font-mono ${
                isDark ? 'text-[#64748B]' : 'text-[#64748B] font-medium'
              }`}
            >
              <span className="flex items-center gap-1.5">
                <span
                  className={`w-1.5 h-1.5 rounded-full ${
                    isDark ? 'bg-teal-400' : 'bg-emerald-500'
                  }`}
                />{' '}
                PROTOCOLO TLS 1.3
              </span>
              <span>•</span>
              <span>LEY N° 7527 CR</span>
              <span>•</span>
              <span>SOPORTE FIDUCIARIO 24/7</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

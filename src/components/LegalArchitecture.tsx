import React from 'react';
import { ThemeMode } from '../types';

interface LegalArchitectureProps {
  theme: ThemeMode;
  onOpenContractSample?: () => void;
}

export const LegalArchitecture: React.FC<LegalArchitectureProps> = ({
  theme,
  onOpenContractSample,
}) => {
  const isDark = theme === 'dark';

  return (
    <section
      id="arquitectura"
      className={`py-28 relative transition-colors duration-500 ${
        isDark ? 'bg-[#0B132B]' : 'bg-[#F8FAFC]'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8">
          <div>
            <span
              className={`text-xs font-mono uppercase tracking-widest ${
                isDark ? 'text-teal-400' : 'text-emerald-700 font-semibold'
              }`}
            >
              04 / Certeza Jurídica
            </span>
            <h2
              className={`font-display text-4xl sm:text-5xl font-light tracking-tighter mt-3 ${
                isDark ? 'text-white' : 'text-[#0B132B]'
              }`}
            >
              Infraestructura Financiera y Legal.
            </h2>
          </div>
          <p
            className={`text-sm font-light max-w-md ${
              isDark ? 'text-[#94A3B8]' : 'text-[#475569]'
            }`}
          >
            Diseñado expresamente para resolver las particularidades del marco legal y bancario
            costarricense y regional.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Pillar 1 */}
          <div
            onClick={onOpenContractSample}
            className={`p-8 rounded-3xl transition-all duration-300 cursor-pointer ${
              isDark
                ? 'hairline-border-dark bg-[#0B132B]/50 hover:bg-[#111C36] hover:border-teal-400/50'
                : 'border border-slate-200 bg-white shadow-sm hover:shadow-md hover:border-emerald-400'
            }`}
          >
            <div
              className={`w-12 h-12 rounded-2xl flex items-center justify-center mb-6 ${
                isDark
                  ? 'bg-teal-400/15 text-teal-400'
                  : 'bg-emerald-50 text-emerald-700 border border-emerald-200'
              }`}
            >
              <span className="material-symbols-outlined text-2xl">gavel</span>
            </div>
            <h3
              className={`text-lg font-semibold mb-2 ${
                isDark ? 'text-white' : 'text-[#0B132B]'
              }`}
            >
              Ley N° 7527 de Costa Rica
            </h3>
            <p
              className={`text-xs leading-relaxed ${
                isDark ? 'text-[#8E9CB2]' : 'text-[#64748B]'
              }`}
            >
              Contratos estructurados en estricta conformidad con la Ley General de Arrendamientos
              Urbanos y Suburbanos, garantizando ejecutividad judicial inmediata en caso de
              incumplimiento.
            </p>
          </div>

          {/* Pillar 2 */}
          <div
            className={`p-8 rounded-3xl transition-all duration-300 ${
              isDark
                ? 'hairline-border-dark bg-[#0B132B]/50 hover:bg-[#111C36] hover:border-amber-400/50'
                : 'border border-slate-200 bg-white shadow-sm hover:shadow-md hover:border-amber-400'
            }`}
          >
            <div
              className={`w-12 h-12 rounded-2xl flex items-center justify-center mb-6 ${
                isDark
                  ? 'bg-amber-500/15 text-amber-400'
                  : 'bg-amber-50 text-amber-700 border border-amber-200'
              }`}
            >
              <span className="material-symbols-outlined text-2xl">account_balance</span>
            </div>
            <h3
              className={`text-lg font-semibold mb-2 ${
                isDark ? 'text-white' : 'text-[#0B132B]'
              }`}
            >
              Cero Traba SINPE de Alto Monto
            </h3>
            <p
              className={`text-xs leading-relaxed ${
                isDark ? 'text-[#8E9CB2]' : 'text-[#64748B]'
              }`}
            >
              Superamos los topes de ¢100,000 mediante pasarelas fiduciarias directas con
              liquidación interbancaria nacional e internacional para pagos totales del depósito y
              primer canon.
            </p>
          </div>

          {/* Pillar 3 */}
          <div
            onClick={onOpenContractSample}
            className={`p-8 rounded-3xl transition-all duration-300 cursor-pointer ${
              isDark
                ? 'hairline-border-dark bg-[#0B132B]/50 hover:bg-[#111C36] hover:border-purple-400/50'
                : 'border border-slate-200 bg-white shadow-sm hover:shadow-md hover:border-purple-400'
            }`}
          >
            <div
              className={`w-12 h-12 rounded-2xl flex items-center justify-center mb-6 ${
                isDark
                  ? 'bg-purple-500/15 text-purple-400'
                  : 'bg-purple-50 text-[#7C3AED] border border-purple-200'
              }`}
            >
              <span className="material-symbols-outlined text-2xl">draw</span>
            </div>
            <h3
              className={`text-lg font-semibold mb-2 ${
                isDark ? 'text-white' : 'text-[#0B132B]'
              }`}
            >
              Firma Digital &amp; Biometría
            </h3>
            <p
              className={`text-xs leading-relaxed ${
                isDark ? 'text-[#8E9CB2]' : 'text-[#64748B]'
              }`}
            >
              Soporte nativo para firma digital certificada y validación biométrica de identidad
              contra padrón civil, eliminando trámites notariales presenciales y costos notariales
              excesivos.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

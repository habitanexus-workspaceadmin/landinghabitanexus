import React from 'react';
import { ThemeMode } from '../types';

interface ManifestoProps {
  theme: ThemeMode;
}

export const Manifesto: React.FC<ManifestoProps> = ({ theme }) => {
  const isDark = theme === 'dark';

  return (
    <section
      id="manifiesto"
      className={`py-28 relative border-t transition-colors duration-500 ${
        isDark
          ? 'hairline-b-dark border-teal-500/15 bg-black/25'
          : 'hairline-b-light border-slate-200 bg-slate-100/70'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 mb-20">
          <div className="lg:col-span-5">
            <span
              className={`text-xs font-mono uppercase tracking-widest ${
                isDark ? 'text-teal-400' : 'text-emerald-700 font-semibold'
              }`}
            >
              01 / Manifiesto Operativo
            </span>
            <h2
              className={`font-display text-4xl sm:text-5xl font-light tracking-tighter mt-3 leading-[1.05] ${
                isDark ? 'text-white' : 'text-[#0B132B]'
              }`}
            >
              La ineficiencia del alquiler tradicional es obsoleta.
            </h2>
          </div>
          <div className="lg:col-span-7 flex flex-col justify-end">
            <p
              className={`text-lg font-light leading-relaxed ${
                isDark ? 'text-[#94A3B8]' : 'text-[#475569]'
              }`}
            >
              Durante décadas, alquilar en Costa Rica y América Latina ha implicado desconfianza
              estructural: ofertas fragmentadas en mensajerías informales, falta de certeza
              jurídica al pagar y límites bancarios arbitrarios. HabitaNexus redefine la
              arquitectura de arrendamiento bajo rigor de ingeniería.
            </p>
          </div>
        </div>

        {/* Comparative Editorial Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Red Card / Traditional */}
          <div
            className={`rounded-3xl p-8 sm:p-10 flex flex-col justify-between transition-colors duration-500 ${
              isDark
                ? 'hairline-border-dark bg-[#0B132B]/50'
                : 'border border-red-200/90 bg-white shadow-md'
            }`}
          >
            <div>
              <div
                className={`flex items-center justify-between pb-6 mb-6 border-b ${
                  isDark ? 'border-rose-500/20' : 'border-rose-100'
                }`}
              >
                <span
                  className={`text-xs font-mono tracking-widest uppercase font-bold ${
                    isDark ? 'text-rose-400' : 'text-rose-700'
                  }`}
                >
                  Paradigma Tradicional
                </span>
                <span
                  className={`text-[10px] font-mono px-2.5 py-0.5 rounded uppercase font-semibold ${
                    isDark
                      ? 'bg-rose-500/10 text-rose-400 border border-rose-500/30'
                      : 'bg-rose-50 text-rose-700 border border-rose-200'
                  }`}
                >
                  Sin Respaldo
                </span>
              </div>

              <ul className="space-y-6">
                <li className="flex items-start gap-4">
                  <span
                    className={`font-mono text-sm mt-0.5 font-bold ${
                      isDark ? 'text-rose-400' : 'text-rose-600'
                    }`}
                  >
                    01.
                  </span>
                  <div>
                    <h4
                      className={`text-base font-semibold ${
                        isDark ? 'text-white' : 'text-[#0B132B]'
                      }`}
                    >
                      Negociación Caótica y Desestructurada
                    </h4>
                    <p
                      className={`text-xs mt-1 leading-relaxed ${
                        isDark ? 'text-[#8E9CB2]' : 'text-[#64748B]'
                      }`}
                    >
                      Docenas de audios y capturas de pantalla de WhatsApp sin validez contractual ni
                      cronología verificable.
                    </p>
                  </div>
                </li>

                <li className="flex items-start gap-4">
                  <span
                    className={`font-mono text-sm mt-0.5 font-bold ${
                      isDark ? 'text-rose-400' : 'text-rose-600'
                    }`}
                  >
                    02.
                  </span>
                  <div>
                    <h4
                      className={`text-base font-semibold ${
                        isDark ? 'text-white' : 'text-[#0B132B]'
                      }`}
                    >
                      Trabas de Depósito por Topes SINPE Móvil
                    </h4>
                    <p
                      className={`text-xs mt-1 leading-relaxed ${
                        isDark ? 'text-[#8E9CB2]' : 'text-[#64748B]'
                      }`}
                    >
                      Límites diarios de ¢100,000 colones obligan a fraccionar pagos por semanas,
                      exponiendo al inquilino al riesgo de estafa.
                    </p>
                  </div>
                </li>

                <li className="flex items-start gap-4">
                  <span
                    className={`font-mono text-sm mt-0.5 font-bold ${
                      isDark ? 'text-rose-400' : 'text-rose-600'
                    }`}
                  >
                    03.
                  </span>
                  <div>
                    <h4
                      className={`text-base font-semibold ${
                        isDark ? 'text-white' : 'text-[#0B132B]'
                      }`}
                    >
                      Contratos en PDF Estáticos y Disputas de Desalojo
                    </h4>
                    <p
                      className={`text-xs mt-1 leading-relaxed ${
                        isDark ? 'text-[#8E9CB2]' : 'text-[#64748B]'
                      }`}
                    >
                      Formatos copiados de internet sin cláusulas de arbitraje ágil bajo la Ley N°
                      7527 de Arrendamientos Urbanos.
                    </p>
                  </div>
                </li>
              </ul>
            </div>

            <div
              className={`pt-8 mt-8 border-t text-[11px] font-mono ${
                isDark
                  ? 'border-rose-500/20 text-rose-400/80'
                  : 'border-rose-200 text-rose-700 font-semibold'
              }`}
            >
              MÉTRICA TRADICIONAL: 25 DÍAS DE FRICCIÓN • 35% TASA DE ABANDONO CONTRACTUAL
            </div>
          </div>

          {/* Teal Card / HabitaNexus Protocol */}
          <div
            className={`rounded-3xl p-8 sm:p-10 flex flex-col justify-between shadow-2xl relative overflow-hidden transition-colors duration-500 ${
              isDark
                ? 'hairline-border-dark bg-gradient-to-b from-[#111C36] to-[#0B132B]'
                : 'border border-emerald-300 bg-white shadow-lg'
            }`}
          >
            <div
              className={`absolute top-0 right-0 w-64 h-64 blur-3xl pointer-events-none ${
                isDark ? 'bg-teal-400/10' : 'bg-emerald-100/50'
              }`}
            />

            <div>
              <div
                className={`flex items-center justify-between pb-6 mb-6 border-b ${
                  isDark ? 'border-teal-500/20' : 'border-emerald-100'
                }`}
              >
                <span
                  className={`text-xs font-mono tracking-widest uppercase font-bold ${
                    isDark ? 'text-teal-400' : 'text-emerald-700'
                  }`}
                >
                  Protocolo HabitaNexus
                </span>
                <span
                  className={`text-[10px] font-mono px-2.5 py-0.5 rounded uppercase font-bold ${
                    isDark
                      ? 'bg-teal-400/20 text-teal-300 border border-teal-400/40'
                      : 'bg-emerald-100 text-emerald-800 border border-emerald-300'
                  }`}
                >
                  Standard 2025
                </span>
              </div>

              <ul className="space-y-6">
                <li className="flex items-start gap-4">
                  <span
                    className={`font-mono text-sm mt-0.5 font-bold ${
                      isDark ? 'text-teal-400' : 'text-emerald-600'
                    }`}
                  >
                    01.
                  </span>
                  <div>
                    <h4
                      className={`text-base font-semibold ${
                        isDark ? 'text-white' : 'text-[#0B132B]'
                      }`}
                    >
                      Acuerdos Asíncronos Guiados por Parámetros
                    </h4>
                    <p
                      className={`text-xs mt-1 leading-relaxed ${
                        isDark ? 'text-[#8E9CB2]' : 'text-[#64748B]'
                      }`}
                    >
                      Contraofertas formales en minutos con rangos preaprobados por el propietario y
                      aceptación digital con validez probatoria.
                    </p>
                  </div>
                </li>

                <li className="flex items-start gap-4">
                  <span
                    className={`font-mono text-sm mt-0.5 font-bold ${
                      isDark ? 'text-teal-400' : 'text-emerald-600'
                    }`}
                  >
                    02.
                  </span>
                  <div>
                    <h4
                      className={`text-base font-semibold ${
                        isDark ? 'text-white' : 'text-[#0B132B]'
                      }`}
                    >
                      Depósito Blindado en Escrow Interbancario
                    </h4>
                    <p
                      className={`text-xs mt-1 leading-relaxed ${
                        isDark ? 'text-[#8E9CB2]' : 'text-[#64748B]'
                      }`}
                    >
                      Transferencias de alto monto sin restricciones diarias. Los fondos sólo se
                      transfieren tras verificar la entrega física de llaves.
                    </p>
                  </div>
                </li>

                <li className="flex items-start gap-4">
                  <span
                    className={`font-mono text-sm mt-0.5 font-bold ${
                      isDark ? 'text-teal-400' : 'text-emerald-600'
                    }`}
                  >
                    03.
                  </span>
                  <div>
                    <h4
                      className={`text-base font-semibold ${
                        isDark ? 'text-white' : 'text-[#0B132B]'
                      }`}
                    >
                      Firma Biométrica y Cobro por Mes Habitado
                    </h4>
                    <p
                      className={`text-xs mt-1 leading-relaxed ${
                        isDark ? 'text-[#8E9CB2]' : 'text-[#64748B]'
                      }`}
                    >
                      Contratos automatizados con firma electrónica certificada y prorrateo exacto
                      del tiempo de ocupación efectivo.
                    </p>
                  </div>
                </li>
              </ul>
            </div>

            <div
              className={`pt-8 mt-8 border-t text-[11px] font-mono font-semibold ${
                isDark
                  ? 'border-teal-500/20 text-teal-400'
                  : 'border-emerald-200 text-emerald-700'
              }`}
            >
              ESTÁNDAR HABITANEXUS: CIERRE EN 72H • 100% CUSTODIA FIDUCIARIA BLINDADA
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

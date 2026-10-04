import React, { useState } from 'react';
import { ThemeMode } from '../types';

interface SimulatorProps {
  theme: ThemeMode;
  onEmitOffer: (details: {
    baseRent: number;
    term: number;
    services: { water: boolean; internet: boolean; condo: boolean };
    totalMonthly: number;
    escrowDeposit: number;
    currency: 'USD' | 'CRC';
  }) => void;
}

export const Simulator: React.FC<SimulatorProps> = ({ theme, onEmitOffer }) => {
  const isDark = theme === 'dark';

  const [baseRent, setBaseRent] = useState<number>(750);
  const [contractTerm, setContractTerm] = useState<12 | 24>(12);
  const [currency, setCurrency] = useState<'USD' | 'CRC'>('USD');
  const [services, setServices] = useState({
    water: false,
    internet: false,
    condo: true,
  });

  const exchangeRate = 520; // USD to CRC

  // Calculation
  const waterFee = services.water ? 15 : 0;
  const internetFee = services.internet ? 35 : 0;
  const condoFee = services.condo ? 50 : 0;
  const totalServices = waterFee + internetFee + condoFee;

  const discount = contractTerm === 24 ? baseRent * 0.05 : 0;
  const totalMonthlyUSD = baseRent - discount + totalServices;
  const escrowDepositUSD = totalMonthlyUSD;

  const formatAmount = (valUSD: number) => {
    if (currency === 'CRC') {
      const valCRC = Math.round(valUSD * exchangeRate);
      return `₡${valCRC.toLocaleString()}`;
    }
    return `$${valUSD.toFixed(2)}`;
  };

  const handleEmit = () => {
    onEmitOffer({
      baseRent,
      term: contractTerm,
      services,
      totalMonthly: totalMonthlyUSD,
      escrowDeposit: escrowDepositUSD,
      currency,
    });
  };

  return (
    <section
      id="simulador"
      className={`py-28 border-t transition-colors duration-500 ${
        isDark
          ? 'hairline-b-dark border-teal-500/15 bg-[#070e20]'
          : 'hairline-b-light border-slate-200 bg-slate-100/70'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="text-left max-w-2xl">
            <span
              className={`text-xs font-mono uppercase tracking-widest ${
                isDark ? 'text-teal-400' : 'text-emerald-700 font-semibold'
              }`}
            >
              03 / Herramienta de Modelado
            </span>
            <h2
              className={`font-display text-4xl sm:text-5xl font-light tracking-tighter mt-3 ${
                isDark ? 'text-white' : 'text-[#0B132B]'
              }`}
            >
              Simulador Dinámico de Canon &amp; Escrow.
            </h2>
            <p
              className={`text-base font-light mt-3 ${
                isDark ? 'text-[#94A3B8]' : 'text-[#475569]'
              }`}
            >
              Configura los parámetros del acuerdo para calcular el desembolso mensual transparente
              y la custodia fiduciaria requerida.
            </p>
          </div>

          {/* Currency Toggle */}
          <div
            className={`flex items-center gap-1 p-1 rounded-full border text-xs font-mono self-start md:self-end ${
              isDark
                ? 'bg-slate-900 border-teal-500/20 text-slate-300'
                : 'bg-white border-slate-300 text-slate-700 shadow-sm'
            }`}
          >
            <button
              onClick={() => setCurrency('USD')}
              className={`px-3 py-1.5 rounded-full transition-all cursor-pointer font-bold ${
                currency === 'USD'
                  ? isDark
                    ? 'bg-teal-400 text-slate-950 shadow-sm'
                    : 'bg-emerald-600 text-white shadow-sm'
                  : 'hover:text-teal-400'
              }`}
            >
              USD ($)
            </button>
            <button
              onClick={() => setCurrency('CRC')}
              className={`px-3 py-1.5 rounded-full transition-all cursor-pointer font-bold ${
                currency === 'CRC'
                  ? isDark
                    ? 'bg-teal-400 text-slate-950 shadow-sm'
                    : 'bg-emerald-600 text-white shadow-sm'
                  : 'hover:text-teal-400'
              }`}
            >
              CRC (₡ Colones)
            </button>
          </div>
        </div>

        {/* Main Swiss Simulator Box */}
        <div
          className={`rounded-3xl p-8 sm:p-12 shadow-2xl transition-colors duration-500 ${
            isDark
              ? 'hairline-border-dark bg-[#0B132B]'
              : 'border border-slate-200 bg-white shadow-xl'
          }`}
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Controller Column */}
            <div className="lg:col-span-7 space-y-8">
              {/* Rent Range Slider */}
              <div>
                <div className="flex justify-between items-baseline mb-3">
                  <label
                    htmlFor="rentaRange"
                    className={`text-xs font-mono uppercase tracking-wider font-semibold ${
                      isDark ? 'text-[#9FAEC6]' : 'text-[#475569]'
                    }`}
                  >
                    Canon Base Estimado ({currency})
                  </label>
                  <span
                    className={`font-mono text-2xl font-bold ${
                      isDark ? 'text-teal-400' : 'text-emerald-700'
                    }`}
                  >
                    {formatAmount(baseRent)} / mes
                  </span>
                </div>
                <input
                  id="rentaRange"
                  type="range"
                  min="400"
                  max="2500"
                  step="25"
                  value={baseRent}
                  onChange={(e) => setBaseRent(Number(e.target.value))}
                  className={`w-full h-2 rounded-lg appearance-none cursor-pointer transition-all ${
                    isDark
                      ? 'bg-[#1B294B] accent-teal-400'
                      : 'bg-slate-200 accent-emerald-600'
                  }`}
                />
                <div
                  className={`flex justify-between text-[11px] font-mono mt-2 font-medium ${
                    isDark ? 'text-[#64748B]' : 'text-[#64748B]'
                  }`}
                >
                  <span>{currency === 'USD' ? '$400 MIN' : '₡208,000 MIN'}</span>
                  <span>{currency === 'USD' ? '$1,400 PROMEDIO SJ' : '₡728,000 PROMEDIO SJ'}</span>
                  <span>{currency === 'USD' ? '$2,500 PREMIUM' : '₡1,300,000 PREMIUM'}</span>
                </div>
              </div>

              {/* Term Selectors */}
              <div>
                <label
                  className={`block text-xs font-mono uppercase tracking-wider mb-3 font-semibold ${
                    isDark ? 'text-[#9FAEC6]' : 'text-[#475569]'
                  }`}
                >
                  Plazo del Compromiso Contractual
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <button
                    type="button"
                    onClick={() => setContractTerm(12)}
                    className={`py-3 px-5 rounded-2xl font-mono text-xs font-semibold flex items-center justify-between transition-all cursor-pointer ${
                      contractTerm === 12
                        ? isDark
                          ? 'border border-teal-400 bg-teal-400/15 text-white shadow-sm'
                          : 'border-2 border-emerald-600 bg-emerald-50 text-[#0B132B] shadow-sm'
                        : isDark
                        ? 'hairline-border-dark bg-[#070e20] text-[#8E9CB2] hover:border-teal-400/50'
                        : 'border border-slate-300 bg-white text-[#64748B] hover:border-emerald-500'
                    }`}
                  >
                    <span>12 Meses (Estándar)</span>
                    <span
                      className={`w-2 h-2 rounded-full ${
                        contractTerm === 12
                          ? isDark
                            ? 'bg-teal-400'
                            : 'bg-emerald-600'
                          : isDark
                          ? 'bg-transparent border border-[#8E9CB2]'
                          : 'bg-transparent border border-slate-400'
                      }`}
                    />
                  </button>

                  <button
                    type="button"
                    onClick={() => setContractTerm(24)}
                    className={`py-3 px-5 rounded-2xl font-mono text-xs font-semibold flex items-center justify-between transition-all cursor-pointer ${
                      contractTerm === 24
                        ? isDark
                          ? 'border border-teal-400 bg-teal-400/15 text-white shadow-sm'
                          : 'border-2 border-emerald-600 bg-emerald-50 text-[#0B132B] shadow-sm'
                        : isDark
                        ? 'hairline-border-dark bg-[#070e20] text-[#8E9CB2] hover:border-teal-400/50'
                        : 'border border-slate-300 bg-white text-[#64748B] hover:border-emerald-500'
                    }`}
                  >
                    <span>24 Meses (-5% Incentivo)</span>
                    <span
                      className={`w-2 h-2 rounded-full ${
                        contractTerm === 24
                          ? isDark
                            ? 'bg-teal-400'
                            : 'bg-emerald-600'
                          : isDark
                          ? 'bg-transparent border border-[#8E9CB2]'
                          : 'bg-transparent border border-slate-400'
                      }`}
                    />
                  </button>
                </div>
              </div>

              {/* Add-on Services Multi-Checks */}
              <div>
                <label
                  className={`block text-xs font-mono uppercase tracking-wider mb-3 font-semibold ${
                    isDark ? 'text-[#9FAEC6]' : 'text-[#475569]'
                  }`}
                >
                  Servicios Paquetizados en el Canon
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  <label
                    className={`flex items-center gap-3 p-3.5 rounded-2xl cursor-pointer transition-all ${
                      isDark
                        ? 'hairline-border-dark bg-white/[0.02] hover:bg-white/[0.05]'
                        : 'border border-slate-200 bg-slate-50 hover:bg-slate-100'
                    }`}
                  >
                    <input
                      type="checkbox"
                      checked={services.water}
                      onChange={(e) =>
                        setServices({ ...services, water: e.target.checked })
                      }
                      className="rounded text-teal-500 focus:ring-0 w-4 h-4 cursor-pointer"
                    />
                    <span
                      className={`text-xs ${
                        isDark ? 'text-white' : 'text-[#0B132B] font-medium'
                      }`}
                    >
                      Agua (+{formatAmount(15)})
                    </span>
                  </label>

                  <label
                    className={`flex items-center gap-3 p-3.5 rounded-2xl cursor-pointer transition-all ${
                      isDark
                        ? 'hairline-border-dark bg-white/[0.02] hover:bg-white/[0.05]'
                        : 'border border-slate-200 bg-slate-50 hover:bg-slate-100'
                    }`}
                  >
                    <input
                      type="checkbox"
                      checked={services.internet}
                      onChange={(e) =>
                        setServices({ ...services, internet: e.target.checked })
                      }
                      className="rounded text-teal-500 focus:ring-0 w-4 h-4 cursor-pointer"
                    />
                    <span
                      className={`text-xs ${
                        isDark ? 'text-white' : 'text-[#0B132B] font-medium'
                      }`}
                    >
                      Fibra Óptica (+{formatAmount(35)})
                    </span>
                  </label>

                  <label
                    className={`flex items-center gap-3 p-3.5 rounded-2xl cursor-pointer transition-all ${
                      services.condo
                        ? isDark
                          ? 'border border-teal-400/40 bg-teal-400/5'
                          : 'border border-emerald-300 bg-emerald-50/50'
                        : isDark
                        ? 'hairline-border-dark bg-white/[0.02]'
                        : 'border border-slate-200 bg-slate-50'
                    }`}
                  >
                    <input
                      type="checkbox"
                      checked={services.condo}
                      onChange={(e) =>
                        setServices({ ...services, condo: e.target.checked })
                      }
                      className="rounded text-teal-500 focus:ring-0 w-4 h-4 cursor-pointer"
                    />
                    <span
                      className={`text-xs ${
                        isDark ? 'text-white font-medium' : 'text-[#0B132B] font-semibold'
                      }`}
                    >
                      Cuota Condom (+{formatAmount(50)})
                    </span>
                  </label>
                </div>
              </div>
            </div>

            {/* Real-Time Calculation Ticket Output */}
            <div
              className={`lg:col-span-5 rounded-3xl p-7 sm:p-8 flex flex-col justify-between transition-colors duration-500 ${
                isDark
                  ? 'hairline-border-dark bg-[#070e20]'
                  : 'border border-slate-200 bg-slate-50 shadow-inner'
              }`}
            >
              <div>
                <div
                  className={`flex items-center justify-between pb-4 mb-6 border-b ${
                    isDark ? 'border-teal-500/15' : 'border-slate-200'
                  }`}
                >
                  <span
                    className={`text-[11px] font-mono uppercase tracking-widest font-semibold ${
                      isDark ? 'text-[#8E9CB2]' : 'text-[#64748B]'
                    }`}
                  >
                    DESGLOSE DEL CONTRATO
                  </span>
                  <span
                    className={`text-[10px] font-mono px-2 py-0.5 rounded font-bold ${
                      isDark
                        ? 'bg-teal-400/10 text-teal-400 border border-teal-400/20'
                        : 'bg-emerald-100 text-emerald-800 border border-emerald-200'
                    }`}
                  >
                    AUDITADO
                  </span>
                </div>

                <div className="space-y-3.5 text-xs font-mono">
                  <div
                    className={`flex justify-between ${
                      isDark ? 'text-[#8E9CB2]' : 'text-[#64748B]'
                    }`}
                  >
                    <span>Canon base ofertado:</span>
                    <span
                      className={`font-semibold ${
                        isDark ? 'text-white' : 'text-[#0B132B]'
                      }`}
                    >
                      {formatAmount(baseRent)}
                    </span>
                  </div>

                  <div
                    className={`flex justify-between ${
                      isDark ? 'text-[#8E9CB2]' : 'text-[#64748B]'
                    }`}
                  >
                    <span>Servicios paquetizados:</span>
                    <span
                      className={`font-semibold ${
                        isDark ? 'text-white' : 'text-[#0B132B]'
                      }`}
                    >
                      +{formatAmount(totalServices)}
                    </span>
                  </div>

                  <div
                    className={`flex justify-between ${
                      isDark ? 'text-[#8E9CB2]' : 'text-[#64748B]'
                    }`}
                  >
                    <span>Incentivo plazo extendido:</span>
                    <span
                      className={`font-semibold ${
                        discount > 0
                          ? isDark
                            ? 'text-teal-400'
                            : 'text-emerald-700'
                          : isDark
                          ? 'text-slate-400'
                          : 'text-slate-500'
                      }`}
                    >
                      {discount > 0 ? `-${formatAmount(discount)}` : formatAmount(0)}
                    </span>
                  </div>

                  <div
                    className={`pt-4 border-t flex justify-between items-baseline ${
                      isDark ? 'border-teal-500/15' : 'border-slate-200'
                    }`}
                  >
                    <span
                      className={`text-xs uppercase font-bold ${
                        isDark ? 'text-white' : 'text-[#0B132B]'
                      }`}
                    >
                      Canon Mensual Consolidado:
                    </span>
                    <span
                      className={`text-2xl font-bold font-mono ${
                        isDark ? 'text-teal-400' : 'text-emerald-700'
                      }`}
                    >
                      {formatAmount(totalMonthlyUSD)}
                    </span>
                  </div>
                </div>

                {/* Escrow Guarantee Box */}
                <div
                  className={`mt-8 p-4 rounded-2xl ${
                    isDark
                      ? 'bg-amber-500/10 border border-amber-500/30'
                      : 'bg-amber-50 border border-amber-300'
                  }`}
                >
                  <div className="flex items-center justify-between mb-1">
                    <span
                      className={`text-xs font-mono uppercase tracking-wider font-bold flex items-center gap-1.5 ${
                        isDark ? 'text-amber-400' : 'text-amber-900'
                      }`}
                    >
                      <span className="material-symbols-outlined text-sm">lock</span>
                      Depósito en Custodia Escrow:
                    </span>
                    <span
                      className={`font-mono text-sm font-bold ${
                        isDark ? 'text-amber-400' : 'text-amber-900'
                      }`}
                    >
                      {formatAmount(escrowDepositUSD)}
                    </span>
                  </div>
                  <p
                    className={`text-[11px] mt-1 leading-relaxed ${
                      isDark ? 'text-[#8E9CB2]' : 'text-[#64748B]'
                    }`}
                  >
                    Fondos retenidos fiduciariamente hasta la validación de recepción conforme de
                    llaves e inventario.
                  </p>
                </div>
              </div>

              <button
                type="button"
                onClick={handleEmit}
                className={`mt-8 w-full py-4 px-6 rounded-full font-mono font-bold text-xs uppercase tracking-widest transition-all cursor-pointer flex items-center justify-center gap-2 ${
                  isDark
                    ? 'bg-teal-400 text-[#0B132B] hover:shadow-[0_0_25px_rgba(45,212,191,0.4)] hover:bg-teal-300'
                    : 'bg-emerald-600 text-white hover:bg-emerald-700 shadow-md'
                }`}
              >
                <span>Emitir Oferta Digital Vinculante</span>
                <span className="material-symbols-outlined text-base">arrow_forward</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

import React from 'react';
import { Property, ThemeMode } from '../types';

interface HeroProps {
  theme: ThemeMode;
  selectedProperty: Property;
  onSelectProperty: (property: Property) => void;
  properties: Property[];
  onOpenBiometric: () => void;
  onOpenAudit: () => void;
  onScrollToSimulator: () => void;
}

export const Hero: React.FC<HeroProps> = ({
  theme,
  selectedProperty,
  onSelectProperty,
  properties,
  onOpenBiometric,
  onOpenAudit,
  onScrollToSimulator,
}) => {
  const isDark = theme === 'dark';

  return (
    <section className="relative pt-12 pb-24 lg:pt-24 lg:pb-36 z-10 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 sm:px-10">
        {/* Micro Headline Bar */}
        <div className="flex items-center gap-3 mb-8">
          <span
            className={`px-3 py-1 text-[11px] font-mono font-semibold rounded-full tracking-wider uppercase ${
              isDark
                ? 'bg-teal-400/10 text-teal-400 hairline-border-dark'
                : 'bg-emerald-50 text-emerald-800 border border-emerald-200 shadow-sm'
            }`}
          >
            PropTech Protocol CR-7527
          </span>
          <span
            className={`h-px w-12 ${
              isDark ? 'bg-teal-400/30' : 'bg-emerald-600/40'
            }`}
          />
          <span
            className={`text-xs font-mono tracking-wider uppercase hidden sm:inline ${
              isDark ? 'text-[#8E9CB2]' : 'text-[#64748B] font-medium'
            }`}
          >
            Negociación fiduciaria sin intermediación opaca
          </span>
        </div>

        {/* Main Asymmetric Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-14 lg:gap-10 items-center">
          {/* Left: Monumental Typography */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            <h1
              className={`font-display text-5xl sm:text-6xl lg:text-7xl font-light tracking-tighter leading-[1.02] mb-8 ${
                isDark ? 'text-white' : 'text-[#0B132B]'
              }`}
            >
              El alquiler sin fricción.{' '}
              <br />
              <span
                className={`font-serif italic font-normal tracking-tight ${
                  isDark
                    ? 'editorial-gradient-text-dark'
                    : 'editorial-gradient-text-light'
                }`}
              >
                Acuerdos digitales con
              </span>
              <br />
              certeza fiduciaria.
            </h1>

            <p
              className={`text-lg sm:text-xl font-light leading-relaxed max-w-xl mb-10 ${
                isDark ? 'text-[#94A3B8]' : 'text-[#475569]'
              }`}
            >
              Sustituimos semanas de WhatsApps desordenados y contratos manuales con un sistema contractual asíncrono, cálculo de mes habitado y custodia{' '}
              <span
                className={`font-medium underline underline-offset-4 ${
                  isDark
                    ? 'text-white decoration-teal-400'
                    : 'text-[#0B132B] font-semibold decoration-emerald-500'
                }`}
              >
                Escrow irrevocable
              </span>
              .
            </p>

            {/* Action Duo */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto mb-16">
              <button
                onClick={onScrollToSimulator}
                className={`inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full text-xs font-mono uppercase tracking-widest font-bold transition-all cursor-pointer ${
                  isDark
                    ? 'text-[#0B132B] bg-teal-400 hover:shadow-[0_0_35px_rgba(45,212,191,0.45)] hover:bg-teal-300 hover:scale-[1.02]'
                    : 'text-white bg-emerald-600 hover:bg-emerald-700 shadow-lg shadow-emerald-500/20 hover:scale-[1.02]'
                }`}
              >
                <span>Iniciar Negociación</span>
                <span className="material-symbols-outlined text-base">north_east</span>
              </button>

              <button
                onClick={onOpenAudit}
                className={`inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full text-xs font-mono uppercase tracking-widest transition-all cursor-pointer ${
                  isDark
                    ? 'text-white hairline-border-dark bg-[#111C36]/40 hover:bg-white/5'
                    : 'text-[#0B132B] hairline-border-light bg-white hover:bg-slate-50 shadow-sm'
                }`}
              >
                <span
                  className={`material-symbols-outlined text-base ${
                    isDark ? 'text-teal-400' : 'text-emerald-600'
                  }`}
                >
                  tune
                </span>
                <span>Auditoría de Mercado</span>
              </button>
            </div>

            {/* Real Metric Swiss Tickers */}
            <div
              className={`w-full grid grid-cols-3 gap-6 pt-8 border-t ${
                isDark
                  ? 'hairline-b-dark border-teal-500/15'
                  : 'hairline-b-light border-slate-200'
              }`}
            >
              <div>
                <div
                  className={`font-display text-3xl sm:text-4xl font-extralight tracking-tighter ${
                    isDark ? 'text-white' : 'text-[#0B132B]'
                  }`}
                >
                  −70%
                </div>
                <div
                  className={`text-[11px] font-mono uppercase tracking-wider mt-1 font-semibold ${
                    isDark ? 'text-teal-400' : 'text-emerald-700'
                  }`}
                >
                  Tiempo de Cierre
                </div>
                <div className="text-[11px] text-[#64748B]">De 25 días a 72 horas</div>
              </div>

              <div>
                <div
                  className={`font-display text-3xl sm:text-4xl font-extralight tracking-tighter ${
                    isDark ? 'text-white' : 'text-[#0B132B]'
                  }`}
                >
                  +40%
                </div>
                <div
                  className={`text-[11px] font-mono uppercase tracking-wider mt-1 font-semibold ${
                    isDark ? 'text-teal-400' : 'text-emerald-700'
                  }`}
                >
                  Acuerdos Efectivos
                </div>
                <div className="text-[11px] text-[#64748B]">Menor tasa de abandono</div>
              </div>

              <div>
                <div
                  className={`font-display text-3xl sm:text-4xl font-extralight tracking-tighter ${
                    isDark ? 'text-white' : 'text-[#0B132B]'
                  }`}
                >
                  −90%
                </div>
                <div
                  className={`text-[11px] font-mono uppercase tracking-wider mt-1 font-semibold ${
                    isDark ? 'text-teal-400' : 'text-emerald-700'
                  }`}
                >
                  Riesgo Fraude
                </div>
                <div className="text-[11px] text-[#64748B]">Blindaje con Escrow CR</div>
              </div>
            </div>
          </div>

          {/* Right: Floating Negotiation Terminal (High-End Swiss Widget) */}
          <div className="lg:col-span-5 relative">
            {/* Outer Glass Card with Gradient Rim */}
            <div
              className={`rounded-3xl p-px shadow-2xl relative transition-all duration-500 ${
                isDark
                  ? 'bg-gradient-to-b from-teal-400/40 via-purple-600/30 to-white/5'
                  : 'bg-gradient-to-b from-emerald-500/20 via-slate-200 to-white shadow-xl'
              }`}
            >
              <div
                className={`rounded-[23px] p-6 sm:p-7 backdrop-blur-2xl transition-colors duration-500 ${
                  isDark
                    ? 'bg-[#0B132B]/95 text-white'
                    : 'bg-white text-[#0B132B] border border-slate-200'
                }`}
              >
                {/* Card Header with HTML image and property selector */}
                <div
                  className={`flex items-center justify-between pb-5 mb-6 border-b ${
                    isDark ? 'border-teal-500/15' : 'border-slate-200'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <img
                      src={selectedProperty.imageUrl}
                      alt={selectedProperty.name}
                      className="w-11 h-11 rounded-2xl object-cover border border-teal-500/30 shadow-sm"
                    />
                    <div>
                      <h3
                        className={`text-sm font-semibold tracking-tight ${
                          isDark ? 'text-white' : 'text-[#0B132B]'
                        }`}
                      >
                        {selectedProperty.name}
                      </h3>
                      <p
                        className={`text-[11px] font-mono ${
                          isDark ? 'text-[#8E9CB2]' : 'text-[#64748B]'
                        }`}
                      >
                        {selectedProperty.location} • ID: {selectedProperty.code}
                      </p>
                    </div>
                  </div>

                  <span
                    className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] font-mono uppercase tracking-wider ${
                      isDark
                        ? 'bg-emerald-500/15 text-emerald-400 hairline-border-dark border-emerald-500/30'
                        : 'bg-emerald-50 text-emerald-700 hairline-border-light border-emerald-300 font-semibold'
                    }`}
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
                    {selectedProperty.status}
                  </span>
                </div>

                {/* Stream of Negotiation Terms */}
                <div className="space-y-3.5 mb-6">
                  {/* Tenant Stage */}
                  <div
                    className={`p-4 rounded-2xl ${
                      isDark
                        ? 'bg-white/[0.03] hairline-border-dark'
                        : 'bg-slate-50 border border-slate-200'
                    }`}
                  >
                    <div
                      className={`flex items-center justify-between text-[11px] font-mono mb-1.5 ${
                        isDark ? 'text-[#8E9CB2]' : 'text-[#64748B] font-medium'
                      }`}
                    >
                      <span>INQUILINO REGISTRADO</span>
                      <span>{selectedProperty.initialOffer.timestamp}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span
                        className={`text-xs ${
                          isDark ? 'text-white' : 'text-[#334155] font-medium'
                        }`}
                      >
                        Oferta de Entrada
                      </span>
                      <span
                        className={`font-mono text-sm font-semibold ${
                          isDark ? 'text-white' : 'text-[#0B132B]'
                        }`}
                      >
                        ${selectedProperty.initialOffer.amount.toFixed(2)} / mes
                      </span>
                    </div>
                    <div
                      className={`text-[11px] mt-1 ${
                        isDark ? 'text-[#718096]' : 'text-[#64748B]'
                      }`}
                    >
                      {selectedProperty.initialOffer.termMonths} Meses •{' '}
                      {selectedProperty.initialOffer.petsAllowed
                        ? 'Mascota autorizada'
                        : 'Sin mascotas'}
                    </div>
                  </div>

                  {/* Landlord Counter-Offer */}
                  <div
                    className={`p-4 rounded-2xl relative ${
                      isDark
                        ? 'bg-teal-400/5 border border-teal-400/30'
                        : 'bg-emerald-50/70 border border-emerald-300'
                    }`}
                  >
                    <div
                      className={`flex items-center justify-between text-[11px] font-mono mb-1.5 ${
                        isDark
                          ? 'text-teal-400'
                          : 'text-emerald-800 font-semibold'
                      }`}
                    >
                      <span className="flex items-center gap-1.5">
                        <span
                          className={`w-1.5 h-1.5 rounded-full ${
                            isDark ? 'bg-teal-400' : 'bg-emerald-600'
                          }`}
                        />
                        CONTRAPROPUESTA ACORDADA
                      </span>
                      <span
                        className={`text-[10px] px-2 py-0.5 rounded font-bold uppercase ${
                          isDark
                            ? 'bg-teal-400/20 text-teal-300'
                            : 'bg-emerald-200 text-emerald-800'
                        }`}
                      >
                        Cierre
                      </span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span
                        className={`text-xs font-medium ${
                          isDark ? 'text-white' : 'text-[#0B132B]'
                        }`}
                      >
                        Canon Final + Beneficio
                      </span>
                      <span
                        className={`font-mono text-base font-bold ${
                          isDark ? 'text-teal-400' : 'text-emerald-700'
                        }`}
                      >
                        ${selectedProperty.counterOffer.amount.toFixed(2)} / mes
                      </span>
                    </div>
                    <p
                      className={`text-[11px] mt-2 pt-2 border-t flex items-center gap-1.5 ${
                        isDark
                          ? 'text-[#A0AEC0] border-teal-400/20'
                          : 'text-[#475569] border-emerald-200'
                      }`}
                    >
                      <span
                        className={`material-symbols-outlined text-[13px] ${
                          isDark ? 'text-teal-400' : 'text-emerald-600'
                        }`}
                      >
                        check_circle
                      </span>
                      {selectedProperty.counterOffer.description}
                    </p>
                  </div>

                  {/* Escrow Depository */}
                  <div
                    className={`p-4 rounded-2xl flex items-center justify-between ${
                      isDark
                        ? 'bg-amber-500/10 border border-amber-500/30'
                        : 'bg-amber-50/80 border border-amber-300'
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <div
                        className={`w-8 h-8 rounded-lg flex items-center justify-center ${
                          isDark
                            ? 'bg-amber-500/20 text-amber-400'
                            : 'bg-amber-100 text-amber-800'
                        }`}
                      >
                        <span className="material-symbols-outlined text-base">lock</span>
                      </div>
                      <div>
                        <div
                          className={`text-[10px] font-mono uppercase tracking-wider ${
                            isDark
                              ? 'text-amber-400'
                              : 'text-amber-900 font-bold'
                          }`}
                        >
                          Fondo en Escrow Fiduciario
                        </div>
                        <div
                          className={`text-xs font-medium ${
                            isDark ? 'text-white' : 'text-[#0B132B] font-semibold'
                          }`}
                        >
                          ${selectedProperty.counterOffer.amount.toFixed(2)} USD Resguardado
                        </div>
                      </div>
                    </div>
                    <span
                      className={`text-[10px] font-mono ${
                        isDark ? 'text-[#8E9CB2]' : 'text-[#64748B] font-medium'
                      }`}
                    >
                      Ley 7527 CR
                    </span>
                  </div>
                </div>

                {/* Action Call in Terminal */}
                <button
                  onClick={onOpenBiometric}
                  className={`w-full py-3.5 px-4 rounded-xl font-mono font-bold text-xs uppercase tracking-wider transition-opacity cursor-pointer flex items-center justify-center gap-2 ${
                    isDark
                      ? 'bg-gradient-to-r from-teal-400 via-emerald-400 to-teal-400 text-[#0B132B] hover:opacity-95'
                      : 'bg-gradient-to-r from-emerald-600 via-teal-600 to-emerald-600 text-white shadow-md hover:opacity-95'
                  }`}
                >
                  <span className="material-symbols-outlined text-base font-bold">draw</span>
                  <span>Firma Biométrica Disponible</span>
                </button>

                {/* Dynamic Property Switcher Bar */}
                <div
                  className={`mt-4 pt-3 border-t flex items-center justify-between text-[11px] font-mono ${
                    isDark ? 'border-white/10 text-slate-400' : 'border-slate-200 text-slate-500'
                  }`}
                >
                  <span className="text-[10px] uppercase tracking-wider">Ver otras residencias:</span>
                  <div className="flex gap-1.5">
                    {properties.map((p) => (
                      <button
                        key={p.id}
                        onClick={() => onSelectProperty(p)}
                        className={`px-2 py-0.5 rounded text-[10px] font-mono transition-colors cursor-pointer ${
                          selectedProperty.id === p.id
                            ? isDark
                              ? 'bg-teal-400 text-slate-950 font-bold'
                              : 'bg-emerald-600 text-white font-bold'
                            : isDark
                            ? 'bg-white/5 hover:bg-white/10 text-slate-300'
                            : 'bg-slate-100 hover:bg-slate-200 text-slate-700'
                        }`}
                        title={p.name}
                      >
                        {p.code}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom floating precision label */}
            <div
              className={`mt-4 flex items-center justify-between px-2 text-[11px] font-mono ${
                isDark ? 'text-[#718096]' : 'text-[#64748B]'
              }`}
            >
              <span>HASH: 0x9b72...89a1</span>
              <span
                className={`flex items-center gap-1.5 ${
                  isDark ? 'text-emerald-400' : 'text-emerald-700 font-medium'
                }`}
              >
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                Servidor San José Activo
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

import React from 'react';
import { ThemeMode } from '../types';
import { MARKET_DATA } from '../data/properties';

interface MarketAuditModalProps {
  theme: ThemeMode;
  onClose: () => void;
}

export const MarketAuditModal: React.FC<MarketAuditModalProps> = ({
  theme,
  onClose,
}) => {
  const isDark = theme === 'dark';

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-md animate-fadeIn">
      <div
        className={`max-w-2xl w-full rounded-3xl p-6 sm:p-8 relative shadow-2xl overflow-y-auto max-h-[90vh] ${
          isDark
            ? 'bg-[#0B132B] hairline-border-dark text-white'
            : 'bg-white border border-slate-200 text-slate-900'
        }`}
      >
        <div className="flex items-center justify-between pb-4 mb-4 border-b border-slate-500/20">
          <div className="flex items-center gap-2.5">
            <span className="material-symbols-outlined text-teal-400 text-2xl">
              analytics
            </span>
            <div>
              <h3 className="font-display font-semibold text-lg">
                Auditoría de Mercado Residencial GAM 2025
              </h3>
              <p
                className={`text-xs font-mono ${
                  isDark ? 'text-slate-400' : 'text-slate-500'
                }`}
              >
                Métricas de absorción fiduciaria y canones promedio en Gran Área Metropolitana
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="w-8 h-8 rounded-full flex items-center justify-center hover:bg-slate-500/10 cursor-pointer"
          >
            <span className="material-symbols-outlined text-sm">close</span>
          </button>
        </div>

        {/* Global Key Metrics */}
        <div className="grid grid-cols-3 gap-3 mb-6">
          <div
            className={`p-3.5 rounded-2xl border text-center ${
              isDark ? 'border-teal-500/20 bg-slate-950/40' : 'border-slate-200 bg-slate-50'
            }`}
          >
            <div className="text-[10px] font-mono text-slate-400 uppercase">Tiempo Cierre Medio</div>
            <div className="font-display text-xl font-bold text-teal-400 mt-0.5">2.9 Días</div>
            <div className="text-[10px] text-slate-400">vs 25 días tradicional</div>
          </div>

          <div
            className={`p-3.5 rounded-2xl border text-center ${
              isDark ? 'border-teal-500/20 bg-slate-950/40' : 'border-slate-200 bg-slate-50'
            }`}
          >
            <div className="text-[10px] font-mono text-slate-400 uppercase">Tasa Desalojo</div>
            <div className="font-display text-xl font-bold text-emerald-400 mt-0.5">&lt; 0.2%</div>
            <div className="text-[10px] text-slate-400">Blindaje Ley 7527</div>
          </div>

          <div
            className={`p-3.5 rounded-2xl border text-center ${
              isDark ? 'border-teal-500/20 bg-slate-950/40' : 'border-slate-200 bg-slate-50'
            }`}
          >
            <div className="text-[10px] font-mono text-slate-400 uppercase">Custodia Escrow</div>
            <div className="font-display text-xl font-bold text-amber-400 mt-0.5">100%</div>
            <div className="text-[10px] text-slate-400">Fondos garantizados</div>
          </div>
        </div>

        {/* Market Table */}
        <div
          className={`rounded-2xl border overflow-hidden font-mono text-xs mb-6 ${
            isDark ? 'border-slate-800 bg-slate-950/60' : 'border-slate-200 bg-white'
          }`}
        >
          <div className="overflow-x-auto">
            <table className="w-full text-left">
              <thead
                className={`text-[10px] uppercase tracking-wider ${
                  isDark ? 'bg-slate-900 text-slate-400' : 'bg-slate-100 text-slate-600'
                }`}
              >
                <tr>
                  <th className="p-3">Zona / Distrito</th>
                  <th className="p-3">Canon Prom.</th>
                  <th className="p-3">Tiempo Absorción</th>
                  <th className="p-3">Demanda</th>
                  <th className="p-3">Seguridad</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-800/40">
                {MARKET_DATA.map((item, idx) => (
                  <tr
                    key={idx}
                    className={`hover:bg-teal-400/5 transition-colors ${
                      isDark ? 'text-slate-300' : 'text-slate-700'
                    }`}
                  >
                    <td className="p-3 font-semibold text-white dark:text-white">
                      {item.zone}
                    </td>
                    <td className="p-3 text-teal-400 font-bold">{item.avgRent}</td>
                    <td className="p-3">{item.avgTime}</td>
                    <td className="p-3">
                      <span className="px-2 py-0.5 rounded text-[10px] bg-emerald-500/15 text-emerald-400 font-bold">
                        {item.demand}
                      </span>
                    </td>
                    <td className="p-3 text-slate-400">{item.securityDeposit}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div className="flex justify-end">
          <button
            onClick={onClose}
            className={`px-6 py-2.5 rounded-full text-xs font-mono font-semibold uppercase tracking-wider cursor-pointer ${
              isDark ? 'bg-teal-400 text-slate-950 hover:bg-teal-300' : 'bg-emerald-600 text-white hover:bg-emerald-700'
            }`}
          >
            Cerrar Auditoría
          </button>
        </div>
      </div>
    </div>
  );
};

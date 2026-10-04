import React, { useState } from 'react';
import { ThemeMode } from '../types';

interface PortalModalProps {
  theme: ThemeMode;
  onClose: () => void;
  onSelectRole: (role: 'inquilino' | 'arrendador') => void;
}

export const PortalModal: React.FC<PortalModalProps> = ({
  theme,
  onClose,
  onSelectRole,
}) => {
  const isDark = theme === 'dark';
  const [role, setRole] = useState<'inquilino' | 'arrendador'>('inquilino');

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-md animate-fadeIn">
      <div
        className={`max-w-md w-full rounded-3xl p-6 sm:p-8 relative shadow-2xl ${
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

        <div className="flex items-center gap-3 mb-6">
          <div className="w-10 h-10 rounded-xl bg-teal-400/20 text-teal-400 flex items-center justify-center">
            <span className="material-symbols-outlined text-2xl">account_circle</span>
          </div>
          <div>
            <h3 className="font-display font-semibold text-lg">Portal Clientes HabitaNexus</h3>
            <p className="text-xs text-slate-400 font-mono">Selecciona tu perfil de acceso</p>
          </div>
        </div>

        {/* Role Switcher */}
        <div className="grid grid-cols-2 gap-3 mb-6">
          <button
            onClick={() => setRole('inquilino')}
            className={`p-4 rounded-2xl border text-center transition-all cursor-pointer ${
              role === 'inquilino'
                ? isDark
                  ? 'border-teal-400 bg-teal-400/15 text-white font-bold'
                  : 'border-emerald-600 bg-emerald-50 text-emerald-900 font-bold'
                : isDark
                ? 'border-slate-800 bg-slate-900/60 text-slate-400'
                : 'border-slate-200 bg-slate-50 text-slate-600'
            }`}
          >
            <span className="material-symbols-outlined text-2xl block mb-1">home</span>
            <span className="text-xs font-mono uppercase">Soy Inquilino</span>
          </button>

          <button
            onClick={() => setRole('arrendador')}
            className={`p-4 rounded-2xl border text-center transition-all cursor-pointer ${
              role === 'arrendador'
                ? isDark
                  ? 'border-teal-400 bg-teal-400/15 text-white font-bold'
                  : 'border-emerald-600 bg-emerald-50 text-emerald-900 font-bold'
                : isDark
                ? 'border-slate-800 bg-slate-900/60 text-slate-400'
                : 'border-slate-200 bg-slate-50 text-slate-600'
            }`}
          >
            <span className="material-symbols-outlined text-2xl block mb-1">real_estate_agent</span>
            <span className="text-xs font-mono uppercase">Soy Propietario</span>
          </button>
        </div>

        {/* Details based on role */}
        <div
          className={`p-4 rounded-2xl text-xs font-mono space-y-2 border mb-6 ${
            isDark ? 'border-slate-800 bg-slate-950/50 text-slate-300' : 'border-slate-200 bg-slate-50 text-slate-700'
          }`}
        >
          {role === 'inquilino' ? (
            <>
              <div className="flex items-center gap-2 text-teal-400 font-semibold">
                <span className="material-symbols-outlined text-sm">check_circle</span>
                Gestión de Depósitos en Escrow
              </div>
              <p className="text-[11px] text-slate-400 leading-relaxed">
                Supervisa el estado de custodia de tus garantías, consulta tu contrato digital Ley 7527 y realiza pagos mensuales sin comisiones interbancarias.
              </p>
            </>
          ) : (
            <>
              <div className="flex items-center gap-2 text-teal-400 font-semibold">
                <span className="material-symbols-outlined text-sm">check_circle</span>
                Control Fiduciario de Rentas
              </div>
              <p className="text-[11px] text-slate-400 leading-relaxed">
                Configura bandas de precios aceptables, recibe contraofertas formales filtradas y visualiza la liquidación del canon en tiempo real.
              </p>
            </>
          )}
        </div>

        <button
          onClick={() => {
            onSelectRole(role);
            onClose();
          }}
          className={`w-full py-3.5 rounded-full font-mono font-bold text-xs uppercase tracking-widest cursor-pointer transition-all ${
            isDark
              ? 'bg-teal-400 text-slate-950 hover:bg-teal-300'
              : 'bg-emerald-600 text-white hover:bg-emerald-700'
          }`}
        >
          Ingresar al Entorno {role === 'inquilino' ? 'Inquilino' : 'Propietario'}
        </button>
      </div>
    </div>
  );
};

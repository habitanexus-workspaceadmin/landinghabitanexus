import React, { useState } from 'react';
import { ThemeMode } from '../types';

interface BindingOfferModalProps {
  theme: ThemeMode;
  offerDetails: {
    baseRent: number;
    term: number;
    services: { water: boolean; internet: boolean; condo: boolean };
    totalMonthly: number;
    escrowDeposit: number;
    currency: 'USD' | 'CRC';
  } | null;
  onClose: () => void;
}

export const BindingOfferModal: React.FC<BindingOfferModalProps> = ({
  theme,
  offerDetails,
  onClose,
}) => {
  const isDark = theme === 'dark';
  const [tenantName, setTenantName] = useState('');
  const [tenantEmail, setTenantEmail] = useState('');
  const [tenantPhone, setTenantPhone] = useState('');
  const [submitted, setSubmitted] = useState(false);

  if (!offerDetails) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const currencySymbol = offerDetails.currency === 'USD' ? '$' : '₡';
  const formattedMonthly =
    offerDetails.currency === 'USD'
      ? `$${offerDetails.totalMonthly.toFixed(2)}`
      : `₡${Math.round(offerDetails.totalMonthly * 520).toLocaleString()}`;

  const formattedEscrow =
    offerDetails.currency === 'USD'
      ? `$${offerDetails.escrowDeposit.toFixed(2)}`
      : `₡${Math.round(offerDetails.escrowDeposit * 520).toLocaleString()}`;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-md animate-fadeIn">
      <div
        className={`max-w-lg w-full rounded-3xl p-6 sm:p-8 relative shadow-2xl overflow-y-auto max-h-[90vh] ${
          isDark
            ? 'bg-[#0B132B] hairline-border-dark text-white'
            : 'bg-white border border-slate-200 text-slate-900'
        }`}
      >
        <div className="flex items-center justify-between pb-4 mb-4 border-b border-slate-500/20">
          <div className="flex items-center gap-2.5">
            <span className="material-symbols-outlined text-teal-400 text-2xl">
              description
            </span>
            <h3 className="font-display font-semibold text-lg">
              Emisión de Oferta Digital Vinculante
            </h3>
          </div>
          <button
            onClick={onClose}
            className="w-8 h-8 rounded-full flex items-center justify-center hover:bg-slate-500/10 cursor-pointer"
          >
            <span className="material-symbols-outlined text-sm">close</span>
          </button>
        </div>

        {!submitted ? (
          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Offer Summary Box */}
            <div
              className={`p-4 rounded-2xl text-xs font-mono space-y-2 border ${
                isDark
                  ? 'bg-slate-950/60 border-teal-500/20 text-slate-300'
                  : 'bg-slate-50 border-slate-200 text-slate-700'
              }`}
            >
              <div className="flex justify-between font-semibold">
                <span>Canon Mensual Consolidado:</span>
                <span className="text-teal-400 font-bold">{formattedMonthly}</span>
              </div>
              <div className="flex justify-between">
                <span>Plazo Contractual:</span>
                <span>{offerDetails.term} Meses</span>
              </div>
              <div className="flex justify-between text-amber-500">
                <span>Custodia Escrow Requerida:</span>
                <span className="font-bold">{formattedEscrow}</span>
              </div>
            </div>

            <div>
              <label className="block text-xs font-mono uppercase text-slate-400 mb-1">
                Nombre Completo del Ofertante
              </label>
              <input
                required
                type="text"
                placeholder="Ej. Valeria Brenes Jiménez"
                value={tenantName}
                onChange={(e) => setTenantName(e.target.value)}
                className={`w-full px-4 py-2.5 rounded-xl text-xs font-mono border focus:outline-none focus:ring-1 focus:ring-teal-400 ${
                  isDark
                    ? 'bg-slate-900 border-slate-700 text-white'
                    : 'bg-white border-slate-300 text-slate-900'
                }`}
              />
            </div>

            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="block text-xs font-mono uppercase text-slate-400 mb-1">
                  Correo Electrónico
                </label>
                <input
                  required
                  type="email"
                  placeholder="valeria@ejemplo.cr"
                  value={tenantEmail}
                  onChange={(e) => setTenantEmail(e.target.value)}
                  className={`w-full px-4 py-2.5 rounded-xl text-xs font-mono border focus:outline-none focus:ring-1 focus:ring-teal-400 ${
                    isDark
                      ? 'bg-slate-900 border-slate-700 text-white'
                      : 'bg-white border-slate-300 text-slate-900'
                  }`}
                />
              </div>

              <div>
                <label className="block text-xs font-mono uppercase text-slate-400 mb-1">
                  Teléfono (WhatsApp)
                </label>
                <input
                  required
                  type="tel"
                  placeholder="+506 8888-9999"
                  value={tenantPhone}
                  onChange={(e) => setTenantPhone(e.target.value)}
                  className={`w-full px-4 py-2.5 rounded-xl text-xs font-mono border focus:outline-none focus:ring-1 focus:ring-teal-400 ${
                    isDark
                      ? 'bg-slate-900 border-slate-700 text-white'
                      : 'bg-white border-slate-300 text-slate-900'
                  }`}
                />
              </div>
            </div>

            <div
              className={`p-3 rounded-xl border text-[11px] leading-relaxed ${
                isDark ? 'border-teal-500/20 bg-teal-500/5 text-slate-300' : 'border-emerald-200 bg-emerald-50 text-slate-700'
              }`}
            >
              <div className="flex items-center gap-1.5 font-semibold mb-0.5 text-teal-400">
                <span className="material-symbols-outlined text-sm">lock</span>
                Garantía Fiduciaria HabitaNexus
              </div>
              Esta oferta genera un token temporal de 48 horas con reserva de prioridad. No se debitará ningún fondo hasta la firma mutua.
            </div>

            <div className="pt-2">
              <button
                type="submit"
                className={`w-full py-3.5 rounded-full font-mono font-bold text-xs uppercase tracking-widest cursor-pointer transition-all ${
                  isDark
                    ? 'bg-teal-400 text-slate-950 hover:bg-teal-300'
                    : 'bg-emerald-600 text-white hover:bg-emerald-700'
                }`}
              >
                Generar Enlace Fiduciario
              </button>
            </div>
          </form>
        ) : (
          <div className="text-center space-y-4 py-3">
            <div className="w-12 h-12 rounded-full bg-emerald-500 text-white flex items-center justify-center mx-auto">
              <span className="material-symbols-outlined text-2xl">verified</span>
            </div>
            <h4 className="font-display font-bold text-lg text-emerald-400">
              ¡Oferta Formal Generada con Éxito!
            </h4>
            <p className="text-xs text-slate-400 font-mono">
              Se ha enviado la credencial de negociación a <strong>{tenantEmail}</strong> con código de expediente fiduciario:
            </p>
            <div
              className={`p-3 rounded-xl font-mono text-xs border inline-block ${
                isDark ? 'bg-slate-950 border-teal-500/40 text-teal-300' : 'bg-slate-100 border-slate-300 text-slate-800'
              }`}
            >
              EXPEDIENTE: HN-OFFER-2025-CR
            </div>
            <div className="pt-4 flex justify-center gap-3">
              <button
                onClick={onClose}
                className={`px-6 py-2.5 rounded-full text-xs font-mono font-semibold uppercase tracking-wider cursor-pointer ${
                  isDark ? 'bg-teal-400 text-slate-950 hover:bg-teal-300' : 'bg-emerald-600 text-white hover:bg-emerald-700'
                }`}
              >
                Listo
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

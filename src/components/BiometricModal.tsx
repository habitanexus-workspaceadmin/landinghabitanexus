import React, { useState } from 'react';
import { Property, ThemeMode } from '../types';

interface BiometricModalProps {
  theme: ThemeMode;
  property: Property;
  onClose: () => void;
}

export const BiometricModal: React.FC<BiometricModalProps> = ({
  theme,
  property,
  onClose,
}) => {
  const isDark = theme === 'dark';
  const [signatureState, setSignatureState] = useState<'idle' | 'scanning' | 'signed'>('idle');

  const handleSign = () => {
    setSignatureState('scanning');
    setTimeout(() => {
      setSignatureState('signed');
    }, 1800);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-md animate-fadeIn">
      <div
        className={`max-w-2xl w-full rounded-3xl p-6 sm:p-8 relative shadow-2xl overflow-y-auto max-h-[92vh] ${
          isDark
            ? 'bg-[#0B132B] hairline-border-dark text-white'
            : 'bg-white border border-slate-200 text-slate-900'
        }`}
      >
        {/* Header */}
        <div className="flex items-center justify-between pb-4 mb-6 border-b border-slate-500/20">
          <div className="flex items-center gap-3">
            <div
              className={`w-10 h-10 rounded-xl flex items-center justify-center ${
                isDark ? 'bg-teal-400/20 text-teal-400' : 'bg-emerald-100 text-emerald-800'
              }`}
            >
              <span className="material-symbols-outlined text-2xl">fingerprint</span>
            </div>
            <div>
              <h3 className="font-display font-bold text-lg">
                Firma Biométrica &amp; Blindaje Legal
              </h3>
              <p
                className={`text-xs font-mono ${
                  isDark ? 'text-slate-400' : 'text-slate-500'
                }`}
              >
                Ley N° 7527 CR • Protocolo HabitaNexus Certificado
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="w-8 h-8 rounded-full flex items-center justify-center hover:bg-slate-500/10 cursor-pointer"
          >
            <span className="material-symbols-outlined text-lg">close</span>
          </button>
        </div>

        {/* Property Brief */}
        <div
          className={`p-4 rounded-2xl flex items-center justify-between mb-6 ${
            isDark ? 'bg-white/[0.03] border border-white/10' : 'bg-slate-50 border border-slate-200'
          }`}
        >
          <div className="flex items-center gap-3">
            <img
              src={property.imageUrl}
              alt={property.name}
              className="w-12 h-12 rounded-xl object-cover"
            />
            <div>
              <h4 className="text-sm font-semibold">{property.name}</h4>
              <p className="text-xs font-mono text-slate-400">
                {property.location} • ID: {property.code}
              </p>
            </div>
          </div>
          <div className="text-right">
            <span className="text-[10px] font-mono uppercase text-slate-400 block">Canon Acordado</span>
            <span
              className={`font-mono text-sm font-bold ${
                isDark ? 'text-teal-400' : 'text-emerald-700'
              }`}
            >
              ${property.counterOffer.amount.toFixed(2)} / mes
            </span>
          </div>
        </div>

        {/* Contract Preview Document Box */}
        <div
          className={`p-5 rounded-2xl mb-6 font-mono text-xs space-y-3 max-h-56 overflow-y-auto leading-relaxed border ${
            isDark
              ? 'bg-slate-950/80 border-slate-800 text-slate-300'
              : 'bg-slate-50 border-slate-200 text-slate-700'
          }`}
        >
          <div className="flex items-center justify-between text-[11px] pb-2 border-b border-slate-700/50">
            <span className="font-bold uppercase tracking-wider text-teal-400">
              DOCUMENTO VINCULANTE #HN-7527-CR
            </span>
            <span className="text-[10px] text-slate-400">HASH: 0x9b72cf41e89a1</span>
          </div>
          <p>
            <strong>CLÁUSULA PRIMERA (OBJETO):</strong> Arrendamiento de la finca filial {property.name}, ubicada en {property.location}, con destino exclusivo habitacional unifamiliar.
          </p>
          <p>
            <strong>CLÁUSULA SEGUNDA (CANON Y ESCROW):</strong> Se conviene el precio en la suma mensual de ${property.counterOffer.amount.toFixed(2)} USD. El depósito de garantía se constituye bajo fideicomiso irrevocable en custodia fiduciaria con liquidación automatizada conforme al acta de entrega e inventario.
          </p>
          <p>
            <strong>CLÁUSULA TERCERA (JURISDICCIÓN):</strong> Las partes se someten a la Ley General de Arrendamientos Urbanos y Suburbanos (Ley 7527) y al Centro de Arbitraje y Mediación (CAM) de Costa Rica con ejecutividad expedita.
          </p>
        </div>

        {/* Identity Verification Checkpoints */}
        <div className="grid grid-cols-2 gap-3 mb-6 text-xs font-mono">
          <div
            className={`p-3 rounded-xl border flex items-center gap-2.5 ${
              isDark ? 'border-teal-400/30 bg-teal-400/5' : 'border-emerald-200 bg-emerald-50'
            }`}
          >
            <span className="material-symbols-outlined text-emerald-500 text-base">verified</span>
            <div>
              <div className="font-semibold text-[11px]">Identidad TSE</div>
              <div className="text-[10px] text-slate-400">Padrón Civil Cotejado</div>
            </div>
          </div>
          <div
            className={`p-3 rounded-xl border flex items-center gap-2.5 ${
              isDark ? 'border-amber-400/30 bg-amber-400/5' : 'border-amber-200 bg-amber-50'
            }`}
          >
            <span className="material-symbols-outlined text-amber-500 text-base">lock</span>
            <div>
              <div className="font-semibold text-[11px]">Escrow Activo</div>
              <div className="text-[10px] text-slate-400">${property.counterOffer.amount} Resguardado</div>
            </div>
          </div>
        </div>

        {/* Signing Area */}
        {signatureState === 'idle' && (
          <div className="space-y-3">
            <button
              onClick={handleSign}
              className={`w-full py-4 px-6 rounded-2xl font-mono font-bold text-xs uppercase tracking-widest transition-all cursor-pointer flex items-center justify-center gap-3 shadow-lg ${
                isDark
                  ? 'bg-gradient-to-r from-teal-400 via-emerald-400 to-teal-400 text-slate-950 hover:opacity-95'
                  : 'bg-emerald-600 hover:bg-emerald-700 text-white'
              }`}
            >
              <span className="material-symbols-outlined text-lg">touch_app</span>
              <span>Proceder a Firma Biométrica Digital</span>
            </button>
            <p className="text-[11px] text-center text-slate-400 font-mono">
              Al firmar, se genera un certificado criptográfico con estampillado cronológico oficial.
            </p>
          </div>
        )}

        {signatureState === 'scanning' && (
          <div
            className={`p-6 rounded-2xl border text-center space-y-3 ${
              isDark ? 'border-teal-400/40 bg-teal-400/5' : 'border-emerald-300 bg-emerald-50'
            }`}
          >
            <div className="w-12 h-12 rounded-full border-2 border-teal-400 border-t-transparent animate-spin mx-auto" />
            <p className="font-mono text-xs font-semibold">
              Validando biometría facial y credencial digital en servidor San José...
            </p>
            <span className="text-[10px] font-mono text-slate-400">Verificando hash 0x9b72...89a1</span>
          </div>
        )}

        {signatureState === 'signed' && (
          <div
            className={`p-6 rounded-2xl border text-center space-y-4 ${
              isDark ? 'border-emerald-500/50 bg-emerald-500/10' : 'border-emerald-400 bg-emerald-50'
            }`}
          >
            <div className="w-12 h-12 rounded-full bg-emerald-500 text-white flex items-center justify-center mx-auto shadow-lg">
              <span className="material-symbols-outlined text-2xl font-bold">check</span>
            </div>
            <div>
              <h4 className="font-display font-bold text-base text-emerald-500">
                ¡Contrato Perfeccionado y Depósito Blindado!
              </h4>
              <p className="text-xs text-slate-400 mt-1 font-mono">
                Certificado emitido con éxito. El arrendador y el inquilino han recibido la copia formal firmada.
              </p>
            </div>
            <div className="flex justify-center gap-3 pt-2">
              <button
                onClick={() => {
                  alert('Comprobante legal descargado en formato PDF firmado digitalmente.');
                  onClose();
                }}
                className={`px-5 py-2.5 rounded-full text-xs font-mono font-semibold uppercase tracking-wider cursor-pointer ${
                  isDark ? 'bg-teal-400 text-slate-950 hover:bg-teal-300' : 'bg-emerald-600 text-white hover:bg-emerald-700'
                }`}
              >
                Descargar Acta Oficial PDF
              </button>
              <button
                onClick={onClose}
                className="px-5 py-2.5 rounded-full text-xs font-mono font-semibold uppercase tracking-wider border border-slate-500/30 hover:bg-white/5 cursor-pointer"
              >
                Cerrar
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

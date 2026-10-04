import React, { useState } from 'react';
import { ThemeMode } from '../types';

interface WorkflowStepsProps {
  theme: ThemeMode;
  onSelectStepDetail?: (stepIndex: number) => void;
}

export const WorkflowSteps: React.FC<WorkflowStepsProps> = ({
  theme,
  onSelectStepDetail,
}) => {
  const isDark = theme === 'dark';
  const [activeStepModal, setActiveStepModal] = useState<number | null>(null);

  const steps = [
    {
      num: '01',
      icon: 'search_insights',
      iconColorDark: 'text-teal-400',
      iconColorLight: 'text-emerald-600',
      hoverBorderDark: 'hover:border-teal-400',
      hoverBorderLight: 'hover:border-emerald-500',
      actionText: 'AUDITORÍA INICIAL',
      actionColorDark: 'group-hover:text-teal-400',
      actionColorLight: 'group-hover:text-emerald-700',
      title: 'Exploración Verificada',
      desc: 'Catálogo de apartamentos y casas inspeccionadas físicamente con rangos de oferta pre-aprobados por el propietario.',
      fullDetail:
        'Cada propiedad en HabitaNexus pasa por un proceso de verificación estructural, legal y registral ante el Registro Nacional de Costa Rica. El propietario establece de antemano el canon mínimo aceptable, lo que elimina especulaciones.'
    },
    {
      num: '02',
      icon: 'tune',
      iconColorDark: 'text-purple-400',
      iconColorLight: 'text-[#7C3AED]',
      hoverBorderDark: 'hover:border-purple-400',
      hoverBorderLight: 'hover:border-[#7C3AED]',
      actionText: 'ALGORITMO DE MEDIACIÓN',
      actionColorDark: 'group-hover:text-purple-400',
      actionColorLight: 'group-hover:text-[#7C3AED]',
      title: 'Pacto Asíncrono',
      desc: 'Propón el canon, fecha de ingreso, cuotas de mantenimiento y condiciones de mascotas sin confrontaciones telefónicas.',
      fullDetail:
        'El sistema asíncrono permite a ambas partes enviar y recibir contraofertas formales en ventanas de hasta 24 horas con cláusulas parametrizadas (cuota condominal, parqueos adicionales, depósito prorrateado).'
    },
    {
      num: '03',
      icon: 'security',
      iconColorDark: 'text-amber-400',
      iconColorLight: 'text-amber-600',
      hoverBorderDark: 'hover:border-amber-400',
      hoverBorderLight: 'hover:border-amber-500',
      actionText: 'RESGUARDO FIDUCIARIO',
      actionColorDark: 'group-hover:text-amber-400',
      actionColorLight: 'group-hover:text-amber-700',
      title: 'Custodia Escrow',
      desc: 'El depósito de garantía reposa en una cuenta fiduciaria blindada. No se dispersa hasta validar la entrega de las llaves.',
      fullDetail:
        'El depósito de garantía se deposita en una cuenta de fideicomiso fiduciario supervisada (SUGEF). El arrendador tiene la certeza de fondos y el inquilino la garantía de devolución si el inmueble no corresponde al acta de entrega.'
    },
    {
      num: '04',
      icon: 'fingerprint',
      iconColorDark: 'text-emerald-400',
      iconColorLight: 'text-emerald-600',
      hoverBorderDark: 'hover:border-emerald-400',
      hoverBorderLight: 'hover:border-emerald-500',
      actionText: 'VINCULACIÓN JURÍDICA',
      actionColorDark: 'group-hover:text-emerald-400',
      actionColorLight: 'group-hover:text-emerald-700',
      title: 'Firma y Posesión',
      desc: 'Generación instantánea del contrato legal conforme la ley costarricense con firma digital oficial y comprobante notarial en nube.',
      fullDetail:
        'Generación de documento contractual bajo la Ley N° 7527 con firmas digitales verificadas y token criptográfico inmutable en la nube, con entrega de llaves asistida por inventario fotográfico en app.'
    }
  ];

  return (
    <section id="flujo" className="py-28 relative z-10 transition-colors duration-500">
      <div className="max-w-7xl mx-auto px-6 sm:px-10">
        <div className="text-left max-w-2xl mb-20">
          <span
            className={`text-xs font-mono uppercase tracking-widest ${
              isDark ? 'text-teal-400' : 'text-emerald-700 font-semibold'
            }`}
          >
            02 / El Estándar en 4 Pasos
          </span>
          <h2
            className={`font-display text-4xl sm:text-5xl font-light tracking-tighter mt-3 ${
              isDark ? 'text-white' : 'text-[#0B132B]'
            }`}
          >
            Ingeniería de proceso para el arrendamiento moderno.
          </h2>
        </div>

        {/* Precision Step Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, idx) => (
            <div
              key={step.num}
              onClick={() => {
                setActiveStepModal(idx);
                if (onSelectStepDetail) onSelectStepDetail(idx);
              }}
              className={`p-8 rounded-3xl transition-all duration-300 group flex flex-col justify-between h-[360px] cursor-pointer ${
                isDark
                  ? `hairline-border-dark bg-[#0B132B]/60 hover:bg-[#111C36] ${step.hoverBorderDark}`
                  : `border border-slate-200 bg-white shadow-sm hover:shadow-md ${step.hoverBorderLight}`
              }`}
            >
              <div>
                <div className="flex items-center justify-between mb-8">
                  <span
                    className={`font-mono text-2xl font-light transition-colors ${
                      isDark
                        ? 'text-[#4A5568] group-hover:text-teal-400'
                        : 'text-slate-400 group-hover:text-emerald-600'
                    }`}
                  >
                    {step.num}
                  </span>
                  <span
                    className={`material-symbols-outlined text-2xl ${
                      isDark ? step.iconColorDark : step.iconColorLight
                    }`}
                  >
                    {step.icon}
                  </span>
                </div>
                <h3
                  className={`text-lg font-semibold mb-2 ${
                    isDark ? 'text-white' : 'text-[#0B132B]'
                  }`}
                >
                  {step.title}
                </h3>
                <p
                  className={`text-xs leading-relaxed ${
                    isDark ? 'text-[#8E9CB2]' : 'text-[#64748B]'
                  }`}
                >
                  {step.desc}
                </p>
              </div>

              <div
                className={`font-mono text-[11px] font-semibold flex items-center gap-1 transition-colors ${
                  isDark
                    ? `text-[#64748B] ${step.actionColorDark}`
                    : `text-[#64748B] ${step.actionColorLight}`
                }`}
              >
                <span>{step.actionText}</span>
                <span className="material-symbols-outlined text-xs">arrow_forward</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Detail Modal for Selected Step */}
      {activeStepModal !== null && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fadeIn">
          <div
            className={`max-w-lg w-full rounded-3xl p-8 relative shadow-2xl transition-all ${
              isDark
                ? 'bg-[#0B132B] hairline-border-dark text-white'
                : 'bg-white border border-slate-200 text-slate-900'
            }`}
          >
            <div className="flex items-center justify-between pb-4 mb-4 border-b border-slate-500/20">
              <div className="flex items-center gap-2">
                <span
                  className={`font-mono text-xs px-2 py-0.5 rounded font-bold ${
                    isDark ? 'bg-teal-400/20 text-teal-300' : 'bg-emerald-100 text-emerald-800'
                  }`}
                >
                  Paso {steps[activeStepModal].num}
                </span>
                <h3 className="font-display font-semibold text-lg">
                  {steps[activeStepModal].title}
                </h3>
              </div>
              <button
                onClick={() => setActiveStepModal(null)}
                className="w-8 h-8 rounded-full flex items-center justify-center hover:bg-slate-500/10 cursor-pointer"
              >
                <span className="material-symbols-outlined text-sm">close</span>
              </button>
            </div>

            <p
              className={`text-sm leading-relaxed mb-6 ${
                isDark ? 'text-slate-300' : 'text-slate-600'
              }`}
            >
              {steps[activeStepModal].fullDetail}
            </p>

            <div className="flex justify-end">
              <button
                onClick={() => setActiveStepModal(null)}
                className={`px-5 py-2.5 rounded-full text-xs font-mono font-semibold uppercase tracking-wider cursor-pointer ${
                  isDark
                    ? 'bg-teal-400 text-slate-950 hover:bg-teal-300'
                    : 'bg-emerald-600 text-white hover:bg-emerald-700'
                }`}
              >
                Entendido
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

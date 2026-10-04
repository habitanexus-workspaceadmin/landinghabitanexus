import React from 'react';
import { ThemeMode } from '../types';

interface FooterProps {
  theme: ThemeMode;
}

export const Footer: React.FC<FooterProps> = ({ theme }) => {
  const isDark = theme === 'dark';

  return (
    <footer
      className={`border-t py-16 text-xs font-mono transition-colors duration-500 ${
        isDark
          ? 'hairline-b-dark border-teal-500/15 bg-[#051424] text-[#718096]'
          : 'hairline-b-light border-slate-700 bg-slate-900 text-slate-400'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-10">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-10 mb-16">
          <div className="col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <svg
                className="h-8 w-auto"
                fill="none"
                viewBox="0 0 240 60"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect
                  fill="url(#brandGradFooterComp)"
                  height="40"
                  rx="10"
                  width="40"
                  x="6"
                  y="10"
                />
                <path d="M26 18L15 27H20V38H32V27H37L26 18Z" fill="white" />
                <circle cx="26" cy="30" fill="#2DD4BF" r="3.5" />
                <circle cx="34" cy="22" fill="#7C3AED" r="2.5" />
                <path
                  d="M26 30L34 22"
                  stroke="#2DD4BF"
                  strokeDasharray="2 2"
                  strokeWidth="1.5"
                />
                <defs>
                  <linearGradient
                    gradientUnits="userSpaceOnUse"
                    id="brandGradFooterComp"
                    x1="6"
                    x2="46"
                    y1="10"
                    y2="50"
                  >
                    <stop offset="0%" stopColor="#7C3AED" />
                    <stop offset="50%" stopColor="#0F766E" />
                    <stop offset="100%" stopColor="#2DD4BF" />
                  </linearGradient>
                </defs>
                <text
                  fill="#2DD4BF"
                  fontFamily="'Plus Jakarta Sans', system-ui, sans-serif"
                  fontSize="20"
                  fontWeight="800"
                  x="54"
                  y="37"
                >
                  Habita<tspan fill="white">Nexus</tspan>
                </text>
              </svg>
            </div>
            <p className="text-xs leading-relaxed max-w-sm text-[#8E9CB2] mb-4">
              Infraestructura tecnológica para acuerdos de arrendamiento asíncronos y custodia
              fiduciaria para Costa Rica y Centroamérica.
            </p>
            <div className="text-[11px] text-[#4A5568] uppercase tracking-wider">
              SAN JOSÉ • ESCAZÚ • HEREDIA • SAN PEDRO • ALAJUELA
            </div>
          </div>

          <div>
            <h4 className="text-xs uppercase text-white font-semibold mb-4">Plataforma</h4>
            <ul className="space-y-2.5">
              <li>
                <a
                  className="hover:text-teal-400 transition-colors"
                  href="#manifiesto"
                >
                  Manifiesto
                </a>
              </li>
              <li>
                <a
                  className="hover:text-teal-400 transition-colors"
                  href="#flujo"
                >
                  Customer Flow
                </a>
              </li>
              <li>
                <a
                  className="hover:text-teal-400 transition-colors"
                  href="#simulador"
                >
                  Calculadora Escrow
                </a>
              </li>
              <li>
                <a
                  className="hover:text-teal-400 transition-colors"
                  href="#arquitectura"
                >
                  Protocolo Jurídico
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-xs uppercase text-white font-semibold mb-4">Legal</h4>
            <ul className="space-y-2.5">
              <li>
                <a className="hover:text-teal-400 transition-colors" href="#">
                  Ley N° 7527 CR
                </a>
              </li>
              <li>
                <a className="hover:text-teal-400 transition-colors" href="#">
                  Firma Electrónica
                </a>
              </li>
              <li>
                <a className="hover:text-teal-400 transition-colors" href="#">
                  Privacidad de Datos
                </a>
              </li>
              <li>
                <a className="hover:text-teal-400 transition-colors" href="#">
                  Términos de Servicio
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-xs uppercase text-white font-semibold mb-4">Mesa de Ayuda</h4>
            <ul className="space-y-2.5">
              <li>
                <a className="hover:text-teal-400 transition-colors" href="#">
                  Soporte Inquilinos
                </a>
              </li>
              <li>
                <a className="hover:text-teal-400 transition-colors" href="#">
                  Atención Dueños
                </a>
              </li>
              <li>
                <a className="hover:text-teal-400 transition-colors" href="#">
                  Prensa &amp; Alianzas
                </a>
              </li>
              <li>
                <a
                  className="hover:text-teal-400 transition-colors"
                  href="mailto:soporte@habitanexus.com"
                >
                  soporte@habitanexus.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-slate-700/50 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px]">
          <p>© 2025 HabitaNexus Inc. Todos los derechos reservados.</p>
          <div className="flex items-center gap-6">
            <a className="hover:text-white transition-colors" href="#">
              Seguridad Financiera
            </a>
            <a className="hover:text-white transition-colors" href="#">
              Auditoría Fiduciaria
            </a>
            <a className="hover:text-white transition-colors" href="#">
              Cumplimiento SUGEF
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

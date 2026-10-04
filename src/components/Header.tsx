import React from 'react';
import { ThemeMode } from '../types';

interface HeaderProps {
  theme: ThemeMode;
  onToggleTheme: () => void;
  onOpenPortal: () => void;
  onOpenPublish: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  theme,
  onToggleTheme,
  onOpenPortal,
  onOpenPublish,
}) => {
  const isDark = theme === 'dark';

  return (
    <header
      className={`sticky top-0 z-50 transition-colors duration-500 ${
        isDark
          ? 'glass-swiss-dark hairline-b-dark text-slate-100'
          : 'glass-swiss-light hairline-b-light text-slate-900 shadow-sm'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-10 h-24 flex items-center justify-between">
        {/* Brand Minimal Identity with Vector DataStore Logo */}
        <a href="#" className="flex items-center gap-4 group">
          <div className="relative flex items-center">
            <svg
              className="h-10 w-auto transition-transform duration-300 group-hover:scale-105"
              fill="none"
              viewBox="0 0 240 60"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect
                fill={isDark ? 'url(#brandGradHeaderDark)' : 'url(#brandGradHeaderLight)'}
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
                  id="brandGradHeaderDark"
                  x1="6"
                  x2="46"
                  y1="10"
                  y2="50"
                >
                  <stop offset="0%" stopColor="#7C3AED" />
                  <stop offset="50%" stopColor="#0F766E" />
                  <stop offset="100%" stopColor="#2DD4BF" />
                </linearGradient>
                <linearGradient
                  gradientUnits="userSpaceOnUse"
                  id="brandGradHeaderLight"
                  x1="6"
                  x2="46"
                  y1="10"
                  y2="50"
                >
                  <stop offset="0%" stopColor="#0F766E" />
                  <stop offset="50%" stopColor="#0B132B" />
                  <stop offset="100%" stopColor="#7C3AED" />
                </linearGradient>
              </defs>
              <text
                fill={isDark ? '#2DD4BF' : '#0F766E'}
                fontFamily="'Plus Jakarta Sans', system-ui, sans-serif"
                fontSize="21"
                fontWeight="800"
                letterSpacing="-0.5"
                x="54"
                y="37"
              >
                Habita
                <tspan fill={isDark ? '#FFFFFF' : '#0B132B'}>
                  Nexus
                </tspan>
              </text>
            </svg>
          </div>
          <div
            className={`hidden xl:flex items-center gap-2 pl-3 border-l text-[10px] tracking-widest uppercase font-mono ${
              isDark
                ? 'border-teal-500/20 text-[#8E9CB2]'
                : 'border-slate-300 text-[#64748B]'
            }`}
          >
            <span>EDITION 2025</span>
            <span
              className={`w-1.5 h-1.5 rounded-full ${
                isDark ? 'bg-teal-400 animate-pulse' : 'bg-emerald-500 animate-pulse'
              }`}
            />
            <span>SISTEMA RESIDENCIAL SUIZO-LATAM</span>
          </div>
        </a>

        {/* Minimal Swiss Editorial Navigation */}
        <nav
          className={`hidden lg:flex items-center gap-10 text-[13px] font-mono tracking-wider uppercase ${
            isDark ? 'text-[#9FAEC6]' : 'text-[#475569]'
          }`}
        >
          <a
            className={`transition-colors font-medium ${
              isDark ? 'hover:text-teal-400' : 'hover:text-emerald-700'
            }`}
            href="#manifiesto"
          >
            01. Manifiesto
          </a>
          <a
            className={`transition-colors font-medium ${
              isDark ? 'hover:text-teal-400' : 'hover:text-emerald-700'
            }`}
            href="#flujo"
          >
            02. El Estándar
          </a>
          <a
            className={`transition-colors font-medium ${
              isDark ? 'hover:text-teal-400' : 'hover:text-emerald-700'
            }`}
            href="#arquitectura"
          >
            03. Protocolo Legal
          </a>
          <a
            className={`transition-colors font-medium ${
              isDark ? 'hover:text-teal-400' : 'hover:text-emerald-700'
            }`}
            href="#simulador"
          >
            04. Simulador
          </a>
        </nav>

        {/* Utility Chrome & Dual Theme Switch */}
        <div className="flex items-center gap-3 sm:gap-4">
          {/* Interactive Dark / Light Switch with smooth rotation */}
          <button
            aria-label="Cambiar Tema"
            onClick={onToggleTheme}
            className={`w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 cursor-pointer ${
              isDark
                ? 'hairline-border-dark text-[#9FAEC6] hover:text-teal-400 hover:border-teal-400 bg-slate-900/50'
                : 'hairline-border-light text-[#0B132B] hover:text-emerald-700 hover:border-emerald-600 bg-white shadow-sm'
            }`}
            title={isDark ? 'Cambiar a Modo Claro' : 'Cambiar a Modo Oscuro'}
          >
            <span className="material-symbols-outlined text-[19px] select-none transition-transform duration-300 transform hover:rotate-45">
              {isDark ? 'light_mode' : 'dark_mode'}
            </span>
          </button>

          {/* Portal Clientes */}
          <button
            onClick={onOpenPortal}
            className={`hidden sm:inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-mono tracking-wider uppercase transition-all cursor-pointer ${
              isDark
                ? 'hairline-border-dark text-white hover:bg-white/5'
                : 'hairline-border-light text-[#0B132B] bg-white hover:bg-slate-50 shadow-sm'
            }`}
          >
            <span>Portal Clientes</span>
          </button>

          {/* Publicar Inmueble */}
          <button
            onClick={onOpenPublish}
            className={`relative group overflow-hidden px-6 py-2.5 rounded-full font-display font-semibold text-xs uppercase tracking-wider transition-all cursor-pointer ${
              isDark
                ? 'bg-teal-400 text-[#0B132B] shadow-lg shadow-teal-400/20 hover:scale-105 hover:bg-teal-300'
                : 'bg-emerald-500 text-white shadow-md hover:bg-emerald-600 hover:scale-105'
            }`}
          >
            <span className="relative z-10 flex items-center gap-1.5">
              Publicar Inmueble
              <span className="material-symbols-outlined text-sm font-bold">arrow_outward</span>
            </span>
          </button>
        </div>
      </div>
    </header>
  );
};

import React, { useState } from 'react';
import { ThemeMode } from '../types';

interface PublishModalProps {
  theme: ThemeMode;
  onClose: () => void;
  onPublishSuccess: (propertyData: any) => void;
}

export const PublishModal: React.FC<PublishModalProps> = ({
  theme,
  onClose,
  onPublishSuccess,
}) => {
  const isDark = theme === 'dark';
  const [name, setName] = useState('');
  const [zone, setZone] = useState('Barrio Escalante');
  const [basePrice, setBasePrice] = useState(850);
  const [minPrice, setMinPrice] = useState(780);
  const [bedrooms, setBedrooms] = useState(1);
  const [bathrooms, setBathrooms] = useState(1);
  const [imageUrl, setImageUrl] = useState(
    'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&w=800&q=80'
  );
  const [published, setPublished] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setPublished(true);
    setTimeout(() => {
      onPublishSuccess({
        id: `prop-${Date.now()}`,
        code: `HN-${Math.floor(1000 + Math.random() * 9000)}`,
        name: name || 'Apartamento Moderno',
        location: `${zone}, CR`,
        zone,
        baseRent: basePrice,
        bedrooms,
        bathrooms,
        areaSqM: 65,
        imageUrl,
        status: 'En Oferta',
        initialOffer: {
          amount: basePrice,
          termMonths: 12,
          petsAllowed: true,
          timestamp: 'Ahora mismo',
        },
        counterOffer: {
          amount: minPrice,
          description: 'Rango de aceptación fiduciaria pre-aprobado por propietario.',
        },
      });
    }, 1200);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-md animate-fadeIn">
      <div
        className={`max-w-xl w-full rounded-3xl p-6 sm:p-8 relative shadow-2xl overflow-y-auto max-h-[92vh] ${
          isDark
            ? 'bg-[#0B132B] hairline-border-dark text-white'
            : 'bg-white border border-slate-200 text-slate-900'
        }`}
      >
        <div className="flex items-center justify-between pb-4 mb-4 border-b border-slate-500/20">
          <div className="flex items-center gap-2.5">
            <span className="material-symbols-outlined text-teal-400 text-2xl">
              add_business
            </span>
            <div>
              <h3 className="font-display font-semibold text-lg">
                Publicar Inmueble con Escrow Blindado
              </h3>
              <p
                className={`text-xs font-mono ${
                  isDark ? 'text-slate-400' : 'text-slate-500'
                }`}
              >
                Parámetros pre-aprobados para negociación asíncrona
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

        {!published ? (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-xs font-mono uppercase text-slate-400 mb-1">
                Título del Inmueble
              </label>
              <input
                required
                type="text"
                placeholder="Ej. Torres Los Yoses Studio #804"
                value={name}
                onChange={(e) => setName(e.target.value)}
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
                  Zona / Cantón
                </label>
                <select
                  value={zone}
                  onChange={(e) => setZone(e.target.value)}
                  className={`w-full px-4 py-2.5 rounded-xl text-xs font-mono border focus:outline-none focus:ring-1 focus:ring-teal-400 ${
                    isDark
                      ? 'bg-slate-900 border-slate-700 text-white'
                      : 'bg-white border-slate-300 text-slate-900'
                  }`}
                >
                  <option value="Barrio Escalante">Barrio Escalante</option>
                  <option value="Rohrmoser">Rohrmoser</option>
                  <option value="Escazú">San Rafael de Escazú</option>
                  <option value="Santa Ana">Santa Ana</option>
                  <option value="San Pedro">San Pedro de Montes de Oca</option>
                  <option value="Heredia">Heredia Centro / Las Flores</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-mono uppercase text-slate-400 mb-1">
                  URL de Imagen de la Propiedad
                </label>
                <input
                  type="url"
                  value={imageUrl}
                  onChange={(e) => setImageUrl(e.target.value)}
                  className={`w-full px-4 py-2.5 rounded-xl text-xs font-mono border focus:outline-none focus:ring-1 focus:ring-teal-400 ${
                    isDark
                      ? 'bg-slate-900 border-slate-700 text-white'
                      : 'bg-white border-slate-300 text-slate-900'
                  }`}
                />
              </div>
            </div>

            {/* Image Preview */}
            <div className="rounded-xl overflow-hidden h-32 relative border border-slate-500/20">
              <img
                src={imageUrl}
                alt="Vista previa"
                className="w-full h-full object-cover"
              />
              <div className="absolute bottom-2 left-2 px-2 py-0.5 rounded bg-black/60 backdrop-blur-md text-[10px] font-mono text-white">
                Vista previa del anuncio
              </div>
            </div>

            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="block text-xs font-mono uppercase text-slate-400 mb-1">
                  Canon Solicitado (USD/mes)
                </label>
                <input
                  type="number"
                  min="200"
                  max="10000"
                  value={basePrice}
                  onChange={(e) => setBasePrice(Number(e.target.value))}
                  className={`w-full px-4 py-2.5 rounded-xl text-xs font-mono border focus:outline-none focus:ring-1 focus:ring-teal-400 ${
                    isDark
                      ? 'bg-slate-900 border-slate-700 text-white'
                      : 'bg-white border-slate-300 text-slate-900'
                  }`}
                />
              </div>

              <div>
                <label className="block text-xs font-mono uppercase text-slate-400 mb-1">
                  Mínimo de Negociación Pre-aprobado
                </label>
                <input
                  type="number"
                  min="200"
                  max={basePrice}
                  value={minPrice}
                  onChange={(e) => setMinPrice(Number(e.target.value))}
                  className={`w-full px-4 py-2.5 rounded-xl text-xs font-mono border focus:outline-none focus:ring-1 focus:ring-teal-400 ${
                    isDark
                      ? 'bg-slate-900 border-slate-700 text-white'
                      : 'bg-white border-slate-300 text-slate-900'
                  }`}
                />
              </div>
            </div>

            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="block text-xs font-mono uppercase text-slate-400 mb-1">
                  Habitaciones
                </label>
                <input
                  type="number"
                  min="1"
                  max="10"
                  value={bedrooms}
                  onChange={(e) => setBedrooms(Number(e.target.value))}
                  className={`w-full px-4 py-2.5 rounded-xl text-xs font-mono border focus:outline-none focus:ring-1 focus:ring-teal-400 ${
                    isDark
                      ? 'bg-slate-900 border-slate-700 text-white'
                      : 'bg-white border-slate-300 text-slate-900'
                  }`}
                />
              </div>

              <div>
                <label className="block text-xs font-mono uppercase text-slate-400 mb-1">
                  Baños
                </label>
                <input
                  type="number"
                  min="1"
                  max="10"
                  step="0.5"
                  value={bathrooms}
                  onChange={(e) => setBathrooms(Number(e.target.value))}
                  className={`w-full px-4 py-2.5 rounded-xl text-xs font-mono border focus:outline-none focus:ring-1 focus:ring-teal-400 ${
                    isDark
                      ? 'bg-slate-900 border-slate-700 text-white'
                      : 'bg-white border-slate-300 text-slate-900'
                  }`}
                />
              </div>
            </div>

            <div
              className={`p-3.5 rounded-2xl border text-xs font-mono leading-relaxed ${
                isDark ? 'border-amber-400/30 bg-amber-400/5 text-amber-300' : 'border-amber-300 bg-amber-50 text-amber-900'
              }`}
            >
              <strong>Blindaje Fiduciario:</strong> El contrato se redacta automáticamente conforme la Ley N° 7527 y el depósito de garantía ingresará directo a custodia de fideicomiso.
            </div>

            <button
              type="submit"
              className={`w-full py-3.5 rounded-full font-mono font-bold text-xs uppercase tracking-widest cursor-pointer transition-all ${
                isDark
                  ? 'bg-teal-400 text-slate-950 hover:bg-teal-300'
                  : 'bg-emerald-600 text-white hover:bg-emerald-700'
              }`}
            >
              Publicar Inmueble en HabitaNexus
            </button>
          </form>
        ) : (
          <div className="text-center space-y-4 py-4">
            <div className="w-12 h-12 rounded-full bg-emerald-500 text-white flex items-center justify-center mx-auto">
              <span className="material-symbols-outlined text-2xl font-bold">check</span>
            </div>
            <h4 className="font-display font-bold text-lg text-emerald-400">
              ¡Inmueble Publicado y Parámetros Blindados!
            </h4>
            <p className="text-xs text-slate-400 font-mono">
              Se ha vinculado a la terminal de negociación en vivo. Los inquilinos verificados podrán emitir contraofertas guiadas dentro del rango preaprobado (${minPrice} - ${basePrice} USD).
            </p>
            <div className="pt-2">
              <button
                onClick={onClose}
                className={`px-6 py-2.5 rounded-full text-xs font-mono font-semibold uppercase tracking-wider cursor-pointer ${
                  isDark ? 'bg-teal-400 text-slate-950 hover:bg-teal-300' : 'bg-emerald-600 text-white hover:bg-emerald-700'
                }`}
              >
                Ver en la Plataforma
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

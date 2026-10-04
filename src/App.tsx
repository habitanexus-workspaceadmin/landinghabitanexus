import React, { useState, useEffect } from 'react';
import { ThemeMode, Property } from './types';
import { PROPERTIES } from './data/properties';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Manifesto } from './components/Manifesto';
import { WorkflowSteps } from './components/WorkflowSteps';
import { Simulator } from './components/Simulator';
import { LegalArchitecture } from './components/LegalArchitecture';
import { CallToAction } from './components/CallToAction';
import { Footer } from './components/Footer';
import { BiometricModal } from './components/BiometricModal';
import { BindingOfferModal } from './components/BindingOfferModal';
import { PublishModal } from './components/PublishModal';
import { MarketAuditModal } from './components/MarketAuditModal';
import { AppDownloadModal } from './components/AppDownloadModal';
import { PortalModal } from './components/PortalModal';

export default function App() {
  // Theme state: dark or light, defaults to dark as in Image 1
  const [theme, setTheme] = useState<ThemeMode>(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('hn_theme');
      if (saved === 'dark' || saved === 'light') return saved;
    }
    return 'dark';
  });

  // Properties state
  const [properties, setProperties] = useState<Property[]>(PROPERTIES);
  const [selectedProperty, setSelectedProperty] = useState<Property>(PROPERTIES[0]);

  // Modals state
  const [biometricModalOpen, setBiometricModalOpen] = useState(false);
  const [bindingOfferModalOpen, setBindingOfferModalOpen] = useState(false);
  const [currentOfferDetails, setCurrentOfferDetails] = useState<any>(null);
  const [publishModalOpen, setPublishModalOpen] = useState(false);
  const [marketAuditModalOpen, setMarketAuditModalOpen] = useState(false);
  const [appDownloadModalOpen, setAppDownloadModalOpen] = useState(false);
  const [portalModalOpen, setPortalModalOpen] = useState(false);

  // Sync theme with html element
  useEffect(() => {
    const root = document.documentElement;
    if (theme === 'dark') {
      root.classList.add('dark');
      root.classList.remove('light');
    } else {
      root.classList.add('light');
      root.classList.remove('dark');
    }
    localStorage.setItem('hn_theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'));
  };

  const handleEmitOffer = (details: any) => {
    setCurrentOfferDetails(details);
    setBindingOfferModalOpen(true);
  };

  const handlePublishSuccess = (newProperty: Property) => {
    setProperties((prev) => [newProperty, ...prev]);
    setSelectedProperty(newProperty);
    setPublishModalOpen(false);
  };

  const scrollToSimulator = () => {
    const el = document.getElementById('simulador');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const isDark = theme === 'dark';

  return (
    <div
      className={`min-h-screen font-body antialiased transition-colors duration-500 relative ${
        isDark ? 'bg-[#0B132B] text-[#F8FAFC]' : 'bg-[#F8FAFC] text-[#0B132B]'
      }`}
    >
      {/* Background Architectural Grid & Subtle Ambient Glow */}
      <div className="fixed inset-0 grid-lines pointer-events-none z-0" />
      <div
        className={`fixed top-0 left-1/4 w-[650px] h-[650px] blur-[160px] pointer-events-none z-0 rounded-full transition-opacity duration-500 ${
          isDark ? 'bg-teal-400/5' : 'bg-emerald-400/10'
        }`}
      />
      <div
        className={`fixed bottom-1/4 right-10 w-[500px] h-[500px] blur-[180px] pointer-events-none z-0 rounded-full transition-opacity duration-500 ${
          isDark ? 'bg-purple-600/10' : 'bg-purple-400/10'
        }`}
      />

      {/* 1. Header Navigation */}
      <Header
        theme={theme}
        onToggleTheme={toggleTheme}
        onOpenPortal={() => setPortalModalOpen(true)}
        onOpenPublish={() => setPublishModalOpen(true)}
      />

      <main className="relative z-10">
        {/* 2. Hero Section */}
        <Hero
          theme={theme}
          selectedProperty={selectedProperty}
          onSelectProperty={setSelectedProperty}
          properties={properties}
          onOpenBiometric={() => setBiometricModalOpen(true)}
          onOpenAudit={() => setMarketAuditModalOpen(true)}
          onScrollToSimulator={scrollToSimulator}
        />

        {/* 3. Section 01: Manifesto */}
        <Manifesto theme={theme} />

        {/* 4. Section 02: 4-Step Standard */}
        <WorkflowSteps theme={theme} />

        {/* 5. Section 03: Dynamic Simulator & Escrow Calculator */}
        <Simulator theme={theme} onEmitOffer={handleEmitOffer} />

        {/* 6. Section 04: Legal & Financial Architecture */}
        <LegalArchitecture
          theme={theme}
          onOpenContractSample={() => setBiometricModalOpen(true)}
        />

        {/* 7. CTA Monumental Section */}
        <CallToAction
          theme={theme}
          onOpenAppModal={() => setAppDownloadModalOpen(true)}
          onOpenOwnerPortal={() => setPublishModalOpen(true)}
        />
      </main>

      {/* 8. Institutional Footer */}
      <Footer theme={theme} />

      {/* Modals & Interactive Overlays */}
      {biometricModalOpen && (
        <BiometricModal
          theme={theme}
          property={selectedProperty}
          onClose={() => setBiometricModalOpen(false)}
        />
      )}

      {bindingOfferModalOpen && (
        <BindingOfferModal
          theme={theme}
          offerDetails={currentOfferDetails}
          onClose={() => setBindingOfferModalOpen(false)}
        />
      )}

      {publishModalOpen && (
        <PublishModal
          theme={theme}
          onClose={() => setPublishModalOpen(false)}
          onPublishSuccess={handlePublishSuccess}
        />
      )}

      {marketAuditModalOpen && (
        <MarketAuditModal
          theme={theme}
          onClose={() => setMarketAuditModalOpen(false)}
        />
      )}

      {appDownloadModalOpen && (
        <AppDownloadModal
          theme={theme}
          onClose={() => setAppDownloadModalOpen(false)}
        />
      )}

      {portalModalOpen && (
        <PortalModal
          theme={theme}
          onClose={() => setPortalModalOpen(false)}
          onSelectRole={(role) => {
            if (role === 'arrendador') {
              setPublishModalOpen(true);
            } else {
              scrollToSimulator();
            }
          }}
        />
      )}
    </div>
  );
}

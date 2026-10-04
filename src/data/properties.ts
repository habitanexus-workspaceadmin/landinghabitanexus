import { Property } from '../types';

export const PROPERTIES: Property[] = [
  {
    id: 'prop-1',
    code: 'HN-4029',
    name: 'Barrio Escalante Studio #402',
    location: 'San José, CR',
    zone: 'Barrio Escalante / San Pedro',
    baseRent: 750,
    bedrooms: 1,
    bathrooms: 1,
    areaSqM: 52,
    imageUrl: 'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=800&q=80',
    status: 'En Oferta',
    initialOffer: {
      amount: 850,
      termMonths: 12,
      petsAllowed: true,
      timestamp: '14:20 CR'
    },
    counterOffer: {
      amount: 820,
      description: 'Incluye parqueo techado y cuota condominal completa.'
    }
  },
  {
    id: 'prop-2',
    code: 'HN-5102',
    name: 'Rohrmoser Sky Tower #14B',
    location: 'San José, CR',
    zone: 'Rohrmoser / Sabana Norte',
    baseRent: 1100,
    bedrooms: 2,
    bathrooms: 2,
    areaSqM: 85,
    imageUrl: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=800&q=80',
    status: 'En Oferta',
    initialOffer: {
      amount: 1150,
      termMonths: 12,
      petsAllowed: false,
      timestamp: '11:05 CR'
    },
    counterOffer: {
      amount: 1080,
      description: 'Incluye bodega privada y acceso a gimnasio de alta gama.'
    }
  },
  {
    id: 'prop-3',
    code: 'HN-6330',
    name: 'Escazú Village Garden #205',
    location: 'Escazú, CR',
    zone: 'San Rafael de Escazú',
    baseRent: 1400,
    bedrooms: 2,
    bathrooms: 2.5,
    areaSqM: 110,
    imageUrl: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80',
    status: 'En Oferta',
    initialOffer: {
      amount: 1450,
      termMonths: 24,
      petsAllowed: true,
      timestamp: '09:45 CR'
    },
    counterOffer: {
      amount: 1350,
      description: 'Acuerdo por 24 meses con tarifa congelada e internet simétrico.'
    }
  },
  {
    id: 'prop-4',
    code: 'HN-7218',
    name: 'Santa Ana Green Loft #08',
    location: 'Santa Ana, CR',
    zone: 'Pozos de Santa Ana',
    baseRent: 950,
    bedrooms: 1,
    bathrooms: 1.5,
    areaSqM: 68,
    imageUrl: 'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&w=800&q=80',
    status: 'En Oferta',
    initialOffer: {
      amount: 990,
      termMonths: 12,
      petsAllowed: true,
      timestamp: '16:15 CR'
    },
    counterOffer: {
      amount: 930,
      description: 'Incluye línea blanca completa y piscina comunitaria.'
    }
  }
];

export const MARKET_DATA = [
  { zone: 'Barrio Escalante', avgRent: '$820', avgTime: '3.2 días', demand: 'Muy Alta', securityDeposit: '100% Escrow' },
  { zone: 'Rohrmoser / Sabana', avgRent: '$1,050', avgTime: '2.8 días', demand: 'Alta', securityDeposit: '100% Escrow' },
  { zone: 'Escazú Central', avgRent: '$1,380', avgTime: '4.1 días', demand: 'Media-Alta', securityDeposit: '100% Escrow' },
  { zone: 'Santa Ana / Pozos', avgRent: '$980', avgTime: '3.5 días', demand: 'Alta', securityDeposit: '100% Escrow' },
  { zone: 'Heredia Las Flores', avgRent: '$710', avgTime: '2.5 días', demand: 'Muy Alta', securityDeposit: '100% Escrow' },
  { zone: 'San Pedro Universidades', avgRent: '$680', avgTime: '2.0 días', demand: 'Extrema', securityDeposit: '100% Escrow' }
];

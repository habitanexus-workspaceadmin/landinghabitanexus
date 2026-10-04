export type ThemeMode = 'dark' | 'light';

export interface Property {
  id: string;
  code: string;
  name: string;
  location: string;
  zone: string;
  baseRent: number;
  bedrooms: number;
  bathrooms: number;
  areaSqM: number;
  imageUrl: string;
  status: 'En Oferta' | 'En Validación' | 'Cierre Escrow';
  counterOffer: {
    amount: number;
    description: string;
  };
  initialOffer: {
    amount: number;
    termMonths: number;
    petsAllowed: boolean;
    timestamp: string;
  };
}

export interface SimulatorState {
  baseRent: number;
  contractTerm: 12 | 24;
  services: {
    water: boolean;
    internet: boolean;
    maintenance: boolean;
  };
  currency: 'USD' | 'CRC';
}

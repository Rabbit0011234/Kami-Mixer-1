
export enum PortfolioCategory {
  ARRANGEMENT = 'Music Arrangement',
  MIXING = 'Vocal Mixing'
}

export interface PortfolioItem {
  id: string;
  title: string;
  thumbnail: string;
  videoUrl: string;
  category: PortfolioCategory;
}

export interface PricingTier {
  title: string;
  price: string;
  description: string;
}

export interface PricingCategory {
  title: string;
  tiers: PricingTier[];
}

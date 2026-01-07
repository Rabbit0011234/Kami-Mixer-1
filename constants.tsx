
import { PortfolioCategory, PricingCategory } from './types';

export const PRICING_DATA: PricingCategory[] = [
  {
    title: "Music Arrangement",
    tiers: [
      {
        title: "Original Music",
        price: "THB 10,000",
        description: "Custom creation from scratch, tailored to your vision."
      },
      {
        title: "Cover Arrange",
        price: "THB 5,000",
        description: "Unique re-arranged style for existing compositions."
      },
      {
        title: "BGM (1:00–2:00)",
        price: "THB 2,000",
        description: "Short clips for streams, intro/outro, or transitions."
      }
    ]
  },
  {
    title: "Vocal Mixing",
    tiers: [
      {
        title: "Full Song",
        price: "THB 2,000",
        description: "Complete professional mix with effects and balancing."
      },
      {
        title: "Half Song",
        price: "THB 1,000",
        description: "Standard mix for shorter tracks or simpler setups."
      },
      {
        title: "One Hook / Short Part",
        price: "THB 500",
        description: "Quick turnaround for small segments or hooks."
      }
    ]
  }
];

export const ORDER_STEPS = [
  {
    title: "Prepare Files",
    description: "Audio files (MP3/WAV), Karaoke/Offvocal, and raw recordings."
  },
  {
    title: "Gather References",
    description: "Provide links to songs with the style or mix you desire."
  },
  {
    title: "Detail Your Project",
    description: "Define deadline, budget, and specific instructions for the work."
  },
  {
    title: "Initial Contact",
    description: "Reach out via Twitter, Discord, or Email with your requirements."
  },
  {
    title: "Review & Refine",
    description: "Get updates, provide feedback, and receive the final mastered version."
  }
];

// Mocking 200 items (20 pages * 10 items) for demonstration
export const generateMockPortfolio = (category: PortfolioCategory) => {
  return Array.from({ length: 200 }).map((_, i) => ({
    id: `${category.toLowerCase().replace(' ', '-')}-${i}`,
    title: `${category} Project #${i + 1}`,
    thumbnail: `https://picsum.photos/seed/${category}-${i}/800/450`,
    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ', // Placeholder
    category
  }));
};

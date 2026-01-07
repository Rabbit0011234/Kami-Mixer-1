
import { PortfolioCategory, PricingCategory, PortfolioItem } from './types';

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
export const generateMockPortfolio = (category: PortfolioCategory): PortfolioItem[] => {
  return Array.from({ length: 200 }).map((_, i) => {
    // Default title using "Work" instead of "Project"
    let title = `${category} Work #${i + 1}`;
    // Generic Lofi track for placeholders
    let videoUrl = 'https://www.youtube.com/embed/jfKfPfyJRdk'; 
    let thumbnail = `https://picsum.photos/seed/${category}-${i}/800/450`;
    
    // Set the specific project for Arrangement Work #1 as requested
    if (category === PortfolioCategory.ARRANGEMENT && i === 0) {
      title = "【ภาษาไทย】Connecting / halyosy【Happy New Year 2026】";
      videoUrl = "https://www.youtube.com/embed/G3QM2tKjhKQ";
      thumbnail = "https://img.youtube.com/vi/G3QM2tKjhKQ/maxresdefault.jpg";
    }

    // Set the specific project for Arrangement Work #2
    if (category === PortfolioCategory.ARRANGEMENT && i === 1) {
      title = "Empty old City - Daisy Crown (Thai Ver.) / covered by RLanz";
      videoUrl = "https://www.youtube.com/embed/7YKIhGm9av8";
      thumbnail = "https://img.youtube.com/vi/7YKIhGm9av8/maxresdefault.jpg";
    }

    return {
      id: `${category.toLowerCase().replace(/\s+/g, '-')}-${i}`,
      title,
      thumbnail,
      videoUrl,
      category
    };
  });
};


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
    
    // Set the specific project for Arrangement Work #1
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

    // Set the specific project for Arrangement Work #3
    if (category === PortfolioCategory.ARRANGEMENT && i === 2) {
      title = "【ORIGINAL SONG】Today Is For You - NEBUEL";
      videoUrl = "https://www.youtube.com/embed/ilvtdVs_VsE";
      thumbnail = "https://img.youtube.com/vi/ilvtdVs_VsE/maxresdefault.jpg";
    }

    // Set the specific project for Arrangement Work #4
    if (category === PortfolioCategory.ARRANGEMENT && i === 3) {
      title = "NONT TANONT - คืนที่หมาเต็มวัด ft.Singto Numchok Covered by Aki X Bishamon【 Cover Song 】🔥🐈‍⬛";
      videoUrl = "https://www.youtube.com/embed/GHxLr75Wv9U";
      thumbnail = "https://img.youtube.com/vi/GHxLr75Wv9U/maxresdefault.jpg";
    }

    // Set the specific project for Arrangement Work #5
    if (category === PortfolioCategory.ARRANGEMENT && i === 4) {
      title = "『Cover』Uchiage Hanabi DAOKO x Kenshi Yonezu By Sungeuns X Whyte Ch.【Forry】";
      videoUrl = "https://www.youtube.com/embed/tVzMIIyqhX0";
      thumbnail = "https://img.youtube.com/vi/tVzMIIyqhX0/maxresdefault.jpg";
    }

    // Set the specific project for Arrangement Work #6
    if (category === PortfolioCategory.ARRANGEMENT && i === 5) {
      title = "Chiisana Koi no Uta (MONGOL800) Covered by 【 Hajime Rei 】";
      videoUrl = "https://www.youtube.com/embed/BTjgM9dmesk";
      thumbnail = "https://img.youtube.com/vi/BTjgM9dmesk/maxresdefault.jpg";
    }

    // Set the specific project for Arrangement Work #7
    if (category === PortfolioCategory.ARRANGEMENT && i === 6) {
      title = "คุณขา - MaewBaew |Official Music Video|";
      videoUrl = "https://www.youtube.com/embed/ZM7K2K7aiwE";
      thumbnail = "https://img.youtube.com/vi/ZM7K2K7aiwE/maxresdefault.jpg";
    }

    // Set the specific project for Arrangement Work #8
    if (category === PortfolioCategory.ARRANGEMENT && i === 7) {
      title = "【Thai ver.】Lulala! Lululala! - Ciaccona (Wuthering Waves)【covered by Noyashi】";
      videoUrl = "https://www.youtube.com/embed/F6vl4uDW_cE";
      thumbnail = "https://img.youtube.com/vi/F6vl4uDW_cE/maxresdefault.jpg";
    }

    // Set the specific project for Arrangement Work #9
    if (category === PortfolioCategory.ARRANGEMENT && i === 8) {
      title = "Partner Covered by TAKOPERO 🌸";
      videoUrl = "https://www.youtube.com/embed/ZoD8q6f3pHk";
      thumbnail = "https://img.youtube.com/vi/ZoD8q6f3pHk/maxresdefault.jpg";
    }

    // Set the specific project for Arrangement Work #10 as requested
    if (category === PortfolioCategory.ARRANGEMENT && i === 9) {
      title = "Haru - 晴る／ヨลシカ【Covered by Shishiou Seito】";
      videoUrl = "https://www.youtube.com/embed/-IzktNhIlxY";
      thumbnail = "https://img.youtube.com/vi/-IzktNhIlxY/maxresdefault.jpg";
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

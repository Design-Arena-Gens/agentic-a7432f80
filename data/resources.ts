export type ResourceCategory = {
  id: string;
  title: string;
  tagline: string;
  resources: {
    name: string;
    type: 'Video' | 'PDF' | 'Template' | 'Checklist' | 'Playlist' | 'Guide';
    description: string;
    link: string;
  }[];
};

export const resourceCategories: ResourceCategory[] = [
  {
    id: 'orientation',
    title: 'MEXT Orientation Vault',
    tagline: 'Understand expectations before stepping on campus',
    resources: [
      {
        name: 'Orientation Survival Kit',
        type: 'Checklist',
        description:
          'Priority language moves for your first 14 days in Japan with phonetic scaffolding.',
        link: 'https://mextlab.io/resources/orientation'
      },
      {
        name: 'Dorm Dialogue Scripts',
        type: 'Template',
        description:
          'Role-play situations with roommates, RAs, and admin staff to build social comfort.',
        link: 'https://mextlab.io/resources/dorm-dialogues'
      }
    ]
  },
  {
    id: 'jlpt',
    title: 'JLPT Playbooks',
    tagline: 'Tactical pathways for N5–N2 success on scholarship timelines',
    resources: [
      {
        name: 'N4 Listening Reconstruction Lab',
        type: 'Guide',
        description:
          'Shadowing drills with transcript layering to decode rapid campus announcements.',
        link: 'https://mextlab.io/resources/jlpt-n4'
      },
      {
        name: 'Grammar Synthesis Sprints',
        type: 'PDF',
        description:
          'Weekly workbook aligning grammar clusters with lab meeting use cases.',
        link: 'https://mextlab.io/resources/grammar-sprints'
      },
      {
        name: 'Kanji Frequency Canvas',
        type: 'Template',
        description:
          'Spaced repetition storyboard targeting 600 high-impact kanji for research life.',
        link: 'https://mextlab.io/resources/kanji-canvas'
      }
    ]
  },
  {
    id: 'culture',
    title: 'Culture & Community',
    tagline: 'Contextual fluency for thriving beyond the classroom',
    resources: [
      {
        name: 'Lab Communication Etiquette',
        type: 'Video',
        description:
          'Faculty interviews on navigating senpai-kohai dynamics in labs and seminars.',
        link: 'https://mextlab.io/resources/lab-etiquette'
      },
      {
        name: 'City Immersion Maps',
        type: 'Playlist',
        description:
          'Curated walk-and-talk audio tours designed for vocabulary absorption on the go.',
        link: 'https://mextlab.io/resources/immersion-maps'
      }
    ]
  }
];

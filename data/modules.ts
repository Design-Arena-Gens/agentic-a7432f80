export type Module = {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  outcomes: string[];
  duration: string;
  level: 'Foundation' | 'Progression' | 'Mastery';
};

export const modules: Module[] = [
  {
    id: 'foundations',
    title: 'Foundations Studio',
    subtitle: 'Kana, Survival Grammar & Cultural Primer',
    description:
      'Build a resilient base with a 4-week sprint covering hiragana, katakana, daily expressions, and intercultural mindset training tailored for arriving scholars.',
    outcomes: [
      'Master both kana systems with spaced repetition scripts',
      'Communicate basic needs in residence halls and campus life',
      'Understand core etiquette pillars for academic settings'
    ],
    duration: '4 weeks',
    level: 'Foundation'
  },
  {
    id: 'jlpt-n4',
    title: 'JLPT N4 Accelerator',
    subtitle: 'Grammar Architecture & Listening Immersion',
    description:
      'Develop structural fluency through scenario-driven grammar labs, listening clinics curated for MEXT community life, and weekly live review labs.',
    outcomes: [
      'Apply 60+ sentence patterns to university life contexts',
      'Decode fast-paced campus announcements and lectures',
      'Deploy note-taking frameworks aligned with JLPT listening tasks'
    ],
    duration: '8 weeks',
    level: 'Progression'
  },
  {
    id: 'research-lab',
    title: 'Research Lab Japanese',
    subtitle: 'Academic Writing, Seminars & Lab Talk',
    description:
      'Integrate into research labs with corpus-informed academic expressions, presentation rehearsal studios, and technical vocabulary sprints.',
    outcomes: [
      'Write persuasive research abstracts & lab updates in Japanese',
      'Lead bilingual lab meetings using collaborative scripts',
      'Field advisor feedback with confidence and nuance'
    ],
    duration: '6 weeks',
    level: 'Mastery'
  },
  {
    id: 'immersion',
    title: 'Immersion Architects',
    subtitle: 'Build a Personal Ecosystem',
    description:
      'Design a sustainable immersion system blending media, mentorship, and city exploration—perfect for scholars balancing research deliverables.',
    outcomes: [
      'Construct a weekly immersion blueprint grounded in research goals',
      'Curate native materials with comprehension scaffolding',
      'Embed reflective practice through bilingual journaling rituals'
    ],
    duration: 'Ongoing',
    level: 'Mastery'
  }
];

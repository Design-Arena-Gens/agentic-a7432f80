export type Milestone = {
  title: string;
  description: string;
  phase: 'Orientation' | 'Integration' | 'Fluency' | 'Leadership';
  timeframe: string;
  focus: string[];
};

export const milestones: Milestone[] = [
  {
    title: 'Embark & Align',
    description:
      'You set up your kanji command center, map priority vocabulary to your research theme, and establish weekly accountability loops with your cohort coach.',
    phase: 'Orientation',
    timeframe: 'Weeks 1-2',
    focus: [
      'Daily kana & pronunciation calibration',
      'University admin & dorm communications',
      'Cultural mindset reframing'
    ]
  },
  {
    title: 'Campus Pulse',
    description:
      'You navigate university bureaucracy in Japanese, start participating in lab meetings, and summarize lectures using the bilingual Cornell note template.',
    phase: 'Integration',
    timeframe: 'Weeks 3-8',
    focus: [
      'JLPT grammar deployment in real contexts',
      'Listening deconstruction labs',
      'Peer feedback cycles'
    ]
  },
  {
    title: 'Research Voice',
    description:
      'You pitch your research in Japanese, publish reflection posts in the community portal, and co-facilitate study pods for incoming scholars.',
    phase: 'Fluency',
    timeframe: 'Months 3-6',
    focus: [
      'Academic writing studios',
      'Lab presentation rehearsal',
      'Mentor shadowing'
    ]
  },
  {
    title: 'Lead & Amplify',
    description:
      'You co-create bilingual research posters, mentor the next cohort, and represent your department in university-wide forums with confidence.',
    phase: 'Leadership',
    timeframe: 'Months 6-9',
    focus: [
      'Advanced discourse & facilitation',
      'High-stakes communication drills',
      'Portfolio & scholarship storytelling'
    ]
  }
];

const faqs = [
  {
    question: 'Is the program aligned with MEXT scholarship requirements?',
    answer:
      'Yes. Our roadmap mirrors MEXT onboarding, university placement exams, and lab integration checkpoints. Every module is designed with alumni mentors and current faculty advisors.'
  },
  {
    question: 'What level of Japanese do I need to start?',
    answer:
      'Cohorts range from absolute beginners to JLPT N2. We group scholars by proficiency, research discipline, and communication goals so your practice is always relevant.'
  },
  {
    question: 'How much live support will I receive?',
    answer:
      'Expect two weekly live labs, an office hour, and optional micro-coaching. In between sessions, community pods maintain accountability with structured feedback prompts.'
  },
  {
    question: 'Can I join if I am already in Japan?',
    answer:
      'Absolutely. We adapt your plan around current lab demands, coursework, and cultural commitments. The immersion ecosystem is engineered for in-country application.'
  }
];

export function Faq() {
  return (
    <section className="mx-auto max-w-4xl space-y-10 px-6 py-20">
      <div className="text-center">
        <p className="text-sm font-semibold uppercase tracking-wide text-sakura-200">
          FAQ
        </p>
        <h2 className="mt-3 font-display text-3xl text-white sm:text-4xl">
          Your questions, answered
        </h2>
      </div>
      <div className="space-y-4">
        {faqs.map((faq) => (
          <details
            key={faq.question}
            className="group rounded-2xl border border-white/10 bg-white/5 px-6 py-5 transition hover:border-sakura-400/40"
          >
            <summary className="flex cursor-pointer items-center justify-between gap-4 text-left text-sm font-semibold text-white">
              {faq.question}
              <span className="text-sakura-200 transition group-open:rotate-45">
                +
              </span>
            </summary>
            <p className="mt-3 text-sm text-slate-300">{faq.answer}</p>
          </details>
        ))}
      </div>
    </section>
  );
}

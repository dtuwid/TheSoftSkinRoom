import { SectionHeading } from './SectionHeading';
import { Reveal } from './Reveal';
import { Sparkles, Flower2, Sofa, Gem, Users } from 'lucide-react';

const REASONS = [
  {
    icon: Sparkles,
    title: 'Personalized Treatment Approach',
    text: 'No two faces are alike. We design every plan around your skin, your goals, and your comfort.',
  },
  {
    icon: Flower2,
    title: 'Modern Aesthetic Treatments',
    text: 'Advanced, evidence-based techniques delivered with a gentle, refined touch.',
  },
  {
    icon: Sofa,
    title: 'Comfortable & Welcoming',
    text: 'A calm, boutique environment where you can unwind and feel completely at ease.',
  },
  {
    icon: Gem,
    title: 'Natural-Looking Results',
    text: 'Subtle refinement over obvious change — so you look rested, not reshaped.',
  },
  {
    icon: Users,
    title: 'Client-Centered Experience',
    text: 'Your questions, your timeline, your comfort. We listen first, then treat.',
  },
];

const STATS = [
  { value: '6+', label: 'Signature Treatments' },
  { value: '100%', label: 'Personalized Plans' },
  { value: '1:1', label: 'Dedicated Care' },
];

export function WhyChooseUs() {
  return (
    <section className="relative overflow-hidden bg-mocha py-24 text-ivory sm:py-32">
      {/* warm glow accents */}
      <div className="pointer-events-none absolute -left-32 top-0 h-96 w-96 rounded-full bg-clay/30 blur-3xl" />
      <div className="pointer-events-none absolute -right-24 bottom-0 h-80 w-80 rounded-full bg-nude/20 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-10">
        <div className="flex flex-col items-center text-center">
          <Reveal>
            <span className="eyebrow mb-4 inline-flex items-center gap-2 text-nude/90">
              <span className="h-px w-8 bg-nude/60" />
              Why Choose Us
            </span>
            <h2 className="max-w-2xl text-3xl font-light leading-[1.15] text-ivory sm:text-4xl md:text-[2.75rem] text-balance">
              The difference is in <span className="italic">the details</span>
            </h2>
          </Reveal>
        </div>

        <div className="mt-16 grid gap-x-10 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
          {REASONS.map((reason, i) => (
            <Reveal
              key={reason.title}
              delay={i * 90}
              className="group border-t border-ivory/15 pt-6"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-ivory/10 text-blush transition-colors duration-500 group-hover:bg-ivory/20">
                <reason.icon className="h-5 w-5" strokeWidth={1.5} />
              </div>
              <h3 className="mt-5 font-serif text-xl font-medium text-ivory">{reason.title}</h3>
              <p className="mt-2.5 font-sans text-sm font-light leading-relaxed text-ivory/70 text-pretty">
                {reason.text}
              </p>
            </Reveal>
          ))}

          {/* Stats card filling the 6th slot */}
          <Reveal delay={450} className="flex flex-col justify-center gap-8 rounded-3xl bg-ivory/5 p-8 ring-1 ring-ivory/10 sm:col-span-2 lg:col-span-1">
            <div className="grid grid-cols-3 gap-4">
              {STATS.map((stat) => (
                <div key={stat.label} className="text-center">
                  <div className="font-serif text-3xl font-light text-blush">{stat.value}</div>
                  <div className="mt-1 font-sans text-[0.65rem] uppercase tracking-[0.12em] text-ivory/60">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

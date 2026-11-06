import { Reveal } from './Reveal';
import { Leaf, HeartHandshake } from 'lucide-react';

const ABOUT_MAIN =
  'https://images.pexels.com/photos/6543552/pexels-photo-6543552.jpeg?auto=compress&cs=tinysrgb&w=900';
const ABOUT_SUB =
  'https://images.pexels.com/photos/7795393/pexels-photo-7795393.jpeg?auto=compress&cs=tinysrgb&w=700';

const HIGHLIGHTS = [
  { icon: HeartHandshake, title: 'Personalized Care', text: 'Every treatment begins with understanding your unique skin and goals.' },
  { icon: Leaf, title: 'Natural Results', text: 'Subtle enhancements that honor and elevate your natural beauty.' },
];

export function About() {
  return (
    <section id="about" className="relative bg-ivory py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="grid items-center gap-14 lg:grid-cols-2 lg:gap-20">
          {/* Images */}
          <Reveal className="relative">
            <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem] shadow-xl shadow-mocha/10">
              <img
                src={ABOUT_MAIN}
                alt="Woman applying skincare as part of a wellness routine"
                className="h-full w-full object-cover transition-transform duration-[1.4s] hover:scale-105"
                loading="lazy"
              />
            </div>
            <div className="absolute -bottom-10 -right-4 hidden h-48 w-44 overflow-hidden rounded-2xl border-8 border-ivory shadow-2xl shadow-mocha/20 sm:block md:-right-8 md:h-56 md:w-52">
              <img
                src={ABOUT_SUB}
                alt="Serene spa candles and skincare products"
                className="h-full w-full object-cover"
                loading="lazy"
              />
            </div>
            {/* decorative ring */}
            <div className="absolute -left-6 -top-6 -z-10 h-32 w-32 rounded-full border border-nude/30" />
          </Reveal>

          {/* Text */}
          <div>
            <Reveal>
              <span className="eyebrow mb-5 inline-flex items-center gap-2">
                <span className="h-px w-8 bg-nude" />
                About The Studio
              </span>
              <h2 className="text-3xl leading-[1.15] text-ink sm:text-4xl md:text-[2.75rem] text-balance">
                A Softer Approach to <span className="italic text-mocha">Beautiful Skin.</span>
              </h2>
            </Reveal>

            <Reveal delay={120}>
              <p className="mt-6 max-w-prose font-sans text-base font-light leading-relaxed text-muted text-pretty">
                The Soft Skin Room Wellness is a welcoming destination in the heart of Tarzana for
                personalized skincare, beauty, and aesthetic treatments. We believe that looking
                refreshed should never mean looking overdone — our approach is gentle, intentional,
                and entirely centered around you.
              </p>
              <p className="mt-4 max-w-prose font-sans text-base font-light leading-relaxed text-muted text-pretty">
                From advanced rejuvenation to subtle refinement, every treatment is thoughtfully
                tailored to enhance your natural radiance in a calm, comfortable environment.
              </p>
            </Reveal>

            <div className="mt-10 grid gap-6 sm:grid-cols-2">
              {HIGHLIGHTS.map((item, i) => (
                <Reveal key={item.title} delay={200 + i * 120} className="flex gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-cream text-mocha">
                    <item.icon className="h-5 w-5" strokeWidth={1.5} />
                  </div>
                  <div>
                    <h3 className="font-serif text-lg font-medium text-ink">{item.title}</h3>
                    <p className="mt-1.5 font-sans text-sm font-light leading-relaxed text-muted">
                      {item.text}
                    </p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

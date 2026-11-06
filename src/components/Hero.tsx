import { ArrowRight, CalendarHeart } from 'lucide-react';

const HERO_IMG =
  'https://images.pexels.com/photos/37240358/pexels-photo-37240358.jpeg?auto=compress&cs=tinysrgb&w=1600';

function scrollTo(id: string) {
  document.querySelector(id)?.scrollIntoView({ behavior: 'smooth' });
}

export function Hero() {
  return (
    <section id="home" className="relative flex min-h-[100svh] items-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <img
          src={HERO_IMG}
          alt="Woman receiving a calming facial mask in a serene spa setting"
          className="h-full w-full object-cover object-center"
          loading="eager"
          fetchPriority="high"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-ivory/85 via-ivory/55 to-ivory/20" />
        <div className="absolute inset-0 bg-gradient-to-t from-ivory/60 via-transparent to-ivory/30" />
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto w-full max-w-7xl px-6 pt-28 pb-20 lg:px-10">
        <div className="max-w-2xl">
          <span
            className="eyebrow mb-6 inline-flex items-center gap-2 opacity-0 [animation:fade-up_0.8s_0.2s_cubic-bezier(0.22,1,0.36,1)_forwards]"
          >
            <span className="h-px w-8 bg-nude" />
            Tarzana, California
          </span>

          <h1
            className="font-serif text-[2.75rem] font-light leading-[1.05] text-ink opacity-0 sm:text-5xl md:text-6xl lg:text-[4.25rem] [animation:fade-up_0.9s_0.4s_cubic-bezier(0.22,1,0.36,1)_forwards] text-balance"
          >
            Your Skin. Your Confidence.
            <br />
            <span className="italic text-mocha">Your Wellness.</span>
          </h1>

          <p
            className="mt-7 max-w-xl font-sans text-base font-light leading-relaxed text-muted opacity-0 sm:text-lg [animation:fade-up_0.9s_0.6s_cubic-bezier(0.22,1,0.36,1)_forwards] text-pretty"
          >
            Personalized aesthetic treatments designed to help you look refreshed,
            feel confident, and embrace your natural beauty.
          </p>

          <div
            className="mt-10 flex flex-col gap-4 opacity-0 sm:flex-row sm:items-center [animation:fade-up_0.9s_0.8s_cubic-bezier(0.22,1,0.36,1)_forwards]"
          >
            <button onClick={() => scrollTo('#services')} className="btn-primary">
              Explore Services
              <ArrowRight className="h-4 w-4" strokeWidth={1.5} />
            </button>
            <button onClick={() => scrollTo('#contact')} className="btn-outline">
              <CalendarHeart className="h-4 w-4" strokeWidth={1.5} />
              Book an Appointment
            </button>
          </div>
        </div>
      </div>

      {/* Scroll cue */}
      <div className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 md:flex">
        <span className="text-[0.6rem] uppercase tracking-super-wide text-muted">Scroll</span>
        <span className="relative h-12 w-px overflow-hidden bg-sand">
          <span className="absolute left-0 top-0 h-4 w-full animate-[fade-up_1.4s_ease-in-out_infinite] bg-nude" />
        </span>
      </div>
    </section>
  );
}

import { useState } from 'react';
import { ArrowUpRight, X } from 'lucide-react';
import { SectionHeading } from './SectionHeading';
import { Reveal } from './Reveal';
import { services, type Service } from '@/data/services';

function scrollToContact() {
  document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
}

export function Services() {
  const [active, setActive] = useState<Service | null>(null);

  return (
    <section id="services" className="relative bg-cream py-24 sm:py-32">
      {/* subtle texture */}
      <div className="pointer-events-none absolute inset-0 opacity-[0.04] [background-image:radial-gradient(circle_at_1px_1px,theme(colors.mocha)_1px,transparent_0)] [background-size:28px_28px]" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-10">
        <SectionHeading
          eyebrow="Our Treatments"
          title={
            <>
              Thoughtful treatments, <span className="italic text-mocha">tailored to you</span>
            </>
          }
          description="A curated collection of aesthetic services designed to refresh, restore, and reveal your most radiant skin."
        />

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, i) => (
            <Reveal key={service.id} delay={i * 90}>
              <article className="group relative flex h-full flex-col overflow-hidden rounded-3xl bg-ivory shadow-sm ring-1 ring-sand/60 transition-all duration-500 hover:-translate-y-1.5 hover:shadow-xl hover:shadow-mocha/10">
                <div className="relative aspect-[5/4] overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.alt}
                    className="h-full w-full object-cover transition-transform duration-[1.2s] ease-out group-hover:scale-110"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-ink/35 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                  <span className="absolute left-4 top-4 rounded-full bg-ivory/85 px-3 py-1 text-[0.6rem] font-medium uppercase tracking-[0.15em] text-mocha backdrop-blur-sm">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                </div>

                <div className="flex flex-1 flex-col p-6">
                  <h3 className="font-serif text-xl font-medium text-ink">{service.name}</h3>
                  <p className="mt-1 font-sans text-xs uppercase tracking-[0.12em] text-nude">
                    {service.tagline}
                  </p>
                  <p className="mt-3 flex-1 font-sans text-sm font-light leading-relaxed text-muted">
                    {service.description}
                  </p>
                  <button
                    onClick={() => setActive(service)}
                    className="mt-5 inline-flex items-center gap-1.5 self-start font-sans text-xs font-medium uppercase tracking-wider text-mocha transition-all duration-300 hover:gap-3 hover:text-clay"
                  >
                    Learn More
                    <ArrowUpRight className="h-4 w-4" strokeWidth={1.5} />
                  </button>
                </div>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-14 flex flex-col items-center gap-4 text-center" delay={150}>
          <p className="font-sans text-sm font-light text-muted">
            Not sure which treatment is right for you?
          </p>
          <button onClick={scrollToContact} className="btn-primary">
            Book a Consultation
          </button>
        </Reveal>
      </div>

      {/* Service detail modal */}
      {active && <ServiceModal service={active} onClose={() => setActive(null)} />}
    </section>
  );
}

function ServiceModal({ service, onClose }: { service: Service; onClose: () => void }) {
  return (
    <div
      className="fixed inset-0 z-[60] flex items-center justify-center p-4 animate-[fade-in_0.3s_ease_forwards]"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="service-modal-title"
    >
      <div className="absolute inset-0 bg-ink/50 backdrop-blur-sm" />
      <div
        className="relative z-10 grid w-full max-w-3xl overflow-hidden rounded-3xl bg-ivory shadow-2xl animate-[fade-up_0.5s_cubic-bezier(0.22,1,0.36,1)_forwards] md:grid-cols-2"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="relative aspect-[4/3] md:aspect-auto md:h-full">
          <img src={service.image} alt={service.alt} className="h-full w-full object-cover" />
        </div>
        <div className="flex flex-col justify-center p-8 md:p-10">
          <button
            onClick={onClose}
            aria-label="Close"
            className="absolute right-4 top-4 flex h-9 w-9 items-center justify-center rounded-full bg-ivory/80 text-ink transition-colors hover:bg-cream"
          >
            <X className="h-4 w-4" strokeWidth={1.5} />
          </button>
          <span className="eyebrow mb-3">{service.tagline}</span>
          <h3 id="service-modal-title" className="font-serif text-2xl font-medium text-ink md:text-3xl">
            {service.name}
          </h3>
          <p className="mt-4 font-sans text-sm font-light leading-relaxed text-muted">
            {service.description}
          </p>
          <p className="mt-4 font-sans text-sm font-light leading-relaxed text-muted">
            Every treatment at The Soft Skin Room Wellness is personalized to your skin and goals.
            Book a consultation to create a plan that&apos;s right for you.
          </p>
          <button
            onClick={() => {
              onClose();
              scrollToContact();
            }}
            className="btn-primary mt-7 self-start"
          >
            Book an Appointment
          </button>
        </div>
      </div>
    </div>
  );
}

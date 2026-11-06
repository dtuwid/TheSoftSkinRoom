import { Instagram, Facebook, MapPin, ArrowUpRight } from 'lucide-react';

const NAV_LINKS = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Contact', href: '#contact' },
];

const SERVICES_LIST = [
  'Microneedling',
  'CO₂ Laser',
  'Face Light Therapy Mask',
  'Botox',
  'Dermal Fillers',
  'Sculptra',
];

function scrollTo(href: string) {
  document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
}

export function Footer() {
  return (
    <footer className="bg-espresso text-ivory/80">
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-10">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex flex-col leading-none">
              <span className="font-serif text-2xl font-medium tracking-tight text-ivory">
                The Soft Skin Room
              </span>
              <span className="mt-1.5 font-sans text-[0.6rem] uppercase tracking-super-wide text-nude">
                Wellness · Tarzana
              </span>
            </div>
            <p className="mt-5 max-w-xs font-sans text-sm font-light leading-relaxed text-ivory/60 text-pretty">
              A boutique aesthetics studio dedicated to personalized skincare and natural-looking
              results in the heart of Tarzana, California.
            </p>
          </div>

          {/* Nav */}
          <div>
            <h3 className="font-sans text-xs font-medium uppercase tracking-[0.15em] text-nude">
              Explore
            </h3>
            <ul className="mt-5 space-y-3">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={(e) => {
                      e.preventDefault();
                      scrollTo(link.href);
                    }}
                    className="font-sans text-sm font-light text-ivory/70 transition-colors duration-300 hover:text-ivory"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-sans text-xs font-medium uppercase tracking-[0.15em] text-nude">
              Treatments
            </h3>
            <ul className="mt-5 space-y-3">
              {SERVICES_LIST.map((name) => (
                <li key={name}>
                  <a
                    href="#services"
                    onClick={(e) => {
                      e.preventDefault();
                      scrollTo('#services');
                    }}
                    className="font-sans text-sm font-light text-ivory/70 transition-colors duration-300 hover:text-ivory"
                  >
                    {name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact + social */}
          <div>
            <h3 className="font-sans text-xs font-medium uppercase tracking-[0.15em] text-nude">
              Visit
            </h3>
            <a
              href="https://www.google.com/maps?q=19634+Ventura+Blvd,+Tarzana,+CA+91356"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-5 flex items-start gap-2 font-sans text-sm font-light text-ivory/70 transition-colors duration-300 hover:text-ivory"
            >
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-nude" strokeWidth={1.5} />
              <span>
                19634 Ventura Blvd, Unit 203
                <br />
                Tarzana, CA 91356
              </span>
            </a>

            <div className="mt-6 flex gap-3">
              {[
                { icon: Instagram, label: 'Instagram', href: '#' },
                { icon: Facebook, label: 'Facebook', href: '#' },
              ].map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-ivory/10 text-ivory/80 transition-all duration-300 hover:bg-ivory/20 hover:text-ivory"
                >
                  <social.icon className="h-[1.05rem] w-[1.05rem]" strokeWidth={1.5} />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-ivory/10 pt-8 sm:flex-row">
          <p className="font-sans text-xs font-light text-ivory/50">
            © {new Date().getFullYear()} The Soft Skin Room Wellness. All rights reserved.
          </p>
          <p className="font-sans text-xs font-light text-ivory/50">
            softskinwellness.com
          </p>
          <button
            onClick={() => scrollTo('#home')}
            className="inline-flex items-center gap-1 font-sans text-xs font-light uppercase tracking-wider text-ivory/60 transition-colors hover:text-ivory"
          >
            Back to top
            <ArrowUpRight className="h-3.5 w-3.5" strokeWidth={1.5} />
          </button>
        </div>
      </div>
    </footer>
  );
}

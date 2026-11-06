import { useEffect, useState } from 'react';
import { Menu, X, CalendarHeart } from 'lucide-react';

const NAV_LINKS = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Contact', href: '#contact' },
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [menuOpen]);

  const handleNavClick = (href: string) => {
    setMenuOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
          scrolled
            ? 'bg-ivory/90 py-3 shadow-[0_1px_0_0_rgba(122,92,66,0.12)] backdrop-blur-md'
            : 'bg-transparent py-5'
        }`}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 lg:px-10">
          {/* Logo */}
          <a
            href="#home"
            onClick={(e) => {
              e.preventDefault();
              handleNavClick('#home');
            }}
            className="group flex flex-col leading-none"
          >
            <span className="font-serif text-xl font-medium tracking-tight text-ink sm:text-[1.6rem]">
              The Soft Skin Room
            </span>
            <span className="mt-1 font-sans text-[0.6rem] uppercase tracking-super-wide text-nude">
              Wellness · Tarzana
            </span>
          </a>

          {/* Desktop nav */}
          <nav className="hidden items-center gap-9 lg:flex">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(link.href);
                }}
                className="group relative font-sans text-sm font-normal tracking-wide text-ink/80 transition-colors duration-300 hover:text-mocha"
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 h-px w-0 bg-nude transition-all duration-400 group-hover:w-full" />
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                handleNavClick('#contact');
              }}
              className="hidden items-center gap-2 rounded-full bg-mocha px-5 py-2.5 text-xs font-normal uppercase tracking-wider text-ivory transition-all duration-500 hover:bg-clay hover:tracking-[0.18em] hover:shadow-lg hover:shadow-mocha/20 sm:inline-flex"
            >
              <CalendarHeart className="h-4 w-4" strokeWidth={1.5} />
              Book Appointment
            </a>

            {/* Mobile toggle */}
            <button
              type="button"
              aria-label={menuOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={menuOpen}
              onClick={() => setMenuOpen((o) => !o)}
              className="flex h-11 w-11 items-center justify-center rounded-full border border-mocha/15 text-ink transition-colors hover:bg-cream lg:hidden"
            >
              {menuOpen ? <X className="h-5 w-5" strokeWidth={1.5} /> : <Menu className="h-5 w-5" strokeWidth={1.5} />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile menu overlay */}
      <div
        className={`fixed inset-0 z-40 transition-all duration-500 lg:hidden ${
          menuOpen ? 'pointer-events-auto opacity-100' : 'pointer-events-none opacity-0'
        }`}
      >
        <div
          className="absolute inset-0 bg-ink/30 backdrop-blur-sm"
          onClick={() => setMenuOpen(false)}
        />
        <nav
          className={`absolute right-0 top-0 flex h-full w-[78%] max-w-sm flex-col gap-2 bg-ivory px-8 pt-28 pb-10 shadow-2xl transition-transform duration-500 ease-out ${
            menuOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          {NAV_LINKS.map((link, i) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => {
                e.preventDefault();
                handleNavClick(link.href);
              }}
              style={{ transitionDelay: menuOpen ? `${i * 60 + 100}ms` : '0ms' }}
              className={`border-b border-sand py-4 font-serif text-2xl font-light text-ink transition-all duration-500 hover:text-mocha ${
                menuOpen ? 'translate-x-0 opacity-100' : 'translate-x-6 opacity-0'
              }`}
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={(e) => {
              e.preventDefault();
              handleNavClick('#contact');
            }}
            className="mt-6 inline-flex items-center justify-center gap-2 rounded-full bg-mocha px-6 py-3.5 text-sm font-normal uppercase tracking-wider text-ivory"
          >
            <CalendarHeart className="h-4 w-4" strokeWidth={1.5} />
            Book Appointment
          </a>
        </nav>
      </div>
    </>
  );
}

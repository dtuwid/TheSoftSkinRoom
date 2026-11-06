import { useState, type FormEvent } from 'react';
import { MapPin, Phone, Mail, Clock, CheckCircle2, Loader2, CalendarHeart } from 'lucide-react';
import { Reveal } from './Reveal';

type FormState = {
  name: string;
  email: string;
  phone: string;
  message: string;
};

type FormErrors = Partial<Record<keyof FormState, string>>;

type Status = 'idle' | 'submitting' | 'success';

const INITIAL: FormState = { name: '', email: '', phone: '', message: '' };

const CONTACT_INFO = [
  { icon: MapPin, label: 'Visit Us', lines: ['19634 Ventura Blvd, Unit 203', 'Tarzana, CA 91356'] },
  { icon: Phone, label: 'Call Us', lines: ['(818) 555-0123'] },
  { icon: Mail, label: 'Email Us', lines: ['hello@softskinwellness.com'] },
  { icon: Clock, label: 'Hours', lines: ['Mon – Fri · 9am – 6pm', 'Sat · 10am – 4pm'] },
];

const MAPS_EMBED_SRC =
  'https://www.google.com/maps?q=19634+Ventura+Blvd+Unit+203,+Tarzana,+CA+91356&output=embed';
const MAPS_LINK = 'https://www.google.com/maps?q=19634+Ventura+Blvd,+Tarzana,+CA+91356';

export function Contact() {
  const [form, setForm] = useState<FormState>(INITIAL);
  const [errors, setErrors] = useState<FormErrors>({});
  const [status, setStatus] = useState<Status>('idle');

  const validate = (data: FormState): FormErrors => {
    const e: FormErrors = {};
    if (!data.name.trim()) e.name = 'Please enter your name.';
    if (!data.email.trim()) {
      e.email = 'Please enter your email.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) {
      e.email = 'Please enter a valid email address.';
    }
    if (!data.phone.trim()) {
      e.phone = 'Please enter your phone number.';
    } else if (data.phone.replace(/\D/g, '').length < 10) {
      e.phone = 'Please enter a valid phone number.';
    }
    if (!data.message.trim()) e.message = 'Please tell us how we can help.';
    return e;
  };

  const update = (key: keyof FormState, value: string) => {
    setForm((prev) => ({ ...prev, [key]: value }));
    if (errors[key]) setErrors((prev) => ({ ...prev, [key]: undefined }));
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const found = validate(form);
    setErrors(found);
    if (Object.keys(found).length > 0) return;

    setStatus('submitting');
    // Simulated submission — in production this would post to a backend.
    window.setTimeout(() => {
      setStatus('success');
      setForm(INITIAL);
      window.setTimeout(() => setStatus('idle'), 6000);
    }, 1200);
  };

  return (
    <section id="contact" className="relative bg-ivory py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <Reveal className="mb-14 flex flex-col items-center text-center">
          <span className="eyebrow mb-4 inline-flex items-center gap-2">
            <span className="h-px w-8 bg-nude" />
            Get in Touch
          </span>
          <h2 className="max-w-2xl text-3xl font-light leading-[1.15] text-ink sm:text-4xl md:text-[2.75rem] text-balance">
            Book your <span className="italic text-mocha">appointment</span>
          </h2>
          <p className="mt-5 max-w-xl font-sans text-base font-light leading-relaxed text-muted text-pretty">
            Reach out to schedule a consultation or ask any questions. We look forward to welcoming
            you to The Soft Skin Room Wellness.
          </p>
        </Reveal>

        <div className="grid gap-10 lg:grid-cols-[1.05fr_1fr] lg:gap-14">
          {/* Left: info + map */}
          <Reveal className="flex flex-col gap-6">
            <div className="grid gap-5 sm:grid-cols-2">
              {CONTACT_INFO.map((item) => (
                <div
                  key={item.label}
                  className="rounded-2xl bg-cream/70 p-5 ring-1 ring-sand/60 transition-colors duration-300 hover:bg-cream"
                >
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-ivory text-mocha">
                    <item.icon className="h-[1.1rem] w-[1.1rem]" strokeWidth={1.5} />
                  </div>
                  <h3 className="mt-3 font-sans text-xs font-medium uppercase tracking-[0.15em] text-muted">
                    {item.label}
                  </h3>
                  {item.lines.map((line) => (
                    <p key={line} className="mt-1 font-serif text-base font-medium text-ink">
                      {line}
                    </p>
                  ))}
                </div>
              ))}
            </div>

            <div className="group relative overflow-hidden rounded-2xl shadow-sm ring-1 ring-sand/60">
              <iframe
                title="Map to The Soft Skin Room Wellness"
                src={MAPS_EMBED_SRC}
                className="h-72 w-full border-0 grayscale-[0.15] contrast-[0.95] transition-all duration-500 group-hover:grayscale-0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
              />
              <a
                href={MAPS_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="absolute bottom-3 right-3 inline-flex items-center gap-1.5 rounded-full bg-ivory/90 px-3.5 py-2 font-sans text-xs font-medium uppercase tracking-wider text-mocha opacity-0 shadow-sm backdrop-blur-sm transition-all duration-300 group-hover:opacity-100"
              >
                <MapPin className="h-3.5 w-3.5" strokeWidth={1.5} />
                Open in Maps
              </a>
            </div>
          </Reveal>

          {/* Right: form */}
          <Reveal delay={120}>
            <form
              onSubmit={handleSubmit}
              noValidate
              className="flex flex-col gap-5 rounded-3xl bg-white/60 p-7 shadow-sm ring-1 ring-sand/60 sm:p-9"
            >
              <div>
                <label htmlFor="name" className="field-label">Full Name</label>
                <input
                  id="name"
                  type="text"
                  value={form.name}
                  onChange={(e) => update('name', e.target.value)}
                  className={`field-input ${errors.name ? 'border-rose/70 focus:border-rose focus:ring-rose/20' : ''}`}
                  placeholder="Jane Doe"
                  aria-invalid={!!errors.name}
                />
                {errors.name && <p className="mt-1.5 text-xs text-rose">{errors.name}</p>}
              </div>

              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label htmlFor="email" className="field-label">Email</label>
                  <input
                    id="email"
                    type="email"
                    value={form.email}
                    onChange={(e) => update('email', e.target.value)}
                    className={`field-input ${errors.email ? 'border-rose/70 focus:border-rose focus:ring-rose/20' : ''}`}
                    placeholder="jane@email.com"
                    aria-invalid={!!errors.email}
                  />
                  {errors.email && <p className="mt-1.5 text-xs text-rose">{errors.email}</p>}
                </div>
                <div>
                  <label htmlFor="phone" className="field-label">Phone</label>
                  <input
                    id="phone"
                    type="tel"
                    value={form.phone}
                    onChange={(e) => update('phone', e.target.value)}
                    className={`field-input ${errors.phone ? 'border-rose/70 focus:border-rose focus:ring-rose/20' : ''}`}
                    placeholder="(818) 555-0123"
                    aria-invalid={!!errors.phone}
                  />
                  {errors.phone && <p className="mt-1.5 text-xs text-rose">{errors.phone}</p>}
                </div>
              </div>

              <div>
                <label htmlFor="message" className="field-label">Message</label>
                <textarea
                  id="message"
                  rows={4}
                  value={form.message}
                  onChange={(e) => update('message', e.target.value)}
                  className={`field-input resize-none ${errors.message ? 'border-rose/70 focus:border-rose focus:ring-rose/20' : ''}`}
                  placeholder="Tell us what you'd like to explore…"
                  aria-invalid={!!errors.message}
                />
                {errors.message && <p className="mt-1.5 text-xs text-rose">{errors.message}</p>}
              </div>

              <button
                type="submit"
                disabled={status === 'submitting' || status === 'success'}
                className="btn-primary mt-2 disabled:cursor-not-allowed disabled:opacity-80"
              >
                {status === 'submitting' && <Loader2 className="h-4 w-4 animate-spin" strokeWidth={1.5} />}
                {status === 'success' && <CheckCircle2 className="h-4 w-4" strokeWidth={1.5} />}
                {status === 'success' ? 'Message Sent' : 'Book an Appointment'}
                {status === 'idle' && <CalendarHeart className="h-4 w-4" strokeWidth={1.5} />}
              </button>

              {status === 'success' && (
                <p className="text-center text-sm font-light text-sage">
                  Thank you — we&apos;ll be in touch shortly to confirm your appointment.
                </p>
              )}
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

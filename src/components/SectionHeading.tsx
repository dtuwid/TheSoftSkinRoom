import { Reveal } from './Reveal';
import { Sparkles } from 'lucide-react';
import type { ReactNode } from 'react';

type SectionHeadingProps = {
  eyebrow?: string;
  title: ReactNode;
  description?: ReactNode;
  align?: 'left' | 'center';
  className?: string;
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = 'center',
  className = '',
}: SectionHeadingProps) {
  const alignment = align === 'center' ? 'items-center text-center mx-auto' : 'items-start text-left';
  return (
    <Reveal className={`flex flex-col ${alignment} max-w-2xl ${className}`}>
      {eyebrow && (
        <span className="eyebrow mb-4 inline-flex items-center gap-2">
          <Sparkles className="h-3.5 w-3.5 text-nude" strokeWidth={1.5} />
          {eyebrow}
        </span>
      )}
      <h2 className="text-3xl leading-[1.15] text-ink sm:text-4xl md:text-[2.75rem] text-balance">
        {title}
      </h2>
      {description && (
        <p className="mt-5 max-w-xl font-sans text-base font-light leading-relaxed text-muted text-pretty">
          {description}
        </p>
      )}
    </Reveal>
  );
}

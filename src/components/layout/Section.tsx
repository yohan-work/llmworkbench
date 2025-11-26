import { ReactNode } from 'react';

interface SectionProps {
  id: string;
  children: ReactNode;
  className?: string;
  title?: string;
  subtitle?: string;
  fullWidth?: boolean;
}

export default function Section({
  id,
  children,
  className = '',
  title,
  subtitle,
  fullWidth = false,
}: SectionProps) {
  return (
    <section
      id={id}
      className={`py-16 md:py-24 ${className}`}
    >
      <div className={fullWidth ? '' : 'max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'}>
        {(title || subtitle) && (
          <div className={`mb-12 ${fullWidth ? 'max-w-7xl mx-auto px-4 sm:px-6 lg:px-8' : ''}`}>
            {title && (
              <h2 className="section-title gradient-text">
                {title}
              </h2>
            )}
            {subtitle && (
              <p className="section-subtitle">
                {subtitle}
              </p>
            )}
          </div>
        )}
        {children}
      </div>
    </section>
  );
}


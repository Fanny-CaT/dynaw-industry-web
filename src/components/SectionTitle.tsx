interface SectionTitleProps {
  title: string;
  subtitle?: string;
  centered?: boolean;
  className?: string;
}

export default function SectionTitle({ title, subtitle, centered = true, className = '' }: SectionTitleProps) {
  return (
    <div className={`${centered ? 'text-center' : ''} mb-12 ${className}`}>
      <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gold tracking-tight">
        {title}
      </h2>
      {subtitle && (
        <p className="text-gold/80 text-lg mt-2 uppercase tracking-widest">{subtitle}</p>
      )}
      <div className={`${centered ? 'mx-auto' : ''} mt-4 w-16 h-0.5 bg-gold`} />
    </div>
  );
}

import type { ReactNode } from 'react';

interface ServicePageLayoutProps {
  title: string;
  breadcrumb: string;
  description?: string;
  children: ReactNode;
}

export default function ServicePageLayout({ title, breadcrumb, description, children }: ServicePageLayoutProps) {
  return (
    <>
      {/* Hero */}
      <div className="bg-black pt-24 pb-12">
        <div className="container-main">
          <p className="text-gray-400 text-sm mb-4">{breadcrumb}</p>
          <h1 className="text-4xl md:text-5xl font-bold text-white">{title}</h1>
        </div>
      </div>

      {/* Content */}
      {description && (
        <div className="bg-black pb-8">
          <div className="container-main">
            <div className="w-16 h-0.5 bg-gold mb-4" />
            <p className="text-gray-400 max-w-3xl">{description}</p>
          </div>
        </div>
      )}

      <div className="bg-black section-padding">
        <div className="container-main">
          {children}
        </div>
      </div>
    </>
  );
}

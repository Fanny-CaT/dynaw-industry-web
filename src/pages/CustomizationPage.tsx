import ServicePageLayout from '@/components/ServicePageLayout';
import NumberedSection from '@/components/NumberedSection';
import { customizationSections } from '@/data/products';

export default function CustomizationPage() {
  return (
    <ServicePageLayout
      title="Customization"
      breadcrumb="HOME / CUSTOMIZATION"
      description="Our Customization Service allows you to create personalized apparel that reflects your unique style, brand, or team identity. Whether you're designing uniforms for a sports team, branded merchandise for your business, or custom garments for personal use, we offer a range of options to meet your needs."
    >
      {customizationSections.map((s, i) => (
        <NumberedSection key={i} section={s} imagePosition={i % 2 === 0 ? 'left' : 'right'} />
      ))}
    </ServicePageLayout>
  );
}

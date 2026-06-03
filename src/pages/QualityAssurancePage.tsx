import ServicePageLayout from '@/components/ServicePageLayout';
import NumberedSection from '@/components/NumberedSection';
import { qualitySections } from '@/data/products';

export default function QualityAssurancePage() {
  return (
    <ServicePageLayout
      title="Quality Assurance"
      breadcrumb="HOME / QUALITY ASSURANCE"
      description="Our quality assurance process ensures that every product meets the highest standards before reaching our customers. We implement rigorous checks at every stage of production."
    >
      {qualitySections.map((s, i) => (
        <NumberedSection key={i} section={s} imagePosition={i % 2 === 0 ? 'left' : 'right'} />
      ))}
    </ServicePageLayout>
  );
}

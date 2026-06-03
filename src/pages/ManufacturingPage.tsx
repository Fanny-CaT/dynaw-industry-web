import ServicePageLayout from '@/components/ServicePageLayout';
import NumberedSection from '@/components/NumberedSection';
import { manufacturingSections } from '@/data/products';

export default function ManufacturingPage() {
  return (
    <ServicePageLayout
      title="Manufacturing Process"
      breadcrumb="HOME / MANUFACTURING PROCESS"
      description="Our manufacturing process is built on precision, quality, and efficiency. From design to delivery, every step is carefully managed to ensure the highest standards of production."
    >
      {manufacturingSections.map((s, i) => (
        <NumberedSection key={i} section={s} imagePosition={i % 2 === 0 ? 'left' : 'right'} />
      ))}
    </ServicePageLayout>
  );
}

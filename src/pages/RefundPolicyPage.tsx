import ServicePageLayout from '@/components/ServicePageLayout';

const sections = [
  { num: '01', title: 'Refund and Returns Policy', content: 'At Dynaw Industry, we want you to be completely satisfied with your purchase. If you are not satisfied for any reason, we offer a straightforward return and refund policy within 30 days of delivery.' },
  { num: '02', title: 'Eligibility for Returns', content: 'To be eligible for a return, your item must be unused and in the same condition that you received it. It must also be in the original packaging. Custom orders and personalized items are non-returnable unless defective.' },
  { num: '03', title: 'Return Process', content: 'To initiate a return, please contact our customer service team at info@dynawindustry.com. We will provide you with a return authorization number and instructions on how to send your item back to us.' },
  { num: '04', title: 'Refund Policy', content: 'Once your return is received and inspected, we will send you an email to notify you of the approval or rejection of your refund. If approved, your refund will be processed within 5-10 business days to your original method of payment.' },
  { num: '05', title: 'Exchanges', content: 'We only replace items if they are defective or damaged. If you need to exchange an item for the same product, please contact our customer service team.' },
  { num: '06', title: 'Non-Returnable Items', content: 'Gift cards, custom orders, and sale items are non-returnable. Only regular priced items may be refunded.' },
  { num: '07', title: 'Shipping Costs', content: 'You will be responsible for paying your own shipping costs for returning your item. Shipping costs are non-refundable. If you receive a refund, the cost of return shipping will be deducted from your refund.' },
  { num: '08', title: 'Contact', content: 'For any questions regarding returns or refunds, please contact us at info@dynawindustry.com or call +92 345 71551445.' },
];

export default function RefundPolicyPage() {
  return (
    <ServicePageLayout title="Refund and Returns Policy" breadcrumb="HOME / REFUND AND RETURNS POLICY">
      <div className="space-y-8">
        {sections.map((s) => (
          <div key={s.num} className="flex gap-6">
            <div className="text-4xl font-black text-gold/30 shrink-0">{s.num}</div>
            <div>
              <h3 className="text-xl font-bold text-gold mb-2">{s.title}</h3>
              <p className="text-gray-400 leading-relaxed">{s.content}</p>
            </div>
          </div>
        ))}
      </div>
    </ServicePageLayout>
  );
}

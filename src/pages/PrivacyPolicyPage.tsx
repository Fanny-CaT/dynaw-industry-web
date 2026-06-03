import ServicePageLayout from '@/components/ServicePageLayout';

const sections = [
  { num: '01', title: 'Information We Collect', content: 'We collect personal information that you provide to us when you register on our website, place an order, subscribe to our newsletter, or fill out a form. This may include your name, email address, mailing address, phone number, and payment information.' },
  { num: '02', title: 'How We Use Your Information', content: 'The information we collect may be used to process transactions, improve our website, improve customer service, send periodic emails, and administer contests or promotions. We do not sell, trade, or otherwise transfer your personally identifiable information to outside parties except as described in this policy.' },
  { num: '03', title: 'Data Protection', content: 'We implement a variety of security measures to maintain the safety of your personal information. Your personal information is contained behind secured networks and is only accessible by a limited number of persons who have special access rights to such systems.' },
  { num: '04', title: 'Sharing of Information', content: 'We may share your information with trusted third parties who assist us in operating our website, conducting our business, or servicing you, so long as those parties agree to keep this information confidential. We may also release your information when we believe release is appropriate to comply with the law.' },
  { num: '05', title: 'Cookies', content: 'We use cookies to enhance your experience, gather general visitor information, and track visits to our website. You can choose to disable cookies through your browser settings, but this may affect your ability to use certain features of our website.' },
  { num: '06', title: 'Your Rights', content: 'You have the right to access, correct, or delete your personal information at any time. You may also opt out of receiving marketing communications from us by following the unsubscribe instructions included in each email.' },
  { num: '07', title: 'Contact Us', content: 'If you have any questions about this Privacy Policy, please contact us at info@dynawindustry.com or call us at +92 345 71551445.' },
];

export default function PrivacyPolicyPage() {
  return (
    <ServicePageLayout title="Privacy Policy" breadcrumb="HOME / PRIVACY POLICY">
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

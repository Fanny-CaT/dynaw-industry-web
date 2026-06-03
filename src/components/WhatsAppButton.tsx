import { MessageCircle } from 'lucide-react';

export default function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/9234571551445"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 left-6 z-50 flex items-center gap-2 bg-[#25D366] text-white px-4 py-3 rounded-full shadow-lg hover:scale-105 transition-transform animate-pulse-gold"
    >
      <MessageCircle className="w-5 h-5 fill-white" />
      <span className="text-sm font-medium">Contact us</span>
    </a>
  );
}

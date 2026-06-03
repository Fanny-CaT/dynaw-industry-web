import { Globe, Headset, ShieldCheck, Truck, Download, FileText } from 'lucide-react';

export default function CataloguePage() {
  return (
    <>
      <div className="bg-black pt-24 pb-16">
        <div className="container-main text-center">
          <p className="text-gray-400 text-sm mb-4">HOME / CATALOGUE</p>
          <h1 className="text-4xl md:text-5xl font-bold text-white">Catalogue</h1>
        </div>
      </div>
      
      <div className="bg-black py-20">
        <div className="container-main max-w-4xl text-center">
          <div className="border border-white/10 bg-white/5 p-12 md:p-20 rounded-xl relative overflow-hidden group">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-gold to-transparent opacity-30 group-hover:opacity-100 transition-opacity duration-1000" />
            
            <p className="text-gold text-sm tracking-widest font-bold mb-6">FULL INTERACTIVE BROCHURE</p>
            <h2 className="text-5xl md:text-7xl font-black text-white mb-8 tracking-tight">COMING SOON</h2>
            <p className="text-gray-400 leading-relaxed max-w-2xl mx-auto mb-12">
              We are currently digitizing our comprehensive physical catalogs into a premium, interactive online 3D flipbook dashboard. This will allow teams and retailers to dynamically swatch custom fabric colors and preview sublimated textures before scheduling orders.
            </p>
            
            <div className="flex flex-col sm:flex-row justify-center items-center gap-6">
              <button 
                onClick={() => alert("Our full 2026 Sportswear Catalogue PDF download is being prepared. Our sales team has been notified and will email you the catalog files directly.")}
                className="bg-gold text-black font-bold px-8 py-4 rounded hover:bg-white transition-colors duration-300 flex items-center gap-3"
              >
                <Download size={20} />
                <span>DOWNLOAD 2026 PREVIEW PDF</span>
              </button>
              <a href="/contact" className="border border-white/20 text-white font-bold px-8 py-4 rounded hover:bg-white/10 transition-colors duration-300">
                REQUEST CUSTOM SAMPLE
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-[#0a0a0a] py-24 border-t border-white/10">
        <div className="container-main">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            <div className="flex flex-col items-start text-left group">
              <Globe className="text-gold mb-6 group-hover:scale-110 transition-transform duration-300" size={32} />
              <h4 className="text-white font-bold tracking-widest text-sm mb-3">SHIPPING WORLDWIDE</h4>
              <p className="text-gray-400 text-sm leading-relaxed">No destination is out of reach. We ship seamlessly to Europe, Americas, and Oceania.</p>
            </div>
            <div className="flex flex-col items-start text-left group">
              <Headset className="text-gold mb-6 group-hover:scale-110 transition-transform duration-300" size={32} />
              <h4 className="text-white font-bold tracking-widest text-sm mb-3">24/7 SUPPORT DESK</h4>
              <p className="text-gray-400 text-sm leading-relaxed">Our sourcing agents are online around the clock to assist you with order modifications.</p>
            </div>
            <div className="flex flex-col items-start text-left group">
              <ShieldCheck className="text-gold mb-6 group-hover:scale-110 transition-transform duration-300" size={32} />
              <h4 className="text-white font-bold tracking-widest text-sm mb-3">ONLINE PAYMENT</h4>
              <p className="text-gray-400 text-sm leading-relaxed">Secure commercial wire transfers, online payment portals, and direct LC options.</p>
            </div>
            <div className="flex flex-col items-start text-left group">
              <Truck className="text-gold mb-6 group-hover:scale-110 transition-transform duration-300" size={32} />
              <h4 className="text-white font-bold tracking-widest text-sm mb-3">FAST DELIVERY</h4>
              <p className="text-gray-400 text-sm leading-relaxed">Meticulously managed packaging timelines and express air freight integrations.</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

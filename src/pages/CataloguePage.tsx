import { Truck, Headset, CreditCard, Package } from 'lucide-react';

// Exact values traced from CATALOUGE.png reference
const S = {
  headerBg: "#0f0f0f",
  textWhite: "#ffffff",
  textMuted: "#a0a0a0",
  mainBg: "#ffffff",
  mainText: "#1a1a1a",
  footerBg: "#222222",
  accent: "#ffaa00", // exact gold/yellow from reference
};

export default function CataloguePage() {
  return (
    <div style={{ fontFamily: 'system-ui, -apple-system, sans-serif' }}>
      {/* Header section matching reference */}
      <div style={{ backgroundColor: S.headerBg, padding: '120px 0 80px', textAlign: 'center' }}>
        <h1 style={{ 
          color: S.textWhite, 
          fontSize: '48px', 
          fontWeight: 'bold', 
          margin: '0 0 16px 0', 
          letterSpacing: '-1px' 
        }}>
          Catalouge
        </h1>
        <p style={{ 
          color: S.textWhite, 
          fontSize: '10px', 
          fontWeight: 'bold', 
          letterSpacing: '2px', 
          margin: 0,
          textTransform: 'uppercase'
        }}>
          HOME / CATALOUGE
        </p>
      </div>
      
      {/* Main Content section matching reference */}
      <div style={{ backgroundColor: S.mainBg, padding: '200px 24px', textAlign: 'center' }}>
        <h2 style={{ 
          color: S.mainText, 
          fontSize: 'clamp(60px, 10vw, 120px)', 
          fontFamily: 'Georgia, "Times New Roman", serif', 
          fontWeight: '900', 
          letterSpacing: '-2px',
          margin: 0,
          lineHeight: 1
        }}>
          COMING SOON
        </h2>
      </div>

      {/* Logistics Bar matching reference */}
      <div style={{ backgroundColor: S.footerBg, padding: '50px 0', borderTop: '1px solid #333' }}>
        <div style={{ 
          maxWidth: '1400px', 
          margin: '0 auto', 
          padding: '0 24px', 
          display: 'flex', 
          justifyContent: 'space-between', 
          flexWrap: 'wrap', 
          gap: '32px' 
        }}>
          
          <div style={{ display: 'flex', alignItems: 'flex-start', gap: '16px', flex: '1 1 200px' }}>
            <Truck style={{ color: S.accent }} size={32} strokeWidth={1.5} />
            <div>
              <h4 style={{ color: S.textWhite, fontSize: '14px', fontWeight: 'bold', margin: '0 0 8px 0' }}>Shipping worldwide</h4>
              <p style={{ color: S.textMuted, fontSize: '12px', margin: 0, lineHeight: 1.5 }}>No one rejects, dislikes...</p>
            </div>
          </div>

          <div style={{ display: 'flex', alignItems: 'flex-start', gap: '16px', flex: '1 1 200px' }}>
            <Headset style={{ color: S.accent }} size={32} strokeWidth={1.5} />
            <div>
              <h4 style={{ color: S.textWhite, fontSize: '14px', fontWeight: 'bold', margin: '0 0 8px 0' }}>24/7 Support.</h4>
              <p style={{ color: S.textMuted, fontSize: '12px', margin: 0, lineHeight: 1.5 }}>It has survived not only...</p>
            </div>
          </div>

          <div style={{ display: 'flex', alignItems: 'flex-start', gap: '16px', flex: '1 1 200px' }}>
            <CreditCard style={{ color: S.accent }} size={32} strokeWidth={1.5} />
            <div>
              <h4 style={{ color: S.textWhite, fontSize: '14px', fontWeight: 'bold', margin: '0 0 8px 0' }}>Online Payment.</h4>
              <p style={{ color: S.textMuted, fontSize: '12px', margin: 0, lineHeight: 1.5 }}>Yes we have online payment</p>
            </div>
          </div>

          <div style={{ display: 'flex', alignItems: 'flex-start', gap: '16px', flex: '1 1 200px' }}>
            <Package style={{ color: S.accent }} size={32} strokeWidth={1.5} />
            <div>
              <h4 style={{ color: S.textWhite, fontSize: '14px', fontWeight: 'bold', margin: '0 0 8px 0' }}>Fast Delivery.</h4>
              <p style={{ color: S.textMuted, fontSize: '12px', margin: 0, lineHeight: 1.5 }}>We have very fast delivery</p>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}

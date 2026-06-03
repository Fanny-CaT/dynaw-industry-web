import { Routes, Route } from 'react-router-dom';
import Layout from '@/components/Layout';
import Home from '@/pages/Home';
import CategoryPage from '@/pages/CategoryPage';
import ProductDetailPage from '@/pages/ProductDetailPage';
import AboutPage from '@/pages/AboutPage';
import CataloguePage from '@/pages/CataloguePage';
import ContactPage from '@/pages/ContactPage';
import CartPage from '@/pages/CartPage';
import CheckoutPage from '@/pages/CheckoutPage';
import OrderCompletePage from '@/pages/OrderCompletePage';
import CustomizationPage from '@/pages/CustomizationPage';
import ManufacturingPage from '@/pages/ManufacturingPage';
import ColorVariablePage from '@/pages/ColorVariablePage';
import SizeChartPage from '@/pages/SizeChartPage';
import RDPage from '@/pages/RDPage';
import QualityAssurancePage from '@/pages/QualityAssurancePage';
import FAQsPage from '@/pages/FAQsPage';
import PrivacyPolicyPage from '@/pages/PrivacyPolicyPage';
import RefundPolicyPage from '@/pages/RefundPolicyPage';

export default function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<CategoryPage />} />
        <Route path="/product/:slug" element={<ProductDetailPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/catalogue" element={<CataloguePage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/checkout" element={<CheckoutPage />} />
        <Route path="/order-complete" element={<OrderCompletePage />} />
        <Route path="/services/customization" element={<CustomizationPage />} />
        <Route path="/services/manufacturing" element={<ManufacturingPage />} />
        <Route path="/services/color-variable" element={<ColorVariablePage />} />
        <Route path="/services/size-chart" element={<SizeChartPage />} />
        <Route path="/services/research-development" element={<RDPage />} />
        <Route path="/services/quality-assurance" element={<QualityAssurancePage />} />
        <Route path="/services/faqs" element={<FAQsPage />} />
        <Route path="/services/privacy-policy" element={<PrivacyPolicyPage />} />
        <Route path="/services/refund-policy" element={<RefundPolicyPage />} />
      </Routes>
    </Layout>
  );
}

import HeroCarousel from '@/sections/home/HeroCarousel';
import WhyChooseUs from '@/sections/home/WhyChooseUs';
import Categories from '@/sections/home/Categories';
import FeaturedProducts from '@/sections/home/FeaturedProducts';
import WhatWeProvide from '@/sections/home/WhatWeProvide';
import CompanyFeatures from '@/sections/home/CompanyFeatures';
import MoreProducts from '@/sections/home/MoreProducts';
import TrustedPartner from '@/sections/home/TrustedPartner';
import PaymentShipping from '@/sections/home/PaymentShipping';

export default function Home() {
  return (
    <>
      <HeroCarousel />
      <WhyChooseUs />
      <Categories />
      <FeaturedProducts />
      <WhatWeProvide />
      <CompanyFeatures />
      <MoreProducts />
      <TrustedPartner />
      <PaymentShipping />
    </>
  );
}

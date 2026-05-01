import React from 'react';
import NavbarTwo from "components/layouts/NavbarTwo";
import IdeaSection from "./_components/IdeaSection";
import HeroSection from "./_components/HeroSection";
import FeatureSection from "./_components/FeatureSection";
import PricingSection from "./_components/PricingSection";
import FaqSection from "./_components/FaqSection";
import Footer from 'components/layouts/Footer';

const Services = () => {
  return (
    <div className="">
      <NavbarTwo title="BeeC00des" />
      <IdeaSection />
      <HeroSection />
      <FeatureSection />
      <PricingSection />
      <FaqSection />
       <Footer footerItem="Made with ❤️ from Beec00des" />
    </div>
  );
};

export default Services;
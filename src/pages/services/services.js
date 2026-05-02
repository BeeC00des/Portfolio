import React from 'react';
import NavbarTwo from "components/layouts/NavbarTwo";
import IdeaSection from "./_components/IdeaSection";
import HeroSection from "./_components/HeroSection";
import FeatureSection from "./_components/FeatureSection";
import PricingSection from "./_components/PricingSection";
import FaqSection from "./_components/FaqSection";
import Footer from 'components/layouts/Footer';
import Container from 'components/layouts/Container';

const Services = () => {
  return (
    <Container>
      <NavbarTwo title="BeeC00des" />
      <IdeaSection />
      <HeroSection />
      <FeatureSection />
      <PricingSection />
      <FaqSection />
      <Footer footerItem="Made with ❤️ from Beec00des" />
    </Container>
  );
};

export default Services;
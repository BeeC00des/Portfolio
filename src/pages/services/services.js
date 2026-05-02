import React from 'react';
import Header from "components/layouts/Header";
import IdeaSection from "./_components/IdeaSection";
import HeroSection from "./_components/HeroSection";
import FeatureSection from "./_components/FeatureSection";
import PricingSection from "./_components/PricingSection";
import FaqSection from "./_components/FaqSection";
import Footer from 'components/layouts/Footer';
import Container from 'components/layouts/Container';
import { Link } from 'react-router-dom';
import Button from 'components/Buttons/specialBtn';

const Services = () => {
  return (
    <div>
      <div className='flex justify-end gap-4'>
        <Link to="https://calendly.com/bolarinwaajayi/new-meeting">
          <Button text="Book A Call" />
        </Link>

        <Link to="/store">
          <Button
            className="bg-black border border-[#199C16] !text-[#199C16]  hover:!bg-[#199C16] hover:!text-white !transition-colors !duration-300"
            text="Store"
          />
        </Link>
      </div>
      <Container>
        <Header title="BeeC00des" showNav={false} />
        <IdeaSection />
        <HeroSection />
        <FeatureSection />
        <PricingSection />
        <FaqSection />
        <Footer footerItem="Made with ❤️ from Beec00des" />
      </Container>
    </div>
  );
};

export default Services;
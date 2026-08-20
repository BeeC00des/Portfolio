import React from 'react';
import { Link } from 'react-router-dom';
import Container from '../components/layouts/Container';
import Header from '../components/layouts/Header';
import Footer from '../components/layouts/Footer';
import Button from '../components/Buttons/specialBtn';

function NotFound() {
  return (
    <div>
      <Container>
        <Header title="BeeC00des" />
        
        <div className="flex flex-col items-center justify-center min-h-[60vh] text-center px-4 relative z-10 py-20">
          <div className="relative w-full max-w-2xl mx-auto flex flex-col items-center justify-center">
            {/* Background huge 404 text */}
            <h1 className="text-[150px] md:text-[250px] font-extrabold text-transparent bg-clip-text bg-gradient-to-br from-muted-foreground/50 via-[#199C16]/20 to-muted-foreground/50 absolute select-none z-0 tracking-tighter mix-blend-overlay">
              404
            </h1>

            {/* Foreground content */}
            <div className="z-10 flex flex-col items-center justify-center mt-12 md:mt-24 backdrop-blur-sm bg-foreground/5 p-8 rounded-3xl border border-foreground/5 shadow-2xl">
              <div className="w-16 h-1 bg-[#199C16] mb-6 rounded-full"></div>
              <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6 tracking-tight">
                Page Not Found
              </h2>
              <p className="text-muted-foreground mb-10 max-w-md mx-auto text-lg leading-relaxed">
                Oops! The page you're looking for seems to have wandered off into the digital void. Let's get you back home.
              </p>
              
              <Link to="/">
                <Button 
                  text="Return Home" 
                  className="!px-8 !py-3 hover:scale-105 transition-transform duration-300 shadow-[0_0_20px_rgba(25,156,22,0.3)] hover:shadow-[0_0_30px_rgba(25,156,22,0.5)]"
                />
              </Link>
            </div>
          </div>
        </div>

        <Footer footerItem="Made with ❤️ from Beec00des" />
      </Container>
    </div>
  );
}

export default NotFound;

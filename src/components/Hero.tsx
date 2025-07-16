import React from 'react';
import { ArrowRight, Download } from 'lucide-react';
import { Button } from '@/components/ui/button';
import heroImage from '@/assets/hero-image.jpg';

const Hero = () => {
  const scrollToContact = () => {
    const element = document.querySelector('#contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToProjects = () => {
    const element = document.querySelector('#projects');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url(${heroImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 hero-gradient opacity-90"></div>
      </div>

      {/* Content */}
      <div className="container-custom z-10 text-center text-white">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in">
            Building Digital
            <span className="block bg-gradient-to-r from-white to-white/80 bg-clip-text text-transparent">
              Experiences
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl mb-8 text-white/90 max-w-2xl mx-auto leading-relaxed animate-fade-in">
            Full-stack developer passionate about creating beautiful, functional,
            and user-centered digital solutions.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in">
            <Button
              onClick={scrollToProjects}
              size="lg"
              className="bg-white text-primary hover:bg-white/90 px-8 py-3 text-lg font-medium shadow-premium"
            >
              View My Work
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            
            <Button
              onClick={scrollToContact}
              variant="outline"
              size="lg"
              className="border-white/30 text-white hover:bg-white/10 px-8 py-3 text-lg font-medium backdrop-blur-sm"
            >
              Download Resume
              <Download className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>

      {/* Floating Elements */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-white/60 animate-float">
        <div className="flex flex-col items-center">
          <span className="text-sm mb-2">Scroll to explore</span>
          <div className="w-0.5 h-8 bg-white/30"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
import React from 'react';
import { ArrowRight } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { Button } from '@/components/ui/button';
import profileImage from '@/assets/profile-image-new.jpg';

const Hero = () => {
  const { t } = useTranslation();
  
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
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-primary via-primary/90 to-primary/80">
      {/* Content */}
      <div className="container mx-auto px-6 z-10 relative">
        <div className="grid md:grid-cols-2 gap-12 items-center max-w-7xl mx-auto">
          {/* Left Content */}
          <div className="text-left text-white">
            <h1 className="text-4xl md:text-6xl font-bold mb-8 leading-tight">
              {t('hero.greeting')}
              <br />
              <span className="block">
                {t('hero.name')}
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl mb-8 text-white/90 leading-relaxed font-light max-w-xl">
              {t('hero.tagline')}
            </p>
            
            <p className="text-lg text-white/80 mb-12 leading-relaxed max-w-xl">
              {t('hero.description')}
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                onClick={scrollToProjects}
                size="lg"
                variant="outline"
                className="bg-transparent border-white/30 text-white hover:bg-white/10 px-8 py-4 text-lg font-medium rounded-full transition-all duration-300"
              >
                {t('hero.seeWork')}
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              
              <Button
                onClick={scrollToContact}
                size="lg"
                className="bg-accent hover:bg-accent/90 text-white px-8 py-4 text-lg font-medium rounded-full transition-all duration-300"
              >
                {t('hero.contactMe')}
              </Button>
            </div>
          </div>
          
          {/* Right Content - Profile Image */}
          <div className="flex justify-center md:justify-end">
            <div className="relative">
              <img 
                src={profileImage} 
                alt="Profile" 
                className="w-80 h-80 md:w-96 md:h-96 object-cover rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
import React from 'react';
import { ArrowRight, Download } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { Button } from '@/components/ui/button';

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
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden bg-white">
      {/* Subtle Background Pattern */}
      <div className="absolute inset-0 z-0 bg-gradient-to-br from-white via-primary/5 to-accent/5"></div>
      
      {/* Floating orbs */}
      <div className="absolute top-20 left-20 w-32 h-32 bg-primary/10 rounded-full blur-xl animate-float"></div>
      <div className="absolute bottom-20 right-20 w-24 h-24 bg-accent/10 rounded-full blur-xl animate-float" style={{ animationDelay: '1s' }}></div>
      <div className="absolute top-1/2 right-32 w-16 h-16 bg-tertiary/10 rounded-full blur-xl animate-float" style={{ animationDelay: '2s' }}></div>

      {/* Content */}
      <div className="container-custom z-10 text-center text-foreground relative">
        <div className="max-w-5xl mx-auto">
          <div className="mb-8 animate-scale-in">
            <h1 className="text-6xl md:text-8xl font-black mb-6 leading-tight text-foreground">
              {t('hero.greeting')}
              <span className="block text-gradient animate-gradient-shift text-transparent bg-clip-text bg-gradient-to-r from-primary via-accent to-tertiary bg-size-200">
                {t('hero.name')}
              </span>
            </h1>
          </div>
          
          <div className="glass-light backdrop-blur-xl rounded-3xl p-8 md:p-12 mb-12 animate-fade-in-scale border border-primary/20">
            <p className="text-2xl md:text-3xl mb-6 text-foreground/90 max-w-3xl mx-auto leading-relaxed font-semibold">
              {t('hero.tagline')}
            </p>
            
            <p className="text-lg md:text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
              {t('hero.description')}
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center animate-fade-in">
            <Button
              onClick={scrollToProjects}
              size="lg"
              className="btn-primary group relative overflow-hidden"
            >
              <span className="relative z-10 flex items-center">
                {t('hero.seeWork')}
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </span>
            </Button>
            
            <Button
              onClick={scrollToContact}
              variant="outline"
              size="lg"
              className="glass-light border-primary/30 text-primary hover:bg-primary/10 px-8 py-4 text-lg font-semibold rounded-xl hover-lift backdrop-blur-xl"
            >
              {t('hero.contactMe')}
              <Download className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>

      {/* Enhanced Floating Elements */}
      <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2 text-muted-foreground animate-float">
        <div className="flex flex-col items-center glass-light rounded-full p-4 backdrop-blur-xl border border-primary/20">
          <span className="text-sm mb-2 font-medium">{t('hero.scrollExplore')}</span>
          <div className="w-1 h-8 bg-gradient-to-b from-primary/60 to-transparent rounded-full animate-glow-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
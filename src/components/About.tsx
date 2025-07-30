import React from 'react';
import { Code, Coffee, Heart } from 'lucide-react';
const profileImage = '/lovable-uploads/7ac51a14-e38e-4985-abe7-d0d7b62f5fcb.png';

const About = () => {
  const skills = [
    'Product Leadership & GTM',
    'Operations Strategy',
    'Agile Methodologies',
    'Analytics & Data-Driven Decisions',
    'Stakeholder Management',
    'Software Development'
  ];

  const highlights = [
    {
      icon: <Code className="h-6 w-6" />,
      title: '18+ Years',
      description: 'Product management experience'
    },
    {
      icon: <Coffee className="h-6 w-6" />,
      title: '5 Companies',
      description: 'Digital transformation led'
    },
    {
      icon: <Heart className="h-6 w-6" />,
      title: 'Multi-lingual',
      description: 'English, German, Hindi, Japanese'
    }
  ];

  return (
    <section id="about" className="section-padding bg-gradient-mesh relative overflow-hidden">
      {/* Floating orbs */}
      <div className="absolute top-40 right-20 w-32 h-32 bg-accent/10 rounded-full blur-3xl animate-float"></div>
      <div className="absolute bottom-40 left-20 w-40 h-40 bg-primary/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }}></div>
      
      <div className="container-custom relative">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          {/* Text Content */}
          <div className="animate-fade-in">
            <h2 className="text-5xl md:text-6xl font-black text-gradient bg-gradient-to-r from-primary via-accent to-tertiary bg-clip-text mb-10">
              About Me
            </h2>
            
            <div className="card-modern p-8 rounded-3xl mb-10">
              <p className="text-xl text-foreground/90 leading-relaxed font-medium">
                Passionate leader with over 18+ years of rich experience across diverse organizational landscapes - from large corporations like Zeiss and Tata Consultancy Services, to high-growth startups like Cluno and Cazoo, strategic mobility startups like Cubonic GmbH, and mid-size tech companies like AutoScout24. Currently Head of Digital at Cubonic, pioneering autonomous vehicle technologies and electric mobility solutions.
              </p>
            </div>

            {/* Skills */}
            <div className="card-modern p-8 rounded-3xl mb-10">
              <h3 className="text-2xl font-bold mb-6 text-foreground">
                Core Competencies
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {skills.map((skill, index) => (
                  <div
                    key={index}
                    className="flex items-center space-x-3 p-3 glass rounded-xl backdrop-blur-xl hover-lift transition-all duration-300 group"
                  >
                    <div className="w-3 h-3 bg-gradient-to-r from-primary to-accent rounded-full group-hover:scale-125 transition-transform"></div>
                    <span className="font-medium text-foreground">{skill}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Highlights */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {highlights.map((item, index) => (
                <div key={index} className="card-modern text-center p-6 rounded-2xl hover-lift group">
                  <div className="w-16 h-16 bg-gradient-to-br from-primary/20 to-accent/20 text-primary rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 group-hover:bg-gradient-to-br group-hover:from-primary/30 group-hover:to-accent/30 transition-all duration-300">
                    {item.icon}
                  </div>
                  <div className="text-3xl font-black text-foreground mb-2 group-hover:text-primary transition-colors">{item.title}</div>
                  <div className="text-muted-foreground font-medium">{item.description}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Image */}
          <div className="relative animate-fade-in-scale">
            <div className="relative z-10 group">
              <img
                src={profileImage}
                alt="Profile"
                className="w-full max-w-md mx-auto rounded-3xl shadow-premium hover-lift group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl"></div>
            </div>
            
            {/* Enhanced decorative elements */}
            <div className="absolute -top-8 -right-8 w-full h-full bg-gradient-to-br from-primary to-accent rounded-3xl opacity-20 z-0 animate-float"></div>
            <div className="absolute -bottom-6 -left-6 w-24 h-24 bg-tertiary/20 rounded-full blur-2xl animate-glow-pulse"></div>
            <div className="absolute -top-6 -right-6 w-20 h-20 bg-accent/20 rounded-full blur-2xl animate-float" style={{ animationDelay: '2s' }}></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
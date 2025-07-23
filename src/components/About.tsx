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
    <section id="about" className="section-padding bg-gradient-to-b from-background to-secondary">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Text Content */}
          <div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
              About Me
            </h2>
            
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Passionate leader with over 18+ years of rich experience in product management, operations, software engineering and new product introduction. Currently Head of Digital at Cubonic, building platforms for electric and autonomous vehicles. Proven track record at AutoScout24, Cazoo/Cluno, Zeiss IMT, and Merz Group, driving growth, innovation, and digital transformation across diverse industries.
            </p>

            {/* Skills */}
            <div className="mb-8">
              <h3 className="text-xl font-semibold mb-4 text-foreground">
                Technologies I work with
              </h3>
              <div className="grid grid-cols-2 gap-3">
                {skills.map((skill, index) => (
                  <div
                    key={index}
                    className="flex items-center space-x-2 text-muted-foreground"
                  >
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <span>{skill}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Highlights */}
            <div className="grid grid-cols-3 gap-6">
              {highlights.map((item, index) => (
                <div key={index} className="text-center">
                  <div className="w-12 h-12 bg-primary text-primary-foreground rounded-lg flex items-center justify-center mx-auto mb-2">
                    {item.icon}
                  </div>
                  <div className="text-2xl font-bold text-foreground">{item.title}</div>
                  <div className="text-sm text-muted-foreground">{item.description}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Image */}
          <div className="relative">
            <div className="relative z-10">
              <img
                src={profileImage}
                alt="Profile"
                className="w-full max-w-md mx-auto rounded-2xl shadow-premium hover-lift"
              />
            </div>
            {/* Decorative elements */}
            <div className="absolute -top-4 -right-4 w-full h-full bg-gradient-to-br from-primary to-accent rounded-2xl opacity-20 z-0"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
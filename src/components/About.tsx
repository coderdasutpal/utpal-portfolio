import React from 'react';
import { Code, Coffee, Heart } from 'lucide-react';
import profileImage from '@/assets/profile-image-new.jpg';

const About = () => {
  const skills = [
    'React & TypeScript',
    'Node.js & Express',
    'Python & Django',
    'PostgreSQL & MongoDB',
    'AWS & Docker',
    'GraphQL & REST APIs'
  ];

  const highlights = [
    {
      icon: <Code className="h-6 w-6" />,
      title: '5+ Years',
      description: 'Full-stack development experience'
    },
    {
      icon: <Coffee className="h-6 w-6" />,
      title: '50+ Projects',
      description: 'Successfully delivered'
    },
    {
      icon: <Heart className="h-6 w-6" />,
      title: '100%',
      description: 'Client satisfaction rate'
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
              I'm a Berlin-based product leader with 18+ years across software, hardware, and cloud systems. I head Digital Solutions at Cubonic, building platforms for electric and autonomous vehicles. I've driven product growth at AutoScout24, Cazoo, Cluno, Zeiss IMT, and Merz Group. I founded a school in Assam and am raising my son, Vyom, in a multilingual home.
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
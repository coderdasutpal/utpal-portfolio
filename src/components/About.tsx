import React from 'react';
import { Briefcase, Users, Globe } from 'lucide-react';
import profileImage from '@/assets/profile-image-new.jpg';

const About = () => {
  const highlights = [
    {
      icon: <Briefcase className="h-6 w-6" />,
      title: '18+ Years',
      description: 'Product Leadership Experience'
    },
    {
      icon: <Users className="h-6 w-6" />,
      title: '5 Companies',
      description: 'Digital Transformation Led'
    },
    {
      icon: <Globe className="h-6 w-6" />,
      title: 'Multi-lingual',
      description: 'English, German, Hindi, Japanese'
    }
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center max-w-6xl mx-auto">
          {/* Text Content */}
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-8">
              Why We Do What We Do
            </h2>
            
            <div className="mb-8">
              <p className="text-xl text-foreground/80 leading-relaxed mb-6">
                I imagine a world where digital transformation isn't just about technology, but about empowering people and creating meaningful experiences that drive real business impact.
              </p>
              
              <p className="text-lg text-muted-foreground leading-relaxed">
                With over 18 years of experience across diverse organizational landscapes - from large corporations like Zeiss and Tata Consultancy Services, to high-growth startups like Cluno and Cazoo - I've learned that the best products come from understanding both technology and human needs.
              </p>
            </div>

            {/* Highlights */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {highlights.map((item, index) => (
                <div key={index} className="text-center">
                  <div className="w-12 h-12 bg-primary text-white rounded-lg flex items-center justify-center mx-auto mb-3">
                    {item.icon}
                  </div>
                  <div className="text-2xl font-bold text-foreground mb-1">{item.title}</div>
                  <div className="text-sm text-muted-foreground">{item.description}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Image */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              <img
                src={profileImage}
                alt="Profile"
                className="w-80 h-80 md:w-96 md:h-96 object-cover rounded-2xl shadow-xl"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
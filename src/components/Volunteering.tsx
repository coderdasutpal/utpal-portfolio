import React from 'react';
import { Heart, Users, Code, BookOpen } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const Volunteering = () => {
  const volunteerWork = [
    {
      organization: 'Code for Good',
      role: 'Lead Developer',
      description: 'Built a food bank management system that helps distribute meals to 500+ families weekly. Developed user-friendly interface for volunteers and automated inventory tracking.',
      icon: <Code className="h-8 w-8" />,
      period: '2022 - Present',
      impact: '500+ families served weekly'
    },
    {
      organization: 'Tech Education Alliance',
      role: 'Mentor & Instructor',
      description: 'Mentor underrepresented students in programming. Designed curriculum for web development bootcamp that achieved 85% job placement rate.',
      icon: <BookOpen className="h-8 w-8" />,
      period: '2021 - Present',
      impact: '150+ students mentored'
    },
    {
      organization: 'Local Animal Shelter',
      role: 'Digital Coordinator',
      description: 'Created an adoption platform that increased pet adoptions by 40%. Built volunteer scheduling system and donation tracking dashboard.',
      icon: <Heart className="h-8 w-8" />,
      period: '2020 - 2022',
      impact: '40% increase in adoptions'
    },
    {
      organization: 'Youth Coding Club',
      role: 'Volunteer Instructor',
      description: 'Teach coding fundamentals to middle school students. Focus on building confidence in STEM and encouraging creativity through programming.',
      icon: <Users className="h-8 w-8" />,
      period: '2019 - Present',
      impact: '200+ young minds inspired'
    }
  ];

  return (
    <section id="volunteering" className="section-padding bg-gradient-to-b from-secondary to-background">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            Giving Back
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Using technology and expertise to make a positive impact in the community 
            and help others grow in their tech journey.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {volunteerWork.map((work, index) => (
            <Card key={index} className="hover-lift border-border shadow-medium hover:shadow-large">
              <CardContent className="p-8">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 bg-gradient-to-br from-primary to-accent text-white rounded-xl flex items-center justify-center shadow-medium">
                      {work.icon}
                    </div>
                  </div>
                  
                  <div className="flex-1">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-3">
                      <h3 className="text-xl font-semibold text-foreground">
                        {work.organization}
                      </h3>
                      <span className="text-sm text-muted-foreground bg-muted px-3 py-1 rounded-full mt-2 md:mt-0">
                        {work.period}
                      </span>
                    </div>
                    
                    <div className="text-primary font-medium mb-3">
                      {work.role}
                    </div>
                    
                    <p className="text-muted-foreground leading-relaxed mb-4">
                      {work.description}
                    </p>
                    
                    <div className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-accent rounded-full"></div>
                      <span className="text-sm font-medium text-accent">
                        {work.impact}
                      </span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-primary to-accent p-8 rounded-2xl shadow-premium text-white">
            <h3 className="text-2xl font-bold mb-4">
              Want to collaborate on a cause?
            </h3>
            <p className="text-white/90 mb-6 max-w-2xl mx-auto">
              I'm always looking for opportunities to use technology for social good. 
              Let's work together to make a difference.
            </p>
            <button
              onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-white text-primary hover:bg-white/90 px-8 py-3 rounded-lg font-medium transition-all duration-200 shadow-medium hover:shadow-large"
            >
              Get in Touch
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Volunteering;
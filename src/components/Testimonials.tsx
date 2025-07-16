import React from 'react';
import { Star, Quote } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const Testimonials = () => {
  const testimonials = [
    {
      name: 'Sarah Johnson',
      role: 'Product Manager at TechCorp',
      company: 'TechCorp',
      content: 'Working with this developer was an absolute pleasure. They delivered our e-commerce platform ahead of schedule and exceeded all our expectations. The attention to detail and code quality is exceptional.',
      rating: 5,
      avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face'
    },
    {
      name: 'Michael Chen',
      role: 'Startup Founder',
      company: 'InnovateLab',
      content: 'Incredible technical skills combined with great communication. They helped us build our MVP from scratch and provided valuable insights that shaped our product strategy.',
      rating: 5,
      avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face'
    },
    {
      name: 'Emily Rodriguez',
      role: 'CTO at GrowthHub',
      company: 'GrowthHub',
      content: 'Outstanding developer who truly understands modern web technologies. They optimized our application performance by 60% and implemented features we thought were impossible.',
      rating: 5,
      avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face'
    },
    {
      name: 'David Park',
      role: 'Design Director',
      company: 'CreativeStudio',
      content: 'Perfect collaboration between design and development. They brought our complex UI designs to life with pixel-perfect precision and smooth animations.',
      rating: 5,
      avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face'
    },
    {
      name: 'Lisa Thompson',
      role: 'Marketing Director',
      company: 'BrandForward',
      content: 'Not only technically excellent but also a great business partner. They understood our goals and delivered solutions that directly impacted our bottom line.',
      rating: 5,
      avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&h=150&fit=crop&crop=face'
    },
    {
      name: 'James Wilson',
      role: 'Operations Manager',
      company: 'LogiFlow',
      content: 'Transformed our workflow with a custom dashboard that saves us 10+ hours per week. Professional, reliable, and always goes the extra mile.',
      rating: 5,
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face'
    }
  ];

  const renderStars = (rating: number) => {
    return Array.from({ length: rating }, (_, index) => (
      <Star key={index} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
    ));
  };

  return (
    <section id="testimonials" className="section-padding">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            What Clients Say
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Don't just take my word for it. Here's what some of my clients have 
            to say about working together.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="hover-lift border-border shadow-medium hover:shadow-large relative">
              <CardContent className="p-6">
                {/* Quote Icon */}
                <div className="absolute -top-3 -left-3 w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center shadow-medium">
                  <Quote className="h-4 w-4" />
                </div>

                {/* Rating */}
                <div className="flex space-x-1 mb-4">
                  {renderStars(testimonial.rating)}
                </div>

                {/* Content */}
                <p className="text-muted-foreground mb-6 leading-relaxed italic">
                  "{testimonial.content}"
                </p>

                {/* Author */}
                <div className="flex items-center space-x-3">
                  <img
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover shadow-soft"
                  />
                  <div>
                    <div className="font-semibold text-foreground">
                      {testimonial.name}
                    </div>
                    <div className="text-sm text-muted-foreground">
                      {testimonial.role}
                    </div>
                    <div className="text-sm text-primary font-medium">
                      {testimonial.company}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Statistics */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div>
            <div className="text-3xl md:text-4xl font-bold text-primary mb-2">50+</div>
            <div className="text-muted-foreground">Happy Clients</div>
          </div>
          <div>
            <div className="text-3xl md:text-4xl font-bold text-primary mb-2">100%</div>
            <div className="text-muted-foreground">Satisfaction Rate</div>
          </div>
          <div>
            <div className="text-3xl md:text-4xl font-bold text-primary mb-2">5.0</div>
            <div className="text-muted-foreground">Average Rating</div>
          </div>
          <div>
            <div className="text-3xl md:text-4xl font-bold text-primary mb-2">24h</div>
            <div className="text-muted-foreground">Response Time</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
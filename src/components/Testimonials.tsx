import React from 'react';
import { Quote } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const Testimonials = () => {
  const testimonials = [
    {
      name: "Nikita",
      company: "AutoScout24",
      quote: "Utpal is a passionate, data-driven leader who empowers his team and delivers impact. A strong product mind."
    },
    {
      name: "Tino",
      company: "AutoScout24", 
      quote: "He brought clarity, new perspectives, and outcome-driven leadership to our product work."
    },
    {
      name: "Sharath",
      company: "Cluno",
      quote: "Led our logistics and ops platforms. Grounded, thoughtful, and hands-on."
    },
    {
      name: "Lee",
      company: "Cazoo",
      quote: "Great product thinker with people skills. Always driving real value."
    },
    {
      name: "Derek",
      company: "Cazoo",
      quote: "One of the best PMs I've worked with — combines theory with execution, deeply empathetic."
    },
    {
      name: "Harriet",
      company: "Cazoo",
      quote: "Tenacious and curious — Utpal asks the right questions and drives meaningful outcomes."
    },
    {
      name: "Veronika",
      company: "Cluno",
      quote: "Digitized supplier workflows and enabled scalable growth. A key part of Cluno's success."
    },
    {
      name: "Louis",
      company: "Cazoo",
      quote: "Calm, outcome-focused leader with a strong growth mindset."
    },
    {
      name: "Annika",
      company: "Cluno",
      quote: "Structured, visionary, and consistent. He made a mark on every product he led."
    },
    {
      name: "Mohsin",
      company: "TCS",
      quote: "Technically sound and always prepared. Great mentor and communicator."
    }
  ];

  return (
    <section id="testimonials" className="section-padding bg-gradient-to-b from-background to-secondary">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            What People Say
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Feedback from colleagues and collaborators across different companies and projects.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="hover-lift border-border shadow-medium hover:shadow-large">
              <CardContent className="p-8">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-gradient-to-br from-primary to-accent text-white rounded-lg flex items-center justify-center shadow-medium">
                      <Quote className="h-6 w-6" />
                    </div>
                  </div>
                  
                  <div className="flex-1">
                    <p className="text-muted-foreground leading-relaxed mb-4 italic">
                      "{testimonial.quote}"
                    </p>
                    
                    <div className="border-t border-border pt-4">
                      <div className="text-foreground font-semibold">
                        {testimonial.name}
                      </div>
                      <div className="text-primary text-sm">
                        {testimonial.company}
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
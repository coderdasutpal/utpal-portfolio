import React from 'react';
import { Card, CardContent } from '@/components/ui/card';

const Projects = () => {
  const featuredProjects = [
    {
      title: "AutoScout24 Mobile Growth",
      period: "2022–2024",
      tech: "Product Strategy, Mobile Apps",
      description: "Led mobile product growth and engagement strategies across European markets, driving significant user acquisition and retention improvements.",
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=800&q=80"
    },
    {
      title: "Vehicle Data Monetization",
      period: "2022–2024", 
      tech: "API Strategy, Data Products",
      description: "Built monetizable vehicle diagnostics APIs and data integration platforms, creating new revenue streams for automotive partners.",
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=800&q=80"
    },
    {
      title: "Digital Car Delivery Platform",
      period: "2019–2022",
      tech: "Digital Transformation",
      description: "Digitized customer car delivery processes at Cluno, achieving 90% paper reduction and significantly improved customer satisfaction.",
      image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&w=800&q=80"
    },
    {
      title: "B2B Leasing Ecosystem",
      period: "2019–2022",
      tech: "Platform Design, B2B",
      description: "Designed and built comprehensive B2B leasing and dealership ecosystem from the ground up, enabling scalable partner operations.",
      image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=800&q=80"
    },
    {
      title: "Asset Financing System",
      period: "2021–2022",
      tech: "Fintech, Process Automation",
      description: "Built post-acquisition financing workflows for vehicle asset management, streamlining complex financial operations.",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=800&q=80"
    },
    {
      title: "AR-CAD Projection System",
      period: "2017–2018",
      tech: "AR/VR, Industrial Innovation",
      description: "Developed AR-CAD projection system for automotive assembly lines, revolutionizing manufacturing processes.",
      image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&w=800&q=80"
    }
  ];

  return (
    <section id="projects" className="py-20 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            What's Your Next Digital Transformation?
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            A selection of products and systems I've built across automotive, fintech, and industrial domains - each designed to solve real business challenges.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {featuredProjects.map((project, index) => (
            <Card key={index} className="bg-white border-0 shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden group">
              <div className="aspect-video overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <CardContent className="p-6">
                <div className="mb-4">
                  <h3 className="text-xl font-bold text-foreground mb-3">
                    {project.title}
                  </h3>
                  <div className="flex flex-wrap gap-2 mb-4">
                    <span className="text-xs text-primary font-semibold bg-primary/10 px-3 py-1 rounded-full">
                      {project.period}
                    </span>
                    <span className="text-xs text-muted-foreground bg-muted px-3 py-1 rounded-full">
                      {project.tech}
                    </span>
                  </div>
                </div>
                
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {project.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <div className="inline-block bg-white rounded-lg p-6 shadow-sm">
            <p className="text-muted-foreground mb-4">
              Ready to transform your digital product strategy?
            </p>
            <button 
              onClick={() => {
                const element = document.querySelector('#contact');
                if (element) {
                  element.scrollIntoView({ behavior: 'smooth' });
                }
              }}
              className="bg-accent text-white px-8 py-3 rounded-full font-semibold hover:bg-accent-hover transition-colors duration-200"
            >
              Let's Work Together
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
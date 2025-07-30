import React from 'react';
import { ExternalLink, Github } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const Projects = () => {
  const projects = [
    {
      title: "AutoScout24 Mobile Apps",
      period: "2022–2024",
      tech: "iOS, Android, Firebase",
      description: "Led mobile product growth and engagement across Europe.",
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=800&q=80"
    },
    {
      title: "Vehicle Data APIs – AutoScout24",
      period: "2022–2024",
      tech: "GraphQL, APIs",
      description: "Built monetizable diagnostics APIs and data integrations for partners.",
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=800&q=80"
    },
    {
      title: "Asset Financing System – Cazoo",
      period: "2021–2022",
      tech: "Salesforce, APIs",
      description: "Built post-acquisition financing workflows for vehicle asset management.",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=800&q=80"
    },
    {
      title: "Digital Handover App – Cluno",
      period: "2019–2022",
      tech: "React Native, Figma",
      description: "Digitized customer car delivery with 90% paper reduction.",
      image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&w=800&q=80"
    },
    {
      title: "Partner Platform Ecosystem – Cluno",
      period: "2019–2022",
      tech: "CRM, Dealer Tools",
      description: "Designed B2B leasing and dealership ecosystem from scratch.",
      image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=800&q=80"
    },
    {
      title: "Mid-Mile Planning – Cazoo",
      period: "2021",
      tech: "Logistics, Routing",
      description: "Optimized vehicle delivery routing system.",
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=800&q=80"
    },
    {
      title: "Glide Intake App – Cazoo",
      period: "2021",
      tech: "VIN Scanning, Mobile UI",
      description: "App for vehicle intake via scanning & check-in.",
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=800&q=80"
    },
    {
      title: "OCR Fine Handling – Cluno",
      period: "2020",
      tech: "OCR, Dashboards",
      description: "Optimized fine processing from analog to digital.",
      image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&w=800&q=80"
    },
    {
      title: "Apollo CAD Projection – Merz Group",
      period: "2017–2018",
      tech: "QT, AR, Vision",
      description: "Built AR-CAD projection system for automotive assembly lines.",
      image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&w=800&q=80"
    },
    {
      title: "Merz CAD Workmate",
      period: "2017",
      tech: "Cross-platform, AR/VR",
      description: "CAD viewer + manipulation tool for design teams and engineers.",
      image: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=800&q=80"
    },
    {
      title: "Optical Measurement Cell – Merz Group",
      period: "2016–2017",
      tech: "Industrial Sensors, PLC",
      description: "Deployed robotics + vision cell for automated quality inspection.",
      image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&w=800&q=80"
    },
    {
      title: "CAD Reverse Engineering – Zeiss",
      period: "2011–2016",
      tech: "ACIS, C++, C#, WPF",
      description: "Developed point cloud to CAD conversion tools for precision engineering.",
      image: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=800&q=80"
    },
    {
      title: "NSK Sensor Firmware – NEGELE",
      period: "2010–2011",
      tech: "Embedded C",
      description: "Firmware for food/pharma grade sensor hardware.",
      image: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=800&q=80"
    },
    {
      title: "EICAS – National Aerospace Labs",
      period: "2009–2010",
      tech: "Avionics GUI",
      description: "Built Engine Indication and Crew Alert System (pilot display).",
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=800&q=80"
    },
    {
      title: "SFD Assembly Code Validation – Meggitt",
      period: "2008–2009",
      tech: "Assembly, DSP",
      description: "Manual verification of low-level avionics display firmware.",
      image: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=800&q=80"
    },
    {
      title: "DC Power Booster",
      period: "2007–2008",
      tech: "Hardware",
      description: "Converted low voltage to high voltage using DC chopper circuit.",
      image: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=800&q=80"
    },
    {
      title: "Infrared Counter",
      period: "2005",
      tech: "Embedded",
      description: "Designed IR sensor system to count trespasses.",
      image: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=800&q=80"
    }
  ];

  return (
    <section id="projects" className="section-padding bg-gradient-subtle relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-20 right-20 w-40 h-40 bg-accent/10 rounded-full blur-3xl animate-float"></div>
      <div className="absolute bottom-20 left-20 w-32 h-32 bg-primary/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }}></div>
      
      <div className="container-custom relative">
        <div className="text-center mb-20 animate-fade-in-scale">
          <h2 className="text-5xl md:text-6xl font-black text-gradient bg-gradient-to-r from-primary via-accent to-tertiary bg-clip-text mb-8">
            Projects
          </h2>
          <div className="card-modern p-8 rounded-3xl max-w-4xl mx-auto">
            <p className="text-xl text-foreground/90 leading-relaxed font-medium">
              A selection of products and systems I've built across automotive, aerospace, and industrial domains.
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card key={index} className="card-modern hover-lift border-0 overflow-hidden group animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
              <div className="aspect-video overflow-hidden relative">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>
              <CardContent className="p-6">
                <div className="mb-4">
                  <h3 className="text-xl font-bold text-foreground mb-3 line-clamp-2 group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <div className="flex flex-col gap-3 mb-4">
                    <span className="text-sm text-primary font-bold bg-primary/10 px-3 py-1 rounded-full w-fit">
                      {project.period}
                    </span>
                    <span className="text-sm text-muted-foreground glass backdrop-blur-xl px-3 py-1 rounded-full w-fit border border-primary/20">
                      {project.tech}
                    </span>
                  </div>
                </div>
                
                <p className="text-muted-foreground leading-relaxed">
                  {project.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
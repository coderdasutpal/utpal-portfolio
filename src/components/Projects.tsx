import React from 'react';
import { ExternalLink, Github } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const Projects = () => {
  const projects = [
    {
      title: "AutoScout24 Mobile Apps",
      period: "2022–2024",
      tech: "iOS, Android, Firebase",
      description: "Led mobile product growth and engagement across Europe."
    },
    {
      title: "Vehicle Data APIs – AutoScout24",
      period: "2022–2024",
      tech: "GraphQL, APIs",
      description: "Built monetizable diagnostics APIs and data integrations for partners."
    },
    {
      title: "Asset Financing System – Cazoo",
      period: "2021–2022",
      tech: "Salesforce, APIs",
      description: "Built post-acquisition financing workflows for vehicle asset management."
    },
    {
      title: "Digital Handover App – Cluno",
      period: "2019–2022",
      tech: "React Native, Figma",
      description: "Digitized customer car delivery with 90% paper reduction."
    },
    {
      title: "Partner Platform Ecosystem – Cluno",
      period: "2019–2022",
      tech: "CRM, Dealer Tools",
      description: "Designed B2B leasing and dealership ecosystem from scratch."
    },
    {
      title: "Mid-Mile Planning – Cazoo",
      period: "2021",
      tech: "Logistics, Routing",
      description: "Optimized vehicle delivery routing system."
    },
    {
      title: "Glide Intake App – Cazoo",
      period: "2021",
      tech: "VIN Scanning, Mobile UI",
      description: "App for vehicle intake via scanning & check-in."
    },
    {
      title: "OCR Fine Handling – Cluno",
      period: "2020",
      tech: "OCR, Dashboards",
      description: "Optimized fine processing from analog to digital."
    },
    {
      title: "Apollo CAD Projection – Merz Group",
      period: "2017–2018",
      tech: "QT, AR, Vision",
      description: "Built AR-CAD projection system for automotive assembly lines."
    },
    {
      title: "Merz CAD Workmate",
      period: "2017",
      tech: "Cross-platform, AR/VR",
      description: "CAD viewer + manipulation tool for design teams and engineers."
    },
    {
      title: "Optical Measurement Cell – Merz Group",
      period: "2016–2017",
      tech: "Industrial Sensors, PLC",
      description: "Deployed robotics + vision cell for automated quality inspection."
    },
    {
      title: "CAD Reverse Engineering – Zeiss",
      period: "2011–2016",
      tech: "ACIS, C++, C#, WPF",
      description: "Developed point cloud to CAD conversion tools for precision engineering."
    },
    {
      title: "NSK Sensor Firmware – NEGELE",
      period: "2010–2011",
      tech: "Embedded C",
      description: "Firmware for food/pharma grade sensor hardware."
    },
    {
      title: "EICAS – National Aerospace Labs",
      period: "2009–2010",
      tech: "Avionics GUI",
      description: "Built Engine Indication and Crew Alert System (pilot display)."
    },
    {
      title: "SFD Assembly Code Validation – Meggitt",
      period: "2008–2009",
      tech: "Assembly, DSP",
      description: "Manual verification of low-level avionics display firmware."
    },
    {
      title: "DC Power Booster",
      period: "2007–2008",
      tech: "Hardware",
      description: "Converted low voltage to high voltage using DC chopper circuit."
    },
    {
      title: "Infrared Counter",
      period: "2005",
      tech: "Embedded",
      description: "Designed IR sensor system to count trespasses."
    }
  ];

  return (
    <section id="projects" className="section-padding bg-gradient-to-b from-background to-secondary">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            Projects
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A selection of products and systems I've built across automotive, aerospace, and industrial domains.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card key={index} className="hover-lift border-border shadow-medium hover:shadow-large transition-all duration-300">
              <CardContent className="p-6">
                <div className="mb-4">
                  <h3 className="text-xl font-semibold text-foreground mb-2 line-clamp-2">
                    {project.title}
                  </h3>
                  <div className="flex flex-col gap-2 mb-3">
                    <span className="text-sm text-primary font-medium">
                      {project.period}
                    </span>
                    <span className="text-sm text-muted-foreground bg-muted px-2 py-1 rounded-md w-fit">
                      {project.tech}
                    </span>
                  </div>
                </div>
                
                <p className="text-muted-foreground leading-relaxed mb-6">
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
import React from 'react';
import { Github, Linkedin, Twitter, Mail } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  const socialLinks = [
    {
      icon: <Github className="h-5 w-5" />,
      href: 'https://github.com',
      label: 'GitHub'
    },
    {
      icon: <Linkedin className="h-5 w-5" />,
      href: 'https://linkedin.com',
      label: 'LinkedIn'
    },
    {
      icon: <Twitter className="h-5 w-5" />,
      href: 'https://twitter.com',
      label: 'Twitter'
    },
    {
      icon: <Mail className="h-5 w-5" />,
      href: 'mailto:hello@developer.com',
      label: 'Email'
    }
  ];

  const quickLinks = [
    { name: 'About', href: '#about' },
    { name: 'Projects', href: '#projects' },
    { name: 'Volunteering', href: '#volunteering' },
    { name: 'Testimonials', href: '#testimonials' },
    { name: 'Contact', href: '#contact' }
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-foreground text-background">
      <div className="container-custom">
        {/* Main Footer Content */}
        <div className="py-16 grid md:grid-cols-3 gap-12">
          {/* Brand Section */}
          <div>
            <h3 className="text-2xl font-bold mb-4">Portfolio</h3>
            <p className="text-background/80 mb-6 leading-relaxed">
              Building digital experiences that make a difference. 
              Let's create something amazing together.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-background/10 hover:bg-background/20 rounded-lg flex items-center justify-center transition-colors duration-200"
                  aria-label={link.label}
                >
                  {link.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Quick Links</h4>
            <nav className="space-y-3">
              {quickLinks.map((link, index) => (
                <button
                  key={index}
                  onClick={() => scrollToSection(link.href)}
                  className="block text-background/80 hover:text-background transition-colors duration-200"
                >
                  {link.name}
                </button>
              ))}
            </nav>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Let's Connect</h4>
            <div className="space-y-3">
              <p className="text-background/80">
                Ready to start your next project?
              </p>
              <a
                href="mailto:hello@developer.com"
                className="block text-background hover:text-background/80 transition-colors duration-200 font-medium"
              >
                hello@developer.com
              </a>
              <a
                href="tel:+15551234567"
                className="block text-background/80 hover:text-background transition-colors duration-200"
              >
                +1 (555) 123-4567
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-background/20 py-8 flex flex-col md:flex-row items-center justify-between">
          <p className="text-background/60 text-sm mb-4 md:mb-0">
            © {currentYear} Portfolio. All rights reserved.
          </p>
          
          <div className="flex items-center space-x-6 text-sm">
            <button
              onClick={scrollToTop}
              className="text-background/60 hover:text-background transition-colors duration-200"
            >
              Back to top ↑
            </button>
            <span className="text-background/40">•</span>
            <span className="text-background/60">
              Made with ❤️ and React
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
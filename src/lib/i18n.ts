import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  en: {
    translation: {
      nav: {
        about: 'About',
        projects: 'Projects',
        volunteering: 'Volunteering',
        testimonials: 'Testimonials',
        contact: 'Contact'
      },
      hero: {
        greeting: 'Hi, I\'m',
        name: 'Utpal Das',
        tagline: 'Tech strategist, builder, father.',
        description: 'I lead digital ecosystems, launch future-focused products, and build systems that scale — from autonomous mobility to grassroots education.',
        seeWork: 'See My Work',
        contactMe: 'Contact Me',
        scrollExplore: 'Scroll to explore'
      },
      about: {
        title: 'About Me',
        description: 'I\'m a technology leader with a passion for building products that make a difference.',
        experience: 'Years of Experience',
        projects: 'Projects Completed',
        teams: 'Teams Led'
      },
      projects: {
        title: 'Featured Projects',
        description: 'A showcase of my work across different domains and technologies.'
      },
      volunteering: {
        title: 'Volunteering & Impact',
        description: 'Giving back to the community through technology and education.'
      },
      testimonials: {
        title: 'What People Say',
        description: 'Feedback from colleagues and clients I\'ve worked with.'
      },
      contact: {
        title: 'Get In Touch',
        description: 'Let\'s discuss how we can work together.'
      }
    }
  },
  de: {
    translation: {
      nav: {
        about: 'Über mich',
        projects: 'Projekte',
        volunteering: 'Ehrenamt',
        testimonials: 'Referenzen',
        contact: 'Kontakt'
      },
      hero: {
        greeting: 'Hallo, ich bin',
        name: 'Utpal Das',
        tagline: 'Tech-Stratege, Entwickler, Vater.',
        description: 'Ich leite digitale Ökosysteme, bringe zukunftsorientierte Produkte auf den Markt und baue skalierbare Systeme — von autonomer Mobilität bis hin zu Bildung an der Basis.',
        seeWork: 'Meine Arbeit ansehen',
        contactMe: 'Kontakt aufnehmen',
        scrollExplore: 'Scrollen zum Erkunden'
      },
      about: {
        title: 'Über mich',
        description: 'Ich bin ein Technologieführer mit einer Leidenschaft für den Aufbau von Produkten, die einen Unterschied machen.',
        experience: 'Jahre Erfahrung',
        projects: 'Abgeschlossene Projekte',
        teams: 'Geleitete Teams'
      },
      projects: {
        title: 'Ausgewählte Projekte',
        description: 'Eine Präsentation meiner Arbeit in verschiedenen Bereichen und Technologien.'
      },
      volunteering: {
        title: 'Ehrenamt & Wirkung',
        description: 'Der Gemeinschaft durch Technologie und Bildung etwas zurückgeben.'
      },
      testimonials: {
        title: 'Was die Leute sagen',
        description: 'Feedback von Kollegen und Kunden, mit denen ich gearbeitet habe.'
      },
      contact: {
        title: 'Kontakt aufnehmen',
        description: 'Lassen Sie uns besprechen, wie wir zusammenarbeiten können.'
      }
    }
  }
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: 'en',
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;
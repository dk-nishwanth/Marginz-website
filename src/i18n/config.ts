export type Language = 'en' | 'es' | 'fr' | 'de';

export interface Translations {
  [key: string]: {
    [key: string]: string;
  };
}

export const translations: Record<Language, Translations> = {
  en: {
    nav: {
      home: 'HOME',
      about: 'ABOUT',
      services: 'SERVICES',
      contact: 'CONTACT'
    },
    home: {
      title: 'TRANSFORM',
      subtitle: 'The Strategist - ROI & Business Outcome',
      description: 'Beyond Code: Delivering Measurable MARGINZ on Digital Investment. We engineer the infrastructure of tomorrow\'s market leadership.'
    },
    about: {
      title: 'EMPOWERING PEOPLE, BUILDING TECHNOLOGY',
      description: 'Delivering Impact through innovative IT solutions that transform your digital presence into a powerful business asset.'
    },
    services: {
      title: 'BEST IT SOLUTIONS',
      description: 'Comprehensive IT services designed to transform your business objectives into powerful technological assets that drive growth and competitive advantage.'
    },
    contact: {
      title: 'LET\'S START SOLVING YOUR IT CHALLENGES TOGETHER',
      description: 'Connect with our digital solutions team to transform your business objectives into powerful technological assets.'
    }
  },
  es: {
    nav: {
      home: 'INICIO',
      about: 'ACERCA DE',
      services: 'SERVICIOS',
      contact: 'CONTACTO'
    },
    home: {
      title: 'TRANSFORMAR',
      subtitle: 'El Estratega - ROI y Resultado Empresarial',
      description: 'Más allá del Código: Entregando MARGINZ Medible en Inversión Digital. Diseñamos la infraestructura del liderazgo de mercado del mañana.'
    },
    about: {
      title: 'EMPODERANDO PERSONAS, CONSTRUYENDO TECNOLOGÍA',
      description: 'Entregando Impacto a través de soluciones de TI innovadoras que transforman su presencia digital en un activo empresarial poderoso.'
    },
    services: {
      title: 'LAS MEJORES SOLUCIONES DE TI',
      description: 'Servicios de TI integrales diseñados para transformar sus objetivos comerciales en activos tecnológicos poderosos que impulsen el crecimiento.'
    },
    contact: {
      title: 'COMENCEMOS A RESOLVER SUS DESAFÍOS DE TI',
      description: 'Conéctese con nuestro equipo de soluciones digitales para transformar sus objetivos comerciales en activos tecnológicos poderosos.'
    }
  },
  fr: {
    nav: {
      home: 'ACCUEIL',
      about: 'À PROPOS',
      services: 'SERVICES',
      contact: 'CONTACT'
    },
    home: {
      title: 'TRANSFORMER',
      subtitle: 'Le Stratège - ROI et Résultat Commercial',
      description: 'Au-delà du Code: Livrer des MARGINZ Mesurables sur l\'Investissement Numérique. Nous concevons l\'infrastructure du leadership du marché de demain.'
    },
    about: {
      title: 'AUTONOMISER LES GENS, CONSTRUIRE LA TECHNOLOGIE',
      description: 'Livrer l\'Impact grâce à des solutions informatiques innovantes qui transforment votre présence numérique en un atout commercial puissant.'
    },
    services: {
      title: 'LES MEILLEURES SOLUTIONS INFORMATIQUES',
      description: 'Services informatiques complets conçus pour transformer vos objectifs commerciaux en actifs technologiques puissants qui stimulent la croissance.'
    },
    contact: {
      title: 'COMMENÇONS À RÉSOUDRE VOS DÉFIS INFORMATIQUES',
      description: 'Connectez-vous avec notre équipe de solutions numériques pour transformer vos objectifs commerciaux en actifs technologiques puissants.'
    }
  },
  de: {
    nav: {
      home: 'STARTSEITE',
      about: 'ÜBER UNS',
      services: 'DIENSTLEISTUNGEN',
      contact: 'KONTAKT'
    },
    home: {
      title: 'TRANSFORMIEREN',
      subtitle: 'Der Stratege - ROI und Geschäftsergebnis',
      description: 'Jenseits von Code: Messbare MARGINZ bei digitalen Investitionen liefern. Wir entwickeln die Infrastruktur der Marktführerschaft von morgen.'
    },
    about: {
      title: 'MENSCHEN BEFÄHIGEN, TECHNOLOGIE AUFBAUEN',
      description: 'Auswirkungen durch innovative IT-Lösungen liefern, die Ihre digitale Präsenz in ein starkes Geschäftsvermögen umwandeln.'
    },
    services: {
      title: 'BESTE IT-LÖSUNGEN',
      description: 'Umfassende IT-Dienstleistungen zur Umwandlung Ihrer Geschäftsziele in starke technologische Vermögenswerte, die Wachstum fördern.'
    },
    contact: {
      title: 'LASSEN SIE UNS IHRE IT-HERAUSFORDERUNGEN LÖSEN',
      description: 'Verbinden Sie sich mit unserem Digital-Solutions-Team, um Ihre Geschäftsziele in starke technologische Vermögenswerte umzuwandeln.'
    }
  }
};

export const useTranslation = (language: Language) => {
  return (key: string, section: string = 'common'): string => {
    return translations[language]?.[section]?.[key] || key;
  };
};

export const getLanguageFromBrowser = (): Language => {
  const browserLang = navigator.language.split('-')[0];
  const supportedLangs: Language[] = ['en', 'es', 'fr', 'de'];
  return (supportedLangs.includes(browserLang as Language) ? browserLang : 'en') as Language;
};

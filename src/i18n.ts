import { useEffect, useState } from 'react';

export type Locale = 'fr' | 'en' | 'ko';

const supportedLocales: Locale[] = ['fr', 'en', 'ko'];

export const translations = {
  fr: {
    languageName: 'Français',
    switchLanguage: 'Changer de langue',
    skipToProjects: 'Aller aux projets',
    seniorFrontendDeveloper: 'Développeur front-end senior',
    openToOpportunities: 'Ouvert aux opportunités',
    socialAndContact: 'Réseaux et contact',
    opensInNewTab: '(ouvre dans un nouvel onglet)',
    introTitle: 'Je conçois des interfaces rapides, accessibles et durables.',
    introDescription: "Développeur front-end senior, j'interviens sur des produits web complexes pour clarifier l'expérience, améliorer les performances et rendre chaque interface plus inclusive.",
    projects: 'Projets',
    expertise: 'Mon expertise',
    stack: 'Stack',
    contact: 'Contactez-moi',
    contactDescription: 'Vous pouvez me contacter via',
    orBy: 'ou par',
    viewProject: 'Voir le projet',
    projectPreview: 'Aperçu du projet',
    stackGroups: [
      { label: 'Core', skills: ['JavaScript (ES6+)', 'TypeScript', 'Semantic HTML5', 'CSS3 / SASS'] },
      { label: 'Frameworks & Libs', skills: ['React', 'Next.js', 'Tailwind CSS', 'Leaflet', 'FreeMarker'] },
      { label: 'Méthodes & Outils', skills: ['Design Systems', 'RGAA / Accessibility (a11y)', 'Web Vitals', 'Git', 'Figma', 'WordPress'] },
    ],
  },
  en: {
    languageName: 'English',
    switchLanguage: 'Change language',
    skipToProjects: 'Skip to projects',
    seniorFrontendDeveloper: 'Senior front-end developer',
    openToOpportunities: 'Open to opportunities',
    socialAndContact: 'Social and contact links',
    opensInNewTab: '(opens in a new tab)',
    introTitle: 'I design fast, accessible and durable interfaces.',
    introDescription: 'As a senior front-end developer, I work on complex web products to clarify experiences, improve performance and make every interface more inclusive.',
    projects: 'Projects',
    expertise: 'Expertise',
    stack: 'Stack',
    contact: 'Get in touch',
    contactDescription: 'You can reach me via',
    orBy: 'or by',
    viewProject: 'View project',
    projectPreview: 'Project preview',
    stackGroups: [
      { label: 'Core', skills: ['JavaScript (ES6+)', 'TypeScript', 'Semantic HTML5', 'CSS3 / SASS'] },
      { label: 'Frameworks & Libraries', skills: ['React', 'Next.js', 'Tailwind CSS', 'Leaflet', 'FreeMarker'] },
      { label: 'Methods & Tools', skills: ['Design Systems', 'RGAA / Accessibility (a11y)', 'Web Vitals', 'Git', 'Figma', 'WordPress'] },
    ],
  },
  ko: {
    languageName: '한국어',
    switchLanguage: '언어 변경',
    skipToProjects: '프로젝트로 이동',
    seniorFrontendDeveloper: '시니어 프론트엔드 개발자',
    openToOpportunities: '새로운 기회를 찾고 있습니다',
    socialAndContact: '소셜 및 연락처',
    opensInNewTab: '(새 탭에서 열림)',
    introTitle: '빠르고 접근성이 뛰어나며 오래 지속되는 인터페이스를 만듭니다.',
    introDescription: '시니어 프론트엔드 개발자로서 복잡한 웹 제품의 경험을 명확하게 만들고 성능을 개선하며, 모두를 위한 인터페이스를 만듭니다.',
    projects: '프로젝트',
    expertise: '전문 분야',
    stack: '기술 스택',
    contact: '연락하기',
    contactDescription: '다음 채널을 통해 연락할 수 있습니다:',
    orBy: '또는',
    viewProject: '프로젝트 보기',
    projectPreview: '프로젝트 미리보기',
    stackGroups: [
      { label: '핵심 기술', skills: ['JavaScript (ES6+)', 'TypeScript', 'Semantic HTML5', 'CSS3 / SASS'] },
      { label: '프레임워크 및 라이브러리', skills: ['React', 'Next.js', 'Tailwind CSS', 'Leaflet', 'FreeMarker'] },
      { label: '방법론 및 도구', skills: ['Design Systems', 'RGAA / Accessibility (a11y)', 'Web Vitals', 'Git', 'Figma', 'WordPress'] },
    ],
  },
} as const;

function getInitialLocale(): Locale {
  const savedLocale = localStorage.getItem('locale');
  return supportedLocales.includes(savedLocale as Locale) ? savedLocale as Locale : 'fr';
}

export function useTranslation() {
  const [locale, setLocale] = useState<Locale>(getInitialLocale);

  useEffect(() => {
    document.documentElement.lang = locale;
    localStorage.setItem('locale', locale);
  }, [locale]);

  return { locale, setLocale, t: translations[locale] };
}

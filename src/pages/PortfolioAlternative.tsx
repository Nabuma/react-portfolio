import projects from '../data/projects.json';
import { type Locale, translations, useTranslation } from '../i18n';

const copy = {
  fr: {
    heroTitle: 'Des interfaces qui tiennent la charge et le temps.',
    heroDescription: 'J’aide les équipes produit à transformer des interfaces complexes en expériences rapides, accessibles et faciles à faire évoluer.',
    selectedWork: 'Projet principal',
    proof: 'Ce que je construis',
    tags: ['Front-end senior', 'Performance', 'Accessibilité', 'Design Systems', 'RGAA', 'Web Vitals', 'Mentorat', 'UX produit'],
    proofItems: [
      ['Performance', 'Web Vitals, bundles et parcours critiques sur des produits à fort trafic.'],
      ['Accessibilité', 'Interfaces conformes RGAA, testées avec une attention portée aux vrais usages.'],
      ['Systèmes', 'Composants réutilisables et pratiques partagées entre design, front-end et back-end.'],
    ],
    viewLive: 'Voir le site',
    allWork: 'Projets',
    contact: 'Parlons d’un produit exigeant.',
    contactDescription: 'Disponible pour une mission où le front-end doit clarifier l’expérience autant que la technique.',
    contactAction: 'Me contacter',
    opensInNewTab: '(ouvre dans un nouvel onglet)',
    languageName: 'Changer de langue',
    preview: 'Aperçu du projet',
  },
  en: {
    heroTitle: 'Interfaces built to carry weight and last.',
    heroDescription: 'I help product teams turn complex interfaces into fast, accessible experiences that are easier to evolve.',
    selectedWork: 'Featured project',
    proof: 'What I build',
    tags: ['Senior front-end', 'Performance', 'Accessibility', 'Design Systems', 'RGAA', 'Web Vitals', 'Mentoring', 'Product UX'],
    proofItems: [
      ['Performance', 'Web Vitals, bundles and critical journeys for high-traffic products.'],
      ['Accessibility', 'RGAA-compliant interfaces shaped around real assistive-technology use.'],
      ['Systems', 'Reusable components and shared practices across design, front-end and back-end.'],
    ],
    viewLive: 'Visit site',
    allWork: 'Projects',
    contact: 'Let’s discuss a demanding product.',
    contactDescription: 'Available for work where front-end needs to clarify both the experience and the technology.',
    contactAction: 'Start a conversation',
    opensInNewTab: '(opens in a new tab)',
    languageName: 'Change language',
    preview: 'Project preview',
  },
  ko: {
    heroTitle: '부하를 견디고 오래가는 인터페이스를 만듭니다.',
    heroDescription: '복잡한 인터페이스를 빠르고 접근성이 뛰어나며 발전시키기 쉬운 경험으로 바꾸도록 제품 팀을 돕습니다.',
    selectedWork: '대표 프로젝트',
    proof: '제가 만드는 것',
    tags: ['시니어 프론트엔드', '성능', '접근성', '디자인 시스템', 'RGAA', 'Web Vitals', '멘토링', '제품 UX'],
    proofItems: [
      ['성능', '트래픽이 많은 제품의 Web Vitals, 번들 및 핵심 사용자 여정.'],
      ['접근성', '실제 보조 기술 사용을 고려한 RGAA 준수 인터페이스.'],
      ['시스템', '디자인, 프론트엔드, 백엔드가 함께 사용하는 재사용 가능한 컴포넌트.'],
    ],
    viewLive: '사이트 보기',
    allWork: '프로젝트',
    contact: '도전적인 제품에 대해 이야기해 보세요.',
    contactDescription: '경험과 기술을 함께 명확하게 만드는 프론트엔드 업무를 찾고 있습니다.',
    contactAction: '연락하기',
    opensInNewTab: '(새 탭에서 열림)',
    languageName: '언어 변경',
    preview: '프로젝트 미리보기',
  },
} as const;

function LanguageSwitch({ locale, setLocale }: { locale: Locale; setLocale: (locale: Locale) => void }) {
  return (
    <div className="flex items-center gap-4" role="group" aria-label={copy[locale].languageName}>
      {(['fr', 'en', 'ko'] as Locale[]).map((language) => (
        <button className={`cursor-pointer text-xs font-bold tracking-[0.08em] uppercase ${locale === language ? 'text-ink underline underline-offset-4' : 'text-muted'}`} type="button" key={language} onClick={() => setLocale(language)} aria-label={translations[language].languageName} aria-pressed={locale === language}>
          {language.toUpperCase()}
        </button>
      ))}
    </div>
  );
}

function PortfolioAlternative() {
  const { locale, setLocale, t } = useTranslation();
  const text = copy[locale];
  const featuredProject = projects[0];
  const supportingProjects = projects.slice(1);
  const featuredScreenshot = featuredProject.screenshots[0] ?? featuredProject.visual;

  return (
    <div className="mx-auto w-[min(90rem,calc(100%-2.4rem))] sm:w-[min(90rem,calc(100%-4.8rem))]">
      <a className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:bg-ink focus:px-4 focus:py-3 focus:text-paper" href="#work">{t.skipToProjects}</a>
      <header className="flex items-center justify-between border-b border-line py-6 sm:py-8">
        <a className="font-heading text-sm font-bold tracking-[0.06em] uppercase" href="#top">Arnaud CHAPPLAIN</a>
        <div className="flex items-center gap-5 sm:gap-8">
          <nav className="hidden gap-7 font-heading text-sm font-bold tracking-[0.04em] uppercase sm:flex" aria-label={t.socialAndContact}>
            <a className="transition-colors hover:text-muted focus-visible:text-muted" href="#work">{text.allWork}</a>
            <a className="transition-colors hover:text-muted focus-visible:text-muted" href="#contact">Contact</a>
          </nav>
          <LanguageSwitch locale={locale} setLocale={setLocale} />
        </div>
      </header>

      <main id="top">
        <section className="grid gap-12 border-b border-line py-20 sm:py-28 lg:grid-cols-[minmax(0,1.25fr)_minmax(17rem,0.75fr)] lg:gap-20 lg:py-36" aria-labelledby="alternative-title">
          <div>
            <h1 id="alternative-title" className="max-w-[12ch] font-heading text-[3.6rem] leading-[0.9] font-medium sm:text-[5.8rem] lg:text-[7.2rem]">{text.heroTitle}</h1>
            <p className="mt-8 max-w-[38rem] text-xl leading-8">{text.heroDescription}</p>
            <a className="mt-9 inline-block border-b-2 border-ink pb-1 font-heading text-sm font-bold tracking-[0.06em] uppercase" href="#work">{text.allWork} <span aria-hidden="true">↓</span></a>
          </div>
          <div className="self-end border-t border-line pt-5 lg:border-t-0 lg:border-l lg:pl-8" aria-label={text.proof}>
            <div className="flex max-w-[26rem] flex-wrap items-baseline gap-x-3 gap-y-2">
              {text.tags.map((tag, index) => (
                <span className={`${index % 4 === 0 ? 'text-3xl' : index % 3 === 0 ? 'text-2xl' : 'text-lg'} font-heading leading-tight ${index % 2 === 0 ? 'font-medium' : 'text-muted'}`} key={tag}>{tag}</span>
              ))}
            </div>
          </div>
        </section>

        <section id="work" className="border-b border-line py-20 sm:py-28" aria-labelledby="featured-title">
          <div className="mb-8 flex items-baseline justify-between gap-5 sm:mb-12">
            <p className="font-heading text-sm font-bold tracking-[0.1em] text-muted uppercase">01 / {text.selectedWork}</p>
            <a className="hidden border-b border-current pb-1 font-heading text-sm font-bold tracking-[0.04em] uppercase sm:block" href={featuredProject.link} target="_blank" rel="noopener noreferrer" aria-label={`${text.viewLive} ${featuredProject.title} ${text.opensInNewTab}`}>{text.viewLive} ↗</a>
          </div>
          <div className="grid gap-10 lg:grid-cols-[minmax(0,1.2fr)_minmax(20rem,0.8fr)] lg:gap-20">
            <figure className="m-0 overflow-hidden border border-line bg-white p-2">
              <img className="block h-auto w-full" src={featuredScreenshot.src} alt={`${text.preview} ${featuredProject.title}`} width={featuredScreenshot.width} height={featuredScreenshot.height} />
            </figure>
            <div>
              <h2 id="featured-title" className="font-heading text-[2.8rem] leading-none font-medium sm:text-5xl">{featuredProject.title}</h2>
              <p className="mt-3 text-sm text-muted">{featuredProject.categorie[locale]} / {featuredProject.role[locale]}</p>
              <div className="mt-8 text-lg leading-8" dangerouslySetInnerHTML={{ __html: featuredProject.description[locale] }} />
              <ul className="mt-8 grid gap-3 border-t border-line pt-6 text-sm leading-6">
                <li><strong className="font-semibold">01</strong> {locale === 'fr' ? 'Migration jQuery vers ES6+' : locale === 'ko' ? 'jQuery에서 ES6+로 마이그레이션' : 'jQuery to ES6+ migration'}</li>
                <li><strong className="font-semibold">02</strong> {locale === 'fr' ? 'Design System de Figma vers FreeMarker' : locale === 'ko' ? 'Figma에서 FreeMarker로 디자인 시스템 통합' : 'Design System from Figma to FreeMarker'}</li>
                <li><strong className="font-semibold">03</strong> {locale === 'fr' ? 'Performance et conformité RGAA' : locale === 'ko' ? '성능 및 RGAA 접근성 준수' : 'Performance and RGAA compliance'}</li>
              </ul>
              <a className="mt-9 inline-block border-b border-current pb-1 font-heading text-sm font-bold tracking-[0.04em] uppercase sm:hidden" href={featuredProject.link} target="_blank" rel="noopener noreferrer" aria-label={`${text.viewLive} ${featuredProject.title} ${text.opensInNewTab}`}>{text.viewLive} ↗</a>
            </div>
          </div>
        </section>

        <section className="border-b border-line py-20 sm:py-28" aria-labelledby="proof-title">
          <p className="font-heading text-sm font-bold tracking-[0.1em] text-muted uppercase">02 /</p>
          <h2 id="proof-title" className="mt-5 font-heading text-[3.2rem] leading-none font-medium sm:text-6xl">{text.proof}</h2>
          <div className="mt-12 grid gap-0 border-t border-line md:grid-cols-3">
            {text.proofItems.map(([title, description], index) => (
              <article className="border-b border-line py-7 md:border-b-0 md:border-r md:px-7 md:first:pl-0 md:last:border-r-0 md:last:pr-0" key={title}>
                <p className="font-heading text-sm text-muted">0{index + 1}</p>
                <h3 className="mt-10 font-heading text-2xl font-medium">{title}</h3>
                <p className="mt-3 max-w-[28ch] leading-7">{description}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="border-b border-line py-20 sm:py-28" aria-labelledby="other-work-title">
          <div className="flex items-baseline justify-between gap-5">
            <h2 id="other-work-title" className="font-heading text-[3.2rem] leading-none font-medium sm:text-6xl">{text.allWork}</h2>
            <span className="font-heading text-sm text-muted">02—05</span>
          </div>
          <div className="mt-10 border-t border-line">
            {supportingProjects.map((project, index) => (
              <article className="grid gap-5 border-b border-line py-8 sm:grid-cols-[4rem_minmax(0,1fr)_minmax(8rem,auto)] sm:items-start sm:gap-8" key={project.title}>
                <p className="font-heading text-sm text-muted">0{index + 2}</p>
                <div className="grid gap-8 md:grid-cols-[minmax(14rem,0.8fr)_minmax(0,1.2fr)] md:items-start">
                  <div className="max-w-[22rem] overflow-hidden border border-line bg-white p-1 md:max-w-none">
                    <img className="block h-auto w-full" src={project.screenshots[0]?.src ?? project.visual.src} alt={`${text.preview} ${project.title}`} width={project.screenshots[0]?.width ?? project.visual.width} height={project.screenshots[0]?.height ?? project.visual.height} loading="lazy" />
                  </div>
                  <div>
                    <h3 className="font-heading text-2xl font-medium">{project.title}</h3>
                    <p className="mt-2 text-sm text-muted">{project.categorie[locale]} / {project.role[locale]}</p>
                    <div className="mt-4 max-w-[60ch] text-base leading-7" dangerouslySetInnerHTML={{ __html: project.description[locale] }} />
                  </div>
                </div>
                <a className="w-fit self-start border-b border-current pb-1 font-heading text-sm font-bold tracking-[0.04em] uppercase" href={project.link} target="_blank" rel="noopener noreferrer" aria-label={`${text.viewLive} ${project.title} ${text.opensInNewTab}`}>{text.viewLive} ↗</a>
              </article>
            ))}
          </div>
        </section>

        <section id="contact" className="grid gap-8 py-20 sm:py-28 lg:grid-cols-[minmax(0,1fr)_minmax(18rem,0.45fr)]" aria-labelledby="alternative-contact-title">
          <h2 id="alternative-contact-title" className="max-w-[12ch] font-heading text-[3.4rem] leading-[0.92] font-medium sm:text-6xl">{text.contact}</h2>
          <div className="lg:pt-2">
            <p className="max-w-[32ch] text-lg leading-7">{text.contactDescription}</p>
            <a className="mt-8 inline-block border-b-2 border-ink pb-1 font-heading text-sm font-bold tracking-[0.06em] uppercase" href="mailto:arnaud.chapplain@gmail.com">{text.contactAction} ↗</a>
            <nav className="mt-10 flex flex-wrap gap-x-6 gap-y-3 font-heading text-sm font-bold tracking-[0.04em] uppercase" aria-label={t.socialAndContact}>
              <a className="border-b border-current pb-1 transition-colors hover:text-muted focus-visible:text-muted" href="https://www.linkedin.com/in/arnaud-chapplain-6a04581a0/" target="_blank" rel="noopener noreferrer" aria-label={`LinkedIn ${t.opensInNewTab}`}>LinkedIn ↗</a>
              <a className="border-b border-current pb-1 transition-colors hover:text-muted focus-visible:text-muted" href="https://github.com/Nabuma" target="_blank" rel="noopener noreferrer" aria-label={`GitHub ${t.opensInNewTab}`}>GitHub ↗</a>
            </nav>
          </div>
        </section>
      </main>
    </div>
  );
}

export default PortfolioAlternative;
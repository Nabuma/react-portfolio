import expertiseAreas from './data/expertiseAreas.json';
import projects from './data/projects.json';
import { type Locale, translations, useTranslation } from './i18n';

type ProjectData = (typeof projects)[number];

function Project({ title, categorie, role, description, link, visual, visualWidth, visualHeight, locale, previewLabel, viewProjectLabel, opensInNewTab }: ProjectData & { locale: Locale; previewLabel: string; viewProjectLabel: string; opensInNewTab: string }) {
  return (
    <article className="border-b border-line py-10 sm:py-12">
      <div className="grid items-start gap-6 sm:grid-cols-[minmax(16rem,1fr)_minmax(0,1.4fr)_auto] sm:gap-10">
        <div>
          <h3 className="font-heading text-[2.4rem] leading-none font-medium sm:text-[2.8rem]">{title}</h3>
          <p className="mt-2 text-sm leading-5 text-muted">{categorie[locale]}</p>
          <p className="mt-1 text-sm leading-5 text-muted">{role[locale]}</p>
          <figure className="mt-5 w-full max-w-full overflow-hidden border border-line bg-white p-1 sm:mt-6 sm:max-w-[16rem]">
            <img src={visual} alt={`${previewLabel} ${title}`} width={visualWidth} height={visualHeight} sizes="(min-width: 640px) 16rem, 100vw" className="block h-auto max-w-full grayscale contrast-125" loading="lazy" decoding="async" />
          </figure>
        </div>
        <div className="max-w-[68ch]">
          <div className="text-[1.0625rem] leading-7" dangerouslySetInnerHTML={{ __html: description[locale] }} />
        </div>
        <a href={link} aria-label={`${viewProjectLabel} ${title} ${opensInNewTab}`} className="w-fit border-b border-current pb-0.5 font-heading text-sm font-bold tracking-[0.04em] uppercase whitespace-nowrap sm:mt-1" target="_blank" rel="noopener noreferrer">{viewProjectLabel}</a>
      </div>
    </article>
  );
}

function App() {
  const { locale, setLocale, t } = useTranslation();

  return (
    <div className="mx-auto w-[min(112rem,calc(100%-3.2rem))] sm:w-[min(112rem,calc(100%-4.8rem))]">
      <a className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:bg-ink focus:px-4 focus:py-3 focus:text-paper" href="#projects">{t.skipToProjects}</a>
      <header className="flex flex-wrap items-baseline gap-x-3 gap-y-2 border-b border-line py-8 sm:flex-nowrap sm:gap-4 sm:pb-6">
        <h1 className="font-heading text-[2.4rem] leading-none font-bold uppercase sm:text-[2.8rem]">Arnaud CHAPPLAIN</h1>
        <p className="text-[1.5rem] leading-none text-muted">{t.seniorFrontendDeveloper}</p>
        <p className="flex items-center gap-2 text-sm leading-5 text-muted whitespace-nowrap" role="status">
          <span className="h-2 w-2 rounded-full bg-emerald-500" aria-hidden="true" />
          {t.openToOpportunities}
        </p>
        <nav className="basis-full sm:ml-auto sm:basis-auto" aria-label={t.socialAndContact}>
          <ul className="flex gap-7 pt-4 font-heading text-sm font-bold tracking-[0.04em] uppercase sm:pt-0">
          <li><a aria-label={`LinkedIn ${t.opensInNewTab}`} className="transition-colors hover:text-muted focus-visible:text-muted" href="https://www.linkedin.com/in/arnaud-chapplain-6a04581a0/" target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
          <li><a aria-label={`GitHub ${t.opensInNewTab}`} className="transition-colors hover:text-muted focus-visible:text-muted" href="https://github.com/Nabuma" target="_blank" rel="noopener noreferrer">GitHub</a></li>
          <li><a className="transition-colors hover:text-muted focus-visible:text-muted" href="mailto:arnaud.chapplain@gmail.com">Mail</a></li>
          </ul>
        </nav>
        <div className="basis-full sm:basis-auto" role="group" aria-label={t.switchLanguage}>
          {(['fr', 'en', 'ko'] as Locale[]).map((language) => (
            <button className={`mr-3 text-sm font-bold uppercase ${locale === language ? 'underline' : 'text-muted'}`} type="button" key={language} onClick={() => setLocale(language)} aria-pressed={locale === language}>
              {translations[language].languageName}
            </button>
          ))}
        </div>
      </header>
      <main id="main-content">
      <section className="max-w-[68rem] py-32 sm:py-48" aria-labelledby="intro-title">
        <h2 id="intro-title" className="font-heading text-[3.4rem] leading-[0.95] font-normal sm:text-[5rem] lg:text-[7.2rem]">{t.introTitle}</h2>
        <p className="mt-7 max-w-[56rem] text-xl">{t.introDescription}</p>
      </section>
      <section id="projects" tabIndex={-1} className="border-t border-line" aria-labelledby="projects-title">
        <h2 id="projects-title" className="sr-only">{t.projects}</h2>
        {projects.map((project) => (
          <Project key={project.title} {...project} locale={locale} previewLabel={t.projectPreview} viewProjectLabel={t.viewProject} opensInNewTab={t.opensInNewTab} />
        ))}
      </section>
      <section className="border-b border-line py-28 sm:py-40" aria-labelledby="expertise-title">
        <h2 id="expertise-title" className="font-heading text-[3.4rem] leading-[0.95] font-normal sm:text-[5rem] lg:text-[7.2rem]">{t.expertise}</h2>
        <div className="mt-14 border-t border-line sm:mt-16">
          {expertiseAreas.map((area, index) => (
            <article className="grid gap-6 border-b border-line py-10 sm:grid-cols-[8rem_minmax(0,1fr)] sm:gap-10 sm:py-12" key={area.title[locale]}>
              <p className="font-heading text-lg leading-none text-muted">{String(index + 1).padStart(2, '0')}</p>
              <div className="max-w-[76ch]">
                <h3 className="font-heading text-[2rem] leading-[1.05] font-medium sm:text-3xl">{area.title[locale]}</h3>
                <ul className="mt-7 grid gap-5 text-[1.0625rem] leading-7">
                  {area.points.map((point) => {
                    const [label, description] = point[locale];
                    return (
                    <li key={label}><strong className="font-semibold">{label}</strong> {description}</li>
                    );
                  })}
                </ul>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-16 grid gap-8 pt-10 sm:grid-cols-[8rem_minmax(0,1fr)] sm:gap-10 sm:pt-12">
          <p className="font-heading text-lg leading-none text-muted">{t.stack}</p>
          <div className="grid max-w-[76ch] gap-7">
            {t.stackGroups.map(({ label, skills }) => (
              <div key={label}>
                <p className="mb-3 text-sm leading-5 text-muted">{label}</p>
                <ul className="flex flex-wrap gap-2.5" aria-label={label}>
                  {skills.map((skill) => <li className="border border-line px-3 py-1.5 text-sm leading-5" key={skill}>{skill}</li>)}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="py-28 sm:py-40" aria-labelledby="contact-title">
        <h2 id="contact-title" className="font-heading text-[3.4rem] leading-[0.95] font-normal sm:text-[5rem] lg:text-[7.2rem]">{t.contact}</h2>
        <p className="mt-5">{t.contactDescription} <a aria-label={`LinkedIn ${t.opensInNewTab}`} className="transition-colors hover:text-muted focus-visible:text-muted underline" href="https://www.linkedin.com/in/arnaud-chapplain-6a04581a0/" target="_blank" rel="noopener noreferrer">LinkedIn</a>, <a aria-label={`GitHub ${t.opensInNewTab}`} className="transition-colors hover:text-muted focus-visible:text-muted underline" href="https://github.com/Nabuma" target="_blank" rel="noopener noreferrer">GitHub</a> {t.orBy} <a className="transition-colors hover:text-muted focus-visible:text-muted underline" href="mailto:arnaud.chapplain@gmail.com">mail</a>.</p>
      </section>
      </main>
    </div>
  )
}

export default App
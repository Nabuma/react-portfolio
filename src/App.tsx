import expertiseAreas from './data/expertiseAreas.json';
import projects from './data/projects.json';

type ProjectData = (typeof projects)[number];

const stackGroups = [
  { label: 'Core', skills: ['JavaScript (ES6+)', 'TypeScript', 'HTML5 sémantique', 'CSS3 / SASS'] },
  { label: 'Frameworks & Libs', skills: ['React', 'Next.js', 'Tailwind CSS', 'Leaflet', 'FreeMarker'] },
  { label: 'Méthodes & Outils', skills: ['Design Systems', 'RGAA / Accessibility (a11y)', 'Web Vitals', 'Git', 'Figma', 'WordPress'] },
];

function Project({ title, categorie, role, description, link, visual }: ProjectData) {
  return (
    <article className="border-b border-line py-10 sm:py-12">
      <div className="grid items-start gap-6 sm:grid-cols-[minmax(16rem,1fr)_minmax(0,1.4fr)_auto] sm:gap-10">
        <div>
          <h3 className="font-heading text-[2.8rem] leading-none font-medium">{title}</h3>
          <p className="mt-2 text-sm leading-5 text-muted">{categorie}</p>
          <p className="mt-1 text-sm leading-5 text-muted">{role}</p>
          <figure className="mt-5 w-full max-w-full overflow-hidden border border-line bg-white p-1 sm:mt-6 sm:max-w-[16rem]">
            <img src={visual} alt={`Aperçu du projet ${title}`} className="block h-auto max-w-full grayscale contrast-125" loading="lazy" decoding="async" />
          </figure>
        </div>
        <div className="max-w-[68ch]">
          <div className="text-[1.0625rem] leading-7" dangerouslySetInnerHTML={{ __html: description }} />
        </div>
        <a href={link} aria-label={`Voir le projet ${title} (ouvre dans un nouvel onglet)`} className="w-fit border-b border-current pb-0.5 font-heading text-sm font-bold tracking-[0.04em] uppercase whitespace-nowrap sm:mt-1" target="_blank" rel="noopener noreferrer">Voir le projet</a>
      </div>
    </article>
  );
}

export const SeLogerVisual = () => (
  <div className="w-full h-48 bg-slate-900 rounded-xl p-4 flex flex-col justify-between border border-slate-800 font-sans">
    <div className="flex items-center justify-between border-b border-slate-800 pb-2">
      <div className="flex items-center space-x-2">
        <span className="w-3 h-3 rounded-full bg-amber-600"></span>
        <span className="text-xs font-bold text-slate-200">Belles Demeures</span>
      </div>
      <span className="text-[10px] font-mono bg-purple-500/10 text-purple-400 px-2 py-0.5 rounded border border-purple-500/20">
        CRO & GeoGIS
      </span>
    </div>
    <div className="bg-slate-800/60 p-3 rounded-lg border border-slate-700/40 my-auto space-y-2">
      <div className="flex justify-between items-center">
        <span className="text-xs font-medium text-slate-300">Cartographie Interactive</span>
        <span className="text-[10px] bg-slate-700 px-2 py-0.5 rounded text-sky-300 font-mono">Leaflet</span>
      </div>
      <div className="flex justify-between items-center">
        <span className="text-xs font-medium text-slate-300">Optimisation Conversion (CRO)</span>
        <span className="text-[10px] text-emerald-400 font-mono">+ Lead Gen</span>
      </div>
    </div>
    <div className="text-[10px] text-slate-500 pt-2 border-t border-slate-800 flex justify-between">
      <span>UI/UX High-End</span>
      <span>Performances Médias HD</span>
    </div>
  </div>
);

export const AcadomiaVisual = () => (
  <div className="w-full h-48 bg-slate-900 rounded-xl p-4 flex flex-col justify-between border border-slate-800 font-sans">
    <div className="flex items-center justify-between border-b border-slate-800 pb-2">
      <div className="flex items-center space-x-2">
        <span className="w-3 h-3 rounded-full bg-emerald-500"></span>
        <span className="text-xs font-bold text-slate-200">Acadomia</span>
      </div>
      <span className="text-[10px] font-mono bg-sky-500/10 text-sky-400 px-2 py-0.5 rounded border border-sky-500/20">
        Lead Generation
      </span>
    </div>
    <div className="space-y-2 my-auto">
      <div className="bg-slate-800/80 p-2.5 rounded-lg border border-slate-700/50 flex justify-between items-center">
        <span className="text-xs font-medium text-slate-200">Parcours Choix Multiples</span>
        <span className="text-[10px] text-amber-400 font-mono">Branching UX</span>
      </div>
      <div className="flex justify-between text-[10px] text-slate-400 px-1">
        <span>Maintenance WordPress</span>
        <span>Landing Pages Sur-mesure</span>
      </div>
    </div>
    <div className="text-[10px] text-slate-500 pt-2 border-t border-slate-800 flex justify-between">
      <span>Conversion Client</span>
      <span>Arborescences Dynamiques</span>
    </div>
  </div>
);

function App() {
  return (
    <div className="mx-auto w-[min(112rem,calc(100%-3.2rem))] sm:w-[min(112rem,calc(100%-4.8rem))]">
      <a className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:bg-ink focus:px-4 focus:py-3 focus:text-paper" href="#projects">Aller aux projets</a>
      <header className="flex flex-wrap items-baseline gap-x-3 gap-y-2 border-b border-line py-8 sm:flex-nowrap sm:gap-4 sm:pb-6">
        <h1 className="font-heading text-[2.4rem] leading-none font-bold uppercase sm:text-[2.8rem]">Arnaud CHAPPLAIN</h1>
        <p className="text-[1.5rem] leading-none text-muted">Senior front-end developer
          
        </p>
        <nav className="basis-full sm:ml-auto sm:basis-auto" aria-label="Réseaux et contact">
          <ul className="flex gap-7 pt-4 font-heading text-sm font-bold tracking-[0.04em] uppercase sm:pt-0">
          <li><a aria-label="LinkedIn (ouvre dans un nouvel onglet)" className="transition-colors hover:text-muted focus-visible:text-muted" href="https://www.linkedin.com/in/arnaud-chapplain-6a04581a0/" target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
          <li><a aria-label="GitHub (ouvre dans un nouvel onglet)" className="transition-colors hover:text-muted focus-visible:text-muted" href="https://github.com/Nabuma" target="_blank" rel="noopener noreferrer">GitHub</a></li>
          <li><a className="transition-colors hover:text-muted focus-visible:text-muted" href="mailto:arnaud.chapplain@gmail.com">Mail</a></li>
          </ul>
        </nav>
      </header>
      <main id="main-content">
      <section className="max-w-[68rem] py-32 sm:py-48" aria-labelledby="intro-title">
        <h2 id="intro-title" className="font-heading text-[clamp(3.6rem,7vw,7.2rem)] leading-[0.95] font-normal">Bienvenue sur mon portfolio</h2>
        <p className="mt-7 max-w-[56rem] text-xl">Je suis Arnaud CHAPPLAIN, développeur Front-end passionné par la création d'interfaces utilisateur modernes et réactives.</p>
      </section>
      <section id="projects" tabIndex={-1} className="border-t border-line" aria-labelledby="projects-title">
        <h2 id="projects-title" className="sr-only">Projets</h2>
        {projects.map((project) => (
          <Project key={project.title} {...project} />
        ))}
      </section>
      <section className="border-b border-line py-28 sm:py-40" aria-labelledby="expertise-title">
        <h2 id="expertise-title" className="font-heading text-[clamp(3.6rem,7vw,7.2rem)] leading-[0.95] font-normal">Mon expertise</h2>
        <div className="mt-14 border-t border-line sm:mt-16">
          {expertiseAreas.map((area, index) => (
            <article className="grid gap-6 border-b border-line py-10 sm:grid-cols-[8rem_minmax(0,1fr)] sm:gap-10 sm:py-12" key={area.title}>
              <p className="font-heading text-lg leading-none text-muted">{String(index + 1).padStart(2, '0')}</p>
              <div className="max-w-[76ch]">
                <h3 className="font-heading text-[2rem] leading-[1.05] font-medium sm:text-3xl">{area.title}</h3>
                <ul className="mt-7 grid gap-5 text-[1.0625rem] leading-7">
                  {area.points.map(([label, description]) => (
                    <li key={label}><strong className="font-semibold">{label}</strong> {description}</li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-16 grid gap-8 pt-10 sm:grid-cols-[8rem_minmax(0,1fr)] sm:gap-10 sm:pt-12">
          <p className="font-heading text-lg leading-none text-muted">Stack</p>
          <div className="grid max-w-[76ch] gap-7">
            {stackGroups.map(({ label, skills }) => (
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
        <h2 id="contact-title" className="font-heading text-[clamp(3.6rem,7vw,7.2rem)] leading-[0.95] font-normal">Contactez-moi</h2>
        <p className="mt-5">Vous pouvez me contacter via <a aria-label="LinkedIn (ouvre dans un nouvel onglet)" className="transition-colors hover:text-muted focus-visible:text-muted underline" href="https://www.linkedin.com/in/arnaud-chapplain-6a04581a0/" target="_blank" rel="noopener noreferrer">LinkedIn</a>, <a aria-label="GitHub (ouvre dans un nouvel onglet)" className="transition-colors hover:text-muted focus-visible:text-muted underline" href="https://github.com/Nabuma" target="_blank" rel="noopener noreferrer">GitHub</a> ou par <a className="transition-colors hover:text-muted focus-visible:text-muted underline" href="mailto:arnaud.chapplain@gmail.com">mail</a>.</p>
      </section>
      </main>
    </div>
  )
}

export default App
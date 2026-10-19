import React, { useEffect, useState } from "react";
import "./App.css";

const asset = (file) => `${process.env.PUBLIC_URL}/assets/figma/${file}`;
const resumeUrl = "https://docs.google.com/document/d/1lrs6NtBp28DJeWjRg3X2ZvDaU9CjjJ3CYRKNe66S8sI/edit?usp=sharing";

export const projects = [
  {
    id: "middesk", company: "Middesk", theme: "Connected data",
    role: "Software Engineer · Sep 2025 — Sep 2026",
    title: "People-level risk checks for SMB underwriting.",
    description: "Extended UCC lien infrastructure from business-only workflows to support people, while unifying bulk data and live searches behind the same product surface.",
    throughline: "Connect fragmented data to a clearer decision.", tags: "Connected data · Product engineering",
  },
  {
    id: "runway", company: "Runway", theme: "Workflow orchestration",
    role: "Full-Stack Software Engineer · Jul 2024 — Jun 2025",
    title: "Scheduled mobile releases without babysitting the deploy.",
    description: "Owned scheduled Google Play rollouts end to end, including release orchestration, calendar visibility, notifications, and production support.",
    throughline: "Turn a manual handoff into a dependable workflow.", tags: "Workflow orchestration · Full-stack engineering",
  },
  {
    id: "broadridge", company: "Broadridge", theme: "Reliable data systems",
    role: "Associate Software Engineer · Jun 2022 — Jul 2024",
    title: "Replay production traffic without touching production.",
    description: "Built a traffic-replay framework with AWS Lambda and Kafka that scaled reconciliation testing to millions of messages and cut manual debugging work.",
    throughline: "Make high-volume data reliable and easier to operate.", tags: "Data reliability · Distributed systems",
  },
];

const artworks = [
  { title: "Fire escape", medium: "Painting", id: 50968629, width: 1388, height: 1440, alt: "Painting of a green apartment building, fire escapes, and a figure at a window" },
  { title: "Pink flower study", medium: "Painting", id: 50439888, width: 1059, height: 1440, alt: "Pink flower surrounded by green leaves against a blue background in a sketchbook" },
  { title: "Red flower study", medium: "Painting", id: 50439889, width: 1080, height: 1440, alt: "Red flower with long green leaves painted on textured paper" },
  { title: "Green & magenta", medium: "Painting", id: 50439887, width: 1080, height: 1440, alt: "Magenta flower and sweeping green foliage painted in a sketchbook" },
  { title: "Portrait study", medium: "Drawing", id: 50968843, width: 1080, height: 1440, alt: "Expressive monochrome portrait drawing on loose paper" },
  { title: "Sketchbook jam", medium: "Drawing", id: 50968850, width: 1289, height: 1440, alt: "Sketchbook page of dancing characters, a disco ball, and handwritten sounds" },
  { title: "The faces of Brooklyn", medium: "Drawing", id: 50968856, width: 1440, height: 1080, landscape: true, alt: "Pen drawing of Brooklyn characters, buildings, and street details" },
  { title: "Character studies", medium: "Drawing", id: 50968864, width: 826, height: 448, landscape: true, alt: "Four illustrated characters with a paper airplane and disco ball" },
].map(artwork => ({ ...artwork, image: `${process.env.PUBLIC_URL}/assets/art/arena-${artwork.id}.webp`, link: `${process.env.PUBLIC_URL}/assets/art/arena-${artwork.id}.webp` }));

const archivedArtworks = [
  { title: "Van Gogh Inspired Hands", medium: "Chalk pastel", image: `${process.env.PUBLIC_URL}/assets/art/hands.webp`, link: "https://www.instagram.com/p/B_aifC3Fele/" },
  { title: "High on Self-Esteem", medium: "Photoshop", image: `${process.env.PUBLIC_URL}/assets/art/self-esteem.webp`, link: "https://www.instagram.com/p/CjVkAY7uKDE/" },
  { title: "Fishy Illustration", medium: "Gouache + colored pencil", image: `${process.env.PUBLIC_URL}/assets/art/fish.webp`, link: "https://www.instagram.com/p/CYHfSGgF5SO/" },
  { title: "Pixel Cactus I", medium: "Procreate", image: `${process.env.PUBLIC_URL}/assets/art/cactus-1.webp` },
  { title: "Kestrel", medium: "Figma", image: `${process.env.PUBLIC_URL}/assets/art/kestrel.webp`, link: "https://github.com/rachel-taskale/GraphicDesignWork/blob/main/logos/Kestrel%20Final.svg" },
  { title: "Metaworld", medium: "Figma", image: `${process.env.PUBLIC_URL}/assets/art/metaworld.webp`, link: "https://farama.org/projects" },
  { title: "GenZ Zoom Feature", medium: "Figma / Funny UI", image: `${process.env.PUBLIC_URL}/assets/art/zoom.webp`, link: "https://www.linkedin.com/posts/racheltaskale_10xgrowth-impact-startup-activity-7063561214085279744-x_m6" },
  { title: "Spotify × BetterHelp", medium: "Figma / Funny UI", image: `${process.env.PUBLIC_URL}/assets/art/spotify.webp`, link: "https://www.linkedin.com/posts/racheltaskale_hypemusiconly-mentalhealthawareness-partnership-activity-7069488582373048320-TLvC" },
  { title: "Pixel Cactus II", medium: "Procreate", image: `${process.env.PUBLIC_URL}/assets/art/cactus-2.webp` },
];

function ExternalLink({ href, children, ...props }) {
  return <a href={href} target="_blank" rel="noopener noreferrer" {...props}>{children}</a>;
}

function EditorialIcon({ kind }) {
  return <span className={`editorial-icon icon-${kind}`} aria-hidden="true"><img src={asset(`${kind}.svg`)} alt="" /></span>;
}

function useActiveProject() {
  const [activeId, setActiveId] = useState(projects[0].id);
  useEffect(() => {
    let frame = null;
    const update = () => {
      frame = null;
      const readingLine = Math.min(240, Math.max(112, window.innerHeight * 0.35));
      let current = projects[0].id;
      projects.forEach(({ id }) => {
        const section = document.getElementById(id);
        if (section && section.getBoundingClientRect().top <= readingLine) current = id;
      });
      setActiveId(current);
    };
    const schedule = () => { if (frame === null) frame = window.requestAnimationFrame(update); };
    update();
    window.addEventListener("scroll", schedule, { passive: true });
    window.addEventListener("resize", schedule);
    return () => {
      window.removeEventListener("scroll", schedule);
      window.removeEventListener("resize", schedule);
      if (frame !== null) window.cancelAnimationFrame(frame);
    };
  }, []);
  return activeId;
}

function ProjectIndex({ activeId }) {
  const activeIndex = projects.findIndex(({ id }) => id === activeId);
  return <nav className="project-index" aria-label="Engineering projects"><p className="eyebrow">Engineering / 03</p><div className="project-index-links">{projects.map((project, index) => <a key={project.id} href={`#${project.id}`} className="project-index-link" aria-current={activeId === project.id ? "location" : undefined}><span className="project-number">{String(index + 1).padStart(2, "0")}</span><span className="project-index-name">{project.company}</span><span className="project-theme">{project.theme}</span></a>)}</div><p className="index-progress">{String(activeIndex + 1).padStart(2, "0")} / 03 — Selected work</p></nav>;
}

function ArtifactChrome() {
  return <div className="artifact-chrome" aria-hidden="true"><span /><span /><span /></div>;
}

function UnderwritingArtifact() {
  return <div className="artifact underwriting-artifact" role="img" aria-label="Business verification and people risk checks combined into one underwriting decision"><ArtifactChrome /><div className="artifact-inner"><p className="artifact-eyebrow">Underwriting</p><h4>How SMB lenders verify business identity without adding borrower friction</h4><p className="artifact-subtitle">Business verification + people risk checks in one underwriting flow.</p><div className="verification-flow"><div className="verification-card"><span>Business</span><strong>Acme LLC</strong><small>Verified</small></div><b aria-hidden="true">+</b><div className="verification-card"><span>Owner</span><strong>Jane Doe</strong><small>Lien search</small></div><b aria-hidden="true">→</b><div className="verification-card decision-card"><span>Underwriting</span><strong>One file.<br />One decision.</strong></div></div></div></div>;
}

function ReleaseArtifact() {
  return <div className="artifact release-artifact" role="img" aria-label="Release calendar with scheduled Google Play rollouts in June 2025"><ArtifactChrome /><div className="artifact-inner"><h4>Release calendar</h4><p className="artifact-eyebrow">June 2025</p><div className="release-calendar" aria-hidden="true">{Array.from({ length: 20 }, (_, i) => <div key={i}><span>{i + 1}</span>{[7, 13].includes(i) && <b>Rollout</b>}</div>)}</div><p className="artifact-subtitle">Schedule once → ship automatically → notify the team</p></div></div>;
}

function ReplayArtifact() {
  return <div className="artifact replay-artifact" role="img" aria-label="Production traffic replay through Kafka and AWS Lambda: 10 million plus requests per day, daily reporting under 6 minutes, and about 60 percent less manual debugging"><ArtifactChrome /><div className="artifact-inner"><div className="replay-flow" aria-hidden="true">{["Prod traffic", "Kafka", "Lambda", "Report"].map((label, i) => <React.Fragment key={label}><span>{label}</span>{i < 3 && <b>→</b>}</React.Fragment>)}</div><div className="replay-metrics"><div><strong>10M+</strong><span>requests / day</span></div><div><strong>&lt; 6 min</strong><span>daily report</span></div><div><strong>~60%</strong><span>less manual debugging</span></div></div><div className="replay-terminal">$ replay --source prod --target staging<br />✓ reconciliation complete</div></div></div>;
}

const artifactComponents = { middesk: UnderwritingArtifact, runway: ReleaseArtifact, broadridge: ReplayArtifact };

function Project({ project, index }) {
  const Artifact = artifactComponents[project.id];
  return <article id={project.id} className="project-card" aria-labelledby={`${project.id}-title`}><header className="project-header"><p className="project-counter">{String(index + 1).padStart(2, "0")} / 03</p><h3 id={`${project.id}-title`}>{project.company}</h3><p className="project-role">{project.role}</p></header><div className="project-content"><div className="project-copy"><h4>{project.title}</h4><p className="project-description">{project.description}</p><div className="throughline"><p className="eyebrow">The engineering throughline</p><p>{project.throughline}</p></div></div><div className="project-artifact"><Artifact /></div></div><p className="project-tags">{project.tags}</p></article>;
}

function Artwork({ artwork, className = "" }) {
  const [unavailable, setUnavailable] = useState(false);
  const image = unavailable ? <div className="artwork-unavailable">{artwork.title}{artwork.link && <span>View the original ↗</span>}</div> : <img src={artwork.image} alt={artwork.alt || artwork.title} width={artwork.width} height={artwork.height} loading="lazy" decoding="async" onError={() => setUnavailable(true)} />;
  return <figure className={`artwork ${className}`}>{artwork.link ? <ExternalLink href={artwork.link} className="artwork-image" aria-label={`View ${artwork.title}`}>{image}</ExternalLink> : <div className="artwork-image">{image}</div>}<figcaption><span>{artwork.title}</span><small>{artwork.medium}</small></figcaption></figure>;
}

export default function App() {
  const activeId = useActiveProject();
  return <div className="portfolio">
    <a className="skip-link" href="#main">Skip to content</a>
    <header className="site-header"><a className="wordmark" href="#main" aria-label="Rachel Taskale — engineer and maker"><EditorialIcon kind="eye" /><span>Engineer / maker</span></a><nav className="site-nav" aria-label="Main navigation"><a href="#work">Work</a><a href="#art">Art</a><a href="#contact">Contact ↗</a></nav></header>
    <main id="main">
      <section className="hero" aria-labelledby="hero-title"><div className="hero-copy"><p className="eyebrow">Software engineer / Artist</p><h1 id="hero-title">Rachel<br />Taskale.</h1><p className="hero-intro">I’m Rachel, an engineer and artist. Making things is how I make sense of the world around me and what’s going on in my own head. I like figuring out how things work, understanding how they connect, and finding new ways to approach them.</p></div><div className="hero-poster" aria-hidden="true"><span>Systems / style / curiosity</span><img className="hero-portrait" src={`${process.env.PUBLIC_URL}/assets/art/arena-50968863.webp`} width="982" height="1440" alt="" /><span>Engineering first.<br />Creativity throughout.</span></div></section>
      <section id="work" className="work-section" aria-labelledby="work-title"><header className="section-heading"><p className="eyebrow">Work / selected engineering</p><h2 id="work-title">Selected work</h2></header><div className="work-layout"><aside className="project-sidebar"><ProjectIndex activeId={activeId} /></aside><div className="project-stack">{projects.map((project, index) => <Project key={project.id} project={project} index={index} />)}</div></div></section>
      <div className="creative-transition"><p>A different kind of making.</p><EditorialIcon kind="book" /></div>
      <section id="art" className="art-section" aria-labelledby="art-title"><header className="art-header"><div className="art-eyebrow"><EditorialIcon kind="brush-cup" /><p className="eyebrow">Art / things I make by hand</p></div><h2 id="art-title">Things<br />I make.</h2><img className="portrait" src={`${process.env.PUBLIC_URL}/assets/art/arena-50968860.webp`} width="982" height="1440" alt="Rachel’s hand-drawn character making a peace sign" /><p className="art-intro">Recent paintings, sketchbook pages, and characters.</p><nav className="art-archive-links" aria-label="Art profiles"><ExternalLink className="art-archive-link" href="https://www.are.na/rachel-taskale">Are.na ↗</ExternalLink><ExternalLink className="art-archive-link" href="https://instagram.com/art_by_task">More on Instagram ↗</ExternalLink></nav></header><div className="art-gallery">{artworks.map(artwork => <Artwork key={artwork.id} artwork={artwork} className={artwork.landscape ? "artwork-landscape" : ""} />)}</div><details className="more-art"><summary>More from the studio <span aria-hidden="true">+</span></summary><div className="more-art-grid">{archivedArtworks.map(artwork => <Artwork key={artwork.title} artwork={artwork} />)}</div></details></section>
    </main>
    <footer id="contact" className="site-footer"><EditorialIcon kind="envelope" /><div className="footer-content"><h2>Let’s build something useful.</h2><nav aria-label="Contact links"><a href="mailto:racheltaskale@gmail.com">Email ↗</a><ExternalLink href={resumeUrl}>Resume ↗</ExternalLink><ExternalLink href="https://github.com/rachel-taskale">GitHub ↗</ExternalLink></nav></div><p className="footer-credit">Rachel Taskale · <ExternalLink href="https://www.streamlinehq.com/">Icons by Streamline</ExternalLink></p></footer>
  </div>;
}

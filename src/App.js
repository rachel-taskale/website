import React, { useEffect, useRef, useState } from 'react';
import { projects, artworks, archivedArtworks } from './content';
import './App.css';
export { projects } from './content';

const artList = [...artworks, ...archivedArtworks];
const portrait = `${process.env.PUBLIC_URL}/assets/art/arena-50968863.webp`;
const peace = `${process.env.PUBLIC_URL}/assets/art/arena-50968860.webp`;
const resumeUrl = 'https://docs.google.com/document/d/1lrs6NtBp28DJeWjRg3X2ZvDaU9CjjJ3CYRKNe66S8sI/edit?usp=sharing';
const titles = ['Lien searches for people and businesses', 'Scheduled Google Play releases', 'Testing with production traffic'];

function ExternalLink({ href, children, ...props }) {
  return <a href={href} target="_blank" rel="noopener noreferrer" {...props}>{children}</a>;
}

function useActiveProject() {
  const [activeId, setActiveId] = useState(projects[0].id);
  useEffect(() => {
    let frame = null;
    const update = () => {
      frame = null;
      const line = Math.min(240, Math.max(112, window.innerHeight * .35));
      let current = projects[0].id;
      projects.forEach(({ id }) => {
        if (document.getElementById(id)?.getBoundingClientRect().top <= line) current = id;
      });
      setActiveId(current);
    };
    const schedule = () => { if (frame === null) frame = requestAnimationFrame(update); };
    update();
    window.addEventListener('scroll', schedule, { passive: true });
    window.addEventListener('resize', schedule);
    return () => {
      window.removeEventListener('scroll', schedule);
      window.removeEventListener('resize', schedule);
      if (frame !== null) cancelAnimationFrame(frame);
    };
  }, []);
  return activeId;
}

function ProjectIndex({ activeId }) {
  return <nav className="project-index" aria-label="Engineering projects">
    <p className="meta">In this collection</p>
    {projects.map((project, i) => <a key={project.id} href={`#${project.id}`} aria-current={activeId === project.id ? 'location' : undefined}>
      <span className="index-number">0{i + 1}</span><span>{project.company}</span><span className="index-arrow" aria-hidden="true">↘</span>
    </a>)}
    <a href="#art" className="art-index"><span className="index-number">04—11</span><span>Paintings & drawings</span><span className="index-arrow" aria-hidden="true">↘</span></a>
    <p className="index-note">Selected projects<br />and personal work.</p>
  </nav>;
}

function Step({ label, children, dark = false }) {
  return <div className={`diagram-step ${dark ? 'step-dark' : ''}`}><span className="meta">{label}</span><strong>{children}</strong></div>;
}

function UnderwritingDiagram() {
  return <div className="diagram diagram-underwriting" role="img" aria-label="Business verification and owner lien searches brought together in one underwriting file">
    <div className="diagram-top"><span className="meta">Business + owner</span><span className="meta">01 / Data flow</span></div>
    <div className="verification-flow"><Step label="Business">Identity check</Step><b aria-hidden="true">+</b><Step label="Owner">Lien search</Step><b aria-hidden="true">→</b><Step label="Underwriting" dark>One file</Step></div>
    <div className="data-sources"><span>Bulk data</span><span aria-hidden="true">+</span><span>Live searches</span><span className="data-source-note">Connected in the same workflow</span></div>
  </div>;
}

function ReleaseDiagram() {
  return <div className="diagram diagram-release" role="img" aria-label="Choose a release date, start the Google Play rollout, and notify the team automatically">
    <div className="diagram-top"><span className="meta">Release scheduling</span><span className="meta">02 / Workflow</span></div>
    <div className="release-steps"><div><span className="step-number">01</span><strong>Pick a date</strong><p>Set the release time.</p></div><span className="flow-arrow" aria-hidden="true">→</span><div><span className="step-number">02</span><strong>Start the rollout</strong><p>Ship to Google Play.</p></div><span className="flow-arrow" aria-hidden="true">→</span><div><span className="step-number">03</span><strong>Let the team know</strong><p>Send the notification.</p></div></div>
    <div className="release-timeline" aria-hidden="true"><span>Scheduled</span><i /><span>Release day</span><i /><span>Live</span></div>
  </div>;
}

function ReplayDiagram() {
  return <div className="diagram diagram-replay" role="img" aria-label="Production traffic moves through Kafka and Lambda to a test report: 10 million plus requests a day, reporting under 6 minutes, and about 60 percent less manual debugging">
    <div className="diagram-top"><span className="meta">Traffic replay</span><span className="meta">03 / Test environment</span></div>
    <div className="replay-flow">{['Production traffic', 'Kafka', 'Lambda', 'Report'].map((label, i) => <React.Fragment key={label}><span>{label}</span>{i < 3 && <b aria-hidden="true">→</b>}</React.Fragment>)}</div>
    <div className="replay-metrics"><div><strong>10M+</strong><span>requests / day</span></div><div><strong>&lt; 6 min</strong><span>daily report</span></div><div><strong>~60%</strong><span>less manual debugging</span></div></div>
  </div>;
}
const diagrams = [UnderwritingDiagram, ReleaseDiagram, ReplayDiagram];
const diagramCaptions = ['Business and owner checks in one workflow', 'From scheduled release to team notification', 'Traffic replay through the test environment'];

function Project({ project, index }) {
  const Diagram = diagrams[index];
  return <article className="project-entry" id={project.id} aria-labelledby={`${project.id}-title`}>
    <header className="entry-heading"><div><span className="meta">0{index + 1} / Engineering</span><h3 id={`${project.id}-title`}>{project.company}</h3></div><p className="entry-role">{project.role}</p></header>
    <div className="project-copy"><h4>{titles[index]}</h4><p>{project.description}</p></div>
    <figure className="project-figure"><Diagram /><figcaption className="work-caption"><span>{diagramCaptions[index]}</span><small>Engineering / {project.company}</small></figcaption></figure>
  </article>;
}

function Artwork({ artwork, index, onOpen }) {
  return <figure className={`artwork ${artwork.landscape ? 'artwork-landscape' : ''}`}>
    <button className="artwork-image" type="button" onClick={() => onOpen(index)} aria-label={`View ${artwork.title}`}>
      <img src={artwork.image} alt={artwork.alt || artwork.title} width={artwork.width} height={artwork.height} loading="lazy" decoding="async" />
      <span className="image-open" aria-hidden="true">View ↗</span>
    </button>
    <figcaption className="work-caption"><span>{artwork.title}</span><small>{artwork.medium}</small></figcaption>
  </figure>;
}

function ArtworkViewer({ selected, onChange, onClose }) {
  const dialogRef = useRef(null);
  const current = selected === null ? null : artList[selected];
  useEffect(() => {
    const dialog = dialogRef.current;
    if (selected !== null && !dialog.open) dialog.showModal();
    if (selected === null && dialog.open) dialog.close();
    if (selected === null) return undefined;
    const overflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => { document.body.style.overflow = overflow; };
  }, [selected]);
  return <dialog ref={dialogRef} className="art-viewer" aria-labelledby="viewer-title" onCancel={onClose} onClose={onClose}
    onClick={event => { if (event.target === event.currentTarget) onClose(); }}
    onKeyDown={event => {
      if (event.key === 'ArrowRight') { event.preventDefault(); onChange((selected + 1) % artList.length); }
      if (event.key === 'ArrowLeft') { event.preventDefault(); onChange((selected - 1 + artList.length) % artList.length); }
    }}>
    {current && <div className="viewer-content"><header className="viewer-header"><span className="meta">{String(selected + 1).padStart(2, '0')} / {artList.length} — From the collection</span><button type="button" onClick={onClose} autoFocus aria-label="Close artwork viewer">Close ×</button></header>
      <div className="viewer-image"><img src={current.image} alt={current.alt || current.title} /></div>
      <footer className="viewer-footer"><div><h2 id="viewer-title">{current.title}</h2><p>{current.medium}</p></div><nav aria-label="Browse artwork"><button type="button" onClick={() => onChange((selected - 1 + artList.length) % artList.length)} aria-label="Previous artwork">← Previous</button><button type="button" onClick={() => onChange((selected + 1) % artList.length)} aria-label="Next artwork">Next →</button></nav></footer>
    </div>}
  </dialog>;
}

export default function App() {
  const activeId = useActiveProject();
  const [selected, setSelected] = useState(null);
  return <div className="portfolio">
    <a className="skip-link" href="#main">Skip to content</a>
    <header className="site-header"><a className="wordmark" href="#main" aria-label="Rachel Taskale — home">rt<span aria-hidden="true">.</span></a><nav className="site-nav" aria-label="Main navigation"><a href="#work">Work</a><a href="#art">Art</a><a href="#contact">Contact ↗</a></nav></header>
    <main id="main">
      <section className="hero" aria-labelledby="hero-title"><div className="hero-copy"><p className="meta">Software engineer & artist</p><h1 id="hero-title">Rachel<br />Taskale.</h1><p className="hero-intro">I’m Rachel, an engineer and artist. I make things to understand the world around me, work through my thoughts, and try out new approaches.</p><a className="text-link hero-link" href="#work">A few things I’ve worked on <span aria-hidden="true">↘</span></a></div><div className="hero-drawing"><img src={portrait} width="982" height="1440" alt="Rachel’s hand-drawn character" /></div></section>
      <section id="work" className="work-section" aria-labelledby="work-title"><header className="section-heading"><div><p className="meta">01—11 / A collection</p><h2 id="work-title">Selected work</h2></div><p>Engineering, paintings,<br />and things from my sketchbook.</p></header><div className="work-layout"><aside className="project-sidebar"><ProjectIndex activeId={activeId} /></aside><div className="project-stack">{projects.map((project, index) => <Project key={project.id} project={project} index={index} />)}</div></div></section>
      <section id="art" className="art-section" aria-labelledby="art-title"><header className="section-heading art-heading"><div><p className="meta">04—11 / Art</p><h2 id="art-title">Paintings & drawings</h2></div><nav className="art-links" aria-label="Art profiles"><ExternalLink href="https://www.are.na/rachel-taskale">Are.na ↗</ExternalLink><ExternalLink href="https://instagram.com/art_by_task">Instagram ↗</ExternalLink></nav></header><div className="art-gallery">{artworks.map((artwork, index) => <Artwork key={artwork.id} artwork={artwork} index={index} onOpen={setSelected} />)}</div><details className="more-art"><summary>More from the studio <span aria-hidden="true">+</span></summary><div className="archive-grid">{archivedArtworks.map((artwork, index) => <Artwork key={artwork.title} artwork={artwork} index={index + artworks.length} onOpen={setSelected} />)}</div></details></section>
    </main>
    <footer id="contact" className="site-footer"><img className="footer-drawing" src={peace} width="982" height="1440" alt="" /><div><p className="meta">Have something in mind?</p><h2>Say hello.</h2><a className="email-link" href="mailto:racheltaskale@gmail.com">racheltaskale@gmail.com ↗</a><nav aria-label="Contact links"><ExternalLink href={resumeUrl}>Resume ↗</ExternalLink><ExternalLink href="https://github.com/rachel-taskale">GitHub ↗</ExternalLink></nav></div><p className="footer-credit">Rachel Taskale<br />Engineering & art</p></footer>
    <ArtworkViewer selected={selected} onChange={setSelected} onClose={() => setSelected(null)} />
  </div>;
}

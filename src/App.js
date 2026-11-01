import React, { useEffect, useRef, useState } from 'react';
import { projects } from './content';
import { artworks as collection, artImage, canonicalStory, storyForHash, ReadNotes, ArtworkStory } from './ArtworkStories';
import './App.css';
export { projects } from './content';

const extraIndices = [5, 7, 8, 9, 10, 11, 12, 13, 14, 15];

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


function Artwork({ index, onNavigate }) {
  const artwork = collection[index];
  return <figure>
    <button type="button" className="art-button" data-art={index} aria-label={`Read about ${canonicalStory(index).title}`}>
      <img src={artImage(artwork.file)} alt={artwork.title} loading="lazy" />
    </button>
    <figcaption className="caption">{artwork.title}<ReadNotes index={index} onNavigate={onNavigate} /></figcaption>
  </figure>;
}

function ArtworkViewer({ selected, onClose }) {
  const dialogRef = useRef(null);
  const current = selected === null ? null : collection[selected];
  useEffect(() => {
    const dialog = dialogRef.current;
    if (selected !== null && !dialog.open) dialog.showModal();
    if (selected === null && dialog.open) dialog.close();
    if (selected === null) return undefined;
    const overflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => { document.body.style.overflow = overflow; };
  }, [selected]);
  return <dialog ref={dialogRef} className="viewer" aria-labelledby="viewer-title" onCancel={onClose} onClose={onClose}
    onClick={event => { if (event.target === event.currentTarget) onClose(); }}>
    {current && <div className="viewer-inner">
      <header className="viewer-header"><p id="viewer-position">{selected + 1} of {collection.length}</p><button type="button" onClick={onClose} autoFocus aria-label="Close artwork viewer">Close</button></header>
      <div className="viewer-image"><img src={artImage(current.file)} alt={current.title} /></div>
      <footer className="viewer-footer"><div><h2 className="viewer-title" id="viewer-title">{current.title}</h2><p className="caption">{current.medium}</p></div></footer>
    </div>}
  </dialog>;
}

export default function App() {
  const activeId = useActiveProject();
  const [selected, setSelected] = useState(null);
  const [hash, setHash] = useState(window.location.hash);
  const [visibleCount, setVisibleCount] = useState(0);
  const story = storyForHash(hash);
  const headingRef = useRef(null);
  const returnPosition = useRef(null);
  const wasStory = useRef(false);
  const loadFocus = useRef(null);
  const rememberPosition = event => { returnPosition.current = { y: window.scrollY, element: event.currentTarget }; };
  useEffect(() => {
    const update = () => { setHash(window.location.hash); setSelected(null); };
    window.addEventListener('hashchange', update);
    return () => window.removeEventListener('hashchange', update);
  }, []);
  useEffect(() => {
    document.title = story ? story.title + ' — Rachel Taskale' : 'Rachel Taskale';
    if (story) {
      window.scrollTo(0, 0);
      headingRef.current?.focus({preventScroll:true});
    } else if (wasStory.current) {
      if (hash === '#art' && returnPosition.current) {
        window.scrollTo(0, returnPosition.current.y);
        returnPosition.current.element?.focus({preventScroll:true});
      } else document.getElementById(hash.slice(1) || 'main')?.scrollIntoView();
    }
    wasStory.current = !!story;
  }, [hash, story]);
  useEffect(() => { if (visibleCount) loadFocus.current?.focus({preventScroll:true}); }, [visibleCount]);
  const openArtwork = event => {
    const button = event.target.closest('button[data-art]');
    if (button) {
      returnPosition.current = { y: window.scrollY, element: button };
      window.location.hash = 'art/' + canonicalStory(Number(button.dataset.art)).slug;
    }
  };
  return <>
<div className="page" onClick={openArtwork}>
<a className="skip" href={story ? '#story-title' : '#main'}>Skip to content</a>
<header className="site-header">
  <a className="signature" href="#main"><img src={artImage('arena-50968863.webp')} alt="" />Rachel Taskale</a>
  <nav className="site-nav" aria-label="Main navigation"><a href="#work">Work</a><a href="#art">Art</a><a href="#contact">Contact</a></nav>
</header>
<main id="main" hidden={!!story}>
<section className="hero" aria-labelledby="intro-title">
  <div className="hero-copy"><h1 id="intro-title">I’m Rachel</h1><p className="intro">I’m an engineer and artist. I make things to understand the world around me, work through my thoughts, and try out new approaches.</p><nav className="hero-links" aria-label="Professional links"><a href="https://docs.google.com/document/d/1lrs6NtBp28DJeWjRg3X2ZvDaU9CjjJ3CYRKNe66S8sI/edit?usp=sharing" target="_blank" rel="noopener noreferrer">Resume</a><a href="https://github.com/rachel-taskale" target="_blank" rel="noopener noreferrer">GitHub</a><a href="https://www.linkedin.com/in/racheltaskale/" target="_blank" rel="noopener noreferrer">LinkedIn</a></nav></div>
  <figure className="hero-art"><button className="art-button" data-art="0" aria-label="Read about Fire escape"><img src={artImage('arena-50968629.webp')} alt="Painting of a green apartment building, fire escapes, and a figure at a window" width="1388" height="1440" /></button><figcaption className="caption">Fire escape · <ReadNotes index={0} onNavigate={rememberPosition} /></figcaption></figure>
</section>
<section id="work" className="work-section" aria-labelledby="work-title">
  <aside className="work-aside"><div className="work-index"><h2 id="work-title">Engineering</h2><nav aria-label="Engineering projects"><a href="#middesk" aria-current={activeId === 'middesk' ? 'location' : undefined}>Middesk</a><a href="#runway" aria-current={activeId === 'runway' ? 'location' : undefined}>Runway</a><a href="#broadridge" aria-current={activeId === 'broadridge' ? 'location' : undefined}>Broadridge</a></nav></div></aside>
  <div>
  <article className="project" id="middesk" aria-labelledby="middesk-title">
    <header className="project-byline"><h3 className="company" id="middesk-title">Middesk</h3><span className="role">Full-Stack Software Engineer</span></header>
    <section className="project-story" aria-labelledby="people-liens-title"><h4 id="people-liens-title">Searching for liens on business owners</h4><p>I built People Liens so lenders could see liens on business owners and guarantors alongside liens on the business.</p><p>That meant extending UCC searches across 51 jurisdictions and bringing bulk data, live state searches, and existing tax-lien data into one place. I also built the screens for customers and the tools our team used to review results.</p></section>
    <section className="project-story" aria-labelledby="continuations-title"><h4 id="continuations-title">Continuing UCC liens</h4><p>I worked with Product on the requirements and technical approach, then built the data model, APIs, and Dashboard support for lien continuations.</p><p>I built the eligibility checks and state-specific filing logic, plus billing, webhooks, notifications, and review tools for the operations team. The data model also had to support continuing the same lien more than once.</p></section>
    <section className="project-story" aria-labelledby="classification-title"><h4 id="classification-title">Identifying cannabis businesses</h4><p>I added cannabis licensing records to the way Middesk identifies a business’s industry. The existing system used ML; I brought in licensing data as another source and built batch searches and matching logic.</p><p>I also worked on which sources to trust, how confident to be in a match, and what should happen when a search failed.</p></section>
    <section className="project-story" aria-labelledby="automation-title"><h4 id="automation-title">Working with state scrapers</h4><p>I worked on the scrapers that search state portals. Each state had its own behavior and failure cases, so I added validation, monitoring in Datadog and Sentry, accuracy checks, and fallbacks as we rolled out changes.</p><p>That work helped get 95% of orders back in under five minutes.</p></section>
  </article>
  <article className="project" id="runway" aria-labelledby="runway-title">
    <header className="project-byline"><h3 className="company" id="runway-title">Runway</h3><span className="role">Full-Stack Software Engineer</span></header>
    <section className="project-story" aria-labelledby="scheduling-title"><h4 id="scheduling-title">Scheduling Google Play releases</h4><p>I built the scheduling feature for Google Play releases, from the initial requirements through launch. It was used by more than 100 enterprise customers.</p><p>I worked on the screens where teams planned releases, the code that started rollouts, and the notifications around them. I used test-driven development and supported the feature in production.</p></section>
    <section className="project-story" aria-labelledby="calendar-title"><h4 id="calendar-title">Google Calendar integration</h4><p>I built two-way sync between Runway and Google Calendar, along with other calendar providers. Customers could manage their release schedules in the calendars they were already using.</p></section>
    <p className="role-note">I also took on-call rotations, helping customers with issues that crossed the frontend, backend, and infrastructure.</p>
  </article>
  <article className="project" id="broadridge" aria-labelledby="broadridge-title">
    <header className="project-byline"><h3 className="company" id="broadridge-title">Broadridge</h3><span className="role">Associate Software Engineer</span></header>
    <section className="project-story" aria-labelledby="replay-title"><h4 id="replay-title">Replaying production traffic</h4><p>I built a way to replay production traffic in a separate test environment and check that reconciliation still worked.</p><p>It used Kafka and AWS Lambda to run regression tests across millions of messages, with Splunk for checking results. Automating those checks cut daily manual verification work by more than 60%.</p></section>
    <section className="project-story" aria-labelledby="java-title"><h4 id="java-title">Moving trade completion from COBOL to Java</h4><p>I moved trade-completion logic from COBOL to Java in a trading system handling more than 10 million requests a day. This made that part of the system easier to maintain.</p></section>
  </article>
  </div>
</section>
<section id="art" className="art-section" aria-labelledby="art-title">
  <header className="art-heading"><h2 id="art-title">Paintings &<br />sketchbook pages</h2><nav aria-label="Art profiles"><a href="https://www.are.na/rachel-taskale" target="_blank" rel="noopener noreferrer">Are.na</a><a href="https://instagram.com/art_by_task" target="_blank" rel="noopener noreferrer">Instagram</a></nav></header>
  <div className="art-composition">
    <figure className="piece piece-tree"><button type="button" className="art-button" data-art="16" aria-label="Read about A Japanese tea garden tree"><img src={artImage('japanese-tea-garden-tree.jpg')} alt="A Japanese tea garden tree" width="2048" height="2048" loading="lazy" /></button><figcaption className="caption"><span>A Japanese tea garden tree</span><ReadNotes index={16} onNavigate={rememberPosition} /></figcaption></figure>
    <figure className="piece piece-landscape-a"><button type="button" className="art-button" data-art="17" aria-label="Read about Coastal hills"><img src={artImage('arena-51355017.webp')} alt="Coastal hills" width="1200" height="1600" loading="lazy" /></button><figcaption className="caption"><span>Coastal hills</span><ReadNotes index={17} onNavigate={rememberPosition} /></figcaption></figure>
    <figure className="piece piece-landscape-b"><button type="button" className="art-button" data-art="18" aria-label="Read about Coastal path"><img src={artImage('arena-51354913.webp')} alt="Coastal path" width="1200" height="1600" loading="lazy" /></button><figcaption className="caption"><span>Coastal path</span><ReadNotes index={18} onNavigate={rememberPosition} /></figcaption></figure>
    <figure className="piece piece-landscape-c"><button type="button" className="art-button" data-art="19" aria-label="Read about Lake study"><img src={artImage('arena-50968619.webp')} alt="Lake study" width="1200" height="1600" loading="lazy" /></button><figcaption className="caption"><span>Lake study</span><ReadNotes index={19} onNavigate={rememberPosition} /></figcaption></figure>
    <figure className="piece piece-pink"><button className="art-button" data-art="1" aria-label="Read about Pink flower study"><img src={artImage('arena-50439888.webp')} alt="Pink flower painted in a spiral-bound sketchbook" width="1059" height="1440" loading="lazy" /></button><figcaption className="caption"><span>Pink flower study</span><ReadNotes index={1} onNavigate={rememberPosition} /></figcaption></figure>
    <figure className="piece piece-green"><button className="art-button" data-art="3" aria-label="Read about Green & magenta"><img src={artImage('arena-50439887.webp')} alt="Magenta flower and green foliage on a sketchbook page" width="1080" height="1440" loading="lazy" /></button><figcaption className="caption"><span>Green & magenta</span><ReadNotes index={3} onNavigate={rememberPosition} /></figcaption></figure>
    <figure className="piece piece-brooklyn"><button className="art-button" data-art="6" aria-label="Read about The faces of Brooklyn"><img src={artImage('arena-50968856.webp')} alt="A drawing of Brooklyn characters, buildings, and street details" width="1440" height="1080" loading="lazy" /></button><figcaption className="caption"><span>The faces of Brooklyn</span><ReadNotes index={6} onNavigate={rememberPosition} /></figcaption></figure>
    <figure className="piece piece-red"><button className="art-button" data-art="2" aria-label="Read about Red flower study"><img src={artImage('arena-50439889.webp')} alt="Red flower and green leaves painted on textured paper" width="1080" height="1440" loading="lazy" /></button><figcaption className="caption"><span>Red flower study</span><ReadNotes index={2} onNavigate={rememberPosition} /></figcaption></figure>
    <figure className="piece piece-portrait"><button className="art-button" data-art="4" aria-label="Read about Portrait study"><img src={artImage('arena-50968843.webp')} alt="Expressive portrait drawing on loose paper" width="1080" height="1440" loading="lazy" /></button><figcaption className="caption"><span>Portrait study</span><ReadNotes index={4} onNavigate={rememberPosition} /></figcaption></figure>
  </div>
  <div className={'more-art' + (visibleCount ? ' has-loaded-art' : '')}>
    <div className="more-grid" id="more-grid">{extraIndices.slice(0,visibleCount).map((index,i) => <div key={collection[index].file} ref={i === (visibleCount <= 6 ? 0 : 6) ? loadFocus : null} tabIndex={-1}><Artwork index={index} onNavigate={rememberPosition} /></div>)}</div>
    {visibleCount < extraIndices.length && <div className="load-more-controls"><button type="button" id="load-more-art" aria-controls="more-grid" onClick={() => setVisibleCount(count => Math.min(count+6,extraIndices.length))}>Load more</button></div>}
    <p className="load-more-status" role="status" aria-live="polite">{visibleCount ? `${visibleCount} more artworks loaded. ${extraIndices.length-visibleCount} remaining.` : ''}</p>
  </div>
</section>
</main>
{story && <ArtworkStory story={story} onEnlarge={setSelected} headingRef={headingRef} />}
<footer id="contact" className="site-footer"><div><h2>Say hello</h2><a className="email" href="mailto:racheltaskale@gmail.com">racheltaskale@gmail.com</a><nav className="footer-links" aria-label="Social and professional links"><a href="https://www.linkedin.com/in/racheltaskale/" target="_blank" rel="noopener noreferrer">LinkedIn</a><a href="https://docs.google.com/document/d/1lrs6NtBp28DJeWjRg3X2ZvDaU9CjjJ3CYRKNe66S8sI/edit?usp=sharing" target="_blank" rel="noopener noreferrer">Resume</a><a href="https://github.com/rachel-taskale" target="_blank" rel="noopener noreferrer">GitHub</a><a href="https://instagram.com/art_by_task" target="_blank" rel="noopener noreferrer">Instagram</a><a href="https://www.are.na/rachel-taskale" target="_blank" rel="noopener noreferrer">Are.na</a></nav></div><img className="footer-drawing" src={artImage('arena-50968860.webp')} alt="Rachel’s hand-drawn character making a peace sign" width="982" height="1440" /></footer>
</div>
    <ArtworkViewer selected={selected} onClose={() => setSelected(null)} />
  </>;
}

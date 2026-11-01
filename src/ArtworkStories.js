import React from 'react';
import stories from './artwork-stories.json';
export const artworks = stories.map(story => ({...story, title: story.galleryTitle || story.title, medium: story.galleryMedium || story.medium}));
export const artImage = file => `${process.env.PUBLIC_URL}/assets/art/${file}`;
export const canonicalStory = index => stories.find(story => story.slug === stories[index]?.group) || stories[index];
export const storyForHash = hash => { const index = stories.findIndex(story => hash === '#art/' + story.slug || story.aliases?.some(alias => hash === '#art/' + alias)); return index < 0 ? undefined : canonicalStory(index); };
const pages = stories.filter(story => !story.group);

export function ReadNotes({index, onNavigate}) {
  const story = canonicalStory(index);
  return <a className="read-notes" aria-label={'Read notes about ' + story.title} href={'#art/' + story.slug} onClick={onNavigate}>Read notes</a>;
}

export function ArtworkStory({story, onEnlarge, headingRef}) {
  const index = stories.indexOf(story);
  const page = pages.indexOf(story);
  const previous = pages[(page - 1 + pages.length) % pages.length];
  const next = pages[(page + 1) % pages.length];
  const group = story.imageIndices;
  return <main id="art-story" aria-labelledby="story-title">
    <nav className="story-toolbar" aria-label="Artwork page"><a href="#art">All artwork</a><button type="button" onClick={() => onEnlarge(index)}>{group ? 'View first image' : 'View image'}</button></nav>
    <article className={'story-layout' + (group ? ' is-group' : '')}>
      <header className="story-heading"><h1 className="story-title" id="story-title" ref={headingRef} tabIndex={-1}>{story.title}</h1><p className="story-medium">{story.medium}</p></header>
      {group ? <div className="story-group-images">{group.map(memberIndex => <figure key={memberIndex}>
        <button type="button" className="group-image-button" data-enlarge={memberIndex} aria-label={'View ' + artworks[memberIndex].title + ' image'} onClick={() => onEnlarge(memberIndex)}><img src={artImage(artworks[memberIndex].file)} alt={artworks[memberIndex].title} /></button>
        <figcaption>{artworks[memberIndex].title}</figcaption>
      </figure>)}</div> : <figure className="story-art"><img src={artImage(story.file)} alt={story.title} /><figcaption>{story.title} · {story.medium}</figcaption></figure>}
      <div className="story-copy">
        {story.description && <div className="story-description"><p>{story.description}</p></div>}
        {!!story.thoughtProcess.length && <section className="story-notes" aria-labelledby="notes-heading"><h2 id="notes-heading">Thought process</h2>{story.thoughtProcess.map((text,i) => <p key={i}>{text}</p>)}</section>}
        {!!story.links.length && <section className="story-links" aria-labelledby="links-heading"><h2 id="links-heading">Links &amp; references</h2><ul>{story.links.map(link => <li key={link.url}><a href={link.url} target="_blank" rel="noopener noreferrer">{link.label}</a></li>)}</ul></section>}
      </div>
    </article>
    <nav className="story-pagination" aria-label="More artwork">{[[previous,'Previous piece'],[next,'Next piece']].map(([item,label]) => <a key={label} href={'#art/' + item.slug}><span className="story-nav-label">{label}</span><span className="story-nav-title">{item.title}</span></a>)}</nav>
  </main>;
}

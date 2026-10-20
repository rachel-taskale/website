export const projects = [
  {
    id: "middesk", company: "Middesk", theme: "Connected data",
    role: "Software Engineer",
    title: "People-level risk checks for SMB underwriting.",
    description: "Extended UCC lien infrastructure from business-only workflows to support people, while unifying bulk data and live searches behind the same product surface.",
    throughline: "Connect fragmented data to a clearer decision.", tags: "Connected data · Product engineering",
  },
  {
    id: "runway", company: "Runway", theme: "Workflow orchestration",
    role: "Full-Stack Software Engineer",
    title: "Scheduled mobile releases without babysitting the deploy.",
    description: "Owned scheduled Google Play rollouts end to end, including release orchestration, calendar visibility, notifications, and production support.",
    throughline: "Turn a manual handoff into a dependable workflow.", tags: "Workflow orchestration · Full-stack engineering",
  },
  {
    id: "broadridge", company: "Broadridge", theme: "Reliable data systems",
    role: "Associate Software Engineer",
    title: "Replay production traffic without touching production.",
    description: "Built a traffic-replay framework with AWS Lambda and Kafka that scaled reconciliation testing to millions of messages and cut manual debugging work.",
    throughline: "Make high-volume data reliable and easier to operate.", tags: "Data reliability · Distributed systems",
  },
];

export const artworks = [
  { title: "Fire escape", medium: "Painting", id: 50968629, width: 1388, height: 1440, alt: "Painting of a green apartment building, fire escapes, and a figure at a window" },
  { title: "Pink flower study", medium: "Painting", id: 50439888, width: 1059, height: 1440, alt: "Pink flower surrounded by green leaves against a blue background in a sketchbook" },
  { title: "Red flower study", medium: "Painting", id: 50439889, width: 1080, height: 1440, alt: "Red flower with long green leaves painted on textured paper" },
  { title: "Green & magenta", medium: "Painting", id: 50439887, width: 1080, height: 1440, alt: "Magenta flower and sweeping green foliage painted in a sketchbook" },
  { title: "Portrait study", medium: "Drawing", id: 50968843, width: 1080, height: 1440, alt: "Expressive monochrome portrait drawing on loose paper" },
  { title: "Sketchbook jam", medium: "Drawing", id: 50968850, width: 1289, height: 1440, alt: "Sketchbook page of dancing characters, a disco ball, and handwritten sounds" },
  { title: "The faces of Brooklyn", medium: "Drawing", id: 50968856, width: 1440, height: 1080, landscape: true, alt: "Pen drawing of Brooklyn characters, buildings, and street details" },
  { title: "Character studies", medium: "Drawing", id: 50968864, width: 826, height: 448, landscape: true, alt: "Four illustrated characters with a paper airplane and disco ball" },
].map(artwork => ({ ...artwork, image: `${process.env.PUBLIC_URL}/assets/art/arena-${artwork.id}.webp`, link: `${process.env.PUBLIC_URL}/assets/art/arena-${artwork.id}.webp` }));

export const archivedArtworks = [
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


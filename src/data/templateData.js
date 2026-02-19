export const templates = [
  {
    id: 1,
    name: 'Horizon Academy',
    tag: 'Modern & Bold',
    images: [
      new URL('../assets/templates/a.jpg', import.meta.url).href,
      new URL('../assets/templates/b.jpg', import.meta.url).href,
      new URL('../assets/templates/c.jpg', import.meta.url).href,
    ],
    description:
      'A striking full-bleed design for schools. Large hero imagery, bold typography, and a confident navy & amber color system.',
    features: ['Admissions Portal', 'Course Catalog', 'Faculty Directory', 'News & Events'],
    link: 'https://horizon-academy-template.example.com',
    preview: {
      bg: 'linear-gradient(135deg, #1E3A5F 0%, #2E86AB 100%)',
      previewImage: new URL('../assets/templates/a.jpg', import.meta.url).href,
      accent: '#F5A623',
      heroText: 'Shape Your Future',
      subText: "World-class education for tomorrow's leaders",
    },
    badge: 'Most Popular',
  },
  {
    id: 2,
    name: 'Greenleaf Campus',
    tag: 'Natural & Calm',
    images: [
      new URL('../assets/templates/b.jpg', import.meta.url).href,
      new URL('../assets/templates/c.jpg', import.meta.url).href,
      new URL('../assets/templates/a.jpg', import.meta.url).href,
    ],
    description:
      'Earth tones and organic shapes create a welcoming, community-first design. Great for schools with a human touch.',
    features: ['Student Dashboard', 'Extracurriculars', 'Sports & Clubs', 'Library'],
    link: 'https://greenleaf-campus-template.example.com',
    preview: {
      bg: 'linear-gradient(135deg, #2D6A4F 0%, #52B788 100%)',
      previewImage: new URL('../assets/templates/b.jpg', import.meta.url).href,
      accent: '#FFFFFF',
      heroText: 'Grow. Learn. Thrive.',
      subText: 'An education rooted in community and nature',
    },
    badge: 'New',
  },
];
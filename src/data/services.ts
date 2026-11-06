export type Service = {
  id: string;
  name: string;
  tagline: string;
  description: string;
  image: string;
  alt: string;
};

export const services: Service[] = [
  {
    id: 'microneedling',
    name: 'Microneedling',
    tagline: 'Skin rejuvenation & texture refinement',
    description:
      'A collagen-inducing treatment that gently refines skin texture, softens fine lines, and restores a smooth, luminous complexion.',
    image: 'https://images.pexels.com/photos/7446659/pexels-photo-7446659.jpeg?auto=compress&cs=tinysrgb&w=900',
    alt: 'Aesthetician performing a rejuvenating facial treatment',
  },
  {
    id: 'co2-laser',
    name: 'CO₂ Laser',
    tagline: 'Advanced skin resurfacing',
    description:
      'Precision laser resurfacing that addresses uneven tone, scarring, and signs of aging for visibly renewed, healthier skin.',
    image: 'https://images.pexels.com/photos/4586726/pexels-photo-4586726.jpeg?auto=compress&cs=tinysrgb&w=900',
    alt: 'Laser skincare treatment in a beauty clinic',
  },
  {
    id: 'light-therapy',
    name: 'Face Light Therapy Mask',
    tagline: 'Light-based facial renewal',
    description:
      'A non-invasive LED treatment that calms inflammation, boosts collagen, and leaves the skin glowing, balanced, and refreshed.',
    image: 'https://images.pexels.com/photos/19242408/pexels-photo-19242408.jpeg?auto=compress&cs=tinysrgb&w=900',
    alt: 'Patients receiving LED light therapy facial treatment',
  },
  {
    id: 'botox',
    name: 'Botox',
    tagline: 'Soften expression lines',
    description:
      'A refined injectable treatment that softens the appearance of expression lines for a rested, naturally refreshed look.',
    image: 'https://images.pexels.com/photos/4586711/pexels-photo-4586711.jpeg?auto=compress&cs=tinysrgb&w=900',
    alt: 'Beautician administering a facial injection treatment',
  },
  {
    id: 'dermal-fillers',
    name: 'Dermal Fillers',
    tagline: 'Restore volume & contour',
    description:
      'Expertly placed fillers enhance facial volume and restore natural-looking contours, bringing harmony and definition to your features.',
    image: 'https://images.pexels.com/photos/3762890/pexels-photo-3762890.jpeg?auto=compress&cs=tinysrgb&w=900',
    alt: 'Woman with healthy glowing skin',
  },
  {
    id: 'sculptra',
    name: 'Sculptra',
    tagline: 'Collagen-stimulating rejuvenation',
    description:
      'A gradual, collagen-stimulating treatment that restores underlying structure for subtle, natural-looking facial rejuvenation over time.',
    image: 'https://images.pexels.com/photos/5927947/pexels-photo-5927947.jpeg?auto=compress&cs=tinysrgb&w=900',
    alt: 'Woman holding a skincare cream jar',
  },
];

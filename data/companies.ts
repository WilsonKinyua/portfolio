export interface Company {
  id: string;
  name: string;
  logo?: string;
  website?: string;
  industry: string;
}

// Companies worked with - for social proof section
export const companies: Company[] = [
  {
    id: 'belva-digital',
    name: 'Belva Digital',
    industry: 'Digital Agency',
    website: 'https://belvadigital.com/',
  },
  {
    id: 'moringa-school',
    name: 'Moringa School',
    industry: 'Education',
    website: 'https://moringaschool.com',
  },
  {
    id: 'weza-prosoft',
    name: 'Weza Prosoft',
    industry: 'Enterprise Software',
    website: 'https://wezaprosoft.com',
  },
  {
    id: 'paya-finance',
    name: 'Paya Finance',
    industry: 'Fintech',
    website: 'https://paya.co.ke',
  },
  {
    id: 'brance-technologies',
    name: 'Brance Technologies',
    industry: 'Technology',
    website: 'https://brancetech.com',
  },
];

// Notable client projects (from projects component)
export const clientProjects: Company[] = [
  {
    id: 'newbridge',
    name: 'Newbridge Connect',
    industry: 'Language Services',
    website: 'https://newbridgeconnect.com',
  },
  {
    id: 'inkomoko',
    name: 'Inkomoko',
    industry: 'Social Enterprise',
    website: 'https://inkomoko.com',
  },
  {
    id: 'dalbit',
    name: 'Dalbit Petroleum',
    industry: 'Energy',
    website: 'https://dalbitpetroleum.com',
  },
  {
    id: 'salaam-bank',
    name: 'Salaam Somali Bank',
    industry: 'Banking',
  },
  {
    id: 'mkwc',
    name: 'Mount Kenya Wildlife Conservancy',
    industry: 'Conservation',
    website: 'https://mountkenyawildlifeconservancy.org',
  },
];

import { Partner } from '@/components/PartnerDetail'

const partnersData: Partner[] = [
  {
    slug: 'shouryendu-ray',
    name: 'Shouryendu Ray',
    title: 'Partner',
    image: '/pictures/partners/3.webp',
    email: 'sray@norachambers.in',
    linkedin: 'https://www.linkedin.com/in/shouryenduray/',
    specialization: 'Commercial Litigation, Corporate Advisory & Aviation Law',
    bio: 'Dual-qualified attorney (New York and India) with expertise in commercial litigation and corporate advisory, focusing on the aviation, tech, and pharma industries; recognized in Business World Legal\'s "40 Under 40" list, named a leading Aviation Law practitioner by the India Business Law Journal (2024 & 2025), and featured among the "Top 10" Legal Consultants in the Pharma & Life Science Industry by India Pharma Outlook. Currently serves as Senior Panel Counsel for the Union of India before the High Court of Delhi.',
    education: [
      'LLM - University of Pennsylvania (Dean\'s Scholar)',
      'Certificate in Business & Law - Wharton',
      'BA, LLB - NUJS'
    ],
    experience: [
      'Head of Dispute Resolution, AsiaWise, New Delhi',
      'Trial & Disputes , Pepper Hamilton, Philadelphia/New York',
      'Chambers of the Solicitor General of India, New Delhi',
      'Disputes & General Corporate, Amarchand Mangaldas, Mumbai'
    ]
  },
  {
    slug: 'neelu-mohan',
    name: 'Neelu Mohan',
    title: 'Partner',
    image: '/pictures/partners/2.webp',
    email: 'nmohan@norachambers.in',
    linkedin: 'https://www.linkedin.com/in/neelumohan/',
    specialization: 'Commercial Litigation & Arbitration',
    bio: 'Advocate-on-Record with the Supreme Court of India, specializing in commercial litigation, arbitration, and regulatory advisory matters with expertise in infrastructure and oil & gas disputes. Serves as Panel Counsel for the Union of India before the Supreme Court.',
    education: [
      'LLM - Columbia University',
      'BSL, LLB - ILS Law College, University of Pune'
    ],
    experience: [
      'Advocate-on-Record, Supreme Court of India',
      'Chambers of Mr. Nakul Dewan, Senior Advocate & King’s Counsel, New Delhi',
      'Disputes & General Corporate, Luthra & Luthra Law Offices, New Delhi',
      'Dispute Resolution, Argus Partners, Mumbai'
    ]
  },
  {
    slug: 'ms-ray',
    name: 'Dr. Manas S. Ray',
    title: 'Partner',
    image: '/pictures/partners/1.webp',
    email: 'msray@norachambers.in',
    linkedin: 'https://www.linkedin.com/in/drmsray/',
    specialization: 'Direct Tax, Securities Law & Financial Regulation',
    bio: 'Former Chief Commissioner of Income Tax (IRS) and Executive Director of SEBI, specializing in direct tax, international taxation, transfer pricing, securities law, and financial regulation matters.',
    education: [
      'PhD - IGNOU & University of Delhi',
      'MA - University of Delhi',
      'LLB - University Law College, Utkal University',
      'PG Diploma in Securities Law - Govt. Law College, Mumbai'
    ],
    experience: [
      'Chief Commissioner of Income Tax',
      'Executive Director, SEBI',
      'Director of International Taxation',
      'Indian Revenue Service (1985 batch)'
    ]
  }
]

export function getAllPartners(): Partner[] {
  return partnersData
}

export function getPartnerBySlug(slug: string): Partner | undefined {
  return partnersData.find(partner => partner.slug === slug)
}
import { notFound } from 'next/navigation'
import PartnerDetail from '@/components/PartnerDetail'
import { getPartnerBySlug, getAllPartners } from '@/lib/partnersData'

export async function generateStaticParams() {
  const partners = getAllPartners()
  return partners.map((partner) => ({
    slug: partner.slug,
  }))
}

export default function PartnerPage({ params }: { params: { slug: string } }) {
  const partner = getPartnerBySlug(params.slug)

  if (!partner) {
    notFound()
  }

  return <PartnerDetail partner={partner} />
}
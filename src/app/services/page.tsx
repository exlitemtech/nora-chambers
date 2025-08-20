import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Scale, Users, Shield, Award, Building, Gavel } from 'lucide-react'

export default function Services() {
  const practiceAreas = [
    {
      title: 'Arbitration & Commercial Dispute Resolution',
      description: 'Our award-winning practice represents our firm\'s capabilities in successfully handling several high-profile matters across diverse judicial and quasi-judicial fora including the Indian Supreme Court, various High Courts, the National Company Law Tribunal and the Appellate Tribunal.',
      icon: Scale,
      details: [
        'High-stakes arbitrations before domestic and international tribunals',
        'Construction and engineering disputes',
        'Complex shareholder disputes',
        'Institutional arbitrations (LCIA, SIAC, ICC frameworks)'
      ]
    },
    {
      title: 'General Corporate Advisory',
      description: 'We serve as trusted counsel to a diverse range of clients, from innovative start-ups disrupting traditional markets to prominent multinational corporations.',
      icon: Users,
      details: [
        'Regulatory compliance and strategic guidance',
        'Start-up to multinational corporation advisory',
        'Complex regulatory environment navigation',
        'Emerging industry legal frameworks'
      ]
    },
    {
      title: 'Direct Tax & Economic Offences',
      description: 'Our direct tax and economic offences practice combines our partners\' unique dual perspective from both tax administration and sophisticated private client representation.',
      icon: Shield,
      details: [
        'Supreme Court and High Court tax controversies',
        'International taxation and transfer pricing',
        'Prevention of Money Laundering Act proceedings',
        'Foreign Exchange Management Act compliance'
      ]
    },
    {
      title: 'Securities Law',
      description: 'Our securities law practice is built on regulatory expertise and comprehensive market knowledge, representing listed corporations and key managerial personnel.',
      icon: Award,
      details: [
        'SEBI proceedings and regulatory compliance',
        'Securities Appellate Tribunal appeals',
        'Fraud prevention and insider trading matters',
        'Capital markets dispute resolution'
      ]
    },
    {
      title: 'Corporate Insolvency',
      description: 'The firm\'s corporate insolvency practice showcases its command over the dynamic legal framework under the Insolvency and Bankruptcy Code.',
      icon: Building,
      details: [
        'Resolution applicant representation',
        'Financial and operational creditor advisory',
        'Resolution plan negotiations',
        'Liquidation proceedings and compliance'
      ]
    },
    {
      title: 'Technology & IP',
      description: 'Our Intellectual Property, Data Privacy & Technology practice provides strategic solutions across the complete IP lifecycle and data governance spectrum.',
      icon: Gavel,
      details: [
        'IP enforcement and prosecution',
        'R&D collaborations and partnerships',
        'Data privacy framework development',
        'Technology contract negotiations'
      ]
    }
  ]

  return (
    <div className="min-h-screen">
      <div className="pt-24 md:pt-32 pb-12 bg-tertiary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Areas of Practice</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We deliver sophisticated legal solutions across diverse practice areas, combining deep sectoral knowledge with strategic insight.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {practiceAreas.map((area, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center mb-4">
                    <area.icon className="h-8 w-8 text-primary mr-3" />
                    <CardTitle className="text-xl">{area.title}</CardTitle>
                  </div>
                  <CardDescription className="text-base">{area.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {area.details.map((detail, idx) => (
                      <li key={idx} className="flex items-start">
                        <span className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                        <span className="text-sm text-gray-600">{detail}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
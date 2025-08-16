import Navigation from '@/components/navigation'
import Footer from '@/components/footer'

export default function News() {
  return (
    <div className="min-h-screen">
      <Navigation />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 md:pt-32 pb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">News</h1>
        <p className="text-xl text-gray-600 mb-8">
          Latest news, announcements, and updates from Nora Chambers.
        </p>
      </div>

      <Footer />
    </div>
  )
}
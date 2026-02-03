import Link from 'next/link'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="border-t border-gray-200 bg-gray-50 py-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="font-bold text-lg text-brand mb-4">Vibe Coach</h3>
            <p className="text-gray-600 text-sm">Personal AI coaching tailored to your work and life.</p>
          </div>
          <div>
            <h4 className="font-semibold text-gray-900 mb-4">Navigation</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/services" className="text-gray-600 hover:text-brand transition">Services</Link></li>
              <li><Link href="/how-it-works" className="text-gray-600 hover:text-brand transition">How It Works</Link></li>
              <li><Link href="/about" className="text-gray-600 hover:text-brand transition">About</Link></li>
              <li><Link href="/contact" className="text-gray-600 hover:text-brand transition">Contact</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-gray-900 mb-4">Resources</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/faq" className="text-gray-600 hover:text-brand transition">FAQ</Link></li>
              <li><a href="https://github.com/levineam/vibe-coach-website" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-brand transition">GitHub</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-gray-900 mb-4">Contact</h4>
            <p className="text-gray-600 text-sm">
              <a href="mailto:hello@vibecoach.com" className="hover:text-brand transition">hello@vibecoach.com</a>
            </p>
            <p className="text-gray-600 text-sm mt-2">Philadelphia, PA</p>
          </div>
        </div>
        <div className="border-t border-gray-200 pt-8 flex flex-col md:flex-row items-center justify-between">
          <p className="text-sm text-gray-600">&copy; {currentYear} Vibe Coach. All rights reserved.</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <Link href="/privacy" className="text-sm text-gray-600 hover:text-brand transition">Privacy</Link>
            <Link href="/terms" className="text-sm text-gray-600 hover:text-brand transition">Terms</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

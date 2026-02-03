import Header from '@/components/Header'
import Footer from '@/components/Footer'
import CTAButton from '@/components/CTAButton'
import Link from 'next/link'

export default function Home() {
  return (
    <>
      <Header />
      <main>
        {/* Hero Section */}
        <section className="relative py-20 md:py-32 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-50 to-white">
          <div className="mx-auto max-w-4xl text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Personal AI Coaching Tailored to You
            </h1>
            <p className="text-xl text-gray-700 mb-8 max-w-2xl mx-auto">
              Weekly guidance on integrating AI into your work and life — so you stay ahead, not lost.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <CTAButton href="/contact" text="Book a Free Strategy Call" size="lg" />
              <Link
                href="/how-it-works"
                className="px-6 py-3 text-lg font-medium text-brand hover:text-brand-dark transition border-2 border-brand rounded-lg"
              >
                Learn How It Works
              </Link>
            </div>
          </div>
        </section>

        {/* Problem Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
          <div className="mx-auto max-w-4xl">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 text-center">
              The Problem: AI is Moving Too Fast
            </h2>
            <p className="text-xl text-gray-600 text-center mb-12">
              You know AI is important. But between ChatGPT, new models every month, and endless use cases, you feel overwhelmed. You're using AI reactively, missing opportunities to actually get ahead.
            </p>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="p-6 rounded-lg bg-gray-50 border border-gray-200">
                <div className="text-4xl mb-4">⚡</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">The Pace is Relentless</h3>
                <p className="text-gray-700">New AI capabilities drop constantly. You struggle to keep up and don't know what's actually useful.</p>
              </div>
              <div className="p-6 rounded-lg bg-gray-50 border border-gray-200">
                <div className="text-4xl mb-4">🎯</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">No Clear Strategy</h3>
                <p className="text-gray-700">You use AI tools, but you're not sure if they're actually making a difference in your work.</p>
              </div>
              <div className="p-6 rounded-lg bg-gray-50 border border-gray-200">
                <div className="text-4xl mb-4">😅</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Analysis Paralysis</h3>
                <p className="text-gray-700">Too many options, too much noise. You don't know where to start or who to trust.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Solution Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-blue-50">
          <div className="mx-auto max-w-4xl">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 text-center">
              The Solution: Personal AI Coaching
            </h2>
            <p className="text-xl text-gray-600 text-center mb-12">
              Weekly 1-on-1 guidance customized to your specific workflows and goals. No hype. Just clarity, accountability, and a personal AI system that actually works for you.
            </p>
            <div className="space-y-6">
              <div className="flex gap-6">
                <div className="flex-shrink-0">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-brand text-white font-bold">1</div>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Discover Your Goals</h3>
                  <p className="text-gray-700">We understand what matters to you and where AI can actually help in your workflow.</p>
                </div>
              </div>
              <div className="flex gap-6">
                <div className="flex-shrink-0">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-brand text-white font-bold">2</div>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Build Your Strategy</h3>
                  <p className="text-gray-700">Together, we create a personalized roadmap and set up OpenClaw—your own AI operating system.</p>
                </div>
              </div>
              <div className="flex gap-6">
                <div className="flex-shrink-0">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-brand text-white font-bold">3</div>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Stay Accountable & Adapt</h3>
                  <p className="text-gray-700">Regular check-ins keep you on track, and we adapt as new capabilities emerge.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Outcomes Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
          <div className="mx-auto max-w-4xl">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">
              What You'll Achieve
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="p-6 rounded-lg border-2 border-brand">
                <div className="text-5xl font-bold text-brand mb-4">5+</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Hours Saved Weekly</h3>
                <p className="text-gray-700">Through smarter AI workflows tailored to your work patterns.</p>
              </div>
              <div className="p-6 rounded-lg border-2 border-brand">
                <div className="text-5xl font-bold text-brand mb-4">🎯</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Clarity & Confidence</h3>
                <p className="text-gray-700">Know exactly which AI tools are worth your time and energy.</p>
              </div>
              <div className="p-6 rounded-lg border-2 border-brand">
                <div className="text-5xl font-bold text-brand mb-4">🔧</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Your AI Operating System</h3>
                <p className="text-gray-700">A customized OpenClaw setup that works exactly how you do.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Who This Is For */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
          <div className="mx-auto max-w-4xl text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
              Who This Is For
            </h2>
            <p className="text-xl text-gray-700 mb-12 max-w-2xl mx-auto">
              <strong>If you're a consultant, founder, or knowledge worker</strong> who wants to use AI strategically—not reactively—this is for you.
            </p>
            <div className="bg-white p-8 rounded-lg border border-gray-200 mb-12">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">This isn't for everyone:</h3>
              <ul className="text-gray-700 space-y-2 text-left max-w-xl mx-auto">
                <li>❌ If you want someone to build an app for you → that's not us</li>
                <li>❌ If you're looking for a one-time course → we provide ongoing coaching</li>
                <li>❌ If you think AI is just hype → we'll tell you honestly what works and what doesn't</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Testimonials (Placeholder) */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
          <div className="mx-auto max-w-4xl">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">
              What Customers Say
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="p-6 rounded-lg bg-gray-50 border border-gray-200">
                <p className="text-gray-700 mb-4 italic">"Vibe Coach helped me understand what AI could actually do for my consulting practice. I went from overwhelmed to having a clear strategy."</p>
                <p className="font-semibold text-gray-900">— Coming Soon</p>
                <p className="text-gray-600 text-sm">Philadelphia, PA</p>
              </div>
              <div className="p-6 rounded-lg bg-gray-50 border border-gray-200">
                <p className="text-gray-700 mb-4 italic">"The personalized OpenClaw setup saves me hours every week. Worth every penny."</p>
                <p className="font-semibold text-gray-900">— Coming Soon</p>
                <p className="text-gray-600 text-sm">Philadelphia, PA</p>
              </div>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-brand">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Get Ahead of the AI Curve?
            </h2>
            <p className="text-lg text-blue-100 mb-8">
              Book a free 30-minute discovery call. No commitment. Just conversation.
            </p>
            <CTAButton
              href="/contact"
              text="Schedule Your Free Call"
              size="lg"
              variant="secondary"
            />
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}

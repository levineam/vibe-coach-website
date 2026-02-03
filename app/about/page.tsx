import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'About Vibe Coach - Our Mission & Philosophy',
  description: 'Learn about Vibe Coach\'s mission to help Philadelphia professionals use AI strategically, not reactively.',
}

export default function About() {
  return (
    <>
      <Header />
      <main>
        {/* Hero */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-50 to-white">
          <div className="mx-auto max-w-4xl text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              About Vibe Coach
            </h1>
            <p className="text-xl text-gray-700">
              We help knowledge workers use AI strategically—with meaning, accountability, and personal attention.
            </p>
          </div>
        </section>

        {/* Mission */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
          <div className="mx-auto max-w-4xl">
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Mission</h2>
              <p className="text-lg text-gray-700 leading-relaxed">
                Vibe Coach helps Philadelphia-based knowledge workers, consultants, and founders use AI as a strategic advantage—not a source of anxiety.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed mt-4">
                We believe AI shouldn't be overwhelming. With personalized coaching, the right tools, and a custom setup that works for your specific workflows, you can stay ahead of the curve without losing yourself in the hype.
              </p>
            </div>

            <div className="bg-blue-50 p-8 rounded-lg border-l-4 border-brand">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Philosophy: Meaning Over Hype</h3>
              <div className="space-y-4 text-gray-700">
                <p>
                  <strong>We don't sell AI as a cure-all.</strong> We sell clarity. Most people in Philadelphia know AI exists—they just don't know what to do with it or if it's right for them.
                </p>
                <p>
                  <strong>We focus on YOUR outcomes,</strong> not what's trendy. If AI isn't the answer for a particular problem, we'll tell you. That trust matters.
                </p>
                <p>
                  <strong>We emphasize personal 1-on-1 attention.</strong> Generic courses and groups don't work. Your workflow is unique. Your coaching should be too.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Why We Started */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
          <div className="mx-auto max-w-4xl">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Why We Started Vibe Coach</h2>
            <div className="prose prose-lg max-w-none text-gray-700 space-y-4">
              <p>
                Over the past few years, I've noticed something: everyone in Philadelphia—consultants, founders, executives, even solopreneurs—knows AI is important. But most are using it reactively.
              </p>
              <p>
                They'll use ChatGPT for random questions, but they're not thinking strategically about where AI could actually save them time or make them better at their work. They feel like they're falling behind.
              </p>
              <p>
                I realized the problem wasn't tools or knowledge—it was perspective. People needed someone who understands their specific work, can coach them through the confusion, and help them build a personal system that actually works.
              </p>
              <p>
                That's why I built Vibe Coach.
              </p>
            </div>
          </div>
        </section>

        {/* Our Approach */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
          <div className="mx-auto max-w-4xl">
            <h2 className="text-3xl font-bold text-gray-900 mb-12">Our Approach</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="p-6 rounded-lg bg-blue-50 border-l-4 border-brand">
                <h3 className="text-xl font-bold text-gray-900 mb-3">🎯 Start with Your Goals</h3>
                <p className="text-gray-700">
                  We don't start with tools. We start with you. What are you trying to accomplish? Where are you struggling? That drives everything.
                </p>
              </div>
              <div className="p-6 rounded-lg bg-blue-50 border-l-4 border-brand">
                <h3 className="text-xl font-bold text-gray-900 mb-3">🤝 Personal Coaching, Not Courses</h3>
                <p className="text-gray-700">
                  Group courses are scalable. But they're not personal. You get 1-on-1 attention, customization, and real accountability.
                </p>
              </div>
              <div className="p-6 rounded-lg bg-blue-50 border-l-4 border-brand">
                <h3 className="text-xl font-bold text-gray-900 mb-3">🏗️ Build Your System</h3>
                <p className="text-gray-700">
                  We set up OpenClaw—your personal AI operating system. Once it's built, you own it. No vendor lock-in.
                </p>
              </div>
              <div className="p-6 rounded-lg bg-blue-50 border-l-4 border-brand">
                <h3 className="text-xl font-bold text-gray-900 mb-3">📍 Philadelphia-Based</h3>
                <p className="text-gray-700">
                  We work with people in Philadelphia. We understand the market, the vibe, and can meet you in person if that helps.
                </p>
              </div>
              <div className="p-6 rounded-lg bg-blue-50 border-l-4 border-brand">
                <h3 className="text-xl font-bold text-gray-900 mb-3">🤐 Transparent & Honest</h3>
                <p className="text-gray-700">
                  We'll tell you when AI isn't the answer. We don't oversell, hype, or push you into something that isn't a fit.
                </p>
              </div>
              <div className="p-6 rounded-lg bg-blue-50 border-l-4 border-brand">
                <h3 className="text-xl font-bold text-gray-900 mb-3">🔄 Ongoing Support</h3>
                <p className="text-gray-700">
                  AI evolves fast. Regular coaching keeps you updated and adapted as new capabilities emerge.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Our Team */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
          <div className="mx-auto max-w-4xl">
            <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Meet Your Coach</h2>
            <div className="bg-white rounded-lg border border-gray-200 overflow-hidden">
              <div className="p-8">
                <div className="mb-6">
                  <div className="w-24 h-24 rounded-full bg-brand flex items-center justify-center text-white text-4xl">
                    👨‍💼
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Andrew Levine</h3>
                <p className="text-brand font-semibold mb-4">Founder, Vibe Coach</p>
                <div className="space-y-4 text-gray-700">
                  <p>
                    Andrew is an AI consultant and strategist focused on helping professionals and small teams integrate AI into their workflows. He's spent the last few years exploring how AI can augment human work, not replace it.
                  </p>
                  <p>
                    <strong>Background:</strong> Software engineering, AI research, and a passion for meaning-driven technology. When Andrew isn't coaching, he's exploring what's possible at the intersection of AI, automation, and human creativity.
                  </p>
                  <p>
                    <strong>Philosophy:</strong> AI is a tool for amplification. The best outcomes happen when you're clear about your goals first, then use AI strategically. Hype helps no one.
                  </p>
                  <p>
                    <strong>Based in:</strong> Philadelphia, PA. Open to meeting clients in person.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Why Philadelphia? */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
          <div className="mx-auto max-w-4xl">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Why Philadelphia?</h2>
            <div className="space-y-6 text-gray-700">
              <p className="text-lg">
                Philadelphia has an incredible community of consultants, entrepreneurs, and knowledge workers who are thinking deeply about their work—but often feel isolated when it comes to AI strategy.
              </p>
              <p className="text-lg">
                We believe in building community and supporting the local ecosystem. Vibe Coach starts here in Philadelphia, and we're investing in local partnerships and a network of AI-savvy professionals.
              </p>
              <div className="bg-blue-50 p-6 rounded-lg border-l-4 border-brand mt-8">
                <p className="text-lg">
                  <strong>Our goal:</strong> Help Philadelphia professionals stay ahead of the AI curve and build a thriving community of people thinking seriously about AI, meaning, and their work.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Our Commitment */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
          <div className="mx-auto max-w-4xl text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Our Commitment to You</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white p-6 rounded-lg border border-gray-200">
                <h3 className="text-xl font-bold text-gray-900 mb-4">✓ We're Here for Your Success</h3>
                <p className="text-gray-700">
                  Your success is our success. We're invested in your outcomes and will be honest if something isn't working.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg border border-gray-200">
                <h3 className="text-xl font-bold text-gray-900 mb-4">✓ Transparent Pricing</h3>
                <p className="text-gray-700">
                  No hidden fees, no upsells, no surprises. Month-to-month, cancel anytime.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg border border-gray-200">
                <h3 className="text-xl font-bold text-gray-900 mb-4">✓ Continuous Learning</h3>
                <p className="text-gray-700">
                  AI evolves fast. We stay on top of it so you don't have to.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg border border-gray-200">
                <h3 className="text-xl font-bold text-gray-900 mb-4">✓ You Own Your Tools</h3>
                <p className="text-gray-700">
                  No vendor lock-in. Your OpenClaw setup is yours to keep.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-brand">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Let's Talk About Your AI Future
            </h2>
            <p className="text-lg text-blue-100 mb-8">
              Book a free discovery call. Learn about our approach and see if it's right for you.
            </p>
            <a
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-4 text-lg font-medium rounded-lg bg-white text-brand hover:bg-gray-100 transition"
            >
              Schedule Your Discovery Call
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}

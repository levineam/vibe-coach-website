import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Image from 'next/image'
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
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-[#1a1a1a] to-[#0a0a0a]">
          <div className="mx-auto max-w-4xl text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              About Vibe Coach
            </h1>
            <p className="text-xl text-gray-400">
              We help knowledge workers use AI strategically with meaning, accountability, and personal attention.
            </p>
          </div>
        </section>

        {/* Mission */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-[#0a0a0a]">
          <div className="mx-auto max-w-4xl">
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-white mb-6">Our Mission</h2>
              <p className="text-lg text-gray-400 leading-relaxed">
                Vibe Coach helps Philadelphia-based knowledge workers, consultants, and founders use AI as a strategic advantage—not a source of anxiety.
              </p>
              <p className="text-lg text-gray-400 leading-relaxed mt-4">
                We believe AI shouldn't be overwhelming. With personalized coaching, the right tools, and a custom setup that works for your specific workflows, you can stay ahead of the curve without losing yourself in the hype.
              </p>
            </div>

            <div className="bg-[#1a1a1a] p-8 rounded-lg border-l-4 border-brand">
              <h3 className="text-2xl font-bold text-white mb-4">Our Philosophy: Meaning Over Hype</h3>
              <div className="space-y-4 text-gray-400">
                <p>
                  <strong className="text-white">We don't sell AI as a cure-all.</strong> We sell clarity. Most people in Philadelphia know AI exists—they just don't know what to do with it or if it's right for them.
                </p>
                <p>
                  <strong className="text-white">We focus on YOUR outcomes,</strong> not what's trendy. If AI isn't the answer for a particular problem, we'll tell you. That trust matters.
                </p>
                <p>
                  <strong className="text-white">We emphasize personal 1-on-1 attention.</strong> Generic courses and groups don't work. Your workflow is unique. Your coaching should be too.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Why We Started */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-[#1a1a1a]">
          <div className="mx-auto max-w-4xl">
            <h2 className="text-3xl font-bold text-white mb-8">Why We Started Vibe Coach</h2>
            <div className="space-y-4 text-gray-400">
              <p className="text-lg">
                Over the past few years, I've noticed something: everyone in Philadelphia—consultants, founders, executives, even solopreneurs—knows AI is important. But most are using it reactively.
              </p>
              <p className="text-lg">
                They'll use ChatGPT for random questions, but they're not thinking strategically about where AI could actually save them time or make them better at their work. They feel like they're falling behind.
              </p>
              <p className="text-lg">
                I realized the problem wasn't tools or knowledge—it was perspective. People needed someone who understands their specific work, can coach them through the confusion, and help them build a personal system that actually works.
              </p>
              <p className="text-lg">
                That's why I built Vibe Coach.
              </p>
            </div>
          </div>
        </section>

        {/* Our Approach */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-[#0a0a0a]">
          <div className="mx-auto max-w-4xl">
            <h2 className="text-3xl font-bold text-white mb-12">Our Approach</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="p-6 rounded-lg bg-[#1a1a1a] border-l-4 border-brand">
                <h3 className="text-xl font-bold text-white mb-3">Start with Your Goals</h3>
                <p className="text-gray-400">
                  We don't start with tools. We start with you. What are you trying to accomplish? Where are you struggling? That drives everything.
                </p>
              </div>
              <div className="p-6 rounded-lg bg-[#1a1a1a] border-l-4 border-brand">
                <h3 className="text-xl font-bold text-white mb-3">Personal Coaching, Not Courses</h3>
                <p className="text-gray-400">
                  Group courses are scalable. But they're not personal. You get 1-on-1 attention, customization, and real accountability.
                </p>
              </div>
              <div className="p-6 rounded-lg bg-[#1a1a1a] border-l-4 border-brand">
                <h3 className="text-xl font-bold text-white mb-3">Build Your System</h3>
                <p className="text-gray-400">
                  We set up OpenClaw—your personal AI operating system. Once it's built, you own it. No vendor lock-in.
                </p>
              </div>
              <div className="p-6 rounded-lg bg-[#1a1a1a] border-l-4 border-brand">
                <h3 className="text-xl font-bold text-white mb-3">Philadelphia-Based</h3>
                <p className="text-gray-400">
                  We work with people in Philadelphia. We understand the market, the vibe, and can meet you in person if that helps.
                </p>
              </div>
              <div className="p-6 rounded-lg bg-[#1a1a1a] border-l-4 border-brand">
                <h3 className="text-xl font-bold text-white mb-3">Transparent & Honest</h3>
                <p className="text-gray-400">
                  We'll tell you when AI isn't the answer. We don't oversell, hype, or push you into something that isn't a fit.
                </p>
              </div>
              <div className="p-6 rounded-lg bg-[#1a1a1a] border-l-4 border-brand">
                <h3 className="text-xl font-bold text-white mb-3">Ongoing Support</h3>
                <p className="text-gray-400">
                  AI evolves fast. Regular coaching keeps you updated and adapted as new capabilities emerge.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Our Team */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-[#1a1a1a]">
          <div className="mx-auto max-w-4xl">
            <h2 className="text-3xl font-bold text-white mb-12 text-center">Meet Your Coach</h2>
            <div className="bg-[#0a0a0a] rounded-lg border border-[#2d2d2d] overflow-hidden">
              <div className="p-8">
                <div className="mb-6 flex justify-center">
                  <Image
                    src="/images/andrew-headshot.jpg"
                    alt="Andrew Levine"
                    width={240}
                    height={240}
                    className="rounded-full w-48 h-48 object-cover border-2 border-brand"
                  />
                </div>
                <h3 className="text-2xl font-bold text-white mb-2 text-center">Andrew Levine</h3>
                <p className="text-brand font-semibold mb-4 text-center">Founder, Vibe Coach</p>
                <div className="space-y-4 text-gray-400">
                  <p>
                    Andrew is an AI consultant and strategist focused on helping professionals and small teams integrate AI into their workflows. He's spent the last few years exploring how AI can augment human work, not replace it.
                  </p>
                  <p>
                    <strong className="text-white">Background:</strong> Software engineering, AI research, and a passion for meaning-driven technology. When Andrew isn't coaching, he's exploring what's possible at the intersection of AI, automation, and human creativity.
                  </p>
                  <p>
                    <strong className="text-white">Philosophy:</strong> AI is a tool for amplification. The best outcomes happen when you're clear about your goals first, then use AI strategically. Hype helps no one.
                  </p>
                  <p>
                    <strong className="text-white">Based in:</strong> Philadelphia, PA. Open to meeting clients in person.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Why Philadelphia? */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-[#0a0a0a]">
          <div className="mx-auto max-w-4xl">
            <h2 className="text-3xl font-bold text-white mb-8">Why Philadelphia?</h2>
            <div className="space-y-6 text-gray-400">
              <p className="text-lg">
                Philadelphia has an incredible community of consultants, entrepreneurs, and knowledge workers who are thinking deeply about their work—but often feel isolated when it comes to AI strategy.
              </p>
              <p className="text-lg">
                We believe in building community and supporting the local ecosystem. Vibe Coach starts here in Philadelphia, and we're investing in local partnerships and a network of AI-savvy professionals.
              </p>
              <div className="bg-[#1a1a1a] p-6 rounded-lg border-l-4 border-brand mt-8">
                <p className="text-lg">
                  <strong className="text-white">Our goal:</strong> Help Philadelphia professionals stay ahead of the AI curve and build a thriving community of people thinking seriously about AI, meaning, and their work.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Our Commitment */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-[#1a1a1a]">
          <div className="mx-auto max-w-4xl text-center">
            <h2 className="text-3xl font-bold text-white mb-8">Our Commitment to You</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-[#0a0a0a] p-6 rounded-lg border border-[#2d2d2d]">
                <h3 className="text-xl font-bold text-white mb-4">We're Here for Your Success</h3>
                <p className="text-gray-400">
                  Your success is our success. We're invested in your outcomes and will be honest if something isn't working.
                </p>
              </div>
              <div className="bg-[#0a0a0a] p-6 rounded-lg border border-[#2d2d2d]">
                <h3 className="text-xl font-bold text-white mb-4">Transparent Pricing</h3>
                <p className="text-gray-400">
                  No hidden fees, no upsells, no surprises. Month-to-month, cancel anytime.
                </p>
              </div>
              <div className="bg-[#0a0a0a] p-6 rounded-lg border border-[#2d2d2d]">
                <h3 className="text-xl font-bold text-white mb-4">Continuous Learning</h3>
                <p className="text-gray-400">
                  AI evolves fast. We stay on top of it so you don't have to.
                </p>
              </div>
              <div className="bg-[#0a0a0a] p-6 rounded-lg border border-[#2d2d2d]">
                <h3 className="text-xl font-bold text-white mb-4">You Own Your Tools</h3>
                <p className="text-gray-400">
                  No vendor lock-in. Your OpenClaw setup is yours to keep.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-[#1a1a1a] to-[#0a0a0a] border-t-2 border-brand">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Let's Talk About Your AI Future
            </h2>
            <p className="text-lg text-gray-400 mb-8">
              Book a free discovery call. Learn about our approach and see if it's right for you.
            </p>
            <a
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-4 text-lg font-medium rounded-lg bg-brand text-[#0a0a0a] hover:bg-[#ea580c] transition"
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

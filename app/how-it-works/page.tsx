import Header from '@/components/Header'
import Footer from '@/components/Footer'
import CTAButton from '@/components/CTAButton'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'How It Works - Vibe Coach',
  description: 'Learn the Vibe Coach process: discovery, strategy, and ongoing coaching tailored to your workflow.',
}

export default function HowItWorks() {
  return (
    <>
      <Header />
      <main>
        {/* Hero */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-[#1a1a1a] to-[#0a0a0a]">
          <div className="mx-auto max-w-4xl text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              How Vibe Coach Works
            </h1>
            <p className="text-xl text-gray-400">
              A simple 3-step process designed to demystify AI and build your personal AI strategy.
            </p>
          </div>
        </section>

        {/* Step 1 */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-[#0a0a0a]">
          <div className="mx-auto max-w-4xl">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <div className="mb-4">
                  <span className="text-6xl font-bold text-brand">1</span>
                </div>
                <h2 className="text-3xl font-bold text-white mb-4">
                  Discovery Call (Free)
                </h2>
                <p className="text-lg text-gray-400 mb-6">
                  <strong>30 minutes | No commitment</strong>
                </p>
                <div className="space-y-3 text-gray-400">
                  <p>
                    <strong className="text-white">What we do:</strong> We ask questions. Lots of them. We want to understand your work, your goals, and your current relationship with AI.
                  </p>
                  <ul className="space-y-2 ml-4">
                    <li>What does your typical week look like?</li>
                    <li>Where do you waste time that AI could help?</li>
                    <li>What are you trying to accomplish this year?</li>
                    <li>What scares you about AI? What excites you?</li>
                  </ul>
                  <p className="mt-4">
                    <strong className="text-white">What you get:</strong> A clear picture of whether coaching is a fit. We're transparent: if it's not a match, we'll tell you.
                  </p>
                </div>
              </div>
              <div className="bg-[#1a1a1a] p-8 rounded-lg border-l-4 border-brand">
                <p className="text-gray-400 italic mb-4">
                  "The discovery call helped me realize I wasn't actually using AI strategically—I was just using ChatGPT randomly. That's when I knew I needed someone like you."
                </p>
                <p className="font-semibold text-white">Early Customer</p>
              </div>
            </div>
          </div>
        </section>

        {/* Step 2 */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-[#1a1a1a]">
          <div className="mx-auto max-w-4xl">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="bg-[#0a0a0a] p-8 rounded-lg border-l-4 border-brand order-2 md:order-1">
                <div className="bg-[#2d2d2d] p-6 rounded mb-4">
                  <p className="text-sm font-mono text-gray-400">
                    <strong>Example workflow:</strong>
                  </p>
                  <p className="text-sm text-gray-400 mt-2">
                    "I spend 3 hours every week reading client emails, summarizing key points, and flagging action items. Can AI help with that?"
                  </p>
                </div>
                <p className="text-gray-400 text-sm">
                  <strong className="text-white">In the strategy session, we'd:</strong> Build an automated workflow in your OpenClaw setup that reads emails, extracts key info, and creates summaries. You'd go from 3 hours to 15 minutes.
                </p>
              </div>
              <div className="order-1 md:order-2">
                <div className="mb-4">
                  <span className="text-6xl font-bold text-brand">2</span>
                </div>
                <h2 className="text-3xl font-bold text-white mb-4">
                  Strategy Session (Paid)
                </h2>
                <p className="text-lg text-gray-400 mb-6">
                  <strong>60 minutes | Your first paid session</strong>
                </p>
                <div className="space-y-4 text-gray-400">
                  <p>
                    <strong className="text-white">What happens:</strong> We dive deep into your work and build a custom plan.
                  </p>
                  <ul className="space-y-2 ml-4">
                    <li>Choose 2–3 workflows that will have the biggest impact</li>
                    <li>I show you real, working AI solutions for each</li>
                    <li>We start configuring your personal OpenClaw setup</li>
                    <li>We create a prioritized action plan</li>
                  </ul>
                  <p className="mt-4">
                    <strong className="text-white">You leave with:</strong> A clear roadmap, a working AI system, and next steps.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Step 3 */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-[#0a0a0a]">
          <div className="mx-auto max-w-4xl">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <div className="mb-4">
                  <span className="text-6xl font-bold text-brand">3</span>
                </div>
                <h2 className="text-3xl font-bold text-white mb-4">
                  Ongoing Coaching
                </h2>
                <p className="text-lg text-gray-400 mb-6">
                  <strong>Weekly or monthly | The real magic</strong>
                </p>
                <div className="space-y-4 text-gray-400">
                  <p>
                    <strong className="text-white">What we do:</strong> Stay connected. Regular check-ins keep you accountable and help you iterate.
                  </p>
                  <ul className="space-y-2 ml-4">
                    <li>Is the workflow actually working for you?</li>
                    <li>What's the next area to tackle?</li>
                    <li>How do we adapt to new AI capabilities?</li>
                    <li>What questions do you have?</li>
                  </ul>
                  <p className="mt-4">
                    <strong className="text-white">The goal:</strong> You stay confident, informed, and ahead of the curve.
                  </p>
                </div>
              </div>
              <div className="bg-[#1a1a1a] p-8 rounded-lg border-l-4 border-brand">
                <p className="text-gray-400 text-sm mb-4">
                  <strong className="text-white">Typical coaching session:</strong>
                </p>
                <ul className="space-y-3 text-sm text-gray-400">
                  <li><strong className="text-white">5 min:</strong> How's the workflow doing? Anything broke?</li>
                  <li><strong className="text-white">15 min:</strong> I share a new AI capability that might help you</li>
                  <li><strong className="text-white">20 min:</strong> We tackle your current blocker or question</li>
                  <li><strong className="text-white">10 min:</strong> Set goals for next week/month</li>
                </ul>
                <p className="mt-4 text-sm text-gray-400">
                  Quick, focused, actionable. No fluff.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* OpenClaw Explainer */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-[#1a1a1a]">
          <div className="mx-auto max-w-4xl">
            <h2 className="text-3xl font-bold text-white mb-8 text-center">
              What is OpenClaw?
            </h2>
            <div className="bg-[#0a0a0a] rounded-lg border border-[#2d2d2d] p-8 space-y-6">
              <div>
                <h3 className="text-xl font-semibold text-white mb-3">Your Personal AI Operating System</h3>
                <p className="text-gray-400">
                  OpenClaw is a dashboard + system for automating your AI workflows. Unlike SaaS apps, you own your setup. It runs on your infrastructure or our managed tier.
                </p>
              </div>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-[#1a1a1a] p-4 rounded border border-[#2d2d2d]">
                  <h4 className="font-semibold text-white mb-2">What you CAN do with OpenClaw:</h4>
                  <ul className="space-y-2 text-sm text-gray-400">
                    <li>Automate recurring tasks (email summaries, content generation)</li>
                    <li>Create custom AI workflows for your specific needs</li>
                    <li>Integrate with your other tools (Slack, Gmail, Zapier)</li>
                    <li>Schedule AI tasks to run at specific times</li>
                    <li>Own your data (no vendor lock-in)</li>
                  </ul>
                </div>
                <div className="bg-[#1a1a1a] p-4 rounded border border-[#2d2d2d]">
                  <h4 className="font-semibold text-white mb-2">What you CAN'T do:</h4>
                  <ul className="space-y-2 text-sm text-gray-400">
                    <li>It's not a magic button ("just do X for me")</li>
                    <li>It's not for people who want 0 technical involvement</li>
                    <li>It requires some setup and maintenance</li>
                    <li>It's not a replacement for learning AI concepts</li>
                  </ul>
                </div>
              </div>
              <div className="bg-[#2d2d2d] p-4 rounded">
                <p className="text-sm text-gray-400">
                  <strong className="text-white">Bottom line:</strong> OpenClaw is a tool for people who want control. In coaching, we set it up together and you maintain it. It's not required, but it's the backbone of what we teach.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Timeline Example */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-[#0a0a0a]">
          <div className="mx-auto max-w-4xl">
            <h2 className="text-3xl font-bold text-white mb-12 text-center">
              A Typical 3-Month Journey
            </h2>
            <div className="space-y-6">
              <div className="flex gap-6">
                <div className="flex-shrink-0">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-brand text-[#0a0a0a] font-bold">
                    1
                  </div>
                </div>
                <div className="flex-grow">
                  <h4 className="font-semibold text-white mb-2">Month 1: Foundation</h4>
                  <p className="text-gray-400">
                    Discovery call → Strategy session → Set up your first OpenClaw automation → Quick wins (save 2–3 hours/week)
                  </p>
                </div>
              </div>
              <div className="flex gap-6">
                <div className="flex-shrink-0">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-brand text-[#0a0a0a] font-bold">
                    2
                  </div>
                </div>
                <div className="flex-grow">
                  <h4 className="font-semibold text-white mb-2">Month 2: Expansion</h4>
                  <p className="text-gray-400">
                    Coaching sessions × 4–5 → Tackle a second workflow → Integrate with your other tools → Build confidence
                  </p>
                </div>
              </div>
              <div className="flex gap-6">
                <div className="flex-shrink-0">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-brand text-[#0a0a0a] font-bold">
                    3
                  </div>
                </div>
                <div className="flex-grow">
                  <h4 className="font-semibold text-white mb-2">Month 3: Mastery</h4>
                  <p className="text-gray-400">
                    Final coaching session → You're now confident and self-sufficient → Quarterly briefings keep you updated
                  </p>
                </div>
              </div>
            </div>
            <div className="mt-8 p-6 bg-[#1a1a1a] rounded-lg border border-brand border-opacity-30">
              <p className="text-gray-400">
                <strong className="text-white">By the end:</strong> You've saved 5+ hours per week, built a personal AI system that works for you, and gained the confidence to adopt new AI tools independently.
              </p>
            </div>
          </div>
        </section>

        {/* What Real Coaching Looks Like */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-[#1a1a1a]">
          <div className="mx-auto max-w-4xl">
            <h2 className="text-3xl font-bold text-white mb-12 text-center">
              What Real Coaching Looks Like
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-[#0a0a0a] p-6 rounded-lg border border-[#2d2d2d]">
                <h3 className="text-xl font-semibold text-red-500 mb-4">NOT Just Chat</h3>
                <ul className="space-y-2 text-gray-400">
                  <li>One-off conversations</li>
                  <li>Generic advice ("use ChatGPT")</li>
                  <li>No accountability or follow-up</li>
                  <li>You're still confused after</li>
                </ul>
              </div>
              <div className="bg-[#0a0a0a] p-6 rounded-lg border-2 border-brand">
                <h3 className="text-xl font-semibold text-brand mb-4">REAL Coaching</h3>
                <ul className="space-y-2 text-gray-400">
                  <li>Regular sessions (every week or month)</li>
                  <li>Tailored to YOUR specific workflows</li>
                  <li>Accountability and follow-up</li>
                  <li>You leave each session with something to do</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-[#0a0a0a]">
          <div className="mx-auto max-w-3xl">
            <h2 className="text-3xl font-bold text-white mb-12 text-center">
              Questions?
            </h2>
            <div className="space-y-4">
              <details className="group border border-[#2d2d2d] rounded-lg p-6 hover:border-brand transition cursor-pointer">
                <summary className="flex justify-between items-center font-semibold text-white cursor-pointer select-none">
                  How long does it take to see results?
                  <span className="text-2xl group-open:rotate-180 transition">▼</span>
                </summary>
                <p className="text-gray-400 mt-4">
                  Quick wins happen in week 1–2 (your first automation). Bigger results (5+ hours saved, confidence boost) typically show up by month 2–3. It depends on your commitment and how much you engage with the process.
                </p>
              </details>
              <details className="group border border-[#2d2d2d] rounded-lg p-6 hover:border-brand transition cursor-pointer">
                <summary className="flex justify-between items-center font-semibold text-white cursor-pointer select-none">
                  Can I meet in person in Philadelphia?
                  <span className="text-2xl group-open:rotate-180 transition">▼</span>
                </summary>
                <p className="text-gray-400 mt-4">
                  Absolutely. We can meet over Zoom (preferred for flexibility) or in person in the Philadelphia area. In-person sessions can be even more valuable because we can see your actual workflow on your machine.
                </p>
              </details>
              <details className="group border border-[#2d2d2d] rounded-lg p-6 hover:border-brand transition cursor-pointer">
                <summary className="flex justify-between items-center font-semibold text-white cursor-pointer select-none">
                  What if I want to pause or cancel?
                  <span className="text-2xl group-open:rotate-180 transition">▼</span>
                </summary>
                <p className="text-gray-400 mt-4">
                  No problem. Month-to-month, cancel anytime with one week notice. We're not trying to lock you in. That said, the magic really happens with consistency.
                </p>
              </details>
              <details className="group border border-[#2d2d2d] rounded-lg p-6 hover:border-brand transition cursor-pointer">
                <summary className="flex justify-between items-center font-semibold text-white cursor-pointer select-none">
                  Do you help with AI adoption at my company?
                  <span className="text-2xl group-open:rotate-180 transition">▼</span>
                </summary>
                <p className="text-gray-400 mt-4">
                  This coaching is tailored for individuals. If you're looking for team/company-wide AI adoption consulting, that's a different scope. Let's talk about your situation in a discovery call.
                </p>
              </details>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-[#1a1a1a] to-[#0a0a0a] border-t-2 border-brand">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Get Started?
            </h2>
            <p className="text-lg text-gray-400 mb-8">
              Book a free 30-minute discovery call. Let's see if this is right for you.
            </p>
            <CTAButton
              href="/contact"
              text="Schedule Your Discovery Call"
              size="lg"
            />
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}

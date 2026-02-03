import Header from '@/components/Header'
import Footer from '@/components/Footer'
import CTAButton from '@/components/CTAButton'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Services - Vibe Coach',
  description: 'Personal AI coaching tailored to your workflow. Discover our pricing, what\'s included, and how we help you get ahead.',
}

export default function Services() {
  return (
    <>
      <Header />
      <main>
        {/* Hero */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-50 to-white">
          <div className="mx-auto max-w-4xl text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Understand AI. Own Your Workflow.
            </h1>
            <p className="text-xl text-gray-700">
              Personalized coaching + a custom OpenClaw setup that works exactly how you do.
            </p>
          </div>
        </section>

        {/* Service Overview */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
          <div className="mx-auto max-w-4xl">
            <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
              What is Vibe Coach?
            </h2>
            <div className="prose prose-lg max-w-none text-gray-700">
              <p className="mb-6">
                <strong>Vibe Coach is 1-on-1 personal AI coaching.</strong> We meet regularly (weekly or monthly) to align your understanding with what's actually possible in AI, customize your workflows, and set up a personal AI operating system (OpenClaw) tailored to your specific needs.
              </p>
              <p>
                Each session is focused on your work, your goals, and your challenges. We don't teach generic theory—we help you build a strategy that works for you.
              </p>
            </div>
          </div>
        </section>

        {/* Session Structure */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
          <div className="mx-auto max-w-4xl">
            <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
              How It Works: The Coaching Process
            </h2>
            <div className="space-y-8">
              <div className="bg-white p-8 rounded-lg border-l-4 border-brand">
                <h3 className="text-2xl font-bold text-gray-900 mb-3">Step 1: Discovery Call</h3>
                <p className="text-gray-700 font-semibold mb-2">Free • 30 minutes</p>
                <ul className="text-gray-700 space-y-2 ml-4">
                  <li>✓ Understand your work, goals, and current AI usage</li>
                  <li>✓ Share what coaching looks like</li>
                  <li>✓ Determine if this is a fit for you</li>
                </ul>
              </div>
              <div className="bg-white p-8 rounded-lg border-l-4 border-brand">
                <h3 className="text-2xl font-bold text-gray-900 mb-3">Step 2: Strategy Session</h3>
                <p className="text-gray-700 font-semibold mb-2">Paid • 60 minutes</p>
                <ul className="text-gray-700 space-y-2 ml-4">
                  <li>✓ Deep dive into 2–3 of your key workflows</li>
                  <li>✓ Show you AI solutions tailored to your setup</li>
                  <li>✓ Begin customizing OpenClaw to your needs</li>
                  <li>✓ Create a prioritized action plan</li>
                </ul>
              </div>
              <div className="bg-white p-8 rounded-lg border-l-4 border-brand">
                <h3 className="text-2xl font-bold text-gray-900 mb-3">Step 3: Ongoing Coaching</h3>
                <p className="text-gray-700 font-semibold mb-2">Weekly or Monthly • 30–60 minutes</p>
                <ul className="text-gray-700 space-y-2 ml-4">
                  <li>✓ Regular check-ins on progress and results</li>
                  <li>✓ Iterate on what's working, adjust what isn't</li>
                  <li>✓ Stay updated as new AI capabilities emerge</li>
                  <li>✓ Build confidence in your AI strategy</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Pricing */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
          <div className="mx-auto max-w-4xl">
            <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
              Pricing Plans
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              {/* Monthly Check-in */}
              <div className="rounded-lg border-2 border-gray-200 overflow-hidden hover:border-brand transition">
                <div className="bg-gray-50 p-6 border-b border-gray-200">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">Monthly Check-in</h3>
                  <p className="text-4xl font-bold text-brand mb-4">$250<span className="text-lg text-gray-600">/mo</span></p>
                </div>
                <div className="p-6 space-y-4">
                  <ul className="space-y-3">
                    <li className="flex gap-3 text-gray-700">
                      <span className="text-brand font-bold">✓</span>
                      <span>1 × 30-minute monthly session</span>
                    </li>
                    <li className="flex gap-3 text-gray-700">
                      <span className="text-brand font-bold">✓</span>
                      <span>Email support between sessions</span>
                    </li>
                    <li className="flex gap-3 text-gray-700">
                      <span className="text-brand font-bold">✓</span>
                      <span>Access to OpenClaw setup</span>
                    </li>
                    <li className="flex gap-3 text-gray-700">
                      <span className="text-brand font-bold">✓</span>
                      <span>Quarterly AI briefing</span>
                    </li>
                  </ul>
                  <div className="pt-4">
                    <CTAButton href="/contact" text="Get Started" variant="secondary" className="w-full justify-center" />
                  </div>
                </div>
              </div>

              {/* Weekly Coaching - Featured */}
              <div className="rounded-lg border-2 border-brand overflow-hidden transform md:scale-105">
                <div className="bg-brand text-white p-6 border-b border-brand">
                  <p className="text-sm font-semibold mb-2 opacity-90">Most Popular</p>
                  <h3 className="text-2xl font-bold mb-2">Weekly Coaching</h3>
                  <p className="text-4xl font-bold mb-4">$600<span className="text-lg opacity-90">/mo</span></p>
                </div>
                <div className="p-6 space-y-4 bg-white">
                  <ul className="space-y-3">
                    <li className="flex gap-3 text-gray-700">
                      <span className="text-brand font-bold">✓</span>
                      <span>4 × 30-min sessions OR 1 × 60-min weekly</span>
                    </li>
                    <li className="flex gap-3 text-gray-700">
                      <span className="text-brand font-bold">✓</span>
                      <span>Async support (email/Slack)</span>
                    </li>
                    <li className="flex gap-3 text-gray-700">
                      <span className="text-brand font-bold">✓</span>
                      <span>Custom OpenClaw configuration</span>
                    </li>
                    <li className="flex gap-3 text-gray-700">
                      <span className="text-brand font-bold">✓</span>
                      <span>Weekly AI updates + insights</span>
                    </li>
                    <li className="flex gap-3 text-gray-700">
                      <span className="text-brand font-bold">✓</span>
                      <span>Skill library & templates</span>
                    </li>
                  </ul>
                  <div className="pt-4">
                    <CTAButton href="/contact" text="Start Coaching" size="md" className="w-full justify-center" />
                  </div>
                </div>
              </div>

              {/* Intensive */}
              <div className="rounded-lg border-2 border-gray-200 overflow-hidden hover:border-brand transition">
                <div className="bg-gray-50 p-6 border-b border-gray-200">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">Intensive</h3>
                  <p className="text-4xl font-bold text-brand mb-4">$1,200<span className="text-lg text-gray-600">/mo</span></p>
                </div>
                <div className="p-6 space-y-4">
                  <ul className="space-y-3">
                    <li className="flex gap-3 text-gray-700">
                      <span className="text-brand font-bold">✓</span>
                      <span>2 × 60-minute weekly sessions</span>
                    </li>
                    <li className="flex gap-3 text-gray-700">
                      <span className="text-brand font-bold">✓</span>
                      <span>Priority async support</span>
                    </li>
                    <li className="flex gap-3 text-gray-700">
                      <span className="text-brand font-bold">✓</span>
                      <span>Custom OpenClaw build-out</span>
                    </li>
                    <li className="flex gap-3 text-gray-700">
                      <span className="text-brand font-bold">✓</span>
                      <span>Advanced workflow automation</span>
                    </li>
                    <li className="flex gap-3 text-gray-700">
                      <span className="text-brand font-bold">✓</span>
                      <span>Everything in Weekly tier</span>
                    </li>
                  </ul>
                  <div className="pt-4">
                    <CTAButton href="/contact" text="Book Call" variant="secondary" className="w-full justify-center" />
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-12 p-6 bg-blue-50 rounded-lg border border-blue-200 text-center">
              <p className="text-gray-700">
                <strong>All plans are month-to-month.</strong> Cancel anytime with one week notice. Want to try before committing? Book your free discovery call first.
              </p>
            </div>
          </div>
        </section>

        {/* What's Included */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
          <div className="mx-auto max-w-4xl">
            <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
              What's Included in Every Plan
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white p-6 rounded-lg border border-gray-200">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">📋 Personalized OpenClaw Setup</h3>
                <p className="text-gray-700">Your own AI operating system configured for your specific workflows, integrations, and goals.</p>
              </div>
              <div className="bg-white p-6 rounded-lg border border-gray-200">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">💬 One-on-One Strategy Sessions</h3>
                <p className="text-gray-700">Focused time dedicated to your specific challenges and opportunities.</p>
              </div>
              <div className="bg-white p-6 rounded-lg border border-gray-200">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">📚 Skill Library & Templates</h3>
                <p className="text-gray-700">Access to curated AI skills, workflows, and templates you can immediately apply.</p>
              </div>
              <div className="bg-white p-6 rounded-lg border border-gray-200">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">🔄 Quarterly AI Briefing</h3>
                <p className="text-gray-700">Updates on what changed in AI, how it affects you, and what to pay attention to.</p>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
          <div className="mx-auto max-w-3xl">
            <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
              Common Questions
            </h2>
            <div className="space-y-6">
              <details className="group border border-gray-300 rounded-lg p-6 hover:border-brand transition cursor-pointer">
                <summary className="flex justify-between items-center font-semibold text-gray-900 cursor-pointer select-none">
                  Do I need to be technical to use this?
                  <span className="text-2xl group-open:rotate-180 transition">▼</span>
                </summary>
                <p className="text-gray-700 mt-4">
                  No. We teach OpenClaw the way you'd learn any new tool—step by step. If you can use email and Google Docs, you can use this. We handle the technical setup; you focus on the strategy.
                </p>
              </details>
              <details className="group border border-gray-300 rounded-lg p-6 hover:border-brand transition cursor-pointer">
                <summary className="flex justify-between items-center font-semibold text-gray-900 cursor-pointer select-none">
                  Can I just use ChatGPT instead?
                  <span className="text-2xl group-open:rotate-180 transition">▼</span>
                </summary>
                <p className="text-gray-700 mt-4">
                  Maybe. ChatGPT is great for quick answers. But Vibe Coach is about building a long-term strategy, getting custom integration for your specific workflow, and having accountability to actually implement changes. It's the difference between a DIY project and having a coach.
                </p>
              </details>
              <details className="group border border-gray-300 rounded-lg p-6 hover:border-brand transition cursor-pointer">
                <summary className="flex justify-between items-center font-semibold text-gray-900 cursor-pointer select-none">
                  What if I get busy and can't commit to regular sessions?
                  <span className="text-2xl group-open:rotate-180 transition">▼</span>
                </summary>
                <p className="text-gray-700 mt-4">
                  No penalty. You can pause your subscription or switch to a lower tier anytime. We just ask for one week notice. That said, the magic happens with consistency—the people who get the most value are the ones who stick with it.
                </p>
              </details>
              <details className="group border border-gray-300 rounded-lg p-6 hover:border-brand transition cursor-pointer">
                <summary className="flex justify-between items-center font-semibold text-gray-900 cursor-pointer select-none">
                  How is this different from an AI course?
                  <span className="text-2xl group-open:rotate-180 transition">▼</span>
                </summary>
                <p className="text-gray-700 mt-4">
                  Courses teach theory. Vibe Coach is personalized coaching on *your* specific workflow. We're invested in your success, adapt to your feedback, and help you iterate as you learn. It's hands-on and ongoing, not passive and one-time.
                </p>
              </details>
              <details className="group border border-gray-300 rounded-lg p-6 hover:border-brand transition cursor-pointer">
                <summary className="flex justify-between items-center font-semibold text-gray-900 cursor-pointer select-none">
                  What if coaching isn't a fit for me?
                  <span className="text-2xl group-open:rotate-180 transition">▼</span>
                </summary>
                <p className="text-gray-700 mt-4">
                  We'll tell you during the discovery call. If we don't think it's a good fit, we'll be honest about it and suggest alternatives. No pressure, no sales tactics.
                </p>
              </details>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-brand">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Get Started?
            </h2>
            <p className="text-lg text-blue-100 mb-8">
              Book a free 30-minute discovery call. Let's talk about your goals and see if we're a fit.
            </p>
            <CTAButton
              href="/contact"
              text="Schedule Your Discovery Call"
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

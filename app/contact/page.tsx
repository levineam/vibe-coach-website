import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Contact & Book - Vibe Coach',
  description: 'Schedule your free discovery call with Vibe Coach or send us a message.',
}

export default function Contact() {
  return (
    <>
      <Header />
      <main>
        {/* Hero */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-[#1a1a1a] to-[#0a0a0a]">
          <div className="mx-auto max-w-4xl text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Let's Get Started
            </h1>
            <p className="text-xl text-gray-400">
              Book a free 30-minute discovery call or reach out with questions.
            </p>
          </div>
        </section>

        {/* Main Content */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-[#0a0a0a]">
          <div className="mx-auto max-w-6xl">
            <div className="grid md:grid-cols-2 gap-12">
              {/* Booking */}
              <div>
                <h2 className="text-3xl font-bold text-white mb-6">Book Your Discovery Call</h2>
                <div className="mb-8">
                  <h3 className="text-lg font-semibold text-white mb-3">What to expect:</h3>
                  <ul className="space-y-2 text-gray-400">
                    <li>30 minutes | Free | No obligation</li>
                    <li>We'll learn about your work and goals</li>
                    <li>You'll learn what coaching looks like</li>
                    <li>We'll determine if it's a fit</li>
                  </ul>
                </div>
                
                <div className="bg-[#1a1a1a] p-6 rounded-lg border border-[#2d2d2d] mb-8">
                  <p className="text-gray-400">
                    <strong className="text-white">Prefer email first?</strong> That's fine too. Scroll down to the contact form.
                  </p>
                </div>

                {/* Calendly Embed Placeholder */}
                <div className="border-2 border-dashed border-[#2d2d2d] p-8 rounded-lg text-center">
                  <div className="text-gray-500">
                    <p className="text-lg font-semibold mb-2">Calendly Calendar</p>
                    <p className="text-sm text-gray-500 mb-4">
                      Embed your Calendly link here. Andrew will add this before launch.
                    </p>
                    <p className="text-sm text-gray-600 italic">
                      For now, please email hello@vibecoach.com to schedule a call.
                    </p>
                  </div>
                </div>
              </div>

              {/* Contact Form */}
              <div>
                <h2 className="text-3xl font-bold text-white mb-6">Get in Touch</h2>
                <form className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-white mb-2">
                      Your Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      className="w-full px-4 py-3 rounded-lg border border-[#2d2d2d] bg-[#1a1a1a] text-white focus:border-brand focus:outline-none focus:ring-2 focus:ring-brand focus:ring-opacity-20 transition"
                      placeholder="John Doe"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-white mb-2">
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      className="w-full px-4 py-3 rounded-lg border border-[#2d2d2d] bg-[#1a1a1a] text-white focus:border-brand focus:outline-none focus:ring-2 focus:ring-brand focus:ring-opacity-20 transition"
                      placeholder="john@example.com"
                    />
                  </div>

                  <div>
                    <label htmlFor="type" className="block text-sm font-medium text-white mb-2">
                      What's this about?
                    </label>
                    <select
                      id="type"
                      name="type"
                      className="w-full px-4 py-3 rounded-lg border border-[#2d2d2d] bg-[#1a1a1a] text-white focus:border-brand focus:outline-none focus:ring-2 focus:ring-brand focus:ring-opacity-20 transition"
                    >
                      <option value="discovery">I want to schedule a discovery call</option>
                      <option value="pricing">I have questions about pricing</option>
                      <option value="partnership">I'm interested in a partnership</option>
                      <option value="other">Something else</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-white mb-2">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={5}
                      className="w-full px-4 py-3 rounded-lg border border-[#2d2d2d] bg-[#1a1a1a] text-white focus:border-brand focus:outline-none focus:ring-2 focus:ring-brand focus:ring-opacity-20 transition resize-none"
                      placeholder="Tell us about your workflow, goals, or questions..."
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full px-6 py-3 rounded-lg bg-brand text-[#0a0a0a] font-medium hover:bg-[#ea580c] transition"
                  >
                    Send Message
                  </button>
                </form>

                <p className="text-sm text-gray-500 mt-4 text-center">
                  We'll get back to you within 24 hours.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Location & Contact Info */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-[#1a1a1a]">
          <div className="mx-auto max-w-4xl">
            <h2 className="text-3xl font-bold text-white mb-12 text-center">
              Other Ways to Reach Us
            </h2>
            <div className="grid md:grid-cols-3 gap-8 text-center">
              <div>
                <h3 className="text-lg font-semibold text-white mb-2">Email</h3>
                <p className="text-gray-400">
                  <a href="mailto:hello@vibecoach.com" className="text-brand hover:text-[#ea580c] transition">
                    hello@vibecoach.com
                  </a>
                </p>
                <p className="text-sm text-gray-500 mt-2">We respond within 24 hours.</p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-white mb-2">Location</h3>
                <p className="text-gray-400">Philadelphia, PA</p>
                <p className="text-sm text-gray-500 mt-2">Available for in-person meetings.</p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-white mb-2">Let's Talk</h3>
                <p className="text-gray-400">
                  <a href="/contact" className="text-brand hover:text-[#ea580c] transition">
                    Book a discovery call
                  </a>
                </p>
                <p className="text-sm text-gray-500 mt-2">30 minutes, free, no obligation.</p>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-[#0a0a0a]">
          <div className="mx-auto max-w-3xl">
            <h2 className="text-3xl font-bold text-white mb-12 text-center">
              Frequently Asked Questions
            </h2>
            <div className="space-y-4">
              <details className="group border border-[#2d2d2d] rounded-lg p-6 hover:border-brand transition cursor-pointer">
                <summary className="flex justify-between items-center font-semibold text-white cursor-pointer select-none">
                  What happens after I book a discovery call?
                  <span className="text-2xl group-open:rotate-180 transition">▼</span>
                </summary>
                <p className="text-gray-400 mt-4">
                  We'll send you a confirmation with the Zoom link and a few prep questions to help us get the most out of our time together. On the call, we'll ask about your work, goals, and what you're hoping to accomplish. Then we'll share what coaching looks like and see if it's a fit.
                </p>
              </details>
              <details className="group border border-[#2d2d2d] rounded-lg p-6 hover:border-brand transition cursor-pointer">
                <summary className="flex justify-between items-center font-semibold text-white cursor-pointer select-none">
                  How do you handle privacy and data?
                  <span className="text-2xl group-open:rotate-180 transition">▼</span>
                </summary>
                <p className="text-gray-400 mt-4">
                  Your privacy is sacred. Any information you share during coaching is confidential. When we build your OpenClaw setup, you own all the code, data, and configurations. No vendor lock-in. We don't sell or share your data.
                </p>
              </details>
              <details className="group border border-[#2d2d2d] rounded-lg p-6 hover:border-brand transition cursor-pointer">
                <summary className="flex justify-between items-center font-semibold text-white cursor-pointer select-none">
                  What if I'm not sure if coaching is right for me?
                  <span className="text-2xl group-open:rotate-180 transition">▼</span>
                </summary>
                <p className="text-gray-400 mt-4">
                  That's what the discovery call is for! It's free and zero-pressure. We'll have a real conversation about your situation, and we'll be honest if coaching isn't a fit. No sales tactics, just clarity.
                </p>
              </details>
              <details className="group border border-[#2d2d2d] rounded-lg p-6 hover:border-brand transition cursor-pointer">
                <summary className="flex justify-between items-center font-semibold text-white cursor-pointer select-none">
                  Do you offer corporate/team coaching?
                  <span className="text-2xl group-open:rotate-180 transition">▼</span>
                </summary>
                <p className="text-gray-400 mt-4">
                  This offering is tailored for individuals. If you're looking for team or company-wide AI adoption consulting, that's a different scope. Let's discuss your situation in a discovery call.
                </p>
              </details>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}

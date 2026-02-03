import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'FAQ - Vibe Coach',
  description: 'Frequently asked questions about Vibe Coach, our coaching process, and how it works.',
}

export default function FAQ() {
  const faqs = [
    {
      category: 'Getting Started',
      questions: [
        {
          q: 'What is Vibe Coach?',
          a: 'Vibe Coach is personal, 1-on-1 AI coaching for knowledge workers, consultants, and entrepreneurs. We help you understand AI strategically, set up a personal AI system (OpenClaw), and stay ahead of the curve without overwhelm.'
        },
        {
          q: 'How do I get started?',
          a: 'Book a free 30-minute discovery call. We\'ll talk about your work, goals, and AI needs. If it seems like a fit, we\'ll move forward from there. If not, we\'ll be honest about it.'
        },
        {
          q: 'How much does it cost?',
          a: 'Plans range from $250/month (monthly check-in) to $1,200/month (intensive coaching). All month-to-month, cancel anytime with one week notice. Book a discovery call to discuss what\'s right for you.'
        }
      ]
    },
    {
      category: 'The Coaching Process',
      questions: [
        {
          q: 'What happens in a discovery call?',
          a: 'We spend 30 minutes getting to know each other. You\'ll share about your work, challenges, and goals. I\'ll explain what coaching looks like and we\'ll see if there\'s a good fit. No obligation.'
        },
        {
          q: 'How often do we meet?',
          a: 'It depends on your plan. Monthly Check-in = 1 session/month. Weekly Coaching = 4 sessions/month. Intensive = 8 sessions/month. Sessions are 30-60 minutes depending on your needs.'
        },
        {
          q: 'Can we meet in person?',
          a: 'Absolutely! I\'m based in Philadelphia and available for in-person sessions. Many people find meeting in person helps, especially for your first strategy session where I can see your actual workflows.'
        },
        {
          q: 'What if I need to pause or cancel?',
          a: 'No problem. Month-to-month, cancel anytime with one week notice. If you need to pause, we can do that too. We\'re not here to lock you in, just to help.'
        }
      ]
    },
    {
      category: 'About OpenClaw',
      questions: [
        {
          q: 'What is OpenClaw?',
          a: 'OpenClaw is your personal AI operating system—a dashboard and automation platform for building custom AI workflows. Unlike SaaS, you own your setup. It runs on your infrastructure or our managed tier.'
        },
        {
          q: 'Do I need to be technical?',
          a: 'No. We set up OpenClaw together and I guide you through it. If you can use email and Google Docs, you can use OpenClaw. The setup is technical, but you don\'t need coding skills.'
        },
        {
          q: 'Is OpenClaw included in my coaching plan?',
          a: 'Yes. Every plan includes a customized OpenClaw setup tailored to your workflows. It\'s not an extra cost.'
        },
        {
          q: 'Can I use OpenClaw without coaching?',
          a: 'You can try! But coaching helps you set it up properly and adapt it over time. Many people find OpenClaw most valuable when paired with regular coaching.'
        }
      ]
    },
    {
      category: 'Outcomes & Results',
      questions: [
        {
          q: 'How long does it take to see results?',
          a: 'Quick wins happen in the first 1-2 weeks (your first automation). Bigger results (5+ hours saved per week, real confidence) show up by month 2-3. It depends on your commitment.'
        },
        {
          q: 'What kind of results can I expect?',
          a: 'Most people save 5+ hours per week through smarter workflows, gain clarity on which AI tools are actually worth their time, and build confidence making AI-powered decisions. You also get a custom OpenClaw system you own.'
        },
        {
          q: 'What if it\'s not working?',
          a: 'Tell me. Coaching is supposed to help. If something isn\'t landing or we\'re not making progress, we adjust. If it\'s truly not a fit, we can end gracefully with one week notice.'
        }
      ]
    },
    {
      category: 'Alternatives & Comparisons',
      questions: [
        {
          q: 'Why not just use ChatGPT?',
          a: 'ChatGPT is great for quick answers. But it\'s reactive, not strategic. Coaching is about building a long-term system tailored to YOU, with accountability and ongoing iteration. Very different thing.'
        },
        {
          q: 'How is this different from an AI course?',
          a: 'Courses teach theory. Coaching is personalized, ongoing, and focused on YOUR specific workflows. You get 1-on-1 attention, custom OpenClaw setup, and accountability. Way different.'
        },
        {
          q: 'Is this like hiring a VA or consultant?',
          a: 'Not exactly. A VA does tasks for you. A consultant might implement AI tools. Coaching is about YOU learning and building your own AI system so you\'re self-sufficient.'
        }
      ]
    },
    {
      category: 'Policies & Details',
      questions: [
        {
          q: 'What\'s your cancellation policy?',
          a: 'Month-to-month contracts, no lock-in. Cancel anytime with one week notice. You don\'t pay for the next month. That\'s it.'
        },
        {
          q: 'What about privacy and my data?',
          a: 'Your privacy is sacred. Anything you share is confidential. Your OpenClaw setup is yours—you own the code, data, and integrations. No vendor lock-in. We don\'t sell or share your data.'
        },
        {
          q: 'Do you offer refunds?',
          a: 'If you\'re not satisfied in the first week of your first coaching session, we can issue a refund. Otherwise, month-to-month means you only pay for what you use. No long-term commitment.'
        },
        {
          q: 'Can I talk to a current client?',
          a: 'As Vibe Coach grows, we\'ll be able to provide testimonials and introduce you to past clients. For now, book a discovery call and let\'s talk. I\'m happy to answer any questions.'
        }
      ]
    }
  ]

  return (
    <>
      <Header />
      <main>
        {/* Hero */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-50 to-white">
          <div className="mx-auto max-w-4xl text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Frequently Asked Questions
            </h1>
            <p className="text-xl text-gray-700">
              Got questions? We've got answers.
            </p>
          </div>
        </section>

        {/* FAQs */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
          <div className="mx-auto max-w-3xl">
            <div className="space-y-12">
              {faqs.map((section, idx) => (
                <div key={idx}>
                  <h2 className="text-2xl font-bold text-gray-900 mb-6 pb-4 border-b-2 border-brand">
                    {section.category}
                  </h2>
                  <div className="space-y-4">
                    {section.questions.map((qa, qidx) => (
                      <details
                        key={qidx}
                        className="group border border-gray-300 rounded-lg p-6 hover:border-brand transition cursor-pointer"
                      >
                        <summary className="flex justify-between items-center font-semibold text-gray-900 cursor-pointer select-none">
                          {qa.q}
                          <span className="text-2xl group-open:rotate-180 transition">▼</span>
                        </summary>
                        <p className="text-gray-700 mt-4">{qa.a}</p>
                      </details>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-16 p-8 bg-blue-50 rounded-lg border border-blue-200 text-center">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Didn't find your answer?</h3>
              <p className="text-gray-700 mb-4">
                Email us at <a href="mailto:hello@vibecoach.com" className="text-brand hover:text-brand-dark transition">hello@vibecoach.com</a> or book a discovery call to ask directly.
              </p>
              <a
                href="/contact"
                className="inline-flex items-center justify-center px-6 py-3 rounded-lg bg-brand text-white font-medium hover:bg-brand-dark transition"
              >
                Get in Touch
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}

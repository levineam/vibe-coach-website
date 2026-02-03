# Vibe Coach Website

Personal AI coaching for Philadelphia knowledge workers.

## About

Vibe Coach is a personalized coaching service that helps professionals understand and strategically integrate AI into their work. The website is built with Next.js + Tailwind CSS and deployed on Vercel.

## Tech Stack

- **Framework:** Next.js 16 with TypeScript
- **Styling:** Tailwind CSS
- **Hosting:** Vercel (ready for deployment)
- **Deployment:** Connected to GitHub (Vercel auto-deploys on push to main)

## Pages

- **Homepage:** Hero, problem/solution, outcomes, CTA to book discovery call
- **Services:** Pricing plans, what's included, how it works
- **How It Works:** Step-by-step process explanation
- **About:** Mission, philosophy, coach background
- **Contact:** Booking form, discovery call CTA (Calendly embed placeholder)
- **FAQ:** Comprehensive FAQ for common questions

## Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for Production

```bash
npm run build
npm start
```

### Linting

```bash
npm run lint
```

## Configuration

### Environment Variables

Create a `.env.local` file for any environment-specific configurations (optional for now):

```bash
# Example
NEXT_PUBLIC_CALENDLY_URL=https://calendly.com/your-url
```

### SEO & Metadata

- Each page has optimized meta tags for SEO
- OpenGraph tags for social sharing
- Keywords targeting "AI coaching Philadelphia"

## Deployment

### Vercel Setup

1. Push code to GitHub
2. Connect repository to Vercel
3. Vercel will auto-deploy on every push to `main` branch
4. Domain configuration in Vercel dashboard

### Manual Deployment

```bash
npm install -g vercel
vercel
```

## Future Additions

- [ ] Calendly API integration (replace placeholder embed)
- [ ] Contact form backend (SendGrid or similar)
- [ ] Blog/resources section
- [ ] Customer testimonials (with real quotes)
- [ ] Analytics (Google Analytics 4, Vercel Analytics)
- [ ] Google Business Profile setup
- [ ] Email list signup integration

## Project Structure

```
├── app/
│   ├── page.tsx          # Homepage
│   ├── services/         # Services page
│   ├── about/            # About page
│   ├── how-it-works/     # How it works page
│   ├── contact/          # Contact/booking page
│   ├── faq/              # FAQ page
│   ├── layout.tsx        # Root layout
│   └── globals.css       # Global styles
├── components/
│   ├── Header.tsx        # Navigation header
│   ├── Footer.tsx        # Footer
│   └── CTAButton.tsx     # CTA button component
├── public/               # Static assets (add images here)
├── package.json          # Dependencies
├── tailwind.config.ts    # Tailwind configuration
├── tsconfig.json         # TypeScript configuration
└── next.config.ts        # Next.js configuration
```

## Content Notes

- **Copy:** All copy is directly from the Website Plan, optimized for clarity and emotional resonance
- **Placeholders:** Testimonials are placeholders (update with real customer quotes)
- **Images:** Add professional coach photos to `public/` folder and reference in components
- **Calendly:** Replace the placeholder embed in `/app/contact/page.tsx` with actual Calendly embed
- **Contact Form:** Currently a static form; wire up backend as needed

## Marketing Notes

- Primary CTA across all pages: "Book a Free Strategy Call"
- Philadelphia-specific language and emphasis on local presence
- Positioning: meaning over hype, personal attention, strategic (not reactive)
- Colors: Blue (trust, brand) and warm accents

## Support

For questions or issues, contact hello@vibecoach.com

---

Built with ❤️ for Philadelphia professionals. Vibe Coach - Personal AI Coaching.

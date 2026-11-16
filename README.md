# TITAN LIFTS — Next.js Website

A responsive multi-page elevator company website built with Next.js App Router, TypeScript and Tailwind CSS. The structure takes inspiration from the Urban Lifts reference (Home, About, Services, Products and Contact), with original TITAN LIFTS branding and copy.

## Pages

- `/` — Home, overview, product categories, services and enquiry CTAs
- `/about` — Company introduction, mission, vision and values
- `/services` — Installation, modernisation, AMC, service support and planning
- `/products` — Passenger, home, hospital, freight, capsule/glass, dumbwaiter and car elevators
- `/contact` — Contact information placeholders and enquiry form

## Run locally

Requires Node.js 18.18+ (Node 20+ recommended).

```bash
npm install
cp .env.example .env.local
npm run dev
```

Open http://localhost:3000.

## Before publishing

1. Replace the contact placeholders in `components/Footer.tsx` and `app/contact/page.tsx` with Titan Lifts' verified phone number, business email, office address and hours.
2. Set `NEXT_PUBLIC_CONTACT_EMAIL` in `.env.local` to the real enquiry inbox. The current starter form validates fields and opens the visitor's email application with a pre-filled enquiry. It does **not** store or submit leads to a server. For production, connect a secure form endpoint (for example, a server action/API route with an email provider) and add spam protection.
3. Replace the sample Unsplash photography with properly licensed Titan Lifts project and product photographs before launch.
4. Review every service claim and product category against the services Titan Lifts actually offers. No company history, certifications, customer counts, project statistics or guarantees have been invented.
5. Add the final approved logo artwork and favicon if the current text-and-symbol placeholder is to be replaced.
6. Add privacy policy, terms, analytics and SEO metadata as required.

## Build

```bash
npm run build
npm start
```

## Deploy

Push the project to GitHub and import it into Vercel. Add `NEXT_PUBLIC_CONTACT_EMAIL` in the Vercel project environment variables after confirming the real address.

## Brand system

- Deep navy: `#071D3B`
- Secondary blue: `#0C3C78`
- Silver: `#AEB8C4`
- White and pale blue-grey backgrounds

The site is designed to be mobile responsive and includes a mobile navigation menu, product/service cards, breadcrumb page headers and enquiry CTAs.

# Mzansi Match

A mobile-friendly web app built with Next.js, TypeScript, React 19, Tailwind CSS, Supabase, and Paystack.

## Stack

- **Framework:** Next.js 15 (React 19)
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Backend & Auth:** Supabase (PostgreSQL)
- **Payments:** Paystack
- **Hosting:** Vercel

## Features

- Mobile-first responsive design
- PWA support ("Add to Home Screen")
- Authentication via Supabase
- Payment processing with Paystack
- Real-time database updates

## Getting Started

### Prerequisites

- Node.js 18+ and npm/yarn/pnpm
- Supabase account
- Paystack account

### Installation

1. Clone the repo:
   ```bash
   git clone https://github.com/Tbose578/mzansi-match.git
   cd mzansi-match
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Set up environment variables:
   ```bash
   cp .env.local.example .env.local
   ```
   Then edit `.env.local` with your Supabase and Paystack keys.

4. Run the development server:
   ```bash
   npm run dev
   ```
   Open [http://localhost:3000](http://localhost:3000) in your browser.

## Deployment

### Deploy to Vercel

1. Push your code to GitHub (if not already done):
   ```bash
   git add .
   git commit -m "Initial commit"
   git push -u origin main
   ```

2. Go to [Vercel](https://vercel.com)
3. Click **"New Project"** and import this GitHub repository
4. Add your environment variables in the Vercel dashboard (from `.env.local.example`)
5. Deploy!

Your app will be live at: `https://mzansi-match.vercel.app`

### Share Your App

- Users can visit on desktop or mobile browsers
- On mobile: tap menu → **"Add to Home Screen"** to install as PWA
- Native app store support (Google Play / Apple App Store) coming later

## Development

- `npm run dev` — Start development server
- `npm run build` — Build for production
- `npm start` — Start production server
- `npm run lint` — Run ESLint

## Documentation

- [DEPLOY.md](./DEPLOY.md) — Detailed deployment steps
- [RUN.md](./RUN.md) — Local development setup

## License

MIT

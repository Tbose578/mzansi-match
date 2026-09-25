# Local Development Setup

## Prerequisites

- **Node.js:** 18.17 or later
- **npm/yarn/pnpm:** Latest version
- **Supabase account** (for backend/auth)
- **Paystack account** (for payments)

## Installation

### 1. Clone the Repository

```bash
git clone https://github.com/Tbose578/mzansi-match.git
cd mzansi-match
```

### 2. Install Dependencies

```bash
npm install
# or: yarn install / pnpm install
```

### 3. Set Up Environment Variables

Copy the example file:
```bash
cp .env.local.example .env.local
```

Edit `.env.local` and add your credentials:

```env
NEXT_PUBLIC_SUPABASE_URL=your_supabase_project_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
NEXT_PUBLIC_PAYSTACK_PUBLIC_KEY=your_paystack_public_key
PAYSTACK_SECRET_KEY=your_paystack_secret_key
```

**Where to find these:**
- **Supabase:** Dashboard → Settings → API
- **Paystack:** Dashboard → Settings → API Keys & Webhooks

### 4. Start Development Server

```bash
npm run dev
```

The app will run at: `http://localhost:3000`

---

## Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start dev server with hot reload |
| `npm run build` | Build for production |
| `npm start` | Start production server (after build) |
| `npm run lint` | Run ESLint |
| `npm run type-check` | Check TypeScript types |

---

## Project Structure

```
mzansi-match/
├── src/
│   ├── app/              # Next.js App Router pages
│   ├── components/       # React components
│   ├── lib/              # Utilities (auth, API, etc.)
│   ├── styles/           # Global styles
│   └── types/            # TypeScript types
├── public/               # Static files (images, favicon, etc.)
├── supabase/             # Supabase migrations & config
├── package.json          # Dependencies & scripts
├── next.config.ts        # Next.js configuration
├── tsconfig.json         # TypeScript configuration
└── tailwind.config.ts    # Tailwind CSS configuration
```

---

## Common Tasks

### Add a New Page

1. Create a file in `src/app/`:
   ```bash
   touch src/app/newpage/page.tsx
   ```

2. Add content:
   ```tsx
   export default function NewPage() {
     return <h1>New Page</h1>;
   }
   ```

3. Auto-routes to `/newpage`

### Connect to Supabase

```tsx
import { createClient } from '@supabase/supabase-js';

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
);

// Use in components
const { data, error } = await supabase
  .from('table_name')
  .select('*');
```

### Test on Mobile

1. Get your local IP:
   ```bash
   # On Mac/Linux:
   ipconfig getifaddr en0
   # On Windows:
   ipconfig
   ```

2. Visit on mobile: `http://YOUR_IP:3000`

3. Test PWA: tap menu → "Add to Home Screen"

---

## Debugging

### TypeScript Errors

```bash
npm run type-check
```

### ESLint Issues

```bash
npm run lint
```

### Check Node Modules

If something breaks unexpectedly:
```bash
rm -rf node_modules package-lock.json
npm install
npm run dev
```

---

## Deploying

See [DEPLOY.md](./DEPLOY.md) for steps to deploy to Vercel.

---

## Need Help?

- Check Next.js docs: https://nextjs.org/docs
- Supabase docs: https://supabase.com/docs
- Paystack docs: https://paystack.com/docs

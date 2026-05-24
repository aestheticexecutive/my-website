# Aesthetic Executive

Premium membership site for aesthetic practice owners and managers.

**Stack:** Next.js 16 · Clerk v7 · Stripe · Tailwind CSS v4

---

## Pages

| Route | Access |
|---|---|
| `/` | Public — Homepage |
| `/about` | Public — Brand mission & team |
| `/pricing` | Public — Subscribe via Stripe |
| `/sign-in` | Public — Clerk hosted sign-in |
| `/sign-up` | Public — Clerk hosted sign-up |
| `/members/dashboard` | Members only |
| `/members/templates` | Members only |
| `/members/webinars` | Members only |
| `/members/resources` | Members only |

---

## Setup

### 1. Clone and install

```bash
git clone https://github.com/YOUR_USERNAME/aesthetic-executive.git
cd aesthetic-executive
npm install
```

### 2. Configure environment variables

Copy the example file and fill in your keys:

```bash
cp .env.local.example .env.local
```

Open `.env.local` and set:

#### Clerk
1. Go to [dashboard.clerk.com](https://dashboard.clerk.com) and create a new application
2. Copy your **Publishable Key** and **Secret Key**
3. Set the sign-in/sign-up URLs:
   - Sign-in URL: `/sign-in`
   - Sign-up URL: `/sign-up`
   - After sign-in: `/members/dashboard`
   - After sign-up: `/pricing`

```
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=pk_test_...
CLERK_SECRET_KEY=sk_test_...
NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up
NEXT_PUBLIC_CLERK_AFTER_SIGN_IN_URL=/members/dashboard
NEXT_PUBLIC_CLERK_AFTER_SIGN_UP_URL=/pricing
```

#### Stripe
1. Go to [dashboard.stripe.com](https://dashboard.stripe.com) and create a product
2. Create a **recurring price** of $97/month
3. Copy the price ID (`price_...`)

```
STRIPE_SECRET_KEY=sk_test_...
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=pk_test_...
STRIPE_PRICE_ID=price_...
NEXT_PUBLIC_APP_URL=http://localhost:3000
```

#### Stripe webhook (local development)
Install the [Stripe CLI](https://stripe.com/docs/stripe-cli) and run:

```bash
stripe listen --forward-to localhost:3000/api/webhooks/stripe
```

Copy the webhook signing secret it prints and add it:

```
STRIPE_WEBHOOK_SECRET=whsec_...
```

### 3. Run development server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

---

## How subscription gating works

1. User signs up → Clerk creates account
2. User goes to `/pricing` → clicks Subscribe → Stripe Checkout opens
3. After successful payment → Stripe fires `checkout.session.completed` webhook
4. Webhook handler at `/api/webhooks/stripe` updates Clerk user's `publicMetadata`:
   ```json
   { "hasActiveSubscription": true }
   ```
5. `/members/layout.tsx` checks `user.publicMetadata.hasActiveSubscription` on every request
6. If not active → redirect to `/pricing`

Subscription cancellations and payment failures are handled via:
- `customer.subscription.deleted` → sets `hasActiveSubscription: false`
- `invoice.payment_failed` → sets `hasActiveSubscription: false`

---

## Deploy to Vercel

### 1. Push to GitHub

```bash
# After gh auth login:
gh repo create aesthetic-executive --public --source=. --remote=origin --push
```

### 2. Import in Vercel

1. Go to [vercel.com/new](https://vercel.com/new)
2. Import your GitHub repository
3. Add all environment variables from `.env.local`
4. For `NEXT_PUBLIC_APP_URL`, use your Vercel domain (e.g. `https://aesthetic-executive.vercel.app`)
5. Deploy

### 3. Set up Stripe webhook for production

In the Stripe dashboard → Webhooks → Add endpoint:
- URL: `https://your-domain.vercel.app/api/webhooks/stripe`
- Events: `checkout.session.completed`, `customer.subscription.updated`, `customer.subscription.deleted`, `invoice.payment_failed`

Copy the signing secret and update `STRIPE_WEBHOOK_SECRET` in Vercel environment variables.

---

## Known Next.js 16 note

The `middleware.ts` file shows a deprecation warning in the console. Next.js 16 renamed this convention to `proxy.ts`. The `npm run dev` script handles this automatically. To permanently fix it, rename `middleware.ts` to `proxy.ts` after running `npm run dev` once.

---

## Project structure

```
app/
  page.tsx                    # Homepage
  layout.tsx                  # Root layout (ClerkProvider + fonts)
  (public)/                   # Public pages layout group (header + footer)
    about/page.tsx
    pricing/page.tsx
  (auth)/                     # Auth pages (Clerk hosted UI)
    sign-in/[[...sign-in]]/
    sign-up/[[...sign-up]]/
  (members)/                  # Protected members area
    layout.tsx                # ← checks auth + active subscription
    dashboard/page.tsx
    templates/page.tsx
    webinars/page.tsx
    resources/page.tsx
  api/
    checkout/route.ts         # Creates Stripe checkout session
    webhooks/stripe/route.ts  # Handles Stripe events → updates Clerk metadata
    subscription-status/route.ts

components/
  layout/
    PublicHeader.tsx           # Public nav (Sign In / Get Started)
    MembersHeader.tsx          # Members nav (dark theme)
    Footer.tsx
  ui/
    Button.tsx
    Badge.tsx

lib/
  stripe.ts                   # Stripe client
  utils.ts                    # cn() helper

middleware.ts                 # Clerk auth — protects /members routes
```

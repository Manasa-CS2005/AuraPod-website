# AuraPod Website

AuraPod Website is a Next.js storefront for functional fragrance decor products.  
It includes a landing experience, product listing and detail pages, cart and checkout flow, and supporting informational pages.

## Tech Stack

- Next.js (App Router)
- React + TypeScript
- Tailwind CSS
- Radix UI components
- Vercel Analytics (production only)

## Features

- Marketing homepage with hero, product highlights, and "how it works" sections
- Shop and product pages for AuraPod units and refill offerings
- Cart context for add-to-cart and order flow pages
- Checkout, UPI payment (QR + manual UPI + transaction ID), and order confirmation screens
- Additional pages: About, Contact, Account, Login, Admin, Refill Wax

## Project Structure

- `app/` - Application routes and pages
- `components/` - Reusable UI and section components
- `lib/` - Shared utilities and cart state/context
- `hooks/` - Custom React hooks
- `public/` - Static assets (images, icons, etc.)
- `styles/` - Style-related files

## Getting Started

### 1) Install dependencies

```bash
npm install
```

### 2) Start development server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Available Scripts

- `npm run dev` - Run the app in development mode
- `npm run build` - Build the app for production
- `npm run start` - Start the production server
- `npm run lint` - Run lint checks

## Notes

- The root layout wraps the app with cart state provider.
- Vercel Analytics is enabled only in production builds.
- Current implementation does **not** use a backend database. Cart/order state is persisted in browser `localStorage`.
- Login, account, and admin pages are currently UI-only mock flows and are not connected to server-side authentication or DB records.

## Data Flow (Current)

- Login route currently redirects to account page without API/DB validation.
- Cart and checkout data is stored client-side using `localStorage`.
- Payment captures and stores UPI transaction ID in the current order object.
- Order confirmation reads from in-memory/localStorage order state.

# SpiceRoute Restaurant Management System

A frontend-only restaurant management dashboard for SpiceRoute, a casual restaurant offering dine-in, takeaway, and delivery orders.

The app uses supplied static data as its initial data source. Updates such as changing order status, editing menu items, and adjusting ingredient quantities are simulated in the frontend using local state or `localStorage`.

## Features

- **Dashboard:** Today's revenue, order count, average order value, active orders, order status summary, low-stock alerts, and recent orders.
- **Orders:** Search by order ID or customer, filter by status, view order details, and update order status.
- **Menu:** Browse and search items, filter by category, toggle availability, and add or edit menu items with validation.
- **Inventory:** Search and filter ingredients, view stock levels, update quantities, and identify low-stock items.
- **Order details:** View customer information, items, calculated totals, payment status, and order status timeline.
- **Responsive layout:** Sidebar on desktop and a usable layout on mobile.

## Routes

| Route | Description |
| --- | --- |
| `/dashboard` | Business overview and recent activity |
| `/orders` | Searchable, filterable order list |
| `/orders/[id]` | Details for an individual order |
| `/menu` | Menu items and availability |
| `/inventory` | Ingredient stock and reorder levels |

## Getting Started

### Requirements

- Node.js
- pnpm

### Install and run

```bash
pnpm install
pnpm dev
This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/pages/api-reference/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.js`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/pages/building-your-application/routing/api-routes) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.js`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/pages/building-your-application/routing/api-routes) instead of React pages.

This project uses [`next/font`](https://nextjs.org/docs/pages/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn-pages-router) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/pages/building-your-application/deploying) for more details.

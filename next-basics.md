# Next.js Basics

<br/>

## Table of Contents

## L1: Fundamentals (Beginner / Junior)
Focus: Core concepts, rendering strategies, and file-based routing.

* [Core Concepts](#core-concepts): What Next.js is, Pages vs App Router, hydration, and the SWC compiler.
* [Rendering Strategies](#rendering-strategies): SSG, SSR, ISR, RSC, streaming, and CSR.
* [Routing](#routing): File-based routing, route groups, parallel routes, layouts, and navigation hooks.

## L2: Intermediate (Junior-Mid / Developer)
Focus: Data fetching, App Router patterns, and performance optimization.

* [Data Fetching](#data-fetching): `fetch` caching, revalidation, request memoization, and client-side fetching with SWR / TanStack Query.
* [App Router (Next.js 13+)](#app-router-nextjs-13): Special files, Server Actions, `layout.tsx` vs `template.tsx`, error handling, and Server/Client boundaries.
* [Performance & Optimization](#performance--optimization): `next/image`, `next/font`, `<Script>` component, and code splitting with `next/dynamic`.

## L3: Advanced (Mid-Senior / Developer)
Focus: API routes, middleware, authentication, and deployment configuration.

* [API Routes & Server Actions](#api-routes--server-actions): Pages Router API routes, App Router Route Handlers, and comparison with Server Actions.
* [Middleware & Authentication](#middleware--authentication): Edge Middleware, `matcher` config, and Auth.js (NextAuth) integration.
* [Deployment & Configuration](#deployment--configuration): `next.config.js`, deployment targets, and Edge Runtime vs. Node.js Runtime.

## L4: Expert (Senior / Lead)
Focus: Advanced App Router features, testing, and security.

* [Advanced Topics](#advanced-topics): `generateStaticParams`, `generateMetadata`, fetch cache, `unstable_cache`, `use cache`, Turbopack, `useActionState`, and `useOptimistic`.
* [Testing](#testing): Unit testing with Jest + RTL, Route Handler and Server Action testing, Playwright E2E, and mocking `next/navigation`.
* [Security & Best Practices](#security--best-practices): Security headers, environment variables, CORS, rate limiting, RBAC, and XSS/CSRF prevention.

## L5: Enterprise (Architect / Staff Engineer)
Focus: Internationalization, scalability patterns, and production-grade architecture.

* [Internationalization (i18n)](#internationalization-i18n): `next-intl` setup, locale routing via Middleware, and `hreflang` SEO metadata.
* [Enterprise & Scalability Patterns](#enterprise--scalability-patterns): Four caching layers, PPR, serverless DB connections, project structure, URL state management, redirects/rewrites, and bundle analysis.

<br/>

## Core Concepts

<br>

## Q. What is Next.js and how does it differ from plain React?

Next.js is a production-ready framework built on top of React. While React provides the UI components, Next.js provides the architecture, routing, and optimization tools needed to build full-stack web applications.

Next.js is a React framework built on top of React that provides:

- **File-based routing** — no need for React Router. Every file inside the `app/` (or `pages/`) directory automatically becomes a route. Nested folders create nested routes, and special files like `layout.tsx`, `page.tsx`, and `loading.tsx` define the UI structure.

- **Server-side rendering (SSR)** and **Static Site Generation (SSG)** out of the box — SSR generates HTML on the server per request for always-fresh content, while SSG pre-builds HTML at compile time for maximum performance. Next.js lets you choose the right strategy per page.

- **API routes** to build backend endpoints in the same project — Files inside `app/api/` export HTTP handler functions (`GET`, `POST`, etc.), allowing you to write backend logic without a separate server. Ideal for form submissions, webhooks, and database queries.

- **Automatic code splitting** per page — Next.js only sends the JavaScript needed for the current page. Users don't download code for routes they haven't visited, resulting in faster initial load times.

- **Built-in image optimization** via `next/image` — The `<Image>` component automatically resizes, compresses, converts to modern formats (WebP/AVIF), and lazy-loads images. This eliminates the manual work of optimizing assets for different screen sizes.

- **Font optimization** via `next/font` — Automatically self-hosts Google Fonts and custom fonts at build time, eliminating external network requests. It also applies CSS `size-adjust` to prevent layout shift (CLS) during font loading.

Plain React is a UI library that only handles the view layer. Next.js adds the full-stack capabilities on top of it.

<div align="right">
    <b><a href="#table-of-contents">↥ back to top</a></b>
</div>

## Q. What are the main rendering strategies in Next.js?

Next.js categorizes rendering into distinct strategies optimized for different use cases

* **Static Site Generation (SSG)**: HTML is pre-built at deployment time. The server reuses this cached HTML for every visitor, making it fast and optimal for public marketing pages or blogs.

* **Incremental Static Regeneration (ISR)**: An enhancement to SSG that allows you to update static pages after the build without redeploying the whole app. You supply a revalidation interval, and Next.js rebuilds the page in the background when traffic hits it.

* **Server-Side Rendering (SSR / Dynamic Rendering)**: HTML is generated dynamically on the server for every incoming request. This is ideal for personalized pages, real-time dashboards, or content dependent on user cookies.

* **Client-Side Rendering (CSR)**: The standard React approach where the server leaves rendering entirely to the browser. Next.js implements this when you opt out of server features using the "`use client`" directive.

**Example:**

```js
// SSG — cached forever
fetch(url, { cache: 'force-cache' })

// SSR — no cache
fetch(url, { cache: 'no-store' })

// ISR — revalidate every 60s
fetch(url, { next: { revalidate: 60 } })
```

**Note**: Server Components are the default; add `'use client'` only when you need interactivity or browser APIs.


<div align="right">
    <b><a href="#table-of-contents">↥ back to top</a></b>
</div>

## Q. What is the difference between the Pages Router and the App Router?

| Feature | Pages Router | App Router (Next.js 13+) |
|---|---|---|
| Directory | `pages/` | `app/` |
| Default component type | Client Component | Server Component |
| Layouts | `_app.tsx` | Nested `layout.tsx` |
| Data fetching | `getServerSideProps`, `getStaticProps` | `async/await` in Server Components |
| Loading states | Manual | `loading.tsx` convention |
| Error handling | `_error.tsx` | `error.tsx` per segment |
| Streaming | Not native | Native via Suspense |

<div align="right">
    <b><a href="#table-of-contents">↥ back to top</a></b>
</div>

## Q. What is `_app.tsx` in the Pages Router?

`_app.tsx` is the custom App component that wraps all pages. It is used to:

- Persist layout between page changes
- Keep state when navigating
- Inject global CSS
- Add global context providers

**Example:**

```tsx
// pages/_app.tsx
import type { AppProps } from 'next/app';
import '../styles/globals.css';

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
```

<div align="right">
    <b><a href="#table-of-contents">↥ back to top</a></b>
</div>

## Q. What is `_document.tsx` and when do you use it?

`_document.tsx` customizes the HTML document shell (`<html>`, `<head>`, `<body>`). It only renders on the server and is used for:

- Adding custom `lang` attribute
- Adding third-party scripts or meta tags
- Injecting server-rendered CSS-in-JS styles (e.g., styled-components)

**Example:**

```tsx
// pages/_document.tsx
import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
```

<div align="right">
    <b><a href="#table-of-contents">↥ back to top</a></b>
</div>

## Q. What is hydration in Next.js?

Hydration is the process where React attaches event listeners to server-rendered HTML on the client, making it interactive. The server sends static HTML and React "hydrates" it by reconciling the server HTML with the client-side component tree.

**Hydration mismatch errors** occur when server and client render different content (e.g., `Date.now()`, `Math.random()`, browser-only APIs).

**Avoiding hydration errors:**

```tsx
// Option 1: Render client-only content after mount
'use client';
import { useState, useEffect } from 'react';

export default function ClientOnly({ children }: { children: React.ReactNode }) {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  return mounted ? <>{children}</> : null;
}
```

```tsx
// Option 2: Dynamic import with ssr: false
import dynamic from 'next/dynamic';

const BrowserOnlyMap = dynamic(() => import('./Map'), { ssr: false });
```

```tsx
// Option 3: Suppress warning for intentionally different content (use sparingly)
<time dateTime={serverTime} suppressHydrationWarning>
  {clientTime}
</time>
```

<div align="right">
    <b><a href="#table-of-contents">↥ back to top</a></b>
</div>

## Q. What is the Next.js SWC compiler?

Next.js uses **SWC** (Speedy Web Compiler), a Rust-based compiler that replaces Babel for transpilation and Terser for minification. It is enabled by default since Next.js 12.

**Benefits over Babel:**
- **~17× faster** local builds
- **~5× faster** production builds
- Native support for TypeScript, JSX, and modern JS
- React Fast Refresh out of the box

If a `babel.config.js` is present, Next.js falls back to Babel automatically. You can configure SWC transforms in `next.config.js`:

**Example:**

```js
// next.config.js
module.exports = {
  compiler: {
    // Remove console.log in production
    removeConsole: process.env.NODE_ENV === 'production',
    // Enable styled-components support
    styledComponents: true,
    // Strip data-testid attributes from production builds
    reactRemoveProperties: { properties: ['^data-testid$'] },
  },
};
```

<div align="right">
    <b><a href="#table-of-contents">↥ back to top</a></b>
</div>

## Q. How do you create a new Next.js project?

Use `create-next-app`, the official CLI scaffolding tool:

```bash
npx create-next-app@latest my-app
```

The interactive prompts let you configure:

- TypeScript support
- ESLint
- Tailwind CSS
- `src/` directory
- App Router or Pages Router
- Import alias (default `@/*`)

**Non-interactive (with flags):**

```bash
npx create-next-app@latest my-app \
  --typescript \
  --tailwind \
  --eslint \
  --app \
  --src-dir \
  --import-alias "@/*"
```

Start the dev server:

```bash
cd my-app
npm run dev   # http://localhost:3000
```

<div align="right">
    <b><a href="#table-of-contents">↥ back to top</a></b>
</div>

## Q. What is the folder structure of a Next.js project?

**App Router (recommended):**

```
my-app/
  app/                    # Routes, layouts, and special files
    layout.tsx            # Root layout — must include <html> and <body>
    page.tsx              # Home route (/)
    globals.css
  components/             # Shared UI components
  lib/                    # Utilities and helpers
  public/                 # Static assets served at /
  next.config.js          # Next.js configuration
  tsconfig.json
  package.json
```

**With `src/` directory (optional but common):**

```
my-app/
  src/
    app/
    components/
    lib/
  public/
  next.config.js
```

**Pages Router:**

```
my-app/
  pages/                  # Each file is a route
    _app.tsx              # Custom App wrapper
    _document.tsx         # Custom HTML document
    index.tsx             # Home route (/)
    api/                  # API routes
  public/
  styles/
  next.config.js
```

**Key rules:**
- Files inside `app/` are **Server Components by default**
- `public/` files are served at the root URL (`public/logo.png` → `/logo.png`)
- `app/layout.tsx` is **required** and must define `<html>` and `<body>` tags

<div align="right">
    <b><a href="#table-of-contents">↥ back to top</a></b>
</div>

## Rendering Strategies

<br>

## Q. How does Static Site Generation (SSG) work in the Pages Router?

Use `getStaticProps` to fetch data at build time. The page is pre-rendered as static HTML.

```tsx
export async function getStaticProps() {
  const res = await fetch('https://api.example.com/posts');
  const posts = await res.json();

  return {
    props: { posts },
  };
}

export default function Blog({ posts }) {
  return <ul>{posts.map(p => <li key={p.id}>{p.title}</li>)}</ul>;
}
```

For dynamic routes, combine with `getStaticPaths`:

```tsx
export async function getStaticPaths() {
  const res = await fetch('https://api.example.com/posts');
  const posts = await res.json();

  return {
    paths: posts.map(p => ({ params: { id: String(p.id) } })),
    fallback: false, // 404 for unknown paths
  };
}
```

<div align="right">
    <b><a href="#table-of-contents">↥ back to top</a></b>
</div>

## Q. How does Server-Side Rendering (SSR) work?

Use `getServerSideProps` to fetch data on every request.

```tsx
export async function getServerSideProps(context) {
  const { params, req, res, query } = context;
  const data = await fetchData(params.id);

  return { props: { data } };
}
```

**When to use SSR:**
- Data changes frequently and must be fresh
- Page requires authentication context
- SEO is needed but data is user-specific

<div align="right">
    <b><a href="#table-of-contents">↥ back to top</a></b>
</div>

## Q. What is Incremental Static Regeneration (ISR)?

ISR allows statically generated pages to be revalidated in the background after a set interval without rebuilding the entire site.

```tsx
export async function getStaticProps() {
  const data = await fetchData();

  return {
    props: { data },
    revalidate: 60, // Regenerate every 60 seconds
  };
}
```

**On-demand ISR** (Next.js 12.2+):

```ts
// pages/api/revalidate.ts
export default async function handler(req, res) {
  await res.revalidate('/blog/my-post');
  return res.json({ revalidated: true });
}
```

<div align="right">
    <b><a href="#table-of-contents">↥ back to top</a></b>
</div>

## Q. How do React Server Components (RSC) work in the App Router?

In the App Router, **all components are Server Components by default**. They:

- Run only on the server
- Can directly `await` database queries or API calls
- Cannot use hooks or browser APIs
- Reduce client-side JavaScript

**Example:**

```tsx
// app/posts/page.tsx — Server Component (no 'use client')
async function PostsPage() {
  const posts = await db.post.findMany(); // Direct DB access
  return <ul>{posts.map(p => <li key={p.id}>{p.title}</li>)}</ul>;
}
```

To opt into client-side interactivity, add `'use client'` at the top:

```tsx
'use client';
import { useState } from 'react';

export default function Counter() {
  const [count, setCount] = useState(0);
  return <button onClick={() => setCount(c => c + 1)}>{count}</button>;
}
```

<div align="right">
    <b><a href="#table-of-contents">↥ back to top</a></b>
</div>

## Q. What is streaming and how does Next.js support it?

Streaming lets the server send HTML chunks progressively to the browser using HTTP chunked transfer. This improves Time to First Byte (TTFB) and perceived performance.

Next.js App Router supports streaming via:

- **`loading.tsx`** — automatic Suspense boundary for a route segment
- **`<Suspense>`** — explicit boundary for async components

```tsx
// app/dashboard/page.tsx
import { Suspense } from 'react';
import Analytics from './Analytics';

export default function Dashboard() {
  return (
    <div>
      <h1>Dashboard</h1>
      <Suspense fallback={<p>Loading analytics...</p>}>
        <Analytics /> {/* Streamed separately */}
      </Suspense>
    </div>
  );
}
```

<div align="right">
    <b><a href="#table-of-contents">↥ back to top</a></b>
</div>

## Q. What is Client-Side Rendering (CSR) in Next.js?

In CSR, the page is rendered entirely in the browser. The server sends a minimal HTML shell and React fetches data and renders the UI on the client.

**When to use CSR:**
- Highly interactive dashboards that don\'t need SEO
- Pages behind authentication with user-specific real-time data
- Components that rely on browser-only APIs

Mark a component `'use client'` and fetch with `useEffect` or a data-fetching library:

```tsx
'use client';
import useSWR from 'swr';

const fetcher = (url: string) => fetch(url).then(r => r.json());

export default function Dashboard() {
  const { data, error, isLoading } = useSWR('/api/stats', fetcher);

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Failed to load</p>;
  return <pre>{JSON.stringify(data, null, 2)}</pre>;
}
```

**CSR vs Server Components:**

| | CSR (`'use client'`) | Server Components |
|---|---|---|
| Renders at | Browser | Server |
| Can use hooks | Yes | No |
| SEO | Limited | Full |
| Bundle size | Adds to JS bundle | Zero client JS |

> Prefer Server Components for initial data loads. Use CSR only for interactive or user-specific post-hydration data.

<div align="right">
    <b><a href="#table-of-contents">↥ back to top</a></b>
</div>

## Q. What is the difference between static and dynamic rendering in the App Router?

| | Static Rendering | Dynamic Rendering |
|---|---|---|
| When | Build time | Per request |
| Cached | Yes (CDN / server) | No |
| Use case | Blog, marketing pages | Dashboards, user-specific pages |

**Static rendering** (default): The route is pre-rendered at build time and can be served from a CDN. Equivalent to SSG.

**Dynamic rendering** is triggered automatically when a route uses any of the following:

- `cookies()` or `headers()` — values that vary per request
- `searchParams` prop — URL query string
- `fetch` with `{ cache: 'no-store' }` — uncached data
- `noStore()` from `next/cache`

**Explicit control via route segment config:**

```ts
// Force dynamic rendering for the entire route (like getServerSideProps)
export const dynamic = 'force-dynamic';

// Force static rendering — throws if dynamic APIs are used
export const dynamic = 'force-static';

// ISR-style time-based revalidation (seconds)
export const revalidate = 60;

// Opt out of caching for a specific fetch inside a Server Component
import { unstable_noStore as noStore } from 'next/cache';
noStore();
```

<div align="right">
    <b><a href="#table-of-contents">↥ back to top</a></b>
</div>

## Routing

<br>

## Q. How does file-based routing work in Next.js?

**Pages Router:**

| File | Route |
|---|---|
| `pages/index.tsx` | `/` |
| `pages/about.tsx` | `/about` |
| `pages/blog/[id].tsx` | `/blog/:id` |
| `pages/[...slug].tsx` | `/a/b/c` (catch-all) |
| `pages/[[...slug]].tsx` | `/` and `/a/b` (optional catch-all) |

**App Router:**

| File | Route |
|---|---|
| `app/page.tsx` | `/` |
| `app/about/page.tsx` | `/about` |
| `app/blog/[id]/page.tsx` | `/blog/:id` |
| `app/[...slug]/page.tsx` | Catch-all |

<div align="right">
    <b><a href="#table-of-contents">↥ back to top</a></b>
</div>

## Q. What are route groups and parallel routes in the App Router?

**Route Groups** — use `(folderName)` to organize routes without affecting the URL:

```
app/
  (marketing)/
    about/page.tsx    → /about
    contact/page.tsx  → /contact
  (app)/
    dashboard/page.tsx → /dashboard
```

**Parallel Routes** — use `@folder` to render multiple pages in the same layout simultaneously:

```
app/
  layout.tsx
  @team/page.tsx
  @analytics/page.tsx
```

```tsx
// app/layout.tsx
export default function Layout({ children, team, analytics }) {
  return (
    <>
      {children}
      {team}
      {analytics}
    </>
  );
}
```

<div align="right">
    <b><a href="#table-of-contents">↥ back to top</a></b>
</div>

## Q. What are intercepting routes?

Intercepting routes allow you to display a route within the current layout while keeping the URL of another route — commonly used for modals.

```
app/
  feed/page.tsx
  (..)photo/[id]/page.tsx  ← intercepts /photo/:id when navigated from /feed
```

Convention:

| Syntax | Intercepts from |
|---|---|
| `(.)` | Same level |
| `(..)` | One level up |
| `(..)(..)` | Two levels up |
| `(...)` | Root |

<div align="right">
    <b><a href="#table-of-contents">↥ back to top</a></b>
</div>

## Q. How do you programmatically navigate in Next.js?

**App Router:**

```tsx
'use client';
import { useRouter } from 'next/navigation';

export default function MyButton() {
  const router = useRouter();
  return <button onClick={() => router.push('/dashboard')}>Go</button>;
}
```

**Pages Router:**

```tsx
import { useRouter } from 'next/router';

const router = useRouter();
router.push('/about');
router.replace('/login');
router.back();
```

**Link component (both routers):**

```tsx
import Link from 'next/link';
<Link href="/about">About</Link>
```

<div align="right">
    <b><a href="#table-of-contents">↥ back to top</a></b>
</div>

## Q. What is the `usePathname`, `useSearchParams`, and `useParams` hook?

These are App Router hooks (all require `'use client'`):

```tsx
'use client';
import { usePathname, useSearchParams, useParams } from 'next/navigation';

function MyComponent() {
  const pathname = usePathname();     // e.g. '/dashboard/settings'
  const searchParams = useSearchParams(); // URLSearchParams object
  const params = useParams();          // e.g. { id: '42' }

  const query = searchParams.get('q');
}
```

<div align="right">
    <b><a href="#table-of-contents">↥ back to top</a></b>
</div>

## Q. How do nested layouts work in the App Router?

Layouts wrap their child segments and persist across navigations without re-rendering. Place a `layout.tsx` inside any subdirectory to create a nested layout:

```
app/
  layout.tsx           ← Root layout (must include <html> and <body>)
  dashboard/
    layout.tsx         ← Dashboard layout (e.g. sidebar)
    page.tsx           ← /dashboard
    settings/
      layout.tsx       ← Settings layout (e.g. settings nav)
      page.tsx         ← /dashboard/settings
```

```tsx
// app/dashboard/layout.tsx
export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex">
      <Sidebar />
      <main className="flex-1">{children}</main>
    </div>
  );
}
```

**Key behaviors:**
- Layouts **preserve state** when navigating between child routes — they do not unmount
- The root `layout.tsx` **must** define `<html>` and `<body>` tags
- Use `useSelectedLayoutSegment()` in a Client Component layout to highlight the active child segment

<div align="right">
    <b><a href="#table-of-contents">↥ back to top</a></b>
</div>

## Q. How does `<Link>` prefetching work in Next.js?

`<Link>` automatically **prefetches** the linked route in the background when it enters the viewport, making subsequent navigations feel instantaneous.

**App Router behavior:**
- Prefetches the static parts of the route (shared layouts + loading UI)
- Dynamic segments are **not** prefetched by default
- Only active in production builds

**Pages Router behavior:**
- Prefetches the full page for static routes
- For dynamic/SSR routes, only the JSON data is prefetched

```tsx
import Link from 'next/link';

// Prefetching enabled by default
<Link href="/about">About</Link>

// Disable prefetching for rarely-visited or heavy routes
<Link href="/reports" prefetch={false}>Reports</Link>
```

**Programmatic prefetch:**

```tsx
'use client';
import { useRouter } from 'next/navigation';

export default function ProductHover({ id }: { id: string }) {
  const router = useRouter();
  return (
    <div onMouseEnter={() => router.prefetch(`/product/${id}`)}>
      Hover to prefetch
    </div>
  );
}
```

<div align="right">
    <b><a href="#table-of-contents">↥ back to top</a></b>
</div>

## Q. How do you create dynamic routes in Next.js?

**App Router** — use bracket syntax in folder names:

| Folder | Route | Type |
|---|---|---|
| `app/blog/[slug]/page.tsx` | `/blog/:slug` | Single dynamic segment |
| `app/docs/[...slug]/page.tsx` | `/docs/a/b/c` | Catch-all |
| `app/[[...slug]]/page.tsx` | `/` and `/a/b` | Optional catch-all |

```tsx
// app/blog/[slug]/page.tsx
export default function PostPage({ params }: { params: { slug: string } }) {
  return <h1>Post: {params.slug}</h1>;
}
```

> **Next.js 15+:** `params` is a **Promise** and must be awaited:

```tsx
// Next.js 15+
export default async function PostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  return <h1>Post: {slug}</h1>;
}
```

Generate static paths at build time with `generateStaticParams`:

```tsx
export async function generateStaticParams() {
  const posts = await fetch('/api/posts').then(r => r.json());
  return posts.map((post) => ({ slug: post.slug }));
}
```

**Pages Router:**

```tsx
// pages/blog/[slug].tsx
import { useRouter } from 'next/router';

export default function PostPage() {
  const { slug } = useRouter().query;
  return <h1>Post: {slug}</h1>;
}
```

<div align="right">
    <b><a href="#table-of-contents">↥ back to top</a></b>
</div>

## Q. What is `loading.tsx` and how does it work?

`loading.tsx` creates an **automatic Suspense boundary** around a route segment\'s `page.tsx`. The fallback UI is shown immediately while the segment streams in from the server, eliminating the need for a blank screen during data fetching.

```
app/
  dashboard/
    loading.tsx    ← shown while dashboard/page.tsx is fetching data
    page.tsx
    settings/
      loading.tsx  ← shown while settings/page.tsx is fetching data
      page.tsx
```

```tsx
// app/dashboard/loading.tsx
export default function Loading() {
  return <div className="skeleton-ui">Loading dashboard...</div>;
}
```

**How it differs from a manual `<Suspense>` wrapper:**

| | `loading.tsx` | `<Suspense>` |
|---|---|---|
| Scope | Entire route segment | Any async component |
| Setup | File convention — no code changes needed | Must wrap component in JSX |
| Navigation | Triggered on route transition | Triggered on component render |

`loading.tsx` is essentially equivalent to wrapping the entire `page.tsx` in a Suspense boundary automatically. For more granular control within a page, use `<Suspense>` directly.

<div align="right">
    <b><a href="#table-of-contents">↥ back to top</a></b>
</div>

## Data Fetching

<br>

## Q. How do you fetch data in the App Router?

Fetch data directly in Server Components using `async/await`. Next.js extends the native `fetch` API with caching options:

```tsx
// Cached by default (like getStaticProps)
const data = await fetch('https://api.example.com/data');

// No cache (like getServerSideProps)
const data = await fetch('https://api.example.com/data', {
  cache: 'no-store',
});

// Revalidate every 60 seconds (like ISR)
const data = await fetch('https://api.example.com/data', {
  next: { revalidate: 60 },
});
```

<div align="right">
    <b><a href="#table-of-contents">↥ back to top</a></b>
</div>

## Q. What is `revalidatePath` and `revalidateTag`?

These are App Router cache invalidation utilities used inside Server Actions or Route Handlers.

```ts
import { revalidatePath, revalidateTag } from 'next/cache';

// Invalidate a specific path
revalidatePath('/blog/my-post');

// Invalidate all fetches tagged with 'posts'
revalidateTag('posts');
```

Tag a fetch:

```ts
const data = await fetch('/api/posts', { next: { tags: ['posts'] } });
```

<div align="right">
    <b><a href="#table-of-contents">↥ back to top</a></b>
</div>

## Q. How does request memoization work in Next.js?

Within a single render tree, Next.js automatically deduplicates `fetch` calls with the same URL and options. This means you can safely call the same fetch in multiple Server Components without making duplicate network requests.

```tsx
// Both components call the same URL — only ONE network request is made
async function ComponentA() {
  const user = await fetch('/api/user').then(r => r.json());
}

async function ComponentB() {
  const user = await fetch('/api/user').then(r => r.json()); // Deduplicated
}
```

<div align="right">
    <b><a href="#table-of-contents">↥ back to top</a></b>
</div>

## Q. How do you fetch data on the client side in Next.js?

For data that must be fetched after hydration (user-specific, real-time), use **SWR** or **TanStack Query** inside Client Components.

**SWR** (by Vercel — lightweight, built for Next.js):

```bash
npm install swr
```

```tsx
'use client';
import useSWR from 'swr';

const fetcher = (url: string) => fetch(url).then(r => r.json());

export default function UserProfile() {
  const { data, error, isLoading, mutate } = useSWR('/api/user', fetcher, {
    refreshInterval: 30_000, // Revalidate every 30 seconds
  });

  if (isLoading) return <Skeleton />;
  if (error) return <p>Failed to load</p>;
  return (
    <div>
      <p>{data.name}</p>
      <button onClick={() => mutate()}>Refresh</button>
    </div>
  );
}
```

**TanStack Query** (full-featured, ideal for complex apps):

```bash
npm install @tanstack/react-query
```

```tsx
'use client';
import { useQuery } from '@tanstack/react-query';

export default function Posts() {
  const { data, isPending, error } = useQuery({
    queryKey: ['posts'],
    queryFn: () => fetch('/api/posts').then(r => r.json()),
    staleTime: 60_000, // Data considered fresh for 1 minute
  });

  if (isPending) return <Spinner />;
  if (error) return <p>Failed to load posts</p>;
  return <ul>{data.map(p => <li key={p.id}>{p.title}</li>)}</ul>;
}
```

> **Best practice:** Fetch initial data in Server Components and pass it as props or use it as a prefetched cache seed. Reserve client-side fetching for mutations and post-hydration updates.

<div align="right">
    <b><a href="#table-of-contents">↥ back to top</a></b>
</div>

## Q. How do you fetch data in parallel vs sequentially in Server Components?

By default, `await` inside a Server Component fetches **sequentially** — each call waits for the previous one. Use `Promise.all` to run independent requests in parallel.

**Sequential (slower — waterfall):**

```tsx
async function Page({ params }: { params: { id: string } }) {
  const user  = await fetchUser(params.id);   // starts after previous resolves
  const posts = await fetchPosts(params.id);  // total: ~400ms
}
```

**Parallel with `Promise.all` (faster):**

```tsx
async function Page({ params }: { params: { id: string } }) {
  const [user, posts] = await Promise.all([
    fetchUser(params.id),   // both start at the same time
    fetchPosts(params.id),  // total: ~200ms
  ]);
}
```

**Starting requests early to avoid sub-component waterfalls:**

```tsx
// app/dashboard/page.tsx
import UserCard from './UserCard';
import PostList from './PostList';

export default async function Page({ params }) {
  // Kick off both fetches before passing to child components
  const userPromise  = fetchUser(params.id);
  const postsPromise = fetchPosts(params.id);

  return (
    <>
      <UserCard  userPromise={userPromise} />
      <PostList postsPromise={postsPromise} />
    </>
  );
}
```

> Use `Promise.all` as the default pattern for **independent** data. Only fetch sequentially when one request depends on the result of another.

<div align="right">
    <b><a href="#table-of-contents">↥ back to top</a></b>
</div>

## App Router (Next.js 13+)

<br>

## Q. What are the special files in the App Router?

| File | Purpose |
|---|---|
| `page.tsx` | Unique UI for a route, makes it publicly accessible |
| `layout.tsx` | Shared UI wrapping the segment and its children |
| `loading.tsx` | Loading UI (automatic Suspense boundary) |
| `error.tsx` | Error UI (automatic Error Boundary) — must be a Client Component |
| `not-found.tsx` | Rendered by `notFound()` or unmatched routes |
| `route.ts` | API endpoint (Route Handler) |
| `template.tsx` | Like layout but re-renders on every navigation |
| `default.tsx` | Fallback for parallel routes |

<div align="right">
    <b><a href="#table-of-contents">↥ back to top</a></b>
</div>

## Q. What is a Server Action?

Server Actions are async functions that run on the server and can be called directly from Client or Server Components. They eliminate the need for separate API routes for form handling and mutations.

```tsx
// app/actions.ts
'use server';

export async function createPost(formData: FormData) {
  const title = formData.get('title') as string;
  await db.post.create({ data: { title } });
  revalidatePath('/posts');
}
```

Using in a form (zero JS required for submission):

```tsx
import { createPost } from './actions';

export default function NewPostForm() {
  return (
    <form action={createPost}>
      <input name="title" />
      <button type="submit">Create</button>
    </form>
  );
}
```

<div align="right">
    <b><a href="#table-of-contents">↥ back to top</a></b>
</div>

## Q. What is the difference between `layout.tsx` and `template.tsx`?

| | `layout.tsx` | `template.tsx` |
|---|---|---|
| State | Preserved across navigations | Re-initialized on every navigation |
| DOM | Not unmounted/remounted | Unmounted and remounted |
| Use case | Persistent UI (nav, sidebar) | Page-specific enter animations, resetting state |

<div align="right">
    <b><a href="#table-of-contents">↥ back to top</a></b>
</div>

## Q. How do you handle errors in the App Router?

Create an `error.tsx` file in the route segment. It must be a Client Component.

```tsx
'use client';

export default function Error({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  return (
    <div>
      <h2>Something went wrong!</h2>
      <p>{error.message}</p>
      <button onClick={reset}>Try again</button>
    </div>
  );
}
```

For root-level errors (outside root layout), use `global-error.tsx`.

<div align="right">
    <b><a href="#table-of-contents">↥ back to top</a></b>
</div>

## Q. How do you pass data from Server Components to Client Components?

Server Components can pass **serializable props** to Client Components — strings, numbers, plain objects, arrays. Functions and class instances cannot be passed across the server/client boundary.

```tsx
// app/page.tsx — Server Component
import ClientCard from '@/components/ClientCard';

export default async function Page() {
  const user = await db.user.findFirst(); // Runs on server
  return <ClientCard name={user.name} role={user.role} />;
}
```

```tsx
// components/ClientCard.tsx — Client Component
'use client';
export default function ClientCard({ name, role }: { name: string; role: string }) {
  return <div onClick={() => alert(`Role: ${role}`)}>{name}</div>;
}
```

**Composition patterns:**

| Pattern | Description |
|---|---|
| **Props** | Pass serializable data directly from Server → Client |
| **Children as slot** | Wrap a Client Component with a Server Component via `children` |
| **Context** | Provide context inside a Client wrapper at the root |

**Server Component passed as `children` (stays on the server):**

```tsx
// app/page.tsx
import ClientShell from '@/components/ClientShell';
import ServerContent from '@/components/ServerContent';

export default function Page() {
  return (
    <ClientShell>
      <ServerContent /> {/* Rendered on server, passed as children */}
    </ClientShell>
  );
}
```

> You **cannot** import a Server Component directly inside a `'use client'` file — always pass it via props or `children`.

<div align="right">
    <b><a href="#table-of-contents">↥ back to top</a></b>
</div>

## Q. How do you add a Context Provider in the App Router?

Context providers must be Client Components. Wrap them in a dedicated file and pass Server Components through as `children` — children passed this way remain on the server.

```tsx
// app/providers.tsx
'use client';
import { createContext, useContext, useState } from 'react';

type Theme = 'light' | 'dark';
const ThemeContext = createContext<{ theme: Theme; toggle: () => void } | null>(null);

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = useState<Theme>('light');
  return (
    <ThemeContext.Provider value={{ theme, toggle: () => setTheme(t => t === 'light' ? 'dark' : 'light') }}>
      {children}
    </ThemeContext.Provider>
  );
}

export const useTheme = () => {
  const ctx = useContext(ThemeContext);
  if (!ctx) throw new Error('useTheme must be used inside ThemeProvider');
  return ctx;
};
```

```tsx
// app/layout.tsx — Server Component
import { ThemeProvider } from './providers';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <ThemeProvider>
          {children} {/* Server Components stay on the server */}
        </ThemeProvider>
      </body>
    </html>
  );
}
```

**Rules:**
- Context providers **must** be `'use client'`
- Passing Server Components as `children` to a Client provider is safe — they are not pulled into the client bundle
- Prefer props or Server Component composition over context for server-only data

<div align="right">
    <b><a href="#table-of-contents">↥ back to top</a></b>
</div>

## Q. What is `useFormStatus` and when do you use it?

`useFormStatus` (from `react-dom`) returns the **pending state of the nearest parent `<form>`**. Use it inside a submit button component to show loading feedback during a Server Action submission without needing `useActionState`.

```tsx
// components/SubmitButton.tsx
'use client';
import { useFormStatus } from 'react-dom';

export function SubmitButton({ label = 'Save' }: { label?: string }) {
  const { pending } = useFormStatus();
  return (
    <button type="submit" disabled={pending}>
      {pending ? 'Saving...' : label}
    </button>
  );
}
```

```tsx
// app/posts/new/page.tsx — Server Component
import { createPost } from '@/app/actions';
import { SubmitButton } from '@/components/SubmitButton';

export default function NewPostPage() {
  return (
    <form action={createPost}>
      <input name="title" required />
      <SubmitButton label="Create Post" />
    </form>
  );
}
```

**Key constraint:** `useFormStatus` must be called inside a component that is **rendered as a child of the `<form>`** — it does not work in the same component that renders the form. Extracting the button into its own component is the standard pattern.

**`useFormStatus` vs `useActionState`:**

| | `useFormStatus` | `useActionState` |
|---|---|---|
| Purpose | Read pending state of parent form | Manage action result + pending state |
| Location | Child component inside `<form>` | Component that owns the `<form>` |
| Returns | `{ pending, data, method, action }` | `[state, action, isPending]` |

<div align="right">
    <b><a href="#table-of-contents">↥ back to top</a></b>
</div>

## Performance & Optimization

<br>

## Q. How does `next/image` optimize images?

The `<Image>` component from `next/image`:

- **Lazy loads** images by default
- **Resizes** images on demand for each device size
- **Serves modern formats** (WebP, AVIF) automatically
- **Prevents layout shift** by requiring `width` and `height`
- Supports **priority** prop for LCP images

```tsx
import Image from 'next/image';

<Image
  src="/hero.jpg"
  alt="Hero"
  width={1200}
  height={600}
  priority         // Preload this image (use for above-the-fold)
  quality={85}
/>
```

<div align="right">
    <b><a href="#table-of-contents">↥ back to top</a></b>
</div>

## Q. How does `next/font` work?

`next/font` downloads fonts at build time, self-hosts them, and eliminates layout shift. No requests are sent to Google at runtime.

```tsx
// app/layout.tsx
import { Inter } from 'next/font/google';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
});

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={inter.className}>
      <body>{children}</body>
    </html>
  );
}
```

<div align="right">
    <b><a href="#table-of-contents">↥ back to top</a></b>
</div>

## Q. What is the Next.js `<Script>` component?

`next/script` provides strategies to control when third-party scripts load:

| Strategy | Behavior |
|---|---|
| `beforeInteractive` | Before hydration (use sparingly) |
| `afterInteractive` | After hydration (default) |
| `lazyOnload` | During idle time |
| `worker` | Off main thread via Partytown (experimental) |

```tsx
import Script from 'next/script';

<Script src="https://analytics.example.com/script.js" strategy="lazyOnload" />
```

<div align="right">
    <b><a href="#table-of-contents">↥ back to top</a></b>
</div>

## Q. What is code splitting in Next.js?

Next.js automatically code-splits by page/route — each page only loads the JavaScript it needs. Additional manual splitting can be done with `next/dynamic`:

```tsx
import dynamic from 'next/dynamic';

const HeavyChart = dynamic(() => import('./HeavyChart'), {
  loading: () => <p>Loading chart...</p>,
  ssr: false, // Disable SSR for this component
});
```

<div align="right">
    <b><a href="#table-of-contents">↥ back to top</a></b>
</div>

## Q. How do you use `next/image` with remote images?

Remote images require an explicit `remotePatterns` allowlist in `next.config.js` — Next.js refuses to optimize images from unlisted hostnames to prevent SSRF abuse.

```js
// next.config.js
module.exports = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
      {
        protocol: 'https',
        hostname: '**.amazonaws.com', // wildcard subdomain
        pathname: '/uploads/**',      // restrict to a path prefix
      },
    ],
  },
};
```

```tsx
import Image from 'next/image';

// Fixed dimensions
<Image
  src="https://images.unsplash.com/photo-123?w=800"
  alt="Landscape"
  width={800}
  height={600}
/>

// Fill parent container — use when dimensions are unknown
<div style={{ position: 'relative', height: '400px' }}>
  <Image
    src="https://images.unsplash.com/photo-123"
    alt="Hero"
    fill
    style={{ objectFit: 'cover' }}
  />
</div>
```

> Use `fill` with a fixed-height parent container for user-generated images where dimensions are not known ahead of time.

<div align="right">
    <b><a href="#table-of-contents">↥ back to top</a></b>
</div>

## Q. How do you use local (self-hosted) fonts with `next/font`?

Use `next/font/local` for fonts not on Google Fonts — custom, licensed, or variable fonts bundled with your project:

```tsx
// app/layout.tsx
import localFont from 'next/font/local';

const myFont = localFont({
  src: [
    {
      path: '../public/fonts/MyFont-Regular.woff2',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../public/fonts/MyFont-Bold.woff2',
      weight: '700',
      style: 'normal',
    },
  ],
  display: 'swap',
  variable: '--font-my-font', // exposes a CSS custom property
});

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${myFont.variable}`}>
      <body className={myFont.className}>{children}</body>
    </html>
  );
}
```

**Using the CSS variable with Tailwind CSS:**

```js
// tailwind.config.js
module.exports = {
  theme: {
    extend: {
      fontFamily: {
        custom: ['var(--font-my-font)'],
      },
    },
  },
};
```

```tsx
<p className="font-custom">Styled with local font</p>
```

> Place font files in `public/fonts/` and use a path **relative to the file** where `localFont` is called. `next/font/local` zero-runtime-requests — no network calls are made at runtime.

<div align="right">
    <b><a href="#table-of-contents">↥ back to top</a></b>
</div>

## API Routes & Server Actions

<br>

## Q. How do you create an API route in the Pages Router?

Files inside `pages/api/` become API endpoints:

```ts
// pages/api/hello.ts
import type { NextApiRequest, NextApiResponse } from 'next';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    const { name } = req.body;
    res.status(200).json({ message: `Hello, ${name}` });
  } else {
    res.setHeader('Allow', ['POST']);
    res.status(405).end('Method Not Allowed');
  }
}
```

<div align="right">
    <b><a href="#table-of-contents">↥ back to top</a></b>
</div>

## Q. How do you create a Route Handler in the App Router?

Route Handlers live in `app/` as `route.ts` files and export named HTTP method functions:

```ts
// app/api/posts/route.ts
import { NextRequest, NextResponse } from 'next/server';

export async function GET(request: NextRequest) {
  const posts = await db.post.findMany();
  return NextResponse.json(posts);
}

export async function POST(request: NextRequest) {
  const body = await request.json();
  const post = await db.post.create({ data: body });
  return NextResponse.json(post, { status: 201 });
}
```

<div align="right">
    <b><a href="#table-of-contents">↥ back to top</a></b>
</div>

## Q. What are the differences between API Routes and Server Actions?

| | API Routes / Route Handlers | Server Actions |
|---|---|---|
| Invocation | HTTP request | Direct function call |
| Boilerplate | Needs `fetch` call from client | None — call directly |
| Use case | Public API, webhooks, third-party calls | Form mutations, DB writes |
| Progressive enhancement | No | Yes (works without JS) |
| Caching | Manual | Integrates with Next.js cache |

<div align="right">
    <b><a href="#table-of-contents">↥ back to top</a></b>
</div>

## Q. How do you handle dynamic segments and query parameters in Route Handlers?

**Dynamic segments** — access `params` via the second argument:

```ts
// app/api/posts/[id]/route.ts
import { NextRequest, NextResponse } from 'next/server';

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params; // Next.js 15+: params is a Promise
  const post = await db.post.findUnique({ where: { id } });

  if (!post) return NextResponse.json({ error: 'Not found' }, { status: 404 });
  return NextResponse.json(post);
}
```

**Query parameters** — read from `request.nextUrl.searchParams`:

```ts
// GET /api/posts?page=2&limit=10&status=published
export async function GET(request: NextRequest) {
  const { searchParams } = request.nextUrl;

  const page   = Number(searchParams.get('page')  ?? '1');
  const limit  = Number(searchParams.get('limit') ?? '10');
  const status = searchParams.get('status') ?? undefined;

  const posts = await db.post.findMany({
    where: { status },
    skip: (page - 1) * limit,
    take: limit,
  });

  return NextResponse.json({ posts, page, limit });
}
```

**Caching Route Handlers** — GET handlers are cached by default when no dynamic APIs are used. Opt out with:

```ts
export const dynamic = 'force-dynamic'; // Never cache this handler
```

<div align="right">
    <b><a href="#table-of-contents">↥ back to top</a></b>
</div>

## Q. How do you validate input in Server Actions?

Always validate and sanitize Server Action inputs on the server — never trust client-submitted data. Use **Zod** for schema validation:

```ts
// app/actions/post.ts
'use server';
import { z } from 'zod';
import { revalidatePath } from 'next/cache';

const CreatePostSchema = z.object({
  title:   z.string().min(1).max(200),
  content: z.string().min(10),
  slug:    z.string().regex(/^[a-z0-9-]+$/),
});

export async function createPost(prevState: unknown, formData: FormData) {
  const raw = {
    title:   formData.get('title'),
    content: formData.get('content'),
    slug:    formData.get('slug'),
  };

  const result = CreatePostSchema.safeParse(raw);

  if (!result.success) {
    return {
      errors: result.error.flatten().fieldErrors,
    };
  }

  await db.post.create({ data: result.data });
  revalidatePath('/posts');
  return { success: true };
}
```

```tsx
// app/posts/new/page.tsx
'use client';
import { useActionState } from 'react';
import { createPost } from '@/app/actions/post';

export default function NewPostForm() {
  const [state, action, isPending] = useActionState(createPost, null);

  return (
    <form action={action}>
      <input name="title" />
      {state?.errors?.title && <p>{state.errors.title[0]}</p>}

      <textarea name="content" />
      {state?.errors?.content && <p>{state.errors.content[0]}</p>}

      <input name="slug" />
      {state?.errors?.slug && <p>{state.errors.slug[0]}</p>}

      <button type="submit" disabled={isPending}>Create</button>
    </form>
  );
}
```

**Security rules for Server Actions:**
- Always validate — `formData` values are plain strings
- Check authentication/authorization before performing mutations
- Never expose internal error details in the returned state

<div align="right">
    <b><a href="#table-of-contents">↥ back to top</a></b>
</div>

## Middleware & Authentication

<br>

## Q. What is Next.js Middleware?

Middleware runs before a request is completed. It executes at the Edge (very fast, close to the user) and can:

- Redirect or rewrite URLs
- Set request/response headers
- Check authentication
- A/B testing, geolocation-based routing

```ts
// middleware.ts (at project root)
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  const token = request.cookies.get('token')?.value;

  if (!token && request.nextUrl.pathname.startsWith('/dashboard')) {
    return NextResponse.redirect(new URL('/login', request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/dashboard/:path*', '/admin/:path*'],
};
```

<div align="right">
    <b><a href="#table-of-contents">↥ back to top</a></b>
</div>

## Q. What is the `matcher` config in Middleware?

`matcher` limits which routes the middleware runs on. This improves performance by skipping static files and irrelevant routes.

```ts
export const config = {
  matcher: [
    '/dashboard/:path*',
    '/((?!_next/static|_next/image|favicon.ico).*)',
  ],
};
```

<div align="right">
    <b><a href="#table-of-contents">↥ back to top</a></b>
</div>

## Q. How do you implement authentication in Next.js?

Common approaches:

1. **Auth.js (NextAuth.js)** — most popular, supports OAuth, credentials, JWT, database sessions
2. **Clerk** — hosted auth with UI components
3. **Custom JWT** — store token in HttpOnly cookie, verify in Middleware

Auth.js example (App Router):

```ts
// auth.ts
import NextAuth from 'next-auth';
import GitHub from 'next-auth/providers/github';

export const { handlers, auth, signIn, signOut } = NextAuth({
  providers: [GitHub],
});
```

```ts
// app/api/auth/[...nextauth]/route.ts
import { handlers } from '@/auth';
export const { GET, POST } = handlers;
```

Protect a Server Component:

```tsx
import { auth } from '@/auth';
import { redirect } from 'next/navigation';

export default async function ProtectedPage() {
  const session = await auth();
  if (!session) redirect('/login');

  return <p>Welcome, {session.user?.name}</p>;
}
```

<div align="right">
    <b><a href="#table-of-contents">↥ back to top</a></b>
</div>

## Q. What are the limitations of Edge Middleware in Next.js?

Edge Middleware runs in the **V8 isolate runtime** (not Node.js), so it has a restricted API surface to keep cold starts near zero.

**What you CAN do:**
- Read and set request/response headers and cookies
- Redirect and rewrite URLs
- Use `fetch` for lightweight external calls
- Use Web APIs: `URL`, `URLSearchParams`, `Request`, `Response`, `crypto.subtle`, `TextEncoder`
- Use lightweight JWT verification (e.g., `jose`)

**What you CANNOT do:**

| Limitation | Reason |
|---|---|
| `fs`, `path`, `net`, `child_process` | No Node.js core modules |
| Native addons (`.node` files) | V8 isolate only |
| Prisma, most ORMs | Require Node.js runtime |
| Large bundle size | Hard limit (~1MB compressed) |
| Long-running operations | Short execution time budget |

**Practical rule:** Keep Middleware thin — only routing logic, token verification, and header/cookie manipulation. Move DB calls and heavy business logic to Server Components, Route Handlers, or Server Actions.

```ts
// Good: lightweight JWT check in Middleware
import { jwtVerify } from 'jose';
import { NextRequest, NextResponse } from 'next/server';

export async function middleware(request: NextRequest) {
  const token = request.cookies.get('token')?.value;

  if (!token) {
    return NextResponse.redirect(new URL('/login', request.url));
  }

  try {
    await jwtVerify(token, new TextEncoder().encode(process.env.JWT_SECRET));
    return NextResponse.next();
  } catch {
    return NextResponse.redirect(new URL('/login', request.url));
  }
}
```

<div align="right">
    <b><a href="#table-of-contents">↥ back to top</a></b>
</div>

## Q. How do you read and modify cookies in Next.js Middleware?

Use `request.cookies` to read and `response.cookies` to set cookies in Middleware:

```ts
// middleware.ts
import { NextRequest, NextResponse } from 'next/server';

export function middleware(request: NextRequest) {
  const response = NextResponse.next();

  // Read a cookie
  const theme = request.cookies.get('theme')?.value ?? 'light';

  // Set a cookie on the response
  response.cookies.set('theme', theme, {
    httpOnly: false,          // readable by JS (for theme toggling)
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'lax',
    maxAge: 60 * 60 * 24 * 365, // 1 year
    path: '/',
  });

  // Delete a cookie
  response.cookies.delete('old-session');

  // Forward a value to layouts/pages via a request header
  response.headers.set('x-theme', theme);

  return response;
}
```

**Reading the header set by Middleware in a Server Component:**

```tsx
// app/layout.tsx
import { headers } from 'next/headers';

export default async function RootLayout({ children }) {
  const headersList = await headers();
  const theme = headersList.get('x-theme') ?? 'light';

  return (
    <html data-theme={theme}>
      <body>{children}</body>
    </html>
  );
}
```

> Middleware runs before the response is sent, so cookies set on `NextResponse.next()` are included in the response headers and available to the browser immediately.

<div align="right">
    <b><a href="#table-of-contents">↥ back to top</a></b>
</div>

## Deployment & Configuration

<br>

## Q. What is `next.config.js` used for?

`next.config.js` configures the Next.js build and runtime:

```js
/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      { protocol: 'https', hostname: 'images.example.com' },
    ],
  },
  experimental: {
    serverActions: { allowedOrigins: ['example.com'] },
  },
  redirects: async () => [
    { source: '/old', destination: '/new', permanent: true },
  ],
};

module.exports = nextConfig;
```

<div align="right">
    <b><a href="#table-of-contents">↥ back to top</a></b>
</div>

## Q. What are the deployment options for Next.js?

| Option | Notes |
|---|---|
| **Vercel** | Zero-config, native platform by the Next.js team |
| **Node.js server** | `next build && next start`, supports all features |
| **Docker** | Use `output: 'standalone'` for optimized image |
| **Static export** | `output: 'export'`, no SSR/SSG/ISR/Middleware |
| **Edge runtime** | Deploy Middleware and Route Handlers to edge networks |

Static export:

```js
// next.config.js
const nextConfig = { output: 'export' };
```

<div align="right">
    <b><a href="#table-of-contents">↥ back to top</a></b>
</div>

## Q. What is the Edge Runtime vs. Node.js Runtime?

| | Edge Runtime | Node.js Runtime |
|---|---|---|
| Cold start | ~0ms | 100–500ms |
| Max execution | Short-lived | Long-running |
| APIs available | Subset (no `fs`, no native modules) | Full Node.js |
| Use case | Middleware, geo-routing, auth checks | Heavy compute, DB drivers |

Opt into Edge Runtime in a Route Handler:

```ts
export const runtime = 'edge';
```

<div align="right">
    <b><a href="#table-of-contents">↥ back to top</a></b>
</div>

## Q. How do you containerize a Next.js app with Docker?

Use `output: 'standalone'` in `next.config.js` to produce a minimal self-contained build that only includes the files needed to run the server — no `node_modules` bloat.

```js
// next.config.js
module.exports = {
  output: 'standalone',
};
```

**Multi-stage Dockerfile:**

```dockerfile
# syntax=docker/dockerfile:1
FROM node:20-alpine AS base

# Stage 1: Install dependencies
FROM base AS deps
WORKDIR /app
COPY package.json package-lock.json ./
RUN npm ci

# Stage 2: Build the app
FROM base AS builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .
RUN npm run build

# Stage 3: Production image
FROM base AS runner
WORKDIR /app

ENV NODE_ENV=production

# Standalone output + public assets + static files
COPY --from=builder /app/public ./public
COPY --from=builder /app/.next/standalone ./
COPY --from=builder /app/.next/static ./.next/static

EXPOSE 3000
ENV PORT=3000
ENV HOSTNAME="0.0.0.0"

CMD ["node", "server.js"]
```

```bash
docker build -t my-next-app .
docker run -p 3000:3000 --env-file .env.local my-next-app
```

**Key points:**
- `output: 'standalone'` copies only required `node_modules` into `.next/standalone`
- Pass secrets via environment variables at **runtime** (`--env-file` or orchestrator secrets) — never bake them into the image
- The `public/` and `.next/static/` directories must be copied separately

<div align="right">
    <b><a href="#table-of-contents">↥ back to top</a></b>
</div>

## Q. How does the `.env` file hierarchy work in Next.js?

Next.js loads `.env` files in a specific **priority order** — higher entries override lower ones:

| File | When loaded | Committed to git? |
|---|---|---|
| `.env.local` | All environments | No (gitignored) |
| `.env.development.local` | `next dev` only | No |
| `.env.production.local` | `next build/start` only | No |
| `.env.test.local` | `next test` only | No |
| `.env.development` | `next dev` only | Yes |
| `.env.production` | `next build/start` only | Yes |
| `.env.test` | `next test` only | Yes |
| `.env` | All environments | Yes (non-secrets only) |

**Priority (highest → lowest):** `.env.local` > `.env.[environment].local` > `.env.[environment]` > `.env`

```bash
# .env — safe defaults, committed to git
NEXT_PUBLIC_APP_NAME="My App"
NEXT_PUBLIC_API_URL="https://api.example.com"

# .env.local — secrets and overrides, gitignored
DATABASE_URL="postgresql://user:pass@localhost/mydb"
JWT_SECRET="super-secret-at-least-32-chars"

# .env.development — dev-specific non-secrets
NEXT_PUBLIC_API_URL="http://localhost:4000"
```

**Accessing variables:**

```ts
// Server-only (no prefix)
process.env.DATABASE_URL

// Exposed to browser (NEXT_PUBLIC_ prefix)
process.env.NEXT_PUBLIC_APP_NAME
```

> **Never** commit `.env.local` or any file containing real secrets. Add `.env*.local` to `.gitignore`.

<div align="right">
    <b><a href="#table-of-contents">↥ back to top</a></b>
</div>

## Advanced Topics

<br>

## Q. What is `generateStaticParams`?

In the App Router, `generateStaticParams` replaces `getStaticPaths` for dynamic routes:

```tsx
// app/blog/[slug]/page.tsx

export async function generateStaticParams() {
  const posts = await fetch('/api/posts').then(r => r.json());

  return posts.map((post) => ({
    slug: post.slug,
  }));
}
```

<div align="right">
    <b><a href="#table-of-contents">↥ back to top</a></b>
</div>

## Q. What is `generateMetadata`?

`generateMetadata` generates dynamic SEO metadata per route:

```tsx
// app/blog/[slug]/page.tsx
import type { Metadata } from 'next';

export async function generateMetadata({ params }): Promise<Metadata> {
  const post = await fetchPost(params.slug);

  return {
    title: post.title,
    description: post.excerpt,
    openGraph: {
      images: [post.coverImage],
    },
  };
}
```

Static metadata:

```tsx
export const metadata: Metadata = {
  title: 'My App',
  description: 'Built with Next.js',
};
```

<div align="right">
    <b><a href="#table-of-contents">↥ back to top</a></b>
</div>

## Q. How does the fetch cache work in the App Router?

Next.js maintains a **Data Cache** that persists across requests and deployments (on Vercel). The cache is controlled via `fetch` options:

```ts
// Permanently cached (default in older versions, now opt-in)
fetch(url, { cache: 'force-cache' });

// Never cached
fetch(url, { cache: 'no-store' });

// Cached with time-based revalidation
fetch(url, { next: { revalidate: 3600 } });

// Cached with tag-based revalidation
fetch(url, { next: { tags: ['products'] } });
```

> **Note:** As of Next.js 15, `fetch` requests are **no longer cached by default** — you must opt-in explicitly.

<div align="right">
    <b><a href="#table-of-contents">↥ back to top</a></b>
</div>

## Q. What is `unstable_cache` and when do you use it?

`unstable_cache` caches the result of any async function (not just `fetch`), useful for ORM queries:

```ts
import { unstable_cache } from 'next/cache';

const getCachedPosts = unstable_cache(
  async () => db.post.findMany(),
  ['all-posts'],        // Cache key
  { revalidate: 60, tags: ['posts'] }
);

// In a Server Component:
const posts = await getCachedPosts();
```

<div align="right">
    <b><a href="#table-of-contents">↥ back to top</a></b>
</div>

## Q. What is the `use cache` directive? (Next.js 15+)

`use cache` is a new directive (stable in Next.js 15) that marks a function or component as cacheable — similar to `unstable_cache` but with cleaner syntax:

```ts
// Caching an async function
async function getPosts() {
  'use cache';
  return db.post.findMany();
}

// Caching a Server Component
async function PostList() {
  'use cache';
  const posts = await getPosts();
  return <ul>{posts.map(p => <li key={p.id}>{p.title}</li>)}</ul>;
}
```

<div align="right">
    <b><a href="#table-of-contents">↥ back to top</a></b>
</div>

## Q. What is Turbopack?

Turbopack is the Rust-based successor to Webpack, included in Next.js 13+. It offers:

- Significantly faster local development (HMR)
- Incremental computation — only recompiles changed modules
- Default in `next dev` as of Next.js 15

Enabled automatically, or explicitly:

```bash
next dev --turbopack
```

<div align="right">
    <b><a href="#table-of-contents">↥ back to top</a></b>
</div>

## Q. What is the difference between `notFound()` and redirecting to a 404 page?

`notFound()` is a Next.js function that triggers the `not-found.tsx` file for the closest ancestor:

```tsx
import { notFound } from 'next/navigation';

async function PostPage({ params }) {
  const post = await fetchPost(params.slug);

  if (!post) notFound(); // Renders not-found.tsx

  return <article>{post.title}</article>;
}
```

Manual redirect to `/404` is discouraged — it loses route context and returns a 200 status code unless handled properly.

<div align="right">
    <b><a href="#table-of-contents">↥ back to top</a></b>
</div>

## Q. How does `useFormState` / `useActionState` work with Server Actions?

`useActionState` (renamed from `useFormState` in React 19) connects form state to a Server Action:

```tsx
'use client';
import { useActionState } from 'react';
import { createPost } from './actions';

export default function Form() {
  const [state, action, isPending] = useActionState(createPost, null);

  return (
    <form action={action}>
      <input name="title" />
      {state?.error && <p>{state.error}</p>}
      <button type="submit" disabled={isPending}>
        {isPending ? 'Saving...' : 'Save'}
      </button>
    </form>
  );
}
```

<div align="right">
    <b><a href="#table-of-contents">↥ back to top</a></b>
</div>

## Q. What is `useOptimistic` and how does it work with Server Actions?

`useOptimistic` allows you to show an optimistic (predicted) UI update before the Server Action resolves:

```tsx
'use client';
import { useOptimistic } from 'react';
import { likePost } from './actions';

export function LikeButton({ postId, initialLikes }) {
  const [optimisticLikes, addOptimisticLike] = useOptimistic(
    initialLikes,
    (state) => state + 1
  );

  return (
    <form action={async () => {
      addOptimisticLike(); // Immediately update UI
      await likePost(postId); // Then sync with server
    }}>
      <button type="submit">{optimisticLikes} Likes</button>
    </form>
  );
}
```

<div align="right">
    <b><a href="#table-of-contents">↥ back to top</a></b>
</div>

## Q. What are common Next.js performance pitfalls?

1. **Not using `priority` on LCP images** — causes poor Core Web Vitals
2. **Importing large libraries on the client** — use `next/dynamic` with `ssr: false`
3. **Overusing `'use client'`** — push it to leaf components to keep Server Components
4. **Fetching in Client Components** — fetch in Server Components and pass as props
5. **Not using ISR or tags-based revalidation** — leads to unnecessary SSR overhead
6. **Missing `loading.tsx`** — users see blank screens during data fetches
7. **Using `getServerSideProps` for mostly static content** — use ISR instead
8. **Not setting `cache: 'no-store'` for truly dynamic routes** — stale data bugs

<div align="right">
    <b><a href="#table-of-contents">↥ back to top</a></b>
</div>

## Q. How do you generate `sitemap.xml` and `robots.txt` in the App Router?

The App Router supports **Metadata Files** — special files that generate SEO metadata automatically.

**Static files:** Drop `sitemap.xml` or `robots.txt` directly in the `app/` or `public/` directory.

**Dynamic sitemap** — create `app/sitemap.ts` returning a `MetadataRoute.Sitemap` array:

```ts
// app/sitemap.ts
import { MetadataRoute } from 'next';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const posts = await fetch('https://api.example.com/posts').then(r => r.json());

  const postEntries: MetadataRoute.Sitemap = posts.map((post) => ({
    url: `https://example.com/blog/${post.slug}`,
    lastModified: new Date(post.updatedAt),
    changeFrequency: 'weekly',
    priority: 0.8,
  }));

  return [
    {
      url: 'https://example.com',
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 1,
    },
    {
      url: 'https://example.com/about',
      changeFrequency: 'monthly',
      priority: 0.5,
    },
    ...postEntries,
  ];
}
```

**Dynamic `robots.txt`** — create `app/robots.ts`:

```ts
// app/robots.ts
import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/admin/', '/api/'],
      },
    ],
    sitemap: 'https://example.com/sitemap.xml',
  };
}
```

Both files are served at `/sitemap.xml` and `/robots.txt` automatically. For large sites, use `generateSitemaps()` to split into multiple indexed sitemaps:

```ts
// app/sitemap.ts
export async function generateSitemaps() {
  // Return ids for paginated sitemaps
  return [{ id: 0 }, { id: 1 }, { id: 2 }];
}

export default async function sitemap({ id }: { id: number }): Promise<MetadataRoute.Sitemap> {
  const posts = await fetchPostsPage(id);
  return posts.map(p => ({ url: `https://example.com/blog/${p.slug}` }));
}
```

<div align="right">
    <b><a href="#table-of-contents">↥ back to top</a></b>
</div>

## Q. How do you generate dynamic Open Graph images in Next.js?

Use the `opengraph-image.tsx` file convention and `ImageResponse` from `next/og` to generate images at runtime or build time:

```tsx
// app/blog/[slug]/opengraph-image.tsx
import { ImageResponse } from 'next/og';

export const runtime = 'edge';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default async function Image({ params }: { params: { slug: string } }) {
  const post = await fetchPost(params.slug);

  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          background: 'linear-gradient(to bottom right, #1e293b, #0f172a)',
          color: 'white',
          padding: '60px',
        }}
      >
        <h1 style={{ fontSize: '64px', fontWeight: 'bold', margin: 0 }}>
          {post.title}
        </h1>
        <p style={{ fontSize: '28px', opacity: 0.7, marginTop: '20px' }}>
          {post.author} · example.com
        </p>
      </div>
    ),
    { ...size }
  );
}
```

Next.js automatically wires the generated image URL into the `og:image` meta tag via `generateMetadata`. You can also generate a `twitter-image.tsx` the same way.

**Static OG image** — simply drop `opengraph-image.png` (or `.jpg`) into the route folder:

```
app/
  blog/
    [slug]/
      opengraph-image.png   ← used for all posts (static fallback)
      opengraph-image.tsx   ← dynamic version takes precedence
      page.tsx
```

<div align="right">
    <b><a href="#table-of-contents">↥ back to top</a></b>
</div>

## Testing

<br>

## Q. How do you unit test Next.js components?

Use **Jest** with **React Testing Library** for component and hook testing.

**Setup:**

```bash
npm install --save-dev jest jest-environment-jsdom @testing-library/react @testing-library/jest-dom
```

```ts
// jest.config.ts
import type { Config } from 'jest';
import nextJest from 'next/jest';

const createJestConfig = nextJest({ dir: './' });

const config: Config = {
  testEnvironment: 'jsdom',
  setupFilesAfterFramework: ['<rootDir>/jest.setup.ts'],
};

export default createJestConfig(config);
```

```tsx
// __tests__/Counter.test.tsx
import { render, screen, fireEvent } from '@testing-library/react';
import Counter from '@/components/Counter';

test('increments counter on click', () => {
  render(<Counter />);
  const button = screen.getByRole('button');
  fireEvent.click(button);
  expect(screen.getByText('1')).toBeInTheDocument();
});
```

<div align="right">
    <b><a href="#table-of-contents">↥ back to top</a></b>
</div>

## Q. How do you test Server Actions and Route Handlers?

**Route Handlers** can be tested by constructing a `NextRequest` directly:

```ts
// __tests__/api/posts.test.ts
import { GET } from '@/app/api/posts/route';
import { NextRequest } from 'next/server';

test('GET /api/posts returns a list', async () => {
  const req = new NextRequest('http://localhost/api/posts');
  const res = await GET(req);
  const data = await res.json();

  expect(res.status).toBe(200);
  expect(Array.isArray(data)).toBe(true);
});
```

**Server Actions** are regular async functions and can be tested directly:

```ts
// __tests__/actions/createPost.test.ts
import { createPost } from '@/app/actions';

test('createPost persists title', async () => {
  const formData = new FormData();
  formData.set('title', 'Test Post');

  const result = await createPost(null, formData);
  expect(result.success).toBe(true);
});
```

<div align="right">
    <b><a href="#table-of-contents">↥ back to top</a></b>
</div>

## Q. How do you write E2E tests for Next.js with Playwright?

Playwright is the recommended E2E tool for Next.js (also works with Cypress).

```bash
npm install --save-dev @playwright/test
npx playwright install
```

```ts
// playwright.config.ts
import { defineConfig } from '@playwright/test';

export default defineConfig({
  webServer: {
    command: 'npm run build && npm start',
    url: 'http://localhost:3000',
    reuseExistingServer: !process.env.CI,
  },
  use: { baseURL: 'http://localhost:3000' },
});
```

```ts
// e2e/navigation.spec.ts
import { test, expect } from '@playwright/test';

test('navigates to about page', async ({ page }) => {
  await page.goto('/');
  await page.click('text=About');
  await expect(page).toHaveURL('/about');
  await expect(page.locator('h1')).toContainText('About');
});

test('form submission shows success message', async ({ page }) => {
  await page.goto('/contact');
  await page.fill('input[name="email"]', 'user@example.com');
  await page.click('button[type="submit"]');
  await expect(page.locator('[data-testid="success"]')).toBeVisible();
});
```

<div align="right">
    <b><a href="#table-of-contents">↥ back to top</a></b>
</div>

## Q. How do you mock `next/navigation` and `next/router` in tests?

**App Router — mock `next/navigation`:**

```ts
// jest.setup.ts or at the top of a test file
jest.mock('next/navigation', () => ({
  useRouter: () => ({
    push: jest.fn(),
    replace: jest.fn(),
    back: jest.fn(),
    prefetch: jest.fn(),
  }),
  usePathname: () => '/current-path',
  useSearchParams: () => new URLSearchParams('q=test'),
  useParams: () => ({ id: '42' }),
  redirect: jest.fn(),
  notFound: jest.fn(),
}));
```

**Pages Router — mock `next/router`:**

```ts
jest.mock('next/router', () => ({
  useRouter: () => ({
    pathname: '/about',
    query: {},
    push: jest.fn(),
    replace: jest.fn(),
    back: jest.fn(),
  }),
}));
```

**Example test with a typed mock:**

```tsx
import { render, screen, fireEvent } from '@testing-library/react';
import { useRouter } from 'next/navigation';
import BackButton from '@/components/BackButton';

jest.mock('next/navigation', () => ({ useRouter: jest.fn() }));

test('calls router.back on click', () => {
  const mockBack = jest.fn();
  (useRouter as jest.Mock).mockReturnValue({ back: mockBack });

  render(<BackButton />);
  fireEvent.click(screen.getByRole('button', { name: /back/i }));
  expect(mockBack).toHaveBeenCalledTimes(1);
});
```

<div align="right">
    <b><a href="#table-of-contents">↥ back to top</a></b>
</div>

## Q. How do you test Next.js Middleware?

Middleware runs in the Edge runtime and cannot be called directly in Jest. Test it by constructing a `NextRequest` and invoking the middleware function:

```ts
// __tests__/middleware.test.ts
import { middleware } from '@/middleware';
import { NextRequest } from 'next/server';

function createRequest(path: string, options?: { cookie?: string }) {
  const url = new URL(path, 'http://localhost:3000');
  const req = new NextRequest(url);
  if (options?.cookie) {
    req.cookies.set('token', options.cookie);
  }
  return req;
}

test('redirects unauthenticated users from /dashboard to /login', async () => {
  const req = createRequest('/dashboard');
  const res = await middleware(req);

  expect(res.status).toBe(307);
  expect(res.headers.get('location')).toContain('/login');
});

test('allows authenticated users to reach /dashboard', async () => {
  const req = createRequest('/dashboard', { cookie: 'valid-jwt-token' });
  const res = await middleware(req);

  // NextResponse.next() returns a 200 with no Location header
  expect(res.headers.get('location')).toBeNull();
});

test('does not run on static assets', async () => {
  const req = createRequest('/_next/static/chunk.js');
  // The matcher config prevents middleware from running on static paths
  // Verify by checking that the URL does not match your matcher pattern
  const pathname = req.nextUrl.pathname;
  expect(pathname.startsWith('/_next/static')).toBe(true);
});
```

**For Middleware using `auth()` from Auth.js**, mock the module:

```ts
jest.mock('@/auth', () => ({
  auth: jest.fn((handler) => handler),
}));
```

> Playwright E2E tests are the most reliable for testing Middleware behavior end-to-end since they run against a real Next.js server.

<div align="right">
    <b><a href="#table-of-contents">↥ back to top</a></b>
</div>

## Q. How do you mock API calls in Next.js tests with MSW?

**MSW (Mock Service Worker)** intercepts `fetch` calls at the network level — the same mocks work in both Jest (Node) and Playwright (browser).

```bash
npm install --save-dev msw
```

**Define handlers:**

```ts
// src/mocks/handlers.ts
import { http, HttpResponse } from 'msw';

export const handlers = [
  http.get('/api/user', () => {
    return HttpResponse.json({ id: '1', name: 'Alice', role: 'admin' });
  }),

  http.post('/api/posts', async ({ request }) => {
    const body = await request.json();
    return HttpResponse.json({ id: '42', ...body }, { status: 201 });
  }),

  http.get('/api/posts', () => {
    return HttpResponse.json([{ id: '1', title: 'Hello' }]);
  }),
];
```

**Node.js server for Jest:**

```ts
// src/mocks/server.ts
import { setupServer } from 'msw/node';
import { handlers } from './handlers';

export const server = setupServer(...handlers);
```

```ts
// jest.setup.ts
import { server } from '@/mocks/server';

beforeAll(() => server.listen({ onUnhandledRequest: 'error' }));
afterEach(() => server.resetHandlers());
afterAll(() => server.close());
```

**Using in a test:**

```ts
import { server } from '@/mocks/server';
import { http, HttpResponse } from 'msw';
import { render, screen, waitFor } from '@testing-library/react';
import UserProfile from '@/components/UserProfile';

test('displays user name', async () => {
  render(<UserProfile />);
  await waitFor(() => expect(screen.getByText('Alice')).toBeInTheDocument());
});

test('handles API error gracefully', async () => {
  // Override handler for this test only
  server.use(
    http.get('/api/user', () => HttpResponse.json({ error: 'Unauthorized' }, { status: 401 }))
  );

  render(<UserProfile />);
  await waitFor(() => expect(screen.getByText('Failed to load')).toBeInTheDocument());
});
```

<div align="right">
    <b><a href="#table-of-contents">↥ back to top</a></b>
</div>

## Security & Best Practices

<br>

## Q. How do you set security headers in Next.js?

Configure security headers in `next.config.js` using the `headers` async function:

```js
// next.config.js
const securityHeaders = [
  { key: 'X-DNS-Prefetch-Control', value: 'on' },
  { key: 'X-Frame-Options', value: 'SAMEORIGIN' },
  { key: 'X-Content-Type-Options', value: 'nosniff' },
  { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
  {
    key: 'Strict-Transport-Security',
    value: 'max-age=63072000; includeSubDomains; preload',
  },
  {
    key: 'Permissions-Policy',
    value: 'camera=(), microphone=(), geolocation=()',
  },
  {
    key: 'Content-Security-Policy',
    value: [
      "default-src 'self'",
      "script-src 'self' 'unsafe-eval' 'unsafe-inline'",
      "style-src 'self' 'unsafe-inline'",
      "img-src 'self' data: https:",
    ].join('; '),
  },
];

module.exports = {
  async headers() {
    return [{ source: '/(.*)', headers: securityHeaders }];
  },
};
```

<div align="right">
    <b><a href="#table-of-contents">↥ back to top</a></b>
</div>

## Q. How do you handle environment variables securely in Next.js?

Next.js separates server-only and browser-exposed variables by prefix:

| Prefix | Accessible in | Example |
|---|---|---|
| `NEXT_PUBLIC_` | Browser + Server | `NEXT_PUBLIC_API_URL` |
| No prefix | Server only | `DATABASE_URL`, `JWT_SECRET` |

```env
# .env.local — gitignored by default
DATABASE_URL=postgresql://user:pass@host/db
JWT_SECRET=a-very-long-random-secret-at-least-32-chars
NEXT_PUBLIC_ANALYTICS_ID=UA-000000
```

**Best practices:**
- Never expose secrets with `NEXT_PUBLIC_` prefix
- Validate env vars at startup using `zod` or `@t3-oss/env-nextjs`:

```ts
// lib/env.ts
import { z } from 'zod';

const envSchema = z.object({
  DATABASE_URL: z.string().url(),
  JWT_SECRET: z.string().min(32),
  NEXT_PUBLIC_API_URL: z.string().url(),
});

export const env = envSchema.parse(process.env);
// Throws at startup if any variable is missing or malformed
```

<div align="right">
    <b><a href="#table-of-contents">↥ back to top</a></b>
</div>

## Q. How do you handle CORS in Next.js Route Handlers?

Set CORS headers explicitly — never use a wildcard `*` for credentialed requests:

```ts
// app/api/posts/route.ts
import { NextRequest, NextResponse } from 'next/server';

const ALLOWED_ORIGINS = ['https://app.example.com', 'https://www.example.com'];

function corsHeaders(origin: string) {
  const allowed = ALLOWED_ORIGINS.includes(origin) ? origin : '';
  return {
    'Access-Control-Allow-Origin': allowed,
    'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type, Authorization',
    'Access-Control-Allow-Credentials': 'true',
  };
}

export async function GET(request: NextRequest) {
  const origin = request.headers.get('origin') ?? '';
  const posts = await db.post.findMany();
  return NextResponse.json(posts, { headers: corsHeaders(origin) });
}

// Handle preflight
export async function OPTIONS(request: NextRequest) {
  const origin = request.headers.get('origin') ?? '';
  return new NextResponse(null, { status: 204, headers: corsHeaders(origin) });
}
```

<div align="right">
    <b><a href="#table-of-contents">↥ back to top</a></b>
</div>

## Q. How do you implement rate limiting in Next.js Middleware?

Use a sliding-window rate limiter backed by Redis (e.g., Upstash) in Middleware — runs at the Edge so it\'s extremely fast:

```ts
// middleware.ts
import { NextRequest, NextResponse } from 'next/server';
import { Ratelimit } from '@upstash/ratelimit';
import { Redis } from '@upstash/redis';

const ratelimit = new Ratelimit({
  redis: Redis.fromEnv(),
  limiter: Ratelimit.slidingWindow(10, '10 s'), // 10 req / 10 s per IP
});

export async function middleware(request: NextRequest) {
  const ip = request.headers.get('x-forwarded-for') ?? 'anonymous';
  const { success, limit, reset, remaining } = await ratelimit.limit(ip);

  if (!success) {
    return NextResponse.json(
      { error: 'Too Many Requests' },
      {
        status: 429,
        headers: {
          'X-RateLimit-Limit': String(limit),
          'X-RateLimit-Remaining': String(remaining),
          'X-RateLimit-Reset': String(reset),
          'Retry-After': String(Math.ceil((reset - Date.now()) / 1000)),
        },
      }
    );
  }

  return NextResponse.next();
}

export const config = { matcher: '/api/:path*' };
```

<div align="right">
    <b><a href="#table-of-contents">↥ back to top</a></b>
</div>

## Q. How do you implement Role-Based Access Control (RBAC) in Next.js?

Combine Auth.js sessions with Middleware to enforce role-based route protection:

```ts
// middleware.ts
import { auth } from '@/auth';
import { NextResponse } from 'next/server';

const roleRoutes: Record<string, string[]> = {
  '/admin': ['admin'],
  '/dashboard': ['admin', 'user'],
};

export default auth((req) => {
  const session = req.auth;
  const pathname = req.nextUrl.pathname;

  const entry = Object.entries(roleRoutes).find(([route]) =>
    pathname.startsWith(route)
  );

  if (entry) {
    const [, requiredRoles] = entry;
    if (!session) {
      return NextResponse.redirect(new URL('/login', req.url));
    }
    if (!requiredRoles.includes(session.user?.role as string)) {
      return NextResponse.redirect(new URL('/unauthorized', req.url));
    }
  }

  return NextResponse.next();
});
```

For fine-grained control inside Server Components:

```tsx
import { auth } from '@/auth';
import { notFound } from 'next/navigation';

export default async function AdminPage() {
  const session = await auth();
  if (session?.user?.role !== 'admin') notFound();

  return <div>Admin panel</div>;
}
```

<div align="right">
    <b><a href="#table-of-contents">↥ back to top</a></b>
</div>

## Q. How do you prevent XSS and CSRF attacks in Next.js?

**Preventing XSS (Cross-Site Scripting):**

React automatically escapes JSX output, but `dangerouslySetInnerHTML` bypasses this:

```tsx
//  Never render unsanitized user input as HTML
<div dangerouslySetInnerHTML={{ __html: userInput }} />

//  Sanitize first with a trusted library
import DOMPurify from 'isomorphic-dompurify';
<div dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(userInput) }} />
```

Also set a strict `Content-Security-Policy` header (see Security Headers section) to block inline script injection.

**Preventing CSRF (Cross-Site Request Forgery):**

**Server Actions** are protected against CSRF by default in Next.js 14+ — they check the `Origin` header and require the same-origin.

For custom **Route Handlers** that perform mutations, validate the `Origin` header:

```ts
// app/api/transfer/route.ts
import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  const origin = request.headers.get('origin') ?? '';
  const host = request.headers.get('host') ?? '';

  if (!origin.includes(host)) {
    return NextResponse.json({ error: 'Forbidden' }, { status: 403 });
  }

  // Process the request...
}
```

**Additional mitigations:**

| Measure | Purpose |
|---|---|
| `SameSite=Lax` or `Strict` on cookies | Prevents cookies being sent on cross-site requests |
| `HttpOnly` cookies | Blocks JS access to session tokens |
| `Secure` flag on cookies | Ensures cookies are only sent over HTTPS |
| Input validation with `zod` | Prevents malformed data reaching the server |

<div align="right">
    <b><a href="#table-of-contents">↥ back to top</a></b>
</div>

## Q. How do you implement a nonce-based Content Security Policy in Next.js?

A static CSP with `'unsafe-inline'` is weak. A **nonce-based CSP** generates a unique cryptographic token per request and allows only scripts/styles that carry that token — blocking injected content even if the CSP is otherwise broad.

```ts
// middleware.ts
import { NextRequest, NextResponse } from 'next/server';

export function middleware(request: NextRequest) {
  const nonce = Buffer.from(crypto.randomUUID()).toString('base64');

  const csp = [
    `default-src 'self'`,
    `script-src 'self' 'nonce-${nonce}' 'strict-dynamic'`,
    `style-src 'self' 'nonce-${nonce}'`,
    `img-src 'self' data: https:`,
    `font-src 'self'`,
    `object-src 'none'`,
    `base-uri 'self'`,
    `form-action 'self'`,
    `frame-ancestors 'none'`,
    `upgrade-insecure-requests`,
  ].join('; ');

  const response = NextResponse.next();
  response.headers.set('Content-Security-Policy', csp);
  // Forward nonce to layout via header so it can inject it into <script> tags
  response.headers.set('x-nonce', nonce);
  return response;
}

export const config = { matcher: '/((?!_next/static|_next/image|favicon.ico).*)' };
```

```tsx
// app/layout.tsx
import { headers } from 'next/headers';

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  const headersList = await headers();
  const nonce = headersList.get('x-nonce') ?? '';

  return (
    <html lang="en">
      <head>
        {/* Inline script allowed only because it carries the nonce */}
        <script nonce={nonce} dangerouslySetInnerHTML={{ __html: 'window.__NONCE__="' + nonce + '"' }} />
      </head>
      <body>{children}</body>
    </html>
  );
}
```

> **`'strict-dynamic'`** trusts scripts loaded by a nonced script, removing the need to allowlist every CDN. Pair with `'unsafe-inline'` fallback for older browsers that don\'t support nonces.

<div align="right">
    <b><a href="#table-of-contents">↥ back to top</a></b>
</div>

## Q. How do you secure Server Actions against unauthorized access?

Server Actions are publicly callable HTTP endpoints — **never assume a Server Action is only called from your own UI**. Always authenticate and authorize inside the action itself.

**Pattern 1: Session check at the top of every sensitive action**

```ts
// app/actions/post.ts
'use server';
import { auth } from '@/auth';
import { redirect } from 'next/navigation';

export async function deletePost(postId: string) {
  const session = await auth();

  // 1. Authenticate
  if (!session?.user) {
    redirect('/login');
  }

  // 2. Authorize — verify ownership, not just login
  const post = await db.post.findUnique({ where: { id: postId } });
  if (!post || post.authorId !== session.user.id) {
    throw new Error('Forbidden'); // Do not expose which resource exists
  }

  await db.post.delete({ where: { id: postId } });
  revalidatePath('/posts');
}
```

**Pattern 2: Reusable auth helper to reduce boilerplate**

```ts
// lib/action-guard.ts
import { auth } from '@/auth';
import { redirect } from 'next/navigation';

export async function requireAuth() {
  const session = await auth();
  if (!session?.user) redirect('/login');
  return session;
}

export async function requireRole(role: string) {
  const session = await requireAuth();
  if (session.user.role !== role) throw new Error('Forbidden');
  return session;
}
```

```ts
// app/actions/admin.ts
'use server';
import { requireRole } from '@/lib/action-guard';

export async function banUser(userId: string) {
  await requireRole('admin'); // throws if not admin
  await db.user.update({ where: { id: userId }, data: { banned: true } });
}
```

**Security checklist for Server Actions:**

| Check | Why |
|---|---|
| Verify session on every mutation | Actions are HTTP POST endpoints — they can be called externally |
| Verify resource ownership | Prevent IDOR (Insecure Direct Object Reference) |
| Validate all inputs with Zod | `formData` values are plain strings |
| Never return sensitive data | Error state is sent to the client |
| Use `revalidatePath` after mutations | Avoids stale UI |

<div align="right">
    <b><a href="#table-of-contents">↥ back to top</a></b>
</div>

## Internationalization (i18n)

<br>

## Q. How do you implement internationalization in Next.js?

**App Router** — use `next-intl` (most popular library):

```
app/
  [locale]/
    layout.tsx
    page.tsx
    about/page.tsx
messages/
  en.json
  fr.json
  de.json
```

```ts
// middleware.ts
import createMiddleware from 'next-intl/middleware';

export default createMiddleware({
  locales: ['en', 'fr', 'de'],
  defaultLocale: 'en',
});

export const config = {
  matcher: ['/((?!api|_next|.*\\..*).*)'],
};
```

```tsx
// app/[locale]/page.tsx
import { useTranslations } from 'next-intl';

export default function HomePage() {
  const t = useTranslations('HomePage');
  return <h1>{t('title')}</h1>;
}
```

```json
// messages/en.json
{
  "HomePage": { "title": "Welcome to our app" }
}
```

**Pages Router** has built-in i18n routing (no library needed for basic cases):

```js
// next.config.js
module.exports = {
  i18n: {
    locales: ['en', 'fr', 'de'],
    defaultLocale: 'en',
    localeDetection: true,
  },
};
```

Pages automatically receive the `locale` in `getServerSideProps` / `getStaticProps` context.

<div align="right">
    <b><a href="#table-of-contents">↥ back to top</a></b>
</div>

## Q. How do you handle locale-aware metadata and SEO in Next.js?

Use `generateMetadata` with the locale param to produce locale-specific titles, descriptions, and `hreflang` alternate links for search engines:

```tsx
// app/[locale]/layout.tsx
import { getTranslations } from 'next-intl/server';
import type { Metadata } from 'next';

const locales = ['en', 'fr', 'de'];

export async function generateMetadata({
  params: { locale },
}: {
  params: { locale: string };
}): Promise<Metadata> {
  const t = await getTranslations({ locale, namespace: 'Metadata' });

  return {
    title: t('title'),
    description: t('description'),
    alternates: {
      canonical: `https://example.com/${locale}`,
      languages: Object.fromEntries(
        locales.map(l => [l, `https://example.com/${l}`])
      ),
    },
  };
}

export async function generateStaticParams() {
  return locales.map(locale => ({ locale }));
}

export default function LocaleLayout({
  children,
  params: { locale },
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  return (
    <html lang={locale} dir={locale === 'ar' ? 'rtl' : 'ltr'}>
      <body>{children}</body>
    </html>
  );
}
```

**`messages/en.json`:**

```json
{
  "Metadata": {
    "title": "My App",
    "description": "Welcome to our platform"
  }
}
```

The `alternates.languages` map produces `<link rel="alternate" hreflang="...">` tags that help search engines serve the correct locale to users.

<div align="right">
    <b><a href="#table-of-contents">↥ back to top</a></b>
</div>

## Q. How do you switch locales and detect the user\'s preferred language in Next.js?

With `next-intl`, locale switching is done by navigating to the same path under the target locale segment. Create typed navigation helpers using `next-intl`\'s `createNavigation`:

```ts
// src/i18n/navigation.ts
import { createNavigation } from 'next-intl/navigation';

export const locales = ['en', 'fr', 'de'] as const;
export type Locale = (typeof locales)[number];

export const { Link, redirect, usePathname, useRouter } = createNavigation({ locales });
```

**Locale switcher component:**

```tsx
// components/LocaleSwitcher.tsx
'use client';
import { usePathname, useRouter, locales } from '@/i18n/navigation';
import { useLocale } from 'next-intl';

export default function LocaleSwitcher() {
  const locale = useLocale();
  const pathname = usePathname();
  const router = useRouter();

  return (
    <select
      value={locale}
      onChange={(e) => router.replace(pathname, { locale: e.target.value })}
    >
      {locales.map((l) => (
        <option key={l} value={l}>
          {l.toUpperCase()}
        </option>
      ))}
    </select>
  );
}
```

**Automatic locale detection** in the `next-intl` Middleware:

```ts
// middleware.ts
import createMiddleware from 'next-intl/middleware';
import { locales } from './src/i18n/navigation';

export default createMiddleware({
  locales,
  defaultLocale: 'en',
  localeDetection: true,   // reads Accept-Language header
  localePrefix: 'always',  // always prefix: /en/about, /fr/about
});
```

**How locale detection works (priority order):**
1. URL prefix (`/en/`, `/fr/`)
2. `NEXT_LOCALE` cookie (set on locale switch)
3. `Accept-Language` request header (browser language)
4. `defaultLocale` fallback

<div align="right">
    <b><a href="#table-of-contents">↥ back to top</a></b>
</div>

## Q. How do you use `next-intl` with Server Components and Server Actions?

`next-intl` provides both client and server APIs. Use the server API in Server Components, layouts, and Server Actions to avoid shipping translation logic to the client bundle.

**Reading translations in a Server Component:**

```tsx
// app/[locale]/blog/[slug]/page.tsx
import { getTranslations } from 'next-intl/server';

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { locale, slug } = await params;
  const t = await getTranslations({ locale, namespace: 'BlogPost' });
  const post = await fetchPost(slug);

  return (
    <article>
      <h1>{post.title}</h1>
      <p>{t('readTime', { minutes: post.readTime })}</p>
      <p>{t('publishedBy', { author: post.author })}</p>
    </article>
  );
}
```

**Messages with interpolation (`messages/en.json`):**

```json
{
  "BlogPost": {
    "readTime": "{minutes} min read",
    "publishedBy": "By {author}"
  }
}
```

**Using in a Server Action:**

```ts
// app/actions/contact.ts
'use server';
import { getTranslations, getLocale } from 'next-intl/server';

export async function submitContact(prevState: unknown, formData: FormData) {
  const locale = await getLocale();
  const t = await getTranslations({ locale, namespace: 'ContactForm' });

  const email = formData.get('email') as string;
  if (!email) {
    return { error: t('emailRequired') };
  }

  await sendEmail(email);
  return { success: t('successMessage') };
}
```

**Client Component** still uses `useTranslations` (hook), which hydrates from server-preloaded messages:

```tsx
'use client';
import { useTranslations } from 'next-intl';

export function ContactButton() {
  const t = useTranslations('ContactForm');
  return <button>{t('submit')}</button>;
}
```

> Use `getTranslations` (server) for Server Components and `useTranslations` (hook) for Client Components. Never import server-only `next-intl/server` inside `'use client'` files.

<div align="right">
    <b><a href="#table-of-contents">↥ back to top</a></b>
</div>

## Enterprise & Scalability Patterns

<br>

## Q. What are the four caching mechanisms in the Next.js App Router?

Next.js has four distinct, layered caching mechanisms:

| Cache | Location | Purpose | Duration |
|---|---|---|---|
| **Request Memoization** | Server memory | Dedup identical `fetch` calls in one render pass | Per request |
| **Data Cache** | Server (persistent) | Store `fetch` responses across requests | Until revalidated |
| **Full Route Cache** | Server (persistent) | Cache rendered HTML + RSC payload for static routes | Until revalidated |
| **Router Cache** | Client (browser) | Cache RSC payloads for visited routes | 30s (dynamic) / 5min (static) |

```
Incoming Request
  → Router Cache (client-side, browser memory)
    → Full Route Cache (server-side, filesystem/CDN)
      → Data Cache (server-side, persistent store)
        → Origin (DB / external API)
```

**Opting out of caches:**

```ts
// Skip Data Cache
fetch(url, { cache: 'no-store' });

// Skip Full Route Cache (force dynamic rendering)
export const dynamic = 'force-dynamic';

// Invalidate Router Cache for a path
revalidatePath('/dashboard');

// Invalidate Data Cache by tag
revalidateTag('products');
```

<div align="right">
    <b><a href="#table-of-contents">↥ back to top</a></b>
</div>

## Q. What is Partial Prerendering (PPR)?

PPR (stable in Next.js 15) combines **static** and **dynamic** rendering on the same page. The static shell is pre-rendered at build time and served instantly; dynamic holes are **streamed in** from the server.

```js
// next.config.js (Next.js 15)
module.exports = { experimental: { ppr: 'incremental' } };
```

```tsx
// Opt a specific route into PPR
export const experimental_ppr = true;
```

```tsx
// app/product/[id]/page.tsx
import { Suspense } from 'react';
import StaticProductInfo from './StaticProductInfo'; // Statically rendered at build
import DynamicStock from './DynamicStock';           // Streamed per-request

export default function ProductPage() {
  return (
    <>
      <StaticProductInfo />          {/* Served from edge cache instantly */}
      <Suspense fallback={<p>Checking stock...</p>}>
        <DynamicStock />             {/* Dynamic island, streamed in */}
      </Suspense>
    </>
  );
}
```

**Key benefit:** Eliminates the all-or-nothing tradeoff between SSG (fast but stale) and SSR (fresh but slow).

<div align="right">
    <b><a href="#table-of-contents">↥ back to top</a></b>
</div>

## Q. How do you manage database connections in a serverless Next.js deployment?

Serverless functions spin up/down per request, which can exhaust database connection limits without careful management.

**Singleton pattern for development (avoids Hot Reload leaks):**

```ts
// lib/prisma.ts
import { PrismaClient } from '@prisma/client';

const globalForPrisma = globalThis as unknown as { prisma: PrismaClient };

export const prisma =
  globalForPrisma.prisma ?? new PrismaClient({ log: ['error'] });

if (process.env.NODE_ENV !== 'production') {
  globalForPrisma.prisma = prisma;
}
```

**For production serverless** (Vercel, AWS Lambda), use an external connection pooler that maintains a persistent pool outside the function:
- **Prisma Accelerate** — managed connection pooling + global cache
- **PgBouncer** — self-hosted pooler for PostgreSQL
- **Neon / PlanetScale** — serverless-native databases with built-in pooling

<div align="right">
    <b><a href="#table-of-contents">↥ back to top</a></b>
</div>

## Q. How do you structure a large-scale Next.js project?

A common scalable structure used in enterprise applications:

```
src/
  app/                    # App Router routes
    (auth)/               # Route group — auth pages
    (dashboard)/          # Route group — protected pages
    api/                  # Route Handlers
  components/
    ui/                   # Primitive, reusable components (Button, Input)
    features/             # Feature-scoped components (PostCard, UserAvatar)
  lib/
    db.ts                 # Database client (singleton)
    auth.ts               # Auth.js config
    utils.ts              # Pure utility functions
  hooks/                  # Custom React hooks
  store/                  # Global client state (Zustand / Redux)
  services/               # External API clients
  actions/                # Server Actions
  types/                  # Shared TypeScript interfaces/types
public/
next.config.js
```

**Use `tsconfig.json` path aliases to avoid deep relative imports:**

```json
{
  "compilerOptions": {
    "baseUrl": ".",
    "paths": {
      "@/*": ["./src/*"],
      "@/components/*": ["./src/components/*"],
      "@/lib/*": ["./src/lib/*"],
      "@/actions/*": ["./src/actions/*"]
    }
  }
}
```

<div align="right">
    <b><a href="#table-of-contents">↥ back to top</a></b>
</div>

## Q. How do you implement URL-based search and filter state in Next.js?

Store search/filter state in URL search params rather than `useState` — makes pages shareable and bookmarkable, and works with the browser Back button:

```tsx
// components/SearchInput.tsx
'use client';
import { useRouter, usePathname, useSearchParams } from 'next/navigation';
import { useCallback } from 'react';

export default function SearchInput() {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const handleSearch = useCallback(
    (term: string) => {
      const params = new URLSearchParams(searchParams.toString());
      if (term) {
        params.set('query', term);
        params.delete('page'); // Reset pagination on new search
      } else {
        params.delete('query');
      }
      router.push(`${pathname}?${params.toString()}`);
    },
    [searchParams, pathname, router]
  );

  return (
    <input
      defaultValue={searchParams.get('query') ?? ''}
      onChange={(e) => handleSearch(e.target.value)}
      placeholder="Search..."
    />
  );
}
```

```tsx
// app/search/page.tsx — Server Component reads params directly
export default async function SearchPage({
  searchParams,
}: {
  searchParams: Promise<{ query?: string; page?: string }>;
}) {
  const { query = '', page = '1' } = await searchParams;
  const results = await searchDB(query, parseInt(page));
  return <ResultsList data={results} />;
}
```

<div align="right">
    <b><a href="#table-of-contents">↥ back to top</a></b>
</div>

## Q. How do you configure redirects and rewrites in Next.js?

Defined in `next.config.js` — processed at the Edge before rendering:

```js
// next.config.js
module.exports = {
  async redirects() {
    return [
      // Permanent redirect (308) — updates the browser URL
      {
        source: '/old-blog/:slug',
        destination: '/blog/:slug',
        permanent: true,
      },
      // Conditional redirect based on query param
      {
        source: '/docs',
        has: [{ type: 'query', key: 'version', value: 'v1' }],
        destination: '/docs/v1',
        permanent: false,
      },
    ];
  },

  async rewrites() {
    return [
      // Proxy to external API — browser URL stays the same
      {
        source: '/api/proxy/:path*',
        destination: 'https://internal-service.company.com/:path*',
      },
    ];
  },
};
```

| | Redirect | Rewrite |
|---|---|---|
| Browser URL changes | Yes | No |
| HTTP status code | 308 (permanent) / 307 (temp) | 200 |
| Use case | Old URL → New URL | API proxy, A/B testing |

<div align="right">
    <b><a href="#table-of-contents">↥ back to top</a></b>
</div>

## Q. How do you analyze and reduce bundle size in Next.js?

Use `@next/bundle-analyzer` to visualize what goes into each bundle:

```bash
npm install --save-dev @next/bundle-analyzer
```

```js
// next.config.js
const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
});

module.exports = withBundleAnalyzer({});
```

```bash
ANALYZE=true npm run build   # Opens an interactive bundle map in the browser
```

**Common optimizations:**

| Problem | Fix |
|---|---|
| Large component loaded eagerly | `next/dynamic` with `ssr: false` |
| Full library imported | Named imports: `import { debounce } from 'lodash-es'` |
| `moment.js` (very large) | Replace with `date-fns` or `dayjs` |
| Third-party scripts blocking render | `<Script strategy="lazyOnload" />` |
| Unused CSS | Configure `purgeCSS` or use Tailwind JIT |

Check the `next build` output — routes marked `○` are static, `ƒ` are dynamic (SSR). Aim to maximize `○` routes.

<div align="right">
    <b><a href="#table-of-contents">↥ back to top</a></b>
</div>

## Q. What is the `next/headers` API and when do you use it?

`next/headers` provides access to **incoming request headers and cookies** in Server Components, Server Actions, and Route Handlers. Accessing it opts the route out of static rendering.

```tsx
import { headers, cookies } from 'next/headers';

// Reading in a Server Component
export default async function Page() {
  const headersList = await headers();
  const cookieStore = await cookies();

  const userAgent = headersList.get('user-agent');
  const token = cookieStore.get('auth-token')?.value;

  return <div>User Agent: {userAgent}</div>;
}
```

```ts
// Setting a cookie in a Server Action
'use server';
import { cookies } from 'next/headers';

export async function setTheme(theme: string) {
  const cookieStore = await cookies();
  cookieStore.set('theme', theme, {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'lax',
    maxAge: 60 * 60 * 24 * 365, // 1 year
    path: '/',
  });
}
```

> **Note:** In Next.js 15, `cookies()` and `headers()` return Promises and must be awaited.

<div align="right">
    <b><a href="#table-of-contents">↥ back to top</a></b>
</div>

## Q. How do you implement feature flags in a Next.js application?

Feature flags control which features are visible to which users without redeploying. The three primary patterns in Next.js:

**Pattern 1: Edge Middleware flag evaluation (fastest — runs before rendering)**

```ts
// middleware.ts
import { NextRequest, NextResponse } from 'next/server';

const FLAGS: Record<string, boolean> = {
  newCheckout: process.env.FLAG_NEW_CHECKOUT === 'true',
  betaDashboard: process.env.FLAG_BETA_DASHBOARD === 'true',
};

export function middleware(request: NextRequest) {
  const response = NextResponse.next();

  // Forward flags to layouts/pages via headers
  response.headers.set('x-flag-new-checkout', String(FLAGS.newCheckout));

  // Rewrite to a different route based on a flag
  if (FLAGS.betaDashboard && request.nextUrl.pathname === '/dashboard') {
    return NextResponse.rewrite(new URL('/dashboard-beta', request.url));
  }

  return response;
}
```

**Pattern 2: Server Component reads flag from env or a feature-flag service**

```tsx
// app/checkout/page.tsx
import { NewCheckout } from './_new/NewCheckout';
import { LegacyCheckout } from './_legacy/LegacyCheckout';

export default async function CheckoutPage() {
  // Could also call a remote flags service here (LaunchDarkly, Unleash, etc.)
  const useNew = process.env.FLAG_NEW_CHECKOUT === 'true';

  return useNew ? <NewCheckout /> : <LegacyCheckout />;
}
```

**Pattern 3: A/B test via Middleware + cookie (persists experiment assignment)**

```ts
// middleware.ts
export function middleware(request: NextRequest) {
  const bucket = request.cookies.get('ab-checkout')?.value
    ?? (Math.random() < 0.5 ? 'a' : 'b');

  const response = NextResponse.rewrite(
    new URL(`/checkout-${bucket}`, request.url)
  );
  response.cookies.set('ab-checkout', bucket, { maxAge: 60 * 60 * 24 * 30 });
  return response;
}

export const config = { matcher: '/checkout' };
```

**External flag services** (recommended for production):
- **LaunchDarkly** — enterprise-grade, supports user targeting
- **Unleash** — open source, self-hostable
- **Vercel Flags** — native Next.js integration with Edge Config

<div align="right">
    <b><a href="#table-of-contents">↥ back to top</a></b>
</div>

## Q. How do you implement multi-tenancy in a Next.js application?

Multi-tenancy serves different content to different tenants (organizations/customers) from the same codebase. The two main patterns:

**Pattern 1: Subdomain-based tenancy via Middleware**

```ts
// middleware.ts
import { NextRequest, NextResponse } from 'next/server';

export function middleware(request: NextRequest) {
  const hostname = request.headers.get('host') ?? '';
  const rootDomain = process.env.ROOT_DOMAIN ?? 'example.com';
  const subdomain = hostname.replace(`.${rootDomain}`, '');

  // Skip for the main domain and localhost
  if (hostname === rootDomain || hostname.startsWith('localhost')) {
    return NextResponse.next();
  }

  // Rewrite: acme.example.com/dashboard → /tenants/acme/dashboard
  const url = request.nextUrl.clone();
  url.pathname = `/tenants/${subdomain}${url.pathname}`;
  return NextResponse.rewrite(url);
}

export const config = {
  matcher: ['/((?!_next/static|_next/image|favicon.ico).*)'],
};
```

```
app/
  tenants/
    [tenant]/
      layout.tsx      ← load tenant config, branding
      page.tsx        ← tenant home
      dashboard/
        page.tsx
```

```tsx
// app/tenants/[tenant]/layout.tsx
export default async function TenantLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ tenant: string }>;
}) {
  const { tenant } = await params;
  const config = await fetchTenantConfig(tenant);

  if (!config) notFound();

  return (
    <html>
      <body style={{ '--brand-color': config.brandColor } as React.CSSProperties}>
        {children}
      </body>
    </html>
  );
}
```

**Pattern 2: Path-based tenancy (`/[org]/dashboard`)**

```
app/
  [org]/
    dashboard/page.tsx  → /acme/dashboard
    settings/page.tsx   → /acme/settings
```

**Key practices:**
- Validate tenant existence in the layout/page — return `notFound()` for unknown tenants
- Cache tenant config with `unstable_cache` or `use cache` to avoid repeated DB lookups per render
- Use Row-Level Security (RLS) in your database to enforce data isolation
- Store the resolved tenant in a Server Component context or pass as props — never trust client-supplied tenant IDs for authorization

<div align="right">
    <b><a href="#table-of-contents">↥ back to top</a></b>
</div>

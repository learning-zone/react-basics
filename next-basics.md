# Next.js Basics

<br/>

## Table of Contents

## L1: Fundamentals (Beginner / Junior)
Focus: Core concepts, rendering strategies, and file-based routing.

* [Core Concepts](#-1-core-concepts): What Next.js is, Pages vs App Router, hydration, and the SWC compiler.
* [Rendering Strategies](#-2-rendering-strategies): SSG, SSR, ISR, RSC, streaming, and CSR.
* [Routing](#-3-routing): File-based routing, route groups, parallel routes, layouts, and navigation hooks.

## L2: Intermediate (Junior-Mid / Developer)
Focus: Data fetching, App Router patterns, and performance optimization.

* [Data Fetching](#-4-data-fetching): `fetch` caching, revalidation, request memoization, and client-side fetching with SWR / TanStack Query.
* [App Router (Next.js 13+)](#-5-app-router-nextjs-13): Special files, Server Actions, `layout.tsx` vs `template.tsx`, error handling, and Server/Client boundaries.
* [Performance & Optimization](#-6-performance--optimization): `next/image`, `next/font`, `<Script>` component, and code splitting with `next/dynamic`.

## L3: Advanced (Mid-Senior / Developer)
Focus: API routes, middleware, authentication, and deployment configuration.

* [API Routes & Server Actions](#-7-api-routes--server-actions): Pages Router API routes, App Router Route Handlers, and comparison with Server Actions.
* [Middleware & Authentication](#-8-middleware--authentication): Edge Middleware, `matcher` config, and Auth.js (NextAuth) integration.
* [Deployment & Configuration](#-9-deployment--configuration): `next.config.js`, deployment targets, and Edge Runtime vs. Node.js Runtime.

## L4: Expert (Senior / Lead)
Focus: Advanced App Router features, testing, and security.

* [Advanced Topics](#-10-advanced-topics): `generateStaticParams`, `generateMetadata`, fetch cache, `unstable_cache`, `use cache`, Turbopack, `useActionState`, and `useOptimistic`.
* [Testing](#-11-testing): Unit testing with Jest + RTL, Route Handler and Server Action testing, Playwright E2E, and mocking `next/navigation`.
* [Security & Best Practices](#-12-security--best-practices): Security headers, environment variables, CORS, rate limiting, RBAC, and XSS/CSRF prevention.

## L5: Enterprise (Architect / Staff Engineer)
Focus: Internationalization, scalability patterns, and production-grade architecture.

* [Internationalization (i18n)](#-13-internationalization-i18n): `next-intl` setup, locale routing via Middleware, and `hreflang` SEO metadata.
* [Enterprise & Scalability Patterns](#-14-enterprise--scalability-patterns): Four caching layers, PPR, serverless DB connections, project structure, URL state management, redirects/rewrites, and bundle analysis.

<br/>

## # 1. CORE CONCEPTS

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

## # 2. RENDERING STRATEGIES

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

## # 3. ROUTING

<br>

## Q. How does file-based routing work in Next.js?

Next.js provides clean file and folder conventions to handle more complex routing scenarios without writing custom logic

* **Dynamic Routes**: Wrap folder names in square brackets (e.g., `[id]` or `[slug]`) to catch variable path parameters.
* **Route Groups**: Wrap folder names in parentheses (e.g., `(marketing)`) to group routes for shared layouts without adding the folder name to the URL.
* **Catch-all Routes**: Use three dots inside brackets (e.g., `[...slug]`) to match all subsequent URL segments (e.g., `/shop/clothes/shirts/shoes`).
* **Intercepting Routes**: Let you load a new route while keeping the previous page in the background (e.g., expanding a photo on a feed without leaving the feed page).

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

**1. Route Groups**

Route groups allow you to organize your files and share layouts without affecting the URL structure. You create a route group by wrapping a folder name in parentheses:

* **Skip URL Segments**: The folder name in parentheses is completely omitted from the browser\'s URL path.
* **Shared Layouts**: You can apply a unique layout to a specific subset of routes without changing their paths.
* **Multiple Root Layouts**: You can split your entire application into different sections (e.g., (marketing) and (dashboard)) that each use a completely different root layout.

**Example**

```
app/
├── (marketing)/
│   ├── layout.tsx      <-- Applies only to marketing pages
│   ├── about/
│   │   └── page.tsx    <-- URL: /about
│   └── contact/
│       └── page.tsx    <-- URL: /contact
├── (dashboard)/
│   ├── layout.tsx      <-- Applies only to dashboard pages
│   └── settings/
│       └── page.tsx    <-- URL: /settings
```

**2. Parallel Routes** 

Parallel Routes allow you to simultaneously or conditionally render more than one page in the same layout. They are created using named **slots**, defined with the `@slotname` folder convention

* **Dashboard Widgets**: Perfect for complex dashboards where different sections (e.g., analytics, team feed, user profile) load independently.
* **Independent Loading states**: Each slot can have its own loading.tsx file, meaning slow components won\'t block the rest of the page.
* **Slots as Props**: Next.js automatically passes these slots as named React components (props) directly into the parent layout.tsx file.

**Example**

```
app/
└── dashboard/
    ├── @analytics/
    │   ├── page.tsx    <-- Analytics content
    │   └── loading.tsx <-- Loading skeleton just for analytics
    ├── @team/
    │   └── page.tsx    <-- Team feed content
    ├── layout.tsx      <-- Receives analytics and team as props
    └── page.tsx        <-- The main dashboard page (default slot)

```

```tsx
// app/dashboard/layout.tsx
export default function DashboardLayout({
  children,
  analytics,
  team,
}: {
  children: React.ReactNode
  analytics: React.ReactNode
  team: React.ReactNode
}) {
  return (
    <div className="dashboard-grid">
      <div className="main-content">{children}</div>
      <div className="sidebar-top">{analytics}</div>
      <div className="sidebar-bottom">{team}</div>
    </div>
  )
}
```

<div align="right">
    <b><a href="#table-of-contents">↥ back to top</a></b>
</div>

## Q. What are intercepting routes?

**Intercepting routes** allow you to load a completely different route from another part of your application inside your current page layout. This means you can change the browser URL and view new content without making the user lose their current visual context or layout.

**Example**

```
app/
  feed/page.tsx
  (..)photo/[id]/page.tsx  ← intercepts /photo/:id when navigated from /feed
```

**Folder Naming Convention**:

| Syntax | Intercepts from |
|---|---|
| `(.)` | matches segments on the same level. |
| `(..)` | matches segments one level above. |
| `(..)(..)` | matches segments two levels above. |
| `(...)` |  matches segments from the root `app` directory. |

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

These hooks are Client Component hooks ("`use client`") imported from `next/navigation` that allow you to read data directly from the browser\'s current URL.

**1. usePathname**

Reads the current URL's path name (the string after the domain name, excluding query parameters).

* **URL Example**: `https://example.com`
* **Returned Value**: `"/dashboard/settings"` (as a string)

**Example:**

```js
"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";

export default function NavLinks() {
  const pathname = usePathname();

  return (
    <Link href="/dashboard" className={pathname === "/dashboard" ? "active" : ""}>
      Dashboard
    </Link>
  );
}
```

**2. useSearchParams**

Reads the URL\'s query string (everything after the `?` symbol). It returns a read-only version of the web standard `URLSearchParams` object.

* **URL Example**: `https://example.com`
* **Returned Value**: An object helper where `.get('category')` returns `"shoes"` and `.get('sort')` returns `"asc"`.

**Example:**

```js
"use client";

import { useSearchParams } from "next/navigation";

export default function SearchResults() {
  const searchParams = useSearchParams();
  const query = searchParams.get("query"); // Reads ?query=value

  return <p>Search results for: {query}</p>;
}
```

**3. useParams**

Reads the dynamic **route parameters** filled in by the folder names in your file-based router (like `[slug]` or `[id]`)

Folder Path Example: `app/blog/[category]/[id]/page.tsx`
URL Example: `https://example.com`
Returned Value: An object containing the dynamic segments: `{ category: "tech", id: "123" }`

```js
"use client";

import { useParams } from "next/navigation";

export default function PostView() {
  const params = useParams(); // params is { category: "tech", id: "123" }

  return (
    <div>
      <p>Category: {params.category}</p>
      <p>Post ID: {params.id}</p>
    </div>
  );
}
```

<div align="right">
    <b><a href="#table-of-contents">↥ back to top</a></b>
</div>

## Q. How do nested layouts work in the App Router?

Nested layouts in Next.js mean that a layout defined inside a child folder is automatically wrapped inside the layout of its parent folder. This allows you to build a complex, multi-tiered user interface where parts of the page remain stable while others re-render.

```
app/
├── layout.tsx         <-- 1. Root Layout (Global Navbar & Footer)
└── dashboard/
    ├── layout.tsx     <-- 2. Dashboard Layout (Sidebar & Dashboard Header)
    └── settings/
        └── page.tsx   <-- 3. Settings Page (The actual page content)

```
**Example:**

**1. The Parent (Root Layout)**

The outermost layout controls the global HTML structure:

```tsx
// app/layout.tsx
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <nav>Global Main Navigation</nav>
        {/* Dashboard Layout will inject right here */}
        <main>{children}</main> 
      </body>
    </html>
  );
}
```

**2. The Child (Dashboard Nested Layout)**

The nested layout defines UI specific only to the dashboard section:

```tsx
// app/dashboard/layout.tsx
export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex-dashboard-container">
      <aside>Dashboard Sidebar Navigation Links</aside>
      {/* Settings Page (or other dashboard pages) will inject right here */}
      <section className="dashboard-content">{children}</section>
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

In Next.js, the `<Link>` component automatically loads the resources for a destination page in the background before you even click it. This mechanism called **prefetching**, allows the browser to transition to the new page almost instantly.

**How Prefetching Works Under the Hood**

* **Viewport Detection**: The `<Link>` component uses the Intersection Observer API. As soon as a link scrolls into the user\'s viewport (or is visible when the page first loads), Next.js registers it in a task queue.

* **Background Fetching**: Next.js then automatically downloads the necessary code for the destination route in the background using `<link rel="preload">` or similar fetch mechanisms.

* **Caching**: The prefetched code and data are stored in the in-memory **Router Cache**. When the user finally clicks the link, the page is pulled from the cache for a lightning-fast Client-Side Navigation (SPA transition) instead of forcing a full page reload.

**App Router behavior:**
- Prefetches the static parts of the route (shared layouts + loading UI)
- Dynamic segments are **not** prefetched by default
- Only active in production builds

**Pages Router behavior:**
- Prefetches the full page for static routes
- For dynamic/SSR routes, only the JSON data is prefetched

**Example:**

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

To create dynamic routes in Next.js, you use bracket notation (like `[slug]` or `[id]`) in your folder or file names to act as placeholders for dynamic data (e.g., product IDs, user names, or blog slugs).

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

In Next.js (specifically within the App Router), `loading.tsx` is a special file used to create instant, built-in loading states for your web pages. Whenever a user navigates to a new route, Next.js automatically displays the `loading.tsx` component as a fallback UI while the page\'s actual content and data are fetched and rendered on the server.

**How `loading.tsx` Works**

When you create a `loading.tsx` file in a route segment (such as `app/dashboard/loading.tsx`), it operates on several mechanisms that make your web app feel fast and responsive:

* **Automatic `<Suspense>` Boundary**: You don\'t need to manually wrap your components in a `<Suspense>` wrapper. Next.js automatically wraps your `page.tsx` file inside a React `<Suspense>` boundary and uses `loading.tsx` as the fallback.

* **Server-Side Streaming**: Instead of making the user stare at a blank white screen until the entire page is ready, Next.js streams the page to the browser in chunks. The static parts (like headers, sidebars, or layout skeletons) load instantly, while the loading.tsx UI is shown for the slower, data-dependent parts.

* **Interactive Shared Layouts**: Because loading.tsx only applies to the `page.tsx` segment, your shared layouts (defined in layout.tsx) stay completely interactive. If the user gets impatient, they can still click on navigation links to go elsewhere while the page is loading.

**Example:**

```tsx
// app/dashboard/loading.tsx
export default function Loading() {
  // You can return a simple spinner, a complex skeleton, or just text
  return (
    <div className="flex h-screen items-center justify-center">
      <p className="text-lg font-semibold text-gray-500 animate-pulse">
        Loading Dashboard...
      </p>
    </div>
  );
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

## # 4. DATA FETCHING

<br>

## Q. How do you fetch data in the App Router?

In the `Next.js` App Router, you fetch data directly inside React Server Components using standard `async/await` syntax, eliminating the old Pages Router methods like `getServerSideProps` or `getStaticProps`. Next.js extends the native JavaScript `fetch` API to handle server-side performance optimization through automated request memoization, caching, and revalidation.

**Example:**

```tsx
// 1. Cached by default (like getStaticProps)
const data = await fetch('https://api.example.com/data');

// 2. Dynamic Data (No Cache)
const data = await fetch('https://api.example.com/data', {
  cache: 'no-store',
});

// 3. Static Data (Force Cache)
const data = await fetch('https://api.example.com/data', {
  cache: 'force-cache',
});

// 4. Time-Based Revalidation
const data = await fetch('https://api.example.com/data', {
  next: { revalidate: 60 },
});
```

<div align="right">
    <b><a href="#table-of-contents">↥ back to top</a></b>
</div>

## Q. What is `revalidatePath` and `revalidateTag`?

In Next.js, `revalidatePath` and `revalidateTag` are functions used for on-demand cache revalidation. They allow you to purge or update stale server-side caches immediately after a data mutation (like submitting a form or receiving a database webhook) instead of waiting for a time-based timeout.

**1. `revalidatePath` (Path-Based)**

`revalidatePath` invalidates all cached data for a specific URL or filesystem path. It is best used when you mutate data and know exactly which page or layout needs to be refreshed.

**Example:**

```ts
// app/lib/actions.ts (Server Action)
'use server';

import { revalidatePath } from 'next/cache';
import { db } from '@/lib/db';

export async function addProduct(formData: FormData) {
  await db.product.create({ data: { name: formData.get('name') } });
  
  // Refreshes the entire product catalog page immediately
  revalidatePath('/products'); 
}
```

**2. revalidateTag (Tag-Based)**

`revalidateTag` invalidates cached data independently of where it appears on your website. Instead of targeting a specific URL, you assign a structural nickname ("tag") to data dependencies when fetching them.

**Example:**

```ts
// 1. Label the fetch request with a custom tag
async function getBlogPosts() {
  const res = await fetch('https://example.com', {
    next: { tags: ['posts'] } // Attach tag anchor here
  });
  return res.json();
}

// 2. Invalidate that tag anywhere on the site after a mutation
// app/lib/actions.ts
'use server';

import { revalidateTag } from 'next/cache';

export async function createPost() {
  // ... database create operations
  
  // Clear any cache block that used the 'posts' tag label
  revalidateTag('posts', 'max'); 
}
```

<div align="right">
    <b><a href="#table-of-contents">↥ back to top</a></b>
</div>

## Q. How does request memoization work in Next.js?

Request memoization is a core optimization feature built into React and leveraged by Next.js that automatically deduplicates identical data requests within a single server render pass.

If multiple components across your page layout or component tree require the exact same data, you can fetch it directly within each individual component without worrying about performance or making redundant network calls.

**Example:**

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

While you can use standard React state (useEffect), the Next.js team strongly recommends using a data-fetching library like **SWR** (built by Vercel) or **TanStack Query (React Query)**. These libraries handle automatic caching, revalidation, and loading states seamlessly

**Example: SWR**

```bash
npm install swr
```

```tsx
'use client';

import useSWR from 'swr';

// 1. Define a global or reusable fetcher
const fetcher = (url: string) => fetch(url).then((res) => res.json());

export default function ClientDashboard() {
  // 2. Fetch data with automatic caching and polling
  const { data, error, isLoading } = useSWR('/api/analytics', fetcher);

  if (isLoading) return <p>Loading statistics...</p>;
  if (error) return <p>Failed to load dashboard data.</p>;

  return (
    <div>
      <h1>Client Analytics</h1>
      <p>Active Users: {data.activeUsers}</p>
    </div>
  );
}
```

**Example: TanStack Query** (full-featured, ideal for complex apps):

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

**1. Sequential (slower — waterfall):**

Sequential fetching forces requests to run one after the other. The second fetch cannot start until the first fetch finishes completely. This is also called a **blocking waterfall**.

You create a sequential fetch when you directly `await` each network request on its own separate line.

**Example:**

```tsx
async function Page({ params }: { params: { id: string } }) {
  const user  = await fetchUser(params.id);   // starts after previous resolves
  const posts = await fetchPosts(params.id);  // total: ~400ms
}
```

**2. Parallel with `Promise.all` (faster):**

Parallel fetching initiates multiple network requests at the same time. This minimizes the total loading time because the page only takes as long as the slowest single request to finish executing.

To fetch in parallel, initiate the promises using `Promise.all` to resolve them simultaneously before your component returns its markup.

**Example:**

```tsx
async function Page({ params }: { params: { id: string } }) {
  const [user, posts] = await Promise.all([
    fetchUser(params.id),   // both start at the same time
    fetchPosts(params.id),  // total: ~200ms
  ]);
}
```

**Note:** Use `Promise.all` as the default pattern for **independent** data. Only fetch sequentially when one request depends on the result of another.

<div align="right">
    <b><a href="#table-of-contents">↥ back to top</a></b>
</div>

## # 5. APP ROUTER (NEXT.JS 13+)

<br>

## Q. What are the special files in the App Router?

In the Next.js App Router, special files are reserved filenames used within route segments to define the UI structure, routing behavior, error boundaries, and loading states for your application.

| File | Purpose |
|---|---|
| `page.tsx` | Unique UI for a route, makes it publicly accessible |
| `layout.tsx` | Defines UI that is shared across multiple pages |
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

A **Server Action** is an asynchronous function executed securely on the server that can be called directly from both Client and Server Components. Built on top of React Requests/Actions, Server Actions allow you to handle data mutations, form submissions, and database changes without manually writing API endpoints (`route.ts`) or fetching data via standard client-side `fetch` requests.

When a Server Action is triggered from the browser, Next.js automatically creates a secure, optimized POST request behind the scenes to execute the code on your server.

**Example:**

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

In Next.js, both `layout.tsx` and `template.tsx` are special files used to wrap and structure your `page.tsx` components.

* **layout.tsx** preserves state and does not re-render when users navigate between routes sharing that layout.
* **template.tsx** forces React to create a fresh DOM instance, discarding state and re-running lifecycle effects on every route navigation.

**Key Differences**

| | `layout.tsx` | `template.tsx` |
|---|---|---|
| State | Preserved across navigations | Re-initialized on every navigation |
| Component Lifecycle | Mounted once and reused across route segments. | Remounts and recreates DOM elements on every page visit. |
|Performance|Faster, as shared UI isn\'t destroyed or re-created.|Slightly higher overhead due to constant mounting/unmounting.|
| Use case | Persistent UI (nav, sidebar) | Page-specific enter animations, resetting state |

<div align="right">
    <b><a href="#table-of-contents">↥ back to top</a></b>
</div>

## Q. How do you handle errors in the App Router?

In the Next.js App Router, you handle errors by placing an `error.tsx` file inside a route segment. This file acts as a React Error Boundary that automatically catches runtime errors in its nested layout or page components and replaces them with a fallback UI.

**Example:**

```tsx
'use client';

import { useEffect } from 'react'

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
   useEffect(() => {
    // Log the error to an external error reporting service
    console.error(error)
  }, [error])

  return (
    <div>
      <h2>Something went wrong!</h2>
      <p>{error.message}</p>
      <button onClick={reset}>Try again</button>
    </div>
  );
}
```

**Note:** For root-level errors (outside root layout), use `global-error.tsx`.

<div align="right">
    <b><a href="#table-of-contents">↥ back to top</a></b>
</div>

## Q. How do you pass data from Server Components to Client Components?

To pass data from a Server Component to a Client Component, you pass the data directly via **React props**. Because Server Components execute on the server and Client Components are hydrated on the browser, Next.js automatically serializes this data into JSON format before sending it to the client.

**Example: Server Component (Parent)**

You fetch your data inside the Server Component (default behavior in the app router), import your Client Component, and bind the data to a prop.

```tsx
// app/dashboard/page.tsx (Server Component by default)
import ProfileCard from './ProfileCard'

async function getUserData() {
  const res = await fetch('https://example.com')
  return res.json()
}

export default async function DashboardPage() {
  // 1. Fetch data directly on the server
  const userData = await getUserData()

  // 2. Pass data into the Client Component via props
  return (
    <main>
      <h1>Dashboard</h1>
      <ProfileCard user={userData} />
    </main>
  )
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

**Note:** You **cannot** import a Server Component directly inside a `'use client'` file — always pass it via props or `children`.

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

`useFormStatus` is a React DOM hook that provides status information about the most recent parent form submission. It is primarily used in Next.js App Router applications to track whether a Server Action is actively processing a form submission.

**Example:**

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

**Note:** `useFormStatus` must be called inside a component that is **rendered as a child of the `<form>`** — it does not work in the same component that renders the form. Extracting the button into its own component is the standard pattern.

<div align="right">
    <b><a href="#table-of-contents">↥ back to top</a></b>
</div>

## # 6. PERFORMANCE & OPTIMIZATION

<br>

## Q. How does `next/image` optimize images?

The Next.js `<Image>` component automates performance gains by handling the heavy lifting of image pipeline delivery. Instead of just outputting a standard HTML `<img>` tag, Next.js dynamically modifies, sizes, and delivers assets based on the user\'s specific browser and device.

**Features:**

- **Lazy loads images by default** — Images below the fold are deferred and only fetched when they are about to enter the viewport, reducing initial page load time.

- **Resizes images on demand for each device size** — Next.js generates appropriately sized images per breakpoint so mobile devices never download unnecessarily large assets.

- **Serves modern formats (WebP, AVIF) automatically** — The image CDN converts source images to next-generation formats supported by the requesting browser, cutting file sizes significantly.

- **Prevents layout shift by requiring `width` and `height`** — Explicit dimensions let the browser reserve space before the image loads, eliminating Cumulative Layout Shift (CLS).

- **Supports priority prop for LCP images** — Adding `priority` preloads the image early in the document `<head>`, improving Largest Contentful Paint (LCP) scores for above-the-fold images.

**Example:** 

**1. Fixed-size image with priority (above-the-fold / LCP hero image)**

```tsx
// app/page.tsx
import Image from 'next/image';


export function HeroImage() {
  return (
    <Image
      src="/hero.jpg"
      alt="Hero banner"
      width={1200}
      height={600}
      priority        // Preloads the image — use only for above-the-fold images
      quality={85}    // 1–100, default is 75
    />
  );
}
```

**2. Responsive image that fills its parent container**

```tsx
export function CoverImage() {
  return (
    <div style={{ position: 'relative', width: '100%', height: '400px' }}>
      <Image
        src="/cover.jpg"
        alt="Cover photo"
        fill                      // Fills the nearest positioned parent
        sizes="(max-width: 768px) 100vw, 50vw"  // Helps browser pick the right srcset entry
        style={{ objectFit: 'cover' }}
      />
    </div>
  );
}
```

**3. Remote image with blur placeholder**

```tsx
export function RemoteImage() {
  return (
    <Image
      src="https://example.com/photo.jpg"
      alt="Remote photo"
      width={800}
      height={450}
      placeholder="blur"
      blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgAB..."  // tiny base64 preview
    />
  );
}
```

**4. next.config.ts — allow external image domains**

```tsx
// next.config.ts
import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'example.com',
        pathname: '/**',
      },
    ],
  },
};

export default nextConfig;
```

<div align="right">
    <b><a href="#table-of-contents">↥ back to top</a></b>
</div>

## Q. How does `next/font` work?

The `next/font` module in Next.js is a built-in package that automatically optimizes typography, self-hosts font files, and eliminates external network requests for improved performance and privacy. 

When a user visits your site, the fonts are downloaded at build time and served from the same domain as your application, meaning zero requests are made to third parties like Google Fonts.

**How `next/font` Solves Web Font Issues**

* **Zero Layout Shift**: Using the CSS size-adjust property, Next.js matches the proportions of the custom font with an automatic fallback font, ensuring the layout doesn\'t jump when the actual font loads.

* **Automatic Subsetting**: For Google Fonts, it downloads only the characters your website needs, significantly reducing the file size.

* **Privacy-Focused**: IP addresses are never sent to third-party servers.

**Example:**

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

The Next.js `<Script>` component is an extension of the native HTML `<script>` element that optimizes how third-party JavaScript files are loaded and executed. Imported from next/script, it helps developers improve Core Web Vitals (like Largest Contentful Paint and Interaction to Next Paint) by giving them precise control over script priorities.

**Core Loading Strategies**

| Strategy | Behavior |
|---|---|
| `beforeInteractive` | Injected into the initial HTML from the server; runs before any Next.js code or hydration. |
| `afterInteractive` | Loads early, but right after the page becomes interactive via hydration. |
| `lazyOnload` | Delays loading until browser idle time so it never blocks the main layout thread. |
| `worker` | Offloads the script to run entirely inside a web worker thread to keep the main thread clear. |

**Example:**

```tsx
/**
 * Script
 */

// app/layout.tsx
import Script from 'next/script';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        {children}

        {/* 1. beforeInteractive — runs before hydration (e.g. polyfills, consent managers) */}
        <Script
          src="https://cdn.example.com/consent-manager.js"
          strategy="beforeInteractive"
        />

        {/* 2. afterInteractive — runs right after hydration (e.g. analytics, tag managers) */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXX"
          strategy="afterInteractive"
        />

        {/* 3. lazyOnload — loads during browser idle time (e.g. chat widgets, social embeds) */}
        <Script
          src="https://cdn.example.com/chat-widget.js"
          strategy="lazyOnload"
          onLoad={() => console.log('Chat widget loaded')}
          onError={(e) => console.error('Script failed to load', e)}
        />

        {/* 4. Inline script with afterInteractive — configure a third-party tool inline */}
        <Script id="gtag-init" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){ dataLayer.push(arguments); }
            gtag('js', new Date());
            gtag('config', 'G-XXXXXXX');
          `}
        </Script>

        {/* 5. worker — offload heavy script to a Web Worker (requires Partytown integration) */}
        <Script
          src="https://cdn.example.com/heavy-lib.js"
          strategy="worker"
        />
      </body>
    </html>
  );
}
```

<div align="right">
    <b><a href="#table-of-contents">↥ back to top</a></b>
</div>

## Q. What is code splitting in Next.js?

**Code splitting** is a performance optimization technique that divides your application\'s large, monolithic JavaScript bundles into smaller, more manageable pieces (called "chunks"). 

Instead of forcing a user to download and parse your entire application code upfront, Next.js sends only the code strictly required to render the initial view, and loads the remaining code on-demand as the user navigates or interacts with the site.

**Example:**

```tsx
/**
 * Code Splitting
 */

'use client'

import dynamic from 'next/dynamic'
import { useState } from 'react'

// The component is only loaded when needed
const HeavyChart = dynamic(() => import('../components/HeavyChart'), {
  loading: () => <p>Loading chart...</p>, // UI to display while the chunk is downloading
})

export default function Dashboard() {
  const [showChart, setShowChart] = useState(false)

  return (
    <div>
      <h1>My Dashboard</h1>
      <button onClick={() => setShowChart(true)}>View Analytics</button>
      
      {/* HeavyChart bundle is only fetched after the button is clicked */}
      {showChart && <HeavyChart />}
    </div>
  )
}
```

<div align="right">
    <b><a href="#table-of-contents">↥ back to top</a></b>
</div>

## Q. How do you use `next/image` with remote images?

To use `next/image` with remote images, you must explicitly authorize the external domains or URL patterns in your Next.js configuration file (`next.config.js` or `next.config.mjs`). This security measure prevents unauthorized external websites from exploiting your Next.js server for malicious image optimization.

**Step 1. Configure Allowed Remote Patterns**

```js
/**
 * Image
 */

const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'example.com',
        port: '',
        pathname: '/images/**', // Wildcard allows any path under /images/
      },
      {
        protocol: 'https',
        hostname: '**.unsplash.com', // Wildcard allows any subdomain (e.g., ://unsplash.com)
      },
    ],
  },
};

export default nextConfig;
```

**Step 2: Render the Image in Your Component**

```tsx
import Image from 'next/image';

export default function Profile() {
  return (
    <div>
      <h1>User Profile</h1>
      <Image
        src="https://example.com"
        alt="User profile avatar"
        width={500} // Target width of the image in pixels
        height={300} // Target height of the image in pixels
        priority // Optional: Use this if the image is above the fold (visible instantly)
      />
    </div>
  );
}
```

<div align="right">
    <b><a href="#table-of-contents">↥ back to top</a></b>
</div>

## Q. How do you use local (self-hosted) fonts with `next/font`?

To use local (self-hosted) fonts with `next/font`, you use the `next/font/local` module. This feature automatically optimizes your custom font files, hosts them from your own domain, prevents layout shifts, and injects the proper CSS `@font-face` rules.

**Example:**

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

**Note:** Place font files in `public/fonts/` and use a path **relative to the file** where `localFont` is called. `next/font/local` zero-runtime-requests — no network calls are made at runtime.

<div align="right">
    <b><a href="#table-of-contents">↥ back to top</a></b>
</div>

## # 7. API ROUTES & SERVER ACTIONS

<br>

## Q. How do you create an API route in the Pages Router?

To create an API route in the Next.js Pages Router, you place a JavaScript or TypeScript file inside the `pages/api/` directory. Next.js automatically maps any file in this directory to a serverless backend endpoint corresponding to its file path

**Example:**

```ts
/**
 * API Route
 */

export default function handler(req, res) {
  const { method } = req;

  switch (method) {
    case 'GET':
      // Handle GET request logic here
      res.status(200).json({ users: [{ id: 1, name: "Alice" }] });
      break;
    case 'POST':
      // Handle POST request logic (e.g., parsing req.body)
      const data = req.body;
      res.status(201).json({ message: "User created successfully", data });
      break;
    default:
      // Return a 405 Method Not Allowed if the method is unsupported
      res.setHeader('Allow', ['GET', 'POST']);
      res.status(405).end(`Method ${method} Not Allowed`);
  }
}
```

<div align="right">
    <b><a href="#table-of-contents">↥ back to top</a></b>
</div>

## Q. How do you create a Route Handler in the App Router?

To create an API endpoint in the Next.js **App Router**, you define a Route Handler. Instead of using the `pages/api/` directory, you place a **route.js** file inside the `app/` directory.

```ts
/**
 * Route Handler
 */

// app/api/users/route.js

// Handle GET requests
export async function GET(request) {
  const users = [{ id: 1, name: "Alice" }];
  return Response.json(users);
}

// Handle POST requests
export async function POST(request) {
  // Read the incoming JSON body using standard Web API syntax
  const data = await request.json(); 
  
  return Response.json({ message: "User created", data }, { status: 201 });
}
```

<div align="right">
    <b><a href="#table-of-contents">↥ back to top</a></b>
</div>

## Q. What are the differences between API Routes and Server Actions?

The fundamental difference is that **API Routes** are traditional HTTP endpoints meant for any client to consume, while **Server Actions** are framework-integrated asynchronous functions designed specifically for secure client-to-server interactions without manual fetch calls.

| | API Routes / Route Handlers | Server Actions |
|---|---|---|
| Invocation | HTTP request | Direct function call |
| Boilerplate | Needs `fetch` call from client | None — call directly |
| Use case | Public API, webhooks, third-party calls | Form mutations, DB writes |
| Progressive enhancement | No | Yes (works without JS) |
| Caching | Manual | Integrates with Next.js cache |
|HTTP Methods|Supports `GET`, `POST`, `PUT`, `DELETE`|Always executes via a `POST` request|

<div align="right">
    <b><a href="#table-of-contents">↥ back to top</a></b>
</div>

## Q. How do you handle dynamic segments and query parameters in Route Handlers?

In Next.js Route Handlers (App Router), **dynamic segments** and query parameters are handled differently because dynamic segments are passed directly into the function arguments, while **query parameters** are extracted from the standard Web `Request` object.

**1. Handling Dynamic Segments (`[id]`)** 

Dynamic segments are captured by wrapping a folder name in square brackets, such as `app/api/items/[id]/route.js`.

Next.js automatically passes these segments into the **second argument** of your handler function under a `params` property. Because `params` is an asynchronous object, you must await it before accessing its properties.

**Example:**

```ts
/**
 * Dynamic Segments
 */

export async function GET(request, { params }) {
  // Always await params before unpacking properties
  const { id } = await params; 

  return Response.json({ 
    message: `Fetching details for item ${id}`,
    itemId: id 
  });
}
```

**2. Handling Query Parameters (`?search=query`)** 

Query parameters are not part of the folder structure. Instead, you extract them manually from the incoming request.url using the standard web browser URL API

**Example:**

```ts
/**
 * Query Parameters
 */

export async function GET(request) {
  // 1. Create a URL instance from the request string
  const { searchParams } = new URL(request.url);
  
  // 2. Safely extract specific parameters using .get()
  const query = searchParams.get('q');       // e.g., ?q=nextjs
  const limit = searchParams.get('limit');   // e.g., &limit=10

  // Optional: Handle missing values or apply defaults
  if (!query) {
    return Response.json({ error: "Missing 'q' search parameter" }, { status: 400 });
  }

  return Response.json({ 
    searchQuery: query, 
    resultsLimit: limit || '20' // fallback default string
  });
}
```

<div align="right">
    <b><a href="#table-of-contents">↥ back to top</a></b>
</div>

## Q. How do you validate input in Server Actions?

To validate input in Next.js Server Actions, you should parse the incoming payload using a schema validation library like **Zod** and return structural errors to the UI. Because Server Actions accept arbitrary payloads from the client, you must never trust raw inputs.

The industry standard pattern combines **Zod** for data schema validation with React\'s `useActionState` hook to handle form state and display field-level validation errors

**Define the Validation Schema**

```ts
/**
 * Validation Schema
 */

// app/actions/post.ts
'use server';

import { z } from 'zod';
import { revalidatePath } from 'next/cache';

const schema = z.object({
  title: z.string().min(1),
  content: z.string().min(10),
});

export async function createPost(prevState: unknown, formData: FormData) {
  const result = schema.safeParse({
    title: formData.get('title'),
    content: formData.get('content'),
  });

  if (!result.success) {
    return { errors: result.error.flatten().fieldErrors };
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

## # 8. MIDDLEWARE & AUTHENTICATION

<br>

## Q. What is Next.js Middleware?

**Next.js Middleware** is a server-side feature that allows you to execute code before a request is completed. It acts as an interceptor or "gatekeeper" that sits between an incoming HTTP request and the final rendering of your page or API route.

**Key Use Cases**

* **Authentication and Authorization**: Intercepting requests to protected pages (like /dashboard) to check for a valid session token, and redirecting unauthenticated users to a /login page.

* **Redirects and Rewrites**: Redirecting users based on their geolocation (e.g., country), device type, or URL paths. It can also rewrite URLs (like showing the content of /old-blog-post while keeping the URL as /new-blog-post in the browser).

* **Internationalization (i18n)**: Detecting a user\'s language preferences from request headers or cookies and dynamically routing them to the correct localized version of your site.

* **Security & Rate Limiting**: Checking for suspicious traffic, setting CORS headers for API routes, or throttling users by IP address before hitting your database.

* **Feature Flagging**: Serving experimental UI features to a subset of users based on cookies or URL parameters.

**Example:**

```ts
/**
 * Middleware
 */

import { NextResponse } from 'next/server';

export function middleware(request) {
  // Check for an auth token cookie
  if (request.nextUrl.pathname.startsWith('/dashboard')) {
    const token = request.cookies.get('auth-token');
    
    if (!token) {
      // Redirect to login page if unauthorized
      return NextResponse.redirect(new URL('/login', request.url));
    }
  }
  
  return NextResponse.next(); // Allow request to proceed
}

export const config = {
  matcher: ['/dashboard/:path*', '/admin/:path*'], // Only run on these paths
};

```

<div align="right">
    <b><a href="#table-of-contents">↥ back to top</a></b>
</div>

## Q. What is the `matcher` config in Middleware?

The `matcher` is a configuration object exported from middleware file that filters which specific incoming requests trigger your middleware. Without a matcher, middleware will execute on every single request to your site, including static assets like images, fonts, and CSS files, which can drastically slow down your site\'s performance.

**Example:**

```ts
/**
 * matcher 
 */

import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  return NextResponse.next();
}

export const config = {
  matcher: [
    // 1. Match specific paths and all their sub-paths
    '/dashboard/:path*',
    '/api/:path*',

    // 2. Match exact paths only
    '/settings',

    // 3. Negative lookahead: Match EVERYTHING EXCEPT static files and internals
    '/((?!api|_next/static|_next/image|favicon.ico|sitemap.xml|robots.txt).*)',
  ],
};
```

<div align="right">
    <b><a href="#table-of-contents">↥ back to top</a></b>
</div>

## Q. How do you implement authentication in Next.js?

To implement authentication in a Next.js (App Router) application, use a managed provider (recommended for production) or build a custom stateless session using `HttpOnly` cookies.

1. **Auth.js (NextAuth.js)** — most popular, supports OAuth, credentials, JWT, database sessions
2. **Clerk** — hosted auth with UI components
3. **Custom JWT** — store token in HttpOnly cookie, verify in Middleware

**Example (Auth.js with GitHub OAuth):**

```ts
// auth.ts — configure providers
import NextAuth from 'next-auth';
import GitHub from 'next-auth/providers/github';

export const { handlers, auth, signIn, signOut } = NextAuth({
  providers: [GitHub],
});
```

```ts
// app/api/auth/[...nextauth]/route.ts — expose Auth.js endpoints
import { handlers } from '@/auth';
export const { GET, POST } = handlers;
```

```tsx
// app/dashboard/page.tsx — protect a Server Component
import { auth } from '@/auth';
import { redirect } from 'next/navigation';

export default async function ProtectedPage() {
  const session = await auth();
  if (!session) redirect('/login');
  return <p>Welcome, {session.user?.name}</p>;
}
```

```tsx
// app/login/page.tsx — sign-in with a Server Action
import { signIn } from '@/auth';

export default function LoginPage() {
  return (
    <form action={async () => { 'use server'; await signIn('github', { redirectTo: '/dashboard' }); }}>
      <button type="submit">Sign in with GitHub</button>
    </form>
  );
}
```

```ts
// middleware.ts — protect routes globally
export { auth as middleware } from '@/auth';
export const config = { matcher: ['/dashboard/:path*'] };
```

```env
# .env.local
AUTH_SECRET=your_random_secret        # npx auth secret
AUTH_GITHUB_ID=your_github_client_id
AUTH_GITHUB_SECRET=your_github_client_secret
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

**Example:**

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
    maxAge: 60 * 60 * 24 * 30, // 30 days
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

## Q. How do you implement credentials-based authentication with Auth.js?

Use the `Credentials` provider for username/password login. Always hash passwords with `bcrypt` — never store or compare plaintext.

**Setup:**

```bash
npm install next-auth@beta bcryptjs
npm install --save-dev @types/bcryptjs
```

```ts
// auth.ts
import NextAuth from 'next-auth';
import Credentials from 'next-auth/providers/credentials';
import bcrypt from 'bcryptjs';
import { db } from '@/lib/db';
import { z } from 'zod';

const loginSchema = z.object({
  email: z.string().email(),
  password: z.string().min(8),
});

export const { handlers, auth, signIn, signOut } = NextAuth({
  providers: [
    Credentials({
      async authorize(credentials) {
        const parsed = loginSchema.safeParse(credentials);
        if (!parsed.success) return null;

        const { email, password } = parsed.data;

        const user = await db.user.findUnique({ where: { email } });
        if (!user || !user.passwordHash) return null;

        const isValid = await bcrypt.compare(password, user.passwordHash);
        if (!isValid) return null;

        // Return only safe, non-sensitive fields
        return { id: user.id, name: user.name, email: user.email, role: user.role };
      },
    }),
  ],
  pages: {
    signIn: '/login',   // Custom sign-in page
    error: '/login',    // Redirect errors back to login
  },
  session: { strategy: 'jwt' },
});
```

**Login form (Client Component with Server Action):**

```tsx
// app/login/page.tsx
'use client';
import { useActionState } from 'react';
import { loginAction } from './actions';

export default function LoginPage() {
  const [state, action, isPending] = useActionState(loginAction, null);

  return (
    <form action={action} className="flex flex-col gap-4 max-w-sm mx-auto">
      <input name="email" type="email" placeholder="Email" required />
      <input name="password" type="password" placeholder="Password" required />
      {state?.error && <p className="text-red-500">{state.error}</p>}
      <button type="submit" disabled={isPending}>
        {isPending ? 'Signing in…' : 'Sign in'}
      </button>
    </form>
  );
}
```

```ts
// app/login/actions.ts
'use server';
import { signIn } from '@/auth';
import { AuthError } from 'next-auth';

export async function loginAction(_: unknown, formData: FormData) {
  try {
    await signIn('credentials', {
      email: formData.get('email'),
      password: formData.get('password'),
      redirectTo: '/dashboard',
    });
  } catch (err) {
    if (err instanceof AuthError) {
      return { error: 'Invalid email or password' };
    }
    throw err; // Re-throw redirect
  }
}
```

> `signIn` throws a NEXT_REDIRECT error internally to perform the redirect — always re-throw unknown errors so the redirect completes.

<div align="right">
    <b><a href="#table-of-contents">↥ back to top</a></b>
</div>

## Q. How do you customize the JWT and session in Auth.js?

Use the `callbacks` option to extend the token and session with custom fields such as `id`, `role`, or `accessToken`. Data flows: `authorize` → `jwt` callback → `session` callback.

```ts
// auth.ts
import NextAuth from 'next-auth';
import type { Session } from 'next-auth';
import type { JWT } from 'next-auth/jwt';
import GitHub from 'next-auth/providers/github';

export const { handlers, auth, signIn, signOut } = NextAuth({
  providers: [GitHub],
  callbacks: {
    // 1. Called after sign-in. Enrich the JWT with DB data.
    async jwt({ token, user, account }) {
      if (user) {
        // `user` is only present on the initial sign-in
        token.id = user.id;
        token.role = (user as any).role ?? 'user';
      }
      if (account?.access_token) {
        token.accessToken = account.access_token;
      }
      return token;
    },

    // 2. Called whenever a session is checked. Expose safe fields to the client.
    async session({ session, token }: { session: Session; token: JWT }) {
      if (token) {
        session.user.id = token.id as string;
        session.user.role = token.role as string;
      }
      return session;
    },
  },
});
```

**Extend TypeScript types to avoid type errors:**

```ts
// types/next-auth.d.ts
import 'next-auth';
import 'next-auth/jwt';

declare module 'next-auth' {
  interface Session {
    user: {
      id: string;
      role: string;
    } & DefaultSession['user'];
  }
  interface User {
    role?: string;
  }
}

declare module 'next-auth/jwt' {
  interface JWT {
    id?: string;
    role?: string;
    accessToken?: string;
  }
}
```

**Reading the session:**

```tsx
// Server Component
import { auth } from '@/auth';

export default async function ProfilePage() {
  const session = await auth();
  return <p>Role: {session?.user.role}</p>;
}
```

```tsx
// Client Component
'use client';
import { useSession } from 'next-auth/react';

export function RoleBadge() {
  const { data: session } = useSession();
  return <span>{session?.user.role}</span>;
}
```

> **Rule:** Only put non-sensitive data in the session — it is returned to the browser. Never store passwords, full OAuth tokens, or PII beyond what is needed.

<div align="right">
    <b><a href="#table-of-contents">↥ back to top</a></b>
</div>

## Q. How do you implement geolocation-based routing in Next.js Middleware?

Next.js Middleware on Vercel automatically populates `request.geo` with the visitor's country, region, and city, derived from the request IP — no extra library needed.

```ts
// middleware.ts
import { NextRequest, NextResponse } from 'next/server';

// Map country codes to locale prefixes
const countryLocaleMap: Record<string, string> = {
  DE: 'de',
  FR: 'fr',
  JP: 'ja',
  BR: 'pt',
};

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Skip if already on a locale path
  if (/^\/(de|fr|ja|pt)/.test(pathname)) {
    return NextResponse.next();
  }

  const country = request.geo?.country ?? 'US';
  const locale = countryLocaleMap[country];

  // Redirect non-English visitors to their localized path
  if (locale) {
    const url = request.nextUrl.clone();
    url.pathname = `/${locale}${pathname}`;
    return NextResponse.redirect(url, { status: 307 }); // Temporary — respects user preference if they navigate away
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/((?!_next/static|_next/image|api|favicon.ico).*)'],
};
```

**Geo-based content personalization (without redirect):**

```ts
export function middleware(request: NextRequest) {
  const country = request.geo?.country ?? 'US';
  const response = NextResponse.next();

  // Forward geo info to Server Components / Route Handlers via headers
  response.headers.set('x-user-country', country);
  response.headers.set('x-user-city', request.geo?.city ?? '');

  return response;
}
```

```tsx
// app/page.tsx — Server Component reads geo header
import { headers } from 'next/headers';

export default async function HomePage() {
  const headersList = await headers();
  const country = headersList.get('x-user-country') ?? 'US';

  return <p>Shipping to: {country}</p>;
}
```

**Locally testing geo routing:**

Vercel populates `request.geo` only in deployed environments. For local development, set a fallback:

```ts
const country = request.geo?.country ?? process.env.NEXT_PUBLIC_GEO_FALLBACK ?? 'US';
```

> Use `307 Temporary Redirect` rather than `308 Permanent` for geo-routing — browsers cache 308 responses, which would prevent users from accessing the default locale if they move countries or use a VPN.

<div align="right">
    <b><a href="#table-of-contents">↥ back to top</a></b>
</div>

## # 9. DEPLOYMENT & CONFIGURATION

<br>

## Q. What is `next.config.js` used for?

`next.config.js` is the primary configuration file for Next.js applications. It allows  to customize default framework behaviors, optimize asset management, control headers, adjust build processing, and configure environmental integrations.

**Core Use Cases**

**1. Performance and Optimization**

You can optimize image loading and bundle sizes by white-listing remote domains or stripping development components.

```js
/** @type {import('next').NextConfig} */
const nextConfig = {
  // Remote patterns protect your app from malicious external images
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '://unsplash.com',
      },
    ],
  },
  // Automatically strips out console logs in production builds
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production',
  },
};

module.exports = nextConfig;
```

**2. Advanced Routing (Rewrites, Redirects, and Headers)**

You can inject custom logic directly into the server layer to manage routing paths or security parameters.

```js
module.exports = {
  // Redirects alter the URL in the browser address bar
  async redirects() {
    return [
      {
        source: '/old-blog/:slug',
        destination: '/news/:slug',
        permanent: true, // Triggers a 301 permanent status code
      },
    ];
  },

  // Rewrites mask the URL destination (useful for proxying external APIs)
  async rewrites() {
    return [
      {
        source: '/api/v1/:path*',
        destination: 'https://external-api-server.com*', 
      },
    ];
  },
};
```

**3. Enhancing Security Headers**

You can inject explicit HTTP security headers globally across your architecture to mitigate Cross-Site Scripting (XSS) or framing risks

```js
module.exports = {
  async headers() {
    return [
      {
        source: '/(.*)', // Applies to all routes in your project
        headers: [
          {
            key: 'X-Frame-Options',
            value: 'DENY',
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
        ],
      },
    ];
  },
};
```

**4. Custom Build Targets and Environments**

You can specify custom outputs, environment scopes, and build directory configurations:

```js
module.exports = {
  // Changes build compilation from a server engine to pure static files
  output: 'export', 
  
  // Custom build directory (default is '.next')
  distDir: 'build', 
  
  // Strict mode highlights potential problems in your React components
  reactStrictMode: true, 
};
```

<div align="right">
    <b><a href="#table-of-contents">↥ back to top</a></b>
</div>

## Q. What are the deployment options for Next.js?

Next.js apps can be deployed across three primary architectures: Managed Serverless Platforms, Self-Hosted Servers, or Static Web Hosting.

**1. Managed Serverless Platforms** 

These platforms require zero server configuration and automatically scale your application globally. They provide native support for Next.js features like Edge Middleware and Incremental Static Regeneration (ISR).

* **Vercel**: The creators of Next.js. It offers the tightest integration, instant zero-configuration deployments, and optimized edge infrastructure.

* **Netlify**: Uses an open-source Next.js runtime adapter to support server-side rendering (SSR), background functions, and localized edge routing.

* **AWS Amplify**: Automatically provisions AWS resources (CloudFront, Lambda, and S3) to host dynamic App Router applications directly within your AWS stack.

**2. Self-Hosted Environments**

If you want to avoid serverless vendor lock-in or need to deploy behind a private corporate firewall, you can host the Next.js Node.js server yourself.

* **Docker Containerization**: Next.js provides an official multi-stage Docker configuration template. This lets you package your application into a lightweight image.

* **Cloud Virtual Machines**: You can spin up a Linux instance on AWS EC2, DigitalOcean Droplets, or Google Compute Engine. You run the build output manually using a process manager like PM2 (next build && next start).

* **PaaS Providers**: Services like Render, Railway, or Fly.io accept your GitHub repository or Dockerfile and manage the underlying Linux servers for you.

**3. Static Web Hosting**

If your application does not use server-side computation, dynamic cookies, or Edge Middleware, you can export it into pure HTML, CSS, and JS.

To do this, you change your compilation target inside `next.config.js`:

```js
module.exports = {
  output: 'export', // Generates an 'out' folder containing static assets
};
```

Use code with caution.Once exported, you can host the application for free or near-free on global Content Delivery Networks (CDNs):

* GitHub Pages or GitLab Pages
* Amazon S3 combined with CloudFront
* Cloudflare Pages

<div align="right">
    <b><a href="#table-of-contents">↥ back to top</a></b>
</div>

## Q. What is the Edge Runtime vs. Node.js Runtime?

In Next.js, you can choose which environment executes your server-side code: **the Node.js** Runtime or the **Edge Runtime**.

The fundamental difference is that the **Node.js Runtime** is a full, heavy server environment built for complex backend tasks, while the **Edge Runtime** is a lightweight, ultra-fast environment built to run instantly across global CDN networks.

|Feature |Node.js Runtime|Edge Runtime
|---|---|---|
|Infrastructure|Centralised Origin Server |Distributed CDN Nodes (Edge)|
|Cold Starts|Slow (seconds)|Near-Instant (milliseconds) |
|API Coverage|Full Node.js ecosystem (fs, crypto, path)|Browser Web APIs (fetch, Headers, Crypto) |
|Execution Limits|None (Runs until script finishes)|Strict Timeouts (usually under 30s)|
|Database Access|Native TCP sockets (Prisma, PostgreSQL)|HTTP-based drivers / Serverless APIs|
|Ideal For|Heavy computing, traditional database queries|Geolocation routing, Middleware, Auth checks|

Opt into Edge Runtime in a Route Handler:

```ts
export const runtime = 'edge';
```

<div align="right">
    <b><a href="#table-of-contents">↥ back to top</a></b>
</div>

## Q. How do you containerize a Next.js app with Docker?

To containerize a Next.js app with Docker, the best practice is to utilize multi-stage builds and Next.js's built-in **standalone output**. This approach creates a self-contained, minimal Node.js server rather than copying your entire `node_modules` folder, shrinking the final image size from over 1GB to roughly 170MB

**Step 1: Configure Next.js for Standalone Output**

```js
/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone',
};

export default nextConfig;
```

**Step 2: Create a Dockerfile**

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

**Step 3: Create a `.dockerignore` file**

```dockerignore
node_modules
.next
.git
Dockerfile
```

**Step 4: Build and Run**

* **Build**: docker build -t nextjs-app .
* **Run**: docker run -p 3000:3000 nextjs-app

<div align="right">
    <b><a href="#table-of-contents">↥ back to top</a></b>
</div>

## Q. How does the `.env` file hierarchy work in Next.js?

Next.js has a built-in environment variable system that loads `.env` files based on your current environment (development, production, or test).

Files are loaded in a specific order of importance, where files loaded later will overwrite variables defined in earlier files.

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

**Note:** **Never** commit `.env.local` or any file containing real secrets. Add `.env*.local` to `.gitignore`.

<div align="right">
    <b><a href="#table-of-contents">↥ back to top</a></b>
</div>

## # 10. ADVANCED TOPICS

<br>

## Q. What is `generateStaticParams`?

`generateStaticParams` is a Next.js App Router function used to statically generate dynamic routes at build time.

It replaces the older Pages Router function `getStaticPaths`. It works by returning an array of objects, where each object represents the route parameters for a page you want to pre-render.

**Example:**

```tsx
// app/blog/[slug]/page.js

// 1. Generate the paths at build time
export async function generateStaticParams() {
  const posts = await fetch('https://example.com').then((res) => res.json());

  // Return an array of objects matching the [slug] parameter
  return posts.map((post) => ({
    slug: post.id,
  }));
}

// 2. The page component receives the params
export default async function Page({ params }) {
  const { slug } = await params;
  return <main>Rendered post: {slug}</main>;
}
```

<div align="right">
    <b><a href="#table-of-contents">↥ back to top</a></b>
</div>

## Q. What is `generateMetadata`?

`generateMetadata` is a Next.js App Router function used to dynamically generate SEO metadata (such as titles, descriptions, and Open Graph tags) for your pages.

It replaces the older Pages Router `<Head>` component and allows you to fetch data before setting metadata.

**Example:**

```tsx
// app/products/[id]/page.js

// 1. Dynamically generate the metadata
export async function generateMetadata({ params, searchParams }) {
  // Read route parameters (remember to await params in newer Next.js versions)
  const { id } = await params;

  // Fetch product data
  const product = await fetch(`https://example.com{id}`).then((res) => res.json());

  // Return the metadata object
  return {
    title: product.name,
    description: product.summary,
    openGraph: {
      images: [product.image_url],
    },
  };
}

// 2. The actual page component
export default async function Page({ params }) {
  return <main>Product Page Content</main>;
}
```

<div align="right">
    <b><a href="#table-of-contents">↥ back to top</a></b>
</div>

## Q. How does the fetch cache work in the App Router?

In the Next.js App Router, the `fetch` cache works by extending the native Web `fetch` API to handle server-side data caching and memoization. Next.js caching behaviors operate across two primary mechanisms: **Request Memoization** (in-memory per request) and the **Data Cache** (persistent across requests).

**Example:**

The cache is controlled via `fetch` options:

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

**Note:** As of Next.js 15, `fetch` requests are **no longer cached by default** — you must opt-in explicitly.

<div align="right">
    <b><a href="#table-of-contents">↥ back to top</a></b>
</div>

## Q. What is `unstable_cache` and when do you use it?

`unstable_cache` is a low-level Next.js Server function that allows you to cache the results of expensive operations like database queries or third-party API calls and share that cached data across multiple requests and user sessions. 

It directly injects non-fetch asynchronous operations into Next.js\'s built-in, persistent Data Cache.

**When Do You Use It?**

You should use `unstable_cache` if you are using the Next.js App Router and need to:

* **Cache Non-Fetch Operations**: Next.js automatically caches native `fetch()` requests. However, if you are querying a database directly via an ORM (like Prisma, Drizzle, or Mongoose) or using an external SDK (like Supabase, Firebase, or Stripe), fetch is bypassed. `unstable_cache` lets you manually cache these data layers.

* **Share Data Across Multiple Requests**: Unlike React\'s `cache()` API—which only dedupes data within a single request lifecycle `unstable_cache` persists data across multiple requests, users, and server deployments.

* **Implement Fine-Grained Invalidation**: You need time-based caching (e.g., caching a heavy dashboard query for 1 hour) or demand-driven cache-busting via specific strings called tags.

**Example:**

```ts
import { db } from '@/lib/db';
import { unstable_cache } from 'next/cache';

// 1. Define the cached function globally
export const getCachedUser = unstable_cache(
  async (userId: string) => {
    // Expensive database query or SDK call
    return await db.users.findUnique({ where: { id: userId } });
  },
  ['user-cache-key'], // Array of keys used internally to identify the cache entry
  { 
    revalidate: 3600,  // Time-based: Cache expires in seconds (1 hour)
    tags: ['users']    // Tag-based: Used to manually purge the cache later
  }
);

// 2. Use it inside a Server Component
export default async function ProfilePage({ params }: { params: { id: string } }) {
  const user = await getCachedUser(params.id);
  return <div>{user.name}</div>;
}
```

<div align="right">
    <b><a href="#table-of-contents">↥ back to top</a></b>
</div>

## Q. What is the `use cache` directive?

The "`use cache`" directive is a native language-level feature in Next.js that transitions caching from complex configuration files and wrapper functions into declarative code boundaries. 

Instead of automatically caching everything by default or relying on manual string arrays, Next.js shifts to an explicit, opt-in caching model using simple string literals.

```ts
/**
 * Caching an async function
 */

import { cacheLife } from 'next/cache';
import { db } from '@/lib/db';

export async function getProductDetails(productId: string) {
  'use cache';                  // Caches just this function's output
  cacheLife('minutes');         // Automatically revalidates every few minutes
  
  return await db.product.findUnique({ where: { id: productId } });
}
```

<div align="right">
    <b><a href="#table-of-contents">↥ back to top</a></b>
</div>

## Q. What is Turbopack?

**Turbopack** is a high-performance, incremental build system and bundler written in Rust, designed by **Vercel** as the modern successor to Webpack. Turbopack reimagines application building from the ground up to support the scale of modern JavaScript and TypeScript codebases.

As of Next.js 16, Turbopack has graduated to full production-readiness and is now the default stable bundler for both local development and production builds.

It offers:

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

`useActionState` (formerly named `useFormState` in earlier React 18 versions) acts as a stateful wrapper around a Server Action. It bridges the gap between server-side execution and client-side UI by capturing the return value of a Server Action and managing loading states automatically.

Instead of invoking a Server Action directly inside an `onSubmit` handler, you pass the Server Action into `useActionState`. The hook then generates an enhanced action wrapper that you bind directly to a `<form>`\'s action attribute.

**Example:**

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

`useOptimistic` is a React hook that updates the UI immediately assuming an asynchronous operation will succeed, rather than waiting for the server to respond. When used with Server Actions, it provides a perceived instant response time for user interactions like liking a post, adding an item to a list, or submitting a comment.

If the Server Action succeeds, the UI smoothly transitions to the actual server-confirmed state. If the Server Action fails, `useOptimistic` automatically rolls back the UI to the original, correct state.

**Example:**

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

In the Next.js App Router, you generate `sitemap.xml` and `robots.txt` using special file conventions (`sitemap.ts` and `robots.ts`) inside the root of your app directory. Next.js automatically executes these files and serves them with the correct XML/text headers and caching strategies.

**Example:**

```ts
/**
 * app/sitemap.ts
 */

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
/**
 * app/robots.ts
 */

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

**Example:**

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

In the Next.js App Router, you can generate dynamic Open Graph (OG) images using the framework\'s built-in `ImageResponse` API from `next/og`. This API converts JSX and HTML-like inline CSS into a raw `.png` image on the fly using Satori under the hood.

**Example:**

```tsx
/**
 * app/blog/[slug]/opengraph-image.tsx
 */

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

## # 11. TESTING

<br>

## Q. How do you unit test Next.js components?

Use **Jest** with **React Testing Library** for component and hook testing.

**Setup:**

```bash
npm install --save-dev jest jest-environment-jsdom @testing-library/react @testing-library/jest-dom
```

```ts
/**
 * jest.config.ts
 */

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
/**
 * __tests__/Counter.test.tsx
 */

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

## # 12. SECURITY & BEST PRACTICES

<br>

## Q. How do you set security headers in Next.js?

To set security headers in Next.js, you configure them in your `next.config.js` (or `next.config.mjs`) file. This injects HTTP protection headers into every server response, protecting your application against common vulnerabilities like Cross-Site Scripting (XSS), clickjacking, and data injection attacks.

**Example:**

```js
/**
 * next.config.js
 */

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

To handle Cross-Origin Resource Sharing (CORS) in Next.js Route Handlers, you must return the appropriate CORS HTTP headers (`Access-Control-Allow-*`) in your server response loop.

**Example:**

```ts
/**
 * app/api/posts/route.ts
 */

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

To implement rate limiting in Next.js Middleware, you must use an HTTP-based distributed data store. Next.js Middleware executes in a stateless Edge Runtime, which means traditional, in-memory Node.js state containers (like standard global variables or standard `lru-cache`) will reset on every serverless execution loop. 

The industry standard for serverless Edge architectures is combining an HTTP-based Redis driver, such as Upstash Redis or Vercel KV, with the `@upstash/ratelimit` SDK

**Example:**

Install Dependencies

```bash
npm install @upstash/redis @upstash/ratelimit
```

Write the Rate Limiter Middleware

```ts
/**
 * middleware.ts
 */

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

Implementing Role-Based Access Control (RBAC) in Next.js requires a layered security strategy. You must enforce access control across three critical boundaries:

* **Middleware Layer**: Blocks unauthorized users at the routing boundary before pages render.
* **Data Fetching Layer (Server Components/Actions)**: Secures raw backend database mutation channels.
* **UI Representation Layer (Client Components)**: Hides interactive layout buttons for visual polish.

**Phase 1: Structuring Your User Session Identity**

Whether you use an authentication provider (like Auth0, Clerk, NextAuth/Auth.js) or a custom JWT architecture, ensure that the active user\'s session object explicitly exposes a `role` property string (e.g., '`admin`', '`editor`', '`viewer`').

```js
// Example Session Type Shape
export type UserSession = {
  id: string;
  email: string;
  role: 'admin' | 'editor' | 'user';
};
```

**Phase 2: Protecting Routes with Middleware (middleware.ts)**

The root `middleware.ts` serves as your application\'s front gate. It reads incoming cookies or JWT tokens and checks if the route path matches the user\'s privilege matrix before processing the request.

```js
// middleware.ts
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/request';

// 1. Establish your application route access rules matrix
const ROLE_ROUTES = {
  admin: [/^\/admin/],
  editor: [/^\/editor/, /^\/admin\/reports/], // Editors can view limited admin assets
  user: [/^\/dashboard/],
};

export async function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // 2. Extract session credentials (adapt this to match your auth provider structure)
  // For example, reading a secure cookie or parsing a verified JWT token
  const userToken = request.cookies.get('session_token')?.value;

  // Mock decoding logic (in production, verify the signature securely)
  const user: UserSession | null = userToken ? JSON.parse(atob(userToken.split('.')[1])) : null;

  // 3. Handle unauthenticated visitors attempting to access secure sub-routes
  const isProtectedPath = pathname.startsWith('/admin') || pathname.startsWith('/dashboard');
  if (isProtectedPath && !user) {
    return NextResponse.redirect(new URL('/login', request.url));
  }

  // 4. Validate Role Access Authorizations
  if (user) {
    if (pathname.startsWith('/admin') && user.role !== 'admin') {
      // Redirect unauthorized users to an explicit Access Denied page
      return NextResponse.redirect(new URL('/unauthorized', request.url));
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/admin/:path*', '/dashboard/:path*'],
};
```

**Phase 3: Securing the Backend (Server Components & Server Actions)**

Middleware protects the page view, but it can be bypassed if API links or background endpoints are exposed. You must validate roles directly inside your data processing files.

```js
// app/actions.ts
'use server'

import { getSession } from '@/lib/auth'; // Custom auth resolver helper

export async function deleteUserAccountAction(targetUserId: string) {
  // 1. Fetch active session state from the server context
  const session = await getSession();

  // 2. Strictly validate identity and structural roles
  if (!session || session.role !== 'admin') {
    throw new Error('Unauthorized Access: Administrative access is required to execute this mutation.');
  }

  // 3. Process the critical database mutation securely
  // await db.deleteUser(targetUserId);
  return { success: true };
}
```

**Phase 4: Cleaning Up the UI Layout (Client Components)**

Hiding navigation menus or control panel items based on roles ensures users only see what they can interact with. Do not use this as your only security layer, as client-side states can be manipulated.

```js
// components/AdminPanelCard.tsx
'use client'

import { useSession } from '@/hooks/useSession'; // Client auth sync hook

export default function AdminPanelCard() {
  const { user, isLoading } = useSession();

  if (isLoading) return <p>Loading application state...</p>;
  
  // Conditionally strip out interactive elements based on user scope
  if (!user || user.role !== 'admin') {
    return null; 
  }

  return (
    <div className="admin-card">
      <h3>System Infrastructure Logs</h3>
      <button onClick={() => alert('Flushing server logs...')}>Flush Database Caches</button>
    </div>
  );
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

## # 13. INTERNATIONALIZATION (I18N)

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

## # 14. ENTERPRISE & SCALABILITY PATTERNS

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
    <div>
      {children}
    </div>
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

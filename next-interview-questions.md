# Next.js Interview Questions

<br/>

## Table of Contents

1. [Core Concepts](#core-concepts)
2. [Rendering Strategies](#rendering-strategies)
3. [Routing](#routing)
4. [Data Fetching](#data-fetching)
5. [App Router (Next.js 13+)](#app-router-nextjs-13)
6. [Performance & Optimization](#performance--optimization)
7. [API Routes & Server Actions](#api-routes--server-actions)
8. [Middleware & Authentication](#middleware--authentication)
9. [Deployment & Configuration](#deployment--configuration)
10. [Advanced Topics](#advanced-topics)
11. [Testing](#testing)
12. [Security & Best Practices](#security--best-practices)
13. [Internationalization (i18n)](#internationalization-i18n)
14. [Enterprise & Scalability Patterns](#enterprise--scalability-patterns)

<br/>

## Core Concepts

### 1. What is Next.js and how does it differ from plain React?

Next.js is a React framework built on top of React that provides:

- **File-based routing** — no need for React Router
- **Server-side rendering (SSR)** and **Static Site Generation (SSG)** out of the box
- **API routes** to build backend endpoints in the same project
- **Automatic code splitting** per page
- **Built-in image optimization** via `next/image`
- **Font optimization** via `next/font`

Plain React is a UI library that only handles the view layer. Next.js adds the full-stack capabilities on top of it.

<div align="right">
    <b><a href="#table-of-contents">↥ back to top</a></b>
</div>

### 2. What are the main rendering strategies in Next.js?

| Strategy | Renders At | Use Case |
|---|---|---|
| **SSG** (Static Site Generation) | Build time | Blogs, marketing pages |
| **SSR** (Server-Side Rendering) | Each request | Dashboards, personalized pages |
| **ISR** (Incremental Static Regeneration) | Build + periodic revalidation | E-commerce, news sites |
| **CSR** (Client-Side Rendering) | Browser | Highly interactive UIs |
| **RSC** (React Server Components) | Server, streamed | App Router default |

<div align="right">
    <b><a href="#table-of-contents">↥ back to top</a></b>
</div>

### 3. What is the difference between the Pages Router and the App Router?

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

### 4. What is `_app.tsx` in the Pages Router?

`_app.tsx` is the custom App component that wraps all pages. It is used to:

- Persist layout between page changes
- Keep state when navigating
- Inject global CSS
- Add global context providers

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

### 5. What is `_document.tsx` and when do you use it?

`_document.tsx` customizes the HTML document shell (`<html>`, `<head>`, `<body>`). It only renders on the server and is used for:

- Adding custom `lang` attribute
- Adding third-party scripts or meta tags
- Injecting server-rendered CSS-in-JS styles (e.g., styled-components)

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

## Rendering Strategies

### 6. How does Static Site Generation (SSG) work in the Pages Router?

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

### 7. How does Server-Side Rendering (SSR) work?

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

### 8. What is Incremental Static Regeneration (ISR)?

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

### 9. How do React Server Components (RSC) work in the App Router?

In the App Router, **all components are Server Components by default**. They:

- Run only on the server
- Can directly `await` database queries or API calls
- Cannot use hooks or browser APIs
- Reduce client-side JavaScript

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

### 10. What is streaming and how does Next.js support it?

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

## Routing

### 11. How does file-based routing work in Next.js?

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

### 12. What are route groups and parallel routes in the App Router?

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

### 13. What are intercepting routes?

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

### 14. How do you programmatically navigate in Next.js?

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

### 15. What is the `usePathname`, `useSearchParams`, and `useParams` hook?

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

## Data Fetching

### 16. How do you fetch data in the App Router?

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

### 17. What is `revalidatePath` and `revalidateTag`?

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

### 18. How does request memoization work in Next.js?

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

## App Router (Next.js 13+)

### 19. What are the special files in the App Router?

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

### 20. What is a Server Action?

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

### 21. What is the difference between `layout.tsx` and `template.tsx`?

| | `layout.tsx` | `template.tsx` |
|---|---|---|
| State | Preserved across navigations | Re-initialized on every navigation |
| DOM | Not unmounted/remounted | Unmounted and remounted |
| Use case | Persistent UI (nav, sidebar) | Page-specific enter animations, resetting state |

<div align="right">
    <b><a href="#table-of-contents">↥ back to top</a></b>
</div>

### 22. How do you handle errors in the App Router?

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

## Performance & Optimization

### 23. How does `next/image` optimize images?

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

### 24. How does `next/font` work?

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

### 25. What is the Next.js `<Script>` component?

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

### 26. What is code splitting in Next.js?

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

## API Routes & Server Actions

### 27. How do you create an API route in the Pages Router?

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

### 28. How do you create a Route Handler in the App Router?

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

### 29. What are the differences between API Routes and Server Actions?

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

## Middleware & Authentication

### 30. What is Next.js Middleware?

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

### 31. What is the `matcher` config in Middleware?

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

### 32. How do you implement authentication in Next.js?

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

## Deployment & Configuration

### 33. What is `next.config.js` used for?

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

### 34. What are the deployment options for Next.js?

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

### 35. What is the Edge Runtime vs. Node.js Runtime?

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

## Advanced Topics

### 36. What is `generateStaticParams`?

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

### 37. What is `generateMetadata`?

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

### 38. How does the fetch cache work in the App Router?

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

### 39. What is `unstable_cache` and when do you use it?

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

### 40. What is the `use cache` directive? (Next.js 15+)

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

### 41. What is Turbopack?

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

### 42. What is the difference between `notFound()` and redirecting to a 404 page?

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

### 43. How does `useFormState` / `useActionState` work with Server Actions?

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

### 44. What is `useOptimistic` and how does it work with Server Actions?

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

### 45. What are common Next.js performance pitfalls?

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

## Testing


### 46. How do you unit test Next.js components?

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

### 47. How do you test Server Actions and Route Handlers?

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

### 48. How do you write E2E tests for Next.js with Playwright?

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

## Security & Best Practices


### 49. How do you set security headers in Next.js?

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

### 50. How do you handle environment variables securely in Next.js?

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

### 51. How do you handle CORS in Next.js Route Handlers?

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

### 52. How do you implement rate limiting in Next.js Middleware?

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

### 53. How do you implement Role-Based Access Control (RBAC) in Next.js?

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

## Internationalization (i18n)


### 54. How do you implement internationalization in Next.js?

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

## Enterprise & Scalability Patterns


### 55. What are the four caching mechanisms in the Next.js App Router?

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

### 56. What is Partial Prerendering (PPR)?

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

### 57. How do you manage database connections in a serverless Next.js deployment?

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

### 58. How do you structure a large-scale Next.js project?

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

### 59. How do you implement URL-based search and filter state in Next.js?

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

### 60. How do you configure redirects and rewrites in Next.js?

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

### 61. How do you analyze and reduce bundle size in Next.js?

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

### 62. What is the `next/headers` API and when do you use it?

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

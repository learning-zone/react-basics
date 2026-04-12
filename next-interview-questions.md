# Next.js Interview Questions & Answers

---

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

---

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

---

### 2. What are the main rendering strategies in Next.js?

| Strategy | Renders At | Use Case |
|---|---|---|
| **SSG** (Static Site Generation) | Build time | Blogs, marketing pages |
| **SSR** (Server-Side Rendering) | Each request | Dashboards, personalized pages |
| **ISR** (Incremental Static Regeneration) | Build + periodic revalidation | E-commerce, news sites |
| **CSR** (Client-Side Rendering) | Browser | Highly interactive UIs |
| **RSC** (React Server Components) | Server, streamed | App Router default |

---

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

---

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

---

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

---

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

---

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

---

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

---

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

---

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

---

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

---

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

---

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

---

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

---

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

---

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

---

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

---

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

---

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

---

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

---

### 21. What is the difference between `layout.tsx` and `template.tsx`?

| | `layout.tsx` | `template.tsx` |
|---|---|---|
| State | Preserved across navigations | Re-initialized on every navigation |
| DOM | Not unmounted/remounted | Unmounted and remounted |
| Use case | Persistent UI (nav, sidebar) | Page-specific enter animations, resetting state |

---

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

---

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

---

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

---

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

---

### 26. What is code splitting in Next.js?

Next.js automatically code-splits by page/route — each page only loads the JavaScript it needs. Additional manual splitting can be done with `next/dynamic`:

```tsx
import dynamic from 'next/dynamic';

const HeavyChart = dynamic(() => import('./HeavyChart'), {
  loading: () => <p>Loading chart...</p>,
  ssr: false, // Disable SSR for this component
});
```

---

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

---

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

---

### 29. What are the differences between API Routes and Server Actions?

| | API Routes / Route Handlers | Server Actions |
|---|---|---|
| Invocation | HTTP request | Direct function call |
| Boilerplate | Needs `fetch` call from client | None — call directly |
| Use case | Public API, webhooks, third-party calls | Form mutations, DB writes |
| Progressive enhancement | No | Yes (works without JS) |
| Caching | Manual | Integrates with Next.js cache |

---

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

---

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

---

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

---

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

---

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

---

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

---

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

---

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

---

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

---

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

---

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

---

### 41. What is Turbopack?

Turbopack is the Rust-based successor to Webpack, included in Next.js 13+. It offers:

- Significantly faster local development (HMR)
- Incremental computation — only recompiles changed modules
- Default in `next dev` as of Next.js 15

Enabled automatically, or explicitly:

```bash
next dev --turbopack
```

---

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

---

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

---

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

---

### 45. What are common Next.js performance pitfalls?

1. **Not using `priority` on LCP images** — causes poor Core Web Vitals
2. **Importing large libraries on the client** — use `next/dynamic` with `ssr: false`
3. **Overusing `'use client'`** — push it to leaf components to keep Server Components
4. **Fetching in Client Components** — fetch in Server Components and pass as props
5. **Not using ISR or tags-based revalidation** — leads to unnecessary SSR overhead
6. **Missing `loading.tsx`** — users see blank screens during data fetches
7. **Using `getServerSideProps` for mostly static content** — use ISR instead
8. **Not setting `cache: 'no-store'` for truly dynamic routes** — stale data bugs

---

*Last updated: April 2026 | Covers Next.js 13–15*

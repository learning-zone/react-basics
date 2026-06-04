# Next.js Scenario-Based MCQ

> Scenario-based multiple-choice questions covering Next.js App Router, data fetching, performance, security, and architectural patterns. Mapped across L1–L4 proficiency tiers.

<br/>

## Table of Contents

## L1: Fundamental (Junior / Associate)
Focus: App Router routing structure, Page vs Layout, `use client` vs `use server`, dynamic routing syntax.

* [App Router Fundamentals](#-1-app-router-fundamentals): Route segments, layouts, `use client`, dynamic params, catch-all routes.

## L2: Intermediate (Mid-Level)
Focus: Data fetching strategies, Server Actions, caching behaviors, SEO via Metadata API, hydration errors.

* [Data Fetching & Server Actions](#-2-data-fetching--server-actions): ISR with `revalidate`, Server Actions in forms, `cache: 'no-store'`, `generateMetadata`, hydration errors.

## L3: Advanced (Senior)
Focus: Partial Prerendering (PPR), middleware routing, Dynamic IO, security in Server Actions, `error.tsx` boundaries.

* [Advanced Server Rendering](#-3-advanced-server-rendering): PPR, middleware `matcher`, `unstable_noStore`, Server Action authorization, `error.tsx` scope.

## L4: Expert (Architect)
Focus: Multi-zone architectures, `unstable_cache` with tag-based invalidation, Edge vs Node.js runtimes, micro-frontend integrations.

* [Architecture & Runtime](#-4-architecture--runtime): Multi-zone with `basePath`, `unstable_cache` tags, `revalidateTag`, Module Federation, Edge vs Node.js runtime.

<br/>

## # 1. App Router Fundamentals

<br>

## Q. Given the following `app/` directory structure, which file is responsible for rendering the content at the URL `/dashboard/settings`?

```
app/
├── layout.tsx
├── page.tsx
├── dashboard/
│   ├── layout.tsx
│   └── settings/
│       ├── layout.tsx
│       └── page.tsx
```

- A) `app/dashboard/layout.tsx`
- B) `app/dashboard/settings/layout.tsx`
- C) `app/dashboard/settings/page.tsx`
- D) `app/layout.tsx`

<details>
<summary><strong>Answer & Explanation</strong></summary>

**Answer: C) `app/dashboard/settings/page.tsx`**

**Explanation:** In the Next.js App Router, the `page.tsx` file is the UI unique to a route segment and the only file that makes a route publicly accessible. `app/dashboard/settings/page.tsx` is the file rendered at `/dashboard/settings`.

**Why the distractors are wrong:**
- **A** — `app/dashboard/layout.tsx` wraps all routes under `/dashboard` but does not render content at any specific URL on its own.
- **B** — `app/dashboard/settings/layout.tsx` wraps children under `/dashboard/settings` but is not itself the rendered content.
- **D** — `app/layout.tsx` is the root layout that wraps every page in the app but renders nothing specifically at `/dashboard/settings`.

</details>

<div align="right">
    <b><a href="#table-of-contents">↥ back to top</a></b>
</div>

## Q. A developer adds a `<nav>` component inside `app/dashboard/layout.tsx`. Which statement is **true** about this layout?

```tsx
// app/dashboard/layout.tsx
export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <nav>Dashboard Nav</nav>
      {children}
    </div>
  );
}
```

- A) The `<nav>` is destroyed and re-mounted every time the user navigates between dashboard sub-routes.
- B) The `<nav>` persists across navigations between dashboard sub-routes without re-mounting.
- C) The `<nav>` is only rendered on the initial full-page load and not during client-side navigation.
- D) The layout component re-renders but the `<nav>` DOM node is never updated after the first mount.

<details>
<summary><strong>Answer & Explanation</strong></summary>

**Answer: B) The `<nav>` persists across navigations between dashboard sub-routes without re-mounting.**

**Explanation:** Layouts in the App Router preserve their state and DOM nodes across navigations between sibling and child routes. This is a core advantage of the App Router over the Pages Router, where page-level wrappers (`_app.tsx`) were re-mounted on every navigation.

**Why the distractors are wrong:**
- **A** — Describes Pages Router behavior or full-page reload behavior, not App Router segment layouts.
- **C** — Next.js App Router layouts persist during client-side navigation, not only on the initial load.
- **D** — The key distinction is that the component is not destroyed and re-mounted; it can re-render if its props change, but React will reconcile the DOM rather than replace it.

</details>

<div align="right">
    <b><a href="#table-of-contents">↥ back to top</a></b>
</div>

## Q. A developer writes the following component. What is the **minimum required change** to make it work correctly in the Next.js App Router?

```tsx
// app/components/Counter.tsx
import { useState } from 'react';

export default function Counter() {
  const [count, setCount] = useState(0);
  return (
    <button onClick={() => setCount((c) => c + 1)}>Count: {count}</button>
  );
}
```

- A) Add `export const runtime = 'edge'` at the top of the file.
- B) Add `'use client';` as the very first line of the file.
- C) Move the component into the `pages/` directory instead of `app/`.
- D) Wrap the component in a `<Suspense>` boundary in the parent layout.

<details>
<summary><strong>Answer & Explanation</strong></summary>

**Answer: B) Add `'use client';` as the very first line of the file.**

**Explanation:** By default, all components in `app/` are React Server Components and cannot use `useState`, browser APIs, or event handlers like `onClick`. Adding `'use client'` at the top of the file marks it as a Client Component boundary, enabling the use of React hooks and browser interactivity.

**Why the distractors are wrong:**
- **A** — `export const runtime = 'edge'` configures the server execution environment for a route or middleware; it has no effect on component type (Server vs. Client).
- **C** — Moving to `pages/` would work but is not the minimum required change; it also adopts an entirely different router architecture.
- **D** — `<Suspense>` handles async loading states and streaming; it does not grant access to React hooks in Server Components.

</details>

<div align="right">
    <b><a href="#table-of-contents">↥ back to top</a></b>
</div>

## Q. A Next.js App Router project has the file `app/products/[id]/page.tsx`. What is the **correct** way to access the dynamic `id` parameter inside the page component?

```tsx
// app/products/[id]/page.tsx
export default function ProductPage(/* ??? */) {
  // access id here
}
```

- A) `function ProductPage({ params }: { params: { id: string } })`
- B) `function ProductPage({ query }: { query: { id: string } })`
- C) `function ProductPage() { const { id } = useRouter().query; }`
- D) `function ProductPage({ searchParams }: { searchParams: { id: string } })`

<details>
<summary><strong>Answer & Explanation</strong></summary>

**Answer: A) `function ProductPage({ params }: { params: { id: string } })`**

**Explanation:** In the App Router, dynamic route segment values are passed to `page.tsx` and `layout.tsx` components via the `params` prop. The object keys mirror the folder bracket names: for `[id]`, the key is `id`.

**Why the distractors are wrong:**
- **B** — `query` is not a recognized prop in the App Router. It was a `router.query` pattern in the Pages Router.
- **C** — `useRouter()` from `next/navigation` (App Router) exposes navigation methods but does not expose `query`. Dynamic params are accessed via the `useParams()` hook in Client Components or via the `params` prop in Server Components.
- **D** — `searchParams` is a separate App Router prop used for URL query strings (e.g., `?tab=settings`), not for dynamic path segments defined with bracket syntax.

</details>

<div align="right">
    <b><a href="#table-of-contents">↥ back to top</a></b>
</div>

## Q. A developer needs a route that matches **both** `/docs` (with no additional segments) **and** `/docs/guide/intro`. Which folder naming convention achieves this in the App Router?

- A) `app/docs/[...slug]/page.tsx`
- B) `app/docs/[[...slug]]/page.tsx`
- C) `app/docs/[slug]/page.tsx`
- D) `app/docs/(slug)/page.tsx`

<details>
<summary><strong>Answer & Explanation</strong></summary>

**Answer: B) `app/docs/[[...slug]]/page.tsx`**

**Explanation:** `[[...slug]]` is an **optional catch-all** route. When `slug` is absent (i.e., the URL is `/docs`), the segment receives `undefined`. When segments are present (e.g., `/docs/guide/intro`), it receives `['guide', 'intro']`. This makes it the only option that matches both the zero-segment and multi-segment cases.

**Why the distractors are wrong:**
- **A** — `[...slug]` is a **required** catch-all. It does not match the base path `/docs` because at least one segment is mandatory; accessing `/docs` would return a 404.
- **C** — `[slug]` matches exactly one dynamic segment (e.g., `/docs/intro`) and does not match zero or multiple segments.
- **D** — Parentheses `(slug)` in the App Router denote **Route Groups**, which affect layout organization without creating URL segments. They do not create catch-all patterns.

</details>

<div align="right">
    <b><a href="#table-of-contents">↥ back to top</a></b>
</div>

## # 2. Data Fetching & Server Actions

<br>

## Q. A developer writes the following data-fetching code in a Server Component. What is the **correct description** of its caching behavior?

```tsx
// app/news/page.tsx
async function getNews() {
  const res = await fetch('https://api.example.com/news', {
    next: { revalidate: 3600 },
  });
  return res.json();
}

export default async function NewsPage() {
  const news = await getNews();
  return <ul>{news.map((n) => <li key={n.id}>{n.title}</li>)}</ul>;
}
```

- A) The page is statically generated at build time and never updated unless manually redeployed.
- B) The page is always server-rendered fresh on every request with no caching.
- C) The page is cached and regenerated in the background at most once per hour after a request triggers it.
- D) The fetch result is cached in the browser\'s service worker for one hour.

<details>
<summary><strong>Answer & Explanation</strong></summary>

**Answer: C) The page is cached and regenerated in the background at most once per hour after a request triggers it.**

**Explanation:** `next: { revalidate: 3600 }` configures Incremental Static Regeneration (ISR) via Next.js\'s server-side Data Cache. The response is stored in the cache and served to subsequent requests. After 3,600 seconds (1 hour), the next incoming request triggers a background regeneration while continuing to serve the stale cached response — the classic stale-while-revalidate pattern.

**Why the distractors are wrong:**
- **A** — Describes a fully static page with `cache: 'force-cache'` and no revalidation period; that page would never update post-deployment.
- **B** — Describes `cache: 'no-store'` or `export const dynamic = 'force-dynamic'`, which bypass the Data Cache entirely.
- **D** — `next: { revalidate }` controls Next.js\'s **server-side** Data Cache, not the browser cache or service workers.

</details>

<div align="right">
    <b><a href="#table-of-contents">↥ back to top</a></b>
</div>

## Q. Which of the following is the **correct** implementation of a Server Action used directly in an HTML `<form>`?

**A)**
```tsx
// app/contact/page.tsx
'use client';

async function submitForm(formData: FormData) {
  'use server';
  const name = formData.get('name');
  await saveToDb(name);
}

export default function ContactPage() {
  return (
    <form action={submitForm}>
      <input name="name" />
      <button>Submit</button>
    </form>
  );
}
```

**B)**
```tsx
// app/contact/page.tsx
async function submitForm(formData: FormData) {
  'use server';
  const name = formData.get('name');
  await saveToDb(name);
}

export default function ContactPage() {
  return (
    <form action={submitForm}>
      <input name="name" />
      <button>Submit</button>
    </form>
  );
}
```

**C)**
```tsx
// app/contact/page.tsx
'use server';

async function submitForm(formData: FormData) {
  const name = formData.get('name');
  await saveToDb(name);
}

export default function ContactPage() {
  return (
    <form action={submitForm}>
      <input name="name" />
      <button>Submit</button>
    </form>
  );
}
```

**D)**
```tsx
// app/actions.ts
'use server';

export async function submitForm(formData: FormData) {
  const name = formData.get('name');
  await saveToDb(name);
}

// app/contact/page.tsx
import { submitForm } from './actions';

export default function ContactPage() {
  return (
    <form action={submitForm}>
      <input name="name" />
      <button>Submit</button>
    </form>
  );
}
```

<details>
<summary><strong>Answer & Explanation</strong></summary>

**Answer: D) Separate `actions.ts` file with `'use server'` at the module level, imported into the page.**

**Explanation:** Option D is the canonical pattern. A dedicated file marked `'use server'` exports one or more server functions. A Server Component page imports and passes the action as the `<form action={...}>` prop. This pattern cleanly separates concerns and works for both Server and Client Component consumers.

**Why the distractors are wrong:**
- **A** — A file marked `'use client'` cannot contain inline `'use server'` function directives. The two module-level directives are mutually exclusive; Next.js will throw a build error.
- **B** — Technically valid (an inline `'use server'` inside a Server Component function body is permitted), but Option D represents the recommended architectural pattern.
- **C** — Placing `'use server'` at the module level of a file that also exports a React component as its default export would mark all exports (including the component) as server-only, causing a build error when Next.js attempts to render the component.

</details>

<div align="right">
    <b><a href="#table-of-contents">↥ back to top</a></b>
</div>

## Q. A developer debates whether `cache: 'no-store'` and `next: { revalidate: 0 }` are equivalent in Next.js. Which statement is **most accurate**?

```ts
// Option A
fetch(url, { cache: 'no-store' });

// Option B
fetch(url, { next: { revalidate: 0 } });
```

- A) They are completely identical; both skip the Data Cache on every request.
- B) `cache: 'no-store'` opts out of caching entirely, while `revalidate: 0` still writes to the cache but immediately marks it as stale, potentially allowing a single stale read.
- C) `revalidate: 0` is not a valid Next.js option; only integer values ≥ 1 are accepted.
- D) `cache: 'no-store'` only affects the browser cache, while `revalidate: 0` affects the server-side Data Cache.

<details>
<summary><strong>Answer & Explanation</strong></summary>

**Answer: B) `cache: 'no-store'` opts out of caching entirely, while `revalidate: 0` still writes to the cache but immediately marks it as stale, potentially allowing a single stale read.**

**Explanation:** These two options have subtle but important semantic differences. `cache: 'no-store'` (a Web Fetch API standard option) instructs Next.js never to read from or write to the Data Cache. `next: { revalidate: 0 }` still participates in the Data Cache infrastructure but with a TTL of zero, which means cached entries are immediately considered stale — the background revalidation cycle still applies. Their interactions with `generateStaticParams` and route-segment `dynamic` config can differ in edge cases.

**Why the distractors are wrong:**
- **A** — They are not identical. Their behavior diverges in how they interact with the Data Cache and the route rendering mode determination.
- **C** — `revalidate: 0` is an explicitly documented and valid Next.js option used to force dynamic rendering via the Data Cache path.
- **D** — Both options affect Next.js\'s server-side Data Cache. Neither option directly controls the browser HTTP cache.

</details>

<div align="right">
    <b><a href="#table-of-contents">↥ back to top</a></b>
</div>

## Q. A developer wants to set a dynamic `<title>` and `og:image` for a product detail page. Which implementation is **correct**?

**A)**
```tsx
export const metadata = {
  title: 'Product Detail',
  openGraph: { images: ['/og-default.png'] },
};
```

**B)**
```tsx
export async function generateMetadata({ params }) {
  const product = await fetchProduct(params.id);
  return {
    title: product.name,
    openGraph: { images: [product.imageUrl] },
  };
}
```

**C)**
```tsx
'use client';
import { Helmet } from 'react-helmet';

export default function ProductPage({ params }) {
  return <Helmet><title>Product</title></Helmet>;
}
```

**D)**
```tsx
export async function getServerSideProps({ params }) {
  const product = await fetchProduct(params.id);
  return { props: { title: product.name } };
}
```

<details>
<summary><strong>Answer & Explanation</strong></summary>

**Answer: B) `generateMetadata` async function accessing `params`.**

**Explanation:** `generateMetadata` is the App Router\'s native mechanism for generating dynamic metadata per request. It receives `{ params, searchParams }`, can perform async data fetching, and returns a metadata object. Next.js automatically renders the result as `<title>`, `<meta>`, and `<link>` tags in the `<head>`.

**Why the distractors are wrong:**
- **A** — Static `export const metadata` is evaluated once at build time and cannot reference runtime values like `params.id`. It produces the same metadata for every product.
- **C** — `react-helmet` is a client-side library. It injects tags into the DOM after JavaScript loads, which means search engine crawlers may not see the correct metadata. The App Router\'s Metadata API renders tags server-side.
- **D** — `getServerSideProps` is a Pages Router API that does not exist in the App Router. Even in the Pages Router, it could not directly populate `<head>` tags — that required a separate `<Head>` component from `next/head`.

</details>

<div align="right">
    <b><a href="#table-of-contents">↥ back to top</a></b>
</div>

## Q. A developer sees a React hydration error in production. Which code pattern in a **Client Component** is the **most likely cause**?

**A)**
```tsx
'use client';

export default function Timestamp() {
  return <p>Built at: {process.env.NEXT_PUBLIC_BUILD_TIME}</p>;
}
```

**B)**
```tsx
'use client';
import { useState } from 'react';

export default function Toggle() {
  const [on, setOn] = useState(false);
  return <button onClick={() => setOn(!on)}>{on ? 'ON' : 'OFF'}</button>;
}
```

**C)**
```tsx
'use client';

export default function RandomId() {
  return <div id={`item-${Math.random()}`}>Content</div>;
}
```

**D)**
```tsx
'use client';

export default function StaticText() {
  return <p>Hello World</p>;
}
```

<details>
<summary><strong>Answer & Explanation</strong></summary>

**Answer: C) `Math.random()` generating a different value on server and client.**

**Explanation:** Hydration errors occur when the HTML rendered on the server does not match what React generates during client-side hydration. `Math.random()` produces a unique value on each invocation, so the `id` generated during SSR will differ from the one generated during the client hydration pass, producing a mismatch that React cannot reconcile.

**Why the distractors are wrong:**
- **A** — `NEXT_PUBLIC_BUILD_TIME` is a build-time environment variable inlined into both the server bundle and the client bundle during the build. Its value is identical in both environments.
- **B** — `useState(false)` has a deterministic initial value (`false`) that is the same in both the server render and the client hydration pass. No mismatch occurs.
- **D** — A static string literal (`Hello World`) is byte-for-byte identical in server-rendered HTML and client hydration output. No mismatch.

</details>

<div align="right">
    <b><a href="#table-of-contents">↥ back to top</a></b>
</div>

## # 3. Advanced Server Rendering

<br>

## Q. A developer enables Partial Prerendering and writes the following page. What does Next.js serve to the **first visitor** of `/feed`?

```tsx
// next.config.ts
const nextConfig = { experimental: { ppr: true } };

// app/feed/page.tsx
import { Suspense } from 'react';
import StaticHeader from '@/components/StaticHeader';
import DynamicFeed from '@/components/DynamicFeed'; // internally calls cookies()

export default function FeedPage() {
  return (
    <>
      <StaticHeader />
      <Suspense fallback={<p>Loading feed…</p>}>
        <DynamicFeed />
      </Suspense>
    </>
  );
}
```

- A) The entire page is blocked until `DynamicFeed` resolves; nothing is sent to the browser early.
- B) A static HTML shell containing `<StaticHeader>` and the `<p>Loading feed…</p>` fallback is served from the CDN instantly; `DynamicFeed` streams in dynamically per request.
- C) Both `StaticHeader` and `DynamicFeed` are rendered at build time; PPR has no effect when `cookies()` is used.
- D) The page falls back to full CSR because `DynamicFeed` uses `cookies()`, which PPR does not support.

<details>
<summary><strong>Answer & Explanation</strong></summary>

**Answer: B) A static HTML shell containing `<StaticHeader>` and the `<p>Loading feed…</p>` fallback is served from the CDN instantly; `DynamicFeed` streams in dynamically per request.**

**Explanation:** Partial Prerendering (PPR) is designed precisely for this pattern. At build time, Next.js renders the static parts of the page (`<StaticHeader>`) and the `<Suspense>` fallback (`<p>Loading feed…</p>`) into a static HTML shell that is cached on the CDN. When a user visits `/feed`, the shell is served instantly. The server then streams the rendered output of `<DynamicFeed>` (which reads `cookies()` and is therefore dynamic) into the open Suspense hole.

**Why the distractors are wrong:**
- **A** — PPR specifically avoids this full-blocking behavior. The static shell is the whole point.
- **C** — PPR never renders dynamic components (those using `cookies()`, `headers()`, etc.) at build time. The dynamic boundary is intentional.
- **D** — PPR fully supports dynamic APIs like `cookies()` and `headers()` within `<Suspense>` boundaries. This is the core use case of the feature.

</details>

<div align="right">
    <b><a href="#table-of-contents">↥ back to top</a></b>
</div>

## Q. A developer writes the following middleware. Which set of routes will it **intercept**?

```ts
// middleware.ts
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  const token = request.cookies.get('auth-token');
  if (!token) {
    return NextResponse.redirect(new URL('/login', request.url));
  }
  return NextResponse.next();
}

export const config = {
  matcher: ['/dashboard/:path*', '/admin/:path*'],
};
```

- A) All routes in the application, including static files and API routes.
- B) Only the exact paths `/dashboard` and `/admin`, not their sub-routes.
- C) Any path starting with `/dashboard` or `/admin`, including their sub-routes (`:path*` matches zero or more segments).
- D) Only routes that contain the literal string `:path` in the URL.

<details>
<summary><strong>Answer & Explanation</strong></summary>

**Answer: C) Any path starting with `/dashboard` or `/admin`, including their sub-routes (`:path*` matches zero or more segments).**

**Explanation:** In Next.js middleware `matcher` config, `:path*` is a named parameter with a wildcard that matches **zero or more** path segments. This means the pattern `/dashboard/:path*` matches `/dashboard` (zero additional segments), `/dashboard/analytics`, `/dashboard/users/edit`, and so on.

**Why the distractors are wrong:**
- **A** — Without a `matcher` config (or with `matcher: ['/']`), middleware runs on all routes. The presence of a `matcher` explicitly limits its scope.
- **B** — `:path*` matches sub-routes because `*` allows zero or more segments. To match only the exact paths, the config would be `matcher: ['/dashboard', '/admin']` with no wildcard.
- **D** — `:path` is Next.js path-matching syntax for a named parameter, not a literal URL string. The colon prefix denotes a pattern parameter, not a URL literal character.

</details>

<div align="right">
    <b><a href="#table-of-contents">↥ back to top</a></b>
</div>

## Q. A developer has a Server Component that queries a database but notices Next.js is caching the result between requests. Which code addition **correctly opts the component out of static rendering**?

```tsx
import { unstable_noStore as noStore } from 'next/cache';

export default async function LiveOrderCount() {
  // ??? add noStore call here
  const count = await db.orders.count();
  return <p>Live orders: {count}</p>;
}
```

- A) Call `noStore()` inside a `useEffect` hook at the start of the function body.
- B) Call `noStore()` at the top of the async function body, before any `await` calls.
- C) Export `export const dynamic = 'force-dynamic'` from the route segment file and remove `noStore`.
- D) Both B and C are valid and produce equivalent results.

<details>
<summary><strong>Answer & Explanation</strong></summary>

**Answer: D) Both B and C are valid and produce equivalent results.**

**Explanation:** Both approaches are documented Next.js mechanisms and are interchangeable for this use case. Calling `noStore()` at the top of the Server Component\'s async function body signals to Next.js at render time that this component must not be statically cached. Exporting `export const dynamic = 'force-dynamic'` is the route-segment-level config equivalent that forces the entire route segment into dynamic rendering mode.

**Why the distractors are wrong:**
- **A** — `noStore()` is designed for Server Components. `useEffect` is a Client Component hook and cannot be used in a Server Component. Attempting this would cause a build error.

</details>

<div align="right">
    <b><a href="#table-of-contents">↥ back to top</a></b>
</div>

## Q. A developer writes a Server Action to delete a blog post. Identify the **critical security flaw**:

```tsx
// app/actions.ts
'use server';
import { db } from '@/lib/db';

export async function deletePost(postId: string) {
  await db.posts.delete({ where: { id: postId } });
}
```

```tsx
// app/dashboard/page.tsx  (Client Component)
<button onClick={() => deletePost(post.id)}>Delete</button>
```

- A) The Server Action is missing the `async` keyword on the function declaration.
- B) Server Actions cannot be called from Client Component event handlers; they must be used in `<form action={...}>` only.
- C) The action does not verify that the currently authenticated user owns `postId`, allowing any authenticated user to delete any post (broken object-level authorization).
- D) `db.posts.delete` must be wrapped in a `try/catch`; the missing error handling is the critical flaw.

<details>
<summary><strong>Answer & Explanation</strong></summary>

**Answer: C) The action does not verify that the currently authenticated user owns `postId`, allowing any authenticated user to delete any post (broken object-level authorization).**

**Explanation:** This is a **Broken Object Level Authorization (BOLA)** vulnerability, also known as Insecure Direct Object Reference (IDOR). Any authenticated user who knows (or can guess) a `postId` can call `deletePost` to delete it — there is no verification that the requestor owns the post. An attacker can enumerate IDs and delete other users' content. The fix is to retrieve the current session, verify the authenticated user\'s identity, and confirm ownership before executing the deletion.

**Why the distractors are wrong:**
- **A** — The function is correctly declared with `async`. This is not a bug.
- **B** — Server Actions **can** be called from Client Component event handlers as of Next.js 14+. This is an explicitly supported and documented pattern.
- **D** — Absent error handling is a code quality and reliability concern, not a security vulnerability. The authorization gap is the critical security flaw.

</details>

<div align="right">
    <b><a href="#table-of-contents">↥ back to top</a></b>
</div>

## Q. A developer adds an `error.tsx` inside `app/dashboard/`. Which statement about its behavior is **correct**?

```tsx
// app/dashboard/error.tsx
'use client';

export default function DashboardError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <div>
      <p>Something went wrong: {error.message}</p>
      <button onClick={reset}>Try again</button>
    </div>
  );
}
```

- A) This file catches errors thrown in `app/dashboard/layout.tsx` as well as `app/dashboard/page.tsx`.
- B) This file catches errors thrown in `app/dashboard/page.tsx` and its children, but **not** errors thrown in `app/dashboard/layout.tsx`.
- C) The `reset` function performs a full browser page reload to re-attempt rendering.
- D) The `'use client'` directive is optional here; `error.tsx` can be a Server Component.

<details>
<summary><strong>Answer & Explanation</strong></summary>

**Answer: B) This file catches errors thrown in `app/dashboard/page.tsx` and its children, but **not** errors thrown in `app/dashboard/layout.tsx`.**

**Explanation:** In the App Router, `error.tsx` wraps the `page.tsx` (and its entire child subtree) of the same route segment in a React Error Boundary. However, the error boundary is rendered *inside* the `layout.tsx` of the same segment. Because a component cannot catch its own render errors via an error boundary, `layout.tsx` errors propagate upward to the **parent segment\'s** `error.tsx` (or to `global-error.tsx` for the root).

**Why the distractors are wrong:**
- **A** — `error.tsx` does not wrap `layout.tsx` at the same level. It sits inside it.
- **C** — `reset()` calls the React Error Boundary\'s reset mechanism, which re-renders the boundary\'s children (re-attempts the failing segment). It is a React-level reset, not a full browser reload.
- **D** — `error.tsx` **must** be a Client Component. React Error Boundaries rely on `componentDidCatch` / `getDerivedStateFromError` lifecycle semantics, which are inherently client-side features unavailable in Server Components.

</details>

<div align="right">
    <b><a href="#table-of-contents">↥ back to top</a></b>
</div>

## # 4. Architecture & Runtime

<br>

## Q. A company runs two independent Next.js applications that should appear under one domain: a marketing site at `https://example.com` and a dashboard app at `https://example.com/dashboard`. Which configuration approach is **correct** for the dashboard app?

**A)**
```js
// next.config.js (dashboard app)
module.exports = { basePath: '/dashboard' };
// A reverse proxy routes /dashboard/* to the dashboard Next.js server
```

**B)**
```js
// next.config.js (dashboard app)
module.exports = { assetPrefix: '/dashboard' };
// No reverse proxy needed; Next.js handles routing internally
```

**C)**
```js
// next.config.js (marketing app only)
module.exports = {
  async rewrites() {
    return [
      {
        source: '/dashboard/:path*',
        destination: 'https://dashboard-app.internal/:path*',
      },
    ];
  },
};
// No basePath is set on the dashboard app
```

**D)** Both A and C are valid multi-zone approaches; A uses `basePath` for same-server deployments while C uses rewrites for cross-origin proxying.

<details>
<summary><strong>Answer & Explanation</strong></summary>

**Answer: D) Both A and C are valid multi-zone approaches; A uses `basePath` for same-server deployments while C uses rewrites for cross-origin proxying.**

**Explanation:** Next.js Multi-Zones documentation describes two complementary strategies. Option A uses `basePath: '/dashboard'` so all internal `<Link>` hrefs and static asset paths are prefixed automatically, with a reverse proxy routing `/dashboard/*` traffic to this app\'s server. Option C uses `rewrites` in the host app to proxy `/dashboard/*` to the dashboard app\'s origin URL — the dashboard app does not need `basePath` in this configuration.

**Why the distractors are wrong:**
- **A alone** — Correct pattern, but incomplete answer because C is also valid.
- **B** — `assetPrefix` affects only the CDN path for static assets (JS, CSS bundles) but does not redirect page routing. It cannot create a multi-zone setup on its own, and a reverse proxy is always required.
- **C alone** — Correct pattern, but incomplete answer because A is also valid.

</details>

<div align="right">
    <b><a href="#table-of-contents">↥ back to top</a></b>
</div>

## Q. A developer uses `unstable_cache` to cache a database query with tag-based invalidation. Which implementation is **correct**?

**A)**
```ts
import { unstable_cache } from 'next/cache';

export const getCachedUser = unstable_cache(
  async (userId: string) => db.users.findUnique({ where: { id: userId } }),
  ['user-detail'],
  { tags: ['user'], revalidate: 3600 }
);
```

**B)**
```ts
import { unstable_cache } from 'next/cache';

export const getCachedUser = unstable_cache(
  async (userId: string) => db.users.findUnique({ where: { id: userId } }),
  ['user-detail'],
  { tag: 'user', revalidate: 3600 }  // singular 'tag'
);
```

**C)**
```ts
export const getCachedUser = async (userId: string) => {
  return fetch(`/api/users/${userId}`, {
    next: { tags: ['user'], revalidate: 3600 },
  }).then((r) => r.json());
};
```

**D)**
```ts
import { cache } from 'react';

export const getCachedUser = cache(
  async (userId: string) => db.users.findUnique({ where: { id: userId } })
);
```

<details>
<summary><strong>Answer & Explanation</strong></summary>

**Answer: A) `unstable_cache` with `tags: string[]` array and `revalidate` in options.**

**Explanation:** The `unstable_cache` API signature is `unstable_cache(fn, keyParts, options)` where `options` accepts `{ tags: string[], revalidate: number }`. The `tags` field must be an **array of strings**. This enables `revalidateTag('user')` to purge all cache entries sharing that tag.

**Why the distractors are wrong:**
- **B** — The option key is `tags` (plural, array), not `tag` (singular string). Using `tag` instead of `tags` means no cache tag is registered, so `revalidateTag` will have no effect on this entry.
- **C** — Making an internal `fetch` call to `/api/users/:id` adds an unnecessary HTTP round-trip to the same server. `unstable_cache` with a direct database call is the correct, efficient approach for caching non-`fetch` data sources.
- **D** — `react.cache` provides **per-request deduplication** (memoizing calls within a single render pass). It does not persist data across requests, does not support cache tags, and does not accept a revalidation TTL. It solves a different problem (avoiding duplicate DB queries in the same render tree).

</details>

<div align="right">
    <b><a href="#table-of-contents">↥ back to top</a></b>
</div>

## Q. An e-commerce platform needs to **immediately invalidate** all product listing caches whenever a product is updated via an admin Server Action. Which implementation is **correct**?

```ts
// app/admin/actions.ts
'use server';
import { revalidateTag } from 'next/cache';
import { db } from '@/lib/db';
```

**A)**
```ts
export async function updateProduct(id: string, data: ProductData) {
  await db.products.update({ where: { id }, data });
  revalidateTag('products');
}
// All fetch() calls and unstable_cache results tagged 'products' are invalidated
```

**B)**
```ts
export async function updateProduct(id: string, data: ProductData) {
  await db.products.update({ where: { id }, data });
  await revalidatePath('/products'); // revalidateTag is incorrect for this use case
}
```

**C)**
```ts
export async function updateProduct(id: string, data: ProductData) {
  await db.products.update({ where: { id }, data });
  revalidateTag('products');
}
// Only fetch() calls with the 'products' tag are invalidated; unstable_cache is unaffected
```

**D)**
```ts
export async function updateProduct(id: string, data: ProductData) {
  await db.products.update({ where: { id }, data });
  revalidateTag('products'); // This triggers a full rebuild of all static pages
}
```

<details>
<summary><strong>Answer & Explanation</strong></summary>

**Answer: A) `revalidateTag('products')` invalidates all cache entries — both `fetch()` calls and `unstable_cache` results — tagged 'products'.**

**Explanation:** `revalidateTag` is the precise API for on-demand, tag-based cache invalidation. It marks all cache entries — both `fetch()` calls and `unstable_cache` results — that were registered with the specified tag as stale. On the next incoming request for those resources, they will be regenerated from the source.

**Why the distractors are wrong:**
- **B** — `revalidatePath` invalidates caches associated with a specific URL path, not all resources that share a semantic label. It is a coarser tool and does not invalidate all product-related data across different paths.
- **C** — The claim that `unstable_cache` is unaffected by `revalidateTag` is **incorrect**. `revalidateTag` invalidates both `fetch()` cache entries and `unstable_cache` results that share the tag.
- **D** — `revalidateTag` does not trigger a full static rebuild. It marks tagged entries as stale and Next.js regenerates them lazily on the next request, identical to how on-demand ISR works.

</details>

<div align="right">
    <b><a href="#table-of-contents">↥ back to top</a></b>
</div>

## Q. A team wants to embed a React component from a **remote** Webpack Module Federation app into a Next.js host application. Which statement is **most accurate**?

- A) Next.js natively supports Module Federation without additional configuration; remote components are loaded as standard dynamic imports.
- B) The `@module-federation/nextjs-mf` package adapts Module Federation for the Next.js runtime. The remote component should be consumed via `next/dynamic` with `ssr: false` unless both host and remote explicitly configure SSR support, to avoid hydration mismatches.
- C) Module Federation is only supported in the `pages/` router; the App Router cannot consume federated modules because Server Components do not support async remote loading.
- D) Federated modules must be re-exported through a Next.js API route (`/api/mf-proxy`) before Client Components can consume them.

<details>
<summary><strong>Answer & Explanation</strong></summary>

**Answer: B) The `@module-federation/nextjs-mf` package adapts Module Federation for the Next.js runtime. The remote component should be consumed via `next/dynamic` with `ssr: false` unless both host and remote explicitly configure SSR support.**

**Explanation:** The `@module-federation/nextjs-mf` package bridges Webpack\'s Module Federation runtime with Next.js\'s custom bundler pipeline. Remote federated modules are loaded asynchronously from an external origin at runtime, so they must be consumed with `next/dynamic` to prevent issues during the SSR pass. Setting `ssr: false` is the safe default unless both the host and remote are explicitly configured to support SSR, which requires coordinating chunk loading between two separate Webpack builds.

**Why the distractors are wrong:**
- **A** — Next.js does not natively support Module Federation. It requires the `@module-federation/nextjs-mf` plugin to handle the integration. Standard dynamic imports cannot load from a remote Webpack container\'s `remoteEntry.js`.
- **C** — While App Router integration has historically been more complex, the `@module-federation/nextjs-mf` package supports consuming federated modules as Client Components in the App Router. It is not restricted to the Pages Router.
- **D** — There is no need for an API route proxy. The federated module\'s `remoteEntry.js` is fetched directly by the Webpack runtime in the browser. Routing through an API proxy would add latency and defeat the purpose of Module Federation.

</details>

<div align="right">
    <b><a href="#table-of-contents">↥ back to top</a></b>
</div>

## Q. An architect must choose the runtime for a Route Handler that: (1) queries a **PostgreSQL database** via a TCP connection, (2) handles **file uploads > 10 MB**, and (3) uses the **Node.js `crypto` module** for encryption. Which decision is **correct**?

```ts
// app/api/process/route.ts
export const runtime = '???';
```

- A) `'edge'` — Edge Runtime is always faster and should be preferred for all Route Handlers.
- B) `'edge'` — Edge Runtime supports TCP connections and the Web Crypto API, satisfying all three requirements.
- C) `'nodejs'` (default) — Edge Runtime does not support TCP-based database connections, has a 4 MB request body size limit, and does not include the Node.js `crypto` module; only the Node.js runtime satisfies all three requirements.
- D) `'nodejs'` — but only because Edge Runtime is unavailable for Route Handlers and is restricted to Middleware only.

<details>
<summary><strong>Answer & Explanation</strong></summary>

**Answer: C) `'nodejs'` (default) — Edge Runtime does not support TCP-based database connections, has a 4 MB request body size limit, and does not include the Node.js `crypto` module.**

**Explanation:** The Edge Runtime executes in a V8 isolate with a restricted API surface inherited from Cloudflare Workers / Vercel Edge: (1) **No TCP connections** — PostgreSQL drivers (pg, Prisma, Drizzle ORM) require TCP, making them incompatible; only HTTP-based edge-compatible drivers work. (2) **4 MB request body limit** — File uploads exceeding 4 MB are rejected. (3) **No Node.js built-in modules** — `node:crypto` is not available; only the Web Crypto API (`globalThis.crypto`) is accessible. The Node.js runtime (the default) supports all three requirements.

**Why the distractors are wrong:**
- **A** — Edge Runtime is not universally faster. For I/O-bound workloads with database connections, it is incompatible. Its speed advantage comes from geographic distribution and cold-start performance, not raw throughput.
- **B** — Edge Runtime does **not** support TCP connections, has a body size limit, and does not include `node:crypto`. All three stated facts in option B are incorrect.
- **D** — Edge Runtime **is** available for Route Handlers via `export const runtime = 'edge'`. It is not restricted to Middleware only.

</details>

<div align="right">
    <b><a href="#table-of-contents">↥ back to top</a></b>
</div>

# Course Catalog - Advanced Web Technologies (Lab 1)

A semester project course catalog built with Next.js 16 (App Router), TypeScript, and Tailwind CSS.

## What was implemented:
- **File-based Routing & Static Pages:** Built a responsive home page (`/`) and an about page (`/about`) as Server Components.
- **Server-Side Data Fetching:** Implemented asynchronous data loading using mock functions with a simulated network delay in `lib/courses.ts`.
- **Dynamic Routes & Pre-rendering:** Configured the dynamic course route (`/courses/[id]`) with `generateStaticParams`, loading states (`loading.tsx`), and error/not-found boundaries (`not-found.tsx`)[cite: 1].
- **Server and Client Component Pairing:** Created modular components including a server-fetched `CourseCard` and an interactive `LikeButton` Client Component utilizing `useState`[cite: 1].
- **Global Navigation & Styling:** Styled the application layout with Tailwind CSS and persistent navigation links[cite: 1].

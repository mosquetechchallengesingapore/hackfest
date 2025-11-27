
# Mosque Tech Challenge Website (Remix)

## 🌟 Goal

Build a website for **Mosque Tech Challenge** with:

- **Landing page** for the current year’s event
- **Past events** archive with detail pages
- **Admin panel** to manage events (add/edit/remove), protected by auth

The site should be:

- SEO-friendly (server-rendered)
- Fast and mobile-responsive
- Easy to maintain and extend for future years

---

## � Tech Stack

- **Framework**: Remix (React)
- **UI & Styling**: Tailwind CSS + shadcn UI (React components)
- **Database**: Supabase (hosted Postgres)
- **Authentication (Admin)**: Supabase Auth
- **Deployment**: Cloudflare Pages + Cloudflare Functions (Remix Cloudflare adapter)
- **Runtime**: Cloudflare Workers (via Remix Cloudflare build)

---

## � Architecture Overview

### Routing & Pages

- **`/` – Landing Page (Current Event)**
  - Hero section with title, date, CTA button
  - About section (purpose, organizer, venue)
  - Event timeline / schedule
  - Registration button → external Luma link
  - Partners & sponsors section
  - Data source: latest event with `status = "current"`

- **`/past-events` – Past Events Listing**
  - Grid/list of past events (e.g. 2023, 2022, …)
  - Each item links to a detail page

- **`/past-events/:year` – Past Event Detail**
  - Description
  - Photos (or gallery section)
  - Winners
  - Highlights
  - Data source: event(s) filtered by `year` and/or `status = "past"`

- **`/admin` – Admin Panel (Protected)**
  - Login required (Supabase Auth)
  - CRUD interface for events:
    - List existing events (current + past)
    - Add / Edit / Delete event
  - Uses shadcn UI + Tailwind for forms, tables, dialogs

### Data Model

**Event**

```json
{
  "id": "uuid",
  "year": 2025,
  "title": "Mosque Tech Challenge 2025",
  "date": "2025-11-20",
  "description": "Empowering youth to build Islamic tech solutions.",
  "image": "/images/2025-banner.jpg",
  "status": "current", // or "past"
  "link": "https://luma.com/tu2evuun"
}
```

- Additional optional fields (future):
  - `location`, `tags`, `highlight_points`, `gallery_images`, etc.

### Auth Flow (Admin)

- Admin clicks **“Admin”** link / navigates to `/admin`.
- If **not authenticated**:
  - Redirect to a login screen (Supabase Auth, email/password or magic link).
- On **successful login**:
  - Auth session stored via Supabase client (cookies/local storage as per Supabase best practices).
  - Protected routes check session in Remix `loader` before returning data.
- If session is invalid/expired:
  - Redirect back to login.

### Backend Logic & API

- **Remix loaders**:
  - Run on the server (Cloudflare Workers).
  - Fetch data from Supabase (e.g. events list, single event, current event).
  - Provide data to React components via `useLoaderData`.

- **Remix actions**:
  - Handle mutations (create, update, delete events) in `/admin`.
  - Validate input, check auth, call Supabase, then redirect or return errors.

- **Optional JSON API endpoints** (if needed later):
  - Resource routes (e.g. `/api/events`, `/api/events/:id`) that return JSON only.
  - Useful if other services or frontends need to consume the event data.

---

## 🚀 Development Flow

1. **Prerequisites**
   - Node.js and npm installed
   - Supabase project created
   - Cloudflare account and Cloudflare Pages set up

2. **Initialize Remix App (Cloudflare)**
   - Create a new Remix app targeting **Cloudflare Pages / Workers**.
   - Configure the Remix app to build for the Cloudflare platform (adapter).

3. **Set Up Tailwind CSS**
   - Install Tailwind CSS and required dependencies.
   - Configure `tailwind.config` and `postcss.config`.
   - Set up base styles (global `app/root` styles, typography, colors).

4. **Integrate shadcn UI**
   - Install shadcn UI generator / components.
   - Configure paths for components and utils to fit the Remix folder structure.
   - Add commonly used components:
     - Buttons, inputs, forms
     - Cards, table, dialog/sheet for admin UX

5. **Supabase Integration**
   - In Supabase:
     - Create `events` table with the fields in the data model.
     - Configure authentication (admin user(s)).
   - In Remix:
     - Add environment variables for Supabase URL and keys.
     - Create a `supabase.server` helper (e.g. `app/lib/supabase.server.ts`) to:
       - Create a Supabase client for server-side usage (loaders/actions).
       - Handle auth/session reading/writing.

6. **Implement Public Routes**
   - `/`:
     - Loader fetches the event with `status = "current"`.
     - Render landing page sections (hero, about, schedule, sponsors).
   - `/past-events`:
     - Loader fetches all events with `status = "past"`.
     - Render as a grid/list.
   - `/past-events/:year`:
     - Loader fetches event(s) for the given `year`.
     - Render description, highlights, winners, photos.

7. **Implement Admin Panel**
   - `/admin`:
     - Loader checks auth (Supabase session).
     - Loader fetches events for display in a table.
     - Action handles create/update/delete via Supabase.
   - UI:
     - Forms for event fields (title, date, description, image, status, link).
     - Use shadcn components for nice UX.

8. **Protect Admin Routes**
   - Centralize auth checks in loader helpers (e.g. `requireAdmin`).
   - Redirect unauthenticated users to login.
   - Optionally, add a dedicated `/login` route using Supabase Auth.

9. **Deployment**
   - Configure Cloudflare Pages project with Remix build:
     - Set build command and output as per Remix Cloudflare template.
   - Configure environment variables on Cloudflare:
     - Supabase URL, anon key, service role key (if used server-side only).
   - Deploy:
     - Ensure server-side Remix routes (loaders/actions) run on **Cloudflare Functions**.
     - Verify SEO (view source, check that HTML is rendered server-side).

---

## 🌐 Reference URLs

- Event list (current implementation / inspiration)  
  - https://mosquetechchallenge.mimbar.sg/
- Main event page (Luma)  
  - https://luma.com/tu2evuun

---

## 🗺 Future Enhancements (Optional)

- Richer content editing for admins (WYSIWYG editor, image uploads)
- Search/filter for past events
- Public API endpoints for events (JSON)
- Analytics / tracking integration

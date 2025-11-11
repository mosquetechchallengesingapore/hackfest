
# 🍌 Mosque Tech Challenge Website Plan

## 🌟 Goal

Build a website for **Mosque Tech Challenge** with:

-   A **landing page** (for this year's event)
-   A **past year events** page
-   An **admin panel** to manage events (add/edit/remove)

----------

## 🛇 Tech Stack

**Frontend**: Next.js 15 (App Router) + Tailwind CSS + Shadcn UI
**Backend**: Next.js API routes or separate Node.js
**Database**: Supabase
**Authentication (Admin)**: Supabase Auth
**Deployment**: Cloudflare Pages

----------

## 🧩 Pages & Features

### 1️⃣ `/` — **Landing Page (Current Event)**

-   Hero section (title, date, and "Join Now" CTA button)
-   About section (purpose, organizer, venue)
-   Event timeline / schedule
-   Registration button → links to Luma page
-   Partners & sponsors section
    
### 2️⃣ `/past-events`
-   Grid of past years (e.g. 2023, 2022)
-   Each item links to a sub-page `/past-events/2023` showing:
    -   Description
    -   Photos
    -   Winners 
    -   Highlights
        

### 3️⃣ `/admin`
-   CRUD interface for event management:
    -   Add / Edit / Delete event    
    -   Fields: title, date, description, image, category ("current" or "past")    
-   Save updates to database in real time
    

----------

## 🧠 Data Model Example

**Event Object:**

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

----------

## 🧬 Development Flow

1.  **Initialize Astro Project**
    
2.  **Add Tailwind CSS + Shadcn UI**
    
    -   Tailwind for layout styling
        
    -   Shadcn UI for reusable components (cards, buttons, forms)
        
3.  **Integrate Database**
    
    -   Use Supabase or MongoDB Atlas
        
    -   Create a helper file `lib/db.ts` for CRUD operations
        
4.  **Build Pages**
    
    -   `/` → Fetch and display event with `status = "current"`
        
    -   `/past-events` → Fetch and display all events with `status = "past"`
        
    -   `/admin` → Build form + table interface for event management
        
5.  **Add Authentication**
    
    -   Protect `/admin` route for authorized users only
        
    -   Use Supabase Auth
        
6.  **Deploy**
    
    -   Deploy to **Cloudflare Pages** (preferred)
        
    -   Connect environment variables for DB and Auth
        

----------

## 🌐 URLs for Reference

-   [Event List (Mimbar)](https://mosquetechchallenge.mimbar.sg/)
    
-   [Main Event (Luma)](https://luma.com/tu2evuun)

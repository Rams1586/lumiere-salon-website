# Lumière Hair & Beauty Studio — Website

**Author:** Dhikshith Ram Poshala — B.E. CSE (AIML), St Mary's Engineering College, Hyderabad (2023–2027)
**LinkedIn:** https://www.linkedin.com/in/poshala-dhikshith-ram-a422492b2 · **GitHub:** https://github.com/Rams1586

A static salon website (HTML/CSS/JavaScript, no build step, no backend) for a local hair, skin and bridal business — services and pricing, gallery, testimonials, and a booking form.

**Tech stack:** HTML, CSS, JavaScript

> **Status:** demo / internship deliverable. The booking form currently logs submissions to the browser console and needs a form service or backend to go live; photos are placeholders — see “Replacing the placeholder content” below.

## Project structure

```
lumiere-salon/
├── index.html          → all page content/sections
├── css/
│   └── style.css        → design system + layout + responsive rules
├── js/
│   └── script.js         → nav, scroll-spy, testimonial slider, booking form
├── images/                → drop real salon photos here (see note below)
├── package.json           → optional: npm script to run a local server
└── README.md
```

## Run it locally (VS Code)

**Option A — Live Server extension (recommended, zero setup)**
1. Open the `lumiere-salon` folder in VS Code (`File → Open Folder…`).
2. Install the **"Live Server"** extension (by Ritwick Dey) from the
   Extensions panel if you don't have it.
3. Right-click `index.html` → **"Open with Live Server"**.
4. The site opens at `http://127.0.0.1:5500` and auto-reloads on save.

**Option B — Node's local server (no extension needed)**
```bash
cd lumiere-salon
npx serve .
```
Then open the URL it prints (usually `http://localhost:3000`).

**Option C — Python (if you already have Python installed)**
```bash
cd lumiere-salon
python3 -m http.server 8000
```
Open `http://localhost:8000`.

Any of the three is fine — there's no backend, so it's just static files.

## Replacing the placeholder content

- **Photos:** the hero panel, "about" block and gallery tiles currently use
  solid color blocks instead of photos (so the zip stays small and works
  offline). Add real photos to `/images` and swap them in:
  - `.about-media` in `css/style.css` — replace the gradient with
    `background: url('../images/studio.jpg') center/cover;`
  - `.g-item` tiles in `index.html` — replace each `<div class="g-item">`
    with an `<img>` tag, or set a `background-image` per tile.
- **Business details:** phone number, WhatsApp link, email, hours, address
  and prices are all in `index.html` — search for `+91 98765 43210` and the
  `menu-list` sections to edit.
- **Booking form:** currently logs submissions to the browser console and
  shows a confirmation message. To make it functional, connect it to:
  - a form service (Formspree, Getform, Web3Forms), **or**
  - a small backend endpoint, **or**
  - a Google Sheets webhook (e.g. via Google Apps Script).
  The single spot to edit is the `TODO` comment inside `initBookingForm()`
  in `js/script.js`.

## Deploying it live (for the demo link)

Any static host works since there's no server code:
- **GitHub Pages** — push this folder to a repo, enable Pages on the `main`
  branch, done.
- **Netlify / Vercel** — drag-and-drop the folder into their dashboard for
  an instant live URL.

## The pitch (for the business owner)

**Problem today:** most local salons rely entirely on walk-ins and phone
calls. That means missed calls turn into lost bookings, there's no easy way
for a new customer to see services and prices before visiting, and there's
no reusable channel (like a booking page) to bring past customers back.

**What this site does about it:**
1. **Turns "maybe later" into a booking** — the appointment form and the
   sticky "Book a slot" button are reachable from anywhere on the page in
   one tap, so interest converts before the visitor closes the tab.
2. **Answers the two questions every new customer has before they call** —
   "what do you offer" and "how much" — with a clear, scannable service
   menu, so the front desk spends less time quoting prices over the phone.
3. **Builds trust before the first visit** — the gallery and client reviews
   do the reassurance work that used to depend entirely on word of mouth.
4. **Works as a 24/7 storefront** — the salon can now be found on Google
   and shared on Instagram/WhatsApp with one link, taking bookings even
   outside opening hours.
5. **Costs nothing to run** — static hosting (GitHub Pages/Netlify) is
   free, and there's no monthly software subscription required to keep the
   site online.

**Suggested next step for the owner:** connect the booking form to
WhatsApp or email (a 15-minute integration) and add real photos, then
share the live link on the salon's Instagram bio and Google Business
listing.

---
Built as an internship project deliverable: static HTML/CSS/JS site,
ready for a GitHub repo and a live demo link.
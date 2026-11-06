// ==========================================================
// Lumière Hair & Beauty Studio — front-end interactions
// No backend required; booking form logs the request and
// shows a confirmation message (wire up to email/API later).
// ==========================================================

document.addEventListener("DOMContentLoaded", () => {
  setYear();
  initNavToggle();
  initScrollSpy();
  initTestimonialSlider();
  initBookingForm();
  initHeaderShadowOnScroll();
});

/* Footer year */
function setYear() {
  const el = document.getElementById("year");
  if (el) el.textContent = new Date().getFullYear();
}

/* Mobile nav toggle */
function initNavToggle() {
  const toggle = document.getElementById("navToggle");
  const nav = document.getElementById("mainNav");
  if (!toggle || !nav) return;

  toggle.addEventListener("click", () => {
    const isOpen = nav.classList.toggle("open");
    toggle.classList.toggle("open", isOpen);
    toggle.setAttribute("aria-expanded", String(isOpen));
  });

  nav.querySelectorAll(".nav-link").forEach((link) => {
    link.addEventListener("click", () => {
      nav.classList.remove("open");
      toggle.classList.remove("open");
      toggle.setAttribute("aria-expanded", "false");
    });
  });
}

/* Highlight the nav link matching the section in view */
function initScrollSpy() {
  const sections = document.querySelectorAll("section[id]");
  const links = document.querySelectorAll(".nav-link");
  if (!sections.length || !links.length) return;

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const id = entry.target.getAttribute("id");
          links.forEach((link) => {
            link.classList.toggle("active", link.getAttribute("href") === `#${id}`);
          });
        }
      });
    },
    { rootMargin: "-45% 0px -50% 0px" }
  );

  sections.forEach((section) => observer.observe(section));
}

/* Subtle shadow on header once page has scrolled */
function initHeaderShadowOnScroll() {
  const header = document.getElementById("siteHeader");
  if (!header) return;
  window.addEventListener("scroll", () => {
    header.style.boxShadow = window.scrollY > 8 ? "0 6px 20px rgba(43,36,32,0.08)" : "none";
  });
}

/* Testimonial slider: fade between quotes, dots + arrows, auto-advance */
function initTestimonialSlider() {
  const track = document.getElementById("tTrack");
  const dotsWrap = document.getElementById("tDots");
  const prevBtn = document.getElementById("tPrev");
  const nextBtn = document.getElementById("tNext");
  if (!track || !dotsWrap) return;

  const cards = Array.from(track.querySelectorAll(".t-card"));
  let index = 0;
  let timer;

  cards.forEach((_, i) => {
    const dot = document.createElement("button");
    dot.setAttribute("aria-label", `Show review ${i + 1}`);
    dot.addEventListener("click", () => goTo(i));
    dotsWrap.appendChild(dot);
  });
  const dots = Array.from(dotsWrap.children);

  function render() {
    cards.forEach((card, i) => card.classList.toggle("active", i === index));
    dots.forEach((dot, i) => dot.classList.toggle("active", i === index));
  }

  function goTo(i) {
    index = (i + cards.length) % cards.length;
    render();
    resetAutoplay();
  }

  function resetAutoplay() {
    clearInterval(timer);
    timer = setInterval(() => goTo(index + 1), 6000);
  }

  prevBtn?.addEventListener("click", () => goTo(index - 1));
  nextBtn?.addEventListener("click", () => goTo(index + 1));

  render();
  resetAutoplay();
}

/* Booking form: client-side validation + confirmation message.
   Swap the TODO block for a real fetch() call to your backend,
   Google Sheet webhook, or email service when you connect one. */
function initBookingForm() {
  const form = document.getElementById("bookingForm");
  const status = document.getElementById("formStatus");
  if (!form || !status) return;

  // Prevent picking a date in the past
  const dateInput = form.querySelector("#date");
  if (dateInput) {
    const today = new Date().toISOString().split("T")[0];
    dateInput.setAttribute("min", today);
  }

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const name = form.name.value.trim();
    const phone = form.phone.value.trim();
    const service = form.service.value;
    const date = form.date.value;

    if (!name || !/^[0-9+\-\s]{10,}$/.test(phone) || !service || !date) {
      status.textContent = "Please fill in your name, a valid phone number, service and date.";
      status.style.color = "#B23A3A";
      return;
    }

    // TODO: replace with a real request, e.g.
    // fetch("/api/bookings", { method: "POST", body: JSON.stringify({name, phone, service, date, notes: form.notes.value}) })
    console.log("New booking request:", {
      name,
      phone,
      service,
      date,
      notes: form.notes.value.trim(),
    });

    status.style.color = "#4A1E2E";
    status.textContent = `Thanks, ${name.split(" ")[0]} — we'll confirm your ${service.toLowerCase()} slot on WhatsApp shortly.`;
    form.reset();
  });
}

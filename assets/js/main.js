(() => {
  const navItems = [
    { id: "home", label: "Home", href: "index.html" },
    { id: "about", label: "About", href: "about.html" },
    { id: "departments", label: "Departments", href: "departments.html" },
    { id: "academics", label: "Academics", href: "academics.html" },
    { id: "admissions", label: "Admissions", href: "admissions.html" },
    { id: "placements", label: "Placements", href: "placements.html" },
    { id: "research", label: "Research", href: "research.html" },
    { id: "campus-life", label: "Campus Life", href: "campus-life.html" },
    { id: "students", label: "Students", href: "students.html" },
    { id: "alumni", label: "Alumni", href: "alumni.html" },
    { id: "contact", label: "Contact", href: "contact.html" }
  ];

  const page = document.body.dataset.page || "home";

  function buildNav() {
    const root = document.querySelector("[data-nav]");
    if (!root) return;

    const links = navItems
      .map((item) => {
        const activeClass = item.id === page ? "is-active" : "";
        return `<a class="nav-link ${activeClass}" href="${item.href}">${item.label}</a>`;
      })
      .join("");

    const mobileLinks = navItems
      .map((item) => `<a href="${item.href}">${item.label}</a>`)
      .join("");

    root.innerHTML = `
      <header class="site-nav" id="siteNav">
        <div class="nav-inner">
          <a class="nav-logo" href="index.html">CIU</a>
          <nav class="nav-links" aria-label="Primary">${links}</nav>
          <div class="nav-apply">
            <a class="apply-btn" href="admissions.html">Apply Now</a>
          </div>
          <button class="nav-toggle" aria-label="Toggle menu" aria-expanded="false" type="button">
            <span></span>
          </button>
        </div>
      </header>
      <aside class="mobile-menu" id="mobileMenu" aria-hidden="true">
        <nav aria-label="Mobile">${mobileLinks}<a class="apply-btn" href="admissions.html">Apply Now</a></nav>
      </aside>
    `;

    const nav = document.getElementById("siteNav");
    const toggle = root.querySelector(".nav-toggle");
    const mobileMenu = document.getElementById("mobileMenu");

    function syncNavState() {
      if (window.scrollY > 80) {
        nav.classList.add("scrolled");
      } else {
        nav.classList.remove("scrolled");
      }
    }

    function closeMenu() {
      mobileMenu.classList.remove("open");
      mobileMenu.setAttribute("aria-hidden", "true");
      toggle.setAttribute("aria-expanded", "false");
      document.body.style.overflow = "";
    }

    toggle.addEventListener("click", () => {
      const open = mobileMenu.classList.toggle("open");
      toggle.setAttribute("aria-expanded", String(open));
      mobileMenu.setAttribute("aria-hidden", String(!open));
      document.body.style.overflow = open ? "hidden" : "";
    });

    mobileMenu.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", closeMenu);
    });

    window.addEventListener("scroll", syncNavState, { passive: true });
    syncNavState();
  }

  function buildFooter() {
    const root = document.querySelector("[data-footer]");
    if (!root) return;

    root.innerHTML = `
      <footer class="site-footer">
        <div class="container">
          <div class="footer-grid">
            <section>
              <h3 class="footer-logo">Campus Insights University</h3>
              <p class="footer-about">A globally focused institution shaping innovators, researchers, and leaders through education, impact, and excellence.</p>
              <div class="social-row">
                <a class="social-btn" href="#" aria-label="Instagram">IG</a>
                <a class="social-btn" href="#" aria-label="LinkedIn">IN</a>
                <a class="social-btn" href="#" aria-label="YouTube">YT</a>
                <a class="social-btn" href="#" aria-label="X">X</a>
              </div>
            </section>
            <section>
              <h4 class="footer-title">Quick Links</h4>
              <ul class="footer-links">
                <li><a href="index.html">Home</a></li>
                <li><a href="about.html">About</a></li>
                <li><a href="academics.html">Academics</a></li>
                <li><a href="admissions.html">Admissions</a></li>
                <li><a href="contact.html">Contact</a></li>
              </ul>
            </section>
            <section>
              <h4 class="footer-title">Programs</h4>
              <ul class="footer-links">
                <li><a href="departments.html">Engineering</a></li>
                <li><a href="departments.html">MBA</a></li>
                <li><a href="departments.html">Law</a></li>
                <li><a href="departments.html">Medicine</a></li>
                <li><a href="departments.html">Design</a></li>
              </ul>
            </section>
            <section class="footer-contact">
              <h4 class="footer-title">Contact</h4>
              <p>Innovation Avenue, Knowledge City, India</p>
              <p>+91 44 4000 9000</p>
              <p>admissions@campusinsights.edu</p>
            </section>
          </div>
          <div class="footer-bottom">
            <span>Copyright 2025 Campus Insights University. All rights reserved.</span>
            <span>Designed with excellence</span>
          </div>
        </div>
      </footer>
    `;
  }

  function setupLoader() {
    const loader = document.querySelector(".loader");
    if (!loader) return;
    window.setTimeout(() => {
      loader.classList.add("is-hidden");
      document.body.classList.add("ready");
    }, 2600);
  }

  function setupHeroVideo() {
    const video = document.querySelector(".hero-video");
    if (!video || window.matchMedia("(max-width: 767px)").matches) return;
    const revealVideo = () => video.classList.add("ready");
    video.addEventListener("canplaythrough", revealVideo, { once: true });
    if (video.readyState >= 3) revealVideo();
  }

  function setupHeroParallax() {
    const hero = document.querySelector(".hero");
    const video = document.querySelector(".hero-video");
    const content = document.querySelector(".hero-content-inner");
    if (!hero || !video || !content || window.matchMedia("(max-width: 767px)").matches) return;

    const maxFadeY = 550;

    const onScroll = () => {
      const scrollY = window.scrollY;
      const yBg = scrollY * 0.4;
      const yFg = scrollY * 0.18;
      const opacity = Math.max(0, 1 - scrollY / maxFadeY);

      video.style.transform = `translateY(${yBg}px) scale(1.08)`;
      content.style.transform = `translateY(${yFg}px)`;
      content.style.opacity = String(opacity);
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
  }

  function setupReveals() {
    const revealEls = document.querySelectorAll(".reveal");
    if (!revealEls.length) return;

    const observer = new IntersectionObserver(
      (entries, obs) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          entry.target.classList.add("is-visible");
          obs.unobserve(entry.target);
        });
      },
      { threshold: 0.15 }
    );

    revealEls.forEach((el) => observer.observe(el));
  }

  function setupStagger() {
    document.querySelectorAll("[data-stagger-group]").forEach((group) => {
      group.querySelectorAll("[data-stagger]").forEach((item, index) => {
        item.style.setProperty("--delay", `${index * 80}ms`);
      });
    });
  }

  function animateCounter(el) {
    const target = Number(el.dataset.count || "0");
    const suffix = el.dataset.suffix || "";
    const duration = 1500;
    const start = performance.now();

    const step = (now) => {
      const progress = Math.min(1, (now - start) / duration);
      const eased = 1 - Math.pow(1 - progress, 3);
      const current = Math.floor(target * eased);
      el.textContent = `${current.toLocaleString()}${suffix}`;
      if (progress < 1) requestAnimationFrame(step);
    };

    requestAnimationFrame(step);
  }

  function setupCounters() {
    const counters = document.querySelectorAll("[data-count]");
    if (!counters.length) return;

    const seen = new WeakSet();
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting || seen.has(entry.target)) return;
          animateCounter(entry.target);
          seen.add(entry.target);
        });
      },
      { threshold: 0.3 }
    );

    counters.forEach((counter) => observer.observe(counter));
  }

  function setupTestimonials() {
    const slides = Array.from(document.querySelectorAll(".testimonial"));
    const dots = Array.from(document.querySelectorAll(".dot"));
    if (!slides.length || !dots.length) return;

    let index = 0;

    const activate = (nextIndex) => {
      index = nextIndex;
      slides.forEach((slide, idx) => slide.classList.toggle("active", idx === index));
      dots.forEach((dot, idx) => dot.classList.toggle("active", idx === index));
    };

    dots.forEach((dot, idx) => {
      dot.addEventListener("click", () => activate(idx));
    });

    setInterval(() => {
      activate((index + 1) % slides.length);
    }, 4000);
  }

  function init() {
    buildNav();
    buildFooter();
    setupLoader();
    setupHeroVideo();
    setupHeroParallax();
    setupStagger();
    setupReveals();
    setupCounters();
    setupTestimonials();
  }

  document.addEventListener("DOMContentLoaded", init);
})();

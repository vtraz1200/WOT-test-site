//////////////////////////////////////////////////////////
// DROPDOWN MENU

const toggle = document.querySelector(".dropdown-toggle");
const menu = document.querySelector(".dropdown-menu");
const dropdown = document.querySelector(".dropdown");

if (toggle && menu && dropdown) {
  toggle.addEventListener("click", (e) => {
    e.preventDefault();
    menu.classList.toggle("open");
    toggle.classList.toggle("open");
  });

  document.addEventListener("click", (e) => {
    if (!dropdown.contains(e.target)) {
      menu.classList.remove("open");
      toggle.classList.remove("open");
    }
  });
}

//////////////////////////////////////////////////////////
// SCROLL REVEAL (shared by any element that should fade/slide in once it
// actually scrolls into view, instead of animating immediately on load —
// a plain CSS animation on a below-the-fold element plays out invisibly
// before the user ever scrolls to it)

function initScrollReveal(selector, { threshold = 0.2, stagger = 0 } = {}) {
  const els = document.querySelectorAll(selector);
  if (!els.length || !("IntersectionObserver" in window)) return;

  els.forEach((el, i) => {
    el.classList.add("reveal-pending");
    if (stagger) el.style.transitionDelay = `${i * stagger}s`;
  });

  const reveal = (entries, observer) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      entry.target.classList.add("is-visible");
      observer.unobserve(entry.target);
    });
  };

  const observer = new IntersectionObserver(reveal, { root: null, threshold });
  els.forEach((el) => observer.observe(el));
}

initScrollReveal(".info-video-text-box", { threshold: 0.2, stagger: 0.15 });
initScrollReveal(".catcher", { threshold: 0.2 });
initScrollReveal(".section-services .service", {
  threshold: 0.15,
  stagger: 0.1,
});

//////////////////////////////////////////////////////////
// CUSTOM VIDEO PLAY BUTTON

document.querySelectorAll(".info-video-media").forEach((wrap) => {
  const video = wrap.querySelector("video");
  const playBtn = wrap.querySelector(".info-video-play");
  if (!video || !playBtn) return;

  playBtn.addEventListener("click", () => video.play());

  video.addEventListener("play", () => wrap.classList.add("is-playing"));
  video.addEventListener("pause", () => wrap.classList.remove("is-playing"));
  video.addEventListener("ended", () => wrap.classList.remove("is-playing"));
});

//////////////////////////////////////////////////////////
// EXPANDABLE PRICE CARD

document.querySelectorAll(".price-card-trigger").forEach((trigger) => {
  const list = document.getElementById(trigger.getAttribute("aria-controls"));
  if (!list) return;

  trigger.addEventListener("click", () => {
    const isOpen = trigger.classList.toggle("open");
    list.classList.toggle("open", isOpen);
    trigger.setAttribute("aria-expanded", String(isOpen));
  });
});

//////////////////////////////////////////////////////////
// STICKY NAVIGATION

const sectionHeroEl = document.querySelector(".section-hero");

if (sectionHeroEl) {
  const obs = new IntersectionObserver(
    function (entries) {
      const ent = entries[0];

      if (!ent.isIntersecting) {
        document.body.classList.add("sticky");
      } else {
        document.body.classList.remove("sticky");
      }
    },
    {
      root: null,
      threshold: 0,
      rootMargin: "-80px",
    },
  );

  obs.observe(sectionHeroEl);
}

const sectionHeroSecondEl = document.querySelector(".section-hero-tint");
if (sectionHeroSecondEl) {
  const obs = new IntersectionObserver(
    function (entries) {
      const ent = entries[0];

      if (!ent.isIntersecting) {
        document.body.classList.add("sticky");
      } else {
        document.body.classList.remove("sticky");
      }
    },
    {
      root: null,
      threshold: 0,
      rootMargin: "-80px",
    },
  );
  obs.observe(sectionHeroSecondEl);
}

const sectionHeroThirdEl = document.querySelector(".section-hero-ppf");
if (sectionHeroThirdEl) {
  const obs = new IntersectionObserver(
    function (entries) {
      const ent = entries[0];

      if (!ent.isIntersecting) {
        document.body.classList.add("sticky");
      } else {
        document.body.classList.remove("sticky");
      }
    },
    {
      root: null,
      threshold: 0,
      rootMargin: "-80px",
    },
  );
  obs.observe(sectionHeroThirdEl);
}

const sectionHeroFourthEl = document.querySelector(".section-hero-details");
if (sectionHeroFourthEl) {
  const obs = new IntersectionObserver(
    function (entries) {
      const ent = entries[0];

      if (!ent.isIntersecting) {
        document.body.classList.add("sticky");
      } else {
        document.body.classList.remove("sticky");
      }
    },
    {
      root: null,
      threshold: 0,
      rootMargin: "-80px",
    },
  );
  obs.observe(sectionHeroFourthEl);
}

const sectionHeroFifthEl = document.querySelector(".section-hero-ceramic");
if (sectionHeroFifthEl) {
  const obs = new IntersectionObserver(
    function (entries) {
      const ent = entries[0];

      if (!ent.isIntersecting) {
        document.body.classList.add("sticky");
      } else {
        document.body.classList.remove("sticky");
      }
    },
    {
      root: null,
      threshold: 0,
      rootMargin: "-80px",
    },
  );
  obs.observe(sectionHeroFifthEl);
}

const sectionHeroSixthEl = document.querySelector(".section-hero-wraps");
if (sectionHeroSixthEl) {
  const obs = new IntersectionObserver(
    function (entries) {
      const ent = entries[0];

      if (!ent.isIntersecting) {
        document.body.classList.add("sticky");
      } else {
        document.body.classList.remove("sticky");
      }
    },
    {
      root: null,
      threshold: 0,
      rootMargin: "-80px",
    },
  );
  obs.observe(sectionHeroSixthEl);
}

const sectionHeroSevenEl = document.querySelector(".section-hero-custom");
if (sectionHeroSevenEl) {
  const obs = new IntersectionObserver(
    function (entries) {
      const ent = entries[0];

      if (!ent.isIntersecting) {
        document.body.classList.add("sticky");
      } else {
        document.body.classList.remove("sticky");
      }
    },
    {
      root: null,
      threshold: 0,
      rootMargin: "-80px",
    },
  );
  obs.observe(sectionHeroSevenEl);
}

//////////////////////////////////////////////////////////
// AUTO-HIDE HEADER ON SCROLL DIRECTION
// Only has a visual effect once .sticky is already on <body> (see the
// IntersectionObserver blocks above) — the CSS gates on that ancestor class,
// so hiding here is a no-op until the header has actually become fixed.
//
// DISABLED (not deleted) — experimental removal, uncomment to restore.
// With this off, "nav-hidden" is never added, so the sticky header just
// stays visible at all times once .sticky is active, regardless of
// scroll direction. The .sticky.nav-hidden CSS rules (style.css,
// general.css) are left in place and simply go dormant.

// (() => {
//   const MIN_DELTA = 8; // ignore tiny scroll jitter
//   const HIDE_AFTER = 120; // stay visible until scrolled this far down

//   let lastY = window.scrollY;
//   let ticking = false;

//   const onScroll = () => {
//     const currentY = window.scrollY;
//     const delta = currentY - lastY;

//     if (Math.abs(delta) > MIN_DELTA) {
//       const dropdownOpen = document.querySelector(".dropdown-menu.open");

//       if (delta > 0 && currentY > HIDE_AFTER && !dropdownOpen) {
//         document.body.classList.add("nav-hidden");
//       } else {
//         document.body.classList.remove("nav-hidden");
//       }
//       lastY = currentY;
//     }

//     ticking = false;
//   };

//   window.addEventListener(
//     "scroll",
//     () => {
//       if (!ticking) {
//         requestAnimationFrame(onScroll);
//         ticking = true;
//       }
//     },
//     { passive: true },
//   );
// })();

//////////////////////////////////////////////////////////
// REVEAL SECTIONS

const allSections = document.querySelectorAll(".section");

if (allSections.length > 0) {
  const revealSection = function (entries, observer) {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      entry.target.classList.remove("section--hidden");
      observer.unobserve(entry.target);
    });
  };

  const sectionObserver = new IntersectionObserver(revealSection, {
    root: null,
    threshold: 0.15,
  });

  allSections.forEach((section) => {
    sectionObserver.observe(section);
    section.classList.add("section--hidden");
  });
}

//////////////////////////////////////////////////////////
// SLIDER

const slides = document.querySelectorAll(".slide");
const btnLeft = document.querySelector(".slider__btn--left");
const btnRight = document.querySelector(".slider__btn--right");
const dotContainer = document.querySelector(".dots");

if (slides.length && btnLeft && btnRight && dotContainer) {
  let curSlide = 0;
  const maxSlide = slides.length;

  const createDots = () => {
    slides.forEach((_, i) => {
      dotContainer.insertAdjacentHTML(
        "beforeend",
        `<button class="dots__dot" data-slide="${i}"></button>`,
      );
    });
  };

  const activateDot = (slide) => {
    document
      .querySelectorAll(".dots__dot")
      .forEach((dot) => dot.classList.remove("dots__dot--active"));

    document
      .querySelector(`.dots__dot[data-slide="${slide}"]`)
      ?.classList.add("dots__dot--active");
  };

  const goToSlide = (slide) => {
    slides.forEach(
      (s, i) => (s.style.transform = `translateX(${100 * (i - slide)}%)`),
    );
  };

  const nextSlide = () => {
    curSlide = curSlide === maxSlide - 1 ? 0 : curSlide + 1;
    goToSlide(curSlide);
    activateDot(curSlide);
  };

  const prevSlide = () => {
    curSlide = curSlide === 0 ? maxSlide - 1 : curSlide - 1;
    goToSlide(curSlide);
    activateDot(curSlide);
  };

  const init = () => {
    goToSlide(0);
    createDots();
    activateDot(0);
  };

  init();

  btnRight.addEventListener("click", nextSlide);
  btnLeft.addEventListener("click", prevSlide);

  document.addEventListener("keydown", (e) => {
    if (e.key === "ArrowLeft") prevSlide();
    if (e.key === "ArrowRight") nextSlide();
  });

  dotContainer.addEventListener("click", (e) => {
    if (e.target.classList.contains("dots__dot")) {
      curSlide = Number(e.target.dataset.slide);
      goToSlide(curSlide);
      activateDot(curSlide);
    }
  });
}

//////////////////////////////////////////////////////////
// GALLERY LIGHTBOX

const galleryImages = document.querySelectorAll(".gallery-images");
const lightbox = document.getElementById("lightbox");
const lightboxImg = lightbox?.querySelector(".lightbox-img");
const lightboxClose = lightbox?.querySelector(".lightbox-close");

if (galleryImages.length && lightbox && lightboxImg) {
  const openLightbox = (src, alt) => {
    lightboxImg.src = src;
    lightboxImg.alt = alt || "";
    lightbox.classList.add("active");
  };

  const closeLightbox = () => {
    lightbox.classList.remove("active");
  };

  galleryImages.forEach((img) => {
    img.addEventListener("click", () => openLightbox(img.src, img.alt));
  });

  lightboxClose?.addEventListener("click", closeLightbox);

  lightbox.addEventListener("click", (e) => {
    if (e.target === lightbox) closeLightbox();
  });

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") closeLightbox();
  });
}

//////////////////////////////////////////////////////////
// CAROUSEL ANIMATION (YOUR ORIGINAL FEATURE)

document.querySelectorAll(".carousel").forEach((carousel) => {
  const track = carousel.querySelector(".carousel-track");
  if (!track) return;

  const images = Array.from(track.children);
  images.forEach((img) => track.appendChild(img.cloneNode(true)));

  let position = 0;
  const speed = 1.5;
  const direction = carousel.classList.contains("carousel--reverse") ? 1 : -1;

  function animate() {
    position += speed * direction;

    const totalWidth = track.scrollWidth / 2;

    // Smooth wrap (no jump, no blank)
    if (direction === -1 && position <= -totalWidth) {
      position += totalWidth;
    }

    if (direction === 1 && position >= 0) {
      position -= totalWidth;
    }

    track.style.transform = `translateX(${position}px)`;
    requestAnimationFrame(animate);
  }

  animate();
});

//////////////////////////////////////////////////////////
// AUTO SLIDER (shared by .info-slider and .info-slider-custom)

function initAutoSlider(slider, { trackSelector, dotsSelector }) {
  const track = slider.querySelector(trackSelector);
  const dotsContainer = slider.querySelector(dotsSelector);
  const pauseBtn = slider.querySelector(".info-slider-pause");
  if (!track) return;

  const slides = Array.from(track.children);
  const slideCount = slides.length;
  const prefersReducedMotion = window.matchMedia(
    "(prefers-reduced-motion: reduce)",
  ).matches;

  let index = 0;
  let timer = null;
  let isPaused = false;

  const activateDot = (i) => {
    dotsContainer
      ?.querySelectorAll(".info-dot")
      .forEach((dot, di) => dot.classList.toggle("info-dot--active", di === i));
  };

  const goToSlide = (i) => {
    index = i;
    track.style.transform = `translateX(-${index * 100}%)`;
    activateDot(index);
  };

  if (dotsContainer) {
    slides.forEach((_, i) => {
      const dot = document.createElement("button");
      dot.type = "button";
      dot.className = "info-dot";
      dot.setAttribute("aria-label", `Go to slide ${i + 1}`);
      if (i === 0) dot.classList.add("info-dot--active");
      dot.addEventListener("click", () => goToSlide(i));
      dotsContainer.appendChild(dot);
    });
  }

  // Clone first slide for seamless looping
  const firstClone = slides[0].cloneNode(true);
  track.appendChild(firstClone);

  const nextSlide = () => {
    index++;
    track.style.transform = `translateX(-${index * 100}%)`;
    activateDot(index % slideCount);

    // When reaching clone, reset instantly (no animation)
    if (index === slideCount) {
      setTimeout(() => {
        track.style.transition = "none";
        index = 0;
        track.style.transform = `translateX(0)`;
      }, 700);

      setTimeout(() => {
        track.style.transition = "transform 0.7s ease-in-out";
      }, 750);
    }
  };

  const startTimer = () => {
    if (timer || isPaused) return;
    // setInterval waits a full cycle before its first tick, which made the
    // slider look frozen for 3.5s right after the page loads. Fire the
    // first advance sooner, then settle into the normal interval.
    timer = setTimeout(() => {
      nextSlide();
      timer = setInterval(nextSlide, 3500);
    }, 1500);
  };

  const stopTimer = () => {
    clearTimeout(timer);
    clearInterval(timer);
    timer = null;
  };

  const setPaused = (paused) => {
    isPaused = paused;
    if (paused) {
      stopTimer();
    } else {
      startTimer();
    }
    if (pauseBtn) {
      pauseBtn.setAttribute("aria-pressed", String(paused));
      pauseBtn.setAttribute(
        "aria-label",
        paused ? "Play slideshow" : "Pause slideshow",
      );
      pauseBtn
        .querySelector("ion-icon")
        ?.setAttribute("name", paused ? "play" : "pause");
    }
  };

  // Pause on keyboard focus (tabbing into slider controls/links). Not
  // mouseenter/mouseleave — scrolling the page while the cursor stays
  // physically still fires a real mouseenter the instant the slider
  // scrolls under it, which then never un-pauses until it scrolls back
  // out from under that same stationary cursor. The explicit pause
  // button below already covers manual pause/resume.
  slider.addEventListener("focusin", stopTimer);
  slider.addEventListener("focusout", () => !isPaused && startTimer());

  pauseBtn?.addEventListener("click", () => setPaused(!isPaused));

  // Respect the user's OS-level motion preference
  setPaused(prefersReducedMotion);
}

document.querySelectorAll(".info-slider").forEach((slider) =>
  initAutoSlider(slider, {
    trackSelector: ".info-track",
    dotsSelector: ".info-dots",
  }),
);

document.querySelectorAll(".info-slider-custom").forEach((slider) =>
  initAutoSlider(slider, {
    trackSelector: ".info-track-custom",
    dotsSelector: ".info-dots-custom",
  }),
);
/// FOOTER SCHEDULE

// ✅ Set your hours here (24-hour format). Use null for closed days.
const hours = {
  Monday: { open: "09:00", close: "18:00" },
  Tuesday: { open: "09:00", close: "18:00" },
  Wednesday: { open: "09:00", close: "18:00" },
  Thursday: { open: "09:00", close: "18:00" },
  Friday: { open: "09:00", close: "18:00" },
  Saturday: { open: "10:00", close: "14:00" },
  Sunday: null, // closed
};

const dayNames = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

function toMinutes(hhmm) {
  const [h, m] = hhmm.split(":").map(Number);
  return h * 60 + m;
}

function formatTime(hhmm) {
  const [h, m] = hhmm.split(":").map(Number);
  const ampm = h >= 12 ? "PM" : "AM";
  const hour12 = ((h + 11) % 12) + 1;
  return `${hour12}:${String(m).padStart(2, "0")} ${ampm}`;
}

function isOpenNow(todaySchedule) {
  if (!todaySchedule) return false;
  const now = new Date();
  const nowMinutes = now.getHours() * 60 + now.getMinutes();
  const openMin = toMinutes(todaySchedule.open);
  const closeMin = toMinutes(todaySchedule.close);
  return nowMinutes >= openMin && nowMinutes < closeMin;
}

function renderHours() {
  const container = document.getElementById("hoursBar");
  if (!container) return;

  const todayIndex = new Date().getDay(); // 0 = Sunday
  const todayName = dayNames[todayIndex];
  const todaySchedule = hours[todayName] || null;
  const openNow = isOpenNow(todaySchedule);

  container.innerHTML = ""; // clear

  dayNames.forEach((day, idx) => {
    const schedule = hours[day] || null;
    const isToday = idx === todayIndex;

    const timeText = schedule
      ? `${formatTime(schedule.open)} – ${formatTime(schedule.close)}`
      : "Closed";

    const pill = document.createElement("div");
    pill.className = "hours-pill";
    if (isToday) pill.classList.add("is-today");
    if (isToday && openNow) pill.classList.add("is-open");
    if (isToday && !openNow) pill.classList.add("is-closed");

    pill.innerHTML = `
      <div class="hours-day">${day}</div>
      <div class="hours-time">${timeText}</div>
      ${
        isToday
          ? `<div class="hours-status">${
              schedule ? (openNow ? "OPEN NOW" : "CLOSED") : "CLOSED"
            }</div>`
          : ""
      }
    `;

    container.appendChild(pill);
  });
}

// Works with defer OR if script is at bottom
document.addEventListener("DOMContentLoaded", renderHours);

//////////////////////////////////////////////////////////
// Smooth scrolling animation
// const allLinks = document.querySelectorAll("a:link");

// allLinks.forEach(function (link) {
//   link.addEventListener("click", function (e) {
//     e.preventDefault();
//     const href = link.getAttribute("href");
//     const headerEl = document.querySelector(".header");

//     // Scroll back to top
//     if (href === "#")
//       window.scrollTo({
//         top: 0,
//         behavior: "smooth",
//       });

//     // Scroll to other links
//     if (href !== "#" && href.startsWith("#")) {
//       const sectionEl = document.querySelector(href);
//       sectionEl.scrollIntoView({ behavior: "smooth" });
//     }

//     // Open other links
//     // if (href === "https://tiroca.macombandoaklandcountyhomes.com/") {
//     //   window.open("https://tiroca.macombandoaklandcountyhomes.com/");
//     // }

//     // Close mobile naviagtion
//     if (link.classList.contains("main-nav-link"))
//       headerEl.classList.toggle("nav-open");
//   });
// });

///////////////////////////////////////////////////////////
// Make Mobile Nav work
const btnNavEl = document.querySelector(".btn-mobile-nav");
const headerEl = document.querySelector(".header, .header-secondary");
const heroWel = document.querySelector(".section-heading-white");

btnNavEl.addEventListener("click", function () {
  headerEl.classList.toggle("nav-open");
});

// Close the mobile nav once a link is actually followed — but not the
// "Services" dropdown toggle, which just expands the submenu in place.
document
  .querySelectorAll(".main-nav-link:not(.dropdown-toggle), .main-nav-dropdown-menu-link")
  .forEach((link) => {
    link.addEventListener("click", () => {
      headerEl.classList.remove("nav-open");
    });
  });

//////////////////////////////////////////////////////////
// FLEXBOX GAP SAFARI FIX

function checkFlexGap() {
  const flex = document.createElement("div");
  flex.style.display = "flex";
  flex.style.flexDirection = "column";
  flex.style.rowGap = "1px";

  flex.appendChild(document.createElement("div"));
  flex.appendChild(document.createElement("div"));

  document.body.appendChild(flex);
  const isSupported = flex.scrollHeight === 1;
  flex.remove();

  if (!isSupported) document.body.classList.add("no-flexbox-gap");
}

checkFlexGap();

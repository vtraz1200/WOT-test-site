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
// INFO SLIDER

document.querySelectorAll(".info-slider").forEach((slider) => {
  const track = slider.querySelector(".info-track");
  const slides = Array.from(track.children);
  const slideCount = slides.length;
  let index = 0;

  // Clone first slide for seamless looping
  const firstClone = slides[0].cloneNode(true);
  track.appendChild(firstClone);

  setInterval(() => {
    index++;
    track.style.transform = `translateX(-${index * 100}%)`;

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
  }, 3500);
});

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

///////// PACKAGE SELECTOR

// Package data (update image paths to YOUR files)
const packages = {
  bronze: {
    title: "Bronze Package",
    subtitle: "Entry-level ceramic protection for daily drivers.",
    image: "images/ceramic/ceramic-bronze.jpg",
    alt: "Bronze ceramic coating package",
    bullets: [
      "Paint decontamination wash",
      "Iron remover + clay treatment",
      "1-step enhancement polish",
      "1-year ceramic coating (paint)",
    ],
  },
  silver: {
    title: "Silver Package",
    subtitle: "More gloss + longer protection with added prep.",
    image: "images/ceramic/ceramic-silver.jpg",
    alt: "Silver ceramic coating package",
    bullets: [
      "Deep clean + decon wash",
      "Clay + iron removal",
      "1-step paint correction",
      "3-year ceramic coating (paint)",
      "Coat wheels (face only)",
    ],
  },
  gold: {
    title: "Gold Package",
    subtitle: "Best value for maximum shine and durability.",
    image: "images/ceramic/ceramic-gold.jpg",
    alt: "Gold ceramic coating package",
    bullets: [
      "Full decon + prep",
      "2-step paint correction (most vehicles)",
      "5-year ceramic coating (paint)",
      "Trim coating",
      "Glass sealant (front windshield)",
    ],
  },
  platinum: {
    title: "Platinum Package",
    subtitle: "Show-car finish with premium coating coverage.",
    image: "images/ceramic/ceramic-platinum.jpg",
    alt: "Platinum ceramic coating package",
    bullets: [
      "Full decon + meticulous prep",
      "2–3 step paint correction (as needed)",
      "7+ year ceramic coating (paint)",
      "Wheels coated (faces)",
      "Trim + glass protection",
    ],
  },
};

const tiles = document.querySelectorAll(".package-tile");

const detailsTitle = document.querySelector(".details-title");
const detailsSubtitle = document.querySelector(".details-subtitle");
const detailsImage = document.querySelector(".details-image");
const detailsList = document.querySelector(".details-list");

// smooth fade on image swap (no CSS required)
function swapImage(src, alt) {
  detailsImage.style.opacity = "0";
  detailsImage.style.transition = "opacity 160ms ease";

  // Wait for fade out, then swap, then fade in once loaded
  setTimeout(() => {
    detailsImage.onload = () => {
      detailsImage.style.opacity = "1";
    };
    detailsImage.src = src;
    detailsImage.alt = alt || "";
  }, 160);
}

function renderPackage(key) {
  const data = packages[key];
  if (!data) return;

  detailsTitle.textContent = data.title;
  detailsSubtitle.textContent = data.subtitle;

  // This is the part that makes a new image pop up
  swapImage(data.image, data.alt);

  detailsList.innerHTML = data.bullets.map((b) => `<li>${b}</li>`).join("");
}

tiles.forEach((tile) => {
  tile.addEventListener("click", () => {
    tiles.forEach((t) => {
      t.classList.remove("is-active");
      t.setAttribute("aria-selected", "false");
    });

    tile.classList.add("is-active");
    tile.setAttribute("aria-selected", "true");

    renderPackage(tile.dataset.package);
  });
});

// Load initial package (based on the tile that starts active)
const initiallyActive = document.querySelector(".package-tile.is-active");
renderPackage(initiallyActive?.dataset.package || "bronze");

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

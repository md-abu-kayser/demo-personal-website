// JAVASCRIPT ALL CODE:
particlesJS("particles-js", {
  particles: {
    number: {
      value: 80,
      density: {
        enable: true,
        value_area: 800,
      },
    },
    color: {
      value: "#ffffff",
    },
    shape: {
      type: "circle",
      stroke: {
        width: 0,
        color: "#000000",
      },
    },
    opacity: {
      value: 0.5,
      random: false,
      anim: {
        enable: false,
        speed: 1,
        opacity_min: 0.1,
        sync: false,
      },
    },
    size: {
      value: 3,
      random: true,
      anim: {
        enable: false,
        speed: 40,
        size_min: 0.1,
        sync: false,
      },
    },
    line_linked: {
      enable: true,
      distance: 150,
      color: "#ffffff",
      opacity: 0.4,
      width: 1,
    },
    move: {
      enable: true,
      speed: 2,
      direction: "none",
      random: false,
      straight: false,
      out_mode: "out",
      bounce: false,
      attract: {
        enable: false,
        rotateX: 600,
        rotateY: 1200,
      },
    },
  },
  interactivity: {
    detect_on: "canvas",
    events: {
      onhover: {
        enable: true,
        mode: "grab",
      },
      onclick: {
        enable: true,
        mode: "push",
      },
      resize: true,
    },
    modes: {
      grab: {
        distance: 140,
        line_linked: {
          opacity: 1,
        },
      },
      push: {
        particles_nb: 4,
      },
    },
  },
  retina_detect: true,
});

// Theme
const html = document.documentElement;
const themeLabels = document.querySelectorAll(".theme-label");

const savedTheme = localStorage.getItem("theme") || "light";
html.setAttribute("data-theme", savedTheme);

// Set active theme in dropdown
themeLabels.forEach((label) => {
  if (label.getAttribute("data-theme") === savedTheme) {
    label.classList.add("active");
  }

  label.addEventListener("click", function () {
    const theme = this.getAttribute("data-theme");
    html.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);

    // Update active state
    themeLabels.forEach((l) => l.classList.remove("active"));
    this.classList.add("active");
  });
});

// Scroll animations
const faders = document.querySelectorAll(".fade-in");

const appearOptions = {
  threshold: 0.15,
  rootMargin: "0px 0px -100px 0px",
};

const appearOnScroll = new IntersectionObserver(function (
  entries,
  appearOnScroll
) {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) {
      return;
    } else {
      entry.target.classList.add("appear");
      appearOnScroll.unobserve(entry.target);
    }
  });
},
appearOptions);

faders.forEach((fader) => {
  appearOnScroll.observe(fader);
});

// Portfolio filtering
const filterButtons = document.querySelectorAll("[data-filter]");
const portfolioItems = document.querySelectorAll(".portfolio-item");

filterButtons.forEach((button) => {
  button.addEventListener("click", () => {
    // Update active state
    filterButtons.forEach((btn) => btn.classList.remove("tab-active"));
    button.classList.add("tab-active");

    const filter = button.getAttribute("data-filter");

    portfolioItems.forEach((item) => {
      if (filter === "all" || item.getAttribute("data-category") === filter) {
        item.style.display = "block";
      } else {
        item.style.display = "none";
      }
    });
  });
});

// Form submission
const contactForm = document.getElementById("contact-form");

contactForm.addEventListener("submit", function (e) {
  e.preventDefault();

  // Simulate form submission
  const submitBtn = this.querySelector('button[type="submit"]');
  submitBtn.innerHTML = "Sending...";
  submitBtn.disabled = true;

  setTimeout(() => {
    alert("Message sent successfully! I will get back to you soon.");
    contactForm.reset();
    submitBtn.innerHTML = "Send Message";
    submitBtn.disabled = false;
  }, 1500);
});

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();

    const targetId = this.getAttribute("href");
    if (targetId === "#") return;

    const targetElement = document.querySelector(targetId);
    if (targetElement) {
      window.scrollTo({
        top: targetElement.offsetTop - 80,
        behavior: "smooth",
      });
    }
  });
});

// Counter animation for stats
const counters = document.querySelectorAll(".stat-value");
const speed = 200;

const animateCounters = () => {
  counters.forEach((counter) => {
    const target = +counter.innerText.replace("+", "");
    const count = +counter.innerText;
    const increment = Math.ceil(target / speed);

    if (count < target) {
      counter.innerText = count + increment;
      setTimeout(animateCounters, 1);
    } else {
      counter.innerText = target + "+";
    }
  });
};

const statsSection = document.querySelector(".bg-primary");
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        animateCounters();
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.5 }
);

observer.observe(statsSection);

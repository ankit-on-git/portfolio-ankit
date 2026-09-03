// TECH STACK DATA WITH CATEGORIES (ORIGINAL REPO SKILLS)
const TECH = [
  { name: "C", slug: "c", color: "A855F7", category: "languages" },
  { name: "C++", slug: "cplusplus", color: "9333EA", category: "languages" },
  { name: "JavaScript", slug: "javascript", color: "F7DF1E", category: "languages" },
  { name: "Python", slug: "python", color: "38BDF8", category: "languages" },
  { name: "HTML5", slug: "html5", color: "E34F26", category: "web" },
  { name: "CSS3", slug: "css3", color: "1572B6", category: "web" },
  { name: "Vercel", slug: "vercel", color: "FFFFFF", category: "web" },
  { name: "MySQL", slug: "mysql", color: "4479A1", category: "databases" },
  { name: "MongoDB", slug: "mongodb", color: "47A248", category: "databases" },
  { name: "PostgreSQL", slug: "postgresql", color: "4169E1", category: "databases" },
  { name: "GitHub", slug: "github", color: "EEEEEE", category: "tools" },
  { name: "GitLab", slug: "gitlab", color: "FC6D26", category: "tools" },
  { name: "Selenium", slug: "selenium", color: "43B02A", category: "tools" },
  { name: "Arduino", slug: "arduino", color: "00979D", category: "tools" },
  { name: "Canva", slug: "canva", color: "00C4CC", category: "tools" },
];

// PROJECTS DATA (EXACT PROJECTS FROM ORIGINAL REPOSITORY)
const PROJECTS = [
  {
    title: "QR Code Generator",
    description: "A fast web utility that generates customizable QR codes in real-time from any text, link, or contact payload.",
    tags: ["JavaScript", "CSS3", "HTML5"],
    image: "images/Screenshot 2026-08-15 142910.png",
    live: "https://qr-code-gen-gules.vercel.app/",
    liveLabel: "Live Demo",
    github: "https://github.com/ankit-on-git/QR-Code-Creater",
    githubLabel: "GitHub",
    badge: "Web App"
  },
  {
    title: "Quote Generator",
    description: "Generates inspirational quotes on demand with one-click clipboard copying, smooth transitions, and instant sharing.",
    tags: ["JavaScript", "CSS3", "HTML5"],
    image: "images/Screenshot 2026-08-16 201947.png",
    live: "https://quote-generator-flame-omega.vercel.app/",
    liveLabel: "Live Demo",
    github: "https://github.com/ankit-on-git/quote-generator",
    githubLabel: "GitHub",
    badge: "Interactive"
  },
  {
    title: "Password Generator",
    description: "Cryptographically secure random password generator featuring strength indicators, customizable sets, and an access slip download.",
    tags: ["HTML5", "CSS3", "JavaScript", "Python"],
    image: "images/password-generator.png",
    live: "https://pass-generator1.vercel.app/",
    liveLabel: "Live Demo",
    github: "https://github.com/ankit-on-git/password-generator",
    githubLabel: "GitHub",
    badge: "Security"
  },
  {
    title: "Modern Calculator",
    description: "Multi-functional scientific and standard calculator with live currency, temperature, area, loan/EMI, and PPP conversion tools in an intuitive drawer UI.",
    tags: ["JavaScript", "CSS3", "HTML5"],
    image: "images/WhatsApp Image 2026-08-17 at 23.04.20.jpeg",
    live: "https://modern-calculex.vercel.app/",
    liveLabel: "Live Demo",
    github: "https://github.com/ankit-on-git/Modern-Calculator",
    githubLabel: "GitHub",
    badge: "Full Suite"
  },
  {
    title: "Ultron",
    description: "Personal autonomous AI agent framework built on open-source LLMs running locally via Ollama with Hermes agent integration.",
    tags: ["AI Agent", "Ollama", "Hermes", "Open Source"],
    image: "images/ultron.jpg",
    live: null,
    github: "https://github.com/ankit-on-git/Automation.git",
    githubLabel: "GitHub",
    badge: "AI Agent"
  },
  {
    title: "Onlyfools",
    description: "An AI-run news media platform where autonomous multi-agent pipelines research, summarize, draft, and publish news without human intervention.",
    tags: ["AI News", "AI Agents", "Automation", "Media"],
    image: "images/onlyfools.png",
    live: "https://onlyfoolls.blogspot.com/",
    liveLabel: "View Platform",
    github: "https://www.linkedin.com/posts/onlyfools_the-indian-government-temporarily-restricted-activity-7472904365922492416-TBCI",
    githubLabel: "LinkedIn Post",
    badge: "Startup"
  }
];

// CERTIFICATES DATA (ORIGINAL AUTHENTIC CERTIFICATES)
const CERTIFICATES = [
  { title: "Google Prompt War", issuer: "Google · Hack2skill", image: "images/cert-googlecloud.png", url: "https://certificate.hack2skill.com/verify/2026H2S07PWVCHL4-A00857" },
  { title: "Times Foundation", issuer: "Times of India (TOI)", image: "images/certificatetoi.jpeg", url: "https://drive.google.com/file/d/1eWAucKliBeWEFmEFacst5jAA1gZ82jOv/view?usp=sharing" },
  { title: "Quizoff 2026", issuer: "Unstop", image: "images/cert-quizoff.jpg", url: "https://drive.google.com/file/d/1IMOlLJFMIJ9wWu548H0zxgFLQ9volZ2p/view" },
  { title: "Infosys Springboard", issuer: "Infosys", image: "images/cert-infosys.png", url: "https://drive.google.com/file/d/1-ou-RyaQ1I8MIxrEx1PrqD-AgpUQI2R-/view" },
  { title: "Python", issuer: "HackerRank", image: "images/cert-hackerrank.png", url: "https://www.hackerrank.com/certificates/iframe/0a0cf4c877e8" },
  { title: "National Hackathon", issuer: "Participation Certificate", image: "images/cert-hackathon.png", url: "https://drive.google.com/file/d/1NphrGo85oVo8HURp_nq7Ncw1nKhhHMrC/view" }
];

// RENDER SKILLS
function renderSkills(filter = "all") {
  const container = document.getElementById("pills");
  if (!container) return;

  const filtered = filter === "all" ? TECH : TECH.filter(t => t.category === filter);
  container.innerHTML = filtered.map(item => `
    <span class="pill" data-category="${item.category}">
      <img src="https://cdn.simpleicons.org/${item.slug}/${item.color}" alt="${item.name} logo" loading="lazy" />
      <span>${item.name}</span>
    </span>
  `).join("");
}
renderSkills("all");

// SKILLS FILTER BUTTONS
document.querySelectorAll(".filter-btn").forEach(btn => {
  btn.addEventListener("click", () => {
    document.querySelectorAll(".filter-btn").forEach(b => b.classList.remove("active"));
    btn.classList.add("active");
    renderSkills(btn.getAttribute("data-filter"));
  });
});

// RENDER PROJECTS WITH 3D TILT CAPABILITY
const projectCards = document.getElementById("projectCards");
if (projectCards) {
  projectCards.innerHTML = PROJECTS.map((p, idx) => `
    <article class="card project-tilt-card" data-idx="${idx}">
      <div class="card-img-wrapper">
        <img src="${p.image}" alt="${p.title} screenshot" loading="lazy" onerror="this.onerror=null; if (this.src.indexOf('%20') !== -1) { this.src = decodeURIComponent(this.src); } else { this.src = encodeURI(this.src); }" />
        ${p.badge ? `<span class="card-badge">${p.badge}</span>` : ''}
      </div>
      <div class="card-body">
        <h3>${p.title}</h3>
        <p>${p.description}</p>
        <div class="tags">${p.tags.map(t => `<span class="tag">${t}</span>`).join("")}</div>
        <div class="btn-row">
          ${p.live ? (p.live === '#' ? 
            `<span class="btn btn-disabled">${p.liveLabel || 'Soon..'}</span>` : 
            `<a class="btn btn-primary" href="${p.live}" target="_blank" rel="noopener noreferrer">${p.liveLabel || 'Live Demo'}</a>`
          ) : ''}
          <a class="btn ${p.live ? 'btn-ghost' : 'btn-primary'}" href="${p.github}" target="_blank" rel="noopener noreferrer">${p.githubLabel || 'GitHub'}</a>
        </div>
      </div>
    </article>
  `).join("");

  // Attach 3D Card Tilt on Mouse Move
  document.querySelectorAll(".project-tilt-card").forEach(card => {
    card.addEventListener("mousemove", (e) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;
      const rotateX = ((y - centerY) / centerY) * -6;
      const rotateY = ((x - centerX) / centerX) * 6;
      card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-4px)`;
    });
    card.addEventListener("mouseleave", () => {
      card.style.transform = "perspective(1000px) rotateX(0deg) rotateY(0deg) translateY(0px)";
    });
  });
}

// RENDER CERTIFICATES
const certCards = document.getElementById("certCards");
if (certCards) {
  certCards.innerHTML = CERTIFICATES.map((c, idx) => `
    <a class="cert" id="certCard-${idx}" href="${c.url}" target="_blank" rel="noopener noreferrer">
      <div class="cert-img" id="certImg-${idx}">
        <img src="${c.image}" alt="${c.title} - ${c.issuer}" loading="lazy" onerror="this.onerror=null; if (this.src.indexOf('%20') !== -1) { this.src = decodeURIComponent(this.src); } else { this.src = encodeURI(this.src); }" />
      </div>
      <h3 id="certTitle-${idx}">${c.title}</h3>
      <p class="issuer" id="certIssuer-${idx}">${c.issuer}</p>
      <span class="view">View Certificate ↗</span>
    </a>
  `).join("");
}

// CERTIFICATE CAROUSEL CONTROLS
const certLeftBtn = document.getElementById("certLeftBtn");
const certRightBtn = document.getElementById("certRightBtn");
if (certCards && certLeftBtn && certRightBtn) {
  certLeftBtn.addEventListener("click", () => {
    certCards.scrollBy({ left: -320, behavior: "smooth" });
  });
  certRightBtn.addEventListener("click", () => {
    certCards.scrollBy({ left: 320, behavior: "smooth" });
  });
}

// YEAR IN FOOTER
const yearEl = document.getElementById("year");
if (yearEl) {
  yearEl.textContent = new Date().getFullYear();
}

// MOBILE MENU TOGGLE
const menuBtn = document.getElementById("menuBtn");
const mobileMenu = document.getElementById("mobileMenu");
if (menuBtn && mobileMenu) {
  menuBtn.addEventListener("click", () => {
    mobileMenu.classList.toggle("open");
    menuBtn.textContent = mobileMenu.classList.contains("open") ? "Close" : "Menu";
  });
  mobileMenu.querySelectorAll("a").forEach(a => {
    a.addEventListener("click", () => {
      mobileMenu.classList.remove("open");
      menuBtn.textContent = "Menu";
    });
  });
}

// DYNAMIC UI THEME SYSTEM (VIOLET, CYAN, EMERALD, AMBER, LIGHT)
const THEMES = [
  { id: "violet", name: "Violet", color: "#c084fc", rgb: "192, 132, 252" },
  { id: "cyan", name: "Cyan", color: "#38bdf8", rgb: "56, 189, 248" },
  { id: "emerald", name: "Emerald", color: "#34d399", rgb: "52, 211, 153" },
  { id: "amber", name: "Amber", color: "#fbbf24", rgb: "251, 191, 36" },
  { id: "light", name: "Light", color: "#7c3aed", rgb: "124, 58, 237" }
];

let currentThemeIndex = 0;

function showThemeToast(msg) {
  let toast = document.getElementById("themeToast");
  if (!toast) {
    toast = document.createElement("div");
    toast.id = "themeToast";
    toast.className = "theme-toast";
    document.body.appendChild(toast);
  }
  toast.textContent = msg;
  toast.classList.add("show");
  clearTimeout(toast._timer);
  toast._timer = setTimeout(() => {
    toast.classList.remove("show");
  }, 2200);
}

function applyTheme(themeId, showToastNotification = false) {
  const idx = THEMES.findIndex(t => t.id === themeId);
  if (idx !== -1) {
    currentThemeIndex = idx;
  }
  const theme = THEMES[currentThemeIndex];
  document.documentElement.setAttribute("data-theme", theme.id);
  document.body.setAttribute("data-theme", theme.id);
  try {
    localStorage.setItem("ankit_portfolio_theme", theme.id);
  } catch (err) {}

  const label = document.getElementById("themePillLabel");
  const indicator = document.getElementById("themeIndicator");
  const mobileLabel = document.getElementById("mobileThemeLabel");
  const mobileIndicator = document.getElementById("mobileThemeIndicator");

  if (label) label.textContent = theme.name;
  if (indicator) indicator.style.backgroundColor = theme.color;
  if (mobileLabel) mobileLabel.textContent = theme.name;
  if (mobileIndicator) mobileIndicator.style.backgroundColor = theme.color;

  const themeToggleBtnEl = document.getElementById("themeToggleBtn");
  if (themeToggleBtnEl) {
    themeToggleBtnEl.title = `Current Theme: ${theme.name} (Click to switch)`;
    themeToggleBtnEl.setAttribute("aria-label", `Switch UI Theme (Current: ${theme.name})`);
  }

  window.dispatchEvent(new CustomEvent("themechange", { detail: theme }));

  if (showToastNotification) {
    showThemeToast(`${theme.name} Theme Activated`);
  }
}

function cycleTheme() {
  currentThemeIndex = (currentThemeIndex + 1) % THEMES.length;
  applyTheme(THEMES[currentThemeIndex].id, true);
}

const themeToggleBtn = document.getElementById("themeToggleBtn");
if (themeToggleBtn) {
  themeToggleBtn.addEventListener("click", cycleTheme);
}
const mobileThemeToggleBtn = document.getElementById("mobileThemeToggleBtn");
if (mobileThemeToggleBtn) {
  mobileThemeToggleBtn.addEventListener("click", cycleTheme);
}

// Initialize theme
let savedTheme = "violet";
try {
  savedTheme = localStorage.getItem("ankit_portfolio_theme") || "violet";
} catch (e) {}
applyTheme(savedTheme, false);

// ACTIVE NAVIGATION LINK OBSERVER
const navCapsule = document.getElementById("navLinks");
if (navCapsule) {
  const navObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          navCapsule.querySelectorAll("a").forEach(a =>
            a.classList.toggle("active", a.getAttribute("href") === "#" + e.target.id)
          );
        }
      });
    },
    { rootMargin: "-40% 0px -50% 0px" }
  );
  ["about", "stack", "projects", "certificates", "contact"].forEach(id => {
    const el = document.getElementById(id);
    if (el) navObserver.observe(el);
  });
}

// MOTION REVEAL ON SCROLL
const revealElements = document.querySelectorAll(".reveal");
const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
      }
    });
  },
  { threshold: 0.12 }
);
revealElements.forEach(el => revealObserver.observe(el));

// SCROLL PROGRESS BAR
window.addEventListener("scroll", () => {
  const scrollBar = document.getElementById("scrollProgress");
  if (!scrollBar) return;
  const winScroll = document.documentElement.scrollTop;
  const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  const scrolled = height > 0 ? (winScroll / height) * 100 : 0;
  scrollBar.style.width = scrolled + "%";
});

// TYPEWRITER ROLE EFFECT
const roles = [
  "clean web tools",
  "autonomous agent pipelines",
  "fast web applications",
  "open-source automation"
];
let roleIndex = 0;
let charIndex = 0;
let isDeleting = false;
const typewriterEl = document.getElementById("typewriterText");

function tickTypewriter() {
  if (!typewriterEl) return;
  const currentRole = roles[roleIndex];
  if (isDeleting) {
    typewriterEl.textContent = currentRole.substring(0, charIndex - 1);
    charIndex--;
  } else {
    typewriterEl.textContent = currentRole.substring(0, charIndex + 1);
    charIndex++;
  }

  let delay = isDeleting ? 45 : 85;

  if (!isDeleting && charIndex === currentRole.length) {
    delay = 2200; // Pause at full text
    isDeleting = true;
  } else if (isDeleting && charIndex === 0) {
    isDeleting = false;
    roleIndex = (roleIndex + 1) % roles.length;
    delay = 500;
  }

  setTimeout(tickTypewriter, delay);
}
tickTypewriter();

// ANIMATE STAT COUNTER (CGPA: 8.82)
let counterAnimated = false;
const cgpaCounter = document.getElementById("cgpaCounter");
if (cgpaCounter) {
  const counterObserver = new IntersectionObserver((entries) => {
    if (entries[0].isIntersecting && !counterAnimated) {
      counterAnimated = true;
      let val = 0.0;
      const target = 8.82;
      const step = target / 40;
      const interval = setInterval(() => {
        val += step;
        if (val >= target) {
          cgpaCounter.textContent = target.toFixed(2);
          clearInterval(interval);
        } else {
          cgpaCounter.textContent = val.toFixed(2);
        }
      }, 35);
    }
  }, { threshold: 0.5 });
  counterObserver.observe(cgpaCounter);
}

// COPY EMAIL TO CLIPBOARD WITH TOAST
const copyEmailBtn = document.getElementById("copyEmailBtn");
const toast = document.getElementById("toast");
if (copyEmailBtn) {
  copyEmailBtn.addEventListener("click", () => {
    navigator.clipboard.writeText("ankit1424yadav@gmail.com").then(() => {
      if (toast) {
        toast.classList.add("show");
        setTimeout(() => toast.classList.remove("show"), 2800);
      }
    }).catch(() => {
      window.location.href = "mailto:ankit1424yadav@gmail.com";
    });
  });
}

// ============================================================================
// CSE STUDENT COMPUTER & MOTION GRAPHICS (JS, PYTHON, GITHUB)
// ============================================================================
function initCseComputerMotionGraphics() {
  const container = document.getElementById("laptopMockup");
  const chassis = document.getElementById("cseComputerChassis");
  const badgeJs = document.getElementById("mgLogoJs");
  const badgePython = document.getElementById("mgLogoPython");
  const badgeGithub = document.getElementById("mgLogoGithub");

  if (!container || !chassis) return;

  // 1. 3D Parallax Tilt with Smooth Damping
  let mouseX = 0;
  let mouseY = 0;
  let currentRotX = 2.5;
  let currentRotY = -3;
  let targetRotX = 2.5;
  let targetRotY = -3;

  container.addEventListener("mousemove", (e) => {
    const rect = container.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;

    targetRotY = x * 18;
    targetRotX = 2.5 - y * 14;

    mouseX = x;
    mouseY = y;
  });

  container.addEventListener("mouseleave", () => {
    targetRotX = 2.5;
    targetRotY = -3;
    mouseX = 0;
    mouseY = 0;
  });

  // Touch Support for Mobile
  container.addEventListener("touchmove", (e) => {
    if (e.touches.length === 1) {
      const rect = container.getBoundingClientRect();
      const touch = e.touches[0];
      const x = (touch.clientX - rect.left) / rect.width - 0.5;
      const y = (touch.clientY - rect.top) / rect.height - 0.5;
      targetRotY = x * 14;
      targetRotX = 2.5 - y * 10;
    }
  }, { passive: true });

  container.addEventListener("touchend", () => {
    targetRotX = 2.5;
    targetRotY = -3;
  });

  function renderTilt() {
    currentRotX += (targetRotX - currentRotX) * 0.08;
    currentRotY += (targetRotY - currentRotY) * 0.08;

    chassis.style.transform = `perspective(1100px) rotateX(${currentRotX.toFixed(2)}deg) rotateY(${currentRotY.toFixed(2)}deg)`;

    // Motion graphics subtle depth offsets for floating badges
    if (badgeJs) {
      badgeJs.style.transform = `translate3d(${(mouseX * 16).toFixed(1)}px, ${(mouseY * 16).toFixed(1)}px, 30px)`;
    }
    if (badgePython) {
      badgePython.style.transform = `translate3d(${(-mouseX * 18).toFixed(1)}px, ${(-mouseY * 18).toFixed(1)}px, 35px)`;
    }
    if (badgeGithub) {
      badgeGithub.style.transform = `translate3d(${(mouseX * 14).toFixed(1)}px, ${(mouseY * 14).toFixed(1)}px, 40px)`;
    }

    requestAnimationFrame(renderTilt);
  }
  requestAnimationFrame(renderTilt);

  // 2. Interactive IDE Tab Switching
  const tabs = container.querySelectorAll(".cse-tab");
  const codeArea = container.querySelector(".cse-screen-code");
  const termCmd = container.querySelector(".term-cmd");

  const tabSnippets = [
    {
      code: `
        <div class="code-line"><span class="c-comment"># Ankit Yadav · B.Tech CSE (LPU '29)</span></div>
        <div class="code-line"><span class="c-keyword">import</span> <span class="c-lib">asyncio</span>, <span class="c-lib">ollama</span></div>
        <div class="code-line"><span class="c-keyword">from</span> <span class="c-lib">ventures</span> <span class="c-keyword">import</span> <span class="c-func">Founder</span></div>
        <div class="code-line">&nbsp;</div>
        <div class="code-line"><span class="c-keyword">class</span> <span class="c-class">StudentDeveloper</span>:</div>
        <div class="code-line">&nbsp;&nbsp;<span class="c-keyword">def</span> <span class="c-func">__init__</span>(<span class="c-param">self</span>):</div>
        <div class="code-line">&nbsp;&nbsp;&nbsp;&nbsp;<span class="c-param">self</span>.project = <span class="c-str">"onlyfools.blogspot.com"</span></div>
        <div class="code-line">&nbsp;&nbsp;&nbsp;&nbsp;<span class="c-param">self</span>.stack = [<span class="c-str">"Python"</span>, <span class="c-str">"JavaScript"</span>, <span class="c-str">"AI Agents"</span>]</div>
        <div class="code-line">&nbsp;&nbsp;&nbsp;&nbsp;<span class="c-param">self</span>.mission = <span class="c-str">"Build, ship, automate ⚡"</span></div>
      `,
      cmd: "python3 main.py --run"
    },
    {
      code: `
        <div class="code-line"><span class="c-comment">// JavaScript &amp; Modern Web Core</span></div>
        <div class="code-line"><span class="c-keyword">import</span> { <span class="c-lib">AgentRunner</span> } <span class="c-keyword">from</span> <span class="c-str">"@ollama/core"</span>;</div>
        <div class="code-line">&nbsp;</div>
        <div class="code-line"><span class="c-keyword">export async function</span> <span class="c-func">bootLocalAI</span>() {</div>
        <div class="code-line">&nbsp;&nbsp;<span class="c-keyword">const</span> <span class="c-param">agent</span> = <span class="c-keyword">new</span> <span class="c-class">AgentRunner</span>({ <span class="c-param">model</span>: <span class="c-str">"llama3-8b"</span> });</div>
        <div class="code-line">&nbsp;&nbsp;<span class="c-keyword">await</span> <span class="c-param">agent</span>.<span class="c-func">initialize</span>();</div>
        <div class="code-line">&nbsp;&nbsp;<span class="c-keyword">return</span> { <span class="c-param">status</span>: <span class="c-str">"Online &amp; Active"</span>, <span class="c-param">cgpa</span>: <span class="c-class">8.82</span> };</div>
        <div class="code-line">}</div>
      `,
      cmd: "npm run build && node server.js"
    },
    {
      code: `
        <div class="code-line"><span class="c-comment"># CSE Terminal Session · Ankit Yadav</span></div>
        <div class="code-line"><span class="c-param">$</span> <span class="c-lib">git</span> status</div>
        <div class="code-line"><span class="c-str">On branch main: clean working tree</span></div>
        <div class="code-line"><span class="c-param">$</span> <span class="c-lib">pip</span> install ollama langchain fastapi</div>
        <div class="code-line"><span class="c-str">[✓] Successfully installed 16 packages</span></div>
        <div class="code-line"><span class="c-param">$</span> <span class="c-lib">python3</span> -m ultron.agent --benchmark</div>
        <div class="code-line"><span class="c-func">[OK] Local throughput: 65 tokens/sec</span></div>
      `,
      cmd: "git commit -m 'feat: autonomous agent v2'"
    }
  ];

  tabs.forEach((tab, index) => {
    tab.style.cursor = "pointer";
    tab.addEventListener("click", () => {
      tabs.forEach(t => t.classList.remove("active"));
      tab.classList.add("active");
      if (codeArea && tabSnippets[index]) {
        codeArea.innerHTML = tabSnippets[index].code;
      }
      if (termCmd && tabSnippets[index]) {
        termCmd.textContent = tabSnippets[index].cmd;
      }
    });
  });
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", initCseComputerMotionGraphics);
} else {
  initCseComputerMotionGraphics();
}

// ============================================================================
// 3D HIGH-QUALITY GRAPHICS WORKSTATION (THREE.JS / WEBGL)
// ============================================================================
function initThreeLaptop() {
  const canvas = document.getElementById("threeLaptopCanvas");
  if (!canvas || typeof THREE === "undefined") return;

  const width = canvas.clientWidth || 440;
  const height = canvas.clientHeight || 390;

  // Scene & Camera
  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(36, width / height, 0.1, 100);
  camera.position.set(0, 0.45, 4.4);

  // WebGL Renderer
  const renderer = new THREE.WebGLRenderer({
    canvas: canvas,
    alpha: true,
    antialias: true,
    powerPreference: "high-performance"
  });
  renderer.setSize(width, height);
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

  // Master 3D Group
  const laptopGroup = new THREE.Group();
  scene.add(laptopGroup);

  // Default initial posture: sleek 3D perspective looking at user
  laptopGroup.position.set(0, -0.2, 0);
  laptopGroup.rotation.set(0.18, -0.24, 0.03);

  // Lighting Rig
  const ambientLight = new THREE.AmbientLight(0xd8b4fe, 0.7);
  scene.add(ambientLight);

  const mainLight = new THREE.DirectionalLight(0xffffff, 1.3);
  mainLight.position.set(3, 5, 4);
  scene.add(mainLight);

  const purpleRimLight = new THREE.DirectionalLight(0xc084fc, 2.4);
  purpleRimLight.position.set(-4, 3, -3);
  scene.add(purpleRimLight);

  const cyanFillLight = new THREE.PointLight(0x38bdf8, 1.6, 8);
  cyanFillLight.position.set(0, -1, 2);
  scene.add(cyanFillLight);

  // Screen Point Light (emits purple glow from the terminal screen onto the deck)
  const screenPointLight = new THREE.PointLight(0xa855f7, 2.0, 3.5);
  screenPointLight.position.set(0, 0.6, 0.1);
  laptopGroup.add(screenPointLight);

  // Materials
  const darkChassisMaterial = new THREE.MeshStandardMaterial({
    color: 0x0c0817,
    metalness: 0.88,
    roughness: 0.22,
  });

  const aluminumAccentMaterial = new THREE.MeshStandardMaterial({
    color: 0x221738,
    metalness: 0.95,
    roughness: 0.15,
  });

  const keyboardDeckMaterial = new THREE.MeshStandardMaterial({
    color: 0x06030c,
    metalness: 0.7,
    roughness: 0.45,
  });

  const keycapMaterial = new THREE.MeshStandardMaterial({
    color: 0x140e24,
    metalness: 0.4,
    roughness: 0.3,
  });

  const trackpadMaterial = new THREE.MeshStandardMaterial({
    color: 0x120c22,
    metalness: 0.8,
    roughness: 0.18,
  });

  // 1. LAPTOP BASE / CHASSIS
  const baseWidth = 2.7;
  const baseDepth = 1.8;
  const baseThickness = 0.08;

  const baseGeom = new THREE.BoxGeometry(baseWidth, baseThickness, baseDepth);
  const baseMesh = new THREE.Mesh(baseGeom, darkChassisMaterial);
  laptopGroup.add(baseMesh);

  // Keyboard recess well
  const recessGeom = new THREE.PlaneGeometry(2.35, 0.95);
  const recessMesh = new THREE.Mesh(recessGeom, keyboardDeckMaterial);
  recessMesh.rotation.x = -Math.PI / 2;
  recessMesh.position.set(0, baseThickness / 2 + 0.002, -0.2);
  laptopGroup.add(recessMesh);

  // Keyboard glow underplate
  const kbGlowGeom = new THREE.PlaneGeometry(2.3, 0.9);
  const kbGlowMat = new THREE.MeshBasicMaterial({
    color: 0x9333ea,
    transparent: true,
    opacity: 0.35,
  });
  const kbGlowMesh = new THREE.Mesh(kbGlowGeom, kbGlowMat);
  kbGlowMesh.rotation.x = -Math.PI / 2;
  kbGlowMesh.position.set(0, baseThickness / 2 + 0.003, -0.2);
  laptopGroup.add(kbGlowMesh);

  // Procedural 3D Keycaps (5 realistic rows + spacebar)
  const keysGroup = new THREE.Group();
  const keyRows = 5;
  const keyCols = 14;
  const keyW = 0.135;
  const keyD = 0.125;
  const keyH = 0.025;
  const keyGeom = new THREE.BoxGeometry(keyW, keyH, keyD);

  for (let r = 0; r < keyRows; r++) {
    const zPos = -0.55 + r * 0.17;
    for (let c = 0; c < keyCols; c++) {
      if (r === 4 && c >= 4 && c <= 9) continue; // Space for spacebar
      const xPos = -1.0 + c * 0.155;
      const key = new THREE.Mesh(keyGeom, keycapMaterial);
      key.position.set(xPos, baseThickness / 2 + keyH / 2 + 0.004, zPos);
      keysGroup.add(key);
    }
  }

  // Spacebar
  const spaceGeom = new THREE.BoxGeometry(0.9, keyH, keyD);
  const spaceKey = new THREE.Mesh(spaceGeom, keycapMaterial);
  spaceKey.position.set(0, baseThickness / 2 + keyH / 2 + 0.004, -0.55 + 4 * 0.17);
  keysGroup.add(spaceKey);
  laptopGroup.add(keysGroup);

  // Glass Trackpad
  const trackpadGeom = new THREE.PlaneGeometry(0.85, 0.52);
  const trackpadMesh = new THREE.Mesh(trackpadGeom, trackpadMaterial);
  trackpadMesh.rotation.x = -Math.PI / 2;
  trackpadMesh.position.set(0, baseThickness / 2 + 0.003, 0.52);
  laptopGroup.add(trackpadMesh);

  // Front Lip Pulse LED Bar
  const ledGeom = new THREE.BoxGeometry(0.6, 0.015, 0.02);
  const ledMat = new THREE.MeshBasicMaterial({ color: 0xc084fc });
  const ledMesh = new THREE.Mesh(ledGeom, ledMat);
  ledMesh.position.set(0, 0, baseDepth / 2 + 0.005);
  laptopGroup.add(ledMesh);

  // 2. LAPTOP HINGE & SCREEN LID
  const hingePivot = new THREE.Group();
  hingePivot.position.set(0, baseThickness / 2, -baseDepth / 2 + 0.04);
  laptopGroup.add(hingePivot);

  // Hinge cylinder
  const hingeGeom = new THREE.CylinderGeometry(0.04, 0.04, 2.3, 16);
  const hingeMesh = new THREE.Mesh(hingeGeom, aluminumAccentMaterial);
  hingeMesh.rotation.z = Math.PI / 2;
  hingePivot.add(hingeMesh);

  // Screen Assembly Group
  const screenAssembly = new THREE.Group();
  screenAssembly.rotation.x = -1.85; // Laptop lid angle
  hingePivot.add(screenAssembly);

  const screenH = 1.75;
  const screenW = 2.7;
  const screenThick = 0.05;

  // Screen rear lid
  const lidGeom = new THREE.BoxGeometry(screenW, screenH, screenThick);
  const lidMesh = new THREE.Mesh(lidGeom, darkChassisMaterial);
  lidMesh.position.set(0, screenH / 2, -screenThick / 2);
  screenAssembly.add(lidMesh);

  // Glowing logo on back of lid
  const logoGeom = new THREE.CircleGeometry(0.12, 32);
  const logoMat = new THREE.MeshBasicMaterial({ color: 0xc084fc, side: THREE.DoubleSide });
  const logoMesh = new THREE.Mesh(logoGeom, logoMat);
  logoMesh.position.set(0, screenH / 2, -screenThick - 0.001);
  logoMesh.rotation.y = Math.PI;
  screenAssembly.add(logoMesh);

  // Front screen bezel
  const bezelGeom = new THREE.PlaneGeometry(screenW - 0.04, screenH - 0.04);
  const bezelMat = new THREE.MeshStandardMaterial({ color: 0x05020a, roughness: 0.8 });
  const bezelMesh = new THREE.Mesh(bezelGeom, bezelMat);
  bezelMesh.position.set(0, screenH / 2, 0.001);
  screenAssembly.add(bezelMesh);

  // Webcam sensor dot
  const camDotGeom = new THREE.CircleGeometry(0.015, 16);
  const camDotMat = new THREE.MeshBasicMaterial({ color: 0x38bdf8 });
  const camDot = new THREE.Mesh(camDotGeom, camDotMat);
  camDot.position.set(0, screenH - 0.06, 0.003);
  screenAssembly.add(camDot);

  // 3. DYNAMIC HIGH-RES CODE TERMINAL TEXTURE
  const screenCanvas = document.createElement("canvas");
  screenCanvas.width = 1024;
  screenCanvas.height = 660;
  const sCtx = screenCanvas.getContext("2d");

  const screenTexture = new THREE.CanvasTexture(screenCanvas);
  screenTexture.minFilter = THREE.LinearFilter;
  screenTexture.magFilter = THREE.LinearFilter;

  const displayGeom = new THREE.PlaneGeometry(screenW - 0.16, screenH - 0.22);
  const displayMat = new THREE.MeshBasicMaterial({
    map: screenTexture,
  });
  const displayMesh = new THREE.Mesh(displayGeom, displayMat);
  displayMesh.position.set(0, screenH / 2 + 0.01, 0.004);
  screenAssembly.add(displayMesh);

  // 4. VOLUMETRIC SCREEN LIGHT PROJECTION CONE (VFX)
  const coneGeom = new THREE.CylinderGeometry(1.6, 0.7, 2.2, 16, 1, true);
  const coneMat = new THREE.MeshBasicMaterial({
    color: 0xa855f7,
    transparent: true,
    opacity: 0.08,
    side: THREE.DoubleSide,
    blending: THREE.AdditiveBlending,
    depthWrite: false,
  });
  const lightCone = new THREE.Mesh(coneGeom, coneMat);
  lightCone.position.set(0, 0.9, 0.8);
  lightCone.rotation.x = Math.PI / 2.6;
  screenAssembly.add(lightCone);

  // 5. FLOATING HOLOGRAPHIC CODE DATA PARTICLES (VFX)
  const particleCount = 100;
  const particleGeom = new THREE.BufferGeometry();
  const particlePositions = new Float32Array(particleCount * 3);
  const particleVelocities = [];

  for (let i = 0; i < particleCount; i++) {
    particlePositions[i * 3] = (Math.random() - 0.5) * 3.5;
    particlePositions[i * 3 + 1] = Math.random() * 2.5 - 0.3;
    particlePositions[i * 3 + 2] = (Math.random() - 0.5) * 2.5;

    particleVelocities.push({
      vy: Math.random() * 0.006 + 0.003,
      vx: (Math.random() - 0.5) * 0.002,
      vz: (Math.random() - 0.5) * 0.002,
    });
  }
  particleGeom.setAttribute("position", new THREE.BufferAttribute(particlePositions, 3));

  // Glowing particle texture
  const pTexCanvas = document.createElement("canvas");
  pTexCanvas.width = 64;
  pTexCanvas.height = 64;
  const pCtx = pTexCanvas.getContext("2d");
  const pGrad = pCtx.createRadialGradient(32, 32, 0, 32, 32, 32);
  pGrad.addColorStop(0, "rgba(255, 255, 255, 1)");
  pGrad.addColorStop(0.3, "rgba(192, 132, 252, 0.9)");
  pGrad.addColorStop(0.7, "rgba(168, 85, 247, 0.4)");
  pGrad.addColorStop(1, "rgba(168, 85, 247, 0)");
  pCtx.fillStyle = pGrad;
  pCtx.fillRect(0, 0, 64, 64);
  const pTexture = new THREE.CanvasTexture(pTexCanvas);

  const particleMat = new THREE.PointsMaterial({
    size: 0.09,
    map: pTexture,
    transparent: true,
    blending: THREE.AdditiveBlending,
    depthWrite: false,
    color: 0xe9d5ff,
  });
  const particleSystem = new THREE.Points(particleGeom, particleMat);
  scene.add(particleSystem);

  // 6. CONTACT SHADOW
  const shadowGeom = new THREE.PlaneGeometry(3.6, 2.6);
  const shadowMat = new THREE.MeshBasicMaterial({
    color: 0x030107,
    transparent: true,
    opacity: 0.85,
  });
  const shadowMesh = new THREE.Mesh(shadowGeom, shadowMat);
  shadowMesh.rotation.x = -Math.PI / 2;
  shadowMesh.position.set(0, -baseThickness / 2 - 0.05, 0.2);
  laptopGroup.add(shadowMesh);

  // 7. SCREEN CANVAS CODE RENDER
  let codeFrame = 0;
  function updateScreen() {
    codeFrame++;
    sCtx.fillStyle = "#090414";
    sCtx.fillRect(0, 0, 1024, 660);

    // Title Bar
    sCtx.fillStyle = "#160b29";
    sCtx.fillRect(0, 0, 1024, 52);

    // Window controls
    sCtx.fillStyle = "#ef4444";
    sCtx.beginPath(); sCtx.arc(32, 26, 8, 0, Math.PI * 2); sCtx.fill();
    sCtx.fillStyle = "#f59e0b";
    sCtx.beginPath(); sCtx.arc(58, 26, 8, 0, Math.PI * 2); sCtx.fill();
    sCtx.fillStyle = "#10b981";
    sCtx.beginPath(); sCtx.arc(84, 26, 8, 0, Math.PI * 2); sCtx.fill();

    // Tab button
    sCtx.fillStyle = "#261342";
    if (sCtx.roundRect) {
      sCtx.beginPath();
      sCtx.roundRect(120, 10, 170, 34, 6);
      sCtx.fill();
    } else {
      sCtx.fillRect(120, 10, 170, 34);
    }
    sCtx.fillStyle = "#c084fc";
    sCtx.font = "bold 16px 'JetBrains Mono', monospace";
    sCtx.fillText("⚡ agent.py", 140, 33);

    // Secondary tab
    sCtx.fillStyle = "#71717a";
    sCtx.font = "14px 'JetBrains Mono', monospace";
    sCtx.fillText("onlyfools.ai", 320, 33);

    // Code lines
    sCtx.font = "18px 'JetBrains Mono', monospace";
    const leftMargin = 40;
    let y = 100;

    // Header comments
    sCtx.fillStyle = "#94a3b8";
    sCtx.fillText("# ANKIT YADAV — DEVELOPER & FOUNDER", leftMargin, y);
    y += 34;
    sCtx.fillText("# Lovely Professional University · CSE '29", leftMargin, y);
    y += 42;

    // Imports
    sCtx.fillStyle = "#f43f5e";
    sCtx.fillText("import", leftMargin, y);
    sCtx.fillStyle = "#f8fafc";
    sCtx.fillText(" ollama, sys, torch", leftMargin + 76, y);
    y += 34;

    sCtx.fillStyle = "#f43f5e";
    sCtx.fillText("from", leftMargin, y);
    sCtx.fillStyle = "#60a5fa";
    sCtx.fillText(" onlyfools.core ", leftMargin + 50, y);
    sCtx.fillStyle = "#f43f5e";
    sCtx.fillText("import", leftMargin + 205, y);
    sCtx.fillStyle = "#f8fafc";
    sCtx.fillText(" AutonomousAgent", leftMargin + 280, y);
    y += 44;

    // Function definition
    sCtx.fillStyle = "#f43f5e";
    sCtx.fillText("def", leftMargin, y);
    sCtx.fillStyle = "#60a5fa";
    sCtx.fillText(" initialize_pipeline", leftMargin + 42, y);
    sCtx.fillStyle = "#cbd5e1";
    sCtx.fillText("():", leftMargin + 250, y);
    y += 34;

    sCtx.fillStyle = "#cbd5e1";
    sCtx.fillText("    agent = AutonomousAgent(", leftMargin, y);
    sCtx.fillStyle = "#34d399";
    sCtx.fillText('"Ultron-Hermes"', leftMargin + 320, y);
    sCtx.fillStyle = "#cbd5e1";
    sCtx.fillText(")", leftMargin + 480, y);
    y += 34;

    sCtx.fillStyle = "#cbd5e1";
    sCtx.fillText("    model = ollama.load(", leftMargin, y);
    sCtx.fillStyle = "#34d399";
    sCtx.fillText('"hermes-llama3:8b"', leftMargin + 260, y);
    sCtx.fillStyle = "#cbd5e1";
    sCtx.fillText(")", leftMargin + 465, y);
    y += 34;

    sCtx.fillStyle = "#f43f5e";
    sCtx.fillText("    return", leftMargin, y);
    sCtx.fillStyle = "#cbd5e1";
    sCtx.fillText(" { status: ", leftMargin + 75, y);
    sCtx.fillStyle = "#34d399";
    sCtx.fillText('"Online & Ready"', leftMargin + 195, y);
    sCtx.fillStyle = "#cbd5e1";
    sCtx.fillText(", speed: ", leftMargin + 375, y);
    sCtx.fillStyle = "#facc15";
    sCtx.fillText('"Local 65 tps"', leftMargin + 465, y);
    sCtx.fillStyle = "#cbd5e1";
    sCtx.fillText(" }", leftMargin + 615, y);
    y += 50;

    // Terminal interactive prompt
    sCtx.fillStyle = "#1e1038";
    sCtx.fillRect(leftMargin - 10, y - 24, 940, 52);
    sCtx.fillStyle = "#c084fc";
    sCtx.fillText("ankit@lpu:~$", leftMargin + 6, y + 8);
    sCtx.fillStyle = "#38bdf8";
    sCtx.fillText("python -m ultron.agent --mode=autonomous", leftMargin + 148, y + 8);

    // Blinking cursor
    if (Math.floor(codeFrame / 24) % 2 === 0) {
      sCtx.fillStyle = "#facc15";
      sCtx.fillRect(leftMargin + 590, y - 8, 10, 22);
    }

    // Subtle scanlines overlay
    sCtx.fillStyle = "rgba(255, 255, 255, 0.02)";
    for (let sl = 0; sl < 660; sl += 4) {
      sCtx.fillRect(0, sl, 1024, 1.5);
    }

    screenTexture.needsUpdate = true;
  }

  // 8. INTERACTIVE MOUSE PARALLAX & TILT
  let targetRotX = 0.18;
  let targetRotY = -0.24;
  let currentRotX = 0.18;
  let currentRotY = -0.24;
  let isHovered = false;

  const wrapper = document.getElementById("laptopMockup");
  if (wrapper) {
    wrapper.addEventListener("mousemove", (e) => {
      const rect = wrapper.getBoundingClientRect();
      const normX = (e.clientX - rect.left) / rect.width - 0.5;
      const normY = (e.clientY - rect.top) / rect.height - 0.5;
      targetRotY = -0.24 + normX * 0.7;
      targetRotX = 0.18 - normY * 0.45;
      isHovered = true;
    });

    wrapper.addEventListener("mouseleave", () => {
      targetRotX = 0.18;
      targetRotY = -0.24;
      isHovered = false;
    });

    // Touch support for mobile devices
    let touchStartX = 0;
    let touchStartY = 0;
    wrapper.addEventListener("touchstart", (e) => {
      if (e.touches.length === 1) {
        touchStartX = e.touches[0].clientX;
        touchStartY = e.touches[0].clientY;
      }
    }, { passive: true });

    wrapper.addEventListener("touchmove", (e) => {
      if (e.touches.length === 1) {
        const dx = (e.touches[0].clientX - touchStartX) / 180;
        const dy = (e.touches[0].clientY - touchStartY) / 180;
        targetRotY = -0.24 + dx;
        targetRotX = 0.18 - dy;
      }
    }, { passive: true });

    wrapper.addEventListener("touchend", () => {
      targetRotX = 0.18;
      targetRotY = -0.24;
    });
  }

  // Window resize handler
  function onResize() {
    if (!canvas) return;
    const w = canvas.clientWidth;
    const h = canvas.clientHeight;
    if (w && h) {
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    }
  }
  window.addEventListener("resize", onResize);

  // 9. ANIMATION & RENDER LOOP
  const clock = new THREE.Clock();

  function animate() {
    requestAnimationFrame(animate);
    const time = clock.getElapsedTime();

    // Smooth inertia interpolation
    currentRotX += (targetRotX - currentRotX) * 0.06;
    currentRotY += (targetRotY - currentRotY) * 0.06;

    // Ambient floating bobbing
    const idleBob = Math.sin(time * 1.5) * 0.035;
    const idleRoll = Math.cos(time * 1.2) * 0.015;

    laptopGroup.rotation.x = currentRotX + (isHovered ? 0 : idleBob * 0.5);
    laptopGroup.rotation.y = currentRotY + (isHovered ? 0 : idleRoll);
    laptopGroup.position.y = -0.2 + idleBob;

    // Animate volumetric light cone pulse
    lightCone.material.opacity = 0.07 + Math.sin(time * 2.5) * 0.025;

    // LED status breathing
    ledMat.color.setHSL(0.78 + Math.sin(time * 1.8) * 0.06, 0.85, 0.65);

    // Animate floating code particles
    const positions = particleGeom.attributes.position.array;
    for (let i = 0; i < particleCount; i++) {
      positions[i * 3 + 1] += particleVelocities[i].vy;
      positions[i * 3] += Math.sin(time + i) * 0.001;
      positions[i * 3 + 2] += Math.cos(time + i) * 0.001;

      if (positions[i * 3 + 1] > 2.2) {
        positions[i * 3 + 1] = -0.3;
        positions[i * 3] = (Math.random() - 0.5) * 3.5;
        positions[i * 3 + 2] = (Math.random() - 0.5) * 2.5;
      }
    }
    particleGeom.attributes.position.needsUpdate = true;
    particleSystem.rotation.y = time * 0.02;

    // Update screen code animation
    if (codeFrame % 3 === 0) {
      updateScreen();
    } else {
      codeFrame++;
    }

    renderer.render(scene, camera);
  }

  // Initial screen draw
  updateScreen();
  animate();
}

// Initialize Three.js laptop graphics
if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", initThreeLaptop);
} else {
  initThreeLaptop();
}

// COMPUTER SCIENCE THEMED 3D ANIMATED MODEL IN ABOUT SECTION
function initAboutCs3DModel() {
  const canvas = document.getElementById("aboutCs3dCanvas");
  const aboutSection = document.getElementById("about");
  if (!canvas || !aboutSection || typeof THREE === "undefined") return;

  const scene = new THREE.Scene();

  const renderer = new THREE.WebGLRenderer({
    canvas: canvas,
    alpha: true,
    antialias: true,
    powerPreference: "high-performance"
  });
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

  const camera = new THREE.PerspectiveCamera(40, 1, 0.1, 100);
  camera.position.set(0, 0, 9);

  // Lighting
  const ambientLight = new THREE.AmbientLight(0xd8b4fe, 0.6);
  scene.add(ambientLight);

  const mainLight = new THREE.DirectionalLight(0xc084fc, 1.4);
  mainLight.position.set(5, 8, 5);
  scene.add(mainLight);

  const cyanLight = new THREE.PointLight(0x38bdf8, 2.0, 15);
  cyanLight.position.set(-4, -2, 3);
  scene.add(cyanLight);

  const purpleLight = new THREE.PointLight(0xa855f7, 2.5, 15);
  purpleLight.position.set(4, 3, 3);
  scene.add(purpleLight);

  // Master CS Model Group (offset towards the right side of the section as a backdrop)
  const masterGroup = new THREE.Group();
  masterGroup.position.set(2.2, 0, 0);
  scene.add(masterGroup);

  // 1. SILICON CPU PROCESSOR DIE
  const cpuGroup = new THREE.Group();
  masterGroup.add(cpuGroup);

  // Silicon Substrate Board (Dark Violet / Slate PCB)
  const substrateGeom = new THREE.BoxGeometry(3.0, 3.0, 0.16);
  const substrateMat = new THREE.MeshStandardMaterial({
    color: 0x170b2c,
    roughness: 0.35,
    metalness: 0.65
  });
  const substrate = new THREE.Mesh(substrateGeom, substrateMat);
  cpuGroup.add(substrate);

  // Heat Spreader / Core Die
  const dieGeom = new THREE.BoxGeometry(1.7, 1.7, 0.22);
  const dieMat = new THREE.MeshStandardMaterial({
    color: 0x2e1065,
    roughness: 0.2,
    metalness: 0.85
  });
  const die = new THREE.Mesh(dieGeom, dieMat);
  die.position.z = 0.1;
  cpuGroup.add(die);

  // Glowing CPU Logic Core Center (with circuit texture)
  const coreCanvas = document.createElement("canvas");
  coreCanvas.width = 256;
  coreCanvas.height = 256;
  const coreCtx = coreCanvas.getContext("2d");
  coreCtx.fillStyle = "#090314";
  coreCtx.fillRect(0, 0, 256, 256);
  coreCtx.strokeStyle = "#c084fc";
  coreCtx.lineWidth = 3;
  coreCtx.strokeRect(16, 16, 224, 224);
  coreCtx.strokeRect(32, 32, 192, 192);
  // CS Logic tracks
  coreCtx.strokeStyle = "#38bdf8";
  coreCtx.lineWidth = 2;
  coreCtx.beginPath();
  for (let i = 0; i < 8; i++) {
    const y = 48 + i * 22;
    coreCtx.moveTo(40, y);
    coreCtx.lineTo(90, y);
    coreCtx.lineTo(110, y + 10);
    coreCtx.lineTo(216, y + 10);
  }
  coreCtx.stroke();
  // Core text
  coreCtx.fillStyle = "#e9d5ff";
  coreCtx.font = "bold 20px 'JetBrains Mono', monospace";
  coreCtx.textAlign = "center";
  coreCtx.fillText("CSE CORE", 128, 120);
  coreCtx.font = "14px 'JetBrains Mono', monospace";
  coreCtx.fillStyle = "#38bdf8";
  coreCtx.fillText("3.8 GHz · 64-BIT", 128, 145);

  const coreTex = new THREE.CanvasTexture(coreCanvas);
  const coreTopGeom = new THREE.PlaneGeometry(1.5, 1.5);
  const coreTopMat = new THREE.MeshBasicMaterial({
    map: coreTex,
    transparent: true,
    opacity: 0.95
  });
  const coreTop = new THREE.Mesh(coreTopGeom, coreTopMat);
  coreTop.position.z = 0.22;
  cpuGroup.add(coreTop);

  // Gold Pins radiating along the perimeter
  const pinGeom = new THREE.BoxGeometry(0.04, 0.2, 0.08);
  const pinMat = new THREE.MeshStandardMaterial({
    color: 0xfacc15,
    metalness: 0.9,
    roughness: 0.2
  });
  const pinCount = 14;
  for (let i = 0; i < pinCount; i++) {
    const offset = -1.3 + (i / (pinCount - 1)) * 2.6;
    const pinT = new THREE.Mesh(pinGeom, pinMat);
    pinT.position.set(offset, 1.6, 0);
    cpuGroup.add(pinT);

    const pinB = new THREE.Mesh(pinGeom, pinMat);
    pinB.position.set(offset, -1.6, 0);
    cpuGroup.add(pinB);

    const pinL = new THREE.Mesh(pinGeom, pinMat);
    pinL.rotation.z = Math.PI / 2;
    pinL.position.set(-1.6, offset, 0);
    cpuGroup.add(pinL);

    const pinR = new THREE.Mesh(pinGeom, pinMat);
    pinR.rotation.z = Math.PI / 2;
    pinR.position.set(1.6, offset, 0);
    cpuGroup.add(pinR);
  }

  // 2. ALGORITHMIC GRAPH & DATA NETWORK
  const graphGroup = new THREE.Group();
  masterGroup.add(graphGroup);

  const nodeGeom = new THREE.SphereGeometry(0.09, 16, 16);
  const nodeMat = new THREE.MeshBasicMaterial({ color: 0x38bdf8 });
  const nodePositions = [
    new THREE.Vector3(-2.2, 1.8, 0.8),
    new THREE.Vector3(-2.8, -0.6, -0.5),
    new THREE.Vector3(-1.8, -2.1, 1.0),
    new THREE.Vector3(2.2, 2.0, -0.8),
    new THREE.Vector3(2.9, 0.4, 0.9),
    new THREE.Vector3(2.4, -1.9, -0.4),
    new THREE.Vector3(0, 2.6, 0.6),
    new THREE.Vector3(0, -2.7, -0.7)
  ];

  nodePositions.forEach(pos => {
    const node = new THREE.Mesh(nodeGeom, nodeMat);
    node.position.copy(pos);
    graphGroup.add(node);
  });

  const lineMat = new THREE.LineBasicMaterial({
    color: 0xa855f7,
    transparent: true,
    opacity: 0.4
  });
  nodePositions.forEach((pos, idx) => {
    const lineGeom = new THREE.BufferGeometry().setFromPoints([
      pos,
      new THREE.Vector3(pos.x * 0.45, pos.y * 0.45, 0.1)
    ]);
    const line = new THREE.Line(lineGeom, lineMat);
    graphGroup.add(line);

    if (idx < nodePositions.length - 1) {
      const edgeGeom = new THREE.BufferGeometry().setFromPoints([
        pos,
        nodePositions[(idx + 2) % nodePositions.length]
      ]);
      const edgeLine = new THREE.Line(edgeGeom, new THREE.LineBasicMaterial({
        color: 0x7c3aed,
        transparent: true,
        opacity: 0.25
      }));
      graphGroup.add(edgeLine);
    }
  });

  // 3. ROTATING WIREFRAME CS POLYHEDRON & ORBIT RINGS
  const wireGeom = new THREE.IcosahedronGeometry(2.6, 1);
  const wireMat = new THREE.MeshBasicMaterial({
    color: 0xc084fc,
    wireframe: true,
    transparent: true,
    opacity: 0.18
  });
  const wireSphere = new THREE.Mesh(wireGeom, wireMat);
  masterGroup.add(wireSphere);

  const ringGeom = new THREE.TorusGeometry(3.2, 0.025, 16, 100);
  const ringMat = new THREE.MeshBasicMaterial({
    color: 0x38bdf8,
    transparent: true,
    opacity: 0.35
  });
  const ring = new THREE.Mesh(ringGeom, ringMat);
  ring.rotation.x = Math.PI / 3;
  masterGroup.add(ring);

  const ring2 = new THREE.Mesh(ringGeom, new THREE.MeshBasicMaterial({
    color: 0xa855f7,
    transparent: true,
    opacity: 0.25
  }));
  ring2.rotation.x = -Math.PI / 4;
  ring2.rotation.y = Math.PI / 6;
  masterGroup.add(ring2);

  // 4. FLOATING BINARY DATA PACKETS
  const packetCount = 28;
  const packetGeom = new THREE.BoxGeometry(0.08, 0.08, 0.08);
  const packetMat = new THREE.MeshBasicMaterial({ color: 0x38bdf8 });
  const packets = [];

  for (let i = 0; i < packetCount; i++) {
    const packet = new THREE.Mesh(packetGeom, packetMat);
    packet.position.set(
      (Math.random() - 0.5) * 5,
      (Math.random() - 0.5) * 5,
      (Math.random() - 0.5) * 3
    );
    packet.userData = {
      vy: 0.008 + Math.random() * 0.015,
      rx: (Math.random() - 0.5) * 0.05,
      ry: (Math.random() - 0.5) * 0.05
    };
    masterGroup.add(packet);
    packets.push(packet);
  }

  // Tilt and Parallax Interaction
  let targetRotX = 0.25;
  let targetRotY = -0.3;
  let currentRotX = targetRotX;
  let currentRotY = targetRotY;

  window.addEventListener("mousemove", (e) => {
    const nx = (e.clientX / window.innerWidth) * 2 - 1;
    const ny = (e.clientY / window.innerHeight) * 2 - 1;
    targetRotY = -0.3 + nx * 0.45;
    targetRotX = 0.25 - ny * 0.35;
  });

  // Responsive Sizing
  function resize() {
    const w = aboutSection.clientWidth;
    const h = aboutSection.clientHeight;
    if (w === 0 || h === 0) return;
    camera.aspect = w / h;
    camera.updateProjectionMatrix();
    renderer.setSize(w, h, false);

    if (w < 860) {
      masterGroup.position.set(0, 0, -1);
      masterGroup.scale.set(0.72, 0.72, 0.72);
    } else {
      masterGroup.position.set(1.9, 0, 0);
      masterGroup.scale.set(1.0, 1.0, 1.0);
    }
  }
  const ro = new ResizeObserver(resize);
  ro.observe(aboutSection);
  resize();

  // IntersectionObserver to pause when offscreen
  let isVisible = true;
  const io = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      isVisible = entry.isIntersecting;
    });
  }, { threshold: 0.05 });
  io.observe(aboutSection);

  // Animation Loop
  let clock = 0;
  function animate() {
    requestAnimationFrame(animate);
    if (!isVisible) return;

    clock += 0.015;

    currentRotX += (targetRotX - currentRotX) * 0.05;
    currentRotY += (targetRotY - currentRotY) * 0.05;

    cpuGroup.rotation.x = currentRotX + Math.sin(clock * 0.8) * 0.05;
    cpuGroup.rotation.y = currentRotY + Math.cos(clock * 0.6) * 0.05;
    cpuGroup.position.y = Math.sin(clock) * 0.08;

    wireSphere.rotation.x += 0.002;
    wireSphere.rotation.y += 0.004;

    ring.rotation.z += 0.006;
    ring2.rotation.z -= 0.005;

    cyanLight.intensity = 1.6 + Math.sin(clock * 2.5) * 0.6;
    purpleLight.intensity = 2.0 + Math.cos(clock * 2.0) * 0.7;

    packets.forEach(p => {
      p.position.y += p.userData.vy;
      p.rotation.x += p.userData.rx;
      p.rotation.y += p.userData.ry;
      if (p.position.y > 2.8) {
        p.position.y = -2.8;
        p.position.x = (Math.random() - 0.5) * 4.5;
      }
    });

    renderer.render(scene, camera);
  }
  animate();
}

// Initialize CS 3D background model
if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", initAboutCs3DModel);
} else {
  initAboutCs3DModel();
}

// BACKGROUND AMBIENT CONSTELLATION CANVAS (DYNAMIC THEME COLORS)
(function initBgCanvas() {
  const canvas = document.getElementById("bg-canvas");
  if (!canvas) return;
  const ctx = canvas.getContext("2d");
  let width, height;
  let particles = [];
  const maxDistance = 125;
  let mouse = { x: -1000, y: -1000 };

  let currentRgb = "192, 132, 252";
  window.addEventListener("themechange", (e) => {
    if (e.detail && e.detail.rgb) {
      currentRgb = e.detail.rgb;
    }
  });

  function resize() {
    width = canvas.width = window.innerWidth;
    height = canvas.height = window.innerHeight;
  }
  window.addEventListener("resize", resize);
  resize();

  window.addEventListener("mousemove", (e) => {
    mouse.x = e.clientX;
    mouse.y = e.clientY;
  });

  const particleCount = Math.min(Math.floor((window.innerWidth * window.innerHeight) / 18000), 50);
  for (let i = 0; i < particleCount; i++) {
    particles.push({
      x: Math.random() * width,
      y: Math.random() * height,
      vx: (Math.random() - 0.5) * 0.45,
      vy: (Math.random() - 0.5) * 0.45,
      radius: Math.random() * 1.5 + 1
    });
  }

  function animate() {
    ctx.clearRect(0, 0, width, height);

    for (let i = 0; i < particles.length; i++) {
      const p1 = particles[i];
      p1.x += p1.vx;
      p1.y += p1.vy;

      if (p1.x < 0) p1.x = width;
      if (p1.x > width) p1.x = 0;
      if (p1.y < 0) p1.y = height;
      if (p1.y > height) p1.y = 0;

      ctx.beginPath();
      ctx.arc(p1.x, p1.y, p1.radius, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(${currentRgb}, 0.45)`;
      ctx.fill();

      for (let j = i + 1; j < particles.length; j++) {
        const p2 = particles[j];
        const dx = p1.x - p2.x;
        const dy = p1.y - p2.y;
        const dist = Math.sqrt(dx * dx + dy * dy);

        if (dist < maxDistance) {
          ctx.beginPath();
          ctx.moveTo(p1.x, p1.y);
          ctx.lineTo(p2.x, p2.y);
          const alpha = (1 - dist / maxDistance) * 0.18;
          ctx.strokeStyle = `rgba(${currentRgb}, ${alpha})`;
          ctx.lineWidth = 0.8;
          ctx.stroke();
        }
      }

      const mdx = p1.x - mouse.x;
      const mdy = p1.y - mouse.y;
      const mDist = Math.sqrt(mdx * mdx + mdy * mdy);
      if (mDist < 140) {
        ctx.beginPath();
        ctx.moveTo(p1.x, p1.y);
        ctx.lineTo(mouse.x, mouse.y);
        ctx.strokeStyle = `rgba(${currentRgb}, ${(1 - mDist / 140) * 0.35})`;
        ctx.lineWidth = 1;
        ctx.stroke();
      }
    }

    requestAnimationFrame(animate);
  }
  animate();
})();

// ==========================================================================
// CAREER JOURNEY: VISUAL ROADMAP
// ==========================================================================
// Static visual map with direct Onlyfools links rendered in DOM


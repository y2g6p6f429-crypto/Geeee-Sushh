/* ============================================================
   FOR HER — a digital love letter
   ------------------------------------------------------------
   EVERYTHING YOU MIGHT WANT TO EDIT LIVES IN THE "CONFIG" OBJECT
   BELOW. You do not need to touch anything past the CONFIG
   object unless you want to change how the site behaves.
   ============================================================ */

const CONFIG = {

  // ---------- NAMES ----------
  hisName: "Gaurang",                     // EDIT
  herName: "Siya",                        // EDIT: her name
  metDate: "5 November 2025",             // EDIT: the date you met (display text)
  herQuote: "Bby luvvvv u",               // EDIT
  nickname: "Sush",                       // EDIT: pet name, used here and there

  // ---------- LONG DISTANCE COUNTER ----------
  // EDIT: the date your relationship started, used for the live "days / months / hours / minutes" counter
  relationshipStart: "2026-02-10T00:00:00",

  // ---------- COUNTDOWN ----------
  // EDIT: the date you next see each other, in ISO format "YYYY-MM-DDTHH:MM:SS"
  nextMeetingDate: "2026-11-05T00:00:00",

  // ---------- TIMELINE ----------
  // EDIT: add, remove or rewrite timeline entries — order stays chronological
  timeline: [
    { date: "5 November 2025",  title: "We met",                    text: "It started with the simplest \u201cHappy birthday!!\u201d — neither of us knew what it would turn into." },
    { date: "10 February 2026", title: "Our story officially began", text: "The day \u201cus\u201d stopped being a maybe and started being a promise." },
    { date: "Since Then",       title: "Countless calls, laughs, memories", text: "And one evening at my house I still replay in my head, more than I'll ever admit." },
    { date: "Today",            title: "Still choosing you",        text: "Every single day, from however many kilometers away." },
    { date: "5 November 2026",  title: "Counting every second",     text: "Until our next hug — Mumbai to Surat, right on time for our anniversary of meeting." }
  ],

  // ---------- 20 REASONS I LOVE YOU ----------
  // EDIT: replace each line with your own reason. Cards flip on hover/tap.
  reasons: [
    "You said \u201chappy birthday\u201d to a stranger and somehow became my favorite person.",
    "The way you say my name when you're half asleep on call.",
    "You remember the small things I mention once, in passing.",
    "Your laugh — the real one, not the polite one.",
    "How you still get excited to tell me about your day, every day.",
    "The way you fight for us even when Mumbai and Surat make it hard.",
    "You never let a call end without saying it first.",
    "How safe your voice makes me feel, even from three hundred kilometers away.",
    "You believe in my plans louder than I do sometimes.",
    "The way you dance badly and don't care who's watching.",
    "You never once made the distance feel like my fault.",
    "How you turn a bad day into a \u201clet's talk it through\u201d day.",
    "Your patience with me, even when I don't deserve it.",
    "You send good morning texts like they're small love letters.",
    "The way your eyes look right before you fall asleep mid-call.",
    "You still get nervous before we see each other again.",
    "How you talk about our future like it's already decided.",
    "You choose honesty over comfort, always.",
    "The evening at my house I still think about on quiet nights.",
    "Simply — Sush. Exactly as you are."
  ],

  // ---------- GALLERY ----------
  // EDIT: replace src with real photo paths, and captions with your own memories.
  // Leave src empty ("") to show a placeholder box instead.
  gallery: [
    { src: "assets/photos/gallery-1.jpg", caption: "Wrapped up in that hug", ar: "0.563" },
    { src: "assets/photos/gallery-2.jpg", caption: "Caught not looking at the camera", ar: "0.982" },
    { src: "assets/photos/gallery-3.jpg", caption: "Close, always", ar: "0.563" },
    { src: "assets/photos/gallery-4.jpg", caption: "Cheek to cheek", ar: "0.563" },
    { src: "", caption: "Add another memory here", ar: "1" },
    { src: "", caption: "Add another memory here", ar: "1" }
  ],

  // ---------- LOVE LETTER ----------
  // EDIT: replace with your real letter. Keep it plain text — line breaks are respected.
  letter: `It's been a while since a "Happy birthday!!" text turned into this — Mumbai and Surat, a thousand phone calls, and somehow, you. I'm not good at writing these, so I'm not going to try to sound like anything other than myself. Here's what I actually feel:

I will be there even when the sun has set.
I will walk with your pet.
My shoulder will be the pillow to put your head and rest.
I will be your hot chocolate, the one you crave after coming home late.
I will be there for you when you have no clue.
I will become your door, the one you could open whenever you're bored.
I would become the spare for your personal wars.
I will be your warm shower after long working hours.
I will love you even after cold wars.
And if you'd like, I will be all yours.

That's the whole truth of it, Sush. Every line in there, I mean today, and I'll still mean it on the harder days too. Happy Girlfriend's Day. I love you — all of you, from however many kilometers away.`,

  // ---------- INTERACTIVE MEMORIES / OPEN WHEN ----------
  // EDIT: title + message for each "open when" card
  memories: [
    { icon: "🤍", title: "Open when you miss me",        text: "Hey Sush. If you're reading this, it means the distance is winning today. It isn't, really — it just feels that way. I'm one call away, same as always. Ring me, and I'll pick up before it even finishes ringing once." },
    { icon: "🌧️", title: "Open when you're sad",          text: "Whatever it is, you don't have to carry it alone just because I'm not next to you. Tell me. I'll listen the whole way through, no rushing, no fixing unless you want me to — just listening." },
    { icon: "🌪️", title: "Open when you're stressed",     text: "Breathe. You are further along than you think, and I am so proud of how hard you try. Whatever it is — one step, then the next. I've got you from here." },
    { icon: "🌙", title: "Open when you can't sleep",     text: "Close your eyes. Pretend my shoulder's right there under your head, like I promised. I'm not going anywhere. Sleep, Sush — I'll still be here in the morning." },
    { icon: "✨", title: "Open when you need motivation", text: "You've never once needed my permission to be incredible — you already are. I just get the very good luck of watching you do it. Go on. I'm cheering loudest from Mumbai." }
  ],

  // ---------- FUTURE DREAMS ----------
  dreams: [
    { icon: "✈️", title: "Traveling together", text: "Every place, side by side." },
    { icon: "🤗", title: "More hugs",          text: "The kind that make up for all the ones we missed." },
    { icon: "🌇", title: "Watching sunsets",   text: "No agenda, just us." },
    { icon: "🌳", title: "Growing old",        text: "Still choosing each other, decades from now." },
    { icon: "🎂", title: "Celebrating birthdays", text: "Never apart on the important days." },
    { icon: "🏡", title: "Building our home",  text: "A place that's neither Mumbai nor Surat — just ours." }
  ],

  // ---------- PROMISES ----------
  promises: [
    "I'll always choose you.",
    "I'll always support your dreams.",
    "I'll never stop making you smile.",
    "I'll close every distance I can.",
    "I'll listen, even on my worst days.",
    "I'll keep showing up, mile after mile."
  ],

  // ---------- MUSIC ----------
  songTitle: "Perfect",     // EDIT: display title (also edit the <audio src> in index.html)
  songArtist: "Ed Sheeran", // EDIT

  // ---------- FINALE ----------
  // EDIT: the message revealed after the "One Last Hug" button is pressed
  finalMessage: "No matter how many miles separate Mumbai and Surat, you'll always be home. I love you. — Gaurang \u2764\uFE0F",
};

/* ============================================================
   RENDER CONTENT FROM CONFIG
   ============================================================ */
document.addEventListener("DOMContentLoaded", () => {

  // ---- About her ----
  document.getElementById("her-name").textContent = CONFIG.herName;
  document.getElementById("met-date").textContent = CONFIG.metDate;
  document.getElementById("her-quote").textContent = `"${CONFIG.herQuote}"`;

  // ---- Timeline ----
  const tlList = document.getElementById("timeline-list");
  CONFIG.timeline.forEach(item => {
    const el = document.createElement("div");
    el.className = "tl-item reveal";
    el.innerHTML = `
      <span class="tl-dot"></span>
      <div class="tl-card glass">
        <div class="tl-date">${escapeHTML(item.date)}</div>
        <h4>${escapeHTML(item.title)}</h4>
        <p>${escapeHTML(item.text)}</p>
      </div>`;
    tlList.appendChild(el);
  });

  // ---- Reasons (flip cards) ----
  const reasonsGrid = document.getElementById("reasons-grid");
  CONFIG.reasons.forEach((reason, i) => {
    const el = document.createElement("div");
    el.className = "reason-card reveal";
    el.style.transitionDelay = `${(i % 6) * 0.06}s`;
    el.setAttribute("tabindex", "0");
    el.innerHTML = `
      <div class="reason-card-inner">
        <div class="reason-face front">
          <div class="reason-num">${String(i + 1).padStart(2, "0")}</div>
          <div class="reason-hint">Reason ${i + 1} of 20</div>
        </div>
        <div class="reason-face back">
          <p>${escapeHTML(reason)}</p>
        </div>
      </div>`;
    reasonsGrid.appendChild(el);
  });

  // ---- Gallery ----
  const galleryGrid = document.getElementById("gallery-grid");
  CONFIG.gallery.forEach((item, i) => {
    const el = document.createElement("div");
    el.className = "masonry-item reveal-scale";
    el.style.setProperty("--ar", item.ar || "1");
    if (item.src) {
      el.innerHTML = `<img src="${item.src}" alt="${escapeHTML(item.caption)}" loading="lazy">
        <div class="masonry-caption">${escapeHTML(item.caption)}</div>`;
    } else {
      el.innerHTML = `<div class="ph">📷<br>${escapeHTML(item.caption)}<br><span style="opacity:.55">(add photo src in script.js)</span></div>`;
    }
    el.addEventListener("click", () => openLightbox(i));
    galleryGrid.appendChild(el);
  });

  // ---- Memories ----
  const memoriesGrid = document.getElementById("memories-grid");
  CONFIG.memories.forEach(m => {
    const el = document.createElement("div");
    el.className = "memory-card glass reveal";
    el.innerHTML = `<span class="memory-icon">${m.icon}</span><h4>${escapeHTML(m.title)}</h4>`;
    el.addEventListener("click", () => openMemoryModal(m.title, m.text));
    memoriesGrid.appendChild(el);
  });

  // ---- Dreams ----
  const dreamsGrid = document.getElementById("dreams-grid");
  CONFIG.dreams.forEach(d => {
    const el = document.createElement("div");
    el.className = "dream-card glass reveal";
    el.innerHTML = `<div class="dream-icon">${d.icon}</div><h4>${escapeHTML(d.title)}</h4><p>${escapeHTML(d.text)}</p>`;
    dreamsGrid.appendChild(el);
  });

  // ---- Promises ----
  const promiseList = document.getElementById("promise-list");
  CONFIG.promises.forEach(p => {
    const el = document.createElement("div");
    el.className = "promise-card glass reveal";
    el.innerHTML = `<span class="promise-mark">❝</span><p>${escapeHTML(p)}</p>`;
    promiseList.appendChild(el);
  });

  // ---- Music title ----
  document.getElementById("mp-title").textContent = CONFIG.songTitle;
  document.querySelector(".mp-sub").textContent = CONFIG.songArtist;
  document.querySelector(".mm-title").textContent = CONFIG.songTitle;
  document.querySelector(".mm-artist").textContent = CONFIG.songArtist;
  document.getElementById("her-quote").setAttribute("data-nickname", CONFIG.nickname);

  initEverything();
});

function escapeHTML(str){
  const div = document.createElement("div");
  div.textContent = str;
  return div.innerHTML;
}

/* ============================================================
   INIT — everything that needs the DOM built above
   ============================================================ */
function initEverything(){
  initLoader();
  initNavbar();
  initAmbientCanvas();
  initCursorGlow();
  initCursorExtras();
  initThreadProgress();
  initScrollReveal();
  initCounters();
  initCountdown();
  initGallery();
  initLetterTyping();
  initMusicPlayer();
  initMemoryModal();
  initHugButton();
  initPlaneAnimation();
  initFinaleConstellation();
}

/* ---------- Loading screen: two stars, a thread, a heart drawn, then text ---------- */
function initLoader(){
  const loader = document.getElementById("loader");
  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const hideDelay = reduceMotion ? 400 : 5400;
  function hide(){ loader.classList.add("hidden"); }
  window.addEventListener("load", () => setTimeout(hide, hideDelay));
  // fallback in case the load event never fires
  setTimeout(hide, hideDelay + 1500);
}

/* ---------- Navbar: blur-on-scroll + mobile toggle + close on link click ---------- */
function initNavbar(){
  const nav = document.getElementById("navbar");
  const toggle = document.getElementById("nav-toggle");
  const links = document.getElementById("nav-links");
  const musicLink = document.getElementById("nav-music");

  function onScroll(){
    nav.classList.toggle("scrolled", window.scrollY > 40);
  }
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();

  toggle.addEventListener("click", () => {
    const isOpen = links.classList.toggle("open");
    toggle.setAttribute("aria-expanded", String(isOpen));
  });
  links.querySelectorAll("a").forEach(a => {
    a.addEventListener("click", () => {
      links.classList.remove("open");
      toggle.setAttribute("aria-expanded", "false");
    });
  });

  if (musicLink){
    musicLink.addEventListener("click", () => {
      const player = document.getElementById("music-player");
      const tab = document.getElementById("music-tab");
      player.classList.remove("collapsed");
      tab.classList.remove("show");
    });
  }
}

/* ---------- Ambient canvas: soft stars, bokeh, occasional hearts ---------- */
function initAmbientCanvas(){
  const canvas = document.getElementById("ambient-canvas");
  const ctx = canvas.getContext("2d");
  let w, h, dpr;
  let stars = [], bokehs = [], hearts = [];
  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  function resize(){
    dpr = Math.min(window.devicePixelRatio || 1, 2);
    w = canvas.width = window.innerWidth * dpr;
    h = canvas.height = window.innerHeight * dpr;
    canvas.style.width = window.innerWidth + "px";
    canvas.style.height = window.innerHeight + "px";
    seed();
  }

  function seed(){
    const starCount = Math.round((window.innerWidth * window.innerHeight) / 9000);
    stars = Array.from({ length: starCount }, () => ({
      x: Math.random() * w, y: Math.random() * h,
      r: (Math.random() * 1.2 + 0.3) * dpr,
      phase: Math.random() * Math.PI * 2,
      speed: 0.4 + Math.random() * 0.6
    }));
    bokehs = Array.from({ length: 9 }, () => ({
      x: Math.random() * w, y: Math.random() * h,
      r: (Math.random() * 90 + 60) * dpr,
      hue: [ "242,198,211", "201,183,224", "233,196,126" ][Math.floor(Math.random()*3)],
      dx: (Math.random() - 0.5) * 0.06, dy: (Math.random() - 0.5) * 0.06,
      opacity: Math.random() * 0.10 + 0.04
    }));
  }

  function spawnHeart(){
    if (hearts.length > 6) return;
    hearts.push({
      x: Math.random() * w, y: h + 40 * dpr,
      size: (Math.random() * 10 + 10) * dpr,
      speed: (Math.random() * 0.3 + 0.25) * dpr,
      drift: (Math.random() - 0.5) * 0.3,
      opacity: 0
    });
  }

  function drawHeart(ctx, x, y, size, opacity){
    ctx.save();
    ctx.globalAlpha = opacity;
    ctx.translate(x, y);
    ctx.scale(size / 20, size / 20);
    ctx.fillStyle = "#f2c6d3";
    ctx.beginPath();
    ctx.moveTo(0, 5);
    ctx.bezierCurveTo(0, 2, -3, -2, -7, -2);
    ctx.bezierCurveTo(-12, -2, -12, 4, -12, 4);
    ctx.bezierCurveTo(-12, 8, -8, 12, 0, 17);
    ctx.bezierCurveTo(8, 12, 12, 8, 12, 4);
    ctx.bezierCurveTo(12, 4, 12, -2, 7, -2);
    ctx.bezierCurveTo(3, -2, 0, 2, 0, 5);
    ctx.fill();
    ctx.restore();
  }

  let t = 0;
  function tick(){
    t += 0.016;
    ctx.clearRect(0, 0, w, h);

    // bokeh
    bokehs.forEach(b => {
      b.x += b.dx; b.y += b.dy;
      if (b.x < -b.r) b.x = w + b.r; if (b.x > w + b.r) b.x = -b.r;
      if (b.y < -b.r) b.y = h + b.r; if (b.y > h + b.r) b.y = -b.r;
      const grad = ctx.createRadialGradient(b.x, b.y, 0, b.x, b.y, b.r);
      grad.addColorStop(0, `rgba(${b.hue}, ${b.opacity})`);
      grad.addColorStop(1, `rgba(${b.hue}, 0)`);
      ctx.fillStyle = grad;
      ctx.beginPath(); ctx.arc(b.x, b.y, b.r, 0, Math.PI * 2); ctx.fill();
    });

    // stars (twinkle)
    stars.forEach(s => {
      const tw = reduceMotion ? 0.6 : (Math.sin(t * s.speed + s.phase) + 1) / 2;
      ctx.globalAlpha = 0.15 + tw * 0.55;
      ctx.fillStyle = "#faf3ea";
      ctx.beginPath(); ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2); ctx.fill();
    });
    ctx.globalAlpha = 1;

    // occasional floating hearts
    if (!reduceMotion){
      if (Math.random() < 0.006) spawnHeart();
      hearts.forEach(hh => {
        hh.y -= hh.speed; hh.x += hh.drift;
        hh.opacity = Math.min(hh.opacity + 0.01, 0.5);
        drawHeart(ctx, hh.x, hh.y, hh.size, hh.opacity * (hh.y / h));
      });
      hearts = hearts.filter(hh => hh.y > -60 * dpr);
    }

    requestAnimationFrame(tick);
  }

  window.addEventListener("resize", resize);
  resize();
  tick();
}

/* ---------- Cursor glow ---------- */
function initCursorGlow(){
  const glow = document.getElementById("cursor-glow");
  if (window.matchMedia("(hover:none)").matches) return;
  window.addEventListener("mousemove", e => {
    glow.style.transform = `translate(${e.clientX}px, ${e.clientY}px) translate(-50%,-50%)`;
  });
}

/* ---------- Cursor extras: occasional heart trail + click ripple ---------- */
function initCursorExtras(){
  if (window.matchMedia("(hover:none)").matches) return;
  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  if (!reduceMotion){
    let lastHeart = 0;
    window.addEventListener("mousemove", e => {
      const now = performance.now();
      if (now - lastHeart < 220) return; // throttle
      lastHeart = now;
      const h = document.createElement("div");
      h.className = "cursor-trail-heart";
      h.textContent = "♥";
      h.style.left = e.clientX + "px";
      h.style.top = e.clientY + "px";
      document.body.appendChild(h);
      setTimeout(() => h.remove(), 1000);
    });
  }

  window.addEventListener("click", e => {
    const r = document.createElement("div");
    r.className = "click-ripple";
    r.style.left = e.clientX + "px";
    r.style.top = e.clientY + "px";
    document.body.appendChild(r);
    setTimeout(() => r.remove(), 850);
  });
}

/* ---------- Scroll progress thread ---------- */
function initThreadProgress(){
  const fill = document.querySelector("#thread-progress .fill");
  function update(){
    const scrolled = window.scrollY;
    const max = document.documentElement.scrollHeight - window.innerHeight;
    const pct = max > 0 ? (scrolled / max) * 100 : 0;
    fill.style.width = pct + "%";
  }
  window.addEventListener("scroll", update, { passive: true });
  update();
}

/* ---------- Scroll reveal ---------- */
function initScrollReveal(){
  const targets = document.querySelectorAll(".reveal, .reveal-scale");
  const io = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting){
        entry.target.classList.add("in");
        io.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15, rootMargin: "0px 0px -60px 0px" });
  targets.forEach(t => io.observe(t));
}

/* ---------- Live counters (days / months / hours together) ---------- */
function initCounters(){
  const start = new Date(CONFIG.relationshipStart);
  const daysEl = document.getElementById("count-days");
  const monthsEl = document.getElementById("count-months");
  const hoursEl = document.getElementById("count-hours");
  const minutesEl = document.getElementById("count-minutes");

  function update(){
    const now = new Date();
    const diffMs = Math.max(0, now - start);
    const totalMinutes = Math.floor(diffMs / 6e4);
    const totalHours = Math.floor(diffMs / 36e5);
    const totalDays = Math.floor(diffMs / 864e5);
    let months = (now.getFullYear() - start.getFullYear()) * 12 + (now.getMonth() - start.getMonth());
    if (now.getDate() < start.getDate()) months--;
    months = Math.max(0, months);

    daysEl.textContent = totalDays.toLocaleString();
    monthsEl.textContent = months.toLocaleString();
    hoursEl.textContent = totalHours.toLocaleString();
    if (minutesEl) minutesEl.textContent = totalMinutes.toLocaleString();
  }
  update();
  setInterval(update, 1000 * 15);
}

/* ---------- Countdown to next meeting ---------- */
function initCountdown(){
  const target = new Date(CONFIG.nextMeetingDate);
  const dEl = document.getElementById("cd-days");
  const hEl = document.getElementById("cd-hours");
  const mEl = document.getElementById("cd-mins");
  const sEl = document.getElementById("cd-secs");

  function pad(n){ return String(n).padStart(2, "0"); }

  function update(){
    const diff = target - new Date();
    if (diff <= 0){
      dEl.textContent = hEl.textContent = mEl.textContent = sEl.textContent = "00";
      return;
    }
    const days = Math.floor(diff / 864e5);
    const hours = Math.floor((diff % 864e5) / 36e5);
    const mins = Math.floor((diff % 36e5) / 6e4);
    const secs = Math.floor((diff % 6e4) / 1000);
    dEl.textContent = pad(days); hEl.textContent = pad(hours);
    mEl.textContent = pad(mins); sEl.textContent = pad(secs);
  }
  update();
  setInterval(update, 1000);
}

/* ---------- Gallery lightbox: click to enlarge, prev/next, keyboard + swipe ---------- */
let currentLightboxIndex = 0;
function initGallery(){
  document.getElementById("lb-close").addEventListener("click", closeLightbox);
  document.getElementById("lb-prev").addEventListener("click", () => stepLightbox(-1));
  document.getElementById("lb-next").addEventListener("click", () => stepLightbox(1));
  document.getElementById("lightbox").addEventListener("click", e => {
    if (e.target.id === "lightbox") closeLightbox();
  });
  document.addEventListener("keydown", e => {
    const lb = document.getElementById("lightbox");
    if (!lb.classList.contains("open")) return;
    if (e.key === "Escape") closeLightbox();
    if (e.key === "ArrowRight") stepLightbox(1);
    if (e.key === "ArrowLeft") stepLightbox(-1);
  });

  // swipe support: left/right changes image, long vertical swipe closes
  let touchStartX = 0, touchStartY = 0;
  const lb = document.getElementById("lightbox");
  lb.addEventListener("touchstart", e => {
    touchStartX = e.touches[0].clientX; touchStartY = e.touches[0].clientY;
  }, { passive: true });
  lb.addEventListener("touchend", e => {
    const dx = e.changedTouches[0].clientX - touchStartX;
    const dy = e.changedTouches[0].clientY - touchStartY;
    if (Math.abs(dx) > Math.abs(dy) && Math.abs(dx) > 50){
      stepLightbox(dx < 0 ? 1 : -1);
    } else if (Math.abs(dy) > 80){
      closeLightbox();
    }
  }, { passive: true });
}

function renderLightboxImage(){
  const item = CONFIG.gallery[currentLightboxIndex];
  const img = document.getElementById("lb-img");
  const cap = document.getElementById("lb-cap");
  if (item.src){
    img.src = item.src; img.style.display = "block";
  } else {
    img.removeAttribute("src"); img.style.display = "none";
  }
  cap.textContent = item.caption || "";
}

function stepLightbox(dir){
  currentLightboxIndex = (currentLightboxIndex + dir + CONFIG.gallery.length) % CONFIG.gallery.length;
  renderLightboxImage();
}

function openLightbox(index){
  currentLightboxIndex = index;
  renderLightboxImage();
  const lb = document.getElementById("lightbox");
  lb.classList.add("open");
  lb.setAttribute("aria-hidden", "false");
}
function closeLightbox(){
  const lb = document.getElementById("lightbox");
  lb.classList.remove("open");
  lb.setAttribute("aria-hidden", "true");
}

/* ---------- Love letter typing effect ---------- */
function initLetterTyping(){
  const el = document.getElementById("letter-body");
  const text = CONFIG.letter;
  let started = false;

  const io = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting && !started){
        started = true;
        typeText(el, text);
        io.disconnect();
      }
    });
  }, { threshold: 0.4 });
  io.observe(el);
}

function typeText(el, text){
  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (reduceMotion){ el.textContent = text; return; }

  let i = 0;
  const cursor = document.createElement("span");
  cursor.className = "letter-cursor";
  cursor.textContent = "\u00A0";

  function step(){
    if (i <= text.length){
      el.textContent = text.slice(0, i);
      el.appendChild(cursor);
      i += 2;
      setTimeout(step, 18);
    } else {
      cursor.remove();
    }
  }
  step();
}

/* ---------- Music player (floating) + in-page vinyl showcase ---------- */
function initMusicPlayer(){
  const player = document.getElementById("music-player");
  const tab = document.getElementById("music-tab");
  const audio = document.getElementById("mp-audio");
  const playBtn = document.getElementById("mp-play");
  const icon = document.getElementById("mp-icon");
  const collapseBtn = document.getElementById("mp-collapse");
  const progress = document.getElementById("mp-progress");
  const progressFill = document.getElementById("mp-progress-fill");
  const vol = document.getElementById("mp-vol");
  const vinylMini = document.getElementById("mp-vinyl-mini");
  const vinylDisc = document.getElementById("vinyl-disc");
  const showcasePlay = document.getElementById("music-showcase-play");

  player.classList.remove("collapsed");
  player.setAttribute("aria-hidden", "false");
  audio.volume = parseFloat(vol.value);

  function setPlayingUI(playing){
    icon.innerHTML = playing
      ? '<rect x="2" y="2" width="4" height="12"/><rect x="10" y="2" width="4" height="12"/>'
      : '<path d="M3 2l11 6-11 6V2z"/>';
    vinylMini.classList.toggle("spinning", playing);
    vinylDisc.classList.toggle("spinning", playing);
    if (showcasePlay) showcasePlay.textContent = playing ? "Pause Our Song" : "Play Our Song";
  }

  function toggle(){
    if (audio.paused){
      audio.play().catch(() => { /* file not supplied yet — silently ignore */ });
      setPlayingUI(true);
    } else {
      audio.pause();
      setPlayingUI(false);
    }
  }

  playBtn.addEventListener("click", toggle);
  if (showcasePlay) showcasePlay.addEventListener("click", toggle);

  audio.addEventListener("timeupdate", () => {
    if (audio.duration){
      progressFill.style.width = (audio.currentTime / audio.duration) * 100 + "%";
    }
  });
  audio.addEventListener("ended", () => setPlayingUI(false));
  progress.addEventListener("click", e => {
    const rect = progress.getBoundingClientRect();
    const pct = (e.clientX - rect.left) / rect.width;
    if (audio.duration) audio.currentTime = pct * audio.duration;
  });
  vol.addEventListener("input", () => { audio.volume = parseFloat(vol.value); });

  collapseBtn.addEventListener("click", () => {
    player.classList.add("collapsed");
    tab.classList.add("show");
  });
  tab.addEventListener("click", () => {
    player.classList.remove("collapsed");
    tab.classList.remove("show");
  });
}

/* ---------- Interactive memory modals ---------- */
function initMemoryModal(){
  document.getElementById("modal-close").addEventListener("click", closeMemoryModal);
  document.getElementById("memory-modal").addEventListener("click", e => {
    if (e.target.id === "memory-modal") closeMemoryModal();
  });
  document.addEventListener("keydown", e => {
    if (e.key === "Escape") closeMemoryModal();
  });
}
function openMemoryModal(title, text){
  document.getElementById("modal-title").textContent = title;
  document.getElementById("modal-text").textContent = text;
  const modal = document.getElementById("memory-modal");
  modal.classList.add("open");
  modal.setAttribute("aria-hidden", "false");
}
function closeMemoryModal(){
  const modal = document.getElementById("memory-modal");
  modal.classList.remove("open");
  modal.setAttribute("aria-hidden", "true");
}

/* ---------- "One Last Hug" — hearts, stars, particles, vibration, final message ---------- */
function initHugButton(){
  const btn = document.getElementById("hug-btn");
  const overlay = document.getElementById("hug-overlay");
  const msgEl = document.getElementById("finale-final-msg");
  msgEl.textContent = CONFIG.finalMessage;

  btn.addEventListener("click", () => {
    const symbols = ["❤","💕","💗","💖","✦","⭐","✨"];
    const count = 56;
    for (let i = 0; i < count; i++){
      setTimeout(() => {
        const heart = document.createElement("div");
        heart.className = "hug-heart";
        heart.textContent = symbols[Math.floor(Math.random() * symbols.length)];
        heart.style.left = Math.random() * 100 + "vw";
        heart.style.setProperty("--drift", (Math.random() * 160 - 80) + "px");
        heart.style.fontSize = (Math.random() * 18 + 14) + "px";
        heart.style.animationDuration = (Math.random() * 2.5 + 3.5) + "s";
        overlay.appendChild(heart);
        setTimeout(() => heart.remove(), 6200);
      }, i * 35);
    }

    if (navigator.vibrate){
      navigator.vibrate([40, 60, 40, 60, 120]);
    }

    setTimeout(() => msgEl.classList.add("show"), 900);
  });
}

/* ---------- Finale constellation: two stars connect into a heart, forming "G ❤ S" ---------- */
function initFinaleConstellation(){
  const canvas = document.getElementById("finale-canvas");
  const ctx = canvas.getContext("2d");
  let w, h, dpr, started = false;

  function resize(){
    dpr = Math.min(window.devicePixelRatio || 1, 2);
    w = canvas.width = canvas.clientWidth * dpr;
    h = canvas.height = canvas.clientHeight * dpr;
  }
  window.addEventListener("resize", resize);

  // small twinkling background stars
  let bgStars = [];
  function seedStars(){
    bgStars = Array.from({ length: 60 }, () => ({
      x: Math.random() * w, y: Math.random() * h,
      r: (Math.random() * 1.1 + 0.3) * dpr, phase: Math.random() * Math.PI * 2
    }));
  }

  let progress = 0; // 0 -> 1 draw-in of the heart constellation
  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  function heartPoint(t){
    // parametric heart curve, t in [0, 2*PI]
    const x = 16 * Math.pow(Math.sin(t), 3);
    const y = -(13 * Math.cos(t) - 5 * Math.cos(2*t) - 2 * Math.cos(3*t) - Math.cos(4*t));
    return { x, y };
  }

  let tclock = 0;
  function draw(){
    tclock += 0.02;
    ctx.clearRect(0, 0, w, h);

    bgStars.forEach(s => {
      const tw = (Math.sin(tclock * 0.6 + s.phase) + 1) / 2;
      ctx.globalAlpha = 0.15 + tw * 0.4;
      ctx.fillStyle = "#faf3ea";
      ctx.beginPath(); ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2); ctx.fill();
    });
    ctx.globalAlpha = 1;

    // draw heart constellation forming
    const cx = w / 2, cy = h * 0.42;
    const scale = Math.min(w, h) * 0.018;
    const segments = 120;
    const drawCount = Math.floor(segments * progress);

    ctx.beginPath();
    for (let i = 0; i <= drawCount; i++){
      const t = (i / segments) * Math.PI * 2;
      const p = heartPoint(t);
      const x = cx + p.x * scale, y = cy + p.y * scale;
      if (i === 0) ctx.moveTo(x, y); else ctx.lineTo(x, y);
    }
    ctx.strokeStyle = "rgba(233,196,126,0.85)";
    ctx.lineWidth = 1.4 * dpr;
    ctx.shadowColor = "rgba(233,196,126,0.6)";
    ctx.shadowBlur = 8 * dpr;
    ctx.stroke();
    ctx.shadowBlur = 0;

    // G and S markers at the two "shoulders" of the heart
    if (progress > 0.05){
      const gP = heartPoint(Math.PI * 0.72);
      const sP = heartPoint(Math.PI * 1.28);
      ctx.font = `${13 * dpr}px Playfair Display, serif`;
      ctx.fillStyle = "#f2c6d3";
      ctx.textAlign = "center";
      ctx.globalAlpha = Math.min(1, progress * 2);
      ctx.fillText("G", cx + gP.x * scale, cy + gP.y * scale - 8 * dpr);
      ctx.fillText("S", cx + sP.x * scale, cy + sP.y * scale - 8 * dpr);
      ctx.globalAlpha = 1;
    }

    if (progress < 1 && !reduceMotion) progress += 0.006;
    requestAnimationFrame(draw);
  }

  const io = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting && !started){
        started = true;
        resize(); seedStars();
        progress = reduceMotion ? 1 : 0;
        draw();
      }
    });
  }, { threshold: 0.3 });
  io.observe(document.getElementById("finale"));
}

/* ---------- Plane following the dotted route ---------- */
function initPlaneAnimation(){
  const plane = document.getElementById("plane");
  const path = document.querySelector(".dotted-line");
  if (!plane || !path || !path.getTotalLength) return;
  const len = path.getTotalLength();
  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (reduceMotion){
    const p = path.getPointAtLength(len / 2);
    plane.setAttribute("transform", `translate(${p.x},${p.y})`);
    return;
  }
  let progress = 0;
  function animate(){
    progress += 0.0016;
    if (progress > 1) progress = 0;
    const p = path.getPointAtLength(progress * len);
    const p2 = path.getPointAtLength(Math.min(progress + 0.01, 1) * len);
    const angle = Math.atan2(p2.y - p.y, p2.x - p.x) * (180 / Math.PI);
    plane.setAttribute("transform", `translate(${p.x},${p.y}) rotate(${angle})`);
    requestAnimationFrame(animate);
  }
  animate();
}

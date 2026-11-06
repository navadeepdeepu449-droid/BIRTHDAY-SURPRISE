// ======================================
// PRINCESS BIRTHDAY WEBSITE 💗
// ======================================

// CHANGE THESE TWO NUMBERS TO HER BIRTHDAY
const BIRTHDAY_MONTH = 12; // December = 12
const BIRTHDAY_DAY = 14

// Personalise the secret letter here
const LETTER_MESSAGE =
  "Happy Birthday, Princess! 💗 I hope your day is filled with laughter, happiness and beautiful memories. You deserve all the wonderful things life has to offer. Keep smiling, keep shining and never stop being amazing. Today is all about YOU! ✨";

// ======================================
// FLOATING HEARTS, PETALS AND SPARKLES
// ======================================

const particleLayer = document.getElementById("particle-layer");

const symbols = ["💗", "💕", "♡", "💖", "🌸", "✦", "✨", "💘"];

function createFloatingSymbol() {
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

  const symbol = document.createElement("span");
  symbol.className = "float-symbol";
  symbol.textContent = symbols[Math.floor(Math.random() * symbols.length)];

  symbol.style.left = Math.random() * 100 + "vw";
  symbol.style.fontSize = 15 + Math.random() * 20 + "px";
  symbol.style.animationDuration = 6 + Math.random() * 5 + "s";
  symbol.style.setProperty("--drift", (Math.random() * 150 - 75) + "px");

  particleLayer.appendChild(symbol);

  setTimeout(() => symbol.remove(), 12000);
}

setInterval(createFloatingSymbol, 850);

// ======================================
// CUPID ARROWS 🏹
// ======================================

function createCupidArrow() {
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

  const arrow = document.createElement("span");
  arrow.className = "cupid-arrow";
  arrow.textContent = "💘";

  arrow.style.setProperty("--arrow-y", (10 + Math.random() * 75) + "vh");

  document.body.appendChild(arrow);

  setTimeout(() => arrow.remove(), 3000);
}

setInterval(createCupidArrow, 6500);

// ======================================
// CLICK HEART EXPLOSIONS 💥
// ======================================

document.addEventListener("click", (event) => {
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

  // Don't create bursts when clicking controls repeatedly
  const symbols = ["💗", "💖", "💕", "♡", "✨"];

  for (let i = 0; i < 7; i++) {
    const heart = document.createElement("span");
    heart.className = "burst-heart";
    heart.textContent = symbols[Math.floor(Math.random() * symbols.length)];

    heart.style.left = event.clientX + "px";
    heart.style.top = event.clientY + "px";

    const angle = (Math.PI * 2 * i) / 7;
    const distance = 45 + Math.random() * 55;

    heart.style.setProperty("--x", Math.cos(angle) * distance + "px");
    heart.style.setProperty("--y", Math.sin(angle) * distance + "px");

    document.body.appendChild(heart);

    setTimeout(() => heart.remove(), 900);
  }
});

// ======================================
// HEART MOUSE TRAIL
// ======================================

let lastTrailTime = 0;

document.addEventListener("pointermove", (event) => {
  if (event.pointerType === "touch") return;
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

  const now = Date.now();

  if (now - lastTrailTime < 90) return;
  lastTrailTime = now;

  const heart = document.createElement("span");
  heart.className = "cursor-heart";
  heart.textContent = Math.random() > 0.5 ? "♡" : "♥";

  heart.style.left = event.clientX + "px";
  heart.style.top = event.clientY + "px";

  document.getElementById("cursor-layer").appendChild(heart);

  setTimeout(() => heart.remove(), 850);
});

// ======================================
// BIRTHDAY COUNTDOWN
// ======================================

function updateCountdown() {
  const now = new Date();

  let birthday = new Date(
    now.getFullYear(),
    BIRTHDAY_MONTH - 1,
    BIRTHDAY_DAY,
    0, 0, 0
  );

  if (birthday <= now) {
    birthday = new Date(
      now.getFullYear() + 1,
      BIRTHDAY_MONTH - 1,
      BIRTHDAY_DAY,
      0, 0, 0
    );
  }

  const difference = birthday - now;

  const days = Math.floor(difference / (1000 * 60 * 60 * 24));
  const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((difference / (1000 * 60)) % 60);
  const seconds = Math.floor((difference / 1000) % 60);

  document.getElementById("days").textContent = String(days).padStart(2, "0");
  document.getElementById("hours").textContent = String(hours).padStart(2, "0");
  document.getElementById("minutes").textContent = String(minutes).padStart(2, "0");
  document.getElementById("seconds").textContent = String(seconds).padStart(2, "0");
}

updateCountdown();
setInterval(updateCountdown, 1000);

// ======================================
// START BUTTON
// ======================================

document.getElementById("startBtn").addEventListener("click", () => {
  document.getElementById("countdown").scrollIntoView({
    behavior: "smooth"
  });

  for (let i = 0; i < 12; i++) {
    setTimeout(createFloatingSymbol, i * 100);
  }
});

// ======================================
// INTERACTIVE BIRTHDAY CAKE 🕯️
// ======================================

const cakeBtn = document.getElementById("cakeBtn");
const cakeMessage = document.getElementById("cakeMessage");

cakeBtn.addEventListener("click", () => {
  if (cakeBtn.classList.contains("blown")) {
    cakeBtn.classList.remove("blown");
    cakeMessage.textContent = "Your candles are glowing again! Make another wish 💗";
    return;
  }

  cakeBtn.classList.add("blown");
  cakeMessage.textContent = "YAY! Your wish is on its way! 🎉💗";

  for (let i = 0; i < 15; i++) {
    setTimeout(createFloatingSymbol, i * 80);
  }
});

// ======================================
// INTERACTIVE GIFT BOX 🎁
// ======================================

const giftBtn = document.getElementById("giftBtn");
const giftReveal = document.getElementById("giftReveal");
const giftHint = document.getElementById("giftHint");

giftBtn.addEventListener("click", () => {
  giftReveal.hidden = false;
  giftHint.textContent = "SURPRISE! This is just for you! 💝";
  giftBtn.querySelector(".gift-box").textContent = "💝";
  giftBtn.disabled = true;

  for (let i = 0; i < 25; i++) {
    setTimeout(createFloatingSymbol, i * 70);
  }
});

// ======================================
// LOVE LETTER WITH TYPEWRITER EFFECT 💌
// ======================================

const letterBtn = document.getElementById("letterBtn");
const loveLetter = document.getElementById("loveLetter");
const typedMessage = document.getElementById("typedMessage");

let letterOpened = false;

letterBtn.addEventListener("click", () => {
  if (letterOpened) return;

  letterOpened = true;
  letterBtn.classList.add("open");
  letterBtn.querySelector(".envelope-label").textContent = "A LETTER FOR YOU ♡";

  loveLetter.hidden = false;

  let index = 0;
  typedMessage.textContent = "";

  function typeLetter() {
    if (index < LETTER_MESSAGE.length) {
      typedMessage.textContent += LETTER_MESSAGE.charAt(index);
      index++;
      setTimeout(typeLetter, 38);
    }
  }

  setTimeout(typeLetter, 500);
});

// ======================================
// PHOTO SCRAPBOOK POP-UP 📸
// ======================================

const photoCards = document.querySelectorAll(".photo-card");
const photoModal = document.getElementById("photoModal");
const modalImage = document.getElementById("modalImage");
const modalClose = document.getElementById("modalClose");

photoCards.forEach((card) => {
  card.addEventListener("click", () => {
    const image = card.querySelector("img");

    modalImage.src = image.src;
    modalImage.alt = image.alt;
    photoModal.hidden = false;
  });
});

function closePhotoModal() {
  photoModal.hidden = true;
  modalImage.src = "";
}

modalClose.addEventListener("click", closePhotoModal);

photoModal.addEventListener("click", (event) => {
  if (event.target === photoModal) {
    closePhotoModal();
  }
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    closePhotoModal();
  }
});

// ======================================
// CELEBRATE AGAIN 🎉
// ======================================

document.getElementById("celebrateBtn").addEventListener("click", () => {
  for (let i = 0; i < 35; i++) {
    setTimeout(createFloatingSymbol, i * 65);
  }

  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
});

// ======================================
// MUSIC BUTTON ♫
// ======================================

let audioContext = null;
let musicTimer = null;
let musicPlaying = false;
let noteIndex = 0;

const musicNotes = [523.25, 659.25, 783.99, 659.25, 587.33, 698.46, 783.99, 659.25];

function playNote() {
  if (!audioContext || audioContext.state !== "running") return;

  const oscillator = audioContext.createOscillator();
  const volume = audioContext.createGain();

  oscillator.type = "sine";
  oscillator.frequency.value = musicNotes[noteIndex % musicNotes.length];

  volume.gain.setValueAtTime(0.0001, audioContext.currentTime);
  volume.gain.exponentialRampToValueAtTime(0.045, audioContext.currentTime + 0.04);
  volume.gain.exponentialRampToValueAtTime(0.0001, audioContext.currentTime + 0.4);

  oscillator.connect(volume);
  volume.connect(audioContext.destination);

  oscillator.start();
  oscillator.stop(audioContext.currentTime + 0.42);

  noteIndex++;
}

document.getElementById("musicBtn").addEventListener("click", async () => {
  const musicBtn = document.getElementById("musicBtn");

  if (!musicPlaying) {
    const AudioContextClass = window.AudioContext || window.webkitAudioContext;

    if (!AudioContextClass) {
      musicBtn.textContent = "Music unavailable";
      return;
    }

    audioContext = audioContext || new AudioContextClass();

    if (audioContext.state === "suspended") {
      await audioContext.resume();
    }

    musicPlaying = true;
    musicBtn.textContent = "♫ Music ON";

    playNote();
    musicTimer = setInterval(playNote, 450);
  } else {
    musicPlaying = false;
    musicBtn.textContent = "♫ Music";

    clearInterval(musicTimer);

    if (audioContext) {
      await audioContext.suspend();
    }
  }
});

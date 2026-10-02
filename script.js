
const openBtn = document.getElementById("openBtn");
const surprise = document.getElementById("surprise");

const noteModal = document.getElementById("noteModal");
const modalTitle = document.getElementById("modalTitle");
const modalMessage = document.getElementById("modalMessage");
const closeModal = document.getElementById("closeModal");
const modalDone = document.getElementById("modalDone");

const giftBtn = document.getElementById("giftBtn");
const finalLetter = document.getElementById("finalLetter");

// Customize these messages however you like.
const notes = {
  miss: {
    title: "Missing me, PGL? 💌",
    message: `Awww PGL! 🥹

Agar tum mujhe miss kar rahe ho, toh imagine karo ki main tumhe ek big virtual hug bhej rahi hoon. 🫂

Distance ya busy schedules ke beech bhi, I hope tumhare face par ek little smile aa jaye.

Take care, okay? ♡`
  },

  sad: {
    title: "Hey, it's okay. ☁️",
    message: `PGL, suno na! 💗

Har din perfect hona zaroori nahi hai. Kabhi-kabhi rest lena, break lena aur khud ko time dena bhi important hai.

Tumhe har waqt strong ya perfect hone ki zaroorat nahi.

One step at a time. You got this! 🌷`
  },

  smile: {
    title: "A little happiness for you 🌷",
    message: `Hellooo PGL! 🎀

Bas randomly tumhe yaad dilana tha ki you deserve happiness, good things and peaceful days.

I hope aaj tumhare saath kuch achha ho.

Aur haan, smile kar do thoda sa! Hehe. ♡`
  }
};

// Open the main surprise.
openBtn.addEventListener("click", () => {
  surprise.classList.remove("hidden");

  openBtn.textContent = "Your surprise is open! ♡";
  openBtn.disabled = true;
  openBtn.style.opacity = "0.75";

  surprise.scrollIntoView({
    behavior: "smooth",
    block: "start"
  });
});

// Open the note selected by the user.
document.querySelectorAll("[data-note]").forEach((card) => {
  card.addEventListener("click", () => {
    const note = notes[card.dataset.note];

    modalTitle.textContent = note.title;
    modalMessage.textContent = note.message;

    noteModal.classList.remove("hidden");
    closeModal.focus();
  });
});

// Close the popup.
function hideModal() {
  noteModal.classList.add("hidden");
}

closeModal.addEventListener("click", hideModal);
modalDone.addEventListener("click", hideModal);

// Also close the popup by clicking outside it.
noteModal.addEventListener("click", (event) => {
  if (event.target === noteModal) {
    hideModal();
  }
});

// Close popup with Escape key.
document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    hideModal();
  }
});

// Reasons PGL is special.
// Add, remove, or change these messages.
const reasons = [
  "Tumhari presence hi kabhi-kabhi mere mood ko better kar deti hai. ♡",
  "I appreciate the little things you do, even the ones you think go unnoticed.",
  "Tumhare saath simple moments bhi special feel ho sakte hain. 🌷",
  "I hope you always keep believing in yourself and your dreams.",
  "You deserve care, happiness and all the good things life has to offer. 💗"
];

let reasonIndex = 0;

const reasonNumber = document.getElementById("reasonNumber");
const reasonText = document.getElementById("reasonText");
const reasonBtn = document.getElementById("reasonBtn");

reasonBtn.addEventListener("click", () => {
  reasonIndex = (reasonIndex + 1) % reasons.length;

  reasonNumber.textContent =
    `${String(reasonIndex + 1).padStart(2, "0")} / ${String(reasons.length).padStart(2, "0")}`;

  reasonText.textContent = reasons[reasonIndex];
});

// Open the final gift letter.
giftBtn.addEventListener("click", () => {
  finalLetter.classList.remove("hidden");
  giftBtn.classList.add("hidden");

  createHearts(18);

  finalLetter.scrollIntoView({
    behavior: "smooth",
    block: "center"
  });
});

// Floating heart animation.
function createHearts(count = 8) {
  const container = document.getElementById("floatingHearts");

  for (let i = 0; i < count; i++) {
    const heart = document.createElement("span");

    heart.className = "float-heart";
    heart.textContent = ["♡", "♥", "✧"][Math.floor(Math.random() * 3)];

    heart.style.left = Math.random() * 100 + "%";
    heart.style.fontSize = (14 + Math.random() * 20) + "px";
    heart.style.animationDuration = (4 + Math.random() * 4) + "s";

    container.appendChild(heart);

    heart.addEventListener("animationend", () => {
      heart.remove();
    });
  }
}

// Back to the top.
document.getElementById("topBtn").addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
});
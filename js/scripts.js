const typedText = document.getElementById("typed-text");
const phrases = [
  "Web Development Student at PSU",
  "Passionate about Front-End Design",
  "Skilled in HTML, CSS, JavaScript",
  "Exploring Bootstrap and jQuery",
];
let phraseIndex = 0;
let charIndex = 0;
let typingDelay = 75;
let erasingDelay = 50;
let newPhraseDelay = 1500;

function type() {
  if (charIndex < phrases[phraseIndex].length) {
    typedText.textContent += phrases[phraseIndex].charAt(charIndex);
    charIndex++;
    setTimeout(type, typingDelay);
  } else {
    setTimeout(erase, newPhraseDelay);
  }
}

function erase() {
  if (charIndex > 0) {
    typedText.textContent = phrases[phraseIndex].substring(0, charIndex - 1);
    charIndex--;
    setTimeout(erase, erasingDelay);
  } else {
    phraseIndex++;
    if (phraseIndex >= phrases.length) phraseIndex = 0;
    setTimeout(type, typingDelay);
  }
}

document.addEventListener("DOMContentLoaded", () => {
  if (phrases.length) setTimeout(type, newPhraseDelay + 250);
});

const form = document.getElementById("contact-form");
form.addEventListener("submit", (e) => {
  e.preventDefault();
  const name = form.name.value.trim();
  const email = form.email.value.trim();
  const message = form.message.value.trim();

  if (!name || !email || !message) {
    alert("Please fill out all fields before submitting.");
    return;
  }

  console.log("Name:", name);
  console.log("Email:", email);
  console.log("Message:", message);
  alert("Thanks for contacting me! I'll get back to you soon.");
  form.reset();
});

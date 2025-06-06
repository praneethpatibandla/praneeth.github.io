document
  .getElementById("contact-form")
  .addEventListener("submit", function (event) {
    event.preventDefault();
    alert(
      "Thank you, " +
        document.getElementById("name").value +
        "! Your message has been sent."
    );
  });

document.querySelectorAll('nav a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      target.scrollIntoView({
        behavior: "smooth",
      });
    }
  });
});

function insertGreeting() {
  const hour = new Date().getHours();
  let greeting = "Hello";

  if (hour < 12) {
    greeting = "Good morning, Praneeth!";
  } else if (hour < 18) {
    greeting = "Good afternoon, Praneeth!";
  } else {
    greeting = "Good evening, Praneeth!";
  }

  const greetingElem = document.createElement("p");
  greetingElem.textContent = greeting;
  greetingElem.style.fontWeight = "bold";

  const aboutSection = document.getElementById("about");
  aboutSection.insertBefore(greetingElem, aboutSection.firstChild);
}

insertGreeting();

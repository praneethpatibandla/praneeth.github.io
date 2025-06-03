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

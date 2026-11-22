// script.js - adds interactivity to the page

// 1. Find the elements we need in the HTML
const themeToggle = document.getElementById("theme-toggle");
const body = document.body;

// 2. Function: set the button text to match the current mode
function updateButtonLabel() {
  if (body.classList.contains("dark-mode")) {
    themeToggle.textContent = "Switch to light mode";
  } else {
    themeToggle.textContent = "Switch to dark mode";
  }
}

// 3. When the button is clicked: toggle the dark-mode class on <body>
themeToggle.addEventListener("click", function () {
  body.classList.toggle("dark-mode");
  updateButtonLabel();
});

// 4. Set the correct label right away when the page loads
updateButtonLabel();

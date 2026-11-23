// script.js - theme toggle with memory

// 1. Find the elements we need in the HTML
const themeToggle = document.getElementById("theme-toggle");
const body = document.body;

// 2. Storage helpers. localStorage can be blocked (for example in private
//    windows), so a storage error must never stop the toggle from working.
function getSavedTheme() {
  try {
    return localStorage.getItem("theme");
  } catch (error) {
    return null;
  }
}

function saveTheme(theme) {
  try {
    localStorage.setItem("theme", theme);
  } catch (error) {
    // The choice won't survive a reload, but the toggle still works.
  }
}

// 3. First visit follows the operating system. Later visits follow the saved choice.
const savedTheme = getSavedTheme();
const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
const startInDark = savedTheme ? savedTheme === "dark" : prefersDark;

if (startInDark) {
  body.classList.add("dark-mode");
}

// 4. Keep the label and pressed state in sync with the current mode
function updateToggleState() {
  const isDark = body.classList.contains("dark-mode");
  themeToggle.textContent = isDark ? "Switch to light mode" : "Switch to dark mode";
  // aria-pressed tells assistive tech whether dark mode is currently on
  themeToggle.setAttribute("aria-pressed", String(isDark));
}

// 5. When the button is clicked: flip the mode, remember it, update the label
themeToggle.addEventListener("click", function () {
  body.classList.toggle("dark-mode");
  saveTheme(body.classList.contains("dark-mode") ? "dark" : "light");
  updateToggleState();
});

// 6. Set the correct label right away when the page loads
updateToggleState();

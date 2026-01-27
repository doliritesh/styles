// Selecting HTML elements using DOM methods
const title = document.getElementById("title");
const text = document.getElementById("text");
const changeBtn = document.getElementById("changeBtn");
const toggleBtn = document.getElementById("toggleBtn");

// Button click event to modify text and styles
changeBtn.addEventListener("click", function () {
  text.innerText = "Text changed using JavaScript!";
  text.style.color = "blue";

  // Debugging using console log
  console.log("Text changed successfully");
});

// Toggle class using JavaScript
toggleBtn.addEventListener("click", function () {
  document.body.classList.toggle("dark-theme");

  // Debug log
  console.log("Theme toggled");
});
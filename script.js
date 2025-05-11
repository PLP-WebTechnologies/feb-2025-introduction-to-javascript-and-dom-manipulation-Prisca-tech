// script.js

// Change text content dynamically
const changeTextBtn = document.getElementById("changeTextBtn");
const description = document.getElementById("description");

changeTextBtn.addEventListener("click", () => {
  description.textContent = "Welcome to Great Grace Schools! We are committed to excellence and holistic education.";
  description.style.color = "#004080";
  description.style.fontWeight = "bold";
});

// Add or remove an element
const toggleBoxBtn = document.getElementById("toggleBoxBtn");
const boxContainer = document.getElementById("dynamicBoxContainer");
let boxExists = false;

toggleBoxBtn.addEventListener("click", () => {
  if (boxExists) {
    boxContainer.innerHTML = "";
    boxExists = false;
  } else {
    const newBox = document.createElement("div");
    newBox.textContent = "I am a dynamic box!";
    newBox.style.backgroundColor = "#ffc107";
    newBox.style.padding = "1em";
    newBox.style.marginTop = "1em";
    newBox.style.borderRadius = "8px";
    boxContainer.appendChild(newBox);
    boxExists = true;
  }
});

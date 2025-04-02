/* change font family */

const bodyElement = document.body;
const fontKey = "selectedFont";

// Load font from local storage if available
let currentFont = localStorage.getItem(fontKey) || "Arial";

bodyElement.style.fontFamily = currentFont;

// Function to update font and save to local storage

function changeFont(newFont) {

    bodyElement.style.fontFamily = newFont;
    localStorage.setItem(fontKey, newFont);
}

// Event listeners for buttons
document.getElementById("fontCalibri").addEventListener("click", () => changeFont("Calibri"));
document.getElementById("fontCursive").addEventListener("click", () => changeFont("Cursive"));

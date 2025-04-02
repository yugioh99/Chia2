

function displayCurrentFont() {
    const textElement = document.querySelector("p"); // Select any text element
    const computedStyle = window.getComputedStyle(textElement);
    const fontName = computedStyle.getPropertyValue("font-family");
    document.getElementById("current-font").textContent = fontName;
}
// Call the function on page load
window.onload = displayCurrentFont;

/*
function displayCurrentFontSize() {
    const textElement = document.querySelector("section"); // Select any text element
    const computedStyle = window.getComputedStyle(textElement);
    const fontSize = computedStyle.getPropertyValue("fontSize");
    document.getElementById("current-fontsize").textContent = fontSize;
}
// Call the function on page load
window.onload = displayCurrentFontSize;

*/

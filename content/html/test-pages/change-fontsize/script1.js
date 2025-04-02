
/* change font family 



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
*/

/* change font family */
window.addEventListener('DOMContentLoaded', () => sFF());
function sFF(fontFamily){
    var elements = document.getElementsByClassName("pFF")
    for (var i = 0; i < elements.length; i++) {
    elements[i].style.fontFamily=fontFamily;}
    // if provided color, set color to LS
    if (fontFamily) window.localStorage.setItem('fontFamily', fontFamily);
    // if no provided color, check LS for color, and if no color in LS, fail silently
    else if (!(fontFamily = window.localStorage.getItem('fontFamily'))) return;
    // update the page
    var elements = document.getElementsByClassName("pFF")
    for (var i = 0; i < elements.length; i++) {
    elements[i].style.fontFamily=fontFamily;}
}


/* change font size 

const root = document.documentElement;
const fontSizeKey = "selectedFontSize";

// Load font size from local storage if available
let currentFontSize = localStorage.getItem(fontSizeKey) || "calc(16px + 0.5vw)";

root.style.fontSize = currentFontSize;

// Function to update font size and save to local storage

function changeFontSize(newFontSize) {

    root.style.fontSize = newFontSize;
    localStorage.setItem(fontSizeKey, newFontSize);
}

// Event listeners for buttons
document.getElementById("fontSize12").addEventListener("click", () => changeFontSize("calc(12px + 0.5vw)"));
document.getElementById("fontSize24").addEventListener("click", () => changeFontSize("calc(24px + 0.5vw)"));

*/

function restoreDefaults() {
    localStorage.clear(); 
    window.location.reload();
  }


/* change font size */
window.addEventListener('DOMContentLoaded', () => sFS());
function sFS(fontSize){
    var elements = document.getElementsByClassName("pFS")
    for (var i = 0; i < elements.length; i++) {
    elements[i].style.fontSize=fontSize;}
    // if provided color, set color to LS
    if (fontSize) window.localStorage.setItem('fontSize', fontSize);
    // if no provided color, check LS for color, and if no color in LS, fail silently
    else if (!(fontSize = window.localStorage.getItem('fontSize'))) return;
    // update the page
    var elements = document.getElementsByClassName("pFS")
    for (var i = 0; i < elements.length; i++) {
    elements[i].style.fontSize=fontSize;}
}




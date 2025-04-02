/* change background color */

window.addEventListener('DOMContentLoaded', () => changeBgColor());

function changeBgColor(color){
    var elements = document.getElementsByClassName("pageBg")
    for (var i = 0; i < elements.length; i++) {
        elements[i].style.background=color;
    }

    // if provided color, set color to LS
    if (color) window.localStorage.setItem('bgColor', color);
    // if no provided color, check LS for color, and if no color in LS, fail silently
    else if (!(color = window.localStorage.getItem('bgColor'))) return;

    // update the page
    var elements = document.getElementsByClassName("pageBg")
    for (var i = 0; i < elements.length; i++) {
        elements[i].style.background=color;
    }
}

/* change text color */
window.addEventListener('DOMContentLoaded', () => changeTxColor());

function changeTxColor(color){
    var elements = document.getElementsByClassName("pageTx")
    for (var i = 0; i < elements.length; i++) {
        elements[i].style.color=color;
    }

    // if provided color, set color to LS
    if (color) window.localStorage.setItem('Color', color);
    // if no provided color, check LS for color, and if no color in LS, fail silently
    else if (!(color = window.localStorage.getItem('Color'))) return;

    // update the page
    var elements = document.getElementsByClassName("pageTx")
    for (var i = 0; i < elements.length; i++) {
        elements[i].style.color=color;
    }
}

/* The code that actually changes the font size */
var selectedSize = '';

function fontSize(selectTag) {
  var listValue = selectTag.options[selectTag.selectedIndex].text;
  selectedSize = listValue;
  setFontSize(listValue);
}

function setFontSize(value) {
  document.querySelector("#root").style.fontSize = value;
}

function saveFont(){
  localStorage.setItem('fontSize', selectedSize);
}

var button = document.querySelector('#save');
button.addEventListener('click', function(evt) {
  evt.preventDefault();
  saveFont();
}, false);

if(localStorage.getItem('fontSize')) {
  var storedSize = localStorage.getItem('fontSize');
  setFontSize(storedSize);
}










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









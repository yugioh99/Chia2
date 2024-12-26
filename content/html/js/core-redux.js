/* settings START */


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

/* The code that changes the font size */
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


/* settings END */

/* navigation START */


/* toggle display block & inline-block by id and class */
function tdb(id) {
  const el = document.getElementById(id); 
  el.classList.toggle("tdbs");
}
function tdib(id) {
  const el = document.getElementById(id); 
  el.classList.toggle("tdibs");
}
function tdf(id) {
  const el = document.getElementById(id); 
  el.classList.toggle("tdfs");
}

/* settings show and hide grid with additional instructions*/
function sddbtn() {
  document.getElementById("sddid").classList.toggle("sshow");
}

/* bookmark show and hide */
function bmddbtn() {
  document.getElementById("bmddid").classList.toggle("bmshow");
  document.getElementById("bmddid2").classList.toggle("bmshow");

}

/* appendix link show and hide */
function alddbtn() {
  document.getElementById("alddid").classList.toggle("alshow");
  document.getElementById("alddid2").classList.toggle("alshow");
  
}

/* bookmark filter */
function bmfilter() {
  var input, filter, ul, li, a, i;
  input = document.getElementById("bmInput");
  filter = input.value.toUpperCase();
  div = document.getElementById("bmddid");
  a = div.getElementsByTagName("a");
  for (i = 0; i < a.length; i++) {
    txtValue = a[i].textContent || a[i].innerText;
    if (txtValue.toUpperCase().indexOf(filter) > -1) {
      a[i].style.display = "";
    } else {
      a[i].style.display = "none";
    }
  }
}

/*  appendix link filter  */
function alfilter() {
  var input, filter, ul, li, a, i;
  input = document.getElementById("alInput");
  filter = input.value.toUpperCase();
  div = document.getElementById("alddid");
  a = div.getElementsByTagName("a");
  for (i = 0; i < a.length; i++) {
    txtValue = a[i].textContent || a[i].innerText;
    if (txtValue.toUpperCase().indexOf(filter) > -1) {
      a[i].style.display = "";
    } else {
      a[i].style.display = "none";
    }
  }
}

/* navigation END
--------------------------------------------------------------
lazyload START 
*/
/* Load images.
Use data-src and this function will change it to src. 
Don't use native lazy load for tt, only lazy load below fold.
Dont use window.onload for appx.

maybe shorten name to llimg */
function lazyloadimages() {
  var imgDefer = document.getElementsByTagName('img');
  for (var i=0; i<imgDefer.length; i++) {
    if(imgDefer[i].getAttribute('data-src'))
        imgDefer[i].setAttribute('src',imgDefer[i].getAttribute('data-src'));
    }
  } 
  window.onload = lazyloadimages;
  
  
  /* this will show image in the appx
   put id in link onclick=apimg('img id goes here')
   use data-src & this function will change it to src 
   
   test to see if I can change it to data-gim
   so that it wont be change by lazyloadimages */
  function apimg(id) {
      const el = document.getElementById(id); 
      el.setAttribute('src',el.getAttribute('data-src'));
      }


/* lazyload END
--------------------------------------------------------------
 */


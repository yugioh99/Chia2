

/* Tooltips open and close
-------------------------------------------------------------------------------------
*/

/* open and close tooltip divs, 
can work for anything with an id 
Need to make close buttons for tt june 1, 2024
const el = document.getElementById(id); 
    el.style.display = "inline-block";

document.getElementById("lddid").classList.toggle("lshow");

*/



/* Load images.
Use data-src and this function will change it to src. 
Don't use native lazy load for tt, only lazy load below fold.
Dont use window.onload for appx.*/
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
 use data-src & this function will change it to src */
function apimg(id) {
    const el = document.getElementById(id); 
    el.setAttribute('src',el.getAttribute('data-src'));
    }








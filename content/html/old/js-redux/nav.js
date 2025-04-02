/* Location show and hide */
function lmyFunction() {
  document.getElementById("lmyDropdown").classList.toggle("lshow");
}

/* theme = settings show and hide */
function thmyFunction() {
  document.getElementById("thmyDropdown").classList.toggle("thshow");
}

/* bookmark show and hide */
function bmmyFunction() {
  document.getElementById("bmmyDropdown").classList.toggle("bmshow");
  document.getElementById("bmmyDropdown2").classList.toggle("bmshow");

}

/* bookmark filter */
function bmfilterFunction() {
  var input, filter, ul, li, a, i;
  input = document.getElementById("bmmyInput");
  filter = input.value.toUpperCase();
  div = document.getElementById("bmmyDropdown");
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

/* appendix link show and hide */
function almyFunction() {
  document.getElementById("almyDropdown").classList.toggle("alshow");
  document.getElementById("almyDropdown2").classList.toggle("alshow");
  
}

/*  appendix link filter  */
function alfilterFunction() {
  var input, filter, ul, li, a, i;
  input = document.getElementById("almyInput");
  filter = input.value.toUpperCase();
  div = document.getElementById("almyDropdown");
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

/*  change root font, old, I dont use this anymore */
function changefont1() {document.getElementById("root").style.fontSize = "0.6rem";}
function changefont2() {document.getElementById("root").style.fontSize = "0.8rem";}
function changefont3() {document.getElementById("root").style.fontSize = "1rem";}
function changefont4() {document.getElementById("root").style.fontSize = "1.1rem";}
function changefont5() {document.getElementById("root").style.fontSize = "1.2rem";}
function changefont6() {document.getElementById("theme").style.color = "white";}
function changefont7() {document.getElementById("theme").style.color = "black";}
function changefont8() {document.getElementById("theme").style.backgroundColor = "white";}
function changefont9() {document.getElementById("theme").style.backgroundColor = "black";}














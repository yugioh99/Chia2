/* toggle display block & inline-block by id and class */
function tdb(id) {
  const el = document.getElementById(id); 
  el.classList.toggle("tdbs");
}
function tdib(id) {
  const el = document.getElementById(id); 
  el.classList.toggle("tdibs");
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

/* appendix link show and hide */
function alddbtn() {
  document.getElementById("alddid").classList.toggle("alshow");
  document.getElementById("alddid2").classList.toggle("alshow");
  
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













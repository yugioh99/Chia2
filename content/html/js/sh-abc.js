/* When the user clicks on the button, showhidenava myDropdown
toggle between hiding and showing the dropdown content
for alphabetical bookmarks */
function showhidenava() {
  document.getElementById("myDropdowna").classList.toggle("showa");
}

// Close the dropdown menu if the user clicks outside of it
window.onclick = function(event) {
  if (!event.target.matches('.dropbtna')) {
    var dropdowns = document.getElementsByClassName("dropdown-contenta");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('showa')) {
        openDropdown.classList.remove('showa');
      }
    }
  }
} 
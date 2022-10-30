// // burger bar animation

// let navbar = document.getElementById("navigation");
// let togglebar = document.getElementById("toggle-menu");

// togglebar.addEventListener("click", function () {
//   togglebar.classList.toggle("toggleActive");
//   navbar.classList.toggle("active");
// });

// scroll function


window.onscroll = function() {myFunction()};

var navbar = document.getElementById("navbar");
var sticky = navbar.offsetTop;

function myFunction() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky");
  }
}
// burger bar animation

let navbar = document.getElementById("navigation");
let togglebar = document.getElementById("toggle-menu");

togglebar.addEventListener("click", function () {
  togglebar.classList.toggle("toggleActive");
  navbar.classList.toggle("active");
});

// scroll function

window.onscroll = function() {myFunction()};

let navbarscroll = document.getElementById("nav-ul");
let sticky = navbarscroll.offsetTop;

function myFunction() {
  if (window.pageYOffset >= sticky) {
    navbarscroll.classList.add("sticky")
  } else {
    navbarscroll.classList.remove("sticky");
  }
}

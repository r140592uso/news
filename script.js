
// burger bar animation

let navbar = document.getElementById("navigation");
let togglebar = document.getElementById("toggle-menu");

togglebar.addEventListener("click", function () {
  togglebar.classList.toggle("toggleActive");
  navbar.classList.toggle("active");
});
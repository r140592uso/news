// burger bar animation

let navbar = document.getElementById("navigation");
let togglebar = document.getElementById("toggle-menu");

togglebar.addEventListener("click", function () {
  togglebar.classList.toggle("toggleActive");
  navbar.classList.toggle("active");
});

// scroll function

window.onscroll = function () {
  myFunction();
};

let navbarscroll = document.getElementById("nav-ul");
let sticky = navbarscroll.offsetTop;

function myFunction() {
  if (window.pageYOffset >= sticky) {
    navbarscroll.classList.add("sticky");
  } else {
    navbarscroll.classList.remove("sticky");
  }
}

// articles
fetch("/Json/articles1.json", {
  method: "GET",
})
  .then(function (response) {
    if (response.status !== 200) {
      throw response.status;
    }
    return response.json();
  })
  .then(function (responseData) {
    console.log(responseData);
    responseData.articles.forEach((element) => {
      let ul = document.getElementById("news");

      let li = document.createElement("li");
      li.classList.add("newsli");

      let h3 = document.createElement("h3");
      h3.textContent = `${element.title}`;
      h3.classList.add("newstitle");

      let image = document.createElement("img");
      image.classList.add("newsimage");
      image.setAttribute("src", element.urlToImage);
      image.setAttribute("alt", element.title);

      li.appendChild(image);
      li.appendChild(h3);
      ul.appendChild(li);
    });
  })
  .catch((error) => {
    let p = document.createElement("p");
    p.textContent = "Server Error";
    p.style.color = "red";
    document.getElementById("api").appendChild(p);
  });

// "https://newsapi.org/v2/everything?q=apple&from=2022-10-30&to=2022-10-30&sortBy=popularity&apiKey=c0f2c7d2abf7466584810b33703f8bbd"

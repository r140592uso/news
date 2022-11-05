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

// fetch("Json/articles1.json", {
//   method: "GET",
// })
// articles
let currentPage = 1;
function getNews(page) {
  fetch("Json/articles" + page + ".json", {
    method: "GET",
  })
    .then(function (response) {
      if (response.status !== 200) {
        throw response.status;
      }
      return response.json();
    })
    .then(function (responseData) {
      const fragment = document.createDocumentFragment();

      responseData.articles.forEach((element) => {
        let divnews = document.createElement("div");
        let divimg = document.createElement("div");
        let divtext = document.createElement("div");
        let h3 = document.createElement("h3");
        let h4 = document.createElement("h4");
        let p = document.createElement("p");

        divimg.style.backgroundImage = `url(${element.urlToImage})`;

        h3.textContent = `${element.title}`;
        h4.textContent = `${element.description}`;
        p.textContent = `${element.content}`;

        divimg.classList.add("newsimg");
        divtext.classList.add("textdiv");
        divnews.classList.add("newsdiv");
        h3.classList.add("newstitle");
        h4.classList.add("newsdesc");
        p.classList.add("newstext");

        divtext.appendChild(h3);
        divtext.appendChild(h4);
        divtext.appendChild(p);
        divnews.appendChild(divimg);
        divnews.appendChild(divtext);
        fragment.appendChild(divnews);
      });
      document.getElementById("news").innerHTML = " ";
      document.getElementById("news").appendChild(fragment);
      totalPages = responseData.total_pages;
    })
    .catch((error) => {
      let p = document.createElement("p");
      p.textContent = "Server Error";
      p.style.color = "red";
      document.getElementById("api").appendChild(p);
    });
}

document.getElementById("previous").addEventListener("click", function () {
  if (currentPage == 1) {
    return;
  }
  currentPage -= 1;
  getNews(currentPage);
});
document.getElementById("next").addEventListener("click", function () {
  if (currentPage == totalPages) {
    return;
  }
  currentPage += 1;
  getNews(currentPage);
});
getNews(currentPage);

// "https://newsapi.org/v2/everything?q=apple&from=2022-10-30&to=2022-10-30&sortBy=popularity&apiKey=c0f2c7d2abf7466584810b33703f8bbd"

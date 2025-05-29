// Search
let search = document.getElementById("search");
let main_search = document.getElementById("main-search");

search.addEventListener("click", () => {
  main_search.classList.toggle("active");
});

// set darktheme
let theme = document.getElementById("theme");

theme.addEventListener("click", () => {
  document.body.classList.toggle("dark-theme");

  if (document.body.classList.contains("dark-theme")) {
    theme.innerHTML = '<i class="fa-solid fa-sun"></i>';
  } else {
    theme.innerHTML = '<i class="fa-solid fa-moon"></i>';
  }
});

// bar menu
let bar = document.getElementById("bar");
let nav_links = document.querySelector(".nav-links");

bar.addEventListener("click", () => {
  nav_links.classList.toggle("active");
});

let scroll_down = document.getElementById("scroll-down");

document.addEventListener("scroll", () => {
  let windowY = window.scrollY;
  if (windowY > 60) {
    scroll_down.style.display = "flex";
  } else {
    scroll_down.style.display = "none";
  }
});

scroll_down.addEventListener("click", () => {
  document.documentElement.scrollTop = 0;
});

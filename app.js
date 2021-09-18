const nav = document.querySelector(".nav-link");
const burger = document.querySelector(".burger");
const links = nav.querySelectorAll("a");

//for  menu burger
burger.addEventListener("click", () => {
  nav.classList.toggle("nav-open");
  burger.classList.toggle("toggle");
});


//for link:Home; About ,...
links.forEach(link => {
  link.addEventListener("click", () => {
    nav.classList.toggle("nav-open");
    burger.classList.toggle("toggle");
  });
});

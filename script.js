const mobileMenu = document.querySelector("#menu");
const listItem = document.querySelectorAll(".hidden-items");
const nav = document.querySelector("nav");
const navName = document.querySelector("#name");
const menuList = document.querySelector("nav ul");
const exitIcon = document.querySelector(".exit");

mobileMenu.addEventListener("click", () => {
  listItem.forEach((item) => item.classList.add("show"));
  nav.classList.add("expand");
  navName.classList.add("hidden");
  menuList.classList.add("ul-list");
  mobileMenu.classList.add("hidden");
  exitIcon.classList.add('X');
});

exitIcon.addEventListener('click', ()=> {
  listItem.forEach((item) => item.classList.remove("show"));
  nav.classList.remove("expand");
  navName.classList.remove("hidden");
  menuList.classList.remove("ul-list");
  mobileMenu.classList.remove("hidden");
  exitIcon.classList.remove("X");
})
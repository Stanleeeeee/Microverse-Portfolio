const mobileMenu = document.querySelector("#menu");
const listItem = document.querySelectorAll(".hidden-items");
const nav = document.querySelector("nav");
const navName = document.querySelector("#name");
const menuList = document.querySelector("nav ul");
const exitIcon = document.querySelector("#X");

mobileMenu.addEventListener("click", () => {
  listItem.forEach((item) => item.classList.toggle("show"));
  nav.classList.toggle("expand");
  navName.classList.toggle("hidden");
  menuList.classList.toggle("ul-list");
  mobileMenu.classList.toggle("hidden");
  exitIcon.classList.toggle("X");
});

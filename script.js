const mobileMenu = document.querySelector('#menu');
const listItem = document.querySelectorAll('.hidden-items');
const nav = document.querySelector('nav');
const navName = document.querySelector('#name');
const menuList = document.querySelector('nav ul');
const exitIcon = document.querySelector('.exit');
const envelope = document.querySelector('#envelope');

function resetMobileMenu() {
  listItem.forEach((item) => item.classList.remove('show'));
  nav.classList.remove('expand');
  navName.classList.remove('hidden');
  menuList.classList.remove('ul-list');
  mobileMenu.classList.remove('hidden');
  exitIcon.classList.remove('X');
  envelope.classList.remove('hidden');
}

mobileMenu.addEventListener('click', () => {
  listItem.forEach((item) => item.classList.add('show'));
  nav.classList.add('expand');
  navName.classList.add('hidden');
  menuList.classList.add('ul-list');
  mobileMenu.classList.add('hidden');
  exitIcon.classList.add('X');
  envelope.classList.add('hidden');

  listItem.forEach((item) => item.addEventListener('click', resetMobileMenu));
});

exitIcon.addEventListener('click', resetMobileMenu);

function resizeWindow() {
  if (window.innerWidth > 600) {
    resetMobileMenu();
  }
}

window.addEventListener('resize', resizeWindow);

const mobileMenu = document.querySelector('#menu');
const listItem = document.querySelectorAll('.hidden-items');
const nav = document.querySelector('nav');
const navName = document.querySelector('#name');
const menuList = document.querySelector('nav ul');
const exitIcon = document.querySelector('.exit');
const envelope = document.querySelector('#envelope');
const btn = document.querySelectorAll('#projects button');
const projectsSection = document.querySelector('#projects');
const blurProjects = document.querySelectorAll('#projects > div');

/* Menu */

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

/* Project section */

const projects = [];

function createDiv() {
  const div = document.createElement('div');
  const description = document.createElement('p');
  const liveSiteBtn = document.createElement('button');
  const sourceBtn = document.createElement('button');
  const projectExitBtn = document.createElement('button');
  description.innerText = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releax map lapora verita.";
  description.classList.add('popup-paragraph');
  liveSiteBtn.textContent = 'See Live';
  sourceBtn.textContent = 'See Source';
  liveSiteBtn.classList.add('popup-btn', 'live');
  sourceBtn.classList.add('popup-btn', 'popup-margin', 'source');
  projectExitBtn.style.backgroundImage = "URL('icons/Icon.png')";
  projectExitBtn.style.backgroundRepeat = 'no-repeat';
  projectExitBtn.style.backgroundSize = 'cover';
  projectExitBtn.classList.add('popup-exit');
  div.classList.toggle('popup');
  if (window.innerWidth < 900) {
    div.classList.toggle('mobile-width');
    description.classList.toggle('popup-mobile-p');
    sourceBtn.classList.toggle('mobile-btn');
    liveSiteBtn.classList.toggle('mobile-btn');
  }
  Object.values(projects[0]).forEach((item) => div.appendChild(item));

  div.appendChild(description);
  div.appendChild(liveSiteBtn);
  div.appendChild(sourceBtn);
  div.appendChild(projectExitBtn);
  projectsSection.appendChild(div);
  projectExitBtn.addEventListener('click', () => {
    div.remove();
    projects.pop();
    document.body.classList.toggle('no-scroll');
    document.body.style.background = '#fff';
    blurProjects.forEach((project) => project.classList.toggle('blur'));
  });
}

function createInfo(button) {
  const object = {};
  const projectsTitle = document
    .querySelector(`${button.dataset.btn} [data-title]`)
    .cloneNode(true);
  const projectsLanguages = document
    .querySelector(`${button.dataset.btn} [data-language]`)
    .cloneNode(true);
  const projectsImages = document
    .querySelector(`${button.dataset.btn} [data-img]`)
    .cloneNode(true);
  projectsTitle.classList.add('popup-title');
  object.title = projectsTitle;
  projectsLanguages.classList.add('popup-languages');
  object.language = projectsLanguages;
  projectsImages.classList.toggle('popup-img');
  if (window.innerWidth < 900) {
    projectsImages.classList.toggle('popup-mobile-img');
    projectsTitle.classList.toggle('mobile-title');
    projectsLanguages.classList.toggle('mobile-languages');
  }
  object.image = projectsImages;
  projects.push(object);
  createDiv();
}

btn.forEach((button) => {
  button.addEventListener('click', () => {
    document.body.style.background = 'black';
    createInfo(button);
    document.body.classList.toggle('no-scroll');
    blurProjects.forEach((project) => project.classList.toggle('blur'));
  });
});

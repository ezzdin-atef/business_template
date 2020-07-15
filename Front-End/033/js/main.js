const elements = {
  right: document.querySelector('.right-arrow'),
  left: document.querySelector('.left-arrow'),
  welcomeSection: document.querySelector('.welcome'),
  navbar: document.querySelector('.welcome .navbar ul'),
  openNav: document.querySelector('.mobile-nav'),
  closeNav: document.querySelector('.close'),
}
const images = [
  './img/header.jpg',
  './img/header2.jpg',
  './img/header3.jpg',
];

let current = 0;

elements.right.addEventListener('click', () => {
  elements.welcomeSection.style.backgroundImage = `url(${images[(++current)%images.length]})`;
});

elements.left.addEventListener('click', () => {
  if (current === 0) current = images.length-1;
  else current--;
  elements.welcomeSection.style.backgroundImage = `url(${images[current]})`;
});

elements.openNav.addEventListener('click', () => {
  elements.navbar.style.display = 'flex';
  elements.openNav.style.display = 'none';
  elements.closeNav.style.display = 'block';
  hideArrows();
});

elements.closeNav.addEventListener('click', () => {
  showArrows();
  elements.navbar.style.display = 'none';
  elements.openNav.style.display = 'block';
  elements.closeNav.style.display = 'none';
});

function hideArrows() {
  elements.right.style.display = 'none';
  elements.left.style.display = 'none';
}
function showArrows() {
  elements.right.style.display = 'inline-block';
  elements.left.style.display = 'inline-block';
}

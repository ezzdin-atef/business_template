const elements = {
  right: document.querySelector('.right-arrow'),
  left: document.querySelector('.left-arrow'),
  welcomeSection: document.querySelector('.welcome'),
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

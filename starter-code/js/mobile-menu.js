const menuBtn = document.querySelector('#menu');
const menuIcons = Array.from(menuBtn.querySelectorAll('img'));
const menu = document.querySelector('#mobile-menu');

menuBtn.addEventListener('click', () => {

  menu.classList.toggle('translate-x-full');
  menuIcons.map(icon => icon.classList.toggle('hidden'));

})
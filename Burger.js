const burger = document.getElementById('burger');
const sidenav = document.querySelector('.sidenav');

burger.addEventListener('click', () => {
  sidenav.classList.toggle('open');
});
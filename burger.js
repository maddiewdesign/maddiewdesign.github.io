const burger = document.getElementById('burger');
const sidenav = document.querySelector('.sidenav');

burger.onclick = () => {
  sidenav.classList.toggle('open');
};

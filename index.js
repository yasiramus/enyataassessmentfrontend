//hamburger
const containerNav = document.querySelector('.navbars');
const closeMenu = document.querySelector('.closeMenu');
const openMenu = document.querySelector('.openMenu');

openMenu.addEventListener('click', show);

closeMenu.addEventListener('click', close);

function show() {
    
  containerNav.style.top = '0';

}
function close() {
    
    containerNav.style.top = '-100%';
    
}

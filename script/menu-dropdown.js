const menuDrop = document.querySelector('.menu-dropdown');
console.log(menuDrop);
function toggleMenu(){
    const menu = document.querySelector('.l-header');
    menu.classList.toggle('active');
}
menuDrop.addEventListener('click', toggleMenu);
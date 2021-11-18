window.addEventListener("scroll", (event) => {
    let scroll = this.scrollY;
    var home = document.getElementById("ihome");
    var services = document.getElementById("iservices");
    var contact = document.getElementById("icontacts");
    const windowWidth = window.innerWidth
    || document.documentElement.clientWidth
    || document.body.clientWidth;
    var windowHeight = window.innerHeight
    || document.documentElement.clientHeight
    || document.body.clientHeight;
    if(scroll < windowHeight){
        home.style.background = "#74c7d5";
        services.style.background = "transparent";
        contact.style.background = "transparent";
    }
    else if(scroll < (windowHeight*2)){
        home.style.background = "transparent";
        services.style.background = "#df5c64";
        contact.style.background = "transparent";
    } else{
        home.style.background = "transparent";
        services.style.background = "transparent";
        contact.style.background = "#82c8bd";
    }
});
const menuDrop = document.querySelector('.menu-dropdown');
console.log(menuDrop);
function toggleMenu(){
    const menu = document.querySelector('.l-header__menu');
    menu.classList.toggle('active');
}
menuDrop.addEventListener('click', toggleMenu);
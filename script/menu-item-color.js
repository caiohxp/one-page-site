window.addEventListener("scroll", (event) => {
    let scroll = this.scrollY;
    var home = document.getElementById("ihome");
    var services = document.getElementById("iservices");
    var contact = document.getElementById("icontacts");
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
window.onresize = function(){
    location.reload();
 };
 window.onload = function(){
    var sec = document.querySelectorAll('section');
    var car = document.querySelector('.carrossel__imagem');
    var cont = document.querySelectorAll('.carrossel__container-text');
    var ts = document.querySelectorAll('.carrossel__l-text-section');
    const windowHeight = window.innerHeight
    || document.documentElement.clientHeight
    || document.body.clientHeight;
    const windowWidth = window.innerWidth
    || document.documentElement.clientWidth
    || document.body.clientWidth;
    console.log(windowHeight);
    console.log(windowWidth);
 }
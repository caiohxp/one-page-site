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
    var services = document.querySelector('.home-section');
    var home = document.querySelector('.services-section');
    var contacts = document.querySelector('.contacts-section');
    const windowHeight = window.innerHeight
    || document.documentElement.clientHeight
    || document.body.clientHeight;
    const windowWidth = window.innerWidth
    || document.documentElement.clientWidth
    || document.body.clientWidth;
 }
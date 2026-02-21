const slideImage = document.querySelectorAll(".carrossel__slide-image");
const slidesContainer = document.querySelector(".carrossel__slides-container");
const nextBtn = document.querySelector(".carrossel__next-btn");
const prevBtn = document.querySelector(".carrossel__prev-btn");
let numberOfImages = slideImage.length;
let slideWidth = slideImage[0].clientWidth;
let currentSlide = 0;

function init(){
    slideImage.forEach((img, i) => {
        img.style.left = i * 100 + "%";
    });
    slideImage[0].classList.add("active");
}

init();

nextBtn.addEventListener('click', () => {
    if(currentSlide >= numberOfImages - 1){
        goToSlide(0);
        currentSlide = 0;
        return;
    }
    currentSlide++;
    goToSlide(currentSlide);
});

prevBtn.addEventListener('click', () => {
    if(currentSlide <= 0){
        goToSlide(numberOfImages - 1);
        currentSlide = numberOfImages - 1;
        return;
    }
    currentSlide--;
    goToSlide(currentSlide);
});

function goToSlide(slideNumber) {
    slidesContainer.style.transform = "translateX(-" + slideWidth * slideNumber + "px)"; 
}

window.addEventListener('resize', () => {
    slideWidth = slideImage[0].clientWidth;
    goToSlide(currentSlide);
});
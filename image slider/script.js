const left = document.getElementById('left');
const right = document.getElementById('right');
const slider = document.querySelector(".slider");
const bottom = document.querySelector(".bottom");
const images = document.querySelectorAll(".image");

let length = images.length;
let slideNumber = 1;


for(let i = 0; i < length; i++) {
    const div = document.createElement("div");
    div.className = "button";
    bottom.appendChild(div);
}

const buttons = document.querySelectorAll(".button");
buttons[0].style.backgroundColor = "white";

const resetBg = () => {
    buttons.forEach(button => {
        button.style.backgroundColor = "transparent";
    })
};

buttons.forEach((button, i) => {
    button.addEventListener("click", () => {
        resetBg();
        slider.style.transform = `translateX(-${i*300}px)`;
        slideNumber = i+1;
        button.style.backgroundColor = "white";
    })
})

const setBg = () => {
    resetBg();
    buttons[slideNumber-1].style.backgroundColor = "white";
}
const nextSlide = () => {
    slider.style.transform = `translateX(-${slideNumber*300}px)`;
    slideNumber++;
}
const prevSlide = () => {
    slider.style.transform = `translateX(-${(slideNumber-2)*300}px)`;
    slideNumber--;
}

const firstSlide = () => {
    slider.style.transform = `translateX(0px)`;
    slideNumber = 1;
}

const lastSlide = () => {
    slider.style.transform = `translateX(-${(length-1)*300}px)`
    slideNumber = length;
}


right.addEventListener("click", () => {
    slideNumber < length ? nextSlide() : firstSlide();
    setBg();
})

left.addEventListener("click", () => {
    slideNumber > 1 ? prevSlide() : lastSlide();
    setBg();
})
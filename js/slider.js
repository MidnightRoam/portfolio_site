// Slider
let offset = 0; // offset from left angle
const sliderLine = document.querySelector('.slider__line');


document.querySelector('.slider__next').addEventListener('click', () => {
    offset += 100;
    if (offset > 110) {
        offset = 0;
    }
    sliderLine.style.right = offset + '%';
});

document.querySelector('.slider__prev').addEventListener('click', () => {
    offset -= 100.5;
    if (offset < 0) {
        offset = 100.5;
    }
    sliderLine.style.right = offset + '%';
});
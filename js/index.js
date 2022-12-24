// Img section
let imgFront = document.querySelector('.js-img-selector[data-select="front"]');
let imgBack = document.querySelector('.js-img-selector[data-select="back"]');
let productImg = document.querySelector('.js-img');

let currImgValue = 'front';
imgFront.addEventListener('click', () => {
    if (currImgValue !== 'front') {
        productImg.setAttribute('src', 'img/chonkybonky-front.png');
        currImgValue = 'front';
        imgFront.setAttribute('data-variant', 'active');
        imgBack.removeAttribute('data-variant');
    }
});

imgBack.addEventListener('click', () => {
    if (currImgValue !== 'back') {
        productImg.setAttribute('src', 'img/chonkybonky-back.png');
        currImgValue = 'back';
        imgBack.setAttribute('data-variant', 'active');
        imgFront.removeAttribute('data-variant');
    }
});

// Testimonial section
let testimonialBefore = document.querySelector('.js-testimonial-img-selector[data-select="before"]');
let testimonialAfter = document.querySelector('.js-testimonial-img-selector[data-select="after"]');
let testimonialImg = document.querySelector('.js-testimonial-img');

let currTestimonialValue = 'before';

testimonialBefore.addEventListener('click', () => {
    if (currTestimonialValue !== 'before') {
        testimonialImg.setAttribute('src', 'img/testimonial-before.jpg');
        currTestimonialValue = 'before';
        testimonialBefore.setAttribute('data-variant', 'active');
        testimonialAfter.removeAttribute('data-variant');
    }
});

testimonialAfter.addEventListener('click', () => {
    if (currTestimonialValue !== 'after') {
        testimonialImg.setAttribute('src', 'img/testimonial-after.jpg');
        currTestimonialValue = 'after';
        testimonialAfter.setAttribute('data-variant', 'active');
        testimonialBefore.removeAttribute('data-variant');
    }
});
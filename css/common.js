MicroModal.init({

    disableScroll: true,

    openClass: 'is-open',
    
    awaitOpenAnimation: true,
    awaitCloseAnimation: true
});


const swiper = new Swiper('.swiper', {
    direction: 'horizontal',
    loop: true,

    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },

    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },

    autoplay: {
        delay: 3000,
    },

    effect: "creative",
    speed: 1000,
    creativeEffect: {
        prev: {
            shadow: true,
            translate: ["-100%", 0, 0],
            rotate: [0, 0, -360],
        },
        next: {
            shadow: true,
            translate: ["100%", 0, 0],
            rotate: [0, 0, 0],
        },
    },

});


const target01 = document.querySelectorAll('.boxAnime');
function fadein01() {
    target01.forEach(function (target) {
        const targetRect = target.getBoundingClientRect();
        if (targetRect.top < window.innerHeight && targetRect.bottom >= 0) {
            target.classList.add('rotateY');
        } else {
            target.classList.remove('rotateY');
        }
    });
};
window.addEventListener('scroll', fadein01);



const target03 = document.querySelector('.logo03');
function logo333() {
    const targetRect = target03.getBoundingClientRect();
    if (targetRect.top < window.innerHeight && targetRect.bottom >= 0) {
        target03.classList.add('fadein02');
    } else {
        target03.classList.remove('fadein02');
    }
};
window.addEventListener('scroll', logo333);
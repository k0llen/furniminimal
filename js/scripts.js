const anchors = document.querySelectorAll('a[href*="#"]');

for (let anchor of anchors) {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const blockID = anchor.getAttribute('href');
        document.querySelector('' + blockID).scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
        document.querySelector('.header__nav').classList.remove('header__nav-active');
        document.querySelector('body').classList.remove('body_noscroll');
    });
};

// burger handler

(function () {
    const menu = document.querySelector('.header__nav');
    const burgerItem = document.querySelector('.burger');
    const menuCloseItem = document.querySelector('.header__nav-close');
    const noScroll = document.querySelector('body');
    burgerItem.addEventListener('click', () =>{
        menu.classList.add('header__nav-active');
        noScroll.classList.add('body_noscroll');
    });
    menuCloseItem.addEventListener('click', () =>{
        menu.classList.remove('header__nav-active');
        noScroll.classList.remove('body_noscroll');
    });

}());

// Swiper 

new Swiper('.intro__slider', {
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
    spaceBetween: 70,
    slidesPerView: 1,
    updateOnWindowResize: true,
    speed: 600,
});


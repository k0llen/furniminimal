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

// Swiper intro

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

// Swiper examples

new Swiper('.examples__swiper', {
    rewind: true,
    slideToClickedSlide: true,
    spaceBetween: 20,
    slideToScroll: 1,
    speed: 600,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    pagination: {
        el: '.swiper-pagination',
        type: 'bullets',
        clickable: true,
    },
    breakpoints:{
        1024 : {
            slidesPerView: 3,
        },

        768: {
            slidesPerView: 2,
        },

        414 : {
            slidesPerView: 1.5,
        },
        320 :{
            slidesPerView: 1,
        }
    },
});

// Review slider


new Swiper('.review__swiper', {
    rewind: true,
    slideToClickedSlide: true,
    spaceBetween: 20,
    slideToScroll: 1,
    speed: 600,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    pagination: {
        el: '.swiper-pagination',
        type: 'bullets',
        clickable: true,
    },
    breakpoints:{
        1024:{
            slidesPerView: 2,
        },
        768: {
            slidesPerView: 1.5,
        },
        414:{
            slidesPerView: 1.2,
        },
        320 :{
            slidesPerView: 1,
        }
    },
});


// MaskedInput phone mask

jQuery(function($){
    $("#phone-1").mask("+7 (999) 999-99-99");
});

jQuery(function($){
    $("#phone-2").mask("+7 (999) 999-99-99");
});

 // Accordeon

document.querySelectorAll('.faq__accordeon-item-title').forEach((item) => {
    item.addEventListener('click', () => {
        const parent = item.parentNode;

        if (parent.classList.contains('faq__accordeon-item--active')) {
            parent.classList.remove('faq__accordeon-item--active');
        } else {
            document.querySelectorAll('.faq__accordeon-item').forEach((child) => {
                child.classList.remove('faq__accordeon-item--active');
            })
            parent.classList.add('faq__accordeon-item--active');
        }
    })
})

// ymaps

//[59.85268619220522,30.319771570168733]

ymaps.ready(init);

function init() {
	let map = new ymaps.Map('map', {
		center: [59.85268619220522,30.319771570168733],
		zoom: 15
	});

	let placemark = new ymaps.Placemark([59.85268619220522,30.319771570168733], {
        balloonContentBody: `г. Санкт-Петербург, </br>
                            Ленинский пр-т, д. 206`,

    }, {
		iconLayout: 'default#image',
		iconImageHref: 'img/placemark.svg',
		iconImageSize: [90, 90],
		iconImageOffset: [-45, -45]
	});

	map.controls.remove('geolocationControl');
    map.controls.remove('searchControl');
    map.controls.remove('trafficControl');
    map.controls.remove('typeSelector');
    map.controls.remove('fullscreenControl');
    map.controls.remove('zoomControl');
    map.controls.remove('rulerControl');

	map.geoObjects.add(placemark).add(placemark2).add(placemark3).add(placemark4).add(placemark5);
}

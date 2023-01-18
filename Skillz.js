"use strict"

// burger

const iconMenu = document.querySelector('.menu_icon');
if (iconMenu) {
    const menuBody = document.querySelector('.header_menu');
    iconMenu.addEventListener("click", function (e) {
        document.body.classList.toggle('_lock');
        iconMenu.classList.toggle('_active');
        menuBody.classList.toggle('_active');
    })
}

// animation scroll

const animItems = document.querySelectorAll('._anim-items');

if (animItems.length > 0) {
    window.addEventListener('scroll', animOnScroll);
    function animOnScroll() {
        for (let index = 0; index < animItems.length; index++) {
            const animItem = animItems[index];
            const animItemHeight = animItem.offsetHeight;
            const animItemOffset = offset(animItem).top;
            const animStart = 5;
            const yOffset = window.pageYOffset;

            let animItemPoint = window.innerHeight - animItemHeight / animStart;
            if (animItemHeight > window.innerHeight) {
                animItemPoint = window.innerHeight - window.innerHeight / animStart;
            }

            if ((yOffset > animItemOffset - animItemPoint) && yOffset < (animItemOffset + animItemHeight)) {
                animItem.classList.add('_active');
            } else {
                if (!animItem.classList.contains('_anim-no-hide')) {
                    animItem.classList.remove('_active');
                }
            }
        }
    }
    function offset(el) {
        const rect = el.getBoundingClientRect(),
        scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
        scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        return { top: rect.top + scrollTop, left: rect.left + scrollLeft }
    }
    animOnScroll();
}

// header fixed

window.onscroll = function() {
    scrollFunction()
};

function scrollFunction() {
    let scrollPos = 10;
    let header = document.getElementById('header');

    if (document.body.scrollTop > scrollPos || document.documentElement.scrollTop > scrollPos) {
        header.classList.add('active');
    } else {
        header.classList.remove('active');
    }
}

// smooth scroll

const menuLinks = document.querySelectorAll('.header_link[data-goto]');
if (menuLinks.length > 0) {
    menuLinks.forEach(menuLink => {
        menuLink.addEventListener("click", onMenuLinkClick);
    });

    function onMenuLinkClick(e) {
        const menuLink = e.target;
        if (menuLink.dataset.goto && document.querySelector(menuLink.dataset.goto)) {
            const gotoBlock = document.querySelector(menuLink.dataset.goto);
            const gotoBlockValue = gotoBlock.getBoundingClientRect().top + window.pageYOffset - 107;

            window.scrollTo({
                top: gotoBlockValue,
                behavior: "smooth"
            });
            e.preventDefault();
        }
    }
}

// parallax

var scene1 = document.getElementById('scene1');
var parallaxInstance1 = new Parallax(scene1);
parallaxInstance1.friction(0.8, 0.8);
parallaxInstance1.scalar(7, 14);

parallaxInstance1.limit(false, false);


var scene2 = document.getElementById('scene2');
var parallaxInstance2 = new Parallax(scene2);
parallaxInstance2.friction(0.3, 0.5);
parallaxInstance2.scalar(3, -5);

parallaxInstance2.limit(false, false);


var scene3 = document.getElementById('scene3');
var parallaxInstance3 = new Parallax(scene3);
parallaxInstance3.friction(0.2, 0.7);
parallaxInstance3.scalar(-7, 4);

parallaxInstance3.limit(false, false);


var scene4 = document.getElementById('scene4');
var parallaxInstance4 = new Parallax(scene4);
parallaxInstance4.friction(0.2, 0.3);
parallaxInstance4.scalar(-3, 2);

parallaxInstance4.limit(false, false);


var scene5 = document.getElementById('scene5');
var parallaxInstance5 = new Parallax(scene5);
parallaxInstance5.friction(0.4, 0.7);
parallaxInstance5.scalar(7, -4);

parallaxInstance5.limit(false, false);


var scene6 = document.getElementById('scene6');
var parallaxInstance6 = new Parallax(scene6);
parallaxInstance6.friction(0.4, 0.3);
parallaxInstance6.scalar(2, -6);

parallaxInstance6.limit(false, false);


var scene7 = document.getElementById('scene7');
var parallaxInstance7 = new Parallax(scene7);
parallaxInstance7.friction(0.6, 0.3);
parallaxInstance7.scalar(-7, 1);

parallaxInstance7.limit(false, false);


var scene8 = document.getElementById('scene8');
var parallaxInstance8 = new Parallax(scene8);
parallaxInstance8.friction(0.1, 0.2);
parallaxInstance8.scalar(3, -2);

parallaxInstance8.limit(false, false);


var scene9 = document.getElementById('scene9');
var parallaxInstance9 = new Parallax(scene9);
parallaxInstance9.friction(0.4, 0.5);
parallaxInstance9.scalar(1, -1);

parallaxInstance9.limit(false, false);


var scene10 = document.getElementById('scene10');
var parallaxInstance10 = new Parallax(scene10);
parallaxInstance10.friction(0.3, 0.2);
parallaxInstance10.scalar(2, 2);

parallaxInstance10.limit(false, false);
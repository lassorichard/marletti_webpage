/* HAMBURGUER MENU */

// Variables
const bars = document.getElementById('bars'),
    close = document.getElementById('close'),
    activeMenu = document.querySelector('.active-menu'),
    menuList = document.querySelector('.menu'),
    body = document.querySelector('body');

// Event Listeners

bars.addEventListener('click', (e) => {
    e.preventDefault();
    close.style.display = 'inline-block';
    bars.style.transform = 'rotate(360deg)';
    if(menuList.classList.contains('active-menu')) {
        menuList.classList.remove('active-menu');
        body.style.overflow = 'visible';
    }   else {
        menuList.classList.add('active-menu');
        body.style.overflow = 'hidden';
    }
});

close.addEventListener('click', (e) => {
    e.preventDefault();
    close.style.display = 'none';
    if(menuList.classList.contains('active-menu')) {
        menuList.classList.remove('active-menu');
        body.style.overflow = 'visible';
    }   else {
        menuList.classList.add('active-menu');
        body.style.overflow = 'hidden';
    }
});

// menu slider

window.onscroll = function () {
    let header= document.querySelector('.header-main'),
        y = window.scrollY;
        
    let elmnt = header.offsetHeight
    
    if (y >= elmnt ) {
        header.classList.add('active-overflow')
    } else {
        header.classList.remove('active-overflow')
        header.style.transition = 'all ease .5s';
    }
};


// json files

fetch('https://json.extendsclass.com/bin/44f9f614419b')
    .then(response => response.json())
    .then(json => {
        var radr = JSON.stringify(json)
        console.log(json)
        document.getElementById('main-title').innerHTML = json.mainTitle;
        document.getElementById('carousel-item1-image').src = json.carouselItem1Image;
        document.getElementById('carousel-item1-title').innerHTML = json.carouselItem1Title;
        document.getElementById('carousel-item1-body').innerHTML = json.carouselItem1Body;
        document.getElementById('carousel-item1-button').innerHTML = json.carouselItem1Button;
        document.getElementById('carousel-item2-image').src = json.carouselItem2Image;
        document.getElementById('carousel-item2-title').innerHTML = json.carouselItem2Title;
        document.getElementById('carousel-item2-body').innerHTML = json.carouselItem2Body;
        document.getElementById('carousel-item2-button').innerHTML = json.carouselItem2Button;

        $('.bxslider-publications').bxSlider({
            auto: true,
            stopAutoOnClick: true,
            pager: true,
            minSlides: 1,
            maxSlides: 2,
            slideMargin: 16,
            slideWidth: 600
            
        });
    });

// bxslider

$('.bxslider').bxSlider({
    auto: true,
    stopAutoOnClick: true,
    pager: true,
    minSlides: 2,
    maxSlides: 4,
    slideMargin: 16,
    slideWidth: 220
    
});





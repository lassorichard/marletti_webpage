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

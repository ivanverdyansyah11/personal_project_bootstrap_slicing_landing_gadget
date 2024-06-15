AOS.init({
    once: true
});

const productImg = document.querySelectorAll('.watch-image')
const thumbnailImg = document.querySelector('.watch-image-banner img')

function changeThumbnailImage(element) {
    productImg.forEach(image => {
        image.classList.remove('active')
    });
    thumbnailImg.setAttribute('src', element.getAttribute('src'))
    element.classList.remove('active')
    element.classList.add('active')
}


let swiperProduct = new Swiper(".swiperProduct", {
    slidesPerView: 2,
    spaceBetween: 20,
    loop: true,
    pagination: {
        el: ".swiper-pagination-product",
    },
    breakpoints: {
        768: {
            slidesPerView: 3,
            spaceBetween: 20,
        },
        1024: {
            slidesPerView: 4,
            spaceBetween: 20,
        },
    },
});

let swiperBlog = new Swiper(".swiperBlog", {
    slidesPerView: 1,
    spaceBetween: 20,
    loop: true,
    pagination: {
        el: ".swiper-pagination-blog",
    },
    breakpoints: {
        768: {
            slidesPerView: 2,
            spaceBetween: 20,
        },
        1024: {
            slidesPerView: 3,
            spaceBetween: 20,
        },
    },
});
var swiper = new Swiper(".mySwiper", {
  slidesPerView: 3,
  spaceBetween: 30,
  loop: true,

  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  breakpoints: {
    768:{
        slidesPerView: 2
    },
    992:{
        slidesPerView: 3
    },
    400: {
        slidesPerView: 1
    }
  }
});
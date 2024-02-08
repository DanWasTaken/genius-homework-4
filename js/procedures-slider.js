const swiper = new Swiper('.swiper-container', {
  // Optional parameters
  loop: true,
  slidesPerView: 1,
  spaceBetween: 16,
  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },

  // Navigation arrows
  navigation: {
    nextEl: '.carousel-btn.next',
    prevEl: '.carousel-btn.prev',
  },

  breakpoints: {
    // when window width is >= 480px
    480: {
      slidesPerView: 1,
      spaceBetween: 16
    },
    // when window width is >= 768px
    768: {
      slidesPerView: 2,
      spaceBetween: 16
    },
    // when window width is >= 1200px
    1200: {
      slidesPerView: 3,
      spaceBetween: 16
    }
  },
});
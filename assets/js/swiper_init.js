const swiper = new Swiper('.swiper', {
  direction: 'horizontal',
  effect: 'fade',
  pauseOnMouseEnter: true,
  fadeEffect: {
    crossFade: true
  },
  loop: true,
  autoplay: {
   delay: 7000,
  },
  pagination: {
    el: '.swiper-pagination',
    type: 'bullet',
  }

});
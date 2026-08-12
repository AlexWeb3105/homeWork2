export const swiper = new Swiper('.swiper', {
  // Optional parameters
  //direction: 'vertical',
  loop: true,
	centeredSlides: true,
	slidesPerView: "auto",

  // If we need pagination
  //pagination: {
  //  el: '.swiper-pagination',
  //},

  // Navigation arrows
  navigation: {
    nextEl: '.swiper__btn-next',
    prevEl: '.swiper__btn-prev',
  },

  // And if we need scrollbar
  //scrollbar: {
  //  el: '.swiper-scrollbar',
  //},
});
// loop: true — слайды зациклены, т. е. после последнего идет первый.
// autoplay — активирует автоматическую смену слайдов.
// navigation — подключает кнопки навигации.
// pagination — включает точки (пагинацию), которые можно кликать.
// effect: "fade" — делает плавную смену слайдов без резкого перехода.
//direction: 'vertical' - направление
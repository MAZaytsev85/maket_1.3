
// Функция инициализации свайпера с брейкпоинтом 769, после которого он должен ломаться, но пока не ломается
window.addEventListener('DOMContentLoaded', () => {

  const resizableSwiper = (breakpoint, swiperClass, swiperSettings) => {
    let swiper;

    breakpoint = window.matchMedia(breakpoint);

    const enableSwiper = function(className, settings) {
      swiper = new Swiper(className, settings);
    }

    const checker = function() {
      if (breakpoint.matches) {
        return enableSwiper(swiperClass, swiperSettings);
      } else {
        if (swiper !== undefined) swiper.destroy(true, true);
        return;
      }
    };

    breakpoint.addEventListener('change', checker);
    checker();
  }

  resizableSwiper(
    '(max-width: 769px)',
    '.slider',
    {
      loop: true,
      spaceBetween: 20,
      slidesPerView: 1.3,
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
    },
  );

});	

// Изменение высоты блока с логотипами, текста и картинки в кнопке развертывания по клику

let brend_list_button = document.querySelector('.button__link');
let brend_list =  document.querySelector('.brendbar__li');
let button_text = document.querySelector('.button__link > span');
let img  = document.querySelector('.button__link > img');


brend_list_button.addEventListener('click', function() {

	brend_list.classList.toggle('fullsize');
	img.classList.toggle('button_close');
	button_text.innerHTML = 
	(button_text.innerHTML === 'Скрыть')
	? button_text.innerHTML = 'Показать все' : button_text.innerHTML = 'Скрыть';
	
})

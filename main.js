// Код всплывающего окна Заказать звонок

$('.header__button').on('click', function() {
    $('.callback') .css ({'top': $(window).scrollTop() +100}).addClass('active');
  });
  
  $('.close__popup').on('click', function() {
    $('.callback').removeClass('active');
  });
  

  $('.form-btn').on('click', function() {
    evt. preventDefault();
    $('.popups__inner').removeClass('active');
    $('.successful') .addClass('activ');
  });
  
  $('.close__popup').on('click', function() {
    $('.successful').removeClass('active');
  });

  $('.sectioh__left-btn').on('click', function() {
    $('.consult') .css ({'top': $(window).scrollTop() +100}).addClass('active');
  });
  
  $('.close__popup').on('click', function() {
    $('.consult').removeClass('active');
  });

  $('.merit-btn').on('click', function() {
    $('.appoint') .addClass('active');
  });
  
  $('.close__popup').on('click', function() {
    $('.appoint').removeClass('active');
  });
  
// Работа якоря
$(function() {
  $('.arrow').click(function(){
      $('html, body').animate({scrollTop:0}, 'slow');
  });
});


// Плавный скролл для ссылок
document.querySelectorAll('a[href^="#"').forEach(link => {

  link.addEventListener('click', function(e) {
      e.preventDefault();

      let href = this.getAttribute('href').substring(1);

      const scrollTarget = document.getElementById(href);

      const topOffset = document.querySelector('.scrollto').offsetHeight;
      // const topOffset = 0; // если не нужен отступ сверху 
      const elementPosition = scrollTarget.getBoundingClientRect().top;
      const offsetPosition = elementPosition - topOffset;

      window.scrollBy({
          top: offsetPosition,
          behavior: 'smooth'
      });
  });
});
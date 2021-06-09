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
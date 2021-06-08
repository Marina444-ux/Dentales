// Код всплывающего окна Заказать звонок

$('.header__button').on('click', function() {
    $('.popups__inner').addClass('active');
  });
  
  $('.close__popup').on('click', function() {
    $('.popups__inner').removeClass('active');
  });
  

  $('.form-btn').on('click', function() {
    $('.shipment__popup').addClass('active');
  });
  
  $('.close__popup').on('click', function() {
    $('.shipment__popup').removeClass('active');
  });

  $('.sectioh__left-btn').on('click', function() {
    $('.popups__inner').addClass('active');
  });
  
  $('.close__popup').on('click', function() {
    $('.popups__inner').removeClass('active');
  });
// Код всплывающего окна Заказать звонок

$('.header__button').on('click', function() {
    $('.callback') .css ({'top': $(window).scrollTop() +100}).addClass('active');
  });
  
  $('.close__popup').on('click', function() {
    $('.popups__inner').removeClass('active');
  });
  

  $('.form-btn').on('click', function() {
  $('.shipment__popup').addClass('active');
  });
  
  $('.close__popup').on('click', function() {
  $('.popups__inner').removeClass('active');
  });

  $('.sectioh__left-btn').on('click', function() {
  $('.consultation').addClass('active');
  });
  
  $('.close__popup').on('click', function() {
  $('.popups__inner').removeClass('active');
  });
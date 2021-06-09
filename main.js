// Код всплывающего окна Заказать звонок

$('.header__button').on('click', function() {
    $('.popups__inner, .callback') .css ({'top': $(window).scrollTop() +100}).addClass('active');
  });
  
  $('.close__popup').on('click', function() {
    $('.popups__inner').removeClass('active');
  });
  

  $('.form-btn').on('click', function() {
  $('.popups__inner, .shipment__popup').addClass('active');
  });
  
  $('.close__popup').on('click', function() {
  $('.popups__inner').removeClass('active');
  });

  $('.sectioh__left-btn').on('click', function() {
  $('.popups__inner, .consultation').addClass('active');
  });
  
  $('.close__popup').on('click', function() {
  $('.popups__inner').removeClass('active');
  });
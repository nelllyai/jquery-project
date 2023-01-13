const modalBtn = $('.present__modal-order');
const modalClose = $('.modal-order__close');
const modalOrder = $('.modal-order');

modalBtn.click(function() {
  modalOrder.show(200);
});

modalClose.click(function() {
  modalOrder.hide(200);
});

const modalOrderInput = $('.modal-order__input');
const modalOrderTitle = $('.modal-order__title');

modalOrderInput.focus(function() {
  modalOrderTitle
  .text(`Введите ${$(this).attr('placeholder').toLowerCase()}`);
});

modalOrderInput.blur(function() {
  modalOrderTitle.text('Заполните форму');
});

const modalOrderForm = $('.modal-order__form');

modalOrderForm.submit(function (event) {
  event.preventDefault();
  $.ajax({
    url: 'https://jsonplaceholder.tysdpicode.com/todos',
    type: 'POST',
    data: $(this).serialize(),
    success(data) {
      modalOrderTitle.text('Спасибо! Номер вашей заявки ' + data.id);
      modalOrderForm.slideUp(300);
    },
    error() {
      modalOrderTitle.text('Что-то пошло не так. Попробуйте позже! ');
    }
  });
});

const navigation = $('.navigation');
const navigationClose = $('.navigation__close');

$('.header__burger').click(function() {
  navigation.animate({
    left: 0
  }, 500, function() {
    navigationClose.animate({
      opacity: 1
    }, 300, 'swing');

    $('body').bind('click', function({target}) {
      if (!target.closest('.navigation')) {
        navigation.animate({
          left: -400
        }, 500);

        $('body').unbind();
      }
    });
  });
});

navigationClose.click(function() {
  navigation.animate({
    left: -400
  }, 500);

  $('body').unbind();
});

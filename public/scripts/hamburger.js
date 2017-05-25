(function() {
  'use strict'

  let icon = $('.icon-menu3');
  let ul = $('.nav');

  ul.hide();
  icon.on('mouseover', () => {
      icon.hide();
      ul.fadeIn(500);
    })
  ul.on('mouseleave',() => {
    ul.slideUp(500);
    icon.delay(250).slideDown(500);
  })

}())

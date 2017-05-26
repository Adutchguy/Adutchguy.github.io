'use strict';

(function(module) {
  const lolController = {};

  lolController.init = function() {
    $('section').hide();
    $('header').fadeIn(1000);
    $('.lol').fadeIn(1000);
  }

  module.lolController = lolController;
})(window);

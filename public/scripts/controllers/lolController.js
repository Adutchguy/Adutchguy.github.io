'use strict';

(function(module) {
  const lolController = {};

  lolController.init = function() {
    $('section').hide();
    $('.lol').fadeIn(1000);
  }

  module.lolController = lolController;
})(window);

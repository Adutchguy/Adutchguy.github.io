'use strict';

(function(module) {
  const indexController = {};

  indexController.init = function() {
    $('section').hide();
    $('.about').show();
  }

  module.indexController = indexController;
})(window);

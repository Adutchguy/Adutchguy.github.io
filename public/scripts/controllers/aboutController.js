'use strict';

(function(module) {
  const aboutController = {};

  aboutController.init = function() {
    $('section').hide();
    $('header').fadeIn(1250);
    $('.about').fadeIn(1250);
  }

  module.aboutController = aboutController;
})(window);

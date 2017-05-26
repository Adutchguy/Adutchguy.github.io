'use strict';

(function(module) {
  const aboutController = {};

  aboutController.init = function() {
    $('section').hide();
    $('header').fadeIn(1500);
    $('.about').fadeIn(1500);
  }

  module.aboutController = aboutController;
})(window);

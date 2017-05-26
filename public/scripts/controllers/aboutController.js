'use strict';

(function(module) {
  const aboutController = {};

  aboutController.init = function() {
    $('section').hide();
    $('header').fadeIn(1000);
    $('.about').fadeIn(1000);
  }

  module.aboutController = aboutController;
})(window);

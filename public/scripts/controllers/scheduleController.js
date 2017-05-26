'use strict';

(function(module) {
  const scheduleController = {};

  scheduleController.init = function() {
    $('section').hide();
    $('header').hide();
    $('.tableau').fadeIn(1500);
  }

  module.scheduleController = scheduleController;
})(window);

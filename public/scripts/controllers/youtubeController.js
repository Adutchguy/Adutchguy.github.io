'use strict';

(function(module) {
  const youtubeController = {};

  youtubeController.init = function() {
    $('section').hide();
    $('header').hide();
    $('.youtube').fadeIn(1500);
  }

  module.youtubeController = youtubeController;
})(window);

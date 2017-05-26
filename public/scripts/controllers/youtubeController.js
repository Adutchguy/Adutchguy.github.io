'use strict';

(function(module) {
  const youtubeController = {};

  youtubeController.init = function() {
    $('section').hide();
    $('header').hide();
    $('.youtube').fadeIn(1250);
  }

  module.youtubeController = youtubeController;
})(window);

'use strict';
(function(module){

const tableauViz = {};

tableauViz.initViz = function() {
  var viz;

  var containerDiv = document.getElementById('vizContainer'),
    url = 'https://public.tableau.com/views/WorshipData/Story1'
    viz = new tableau.Viz(containerDiv, url);
};

tableauViz.initViz();

module.tableauViz = tableauViz;

})(window)

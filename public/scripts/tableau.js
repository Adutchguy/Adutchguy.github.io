'use strict';
(function(module){

const tableauViz = {};

tableauViz.initViz = function() {
  var viz;

  var containerDiv = document.getElementById('vizContainer'),
    url = 'https://public.tableau.com/views/SongStatsMobile/SongStats?:embed=y&:display_count=yes'
    viz = new tableau.Viz(containerDiv, url);
};

tableauViz.initViz();

module.tableauViz = tableauViz;

})(window)

'use strict';

function initViz() {
  var containerDiv = document.getElementById('vizContainer'),
    url = 'https://public.tableau.com/views/WorshipData/Story1';
  var viz = new tableau.Viz(containerDiv, url);
};

initViz();

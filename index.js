var simulateProgress = require('simulate-progress');

/* jshint browserify: true */

var div = document.getElementsByTagName('div'),
    loader = div[0],
    progress = div[1];

function progressCallback (percent){

}

function finishCallback(){

 loader.addClass('finished');

}

function startSimulation(){

  loader.removeClass('finished');
}

simulateProgress(progressCallback, finishCallback);



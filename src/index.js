var simulateProgress = require('simulate-progress');

/* jshint browserify: true */
var button = document.querySelectorAll('button');

button.forEach( function(el, index) {

  function startSimulation(loaderEl){
    var progressEl = loaderEl.querySelector('.progress');
    progressEl.classList.remove('finished');

    function progressCallback (percent){
      progressEl.style.width = percent + "%";
    }

    function finishCallback(){
      progressEl.classList.add('finished');
    }
    simulateProgress(progressCallback, finishCallback);
  }

  el.addEventListener('click',function(){
    startSimulation(el.parentNode.querySelector('.loader'));
  });
});


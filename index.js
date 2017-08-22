var simulateProgress = require('simulate-progress');

/* jshint browserify: true */

var div = document.getElementsByTagName('div'),
    button = document.querySelectorAll('button');

button.forEach(function(el, index){

  function progressCallback (percent){
    if(index===0){
   div[2].style.width = percent + "%";
    }else{
     div[5].style.width = percent + "%";
    }
  }

    function finishCallback(){
     if(index===0){
      div[2].classList.add('finished');
     }else {
      div[5].classList.add('finished');
     }
    }

    function startSimulation(){
      if(index===0){
       div[2].classList.remove('finished');
      }else {
       div[5].classList.remove('finished');
      }
    }

    button[index].addEventListener('click', function(){
       console.log(index);
       startSimulation();
       simulateProgress(progressCallback, finishCallback);
  });
})


(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
var simulateProgress = require('simulate-progress');

/* jshint browserify: true */

// var div = document.getElementsByTagName('div'),
//     loader = div[0],
//     progress = div[1];

// function progressCallback (percent){

// }

// function finishCallback(){

//  loader.addClass('finished');

// }

// function startSimulation(){

//   loader.removeClass('finished');
// }

// simulateProgress(progressCallback, finishCallback);



},{"simulate-progress":2}],2:[function(require,module,exports){
module.exports = function simulateProgress(progress, finished) {
  var i = 0;
  var interval;
  interval = setInterval(function() {
    if (i >= 100) {
      clearInterval(interval);
      finished();
    }
    else {
      i += 5;
      progress(i);
    }
  }, 100);
};

},{}]},{},[1]);

var ProgressBar = require('progressbar.js');

var circle1 = new ProgressBar.Circle(Gulp, {
  strokeWidth: 6,
  easing: 'easeInOut',
  duration: 1400,
  color: '#FFEA82',
  trailColor: '#eee',
  trailWidth: 1,
  svgStyle: null
});

circle1.animate(1.0);  // Number from 0.0 to 1.0

var circle2 = new ProgressBar.Circle(test, {
  strokeWidth: 6,
  easing: 'easeInOut',
  duration: 1400,
  color: '#FFEA82',
  trailColor: '#eee',
  trailWidth: 1,
  svgStyle: null
});

circle2.animate(1.0);  // Number from 0.0 to 1.0

var circle3 = new ProgressBar.Circle(CSS, {
  strokeWidth: 6,
  easing: 'easeInOut',
  duration: 1400,
  color: '#FFEA82',
  trailColor: '#eee',
  trailWidth: 1,
  svgStyle: null
});

circle3.animate(1.0);  // Number from 0.0 to 1.0

var circle4 = new ProgressBar.Circle(JavaScript, {
  strokeWidth: 6,
  easing: 'easeInOut',
  duration: 1400,
  color: '#FFEA82',
  trailColor: '#eee',
  trailWidth: 1,
  svgStyle: null
});

circle4.animate(1.0);  // Number from 0.0 to 1.0

module.exports = Progressbar;
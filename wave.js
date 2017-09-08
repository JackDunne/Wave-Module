const Point = require('./point.js');
const Wave = function(array){
      let numberOfPoints = array.length;
      let points = array;
      let transformedPoints = array;
      let range =
      let period =

      function getRange(){return range;}
      function getPeriod(){return period;}
      function getPointArray(){return points;}

      function shiftX(value){
      //take the x points and add or subtract numbers(value) to shift it
      //loop through list of points, get the x, ask first point who it is, save x and save y, then update the x, this is all inside the for loop
      for(a=0;a<numberOfPoints;a++){
          
      }
      }
}

module.exports = Wave;

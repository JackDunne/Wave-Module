const Point = require('./point.js');
const Wave = function(array){
    let numberOfPoints = array.length;
    let points = array;
    let transformedPoints = array;
    let range;
    let period;

    function getRange(){return range;}
    function getPeriod(){return period;}
    function getPointArray(){return points;}

    function shiftX(value){
        for(var a=0;a<numberOfPoints;a++){
            let tempX = transformedPoints[a].getX();
            let tempY = transformedPoints[a].getY();
            tempX += value;
            transformedPoints[a] = new Point(tempX,tempY);
        }
    }


    function shiftY(value){
        for(var a=0;a<numberOfPoints;a++){
            let tempX = transformedPoints[a].getX();
            let tempY = transformedPoints[a].getY();
            tempY += value;
            transformedPoints[a] = new Point(tempX,tempY);
        }
    }

    function stetchX(value){
        for(var a=0;a<numberOfPoints;a++){
            let tempX = transformedPoints[a].getX();
            let tempY = transformedPoints[a].getY();
            tempX *= value;
            transformedPoints[a] = new Point(tempX,tempY);
        }
    }

    function stetchY(value){
        for(var a=0;a<numberOfPoints;a++){
            let tempX = transformedPoints[a].getX();
            let tempY = transformedPoints[a].getY();
            tempY *= value;
            transformedPoints[a] = new Point(tempX,tempY);
        }
    }

    function transformation(){
            return transformedPoints;
    }

    outputOf(xvalue){
         for(let x = 0;x<numberOfPoints;x++){
             if(points.getX()[x] == xvalue){
                 return points.getY();
             }
             else{
                 console.log("Your xvalue input does not match up with a y value");
             }
         }
    }//for calculate, run through, makes temp variable, if other [x] are greater than temp, replace;
}
module.exports = Wave;

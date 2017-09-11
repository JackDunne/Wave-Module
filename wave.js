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
        for(a=0;a<numberOfPoints;a++){
            let tempX = p1.getX();
            let tempY = p1.getY();
            tempX += value;
            let tempPoint = new Point(tempX,tempY);//this stuff probably isnt correct
            for(let x = 0;x<transformedPoints.length;x++){
                transformedPoints[x] =
            }
        }
    }

    function shiftY(value){
        for(a=0;a<numberOfPoints;a++){
            let tempX = p1.getX();
            let tempY = p1.getY();
            tempY += value;
            let tempPoint = new Point(tempX,tempY);
        }
    }

    function StretchX(value){
        for(a=0;a<numberOfPoints;a++){
            let tempX = p1.getX();
            let tempY = p1.getY();
            tempX = tempX*value;
            let tempPoint = new Point(tempX,tempY);
        }
    }

    function StretchY(value){
        for(a=0;a<numberOfPoints;a++){
            let tempX = p1.getX();
            let tempY = p1.getY();
            tempY = tempY*value;
            let tempPoint = new Point(tempX,tempY);
        }
    }
}
module.exports = Wave;

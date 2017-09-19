const Point = require('./point.js');
const Wave = function(array){
    let numberOfPoints = array.length;
    let points = array;
    let transformedPoints = array;
    let range = calculateSpan(points, "y");
    let period = calculateSpan(points, "x");

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

    function stretchX(value){
        for(var a=0;a<numberOfPoints;a++){
            let tempX = transformedPoints[a].getX();
            let tempY = transformedPoints[a].getY();
            tempX *= value;
            transformedPoints[a] = new Point(tempX,tempY);
        }
    }

    function stretchY(value){
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

    function outputOf(xvalue){
        let position = xvalue%period;
        return points[position].getY();
    }

    function calculateSpan(array,coordinate){
        let min;
        let max;
        if(coordinate == "x"){
            for(let a = 1;a<numberOfPoints;a++){
                min = points[0].getX();
                max = points[0].getX();
                if(points[a].getX()<min){
                    min = points[a].getX();
                }
                if(points[a].getX()>max){
                    max = points[a].getX();
                }
            }
            return max-min;
        }
        else if(coordinate == "y"){
            for(let a = 1;a<numberOfPoints;a++){
                min = points[0].getY();
                max = points[0].getY();
                if(points[a].getY()<min){
                    min = points[a].getY();
                }
                if(points[a].getY()>max){
                    max = points[a].getY();
                }
            }
            return max-min;
        }
    }
    return{shiftX,shiftY,stretchX,stretchY,getPointArray,getRange,getPeriod,transformation,outputOf};
}
module.exports = Wave;

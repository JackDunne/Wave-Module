let point = function(xcor,ycor){
      let x = xcor;
      let y = ycor;

      function getX(){return x;}
      function getY(){return y;}

      function magnitude(){
            let dist = Math.sqrt(x*x + y*y);
            return dist;
      }

      function distanceTo(p2){
            let xsquared = (x-p2.getX())*(x-p2.getX());
            let ysquared = (y-p2.getY())*(y-p2.getY());
            return Math.sqrt(xsquared + ysquared);
      }
}

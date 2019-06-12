// Create Shoes constructor.
// It should have the following attributes:
// name, available sizes and a method that checks if a specific size is available.
// Create an instance.
// For that instance check to see if a specific size is available.
// Check once for an available size, and once for an unavailable size.
// For example we could have shoes called “star Shoes” with available sizes: 36,38,44.
// so when we check if size 36 is available we get true.
// When we check if size 46 is available we get false.



class Point {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }
plus(point){
    let newpoint = new Point();
    newpoint.x = point.x + this.x;
    newpoint.y = point.y + this.y;
    return newpoint;
}


}

let point1 = new Point(2,3);
console.log(point1.plus(point1));
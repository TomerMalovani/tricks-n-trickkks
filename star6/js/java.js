// 1. Create a Shape class with properties: type, color.
// 2. Create a new circle instance, and a square instance.
// 3. Add to the circle instance a radius property with the value of 3.
// 4. Add to the square instance an edgeLength property with the value of 5.
// 5. Add to the square instance a calcArea function that will calculate the square area. The function should get the
// square edge as a parameter.
// 6. Add a calcArea function to the circle instance too. The function should get the circle radius as a parameter.
// 7. Create a calcShapeArea function that will get a shape as a parameter and calculate the area according to the
// shape type.
// 8. Use the calcShapeArea function to calculate the area of the square and circle instances.
// 9. Add to the square instance a calcArea2 function that will calculate the square area. The function should not get
// any parameters.
// 10. Add to the circle instance a calcArea2 function that will calculate the circle area. The function should not get any
// parameters.
// 11. Create a calcShapeArea2 function that will get a shape as a parameter and calculate the area. (should be 1 line)

class Shape {
    constructor(type, color) {
        this.type = type;
        this.color = color;
    }
}

var circle = new Shape("circle", "red");
var square = new Shape("square", "blue");
circle.radius = 3;
square.edgelength = 5;
square.calcarea=function(edgelength){
    var area=edgelength * edgelength;
    return area;
};
circle.calcarea=function(radius){
    var area =(radius * radius)* 3.14159265359;
    return area;
};


function calcShapeArea (shape){
    if (shape.type === "circle"){
        console.log(shape.calcarea(shape.radius));
    }
    if (shape.type === "square"){
        console.log(shape.calcarea(shape.edgelength));
    }
}

// calcShapeArea(square);

square.calcarea2 = function (){
    console.log(this.edgelength*this.edgelength);
}
y

circle.calcarea2 = function (){
    console.log((this.radius*this.radius)*3.14159265359);
}


function calcShapeArea2(shape){
    shape.calcarea2();
}

calcShapeArea2(circle);
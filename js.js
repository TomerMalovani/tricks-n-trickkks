function transposeArray(array, arrayLength){
    var newArray = [];
    console.log(array);
    for(var i = 0; i < array.length; i++){
        newArray.push([]);
    };

    for(var i = 0; i < array.length; i++){
        for(var j = 0; j < arrayLength; j++){
            newArray[j].push(array[i][j]);
        };
    };

    return newArray;
}
let arri = [
    
        [1,2,3],
        [1,2,3],
        [1,2,3],
    
];
let a = transposeArray(arri,arri.length);
console.log(a);

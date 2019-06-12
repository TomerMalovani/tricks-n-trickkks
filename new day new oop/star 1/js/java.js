// Create Shoes constructor.
// It should have the following attributes:
// name, available sizes and a method that checks if a specific size is available.
// Create an instance.
// For that instance check to see if a specific size is available.
// Check once for an available size, and once for an unavailable size.
// For example we could have shoes called “star Shoes” with available sizes: 36,38,44.
// so when we check if size 36 is available we get true.
// When we check if size 46 is available we get false.



class Shoes {
    constructor(name, sizesavb) {
        this.name = name;
        this.sizesavb = sizesavb;
    }
isThereSize(number){
    this.sizesavb.forEach(sizesavb => {
        if (sizesavb == number){
       
         console.log("goot");
           return true;   
        }
        
    });
    
    return false;
}


}

let shoe1 = new Shoes ("hightop",[47,36,23]);

shoe1.isThereSize(36);
shoe1.isThereSize(22);
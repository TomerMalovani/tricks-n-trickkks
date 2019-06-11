class Jewl {
    constructor(type, price, ) {
        this.type = type;
        this.price = price;


    }
}

let jewl1 = new Jewl("ring", "300");
let jewl2 = new Jewl("neckless", "200");

function TakeMyMoney(jewl, jewl2) {
    if (jewl.price > jewl2.price) {
        console.log("the " + jewl.type + "cost more");
        return jewl;
    }
    else {
        console.log("the " + jewl2.type + " cost more");
        return jewl2
    }
}

console.log(takemymoney(jewl1, jewl2));



let expect = require("chai").expect;

function if_palodrome (word){
    word = word.toLowerCase();
    if (word.length > 0){
    let backword = "";
    for (let e = word.length;e >= 0; e--){
        backword += word.charAt(e);
    }
    if (word === backword){
        return true;
    }
    else{
        
        return false;
    }
}
}


it("should be return true if its a poledrom", () => {
    expect(if_palodrome('12321')).to.equal(true);
});
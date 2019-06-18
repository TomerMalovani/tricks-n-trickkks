const if_palodrome = (word)=> {
    word = word.toLowerCase();
    if (word.length > 0) {
        let backword = "";
        for (let e = word.length; e >= 0; e--) {
            backword += word.charAt(e);
        }
        if (word === backword) {
            return true;
        }
        else {

            return false;
        }
    }
}

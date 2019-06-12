class Player {
    constructor(name, score) {
        this.name = name;
        this.score = 0;

    }
    didwin() {
        if (this.score > 30) {
            return true;
        }
        else {
            return false
        }
    };

    checkIfPlayerWon(){
        if ( this.didwin()){
            console.log("player " +this.name+" won!");
        }
    }

}

let player1 = new Player ("tomer")
player1.score = 32;

player1.checkIfPlayerWon();

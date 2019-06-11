// create Player class.
// It should have the following attributes:
// name
// score – set to 0 at creation
// 1. Create a player instance.
// 2. make sure that his score equals to 0 (using code!)
// 3. write a play function: play(player)
// Function description:
// generate a random number between 1-10
// if the number if even, the player wins -> increment the player score by 1.
// Write a global function that will run the play function 3 times and returns the player's final score.

class Player {
    constructor(name) {
        this.name = name;
        this.score = 0;
    }
}

var gilad = new Player("gilad");
function play(player) {
    if (player.score === 0) {
        for (var i = 0; i < 3; i++) {
         var rand = Math.floor(Math.random()*11);
            if (player.score ===rand ){
                player.score++;
            }
        }



    }
    return player.score;
}

console.log(play(gilad));
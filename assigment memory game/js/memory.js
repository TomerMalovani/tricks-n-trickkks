class Card {
    constructor(cards,id){
        this.cardsArray = cards;
        this.ifchecked = false;
        this.canflip = true;
        this.id=id;
    }
}

let cardarray = Array.from(document.getElementsByClassName("card"));
let cardarr = new Card (cardarray);
let count = 0;
cardarray.forEach(cards=> {
    cards.addEventListener('click',cards =>{
        console.log( Array.from(cardarr.cardarray).indexOf(event.target));
    });
});


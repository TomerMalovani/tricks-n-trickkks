// class Board {
//     constructor(card) {
//         this.card = card

//     }
// }
// class Card {
//     constructor(id, imgUrl, clickd) {
//         this.id = id;
//         this.imgUrl = imgUrl;
//         this.clickd = clickd;
//     }
//     press_card() {
//         this.classList.add("flip");
//         a = switch_card_back.bind(a);
//         console.log(this.id);
//         setTimeout(a, 1000);
//     }

//     switch_card_back() {
//         this.classList.remove("flip");
//     }


// }






// let board = new Board();







// let jscard = [];
// let Htmlcards = document.getElementsByClassName("card");
// for (var i = 0; i < Htmlcards.length; i++) {
//     Htmlcards[i].id = "card" + i;
//     Htmlcards[i] = document.getElementById("card" + i);
//     jscard[i] = new Card(Htmlcards[i].id, "", false, Htmlcards[i]);
//     jscard[i].htmlcard = Htmlcards[i];

// }
// board.card = jscard;
// // let numbank = []
// // let e = document.getElementsByClassName ("flip-card-back");




// // for (let t =0; t <= 6;t++){
// //     jscard[t].setrandimg(t); 
// //     }





// for (var i = 0; i < jscard.length; i++) {
//     jscard[i].htmlcard.addEventListener('click', jscard[i].press_card);
// }

// let btn = document.getElementById("start_btn");
// btn.addEventListener('click',show_cards);

// function show_cards() {
//     for (var i = 0; i < Htmlcards.length; i++) {
        
//         jscard[i].press_card()
//   }
 
// }


































// class Card {
    //     constructor() {
    
    //     }
    
    
    //     show_cards(){
    //        this.press_card();
    //        this.card_effect();
    //     }
    
    //     press_card() {
    //         this.place.classList.add("flip");
    //     }
    
    //     card_effect() {  
    //         setTimeout(remove_effect_func, 1000);
    //     }
    //     remove_effect() {
    //         this.place.classList.remove("flip");
    //     }
    
    
    
    // }
    
    // let cards = [];
    // let cardindex = document.getElementsByClassName("card");
    // for (let i = 0; i < cardindex.length; i++) {
    //     cards[i] = new Card();
    //     cards[i].id = "card" + i;
    //     cards[i].place = cardindex[i];
    // }
    
    
    // for (let i = 0; i < cardindex.length; i++){
    // let btn = document.getElementById("start_btn");
    // btn.addEventListener('click',showallcards =function(){
    //     cards[i].show_cards();
    // });
    
    
    
    // }
    
    //     function remove_effect_func(){
    //    for (let y = 0; y < cardindex.length; y++){
    //         cards[y]. remove_effect();
    //     }
    // }
    
    
    
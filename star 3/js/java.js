class Recipe {
    constructor(name, serve, ingredients) {
        this.name = name;
        this.serve = serve;
        this.ingredients = ingredients;
    }
}

var meatball = new Recipe ("meatball", 2, ["meat", "balls", "sauce"]);

function writeItDown(Recipe){
    console.log("* "+Recipe.name);
    console.log("* "+Recipe.serve);
    console.log("* ingredients:");
    console.log("            *"+Recipe.ingredients[0] );
    console.log("            *"+Recipe.ingredients[1] );
    console.log("            *"+Recipe.ingredients[2] );

}

writeItDown(meatball);




let dice = [];
let numberOfDice = 6;



function setup() {
 createCanvas(windowWidth, windowHeight);
 for (let i = 0; i < numberOfDice; i++) {
   dice[i] = new Die(100); // argument is the size of the die
 }

}




function draw() {
 background("darkred");
  // loop over the array and place+display each die

  fill(255);
  textSize(20);
  text("TO COMPLETE THIS GAME, ROLL AND CLICK THE DICE UNTILL THE NUMBER 1-6 ARE IN ORDER. GOOD LUCK!", 600, 400);

 for (let i = 0; i < dice.length; i++) {
   const die = dice[i]; // 'die' is a temporary variable for the current array item
   die.place(die.size*1.2*i+die.size, die.size*2); // place the die neatly in the row
   die.display(); // actually draw it on screen
 }


}


function mouseClicked() {
 // loop over the array of dice...
 for (let i = 0; i < dice.length; i++) {
   const die = dice[i];
   // if the cursor is over the current die, freeze/unfreeze that die
   if (die.isTouched(mouseX,mouseY)) {
     die.toggleFreeze();
   }
 }
}


// for computers...
function keyPressed() {
 shakeDice();
}




function shakeDice() {
 let list = "values: ";
 for (let i = 0; i < dice.length; i++) {
   const die = dice[i];
   die.roll();
   list = list + die.value + " ";
 }
 console.log(list);
}

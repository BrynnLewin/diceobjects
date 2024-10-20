let dice = [];
let numberOfDice = 9;


let font;
let fontSize = 40;


function preload(){
 font = loadFont("assets/Barber Shop.otf");
}


function setup() {
 createCanvas(windowWidth, windowHeight);
 for (let i = 0; i < numberOfDice; i++) {
   dice[i] = new Die(50); // argument is the size of the die
 }


 textFont(font);
 textSize(fontSize);

 textAlign(LEFT, CENTER);
 drawWords(width * height);

}


function drawWords (x) {
 fill(80);

 text("words", 100, 80);
 text("hey",200, 150);
 text("oh", 300, 290);
}


function draw() {
 background("darkred");
  // loop over the array and place+display each die

  fill(255);
  text("words on screen", 400, 400);

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

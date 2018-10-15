//Arie Werner
//April 27th, 2018
//24567

//get all divs with id of card
var wholeBox = document.querySelectorAll(".card");


//add up the clicks each time you choose a card -- cannot go past 2 clicks before it turns them back over
function addClicks() {
  for (var i = 0; i < wholeBox.length; i++) {
      //event listener to listen for clicks to know when to change color
    wholeBox[i].addEventListener('click', changeColor)
  }
}
addClicks();

//reset the clicks after 2 cards have been chosen whether they match or not
function removeClicks() {
  for (var i = 0; i < wholeBox.length; i++) {
    wholeBox[i].removeEventListener('click', changeColor)
  }
}
var flip = 0;
var rememberCards = [];
var memoryColor = [];
//set a variable equal to white so that when flipped they turn back to white
var white = "#fff";

//Flip the card and show the color stored in that div using data-image to get color from HTML
function changeColor(event) {
  var x = this.getAttribute("data-image");
  this.style.background = x;
  flip++;
  memoryColor.push(x);
  rememberCards.push(event.target.id);


  //Make sure they cannot click on 3 cards before it resets them.
  if (flip > 1) {

    isChecked();
  }
}
//Make sure that if the two cards clicked dont match, they will turn back to white or the front of the card
function clear() {
  for (var i = 0; i < wholeBox.length; i++) {
    wholeBox[i].style.background = white;
  }
  flip = 0;
  rememberCards = [];
  memoryColor = [];
  addClicks();
}
//Compare the two cards once they are clicked/flipped to see if the colors showing match one another
function isChecked() {
  if (memoryColor[0] == memoryColor[1] && rememberCards[0] != rememberCards[1]) {
    hideCards();

  } else {
    removeClicks();
      //setTimeout to show the cards for 2 seconds before turning them back over
    setTimeout(clear, 2000);
  }
}
//Make the cards hidden if they do match once they are flipped/clicked
function hideCards() {
  var cardOne = document.getElementById(rememberCards[0]);
  var cardTwo = document.getElementById(rememberCards[1]);
  cardOne.style.visibility = 'hidden';
  cardTwo.style.visibility = 'hidden';
  clear();

}

//option to restart/replay the game once you have finished 
function restartFunction() {
    location.reload();
}
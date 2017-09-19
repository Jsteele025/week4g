//Guessing game

//set variables
var randomLetter;
var letters;
var guesses = [];
var guessesLeft = 9;
var gamesWon = 0;
var gamesLost = 0;

//letters
letters = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];

//Random Letter
randomLetter = letters[ parseInt(Math.random() * letters.length) ];

//collect keyboard input
document.addEventListener('keydown', function(event) {

    //Print guesses
    guesses.push( String.fromCharCode(event.which).toLowerCase() ) ;
    document.querySelector('.guesses').innerHTML = guesses.join(', ');;

    //Subtract from total guesses
    guessesLeft --;
    //Print guesses left
    document.querySelector('.guessesLeft').innerHTML = guessesLeft;

    //Game WON!
    if(  String.fromCharCode(event.which).toLowerCase() === randomLetter ) {
        gamesWon ++;
        document.querySelector('.gamesWon').innerHTML = gamesWon;
        reset();
    }

    //Game LOST
    if(guessesLeft === 0) {
        gamesLost ++;
        document.querySelector('.gamesLost').innerHTML = gamesLost;
        reset();
    }

});

function reset() {
    guessesLeft = 9;
    guesses = [];
    document.querySelector('.guessesLeft').innerHTML = guessesLeft;
    document.querySelector('.guesses').innerHTML = guesses;
    randomLetter = letters[ parseInt(Math.random() * letters.length) ];
}

const answer = Math.floor(Math.random() * 10 + 1);
var guesses = 0;

document.getElementById('submitbut').onclick = function() {

    let guess = document.getElementById('guessingNum').value;
    guesses+=1;


    if(guess == answer){
        window.alert(`${answer} is the correct number, it took you ${guesses} guesses`);
    }
    else if(guess < answer){
        window.alert(`Increase number :)`);
    }
    else{
        window.alert(`Decrease it ;)`);
    }






}
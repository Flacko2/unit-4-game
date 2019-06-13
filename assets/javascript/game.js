let randomNum = 1;
let count = 0;

let gemOne;
let gemTwo;
let gemThree;
let gemFour;

let winCount;
let lossCount;

function ranGenerator() {
    randomNum = Math.floor(Math.random() * 101) + 19;
    console.log(randomNum);
    $("#ran-number").html(randomNum);
}

function gemGenerator() {
    gemOne = Math.floor(Math.random() * 12) + 1;
    console.log("gem 1 = " + gemOne);
    if (!(gemOne % 2 == 0)) {
        gemOne++;
    }
    gemTwo = Math.floor(Math.random() * 12) + 1;
    if (gemTwo % 2 == 0) {
        gemTwo++;
    }
    console.log("gem 2 = " + gemTwo);
    gemThree = Math.floor(Math.random() * 12) + 1;
    console.log("gem 3 = " + gemThree);
    gemFour = Math.floor(Math.random() * 12) + 1;
    console.log("gem 4 = " + gemFour);
}

function clickGem() {


    $("#gem1").on("click", function () {
        count = count + gemOne;
        console.log(count);
        $("#counter").html(count);
    });

    $("#gem2").on("click", function () {
        count = count + gemTwo;
        console.log(count);
        $("#counter").html(count);

    });

    $("#gem3").on("click", function () {
        count = count + gemThree;
        console.log(count);
        $("#counter").html(count);
    });

    $("#gem4").on("click", function () {
        count = count + gemFour;
        console.log(count);
        $("#counter").html(count);
    });
}

function checkCount(count, randomNum) {
    if (count === randomNum) {
        console.log("it works bitch");
    }
    else if (count > randomNum) {
        console.log("you suck!");
    }
    
}
//create random number and store it in my randomnum variable
function gameInit() {

    ranGenerator();

    gemGenerator();
    clickGem();
    //make random numbers for gems
    //collect and display data for counter
    checkCount();
}


gameInit();




//to do: collect data for win or loss

function resetGame() {

} 
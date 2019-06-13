let randomNum = 0;
let count = 0;

let gemOne;
let gemTwo;
let gemThree;

let winCount;
let lossCounter;

//create random number and store it in my randomnum variable
function gameStartup() {
    function ranGenerator() {
        randomNum = Math.floor(Math.random() * 35) + 100;
        console.log(randomNum);
        $("#ran-number").html(randomNum);
    }
    ranGenerator();
    function gemGenerator() {
        gemOne = Math.floor(Math.random() * 10) + 1;
        console.log("gem 1 = " + gemOne);
        gemTwo = Math.floor(Math.random() * 10) + 6;
        if (gemTwo % 2 == 0){
            gemTwo++;
        }
        console.log("gem 2 = " + gemTwo);
        gemThree = Math.floor(Math.random() * 5) + 2;
        console.log("gem 3 = " + gemThree);
        
    }
    gemGenerator();
//make random numbers for gems

}

gameStartup();



//to do: create function that collects and  displays counter value

if (randomNum == count){
 winCount++;
 $("#wins").html(winCount);
}
else {
    
$("#gem1").on("click", function(){
    count = count + gemOne;
    console.log(count);
    $("#counter").html(count);
})

$("#gem2").on("click", function(){
    count = count + gemTwo;
    console.log(count);
    $("#counter").html(count);
})

$("#gem3").on("click", function(){
    count = count + gemThree;
    console.log(count);
    $("#counter").html(count);
})

}


//to do: collect data for win or loss
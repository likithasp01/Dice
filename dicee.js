var randomNumber1=Math.floor(Math.random() * 6)+1;
var randomDiceImage="dice"+randomNumber1+".png";

var randomImageSource="images/"+randomDiceImage;

document.querySelectorAll("img")[0].setAttribute("src",randomImageSource);



var randomNumber2=Math.floor(Math.random() * 6)+1;
var randomDiceImage="dice"+randomNumber2+".png";

var randomImageSource2="images/dice"+randomNumber2+".png";
document.querySelectorAll("img")[1].setAttribute("src",randomImageSource2);



if(randomNumber1>randomNumber2){
    document.querySelector("h1").innerHTML="play1 wins";
}
else if(randomNumber2>randomNumber1){
    document.querySelector("h1").innerHTML="play2 wins";
}
else{
    document.querySelector("h1").innerHTML="draw";
}
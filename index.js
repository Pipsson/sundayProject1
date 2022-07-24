var randomNumber1 = Math.floor(Math.random()*6) + 1;
var randomImage= "num" + randomNumber1 +".png";
var randomImageSource1 = "images/" + randomImage;
var image1  = document.querySelectorAll("img")[0];
image1.setAttribute("src", randomImageSource1);

var randomNumber2 = Math.floor(Math.random()*6) + 1;
var randomImage= "num" + randomNumber2 +".png";
var randomImageSource2 = "images/" + randomImage;
var image2 = document.querySelectorAll("img")[1];
image2.setAttribute("src", randomImageSource2);


if (randomNumber1 >  randomNumber2){
 document.querySelector("h1").innerHTML = "Play 1 Win";
}
 else if (randomNumber1 < randomNumber2){
  document.querySelector("h1").innerHTML = "Play 2 Win";
  }
else{
  document.querySelector("h1").innerHTML = "Draw";
}q

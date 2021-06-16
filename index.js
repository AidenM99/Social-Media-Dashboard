var toggleBtn = document.querySelector(".toggle-btn");
var body = document.querySelector("body");
var facebook = document.querySelector(".facebook-dark");
var twitter = document.querySelector(".twitter-dark");
var instagram = document.querySelector(".instagram-dark");
var youtube = document.querySelector(".youtube-dark");
var textOne = document.querySelectorAll(".text-dark-one").length;
var textTwo = document.querySelectorAll(".text-dark-two").length;
var bottomCards = document.querySelectorAll(".bottom-card-dark").length;
var toggleBtn = document.querySelector(".toggle-btn-dark");
var innerCircle = document.querySelector(".inner-circle-dark");


toggleBtn.addEventListener("click", function(){

  lightModeToggle();

});

function lightModeToggle(){

  body.classList.toggle("background-light");

  facebook.classList.toggle("facebook-light");

  twitter.classList.toggle("twitter-light");

  instagram.classList.toggle("instagram-light");

  youtube.classList.toggle("youtube-light");

  toggleBtn.classList.toggle("toggle-btn-light");

  innerCircle.classList.toggle("inner-circle-light");

  for(i=0; i<textOne; i++){
    document.querySelectorAll(".text-dark-one")[i].classList.toggle("text-light-one");
  };

  for(i=0; i<textTwo; i++){
    document.querySelectorAll(".text-dark-two")[i].classList.toggle("text-light-two");
  };

  for(i=0; i<bottomCards; i++){
    document.querySelectorAll(".bottom-card-dark")[i].classList.toggle("bottom-card-light");
  };
};

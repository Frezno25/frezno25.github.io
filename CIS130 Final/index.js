/*
Author:  Jesse Wentz
Date: 11/24/18
*/


var raceSpeed;


var pikachuDiv = document.getElementById("pikDiv");
var umbreonDiv = document.getElementById("umbDiv");



var pikPos;
var umbPos;



var pikImage = document.getElementById("Pikachu");
var umbImage = document.getElementById("Umbreon");



function getReady() {
  
  pikPos = 0;
  umbPos = 0;
 
  
  pikachuDiv.style.left = pikPos + "px";
  umbreonDiv.style.left = umbPos + "px";
  

  
  pikImage.src = "pikachu.gif";
  umbImage.src = "umbreon.gif";
 
  
  pikImage.style.display = "block";
  umbImage.style.display = "block";
  

 
  document.getElementById("PikachuWins").style.display = "none";
  document.getElementById("UmbreonWins").style.display = "none";
  

  
  document.getElementById("start").style.display = "inline-block";
  document.getElementById("start").style.width = "95px";
  document.getElementById("start").style.height = "110px";

  
  document.getElementById("start2").style.display = "none";
}

function startRace() {
  getReady();
  document.getElementById("start").style.display = "none"; 
  document.getElementById("start2").style.width = "95px"; 
  document.getElementById("start2").style.display = "block"; 
  document.getElementById("start2").style.height = "110px";

  
  raceSpeed = setInterval(movement); 
}

function movement() {
  var randpikPos = Math.floor(Math.random() * 5);
  var randumbPos = Math.floor(Math.random() * 5);
  

  
  pikPos += randpikPos;
  umbPos += randumbPos;
 

  
  pikachuDiv.style.left = pikPos + "px";
  umbreonDiv.style.left = umbPos + "px";
 

  
  if (pikPos > 1300 || umbPos > 1300)  {
    
    clearInterval(raceSpeed);
    winner();
  } 
}


function winner() {
  
  if (pikPos > 1300) {
    PikachuWins();
  } 
  else   {
    UmbreonWins();
  } 
} 


function PikachuWins() {
  pikImage.style.display = "none";
  umbImage.style.display = "none";
  document.getElementById("PikachuWins").style.display = "block";
  document.getElementById("PikachuWins").style.width = "175px";
  document.getElementById("PikachuWins").style.height = "auto";
  document.getElementById("PikachuWins").style.position = "fixed";
  document.getElementById("PikachuWins").style.top = "40%";
  document.getElementById("PikachuWins").style.left = "45%";
} 

function UmbreonWins() {
  pikImage.style.display = "none";
  umbImage.style.display = "none";
  document.getElementById("UmbreonWins").style.display = "block";
  document.getElementById("UmbreonWins").style.width = "175px";
  document.getElementById("UmbreonWins").style.height = "auto";
  document.getElementById("UmbreonWins").style.position = "fixed";
  document.getElementById("UmbreonWins").style.top = "40%";
  document.getElementById("UmbreonWins").style.left = "45%";
} 


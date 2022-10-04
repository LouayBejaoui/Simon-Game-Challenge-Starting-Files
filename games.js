var userClickedPattern=[] ;
var gamePattern=[];
var buttonColours=["red","blue","green","yellow"] ;
var v=true  ;
var i=0 ;
$(document).keypress(function(event){

  if (v==true)

  {$("h1").text("level 1") ;
    nextSequence() ;
    v=false ;

  }
}) ;

function nextSequence ()
{
  userClickedPattern = [];

    i++;
$("h1").text("level "+i ) ;
  var randomNumber=Math.floor(Math.random()*4);
  var randomChosenColour=buttonColours[randomNumber] ;
  gamePattern.push(randomChosenColour) ;
  $("#"+randomChosenColour).fadeIn(100).fadeOut(100).fadeIn(100);

playSound(randomChosenColour);
}
$(".btn").click(function ()
{
  userChosenColour=this.id ;
  userClickedPattern.push(userChosenColour) ;
  playSound(userChosenColour);
  animatePress(userChosenColour);
  n=(userClickedPattern.length)-1 ;
  checkAnswer(n) ;
});
function playSound(name)
{
  var audio = new Audio("sounds/" +name+ ".mp3");
    audio.play();
}
function  animatePress(currentColour)
{
  $("#"+currentColour).addClass("pressed");

setTimeout(function(){ $("#"+currentColour).removeClass("pressed"); }, 100);
}

function checkAnswer(curentlevel)
{
if (userClickedPattern[curentlevel]==gamePattern[curentlevel])
{
if (userClickedPattern.length === gamePattern.length){
  setTimeout(function () {
           nextSequence();
         }, 1000);
           }}
else {
  var wrong = new Audio("sounds/wrong.mp3");
    wrong.play();
    $("body").addClass("game-over");
    setTimeout(function(){$("body").removeClass("game-over");},200);
    $("h1").text("GAME-OVER , Press Any Key To Restart") ;
    startOver() ;
}
}
function startOver()
{
  userClickedPattern=[] ;
   gamePattern=[];
  v=true ; 
   i=0 ;
}

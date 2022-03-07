var buttonColours = ["red", "blue", "green", "yellow"];
var gamePattern = [];
var level = 1;

function computer() {
  function nextSequence() {
    var randomNumber = Math.floor(Math.random() * 3) + 1;
    return randomNumber;
  }
  var randomChosenColour = buttonColours[nextSequence()];

  gamePattern.push(randomChosenColour);
  console.log(gamePattern);

  playSound(`sounds/${gamePattern[level - 1]}.mp3`);
  animatePress(gamePattern[level - 1], 200);
}

function userGamePlay() {
  var userInputPattern = [];
  $(".btn").click(function () {
    userInputPattern.push(this.id);
    playSound(`sounds/${this.id}.mp3`);
    animatePress(this.id, 200);
    console.log(userInputPattern);

    if (userInputPattern.length === gamePattern.length) {
      if (JSON.stringify(gamePattern) === JSON.stringify(userInputPattern)) {
        console.log("win");
        userInputPattern = [];
        level++;
        $("#level-title").text(`Level ${level}`);
        setTimeout(() => {
          computer();
        }, 1000);
      } else {
        console.log("Lose");
        userInputPattern=[];
        endGame();
      }
    }
  });
}

function playSound(track, delay = 0) {
  setTimeout(() => {
    var audio = new Audio(track);
    audio.play();
  }, delay);
}

function animatePress(id, delay = 500) {
  $("#" + id).addClass("pressed");
  setTimeout(() => {
    $("#" + id).removeClass("pressed");
  }, delay);
}

$(document).keydown(function () {
  gamePattern = [];
  level = 1;
  $("#level-title").text("Level 1");
  $(".btn").prop("disabled", true).on('click');
  computer();
  
});
//computer();

function endGame() {
  playSound(`sounds/wrong.mp3`, 300);
  $("body").attr("class", "game-over");
  setTimeout(() => {
    $("body").attr("class", "body");
  }, 200);
  $("#level-title").text(`ohh No!!! Scrore:${level}. Press Any Key to Restart`);
  $(".btn").prop("disabled", true).off('click');
}

userGamePlay();

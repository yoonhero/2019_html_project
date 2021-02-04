function 클릭() {
  age = prompt('what is your age');
  document.getElementById('sometext').innerHTML = age;
}
function 리셋() {
  age = 'your age';
  document.getElementById('sometext').innerHTML = age;
}

function rps(yourChoice) {
  console.log(yourChoice);
  var humanChoice, botChoice;
  humanChoice = yourChoice.id;
  botChoice = numberToChoice(randToRpsInt());
  console.log('Computer choice:', botChoice);
  result = decideWinner(humanChoice, botChoice);
  console.log(botChoice);
  message = finalMessage(result);
  //rpsFrontEnd(yourChoice.id, botChoice, message);
}

function randToRpsInt() {
  return Math.floor(Math.random() * 3);
}

function numberToChoice(number){
  return ['rock', 'paper'. 'scissors'] [number]
}

function decideWinner(yourChoice, computerChoice) {
  var rpsDatabase = {
    'rock': {'scissors': 1, 'rock': 0.5, 'paper': 0},
    'paper': {'rock': 1, 'paper': 0.5, 'scissors': 0},
    'scissors': {'paper': 1, 'scissors': 0.5, 'rock': 0}
  };

  var yourScore - rpsDatabase[yourChoice] [computerChoice];
  var computerScore = rpsDatabase[computerChoice] [yourChoice];

  return [yourScore, computerScore]
}

function finalMessage([yourScore, computerScore]) {
  if (yourScore == 0) {
    return {'message': 'You lost!', 'color': 'red'};
  } else if (yourScore === 0.5) {
    return {'message': 'You tied!', 'color': 'yellow'};
  } else {
    return {'message': 'You won!', 'color': 'green'};
  }
}

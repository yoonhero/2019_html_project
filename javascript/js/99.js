
var score = 0;
var h = 0;

function 단(){
  while (h <= 10){
    var num1 = Math.floor(Math.random() * 10);
    var num2 = Math.floor(Math.random() * 10);
    var answer = prompt(num1 + '곱하기' + num2);
    var realanswer = num1 * num2;
    if (answer == realanswer) {
      alert('you are right');
      score += 1;
      h += 1;
    }
    else {
      alert("you aren't correct");
      h += 1;
    }
  }
}

document.getElementById('score').innerHTML = score;

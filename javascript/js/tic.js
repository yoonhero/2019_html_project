var 바디 = document.body;
var 테이블 = document.createElement('table');
var 칸들 = [];
var 줄들 = [];
var 턴 = 'X';
var 결과 = document.createElement('div');
var winner = 'what';
var name1 = '윤승현';
var name2 = '윤승현';

function o(){
  var name1 = prompt('당신의 이름은?');
}

function x(){
  var name2 = prompt('당신의 이름은?');
}


var 비동기콜백 = function(이벤트) {



  console.log(name1 + name2);
  console.log(이벤트.target);
  console.log(이벤트.target.parentNode);
  console.log(이벤트.target.parentNode.parentNode);

  var 몇줄 = 줄들.indexOf(이벤트.target.parentNode);
  console.log('몇줄', 몇줄);
  var 몇칸 = 칸들[몇줄].indexOf(이벤트.target);
  console.log('몇칸', 몇칸);


  if (칸들[몇줄][몇칸].textContent !== '') {
    console.log('빈칸아닙니다.');
  } else {
    console.log('빈칸입니다.');
    칸들[몇줄][몇칸].textContent = 턴;
    var 다참 = false;
    var 비김 = false;

    if (
      칸들[몇줄][0].textContent === 턴 &&
      칸들[몇줄][1].textContent === 턴 &&
      칸들[몇줄][2].textContent === 턴
    ) {
      다참 = true;
    }

    if (
      칸들[0][몇칸].textContent === 턴 &&
      칸들[1][몇칸].textContent === 턴 &&
      칸들[2][몇칸].textContent === 턴
    ) {
      다참 = true;
    }
    if (
      칸들[0][0].textContent &&
      칸들[0][1].textContent &&
      칸들[0][2].textContent &&
      칸들[1][0].textContent &&
      칸들[1][1].textContent &&
      칸들[1][2].textContent &&
      칸들[2][0].textContent &&
      칸들[2][1].textContent &&
      칸들[2][2].textContent
    ) {
      비김 = true;
    }

    if (몇줄 - 몇칸 === 0 || Math.abs(몇줄 - 몇칸) === 2) {
      if (
        칸들[0][0].textContent === 턴 &&
        칸들[1][1].textContent === 턴 &&
        칸들[2][2].textContent === 턴
      ) {
        다참 = true;
      }
    }
    if (몇줄 - 몇칸 === 0 || Math.abs(몇줄 - 몇칸) === 2) {
      if (
        칸들[0][2].textContent === 턴 &&
        칸들[1][1].textContent === 턴 &&
        칸들[2][0].textContent === 턴
      ) {
        다참 = true;
      }
    }

    if (다참) {
      if (턴 === 'X'){
        winner = name2;
      } else {
        winner = name1;
      }
      결과.textContent = winner + '님이 승리!';

      턴 = 'X';
      칸들.forEach(function (줄) {
        줄.forEach(function (칸) {
          칸.textContent = '';
        });
      });
    } else if (비김) {
      결과.textContent = '비기셨습니다.';
      턴 = 'X';
      칸들.forEach(function (줄) {
        줄.forEach(function (칸) {
          칸.textContent = '';
        });
      });
    } else {
      if (턴 === 'X') {
        턴 = 'O';
      } else {
        턴 = 'X';
      }
    }
  }
};

for (var i = 1; i <= 3; i += 1){
  var 줄 = document.createElement('tr');
  줄들.push(줄);
  칸들.push([]);
  for (var j = 1; j <= 3; j += 1) {
    var 칸 = document.createElement('td');
    칸.addEventListener('click', 비동기콜백);
    칸들[i - 1].push(칸);
    줄.appendChild(칸);
  }
  테이블.appendChild(줄);
}
바디.appendChild(테이블);
바디.appendChild(결과);
console.log(칸들);

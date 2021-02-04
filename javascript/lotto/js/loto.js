
var 생성 = false;

function 로또() {
  if (생성 === true) {
    for (i = 1; i < 8; i +=1) {
      var element = document.getElementById('myDIV');
      element.remove("mystyle");
    }
    생성 = false;
  }


  var 후보군 = Array(45)
    .fill()
    .map(function (요소, 인덱스) {
      return 인덱스 + 1;
    });
  console.log(후보군);

  var 셔플 = [];
  while (후보군.length > 0) {
    var 이동값 = 후보군.splice(Math.floor(Math.random() * 후보군.length), 1)[0];
    셔플.push(이동값);
  }
  console.log(셔플);

  var 보너스 = 셔플[셔플.length - 1];

  var 당첨숫자들 = 셔플
    .slice(0, 6)
    .sort(function (p, c) {
      return p - c;
    });

  console.log('당첨숫자들', 당첨숫자들, '보너스', 보너스);

  var 결과창 = document.querySelector('#결과창');
  div = document.createElement('div');

  function 공색칠하기(숫자, 결과창) {
    var 공 = document.createElement('div');
    공.textContent = 숫자;
    공.style.display = 'inline-block';
    공.style.borderRadius = '50px';
    공.style.width = '100px';
    공.style.height = '100px';
    공.style.textAlign = 'center';
    공.style.marginRight = '0px';
    공.style.fontSize = "60px";
    공.style.color = "white";
    공.className = 'mystyle';
    공.id = 'myDIV';
    var 배경색;
    if (숫자 <= 10) {
      배경색 = '#fbc400';
    } else if (숫자 <= 20) {
      배경색 = '#6ac7f2';
    } else if (숫자 <= 30) {
      배경색 = '#fc7576';
    } else if (숫자 <= 40) {
      배경색 = '#a8a8a8';
    } else {
      배경색 = '#add941'
    }
    공.style.background = 배경색;
    결과창.appendChild(공);
  }
  setTimeout(function 비동기콜백함수() {
    공색칠하기(당첨숫자들[0], 결과창);
  }, 800);
  setTimeout(function 비동기콜백함수() {
    공색칠하기(당첨숫자들[1], 결과창);
  }, 1600);
  setTimeout(function 비동기콜백함수() {
    공색칠하기(당첨숫자들[2], 결과창);
  }, 2400);
  setTimeout(function 비동기콜백함수() {
    공색칠하기(당첨숫자들[3], 결과창);
  }, 3200);
  setTimeout(function 비동기콜백함수() {
    공색칠하기(당첨숫자들[4], 결과창);
  }, 4000);
  setTimeout(function 비동기콜백함수() {
    공색칠하기(당첨숫자들[5], 결과창);
  }, 4800);

  setTimeout(function 비동기콜백함수() {
    var 칸 = document.querySelector('.보너스');
    공색칠하기(보너스, 칸);
    생성 = true;
  }, 5600);
}



var 숫자후보 = [1,2,3,4,5,6,7,8,9];
var 숫자배열 = [];
for (var i = 0; i < 4; i+=1){
  var 뽑은것 = 숫자후보.splice(Math.floor(Math.random() * (9 - i)), 1)[0];
  숫자배열.push(뽑은것);
}

console.log(숫자배열);

var 바디 = document.body;
var 결과 = document.createElement('h1');
바디.append(결과);
var 폼 = document.createElement('form');
document.body.append(폼);
var 입력창 = document.createElement('input');
입력창.type = 'number';
폼.append(입력창);
var 버튼 = document.createElement('button');
버튼.typeContent = '입력!';
폼.append(버튼);

폼.addEventListener('submit', function 비동기(이벤트) {
  이벤트.preventDefault();
  var 답 = 입력창.value;
  if (답 == 숫자배열.join('')) {
    결과.textContent = '홈런';
    입력창.value = '';
    입력창.focus();
    숫자후보 = [1,2,3,4,5,6,7,8,9];
    숫자배열 = [];
    for (var i = 0; i < 4; i+=1) {
      var 뽑은것 = 숫자후보.splice(Math.floor(Math.random() * (9 - i)), 1)[0];
      숫자배열.push(뽑은것);
    }
  } else {
    console.log('답이 틀리면', 답배열);
    var 답배열 = 답.split('');
    var 스트라이크 = 0;
    var 볼 = 0;
    for (var i = 0; i < 3; i += 1){
      if (답배열[i] == 숫자배열[i]) {
        console.log('같은자리?');
        스트라이크++;
      } else if (숫자배열.indexOf(Number(답배열[i])) > -1){
        console.log('겹치는 숫자?');
        볼 += 1;
      }
    }
    결과.textContent = 스트라이크 + '스트라이크' + 볼 + '볼입니다.';
    입력창.value = '';
    입력창.focus();
  }
});

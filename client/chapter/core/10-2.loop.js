/* -------------------- */
/* Do While Loop        */
/* -------------------- */

// let i = 0;
// do{
//   console.log(i);

//   i++;

// }while(i < 5);

// do ~ while 문 (역순환)
// - prompt 창을 띄워 사용자로 하여금 순환 횟수를 요청
// - 사용자로부터 요청된 횟수 만큼 역방향으로 순환 출력
// - 사용자로부터 요청된 횟수가 0보다 작을 경우,
//   '최초 실행된 메시지입니다. 이 메시지는 조건이 거짓이어도 볼 수 있습니다.' 출력
// - 순환 중단

// do ~ while 문 (순환)
// - 위 do ~ while 문을 순방향으로 순환되도록 설정

// html에 태그를 만들고 내가 원하는 태그에 스타일을 입히기 위해서 ( css -> class selector)
// html에 태그를 만들고 내가 원하는 태그를 동적 제어하기 위해서( js -> querySelector)
// querySelector를 사용했을 때 null이 변환이 된다면, html을 제대로 읽지 못한 상태입니다. 이럴 땐 defer를 사용해 스크립트의 실행을 늦춰주세요
// js를 사용해서 html에 접근하는 방식 (Document Object Model)

const first = document.querySelector('.first');

// const second = next(first);

// console.log(first);
// first.nextSibling.nextSibling.nextSibling.nextSibling

// let second= next(first);

// do{

//   second = second.nextSibling;

// }while(second.nodeType !== 1)

//   console.log(second);

function next(node) {
  // node가 문자면 아래 코드 실행
  // validation => type guard
  if (typeof node === 'string') {
    node = document.querySelector(node);
  }

  do {
    node = node.nextSibling;
  } while (node.nodeType !== 1);

  return node;
}

function prev(node) {
  // node가 문자면 아래 코드 실행
  // validation => type guard
  if (typeof node === 'string') {
    node = document.querySelector(node);
  }

  do {
    node = node.previousSibling;
  } while (node.nodeType !== 1);

  return node;
}
const _first = prev('.second');

const second = next('.first');

/* function NumOfDivisor(num) {
  if (typeof num !== 'number') {
    return ('숫자를 입력해주세요');
  }
  if(!(Number.isInteger(num) && num > 0)){
    return ('숫자는 자연수로 입력해주세요');
  }
  let count = 0;
  for (let i = 1; i <= Math.sqrt(num); i++) {
    if (num % i === 0) {
      if (i === num / i) {
        count += 1;
      } else {
        count += 2;
      }
    }
  } 
  return count;
} */

/* ------------------- */
/* Logical Operators   */
/* ------------------- */

let a = 10;
let b = '';
let value = Boolean(b);

// 논리곱(그리고) 연산자
let AandB = a && b;
console.log(AandB);

// Logical AND Assignment
// a &&= b;
// console.log(a);

// a = a && b;

// 논리합(또는) 연산자
let AorB = a || b;
console.log(AorB);

// a ||= b;
// 부정 연산자
let reverseValue = !value;
console.log(reverseValue);

// 조건 처리

// 첫번째 Falsy를 찾는 연산 (&&)
// let whichFalsy = true && ' ' && [] && { thisIsFalse: false };
// console.log(whichFalsy);

// // 첫번째 Truthy를 찾는 연산 (||)
// let whichTruthy = false || '' || [2, 3].length || { thisIsTruthy: true };

console.clear();
const str = prompt('누구세용?', '');

if (str?.toLowerCase() === 'admin') {
  const password = prompt('비밀번호가 그래서 몬데요?');

  if (password?.toLowerCase() === 'themaster') {
    alert('환영합니다!');
  } else if (password === null) {
    alert('취소되었습니다.');
  } else {
    alert('인증에 실패하였습니다.');
  }
} else if (str === null || str.replace(/\s*/g, '') === '') {
  alert('취소되었습니다.');
} else {
  alert('인증에 실패하였습니다.');
}

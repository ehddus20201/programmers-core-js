/* ---------------- */
/* Condition        */
/* ---------------- */

// 그 영화 봤니?
//     ↓
// Yes | No
//     | 영화 볼거니?
//           ↓
//       Yes | No

function WatchMovie() {
  // 영화 봤니?
  let didWatchMovie = confirm('너 진격의거인 영화 봤어?');
  console.log(didWatchMovie);

  if (didWatchMovie) {
    console.log('그 영화 재밌더라~ 역시');
  } else {
    let goingToWatchMovie = confirm('영화 보러 갈래?');
    if (goingToWatchMovie) {
      // 보러갈래
      console.log('그래 정말 재밌겠다!');
      let withWho = prompt('누구랑 볼거니??');
      if (withWho === '너') {
        // ...
        console.log('그래 좋아 같이 보자!');
      } else {
        console.log('그게 누군데 임마');
      }
    } else {
      // 안갈래
      console.log('나도 사실 별로야');
    }
  }
}

// 영화 볼거니?
let didWatchMovie = 'no';
let goingToWatchMovie = 'yes';

// 멀티 조건부 연산자 식
const message = didWatchMovie.includes('yes')
  ? '영화 재밌드라'
  : goingToWatchMovie.includes('yes')
    ? '언제보까'
    : '혼자 볼게,,';

console.log(message);
// if 문(statement)

// else 절(clause)

// else if 복수 조건 처리

// 조건부 연산자

/* const str = prompt("자바스크립트의'공식' 이름은 무엇일까요?", '');
if (str === 'ECMAScript') {
  alert('정답입니다!');
} else {
  alert('모르셨나요? 정답은 ECMAScript입니다!');
}


const num = prompt('숫자 하나를 입력해주세요');
if (num > 0) {
  alert(1);
} else if (num < 0) {
  alert(-1);
} else {
  alert(0);
} */

/* --------------------- */
/* Event Handling        */
/* --------------------- */


/* 이벤트 핸들링 3가지 방법 --------------------------------------------------- */

// 1. HTML 속성 : onclick="handler()"
// 2. DOM 프로퍼티 : element.onclick = handler
// 3. 메서드 : element.addEventListener(event, handler[, phase])

const first = getNode('.first');

first.onclick= () => {
  console.log('hitto');
  
}

function handler(e){
  console.log(e.offsetX, e.offsetY);
  
}


// first.addEventListener('wheel', handler);
first.addEventListener('click', handler);




/* 이벤트 추가/제거 --------------------------------------------------------- */

// - addEventListener
// - removeEventListener

const ground = getNode('.ground');
const ball = getNode('.ball')
function handleBall({offsetX:x, offsetY:y}) {

  // const {offsetX:x, offsetY:y}= e;

  // const x = e.offsetX;
  // const y = e.offsetY

  const w = ball.offsetWidth;
  const h = ball.offsetHeight
  // console.log(x,y);
  ball.style.transform = `translate(${x-(w/2)}px, ${y-(h/2)}px)`
  
}

ground.addEventListener('click',handleBall);

ground.addEventListener('mousemove',handleBall)







function handleMove(e){
  throttle(()=>{
  console.log(this,e);

  })

}
ground.addEventListener('mousemove',handleMove);


function debounce(f,limit = 1000){
 // 1초가 지나기 전에 실행시 타이머가 초기화됨 그래서 호출이 안됨 콘솔로그가 ㅇㅇ
  let timeout;
  return function(e){
    clearTimeout(timeout); 
    timeout = setTimeout(() => {
    f.call(this,e);
  },limit);     // 클 로저 활용해서 timeout 기억하기
  }
}




function throttle(f,limit = 1000){
let wait = false;

  return function(...args){
  if(!wait){
    f.apply(this,args);
    wait = true;
    setTimeout(() => {
      wait = false
      }, limit);
    }
  }
}


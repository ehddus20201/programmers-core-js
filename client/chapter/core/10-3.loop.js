/* ------------ */
/* For Loop     */
/* ------------ */




// let a =2;
// while(a<10){
//   a++;

//   if(a % 2!== 0) continue;

//   console.log(a);

// }


const frontEndDev = 'HTML CSS SVG JavaScript jQuery React Redux'.split(' ');

let i = 0;
let l = frontEndDev.length;

while(i < l) {
  // if(frontEndDev[i]==='SVG'||frontEndDev[i]==='jQuery'){
  //  i+=1; continue;
  // }
  // console.log(frontEndDev[i]);
  
  i += 1;
}


// while 문 → for 문 (순환)
// - 실행 흐름
// - 순환 중단 또는 이어서 순환
//   - 조건이 맞을 경우, 이어서(continue) 순환
//   - 조건: SVG, jQuery는 출력하지 마세요.

for(let i = 0; i < l; i++){
  const value = frontEndDev[i];
  const lower = value.toLowerCase();

  if(lower.includes('jquery')) break;

  console.log( value );
}



const arr = [...frontEndDev];





//   - 조건이 맞을 경우, 순환 중단(break)
//   - 조건: JavaScript 까지만 출력하세요.

for(let i =0; i<l; i++){
  console.log(frontEndDev.shift());
  
}
//   - 무한 루프 (브레이크)
//   - for 문 (역순환)
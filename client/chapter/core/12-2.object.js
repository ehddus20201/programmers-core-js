/* ------------------------- */
/* Copy object by reference  */
/* ------------------------- */


// 복사(copy) vs. 참조(reference)

let message = '문자 값은 프리미티브 데이터 타입으로 값이 복사됩니다.';
let messenger = {
  name: 'kakao talk',
  manufacture: 'kakao'
};

let text= message;
let conversationTool = messenger;


// 비교 (복사 vs. 참조)
console.log(message == text);
console.log(message === text);
console.log(messenger == conversationTool);
console.log(messenger === conversationTool);


// 객체 복사(얕은복사)
// 1. for ~ in 문을 사용한 복사

const cloneObject = {};
for(const key in messenger){
  cloneObject[key] = messenger[key];
}
console.log(cloneObject);

// 2. Object.assign()을 사용한 복사(얕은 복사)
const copyObject = Object.assign({},messenger);



// 3. 전개 연산자(...)를 사용한 복사(얕은복사)(얕은복사 중 가장 많이 사용)
const spreadObject = {...messenger};

// 4. 객체를 복사해주는 유틸 함수 
function copiedObject(obj){
  return Object.assign({},obj);
}
const _copiedObject = o =>Object.assign({},o);
// const _copiedObject = o => ({...o}); 스프레드신택스로 객체 리턴하는 화살표 함수


const o = copiedObject(messenger);


// Object mixin pattern

// 객체 병합(합성)
const cssMapA = {
  color: '#4b004b',
  margin: '0 auto',
};

const cssMapB = {
  display: 'flex',
  flexFlow: 'column',
  justifyContent: 'center',
  padding: '0.4em 0.62em',
  color: '#3f9e97',
};

let combinedCssMap = Object.assign({},cssMapA,cssMapB); // 2개 다 겹쳐있는게 있으면 뒤에게 우선순위를 가진다 그래서 컬ㄹ러가 B껄로 적용이 되어서 로그에 찍히는걸 알 수있음
console.log(combinedCssMap);

// let combinedCssMap = {...cssMapA,...cssMapB} (얕은복사)

// 중첩된 프로퍼티에 객체를 포함하는 객체 복사
// 얕은 복사 vs. 깊은 복사
const containerStyles = {
  'min-height': '100vh',
  'max-width': {
    sm: '90%',
    md: 640,
    lg: 960,
    xl: 1120,
    xxl: 1140
  },
};

let copiedContainerStyles= {
  ...containerStyles,
  // ['max-width']:{
  //   ...containerStyles['max-width']
  // }

}; // 얕은 복사는 min-height바꾸는건 따로 잘 바끼는데 max width는 제대로 복사가 안된다 {}로 감싸져있기때문에
// 2단계정도 복사는 아래 처럼 
  // ['max-width']:{
  //   ...containerStyles['max-width']
  // }
  // 요렇게 하면 된다


// 1. 깊은 복사 유틸리티 함수
function cloneDeep(object) {
  return Object.fromEntries(
    Object.entries(object).map(([key, value]) => {
      let type = typeof value;
      if (value && type === 'object') {
        value = cloneDeep(value);
      }
      return [key, value];
    })
  );
}

/* 
1. 참조에 의한 객체 복사 (객체나 배열은 전부다 참조 복삭가 됩니다.) 리액트 지양
2. 얕은 복사
3. 깊은 복사
 */

// 2. Lodash 라이브러리 활용
// _.cloneDeep(value)
// 참고: https://lodash.com/docs/4.17.15#cloneDeep
// CDN : https://cdn.jsdelivr.net/npm/lodash@4.17.21/lodash.min.js

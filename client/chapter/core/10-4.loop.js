/* ---------------- */
/* For In Loop      */
/* ---------------- */



const javaScript = {
  creator: 'Brendan Eich',
  createAt: '1995.05',
  standardName: 'ECMAScript',
  currentVersion: 2025,

};

Object.prototype.nickName = 'tiger'

// console.log("nickName" in javaScript);


// 객체의 속성(property) 포함 여부 확인 방법
// - 모든 객체가 사용 가능하도록 속성이 확장되었을 때 포함 여부 결과는?


// 객체 자신의 속성인지 확인하는 방법
// - "자신(own)의 속성(property)을 가지고있는지(has) 확인 방법"이 덮어쓰여질 수 있는 위험에 대처하는 안전한 방법은?
// console.log(javaScript.hasOwnProperty('nickName'));

// console.log(Object.prototype.hasOwnProperty.call(javaScript,'nickName'));
// console.log(({}).hasOwnProperty.call(javaScript,'nickName'));
// console.log(Object.hasOwn(javaScript,'nickName'));

// for ~ in 문
// - 객체 자신의 속성만 순환하려면?
// - 배열 객체 순환에 사용할 경우?
// for in 문은 객체를 순환하는 용도로 사용됨. => 원본 훼손 여지 => hasOwn
for( const key in javaScript ){

  // console.log(key);
  //if(Object.prototype.hasOwnProperty.call(javaScript,'key')){
  if(Object.hasOwn(javaScript,key)){
      
    const value = javaScript[key];
    // console.log(value);
    
      
  }
}
const tens = [10, 100, 1000, 10_000];

for(const key in tens){
  console.log(tens[key]);
  
}
// for in 을 사용해서 배열을 순환하면 순서를 보장하지 않기 때문에 위험하다
// 객체 순환을 사용해야한다




//enumerable 열거 가능한


const obj={};
obj.nickName = 'tiger'
console.log(obj);

Object.defineProperty(obj, 'age', {
  value:30,
  enumerable:true,  // 
  writable:true,  // 다시 할당해서 벨류를 바꿀 수있음
  configurable:false // 제거가 안되게끔 제거할려고하면 false 반환
})

// Object.definePropertys() // 여러가지 키값 다 만들기 가능

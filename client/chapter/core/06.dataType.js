/* ------------------------ */
/* Data Types               */
/* ------------------------ */

/* ECMAScript의 8가지 데이터 타입 -------------------------------------------- */

// 1. 존재하지 않는(nothing) 값 / 비어있는(empty) 값 / 알 수 없는(unknown) 값
let empty = null;
console.log(empty);
// 2. 값이 할당되지 않은 상태
let undef;

console.log(undef);

// 3. 따옴표를 사용해 묶은 텍스트(큰", 작은', 역`)
let str = 'asdf'; // string literal
let str1 = 'asdf';
let str2 = `asdf${1 + 2}`;
console.clear();

const str3 = new String('hello'); // 생성자 함수
console.log(str3);
// 4. 정수, 부동 소수점 숫자(길이 제약)
let int = 2;
let int1 = 1.231234;

const num = new Number(20);
console.log(num);

// 5. 길이에 제약이 없는 정수(예: 암호 관련 작업에서 사용)
let bigInt = 112321321541235136642613123n;

const k = BigInt(3);
console.log(k);

// 6. 참(true, yes) 또는 거짓(false, no)
let bool = false;
let tired = true;
const bool1 = new Boolean(false);

// 7. 데이터 컬렉션(collection) 또는 복잡한 엔티티(entity)

const _obj = {};
const newobj = new Object('f');

// 8. 고유한 식별자(unique identifier)
const id2 = Symbol('idd');
const id1 = Symbol('idd');
console.log(id1 === id2);

/* typeof 연산자의 2가지 사용법 ---------------------------------------------- */

// 1) 연산자 typeof
console.log(typeof 12354n);
// 2) 함수 typeof()
typeof (1 + 34);

// 언어 상, 오류
typeof null; // object 로 출력된다
// Object

/* 
1. nomal function method
2. arrow function method -> 객체의 메서드로 잘 사용되지 않는다 왜냐하면 this를 잘 못찾기 때문 this 를 바인딩하지 않는다
3. concise method 이친구를 가장 많이 쓴다!!
 */
console.clear();

const obj = {
  name: 'tiger',
  age: 30,
  sayHi: function () {
    console.log('hello');
  },
  sayHi2: () => {
    console.log('asd');
  },
  sayHi3() {
    console.log('hello');
  },
};

console.log(_obj);

// Array
const set = [1, 22, 3];
console.log(set.length);
// const _arr = new Array([]);

// function
function def() {
  console.log('a 함수가 실행됐습니다');
}

def();
const f = new Function('asdf');
console.log(f);

// 일반함수 -> this : 나를 호출한 대상

// 화살표 함수 (arrow function) : this 를 바인딩하지 않습니다. (상위 컨텍스트에서 this를 찾습니다)

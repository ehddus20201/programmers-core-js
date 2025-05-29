/* ------------------------ */
/* Data Types               */
/* ------------------------ */

/* ECMAScript의 8가지 데이터 타입 -------------------------------------------- */

// 1. 존재하지 않는(nothing) 값 / 비어있는(empty) 값 / 알 수 없는(unknown) 값
let empty = null;
console.log(empty);
// 2. 값이 할당되지 않은 상태

// 3. 따옴표를 사용해 묶은 텍스트(큰", 작은', 역`)
let str = 'asdf';
let str1 = 'asdf';
let str2 = `asdf${1 + 2}`;
// 4. 정수, 부동 소수점 숫자(길이 제약)
let int = 2;

// 5. 길이에 제약이 없는 정수(예: 암호 관련 작업에서 사용)
let bigInt = 112321321541235136642613123n;

// 6. 참(true, yes) 또는 거짓(false, no)
let bool = false;
let tired = true;

// 7. 데이터 컬렉션(collection) 또는 복잡한 엔티티(entity)

// 8. 고유한 식별자(unique identifier)

/* typeof 연산자의 2가지 사용법 ---------------------------------------------- */

// 1) 연산자 typeof
console.log(typeof 12354n);
// 2) 함수 typeof()
typeof (1 + 34);

// 언어 상, 오류
typeof null; // object 로 출력된다
// Object

// Array

// function

// this

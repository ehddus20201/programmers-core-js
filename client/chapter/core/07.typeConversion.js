/* --------------------- */
/* Type Conversion       */
/* --------------------- */

/* 데이터 → 문자 ----------------------------------------------------------- */

// number
const YEAR = 2025;
console.log(String(YEAR));
console.log(+YEAR);

// undefined, null

let days = null;
console.log(days + '');
let undef;
console.log(undef + '');

// boolean
let isCliked = false;
console.log(String(isCliked));

/* 데이터 → 숫자 ----------------------------------------------------------- */

// undefined
let friend;
console.log(Number(friend));

// null
let money = null;
console.log(money * 1);
console.log(money / 1);
console.log(+money);

// boolean
let isActive = true;
console.log(isActive * 1);

// string
let num = '100';

console.log(num * 1);

// numeric string
const width = '120.5px';

console.log(parseInt(width, 10));
console.log(parseFloat(width, 10) + 10 + 'px');

/* 데이터 → 불리언 ---------------------------------------------------------- */

// null, undefined, 0, NaN, ''
// 위에 나열한 것 이외의 것들
console.clear();
console.log(Boolean(friend));
console.log(Boolean(0));

console.log(Boolean('0'));
console.log(!!{});
console.log(!![false]);
console.log(Boolean(() => {}));

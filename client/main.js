


/* 


1. input 선택하기
    - getNode or querySelector

2. input 이벤트 바인딩
    - addEventListener('input') 

3. input의 value 값 가져오기
    - input.value

4. 숫자값 더하기
    - value1 + value2

5. result에 출력하기 
    - insertLast or insertAdjacentHTML

6. clear 클릭시 모든 값 초기화

    named export    => import {getNode} from  '../...js'
    default export => import clearContents from '../...js' 이름은 아무거나 가능
    왜냐하면 이제 디폴트 이그솦트는 하나만 전달하기떄문에

*/

import {
    getNode as $,
    insertLast,
    clearContents,
} from "./lib/index.js";

// import clearContents from "./lib/dom/clearContents.js"



// import { getNode } from "./lib/dom/getNode.js";
// import { clearContents } from './lib/dom/clearContents.js'
// import { insertLast } from './lib/dom/insert.js'


const first = $('#firstNumber');
const second = $('#secondNumber');
const result = $('.result');
const clear = $('#clear');



function handleInput(){
  const firstValue = +first.value;
  const secondValue = Number(second.value);
  const total = firstValue + secondValue;


  // result.textContent = '';
  clearContents(result)

  insertLast(result,total);
  
}

function handleClear(e){
  e.preventDefault();

  // first.value = ''
  // second.value = ''
  clearContents(first)
  clearContents(second)

  result.textContent = '-'
  first.focus()
}

first.addEventListener('input',handleInput);
second.addEventListener('input',handleInput);
clear.addEventListener('click',handleClear);
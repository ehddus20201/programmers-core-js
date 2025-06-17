import { diceAnimation, getNode, attr, insertLast } from './lib/index.js';

const [rollingButton, recordButton, resetButton] = document.querySelectorAll('.buttonGroup button');

const recordListWrapper = getNode('.recordListWrapper')


let count = 0;
let total = 0;


function createItem(value){
  return `
    tr>
      <td>${++count}</td>
      <td>${value}</td>
      <td>${total += value}</td>
    </tr>
    `
    
}

function renderRecordItem(){
  const dicenumber = +attr('#cube','dice');
  console.log(dicenumber);
  
  



    insertLast('tbody',createItem(dicenumber));
    recordListWrapper.scrollTop = recordListWrapper.scrollHeight;
}


const handleRollingDice = (()=>{

  let isClicked = false;
  let id;

  return ()=>{
  if(!isClicked){
    id= setInterval( diceAnimation, 100);
    recordButton.disabled = true;
    resetButton.disabled = true;
    
  
  }else{
    clearInterval(id);
    recordButton.disabled = false;
    resetButton.disabled = false;

    
  }
  isClicked = !isClicked;
  };
})()

function handleRecord(){
  recordListWrapper.hidden = false;
  renderRecordItem();
}

function handlereset() {
  recordListWrapper.hidden = true;
  
}



rollingButton.addEventListener('click',handleRollingDice);
//1 주사위 ㅋ굴리기 버튼
// 2 클릭 이벤트 바인딩
// 셋 인터벌 함수로 diceAnimation 이 굴러가도록

recordButton.addEventListener('click',handleRecord);
resetButton.addEventListener('click',handlereset);


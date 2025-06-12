



function earth(){

  let water = true;

  let gravity =10;

  function tiger(value){
      water = value;

  }

  return tiger;
}

const ufo = earth();


ufo(false);


// 그래서 어따가 써요??

const button = document.querySelector('.btn');
// IIFE 즉시 실행 함수를 실행하면 핸들 클릭함수를 굳이 이벤트 리스너 안에서 실행해줄 필요가 없다.

const handleClick = (() =>{

  let isClicked = false;
  return () => {
    
    if(!isClicked){
    document.body.style.background = 'orange'

    }else{
      document.body.style.background = 'white'
    }
    isClicked = !isClicked;
  }
  
  
})()

//button.addEventListener('click',handleClick)
// 이벤트 옆에 붙이는 함수는 핸들을 앞에 붙여주는게 관례
//document.querySelector('.first').addEventListener('click',()=>{
//  button.removeEventListener('click',handleClick);
//})


function bindEvent(node,eventType,fn){
  if(typeof node === 'string') node = document.querySelector(node);

  node.addEventListener(eventType,fn)

  return () => node.removeEventListener(eventType,fn)

}


const remove = bindEvent('.first','click',handleClick)

remove();



function useState(init){
  let value = init;

  function read(){
    return value
  }

  function write(newValue){
    value = newValue;
  }
  return [read,write];
}

const [value,setValue] = useState('hello');



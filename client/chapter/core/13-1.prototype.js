/* ----------------------------- */
/* Prototype and inheritance     */
/* ----------------------------- */

// 프로토타입 상속(prototypal inheritance)을 사용하여 객체를 확장합니다.

// 여러가지 동물들을 키우는 게임 : 고양이,강아지,호랑이,사자,늑대,여우


const animal = {
  legs:4,
  tail:true,
  get eat(){ // getter
    return this.stomach
  },
  set eat(food){// setter
    this.stomach = [];
    this.stomach.push(food);
  }
}

const tiger = {
  pattern: '호랑이 무늬',
  hunt(target){
    this.prey = target;
    this.eat = this.prey;
    return `${target}에게 조용히 접근한다.`
  },
  __proto__: animal
}



const 백두산호랑이 = {
  name:'백돌이',
  color: 'white',
  __proto__: tiger,
}
//백두산호랑이.__proto__ = tiger; 와 똑같음! 


const 한라산호랑이 = {
  name:'한돌이',
  color: 'orange',
  __proto__: tiger,
}


// 생성자 함수 (object constructor function) =>무조건 객체

function Animal(){
  this.legs = 4;
  this.tail = true;
  this.getEat = function (){
    return this.stomach ?? [];
  }
  this.setEat = function (food){
    this.stomach = [];
    this.stomach.push(food);
  }
}

const _animal = new Animal();

function Tiger(name){
  Animal.call(this) // this 는 _tiger
  this.name = name;
  this.pattern = '호랑이무늬';
  this.hunt = function(target){
    this.prey = target;
    return `${target}에게 조용히 접근한다`
  }

}

Tiger.prototype = _animal;

const _tiger = new Tiger('호돌이')















// function instance method
//f.call
//f.apply
//f.bind


function sum(a,b){
  console.log(this);
  return a+b;
  
}
// console.log(sum(1,2));
const _call = sum.call('hello',10,20) // 이러면 30이 나온다



const _apply = sum.apply({},[10,20]) // 배열로 전달해줘야함

const _bind = sum.bind({},20,30) // 함수 실행하지 않고 본문을 저장함.
// 함수를 실행할려면 바인드를 실행시켜야한다
// 바인드는 this를 묶어둘수있다

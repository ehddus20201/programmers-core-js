/* ----------------------------- */
/* Classes                       */
/* ----------------------------- */

// const { truncate } = require("graceful-fs");

// 앞서 함수로 정의한 내용들을 class문법을 사용해 재정의 합니다.


class Animal{
  legs = 4;
  tail = true;
  // #nickName = 'tiger';

  constructor(name){ // 최초 1회만 실행

    this.name = name;
    this.stomach = [];
  }

  get eat(){
    return this.stomach
  }

  set eat(food){
    this.stomach.push(food);
    // return `${#nickName}`
  }

}

const animal = new Animal('몽실이');




class Tiger extends Animal{

  constructor(){
    super(name);
    this.pattern = '호랑의 무늬';
  }

  hunt(target){
    this.prey = target;
    return `${target}에게 조용히 접근한다.`
  }

  static bark(sound){
    return sound + 'hihi';
  }
}

const tiger = new Tiger('호돌이');
// 스태틱 하면 tiger.bark 를 하면 안되는데 
// Tiger.bark 하면 접근가능 스태틱 메서드 이기 때문에
/* 
1. 버튼 선택
2. textContent 수정
3. 클릭 이벤트 바인딩
4. 태그 생성하기
5. 태그 렌더링하기
*/

class Button {
    constructor({target, content}){
      
      this.button = document.querySelector(target);
      this.button.textContent = content;
      this.attachEvent();
    }
    createTag(){
      return `<div>clicked</div>`
    }

    #render(){
      document.body.insertAdjacentHTML('beforeend',this.createTag())
    }

    handleClick(){
      this.#render();
      // console.log(this);
      
      
    }
    attachEvent(){
      this.button.addEventListener('click',()=>this.handleClick);
    }
}


const btn = new Button({
  target: '.btn',
  content: 'click me!'
});




class User {
  #pw;
  constructor(id,pw){
    this.id = id;
    this.#pw = pw;
  }
  hashPassword(pw){
    this.#pw = `hashCODE ${pw} 소금 후추`
    return this.#pw
  }

  checkPassword(pw){
    return this.#pw === this.hashPassword(pw);
  }

}
const user = new User('타이거', '헬로우123');

class Admin extends User{

  constructor(id,pw){
    super(id,pw);
    this.role = 'admin';
  }
  isAdmin(){
    return true;

  }
  banUser(user){
    console.log(`${user.id}계정이 ${this.id}에 의해 정지되엉씁니다`);
    user.isBanned =true;
  }
}

const admin = new Admin('admin','admin');




let guestCount =1;

class Guest extends User{

  constructor(){
    const guestId = `guest_${++guestCount}`;
    super (guestId,null);
    this.role = 'guest';
  }

  isGuset(){
    return true;
  }
  checkPassword(){
    return false;
  }
}




















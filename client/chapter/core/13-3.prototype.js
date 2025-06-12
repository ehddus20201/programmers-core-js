class Todo{
  todoListArray=[];
  constructor({input,button,renderPlace}){
    this.button = document.querySelector(button);
    this.input = document.querySelector(input);
    this.renderPlace = document.querySelector(renderPlace);
    
    this.attachEvent();
    // this.button
  }


  get currentInputTodoData(){
    return this.input.value;
  }
  set currentInputTodoData(value){
    this.input.value = value;
  }

  addTodoData(){
    if(this.currentInputTodoData==='') return 

    this.todoListArray.push(this.currentInputTodoData);
  }

  createTag(){
    return `<li>${this.currentInputTodoData}</li>`
  }
  #render(){
    if(this.currentInputTodoData==='') return 
    this.renderPlace.insertAdjacentHTML('beforeend',this.createTag())
    this.currentInputTodoData = '';
  }
  handleClick(){
      console.log(this.createTag());
      this.#render();
  }

  attachEvent(){
      this.button.addEventListener('click',(e)=>{
        e.preventDefault();
        this.addTodoData();
        this.handleClick();
    })
  }
}

const todo = new Todo({
  input:'.todoInput',
  button:'.todoButton',
  renderPlace:'.todolist'
})


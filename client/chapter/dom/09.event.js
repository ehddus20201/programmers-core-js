/* ------------------------ */
/* Event delegation         */
/* ------------------------ */

const nav = document.querySelector('.navigation');
const links = document.querySelectorAll('a');


nav.addEventListener('click', (e)=>{
  e.preventDefault();

  const target = e.target.closest('li');
  
  if(target.classList.contains('about')){
    console.log('hit');
    

  }
  
})

/* 클래스를 사용한 위임 ---------------- */


/* 속성을 사용한 위임 ------------------ */


/* 노드를 사용한 위임 ------------------ */
/* --------------------------------- */
/* DOM traversal                     */
/* --------------------------------- */

/* 모든 노드에서 사용 */
// - parentNode
// - childNodes
// - firstChild
// - lastChild
// - previousSibling
// - nextSibling

/* 요소 노드에서만 사용 가능 */
// - parentElement
// - children
// - firstElementChild
// - lastElementChildj
// - previousElementSibling
// - nextElementSibling

const first = document.querySelector('.first');

// console.log(document.body.firstElementChild);


/* 문서 대상 찾기 */
// - getElementById
// - getElementsByTagName
// - getElementsByClassName
// - querySelector
// - querySelectorAll
// - closest

/* 문서 대상 확인 */
// - matches
// - contains
const nav = document.querySelector('nav');

console.log(document.querySelector('nav'));

const about = nav.querySelector('.about');
console.log(about);

// console.log(nav.querySelector('?'));
const contact = nav.querySelector('li[data-name="contact"]')


const children = nav.querySelectorAll('*');
const _children = [...nav.children];
console.log(_children);

console.log(children);


_children.forEach((li)=>{
  // console.log(li);/
  
})


const li = _children.find((li)=> li.matches('.about'));

console.log(li);



// function getNode(node,context = document){
//   if(context.nodeType!== 9 ) context = document.querySelector(context);
//    // 그냥 넣으면 문자열 이거 찾아봐
//   return context.querySelector(node);
// } // 재귀함수로도 가능하대 저 이프문 = 오른쪽을 겟노드로

getNode('.about','nav');

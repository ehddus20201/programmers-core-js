import { getNode } from './getNode.js'
import { isString, isObject,isArray } from '../utils/type.js'


//JSDoc

/**
 * @function DOM Element에 클래스를 추가하는 함수
 * @author 나야
 * @param {HTMLElement | string} node
 * @param {string| string[]| object} className
 * @return {void}
 */

export function addClass(node,className){

  if(isString(node)) node = getNode(node);

  if(className.includes(',')){
    className = className.replace(/\s*/ ,'').split(',');
  }

  if(isObject(className)){
    className = Object.values(className);
    
  }

  if(isArray(className)) {
    className.forEach(i => {
      node.classList.add(i)
    });
    return;
  }
  
  node.classList.add(className);
}




/**
 * 
 * @param {HTMLElement | string} node 
 * @param {string} className 
 * @returns {void}
 */

export function removeClass(node,className){
  if(isString(node)) node = getNode(node); // 이줄 왜 하는건지 알아보기
  if(!className){
    node.className = '';
  }
  node.classList.remove(className);
}




/**
 * 
 * @param {HTMLElement | string} node 
 * @param {string} className 
 * @returns {boolean} - 추가 true , 제거 false
 */



export function toggleClass(node,className){
  if(isString(node)) node = getNode(node);
  return node.classList.toggle(className);
}
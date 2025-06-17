import { getNode  } from "./getNode.js";
import { isString  } from "../utils/type.js";



export default function clearContents(node){
  if(isString(node)) node = getNode(node);
  node.textContent = '';

  if(node.nodeName=== 'INPUT' || node.nodeName === 'TEXTAREA'){
    node.value =''
    return;
  }
}
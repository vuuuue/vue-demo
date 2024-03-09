import _ from 'lodash';
import './style.css'
import Icon from './icon.png'
import Data from './data.xml';
import Notes from './data.csv';

function component() {
  const element = document.createElement('div');

  // 执行这一行需要引入 lodash（目前通过 script 脚本引入）--不在需要
  // lodash 现在使用 import 引入
  element.innerHTML = _.join(['Hello', 'webpack'], ' ');
  element.classList.add('hello');

  // 将图像添加到已经存在的 div 中。
  const myIcon = new Image();
  myIcon.src = Icon;

  element.appendChild(myIcon);

  console.log(Data);
  console.log(Notes);

  return element;
}

document.body.appendChild(component());
// 引入css文件
import './style.css';

// 写入到html的内容
var element = document.createElement("div");
element.innerHTML = `<div class="red">hellos webpack</div>`;

document.body.appendChild(element);
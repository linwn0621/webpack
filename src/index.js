// 引入css文件
import './style.css';
// 引入less文件
import './style1.less';
// 映入图片
import img from './images/美女.jpg';

// 写入到html的内容
var element = document.createElement("div");
element.innerHTML = `<div class="box">你好<span>hellos webpack</span>
<img src = "${img}">
</div>`;

document.body.appendChild(element);
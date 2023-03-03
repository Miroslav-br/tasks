import "./index.css";
import Js_img from "../../1.Rollup/assets/1637185052_javascript6-compressed.jpg"

const imageJS = document.createElement('img')
imageJS.className = 'js_image'
imageJS.src = Js_img

const div = document.createElement('div')
div.className = 'test'

document.body.append(div,imageJS);

console.log('Hello world');

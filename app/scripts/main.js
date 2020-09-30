import * as Alias from "../scripts/Alias.js";
let type = "WebGL";
if(!PIXI.utils.isWebGLSupported()) {
    type = "canvas";
}
PIXI.utils.sayHello(type);

let app = new Alias.Application({width:700, height:800});

app.renderer.backgroundColor = 0x000000;

alert("Hello World");

app.renderer.view.style.position = "absolute";          // Set the position of the background
app.renderer.view.style.display = "block";              // Set how the background is displayed
app.renderer.autoResize = true;                         // Allow resizing of the window
app.renderer.resize(window.innerWidth, window.innerHeight);         // Set the size to be fullscreen

document.body.appendChild(app.view);
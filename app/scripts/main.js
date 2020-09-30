// Imports
import * as PIXI from 'pixi.js';

// Setup the application
let type = "WebGL";
if(!PIXI.utils.isWebGLSupported()) {
    type = "canvas";
}
PIXI.utils.sayHello(type);

// Create the application window
let App = new PIXI.Application({width:800, height:800});

app.renderer.backgroundColor = 0x000000;

app.renderer.view.style.position = "absolute";          // Set the position of the background
app.renderer.view.style.display = "block";              // Set how the background is displayed
app.renderer.autoResize = true;                         // Allow resizing of the window
app.renderer.resize(window.innerWidth, window.innerHeight);         // Set the size to be fullscreen


document.body.appendChild(App.view);

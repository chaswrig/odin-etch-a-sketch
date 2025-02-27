let size = 16;
let totalPixels = size*size;
let pixelWidth = (800/size) + "px";

const surface = document.querySelector("#surface");
createPixels();

const pixelButton = document.querySelector("#pixels");
pixelButton.addEventListener("click", () => {
    eraseSurface();
    size = Number.parseInt(prompt("Enter a value from 16 to 100.", "16"));
    if(size >= 16 && size <= 100){
        pixelWidth = (800/size) + "px";
    totalPixels = size * size;
    createPixels();
    }
});

const eraseButton = document.querySelector("#eraser");
eraseButton.addEventListener("click", () => {
    eraseSurface();
    createPixels();
});

const rainbowButton = document.querySelector("#rainbow");
rainbowButton.addEventListener("click", () => rainbowMode());

function eraseSurface(){
    const oldPixels = document.querySelectorAll(".pixel");
    oldPixels.forEach(oldPixel => oldPixel.remove());
};

function createPixels(){
    for(let i = 1; i <= totalPixels; i++) {
        const div = document.createElement("div");
        div.classList.add("pixel");
        div.style.width = pixelWidth;
        div.style.height = pixelWidth;
        div.addEventListener("mouseenter", () => {
            div.style.backgroundColor = "black";
        });
        surface.appendChild(div);
    }
};

function rainbowMode(){
    const oldPixels = document.querySelectorAll(".pixel");
    oldPixels.forEach(oldPixel => {
        let randomColor_r = Math.floor(Math.random()*256) + 1;
        let randomColor_g = Math.floor(Math.random()*256) + 1;
        let randomColor_b = Math.floor(Math.random()*256) + 1;
        oldPixel.addEventListener("mouseenter", () => {
            oldPixel.style.backgroundColor = "rgb(" + randomColor_r + ", " + randomColor_g + ", " + randomColor_b + ")";
        });
    })
}
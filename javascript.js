let size = 16;
let totalPixels = size*size;


const surface = document.querySelector("#surface");
createPixels();

const pixelButton = document.querySelector("#pixels");
pixelButton.addEventListener("click", () => {
    //TODO -- CHANGE PIXEL COUNT AND SIZE
});

const eraseButton = document.querySelector("#eraser");
eraseButton.addEventListener("click", () => {
    eraseSurface();
    createPixels();
});

function eraseSurface(){
    const oldPixels = document.querySelectorAll(".pixel");
    oldPixels.forEach(oldPixel => oldPixel.remove());
};

function createPixels(){
    for(let i = 1; i <= totalPixels; i++) {
        const div = document.createElement("div");
        div.classList.add("pixel");
        div.addEventListener("mouseenter", () => {
            div.style.backgroundColor = "black";
        });
        surface.appendChild(div);
    }
};
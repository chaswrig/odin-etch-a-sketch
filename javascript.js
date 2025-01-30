let size = 16;
let totalPixels = size*size;

const surface = document.querySelector("#surface");

const pixelButton = document.querySelector("#pixels");
pixelButton.addEventListener("click", () => {
    for(let i = 1; i <= totalPixels; i++) {
        const div = document.createElement("div");
        div.classList.add("pixel");
        div.addEventListener("mouseenter", () => {
            div.style.backgroundColor = "black";
        });
        surface.appendChild(div);
    }
});
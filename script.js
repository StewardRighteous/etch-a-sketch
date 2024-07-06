const container = document.querySelector("div.container");
const box = []; 

for(let i=0; i<256; i++){
    box[i] = document.createElement("div");
    box[i].className = "box";
    container.appendChild(box[i]);
}
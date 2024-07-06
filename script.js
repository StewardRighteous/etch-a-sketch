const container = document.querySelector("div.container");
const box = [];

function sketchPad(boxPerRow){
    let totalBox = boxPerRow * boxPerRow;
    
    for(let i=0; i<totalBox; i++){
        box[i] = document.createElement("div");
        box[i].className = "box";
        container.appendChild(box[i]);
    }
    const grid = container.childNodes;
    grid.forEach((box)=>{
        box.addEventListener("mouseover", (event)=>{
            event.target.className = "select";
        })
    });
}



function newSketchPad(){
    const boxWidth = document.querySelector("div.box");
    boxPerRow = prompt("ENTER SIZE FOR GRID: ");
    boxWidth.style.width = `calc(100% * 1/${boxPerRow})`;
    removeAllElements();
    sketchPad(boxPerRow);
}

function removeAllElements(){
    let noOfElements = box.length;
    for(let i=0; i< noOfElements; i++){
        container.removeChild(box[i]);
    }
}

sketchPad(16);

const container = document.querySelector("div.container");
const box = [];

function sketchPad(boxPerRow){
    let totalBox = boxPerRow * boxPerRow;
    
    // Formula to align a particular number of boxes in a Row
    let width = `calc(100% * (1/${boxPerRow}))`; // 100% in formula refers to fixed width 960px [check CSS container]

    // Creating boxes for the given grid
    for(let i=0; i<totalBox; i++){
        box[i] = document.createElement("div");
        box[i].className = "box";
        box[i].style.setProperty('width', width);
        container.appendChild(box[i]);
    }

    //Detecting selected boxes and changing color on them
    const grid = container.childNodes;
    grid.forEach((box)=>{
        box.addEventListener("mouseover", (event)=>{
            event.target.className = "select";
        })
    });
}

function newSketchPad(){
    let boxPerRow = prompt("ENTER SIZE FOR GRID: ");
    // Check for right value
    if(boxPerRow >100){
        boxPerRow = 100;
    }else if(boxPerRow<=0){
        boxPerRow = 1;
    }
    removeAllElements();
    sketchPad(boxPerRow);
}

// Removing already existing elements from grid to create new
function removeAllElements(){
    let noOfElements = box.length;
    for(let i=0; i< noOfElements; i++){
        container.removeChild(box[i]);
    }
}

sketchPad(16);

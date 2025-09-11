const container = document.getElementById("container");
let numRows = 32;
const divs = (numRows * numRows);
const button = document.getElementById("divNumBtn")
const btn = document.getElementById('clearCanvas');
const root = document.documentElement;
let grid = document.querySelectorAll('.gridItem');

const paletteDiv = document.getElementById('colorPalette'); 

const blackBtn = document.getElementById("blackBtn");
const whiteBtn = document.getElementById("whiteBtn");
const pinkBtn = document.getElementById("pinkBtn");
const purpleBtn = document.getElementById("purpleBtn");
const blueBtn = document.getElementById("blueBtn");
const lilacBtn = document.getElementById("lilacBtn");
const yellowBtn = document.getElementById("yellowBtn");

var color = "color";




blackBtn.onclick = function() {
    color = "black";
};

whiteBtn.onclick = function() {
    color = "white";
};

pinkBtn.onclick = function() {
    color = "pink";
};

purpleBtn.onclick = function() {
    color="purple";
};

lilacBtn.onclick = function() {
    color="lilac";
};

blueBtn.onclick = function() {
    color = "blue";
};

yellowBtn.onclick = function() {
    color = "yellow";
};




for (let i=0; i < divs; i++) {
    const newDiv = document.createElement('div');
    newDiv.classList.add('gridItem');
    container.appendChild(newDiv); 
}

function colorSketch(){
    let grid = document.querySelectorAll('.gridItem');
    grid.forEach((gridCell)=> {
        gridCell.addEventListener("click", ()=> {

            gridCell.classList.add(color);
        });
    });
}


 
btn.addEventListener("click", function() {
    let grid = document.querySelectorAll('.gridItem');
    grid.forEach((gridCell)=> {
        gridCell.classList.remove("color");
        gridCell.classList.remove("black");
        gridCell.classList.remove("white");
        gridCell.classList.remove("pink");
        gridCell.classList.remove("yellow");
        gridCell.classList.remove("blue");
        gridCell.classList.remove("purple");
        gridCell.classList.remove("lilac");
       
     });

    
});


button.addEventListener("click", function() {


   let input = prompt("Choose a number between 16 and 100:");

        if (input !== null) { 
            let number = parseFloat(input);

            if (isNaN(number)) {
                alert("Invalid input. Please enter a valid number.");
               
            } else if (input > 100) {
                alert("Invalid input. Please enter a valid number.");
                
            } else {

                const gridToClear = document.querySelectorAll('.gridItem');
                gridToClear.forEach(gridItem => {
                    gridItem.remove();
                })
                
                let numRows = input;
                
               
                root.style.setProperty('--gridDivs', input);

                let divs = (input ** 2);

                console.log(input);
                console.log(numRows);
                console.log(numRows * numRows);
                console.log(divs);

                for (let i=0; i < divs; i++) {
                const newDiv = document.createElement('div');
                newDiv.classList.add('gridItem');
                container.appendChild(newDiv); 
                }
                
                colorSketch();
            }
        } else {
            alert("Cancelled.");
        }     
   });

 

   colorSketch();












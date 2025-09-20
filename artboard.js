const container = document.getElementById("container");
let numRows = 32;
const divs = (numRows * numRows);
const gridBtn = document.getElementById("divNumBtn")
const clearBtn = document.getElementById('clearCanvas');
const root = document.documentElement;
let grid = document.querySelectorAll('.gridItem');

let isMouseDown = false;

document.addEventListener('mousedown', () => {
    isMouseDown = true;

});

document.addEventListener('mouseup', () => {
    isMouseDown = false;

});


const paletteDiv = document.getElementById('colorPalette'); 

const pencilBtn = document.getElementById("pencilBtn");
const eraserBtn = document.getElementById("eraserBtn");

const blackBtn = document.getElementById("blackBtn");
const whiteBtn = document.getElementById("whiteBtn");
const pinkBtn = document.getElementById("pinkBtn");
const pastelPinkBtn = document.getElementById("pastelPinkBtn");
const darkPinkBtn = document.getElementById("darkPinkBtn");
const litePinkBtn = document.getElementById("litePinkBtn");
const pastelPurpleBtn = document.getElementById("pastelPurpleBtn");
const darkPurpleBtn = document.getElementById("darkPurpleBtn");
const purpleBtn = document.getElementById("purpleBtn");
const litePurpleBtn = document.getElementById("litePurpleBtn");
const blueBtn = document.getElementById("blueBtn");
const liteBlueBtn = document.getElementById("liteBlueBtn");
const tealBtn = document.getElementById("tealBtn");
const liteTealBtn = document.getElementById("liteTealBtn");
const orangeBtn = document.getElementById("orangeBtn");
const yellowBtn = document.getElementById("yellowBtn");

var color = "color";

pencilBtn.onclick = function () {
    color = "color"
}

eraserBtn.onclick = function () {
    color = "eraser"
}

blackBtn.onclick = function() {
    color = "black";
};

whiteBtn.onclick = function() {
    color = "white";
};

darkPinkBtn.onclick = function() {
    color = "darkPink";
};

pastelPinkBtn.onclick = function() {
    color = "pastelPink";
};

litePinkBtn.onclick = function() {
    color = "litePink";
};

pinkBtn.onclick = function() {
    color = "pink";
};

purpleBtn.onclick = function() {
    color="purple";
};

darkPurpleBtn.onclick = function() {
    color="darkPurple";
};
pastelPurpleBtn.onclick = function() {
    color="pastelPurple";
};
litePurpleBtn.onclick = function() {
    color="litePurple";
};

blueBtn.onclick = function() {
    color = "blue";
};

liteBlueBtn.onclick = function() {
    color = "liteBlue";
};

orangeBtn.onclick = function() {
    color = "orange";
};

yellowBtn.onclick = function() {
    color = "yellow";
};

tealBtn.onclick = function() {
    color = "teal";
};

liteTealBtn.onclick = function() {
    color = "liteTeal";
};

let colorArray = [
    "black", "white", 
    "pink", "litePink", "darkPink", "pastelPink", 
    "purple", "litePurple", "darkPurple", "pastelPurple", 
    "orange",  "yellow", "blue", "liteBlue", "teal", "liteTeal",
    "eraser", "color", 
]




for (let i=0; i < divs; i++) {
    const newDiv = document.createElement('div');
    newDiv.classList.add('gridItem');
    container.appendChild(newDiv); 
}

function colorSketch(){
    let grid = document.querySelectorAll('.gridItem');
    let clear =!"color";

    grid.forEach((gridCell)=> {

            

        gridCell.addEventListener("mouseenter", ()=> {

            if (isMouseDown) {

                gridCell.classList.remove(    
                    "black", "white", 
                    "pink", "litePink", "darkPink", "pastelPink", 
                    "purple", "litePurple", "darkPurple", "pastelPurple", 
                    "orange",  "yellow", "blue", "liteBlue", "teal", "liteTeal",
                    "eraser", "color",
                )
                gridCell.classList.add(color);

            }


        });

                gridCell.addEventListener("click", ()=> {


                gridCell.classList.remove(    
                    "black", "white", 
                    "pink", "litePink", "darkPink", "pastelPink", 
                    "purple", "litePurple", "darkPurple", "pastelPurple", 
                    "orange",  "yellow", "blue", "liteBlue", "teal", "liteTeal",
                    "eraser", "color",
                )
                gridCell.classList.add(color);



        });
            
        
            
    });

};


 
clearBtn.addEventListener("click", function() {
    let grid = document.querySelectorAll('.gridItem');
    grid.forEach((gridCell)=> {
        gridCell.classList.remove("black", "white", "pink", "litePink", "darkPink", "pastelPink", "purple", "litePurple", "darkPurple", "pastelPurple", "orange", "teal", "liteTeal", "yellow", "blue", "liteBlue", "eraser", "color",)
       
     });
  
});


gridBtn.addEventListener("click", function() {


   let input = prompt("Choose a number between 16 and 100 to generate new grid (ex: 64 generates a 64x64 grid):");

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
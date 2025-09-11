const container = document.getElementById("container");
let numRows = 64;
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

// function card (name, description, image){
//     this.name = name;
//     this.description = description;
//     this.image = image;
// }

// const colorPalette = [

//     {name: "black", button: blackBtn, hex: "#000000"},
//     {name: "white", button: whiteBtn, hex: "#ffffff"},
//     {name: "pink", button: pinkBtn, hex: "#ff41a6"},
//     {name: "purple", button: purpleBtn, hex: "#6203bb"},
//     {name: "lilac", button: lilacBtn, hex: "#b872fa"},
//     {name: "blue", button: blueBtn, hex: "#2fc8ff"},
//     {name: "yellow", button: yellowBtn, hex: "#ffcf10"},
   
// ];

blackBtn.onclick = function() {
root.style.setProperty('--paletteColor', '#000000');
};

whiteBtn.onclick = function() {
root.style.setProperty('--paletteColor', '#ffffff');
};

pinkBtn.onclick = function() {
root.style.setProperty('--paletteColor', '#ff41a6');
};

purpleBtn.onclick = function() {
root.style.setProperty('--paletteColor', '#6203bb');
};

lilacBtn.onclick = function() {
root.style.setProperty('--paletteColor', '#b872fa');
};

blueBtn.onclick = function() {
root.style.setProperty('--paletteColor', '#2fc8ff');
};

yellowBtn.onclick = function() {
root.style.setProperty('--paletteColor', '#ffcf10');
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

            gridCell.classList.add("color");
        });
    });
}


 
btn.addEventListener("click", function() {
    let grid = document.querySelectorAll('.gridItem');
    grid.forEach((gridCell)=> {
        gridCell.classList.remove("color");
       
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












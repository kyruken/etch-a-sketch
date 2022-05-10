
//Global variables
const container = document.querySelector('.container');

function createDiv() {
    const newDiv = document.createElement('div');

    newDiv.classList.add('square');
    newDiv.textContent = 'div';

    return newDiv;
    
}

function deleteAllDivs() {

    while (container.firstChild) {
        container.removeChild(container.firstChild);
    }

}

function setDimensions() {
    let userInput = prompt("What dimensions would you like for the etch?");
    addDivToContainer(userInput);

}
function addDivToContainer(dimensions) {

    if (dimensions > 0) {
        //delete all the divs currently
        deleteAllDivs();
        //add new divs based on input
        for (let x = 0; x < dimensions; x++) {
            container.appendChild(createDiv());
            selectAllDivs();
        }
        return;
     }

     //Initializes website with 256 divs
    for (let x = 0; x < 256; x++) {
        container.appendChild(createDiv());
    }

    return;
}

function changeColor(e) {
    this.classList.add("scroll");
    
}

function selectAllDivs() {
    const divs = container.querySelectorAll('.square');
    divs.forEach(square => square.addEventListener('pointerover', changeColor));
}

addDivToContainer();

selectAllDivs();


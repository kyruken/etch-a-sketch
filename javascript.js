
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

function addNewLine() {
    const newLine = document.createElement('div');

    newLine.classList.add('break');

    return newLine;
}

function setDimensions() {
    let userInput = prompt("What dimensions would you like for the etch?");
    addDivToContainer(userInput);

}
function addDivToContainer(number) {

    let dimensions = number;
    dimensions = dimensions * number;
    if (dimensions > 0) {
        //delete all the divs currently
        deleteAllDivs();

        //add new divs based on input
        //newLineCounter dimensions-1 because we don't want a line break after first div
        let newLineCounter = dimensions-1;
        for (let x = 0; x < dimensions; x++) {
            container.appendChild(createDiv());
            selectAllDivs();

            //if newLineCounter is divisible by the number put in by user, we break into new row
            //ex: user inputs 4 therefore a 4x4= 16, every 4n interval until less than 16 will have a break
            if (newLineCounter % number === 0) {
                container.appendChild(addNewLine());
            }
            newLineCounter--;
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


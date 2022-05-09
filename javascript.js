const container = document.querySelector('.container');

function createDiv() {
    const newDiv = document.createElement('div');

    newDiv.classList.add('square');
    newDiv.textContent = 'div';

    return newDiv;
    
}

function setDimensions() {
    let userInput = prompt("What dimensions would you like for the etch?");
    addDivToContainer(userInput);

}
function addDivToContainer(dimensions) {
    const ArrayOfDivs = [];

    if (dimensions > 0) {
        for (let x = 0; x < dimensions; x++) {
            ArrayOfDivs.push(createDiv());
            container.appendChild(ArrayOfDivs[x]);
            selectAllDivs();
        }
        return;
    }
    for (let x = 0; x < 256; x++) {
        ArrayOfDivs.push(createDiv());
        container.appendChild(ArrayOfDivs[x]);
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


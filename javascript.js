

function createDiv() {
    const newDiv = document.createElement('div');

    newDiv.classList.add('square');
    newDiv.textContent = 'div';

    return newDiv;
    
}

function addDivToContainer() {
    const container = document.querySelector('.container');
    const ArrayOfDivs = [];

    for (let x = 0; x < 255; x++) {
        ArrayOfDivs.push(createDiv());
        container.appendChild(ArrayOfDivs[x]);
    }
}

addDivToContainer();

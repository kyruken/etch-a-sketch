const container = document.querySelector('.container');

function createDiv() {
    const newDiv = document.createElement('div');

    newDiv.classList.add('square');
    newDiv.textContent = 'div';

    return newDiv;
    
}

function addDivToContainer() {
    const ArrayOfDivs = [];

    for (let x = 0; x < 256; x++) {
        ArrayOfDivs.push(createDiv());
        container.appendChild(ArrayOfDivs[x]);
    }
}

function changeColor(e) {
    this.classList.add("scroll");
}

addDivToContainer();

const divs = container.querySelectorAll('.square');
divs.forEach(square => square.addEventListener('pointerover', changeColor));



// Начало проекта

const control = document.querySelector('.circle')
const btnOne = document.querySelector('#checkboxOne');
const btnTwo = document.querySelector('#checkboxTwo');
let range = document.querySelector('.value')

btnOne.addEventListener('click', animate);
btnTwo.addEventListener('click', hide);
range.addEventListener("input", draw);

let flagOne = true;
let flagTwo = true;
let start = 0;
let id = null;

function animate() {
    if(flagOne) {
        control.style.animation = 'rotation 2s linear infinite';
        flagOne = !flagOne;
    } else {
        control.style.animation = 'none';
        flagOne = !flagOne;
    }
}

function hide() {
    if(flagTwo) {
        control.style.display = 'none';
        flagTwo = !flagTwo;
    } else {
        control.style.display = 'flex';
        flagTwo = !flagTwo;
    }
}

function draw() {
    if (id) {
        clearInterval(id);
    }

    let target = parseInt(range.value);
    id = setInterval(() => {
        if (start < target) {
            start++;
            end();
        } else if (start > target) {
            start--;
            end();
        } else {
            clearInterval(id);
            id = null;
        }
    }, 30);

    function end() {
        control.style.background = `conic-gradient(blue ${start * 3.6}deg, #ededed ${start * 3.6}deg 0deg)`
    }
}

const circleComponent = (() => {
    const control = document.querySelector('.circle');
    const range = document.querySelector('.value');

    let animationId = null;
    let flagOne = true;
    let flagTwo = true;
    let start = 0;

    function animate() {
        if(flagOne) {
            control.style.animation = 'rotation 1s linear infinite';
        } else {
            control.style.animation = 'none';
        }
        flagOne = !flagOne;
    }

    function hide() {
        if(flagTwo) {
            control.style.display = 'none';
        } else {
            control.style.display = 'flex';
        }
        flagTwo = !flagTwo;
    }

    function draw() {
        if (animationId) {
            clearInterval(animationId);
        }

        let target = parseInt(range.value);
        if(target > 100) target = 100;
        if(target < 0) target = 0;

        animationId = setInterval(() => {
            if (start < target) {
                start++;
                end();
            } else if (start > target) {
                start--;
                end();
            } else {
                clearInterval(animationId);
                animationId = null;
            }
        }, 10);

        function end() {
            // rotatePosition = start * 3.6;
            control.style.background = `conic-gradient(blue ${start * 3.6}deg, #ededed ${start * 3.6}deg 0deg)`
        }
    }

    return { animate, draw, hide };
})();

document.querySelector('#checkboxOne').addEventListener('click', () => circleComponent.animate());
document.querySelector('#checkboxTwo').addEventListener('click', () => circleComponent.hide());
document.querySelector('.value').addEventListener('input', circleComponent.draw);
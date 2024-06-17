const circleComponent = ((name, val) => {
    const control = document.querySelector(name);
    const range = document.querySelector(val);

    let animationId = null;
    let isAnimate = true;
    let isHide = true;
    let start = 0;

    function animate() {
        if(isAnimate) {
            control.style.animation = 'rotation 1s linear infinite';
        } else {
            control.style.animation = 'none';
        }
        isAnimate = !isAnimate;
    }

    function hide() {
        if(isHide) {
            control.style.display = 'none';
        } else {
            control.style.display = 'flex';
        }
        isHide = !isHide;
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
                if(!target) {
                    start = 0;
                    end();
                }
                clearInterval(animationId);
                animationId = null;
            }
        }, 10);

        function end() {
            control.style.background = `conic-gradient(blue ${start * 3.6}deg, #ededed ${start * 3.6}deg 0deg)`
        }
    }

    return { animate, draw, hide };
});

const run = circleComponent('.circle', '.value');

document.querySelector('#checkboxOne').addEventListener('click', () => run.animate());
document.querySelector('#checkboxTwo').addEventListener('click', () => run.hide());
document.querySelector('.value').addEventListener('input', () => run.draw());
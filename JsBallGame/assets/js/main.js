let countLeft = 0;
let countUp = 0;

left.onclick = function () {
    BallLeft();
}

right.onclick = function () {
    BallRight();
}

up.onclick = function () {
    BallUp();
}

down.onclick = function () {
    BallDown();
}

upleft.onclick = function () {
    BallUp();
    ball.style.right = (countLeft++) + 'rem';

}

upright.onclick = function () {
    BallUp();
    ball.style.right = (countLeft--) + 'rem';
}

leftbottom.onclick = function () {
    BallDown();
    ball.style.right = (countLeft++) + 'rem';
}

rightbottom.onclick = function () {
    BallDown();
    ball.style.right = (countLeft--) + 'rem';
}

reset.onclick = function () {
    ball.style.bottom = 0 + 'rem';
    ball.style.right = 0 + 'rem';
    countUp = 0;
    countLeft = 0;
}

function BallUp() {
    countUp = countUp + 1;
    ball.style.bottom = (countUp++) + 'rem';
    if (ball.style.bottom == 13 + 'rem') {
        up.disabled = true;
        upleft.disabled = true;
        upright.disabled = true;
    }
    else if (ball.style.bottom == -12 + 'rem') {
        down.disabled = false;
        leftbottom.disabled = false;
        rightbottom.disabled = false;
    }
}

function BallDown() {
    countUp = countUp - 1;
    ball.style.bottom = (countUp--) + 'rem';
    if (ball.style.bottom == -13 + 'rem') {
        down.disabled = true;
        leftbottom.disabled = true;
        rightbottom.disabled = true;
    }
    else if (ball.style.bottom == 12 + 'rem') {
        up.disabled = false;
        upleft.disabled = false;
        upright.disabled = false;
    }
}

function BallLeft() {
    ball.style.right = (countLeft++) + 'rem';
    if (ball.style.right == 23 + 'rem') left.disabled = true;
    else if (ball.style.right == -22 + 'rem') right.disabled = false;
}

function BallRight() {
    ball.style.right = (countLeft--) + 'rem';
    if (ball.style.right == -23 + 'rem') right.disabled = true;
    else if (ball.style.right == 22 + 'rem') left.disabled = false;
}

window.addEventListener("keydown", function (e) {
    if (e.key == "ArrowUp") BallUp();
    else if (e.key == "ArrowDown") BallDown();
    else if (e.key == "ArrowLeft") BallLeft();
    else if (e.key == "ArrowRight") BallRight();
})


function check() {
    const v = 180 / Math.PI
    console.log(Math.atan2(1, 1) * v);
    console.log(Math.atan2(1, -1) * v);
    console.log(Math.atan2(-1, 1) * v);
    console.log(Math.atan2(-1, -1) * v);


    console.log(Math.atan(1) * v);
    console.log(Math.atan(-1) * v);
}
let gTarge = {};
function moveTo(to) {
    let $box = $(".box");
    $box.css("left", number2pixel(to.x))
        .css("bottom", number2pixel(to.y));
}

function getPostion() {
    let $box = $(".box");
    return { x: pixel2number($box.css("left")), y: pixel2number($box.css("bottom")) };
}

function pixel2number(pixel) {
    return parseFloat(pixel.slice(0, -2));
}

function number2pixel(number) {
    return number + "px";
}

let gAngle = null;
$(function () {
    // check();
    $(document).click((e) => {
        let x = e.clientX;
        let y = $(window).height() - e.clientY;

        newPos = { x: x, y: y };
        let oldPos = getPostion();
        gAngle = Math.atan2(newPos.y - oldPos.y, newPos.x - oldPos.x);

    })

    // console.log(getPostion())
    setInterval(() => {
        if (gAngle) {
            let length = 0.1 * 50;
            let oldPos = getPostion();
            let newPos = {};
            newPos.x = oldPos.x + length * Math.cos(gAngle);
            newPos.y = oldPos.y + length * Math.sin(gAngle);
            moveTo(newPos);
        }
    }, 10);



    document.oncontextmenu = function (e) {
        return false;
    }

    $(document).mousedown(function (e) {
        if (e.which == 3) {  // 1 = 鼠标左键 left; 2 = 鼠标中键; 3 = 鼠标右键
            gAngle = null;
        }
    })
});
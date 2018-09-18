// import Granim from 'granim';

// const granimInstance = new Granim({
//     element: '#torontoBg',
//     direction: 'top-bottom',
//     opacity: [1, 1],
//     isPausedWhenNotInView: true,
//     states: {
//         "default-state": {
//             gradients: [
//                 ['#29323c', '#485563'],
//                 ['#FF6B6B', '#556270'],
//                 ['#80d3fe', '#7ea0c4'],
//                 ['#f0ab51', '#eceba3']
//             ],
//             transitionSpeed: 7000
//         }
//     }
// });

const pressed = [];
const code = "bensbagels";
// let frameCount = 0;

const finishbagels = () => {
    let bagel = document.getElementById("bagel-container");
    bagel.className = "hide";
}

const trigger = () => {
    setTimeout(
        function () {
            finishbagels();
        }, 10000);
}

const startbagels = () => {
    let bagel = document.getElementById("bagel-container");
    bagel.className = "show";
    trigger();

}

window.addEventListener("keyup", function (e) {
    pressed.push(e.key);
    pressed.splice(-code.length - 1, pressed.length - code.length);

    if (pressed.join("").includes(code)) {
        startbagels();
    }
});

$(function () {
    $('a').smoothScroll();
        
});
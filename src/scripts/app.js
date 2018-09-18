import Granim from 'granim';

const granimInstance = new Granim({
    element: '#torontoBg',
    direction: 'top-bottom',
    opacity: [1, 1],
    isPausedWhenNotInView: true,
    states: {
        "default-state": {
            gradients: [
                ['#29323c', '#485563'],
                ['#FF6B6B', '#556270'],
                ['#80d3fe', '#7ea0c4'],
                ['#f0ab51', '#eceba3']
            ],
            transitionSpeed: 7000
        }
    }
});

$(function () {
    $('a').smoothScroll();
    
});
const app = {};

// Enables direct access from console to functions and variables in the namespace
window.app = app;


// v1 of the portfolio at dtkahn.com was built during my time with HackerYou (hackeryou.com) while I was part of Cohort 19 - "Ben's Bagels". My friend Maggie Deuitch, also part of Ben's Bagels, built and shared the Ben's Bagel animation with the rest of the cohort. You can see more of her excellent work here: maggiedeuitch.com
app.finishbagels = () => {
    let bagel = document.getElementById("bagel-container");
    bagel.className = "hide";
}

app.trigger = () => {
    setTimeout(
        function () {
            app.finishbagels();
        }, 10000);
}

app.startbagels = () => {
    let bagel = document.getElementById("bagel-container");
    bagel.className = "show";
    app.trigger();

}

app.mobileMenu = () => {

    $('#header__navHamburgerDiv').on('click', () => {
        $('#nav__listOfLinks').toggleClass('showMenu');
    });

    $('.nav__li').on('click', () => {
        $('#nav__listOfLinks').removeClass('showMenu');
    });
    
}

app.init = () => {
    $('a').smoothScroll();

    app.mobileMenu();
    
    app.pressed = [];
    app.code = "bensbagels";
    
    window.addEventListener("keyup", function (e) {
        app.pressed.push(e.key);
        app.pressed.splice(-app.code.length - 1, app.pressed.length - app.code.length);
    
        if (app.pressed.join("").includes(app.code)) {
            app.startbagels();
        }
    });
}

$(function () {
    app.init();
});
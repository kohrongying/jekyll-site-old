$(document).ready(function() {

function init() {
    console.log('enter');
    window.addEventListener('scroll', function(e){
        var distanceY = window.pageYOffset || document.documentElement.scrollTop,
            shrinkOn = 300;
        
        if (distanceY > shrinkOn) {
            $('header').addClass("smaller");
        } else {
            if ($('header').hasClass("smaller")) {
                $('header').removeClass("smaller");
            }
        }
    });
}
window.onload = init();
console.log('hello');

});

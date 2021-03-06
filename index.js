document.addEventListener('DOMContentLoaded', function(event) {
    var dataText = ["Howdy! My name is James Liu."];

    function typewriter(text, i, fnCallback) {
        if(i < (text.length)) {
            document.querySelector("h1").innerHTML = text.substring(0, i+1) + '<span aria-hidden="true"></span>';

            setTimeout(function() {
                typewriter(text, i + 1, fnCallback)
            }, 100);
        } 
        else if(typeof fnCallback == 'function') {
            setTimeout(fnCallback, 700);
        }
    }

    function StartTextAnimation(i) {
        if(typeof dataText[i] == 'undefined') {
            setTimeout(function() {
                StartTextAnimation(0);
            }, 20000);
        }

        if(i < dataText[i].length) {
            typewriter(dataText[i], 0, function() {
                StartTextAnimation(i + 1);
            });
        }
    }

    StartTextAnimation(0);
});
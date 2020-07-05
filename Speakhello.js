(function (window) {
    var helloSpeaker = new Object();
    var speakWord = "hello";
    helloSpeaker.speak = function speak(name) {
        console.log(speakWord + " " + name);
    };
    window.helloSpeaker = helloSpeaker;
})(window);

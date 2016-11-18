$("#circleLeft").velocity({
    cx: "-=15px"
}, {
    easing: "spring",
    delay: 1000
});
// Move one circle toward the right
$("#circleRight").velocity({
    cx: "+=15px"
}, {
    easing: "spring",
    delay: 1000
});

$("svg").hover(function (e) {
    $("#circleLeft, #circleRight").velocity("reverse");
});

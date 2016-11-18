var one = $('#one');
var two = $('#two');
two
    .velocity('scroll', { delay: 500, duration: 1000 })
    .velocity( { opacity: 1 })
    .velocity({ height: "1000px" }, { easing: [500, 20] });
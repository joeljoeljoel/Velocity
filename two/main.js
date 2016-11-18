// $.Velocity.mock = 5;

function animate() {

    $('button').velocity({
        width: '3.375rem',
        borderRadius: '1.6875rem',
        backgroundColor: '#8cc152',
        borderColor: '#344b1b',
        color: '#344b1b'
    }, {
        duration: 350,
        easing: "easeInQuad",
        complete: function () {
            $('.icon').velocity({
                opacity: 1
            }, {
                duration: 150
            });
        }
    });

    $('.text').velocity({
        opacity: 0,
        scale: 0
    }, {
        duration: 150
    });
};

$('button').on('click', animate);


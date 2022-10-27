$(function () {
    $('.menu-icon').click(function () {
        if ($('.menu-modal').hasClass('showed')) {
            $('.menu-modal').removeClass('showed');
            $('.menu-modal').fadeOut();
        } else {
            $('.menu-modal').addClass('showed');
            $('.menu-modal').fadeIn();
        }
    });
});


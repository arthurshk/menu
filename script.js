$(document).ready(function() {
    $('#menu-icon').click(function() {
        $(this).toggleClass('open');
        $('#menu-links').slideToggle();
    });
});

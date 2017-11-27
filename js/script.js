$(document).ready(function () {

    $('#show-button').click(function () {
        $('#home').show();
    });

    $('#month-names ul a').click(fadeIn);


    // hide home content when going to previous/next month
    $('.left-month-button a').click(fadeIn);

    $('.right-month-button a').click(fadeIn);
});

function fadeIn(e) {
    $('#home').hide();
}

//    var hash = window.location.hash;
//    var destinationHash = $(this).attr('href');
//     e.preventDefault();
//     $(hash).addClass('fadeIn');
//    console.log('fade in start', $(hash));
//    setTimeout(function () {
//     console.log('fade in complete');
//    $(hash).removeClass('fadeIn');
//     window.location = destinationHash;
// }, 500);

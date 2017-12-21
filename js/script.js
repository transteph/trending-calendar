$(document).ready(function () {

    $('#show-button').click(function () {
        $('#home').show();
    });

    $('#month-names ul a').click(fadeIn);


    // hide home content when going to previous/next month
    $('.left-month-button a').click(fadeIn);

    $('.right-month-button a').click(fadeIn);

    $(window).resize(function(){location.reload();});
    
    $('#fullpage').fullpage({
        anchors: ['firstPage'],
        sectionsColor: ['transparent'],
        autoScrolling: false,
        css3: true,
        fitToSection: false
    });
    
    if( window.innerWidth > 600 ){
        $("i" ).hide();
        
    } else {
        
        $( ".holidays" ).append( ' <i class="fa fa-circle"></i> ' );
        $( ".holiday" ).hide();
        $( ".three-holidays" ).hide();
    };
    
      $( ".holidays" ).click(function(){
        if( window.innerWidth > 600 ){
        } else {
        $( this ).find(".holiday").show().css("width", "24vw");
        $( this ).find(".three-holidays").show().css("width", "23vw");
        $( this ).find(".fa-circle").hide();
        
        } 
    });
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

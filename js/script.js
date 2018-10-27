
/*take me to dail[ad*/
if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
    $(".call").on('click', function() {
        var link = "tel:18003334444";
        window.location.href = link;
    });
}



/*Scroll to top when arrow up clicked BEGIN*/
$(window).scroll(function() {
    var height = $(window).scrollTop();
    if (height > 100) {
        $('#back2Top').fadeIn();
    } else {
        $('#back2Top').fadeOut();
    }
});
$(document).ready(function() {
    $("#back2Top").click(function(event) {
        event.preventDefault();
        $("html, body").animate({ scrollTop: 0 }, "slow");
        return false;
    });

});
/*Scroll to top when arrow up clicked END*/




$("a[href='#services']").click(function(e) {
    e.preventDefault();

    var position = $($(this).attr("href")).offset().top;

    $("body, html").animate({
        scrollTop: position
    } /* speed */ );
});

$("a[href='#packages']").click(function(e) {
    e.preventDefault();

    var position = $($(this).attr("href")).offset().top;

    $("body, html").animate({
        scrollTop: position
    } /* speed */ );
});

$("a[href='#reg']").click(function(e) {
    e.preventDefault();

    var position = $($(this).attr("href")).offset().top;

    $("body, html").animate({
        scrollTop: position
    } /* speed */ );
});

$("a[href='#news']").click(function(e) {
    e.preventDefault();

    var position = $($(this).attr("href")).offset().top;

    $("body, html").animate({
        scrollTop: position
    } /* speed */ );
});
//mobile-menu

$('#demo').click(function () {
    $('#myMenu').show('slow');
});

$('.check').click(function () {
    $('#myMenu').hide('slow');
});

// Problem is once mobile menu is click it will show nav link if nav link is click menu will hide or collapse its ok but secon time if i press menu icon menu is not opening




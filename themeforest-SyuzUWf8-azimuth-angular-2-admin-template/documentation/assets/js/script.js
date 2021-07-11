


$(document).ready(function () {
    $("html,body").animate({scrollTop: 0}, 500);
    $(document).on("scroll", onScroll);
    $('a[href^="#"]').on('click', function (e) {
        e.preventDefault();
        $(document).off("scroll");
        
         $('#documenter_nav a').each(function () {
            $(this).removeClass('current');
        })
        $(this).addClass('current');
      
        var target = this.hash,
            menu = target;
        $target = $(target);
        $('html, body').stop().animate({
            'scrollTop': $target.offset().top+2
        }, 500, 'swing', function () {
            window.location.hash = target;
            $(document).on("scroll", onScroll);
        });
    });

    window.prettyPrint && prettyPrint();
});

function onScroll(event){
    var scrollPos = $(document).scrollTop();
    $('#documenter_nav a').each(function () {
        var currLink = $(this);
        var refElement = $(currLink.attr("href"));
        if(refElement.position()){
            if (refElement.position().top <= scrollPos && refElement.position().top + refElement.height() > scrollPos) {
                $('#documenter_nav ul li a').removeClass("current");
                currLink.addClass("current");
            }
            else{
                currLink.removeClass("current");
            }
        }
    });
}



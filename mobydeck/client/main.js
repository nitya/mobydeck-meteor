
// Support bootscroller behavior
jQuery(document).ready(function(){
    jQuery('#topnav').localScroll({offset: {top:0}});
});

//NICE Scroll plugin
//scroll bar custom
jQuery(document).ready(function() {
    jQuery("html").niceScroll({cursorcolor:"#333"});
});

//hide menu after click on mobile
jQuery('.navbar .nav > li > a').click(function(){
    jQuery('.navbar-collapse.navbar-ex1-collapse.in').removeClass('in').addClass('collapse').css('height', '0');
});

// Isotope init script (from main.html) moved here
jQuery.noConflict()(function($){
    var $container = $('#container-folio');

    if($container.length) {
        $container.waitForImages(function() {
            $(this).slideDown();

            // initialize isotope
            $container.isotope({

            itemSelector : '.box',

            resizable: false, // disable normal resizing
            masonry: { columnWidth: $container.width() / 12 }
        });

            // update columnWidth on window resize
            $(window).smartresize(function(){
                $(window).smartresize(function(){
                    $container.isotope({
                    // update columnWidth to a percentage of container width
                        masonry: { columnWidth: $container.width() / 12 }
                    });
                });
            });
        },null,true);
    }
});
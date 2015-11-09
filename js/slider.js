    $(function() {
        $('.slideshow img:gt(0)').hide();
        setInterval(function() {
            $('.slideshow :first-child')
                .fadeOut('slow')
                .next('img')
                .fadeIn('slow')
                .end()
                .appendTo('.slideshow');
        }, 3500);
    });

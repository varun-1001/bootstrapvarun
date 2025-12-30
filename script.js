$("document").ready(() => {
    $(".testimonials-slider").slick(
        {
            slidesToShow: 5,
            slidesToScroll: 1,
            centerMode: true,
            autoplay: true,
            autoplaySpeed: 2000,
            centerPadding: "1px",
            asNavFor: '.testimonials-content'
        }
    );
    $(".testimonials-content").slick(
        {
            slidesToShow: 1,
            slidesToScroll: 1,
            speed: 500,
            fade: true,
            cssEase: 'linear',
            asNavFor: '.testimonials-slider'
        }
    );
    $('.testimonials-slider .slick-current').next().addClass("sl-next");
    $('.testimonials-slider .slick-current').prev().addClass("sl-prev");

    $(".testimonials-slider").on(
        "beforeChange",
        function (event, slick, currentslide, nextslide) {
            $(".testimonials-slider")
                .find(".slick-current")
                .next()
                .removeClass("sl-next");
            $(".testimonials-slider")
                .find(".slick-current")
                .prev()
                .removeClass("sl-prev");
        }
    )
    $(".testimonials-slider").on(
        "afterChange",
        function (event, slick, currentslide, nextslide) {
            $(".testimonials-slider")
                .find(".slick-current")
                .next()
                .addClass("sl-next");
            $(".testimonials-slider")
                .find(".slick-current")
                .prev()
                .addClass("sl-prev");
        }
    )
});
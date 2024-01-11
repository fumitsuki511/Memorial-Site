document.addEventListener( 'DOMContentLoaded', function() {
    new SCROLL_EFFECT_MODULE({ elem: '[data-scroll-effect]' });
    $(".chonologyBox .image.is-special").on("mouseover", function() {
        $(this).parents(".chonologyBox").find(".chonologyTitle01").addClass("is-active");
    });
    $(".chonologyBox .image.is-special").on("mouseout", function() {
        $(this).parents(".chonologyBox").find(".chonologyTitle01").removeClass("is-active");
    });
} );
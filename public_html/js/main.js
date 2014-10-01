if ($('.tennis-slide').length > 0) {
    $('.tennis-slide').bxSlider({
        infiniteLoop: true,
        nextSelector: '#slider-next',
        prevSelector: '#slider-prev',
        nextText: "",
        prevText: "",
        pager: true,
        adaptiveHeight: true
    });
}
if ($('.gallery-slide').length > 0) {
$('.gallery-slide').bxSlider({
    nextSelector: '#slider-next',
    prevSelector: '#slider-prev',
    pager: false,
    minSlides: 3,
    maxSlides: 3,
    nextText: "",
    prevText: "",
    slideMargin: 10,
    slideWidth: 230,
    adaptiveHeight: true
});
}
var mSlide = " ";
if ($('#sliderModal').length > 0) {
    mSlide = $('.bxslider').bxSlider({
        nextSelector: '#slider-next1',
        prevSelector: '#slider-prev1',
        pager: false,
        nextText: "",
        prevText: "",
        adaptiveHeight: true,
        oneToOneTouch: true
    });
}
$('#sliderModal').on('shown.bs.modal', function () {
    mSlide.reloadSlider();
});
function slideModal(a) {
    $("#sliderModal").modal("show");
    mSlide.goToSlide(a);
}

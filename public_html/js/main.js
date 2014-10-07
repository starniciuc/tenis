function slideModal() {
    $("#sliderModal").css("display","block");
    $(".submodal").css("display","block");
}
function closeModal() {
    $("#sliderModal").css("display","none");
    $(".submodal").css("display","none");
}
$(".submodal").click(function(){
    $("#sliderModal").css("display","none");
    $(".submodal").css("display","none");
});
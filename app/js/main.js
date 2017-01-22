$(document).ready(function(){
    var scrolled = $(".top-header .container");
    scrolled.removeClass("scrolled");
    var flag = false;

    $(window).scroll(function () {
        if($(window).scrollTop() >= 150){
            if(flag == false){
                scrolled.addClass("scrolled");
                flag = true;
            }
        } else {
            if(flag == true){
                scrolled.removeClass("scrolled");
                flag = false;
            }
        }
    });
});


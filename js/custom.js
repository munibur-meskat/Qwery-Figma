$(function(){
    // Sticky Header
    $(window).scroll(function(){
        var scrolling = $(this).scrollTop();

        if(scrolling > 200){
            $('.navbar').addClass('bg');
        } 
        else{
            $('.navbar').removeClass('bg');
        }
    });
})
$(function(){
    //jquery kodas
    $('.sandwich img:last-of-type').click(function(){
        if($('#mobileMenu').css('right') == "-300px"){
            $('#mobileMenu').css('right', '0px');
            $('#mobileMenu').show();
        }else{
            $('#mobileMenu').css('right', '-300px');
            $('#mobileMenu').hide();
        }
    });
    $('header .inner .top li a').click(function(){
        $('header .inner .top li a').removeClass('active');
        $(this).addClass('active');
    });
    $(document).scroll(function() {
    if ($(document).scrollTop() > 200 && $(document).width() > 1200){
        $('header .fixedMobileMenu').addClass('stuck');
        $('header .fixedMobileMenu').show();
    } else {
        $('header .fixedMobileMenu').removeClass('stuck');
        $('header .fixedMobileMenu').hide();
    }
});
});
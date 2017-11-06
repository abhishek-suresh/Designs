$(window).scroll(function(){
    if($(window).scrollTop()>50){
        $('nav').addClass('shrink');
        $('navbar-nav>li>a').addClass('shrink');
    }
    else{
        $('nav').removeClass('shrink');
    }
});



   $('#outstations .thumbnail').animate({
      opacity: .5 
   });

$("#outstations .thumbnail").hover(function(){    
    $(this).stop().animate({opacity:1},'fast');
}, function(){
    $(this).stop().animate({opacity:.5},'slow');
});
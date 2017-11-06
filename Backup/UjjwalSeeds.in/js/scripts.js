$(window).scroll(function(){
    if($(window).scrollTop()>50){
        $('nav').addClass('shrink');
        $('navbar-nav>li>a').addClass('shrink');
    }
    else{
        $('nav').removeClass('shrink');
    }
});


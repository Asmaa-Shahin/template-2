$(function(){
    
    'use-strict';
    // adjust slider height
    var winh = $(window).height(),
     upperh  = $('.upper-bar').innerHeight(),
        navh = $('.navbar').innerHeight();
        $('.slider,.carousel-item').height(winh - (upperh+navh));
        

    $( '.featured-work ul li').on('click',function(){
        
        $(this).addClass('active').siblings().removeClass('active');
      console.log($(this).data('class'));
        
        if($(this).data('class')=='all'){
            
            $('.shuffle-imges .col-sm').css('opacity',1);
        }
        else{
             $('.shuffle-imges .col-sm').css('opacity','.3');
              $($(this).data('class')).parent().css('opacity',1);
        }
        });
    
    });
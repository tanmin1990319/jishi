(function(){
    $('.ulbox img').on('mouseenter',function(){
        $(this).animate({top:'30px'});
        $(this).siblings('p').animate({top:'340px'});
    })
    $('.ulbox img').on('mouseleave',function(){
        setTimeout(function(){
            $('.ulbox img').stop();
            $('.ulbox p').stop();
        },3000)
        $(this).animate({top:'50px'});
        $(this).siblings('p').animate({top:'400px'});
    })   
})()
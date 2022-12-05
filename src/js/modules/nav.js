 
function nav() { 
   
    $('.links__item').click(function() {
        $(this).addClass('links__item-active').siblings().removeClass('links__item-active');
    });
  
  
    $('.nav__btn').click(function(){
        $(this).addClass('btn-none');
        $('.links').addClass('responsive');
        $('.nav__closebtn').addClass('btn-block');
    });
    $('.nav__closebtn').click(function(){
        $(this).removeClass('btn-block');
        $('.links').removeClass('responsive');
        $('.nav__btn').removeClass('btn-none');
    });  
  

  //nav active class on scroll
    let sectionIds = $('a.links__item');

    $(document).scroll(function(){
        sectionIds.each(function(){

            let container = $(this).attr('href');
            let containerOffset = $(container).offset().top;
            let containerHeight = $(container).outerHeight();
            let containerBottom = containerOffset + containerHeight;
            let scrollPosition = $(document).scrollTop();

            if(scrollPosition < containerBottom - 120 && scrollPosition >= containerOffset - 120){
                $(this).addClass('links__item-active');
            } else{
                $(this).removeClass('links__item-active');
            }


        });
    });

};

export default nav;
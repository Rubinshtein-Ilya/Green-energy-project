function hidenElements(){

    const depsOffset = $("#departments").offset().top;
    const servOffset = $("#servises").offset().top;

    jQuery.fn.extend({
        showHidden: function(className,hiddenElem,offset){
            $(this).click(function(){
                let linkName = $(this).attr("data-elem");

                $(className).css({"display": "none" , "opacity": "0"});
        
                $(hiddenElem).each(function(){
                    let divName = $(this).attr("data-elem");
                    
                    if (divName == linkName) {
                        $(this).css({"display": "flex"});
                        $(this).animate({opacity: "1"},"fast");
                    }
                });
        
                $(document).scrollTop(offset);
            })
        },
        hideHidden: function(className,hiddenElem,offset){
            $(this).click(function(){
                $(hiddenElem).css({"display": "none" , "opacity": "0"});
                $(className).css({"display": "block"});
                $(className).animate({opacity: "1"},"fast");
                
                $(document).scrollTop(offset);
            })
        }
    });

    $(".servises-card__link").showHidden(".servises-card",".hidden-servises-elem",servOffset);
    $(".departments-card__link").showHidden(".departments-card",".hidden-elem",depsOffset);
    $(".hidden-elem__link").hideHidden(".departments-card",".hidden-elem",depsOffset);
    $(".hidden-elem__servises-link").hideHidden(".servises-card",".hidden-servises-elem",servOffset);

};

export default hidenElements;
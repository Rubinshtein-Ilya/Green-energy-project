function form(){

    $("form").submit(function(e){
        e.preventDefault();

        $("[data-filter = 'form-item']").each(function(){

            let value = $(this).val();

            if(value == ""){
                $(this).addClass("invalid"); 
                
            }  else{
                $(this).removeClass("invalid");
            }
        });

        if ($("[data-filter = 'form-item']").hasClass("invalid")) {
            $(".form-message").css({"opacity" : "1"}).text("Где-то пусто!");
        } else {
            let frm = $("form"),
                url = frm.attr("action"),
                data = $( "form" ).serializeArray();

            $.post(url, data).done(function() {
                $(".form-message").css({"background-color" : "green", "opacity" : "1"}).text("Попробуйте позже!");
                
            })
            .fail(function() {
                $(".form-message").css({"opacity" : "1"}).text("Попробуйте позже!");
            });
        }
    });

    $("form").children().focus(function(){
        $(".form-message").css({"opacity" : "0"});
    });

    $(".contacts-container").click(function(){
        $(".form-message").css({"opacity" : "0"});
    });

};

export default form;
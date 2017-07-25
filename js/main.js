$(function(){
    $(".reagent_nav_div").each(function(){
        $(this).click(function(){
            var v = $(this).attr("v");
            $("#reagent_cover"+v).toggle()
        })
    });
});
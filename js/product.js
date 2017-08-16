$(function () {
    var url = window.location.href;
    var url_param = url.split("=")[1];
    if(url_param === "1"){
        $("#product_show_tab_one").addClass("hometive").siblings().removeClass("hometive");
        $(".product_show_textOne").show();
        $(".product_show_textTwo").hide();
    }
    if(url_param === "2"){
        $("#product_show_tab_two").addClass("hometive").siblings().removeClass("hometive");
        $(".product_show_textTwo").show();
        $(".product_show_textOne").hide();
    }

    // 设备展示&系统展示    tab栏切换
    $(".homeclass").click(function(){
        $(this).addClass("hometive").siblings().removeClass("hometive");
        var c_id = $(this).attr("id");
        if(c_id==="product_show_tab_one")
        {
            $(".product_show_textTwo").hide();
            $(".product_show_textOne").show();
        }
        else
        {
            $(".product_show_textTwo").show();
            $(".product_show_textOne").hide();
        }
    });


});
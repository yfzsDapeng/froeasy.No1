$(function () {
    var url = window.location.href;
    var url_param = url.split("=")[1];
    if(url_param === "1")
    {
        $("#home_content_tab_one").addClass("hometive").siblings().removeClass("hometive");
        $(".home_content_textOne").show();
        $(".home_content_textTwo").hide();
    }
    if(url_param === "2")
    {
        $("#home_content_tab_two").addClass("hometive").siblings().removeClass("hometive");
        $(".home_content_textTwo").show();
        $(".home_content_textOne").hide();
    }


    // 公司简介&公司荣誉    tab栏切换
        $(".homeclass").click(function(){
            $(this).addClass("hometive").siblings().removeClass("hometive");
            var c_id = $(this).attr("id");
            if(c_id==="home_content_tab_one")
            {
                $(".home_content_textTwo").hide();
                $(".home_content_textOne").show();
            }
            else
            {
                $(".home_content_textTwo").show();
                $(".home_content_textOne").hide();
            }
        });
});
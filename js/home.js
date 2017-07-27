$(function () {
    // 公司简介&公司荣誉    tab栏切换
        $(".homeclass").click(function(){
            $(this).addClass("hometive").siblings().removeClass("hometive");
            var c_id = $(this).attr("id");
            if(c_id=="home_content_tab_one")
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
$(function () {
    // 设备展示&系统展示    tab栏切换
    $(".homeclass").click(function(){
        $(this).addClass("hometive").siblings().removeClass("hometive");
        var c_id = $(this).attr("id");
        if(c_id=="new_content_tab_one")
        {
            $(".new_content_two").hide();
            $(".new_content_one").show();
        }
        else
        {
            $(".new_content_two").show();
            $(".new_content_one").hide();
        }
    });
});
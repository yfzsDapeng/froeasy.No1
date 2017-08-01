$(function () {
    // 设备展示&系统展示    tab栏切换
    $(".homeclass").click(function(){
        $(this).addClass("hometive").siblings().removeClass("hometive");
        var c_id = $(this).attr("id");
        if(c_id=="contact_show_tab_one")
        {
            $(".contact_show_two").hide();
            $(".contact_show_one").show();
        }
        else
        {
            $(".contact_show_two").show();
            $(".contact_show_one").hide();
        }
    });
});
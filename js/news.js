$(function () {
    var url = window.location.href;
    var url_param = url.split("=")[1];
    if(url_param === "1"){
        $("#new_content_tab_two").addClass("hometive").siblings().removeClass("hometive");
        $(".new_content_two").hide();
        $(".new_content_one").show();
    }
    if(url_param === "2"){
        $("#new_content_tab_one").addClass("hometive").siblings().removeClass("hometive");
        $(".new_content_two").show();
        $(".new_content_one").hide();
    }

    // 设备展示&系统展示    tab栏切换
    $(".homeclass").click(function(){
        $(this).addClass("hometive").siblings().removeClass("hometive");
        var c_id = $(this).attr("id");
        if(c_id==="new_content_tab_one")
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
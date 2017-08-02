$(function () {
    // 设备展示&系统展示    tab栏切换
    $(".homeclass").click(function(){
        $(this).addClass("hometive").siblings().removeClass("hometive");
        var c_id = $(this).attr("id");
        if(c_id=="clinical_tab_one")
        {
            $(".upload").hide();
            $(".remote").hide();
            $(".dyeing").show();
        }
        if(c_id=="clinical_tab_two"){
            $(".dyeing").hide();
            $(".remote").hide();
            $(".upload").show();
        }
        if(c_id=="clinical_tab_three"){
            $(".upload").hide();
            $(".dyeing").hide();
            $(".remote").show();
        }

    });
});
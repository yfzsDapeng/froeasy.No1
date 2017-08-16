$(function () {
    var url = window.location.href;
    var url_param = url.split("=")[1];
    if(url_param === "1"){
        $("#clinical_tab_one").addClass("hometive").siblings().removeClass("hometive");
        $(".upload").hide();
        $(".remote").hide();
        $(".dyeing").show();
    }
    if(url_param === "2"){
        $("#clinical_tab_two").addClass("hometive").siblings().removeClass("hometive");
        $(".dyeing").hide();
        $(".remote").hide();
        $(".upload").show();
    }
    if(url_param==="3"){
        $("#clinical_tab_three").addClass("hometive").siblings().removeClass("hometive");
        $(".upload").hide();
        $(".dyeing").hide();
        $(".remote").show();
    }

    // 设备展示&系统展示    tab栏切换
    $(".homeclass").click(function(){
        $(this).addClass("hometive").siblings().removeClass("hometive");
        var c_id = $(this).attr("id");
        if(c_id==="clinical_tab_one")
        {
            $(".upload").hide();
            $(".remote").hide();
            $(".dyeing").show();
        }
        else if(c_id==="clinical_tab_two"){
            $(".dyeing").hide();
            $(".remote").hide();
            $(".upload").show();
        }else{
            $(".upload").hide();
            $(".dyeing").hide();
            $(".remote").show();
        }
    });
});
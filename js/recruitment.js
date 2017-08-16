$(function () {
    // 设备展示&系统展示    tab栏切换
    $(".homeclass").click(function () {
        $(this).addClass("recruitment_active").siblings().removeClass("recruitment_active");
        var c_id = $(this).attr("id");
        if (c_id === "recruitment_showAll") {
            $(".quality_control").hide();
            $(".information_technology").hide();
            $(".transport_management").hide();
            $(".pathology").hide();
            $(".finance").hide();
            $(".human_resources").hide();
            $(".business").hide();
            $(".recruitment_showAll").show();
        }
        if (c_id === "quality_control") {
            $(".recruitment_showAll").hide();
            $(".information_technology").hide();
            $(".transport_management").hide();
            $(".pathology").hide();
            $(".finance").hide();
            $(".human_resources").hide();
            $(".business").hide();
            $(".quality_control").show();
        }
        if (c_id === "information_technology") {
            $(".recruitment_showAll").hide();
            $(".quality_control").hide();
            $(".transport_management").hide();
            $(".pathology").hide();
            $(".finance").hide();
            $(".human_resources").hide();
            $(".business").hide();
            $(".information_technology").show();
        }
        if (c_id === "transport_management") {
            $(".recruitment_showAll").hide();
            $(".quality_control").hide();
            $(".information_technology").hide();
            $(".pathology").hide();
            $(".finance").hide();
            $(".human_resources").hide();
            $(".business").hide();
            $(".transport_management").show();
        }
        if (c_id === "pathology") {
            $(".recruitment_showAll").hide();
            $(".quality_control").hide();
            $(".information_technology").hide();
            $(".transport_management").hide();
            $(".finance").hide();
            $(".human_resources").hide();
            $(".business").hide();
            $(".pathology").show();
        }
        if (c_id === "finance") {
            $(".recruitment_showAll").hide();
            $(".quality_control").hide();
            $(".information_technology").hide();
            $(".transport_management").hide();
            $(".pathology").hide();
            $(".human_resources").hide();
            $(".business").hide();
            $(".finance").show();
        }
        if (c_id === "human_resources") {
            $(".recruitment_showAll").hide();
            $(".quality_control").hide();
            $(".information_technology").hide();
            $(".transport_management").hide();
            $(".finance").hide();
            $("pathology").hide();
            $(".business").hide();
            $(".human_resources").show();
        }
        if (c_id === "business") {
            $(".recruitment_showAll").hide();
            $(".quality_control").hide();
            $(".information_technology").hide();
            $(".transport_management").hide();
            $(".finance").hide();
            $("pathology").hide();
            $(".human_resources").hide();
            $(".business").show();
        }

    });
});
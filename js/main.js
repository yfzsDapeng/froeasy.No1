$(function() {

    // // 导航栏滚动变色
    // var nav = $(".nav"); //得到导航对象
    // var win = $(window); //得到窗口对象
    // var sc = $(document);//得到document文档对象。
    // win.scroll(function () {
    //     if (sc.scrollTop() >= 80) {
    //         nav.css("background-color","rgba(181, 228, 232, 0.7)");
    //     } else {
    //         nav.css("background-color","transparent");
    //     }
    // });

// 试剂展示
    $(".reagent_nav_div").each(function () {
        $(this).click(function () {
            var v = $(this).attr("v");
            $("#reagent_cover" + v).toggle()
        })
    });

    $(".reagent_show_all").each(function () {
        $(this).mouseenter(function () {
            var w = $(this).attr("w");
            $("#reagent_cover" + w).css({display: "block"})
        })
    });

    $(".reagent_show_all").each(function () {
        $(this).mouseleave(function () {
            var w = $(this).attr("w");
            $("#reagent_cover" + w).css({display: "none"})
        })
    });
});

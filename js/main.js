$(function() {
    // 导航栏下拉菜单
    // 关于福怡
    $("#guanyu").mouseenter(function () {
        $(".home_down").toggle()
    }).mouseleave(function () {
        $(".home_down").toggle()
    });

    // 产品和服务
    $("#chanping").mouseenter(function () {
        $(".product_down").toggle()
    }).mouseleave(function () {
        $(".product_down").toggle()
    });

    // 临床应用
    $("#lingchuang").mouseenter(function () {
        $(".clinical_down").toggle()
    }).mouseleave(function () {
        $(".clinical_down").toggle()
    });

    // 新闻动态
    $("#xinwen").mouseenter(function () {
        $(".news_down").toggle()
    }).mouseleave(function () {
        $(".news_down").toggle()
    });

    // 联系我们
    $("#lianxi").mouseenter(function () {
        $(".contact_down").toggle()
    }).mouseleave(function () {
        $(".contact_down").toggle()
    });

    // 侧边栏
    $(".dock_im").mouseenter(function () {
        $("#dock_im_p").show().animate({
            right:"50px",
            transition:"all 1s ease-in-out .5s"
        });
    }).mouseleave(function () {
        $("#dock_im_p").animate({
            right:"-300px",
            transition:"all 1s ease-in-out .5s"
        });
    });

    $(".dock_tel").mouseenter(function () {
        $("#dock_tel_p").show().animate({
            right:"50px",
            transition:"all 1s ease-in-out .5s"
        });
    }).mouseleave(function () {
        $("#dock_tel_p").animate({
            right:"-300px",
            transition:"all 1s ease-in-out .5s"
        });
    });
    $(".dock_wexin").mouseenter(function () {
        $("#dock_wexin_p").show().animate({
            right:"50px",
            transition:"all 1s ease-in-out .5s"
        });
    }).mouseleave(function () {
        $("#dock_wexin_p").animate({
            right:"-300px",
            transition:"all 1s ease-in-out .5s"
        });
    });
    $(".dock_gupiao").mouseenter(function () {
        $("#dock_gupiao_p").show().animate({
            right:"50px",
            transition:"all 1s ease-in-out .5s"
        });
    }).mouseleave(function () {
        $("#dock_gupiao_p").animate({
            right:"-300px",
            transition:"all 1s ease-in-out .5s"
        });
    });

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
    }).each(function () {
        $(this).mouseleave(function () {
            var w = $(this).attr("w");
            $("#reagent_cover" + w).css({display: "none"})
        })
    });
});
// 导航栏滚动变色
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

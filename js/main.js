$(function() {
    // 导航栏下拉菜单
    // 关于福怡
    $("#guanyu").mouseenter(function () {
        $(".home_down").toggle("fast")
    }).mouseleave(function () {
        $(".home_down").toggle("fast")
    });

    // 产品和服务
    $("#chanping").mouseenter(function () {
        $(".product_down").toggle("fast")
    }).mouseleave(function () {
        $(".product_down").toggle("fast")
    });

    // 临床应用
    $("#lingchuang").mouseenter(function () {
        $(".clinical_down").toggle("fast")
    }).mouseleave(function () {
        $(".clinical_down").toggle("fast")
    });

    // 新闻动态
    $("#xinwen").mouseenter(function () {
        $(".news_down").toggle("fast")
    }).mouseleave(function () {
        $(".news_down").toggle("fast")
    });

    // 联系我们
    $("#lianxi").mouseenter(function () {
        $(".contact_down").toggle("fast")
    }).mouseleave(function () {
        $(".contact_down").toggle("fast")
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
            var v = $(this).attr("data-v");
            $("#reagent_cover" + v).toggle()
        })
    });

    $(".reagent_show_all").each(function () {
        $(this).mouseenter(function () {
            var w = $(this).attr("data-w");
            $("#reagent_cover" + w).css({display: "block"})
        })
    }).each(function () {
        $(this).mouseleave(function () {
            var w = $(this).attr("data-w");
            $("#reagent_cover" + w).css({display: "none"})
        })
    });
});
// 回到顶部
function getTop(){
    var top = $(document).scrollTop();
    if(top>300){
        $(".dock").fadeIn(1000);
        $("#BackToTop").slideDown();
    } else {
        $(".dock").fadeOut(300);
        $("#BackToTop").slideUp();
    }
    setTimeout(getTop);
}
getTop();
$("#BackToTop").click(function () {
    $("body").animate({ scrollTop: 0 }, 1500);
    return false;
});

$(function () {


    /* 新闻tab切换 */
    $(".news-bar li").on("click", function () {
        let index = $(this).index();
        // 修改字体颜色
        // -495px -393px
        if (index == 0) {
            $(this).find("a").css("background-position", "-546px -393px");
            $(this).siblings().find("a").removeAttr("style");
        } else if (index == 1) {
            $(this).find("a").css("background-position", "-444px -393px");
            $(this).siblings().find("a").removeAttr("style");
            $(".news-bar li").eq(0).find("a").css("background-position", "-495px -393px");
        } else if (index == 2) {
            $(this).find("a").css("background-position", "-555px -198px");
            $(this).siblings().find("a").removeAttr("style");
            $(".news-bar li").eq(0).find("a").css("background-position", "-495px -393px");
        } else if (index == 3) {
            $(this).find("a").css("background-position", "-498px -306px");
            $(this).siblings().find("a").removeAttr("style");
            $(".news-bar li").eq(0).find("a").css("background-position", "-495px -393px");
        } else if (index == 4) {
            $(this).find("a").css("background-position", "-392px -336px");
            $(this).siblings().find("a").removeAttr("style");
            $(".news-bar li").eq(0).find("a").css("background-position", "-495px -393px");
        }
        // tab切换
        $(".news-wrap").eq(index).show().siblings(".news-wrap").hide();
    });
});
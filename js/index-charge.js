$(function () {
    // https://fn.qq.com/cp/a20200422fnhd/index.html?ADTAG=cop.innercop.wegame.pc&e_code=508721&wg_ad_from=shopbanner
    ; //视频模块
    (function () {
        $(".charge-content .video-play").on("click", function () {
            $(".cont").show();
            $(".charge-content .play-show").show();
            console.log(11);
        });
        $(".charge-content .close").on("click", function () {
            $(".cont").hide();
            $(".charge-content .play-show").hide();
        });
        /* 遮罩层 */
        $(".cont").height($("body").height());
    }())


    ; //轮播图
    (function () {
        $(".main .box-list").width($(".main .box-list .items").width() * $(".main .box-list .items").length)
        // 得到按钮
        $(".main .box-btn li").on("click", function () {
            let index = $(this).index();
            $(".main .box-btn li").eq(index).addClass("current").siblings().removeClass("current");
            let width = $(".main .box-list .items").width();
            $(".main .box-list").animate({
                left: -index * width
            })
        })
    }())
});
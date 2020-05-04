$(function () {


    ; //翼计划
    (function () {

        /* 页面载入 */
        $(".banner-center .bg-content").addClass("banner-fadeIn")
        $(".banner-center .bg-logo").addClass("banner-fadeIn")
        // $(".banner-center .bg-logo")
        /* 页面载入结束 */
        $(window).on("mousemove", function (e) {
            let moveX = parseInt((e.pageX / $(this).width()) * 30);
            let moveY = parseInt((e.pageY / $(this).height()) * 30);
            $(".banner-center .bg-content").removeClass("banner-fadeIn")
            $(".banner-center .bg-logo").removeClass("banner-fadeIn")
            $(".topbar .items").css({
                transform: `translate3d(${moveX}px, ${moveY}px, 0)`
            })
        })
    }())


    ; //滚动显示
    (function () {
        $(window).on("scroll", function () {
            // console.log(1);
            let moveHeight = $(this).scrollTop();
            $(".section").each(function (index, ele) {
                if (moveHeight >= $(ele).offset().top) {
                    // console.log(index);
                    if (index == 0) {
                        clearInterval(timer);
                        let count = 0;
                        var timer = setInterval(function () {
                            $(".section").eq(index).find(".widget-list .items").eq(count).addClass("widget-cur")
                            count++;
                            if (count >= 20) {
                                clearInterval(timer);
                            }
                        }, 300)
                    } else if (index == 1) {
                        clearInterval(timer);
                        let count = 0;
                        var timer = setInterval(function () {
                            $(".section").eq(index).find(".step-flow .items").eq(count).addClass("widget-cur")
                            count++;
                            if (count >= 20) {
                                clearInterval(timer);
                            }
                        }, 300)
                    } else if (index == 2) {
                        let count = 0;
                        var timer = setInterval(function () {
                            $(".section").eq(index).find(".problem-list-left .problem-list-item").eq(count).addClass("widget-cur")
                            $(".section").eq(index).find(".problem-list-right .problem-list-item").eq(count).addClass("widget-cur")
                            count++;
                            if (count >= 20) {
                                clearInterval(timer);
                            }
                        }, 300)
                    }
                }
            })
        });
    }())
});
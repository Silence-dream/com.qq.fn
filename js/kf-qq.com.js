$(function () {
    /* 登陆显示遮罩层 */
    ;
    (function () {
        $(".login-btn a").on("click", function () {
            $(".web_login").show();
        });
        $(".m-login i").on("click", function () {
            $(".web_login").hide();
        });
    }());

    /* 页面滚动效果 */
    // 得到要滚动的距离

    let navHeight = $(".mod-nav").offset().top - 160;
    $(window).on("scroll", function () {
        // 得到移动距离
        let moveHeight = $(this).scrollTop();
        /* 轮播顶部导航固定 */
        if (moveHeight > 0) {
            $(".kf-header").css({
                background: "#fff"
            })
        } else if (moveHeight == 0) {
            $(".kf-header").css({
                background: "transparent"
            })
        }
        /* 轮播顶部导航固定end */

        /* nav 导航固定 */
        if (moveHeight >= navHeight) {
            $(".kf-nav").addClass("nav-current2")
        } else if (moveHeight < navHeight) {
            $(".kf-nav").removeClass("nav-current2")
        }
        /* nav 导航固定end */

        /* nav 导航固定 bar */
        $(".stairs").each(function (index, ele) {
            let height = parseInt($(ele).offset().top);
            if (moveHeight >= height - 93 * 2) {
                // console.log(index);
                if (index == 0) {
                    $('.bar').css('transform', "translate3d(67.5px, 0px, 0px)");
                } else if (index == 1) {
                    $('.bar').css('transform', "translate3d(342.5px, 0px, 0px)");
                } else if (index == 2) {
                    $('.bar').css('transform', "translate3d(617.5px, 0px, 0px)");
                } else if (index == 3) {
                    $('.bar').css('transform', "translate3d(892.5px, 0px, 0px)");
                }
            }
        })

        /* nav 导航固定 bar end */



        // 侧边栏start
        if (moveHeight > 0) {
            $(".side").stop().animate({
                top: 413.5
            })
            // console.log(111111111);
        } else if (moveHeight == 0) {
            $(".side").stop().animate({
                top: 748
            })
        }
        // 得到滚动条的高度
        let scrollBarHeight = document.documentElement.scrollHeight - document.documentElement.scrollTop - document.documentElement.clientHeight
        if (scrollBarHeight == 0) {
            $(".side").stop().animate({
                top: 193.5
            })
            // console.log(111);
        }
    });




    // $(window).on("scroll", function () {
    //     console.log(11);
    // })
    // $("html,body").animate({
    //     scrollTop: $(".wechat-box title-h2").offset().top
    // })

    /* 页面滚动效果结束*/


    /* 点击谁 bar到谁 */
    $(".index-nav .item").on("click", function () {
        // 得到点击的索引
        let index = $(this).index();
        // 跳转的高度
        let height = $(".stairs").eq(index).offset().top;
        $("html,body").scrollTop(height - 93 * 2);
    })


    /* 刷新页面在当前位置显示相印的效果 */
    ;
    (function () {
        let moveHeight = $(this).scrollTop();
        /* bar start */
        $(".stairs").each(function (index, ele) {
            let height = parseInt($(ele).offset().top);
            if (moveHeight >= height) {
                // console.log(index);
                if (index == 0) {
                    $('.bar').css('transform', "translate3d(67.5px, 0px, 0px)");
                } else if (index == 1) {
                    $('.bar').css('transform', "translate3d(342.5px, 0px, 0px)");
                } else if (index == 2) {
                    $('.bar').css('transform', "translate3d(617.5px, 0px, 0px)");
                } else if (index == 3) {
                    $('.bar').css('transform', "translate3d(892.5px, 0px, 0px)");
                }
            }
        })
        /* bar end */
        /* nav 导航固定 */
        if (moveHeight >= navHeight) {
            $(".kf-nav").addClass("nav-current")
        } else if (moveHeight < navHeight) {
            $(".kf-nav").removeClass("nav-current")
        }
        /* nav 导航固定end */

        /* nav 导航固定 */
        if (moveHeight >= navHeight) {
            $(".kf-nav").addClass("nav-current")
        } else if (moveHeight < navHeight) {
            $(".kf-nav").removeClass("nav-current")
        }
        /* nav 导航固定end */
    }());









});
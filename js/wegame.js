$(function () {


    /* 所有内容 下拉菜单 */
    $(".list-menu").hover(function () {
        $("#wegame-menu").show();
    }, function () {
        $("#wegame-menu").hide();
    })


    ; //大图功能板块
    (function () {
        let flag = true;
        let a = true;
        /* 点击大图变小 */
        $(".big-img-btn").on("click", function () {
            if (flag) {
                $(".big-img-bar").animate({
                    height: 120
                }, 500, function () {
                    // 15875417114478.jpeg
                    a = true;
                    $(".big-img-bar img").prop("src", "./images/15875417114478.jpeg");
                    // 箭头隐藏
                    $(".big-img-mo").hide();
                    flag = false;
                    // 修改箭头方向
                    $(".big-img-btn i").html("&#xe66f;");

                    $(".big-img-bar img").css("height", "120");
                })
            } else {
                a = false;
                $(".big-img-mo").hide();
                $(".big-img-bar img").prop("src", "./images/15875417023882.jpeg");
                $(".big-img-bar img").css("height", "568");
                $(".big-img-bar").animate({
                    height: 568
                }, 1000, function () {
                    // ./images/15875417023882.jpeg
                    // console.log("往下咯");
                    flag = true;
                    // 修改箭头方向
                    $(".big-img-btn i").html("&#xe66d;");

                    // 箭头显示
                    $(".big-img-mo").show();
                })
            }
        })

        $(".big-img-bar,.big-img-mo").hover(function () {
            // over
            if (flag == false && a == true) {
                $(".big-img-mo").show();
            }
        }, function () {
            // out
            if (flag == false) {
                $(".big-img-mo").hide();
            }
        });
    }())








    /* 垂直轮播图 */
    ;
    (function () {
        $('#select_btn li:first').css('border', 'none');
        if ($('#zSlider').length) {
            zSlider();
            $('#h_sns').find('img').click(function () {
                $(this).fadeTo(200, 0.5);
            }, function () {
                $(this).fadeTo(100, 1);
            });
        }

        function zSlider(ID, delay) {
            var ID = ID ? ID : '#zSlider';
            var delay = delay ? delay : 5000;
            var currentEQ = 0,
                picnum = $('#picshow_img li').size(),
                autoScrollFUN;
            $('#select_btn li').eq(currentEQ).addClass('current');
            $('#picshow_img li').eq(currentEQ).show();
            $('#picshow_tx li').eq(currentEQ).show();
            autoScrollFUN = setTimeout(autoScroll, delay);

            function autoScroll() {
                clearTimeout(autoScrollFUN);
                currentEQ++;
                if (currentEQ > picnum - 1) currentEQ = 0;
                $('#select_btn li').removeClass('current');
                $('#picshow_img li').hide();
                $('#picshow_tx li').hide().eq(currentEQ).slideDown(400);
                $('#select_btn li').eq(currentEQ).addClass('current');
                $('#picshow_img li').eq(currentEQ).show();
                autoScrollFUN = setTimeout(autoScroll, delay);
            }
            $('#picshow').click(function () {
                clearTimeout(autoScrollFUN);
            }, function () {
                autoScrollFUN = setTimeout(autoScroll, delay);
            });

            $('#select_btn li').mouseenter(function () {
                var picEQ = $('#select_btn li').index($(this));
                if (picEQ == currentEQ) return false;
                currentEQ = picEQ;
                $('#select_btn li').removeClass('current');
                $('#picshow_img li').hide();
                $('#picshow_tx li').hide().eq(currentEQ).slideDown(100);
                $('#select_btn li').eq(currentEQ).addClass('current');
                $('#picshow_img li').eq(currentEQ).show();
                return false;
            });
        };
    }())



    ;
    (function () {
        $(".date-info").hover(function () {
            // over
            // $(".gcard-infobtn").css("bottom", 40);
            $(this).stop().animate({
                // bottom: 40,
                top: -103
                // opacity: 1
            })
        }, function () {
            $(this).stop().animate({
                // bottom: 40,
                top: -48
                // opacity: 1
            })
        });
    }())



    /* 热门活动轮播图 */
    ;
    (function () {
        let ulWidth = $("#vidv-list .vi-items").length
        // console.log(ulWidth);
        $("#vidv-list").css("width", ulWidth * 100 + "%")


        /* 左 */
        /* -225px */
        // 记录点击次数
        let count = 0;
        // 得到最多能点几次   就是轮播图item-5
        let maxCount = ulWidth - 5;
        /* 点一次走184px+20 */
        $(".vi-pre").on("click", function () {
            count++;
            if (count <= maxCount) {
                $("#vidv-list").animate({
                    left: (-184 + -20) * count
                })
            }
            // $(this).css({'transform':'translateX(300px)'});
        })
        $(".vi-next").on("click", function () {
            // count++;
            count = 0
            $("#vidv-list").animate({
                left: (184 + 20) * count
            })

            // $(this).css({'transform':'translateX(300px)'});
        })
    }())











    /* 排行榜宽度 */
    ;
    (function () {
        let num = $(".more-tui .more-items").length;
        let width = $('.more-items').width() + 20; //20是marin值
        $(".more-tui").css("width", num * width)
    }())









    /* 蛋蛋君轮播图 */
    ;
    (function () {

        //  移动的值
        let move = $(".dandan-focus .dandan-items").innerWidth();
        // 得到ul的当前位置
        let nowMove = parseInt($(".dandan-list").css("left"))

        // 得到有多少张轮播图
        let num = $(".dandan-list .dandan-items").length;
        // 最大移动距离  (轮播图的数量-显示的数量)*move
        // 左边 最大移动距离
        let maxMove = (num - 3) * move;
        // 移动的量等于 nowMove +-  move

        // 判断是否到底了

        // 左
        $('.dandan-btn-left').css("opacity", 0.2);
        $('.dandan-btn-left').on("click", function () {
            if (nowMove < 0) {
                // 如果未走到最大值即可继续点击
                $(".dandan-list").stop().animate({
                    left: nowMove += move
                })
                flag = true;
            }
            $('.dandan-btn-right').css("opacity", 1);
            // 判断是否走到底
            if (nowMove == 0) {
                // console.log("左边不能点了");
                $('.dandan-btn-left').css("opacity", 0.2);
            }
        })

        // 右
        $('.dandan-btn-right').on("click", function () {
            if (-maxMove < nowMove) {
                // 如果未走到最大值即可继续点击
                $(".dandan-list").stop().animate({
                    left: nowMove -= move
                })
                flag = true;
            }
            $('.dandan-btn-left').css("opacity", 1);
            // 判断是否走到底
            if (nowMove == -maxMove) {
                // console.log("右边不能点了");
                $('.dandan-btn-right').css("opacity", 0.2);
            }
        })
    }())





    /* 最新更新轮播图 */
    ;
    (function () {
        // 每个轮播图的宽度 
        let liWidth = $(".skin-hd .focus-list .items").innerWidth();
        let liNum = $(".skin-hd .focus-list .items").length;
        // 控制ul宽度
        $(".skin-hd .focus-list").css("width", liWidth * liNum);

        // 最大移动距离
        let maxMove = (liNum - 3) * liWidth;
        // 得到ul的当前位置
        let nowMove = parseInt($(".skin-hd .focus-list").css("left"));
        // 左按钮
        $('.focus-btn .vi-pre').on("click", function () {
            if (-maxMove < nowMove) {
                $(".skin-hd .focus-list").animate({
                    left: nowMove -= maxMove
                })
            }
            $('.focus-btn .vi-next').css("opacity", 1)
            // 判断是否走到底
            if (nowMove == -maxMove) {
                // console.log("右边不能点了");
                $('.focus-btn .vi-pre').css("opacity", 0.5);
            }
        })
        // 右 
        $('.focus-btn .vi-next').css("opacity", 0.5);
        $('.focus-btn .vi-next').on("click", function () {
            if (nowMove < 0) {
                $(".skin-hd .focus-list").animate({
                    left: nowMove += maxMove
                })
            }
            $('.focus-btn .vi-pre').css("opacity", 1)

            // 判断是否走到底
            if (nowMove == 0) {
                console.log("右边不能点了");
                $('.focus-btn .vi-next').css("opacity", 0.5);
            }
        })


    }())
    /* 最新更新轮播图结束 */
});
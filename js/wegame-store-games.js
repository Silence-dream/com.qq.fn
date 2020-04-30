// let b = window.wegameDate;
// console.log(b);




$(function () {

    ; //顶部轮播图
    (function () {
        /* 页面载入 */
        let itemsWidth = $(".fr-games .items").innerWidth();
        let itemsNum = $(".fr-games .items").length;
        $(".fr-games .fr-games-list").css("width", itemsWidth * itemsNum);
        $(".fr-games .btn-pre").addClass("disabled");
        let ulPosition = parseInt($(".fr-games .fr-games-list").css("left"));
        console.log(ulPosition);

        /* 页面载入结束 */
        // 左
        $(".fr-games .btn-pre").on("click", function () {
            $(".fr-games .btn-next").removeClass("disabled");
            if (ulPosition == 0) {
                $(".fr-games .btn-pre").addClass("disabled");
                console.log("左边点击不了了");
            } else {
                $(".fr-games .fr-games-list").animate({
                    left: ulPosition += itemsWidth
                }, function () {
                    if (ulPosition == 0) {
                        $(".fr-games .btn-pre").addClass("disabled");
                        console.log("左边点击不了了");
                    }
                })
            }


        });
        // 右
        // console.log();
        $(".fr-games .btn-next").on("click", function () {
            $(".fr-games .btn-pre").removeClass("disabled");
            if (ulPosition <= -(itemsNum - 3) * itemsWidth) {
                $(".fr-games .btn-next").addClass("disabled");
                console.log("右边点击不了了");
            } else {
                $(".fr-games .fr-games-list").animate({
                    left: ulPosition -= itemsWidth
                }, function () {
                    if (ulPosition <= -(itemsNum - 3) * itemsWidth) {
                        $(".fr-games .btn-next").addClass("disabled");
                        console.log("右边点击不了了");
                    }
                })
            }

        });
        // $(".fr-games .fr-games-list").on("scroll", function () {
        //     console.log(1);
        // });
    }())




    /* 热门标签 */
    ;
    (function () {
        // 页面载入
        /* 给a上titile  */
        $(".wegame-all .hotTagsList a").each(function (index, ele) {
            $(ele).prop("title", $(ele).find("span").html());
        })
        /* 同时隐藏多余的标签 */
        $(".wegame-all .hotTags .hotTagsList a").each(function (index, ele) {
            if (index >= 10) {
                $(ele).hide();
            }
        })
        // 页面结束
        /* 点击显示标签 */
        let flag = true;
        $("#moreTags").on("click", function () {
            if (flag) {
                $(".wegame-all .hotTagsList a").each(function (index, ele) {
                    if (index >= 10) {
                        $(ele).show();
                    }
                })
                flag = false;
            } else {
                $(".wegame-all .hotTagsList a").each(function (index, ele) {
                    if (index >= 10) {
                        $(ele).hide();
                    }
                })
                flag = true;
            }
        });


    }())
});
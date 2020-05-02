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

    ; //列表渲染
    (function () {
        let data = wegameDate;
        console.log(data);
        load()
        /* 页面载入 */
        function load(params) {
            $(".wegame-all .all-games-list").empty();
            for (let i = 0; i < data.length; i++) {
                // console.log(i);

                $(".wegame-all .all-games-list").append(`
                    <li class="items">
                    <a href="javascript:;" class="figure">
                        <img src=${data[i].img} alt="">
                    </a>
                    <div class="items-info">
                        <div class="table-cell">
                            <div class="gamecard-tit">
                                ${data[i].title}
                            </div>
                            <div class="gamecard-subtit">
                                <span class="txt-num">2020-01-09 上线</span>
                                <span class="user-praise">
                                    推荐率
                                    <i class="txt-num">${data[i].rate.ra}</i>
                                </span>
                            </div>
                            <div class="tui-label">
                                <a href="javascript:;">${data[i].tags[0]}</a>
                                <a href="javascript:;">${data[i].tags[1]}</a>
                                <a href="javascript:;">${data[i].tags[2]}</a>
                                <a href="javascript:;">${data[i].tags[3]}</a>
                            </div>
        
                        </div>
                        <div class="gamecard-other">
        
                        </div>
                    </div>
                    </li>
                `)


                if (data[i].end.type == 1) {
                    $(".wegame-all .all-games-list .items").eq(i).find(".gamecard-other").append(`
                        <span>${data[i].end.price}</span>
                    `)
                } else if (data[i].end.type == 2) {
                    $(".wegame-all .all-games-list .items").eq(i).find(".gamecard-other").append(`
                    <div class="price-tag">
                        ${data[i].end.tag}
                        </div>
                    <div class="price-new">
                        <i>¥</i>
                        <span>
                        ${data[i].end.new}
                        </span>
                    </div>
                    <div class="price-old">
                        <i>¥</i>
                        <del>
                        ${data[i].end.old}
                        </del>
                    </div>
                    `)
                }
            }
        }
        /* 页面载入结束 */

        /* 热门标签 */
        let flag = true;
        $(".hotTagsList a").on("click", function () {
            $(this).addClass("tag-cur").siblings().removeClass("tag-cur");
            let title = $(this).prop("title");
            if (flag) {
                flag = false;
                $(".wegame-all .all-games-list").empty();
                loadType(title);
                // loadType("大型网游");
            } else {
                flag = true;
                $(this).removeClass("tag-cur");
                load();
            }
        });
        /* 热门标签结束 */


        /* type 传入 string */
        function loadType(type) {
            for (let i = 0; i < data.length; i++) {
                if (data[i].type == type) {
                    $(".wegame-all .all-games-list").append(`
                    <li class="items">
                    <a href="javascript:;" class="figure">
                        <img src=${data[i].img} alt="">
                    </a>
                    <div class="items-info">
                        <div class="table-cell">
                            <div class="gamecard-tit">
                                ${data[i].title}
                            </div>
                            <div class="gamecard-subtit">
                                <span class="txt-num">2020-01-09 上线</span>
                                <span class="user-praise">
                                    推荐率
                                    <i class="txt-num">${data[i].rate.ra}</i>
                                </span>
                            </div>
                            <div class="tui-label">
                                <a href="javascript:;">${data[i].tags[0]}</a>
                                <a href="javascript:;">${data[i].tags[1]}</a>
                                <a href="javascript:;">${data[i].tags[2]}</a>
                                <a href="javascript:;">${data[i].tags[3]}</a>
                            </div>
        
                        </div>
                        <div class="gamecard-other">
        
                        </div>
                    </div>
                    </li>
                `)

                    if (data[i].end.type == 1) {
                        $(".wegame-all .all-games-list .items").eq(i).find(".gamecard-other").append(`
                        <span>${data[i].end.price}</span>
                    `)
                    } else if (data[i].end.type == 2) {
                        $(".wegame-all .all-games-list .items").eq(i).find(".gamecard-other").append(`
                    <div class="price-tag">
                        ${data[i].end.tag}
                        </div>
                    <div class="price-new">
                        <i>¥</i>
                        <span>
                        ${data[i].end.new}
                        </span>
                    </div>
                    <div class="price-old">
                        <i>¥</i>
                        <del>
                        ${data[i].end.old}
                        </del>
                    </div>
                    `)
                    }
                }
            }
        }

    }())
});


{
    {
        /* <div class="gamecard-other">
            <div class="price-tag">
                6.3折
            </div>
            <div class="price-new">
                <i>¥</i>
                <span>30</span>
            </div>
            <div class="price-old">
                <i>¥</i>
                <del>48</del>
            </div>
        </div> */
    }


    {
        /* <li class="items">
            <a href="javascript:;" class="figure">
                <img src="./images/all-games1.jpg" alt="">
            </a>
            <div class="items-info">
                <div class="table-cell">
                    <div class="gamecard-tit">
                        梦三国
                    </div>
                    <div class="gamecard-subtit">
                        <span class="txt-num">2020-01-09 上线</span>
                        <span class="user-praise">
                            推荐率
                            <i class="txt-num">69.6%</i>
                        </span>
                    </div>
                    <div class="tui-label">
                        <a href="javascript:;">MMORPG</a>
                        <a href="javascript:;">moba</a>
                        <a href="javascript:;">电子竞技</a>
                        <a href="javascript:;">三国</a>
                    </div>

                </div>
                <div class="gamecard-other">
                    <span>免费</span>
                </div>
            </div>
            </li> */
    }
}
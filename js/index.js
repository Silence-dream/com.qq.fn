$(function () {


    /* 新闻tab切换 */
    // 进入页面让第一个tab背景色为白色
    $(".news-bar li").eq(0).css("background", "#fff");
    $(".news-bar li").on("click", function () {
        let index = $(this).index();
        // 修改字体颜色
        // -495px -393px
        $(this).css("background", "#fff").siblings("li").removeAttr("style");
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







    // 热门活动tab切换
    $("#hotact .head li").on("mouseenter", function () {
        // 伪元素添加
        $(this).addClass("cur cur1").siblings().removeClass("cur cur1");
        let index = $(this).index();
        $("#hotact .content-list").empty();
        if (index == 0) {
            $("#hotact .content-list").append(`
            <li>
                <img src="./images/hotact-img1.png" alt="">
                <a href="javascript:;"></a>
                <p>活动时间：2020.4.5 - 2020.5.1</p>
            </li>
            <li>
                <img src="./images/hotact-img2.png" alt="">
                <a href="javascript:;"></a>
                <p>活动时间：2020.4.5 - 2020.5.1</p>
            </li>
            <li>
                <img src="./images/hotact-img3.jpg" alt="">
                <a href="javascript:;"></a>
                <p>活动时间：2020.4.5 - 2020.5.1</p>
            </li>
            `)
        } else if (index == 1) {
            $("#hotact .content-list").append(`
            <li>
                <img src="./images/hotact-img4.jpg" alt="">
                <a href="javascript:;"></a>
                <p>活动时间：2019.11.22 - 2019.12.12</p>
            </li>
            <li>
                <img src="./images/hotact-img5.jpg" alt="">
                <a href="javascript:;"></a>
                <p>活动时间：2019.11.15 - 2019.12.12</p>
            </li>
            <li>
                <img src="./images/hotact-img6.jpg" alt="">
                <a href="javascript:;"></a>
                <p>活动时间：2019.11.8 - 2019.12.12</p>
            </li>
            `)
        } else if (index == 2) {
            $("#hotact .content-list").append(`
            <li>
                <img src="./images/hotact-img7.png" alt="">
                <a href="javascript:;"></a>
                <p>活动时间：2019.10.18 - 2019.12.12</p>
            </li>
            `)
        }
    })


    // 玩法中心tab切换
    $("#playcenter .head li").on("mouseenter", function () {
        // 伪元素添加
        $(this).addClass("cur cur1").siblings().removeClass("cur cur1");
        let index = $(this).index();
        $("#playcenter .content-list").empty();
        if (index == 0) {
            $("#playcenter .content-list").append(`
        <li>
            <div class="pic-box">
                <img src="./images/playcenter-img1.jpg" alt="">
            </div>
            <p class="mode">百分激斗:虹吸</p>
            <p class="date">开启状态:未开启</p>
            <a href="javascript:;" class="datail-btn"></a>
        </li>
        <li>
            <div class="pic-box">
                <img src="./images/playcenter-img2.jpg" alt="">
            </div>
            <p class="mode">狙击枪战</p>
            <p class="date">开启状态:未开启</p>
            <a href="javascript:;" class="datail-btn"></a>
        </li>
        <li>
            <div class="pic-box">
                <img src="./images/playcenter-img3.png" alt="">
            </div>
            <p class="mode">一发入魂</p>
            <p class="date">开启状态:未开启</p>
            <a href="javascript:;" class="datail-btn"></a>
        </li>
            `)
        } else if (index == 1) {
            $("#playcenter .content-list").append(`
        <li>
            <div class="pic-box">
                <img src="./images/playcenter-img4.jpg" alt="">
            </div>
            <p class="mode">经典玩法</p>
            <p class="date">开启状态:开启中</p>
            <a href="javascript:;" class="datail-btn"></a>
        </li>
        <li>
            <div class="pic-box">
                <img src="./images/playcenter-img5.jpg" alt="">
            </div>
            <p class="mode">百分激斗</p>
            <p class="date">开启状态:开启中</p>
            <a href="javascript:;" class="datail-btn"></a>
        </li>
        <li>
            <div class="pic-box">
                <img src="./images/playcenter-img6.jpg" alt="">
            </div>
            <p class="mode">50V50</p>
            <p class="date">开启状态:未开启</p>
            <a href="javascript:;" class="datail-btn"></a>
        </li>
            `)
        } else if (index == 2) {
            $("#playcenter .content-list").append(`
            <li>
            <div class="pic-box">
                <img src="./images/playcenter-img7.jpg" alt="">
            </div>
            <p class="mode">PUMP IT!</p>
            <p class="date">CODE：2201-4498-7425</p>
            <a href="javascript:;" class="datail-btn"></a>
        </li>
        <li>
            <div class="pic-box">
                <img src="./images/playcenter-img8.jpg" alt="">
            </div>
            <p class="mode">AWP LEGO</p>
            <p class="date">CODE：4265-3743-2329</p>
            <a href="javascript:;" class="datail-btn"></a>
        </li>
        <li>
            <div class="pic-box">
                <img src="./images/playcenter-img9.jpg" alt="">
            </div>
            <p class="mode">Lefty Leave</p>
            <p class="date">CODE：5184-5792-0669</p>
            <a href="javascript:;" class="datail-btn"></a>
        </li>
            `)
        }
    })
    // 玩法中心 a标签
    $("#playcenter .datail-btn").hover(function () {
        $(this).css("opacity", "0.7");
    }, function () {
        $(this).removeAttr("style");
    })



    /* 最新视频 */
    $("#video .head li").on("mouseenter", function () {
        // 伪元素添加
        $(this).addClass("cur cur1").siblings().removeClass("cur cur1");
        let index = $(this).index();
        $("#video .content-list").empty();
        if (index == 0) {
            $("#video .content-list").append(`
        <li>
            <div class="pic-box">
                <img src="./images/video-img1.jpg" alt="">
            </div>
            <p class="name">堡垒之夜 x 死侍 联动开启！全新宣传片首发！</p>
            <a href="javascript:;"></a>
        </li>
        <li>
            <div class="pic-box">
                <img src="./images/video-img2.jpg" alt="">
            </div>
            <p class="name">谁能获得最终胜利！堡垒之夜间谍模式来袭</p>
            <a href="javascript:;"></a>
        </li>
        <li>
            <div class="pic-box">
                <img src="./images/video-img3.jpg" alt="">
            </div>
            <p class="name">堡垒第二夜第二赛季官方宣传片：特工对决</p>
            <a href="javascript:;"></a>
        </li>
        <li>
            <div class="pic-box">
                <img src="./images/video-img4.jpg" alt="">
            </div>
            <p class="name">堡垒第二夜第二赛季英雄季卡宣传片：特工对决</p>
            <a href="javascript:;"></a>
        </li>
        <li>
            <div class="pic-box">
                <img src="./images/video-img5.jpg" alt="">
            </div>
            <p class="name">堡垒第二夜第二赛季官方宣传片：特工对决</p>
            <a href="javascript:;"></a>
        </li>
        <li>
            <div class="pic-box">
                <img src="./images/video-img6.jpg" alt="">
            </div>
            <p class="name">V11.40 武器升级平台更新 转化功能登场</p>
            <a href="javascript:;"></a>
        </li>
        <li>
            <div class="pic-box">
                <img src="./images/video-img7.jpg" alt="">
            </div>
            <p class="name">星球大战联动，全新武器光剑到底有多酷？</p>
            <a href="javascript:;"></a>
        </li>
        <li>
            <div class="pic-box">
                <img src="./images/video-img8.jpg" alt="">
            </div>
            <p class="name">天行者崛起！星球大战联动大事件全程直播</p>
            <a href="javascript:;"></a>
        </li>
            `)
        } else if (index == 1) {
            $("#video .content-list").append(`
            <li>
            <div class="pic-box">
                <img src="./images/video-img1.jpg" alt="">
            </div>
            <p class="name">堡垒之夜 x 死侍 联动开启！全新宣传片首发！</p>
            <a href="javascript:;"></a>
        </li>
        <li>
            <div class="pic-box">
                <img src="./images/video-img2.jpg" alt="">
            </div>
            <p class="name">谁能获得最终胜利！堡垒之夜间谍模式来袭</p>
            <a href="javascript:;"></a>
        </li>
        <li>
            <div class="pic-box">
                <img src="./images/video-img3.jpg" alt="">
            </div>
            <p class="name">堡垒第二夜第二赛季官方宣传片：特工对决</p>
            <a href="javascript:;"></a>
        </li>
        <li>
            <div class="pic-box">
                <img src="./images/video-img4.jpg" alt="">
            </div>
            <p class="name">堡垒第二夜第二赛季英雄季卡宣传片：特工对决</p>
            <a href="javascript:;"></a>
        </li>
        <li>
            <div class="pic-box">
                <img src="./images/video-img5.jpg" alt="">
            </div>
            <p class="name">堡垒第二夜第二赛季官方宣传片：特工对决</p>
            <a href="javascript:;"></a>
        </li>
        <li>
            <div class="pic-box">
                <img src="./images/video-img6.jpg" alt="">
            </div>
            <p class="name">V11.40 武器升级平台更新 转化功能登场</p>
            <a href="javascript:;"></a>
        </li>
        <li>
            <div class="pic-box">
                <img src="./images/video-img7.jpg" alt="">
            </div>
            <p class="name">星球大战联动，全新武器光剑到底有多酷？</p>
            <a href="javascript:;"></a>
        </li>
        <li>
            <div class="pic-box">
                <img src="./images/video-img8.jpg" alt="">
            </div>
            <p class="name">天行者崛起！星球大战联动大事件全程直播</p>
            <a href="javascript:;"></a>
        </li>
            `)
        } else if (index == 2) {
            $("#video .content-list").append(`
        <li>
            <div class="pic-box">
                <img src="./images/video-img9.jpg" alt="">
            </div>
            <p class="name">堡垒哥：最隐蔽的地方，100个人都找不到</p>
            <a href="javascript:;"></a>
        </li>
        <li>
            <div class="pic-box">
                <img src="./images/video-img10.jpg" alt="">
            </div>
            <p class="name">堡垒哥：这样拜年压岁钱更多，当红男团包子兄弟共贺新春！</p>
            <a href="javascript:;"></a>
        </li>
        <li>
            <div class="pic-box">
                <img src="./images/video-img11.jpg" alt="">
            </div>
            <p class="name">堡垒哥：星球大战凌晨3点大彩蛋，1000外星人入侵堡垒大陆！</p>
            <a href="javascript:;"></a>
        </li>
        <li>
            <div class="pic-box">
                <img src="./images/video-img12.jpg" alt="">
            </div>
            <p class="name">堡垒哥：空中发现巨型战舰，外星人入侵堡垒大地！新联动星球大战</p>
            <a href="javascript:;"></a>
        </li>
        <li>
            <div class="pic-box">
                <img src="./images/video-img13.jpg" alt="">
            </div>
            <p class="name">堡垒哥：100人使用裂缝会怎样？盘点游戏十大改动</p>
            <a href="javascript:;"></a>
        </li>
        <li>
            <div class="pic-box">
                <img src="./images/video-img14.jpg" alt="">
            </div>
            <p class="name">堡垒哥：全球玩家被黑洞吞噬！史上最大彩蛋</p>
            <a href="javascript:;"></a>
        </li>
        <li>
            <div class="pic-box">
                <img src="./images/video-img15.jpg" alt="">
            </div>
            <p class="name">堡垒哥：蔡徐坤客串漫威DC大片？演技全程被蝙蝠侠无视</p>
            <a href="javascript:;"></a>
        </li>
        <li>
            <div class="pic-box">
                <img src="./images/video-img16.jpg" alt="">
            </div>
            <p class="name">三门来了：这次没有攻略，只有满满的祝福送给堡垒之夜周年庆！</p>
            <a href="javascript:;"></a>
        </li>
            `)
        } else if (index == 3) {
            $("#video .content-list").append(`
        <li>
            <div class="pic-box">
                <img src="./images/video-img17.jpg" alt="">
            </div>
            <p class="name">【艾登小技巧】100秒学会侧跳！有手就行！</p>
            <a href="javascript:;"></a>
        </li>
        <li>
            <div class="pic-box">
                <img src="./images/video-img18.jpg" alt="">
            </div>
            <p class="name">【三门充电站】N改板方式，哪种最适合你？新手必看</p>
            <a href="javascript:;"></a>
        </li>
        <li>
            <div class="pic-box">
                <img src="./images/video-img19.jpg" alt="">
            </div>
            <p class="name">【堡垒模范生】发生在未来，第九赛季地图变化</p>
            <a href="javascript:;"></a>
        </li>
        <li>
            <div class="pic-box">
                <img src="./images/video-img20.jpg" alt="">
            </div>
            <p class="name">【三门充电站】岩浆里装备拿不到？小技巧Get！</p>
            <a href="javascript:;"></a>
        </li>
        <li>
            <div class="pic-box">
                <img src="./images/video-img21.jpg" alt="">
            </div>
            <p class="name">【堡垒模范生】第八赛季大事件第一视角</p>
            <a href="javascript:;"></a>
        </li>
        <li>
            <div class="pic-box">
                <img src="./images/video-img22.jpg" alt="">
            </div>
            <p class="name">【三门充电站】职业哥都用的滑轮小技巧！你会几个？</p>
            <a href="javascript:;"></a>
        </li>
        <li>
            <div class="pic-box">
                <img src="./images/video-img23.jpg" alt="">
            </div>
            <p class="name">【堡垒模范生】符文显现！第八赛季大事件相关</p>
            <a href="javascript:;"></a>
        </li>
        <li>
            <div class="pic-box">
                <img src="./images/video-img24.jpg" alt="">
            </div>
            <p class="name">【艾登小技巧】不搭板玩家的福音！猛男架枪位</p>
            <a href="javascript:;"></a>
        </li>
            `)
        } else if (index == 4) {
            $("#video .content-list").append(`
        <li>
            <div class="pic-box">
                <img src="./images/video-img25.jpg" alt="">
            </div>
            <p class="name">世界杯冠军：Bugha的战斗巴士之旅</p>
            <a href="javascript:;"></a>
        </li>
        <li>
            <div class="pic-box">
                <img src="./images/video-img26.jpg" alt="">
            </div>
            <p class="name">赏金赛NA东部总决赛第5场[最终结果]</p>
            <a href="javascript:;"></a>
        </li>
        <li>
            <div class="pic-box">
                <img src="./images/video-img27.jpg" alt="">
            </div>
            <p class="name">赏金赛冠军系列赛决赛-NA东部总决赛第5场</p>
            <a href="javascript:;"></a>
        </li>
        <li>
            <div class="pic-box">
                <img src="./images/video-img28.jpg" alt="">
            </div>
            <p class="name">赏金赛冠军系列赛决赛-NA东部总决赛第4场</p>
            <a href="javascript:;"></a>
        </li>
        <li>
            <div class="pic-box">
                <img src="./images/video-img29.jpg" alt="">
            </div>
            <p class="name">赏金赛冠军系列赛决赛-NA东部总决赛第3场</p>
            <a href="javascript:;"></a>
        </li>
        <li>
            <div class="pic-box">
                <img src="./images/video-img30.jpg" alt="">
            </div>
            <p class="name">赏金赛冠军系列赛决赛-NA东部总决赛第2场</p>
            <a href="javascript:;"></a>
        </li>
        <li>
            <div class="pic-box">
                <img src="./images/video-img31.jpg" alt="">
            </div>
            <p class="name">赏金赛冠军系列赛决赛-NA东部总决赛第1场</p>
            <a href="javascript:;"></a>
        </li>
        <li>
            <div class="pic-box">
                <img src="./images/video-img32.jpg" alt="">
            </div>
            <p class="name">赏金赛四连冠系列赛第十季总决赛集锦</p>
            <a href="javascript:;"></a>
        </li>
            `)
        }
        // 给a标签添加title
        $("#video .content-list .name").each(function (index, ele) {
            $("#video .content-list .pic-box").eq(index).siblings("a").prop("title", $(ele).text())
        })
    })
    // 页面载入给a标签添加title
    $("#video .content-list .name").each(function (index, ele) {
        $("#video .content-list .pic-box").eq(index).siblings("a").prop("title", $(ele).text())
    })





    /* 下拉菜单 下拉列表 */
    $(".menu-list li").hover(function () {
        $(".nav-mask").stop().slideDown();
    }, function () {
        $(".nav-mask").stop().slideUp();
    }), $(".nav-mask").hover(function () {
        $(".nav-mask").stop().slideDown();
    }, function () {
        $(".nav-mask").stop().slideUp();
    })



    /* 菜单栏固定导航 */
    $(window).on("scroll", function () {
        // 菜单栏的高度
        let menuHeight = $(".top-meun").offset().top;
        // 滚动高度
        let moveHeight = $(this).scrollTop();
        // console.log($(".top-meun").offset().top, $(this).scrollTop());
        // 顶部菜单栏
        if (moveHeight >= menuHeight) {
            $(".top-meun").css({
                "position": "fixed",
                top: 0,
                left: 0,
                width: "100%",
                "z-index": 999
            });
        }
        if (menuHeight == 0) {
            $(".top-meun").removeAttr("style")
        }


        // 右侧侧边栏 进入与出去
        if (moveHeight >= $(".btn-check").offset().top) {
            $(".slide-bar").css({
                right: 0
            })
        } else {
            $(".slide-bar").css({
                right: -300
            })
        }

        // 右侧侧边栏的楼梯导航
        $(".part").each(function (index, ele) {
            // console.log(ele);
            if (moveHeight > $(ele).offset().top - 200) {
                // 排他算法 清除行内式
                $(".slide-icon").each(function (index, ele) {
                    $(ele).removeAttr("style");
                })
                /* 分别让图标变蓝 */
                if (index == 0) {
                    $(".slide-icon").eq(index).css({
                        backgroundPosition: "-496px -455px",
                    })
                } else if (index == 1) {
                    $(".slide-icon").eq(index).css({
                        backgroundPosition: "-432px -423px",
                    })
                } else if (index == 2) {
                    $(".slide-icon").eq(index).css({
                        backgroundPosition: "-508px -423px",
                    })
                } else if (index == 3) {
                    $(".slide-icon").eq(index).css({
                        backgroundPosition: "-461px -455px",
                    });
                }
            }
        })
    })

    // 点击侧边栏跳转
    $(".slide-item").on("click", function (e) {
        e.preventDefault();
        let index = $(this).index() - 1;
        console.log(index);
        // console.log($(".part"));
        if (index == 0) {
            $("html,body").animate({
                scrollTop: $(".part").eq(index).offset().top - 100
            })
            console.log("我的第" + index);
        } else if (index == 1) {
            $("html,body").animate({
                scrollTop: $(".part").eq(index).offset().top - 100
            })
            console.log("我的第" + index);
        } else if (index == 2) {
            $("html,body").animate({
                scrollTop: $(".part").eq(index).offset().top - 100
            })
            console.log("我的第" + index);
        } else if (index == 3) {
            $("html,body").animate({
                scrollTop: $(".part").eq(index).offset().top - 100
            })
            console.log("我的第" + index);
        }
    })

    // 鼠标移入变蓝
    $(".slide-item").hover(function () {
        // over
        // 得到索引
        let index = $(this).index() - 1;
        if (index == 0) {
            $(".slide-icon").eq(index).css({
                backgroundPosition: "-496px -455px",
            })
        } else if (index == 1) {
            $(".slide-icon").eq(index).css({
                backgroundPosition: "-432px -423px",
            })
        } else if (index == 2) {
            $(".slide-icon").eq(index).css({
                backgroundPosition: "-508px -423px",
            })
        } else if (index == 3) {
            $(".slide-icon").eq(index).css({
                backgroundPosition: "-461px -455px",
            });
        }

    }, function () {
        // out
        let index = $(this).index() - 1;
        $(".slide-icon").eq(index).removeAttr("style");
    });


    // 点击返回顶部
    $(".top").on("click", function () {
        $("html,body").animate({
            scrollTop: 0
        })
    });

    // 微信二维码
    $(".wx-icon").hover(function () {
        // over
        $(".qr-code").show();
    }, function () {
        // out
        $(".qr-code").hide();
    });


});
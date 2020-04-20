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
});
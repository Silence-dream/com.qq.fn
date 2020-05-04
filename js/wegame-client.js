$(function () {
    $(window).scroll(function () {
        /* 移动的高度 */
        let move = $(this).scrollTop();
        // console.log(move);
        /* app-scene  */
        $(".app-scene").each(function (index, ele) {
            if (move >= $(ele).offset().top) {
                $(this).find(".move-show").show();
            }
        })
    })
})
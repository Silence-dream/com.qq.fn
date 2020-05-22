$(function () {

  /* 页面载入效果 */
  ;
  (function () {
    $(".cover").show();
    $(".bg-cont02 .adbot").css({
      "visibility": "hidden"
    })
    $(window).on("scroll", function () {
      // 页面滚动的距离
      let move = $(this).scrollTop();
      console.log(move);
      // 载入的大封面显示
      $(".cover").fadeOut(function () {
        $(".bg-top .sloga").css({
          "animation-name": "bounceIn"
        })
      });


      let bgCont02 = parseInt($(".bg-cont02").offset().top);
      if (move >= bgCont02) {
        $(".bg-cont02 .adbot").css("visibility", "visible");
      }
    });




  }())
});
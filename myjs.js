/**
 * Created by L on 2018/9/28.
 */
$(function () {

    // 报名试驾
    $("#sign_up").hover(function () {
        $("#car").stop().animate({left:"0px"},1000);
        $("#mini_nav").show().on("mouseenter","li", function () {
            $(this).addClass("signBC").siblings().removeClass("signBC");
        });
    }, function () {
        $("#car").stop().animate({left:"16px"},1000);
        $("#mini_nav").hide().find("li").eq(0).addClass("signBC").siblings().removeClass("signBC");
    })

    // nav-box 出现长导航条
    $("#nav_box").hover(function () {
        $("body").css({
            "overflow-x":"hidden",
            "overflow-y":"hidden"
        });
        $("#long_nav").show().on("mouseenter","li", function () {
            $(this).children("a").addClass("licolor").end().siblings().children("a").removeClass("licolor");
        });
    }, function () {
        $("body").css("overflow-y","auto");
        $("#long_nav").hide().find("li").eq(0).children("a").addClass("licolor")
            .end().siblings().children("a").removeClass("licolor");
    })

    // 箭头高亮
   /*  setInterval(function () {
         $("#arrow").css({"color":"#ffffff","font-size":"70px"});
         setTimeout(function () {
             $("#arrow").css({"color":"#cecece","font-size":"50px"});
         },1000)
     },2000)*/

    // 点击test盒子出现试题
    $("#test").on("click","li", function () {
        $(this).children("div").show().on("click",".close", function (e) {
            $(this).parent().hide();
            e.stopPropagation();
        })
    })








})

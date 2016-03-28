/**
 * Created by Aqua on 2016/3/21.
 */

$(function()
{
    var scrollLeft = document.body.scrollLeft || (document.documentElement && document.documentElement.scrollLeft);

    $(".btn-signup").click(function(){
        $("#mymodal").addClass("show");
    });

    $(".cancel").click(function(){
        $("#mymodal").toggleClass("show") ;
    });

    $(".btn-menu").click(function(){
        $(".icon-collapse").toggleClass("icon-collapse-close");
        $(".icon-close").toggleClass("icon-close-toggle");
        $(".open").toggleClass("show");
    });

    function moveLeft(){
        $(".case-item").each(function(){

            var right = parseInt($(this).css("right"));
            if(!Number.isInteger(right)) right = 0;/* IE6以及最新的chrome。firefox已支持 Number,isInteger()*/
            if(right>-151){
                right = right - 150;
                $(this).css({
                    'position': 'relative',
                    'right': right + 'px'
                });
            }
        });
    }

    function moveRight(){
        $(".case-item").each(function () {
                var right = parseInt($(this).css("right"));
                if (right<1000) {
                    right = right + 150;
                    $(this).css({
                        'position': 'relative',
                        'right': right + 'px'
                    });
                }
            }
        );
    }

    /*按next键，整个图片往左移，所以right+150*/
    $(".key-next").click(moveRight);
    $(".key-prev").click(moveLeft);

    /*用户评论自动循环更替*/
    var index = 0;/*不能放在函数里面*/
    function novation() {
        if (index > 2) {
            index = 0;
        }
        switch (index) {
            case 0 :
            {
                /*$(select).fadeout(speed,callback);以参数形式添加callback函数~保证在动画100%完成
                * 时再执行callback函数~避免产生错误或页面冲突*/
                $(".tweet3").fadeOut(500,function(){
                    $(".tweet1").fadeIn(500);
                });
                break;
            }
            case 1 :
            {
                $(".tweet1").fadeOut(500,function(){
                    $(".tweet2").fadeIn(500);
                });

                break;
            }
            case 2 :
            {
                $(".tweet2").fadeOut(500,function(){
                    $(".tweet3").fadeIn(500);
                });
                break;
            }
        }


        index++;


    }

    /**在JS中无论是setTimeout还是setInterval，在使用函数名作为调用句柄时都不能带参数
     **，而在许多场合必须要带参数，这就需要想方法解决。已下这种叫做匿名函数包装法*/
    setInterval(function(){
        novation(index);
    }, 6000);



}
);
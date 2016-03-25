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

}
);
/*eslint-disable*/

$(function(){

    $("li.mainLi").mouseover(function(){
       $("ul.subMenu").stop().slideDown(700);
    });

    $("li.mainLi").mouseout(function(){
        $("ulsubMenu").stop().slideUp(200);
    });
});

$(function(){
    setInterval(fnSlide, 5000);
    function fnSlide(){
        $("#slide a:first-chide").fadeOut(
        1000,
        function(){
            $("#slide a:frist-child")
            .insertAfter("#slide a:last-child");


        }
        );

    $("slide a:nth-child(2)").fadeIn(3000);
    }

$("#bbs button").click(function(){
    $("#bbs button").removecalss("selected");
    $(this).addcalss("selcted");

    var dataLink = $(this).attr("data-link");
$("#bbs.tabcontents").css({"dispaly : none"});

});


  
        

    
});


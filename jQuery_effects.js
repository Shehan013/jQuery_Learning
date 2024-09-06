$(document).ready(function(){
    $('#btn1').click(function(){
        $('.pcls1').hide("fast");
        $(".pcls2").hide("slow");
        $('.pcls3').hide(4000);
    });

    $('#btn2').on("click", function(){
        $("[class='pcls1']").show("fast");
        $('[class="pcls2"]').show("slow");
        $('.pcls3').show(4000);
    });

    $("#btn3").on('click', function(){
        $('.pcls1').toggle('fast');
        $(".pcls2").toggle("slow");
        $('.pcls3').toggle(4000);
    });

    $("#btn4").click(function(){
        $(".pcls1").fadeOut("fast");
        $(".pcls2").fadeOut("slow");
        $("[class='pcls3']").fadeOut(4000);
    })

    $("#btn5").on("click", function(){
        $(".pcls1").fadeIn("fast");
        $("[class='pcls2']").fadeIn("slow");
        $(".pcls3").fadeIn(4000);
    });

    $("#btn6").click(function(){
        $(".pcls1").fadeToggle("fast");
        $(".pcls2").fadeToggle("slow");
        $(".pcls3").fadeToggle(4000);
    });

    $('#btn7').on('click',function(){
        $('.pcls1').fadeTo('fast',0.5);
        $('.pcls2').fadeTo('slow',0.5);
        $("[class='pcls3']").fadeTo(4000,0.5);
    });

    $("#btn11").on("click",function(){
        $('.animi').animate({left: '250px'});
    });

    $("#btn12").on("click",function(){
        $('.pcls4').slideDown(2000).slideUp(2000);
    });
});



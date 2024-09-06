$(document).ready(function(){
    $("#para1").click(function(){
        alert("You clicked on paragraph");
    });

    $("#btn1clk").click(function(){
        $(this).hide();
    });
    
    $("#btn2clk").dblclick(function(){
        $(this).hide();
    });
    
    $("[class='pcls1']").hover(function(){
        $(this).hide();
        // $(this).css("background-color","red");
        // $(this).html("You Hovered over me");
    });

    $(".pcls2").mouseenter(function(){
        $(this).css('background-color','red');
    });

    $('.pcls2').mouseleave(function(){
        $(this).css("background-color","yellow");
    });
});

// On() method
$(document).ready(function(){
    $("#btn1clk").on("click",function(){
        $(this).hide();
     });
});

// Multiple Event Binding
$(document).ready(function(){
    $(".pcls2").on({
        mouseenter:function(){
            $(this).css("background-color","red");
        },
        mouseleave:function(){
            $(this).css('background-color',"yellow");
        }});
});

// Event Binding Using Named Functions
function clicked(){
    $(this).text("Used a named function!");
}

$(document).ready(function(){
    $("[class='pcls0']").on("click",clicked);
});
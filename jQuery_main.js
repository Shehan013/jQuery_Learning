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

//AJAX
$(document).ready(function(){
    $("#btn13").on("click", function(){
        $('.data').text("Let's Learn AJAX using jQuery, this caption is generated by using on(click) function of jQuery");
    });

    $("#btn14").on("click",function(){
        $.ajax("ajax_info.html",{
            success: function(result){
                $(".ajax_info_ajax").html(result);
            }
        });
    });

    // $("#btn15").click(function(){
    //     $(".ajax_info_load").load("ajax_infotxt.txt");
    // });

    $("#btn15").click(function(){
        $(".ajax_info_load").load("ajax_infotxt.txt",function(responseTxt,statusTxt,xhr){
            if(statusTxt == "success")
                alert("Content loaded successfully");
            if(statusTxt == "error")
                alert("Error");
        });
    });
});
// Create event listener to enter items below
$("#enter").on("click",function() {

    var taskitem=$("#todoItem").val();
    $("#todoList").append("<div class='task'>" + taskitem + "<div class='x fas fa-times-circle'></div></div>")
   

});


// Create event listener to delete items below
$(document).on("click",".x", function() {
    $(this).parent().remove();

});

// Create event listener to toggle 

$(document).on("click",".task", function(){
    $(this).toggleClass("done");

    if ($(this).hasClass("done")) {
        $(this).find("div").removeClass("fa-times-circle");
        $(this).find("div").addClass("fa-chess-knight");

    }
    else {
        $(this).find("div").addClass("fa-times-circle");

    }

});

$(".removeAll").on("click",function(){
    $(".task").remove();
} );

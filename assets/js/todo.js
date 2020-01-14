//check off specific todos by clicking
$("ul").on("click", "li", function(){
    $(this).toggleClass("completed");
});

//click on x to delete todo
$("ul").on("click", "span", function(event){
    $(this).parent().fadeOut(500,function(){
        $(this).remove();
    });
    event.stopPropagation();
})

//add new todos to list
$("input[type='text']").keypress(function(event){
    if(event.which === 13){
        let newTodo = $(this).val();
        $(this).val("");
        $("ul").append("<li><span><i class='fas fa-trash-alt'></i></span> " + newTodo + "</li>");
    }
});

$(".fa-plus-circle").click(function(){
    $("input[type='text']").fadeToggle();
});
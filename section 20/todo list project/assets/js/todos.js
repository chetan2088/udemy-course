// check off special todos by clicking
$("ul").on("click", "li",  function(){
    $(this).toggleClass("completed");
})
// click x to del
$("ul").on("click", "span", function(event){
    $(this).parent().fadeOut(500,function(){
        $(this).remove();
    });
    event.stopPropagation();
})
$("input[type='text'").keypress(function(){
    if(event.which === 13){
    var todoText = $(this).val();
    $(this).val("");
    // create a new li and add to ul 
    $("ul").append("<li><span>x </span>" + todoText + "</li>");
    }
})
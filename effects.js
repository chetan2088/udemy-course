$("Button").on("click", function(){
    // $('div').fadeOut(1000, function(){
    // console.log("fade completed!");
    // $(this).remove();
    // });

    
    // $('div').fadeToggle(500); 

    // $('div').slideDown();

    // $('div').slideUp();

    $('div').slideToggle(1000, function(){
    console.log("Slide is done!")
});

});


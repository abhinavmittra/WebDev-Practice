//Check off Specific ToDo's by Clicking on them
$("ul").on("click","li",function(){
  $(this).toggleClass("completed");
});

//Click on Icon to Delete To-Do
$("ul").on("click","span",function(event){
  $(this).parent().fadeOut(500,function(){
    $(this).remove();
  });
  event.stopPropagation(); //Stops event from bubbling up DOM Tree
})

//Adding new Todo's
$("input[type='text']").keypress(function(event){
  if(event.which===13){//Checking for Enter keypress
   var todoText = $(this).val();
   $(this).val("")
   //Add to UL
   $("ul").append("<li><span><i class='fas fa-trash-alt'></i></span> "+todoText+"</li>")
  }
})

$(".fa-pencil-alt").click(function(){
  $("input[type='text']").fadeToggle();
})
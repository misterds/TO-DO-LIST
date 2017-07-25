// check of  specific TODS BY Clicking 
 $("ul").on("click","li",function(){
 	$(this).toggleClass("completed");
 });

 // click on the  x  to delit  to do -----------------------
 $("ul").on("click","span",function(ev){
 	/*(this) > span , .parent()-> is  "li" , 
 	fadeout 5ms and  after that
 	will remove the  row  from the lis*/
 	$(this).parent().fadeOut(500,function(){
 		$(this).ready();
 	});
 	// dtoping babbeling  and it  is  will reference to  span anly
 	ev.stopPropagation();
 });


 // input events ----------------------------------
 $("input[type='text']").keypress(function(event){
 /* checking if  the enter  eas  press  the  
  which is  the  method converting the code  
  from key  outpuu   code  forn ENTER is =13*/
 	if(event.which === 13){
 		// grab new  tot  text from input
 		var todoLits=$(this).val();
 		// empty  input text area 
 		$(this).val("");
 		// create  a new  list  and add to the ul
 		$("ul").append("<li><span><i class='fa fa-trash' aria-hidden='true'></i> </span> " + todoLits + "</li>")
 	}
 });

 $(".fa-plus").on("click", function(){
 	$("input[type='text']").fadeToggle();
 });
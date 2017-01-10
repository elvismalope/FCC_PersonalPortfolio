
$(function(){
	var navbarMenu = $("#navbarMenu");
	navbarMenu.on("click", "a", null,function(){
		navbarMenu.collapse('hide');
	});
});
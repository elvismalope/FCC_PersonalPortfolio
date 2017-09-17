
$(function(){
	var navbarMenu = $("#navbarMenu");
	navbarMenu.on("click", "a", null,function(){
		navbarMenu.collapse('hide');
	});
});

function openEmailClient() {
	var message 			= $("#message_1").val();
	var name 					= $("#name_1").val();
	var contactNumber = $("#phone_1").val();
	var subject = "Mail From emDev Website";
	var body  = message + ".\n " + "Name: " + name + ".\n " + "Contact Number: " + contactNumber;

	window.open("mailto:juzilopes@gmail.com?" + "subject=" + subject + "&body=" + body);

}

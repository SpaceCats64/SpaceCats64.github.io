$(document).ready(()=>{
	$("#BGM").hide();
	$("#BBG").hide();

	$("h1").click((e)=>{
		$(e.target).next().animate({width:'toggle', opacity:'toggle'}, 500);
	});
});
$(document).ready(()=>{
	$(".postLink").click((e)=>{
		$("#content").load($(e.target).attr("post"));
	});
	$("#back").click(()=>{
		$("#content").load("blog.html #content");
	});
});
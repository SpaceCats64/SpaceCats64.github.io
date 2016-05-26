var index = 0;
var imgList = ["http://puu.sh/llWhI/bb34af74fc.png", "http://puu.sh/llWdT/8fe6eeefa9.png", "http://puu.sh/l1cnC/9570ede389.png", 
 "http://puu.sh/kIeP1/8c6af8c7f8.jpg"];
 $(document).ready(() => {
 	$("#bpTex").toggle();

	$('#slideshow').click(()=>{
		$('#slideshow').fadeOut(600, () => {
			index += 1;
			if (index == imgList.length) {
				index = 0;
			}
			$('#slideshow').attr('src', imgList[index]).fadeIn(600);
		});
	});

	$("#bigposts").click(()=>{
		$("#bpTex").toggle(300);
	});

	getLatestVideo();

	function getLatestVideo(){
		$.get(
			"https://www.googleapis.com/youtube/v3/channels", {
				part: 'contentDetails',
				id: 'UCzaQEP2Se2L0Tx5O0UyZdUg',
				key: 'AIzaSyDHhN8ZabTXdziXf_NjZQD00N8bDDFgSEY'},
				(data) =>{
					$.each(data.items, (i, item) => {
						p = item.contentDetails.relatedPlaylists.uploads;
						return getVid(p);
					});
				}
		);
	};

	function getVid (pl) {
		$.get(
			"https://www.googleapis.com/youtube/v3/playlistItems", {
			part: 'snippet',
			maxResults: 1,
			playlistId: pl,
			key: 'AIzaSyDHhN8ZabTXdziXf_NjZQD00N8bDDFgSEY'},
			(data) =>{
				$.each(data.items, (i, item) => {
					$('#lVideo').attr('src', "https://www.youtube.com/embed/" + item.snippet.resourceId.videoId);
				});
			}
		);
	};
});

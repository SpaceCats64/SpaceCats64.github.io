var index = 0;
var imgList = ["http://puu.sh/llWhI/bb34af74fc.png", "http://puu.sh/llWdT/8fe6eeefa9.png", "http://puu.sh/l1cnC/9570ede389.png", 
 "http://puu.sh/kIeP1/8c6af8c7f8.jpg"];
var srcSet = function(){
	if(index <= imgList.length - 1){
		document.getElementById('slideshow').src = imgList[index+1];
		index += 1;
	}
	if(index == imgList.length){
		document.getElementById('slideshow').src = imgList[0];
		index = 0;
	}
}
//document.getElementById("Slsleft").addEventListener("click", srcSet());
//document.getElementById("Slsright").addEventListener("click", srcSet());
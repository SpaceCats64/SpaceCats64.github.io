function toggleCss(inSubfolder){
    if(!inSubfolder){
        if (document.getElementById("css").getAttribute('href') == "styles/blog.css") {
            document.getElementById("css").setAttribute('href', "styles/blogNight.css");
        }
        else {
            document.getElementById("css").setAttribute('href', "styles/blog.css");
        }
    }
    else{
        if (document.getElementById("css").getAttribute('href') == "../styles/blog.css") {
            document.getElementById("css").setAttribute('href', "../styles/blogNight.css");
        }
        else {
            document.getElementById("css").setAttribute('href', "../styles/blog.css");
        }
    }
}
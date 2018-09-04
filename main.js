$.ajax({url:"https://github.com/SpaceCats64", crossDomain: true, type:"GET"}).done(function(res){
    $(res.responseText).find('.pinned-repo-item-content').each((index, repo)=>{
        repoName = $(repo).find(".repo").first().text();
        repoDesc = $(repo).find(".pinned-repo-desc").first().text();
        //this is a terrible hack. oh well
        repoData = $(repo).find(".mb-0").first().text().trim().match(/([^\s]+)/g);
        $("#pinnedRepos").append('<div class="mdl-grid-cell mdl-cell--3-col"><div class="mdl-card mdl-shadow--3dp projectCard"><h3><a style="color: rgba(0,0,0,.87);" href="https://github.com/SpaceCats64/' + repoName + '">'+repoName+'</a></h3><hr><p>'+repoDesc+'<br>Language: '+repoData[0]+'<span style="margin-left: 5%">Stars: '+(repoData[1] == undefined ? 0 : repoData[1])+'</span></p></div></div>');
    });
}).fail(function(){
    $("#pinnedRepos").append('<div class="mdl-grid-cell mdl-cell--3-col"><div class="mdl-card mdl-shadow--3dp projectCard"><h3>Error Loading Pinned Repositories, try reloading...</h3></div>);
});

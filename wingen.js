let iconSet = 1;

let preveiw = function(icoUrl, winColor, index){
	this.icon = icoUrl;
	this.color = winColor;
	this.index = index;
}

let wins = [new preveiw('http://i.imgur.com/zm9l6aq.png', '#65c1e0', 1), new preveiw('http://i.imgur.com/zHgzEsn.png', 'orange', 2), 
new preveiw('http://i.imgur.com/UT6NqKv.png', 'green', 3), new preveiw('http://i.imgur.com/63euRUe.png', 'purple', 4),
new preveiw('http://i.imgur.com/Q105NxU.png', 'blue', 17)];

let colors = ['#39FF14', 'red', 'orange', 'black', 'blue', 'lightblue', 'yellow', 'white'];

let updatePreview = (win, textColor)=>{
	$('#msgVeiw').css('background-color', win.color);
	$('#icon').attr('src', win.icon);
	$('#msgVeiw').css('color', colors[textColor]);
	iconSet = win.index
}

let propCheck = (bool, tex)=>{
	return (bool ? tex:"")
}

let getText = (fCsv, tCol, tex, line)=>{
	return ( !fCsv ? '<COLOR>('+(tCol+1)+')<SAY>'+tex :"<SPEAK>("+line+")")
}

let genCases = (input)=>{
	cases = input.split("/");
	choice = "<CHOICE>";
	for (var i = 0; i < cases.length; i++) {
		choice += ("'"+cases[i]+"'");
	}
	choice += ("<LISTEND>\n");
	for(var i = 0; i < cases.length; i++){
		choice += ("<CASE>'"+cases[i]+"'\n");
	}
	return choice;
}

$(document).ready(()=>{
	$('#betaFeatures').hide();
	$('#srcCsv').hide();
	$("#showBeta").click(()=>{
		$('#betaFeatures').toggle(150);
	});
	$("#fromCsv").click(()=>{
		$('#srcSay').toggle(150);
		$('#srcCsv').toggle(150);
	});
	$("#genSwitch").click(()=>{
		$("#msgTag").val(genCases($('#cases').val()));
	});
	$("#gen").click(()=>{
		winPos = $('#winPos').prop('selectedIndex');
		winColor = $('#winColor').prop('selectedIndex');
		textColor = $('#textColor').prop('selectedIndex');
		wait = $('#wait').prop('checked');
		text = $('#pText').val();
		csvLine = $('#csvLine').val();
		$("#msgVeiw").slideToggle(300);
		setTimeout(()=>{
			updatePreview(wins[winColor], textColor);
			$("#sample").text(text);
			$("#msgVeiw").slideToggle(300);
			$("#msgTag").val(propCheck($('#lock').prop('checked'), "<LUIGISTOP>\n") + 
			'<WINDOW>('+winPos+')<COLOR>('+iconSet+')\n'+ getText($('#fromCsv').prop('checked'), textColor, text, csvLine) +
			'\n'+propCheck(wait, "<ANYKEY>\n")+'<CLOSEWINDOW>'+propCheck($('#lock').prop('checked'), "\n<LUIGIFREE>"));
		}, 300);
	});
});
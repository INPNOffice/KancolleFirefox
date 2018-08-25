var gf = document.getElementById("game_frame");
if(gf !== null){
	gf.allowFullscreen = true;
}
htmlWrap();

function htmlWrap(){
	var hW = document.getElementById("htmlWrap");
	switch(true){
		case hW != null:
			hW.allowFullscreen = true;
			break;
		case document.getElementById("flashWrap") != null:
			setTimeout(htmlWrap, 500);
			break;
		default:
			break;
	}
}
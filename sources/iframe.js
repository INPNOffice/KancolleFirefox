var gf = document.getElementById("game_frame");
if(gf !== null){
	gf.allowFullscreen = true;
	console.log("フレーム1準備完了");
}
htmlWrap();

function htmlWrap(){
	var hW = document.getElementById("htmlWrap");
	switch(true){
		case hW != null:
			hW.allowFullscreen = true;
			console.log("フレーム2準備完了");
			break;
		case document.getElementById("flashWrap") != null:
			setTimeout(htmlWrap, 500);
			break;
		default:
			break;
	}
}
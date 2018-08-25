var bod = document.getElementsByTagName("body")[0];
var cvs = new ARatio(document.getElementsByTagName("canvas")[0]);
var defltcvs = cvs.dObject.style;
var tofs = function(){
	console.log("クリックを捕捉");
	bod.mozRequestFullScreen();
	document.addEventListener(
		"mozfullscreenchange",
		function(){
			bod.removeEventListener("click", tofs);
			console.log("clickイベントリスナを削除");
			var fbody = new ARatio(bod);
			console.log(bod.clientWidth, bod.clientHeight);
			var c = fbody.comp(cvs);
			console.log(c);
			cvs.dObject.style[c.ftgt]="100%";
			cvs.dObject.style[c.fths]="";
			document.addEventListener("mozfullscreenchange", exit);
		},
		{
			"capture":false,
			"once":true
		}
	);
};
var exit = function(){
	cvs.dObject.style = defltcvs;
	document.removeEventListener("mozfullscreenchange", exit);
	bod.addEventListener("click", tofs);
	console.log("もどした");
};
bod.addEventListener("click", tofs);
console.log("キャンバス準備完了");
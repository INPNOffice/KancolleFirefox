var bod = document.getElementsByTagName("body")[0];
var cvs = new ARatio(document.getElementsByTagName("canvas")[0]);
console.log(cvs);
var defltcvs = cvs.dObject.style;
var tofs = function(){
	cvs.dObject.removeEventListener("click", exit);
	bod.mozRequestFullScreen();
	setTimeout(function(){
		var fbody = new ARatio(bod);
		console.log(bod.clientWidth, bod.clientHeight);
		var c = fbody.comp(cvs);
		console.log(c);
		cvs.dObject.style[c.ftgt]="100%";
		cvs.dObject.style[c.fths]="";
		document.addEventListener("fullscreenchange", exit);
	}, 2000);
};
var exit = function(){
	cvs.dObject.style = defltcvs;
	document.removeEventListener("fullscreenchange", exit);
	cvs.dObject.addEventListener("click", tofs);
};
cvs.dObject.addEventListener("click", tofs);

var RotateForSP = function(event){
	alert(event.beta);
};
//スマホの画面回転対応
window.addEventListener("deviceorientation", RotateForSP);
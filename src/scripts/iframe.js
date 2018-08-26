htmlWrap();
game_frame();

function game_frame() {
  var gf = document.getElementById("game_frame");
  switch (true) {
    case gf != null:
      gf.allowFullscreen = true;
      console.log("フレーム1準備完了");
      break;
    case document.getElementById("area-game") != null:
      setTimeout(game_frame, 500);
      console.log("フレーム1準備中");
      break;
    default:
      break;
  }
}

function htmlWrap() {
  var hW = document.getElementById("htmlWrap");
  switch (true) {
    case hW != null:
      hW.allowFullscreen = true;
      console.log("フレーム2準備完了");
      break;
    case document.getElementById("flashWrap") != null:
      setTimeout(htmlWrap, 500);
      console.log("フレーム2準備中");
      break;
    default:
      break;
  }
}
console.log("hogehoge");

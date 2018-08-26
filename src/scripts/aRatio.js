function ARatio(wd, h) {
  this.dObject = null;
  switch (true) {
    case typeof wd == "number" && typeof h == "number":
      this.w = wd;
      this.h = h;
      break;
    case typeof wd == "object":
      this.dObject = wd;
      this.w = wd.clientWidth;
      this.h = wd.clientHeight;
      break;
    default:
      return {
        message: {
          subject: "error",
          description: "Not enough param or Incorrect param."
        }
      };
  }
  this.type = "AsRaObject";
  this.description = "AspectRatioObject";
  this.wph = this.w / this.h;
  this.hpw = this.h / this.w;
  this.comp = function(tgt) {
    var res = {
      message: {
        subject: "success",
        description: "Comparing was success."
      }
    };
    switch (true) {
      case this.wph > tgt.wph: //thisが横長,tgtが縦長
        res.vr = tgt;
        res.hl = this;
        res.fths = "width";
        res.ftgt = "height";
        break;
      case tgt.wph > this.wph: //thisが縦長,tgtが横長
        res.vr = this;
        res.hl = tgt;
        res.fths = "height";
        res.ftgt = "width";
        break;
      case (tgt.wph = this.wph): //同じ
        res.vr = this;
        res.hl = tgt;
        res.fths = "height";
        res.ftgt = "width";
        res.message = {
          subject: "warn",
          description: "2 Objects are same size."
        };
        break;
      default:
        return {
          message: {
            subject: "error",
            description: "Only AsRaObjects can be compared."
          }
        };
    }
    return res;
  };
}
console.log(
  "%caRatio.js%c was loaded.",
  "color:red; font-size:x-large;",
  "color:#cccccc; vertical-align:bottom;"
);

module.exports = {
  ARatio
};

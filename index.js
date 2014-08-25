var butt = require('butts')
var gm = require('gm')

module.exports = function(buf, cb) {

  butt(function(bottom) {
    var width = 0
    var height = 0
    var x = 0
    var y = 0
    var fontSize;

    gm(buf).size(function(err, size) {
      if (err) {
        cb(err)
      }
      width = size.width
      height = size.width
      fontSize = Math.floor(width / 10)
      x = Math.floor(width / 6)
      y = Math.floor(width / 4)
      var gstring = bottom.toString().replace(' ', '\ ');
      this.fontSize(fontSize).drawText(x, y, gstring).toBuffer(function(err, buttified) {
        if (err) {
          cb(err)
        }
        cb (null, buttified)
      })
    })
  })
}
